---
title: "Asymmetric encryption \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kms/docs/asymmetric-encryption
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/asymmetric-encryption
  title: "Asymmetric encryption \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Asymmetric encryption | Cloud Key Management Service | Google Cloud Documentation
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
Asymmetric encryption workflow
Example use case for asymmetric encryption
Asymmetric encryption algorithms
Cloud KMS asymmetric encryption functionality
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Asymmetric encryption
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Asymmetric encryption workflow
Example use case for asymmetric encryption
Asymmetric encryption algorithms
Cloud KMS asymmetric encryption functionality
Asymmetric encryption is the process of using a public key from a
public/private key pair to encrypt plaintext, and then using the corresponding
private key to decrypt the ciphertext. Asymmetric encryption relies on
asymmetric cryptography, also known as public key cryptography.
Symmetric encryption, on the other hand, uses the same key to encrypt and
decrypt data.
Asymmetric encryption workflow
The following describes the flow for using an asymmetric key to encrypt and
decrypt data. The two participants in this workflow consists of a sender and a
recipient. The sender creates ciphertext using the recipient's public key, and
then the recipient decrypts the ciphertext using the recipient's private key.
Only someone with knowledge of the private key can decrypt the ciphertext.
The sender retrieves the recipient's public key.
The sender uses the public key to encrypt plaintext.
The sender sends the ciphertext to the recipient.
The recipient uses the recipient's private key to decrypt the ciphertext. The
recipient can now view the plaintext.
Example use case for asymmetric encryption
Asymmetric encryption only supports a very small plaintext size, so
asymmetric encryption is generally used for encryption keys, not large pieces of
data. As an example, you can use asymmetric encryption as a variation of
envelope encryption . In this scenario, anyone with access to the public key
can encrypt the data encryption key (DEK). Only Cloud KMS can then
decrypt the encrypted DEK, on behalf of the owner of the asymmetric key.
Asymmetric encryption algorithms
Cloud Key Management Service supports RSA algorithms for asymmetric encryption. RSA is
an industry standard algorithm and offers choices of key size and digest
algorithm. RSA cryptography relies on the difficulty in factoring a large
integer into two or more factors. The larger the key size, the more difficult it
is to factor the integers.
Cloud KMS asymmetric encryption functionality
Cloud KMS provides the following functionality related to
asymmetric encryption.
Ability to create an asymmetric key with key purpose of
ASYMMETRIC_DECRYPT . For information about which algorithms
Cloud KMS supports, see asymmetric encryption algorithms .
Ability to retrieve the public key for an asymmetric key. You use the
public key to encrypt data . Cloud KMS does not directly
provide a method to asymmetrically encrypt data. Instead, you encrypt data using
openly available SDKs and tools, such as OpenSSL . These SDKs and tools
require the public key that you retrieve from Cloud KMS.
Ability to decrypt data with an asymmetric key .
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
