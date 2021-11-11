---
layout: post
title: Agile in Enterprise - An Engineer's perspective
subtitle: What is your forecast for today?
permalink: /blog/agile-in-enterprise
---

## Introduction

Agile in a tech company workplace is huge. Just Google (or Bing, or DuckDuckGo, whatever we are using these days) how many of the top tech companies are dedicated to having a fully agile minded workforce, and you will see a trend. I had recently watched [BDD Is Not About Testing](https://www.youtube.com/watch?v=6nSwRSbc27g) by Dan North as well as doing some amazing online training from [Alan Kelly](https://www.allankelly.net/) on Agile (big thanks to DH for setting my up with it!)

I am by no means an expert in Agile, SCRUM or any of the various iterations and frameworks available. I have studied it at university and have practiced it in my own career for several years, but I seek advice and training from those who know better to skill myself up for a reason.

This has got me thinking about how it is perceived by the engineers and the "_techies_" of an organisation.  Generally speaking, Agile is something facilitated by a Project Manager or the trendier "SCRUM master". From my observations and own opinion, sometimes, engineers see it as a waste of time, It's something for someone else to feel purposeful, when they are not able to add to a project technically and to give a feeling of "control". And in other times, it provides great business value, it helps projects get delivered on time, allow problems to be unblocked and keep a streamline of work between a team and customer.

I find that it can be a poor understanding of what Agile is and what the project managers role is on its effectiveness for an organisation and my general opinion is - **Agile is for everyone**.

So what do I mean by that? I am not by any stretch telling someone who works in funeral home that they should start having a daily stand-up and generating user stories for work that day (but hey, if they try it, and it works, all power to them!), but what I mean is in the tech industry atleast, aspects of Agile (and by extension, SCRUM) will add value to every team.

**But**, it requires that a team adopts it.  I believe it is _known_ to work, which means when adopted correctly, generally, teams will be able to achieve greater velocity and provide greater business values, and as an engineer when you strip it completely back, isn't that what I am being paid to do?

<p align="center">
    <img src="/assets/memes/meme9.jpg">
</p>

## Agile Vs DevOps

One thing I need to get off my chest - **DevOps Engineer is not a job** in itself.  I am aware that it is ironic I refer to myself as one I know, but, DevOps is an approach, a mindset, a working method - not a job.  DevOps and Agile to me are one and the same, DevOps goal is to bring harmony to the old "silo'ing" in the tech industry, providing a collaborative approach of Developers and Operations to work together.  Agile helps facilitate part of this, with the KanBan and standups and they both aim to help improve the delivery of business value.

When I refer to myself as "a DevOps Engineer", it is not only to show my category of job, but to show that I am thinking in Agile, I am trying to provide that workflow between Development and Operations. So as a wholesale, If you are a `* engineer`, who is trying to implement Agile - you are likely also, a DevOps Engineer, at least in theory.  Liking YAML helps too.

## The Good parts

To try and dissect my "Agile is for everyone" comment, I think it'd be good to go over some good and bad parts (at least in my opinion).  Some of these stem from my experience more than anything else, so feel free to get in touch with me and discuss if you'd like me to update this blog with considerations:

- Transparency - [Transparency is a pillar of SCRUM](https://www.scrum.org/resources/blog/three-pillars-empiricism-scrum) and I think its hugely important, no, it's probably the **most** important reason to use Agile in engineering, especially in a post-covid work-from-home world.  I believe engineers should be honest to each other, and be able to discuss shortcomings as well as celebrate achievements with each other.  I think its also vital we are honest with ourselves and detail if we achieve or didn't achieve the following day.  It can help eliminate the [imposter syndrome](https://en.wikipedia.org/wiki/Impostor_syndrome) that can occur in tech, which I, and likely every engineer has experienced at one point.
    
    > We are all apprentices in a craft where no one ever becomes a master. - Ernest Hemingway

- The Daily Stand-up/SCRUM - Being able to think ahead of what your day will help it break up into nicer chunks of how you will manage your time. It can help get engineers get support on another issue, where other members of the team may have experience in fixing and it again, aids with transparency. And just to clear, having 2 engineers assigned to a 6-man day story does not mean the ticket will be completed in 3 days, more on that later.


- The Sprint Plan - being able to set up a project with user stories, bugs, tasks or whatever naming convention you are using to complete work. It helps state the work for that 2 weeks and clearly demonstrates capacity to Product Owners, Project Managers and senior management what an employee is doing. Remember, Transparency!


- The KanBan Board and User Stories - To quote Alan Kelly:
<br/>

> A story is a placeholder for a conversation, if you have the conversation, all sins are forgiven!

  - Having tasks defined in a correct way helps collaborate with customers and be able to understand the task at hand for the engineer to implement.  The flow of the tasks on a board from Left to Right helps demonstrate work reaching a state of completeness and the flow of your KanBan can be setup to work with your own flow.
  

- Retrospective - a retrospective (a ritual meeting which happens at the end of a sprint) to discuss your "What went well," "What can be improved" and "What went poorly" can truly help be a "counselling session" and drive a team to make improvements to their workflow, the nature of their own work and many other things.  It helps managers understand what the things in a transparent nature that can be improved are, without formal meetings or bureaucracy.

## The Bad parts

And now on to the bad parts:

- Multiple Standups and "Checkpoints" a day - I don't care what Agile book you read or who you are in the Agile world.  Not a single engineer wants to be separated from their work when they are "in the zone".  Software development, system engineering and IT Administration can very challenging, especially at enterprise scale, and taking someone out of a thought process to ask them what they are doing - Information which is readily available at the daily standup and on the KanBan board, is plain awful.


- Strict ticketing rules - For me, agility is also fluidity, tickets should be filled in to be as complete as possible, but they aren't going to be a step-by-step instruction on how far a task is along or detailed enough a layman can execute your job for you. That's why I love user stories.  Conveying what a task is in 4/5 lines makes complete sense for me.  Engineers are smart, let us work out the technical parts.  Here is an example user story:

  ```markdown
  As a User
  I would like to be able to login using my Google Account
  So that I do not need to remember different logins
  ```
<br/>

- As an engineer, I instantly understand this as being a ticket to implement some form of SSO feature to my product.  I can then generate the tasks and have a conversation with my team and the product owner about it at the next sprint planning session.  It is entirely agonising to have to detail step by step of how this can be achieved in a varying tickets or even worse, 1 gigantic ticket which makes me understand _less_ about a task when I am finished reading it. Keep it simple, use user stories, tasks, bugs and epics appropriate and try not to confuse them.


- No Product Owner to each project - If you don't have someone who is an interested party available to discuss with a project, then Agile quickly falls apart.  "_Who is the product owner?_", should **always** have an answer.  If there isn't one, then you have serious issues about how your project is being managed.  This isn't an inherent problem with Agile but with organisations, it may not be normal to have someone be assigned as a product owner, but it is a must for Agile to work in my eyes.  The Product Owner is equally important as the engineer in an Agile space - check out [The Three Amgios](https://en.wikipedia.org/wiki/Behavior-driven_development) concept in BDD for proof. Make sure you have a product owner assigned until the project is **complete** and to manage things going forward.


- Man days does not account for a specialist's skill - Back to what I was alluding to before, a common theme in Agile is the `X` amount of days to complete `Y` task - if the task takes 2 days to complete, and you assign 1 engineer it takes 2 days.  Great.  But listen, I have seen it, and it is a running joke about it on the internet - people genuinely think that if you assign 2 people to 5 days of work, that means the task will be complete in 2.5 days or less.  Engineer's normally joke that if you assign 2 people to a 3-day task, then it'll take 6 days for the first engineer to explain to the other what's going on and the prehistoric history of the code base before starting work. Oh, and don't forget why we don't touch the random function in the code that no one can figure what does.  

  - Anyway, In Agile, we aim to have a mixture of generalists and specialists in our organisation - **do not** confuse your specialist with your generalist and vice versa - let the engineers budget the task for you on the onset, assuming they are agile trained, they will be better at estimating any technical type of work and know each other's skill sets better than anyone else. 

## But it won't work for me!

One thing that some people who are against working in Agile say is that it "_won't work_" for them.  The idea of having a standup or actually tracking tasks will just waste time, not save it. 

I appreciate that some may feel this way when they aren't managing their time with a framework now, but Agile doesn't need to implemented to the letter for every person, It's always hard at first, and it can seem pointless, but if you stick to it, figure out what works and doesn't work, you will as a whole improve and as my number 1 benefit was - be more transparent.

The earlier you begin your Agile transformation, the quicker you can begin seeing benefits of it, constant dread and culture resistance will not get an organisation anyway.

## But what should we use?

I have had experience with Jira, ServiceNow and Azure DevOps as well as a physical KanBan board.  For me, Azure DevOps makes a lot of sense if you are already an Azure customer.  It can help your development teams with code, CI/CD, testing etc. as well as its little known Azure Boards feature.

It is a very complete product, and can provide numerous statistics, burndown charts, team velocity, epic, task and bug tracking etc

<p align="center">
    <img src="/assets/img/azure-boards.png">
</p>

Furthermore, I think its vital that you seek to industry leaders like some folks I've mentioned on coaching - the "2 days, and you are certified SCRUM Master" courses rarely deliver value. Dan North, Allan Kelly, Gene Kim and many others have well-written peer-reviewed content available online.

## Finally

I think its important that if you are going to adopt any culture wide framework of any kind, then inclusivity is fundamental to Agile success.  Everyone across an organisation should use it.  From an engineer's opinion - mine anyway - Agile is compatible with what I do, the resources available online to learn it are good, tools I use encourage it, but training organisation wide for all staff, should be striven for.  It's the only real way to tell the pesky employee's who want something done on the fly that "_there's a process for this, we will look at it in the next sprint_" and for them to understand.  Senior managers likely don't want to hear that, especially from "_an underling_", but in agile, it's something we all need to accept.

Moreover, there are concepts such as "_there are no managers in SCRUM_" where organisations aren't prepared for that level of self-management and transparency.  I often think back to the [Phoenix Project](https://www.amazon.co.uk/Phoenix-Project-DevOps-Helping-Business/dp/0988262592) about how Parts Unlimited are being beat to market on their products, and I think the teaching of this applies - If you aren't using Agile, and your competitors are, and your competitors are doing better than you, then that is something you need to start looking at trying to do yourself.  If you aren't interested in Agile and you are an up and coming engineer and looking for your next area to study, consider not learning that new JavaScript framework. consider learning about Agile, as that will aid you in the enterprise space of those in an Agile journey.

Agile is good, trust the process and be open to learn, and eventually, you will benefit.

<p align="center">
    <img src="/assets/memes/meme8.jpg">
</p>