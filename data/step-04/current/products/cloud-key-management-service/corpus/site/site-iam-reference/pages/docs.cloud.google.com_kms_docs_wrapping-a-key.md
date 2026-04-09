---
title: "Wrapping a key using OpenSSL on Linux \_|\_ Cloud Key Management Service \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/wrapping-a-key
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/wrapping-a-key
  title: "Wrapping a key using OpenSSL on Linux \_|\_ Cloud Key Management Service\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Wrapping a key using OpenSSL on Linux | Cloud Key Management Service | Google Cloud Documentation
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
Configure Open SSL for manual key wrapping
Wrap a key using Open SSL
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
Retrieve the wrapping key
Set up environment variables
Wrap the key Wrap the key with RSA
Wrap the key with RSA-AES
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Wrapping a key using Open SSL on Linux
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Retrieve the wrapping key
Set up environment variables
Wrap the key Wrap the key with RSA
Wrap the key with RSA-AES
What's next
This topic shows how to manually wrap a key before
importing the key into Cloud KMS. You
only need to follow the instructions in this topic if you do not want to use the
Google Cloud CLI to automatically wrap the key before importing it. For an
overview of the differences, refer to
How key import works .
You can complete the steps in this topic in 5 to 10 minutes, not including the
Before you begin steps.
Before you begin
Before you can wrap a key, you must complete the following prerequisites.
Create a target key ring and key, and create an import job .
Verify that your key is available locally and formatted correctly
for import into Cloud KMS.
Patch and recompile OpenSSL
Retrieve the wrapping key
This section shows how to retrieve the wrapping key from the import job you
created in Before you begin . Using the Google Cloud console is
recommended.
Console gcloud CLI API
More
Go to the Key Management page in the Google Cloud console.
Go to the Key Management page
Click the name of the key ring that contains your import job.
Click the Import Jobs tab at the top of the page.
Click More more_vert ,
then Download wrapping key in the pop-up menu.
To verify that the import job is active, run the
gcloud kms import-jobs describe command:
gcloud kms import-jobs describe IMPORT_JOB \
--location LOCATION \
--keyring KEY_RING \
--format="value(state)"
state: ACTIVE
Run the following command to save the public key from the import job to
${HOME}/wrapping-key.pem
gcloud kms import-jobs describe \
--location= LOCATION \
--keyring= KEY_RING \
--format="value(publicKey.pem)" \
IMPORT_JOB > ${HOME}/wrapping-key.pem
Note: You only need to download the public key once and can use it until the
import job expires.
Call the ImportJob.get method.
Retrieve the public key via the publicKey field of the
ImportJob.get response. This value is of type WrappingPublicKey .
The pem field of the WrappingPublicKey type is the public
key encoded in Privacy Enhanced Mail (PEM) format.
Note: Remember to verify that your key's
algorithm and length
are supported. Allowable algorithms for a key depend upon whether the key is
used for symmetric encryption, asymmetric encryption or asymmetric signing, as
well as whether the key is stored in software or a Hardware Security Module
(HSM).
For more information about the PEM-encoded format, see
RFC 7468 , especially the
General Considerations
and
Textual Encoding of Subject Public Key Info
sections.
Set up environment variables
The OpenSSL commands require several file paths as input values. Define
environment variables for the file paths to make it easier to run the commands.
Make sure you have access to write to the directories you define below.
Note: If desired, you can save all of these commands to a shell script and
run the script to set the variables all at once. You may need to adjust some of
the values for each key you want to wrap.
Set the PUB_WRAPPING_KEY variable to the full path to the wrapping key you
downloaded from the import job. The wrapping key ends in .pem .
PUB_WRAPPING_KEY=" WRAPPING_KEY_PATH "
Set the TARGET_KEY variable to the full path to the unwrapped (target) key.
TARGET_KEY= TARGET_KEY_PATH
Replace TARGET_KEY_PATH with the path to the .bin file for
symmetric keys or the path to the .der file for asymmetric keys.
If wrapping with RSA-AES, set the TEMP_AES_KEY variable to the full path
to the temporary AES key.
TEMP_AES_KEY= TEMP_AES_KEY_PATH
Set the WRAPPED_KEY variable to the full path where you
want to save the wrapped target key that is ready for
import.
WRAPPED_KEY= WRAPPED_KEY_PATH
Verify that all the environment variables are set correctly using the
following commands:
echo "PUB_WRAPPING_KEY: " ${PUB_WRAPPING_KEY}; \
echo "TARGET_KEY: " ${TARGET_KEY}; \
echo "TEMP_AES_KEY: " ${TEMP_AES_KEY}; \
echo "WRAPPED_KEY: " ${WRAPPED_KEY}
When the variables are set correctly, you are ready to wrap the key. There are
two approaches as described below: with RSA only or with
RSA-AES .
Wrap the key
Wrap the key with RSA
In this approach, the target key is wrapped in an RSA block. The target key size
is therefore limited. For example, you can't use this method to wrap another RSA
key. The supported import methods are rsa-oaep-3072-sha256 and
rsa-oaep-4096-sha256 .
Wrap the target key with the wrapping public key using
the CKM_RSA_PKCS_OAEP algorithm:
openssl pkeyutl \
-encrypt \
-pubin \
-inkey ${PUB_WRAPPING_KEY} \
-in ${TARGET_KEY} \
-out ${WRAPPED_KEY} \
-pkeyopt rsa_padding_mode:oaep \
-pkeyopt rsa_oaep_md:sha256 \
-pkeyopt rsa_mgf1_md:sha256
Wrap the key with RSA-AES
In this approach, the target key is wrapped with a temporary AES key. The
temporary AES key is then wrapped by the RSA key. These two wrapped keys are
concatenated and imported. Because the target key is wrapped using AES rather
than RSA, this approach can be used to wrap large keys. The supported import
methods are rsa-oaep-3072-sha1-aes-256 , rsa-oaep-4096-sha1-aes-256 ,
rsa-oaep-3072-sha256-aes-256 and rsa-oaep-4096-sha256-aes-256 .
Generate a temporary random AES key that is 32 bytes long, and save it to
the location identified by ${TEMP_AES_KEY} :
openssl rand -out "${TEMP_AES_KEY}" 32
Wrap the temporary AES key with the wrapping public key using
the CKM_RSA_PKCS_OAEP algorithm. If the import method is either
rsa-oaep-3072-sha1-aes-256 or rsa-oaep-4096-sha1-aes-256 , use sha1 for
rsa_oaep_md and rsa_mgf1_md . Use sha256 for
rsa-oaep-3072-sha256-aes-256 and rsa-oaep-4096-sha256-aes-256 .
openssl pkeyutl \
-encrypt \
-pubin \
-inkey ${PUB_WRAPPING_KEY} \
-in ${TEMP_AES_KEY} \
-out ${WRAPPED_KEY} \
-pkeyopt rsa_padding_mode:oaep \
-pkeyopt rsa_oaep_md:{sha1|sha256} \
-pkeyopt rsa_mgf1_md:{sha1|sha256}
Set the OpenSSL_V110 variable to the path of your openssl.sh script. If
you followed the instructions for
patching and recompiling OpenSSL exactly,
you can use this command without modifying the value of the variable.
OPENSSL_V110="${HOME}/local/bin/openssl.sh"
Wrap the target key with the temporary AES key using the
CKM_AES_KEY_WRAP_PAD algorithm, and append it to the WRAPPED_KEY .
"${OPENSSL_V110}" enc \
-id-aes256-wrap-pad \
-iv A65959A6 \
-K $( hexdump -v -e '/1 "%02x"' < "${TEMP_AES_KEY}" ) \
-in "${TARGET_KEY}" >> "${WRAPPED_KEY}"
The -iv A65959A6 flag sets A65959A6 as the Alternate Initial Value. This
is required by the RFC 5649
specification.
What's next
The wrapped key saved at WRAPPED_KEY is now ready to be imported.
To import the key, follow the instructions in Importing a
manually-wrapped key .
Previous
arrow_back
Configure OpenSSL for manual key wrapping
Next
Set up automatic key wrapping
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
