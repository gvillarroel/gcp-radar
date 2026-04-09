---
title: "Using Cloud Monitoring with Cloud KMS \_|\_ Cloud Key Management Service \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/monitoring
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/monitoring
  title: "Using Cloud Monitoring with Cloud KMS \_|\_ Cloud Key Management Service\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Using Cloud Monitoring with Cloud KMS | Cloud Key Management Service | Google Cloud Documentation
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
Create a counter metric
Create an alerting policy
Monitoring administrative activities vs. data access
Rate quota metrics
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Using Cloud Monitoring with Cloud KMS
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Create a counter metric
Create an alerting policy
Monitoring administrative activities vs. data access
Rate quota metrics
What's next
Cloud Monitoring can be used to monitor operations performed on
resources in Cloud Key Management Service.
This topic provides:
an example for monitoring when a key version is scheduled for destruction
information about monitoring other Cloud KMS resources and
operations
Before you begin
If you haven't already done so,
set up a Google Cloud project that has the Cloud Key Management Service API enabled.
These steps are documented in the Cloud KMS Quickstart .
Create a counter metric
Use the gcloud logging metrics create command to create a counter metric
that will monitor any occurrence of the scheduled destruction of a key version.
gcloud logging metrics create key_version_destruction \
--description "Key version scheduled for destruction" \
--log-filter "resource.type=cloudkms_cryptokeyversion \
AND protoPayload.methodName=DestroyCryptoKeyVersion"
You can list your counter metrics using the gcloud logging metrics list
command:
gcloud logging metrics list
For more information about creating a counter metric, including via the
Google Cloud console and the Monitoring API, see
Creating a counter metric .
Create an alerting policy
You can create alerting policies to monitor the values of metrics and to notify you when
those metrics violate a condition.
In the Google Cloud console, go to the
notifications Alerting page:
Go to Alerting
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
If you haven't created your notification channels and if you want to be notified, then click
Edit Notification Channels and add your notification channels. Return to the
Alerting page after you add your channels.
From the Alerting page, select Create policy .
To select the metric, expand the Select a metric menu and then do the following:
To limit the menu to relevant entries, enter key_version
into the filter bar. If there are no results after you filter the menu, then disable
the Show only active resources & metrics toggle.
For the Resource type , select Global .
For the Metric category , select Logs-Based Metric .
For the Metric , select logging/user/key_version_destruction .
Select Apply .
Click Next .
The settings in the Configure alert trigger page determine when the alert is triggered.
Complete this page with the settings in the following table.
Configure alert trigger page Field
Value
Alert trigger
Any time series violates
Threshold position
Above threshold
Threshold value
0
Advanced Options: Retest window
No retest
Click Next .
Optional: To add notifications to your alerting policy, click
Notification channels . In the dialog, select one or more notification
channels from the menu, and then click OK .
Optional: Update the Incident autoclose duration . This field determines when
Monitoring closes incidents in the absence of metric data.
Optional: Click Documentation , and then add any information that you
want included in a notification message.
Click Alert name and enter a name for the alerting policy.
Click Create Policy .
For more information, see Alerting overview .
To test your new notification, schedule a key version for destruction and
then check your email to see if the notification was sent.
This alert will be triggered each time a key version has been scheduled for
destruction. Note that the alert will get automatically resolved (even though
the key version remains scheduled for destruction), so there will be two email
notifications, one for the scheduled destruction, and one for the alert being
resolved.
For more information about alert policies, see Introduction to alerting . To
learn how to turn on, turn off, edit, copy, or delete an alert policy, see
Managing policies .
For information about different types of notifications, see
Notification options .
Note: If you only wanted to test a notification for scheduling destruction of a
key version, but you do not want it actually destroyed, restore the key
version that you scheduled for destruction.
Monitoring administrative activities vs. data access
The scheduled destruction of a key version is an administrator activity .
Administrator activities are logged automatically. If you want to create an
alert for data access of a Cloud KMS resource, e.g. monitoring
when a key is used for encryption, you need to enable Data Access logs and
then create an alert policy as described in this topic.
For more information about logging of Cloud KMS administrative
activities and data access, see Using Cloud Audit Logs with
Cloud KMS .
Rate quota metrics
Cloud KMS supports the following rate quota metrics:
cloudkms.googleapis.com/crypto_requests
cloudkms.googleapis.com/external_kms_requests
cloudkms.googleapis.com/hsm_asymmetric_requests
cloudkms.googleapis.com/hsm_symmetric_requests
cloudkms.googleapis.com/read_requests
cloudkms.googleapis.com/write_requests
For information about monitoring these quotas using Cloud Monitoring, see
Set up quota alerts and monitoring .
What's next
Monitor your external key manager usage .
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
