---
title: "Configuring OpenSSL for manual key wrapping \_|\_ Cloud Key Management Service\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/configuring-openssl-for-manual-key-wrapping
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/configuring-openssl-for-manual-key-wrapping
  title: "Configuring OpenSSL for manual key wrapping \_|\_ Cloud Key Management Service\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Configuring OpenSSL for manual key wrapping | Cloud Key Management Service | Google Cloud Documentation
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
Patch and install OpenSSL v1.1.0
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Configuring Open SSL for manual key wrapping
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Patch and install OpenSSL v1.1.0
Before you can import a key into Cloud KMS, it must be wrapped
using the
PKCS#11
CKM_RSA_AES_KEY_WRAP scheme, which includes both RSA-OAEP (which is included
in OpenSSL 1.1 by default) and AES Key Wrap
with Padding (which is not). That mechanism is not included in OpenSSL.
We recommend using the Google Cloud CLI to
wrap each key automatically during
the import. If you must wrap your keys manually due to compliance or regulatory
requirements, you must first recompile OpenSSL to add support for AES Key Wrap
with Padding. After recompiling OpenSSL, you can
wrap the key manually .
Important: If you use automatic wrapping, do not follow these steps.
Instead, you need to install the Pyca cryptographic library ,
which works with the OpenSSL binaries already installed on your local system.
The Google Cloud CLI can use that library to automatically wrap your key during
the import request.
Before you begin
Caution: These steps require advanced knowledge of Linux. Most
users should allow the Google Cloud CLI command to
automatically wrap and import
keys instead of following the instructions in this topic.
Do not overwrite your system's built-in OpenSSL binaries with the
patched binaries produced by following the procedures in this topic. For example,
do not install the patched OpenSSL directly into /usr . If you follow this
procedure exactly, the patched OpenSSL is built in $HOME/build and installed
into $HOME/local/bin .
If ${HOME}/local/bin already exists, back up its contents or move those files
elsewhere before following the steps in this topic.
Patch and install Open SSL v1. 1. 0
If you choose to use OpenSSL to manually wrap your keys before importing them
into Cloud KMS, OpenSSL v1.1.0 is required, with the following
patch applied. You will need to compile OpenSSL and install it into a location
separate from your system's default OpenSSL installation.
Download the source for OpenSSL 1.1.0l release from
https://www.openssl.org/source .
This is the latest release in the 1.1.0 code line. Do not use a newer
version of OpenSSL, such as v1.1.1, in this procedure. The patch will fail
to apply.
Extract the archive to ${HOME}/build/openssl/ using the following command.
This command overrides the default directory, which includes the version of
OpenSSL and changes often. Replace
/path/to/downloaded-openssl.tar.gz with the path to the downloaded
.tar.gz archive.
# Create the directory for the eventual OpenSSL binaries
mkdir -p ${HOME}/local/ssl
# Create the build directory
mkdir -p ${HOME}/build/openssl
# Extract the archive to ${HOME}/build/openssl
tar xzvf /path/to/downloaded-openssl.tar.gz \
-C ${HOME}/build/openssl/ \
--strip-components 1
Apply a custom patch to the extracted OpenSSL source, using the following
commands.The patch enables the EVP_CIPHER_CTX_FLAG_WRAP_ALLOW flag.
Warning: This patch fails to apply to versions of OpenSSL other than v1.1.0l.
cd ${HOME}/build
cat <<-EOF | patch -d . -p0
--- orig/openssl/apps/enc.c 2020-01-17 14:39:54.991708785 -0500
+++ openssl/apps/enc.c 2020-01-17 14:41:33.215704269 -0500
@@ -482,6 +482,7 @@
*/
BIO_get_cipher_ctx(benc, &ctx);
+ EVP_CIPHER_CTX_set_flags(ctx, EVP_CIPHER_CTX_FLAG_WRAP_ALLOW);
if (!EVP_CipherInit_ex(ctx, cipher, NULL, NULL, NULL, enc)) {
BIO_printf(bio_err, "Error setting cipher %s\n",
EOF
Run the following commands to build the OpenSSL binaries and libraries from
the patched source, test the build for validity, and install the binaries
and libraries into the ${HOME}/local directory.
CPUS=$(getconf _NPROCESSORS_ONLN)
cd ${HOME}/build/openssl
./config --prefix=${HOME}/local --openssldir=${HOME}/local/ssl
make -j${CPUS}
make test
make install
Do not omit or modify the --prefix or --openssldir flags, to ensure that
you do not overwrite the system's OpenSSL installation.
Run the following command to check that the new OpenSSL binary installed
successfully:
test -x ${HOME}/local/bin/openssl || echo FAIL
You should see no output if the binaries are installed correctly. If you see
FAIL , check the output of the make , make test , and make install
commands you ran earlier.
The patched OpenSSL binaries are dynamically linked against the OpenSSL
libraries in ${HOME}/local/ssl/lib/ , but the ld command does not
index these libraries by default. Run the following commands to create a
wrapper script that adds the patched libraries to the ${LD_LIBRARY_PATH}
before invoking the CLI for the patched OpenSSL.
cat > ${HOME}/local/bin/openssl.sh <<-EOF
#!/bin/bash
env LD_LIBRARY_PATH=${HOME}/local/lib/ ${HOME}/local/bin/openssl "\$@"
EOF
chmod u+x ${HOME}/local/bin/openssl.sh
Check that the version of OpenSSL that the script starts is the version you
just built and installed, using the following command:
${HOME}/local/bin/openssl.sh version
You can now invoke the ${HOME}/local/bin/openssl.sh wrapper script to
manually wrap keys for import .
Previous
arrow_back
Format a key for import
Next
Wrap a key using OpenSSL
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
