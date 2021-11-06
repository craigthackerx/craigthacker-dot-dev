---
layout: post
title: Part 1 - Creating a DevOps Environment
subtitle: But it works on my machine!
permalink: /blog/dev-env-p1
---

One thing that can be a huge pain when working in modern IT is the need for a developer space.  It is a constant struggle between the release of newer and greater products, and the need for engineers to make this production ready.

A question that I often get in my career is "Can you show me how you did that?".  I wish it was as easy as saying "sure click these 2 buttons a voilà!", but, it is not.

[Infrastructure as Code (IaC)](https://en.wikipedia.org/wiki/Infrastructure_as_code) and the invention of [Docker](https://en.wikipedia.org/wiki/Docker_(software)) have helped mitigate this problems, but how many of us are even using these products day-to-day?  This series of posts is dedicated to people who want to get setup and begin actually doing their jobs.

There are far too many products to cover in 1 blog, and everyone's workflow is difficult which makes this very hard for someone to tell you what is best and how to do things securely, so my hopes for these blogs are to cover the following:

- Part 1 - Making a DevOps VM using [Vagrant](https://www.vagrantup.com/)
- Part 2 - Making a DevOps Container using [Podman](https://podman.io/)
- Part 3 - Making a DevOps environment in Azure using [Terraform](https://www.terraform.io/)
- Part 4 - Building your own Self-Hosted Azure DevOps agent using [Podman](https://podman.io/)
- Part 5 - Hosting your Azure DevOps agent in Azure using [Azure Container Instances](https://azure.microsoft.com/en-gb/services/container-instances/#overview)

<p align="center" width="100%">
    <img width="33%" src="/assets/memes/meme7.jpg">
</p>