---
layout: post
title:  How to correctly use Terraform in Azure - also, Announcing Libre DevOps - My new portfolio home for technical content!
subtitle: “The key in such a transition to continuous delivery is to expect things to get worse before you’ll be able to make them better.” - Matthias Marschall
nav_order: 104
parent: Blog
permalink: /blog/how-to-use-terraform
---

Firstly, before I get into the meat of the post which is talking about the main part of this post (which is a basic setup on how to use terraform in Azure), I wanted to announce I now have a _second site_ which you can consider a portfolio for myself and hopefully other like-minded engineers to work on.  You can find the info over at [libredevops.org](https://libredevops.org).

I decided to move things away from my own name and personal GitHub, and instead unify it under a single organisation with a more "hospitable" name, in that, I think it looks a little more professional when you are using an organisation resource instead of a single guys.

This also does mean I would really like anyone with any kind of interest in collaborating to get in touch with me and work on some Libre DevOps projects with me, or if you have a project you want included over (open source only, hence the name :wink:), or even if you want to fix some of my mistakes, feel free to raise a PR or just message me for a chat :smile:

<p align="center">
    <img src="/assets/img/libredevops.png">
</p>

___

# So, you want to use Terraform?

There are numerous guides on getting started with Terraform, the [HashiCorp documentation for Terraform in Azure](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs) is fantastic, and read that before you read this, they are really that good.

I find that some people tell me that they want to use DevOps and setup Terraform, but they just don't know how.  They've seen the job adverts and what others who claim to be successful are doing, and they want that.  So then "it" happens, a wide-spread adoption of "DevOps", where everyone claims they are experts in Agile and Project Manager's begin using Jira like a weapon.

I put a quote in my subtitle from [Mattias Marschall](https://twitter.com/mmarschall) of Google, and I honestly can't agree more with it.  When you begin doing "this thing of ours", you will make it worse before it gets better, you are going to be improving in a cycle, and that means you will learn.  Sure, you can hire contractors or hire experienced staff who can share knowledge, but that won't work for everyone and that's why seeking proper Agile and DevOps training is important, as the people need to change as much as an organisation.

I digress, I covered most of this in my [agile](https://www.craigthacker.dev/blog/agile-in-enterprise), but I want to cover something technical.  Terraform to be exact.

So you are on your DevOps journey, you have seen about Terraform, DRY, self-service, fast infrastructure - and you want to start that.  You pick your best most trustworthy engineer, lets call him Jim, and you tell Jim to work on a PoC build to begin the improvement cycle.  Jim then:

- Installs Terraform in his own machine
- Feeds credentials in plain text
- Runs various terraform commands and produces "something"
- He can repeat his steps, so that's it, you have your PoC.

Okay great, so Jim, we have a project which is way over-time, and we need to get the team up and running in Azure, since we are "DevOps" now, lets forget improving what you've done and deploy straight to prod.  No time to do anything different as what you have works fine.  Jim is likely screaming, he knows what he's done is inappropriate for a project work - but he's an employee and will follow orders.  If he's truly senior, he may flag it, but it will be bypassed eventually when push comes to shove.

If you are reading the above and can think of a scenario where this has happened to you, ill be blunt and tell you **it's wrong**.  What you have done, is bypass idea of DevOps completely, and expect agility with no negatives.  Maybe this hasn't happened, maybe you installed Terraform in a CI/CD tool, maybe you did good studying, maybe you are ARM or Bicep or CloudFormation or Pulumi and this post doesn't apply to you,  but I _assure_ you, if you have got processes in place for all of my recommendations  for any of these tools (but aimed at terraform) in this blog, then you don't need to be reading this blog and can stop right here.


## What I recommend

For what it is worth, all of my recommendations are common sense, but I intend to try and provide at least some proposals to how you can do these things, some of which will be shameless self-promotion, so be warned, these will be highlighted by winking emoji's.  

I am going to highlight my recommendations as bullet points firstly as a sort of TL;DR with hypothetical questions on why you need to consider it, so here goes:

- **Migrate to a centrally controlled, remote storage system, do not ever use local state.  Setup a Standard Operating Procedure for rolling keys or, ideally, [setup key rolls automatically using Azure Key Vault](https://docs.microsoft.com/en-us/azure/key-vault/secrets/overview-storage-keys).  You could use my "chicken and the egg" management script for this [Azure-CLI/Bash](https://github.com/libre-devops/utils/blob/dev/scripts/azure/cli/mgmt-init.sh) or [PowerShell](https://github.com/libre-devops/utils/blob/dev/scripts/azure/powershell/MgmtInit.ps1) script for this :wink:**. How are you going to do your backend, where your state file is being stored?
- **Do not use local environments for running terraform, run a controlled, integrated environment using a tool like Jenkins, Azure DevOps, GitLab etc.** How are you going to ensure you environments are consistent, what if someone leaves?
- **Use service account authentication, never use admin user accounts via Azure-CLI, instead, use Managed Identities if you can, otherwise use a Service Principal.** How are you authenticating to Azure, how are you managing key expiration and security?
- **Setup an Azure resource naming convention, as well as proper security scanning and policies for this such as [CheckOv](https://www.checkov.io/), [TFSec](https://aquasecurity.github.io/tfsec/v1.2.1/) & [Terraform-compliance](terraform-compliance.com) before you deploy anything. [You could use the LibreDevOps naming convention and pipeline templates for this](https://github.com/libre-devops/azure-naming-convention) :wink:**.  How will you ensure things are neat and tidy?
- **Setup "Terraform Standards", which includes the naming convention, git policies on branches, type safety on values, variable naming, repo structure, module usage etc. You could use the LibreDevOps [terraform-standards](https://github.com/libre-devops/terraform-standards) for this :wink:**.  How are you going to ensure you can keep everyone's code similar and DRY?
- **Ensure Terraform is safe from MITM plan file attacks, by considering how you are running terraform.  Remove all secrets with variables which are type safe in your code.  Ensure you consider perimeter network considerations as these are heavily recommended in Azure**.  How are we going to ensure we can complete our tasks with Terraform?
- **Make a plan for when things go wrong, it may never happen, but you should be ready just in case.** How can ensure you know how to fix a seemingly unfixable issue when it arises? Are you shackled by policy?

I want to take the time to give each of these recommendations some words on why they are important to consider.

### Migrate to centrally controlled storage

Your state file contains the keys to the kingdom, and its basically in plain text.  It has everything it needs with detailed information on passwords, encryption keys, everything.  This is because that's how it works, you can't get around it,  you can pay for Terraform Cloud which may be an option for you, but maybe you need to consider perimeter network issues (like I already said) so that's no good for you.  The local backend is quick, but its also easy to accidentally commit to git which is basically a 10/10 breach is your git is public.  Instead, move your state to a `azurerm` backend like [here](https://www.terraform.io/language/settings/backends/azurerm).  Be sure to consider rolling access keys, giving the least privilege via SAS tokens, this can be done with the Key vault managed storage as listed above.

You need to consider other things such as IAM access, firewalls, encryption keys, all of this will come very easily when using managed storage like Azure Storage Account

### Do not use local environments

Similar to above, if you aren't centrally controlling things, you risk environment conflict or someone is careless and leaving their laptops open in public or something.  That means you are likely going to be storing access keys and what not locally rather than using an Encrypted variable group or Azure Key Vault, which will make the laptop a target. Use Azure DevOps or something similar, it makes team collaboration much easier also.

Minor point, and maybe a little off-topic, but one thing I actually don't recommend doing is use in-built tools in CI/CD tools.  E.g. [Jenkins Plugin for Terraform](https://plugins.jenkins.io/terraform/), or [Azure Pipelines Terraform Tasks](https://marketplace.visualstudio.com/items?itemName=charleszipp.azure-pipelines-tasks-terraform).  I have nothing against these tools or the creators, I have seen them used all over, but what I find happens if they are rarely updated and can become insecure, so your entire infrastructure can be pending on an independent dev rather than setting up your own tooling.  Another thing is that things change, these tools won't support some newer features of Terraform right away

For this then, I recommend you set up your pipelines using native commands instead - this will basically mean you can migrate between different CI/CD tools by just changing some things [like so](https://github.com/libre-devops/gh-actions-module-development-build/blob/dev/.github/workflows/tf-build.yml) :wink:, you aren't stressed that you need a very specific way of handling a tool.  You may need to consider other things in the future such as using [terragrunt](https://terragrunt.gruntwork.io/), but can be wrapped around terraform and will need executed in a shell, or you may need some others terraform specific tasks these tools don't support, I have rarely seen them support `taint` or `workspace` for example.

### Use service accounts for authentication

No-one knows what will happen in this world.  If you are using someone's user account via `az login` or something, this is bad.  What if they get hit by a bus? What if they win the lottery?  Again, this isn't centrally controlled.  As per the [Microsoft recommendations on identity](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/service-accounts-governing-azure#plan-your-service-account), use managed identities when possible, if you cannot, use a service principal, if you cannot even do that, only then do you use a user.  The reason why I'd say use Managed Identities is I've seen people not consider how to renew service principal keys or certificates.

If you are using service principals right now, and you are not managing key expiry and rolling keys, you are doing it wrong.  I don't have an easy solution for this problem, which is why I recommend managed identities, as its all done for you, and they do [work with terraform](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/guides/managed_service_identity).

**One caveat to this, if you use managed identities, your source authentication must come within Azure, but this might be a good thing as we will discuss...**

### Setup an Azure Naming convention, security testing, BDD etc

Too often have I seen people be given keys and treated as trusted to do what they want, and then when you begin moving to a structured approach vs the wild-west, it makes things so much harder, start this before you even generate an access key, get a naming convention done, upload it on a Wiki page, get it in a document, and follow it.  Tools like terraform-compliance (check my repo for it!) can help you enforce this strictly as a integration test, but Azure policy (not yet finished for my repos at time of writing) can help you ensure YOU control how things are named and tagged, and you should - as it makes things a lot easier when arguments occur.

### Setup a Terraform Standard with Type Safety etc

This one is important.  You give infinite monkeys infinite time, and they will eventually type the works of Shakespeare - [Infinite monkey theorem](https://en.wikipedia.org/wiki/Infinite_monkey_theorem).  Every single engineer is going to do this a way they have preference of, if you copy the stuff from Libre DevOps, its natural you will see things that I understand, and you don't which is why collaboration and continuous improvement is required for DevOps to work. Before anyone starts writing a word of terraform, establish the follow for example:

- Variable naming
- Style of variables, e.g. `snake_case`, `TitleCase`, `SCREAMING_SNAKE`, `camelCase`
- Module structure
- State Management and usage of terraform workspaces
- Ensure standard name for `terraform.tf` `azure-provider.tf`, `configuration_alias`
- Determine when and if you should be pinning terraform provider and language version, `required_version = 1.17` etc.
- And special mention to something I see poorly utilised - **Type Safety**

Terraform is actually a strongly typed language if you want it to be - this is basically what TypeScript is to JavaScript, except Terraform isn't a high level language like that.  In terraform, you can set your input variable type, and you **always** should.  Here is 3 examples:

```hcl
variable "foo" {
  description = "You should always set a description"
  type        = number
  default     = "5678"
}

variable "bar" {
  description = "You should always set a description"
  type        = list(string)
  default     = [
    "WaxyOConnors",
    "KittyOSheas",
    "Allbarone",
    "TheSkybar"
  ]
}

variable "secret_ingredient" {
  description = "This is a secret variable and is marked as such, thus, it will be omitted from the terraform plan - which helps guard you in the event of someone looking at your plan"
  default     = string
  sensitive   = true
}
```

As you can see, I have explicitly set the type of these variables, when I am writing modules which potentially will be used 1000s of times, it's so important to ensure no-one tries to give my module an invalid input.  You need to fail fast and early. If I give `bar` a map, terraform will error, if I give foo a number, it will error, so I must comply straight away. Another thing to consider is usage of validation rules.

I have seen something quite strange recently in that I have seen people using regex's to do a find and replace with terraform code "to omit secrets" from the code.  Well, sorry, if you are doing that and doing something like:

```hcl
resource "azurerm_windows_virtual_machine" "example_vm" {
  admin_username        = "~admin_username~" // This is being replaced as a regex pattern
  admin_password        = "~admin_password~"
}
```

Sorry to tell you, you are doing it wrong - your secrets are more hidden than they would be if you committed them directly to the repo - sure, but, they are still going to be inside your plan file unless you tell terraform that `sensitive = true` and to omit it from the plan output - please do not confuse this with it being omitted from your state, it won't, values are always in plain in the state, which is why you need to centrally control with managed storage.

As such, my recommendation for the regexers out there - set your variables using key vault environment variables, pass these to terraform code using `auto.tfvars` and ensure the input declaration has the sensitive flag declared when it's appropriate, and simply replace the value of the `tfvars` rather than replacing code itself.  Another thing, make sure these are replaced and deleted when - otherwise, same as before, Man in the Middle potential.

PS, don't know who needs to hear this, but in Azure, if it's an "ID", e.g. Tenant ID, Subscription ID etc., it's probably not a secret.  If it's a "Key", API Key, Storage Key, Instrumentation key, its probably a secret, ensure those are always stored in a key vault with a firewall and proper access control 

### Consider Perimeter Network and Host management

A controversial one, but one that I need to state.  Some of you out there are lucky to be using cloud hosted agents, which means you aren't managing your own CI/CD hosts, congrats! Easy life for you right?  Wrong.  Are you considering how your files are being stored on those cloud agents?  I mean, you trust your service provider right, and you probably should - I trust Microsoft with my secrets on Azure, but I generally believe in a [zero trust security model](https://en.wikipedia.org/wiki/Zero_trust_security_model) which is the trend right now.  E.g, trust no-one.

Those cloud agents are potentially being used by 1000s of other people, there is a chance something can go wrong, and your precious terraform code which may have secrets in it unless you followed my advice and even then, you still might. You may be on Azure DevOps right now, and you've felt the pain of not knowing the outbound IP of your cloud hosted agent, and even Microsoft don't provide a service tag in Azure for this, likely meaning they don't even know what it will be.

Well, there is a solution for that - self-hosted agents.  The best method I have found to this is running a small private AKS cluster with AzureAD enabled and running DevOps agents in containers (these are on my [personal GitHub](https://github.com/craigthackerx/azure-devops-agent-containers), but will be migrating to Libre DevOps soon).  Scale-Sets are also an option, but remember you will be "managing" a host operating system and simarily, I will ask you a hard question - how are you going to patch that, what about networking, secure access etc

### Make a plan for when things got wrong

Sometimes, with Terraform, you won't be able to do something.  The provider will be bugged, or the language, and one good way around this is to set your provider version and terraform version in your code:

```hcl
terraform {
  
  required_providers {
    
    required_version        = "1.1.7" // Set language version
    
    azurerm = {
      source                = "hashicorp/azurerm"
      configuration_aliases = [azurerm.default-provider]
      version               = "~> 2.99.0" // Provider Version
    }
  }
  backend "azurerm" {
  }
}
```

Some caveats of using this method - if you are pinning your version and language, you run the risk of using out-date code.  What I recommend, is to pin a project by project base, and version modules instead of the code.  This means, when a new project comes in, you should use the latest version ideally and then version your modules based on that and prepare a git strategy.

Another thing - is when terraform just isn't supported for a resource. In those instances, one thing I've done is [use ARM templates but deployed them with terraform](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/resource_group_template_deployment), but you should prepare for the possibility that it may happen.

Finally, you need to set the ground rules on when this happens.  One thing you will find if you say someone can use one tool in some cirumstances is they will try to make that cirumstance occur - terraform has only ever not worked for me once in my entire career, you should set a boundary like a "rule of 2", where 2 people on the team need to agree that its not functionally possible with Terraform.  As I keep rattling on about, when you go down this standardisation route, your people need to change as much as the org does, and they need to understand that if terraform is mandated as the chosen tool for IaC in the tool, with type safety, security, all these things considered, then they are doing it the company standard way. 

## Conclusion

Terraform setup can be hard, and hopefully this gives you some good technical questions to consider as well as to examples as to why and how.  I have various resources on implementing this within enterprise, so if you are interested, message me to discuss :smile:

Also, please check out, contribute, whatever,  [libredevops](https://github.com/libre-devops)!

<p align="center">
    <img src="/assets/memes/meme12.jpg">
</p>
