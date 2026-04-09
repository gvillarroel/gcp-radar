---
title: "Single-tenant Cloud HSM overview \_|\_ Cloud Key Management Service \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/single-tenant-hsm
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/single-tenant-hsm
  title: "Single-tenant Cloud HSM overview \_|\_ Cloud Key Management Service \_|\_\
    \ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Single-tenant Cloud HSM overview | Cloud Key Management Service | Google Cloud Documentation
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
Quorum-based authentication
Single-tenant Cloud HSM capabilities Instance management
Key management
Best practices for Single-tenant Cloud HSM
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Single-tenant Cloud HSM overview
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Quorum-based authentication
Single-tenant Cloud HSM capabilities Instance management
Key management
Best practices for Single-tenant Cloud HSM
What's next
This document provides an overview of the concepts and features of
Single-tenant Cloud HSM.
Single-tenant Cloud HSM lets you create and manage a single-tenant instance
of Cloud HSM. A Single-tenant Cloud HSM instance is a dedicated
cluster of partitions on hardware security modules (HSMs) for your exclusive
use. Each instance provides the same redundancy and high availability as
multi-tenant Cloud HSM. Each Single-tenant Cloud HSM cluster is
distributed across multiple HSMs in multiple zones within the selected region.
Each partition is cryptographically isolated from other partitions on the HSM.
You can grant or deny Google access to your cluster, and your instance
administrators manage the cluster. Instance administrators control the instance
using a quorum approval model that relies on asymmetric control keys for
two-factor authentication (2FA). You create your control keys outside of
Google Cloud, so that Google never has access to your private control
keys.
After your Single-tenant Cloud HSM instance is configured, your
Cloud KMS administrators can create single-tenant keys and your
developers can use them like any other Cloud HSM keys, with no code
changes.
Using Single-tenant Cloud HSM incurs costs. For pricing information, see
Cloud KMS pricing .
Quorum-based authentication
Single-tenant Cloud HSM uses quorum-based authentication to ensure that
critical operations are approved by multiple instance administrators. Before you
create a single-tenant instance, you must create a set of asymmetric control
keys outside of Cloud KMS and define how many approvals are required
for operations on the instance. For example, if your instance is managed by five
administrators, you can require three administrators to approve each maintenance
operation on the instance.
Operations that require quorum authentication have three stages:
Proposal : An instance administrator proposes an operation—for
example, registering a new control key. The proposal creates an immutable
snapshot of the system's current state. Proposals expire after 24 hours and
can be canceled at any time until the approved operation is initiated.
Approval : The required number of administrators must sign challenges
using their unique control key. Each signed challenge indicates an
administrator who approves the operation. When enough signed challenges are
ready, an instance administrator uploads them to approve the proposal. If
challenges are valid and the proposal hasn't expired, the proposal is
approved.
Execution : After a proposal is approved, but before it expires, you can
run the proposed operation.
Single-tenant Cloud HSM capabilities
This section describes the core capabilities of Single-tenant Cloud HSM.
Instance management
Your administrators manage the lifecycle of your Single-tenant Cloud HSM
instances.
Create an instance : You provision a new instance in a single region. The
creation process requires you to set up quorum authentication.
Get instance information : You can query an instance for its metadata and
configuration. This operation does not require quorum authentication.
Disable and enable an instance : You can temporarily disable an instance,
which revokes Google's access to the partitions. You can enable the instance
later. Both operations require quorum authentication. Enabling your instance
resets the disableDate to 730 days from the time of the enable operation.
While an instance is disabled, all keys created in the instance are
unavailable, and all operations that try to use those keys fail.
Refresh an instance : You must refresh your instance regularly to keep it
available. Instances must be refreshed every 730 days or less. Each instance
has a disableDate that indicates when the instance will be overdue for a
refresh. Refreshing your instance resets the disableDate to 730 days from
the time of the refresh. This operation requires quorum authentication.
Instances that aren't refreshed before the disableDate time are
automatically disabled.
Delete an instance : You can delete an instance. Deleting an instance
permanently destroys all keys that were created in that instance. This is a
destructive operation that is irreversible. Don't delete an instance unless
you want to crypto-shred all data that is encrypted using keys created in
the instance. This operation requires quorum authentication.
Key management
Your administrators own the control keys that you use for quorum authentication.
Your developers and other resource owners create and use cryptographic keys in
your instance.
Rotate admin control keys : Administrators can rotate the 2FA control key
for a member of the administrative quorum. This operation requires quorum
authentication.
Generate cryptographic keys : Your developers and resource owners can
create a CryptoKey with a single-tenant HSM protection level. This
operation doesn't require quorum authentication.
Perform cryptographic operations : After they are created, keys stored in
a single-tenant instance can be used for cryptographic operations just like
any other Cloud Key Management Service key.
Best practices for Single-tenant Cloud HSM
Follow these best practices when you use Single-tenant Cloud HSM:
Project liens : Use project liens
to protect projects that contain active Single-tenant Cloud HSM
instances. If you delete a project that contains a
Single-tenant Cloud HSM instance, the keys created in that instance can't
be recovered.
Physical tokens : Use physical tokens to hold the private 2FA keys
for your instance administrators. Store these physical tokens securely. If
you lose a quorum of keys, Google can't help you regain access to the
instance. Because instances must be updated regularly, losing a quorum of
keys eventually disables the instance.
Backup keys : Register at least one spare 2FA key beyond the keys held
by your quorum members. Keep your backup keys in a secure location where
you can access them if a quorum member's key is lost or stolen.
Separation of duties : Maintain separation of duties for your instance
administrators. Proposal, approval, and execution require separate
IAM roles, which should be distributed among at least two
individuals so that no individual has the permissions of all three roles. If
an individual has all of the underlying permissions, there is a greater risk
of accidental or intentional data loss.
Distribution of keys : Make sure that your private 2FA keys are securely
distributed among trusted individuals. No individual should retain
possession of enough private keys to achieve a quorum. If an individual has
access to enough private keys to meet the required quorum size, there is a
greater risk of accidental or intentional data loss.
Refresh schedule : Incorporate refreshing your Single-tenant Cloud HSM
instances into your ongoing maintenance procedures. You must monitor the
disableDate of each instance and complete a refresh operation before that
time. Refreshing your instance requires quorum approval, so be sure to
propose the refresh operation early enough that the proposal can be approved
and executed before the disableDate .
Caution: If your instance is not refreshed on time, the instance is
automatically disabled and any keys in the instance are unavailable until you
propose, approve, and execute an operation to re-enable the instance. Warning: If your Single-tenant Cloud HSM instance aligns with neither the
separation of duties nor the distribution of keys recommendations
described here, the risk of accidental or intentional data loss is much greater.
If an individual can access an account with all of the required
IAM permissions and also has access to enough private 2FA
keys, that individual can single-handedly propose, approve, and execute the
permanent deletion of your Single-tenant Cloud HSM instance, causing
unrecoverable data loss of any resources protected using keys created in that
instance. Google can't prevent or reverse the deletion of an instance.
What's next
Learn how to create and maintain a Single-tenant Cloud HSM
instance .
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
