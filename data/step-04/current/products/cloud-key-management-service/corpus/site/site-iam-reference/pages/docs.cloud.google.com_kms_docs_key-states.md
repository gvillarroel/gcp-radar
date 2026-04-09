---
title: "Key version states \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/key-states
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/key-states
  title: "Key version states \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Key version states | Cloud Key Management Service | Google Cloud Documentation
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
Changing states of a key version
Impact of key version state on cryptographic operations Symmetric encryption
Asymmetric encryption or digital signing
Variable duration of the scheduled for destruction state
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Key version states
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Changing states of a key version
Impact of key version state on cryptographic operations Symmetric encryption
Asymmetric encryption or digital signing
Variable duration of the scheduled for destruction state
A key version has a
state :
Pending generation ( PENDING_GENERATION ):
(Applies to asymmetric keys only.) This key version is still being generated. It
may not be used, enabled, disabled, or destroyed yet. Cloud Key Management Service will
automatically change the state to enabled as soon as the version is ready.
Pending import ( PENDING_IMPORT ):
(Applies to imported keys only.) This key version is still being imported. It
may not be used, enabled, disabled, or destroyed yet. Cloud Key Management Service will
automatically change the state to enabled as soon as the version is ready.
Enabled ( ENABLED ): The key version is ready for
use.
Disabled ( DISABLED ): This key version may not
be used, but the key material is still available, and the version can be
re-enabled .
Scheduled for destruction
( DESTROY_SCHEDULED ): This key version is scheduled for destruction and will be
destroyed soon. While a key version is in this state, it can't be used for
cryptographic operations, and requests to use the key fail. The key version can
be restored into the disabled state
within the scheduled destruction period. This state corresponds with
Stage 2 - Soft Deletion
in the data deletion pipeline.
Destroyed ( DESTROYED ): This key version is
destroyed, and the key material is no longer stored in Cloud KMS.
If the key version was used for asymmetric or symmetric encryption, any
ciphertext encrypted with this version is not recoverable. If the key version
was used for digital signing, new signatures cannot be created. Additionally,
for all asymmetric key versions, the public key is no longer available for
download. A key version may not leave the destroyed state once entered, except
when re-imported .
This state corresponds with
Stage 3 - Logical Deletion from Active Systems
in the data deletion pipeline, meaning key material is deleted from all active
Cloud KMS systems. It takes 45 days from destruction time for key
material to be deleted from all Google active and backup systems. See
Cloud KMS's deletion timeline
for more information.
Import failed ( IMPORT_FAILED ): This key
version could not be imported. See Troubleshooting failed
imports for additional information
about the conditions that cause import failures.
Note: Keys do not have states, only key versions have states.
Changing states of a key version
The following describes how a key version can change states:
When a key version for an asymmetric key is created, it starts with a state of
pending generation. When Cloud KMS finishes generating the key
version, its state automatically changes to enabled.
When a key version for a symmetric key is created, it starts with a state of
enabled.
A key version can move from enabled to disabled and from disabled to
enabled using
UpdateCryptoKeyVersion
and interfaces to this method. For examples, see
Enabling and disabling key versions .
A key version which is enabled or disabled can move to scheduled for
destruction using
DestroyCryptoKeyVersion
and interfaces to this method. For examples, see
Schedule a key version for destruction .
A key version which is scheduled for destruction can be reverted to disabled
using
RestoreCryptoKeyVersion
and interfaces to this method. For examples, see
Restore a key version .
The following diagram shows the allowable states for a key version.
Note that only key versions for asymmetric keys start in the pending generation
state. Key versions for symmetric keys start in the enabled state.
Impact of key version state on cryptographic operations
The impact of key version state on cryptographic operations depends on whether
the key is used for:
Symmetric encryption
Asymmetric encryption or digital signing
Symmetric encryption
Each symmetric encryption key has a designated
primary version which is used at that point in time to encrypt data. In
order for a key to be available for use to encrypt data, it needs to have a
primary key version which is enabled.
When a key is used to encrypt plaintext, its primary key version is
used to encrypt that data. The information as to which version was used to
encrypt data is stored in the ciphertext of the data. Only one version of a
key can be primary at any given point in time.
If the primary key version is disabled, that key version cannot be used to
encrypt data. Note that an enabled primary key version can be disabled,
scheduled for destruction or destroyed, and a version which is not enabled can
be made the primary version.
Which key version is primary does not impact the ability to decrypt data.
A key version can be used to decrypt data as long as it is enabled.
Asymmetric encryption or digital signing
Each time an asymmetric key is used for encryption or digital signing, a key
version must be specified. In order for the key version to be available for
asymmetric encryption or digital signing, the key version must be enabled. You
can retrieve a key version's public key only if the key version is enabled.
Variable duration of the scheduled for destruction state
By default, keys in Cloud KMS spend 30 days in the Scheduled for
destruction ( soft deleted ) state
before the key material is
logically deleted
from the system. This duration may be configured, with the following caveats:
The duration is only configurable during key creation.
Once specified, the duration for the key cannot be changed.
The duration applies to all versions of the key created in the future.
The minimum duration is 24 hours for all keys, except for import-only keys
which have a minimum duration of 0.
The maximum duration is 120 days.
The value is configured using the destroy_scheduled_duration field of the
CryptoKey
in the CreateCryptoKeyRequest .
We recommend that you use the default duration of 30 days for all keys unless
you have specific application or regulatory requirements that require a
different value.
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
