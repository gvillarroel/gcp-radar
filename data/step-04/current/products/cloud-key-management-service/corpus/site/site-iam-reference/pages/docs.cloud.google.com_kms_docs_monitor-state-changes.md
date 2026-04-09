---
title: "Monitor state changes using Pub/Sub \_|\_ Cloud Key Management Service \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/monitor-state-changes
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/monitor-state-changes
  title: "Monitor state changes using Pub/Sub \_|\_ Cloud Key Management Service \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Monitor state changes using Pub/Sub | Cloud Key Management Service | Google Cloud Documentation
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
Configure a feed Notify on all resource changes
Notify on specific resource changes
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Monitor state changes using Pub/ Sub
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Configure a feed Notify on all resource changes
Notify on specific resource changes
This page shows you how to use Pub/Sub to create notifications on
state changes for Cloud KMS resources.
Before you begin
To enable APIs, grant required permissions, and create a Pub/Sub
topic, follow the instructions in Before you
begin in
"Monitoring asset changes".
Configure a feed
Configure a feed that monitors the type of changes and resources that you are
interested in.
Notify on all resource changes
To create a feed, use the gcloud asset feeds create command.
gcloud asset feeds create FEED_NAME \
--project= PROJECT_ID \
--asset-types=" RESOURCE_TYPE " \
--pubsub-topic=" PUBSUB_TOPIC "
Replace the following:
FEED_NAME : The name to use for your Pub/Sub
feed.
PROJECT_ID : The ID of the Cloud KMS project you
want to monitor.
RESOURCE_TYPE : The types of resource for which you want
to receive notifications. Use commas between resource types—for
example,
cloudkms.googleapis.com/CryptoKey,cloudkms.googleapis.com/CryptoKeyVersion .
You can notify on any
supported resource
type ,
including the following:
cloudkms.googleapis.com/CryptoKey
cloudkms.googleapis.com/CryptoKeyVersion
cloudkms.googleapis.com/EkmConnection
cloudkms.googleapis.com/ImportJob
cloudkms.googleapis.com/KeyRing
PUBSUB_TOPIC : The name of the Pub/Sub topic
you created in Before you begin
This creates a notification when resources of the indicated type are created or
updated. The notification indicates that the resource has been updated, but does
not include detailed information about the update. For example, an update
notification for a CryptoKeyVersion might mean the version was made primary or
that the version was scheduled for destruction. When you receive a notification
that a resource has been updated, you should check the resource to find its
current state.
Note: Cloud KMS does not support resource deletion. Key rings, keys,
and key versions can't be deleted. The only way to fully delete
Cloud KMS resources is to delete the project that contains them.
Scheduling a CryptoKeyVersion for destruction and destruction of
CryptoKeyVersion resources are update operations.
Notify on specific resource changes
To create a feed with a condition, use the gcloud asset feeds create
command with the --condition-expression flag.
gcloud asset feeds create FEED_NAME \
--project= PROJECT_ID \
--asset-types=" RESOURCE_TYPE " \
--pubsub-topic=" PUBSUB_TOPIC " \
--condition-expression=" CONDITION_EXPRESSION "
Replace the following:
FEED_NAME : The name to use for your Pub/Sub
feed.
PROJECT_ID : The ID of your Cloud KMS project.
RESOURCE_TYPE : The type of resource for which you want to
receive notifications—for example,
cloudkms.googleapis.com/CryptoKeyVersion . You can notify on any
supported resource
type ,
including the following:
cloudkms.googleapis.com/CryptoKey
cloudkms.googleapis.com/CryptoKeyVersion
cloudkms.googleapis.com/EkmConnection
cloudkms.googleapis.com/ImportJob
cloudkms.googleapis.com/KeyRing
PUBSUB_TOPIC : The name of the Pub/Sub topic
you created in Before you begin
CONDITION_EXPRESSION : A condition expression in Common
Expression Language (CEL) . For example,
"folders/ FOLDER_NUMBER " in temporal_asset.asset.ancestors
causes the feed to only create notifications when the indicated resource is
located within folder FOLDER_NUMBER .
This creates a notification when resources of the indicated type that match the
specified condition expression are created, deleted, or updated.
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
