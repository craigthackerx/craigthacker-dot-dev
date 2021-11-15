---
layout: post
title: Ranking my Certifications in difficulty
subtitle: “Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid. - Albert Einstein
permalink: /blog/certs-difficulty
---

## Foreword on Certifications as a whole

I have managed to clear my way through quite a few certifications in the last year, and I often get asked about what my study material is, how hard it was, how many hours it took me etc.  I have had great opportunities to develop myself as a professional at my role in the [NSS](https://www.nss.nhs.scot/), whom provide me access to several avenues of study materials and the ability to book my own exams via Microsoft.

Certifications are great for solidifying some skills and to validate yourself to a criteria _for someone else to see_.  Personally, I don't think certifications provide any real value as to how "_good_" someone is at a task.  I am not sure if that's a controversial opinion or not, but often, others can judge certs to mean that someone has acquired some deeper insight into a topic over those who don't have the same certification.

That is rubbish.  I have met professionals in my career who have no professional qualifications, no bachelors, no masters - and I could only dream of being as wise as they are in some of the subjects we share interests in.

That being said:

> Education's purpose is to replace an empty mind with an open one. – Malcolm Forbes

And going out your way to learn something new will always help benefit the student, even if you find out you are ultimately dis-interested in the topic more than you thought you were originally.  If you stick to what you know all the time and refuse to learn, then you will likely get into a rut where "_this is how we do things as this is what works_" and never think "_**But could this be better?**_"  

After all, if you do 10 hours of self-study outside of work a week versus someone who doesn't, how long is it going to be before the person who doesn't study find themselves behind to the one that does study in the tech world?

I think certification exams fall into this category as well.  You are forced to meet a criteria of a third party.  Whether that is just a sales pitch in exam form or not, I don't know, but one thing is for certain - at some point, if someone truly engaged and tried to learn, someone who has a certification, to me, means they knew something to pass that exam at that time - how they choose to relay and apply it is a separate issue.

That's why I think certifications are "_for other people_", as the certification itself is not the reward to the learner - the learners reward is they got to pick up something new and follow a structured course along to do so.  The shiny badge at the end of it tells external people "_This person had to meet these learning objectives to pass this exam, so they probably know XYZ_".

I should also clarify, it is not the awarding bodies job (in any type of education) to be "_all-inclusive_" with certification awards, be it a degree or a professional accreditation, please see my above quote on why that is.  It is the certification course's job to have you think about improvements you can make and how you can apply these to your own circumstances, it won't instantly give you insights on the proper way to set up a cloud environment, or some unfound knowledge on setting up a Firewall just because you read up on some objectives. That will come with experience, and these certifications demonstrate that when you get that experience, then you are aware of a full range of topics to help support you in implementing best practice based on a peer in the industries' opinion.

One thing I think is important to get across to readers is the industry trend to "_require certification exams_" to be eligible to apply to a role or meet essential criteria. I have seen jobs that require AZ-104, AZ-500 and AZ-400 as an **_essential_** criteria, that says to me that the recruiter are using a very specific set of criteria, for a role an engineer would argue the certifications in question aren't even applicable to the day-to-day activities of that role.  **I am not inherently against this idea**, _but_, I think many organisations need to take a hard look at themselves and ask themselves if they are actually prepared to support current progression and training in staff to achieve these certifications.  It's all well and good saying someone needs to meet a criteria, I'm just after typing in this very article that's exactly what certifications provide you, but if you aren't in a scheme like [Microsoft Enterprise Skills Initiative](https://esi.microsoft.com) or similar, and providing a flow from your current staff to progress into vacant positions, then you likely have a company culture problem and that needs to be addressed.

It is a **massive** red flag to have certs as a requirement, when the recruiting company have no structure or support around obtaining them in-house.  That tells me as an outsider looking in that the recruiting company aren't prepared to invest in personal development - even worse still is putting them as criteria then not having a holistic approach to your own current staff with having them. And even worse again is to have them in criteria, then reject a candidate who partially meets criteria, without even a short phone interview/conversation.  We as engineers will talk, Glassdoor and LinkedIn are prominent now - anyone of any value will see through bad practices like this.

**Anyway**, this post is to detail what certs I actively have and judge difficulty for **me** to learn them.  I and whoever is reading this (assuming you haven't already fallen asleep) are completely different learners, so what I found hard and what you find hard won't always match up.  As always, happy for anyone to connect with me to discuss if they are looking for pointers

## Let's skip to the good bit - Scoring

For this, I am going to score the exams in an "_out of 10_" factor, where 0 is "_very, very easy, little to no study at all_" and 10 is "_very, very hard, it took me a long time to prepare_".  I will also include some quick bullet points of my recommendations on what I think you should study for these exams.

I will also try to keep a list of some study materials at each level in these bullet points that I personally used.

Always be sure to check the Exams Skills outline at the various vendors before jumping in to study!

### AZ-900 - Microsoft Certified: Azure Fundamentals - 1/10

This exam is a fundamentals course, so of course it is meant to be easy.  It requires a little study on Azure for you to pass, but around 1 or 2 months real world experience will likely be more than enough to get to grips.

- Study on basic cloud concepts, what is IaaS, what is PaaS, what is SaaS.
- Can you explain the cloud journey you will be expected to go on? Cloud native, lift and shift, hybrid...
- What is CapEx? What is OpEx?
- Introduction questions on how SLA's work in Azure, how am I credited, can I get 99.99% with `${THIS_THING}`?
- [Microsoft Learn - AZ-900 cloud concepts](https://docs.microsoft.com/en-us/learn/paths/az-900-describe-cloud-concepts/)

<p align="center">
    <img src="/assets/img/azure-fundamentals.png">
</p>


### HashiCorp Certified: Terraform Associate - 5/10

Not easy, not hard, somewhere in the middle.  This being a vendor exam, then you need to know very specific things about the product as well as general programming knowledge, and how they are implemented in the Terraform DSL.

- What is a `list` and a `map` in terraform?
- How can I manage multiple states?
- What can I use as a backend for state storage?
- What features does HCP/Terraform Cloud give me?
- [Bryan Krausen - HashiCorp Certified: Terraform Associate Practice Exam 2021](https://www.udemy.com/course/terraform-associate-practice-exam/)

<p align="center">
    <img src="/assets/img/terraform-associate.png">
</p>


### AZ-104 - Microsoft Certified: Azure Administrator Associate - 7/10

Now hear me out, if you are reading this and saying "_I have the 104, it was easy!_" - Sure, I get it, it isn't an expert level cert like Solutions Architect or DevOps Engineer, but, this exam has a **huge** increase in difficulty and at the time I took it, that was a little of a shock to the system.

The difficulty jump from one of the expert certs to this one still there, I believe Microsoft has categorised these correctly, but the difference from the AZ-900 -> AZ-104 is astronomical, you need to know so much more about the platform to have a chance of passing, whereas I'd argue the AZ-900 could be guessed (it is advertised for non-technical people, so of course it is meant to be that way)

- What does this Kubernetes YAML do?
- What happens in a networking scenario, where VM1 tries to use VM3 as a router to talk to VM2.
- Why doesn't this environment do what we expect it to do?
- What variable do I need in this ARM template
- [John Savill - various YouTube videos in areas of Azure](https://www.youtube.com/channel/UCpIn7ox7j7bH_OFj7tYouOQ)

<p align="center">
    <img src="/assets/img/azure-administrator.png">
</p>


### AZ-400 - Microsoft Certified: DevOps Engineer Expert - 8/10

This was probably my toughest cert to date.  I have lived and breathed DevOps for 3 years and it took me around 3 weeks of studying 3 hours a day to prepare for this.  It expects you to understand components of Agile, various code related issues, how to create and release pipelines, diagnose and fix Kubernetes YAML and much much more.  I think it could do better at trying to keep itself less "Microsofty" and giving questions in Terraform or some Python code questions instead of the .NET ones I faced, but still a good exam to pursue.

Should also not, to complete this at the time, you need the AZ-104 or AZ-204 (Azure Developer Associate) + an additional exam to gain this cert.  I obviously had the former.

- What is a Burdown Chart?
- What can I use to scan my .NET code
- Using the Azure CLI, how can I create `${THIS_THING}`
- How do I make my Dockerfile faster?
- [WhizLabs - AZ-400 training courses](https://www.whizlabs.com/microsoft-azure-certification-az-400/)

<p align="center">
    <img src="/assets/img/azure-devops-engineer.png">
</p>


### AZ-303+304 - Microsoft Certified: Azure Solutions Architect Expert - 8/10

These 2 exams are actually deprecated now in favor of a combination of AZ-104 + AZ-305, which makes a lot of sense after I had sat the 104.  Previously the recommended path for Architects as AZ-900 -> AZ-303 and as stated prior, there was a huge jump from AZ-900 -> AZ-104 and the AZ-104 is an associate level exam, whereas 303 is an expert level.

The 303 of these 2 was quite challenging I'd say, the 304 was easier and asked to know more high level details about what is and what wasn't possible with certain SKU's in Azure, so combining those 2 into the new 305 makes a lot of sense

- Understanding the different types of load balancers
- Understanding the different types of app service offers
- Understanding how to prepare a project with Azure at scale
- [Cloud Patterns and Architecture for Microsoft Azure Developers](https://app.pluralsight.com/library/courses/microsoft-azure-cloud-patterns-architecture/table-of-contents)

<p align="center">
    <img src="/assets/img/azure-solutions-architect.png">
</p>


### AZ-500 - Microsoft Certified: Azure Security Engineer Associate - 5/10

Full disclosure in that I went to university and study a postgradute degree in Information and Network security, so the concepts of increasing posture and various infosec policies did not phase me in this exam.

I think this exam could be a lot better or even have an expert level to discuss considerations with general security questions, for example, why you should use a Firewall over a NSG and what not.

- What does PIM do, when I activate this role, does this happen?
- When my tenant is synced this way, what accounts do I need?
- What is the least privilege IAM roles to perform `${TASK}`
- [Inside Cloud and Security YouTube Channel](https://www.youtube.com/channel/UCAr0yk0um7lwLjmrKfzwyig)

<p align="center">
    <img src="/assets/img/azure-security-engineer.png">
</p>


### AZ-700 - Microsoft Certified: Azure Network Engineer Associate - X/10

<p align="center">
    <img src="/assets/img/azure-network-engineer.png">
</p>

## So what's next?

I plan to sit atleast 2 more certifications before the end of 2021 and try to update this list with my verdict of those, but hopefully this list has given an idea of how difficult I have judged the exams I have done thus far.

<p align="center">
    <img src="/assets/memes/meme11.jpg">
</p>