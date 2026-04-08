---
title: "Review and approve access requests using a custom signing key \_|\_ Access\
  \ Approval \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-custom-keys
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-custom-keys
  title: "Review and approve access requests using a custom signing key \_|\_ Access\
    \ Approval \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Review and approve access requests using a custom signing key | Access Approval | Google Cloud Documentation
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
(Optional) Configure Access Approval with a custom signing key
Before you begin Configure a custom signing key (Optional)
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
(Optional) Configure Access Approval with a custom signing key
Before you begin Configure a custom signing key (Optional)
Clean up
What's next
(Optional) Configure Access Approval with a custom signing key
This document shows how to set up Access Approval using the
Google Cloud console to add an optional custom signing key for Access Approval requests.
Before you begin
Ensure that Access Approval is already enabled. For more information, see
Enabling Access Approval .
Configure a custom signing key (Optional)
Access Approval uses a signing key to verify the integrity of the
Access Approval request. By default, a Google-owned and managed key is used.
If you have Cloud EKM enabled, you can
choose an externally-managed signing key. For information about using external
keys, see Cloud EKM overview .
You can also choose to create a Cloud KMS signing key with
an algorithm of your choice. For more information, see
Creating asymmetric keys .
To use a custom signing key, follow the instructions in this section.
Get the email address of the service account
The email address for the service account is of the following form:
See more code actions.
Light code theme
Dark code theme
service- PROJECT_NUMBER @gcp-sa-accessapproval.iam.gserviceaccount.com
Replace PROJECT_NUMBER with the project number.
For example, the email address is service-p123456789@gcp-sa-accessapproval.iam.gserviceaccount.com
for a service account in a project whose project number is 123456789 .
To use your signing key, do the following:
On the Access Approval page in the Google Cloud console, select
Use a Cloud KMS signing key (advanced) .
Add the crypto key version resource ID.
The crypto key version resource ID must have the following form:
projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEYRING_ID /cryptoKeys/ CRYPTOKEY_ID /cryptoKeyVersions/ KEY_ID
For more information, see Getting a Cloud KMS resource ID .
To save your settings, click Save .
To use a custom signing key, you must grant the
Cloud KMS CryptoKey Signer/Verifier
( roles/cloudkms.signerVerifier ) IAM
role to the Access Approval service account for your project.
If the Access Approval service account doesn't have the permissions
to sign with the key you provided, you can grant the required permissions by
clicking Grant . After granting the permissions, click Save .
Clean up
To remove your optional custom signing key:
On the Access Approval page in the Google Cloud console, open settings.
Under Advanced Settings, select the default (Google) signing key option.
What's next
Learn about the anatomy of an access request .
Learn how to approve Access Approval requests .
Learn how to view historical Access Approval
requests .
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
