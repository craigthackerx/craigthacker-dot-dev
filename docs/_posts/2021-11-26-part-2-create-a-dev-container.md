---
layout: post
title: Part 1 - Creating a DevOps Environment - Container using Podman
subtitle: But it works on my machine!
permalink: /blog/dev-env-p2
---

## Before we start

Before we start, you should check out [Part 1](https://craigthacker.dev/blog/dev-env-p1) of this series.  They can be tackled separately, but I plan to make use of the Vagrant VM from the last one to build podman containers in Debian.  You can choose to ignore this and dive straight into the meet.


# So what is Podman?

You have heard of Docker, right?  Well if you haven't, as per [Wikipedia - Docker](https://en.wikipedia.org/wiki/Docker_(software)):

> Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels. Because all of the containers share the services of a single operating system kernel, they use fewer resources than virtual machines.

Okay great! So that information is about as useful as a chocolate teapot - I know, but, if I was to give a TL;DR of what I think Docker is - **it is a way to ensure your application runs exactly as you intend it, on any machine running Docker**.  This may not be completely true as there are niche scenarios where docker versions and network connectivity can certainly cause issues with this, but, as a whole, I'd say its mostly true.  I could talk for literal days about the interactions of Docker, [Kubernetes](https://en.wikipedia.org/wiki/Kubernetes), [OpenShift](https://en.wikipedia.org/wiki/OpenShift), [OCI](https://en.wikipedia.org/wiki/Open_Container_Initiative), [CRI-O](https://wiki.archlinux.org/title/CRI-O), [LXC/LXD](https://en.wikipedia.org/wiki/LXC), [Chroot Jails](https://en.wikipedia.org/wiki/Chroot) and many other [Containerization](https://en.wikipedia.org/wiki/Containerization_(computing)) topics forever, so please check the links if you have a burning passion to understand all of these, but the one I want to specifically cover is RedHat's offering - [Podman](https://wiki.archlinux.org/title/Podman)

Podman is an alterative to docker but provides rootless containers out of the box as well as shipping a daemonless container.  Again, I could talk for literal days over why this is so great, but the general idea is you get everything docker gives you, with great support for Kubernetes and OpenShift right out the box, on top of it being a potential security posture increase and is available on many of the popular distro's upstream.

### Before the good bit - The awkward conversation - Containers are Linux

I am potentially hurting my future employment by publicly voicing my opinion on this subject, but I am making reference of another great blog post by Joe Fernandes on the OpenShift/RedHat blogs - [Containers are Linux](https://www.redhat.com/en/blog/containers-are-linux) - I **really** recommend anyone who branches into containers to read up on literature like this and try to understand the landscape, but I want to give my opinion based on experience.

When I talk about containers, I am almost *always* assuming you are using Linux in those containers. [MacOS Containers](https://github.com/sickcodes/Docker-OSX) and by extension UNIX containers (due to Mac being a descendant of original UNIX) and I think these could also work due to the similarity, but [MacOS license insists that a user only run MacOS on Apple hardware](https://www.apple.com/legal/sla/docs/OSX1011.pdf), so I would advise against going against these terms, and other UNIX OS's are only niche preferred in comparison to Linux in the modern era.  That leaves us two players then, Linux and Windows.

**Windows containers are *currently* not as good as their Linux counter-parts** and in my opinion - this is because of the speed and lightweight of a container in Windows vs. Linux - something which will likely be figured out in time. For Containers in Windows you require [Hyper-V to be enabled](https://docs.microsoft.com/en-us/virtualization/windowscontainers/quick-start/set-up-environment?tabs=Windows-Server) to provide kernel isolation within container guests.  When we introduce any form of virtualization in all of computing, we introduce something known as a [consolidation ratio](https://en.wikipedia.org/wiki/Consolidation_ratio#:~:text=In%20Internet%20hosting%2C%20the%20consolidation,performance%20slows%20to%20a%20crawl.) which is essentially a term used to describe how many virtual guests you can run on a host before you see a performance decrease.  It's worth noting that the ratio is normally acceptable to be able to meet a cost demand, could you image how much your CapEx would be to run 100000 1cpu, 1GB, bare mental machines?  

Anyway, back to my point, due to a isolation which brings a speed decrease, which with Linux, no virtualization is required - we also have a "bloat" category with Windows.  Now, no offence to Microsoft, but Windows is full of stuff admins don't need, the default size of a Windows Server container is [3.1GB](https://docs.microsoft.com/en-us/virtualization/windowscontainers/manage-containers/container-base-images), where as Alpine Linux (probably amongst the most popular Linux container OSes), can be a mere [8MB](https://en.wikipedia.org/wiki/Alpine_Linux#:~:text=It%20allows%20very%20small%20Linux,might%20be%20around%20130%20MB.) in size.  You can imagine just on download speed, replication and storage alone, you start seeing problems running Windows containers versus Linux, especially considering most application stacks - including [Microsoft .NET Core, is now cross platform](https://docs.microsoft.com/en-us/archive/msdn-magazine/2016/april/net-core-net-goes-cross-platform-with-net-core), giving you good reason to give your .NET Core app in Linux a try.

My experience using Windows containers has not been good, and as I say, in time, maybe they will become prevalent. Hell, even RedHat, who wrote my original cited article have added functionality to have a [Windows nodes in OpenShift as of Sept. 2021](https://cloud.redhat.com/blog/announcing-bring-your-own-host-support-for-windows-nodes-to-red-hat-openshift).  But for now, I would advise to avoid them unless you *really reallyS* need them. 

So for this article, I won't be giving anymore discussion about Windows vs Linux containers, and Linux containers is going to be the general direction and preference for my article.

## Let's begin - Building our Pods

As said earlier, I'm going to use my VM I provisioned with Vagrant to install, but you can start by using any Podman compatible OS.

For this particular part, I am not going to pretend we are building a production grade container for your app that is ready to be launched into vanilla Kubernetes - this is just to give an example of how you can build your own bespoke dev environment with some nice lessons learned. So here is what I want:

- Install some of my tools, Ansible, Terraform, Python etc
- Have a GUI with X11 sever
- Build using a docker-compose.yml equivalent, `podman-compose` - [which seems to be fully in development by RedHat now rather being community only](https://github.com/containers/podman-compose)
- Push my container to my Docker Hub

So, after a `vagrant up` and a `vagrant ssh`, I have my Linux VM with Podman already installed.

**But, I do not have podman-compose installed**, so what I need to do is install it and add my local python binaries to my path:

```
pip3 install --user podman-compose
```

This lovely one liner is a great one to have in your memory, I copied it off [Stackoverflow from a user called Chaos](https://unix.stackexchange.com/questions/217622/add-path-to-path-if-not-already-in-path) when I was at university many years ago and I've been using it here or there ever since:

```
[[ ":$PATH:" != *":$HOME/.local/bin:"* ]] && PATH="$HOME/.local/bin:${PATH}"
```

Basically, it checks your path if the directory you want to add exists, if it doesn't, then it will add it.  So really handy when you are doing installs and want some good logic produce when you get an `exit 0`.  P.S, copying and pasting from Stackoverflow is rarely a good idea, but I am one to believe that it takes one person to Google something and another person to know what to Google, and in tech we are all [Standing on the shoulders of giants](https://en.wikipedia.org/wiki/Standing_on_the_shoulders_of_giants), so I pass this piece of code from Chaos on to you for you to use and tweak :laughing:

Anyway, I am going to clone my own repo:

```
git clone https://github.com/craigthackerx/devops-environment.git
```

And I already have a `Dockerfile` (or a `Containerfile` in the non-docker world :wink:) to build a container.  So for consistency, my Dockerfile is going to be Debian latest, like-for-like with my host.  It makes no real difference if you want to use RedHat as your container on a debian host, but I'd rather not mix-and-match for the purpose of clarity.   Make sure you check our the full file [in the repo](https://github.com/craigthackerx/devops-environment/tree/main/Containers/base-image/Debian11/Dockerfile).

So since I haven't fully finished my Dockerfile at the time of writing, I am going to be using `podman build` before I use `podman-compose` etc.

