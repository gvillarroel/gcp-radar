---
title: "Verifying end-to-end data integrity \_|\_ Cloud Key Management Service \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/data-integrity-guidelines
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/data-integrity-guidelines
  title: "Verifying end-to-end data integrity \_|\_ Cloud Key Management Service \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Verifying end-to-end data integrity | Cloud Key Management Service | Google Cloud Documentation
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
Automatic data protection
Calculating and verifying checksums
Verifying resource names
Data verification diagram
Data verification field summary Encrypt
Decrypt
AsymmetricSign
AsymmetricDecrypt
Decapsulate
PublicKey
MacSign
MacVerify
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Verifying end-to-end data integrity
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Automatic data protection
Calculating and verifying checksums
Verifying resource names
Data verification diagram
Data verification field summary Encrypt
Decrypt
AsymmetricSign
AsymmetricDecrypt
Decapsulate
PublicKey
MacSign
MacVerify
What's next
This page discusses using fields in the Cloud Key Management Service API to detect and prevent
unintended changes to data as it moves between client systems and
Cloud KMS. These guidelines supplement the ways that Google Cloud
automatically protects your data at rest and in
transit.
Automatic data protection
All data on Google Cloud is automatically encrypted
in transit and
at rest within
Google Cloud.
Cloud KMS takes extra steps to protect encryption keys at rest
by encrypting each encryption key using another cryptographic key called a
key encryption key (KEK). To learn more about this technique, refer to
envelope encryption .
Each Cloud KMS cryptographic operation includes automatic checks
for data corruption. If corruption is detected, the operation is aborted and
a detailed error is logged.
These automatic protections are important, but they don't prevent client-side
data corruption. For example, data corruption during encryption can lead to data
that can't be decrypted.
This topic discusses ways to detect and prevent client-side data corruption to
minimize the risk of data loss.
Note: It is strongly recommended that callers utilize the integrity verification
scheme described below to minimize the risk of data loss caused by in-transit
data corruption.
Calculating and verifying checksums
Each cryptographic operation's request and response include
CRC32C checksum
fields, such as plaintext_crc32c . You can calculate the checksum and compare
the calculated and returned values.
On the server, the Cloud Key Management Service API sets boolean fields, such as
verified_plaintext_crc32c , to true to indicate that it received the relevant
checksum, and returns an INVALID_ARGUMENT error if the checksum doesn't match
the value calculated by the server.
Keep the following guidelines in mind when calculating and comparing checksums:
Calculate checksums, using a binary encoding, as soon as data is sent or
received.
Do not store unencrypted plaintext checksums to or from the Cloud Key Management Service API. For
example, do not store the unencrypted contents of the
EncryptRequest.plaintext_crc32c or DecryptResponse.plaintext_crc32c fields.
To keep a record of a checksum, serialize it along with the relevant data and
pass the compound object to Cloud KMS for encryption. When you
decrypt data, you can verify the checksum against your calculated expected
value.
If a decryption operation results in mismatched checksums, design your
application to retry the operation a limited number of times, in case of
transient problems.
If an encryption operation results in mismatched checksums for the encrypted
data (the ciphertext), discard the encrypted result and try again.
For encryption requests:
If you include the checksum field in the request, the server sets a related
verification field in the response to true
to indicate that it received the checksum and attempted to verify its value.
If you include the checksum field but the response sets the verification field to
false , the server did not receive the checksum field, and other information may
be missing from the response. Retry the request a limited number of times in case
the error is transient.
If the checksum was received but did not match, an INVALID_ARGUMENT error is
returned. The error includes the name of the field and the checksum that didn't
match. For example:
The checksum in field plaintext_crc32c did not match the data in field plaintext.
Retry the request a limited number of times in case the error is transient.
For decryption requests, you can calculate a checksum and compare it to the
value of DecryptResponse.plaintext_crc32c in the response.
The following checksum fields are included in requests to and responses from the
Cloud Key Management Service API.
Field in request
Field in response
EncryptRequest.plaintext_crc32c
EncryptResponse.verified_plaintext_crc32c
EncryptionRequest.additional_authenticated_data_crc32c
EncryptionResponse.verified_additional_authenticated_data_crc32c
AsymmetricSignRequest.digest_crc32c
AsymmetricSignResponse.verified_digest_crc32c
AsymmetricSignRequest.signature_crc32c
AsymmetricSignResponse.verified_signature_crc32c
AsymmetricSignRequest.signature_crc32c
AsymmetricSignResponse.verified_signature_crc32c
Not applicable
GetPublicKeyResponse.pem_crc32c
Not applicable
GetPublicKeyResponse.public_key.crc32c_checksum
Not applicable
DecryptResponse.plaintext_crc32c
MacSignRequest.data_crc32c
MacSignResponse.verified_data_crc32c
MacVerifyRequest.data_crc32c
MacVerifyResponse.verified_data_crc32c
MacVerifyRequest.mac_crc32c
MacVerifyResponse.verified_mac_crc32c
Not applicable
MacVerifyResponse.verified_success_integrity
DecapsulateRequest.ciphertext_crc32c
DecapsulateResponse.verified_ciphertext_crc32c
Not applicable
DecapsulateResponse.shared_secret_crc32c
Verifying resource names
Responses for
Encrypt ,
GetPublicKey ,
AsymmetricSign ,
AsymmetricDecrypt ,
Decapsulate ,
MacSign ,
and
MacVerify ,
include a name field that contains the name of the relevant Cloud Key Management Service API
object. You can compare the value of the name field to the value you expect,
and discard results that do not match.
Note: The EncryptRequest.name field can contain either a CryptoKey name or a
CryptoKeyVersion name. However, the EncryptResponse.name field always contains
a CryptoKeyVersion name. To convert a CryptoKeyVersion name to a CryptoKey
name, strip /cryptoKeyVersions/ and its value (such as /cryptoKeyVersions/2 )
from the field.
Data verification diagram
This diagram shows when to verify each type of data related to cryptographic
operations and when to verify data from each type of source. You can also view
a summary of the data verification fields .
Data verification field summary
Use this tables when designing your application, to determine which fields you
can use to verify your data before and after each cryptographic operation.
Encrypt
API
Server-side input verification
Client-side resource verification
Client-side output verification
Client-side verification of server-side input
EncryptRequest
plaintext_crc32c , additional_authenticated_data_crc32c
EncryptResponse
name
ciphertext_crc32c
verified_plaintext_crc32c , verified_additional_authenticated_data_crc32c
Decrypt
API
Server-side input verification
Client-side resource verification
Client-side output verification
Client-side verification of server-side input
DecryptRequest
ciphertext_crc32c , additional_authenticated_data_crc32c
DecryptResponse
plaintext_crc32c
AsymmetricSign
API
Server-side input verification
Client-side resource verification
Client-side output verification
Client-side verification of server-side input
AsymmetricSignRequest
digest_crc32c
AsymmetricSignResponse
name
signature_crc32c
verified_digest_crc32c
AsymmetricDecrypt
API
Server-side input verification
Client-side resource verification
Client-side output verification
Client-side verification of server-side input
AsymmetricDecryptRequest
ciphertext_crc32c
AsymmetricDecryptResponse
plaintext_crc32c
verified_ciphertext_crc32c
Decapsulate
API
Server-side input verification
Client-side resource verification
Client-side output verification
Client-side verification of server-side input
DecapsulateRequest
ciphertext_crc32c
DecapsulateResponse
shared_secret_crc32c
verified_ciphertext_crc32c
PublicKey
API
Server-side input verification
Client-side resource verification
Client-side output verification
Client-side verification of server-side input
PublicKey
name
pem_crc32c, public_key.crc32c_checksum
MacSign
API
Server-side input verification
Client-side resource verification
Client-side output verification
Client-side verification of server-side input
MacSignRequest
data_crc32c
MacSignResponse
mac_crc32c
verified_data_crc32c
MacVerify
API
Server-side input verification
Client-side resource verification
Client-side output verification
Client-side verification of server-side input
MacVerifyRequest
data_crc32c
mac_crc32c
MacVerifyResponse
verified_data_crc32c
verified_mac_crc32c
verified_success_integrity
What's next
Learn more about symmetric and
asymmetric encryption
Learn more about
encrypting application data
Use Cloud Audit Logs
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
