---
title: "Review and approve access requests using the Google-managed signing key \_\
  |\_ Access Approval \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys
  title: "Review and approve access requests using the Google-managed signing key\
    \ \_|\_ Access Approval \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Review and approve access requests using the Google-managed signing key | Access Approval | Google Cloud Documentation
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
Assured Workloads
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
Before you begin Required roles
Enroll in Access Approval Access Approval enrollment mode
Configure settings Select services
Set up email and Pub/Sub notifications
Choose your signing key
Review Approval requests
Clean up
What's next
The names for some Assured Workload control packages are changing. For information about the name change, see Control package renaming notice .
Home
Technology areas
Assured Workloads
Cloud provider access management
Access Approval
Guides
Was this helpful?
Send feedback
On this page
Before you begin Required roles
Enroll in Access Approval Access Approval enrollment mode
Configure settings Select services
Set up email and Pub/Sub notifications
Choose your signing key
Review Approval requests
Clean up
What's next
This document shows you how to set up Access Approval using the
Google Cloud console to receive email notifications of access requests for a project.
Access Approval ensures that a cryptographically-signed approval
is present for Google personnel to access your content stored on
Google Cloud.
Before you begin
Enable
Access Transparency for your organization. For more information, see
Enabling Access Transparency .
Required roles
To get the permissions that
you need to set up Access Approval and approve access requests,
ask your administrator to grant you the
following IAM roles on your project:
View and update Access Approval configuration and approve access requests:
Access Approval Config Editor ( roles/accessapproval.configEditor )
View Access Approval configuration and approve access requests:
Access Approval Approver ( roles/accessapproval.approver )
View Access Approval configuration and access requests and download log reports:
Access Approval Viewer ( roles/accessapproval.viewer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Enroll in Access Approval
To enroll in Access Approval, do the following:
In the Google Cloud console, select the project for which you want to
enable Access Approval.
Go to project selector
Go to the Access Approval page.
Go to Access Approval
To enroll in Access Approval, click Enroll .
In the dialog, select the enrollment mode for your policy and click Enroll .
Access Approval enrollment mode
You can configure Access Approval in one of three modes and can change
the mode at any time in the Access Approval settings. The following
modes can be selected:
Transparency (Recommended) : Use this mode to monitor Google administrative access into your workload without additional approval. For more information, see the Access Transparency docs .
Streamlined support : Use this mode to automatically approve Customer Care
access to work on your support cases. Other access reasons require Access Approval.
Access Approval : Use this mode to enable full Access Approval functionality for all accesses.
Access Transparency logs are generated automatically for all Access Approval modes.
Configure settings
On the Access Approval page in the Google Cloud console, click
settings Manage settings .
Select services
Access Approval settings, including the list of enabled products, are inherited from the parent resource. You can expand the scope of enrollment by enabling Access Approval for all or selected additional services supported services .
Set up email and Pub/ Sub notifications
This section explains how you can receive access request notifications for this
project.
Add yourself as an approver for Access Approval requests and configure notifications
To add yourself as an approver so you can review and approve access requests, do
the following:
Go to the Access Approval page in the Google Cloud console.
Go to Access Approval
Click settings Manage settings .
To enable email notifications, add your email address in the
User or group email field under Set up approval notifications .
To enable Pub/Sub notifications:
Add your Pub/Sub topic in the Pub/Sub topic field under Set up approval notifications .
In Identity and Access Management (IAM), grant the Pub/Sub Publisher role ( roles/pubsub.publisher ) to the customer-approval-jobs@system.gserviceaccount.com principal to allow Access Approval to create notifications. Notifications won't be created without this step.
Review Default Settings
Default settings govern the behavior of Access Approval requests.
Prefer resource specific approval requests :
Sets the default scope of Access Approval requests. By default, this setting is disabled. If you enable this setting, the number of Access Approval requests that you receive to access the same data might increase, possibly delaying assistance from Google support.
Example Defaults:
Disabled: product.googleapis.com/project/12345/
Enabled: product.googleapis.com/project/12345/instances/abcde
Approval Request Default Expiration Days :
Set the default expiration for Access Approval requests. This can be changed at the time of approval for each request.
Preferred maximum scope of access :
Sets the largest recommended resource access scope for a Google administrator to request.
For example, when set to Project, Google administrators will request Project or Resource level access.
Choose your signing key
Access Approval uses a signing key to verify the integrity of the
Access Approval request.
By default, a Google-owned and managed key is used, and doesn't require any additional
configuration.
To optionally configure a customer managed encryption key, see setting up a custom key .
Review Approval requests
After you enroll in Access Approval and add yourself as an approver for access requests, you can expect to receive email notifications for
access requests.
The following image shows a sample email notification that Access Approval
sends when Google personnel request access to Customer Data.
To review and approve an incoming access request, do the following:
Go to the Access Approval page in the Google Cloud console.
Go to Access Approval
To be taken to this page, you can also click the link in the email
sent to you with the approval request.
Click Approve .
After you approve the request, Google personnel with
characteristics matching the approval, such as the same
justification, location, or desk location, can access the specified resource and
its child resources within the approved timeframe.
Clean up
To unenroll from Access Approval, do the following:
On the Access Approval page in the Google Cloud console,
click Manage settings .
Click Unenroll .
In the dialog that opens, click Unenroll .
To disable Access Transparency for your organization, contact Cloud Customer Care .
No additional steps are required.
What's next
Learn about the anatomy of an access request .
Learn how to approve Access Approval requests .
Learn how to view historical Access Approval requests .
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
