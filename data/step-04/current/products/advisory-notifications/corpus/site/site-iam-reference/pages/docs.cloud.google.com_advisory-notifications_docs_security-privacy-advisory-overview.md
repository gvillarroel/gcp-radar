---
title: "Overview of Security and Privacy Advisory notifications \_|\_ Advisory Notifications\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/advisory-notifications/docs/security-privacy-advisory-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/advisory-notifications/docs/recommendations-overview
source_metadata:
  url: https://docs.cloud.google.com/advisory-notifications/docs/security-privacy-advisory-overview
  title: "Overview of Security and Privacy Advisory notifications \_|\_ Advisory Notifications\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Overview of Security and Privacy Advisory notifications | Advisory Notifications | Google Cloud Documentation
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
Who receives Security and Privacy Advisory notifications Organization contacts
Project contacts
Opting out
What's next
Home
Documentation
Security
Advisory Notifications
Guides
Was this helpful?
Send feedback
Overview of Security and Privacy Advisory notifications
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Who receives Security and Privacy Advisory notifications Organization contacts
Project contacts
Opting out
What's next
The Advisory Notifications service uses Security and Privacy Advisory
notifications to inform you of critical security and privacy events.
Who receives Security and Privacy Advisory notifications
Advisory Notifications contacts different users depending on whether the notification is sent to an organization or project.
Organization contacts
Advisory Notifications integrates with
Essential Contacts to identify which users should receive
notifications. Essential Contacts lets you control who receives
notifications by providing a list of contacts. Security and privacy advisory notifications
are sent to contacts in the Security and All categories at the
organization level . For more information, see
Managing contacts for notifications .
If Essential Contacts hasn't been configured,
Advisory Notifications sends notifications to the default
contacts, which are determined by Identity and Access Management roles.
If one or more users have been granted the Organization Administrator role ( roles/resourcemanager.organizationAdmin ) on the organization,
only they are contacted. If no users have been granted the Organization
Administrator role, then Advisory Notifications moves on to the
next role in the hierarchy and determines if one or more users have been granted
the Owner basic role ( roles/owner ) on any project owned by the organization. If
any are found, only they are contacted. Finally, if no users have been granted
the Organization Administrator or Project Owner role,
Advisory Notifications contacts any users who have been granted
the Billing Account Administrator role ( roles/billing.admin ) on any billing account owned by the
organization.
Project contacts
When a notification is sent to a project, Advisory Notifications contacts Identity and Access Management roles in the following order. If one or more users have been granted
the Owner basic role ( roles/owner ) on the project, only they are contacted. Otherwise, if no users have been granted
the Project Owner role,
Advisory Notifications contacts any users who have been granted
the Billing Account Administrator role ( roles/billing.admin ) on the billing account associated with the
project, if it exists.
Opting out
Security and Privacy Advisory notifications are mandatory. You cannot opt
out of receiving these notifications.
What's next
Learn about
Sensitive Actions
notifications.
Learn how to
view notifications .
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
