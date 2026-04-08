---
title: "Authenticate to Access Approval \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/authentication
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/authentication
  title: "Authenticate to Access Approval \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Authenticate to Access Approval | Google Cloud Documentation
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
Authenticate to Access Approval
REST reference
Access Approval APIs
REST Resources
folders
Overview
deleteAccessApprovalSettings
getAccessApprovalSettings
getServiceAccount
updateAccessApprovalSettings
folders.approvalRequests
Overview
approve
dismiss
get
invalidate
list
organizations
Overview
deleteAccessApprovalSettings
getAccessApprovalSettings
getServiceAccount
updateAccessApprovalSettings
organizations.approvalRequests
Overview
approve
dismiss
get
invalidate
list
projects
Overview
deleteAccessApprovalSettings
getAccessApprovalSettings
getServiceAccount
updateAccessApprovalSettings
projects.approvalRequests
Overview
approve
dismiss
get
invalidate
list
Types
AccessApprovalServiceAccount
AccessApprovalSettings
CryptoKeyVersion
ListApprovalRequestsResponse
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
API access Google Cloud CLI
REST
Access control for Access Approval
What's next
Technology areas
Reference
Was this helpful?
Authenticate to Access Approval
Stay organized with collections
Save and categorize content based on your preferences.
On this page
API access Google Cloud CLI
REST
Access control for Access Approval
What's next
This document describes how to authenticate to Access Approval programmatically. How
you authenticate to Access Approval depends on the interface you use to access the API
and the environment where your code is running.
For more information about Google Cloud authentication, see the
Authentication methods .
API access
Access Approval supports programmatic access. You can access the API in
the following ways:
Google Cloud CLI
REST
Google Cloud CLI
When you use the gcloud CLI to access
Access Approval, you
log in to the gcloud CLI with a user
account, which provides the credentials used by the gcloud CLI commands.
If your organization's security policies prevent user accounts from having the required
permissions, you can use service account impersonation .
For more information, see
Authenticate for using the gcloud CLI .
For more information about using the gcloud CLI with Access Approval,
see the gcloud CLI reference pages .
REST
You can authenticate to
the Access Approval API
by using your gcloud CLI credentials or by using
Application Default Credentials .
For more information about authentication for REST requests, see
Authenticate for using REST .
For information about the types of credentials, see
gcloud CLI credentials and ADC credentials .
Access control for Access Approval
After you authenticate to Access Approval, you must be authorized to access
Google Cloud resources. Access Approval uses
Identity and Access Management (IAM) for authorization.
For more information about the roles for Access Approval, see
Access control with IAM .
For more information about IAM and authorization, see
IAM overview .
What's next
Learn about Google Cloud authentication methods .
See a list of authentication use cases .
Was this helpful?
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
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
