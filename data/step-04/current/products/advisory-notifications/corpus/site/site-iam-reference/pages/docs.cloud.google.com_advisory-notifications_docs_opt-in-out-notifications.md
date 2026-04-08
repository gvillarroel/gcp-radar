---
title: "Opt in to or out of notifications \_|\_ Advisory Notifications \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/advisory-notifications/docs/opt-in-out-notifications
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/advisory-notifications/docs/recommendations-overview
source_metadata:
  url: https://docs.cloud.google.com/advisory-notifications/docs/opt-in-out-notifications
  title: "Opt in to or out of notifications \_|\_ Advisory Notifications \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Opt in to or out of notifications | Advisory Notifications | Google Cloud Documentation
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
Español – América Latina
Français
Português – Brasil
中文 – 简体
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
Before you begin
Opt in to or out of notifications
Mandatory notification types
Optional notification types
What's next
Home
Documentation
Security
Advisory Notifications
Guides
Was this helpful?
Send feedback
Opt in to or out of notifications
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Opt in to or out of notifications
Mandatory notification types
Optional notification types
What's next
You can configure which notification types your organization or project receives. Opting
in to or out of notification types only affects new notifications of that type.
If you opt out of a notification type, existing notifications of that type that
you have previously received won't be deleted.
Before you begin
To get the permissions that
you need to view or update Advisory Notifications settings,
ask your administrator to grant you the
Advisory Notifications Admin ( roles/advisorynotifications.admin )
IAM role on your project or organization.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to view or update Advisory Notifications settings. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to view or update Advisory Notifications settings:
advisorynotifications.notifications.list
advisorynotifications.settings.get
advisorynotifications.settings.update
If you are configuring notifications for an organization:
resourcemanager.organizations.get
If you are configuring notifications for a project:
resourcemanager.projects.get
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Opt in to or out of notifications
In the Google Cloud console, go to Advisory Notifications .
Go to Advisory Notifications
Click Settings in the corner of the panel.
Toggle the notification types you want to receive to Opt in , and those
you do not want to receive to Opt out . You cannot opt out of
mandatory notification types .
Click Save changes .
Review the changes, and then click Confirm changes .
Mandatory notification types
The following notification types are mandatory and cannot be opted out of:
Security and Privacy Advisory
Security MSA
Additional mandatory notification types may be added in the future.
Optional notification types
The following notification types are optional and can be opted out of:
Sensitive Actions
Threat Horizons
Additional optional notification types may be added in the future.
What's next
Learn how to view notifications .
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
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
