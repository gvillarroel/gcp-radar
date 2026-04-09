---
title: "Digital signatures \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/digital-signatures
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/digital-signatures
  title: "Digital signatures \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Digital signatures | Cloud Key Management Service | Google Cloud Documentation
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
Post-quantum cryptography (PQC) digital signature
Example use cases for a digital signature
Digital signing workflow
Signing algorithms
Cloud KMS digital signature functionality
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Digital signatures
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Post-quantum cryptography (PQC) digital signature
Example use cases for a digital signature
Digital signing workflow
Signing algorithms
Cloud KMS digital signature functionality
A digital signature is a cryptographic output used to verify the authenticity
of data. A digital signature algorithm allows for two distinct operations:
a signing operation, which uses a signing key to produce a signature over raw
data
a verification operation, where the signature can be validated by a party
who has no knowledge of the signing key
The main purposes of a digital signature are:
verification of the integrity of the signed data
non-repudiation if the signer claims the signature is not authentic
Digital signatures rely on asymmetric cryptography, also known as public key
cryptography. An asymmetric key consists of a public/private key pair. The
private key is used to create a signature, and the corresponding public key is
used to verify the signature.
Post-quantum cryptography (PQC) digital signature
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Quantum computers have the potential to decrypt material encrypted by classical
encryption algorithms such as the widely used RSA and ECDSA,
which could make such encrypted material vulnerable.
Post-quantum cryptographic algorithms are designed to use classical hardware
and software to resist quantum attacks, helping to ensure the continued validity
of digital signatures. PQC signatures are based on different mathematical
problems that are difficult for both classical and quantum computers to solve.
NIST has published two PQC signature standards: ML-DSA ( FIPS-204 )
and SLH-DSA ( FIPS-205 ). You can use the pure randomized variants with
Cloud KMS: ML-DSA-65 and SLH-DSA-SHA2-128s , or the pre-hash
randomized variant HASH-SLH-DSA-SHA2-128s-SHA256 .
The NIST standards define the following size values for keys and signatures
(in bytes):
Algorithm
Private key
Public key
Signature
ML_DSA_65
4032
1952
3309
SLH_DSA_SHA2_128s
64
32
7856
HASH_SLH_DSA_SHA2_128s_SHA256
64
32
7856
Note: Due to the lack of a standard for hybridization of post-quantum and
classical digital signatures, only the standalone implementations are supported.
Example use cases for a digital signature
You can validate builds using digital signatures. For example, given a binary
that is digitally signed by a private key, you can check its validity by using
the public key corresponding to the private key. If the binary's signature is
not valid, the binary has been tampered with and/or corrupted.
Another example is validating the subject of a certificate issued by a
Certificate Authority (CA). A CA issues a certificate to a subject based on the
subject's ownership of the private key portion of a public/private key. The
certificate contains a digital signature created with the subject's private key.
The certificate also contains the subject's public key portion of the
public/private key. An entity that is interacting with the subject uses the
subject's public key, and additional certificate verification rules, to validate
the signature. If the signature does not correspond to the data in question, or
if the verification rules prescribed by the certificate are violated, the
signature will be found invalid.
Digital signing workflow
The following describes the flow for creating and validating a signature. The
two participants in this workflow consist of the signer of data, and the data
recipient.
The signer creates an asymmetric key that supports digital signing.
The signer can use this key to create multiple signatures.
The signer performs a private key operation over the data to create a
digital signature.
The signer provides the data and the digital signature to the data recipient.
The recipient uses the public key portion of the signer's public/private key
pair to verify the digital signature. If verification is unsuccessful, then the
data has been altered.
Signing algorithms
Cloud Key Management Service supports elliptic curve (EC) and RSA algorithms for
digital signing. Both of these industry standard algorithms offer choices of key
size and digest algorithm.
Elliptic curve cryptography relies on one-way hash functions and point
multiplication to compute points on an elliptic curve, combined with the
intractability of determining the multiplicand for a point given its origin.
This difficulty in determining the multiplicand is the cryptographic benefit of
EC cryptography. The larger the size of the curve, the more difficult it is to
compute the multiplicand. A benefit of EC cryptography is an EC key has a
smaller key size compared to an RSA key that offers the same cryptographic
strength.
RSA cryptography relies on the difficulty in factoring a large integer into two
or more factors. The larger the key size, the more difficult it is to factor the
integers.
Cloud KMS digital signature functionality
Cloud KMS provides the following functionality related to creating
and validating digital signatures.
Ability to create an asymmetric key with key purpose of
ASYMMETRIC_SIGN . Cloud KMS keys for asymmetric signing support
both elliptic curve signing algorithms and RSA signing algorithms .
Ability to create a digital signature .
Ability to retrieve the public key for an asymmetric key.
Cloud KMS does not directly provide the ability to validate a
digital signature. Instead, you validate a digital signature using openly
available SDKs and tools, such as OpenSSL . These SDKs and tools require the
public key that you retrieve from Cloud KMS. For information on how
to use open SDKs and tools, see validating an elliptic curve signature and
validating an RSA signature .
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
