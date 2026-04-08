---
title: "Work with Sensitive Actions logs \_|\_ Advisory Notifications \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/advisory-notifications/docs/sensitive-actions-logs
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/advisory-notifications/docs/recommendations-overview
source_metadata:
  url: https://docs.cloud.google.com/advisory-notifications/docs/sensitive-actions-logs
  title: "Work with Sensitive Actions logs \_|\_ Advisory Notifications \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Work with Sensitive Actions logs | Advisory Notifications | Google Cloud Documentation
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
View all Sensitive Actions logs in the organization
Set up alerts for Sensitive Actions logs
What's next
Home
Documentation
Security
Advisory Notifications
Guides
Was this helpful?
Send feedback
Work with Sensitive Actions logs
Stay organized with collections
Save and categorize content based on your preferences.
On this page
View all Sensitive Actions logs in the organization
Set up alerts for Sensitive Actions logs
What's next
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Sensitive actions are always written to
Sensitive Actions Service platform logs .
Additionally, Google Cloud provides a summary of sensitive actions through
Advisory Notifications.
Links to view the first three individual actions of each type in the platform
logs are provided in the notification. You need an appropriate
Identity and Access Management role , such as
roles/logs.viewer , to be able to view Cloud Logging logs.
If there are more than three sensitive actions of a particular type, the
notification might also provide a link to view all actions in
Logging. However, this link is not provided in all cases. Some
sensitive actions, such as adding a project-level SSH key, can occur in several
different projects in your organization. In this case, Google can't provide you
with a single Logging link to view all the sensitive actions,
because Logging is always scoped to a particular resource
(project, folder, or organization).
View all Sensitive Actions logs in the organization
If you want to see all Sensitive Actions logs in your organization, you can
set up a Logging bucket to
aggregate these logs.
Use the following query to include all Sensitive Actions logs in the bucket:
See more code actions.
Light code theme
Dark code theme
logName:sensitiveaction.googleapis.com%2Faction
You can add additional terms if you only want certain types of Sensitive Actions
logs, such as AND "add_ssh_key" .
Set up alerts for Sensitive Actions logs
If you want to get more frequent alerts about sensitive actions, you can
configure a log-based alert . For
example, use the following query to match all Sensitive Actions logs:
See more code actions.
Light code theme
Dark code theme
logName:sensitiveaction.googleapis.com%2Faction
What's next
Learn about audit logging .
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
