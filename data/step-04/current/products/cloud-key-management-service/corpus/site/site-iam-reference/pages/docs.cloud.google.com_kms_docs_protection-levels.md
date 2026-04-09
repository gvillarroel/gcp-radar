---
title: "Protection levels \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/protection-levels
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/protection-levels
  title: "Protection levels \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Protection levels | Cloud Key Management Service | Google Cloud Documentation
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
Software protection level
Hardware protection level
Single-tenant hardware protection level
External protection levels External over the internet protection level
External over VPC protection level
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Protection levels
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Software protection level
Hardware protection level
Single-tenant hardware protection level
External protection levels External over the internet protection level
External over VPC protection level
What's next
This page compares the different protection levels supported in
Cloud KMS:
Software
Cloud KMS keys with the SOFTWARE protection level are used for
cryptographic operations that are performed in software. Cloud KMS
keys can be generated by Google or imported.
Multi-tenant hardware
Cloud HSM keys with the HSM protection level are stored in a
Google-owned Hardware Security Module (HSM). Cryptographic operations using
these keys are performed in our HSMs. You can use Cloud HSM keys
the same way you use Cloud KMS keys. Cloud HSM keys
can be generated by Google or imported.
Single-tenant hardware
Cloud HSM keys with the HSM_SINGLE_TENANT protection level are
stored in a single-tenant instance in a Google-owned Hardware Security
Module (HSM). You control and manage the Single-tenant Cloud HSM
instance, which is a dedicated cluster of HSM partitions that you manage.
Cryptographic operations using these keys are performed in our HSMs. You can
use single-tenant Cloud HSM keys the same way you use
Cloud KMS keys. Single-tenant Cloud HSM keys can be
generated by Google or imported. For more information, see
Single-tenant Cloud HSM .
External over the internet
Cloud EKM keys with the EXTERNAL protection level are generated
and stored in your external key management (EKM) system. Cloud EKM
stores additional cryptographic material and a path to your unique key,
which is used to access your key over the internet.
External over VPC
Cloud EKM keys with the EXTERNAL_VPC protection level are
generated and stored in your external key management (EKM) system.
Cloud EKM stores additional cryptographic material and a path to
your unique key, which is used to access your key over a virtual private
cloud (VPC) network .
Keys with all of these protection levels share the following features:
Use your keys for customer-managed encryption key (CMEK) integrated
Google Cloud services.
Note: Some CMEK-integrated services do not support Cloud EKM keys.
To learn which CMEK-integrated services support Cloud EKM keys,
see CMEK integrations .
Use your keys with the Cloud KMS APIs or client libraries, without
any specialized code based on the protection level of the key.
Control access to your keys using Identity and Access Management (IAM) roles.
Control whether each key version is Enabled or Disabled from
Cloud KMS.
Key operations are captured in audit logs. Data access logging can be
enabled.
Software protection level
Cloud KMS uses the BoringCrypto module (BCM) for all cryptographic
operations for software keys. The BCM is FIPS 140-2
validated. Cloud KMS software keys use FIPS 140-2 Level 1–validated
Cryptographic Primitives of the BCM.
The software protection level is the cheapest protection level.
Software keys are a good choice for use cases that do not have
specific regulatory requirements for a higher FIPs 140-2 validation level.
Hardware protection level
Cloud HSM helps you enforce regulatory compliance for your workloads in
Google Cloud. With Cloud HSM, you can generate encryption keys
and perform cryptographic operations in FIPS 140-2 Level
3 validated HSMs. The service is fully managed, so
you can protect your most sensitive workloads without worrying about the
operational overhead of managing an HSM cluster. Cloud HSM provides a
layer of abstraction on top of the HSM modules.
This abstraction lets you use your keys in CMEK integrations or the
Cloud KMS APIs or client libraries without HSM-specific code.
Hardware key versions are more expensive, but they provide substantial security
benefits relative to software keys.
Each Cloud HSM key has an
attestation statement that contains certified information about your key.
This attestation and its associated certificate chains can be used to verify
the authenticity of the statement and attributes of the key and HSM.
Single-tenant hardware protection level
With Single-tenant Cloud HSM, you create and manage your own
Single-tenant Cloud HSM instance within Google-managed HSMs. Each instance is
a cluster of dedicated partitions on HSMs in a Google Cloud region. Your
instance administrators have administrative control of your instance.
Single-tenant Cloud HSM provides the same functionality as
Multi-tenant Cloud HSM, with the added benefit of cryptographic isolation
from other Google Cloud customers. For more information about
functionality shared by all Cloud HSM keys, see Hardware protection
level earlier on this page.
Single-tenant Cloud HSM instances incur additional expenses relative to
Multi-tenant Cloud HSM.
External protection levels
Cloud External Key Manager (Cloud EKM) keys are keys that you manage in a supported
external key management (EKM) partner service and use in
Google Cloud services and Cloud KMS APIs and client libraries.
Cloud EKM keys can be software-backed or hardware-backed, depending on
your EKM provider. You can use your Cloud EKM keys in CMEK-integrated
services or using the Cloud KMS APIs and client libraries.
Cloud EKM protection levels are the most expensive.
When you use Cloud EKM keys, you can be sure
that Google Cloud can't access your key material.
To see which CMEK-integrated services support Cloud EKM keys,
see CMEK integrations and
apply the Show only EKM compatible services filter.
External over the internet protection level
You can use Cloud EKM keys over the internet in all locations supported
by Cloud KMS except nam-eur-asia1 and global .
Caution: When you use Cloud EKM keys over the internet, there's a risk
that the key can become unavailable. For better availability, consider using
Cloud HSM or Cloud EKM over a VPC network.
External over VPC protection level
You can use Cloud EKM keys over a VPC network for better availability
of your external keys. This better availability means that there's less of a
chance of your Cloud EKM keys and the resources they protect becoming
unavailable.
You can use Cloud EKM keys over a VPC network in most regional
locations supported by Cloud KMS.
Cloud EKM over a VPC network is not available in multi-region
locations.
What's next
Learn about compatible services that let
you use your keys in Google Cloud.
Learn about the Single-tenant Cloud HSM
protection level and how to create and manage a Single-tenant Cloud HSM
instance .
Learn how to create key rings and create
encryption keys .
Learn about importing keys .
Learn about external keys .
Learn about other considerations for using
Cloud EKM .
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
