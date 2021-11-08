---
layout: post
title: Part 1 - Creating a DevOps Environment - VM using Vagrant
subtitle: But it works on my machine!
permalink: /blog/dev-env-p1
---

One thing that can be a huge pain when working in modern IT is the need for a developer '_space_'.  It is a constant struggle between the release of newer and greater products, and the need for engineers to make these product's production ready.  I have (and I wish I was kidding) seen job postings which require 10 years Ansible experience for highly sensitive government projects that required large amounts of experience as an essential criteria. [Ansible was released in 2012](https://en.wikipedia.org/wiki/Ansible_(software)) and I am writing this post in 2021...But, I digress.  

A question that I often get in my career is "Can you show me how you did that?".  I wish it was as easy as saying "sure click these 2 buttons a voilà!", but, it's not. More than once have I had the "this doesn't work for me, its bugged." only to run it through my own debugger and see it works exactly as I intended - "It's not a bug, it's a feature" is a common phrase in these types of situations.

I often do my best to do a "documentation script" and fill in the `README.md` as I go - which is, writing down every command I do when setting something up for the first time and then documenting any strange outputs, followed by running that script to see if I can produce the same result on a fresh machine. It is prone to human error as you can imagine. Tools like Ansible, mentioned prior, have made these type of tasks redundant, but when you are doing something bespoke for a customer, I highly doubt you will find an Ansible module for it! Sure you can write your own, but where? how much does that cost? what is the level assurance you can provide that it will work in production?

