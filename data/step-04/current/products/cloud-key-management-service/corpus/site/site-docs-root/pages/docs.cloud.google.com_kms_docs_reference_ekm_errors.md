---
title: "Cloud EKM error reference \_|\_ Cloud Key Management Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/ekm_errors
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/ekm_errors
  title: "Cloud EKM error reference \_|\_ Cloud Key Management Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Cloud EKM error reference | Cloud Key Management Service | Google Cloud Documentation
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
Use OpenSSL
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
Structure of an error
Troubleshooting
Input errors
Retriable errors
External key management system errors
Getting support
Home
Documentation
Security
Cloud KMS
Reference
Was this helpful?
Send feedback
Cloud EKM error reference
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Structure of an error
Troubleshooting
Input errors
Retriable errors
External key management system errors
Getting support
This topic helps you interpret and troubleshoot errors that might occur when
using Cloud External Key Manager (Cloud EKM) .
Structure of an error
The structure of the error messages provides as much granularity as possible to
help you diagnose and troubleshoot the problem. Errors are
returned in a google.rpc.Status structure. Within that structure:
The google.rpc.Status.code field shows the broad category of the error.
The google.rpc.Status.message field shows a human-readable message, including
details about the specific action that was attempted and context-dependent
suggestions for troubleshooting the error.
If the google.rpc.Status.code is FAILED_PRECONDITION , the
google.rpc.PreconditionFailure structure is machine-readable. It
contains two violation structures.
violation[0] contains information about the state of the Cloud EKM
key.
violation[1] contains information about the attempt to contact the
external key management partner system.
The violation[1].type contains information about the type of error.
Cloud EKM refers to this information as the "error domain".
If these errors persist, contact support for the external key management partner.
In this reference, the messages in the google.rpc.Status.message are truncated
for readability. The truncated portion includes information such as the external
key URI or key path.
Troubleshooting
Errors that occur when using Cloud EKM may be caused by problems with
input errors, Cloud EKM, the external key management partner system, communications
between them, or other factors. You can read specific troubleshooting
information in the section for each type of error.
Depending on the type of error, you may need to contact Cloud EKM
support or support for the external key management partner system.
If your error isn't listed in the tables below, see Troubleshoot EKM via VPC
errors .
Input errors
Follow the troubleshooting advice in the google.rpc.Status.message field of
the error. If the problem persists, contact Google Cloud support .
Unless otherwise noted, the errors in this section have google.rpc.Status.code of
FAILED_PRECONDITION .
google. rpc. Status. message
violation[1]. type (Error domain)
Troubleshooting
Permission was denied when accessing the EKM_ ELEMENT .
EXTERNAL_ PERMISSION_ DENIED
When EKM_ ELEMENT is key , Cloud EKM also disables the key
version. Grant the appropriate permissions in your external key manager, and then try again by rotating the Cloud EKM key. When EKM_ELEMENT is crypto space or EKM host , grant the appropriate role or permissions to the service account, and then try again.
Could not find a EKM_ELEMENT or Could not query EKM host.
EXTERNAL_NOT_FOUND
When EKM_ELEMENT is key , check that the external key URI or the key path is correct.
When EKM_ELEMENT is crypto space , check that the crypto space path is correct.
When an EKM host cannot be queried, check that the EKM hostname is correct. If they are spelled correctly, contact support for the external key management partner system.
Key URI has invalid format.
EXTERNAL_KEY_URI_INVALID
Check that the key URI in this request is correct and try again by rotating the Cloud EKM key.
Key URI host is not supported.
EXTERNAL_KEY_HOST_NOT_WHITELISTED
Check that the key URI is correct. If you are operating your own
deployment of the external key management partner system, contact Google Cloud support.
Otherwise, contact support for the external key management partner system.
Could not resolve the domain name for EKM_ELEMENT .
DNS
Check that the key URI, key path, crypto space, or EKM hostname is correct. If it is, contact support for the external key management partner system.
Retriable errors
Follow the troubleshooting advice in the google.rpc.Status.message field of
the error. If you observe frequent timeouts or network errors, ensure that the
geographic location of your Cloud EKM keys as near as possible to the
region you use for the external keys. If the problem persists, contact support
for the external key management partner.
Unless otherwise noted, the errors in this section have google.rpc.Status.code
of FAILED_PRECONDITION . EKM_ELEMENT can be one of these value: key , crypto space , or EKM host .
google.rpc.Status.message
violation[1].type (Error domain)
Throttled when trying to access key URI.
EXTERNAL_RESOURCE_EXHAUSTED
Could not reach the EKM_ELEMENT due to an external networking error.
UNREACHABLE_NETWORK
Could not reach the EKM_ELEMENT because the external key manager reports that it is overloaded.
OVERLOADED_EKM
Timed out when trying to access the EKM_ELEMENT .
TIMEOUT
This error typically happens when the EKM is too slow to respond. Slowness can be caused by the EKM receiving more requests than it can handle or by network latency that is too high.
REQUEST_CANCELLED
External key management system errors
If you encounter these errors and they persist, contact support for the
external key management partner.
Unless otherwise noted, the errors in this section have google.rpc.Status.code
of FAILED_PRECONDITION . EKM_ELEMENT can be one of these value: key , crypto space , or EKM host .
google.rpc.Status.message
violation[1].type (Error domain)
Could not validate the TLS server certificate for the EKM_ELEMENT .
TLS_CERT
Got garbled or unusable response when trying to access the EKM_ELEMENT .
UNEXPECTED_RESPONSE
External server error when trying to access the EKM_ELEMENT .
EXTERNAL_SERVER_ERROR
The external key manager indicated they have not implemented the appropriate method to support Cloud KMS's EKM_API .
EKM_API can be one of AsymmetricSign , CheckCryptoSpacePermissions , CreateKey , Decrypt , DestroyKey , Encrypt , GetInfo , or GetPublicKey
EXTERNAL_NOT_IMPLEMENTED
Got unexpected error when trying to access the EKM_ELEMENT .
UNEXPECTED_ERROR
Decryption failed: The EKM reports that decryption failed.
This means key URI is valid, but the external key management partner system
failed to decrypt wrapped blob or additional authenticated data (AAD).
google.rpc.Status.code is INVALID_ARGUMENT .
DECRYPTION_FAILED
Getting support
If you experience an error not listed in this reference, contact
Google Cloud support .
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
