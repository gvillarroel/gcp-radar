---
title: "Key wrapping \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/key-wrapping
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/key-wrapping
  title: "Key wrapping \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Key wrapping | Cloud Key Management Service | Google Cloud Documentation
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
Import methods
Key wrapping algorithms RSAES-OAEP with SHA-1/SHA-256 + AES-KWP
RSAES-OAEP with SHA-256
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Key wrapping
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Import methods
Key wrapping algorithms RSAES-OAEP with SHA-1/SHA-256 + AES-KWP
RSAES-OAEP with SHA-256
Key wrapping is the process of encrypting one key using another key, in order
to securely store it or transmit it over an untrusted channel. Key wrapping may
rely on either symmetric or asymmetric cryptography, depending on the context.
In Cloud Key Management Service, key wrapping is used to securely import user-provided
cryptographic keys. Importing keys requires an import job , and each import job
has an import method that specifies the key wrapping protocol to use.
Cloud KMS expects specific formats for imported key material.
Before your key material is wrapped for import, you may need to convert it to
the format expected by Cloud KMS. Formatting keys for import
contains details of the required formats, and provides instructions on how you
can convert your keys to the required format if necessary.
Once your key material is formatted properly, the Google Cloud CLI can
automatically wrap your key material before securely transmitting it to
Cloud KMS. For details, see Importing a key .
Alternatively, you may manually wrap your keys using the appropriate
cryptographic protocols. Wrapping a key using OpenSSL on Linux provides
one example of how you can do this.
Import methods
Cloud KMS provides the following import methods:
Import method
Import job key type
Key wrapping algorithm
RSA_OAEP_3072_SHA1_AES_256
3072-bit RSA
RSAES-OAEP with SHA-1 + AES-KWP
RSA_OAEP_4096_SHA1_AES_256
4096-bit RSA
RSAES-OAEP with SHA-1 + AES-KWP
RSA_OAEP_3072_SHA256_AES_256 (recommended)
3072-bit RSA
RSAES-OAEP with SHA-256 + AES-KWP
RSA_OAEP_4096_SHA256_AES_256
4096-bit RSA
RSAES-OAEP with SHA-256 + AES-KWP
RSA_OAEP_3072_SHA256
3072-bit RSA
RSAES-OAEP with SHA-256
RSA_OAEP_4096_SHA256
4096-bit RSA
RSAES-OAEP with SHA-256
Key wrapping algorithms
The import methods provided by Cloud KMS correspond to the
following key wrapping algorithms:
RSAES-OAEP with SHA-1/ SHA-256 + AES-KWP
This key wrapping algorithm is a hybrid encryption scheme that consists of both
an asymmetric key wrapping operation and a symmetric key wrapping operation:
The public key from the import job is used to encrypt a one-time-use
AES-256 key. Encryption is performed using RSAES-OAEP and MGF-1, along
with the digest algorithm specified by the import method. The one-time-use
AES-256 key is generated at the time the wrapping is performed.
The one-time-use AES-256 key from step 1 is used to encrypt the target
key material using AES Key Wrap with Padding .
The wrapped key material for import is a single byte array consisting of the
results of step 1, followed by the results of step 2. In other words, the
results of steps 1 and 2 are concatenated together to form the wrapped key
material.
This algorithm is the same as the PKCS #11 key wrapping algorithm
CKM_RSA_AES_KEY_WRAP . If you are importing a key from an HSM, and your HSM
supports this algorithm, you may use it directly. Alternatively, steps 1 and 2
above can be performed with the PKCS #11 mechanisms CKM_RSA_PKCS_OAEP and
CKM_AES_KEY_WRAP_PAD respectively.
If your source HSM (or other key provider if not using HSM) does not support
the RSA AES key wrap mechanism, you need to manually wrap your key material
using your import job's public key. For one example of how to do this using
OpenSSL, see Wrapping a key using OpenSSL on Linux .
RSAES-OAEP with SHA-256
This is an asymmetric key wrapping operation that uses the public key from the
import job with RSAES-OAEP, using MGF-1 and the SHA-256 digest algorithm, to
directly encrypt the target key material. It is based on the PKCS #11 RSA OAEP
mechanism CKM_RSA_PKCS_OAEP . The size limitations associated with this
import method make it unsuitable for importing RSA private keys.
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
