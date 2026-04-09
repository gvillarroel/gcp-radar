---
title: "Formatting keys for import \_|\_ Cloud Key Management Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/formatting-keys-for-import
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/formatting-keys-for-import
  title: "Formatting keys for import \_|\_ Cloud Key Management Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Formatting keys for import | Cloud Key Management Service | Google Cloud Documentation
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
Supported key formats
Checking a symmetric key
Formatting asymmetric keys
Troubleshooting
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Formatting keys for import
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Supported key formats
Checking a symmetric key
Formatting asymmetric keys
Troubleshooting
What's next
This topic describes how to format your keys so that they can be imported by
Cloud KMS as new key versions.
The correct format for your key material varies based on whether the key
material is being imported into a symmetric key, or into an asymmetric key. For
more information about the difference between symmetric and asymmetric keys, see
Key purposes and algorithms .
Supported key formats
Symmetric keys for encryption :
Imported symmetric keys must be 16 bytes (for
raw symmetric encryption
only) or 32 bytes of binary data, and must not be encoded.
If your key is hex-encoded or base64-encoded, then you must decode it before
attempting to import it.
Symmetric keys for signing (MAC keys) : Imported HMAC signing keys
must have a length equal to the output length of the cryptographic hash
function being used (for example, HMAC-SHA256 keys must have a length of 32
bytes), and must not be encoded. If your key is hex-encoded or
base64-encoded, then you must decode it before attempting to import it.
Asymmetric keys for encryption or signing : Imported asymmetric keys
must be in PKCS #8 format and must be DER-encoded. PCKS #8 format is defined
in RFC 5208 . DER encoding
is defined in International
Telecommunications Union X.680 . Asymmetric keys must use one of the
length and algorithm combinations
supported by Cloud KMS.
Important: An RSA key's public exponent must be 65,537 or higher. This is a
Digital Signature Standard (DSS) requirement noted in the Criteria for IFC Key
Pairs section of
FIPS PUB 186-4 ,
Section B.3.1
Some aspects of a key, such as the key's length, cannot be changed after the key
is created. In these cases, the key cannot be imported into Cloud KMS.
Checking a symmetric key
Use the wc command to check a symmetric key's length.
wc -c /path/to/unwrapped-key
You cannot import a symmetric encryption key with a length other than 32.
Symmetric signing keys (MAC keys) must have a length equal to the output
length of the cryptographic hash function being used (e.g. HMAC-SHA256 keys
must have a length of 32 bytes).
Use the file command to check a key's format.
file /path/to/unwrapped-key
If the output is data , the key is in the correct format to be imported.
If the output is ASCII text , use the cat command to display the contents
of the file.
If it is a string of letters and numbers ending in an = sign, it might
be base64-encoded. Use the base64 command ( Base64.exe on Windows) to
decode it. The following is an example of a base64-encoded key:
THzArjassB+giKeNeT1Zr74OgV24t+Ep+37Ec6ojB3Y=
If it contains one or more lines of hexadecimal numbers, it might be
hex-encoded. Use the xxd command (or the
Format-Hex PowerShell command
on Windows) to decode it. The following is an example of a hex-encoded
key:
00000000: 4c7c c0ae 36ac b01f a088 a78d 793d 59af L|..6.......y=Y.
00000010: be0e 815d b8b7 e129 fb7e c473 aa23 0776 ...]...).~.s.#.v
If it contains any other text, it may not be a valid symmetric key.
Formatting asymmetric keys
Asymmetric keys using any of the supported algorithms
can be imported. In practice, it is difficult to retroactively determine the
algorithm used to create an asymmetric key. For that reason, we recommend that
you run the following commands on each asymmetric key before attempting to
import it into Cloud KMS.
Use the file command to check a key's format.
file /path/to/unwrapped-key
If the output is PEM , the key is in PEM format. If it is ASCII text ,
it is probably in PEM format. In either case, run the following command
to convert it to PCKS#8 DER format:
openssl pkcs8 -topk8 -nocrypt -inform PEM -outform DER \
-in /path/to/asymmetric-key-pem \
-out /path/to/formatted-key
If the output is data , the key is likely to be in DER format, but it
may not be in PKCS #8 format. Run the following command to ensure that
the key is in the correct format. The command has no effect if the key
is already in the correct format. In that case, you can use the diff
command to verify that the input and output file are identical.
openssl pkcs8 -topk8 -nocrypt -inform DER -outform DER \
-in /path/to/asymmetric-key-der \
-out /path/to/formatted-key
Troubleshooting
If you run the commands above and you believe the key is in an appropriate
format, but the import still fails, check for errors in Google Cloud console, and
then see Troubleshooting failed
imports .
What's next
Continue to Import a key version
Learn about key import
Next
Configure OpenSSL for manual key wrapping
arrow_forward
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
