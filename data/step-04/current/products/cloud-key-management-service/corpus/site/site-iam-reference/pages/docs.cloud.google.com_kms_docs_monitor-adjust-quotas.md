---
title: "Monitor and adjust Cloud KMS quotas \_|\_ Cloud Key Management Service \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/monitor-adjust-quotas
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/monitor-adjust-quotas
  title: "Monitor and adjust Cloud KMS quotas \_|\_ Cloud Key Management Service \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Monitor and adjust Cloud KMS quotas | Cloud Key Management Service | Google Cloud Documentation
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
Cloud KMS
Start free
Overview
Guides
Reference
Samples
Resources
More
Technology areas
More
Overview
Guides
Reference
Samples
Resources
Cross-product tools
More
Console
Discover
Product overview
Protection levels
Overview
Cloud HSM overview
Single-tenant Cloud HSM overview
Cloud EKM overview
Reference architectures for Cloud EKM
CMEK overview
Cloud KMS with Autokey
Compatible services
Cloud HSM for Google Workspace
Locations
Get started
Cloud KMS resources
Key purposes and algorithms
Separation of duties
Create and use encryption keys
CMEK best practices
Create and manage Single-tenant Cloud HSM instances
Create keys
Automate key creation
Autokey overview
Enable Autokey
Create a resource with Autokey
Create a key ring
Create a key
Import keys
About key import
Key wrapping
Format a key for import
Manually wrap a key for import
Configure OpenSSL for manual key wrapping
Wrap a key using OpenSSL
Set up automatic key wrapping
Import a key version
Verify an imported key version
Create external keys
Set up Cloud EKM over the internet
Create an EKM connection
Create an external Key
Control access
Manage IAM roles
Use Organization Policy Contraints
Create custom organization policy constraints for Cloud KMS
CMEK organization policies
Control key destruction
Secure data using keys
Key APIs
Use gRPC
Access the API
Sort and filter API list results
Generate random bytes
Use Cloud KMS keys in Google Cloud
Encrypt and decrypt data
Envelope encryption
Additional authenticated data
Asymmetric encryption
Encrypt and decrypt data with a symmetric key
Encrypt and decrypt data with a raw symmetric key
Encrypt and decrypt data with an asymmetric key
Verify end-to-end data integrity
Encrypt application data
Set up client-side encryption with Tink
Onboard to Cloud HSM for Google Workspace
Sign and validate data
Digital signatures
Create and validate signatures
MAC signatures
Create and validate MAC signatures
Share secrets using key encapsulation mechanisms
Key encapsulation mechanisms
Encapsulate and decapsulate using KEMs
Manage keys
Resource consistency
Key version states
View keys and key details
View keys by project
View encryption metrics
View key usage
Get a Cloud KMS resource ID
Retrieve a public key
Attest a Cloud HSM key
Label a key
Create and manage tags
Enable and disable a key version
Destroy and restore a key version
Delete Cloud KMS resources
Rotate keys
About key rotation
Rotate a key
Re-encrypt data
Update external key reference
Monitor
Using Cloud Audit Logging
Cloud KMS Inventory Service audit logging
Monitor state changes
Monitor and adjust quotas
Use Cloud Monitoring
Monitor EKM usage
Troubleshoot
Troubleshoot failed imports
Troubleshoot EKM via VPC errors
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
Check your Cloud KMS quotas
Troubleshoot quota issues
Request higher Cloud KMS quotas
Cap Cloud KMS usage for a specific project
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Monitor and adjust Cloud KMS quotas
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Check your Cloud KMS quotas
Troubleshoot quota issues
Request higher Cloud KMS quotas
Cap Cloud KMS usage for a specific project
What's next
This page shows you how to manage your Cloud Key Management Service quotas. For details on
the quotas associated with Cloud KMS, see Quotas .
Before you begin
The following permissions are required to view project quotas:
resourcemanager.projects.get
monitoring.timeSeries.list
serviceusage.services.list
serviceusage.quotas.get
The serviceusage.quotas.update permission is required to change project
quotas.
For details about which IAM roles include these permissions, see
IAM permissions reference .
Check your Cloud KMS quotas
In the Google Cloud console, go to the API/Service Details page for the
Cloud KMS API.
Go to Cloud KMS API/Service
Details
This page lets you view quota details for the Cloud KMS API.
To view quotas for a different project, select the desired project in the
Google Cloud console header.
To filter by quota type, click in the Filter bar and select Quota
from the properties list, then choose the desired quota.
To filter by region, click in the Filter bar and select Dimensions
(e.g. location): from the properties list, then enter the desired region
name.
If you find you are nearing or exceeding your quotas, you can
Request higher Cloud KMS quotas .
Troubleshoot quota issues
If Cloud KMS denies a request because the relevant quota's limit has
been reached, it returns a RESOURCE_EXHAUSTED error. For requests made using
the Cloud KMS REST API, the RESOURCE_EXHAUSTED error has an HTTP
status code of 429 . Because Cloud KMS hosting project
quotas are enforced on a per second basis, occasional RESOURCE_EXHAUSTED
errors for HSM or EKM keys can be addressed by retrying the next second.
Recurring RESOURCE_EXHAUSTED errors indicate that your project regularly
exceeds one or more of its quotas. To address this issue, you can try any or all
of the following:
Reduce the rate at which your projects are making requests that use
Cloud KMS resources.
Request higher Cloud KMS quotas .
Use separate projects for your resources where appropriate so that multiple
resources aren't sharing the same quotas.
Calling project quotas - If you have a single project which contains
several resources that use the Cloud KMS API at high request
rates, consider moving resources to their own projects so that they do
not share the 60,000 QPM limit.
Hosting project quotas - If you have a single project which contains
Multi-tenant Cloud HSM or Cloud EKM keys that support
distinct resources with high QPS rates, consider splitting
Cloud KMS keys into separate projects based on details like
their priority or workload. This way fewer keys share the same
Cloud HSM and Cloud EKM quotas.
Note: Creating additional projects as described here may create issues with
other quotas, such as your Projects per user or Projects per billing
account quotas. For more information about Google Cloud
quotas, see the Cloud Quotas documentation .
Add a backoff mechanism to your client to handle RESOURCE_EXHAUSTED
errors.
Request higher Cloud KMS quotas
In the Google Cloud console, go to the API/Service Details page for the
Cloud KMS API.
Go to Cloud KMS API/Service
Details
This page lets you view quota details for the Cloud KMS API.
To request a quota increase for a different project, select the desired
project in the Google Cloud console header.
In the list of quotas, select the default or regional quota you wish to
increase, then click Edit Quotas .
Note: Multiregional and global quotas do not appear in the console. To
increase quota for multiregional locations or the global location, make the
request for a different region and mention the multiregion in the Request
description .
In the Quota changes pane, enter the desired limits for the selected
quotas.
In Request description , provide a description of the reason for your
request.
Click Next to continue.
Provide your contact information including Name , Email , and
Phone .
To complete your request, click Submit request .
Once your request is submitted, it is sent to approvers for evaluation. You
will be notified about the status of your request once it has been reviewed.
Cap Cloud KMS usage for a specific project
If you want to impose a stricter quota on usage of your Cloud KMS
resources, you can choose to set the quota for a given project to a lower limit
than the default. For example, if you have multiple projects whose resources use
Multi-tenant Cloud HSM or Cloud EKM keys in the same project, you
may choose to set the Cryptographic requests quota lower on each
calling project to ensure that you do not go over a quota like
HSM symmetric cryptographic requests per region
on the project which hosts those keys.
In the Google Cloud console, go to the API/Service Details page for the
Cloud KMS API.
Go to Cloud KMS API/Service
Details
This page lets you view quota details for the Cloud KMS API.
To decrease a quota for a different project, select the desired project in
the Google Cloud console header.
In the list of quotas, select the default or regional quota you wish to
decrease, then click Edit Quotas .
In the Quota changes pane, enter the desired limits for the selected
quotas.
Click Next to continue.
If you are reducing a quota by more than 10% of the current limit, a warning
appears. To continue applying a lower quota than the default, click
Confirm . Otherwise, you can click Cancel to go back and choose a new
limit.
To save your changes, click Submit request .
Your new limit is active immediately.
What's next
Learn more about Cloud Quotas .
For information on how client libraries surface the RESOURCE_EXHAUSTED
error, see Client library mapping .
View details about Cloud KMS quotas .
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
