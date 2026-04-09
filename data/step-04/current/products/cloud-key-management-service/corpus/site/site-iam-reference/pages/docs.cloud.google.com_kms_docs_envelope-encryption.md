---
title: "Envelope encryption \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kms/docs/envelope-encryption
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/envelope-encryption
  title: "Envelope encryption \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Envelope encryption | Cloud Key Management Service | Google Cloud Documentation
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
Introduction Data encryption keys
Key encryption keys
Balancing DEKs and KEKs
How to encrypt data using envelope encryption
How to decrypt data using envelope encryption
Integration with Google Cloud services
Other options for Google Cloud services
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Envelope encryption
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Introduction Data encryption keys
Key encryption keys
Balancing DEKs and KEKs
How to encrypt data using envelope encryption
How to decrypt data using envelope encryption
Integration with Google Cloud services
Other options for Google Cloud services
Introduction
Storing and encrypting data at Google's scale requires using a central
cryptographic key management service with multiple layers of keys for the
encrypted data. An example of multiple layer of keys is envelope encryption ,
which is the process of encrypting a key with another key.
You can encrypt data at both the application layer , which is responsible for
displaying data to users, and the storage layer , which provides the physical
storage of data.
By default, at the storage layer, Google Cloud encrypts
customer content stored at rest using envelope encryption, with Google's
internal key management service as the central keystore. If you're storing and
encrypting data yourself, you can use Cloud Key Management Service as your central
keystore at the application layer, which is the focus of this topic.
Cloud KMS stores keys in a key hierarchy designed for ease, with
access to resources in the key hierarchy governed by Identity and Access Management .
The following shows the main levels of a Cloud KMS key hierarchy:
Find out more about the key hierarchy at object hierarchy .
Data encryption keys
The key used to encrypt data itself is called a data encryption key (DEK).
Here are best practices for managing DEKs:
Generate DEKs locally.
When stored, always ensure DEKs are encrypted at rest.
For easy access, store the DEK near the data that it encrypts.
Generate a new DEK every time you write the data. This means you don't need to
rotate the DEKs.
Do not use the same DEK to encrypt data from two different users.
Use a strong algorithm such as 256-bit Advanced Encryption Standard (AES) in
Galois Counter Mode (GCM).
Key encryption keys
The DEK is encrypted (also known as wrapped ) by a key encryption key (KEK).
The process of encrypting a key with another key is known as envelope
encryption .
Here are best practices for managing KEKs:
Store KEKs centrally.
Set the granularity of the DEKs they encrypt based on their use case. For
example, consider a workload that requires multiple DEKs to encrypt the
workload's data chunks. You could use a single KEK to wrap all DEKs that
are responsible for that workload's encryption.
Rotate keys regularly, and also after a suspected incident. To learn more, see
key rotation .
Balancing DEKs and KEKs
Having a smaller number of KEKs than DEKs and using a central key management
service makes storing and encrypting data at scale more manageable. A central
key service also is a singular point to more easily audit and restrict data
access.
Depending on your situation, and the volume of data you are encrypting, you may
choose to use a similar model. A single KEK can be used to protect many DEKs;
this model permits individual data objects to each have their own DEK without
massively increasing the volume of keys stored in a central key management
service.
Cloud Key Management Service was designed to manage KEKs, and thus the maximum data input
size for Encrypt and Decrypt functions is 64 KiB. However, for data that you
know will not approach that limit, you could use Cloud KMS to
encrypt and decrypt data directly.
How to encrypt data using envelope encryption
The process of encrypting data is to generate a DEK locally, encrypt data with
the DEK, use a KEK to wrap the DEK, and then store the encrypted data and the
wrapped DEK. The KEK never leaves Cloud KMS.
To encrypt data using envelope encryption:
Generate a DEK locally. You could do this with an open source library such as
OpenSSL , specifying a cipher type and a password from which to generate the
key. You can also specify a salt and digest to use, if desired.
Use this DEK locally to encrypt your data.
As an example, you could use OpenSSL as shown in the encrypting the
message example. For best practice, use 256-bit Advanced Encryption
Standard (AES-256) cipher in Galois Counter Mode (GCM).
Generate a new key in Cloud KMS, or use an existing key, which
will act as the KEK. Use this key to encrypt (wrap) the DEK.
Store the encrypted data and the wrapped DEK.
Warning: Do NOT store a plaintext DEK.
How to decrypt data using envelope encryption
The process of decrypting data is to retrieve the encrypted data and the wrapped
DEK, identify the KEK that wrapped the DEK, use the KEK to unwrap the DEK, and
then use the unwrapped DEK to decrypt the data. The KEK never leaves
Cloud KMS.
To decrypt data using envelope encryption:
Retrieve the encrypted data and the wrapped DEK.
Use the key stored in Cloud KMS to unwrap the encrypted DEK.
Use the plaintext DEK to decrypt the encrypted data. If using OpenSSL as
earlier, see the decrypting the message example.
For sample code that shows how to encrypt and decrypt with envelope
encryption, see Client-side encryption with Tink and Cloud KMS .
Integration with Google Cloud services
Several Google Cloud products are integrated with Cloud KMS
to support Customer-Managed Encryption Key (CMEK) functionality. CMEK with
Cloud KMS adds an extra layer of protection for your data, provides
you with control of your encryption keys, and leverages the key management
benefits of Cloud KMS. See Using Cloud KMS with other
services to see a full list of products that support CMEK.
Other options for Google Cloud services
For data stored in Google Cloud products that do not support CMEK, you
can implement your own application-layer encryption. This requires implementing
your own envelope encryption as described above, so that you store data
encrypted locally in Google Cloud. This is also how you could use
Cloud KMS to encrypt data you store in other cloud service
providers or on premises.
In addition to supporting CMEK, the following products support
Customer-Supplied Encryption Key (CSEK) functionality.
Product
CSEK topic
Cloud Storage
Customer-supplied encryption keys
Compute Engine
Encrypt disks with customer-supplied encryption keys
With CSEK, you supply your own AES-256 key to serve as the KEK, and your key
protects the DEKs that protect your data. Your CSEK key is protected by an
additional layer of protection, using a Cloud KMS key.
Now that you can
import keys into Cloud KMS , you can
import your keys and use them with CMEK-enabled services instead of relying on
CSEK.
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
