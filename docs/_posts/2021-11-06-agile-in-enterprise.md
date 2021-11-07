---
layout: post
title: Agile in Enterprise - An Engineer's perspective
subtitle: What is your forecast for today?
permalink: /blog/agile-in-enterprise
---

## Introduction

Agile in a tech company workplace is huge.  I had recently watched [BDD Is Not About Testing](https://www.youtube.com/watch?v=6nSwRSbc27g) by Dan North as well as doing some amazing online training from [Alan Kelly](https://www.allankelly.net/) on Agile (big thanks to DH for setting my up with it!)

I am by no means an expert in Agile, SCRUM or any of the various iterations and frameworks available. I have studied it at university and have practiced it in my own career for several years, but I seek advice and training from those who know better to skill myself up for a reason.

This has got me thinking about how it is perceived by the engineers and the techies of an organisation.  Generally speaking, Agile is something facilitated by a Project Manager or a more trendy "SCRUM master". From my observations and own opinion, sometimes, engineers see it as a waste of time, It's something for someone else to feel purposeful, when they are not able to add to a project technically and to give a feeling of "control". And in other times, it provides great business value, it helps projects get delivered on time, allow problems to be unblocked and keep a streamline of work between a team.

I find that it can be a poor understanding of what Agile is and what the project managers role is on its effectiveness for an organisation and my general opinion is - **Agile is for everyone**.

So what do I mean by that? I am not by any stretch telling someone who works in funeral home that they should start having a daily stand-up and generating user stories for work that day (but hey, if they try it and it works, all power to them!), but what I mean is in the tech industry atleast, aspects of Agile (and by extension, SCRUM) will add value to every team.

**But**, it requires that a team adopts it.  I believe it is _known_ to work, which means when adopted correctly, generally, teams will be able to achieve greater velocity and provide greater business values, and as an engineer when you strip it completely back, isn't that what I am being paid to do?

<p align="center">
    <img src="/assets/memes/meme9.jpg">
</p>

## Agile Vs DevOps

One thing I need to get off my chest - DevOps Engineer is not a job in itself.  I am aware that it is ironic I refer to myself as one I know, but, DevOps is an approach, a mindset, a working method - not a job.  DevOps and Agile to me are one and the same, DevOps goal is to bring harmony to the old "silo'ing" in the tech industry, providing a collaborative approach of Developers and Operations to work together.  Agile helps facilitate part of this, with the KanBan and standups and they both aim to help improve the delivery of business value.

When I refer to myself as "a DevOps Engineer", it is not only to show my category of job, but to show that I am thinking in Agile, I am trying to provide that workflow between Development and Operations. So as a wholesale, If you are a `*-engineer`, who is trying to implement Agile - you are likely also, a DevOps Engineer.  Liking YAML helps too.

## The Good parts

To try and dissect my "Agile is for everyone" comment, I think it'd be good to go over some of the good and bad parts (atleast in my opinion).  Some of these stem from my experience more than anything else, so feel free to get in touch with me and discuss if you'd like me to update this blog with considerations

- Transparency - [Transparency is a pillar of SCRUM](https://www.scrum.org/resources/blog/three-pillars-empiricism-scrum) and I think its hugely important, especially in a post-covid WFH world.  I believe engineers should be honest to each other, and be able to discuss shortcomings as well as achievements with each other.  I think its also vital we are honest with ourselves and detail if we achieve or didn't achieve the following day.
    
    > We are all apprentices in a craft where no one ever becomes a master. - Ernest Hemingway

- The Daily Stand-up/SCRUM - Being able to think ahead of what your day will help break up into nicer chunks of how you will manage your time. It can help get engineers get support on another issue, where other members of the team may have experience in fixing and it again, aids with transparency.


- The Sprint Plan - being able to setup a project with user stories, bugs, tasks or whatever naming convention you are using to complete work. It helps state the work for that 2 weeks and clearly demonstrates capacity to Product Owners, Project Managers and senior management what an employee is doing. Remember, Transparency!


- The KanBan Board and User Stories - To quote Alan Kelly:
<br/>

> A story is a placeholder for a conversation
  - Having tasks defined in a correct way helps collaborate with customers and be able to understand the task at hand for the engineer to implement.  The flow of the tasks on a board from Left to Right helps demonstrate work reaching a state of completeness and the flow of your KanBan can be setup to work with your own flow.

<br/>

- Retrospective - a retrospective (a ritual meeting which happens at the end of a sprint) to discuss your "What went well," "What can be improved" and "What went poorly" can truly help be a "counselling session" and drive a team to make improvements to their workflow, the nature of their own work and many other things.  It helps managers understand what the things in a transparent nature that can be improved are, without formal meetings or bureaucracy

## The Bad parts

- Multiple Standups and "Checkpoints" a day - I don't care what Agile book you read or who you are in the Agile world.  Not a single engineer wants seperated from there work when they are "in the zone".  Software development, system engineering and IT Administration can very challenging, and taking someone out of a thought process to ask me what I am doing - Information which is readily available at the daily standup and on the KanBan board, is plain awful.

- Strict ticketing rules - For me agility is also fluidity, tickets should be filled in to be as complete as possible, that's why I love user stories.  Conveying what a task is in 4/5 lines makes complete sense:

```markdown
As a User
I would like to be able to login using my Google Account
So that I do not need to remember different logins
```
<br/>

   - As an engineer, I instantly understand this as being a ticket to implement some form of SSO feature.  I can then generate the tasks and have a conversation with my team about it at the sprint plan session.  It is entirely agonising to have to detail step by step of how this can be achieved in a single large ticket.  That's what Epic's and Smaller tasks are for.


  - No Product Owner to each project - If you don't have someone who is an interested party available to discuss with a project, then Agile quickly falls apart.  "Who is the product owner?", should **always** have an answer.  If there isn't one, then you have serious issues about how your project is being managed.  This isn't an inherent problem with Agile but with organisations, it may not be normal to have someone be assigned as a product owner, but it is a must for Agile to work in my eyes

## But it won't work for me!

One thing that some people who are against working in Agile say is that it "won't work" for them.  The idea of having a standup or actually tracking tasks will just waste time, not save it. I appreciate that some may feel this way when they aren't managing their time with a framework now, but Agile doesn't need to implemented to the letter for every person, its always hard at first, and it can seem pointless, but if you stick to it, figure out what works and doesn't work, you will as a whole improve and as my number 1 benefit was - be more transparent.

## But what should we use?

I have had experience with Jira, ServiceNow and Azure DevOps as well as a physical KanBan board.  For me, Azure DevOps makes alot of sense if you are already an Azure customer.  It can help your development teams with code, CI/CD, testing etc as well as its little known Azure Boards feature.

It is a very complete product, and can provide numerous statistics, burndown charts, team velocity, epic, task and bug tracking etc

<p align="center">
    <img src="/assets/img/azure-boards.png">
</p>

Furthermore, I think its vital that you seek to industry leaders like some of the folks I've mentioned on coaching - the "2 days, and you are certified SCRUM Master" courses rarely deliver value. Dan North, Allan Kelly, Gene Kim and many others have well-written peer-reviewed content available online.

## Finally

I think its important that if you are going to adopt any culture wide framework of any kind, then inclusivity is fundamentals.  Everyone accross an organisation should use it.  From an engineers opinion - mine anyway - Agile is compatible with what I do, resources are good, tools I use encourage it, but training organisation wide should be striven for.  There are concepts such as "there are no managers in SCRUM" where organisations aren't prepared for that level of self-management and transparency.  I often think back to the [Phoenix Project](https://www.amazon.co.uk/Phoenix-Project-DevOps-Helping-Business/dp/0988262592) about how Parts Unlimited are being beat to market on their products, and I think the teaching of this applies - If you aren't using Agile, and your competitors are, and your competitors are doing better than you, then that is something you need to start looking at.

Agile is good, trust the process and be open to learn.