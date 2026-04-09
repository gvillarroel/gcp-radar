---
title: "Raw symmetric encryption \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kms/docs/raw-encryption
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/raw-encryption
  title: "Raw symmetric encryption \_|\_ Cloud Key Management Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Raw symmetric encryption | Cloud Key Management Service | Google Cloud Documentation
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
Required roles Additional roles for unauthenticated raw encryption algorithms
Before you begin
Encrypt
Decrypt
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Raw symmetric encryption
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Required roles Additional roles for unauthenticated raw encryption algorithms
Before you begin
Encrypt
Decrypt
What's next
This topic shows you how to do the following raw symmetric key operations:
Encrypt text or binary plaintext content locally or using Cloud KMS.
Decrypt ciphertexts locally or using Cloud KMS.
If instead you want to do a regular (non-raw) symmetric key operation,
see Encrypting and decrypting data with a symmetric key .
The raw symmetric encryption lets you encrypt and decrypt your data locally
on-premises or using Cloud KMS, and move encrypted data between
different libraries and service providers without having to decrypt it first.
This functionality depends on the ability to access the key at the point of
operation. If you want to use the ciphertexts outside of Google Cloud, you must
use an imported key because keys generated in Cloud KMS can't be
exported.
These encryption algorithms generate standard ciphertexts that can be decrypted
by any standard decryption service. We support the following raw symmetric
encryption algorithms:
AES-128-GCM
AES-256-GCM
AES-128-CBC
AES-256-CBC
AES-128-CTR
AES-256-CTR
Caution: While giving more options to the customer, raw symmetric encryption limits
advanced KMS features such as automatic rotation on the corresponding keys. It also does not support customer-managed encryption keys (CMEK) .
Note the following points about these raw encryption algorithms:
AES-GCM provides authentication based on the additional
authenticated data (AAD) and generates an authentication tag, and is the recommended encryption algorithm to use. Data encrypted using AES-GCM algorithms can't be decrypted without the provided AAD.
AES-CBC requires the size of the plaintext to be a multiple of the block
size (16 bytes). If the plaintext is not a multiple of the block size,
pad the plaintext before encrypting it; otherwise, the operation will fail
with an error indicating the issue.
AES-CBC and AES-CTR are not authenticated encryption schemes, which
means that they can carry greater risk of accidental misuse. They are
offered to support legacy and interoperability needs, and should be used
with caution. To prevent casual misuse, using these encryption algorithms
requires the following IAM permissions:
cloudkms.cryptoKeyVersions.manageRawAesCbcKeys for AES-CBC .
cloudkms.cryptoKeyVersions.manageRawAesCtrKeys for AES-CTR .
Caution: Grant these permissions only to principals who
understand the risks associated with using unauthenticated encryption.
Required roles
To get the permissions that
you need to use raw encryption,
ask your administrator to grant you the
following IAM roles on your key:
To encrypt only:
Cloud KMS CryptoKey Encrypter ( roles/cloudkms.cryptoKeyEncrypter )
To decrypt only:
Cloud KMS CryptoKey Decrypter ( roles/cloudkms.cryptoKeyDecrypter )
To encrypt and decrypt:
Cloud KMS CryptoKey Encrypter/Decrypter ( roles/cloudkms.cryptoKeyEncrypterDecrypter )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Additional roles for unauthenticated raw encryption algorithms
To use AES-CBC keys: Cloud KMS Expert Raw AES-CBC Key Manager ( roles/cloudkms.expertRawAesCbc )
To use AES-CTR keys: Cloud KMS Expert Raw AES-CTR Key Manager ( roles/cloudkms.expertRawAesCtr )
Before you begin
Grant the mentioned raw symmetric encryption permissions to the intended principals.
Create a key ring as described in creating key rings .
Create and import a raw symmetric encryption key as described in creating
keys and importing keys .
Encrypt
gcloud API
More
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms raw-encrypt \
--location LOCATION \
--keyring KEY_RING \
--key KEY_NAME \
--version KEY_VERSION \
--plaintext-file INPUT_FILE_PATH \
--ciphertext-file OUTPUT_FILE_PATH
Replace the following:
LOCATION : the Cloud KMS location of the key ring.
KEY_RING : the name of the key ring that contains the key.
KEY_NAME : the name of the key to use for encryption.
KEY_VERSION : the ID of the key version to use for encryption.
INPUT_FILE_PATH : the local file path for reading the plaintext data.
OUTPUT_FILE_PATH : the local file path for saving the encrypted output.
For information on all flags and possible values, run the command with the
--help flag.
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
When using JSON and the REST API, content must be base64 encoded before it can
be encrypted by Cloud KMS.
Tip : You can base64-encode or decode data
using the base64 command on Linux or macOS, or the
Base64.exe command on Windows. Programming and scripting
languages typically include libraries for base64-encoding. For command-line
examples, see Base64 Encoding in the
Cloud Vision API documentation.
Use the rawEncrypt method to encrypt a plaintext data:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME /cryptoKeyVersions/ KEY_VERSION :rawEncrypt" \
--request "POST" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{"plaintext": " BASE64_ENCODED_INPUT ", "additionalAuthenticatedData": " BASE64_ENCODED_AAD "}'
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring.
LOCATION : the Cloud KMS location of the key ring.
KEY_RING : the name of the key ring that contains the key.
KEY_NAME : the name of the key to use for encryption.
KEY_VERSION : the ID of the key version to use for encryption.
BASE64_ENCODED_INPUT : the base64-encoded plaintext
data that you want to encrypt.
BASE64_ENCODED_AAD : the base64-encoded additional
authenticated data that is used to provide integrity and authenticity
assurances. This field only applies for the AES-GCM algorithms.
The output is a JSON object containing the encrypted ciphertext and the associated initialization vector as base64-encoded strings.
Decrypt
gcloud API
More
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms raw-decrypt \
--location LOCATION \
--keyring KEY_RING \
--key KEY_NAME \
--version KEY_VERSION \
--ciphertext-file INPUT_FILE_PATH \
--plaintext-file OUTPUT_FILE_PATH
Replace the following:
LOCATION : the Cloud KMS location of the key ring.
KEY_RING : the name of the key ring that contains the key.
KEY_NAME : the name of the key to use for encryption.
KEY_VERSION : the ID of the key version to use for encryption.
INPUT_FILE_PATH : the local file path to the ciphertext that you want to decrypt.
OUTPUT_FILE_PATH : the local file path where you want to save the decrypted plaintext.
For information on all flags and possible values, run the command with the
--help flag.
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
When using the REST API, content must be base64-encoded before it can
be decrypted by Cloud KMS.
Tip : You can base64-encode or decode data
using the base64 command on Linux or macOS, or the
Base64.exe command on Windows. Programming and scripting
languages typically include libraries for base64-encoding. For command-line
examples, see Base64 Encoding in the
Cloud Vision API documentation.
To decrypt the encrypted data, use the rawDecrypt method:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME /cryptoKeyVersions/ KEY_VERSION :rawDecrypt" \
--request "POST" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{"ciphertext": " BASE64_ENCODED_DATA ", "additionalAuthenticatedData": " BASE64_ENCODED_AAD ", "initializationVector": " BASE64_ENCODED_IV "}'
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring.
LOCATION : the Cloud KMS location of the key ring.
KEY_RING : the name of the key ring that contains the key.
KEY_NAME : the name of the key to use for decryption.
KEY_VERSION : the ID of the key version to use for decryption.
BASE64_ENCODED_DATA : the base64-encoded ciphertext
that you want to decrypt.
BASE64_ENCODED_AAD : the base64-encoded additional
authenticated data that was used when the data was encrypted. This field
only applies for the AES-GCM algorithms.
BASE64_ENCODED_IV : the base64-encoded initialization
vector that was used when the data was encrypted.
The output is a JSON object containing the decrypted plaintext as a
base64-encoded string.
What's next
Read more about importing a key version
Read more about envelope encryption .
Try the Encrypt and decrypt data with Cloud KMS Codelab .
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
