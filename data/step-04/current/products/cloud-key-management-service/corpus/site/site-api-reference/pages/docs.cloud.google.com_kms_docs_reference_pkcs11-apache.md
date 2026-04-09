---
title: "Use a Cloud HSM key to serve Apache traffic \_|\_ Cloud Key Management Service\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache
  title: "Use a Cloud HSM key to serve Apache traffic \_|\_ Cloud Key Management Service\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Use a Cloud HSM key to serve Apache traffic | Cloud Key Management Service | Google Cloud Documentation
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
Before you begin
Configuration Create a Cloud KMS-hosted signing key
Create a self-signed certificate with OpenSSL
Set up the Apache server Run your server
Home
Documentation
Security
Cloud KMS
Reference
Was this helpful?
Send feedback
Use a Cloud HSM key to serve Apache traffic
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Configuration Create a Cloud KMS-hosted signing key
Create a self-signed certificate with OpenSSL
Set up the Apache server Run your server
This guide provides instructions for setting up an Apache server to use a
Cloud HSM key for TLS signing on Debian 11 (Bullseye). You might need to
modify these commands to work with your OS or Linux distribution.
Note: TLS termination with Apache is only supported for Elliptic Curve
Digital Signature Algorithm (ECDSA) keys.
You can find a Terraform-based blueprint version of this tutorial in the
kms-solutions GitHub repository .
Before you begin
As a prerequisite, complete the configuration documented in
OpenSSL Setup .
Once OpenSSL setup is complete, ensure that a recent version of Apache is
installed:
See more code actions.
Light code theme
Dark code theme
sudo apt-get update
sudo apt-get install apache2
Note: PKCS #11 URIs are only available in apache2-2.4.42 and
later. If you are using an earlier version, you must upgrade the apache2
package with the command above, or install from non-stable sources.
For Debian Buster: sudo apt install -t buster-backports apache2
Configuration
Create a Cloud KMS-hosted signing key
Create a Cloud KMS EC-P256-SHA256 signing key in your
Google Cloud project, in the key ring that you previously configured
for OpenSSL:
gcloud kms keys create " KEY_NAME " --keyring " KEY_RING " \
--project " PROJECT_ID " --location " LOCATION " \
--purpose "asymmetric-signing" --default-algorithm "ec-sign-p256-sha256" \
--protection-level "hsm"
Note: Make sure that your Compute Engine service account has the right
Identity and Access Management (IAM) permissions on the key ring to be able to use it.
Create a self-signed certificate with Open SSL
Generate a self-signed certificate with the Cloud KMS-hosted
signing key. You can use OpenSSL to use a PKCS #11 URI instead of a file path
and identify the key by its label. In the Cloud KMS PKCS #11
library, the key label is the CryptoKey name.
openssl req -new -x509 -days 3650 -subj '/CN= CERTIFICATE_NAME /' \
DIGEST_FLAG -engine pkcs11 -keyform engine \
-key PKCS_KEY_TYPE = KEY_IDENTIFIER > PATH_TO_CERTIFICATE
Replace the following:
CERTIFICATE_NAME : a name for the certificate.
DIGEST_FLAG : the digest algorithm used by the asymmetric signing
key. Use -sha256 , -sha384 , or -sha512 depending on the key.
PKCS_KEY_TYPE : the type of identifier used to identify the key.
To use the latest key version, use pkcs11:object with the key's name. To
use a specific key version, use pkcs11:id with the full resource ID of the
key version.
KEY_IDENTIFIER : an identifier for the key. If you're using
pkcs11:object , use the key's name—for example, KEY_NAME .
If you're using pkcs11:id , use the full resource ID of the key or key
version—for example,
projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME /cryptoKeyVersions/ KEY_VERSION .
PATH_TO_CERTIFICATE : the path where you want to save the certificate
file.
If this command fails, PKCS11_MODULE_PATH might have been set incorrectly, or
you might not have the right permissions to use the Cloud KMS
signing key.
You should now have a certificate that looks like this:
-----BEGIN CERTIFICATE-----
...
...
...
-----END CERTIFICATE-----
Set up the Apache server
Create a directory in /etc/apache2 to store your self-signed
certificate in:
sudo mkdir /etc/apache2/ssl
sudo mv ca.cert /etc/apache2/ssl
Edit the 000-default.conf virtual host configuration files located in
/etc/apache2/sites-available to provide the certificate file path and
ensure that the SSLEngine is on.
Here is a sample configuration listening on port 443:
< VirtualHost * : 443 >
ServerAdmin webmaster @ localhost
DocumentRoot / var / www / html
ErrorLog $ { APACHE_LOG_DIR } / error . log
CustomLog $ { APACHE_LOG_DIR } / access . log combined
SSLEngine on
SSLCertificateFile / etc / apache2 / ssl / ca . cert
SSLCertificateKeyFile " PKCS_KEY_TYPE = KEY_IDENTIFIER "
< / VirtualHost >
Ensure Apache exports the environment variables correctly by adding them to
the /etc/apache2/envvars file using your text editor of choice. You might
need to edit the file as root using sudo . Add the following lines to the
end of the file:
export PKCS11_MODULE_PATH = "<var>PATH_TO_LIBKMSP11</var>"
export KMS_PKCS11_CONFIG = "<var>PATH_TO_PKCS11_CONFIG</var>"
export GRPC_ENABLE_FORK_SUPPORT = 1
Replace the following:
PATH_TO_LIBKMSP11 : the path to libkmsp11.so .
PATH_TO_PKCS11_CONFIG : the path to
pkcs11-config.yaml .
GRPC_ENABLE_FORK_SUPPORT is needed for gRPC to include fork support and
correctly run the Cloud KMS PKCS #11 library as part of the Apache
server.
If you want to authenticate using a service account key, you must also
export a value for the GOOGLE_APPLICATION_CREDENTIALS environment
variable.
Run your server
Enable the Apache SSL module, enable the virtualhost configuration, and add a
test web page in your DocumentRoot folder:
sudo a2enmod ssl
sudo a2ensite 000 - default . conf
echo '<!doctype html><html><body><h1>Hello World!</h1></body></html>' | \
sudo tee / var / www / html / index . html
Restart your Apache server and test with curl that the configuration works as
expected. The --insecure flag is needed to ignore self-signed certificate
checks.
sudo systemctl restart apache2
curl -v --insecure https://127.0.0.1
If you encounter any errors, the Apache error log is a good starting place to
see what went wrong. Authentication issues are a common source of errors. If you
see PERMISSION_DENIED errors, make sure that you are fully authenticated and
that the credentials file has the right permissions. To make sure you are fully
authenticated, run the following command:
gcloud auth application-default login
To confirm that authentication was successful, the output should include the
line Credentials saved to file: [/path/to/credentials.json] .
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
