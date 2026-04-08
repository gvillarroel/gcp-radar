---
title: "Access control with IAM \_|\_ Access Approval \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control
  title: "Access control with IAM \_|\_ Access Approval \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Access control with IAM | Access Approval | Google Cloud Documentation
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
Required roles View Access Approval requests and configuration
View and approve an Access Approval request
Update the Access Approval configuration
Invalidate existing Access Approval requests
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
Required roles View Access Approval requests and configuration
View and approve an Access Approval request
Update the Access Approval configuration
Invalidate existing Access Approval requests
What's next
Access control with IAM
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the Identity and Access Management (IAM) roles required to use
Access Approval.
Required roles
The following sections mention the IAM roles and permissions
required to perform various actions with Access Approval. The sections
also provide instructions about granting the required roles.
View Access Approval requests and configuration
The following table lists the IAM permissions required to view
Access Approval requests and configuration:
Predefined IAM role
Required permissions and roles
roles/ accessapproval. viewer
accessapproval.requests.get
accessapproval.requests.list
accessapproval.serviceAccounts.get
accessapproval.settings.get
resourcemanager.projects.get
resourcemanager.projects.list
To grant the Access Approval Viewer ( roles/accessapproval.viewer )
role, do the following:
Console gcloud
More
To grant this IAM role to yourself, do the following:
Go to the IAM page in the Google Cloud console.
Go to IAM
In the View by principals tab, click person_add Grant access .
In the New principals field in the right pane, enter your email
address.
Click the Select a role field, and select the
Access Approval Viewer role from the menu.
Click Save .
Run the following command:
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member='user: EMAIL_ID ' \
--role='roles/accessapproval.viewer'
Replace the following:
ORGANIZATION_ID : The organization ID.
EMAIL_ID : The email ID of the user.
For more information about the command, see gcloud organizations
add-iam-policy-binding .
View and approve an Access Approval request
The following table lists the IAM permissions required to view
and approve an Access Approval request:
Predefined IAM role
Required permissions and roles
roles/ accessapproval. approver
accessapproval.requests.approve
accessapproval.requests.dismiss
accessapproval.requests.get
accessapproval.requests.invalidate
accessapproval.requests.list
accessapproval.serviceAccounts.get
accessapproval.settings.get
resourcemanager.projects.get
resourcemanager.projects.list
To grant the Access Approval Approver
( roles/accessapproval.approver ) role, do the following:
Console gcloud
More
To grant this IAM role to yourself, do the following:
Go to the IAM page in the Google Cloud console.
Go to IAM
In the View by principals tab, click person_add Grant access .
In the New principals field in the right pane, enter your email
address.
Click the Select a role field, and select the
Access Approval Approver role from the menu.
Click Save .
Run the following command:
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member='user: EMAIL_ID ' \
--role='roles/accessapproval.approver'
Replace the following:
ORGANIZATION_ID : The organization ID.
EMAIL_ID : The email ID of the user.
Update the Access Approval configuration
The following table lists the IAM permissions required to
update Access Approval configuration:
Predefined IAM role
Required permissions and roles
roles/ accessapproval. config Editor
accessapproval.serviceAccounts.get
accessapproval.settings.delete
accessapproval.settings.get
accessapproval.settings.update
resourcemanager.projects.get
resourcemanager.projects.list
To grant the Access Approval Config Editor
( roles/accessapproval.configEditor ) role, do the following:
Console gcloud
More
To grant this IAM role to yourself, do the following:
Go to the IAM page in the Google Cloud console.
Go to IAM
In the View by principals tab, click person_add Grant access .
In the New principals field in the right pane, enter your email
address.
Click the Select a role field, and select the
Access Approval Config Editor role from the menu.
Click Save .
Run the following command:
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member='user: EMAIL_ID ' \
--role='roles/accessapproval.approver'
Replace the following:
ORGANIZATION_ID : The organization ID.
EMAIL_ID : The email ID of the user.
Invalidate existing Access Approval requests
The following table lists the IAM permissions required to
invalidate existing Access Approval requests that have been approved:
Predefined IAM role
Required permissions and roles
roles/ accessapproval. invalidator
accessapproval.requests.get
accessapproval.requests.list
accessapproval.serviceAccounts.get
accessapproval.settings.get
resourcemanager.projects.get
resourcemanager.projects.list
To grant the Access Approval Invalidator
( roles/accessapproval.invalidator ) role, do the following:
Console gcloud
More
To grant this IAM role to yourself, do the following:
Go to the IAM page in the Google Cloud console.
Go to IAM
In the View by principals tab, click person_add Grant access .
In the New principals field in the right pane, enter your email
address.
Click the Select a role field, and select the
Access Approval Invalidator role from the menu.
Click Save .
Run the following command:
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member='user: EMAIL_ID ' \
--role='roles/accessapproval.invalidator'
Replace the following:
ORGANIZATION_ID : The organization ID.
EMAIL_ID : The email ID of the user.
What's next
Grant or revoke a single IAM role
Manage access to service accounts
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
