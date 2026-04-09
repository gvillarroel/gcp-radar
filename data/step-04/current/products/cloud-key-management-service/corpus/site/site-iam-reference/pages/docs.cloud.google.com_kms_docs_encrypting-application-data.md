---
title: "Encrypting application data \_|\_ Cloud Key Management Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/encrypting-application-data
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/encrypting-application-data
  title: "Encrypting application data \_|\_ Cloud Key Management Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Encrypting application data | Cloud Key Management Service | Google Cloud Documentation
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
Before you begin
Setup Create projects
Create users
Create a storage bucket
Create an encryption key
Encrypt the file that contains the secret
Decrypt the file that contains the secret
Cleaning up
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Encrypting application data
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Setup Create projects
Create users
Create a storage bucket
Create an encryption key
Encrypt the file that contains the secret
Decrypt the file that contains the secret
Cleaning up
What's next
This page shows one way to use Cloud Key Management Service to directly encrypt application
data on a client, before transmitting it across a network.
In this example, the encrypted data is transmitted to Google Cloud and is
stored in a Cloud Storage bucket. Cloud Storage also supports
automatic server-side encryption using customer-managed encryption
keys , which automates this
entire process. To protect application data before transmitting it to
Google Cloud, we recommend that you use the Tink
library .
The Tink library is a multi-language, cross-platform library that provides APIs
for common cryptographic tasks. This can be used to encrypt data before it
enters Google Cloud data stores, and supports Java, Python, C++, Go,
Objective-C, and other languages, and both object storage and relational
database services.
In this walkthrough, you encrypt a file using Cloud KMS before you
upload it to a bucket. Next, you download and decrypt the same data so that you
can read it on the client.
When you follow these instructions, your keys and all cryptographic operations
remain in Google Cloud and you need to use Cloud KMS for
decryption.
Raw symmetric encryption lets you encrypt or decrypt data
locally on-premises or move encrypted data between different libraries and
service providers without having to decrypt it first.
Note: Cloud KMS stores keys that are used to encrypt and decrypt
secrets, but does not store the encrypted sensitive data directly. To store
sensitive data in Google Cloud, we recommend
Secret Manager .
Before you begin
Within your Google Cloud organization, you need permission to create
new projects, and to enable billing, create users, and manage permissions
within these projects. The
roles/resourcemanager.organizationAdmin role grants this permission.
Setup
We recommend using two projects and two users to ensure separation of
duties . If you follow the steps in this guide, users and services that
manage encryption keys are distinct from users and services that use
them. One project contains and manages the keys, and the other project stores
the encrypted data in a Cloud Storage bucket, and decrypts it as needed.
Create projects
You create projects in the Google Cloud console. For step-by-step instructions,
see the Identity and Access Management quickstart .
Create the following projects within your organization:
Create a Google Cloud project to contain the Cloud Storage bucket
used to store the secrets. The secrets will be stored as objects in the
bucket. This project is called STORAGE_PROJECT_ID .
Create a second Google Cloud project to manage the Cloud KMS
keys used to encrypt and decrypt the secret. This project is called
KEY_PROJECT_ID .
For each project , enable the Cloud KMS API and enable
billing, by following the steps in the Before you
begin section of the
Cloud KMS Quickstart.
Create users
You create users and grant them roles in the Google Cloud console. For step-by-step
instructions, see the
Identity and Access Management quickstart .
This procedure creates two users. The key administrator manages the encryption
keys, and the key user can encrypt and decrypt data using the keys.
Perform this procedure in the KEY_PROJECT_ID project.
Create the key administrator account.
Grant the roles/cloudkms.admin Identity and Access Management role to the key
administrator. This role lets the key administrator create and manage keys.
Create the key user account.
Grant the roles/cloudkms.cryptoKeyEncrypterDecrypter
IAM role to the key user. This role lets the key user encrypt
and decrypt data.
Note: If a user or application only needs encryption permissions or only
needs decryption permissions, you can use the
roles/cloudkms.cryptoKeyEncrypter and
roles/cloudkms.cryptoKeyDecrypter IAM roles. This
helps you follow the principle of least privilege.
Create a storage bucket
Perform this procedure in the STORAGE_PROJECT_ID project.
Create a storage bucket called STORAGE_BUCKET .
Grant the roles/storage.objectAdmin role on
the STORAGE_BUCKET storage bucket to the key user account.
Create an encryption key
Perform this procedure as the key administrator user in the
KEY_PROJECT_ID project.
Create a key ring. The name of a key ring
must be unique within the project. A key ring can't be renamed or deleted.
Use the Google Cloud CLI to create a key ring .
gcloud kms keyrings create KEY_RING \
--location LOCATION
Replace the following:
KEY_RING : the name to use for the storage key ring—for
example, storage .
LOCATION : the location where you want to create the key ring.
This should be geographically near the location where you want to create
the Cloud Storage bucket.
Create an encryption key in the key ring. The name of the key must be unique
within the key ring. Keys can't be renamed or deleted, but their key
versions can be destroyed. Use the Google Cloud CLI to
create the key . An initial key version is created automatically and
becomes the primary version.
gcloud kms keys create KEY_NAME \
--location LOCATION \
--keyring KEY_RING \
--purpose encryption
Replace the following:
LOCATION : the location where you created the key ring.
KEY_NAME : the name to use for the storage key—for
example, storage .
KEY_RING : the name you used for the storage key ring—for
example, storage .
Note: To use raw symmetric encryption keys, set the purpose field to
raw-encryption .
You can learn more about Creating key rings and keys .
Encrypt the file that contains the secret
Perform this procedure as the key user account, working in both projects.
On your local machine, save the secret.
echo " SECRET_TEXT " > PATH_TO_SECRET
Replace the following:
SECRET_TEXT : the secret that you want to protect, in
plain text—for example, this is a secret .
PATH_TO_SECRET : the path where you want to create the
secret—for example, secret.txt .
Encrypt the secret using Cloud KMS and the encryption key.
gcloud kms encrypt \
--location LOCATION \
--keyring KEY_RING \
--key KEY_NAME \
--plaintext-file PATH_TO_SECRET \
--ciphertext-file PATH_TO_ENCRYPTED_SECRET
Replace the following:
LOCATION : the location where you created the key ring.
KEY_RING : the name of the key ring.
KEY_NAME : the name of the encryption key.
PATH_TO_SECRET : the path where you created the
secret.
PATH_TO_ENCRYPTED_SECRET : the path where you want to
save the encrypted secret—for example, secret.txt.encrypted .
You can learn more about encrypting data by following the
encrypt data quickstart .
Use raw-encrypt instead for raw symmetric encryption .
Upload the encrypted secret file to the storage bucket. You can use the
following gcloud CLI command:
gcloud storage cp PATH_TO_ENCRYPTED_SECRET gs:// STORAGE_BUCKET
You can learn more about uploading objects to a storage bucket.
Optional: Delete the plaintext secret file
( PATH_TO_SECRET ) from the local machine. This is a good
practice for files containing unencrypted sensitive data.
The STORAGE_BUCKET storage bucket now contains the encrypted secret
file, which is encrypted using the KEY_NAME encryption key.
Decrypt the file that contains the secret
Perform these steps as the key user account, working in both projects.
Download the encrypted secret file from the storage bucket. You can use the
following gcloud CLI command:
gcloud storage cp gs:// STORAGE_BUCKET / PATH_TO_ENCRYPTED_SECRET .
You can learn more about downloading objects from a storage bucket.
Decrypt the file using the same key that you used to encrypt it.
gcloud kms decrypt --location LOCATION \
--keyring KEY_RING \
--key KEY_NAME \
--ciphertext-file PATH_TO_ENCRYPTED_SECRET \
--plaintext-file PATH_TO_DECRYPTED_SECRET
Replace the following:
LOCATION : the location where you created the key ring.
KEY_RING : the name of the key ring.
KEY_NAME : the name of the encryption key.
PATH_TO_ENCRYPTED_SECRET : the path to the downloaded
encrypted secret—for example, secret.txt.encrypted .
PATH_TO_DECRYPTED_SECRET : the path where you want to
save the decrypted secret—for example, secret_decrypted.txt .
You can learn more about decrypting data by following the encrypt data
quickstart .
Use raw-decrypt instead for raw symmetric encryption .
You can now read the decrypted plaintext of the secret using cat or a
text editor. The contents are identical to the original contents of
PATH_TO_SECRET .
Optional: Delete the PATH_TO_ENCRYPTED_SECRET and
PATH_TO_DECRYPTED_SECRET files from the local machine.
Cleaning up
To clean up, delete all the files you created on the local machine, then delete
the KEY_PROJECT_ID and STORAGE_PROJECT_ID projects.
What's next
Read more about secret management .
Learn about separation of duties .
Learn about granting, changing, and revoking access to resources.
Learn about creating a service account .
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
