---
title: "Viewing Access Transparency logs for Google Workspace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-transparency/docs/understanding-workspace-logs
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-transparency/docs
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-transparency/docs/understanding-workspace-logs
  title: "Viewing Access Transparency logs for Google Workspace \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Viewing Access Transparency logs for Google Workspace | Google Cloud Documentation
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
Before you begin
View Access Transparency logs for Google Workspace
Sample Access Transparency log for Google Workspace
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
Before you begin
View Access Transparency logs for Google Workspace
Sample Access Transparency log for Google Workspace
What's next
Viewing Access Transparency logs for Google Workspace
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how you can view and understand the Access Transparency logs
generated when Google personnel access Customer Data in Google Workspace
resources. Customer Data in Google Workspace includes text that you
have entered into Gmail, Google Docs, Google Sheets, Google Slides, and other
Google Workspace apps.
Before you begin
Make sure that you have the Logs Viewer ( roles/logging.viewer ) Identity and Access Management
(IAM) role. For information about granting an IAM
role, see Grant a single role .
To use Access Transparency with Google Workspace, you must enable sharing of
Google Workspace content with Google Cloud. For information about sharing
Google Workspace content with Google Cloud, see Sharing data with
Google Cloud .
View Access Transparency logs for Google Workspace
You can use the Logs Explorer in the Google Cloud console to
retrieve, view, and analyze Access Transparency logs. For information about using
the Logs Explorer, see Using the
Logs Explorer .
To view Access Transparency logs for Google Workspace using the Logs Explorer,
do the following:
Go to the Logs Explorer page in the Google Cloud console.
Go to Logs Explorer
Enter the following query in the Logs Explorer:
See more code actions.
Light code theme
Dark code theme
logName = "organizations/ ORG_ID /logs/cloudaudit.googleapis.com %2F access_transparency"
jsonPayload . @ type = "type.googleapis.com/ccc_hosted_reporting.ActivityProto"
Replace ORG_ID with the unique identifier of your
Google Cloud organization.
Click Run query to execute the query.
Sample Access Transparency log for Google Workspace
The following sample is an example of the Access Transparency log for
Google Workspace.
{
"insertId" : "-6x8cuqc3rk" ,
"jsonPayload" : {
"activityId" : {
"uniqQualifier" : "1720950322606095479" ,
"timeUsec" : "1621441673703908"
},
"@type" : "type.googleapis.com/ccc_hosted_reporting.ActivityProto" ,
"event" : [
{
"status" : {
"success" : true
},
"eventType" : "GSUITE_RESOURCE" ,
"parameter" : [
{
"multiStrValue" : [
"GMAIL"
],
"name" : "GSUITE_PRODUCT_NAME" ,
},
{
"name" : "RESOURCE_NAME" ,
"multiStrValue" : [
"//googleapis.com/gmail/users/owner@example.com"
],
},
{
"name" : "LOG_ID" ,
"value" : "Qt8v90c0fAEy_SyaOplDvJc" ,
},
{
"multiStrValue" : [
"Google Initiated Service - For details, please refer to the documentation."
],
"name" : "JUSTIFICATIONS" ,
},
{
"name" : "ACTOR_HOME_OFFICE" ,
"value" : "US" ,
},
{
"value" : "owner@example.net" ,
"name" : "OWNER_EMAIL" ,
}
],
"eventName" : "ACCESS"
}
]
},
"resource" : {
"type" : "organization" ,
"labels" : {
"organization_id" : "12345"
}
},
"timestamp" : "2021-05-19T16:27:53.703908Z" ,
"severity" : "NOTICE" ,
"logName" : "organizations/12345/logs/cloudaudit.googleapis.com%2Faccess_transparency" ,
"receiveTimestamp" : "2021-05-19T16:28:52.867650088Z"
}
For information about the event and parameters that can appear in the
jsonPayload field of the Access Transparency logs generated when Google personnel
access Google Workspace resources, see Access Transparency Activity Events .
For information about all the other fields in the Access Transparency logs for
Google Workspace, see LogEntry .
What's next
Learn more about Access Transparency audit logs .
Learn more about Google Workspace audit logs .
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
