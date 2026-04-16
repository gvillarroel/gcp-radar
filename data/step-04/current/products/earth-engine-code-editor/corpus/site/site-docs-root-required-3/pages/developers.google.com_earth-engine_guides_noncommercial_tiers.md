---
title: "Earth Engine Noncommercial Tiers \_|\_ Google Earth Engine \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/earth-engine/guides/noncommercial_tiers
knowledge_key: corpus
source_id: site-docs-root-required-3
source_type: site
entrypoint: https://developers.google.com/earth-engine
source_metadata:
  url: https://developers.google.com/earth-engine/guides/noncommercial_tiers
  title: "Earth Engine Noncommercial Tiers \_|\_ Google Earth Engine \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Guides
Send feedback
Earth Engine Noncommercial Tiers
Stay organized with collections
Save and categorize content based on your preferences.
As our community continues to grow, we want to ensure Earth Engine remains fast,
fair, and free for noncommercial use. Noncommercial tiers for Google Earth
Engine ensure a sustainable allocation of computational resources, so we
can continue supporting high-impact projects globally.
What are noncommercial tiers?
Starting April 27, 2026 , all noncommercial Earth Engine projects will have a
recurring monthly quota of free Earth Engine compute units
( EECUs in hours). This quota
is applied at the project-level and resets every month . There are
three new tiers to accommodate different levels of usage and impact.
Note: We will begin enabling quotas for noncommercial projects starting April
27, 2026. This process may take several weeks so your project may not have a
quota applied until a later date.
Noncommercial tiers
Tier
Quota limit
Eligibility
Recommended use
Community Tier
150 EECU-hours
Available to all verified noncommercial projects. No additional
requirements.
Intended for undergraduate students and other users with typical
computation needs. This tier supports the majority of noncommercial Earth
Engine usage.
Contributor Tier
1,000 EECU-hours
Available to all verified noncommercial projects. An active billing
account is required, but you won't be charged for Google Earth Engine
noncommercial usage. If you use this project for other Google Cloud
services, you may be charged for that usage.
Intended for graduate students, nonprofits, and scientific researchers
doing noncommercial work that contributes to science and impact.
Partner Tier
100,000 EECU-hours
Requires a separate application with details about your project and its
impact. Approval may take up to several weeks. You can apply for this tier
if your project relates to climate mitigation (carbon emissions reduction),
adaptation (climate change resilience), or protection (nature and
biodiversity protection, management, and restoration).
Intended for Nonprofits/NGOs, university research groups, government
research groups, or other organizations with high computation requirements
and clear evidence of high-impact sustainability work that influences
environment policy and practices.
These EECU-hour quota limits are not hard cut-off values. Once you reach the
limit for the month, you'll still be able to perform computation in restricted
mode (your requests, EE Apps and tasks will still run), but
you'll see reduced performance and throughput unless you get more
quota .
Action required and key dates
Tier selection
You'll need to select a tier for your Earth Engine project(s) by April 27,
2026 . If you don't, we'll configure your project to use the Community Tier by
default; you can change it later at any time. New projects will be prompted to
choose a tier during registration. For existing projects, you can select a tier
through the Earth Engine Configuration
page in the Cloud
Console.
Earth Engine will begin enabling quotas for noncommercial projects starting
April 27, 2026. This enablement may take several weeks, so your project may not
have a quota applied until a later date.
Note: We recommend applying for the Partner Tier by March 31, 2026 to receive a
decision before quota tiers are enabled on April 27, 2026.
Current usage
You can use Cloud Monitoring to understand how many EECU-hours per month you've
used over time. If your usage is inconsistent, you probably want to pick a tier
that covers your usage in the months when you do your heaviest processing.
You can use this Colab notebook to help you model and visualize how your usage
aligns with the different Earth Engine noncommercial tiers:
Run in Google Colab
View source on GitHub
Manage a project's tier
Change a project's tier
You can change your project's tier anytime on the configuration page in the
Cloud Console. You'll need to have the correct permissions on the
project :
Permissions needed
earthengine.config.update
Suggested roles
Earth Engine Resource Writer
( roles/earthengine.writer )
If you change a project's tier, the new quota limit will apply immediately, and
your current usage will remain unchanged. For example, if you switch from the
Community Tier to the Contributor Tier, you'll see the quota limit increase from
150 to 1000 EECU-hours immediately.
Applications for the Partner Tier require manual review, and that may take
several weeks to complete.
Apply for the Partner Tier
If you're part of a nonprofit, university, or government research group and need
a lot more compute for high-impact sustainability work, you can apply for the
Partner Tier . We'll review your
application and get back to you with a decision within several weeks.
Renew and reverify
All noncommercial Earth Engine projects need to reverify their noncommercial
status every year. You'll also need to reapply to keep projects in the Partner
Tier.
Exceptions
Earth Engine Apps usage is tracked against the
parent project of the EE App. In the event that the project runs out of
noncommercial compute quota, all apps under that project will get slower.
Manage quota
Control EECU-hour usage
Consumption: Quotas apply to both Batch and Online EECU-hour consumption
and reset every month. If you use up all your EECU-hours for the month
period, you can still use Earth Engine in a lower-parallelism mode until
your credits reset.
Allocation: Compute quota is allocated to a Cloud project and can't be
transferred. Noncommercial EECU-hours are only for noncommercial projects
and won't carry over if you switch your project to a commercial one.
Monitoring: Monitor your historical EECU
consumption using Cloud Monitoring
and Metrics Explorer.
Daily limits: Set a limit on the amount of EECU-time that your project
is allowed to consume in a day by updating the EECU-time per day quota in
the Cloud console. See the cost controls
documentation for more
details on how to access and update this quota.
Purchasing more compute: You can also pay for more compute by switching
your project to commercial and selecting the Limited plan , or by
creating a new commercial project. See the section on moving your workflows
to a commercial project for details.
Restricted mode
Even if your project runs out of EECU-hour credits, you can still use Earth
Engine, but it'll be in restricted mode until your credits refresh.
Restricted mode limits your online and batch concurrency and reduces the number
of compute workers allocated to you. You may not be able to run your workflows
efficiently in restricted mode.
Get more quota
If your project is in the Community Tier, you can upgrade it to the
Contributor tier. This grants the projects an extra 850 EECU-hours per month
(for a total of 1,000 EECU-hours).
If your project is in the Contributor Tier, you can apply for the Partner
Tier . If your application is accepted, your
project will be granted 100,000 EECU-hours, minus any EECU-hours you've
already used in that period.
You can use a commercial project with pay-as-you-go compute on the Limited
plan . You can do this by:
Switching a project from noncommercial to commercial. This is a
permanent change ( you can't switch it back ). You can do this on the
Earth Engine Configuration
page in
the Cloud Console.
Creating a new commercial project and moving your workflow
over .
Move workflows to a commercial project
If you create a new commercial project, you'll need to migrate your existing
workflows. We recommend:
Running your code with the new project : You can do this by either
selecting the new project in the Code
Editor or by changing the project in
your scripts when you call
ee.Initialize .
# Pass the commercial project ID to ee.Initialize()
ee . Initialize ( project = 'your-commercial-project-id' )
Sharing your existing assets with the new project : To access your assets
from the new project, you'll need to share them. You can do this from the
Asset Manager by granting
your new project's service account Viewer or Writer access to your
assets.
FAQ
Background
Q: Why is Earth Engine making this change?
Our goal is to ensure a sustainable allocation of computational
resources, so we can continue supporting high-impact projects globally.
Q: What are the new tiers and what do they mean?
There are three noncommercial tiers: Community, Contributor, and
Partner. Each tier has a monthly compute quota limit and various
eligibility requirements .
Q: Why does the Contributor Tier require a billing account?
We use it for identity verification. You won't be charged for Earth
Engine usage, but you may be charged for other Google Cloud services you
use.
Q: What are the criteria for the Partner Tier?
You must be a member of a nonprofit/NGO, university research group, or
government research group with very heavy processing requirements. At
this tier, partners must show evidence of high-impact sustainability
work that influences environmental policy and practices, and demonstrate
why they need the additional compute.
Timing
Q: How do I get an extension beyond April 27, 2026?
If you don't select a tier by April 27, your project will be enrolled in
the Community Tier by default. After April 27, you can select or
change your project's tier any time through the configuration
page .
Q: What happens if I don't select a tier by April 27, 2026?
Your project will use the Community Tier by default. You can change it
at any time on the configuration page .
Q: Can I change my tier? If so, when?
Yes, you can change your tier at any time using the Earth Engine
configuration page in the Cloud Console. This can be
done before the migration date (April 27, 2026) or any time after.
Q: How long does it take to get a decision on a Partner Tier application?
Decisions for the Partner Tier are typically reviewed and communicated
within several business weeks.
Quota specifics
Q: What's an EECU-hour?
An Earth Engine Compute Unit
(EECU) is a measure of
instantaneous processing power. We track computation by looking at EECU
usage over time (e.g., EECU-hours).
Q: What happens when I run out of quota?
Your project will enter the restricted mode with lower processing power
until your quota resets for the monthly cycle. You can also change to a
tier with more compute resources or switch to a commercial
plan .
Q: Can I transfer my compute quota between different Cloud projects?
No, compute quota is allocated to individual Cloud projects and cannot
be transferred.
Q: I use tools other than the Code Editor (the Python API, XEE, and
others). Does this quota apply to them?
Yes, this quota applies to all Earth Engine computation performed on
behalf your project.
Q: How are Earth Engine Apps affected by this change?
Earth Engine Apps created by
non-commercial projects are exempt from non-commercial eligibility
confirmation, but may get slowed down with noncommercial tiers, when
the owners' project runs out of their daily or monthly quota resources
for their tier.
Q: How does this relate to existing uplifts?
This is a separate quota on your project. If you have other quota limits
that have been raised (e.g., storage, parallelism, etc.), they'll
persist. The new compute quota still applies to the total amount of
computation your project can complete per month.
Q: How do I know how much quota I've used?
Use Cloud Monitoring to track
your usage and limit for a project.
Q: How do I know how much quota I will use?
Predicting compute time is notoriously difficult, but the Computation
Benchmarks has some
guidance and pointers to tools you can use to predict your compute
footprint.
Q: Do my EECU-hours roll over to the next period?
No, your quota resets at the beginning of each month, and any unused
EECU-hours don't carry over to the following period. If you successfully
enable a tier before April 27, 2026 your monthly quota period will begin
on April 27, 2026.
Administration
Q: What if I have multiple projects?
This system only applies to noncommercial projects. The quota and tiers
are tracked at the project level, and you can have multiple
noncommercial projects.
Q: Can I set a compute limit for a particular user?
Not today, but it's a feature we're considering for the future.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-20 UTC."],[],[]]