[Infrastructure as Code (IaC)](https://en.wikipedia.org/wiki/Infrastructure_as_code) and the invention of [Docker](https://en.wikipedia.org/wiki/Docker_(software)) have helped mitigate these problems (as well as Ansible!), but how many of us are even using these products day-to-day?, And in our development environment?  "_IaC is for production immutability!_" you may be shouting as you sharpen your pitchforks and light your pyres.  "No it's not" is my response.  There are several infrastructure as code tools you can use to give yourself that immutable infrastructure in development, free of charge and it can be very quick, when shown how to get setup.

Linus Torvald's once said:
> Talk is cheap, show me the code.

and this series of posts is dedicated to that, for people who want to get setup in a development environment and begin DevOps best practices locally, and begin providing some continuity in your development.  If it works in dev, its more likely to work in prod after all right?...right?

Anyway, there are far too many products to cover in 1 blog, and everyone's workflow can be completely different, which makes this very hard topic for someone to tell you what is best and how to do things securely for your environment, so my hopes for these blogs are to cover the following:

- Part 1 - Making a DevOps VM using [Vagrant](https://www.vagrantup.com/)
- Part 2 - Making a DevOps Container using [Podman](https://podman.io/)
- Part 3 - Making a DevOps environment in Azure using [Terraform](https://www.terraform.io/)
- Part 4 - Building your own Self-Hosted Azure DevOps agent using [Podman](https://podman.io/)
- Part 5 - Hosting your Azure DevOps agent in Azure using [Azure Container Instances](https://azure.microsoft.com/en-gb/services/container-instances/#overview)

<p align="center">
    <img src="/assets/memes/meme7.jpg">
</p>

It will be up to reader to improve and iterate on this to meet your own demands, this article aims to inspire, not to solve your production code issues! And for every product someone likes (I like all the above, of course), there are 3 more which someone will discredit the others citing superiority. But as I said, this blog's goal is to inspire, so please put the pitchforks down!

FYI, I am storing all my source for this on my GitHub, in the [Devops Environment](https://github.com/craigthackerx/devops-environment) repo. I am purposely going to emmit full lines of code from this article and link the repository where appropriate, posting anything outside a couple of lines always does irritate me on blogs, especially when I want to copy and paste some of it! 

___

## My environment

Right now, I am running this lab on my Desktop which is running Windows 10 latest.  Most of these tools are cross-platform or will run hapily in Windows Subsystem for Linux or a VM, so it makes sense I pick the one with the most firepower to save me time.  My laptop will feature in later which is running Pop_OS! latest

## Vagrant

Vagrant is (another) great tool by HashiCorp, it essentially allows you to produce a local development environment in a simple Infrastructure as Code style using 
Ruby syntax.  Local development (as in, physically on the device I am typing on) is not something I am doing a lot of these days, I would say I am more in the Part 3 of this series camp, where I have an environment I can test deployments to in Azure, but nonetheless, if you are developing locally for whatever reason, then Vagrant might be the answer you are looking for.

I have had some Vagrant images posted in the past when I did do more local development, which are Ubuntu 18.04 and quite out of date now, so for this series, I want to try and a more up to date one.

I have split this into 2 parts:

- The Base Image - This is the image taken from the [Vagrant Cloud](https://app.vagrantup.com/).
- The Custom Image - An Image I am going to iterate over for my own use.

And for this, I am going to use **Debian 11**.  Why?  I had originally considered RedHat due to the new subscription model, and this is what many of us Linux users are using in Production anyway, but I didn't know the legality of using RHEL images on the Vagrant Cloud, and wanted something completely free.  Why not Fedora, RockyLinux or AlmaLinux? Mainly because I want to pickup something which _could_ go into production for someone, so if not RHEL, then the Debian/Ubuntu family is the next logical step for most veterans. So I'll put my [Justin Bieber Linux](http://biebian.sourceforge.net/) away for another day. 

Another point to use Debian is the inclusion of Podman into the upstream repositories, where I will reuse my base image later for demonstrative purposes.

### Vagrant Quick Install and Initial Prep
As I said, I am currently running this on my Windows desktop - and I already had [Chocolatey](https://chocolatey.org/install) installed, so installing vagrant and virtualbox was as easy as:

```powershell
choco install vagrant virtualbox -y
```

One other quick thing to prep was installing the VBguest plugin to vagrant:

```powershell
vagrant plugin install vagrant-vbguest ; vagrant plugin install vagrant-disksize
```

### Step 1 - Picking my base image

For me, this was straight forward, I went on [Vagrant Cloud](https://app.vagrantup.com/). and searched for Debian 11'

<p align="center">
    <img src="/assets/img/vagrant-debian11.png">
</p>

Next, I prepared a trusty [Vagrantfile](https://github.com/craigthackerx/devops-environment/blob/main/VMs/vagrant-devops-image/Debian11/Vagrantfile):

```ruby
# -*- mode: ruby -*-
# vi: set ft=ruby :
Vagrant.configure("2") do |config|
  config.vm.box = "debian/bullseye64"
  config.vm.hostname = "debian-11-base"
  config.vbguest.auto_update = false
  config.disksize.size = '50GB'

  config.vm.provider "virtualbox" do |v|
    v.cpus = "2"
    v.memory = "4096"
    v.name = "devops-vm"
  end

#Check the repo for the full version!
```

And ran `vagrant up`:

<p align="center">
    <img src="/assets/img/vagrant-up.png">
</p>

And then waiting some time for the scripts to run...

Finally, I am given my now complete VM in VirtualBox ready to log in.

I can log in either VirtualBox "Show"/console or I can run `vagrant ssh` to automatically connect.

As per the spec and `Vagrantfile`, the default user is `vagrant` and the password is `vagrant`.

### Step 2 - Uploading my Custom Image to Vagrant Cloud to be used on my other development areas

Finally, I need to package my box. I can do this by [following the documentation](https://www.vagrantup.com/docs/providers/virtualbox/boxes) and running:

```powershell
vagrant package --base devops-vm
```

<p align="center">
    <img src="/assets/img/vagrant-package.png">
</p>

After this is complete, I am finally ready to upload my box to the vagrant cloud!  I now need to take a SHA256 sum of my "package.box" file which was created with the last command:

```bash
sha256sum package.box
f2702062e452accc50a6989657488c2031c2ade55893709f37d99e3a1149ff9d *package.box
```

And then create a new box on the vagrant cloud, set my version, upload my checksum and upload the package.box file:


After my upload is complete, my box is published and ready for use!

## Validation

For this final part, I am going to pull my box down on my Pop_OS! laptop, just to demonstrate how the use of multiple providers always me to create a nice easy consistent environment between all my machines and focus on my development.

I already have vagrant setup, but check out the HashiCorp documentation and the VirtualBox documentation on setting up on your Linux distro if you are interested.

I cloned my own repo, change to the custom image directory and ran vagrant up with the new [Vagrantfile](https://github.com/craigthackerx/devops-environment/blob/main/VMs/example-custom-image/Vagrantfile):

```bash
git clone git@github.com:craigthackerx/devops-environment.git && \
cd devops-environment/VMs/example-custom-image && \
vagrant up
```

After some time downloading (again)...

<p align="center">
    <img src="/assets/img/vagrant-download.png">
</p>

My VM is alive again, but now on my laptop!  This is a great way if you have multiple developers running virtual machines in a primarily Windows world.

<p align="center">
    <img src="/assets/img/vagrant-vm-alive-again.png">
</p>


**Stay tuned for the next parts of this series and other parts of my blog!**

<br/>

<p align="center">
    <img src="/assets/memes/meme10.jpg">
</p>
