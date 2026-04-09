---
title: "MAC signatures \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/mac-signatures
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/mac-signatures
  title: "MAC signatures \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

MAC signatures | Cloud Key Management Service | Google Cloud Documentation
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
Example use case for a MAC signature
MAC signing workflow
Signing algorithms
Limitations
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
MAC signatures
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Example use case for a MAC signature
MAC signing workflow
Signing algorithms
Limitations
What's next
A MAC signature is a cryptographic output used to verify the integrity and
authenticity of data. A MAC signature algorithm lets you perform two distinct
operations:
A signing operation, which uses a signing key to produce a MAC signature
over raw data.
A verification operation, where the authenticity of the message can be
validated given the signing key and the MAC tag to be verified.
There are two main purposes of a MAC signature:
Verify the integrity of the signed data.
Verify the authenticity of the message.
While the purpose of MAC signatures is similar to that of digital signatures,
MAC signatures rely on symmetric cryptography. MAC tags are generated and
verified using the same secret key. The sender and the receiver of
a message must both have the same key to use MAC signatures.
Note: Since the sender and the receiver have the same cryptographic material,
you can't use MAC tags to prove which of the two signed the file. If you need to
be able to verify that the message was signed by the sender, use
digital signatures based on asymmetric keys
instead.
Example use case for a MAC signature
MAC algorithms like keyed-hash message authentication code (HMAC) are an
excellent file transfer data integrity-checking mechanism because of their
efficiency. Hash functions can take a message of arbitrary length and transform
it into a fixed-length digest, thus maximizing bandwidth usage.
MAC signing workflow
The following describes the flow for creating and validating a signature. The
two participants in this workflow consist of the signer of data, and the data
recipient.
The signer and the recipient agree on using a specific, shared MAC key.
Both can use this key to create or verify MAC signatures.
The signer performs a sign operation over the data to compute a MAC tag.
The signer provides the data and the MAC tag to the data recipient.
The recipient uses the shared MAC key to verify the MAC signature. If
verification is unsuccessful, then the data has been altered.
Signing algorithms
Cloud Key Management Service only supports keyed-hash message authentication code (HMAC)
algorithms for MAC signing. HMAC algorithms use cryptographic hash functions,
such as SHA-2 or SHA-3, to compute the MAC tag. The strength of the HMAC
function depends on the strength of the hash function, the size of the hash
output, and the size of the key. For more information about HMAC signing
algorithms, see HMAC signing
algorithms .
Limitations
When using Cloud KMS for MAC signatures, the maximum file size is 16
KiB for Cloud HSM keys and 64 KiB for all other keys.
What's next
Learn about HMAC signing algorithms .
Create a key with the MAC key purpose and an
HMAC signing algorithm .
Create a MAC signature using an existing MAC key with a message.
Verify a MAC signature using an existing MAC key with a message and
its signature.
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
