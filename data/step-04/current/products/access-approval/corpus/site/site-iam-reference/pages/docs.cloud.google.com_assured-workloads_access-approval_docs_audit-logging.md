---
title: "Access Approval audit logging information \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging
  title: "Access Approval audit logging information \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Access Approval audit logging information | Google Cloud Documentation
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
Service name
Methods by permission type
API interface audit logs google.cloud.accessapproval.v1.AccessApproval
Home
Documentation
Security
Cloud provider access management
Access Approval
Guides
Was this helpful?
Send feedback
On this page
Service name
Methods by permission type
API interface audit logs google.cloud.accessapproval.v1.AccessApproval
Access Approval audit logging information
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Access Approval. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Access Approval audit logs use the service name accessapproval.googleapis.com .
Filter for this service:
See more code actions.
Light code theme
Dark code theme
protoPayload . serviceName = "accessapproval.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Access Approval generates an audit log whose category is dependent on the
type property of the permission required to perform the method.
Methods that require an IAM permission with the type property value
of DATA_READ , DATA_WRITE , or ADMIN_READ generate
Data Access audit logs.
Methods that require an IAM permission with the type property value
of ADMIN_WRITE generate
Admin Activity audit logs.
API methods in the following list that are marked with (LRO) are long-running operations (LROs).
These methods usually generate two audit log entries: one when the operation starts and
another when it ends. For more information see Audit logs for long-running operations .
Permission type
Methods
ADMIN_ WRITE
google. cloud. accessapproval. v1. Access Approval. Approve Approval Request google. cloud. accessapproval. v1. Access Approval. Delete Access Approval Settings google. cloud. accessapproval. v1. Access Approval. Dismiss Approval Request google. cloud. accessapproval. v1. Access Approval. Invalidate Approval Request google. cloud. accessapproval. v1. Access Approval. Update Access Approval Settings
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Access Approval.
google. cloud. accessapproval. v1. Access Approval
The following audit logs are associated with methods belonging to
google.cloud.accessapproval.v1.AccessApproval .
Approve Approval Request
Method : google.cloud.accessapproval.v1.AccessApproval.ApproveApprovalRequest
Audit log type : Admin activity
Permissions : accessapproval.requests.approve - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.accessapproval.v1.AccessApproval.ApproveApprovalRequest"
Delete Access Approval Settings
Method : google.cloud.accessapproval.v1.AccessApproval.DeleteAccessApprovalSettings
Audit log type : Admin activity
Permissions : accessapproval.settings.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.accessapproval.v1.AccessApproval.DeleteAccessApprovalSettings"
Dismiss Approval Request
Method : google.cloud.accessapproval.v1.AccessApproval.DismissApprovalRequest
Audit log type : Admin activity
Permissions : accessapproval.requests.dismiss - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.accessapproval.v1.AccessApproval.DismissApprovalRequest"
Invalidate Approval Request
Method : google.cloud.accessapproval.v1.AccessApproval.InvalidateApprovalRequest
Audit log type : Admin activity
Permissions : accessapproval.requests.invalidate - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.accessapproval.v1.AccessApproval.InvalidateApprovalRequest"
UpdateAccessApprovalSettings
Method : google.cloud.accessapproval.v1.AccessApproval.UpdateAccessApprovalSettings
Audit log type : Admin activity
Permissions : accessapproval.settings.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.accessapproval.v1.AccessApproval.UpdateAccessApprovalSettings"
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
