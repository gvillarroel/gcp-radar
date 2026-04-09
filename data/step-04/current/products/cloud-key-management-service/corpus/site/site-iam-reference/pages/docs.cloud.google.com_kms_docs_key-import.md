---
title: "Key import \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/key-import
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/key-import
  title: "Key import \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Key import | Cloud Key Management Service | Google Cloud Documentation
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
Introduction
Limitations and requirements
How key import works
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Key import
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Introduction
Limitations and requirements
How key import works
What's next
This topic covers conceptual information about importing keys into
Cloud Key Management Service as new key versions. For step-by-step instructions, see
importing a key version .
Introduction
You may be using existing cryptographic keys that were created on your premises
or in an external key management system. If you migrate an application to
Google Cloud or if you add cryptographic support to an existing
Google Cloud application, you can import the relevant keys into
Cloud KMS.
You can import into Multi-tenant Cloud HSM keys,
Single-tenant Cloud HSM keys, or software keys in Cloud KMS.
Key material is wrapped for protection in transit. You can use the
Google Cloud CLI to automatically wrap the key, or you can
wrap the key manually .
Google Cloud has access to the wrapping key only within the scope of
the import job.
For Cloud HSM keys, the wrapping key never resides
outside of Cloud HSM.
This topic provides details about limitations and requirements for
importing keys, and gives an overview of
how key import works .
Limitations and requirements
Review these sections to verify that your keys can be imported into
Cloud KMS.
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
To verify and reformat your key for import, see
Formatting keys for import .
Supported protection levels
You can import a key into a Cloud KMS key, a
Multi-tenant Cloud HSM key, or a Single-tenant Cloud HSM key by
setting the key's protection level to
SOFTWARE , HSM , or HSM_SINGLE_TENANT .
You can't import into a Cloud External Key Manager key.
Supported wrapping key sizes
When you create an import job, you can control the size of the wrapping key used
to protect your key in transit to Google Cloud by setting the import job's
import method . The default size for the wrapping key is 3072. If you have
specific requirements, you can configure the import job to use a 4096-bit key
instead.
You can learn more about the algorithms used for
key wrapping or about
configuring an import job .
How key import works
This section illustrates what happens when you import a key. Some parts of the
flow are different if you use automatic wrapping or manually wrap the key. Using
automatic wrapping is recommended. For specific instructions, see
Import a key version . For specific instructions
about manually wrapping your key before import, see
Wrapping a key using OpenSSL on Linux .
The following diagram illustrates the key import process using automatic key
wrapping. The phases shown in the diagram are described in this section.
Get ready to import keys.
First, you create a target key ring and
key that will eventually
contain the import job and the imported key material. At this point, the
target key contains no key versions.
Next, you
create an import job . The
import job defines the target key ring and key for the imported key
material. The import job also defines the import method, which is the
algorithm used to create the wrapping key that protects the key material
during import requests.
The public key is used to wrap the key to be imported on the client.
The private key is stored within Google Cloud and is used to
unwrap the key after it reaches the Google Cloud project.
This separation prevents Google from being able to unwrap your key
material outside of the scope of the import job.
The key must be cryptographically wrapped before transmitting it to
Google. Most users can use the gcloud CLI to automatically
wrap, transmit, and import the key, as described in the next step. If
you have compliance or regulatory requirements to
wrap the key manually , you can do it at this
time. To wrap the key manually on the local system:
Configure OpenSSL.
Once per import job, download the wrapping key associated with the
import job.
Once per key, set several environment variables and wrap the key.
For up to three days, until the import job expires, you can use it to
make import requests to import
one or more keys. During an import request:
If the key was not manually wrapped, the Google Cloud CLI downloads the
import job's public key from Google Cloud to the local system,
then uses the public key, along with a private key associated with the
client, to wrap the local key material.
The wrapped key material is transmitted to the Google Cloud
project.
The key material is unwrapped using the import job's private key and is
inserted as a new version of the target key on the target key ring. This
is an atomic operation.
For symmetric keys, you set the imported key version to be the primary
key version.
Note: The imported key version is not automatically set to be the primary
key version.
After the import request completes successfully, you can use the imported key
version to protect data in Google Cloud.
What's next
Import a key version
Encrypt and decrypt data using a symmetric key
Encrypt and decrypt data using an asymmetric
key
Learn about Creating and validating digital
signatures
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
