---
title: "Using a Cloud HSM key with OpenSSL \_|\_ Cloud Key Management Service \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl
  title: "Using a Cloud HSM key with OpenSSL \_|\_ Cloud Key Management Service \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Using a Cloud HSM key with OpenSSL | Cloud Key Management Service | Google Cloud Documentation
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
Cloud KMS
All APIs & references
API client libraries
PKCS #11 library
Overview
Use Open SSL
Apache TLS termination
NGINX TLS offload
Use pkcs11-tool
Sign Windows artifacts with Jsign
Windows CNG Provider
Overview
Signing Windows artifacts
Permissions and roles
Cloud EKM error reference
Overview
KMS REST reference
Overview
v1
REST Resources
folders
Overview
getAutokeyConfig
getKajPolicyConfig
updateAutokeyConfig
updateKajPolicyConfig
organizations
Overview
getKajPolicyConfig
updateKajPolicyConfig
projects
Overview
getAutokeyConfig
getKajPolicyConfig
showEffectiveAutokeyConfig
showEffectiveKeyAccessJustificationsEnrollmentConfig
showEffectiveKeyAccessJustificationsPolicyConfig
updateAutokeyConfig
updateKajPolicyConfig
projects.locations
Overview
generateRandomBytes
get
getEkmConfig
list
updateEkmConfig
projects.locations.ekmConfig
Overview
getIamPolicy
setIamPolicy
testIamPermissions
projects.locations.ekmConnections
Overview
create
get
getIamPolicy
list
patch
setIamPolicy
testIamPermissions
verifyConnectivity
projects.locations.keyHandles
Overview
create
get
list
projects.locations.keyRings
Overview
create
get
getIamPolicy
list
setIamPolicy
testIamPermissions
projects.locations.keyRings.cryptoKeys
Overview
create
decrypt
delete
encrypt
get
getIamPolicy
list
patch
setIamPolicy
testIamPermissions
updatePrimaryVersion
projects.locations.keyRings.cryptoKeys.cryptoKeyVersions
Overview
asymmetricDecrypt
asymmetricSign
create
decapsulate
delete
destroy
get
getPublicKey
import
list
macSign
macVerify
patch
rawDecrypt
rawEncrypt
restore
projects.locations.keyRings.importJobs
Overview
create
get
getIamPolicy
list
setIamPolicy
testIamPermissions
projects.locations.operations
Overview
get
projects.locations.retiredResources
Overview
get
list
projects.locations.singleTenantHsmInstances
Overview
create
get
list
projects.locations.singleTenantHsmInstances.proposals
Overview
approve
create
delete
execute
get
list
Types
AutokeyConfig
CryptoKeyVersionAlgorithm
CryptoKeyVersionView
EkmConfig
GetPolicyOptions
KeyAccessJustificationsPolicyConfig
KeyOperationAttestation
Location
Policy
ProtectionLevel
TestIamPermissionsResponse
KMS Inventory REST reference
Overview
v1
REST Resources
organizations.protectedResources
Overview
search
projects.cryptoKeys
Overview
list
projects.locations.keyRings.cryptoKeys
Overview
getProtectedResourcesSummary
KMS RPC reference
Overview
google.cloud.kms.v1
google.cloud.location
google.iam.v1
google.longrunning
google.rpc
google.type
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
Requirements
Configuration Setting the PKCS11_MODULE_PATH environment variable.
PKCS #11 library configuration
Running OpenSSL commands Create a new signature
Create a new certificate signing request
Generate a new self-signed certificate
Troubleshooting with PKCS #11 Spy
Home
Documentation
Security
Cloud KMS
Reference
Was this helpful?
Send feedback
Using a Cloud HSM key with Open SSL
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Requirements
Configuration Setting the PKCS11_MODULE_PATH environment variable.
PKCS #11 library configuration
Running OpenSSL commands Create a new signature
Create a new certificate signing request
Generate a new self-signed certificate
Troubleshooting with PKCS #11 Spy
This guide provides instructions for setting up OpenSSL to use a Cloud HSM
key on Debian 11 (Bullseye). These instructions are generally applicable even if
you're using another OS or environment, but be aware that there may be slight
differences.
Requirements
Download a release of the library
to get started. For additional details about the PKCS #11 library, see the user guide .
Before starting, install the libengine-pkcs11-openssl package.
See more code actions.
Light code theme
Dark code theme
sudo apt-get update
sudo apt-get install libengine-pkcs11-openssl
Configuration
Setting the PKCS11_ MODULE_ PATH environment variable.
In order for openssl to use our PKCS #11 library, set the PKCS11_MODULE_PATH
environment variable:
export PKCS11_MODULE_PATH = "/path/to/libkmsp11.so"
To permanently set the environment variable, add
export PKCS11_MODULE_PATH="/path/to/libkmsp11.so" to /etc/profile
by running the following command:
echo 'export PKCS11_MODULE_PATH="/path/to/libkmsp11.so"' | sudo tee -a /etc/profile
PKCS #11 library configuration
The PKCS #11 library requires a YAML configuration file to locate Cloud KMS
resources. The YAML must at a minimum configure a single PKCS #11 token.
If you are using OpenSSL with another process that may end up forking (for
example, Apache or Nginx), you must also ensure that the
refresh_interval_secs field remains unset, or is set to 0.
Sample configuration file:
---
tokens :
- key_ring : "projects/my-project/locations/us-central1/keyRings/my-keyring"
With this configuration, all asymmetric signing and decryption keys in
my-keyring will be available in the library.
You must set the permissions on the configuration file so that it is writable
only by the file owner. Point KMS_PKCS11_CONFIG to your config file:
export KMS_PKCS11_CONFIG = "/path/to/pkcs11-config.yaml"
Again, you can make this setting permanent by adding it to /etc/profile .
echo 'export KMS_PKCS11_CONFIG="/path/to/pkcs11-config.yaml"' | sudo tee -a /etc/profile
Running OpenSSL commands
With the engine and library properly configured, you may now use the engine in
OpenSSL commands.
When creating asymmetric signatures, keep in mind that Cloud KMS
keys are constrained to use a single digest. As an example, a CryptoKeyVersion
with the algorithm EC_SIGN_P256_SHA256 must always be used in conjunction with
a SHA-256 digest. That corresponds to the -sha256 flag in OpenSSL. Keys
that require SHA-384 or SHA-512 digests should be used with the -sha384 or
-sha512 flags.
Note: When creating asymmetric signatures using Cloud KMS keys with
an algorithm starting with RSA_PSS , additional options are typically required
by OpenSSL:
-sigopt rsa_padding_mode:pss -sigopt rsa_pss_saltlen:digest .
Create a new signature
Assuming there's a key named foo in your configured key ring, use the
following command to create a signature over bar.txt :
openssl dgst -sha256 -engine pkcs11 -keyform engine -sign pkcs11:object = foo bar.txt
The output of this command is unformatted binary.
That command assumes you are using a key that takes a SHA-256 digest, so the
-sha256 argument was used. The -sha384 or -sha512 options would be
appropriate for Cloud HSM keys that use those digest types.
For an RSA-PSS key, remember to use the -sigopt options discussed previously.
Create a new certificate signing request
You may also generate a certificate signing request (CSR) for a Cloud HSM
signing key. This is useful if your certificate authority requires a CSR in
order to generate a new certificate for code signing, or to protect TLS web
sessions.
openssl req -new -subj '/CN=test/' -sha256 -engine pkcs11 \
-keyform engine -key pkcs11:object=foo > my-request.csr
Note: Only create CSRs for Cloud KMS CryptoKeys with the
ASYMMETRIC_SIGN purpose. In addition, take care to use the correct digest
algorithm and -sigopt options for the key type.
Generate a new self-signed certificate
For local development and testing, you can use a self-signed certificate for a
Cloud HSM signing key. Self-signed certificates are also useful for SAML
token signing.
openssl req -new -x509 -days 3650 -subj '/CN=test/' -sha256 -engine pkcs11 \
-keyform engine -key pkcs11:object=foo > my-request.crt
Note: Self-signed certificates for Cloud KMS CryptoKeys are only
used for the ASYMMETRIC_SIGN purpose. In addition, take care to use the
correct digest algorithm and -sigopt options for the key type.
Troubleshooting with PKCS #11 Spy
PKCS #11 Spy is an open source tool that logs the contents of interactions over
the a PKCS #11 interface. It does this by sitting between the application and
the PKCS #11 library, and logging all the calls that are made. This can be
helpful for troubleshooting.
Caution: Don't use PKCS #11 Spy with sensitive workloads. When configured,
PKCS #11 Spy can observe all interactions with the HSM.
To use PKCS #11 Spy, you must have the opensc package installed. The
opensc package contains PKCS #11 Spy. To ensure that opensc is installed,
run the following command:
sudo apt-get install opensc
Then, set the PKCS11_MODULE_PATH environment variable to point OpenSSL at the
PKCS #11 Spy library by running the following command:
export PKCS11_MODULE_PATH = /usr/lib/x86_64-linux-gnu/pkcs11-spy.so
Finally, point PKCS #11 Spy to the Cloud HSM PKCS #11 library by setting the
PKCS11SPY and PKCS11SPY_OUTPUT environment variables. To set these environment
variables, run the following commands:
export PKCS11SPY = "/path/to/libkmsp11.so"
# Optional, stderr will be used for logging if not set
export PKCS11SPY_OUTPUT = "/path/to/pkcs11-spy.log"
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
