---
title: "Monitor EKM usage \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/monitor-ekm-usage
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/monitor-ekm-usage
  title: "Monitor EKM usage \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Monitor EKM usage | Cloud Key Management Service | Google Cloud Documentation
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
Before you begin Required roles
Create a dashboard to monitor your EKM
View your EKM dashboard
Create an alert policy for EKM metrics
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Monitor EKM usage
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Create a dashboard to monitor your EKM
View your EKM dashboard
Create an alert policy for EKM metrics
What's next
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can use Cloud Monitoring to monitor your external key manager (EKM)
connection. The following metrics can help you understand your EKM usage:
cloudkms.googleapis.com/ekm/external/request_latencies
cloudkms.googleapis.com/ekm/external/request_count
This page shows you how to create a dashboard to track metrics related to your
Cloud EKM keys and external key manager connection, such as request
counts and latencies. For more information about these metrics, see
cloudkms metrics . For more
information about the dashboard creation process described in the following
sections, see
Managing dashboards by API .
Before you begin
The steps on this page assume the following:
You already have Cloud EKM set up in a project, including an
EKM connection
and one or more external keys .
Required roles
To get the permissions that
you need to create dashboards using the gcloud CLI,
ask your administrator to grant you the
following IAM roles on your project:
Monitoring Dashboard Configuration Editor ( roles/monitoring.dashboardEditor )
Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to create dashboards using the gcloud CLI. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create dashboards using the gcloud CLI:
monitoring.dashboards.create
monitoring.dashboards.delete
monitoring.dashboards.update
serviceusage.services.use
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Create a dashboard to monitor your EKM
To monitor the status of your EKM, create a dashboard that monitors your
request count and latencies:
Download the dashboard configuration:
ekm-dashboard.json .
Create a custom dashboard with the configuration file by running the
following command:
gcloud monitoring dashboards create \
--config-from-file=ekm-dashboard.json
View your EKM dashboard
In the Google Cloud console, go to the Monitoring page, or use the
following button:
Go to Monitoring
Select Resources > Dashboards and view the dashboard
named Cloud KMS EKM .
Create an alert policy for EKM metrics
Complete the following steps using the gcloud CLI:
Select a notification channel to receive EKM metrics alerts.
To use an existing notification channel, first view your channels:
gcloud beta monitoring channels list
Choose a channel from the list. Make note of the notification channel
ID; you need it later.
To use a new notification channel, create the channel using an email
address:
gcloud beta monitoring channels create \
--display-name="Notification channel for EKM latency alert" \
--description="This notification channel receives EKM latency metric alerts" \
--type=email \
--channel-labels=email_address= NOTIFICATION_EMAIL
If successful, this command returns the name of the new channel. Make
note of the notification channel ID; you need it later. The output is
similar to the following:
Created notification channel [projects/ PROJECT_ID /notificationChannels/ NOTIFICATION_CHANNEL_ID ]
Create an alerting policy using the monitoring policies
create command:
gcloud monitoring policies create \
--notification-channels = NOTIFICATION_CHANNEL_ID \
--aggregation = ' {"alignmentPeriod": "60s","perSeriesAligner": "ALIGN_PERCENTILE_99"}' \
--condition-display-name = "EKM Request Latency > 150ms" \
--condition-filter = 'resource.type="cloudkms.googleapis.com/Project"
metric.type="cloudkms.googleapis.com/ekm/external/request_latencies"
metric.labels.ekm_service_region=" LOCATION "
metric.labels.method=" LABEL_METHOD "' \
--duration = "0s" \
--if = "> 150" \
--display-name = "EKM metric latency alert" \
--trigger-count = 1 \
--combiner = 'AND'
Replace the following:
NOTIFICATION_CHANNEL_ID : the ID of the notification channel.
LOCATION : the region for which you want to alert on this
metric. If you want to alert regardless of region, omit
metric.labels.ekm_service_region .
LABEL_METHOD : the method label that you want to
alert on—for example, wrap , unwrap , asymmetricSign ,
checkCryptoSpacePermissions , createKey , getInfo , or
getPublicKey . You can use Metrics Explorer to explore
metric labels.
What's next
Explore your data across various metric dimensions using
Metrics Explorer .
Optional: Create alerting policies .
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
