---
title: "Verify an imported key version \_|\_ Cloud Key Management Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/verifying-imported-key
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/verifying-imported-key
  title: "Verify an imported key version \_|\_ Cloud Key Management Service \_|\_\
    \ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Verify an imported key version | Cloud Key Management Service | Google Cloud Documentation
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
Limitations on verifying imported keys Data encrypted outside of Cloud KMS
Verify attestations
Before you begin
Verify that the key material is identical
Verify attestations for a Cloud HSM key Symmetric Cloud HSM keys
Asymmetric Cloud HSM keys
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Verify an imported key version
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Limitations on verifying imported keys Data encrypted outside of Cloud KMS
Verify attestations
Before you begin
Verify that the key material is identical
Verify attestations for a Cloud HSM key Symmetric Cloud HSM keys
Asymmetric Cloud HSM keys
What's next
This topic shows you how to verify an asymmetric key version that you
import into Cloud KMS or
Cloud HSM.
For more details about how import works, including limitations and
restrictions, refer to Key import .
Limitations on verifying imported keys
Data encrypted outside of Cloud KMS
The best way to test an imported key is to decrypt data that was encrypted
before the key was imported, or to encrypt data using the imported key and
decrypt it using the key before import.
In Cloud KMS or Cloud HSM, this is only possible when you
import an asymmetric key. This is because when data is encrypted using a
symmetric Cloud KMS or Cloud HSM key, extra metadata about
the encryption key version is saved, encrypted, along with the encrypted data.
This metadata is not present in data encrypted outside of Cloud KMS.
Verify attestations
You can verify attestations about Cloud HSM
keys. These attestations assert that the key is an HSM key, that the HSM module
is owned by Google, and other details about the key. These attestations are not
available for software keys.
Before you begin
Import an asymmetric key into
Cloud KMS or Cloud HSM. You must use Cloud HSM
if you want to verify the key's attestations.
If possible, complete the tasks in this topic using the same local system
where you imported the key, so the local system already has the
Google Cloud CLI installed and configured.
Encrypt a file using the local key, or copy a file encrypted with that key
to the local system.
Verify that the key material is identical
After you import an asymmetric key into Cloud KMS or
Cloud HSM, the key material is identical to the local key. To verify
that this is true, you can use the imported key to decrypt data that was
encrypted using the key before it was imported.
To decrypt a file using a Cloud KMS or Cloud HSM key:
gcloud kms decrypt \
--location= location \
--keyring= key-ring-name \
--key= key-name \
--ciphertext-file= filepath-and-file-to-decrypt \
--plaintext-file= decrypted-filepath-and-file .dec
If the file pointed to by the --plaintext-file flag contains the correct
decrypted data, the key material of the external and imported key is identical.
To learn more, see encrypting and decrypting data .
Verify attestations for a Cloud HSM key
After a key is imported into an HSM, you can view attestations to verify that
the HSM is owned by Google. The procedure is different to verify
symmetric Cloud HSM keys and
asymmetric keys .
Attestations are not available for software keys in Cloud KMS.
Symmetric Cloud HSM keys
You can use the Extended Key Checksum Value (EKCV) key attribute to verify an
imported Cloud HSM key's key material. This value is calculated by
following RFC 5869 ,
section 2. The value is derived using SHA-256-based HMAC-based
Extract-and-Expand Key Derivation Function (HKDF) with 32 zero bytes as salt and
expanding it with the fixed string Key Check Value as info. To retrieve this
value, you can attest the key .
Asymmetric Cloud HSM keys
When you make the import request for an asymmetric key, you include your wrapped
private key. The private key contains sufficient information for
Cloud KMS to derive the public key. After your key is imported, you
can retrieve the public key and verify that it matches the public key you have
stored locally. For more information about checking
the public key attribute, see
To verify the public key .
You can verify the EKCV verification for asymmetric keys. In this case, the
value is the SHA-256 digest of the DER-encoded public key. You can retrieve this
value by looking at the attestation of the key. For more information about
checking the EKCV key attribute, see
To verify key properties .
For additional information about attesting keys you import, see
Attesting a key
What's next
Learn how to create keys
Learn about encrypting and decrypting
Learn about signing and
validating data
Previous
arrow_back
Import a key version
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
