---
title: "Quotas \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/quotas
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-backtest-results
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/quotas
  title: "Quotas \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Quotas | Anti Money Laundering AI | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Anti Money Laundering AI
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
Anti Money Laundering AI
Quotas
Pricing
Locations
Release notes
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Total requests quotas
Concurrent request quotas
Collection size quotas
Registered parties allocation limit
Request a quota increase
Set up quota alerts
Home
Documentation
Industry solutions
Anti Money Laundering AI
Resources
Was this helpful?
Send feedback
Quotas
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Total requests quotas
Concurrent request quotas
Collection size quotas
Registered parties allocation limit
Request a quota increase
Set up quota alerts
Google Cloud uses quotas to help ensure fairness and reduce
spikes in resource use and availability. A quota restricts how much of a
Google Cloud resource your Google Cloud project can use. Quotas
apply to a range of resource types, including hardware, software, and network
components. For example, quotas can restrict the number of API calls to a
service, the number of load balancers used concurrently by your project, or the
number of projects that you can create. Quotas protect the community of
Google Cloud users by preventing the overloading of services. Quotas also
help you to manage your own Google Cloud resources.
The Cloud Quotas system does the following:
Monitors your consumption of Google Cloud products and services
Restricts your consumption of those resources
Provides a way to
request changes to the quota value
and automate quota adjustments
In most cases, when you attempt to consume more of a resource than its quota
allows, the system blocks access to the resource, and the task that
you're trying to perform fails.
Quotas generally apply at the Google Cloud project
level. Your use of a resource in one project doesn't affect
your available quota in another project. Within a Google Cloud project, quotas
are shared across all applications and IP addresses.
For more information, see the
Cloud Quotas overview .
Total requests quotas
The following quotas apply to AML AI requests:
Quota
Value
Requests per second per project per region
100
Requests per second per organization per region
100
Number of parties used in requests to
projects.locations.instances.engineConfigs.create
per day per project
55,000,000
Number of parties used in requests to
projects.locations.instances.engineConfigs.create
per day per organization
55,000,000
Number of parties used in requests to
projects.locations.instances.models.create
per day per project
55,000,000
Number of parties used in requests to
projects.locations.instances.models.create
per day per organization
55,000,000
Number of parties used in requests to
projects.locations.instances.backtestResults.create
multiplied by the number of backtest periods per day per project
55,000,000
Number of parties used in requests to
projects.locations.instances.backtestResults.create
multiplied by the number of backtest periods per day per organization
55,000,000
Number of registered parties used in requests to
projects.locations.instances.predictionResults.create
multiplied by the number of prediction periods per day per project
55,000,000
Number of registered parties used in requests to
projects.locations.instances.predictionResults.create
multiplied by the number of prediction periods per day per organization
55,000,000
Number of copy model requests per day per project.
100
Number of copy model requests per day per organization.
100
Concurrent request quotas
The following quotas apply to concurrent requests:
Quota
Value
Tuning requests per project per region
1
Training requests per project per region
5
Inference requests (
projects.locations.instances.backtestResults.create
and
projects.locations.instances.predictionResults.create
combined) per project per region
5
Collection size quotas
The following quotas apply to AML AI collections. These quotas don't reset over time and instead are released when you delete a resource.
Quota
Value
Instances per project per region
10
Datasets per project per region
1000
EngineConfigs per project per region
2000
Models per project per region
1000
Registered parties allocation limit
Quota
Value
Registered parties per project per region
1,500,000
Request a quota increase
AML AI does not currently support increasing quotas via the Google Cloud console,
to request a quota increase, please reach out to support .
To decrease most quotas, use the Google Cloud console. For more information,
see
Request a quota adjustment .
Set up quota alerts
You can set up quota alerts to get notifications when quota usage reaches a defined threshold. For more information, see
Set up quota usage alerts in the Quotas page .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-06 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
