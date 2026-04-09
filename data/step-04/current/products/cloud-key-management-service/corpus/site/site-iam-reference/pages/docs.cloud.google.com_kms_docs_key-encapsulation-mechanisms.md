---
title: "Key encapsulation mechanisms \_|\_ Cloud Key Management Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/key-encapsulation-mechanisms
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/key-encapsulation-mechanisms
  title: "Key encapsulation mechanisms \_|\_ Cloud Key Management Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Key encapsulation mechanisms | Cloud Key Management Service | Google Cloud Documentation
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
Encapsulation and decapsulation workflow
Post-quantum key encapsulation mechanisms (PQ-KEM)
Cloud KMS KEMs capabilities
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Key encapsulation mechanisms
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Encapsulation and decapsulation workflow
Post-quantum key encapsulation mechanisms (PQ-KEM)
Cloud KMS KEMs capabilities
A key encapsulation mechanism (KEM) is a cryptographic process that's used to establish a shared secret between two parties over an untrusted channel.
A key encapsulation mechanism involves three main algorithms:
Key generation : a key pair is generated that consists of a public key and a private key.
Encapsulation : the public key is used to produce a shared secret and matching ciphertext.
Decapsulation : the private key is used to recover the shared secret from the ciphertext.
Key encapsulation mechanisms are a fundamental building block for key exchange protocols
and Hybrid Public Key Encryption (HPKE) .
Encapsulation and decapsulation workflow
The following describes the process for using a KEM key pair to encapsulate and
decapsulate data. The two participants in this workflow are a sender and a
recipient. The sender creates a ciphertext and a shared secret using the recipient's public key, and
then the recipient decrypts the ciphertext using the recipient's private key to retrieve the shared secret.
Only someone with knowledge of the private key can decapsulate the ciphertext to retrieve the original shared secret.
The sender retrieves the recipient's public key.
The sender uses the public key to perform the encapsulation step, which generates a shared secret and a corresponding ciphertext.
The sender sends the ciphertext to the recipient.
The recipient uses the recipient's private key to decapsulate the
ciphertext. The recipient and the sender now have the same shared secret.
Post-quantum key encapsulation mechanisms (PQ-KEM)
Quantum computers have the potential to decrypt material encrypted by classical
encryption algorithms such as the widely used RSA and ECDSA algorithms,
which can make such encrypted material vulnerable to "harvest now, decrypt
later" attacks. In such attacks, adversaries collect today's encrypted data
that use classical encryption algorithms and store it, intending to decrypt it
later after powerful quantum computers become available. PQ-KEMs are designed
to be resistant to quantum attacks, ensuring that data encrypted with them
today will remain secure even in the quantum era, preventing future decryption
of information harvested today.
Cloud Key Management Service supports ML-KEM-768 and ML-KEM-1024, which were standardized by NIST in FIPS-203 , and
X-Wing , a hybrid KEM that combines ML-KEM-768 with X25519.
These algorithms have the following size values (in bytes):
Algorithm
Public key
Ciphertext
Shared Secret
ML_KEM_768
1184
1088
32
ML_KEM_1024
1568
1568
32
KEM_XWING
1216
1120
32
Cloud KMS KEMs capabilities
Cloud KMS provides the following capabilities related to key
encapsulation mechanisms:
Creating a KEM key with key purpose of
KEY_ENCAPSULATION and a key encapsulation algorithm .
Retrieving the public key for a KEM key.
Decapsulating a shared secret using the private key for a KEM key .
To encapsulate using Cloud KMS keys, you must use openly
available SDKs and tools with the public key. Cloud KMS doesn't
provide encapsulation capabilities.
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
