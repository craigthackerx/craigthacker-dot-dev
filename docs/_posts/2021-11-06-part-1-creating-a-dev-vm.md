---
layout: post
title: Part 1 - Creating a DevOps Environment - VM using Vagrant
subtitle: But it works on my machine!
permalink: /blog/dev-env-p1
---

One thing that can be a huge pain when working in modern IT is the need for a developer space.  It is a constant struggle between the release of newer and greater products, and the need for engineers to make these products production ready.  I have (and I wish I was kidding) seen job postings which require 10 years Ansible experience. [Ansible was released in 2012](https://en.wikipedia.org/wiki/Ansible_(software)) and I am writing this post in 2021...But, I digress.  

A question that I often get in my career is "Can you show me how you did that?".  I wish it was as easy as saying "sure click these 2 buttons a voilà!", but, it is not. I often do my best to do a "documentation script" - which is write down every command I do when setting something up for the first time, then running that script to see if I can produce the same result on a fresh machine.  Tools like Ansible mentioned prior have made these type of tasks redundant, but when you are doing something bespoke for a customer, I highly doubt you will find an Ansible module for it!

[Infrastructure as Code (IaC)](https://en.wikipedia.org/wiki/Infrastructure_as_code) and the invention of [Docker](https://en.wikipedia.org/wiki/Docker_(software)) have helped mitigate these problems as well as Ansible, but how many of us are even using these products day-to-day?  Linus Torvald's once said "Talk is cheap, show me the code!" and this series of posts is dedicated to that, for people who want to get setup in a development environment and begin actually doing their jobs.

There are far too many products to cover in 1 blog, and everyone's workflow is difficult which makes this very hard for someone to tell you what is best and how to do things securely, so my hopes for these blogs are to cover the following:

- Part 1 - Making a DevOps VM using [Vagrant](https://www.vagrantup.com/)
- Part 2 - Making a DevOps Container using [Podman](https://podman.io/)
- Part 3 - Making a DevOps environment in Azure using [Terraform](https://www.terraform.io/)
- Part 4 - Building your own Self-Hosted Azure DevOps agent using [Podman](https://podman.io/)
- Part 5 - Hosting your Azure DevOps agent in Azure using [Azure Container Instances](https://azure.microsoft.com/en-gb/services/container-instances/#overview)

<p align="center">
    <img src="/assets/memes/meme7.jpg">
</p>

I am storing all my source for this on my GitHub, in the nwq [Devops Environment](https://github.com/craigthackerx/devops-environment) repo.

___

## My environment

Right now, I am running this lab on my Desktop which is running Windows 10 latest.  These tools are all cross-platform, so it makes sense I pick the one with the most firepower to save me time.  My laptop may feature in later which is running Pop_OS! latest

## Vagrant

Vagrant is (another) great tool by HashiCorp, it essentially allows you to produce a local development environment in a simple Infrastructure as Code style using a Ruby syntax.  Local development is not something I am doing alot of these days, I would say I am more in the Part 3 of this series camp, where I have an environment I can test deployments to in Azure, but nonetheless, if you are developing locally, then Vagrant might be the answer you are looking for.

I have had some Vagrant images posted in the past when I did do more local development, which are Ubuntu 18.04 and quite out of date now, so for this series, I want to try and a more up to date one.

I have split this into 2 parts:

- The Base Image - This is the image taken from the [Vagrant Cloud](https://app.vagrantup.com/).
- The Custom Image - An Image I am going to iterate over for my own use.

And for this, I am going to use **Debian 11**.  Why?  I had originally considered RedHat due to the new subscription model, and this is what many of us Linux users are using in Production anyway, but I didn't know the legality of using RHEL images on the Vagrant Cloud, and wanted something completely free.  Why not Fedora, RockyLinux or AlmaLinux? Mainly because I want to pickup something which _could_ go into production, so if not RHEL, then the Debian/Ubuntu family is the next logical step for most veterans.

Another point to use Debian is the inclusion of Podman into the upstream repositories, where I will reuse my base image later for demonstrative purposes.

### Vagrant Quick Install and Initial Prep
As I said, I am currently running this on my Windows desktop - and I already had [Chocolatey](https://chocolatey.org/install) installed, so installing vagrant and virtualbox was as easy as:

```powershell
choco install vagrant virtualbox
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

Finally, I am given my now complete VM in VirtualBox ready to login.

I can login either VirtualBox "Show"/console or I can run `vagrant ssh` to automatically connect.

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


<p align="center">
    <img src="/assets/memes/meme10.jpg">
</p>
