---
title: "Viewing historical Access Approval requests \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests
  title: "Viewing historical Access Approval requests \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Viewing historical Access Approval requests | Google Cloud Documentation
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
Access Approval
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
Access Approval
Product overview
Supported services
Get started
Access control with IAM
Anatomy of an access request
Access Approval Configuration
Enable and configure Access Approval
Adding a custom signing key (Optional)
Use Terraform
Access insights
Manage
Approve access requests
Validate access request signature
View historical access requests
Generate or download an Access Transparency report
Monitor
Access Approval audit logging
Enroll in other administrative controls
Introduction to Access Transparency
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
Before you begin
View historical access requests
What's next
Home
Documentation
Security
Cloud provider access management
Access Approval
Guides
Was this helpful?
Send feedback
On this page
Before you begin
View historical access requests
What's next
Viewing historical Access Approval requests
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how you can view all historical access requests for a
project. Access request logs are retained for a period of 400 days in accordance
with the
Cloud Logging retention period .
Before you begin
Ensure that you have set up Access Approval by following the
instructions in the Quickstart .
Ensure that you have the Access Approval Viewer
( roles/accessapproval.viewer ) Identity and Access Management (IAM) role. For
more information about IAM roles for
Access Approval, see Access Approval roles .
View historical access requests
Console cURL
More
Go to the Access Approval page in the Google Cloud console.
Go to Access Approval
Click History .
A table appears that includes all approved, auto-approved, dismissed, and
expired requests.
Optional: If you want to see the details of any access request, click
Details in the Details & logs column.
Optional: If you want to view the Cloud Audit Logs or the Access Transparency logs, click
Logs .
Cloud Audit Logs provide information about the approval and dismissal actions
taken by members within your organization. For more information, see
Cloud Audit Logs overview .
Access Transparency logs provide information about the actions taken by Google
personnel when accessing Customer Data. For more information, see
Access Transparency overview .
You can also see historical approvals using the
Logs Explorer .
Go to Cloud Logging
If you enable Cloud Audit Logs in your Google Cloud project, you can
filter by the Audited Resource accessapproval.googleapis.com .
curl -H "$(oauth2l header --json service-account-credentials.json cloud-platform)" \
https://accessapproval.googleapis.com/v1/projects/ PROJECT_ID /approvalRequests?filter=ALL
By default, the API lists all unapproved, approved, auto-approved, and
non-expired requests. There is a filter parameter to do tasks such as
listing all dismissed requests. For more information, see
Access Approval API .
You receive a list of historical access approvals with their status.
{
"approvalRequests" : [
{
"name" : "projects/123456/approvalRequests/xyzabc123" ,
"requestedResourceName" : "projects/123456" ,
"requestedReason" : {
"detail" : "Case number: bar123"
"type" : "CUSTOMER_INITIATED_SUPPORT"
},
"requestedLocations" : {
"principalOfficeCountry" : "US" ,
"principalPhysicalLocationCountry" : "US"
},
"requestTime" : "2018-08-30T17:49:13.712Z" ,
"requestedExpiration" : "2018-09-04T17:49:13.540Z" ,
"approve" : {
"approveTime" : "2018-08-30T17:49:15.737Z" ,
"expireTime" : "2018-09-04T17:49:13.540Z"
}
}
]
}
What's next
Learn more about the anatomy of an approval request .
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
