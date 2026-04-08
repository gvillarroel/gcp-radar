---
title: "Enabling Access Transparency \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-transparency/docs/enable
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-transparency/docs
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-transparency/docs/enable
  title: "Enabling Access Transparency \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Enabling Access Transparency | Google Cloud Documentation
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
Cloud provider access management
Access Transparency
Start free
Overview
Guides
Resources
More
Technology areas
More
Overview
Guides
Resources
Cross-product tools
More
Console
Access Transparency
Product overview
Privileged access
Supported services
Access Transparency exclusions
Get started
Enable Access Transparency
Read and understand logs
Understand and use Access Transparency logs
View Access Transparency logs for Google Workspace
Enroll in other administrative access controls
Introduction to Access Approval
Introduction to Key Access Justifications
Simplify workload compliance
Introduction to Assured Workloads
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
Requirements for enabling Access Transparency
Configuring Access Transparency using the Google Cloud console
What's next
Home
Documentation
Security
Cloud provider access management
Access Transparency
Guides
Was this helpful?
Send feedback
On this page
Requirements for enabling Access Transparency
Configuring Access Transparency using the Google Cloud console
What's next
Enabling Access Transparency
Stay organized with collections
Save and categorize content based on your preferences.
Requirements for enabling Access Transparency
Access Transparency is a default security control for every Google Cloud organization.
Configuring Access Transparency using the Google Cloud console
To verify that Access Transparency is enabled for audit purposes:
Confirm the enablement checkbox is selected on the Compliance Folder creation page in the Google Cloud console.
or
Check your organization-level permissions:
Go to the Identity and Access Management page on the
Google Cloud console.
Verify that you have the IAM role
Access Transparency Admin ( roles/axt.admin ) listed in the Role
column for your Principal listing under the organization.
Note: If you don't have this role granted to you, then contact an
Organization Adminstrator before you proceed to the next step. An
Organization Administrator can also create a custom IAM
role for you that contains the axt.labels.get and axt.labels.set
permissions. To learn more about granting these permissions, see the
IAM documentation on
custom roles .
Select any Google Cloud organization or project within the organization using the
selector menu.
Go to the IAM > Settings page.
Verify that Access Transparency is enabled.
What's next
For information about the pricing of Access Transparency, see
Pricing .
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
