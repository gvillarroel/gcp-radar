---
title: "Respond to Sensitive Actions notifications \_|\_ Advisory Notifications \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/advisory-notifications/docs/respond-to-sensitive-actions
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/advisory-notifications/docs/recommendations-overview
source_metadata:
  url: https://docs.cloud.google.com/advisory-notifications/docs/respond-to-sensitive-actions
  title: "Respond to Sensitive Actions notifications \_|\_ Advisory Notifications\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Respond to Sensitive Actions notifications | Advisory Notifications | Google Cloud Documentation
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
Advisory Notifications
Start free
Overview
Guides
Reference
Support
Resources
More
Technology areas
More
Overview
Guides
Reference
Support
Resources
Cross-product tools
More
Console
Discover
Product overview
Security and Privacy Advisory notifications overview
Sensitive Actions notifications overview
Security MSA notifications overview
Threat Horizons preview notifications overview
Get started
View notifications
Recommendations
Opt in to or out of notifications
Respond
Respond to Sensitive Actions notifications
Monitor
Audit logging
Work with Sensitive Actions logs
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
Investigate the activity
Respond to an unrecognized activity
What's next
Home
Documentation
Security
Advisory Notifications
Guides
Was this helpful?
Send feedback
Respond to Sensitive Actions notifications
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Investigate the activity
Respond to an unrecognized activity
What's next
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Sensitive actions can have a negative effect on your business if they are taken
maliciously or in error.
Investigate the activity
Consider reaching out to the owner of the user account that performed the action
to make sure that the owner took the action themselves and that the action was
intentional.
You can use Cloud Logging to view other actions taken by the same user
account. For example, the following query searches for Admin Activity Audit Logs
that mention user@domain.com :
See more code actions.
Light code theme
Dark code theme
logName:cloudaudit.googleapis.com%2Factivity AND "user@domain.com"
By default, you can view Admin Activity Audit Logs in only a single project,
folder, or organization at a time. To aggregate logs across your organization,
see
Aggregate and store your organization's logs .
Respond to an unrecognized activity
If you determine that the action was not legitimate, it is possible that the
acting user account is compromised.
If you use Google Workspace as your
identity provider, your Google Workspace administrator can take steps
to secure the account .
If you use a third-party identity provider, check their documentation for what
steps you can take.
Consider taking steps to undo the action. For example, if a sensitive role was
unintentionally granted at the organization level, you should remove this
role.
What's next
Learn about
Sensitive Actions logs .
Learn how to
opt in to or out of notifications .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
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
