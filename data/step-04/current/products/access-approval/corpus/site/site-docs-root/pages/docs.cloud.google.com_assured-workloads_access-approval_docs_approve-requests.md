---
title: "Approving Access Approval requests \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/approve-requests
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/approve-requests
  title: "Approving Access Approval requests \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Approving Access Approval requests | Google Cloud Documentation
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
Configure settings to receive notifications
Approve Access Approval requests
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
Configure settings to receive notifications
Approve Access Approval requests
What's next
Approving Access Approval requests
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how to approve an Access Approval request.
Before you begin
Make sure that you understand the concepts in the
Overview page.
Grant the Access Approval Approver ( roles/accessapproval.approver )
IAM role on the project, folder, or
organization to the principal
who you want to be able to perform approvals. You can grant the
Access Approval Approver IAM role to either an
individual user , a service account , or a
Google group .
If you are using a custom signing key, you
must also grant the Cloud KMS CryptoKey Signer/Verifier
( roles/cloudkms.signerVerifier ) IAM role to the
Access Approval service account for your resource. If you are using a
Google-managed signing key, you don't need to provide any other permissions.
For information about granting an IAM role, see Grant
a single role .
Configure settings to receive notifications
You have the following options for receiving Access Approval requests:
Receive requests through email.
Receive requests through Pub/Sub.
You can choose both of these options by following the instructions in
Setting up email and Pub/Sub
notifications .
Approve Access Approval requests
After you have enrolled some users as approvers, those users receive all
access requests.
Console cURL
More
To approve an Access Approval request using the
Google Cloud console, do the following:
To see all your pending approval requests, go to the
Access Approval page in the Google Cloud console.
Go to Access Approval
If you have opted to receive Access Approval requests through
email, you can also go to this page by clicking the link in the email
sent to you with the approval request.
Note: You can only see the pending Access Approval requests for
the hierarchy level you have selected. For example, if you have selected a
folder, you can only see the Access Approval requests made for
folder-level resources, not all projects within those folders.
To approve a request, click Approve .
You also have the option of dismissing the request. Dismissing the
request is optional because access continues to be denied even if you
don't dismiss the request.
If you don't approve the Google employee's access request within 14
days or before the request expires, the request is automatically
dismissed.
In the dialog box that opens, select the date and time when you want
the access to expire.
Note: Bulk approve option doesn't let you select the expiration
date and time.
Select Approve to approve access till the set expiration date and
time.
Optional: To validate the signature on a request after approving it,
follow the steps given in
Validate a request signature .
To approve an Access Approval request using cURL, do the following:
Take the approvalRequest name from the Pub/Sub message.
Make an API call to approve or dismiss that approvalRequest .
# HTTP POST request with empty body ( an effect of using -d '' )
# service-account-credential.json is attained by going to the
# IAM -> Service Accounts menu in the cloud console and creating
# a service account.
curl -H "$(oauth2l header --json service-account-credentials.json cloud-platform)" \
-d '' https://accessapproval.googleapis.com/v1/projects/<var>PROJECT_ID</var>/approvalRequests/<var>APPROVAL_REQUEST_ID</var>:approve
Note: This preceding example is a sample request using cURL. You can
approve an access request by appending :approve to a POST request to
the mentioned URI that contains a unique approvalRequestId .
You can reply to a request with one of the following options:
Action
Effect
Google access state
:approve
Approves the request.
Denied before approval, approved after approval.
:dismiss
Dismisses the request for approval. We recommend dismissing the access request instead of not taking any action. Dismissing the access request prompts the Google employee to follow up.
Denied before dismissal, denied after dismissal.
No action
Google employee access is still denied. Google employee needs to open a new request to access the resource after the requestedExpiration time passes.
Denied before no action, denied after expiration time.
After you approve the request, the request status changes to Approved . Any
Google employee with characteristics matching the approval scope can make an
access within the approved time frame. These matching characteristics include
the same justification, location, or desk location.
Access Approval doesn't provide any IAM role or any
new permission to the Google employee who requested access.
If you don't approve the Google employee's access request, access is denied to
the Google employee. Dismissing the request only removes it from your list of
pending requests. If you fail to dismiss an approval request, access continues
to be denied.
After enabling,
Access Transparency logs all
accesses to Customer Data that you approve.
Access to Google personnel is allowed until the approval expires or the
justification for access is no longer valid. For example, access expires if the
support case for which Google personnel requested access is closed.
What's next
Learn about the actions by Google personnel that are excluded from
Access Approval notifications .
Learn about the fields in an Access Approval request .
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
