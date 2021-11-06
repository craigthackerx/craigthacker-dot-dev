---
layout: post
title: Part 1 - Creating a DevOps Environment
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

I am storing all my source for this on my GitHub, in the

___

## Vagrant

Vagrant is (another) great tool by HashiCorp, it essentially allows you to produce a local development environment in a simple Infrastructure as Code style using a Ruby syntax.  Local development is not something I am doing alot of these days, I would say I am more in the Part 3 of this series camp, where I have an environment I can test deployments to in Azure, but nonetheless, if you are developing locally, then Vagrant might be the answer you are looking for.

I have had some Vagrant images posted in the past when I did do more local development, which are Ubuntu 18.04 and quite out of date now, so for this series, I want to try and a more up to date one.

I have split this into 2 parts:

- The Base Image - This is the image taken from the [Vagrant Cloud](https://app.vagrantup.com/).
- The Custom Image - An Image I am going to iterate over for my own use.

And for this, I am going to use **Debian 11**.  Why?  I had originally considered RedHat due to the new subscription model, and this is what many of us Linux users are using in Production anyway, but I didn't know the legality of using RHEL images on the Vagrant Cloud, and wanted something completely free.  Why not Fedora, RockyLinux or AlmaLinux? Mainly because I want to pickup something which _could_ go into production, so if not RHEL, then the Debian/Ubuntu family is the next logical step for most veterans.

### Step 1 - Picking my base image

For me, this was straight forward, I went on [Vagrant Cloud](https://app.vagrantup.com/). and searched for Debain 11