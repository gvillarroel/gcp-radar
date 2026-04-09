---
title: "REST Resource: projects.locations.ekmConnections \_|\_ Cloud Key Management\
  \ Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.ekmConnections
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.ekmConnections
  title: "REST Resource: projects.locations.ekmConnections \_|\_ Cloud Key Management\
    \ Service \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: projects.locations.ekmConnections | Cloud Key Management Service | Google Cloud Documentation
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
Español – América Latina
Français
Português – Brasil
中文 – 简体
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
projects. locations
Overview
generateRandomBytes
get
getEkmConfig
list
updateEkmConfig
projects. locations. ekm Config
Overview
getIamPolicy
setIamPolicy
testIamPermissions
projects. locations. ekm Connections
Overview
create
get
get Iam Policy
list
patch
set Iam Policy
test Iam Permissions
verify Connectivity
projects. locations. key Handles
Overview
create
get
list
projects. locations. key Rings
Overview
create
get
getIamPolicy
list
setIamPolicy
testIamPermissions
projects. locations. key Rings. crypto Keys
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
projects. locations. key Rings. crypto Keys. crypto Key Versions
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
projects. locations. key Rings. import Jobs
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
Resource: EkmConnection
ServiceResolver
Certificate
KeyManagementMode
Methods create
get
getIamPolicy
list
patch
setIamPolicy
testIamPermissions
verifyConnectivity
Home
Documentation
Security
Cloud KMS
Reference
Was this helpful?
Send feedback
REST Resource: projects. locations. ekm Connections
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: EkmConnection
ServiceResolver
Certificate
KeyManagementMode
Methods create
get
getIamPolicy
list
patch
setIamPolicy
testIamPermissions
verifyConnectivity
Resource: EkmConnection
JSON representation
ServiceResolver
JSON representation
Certificate
JSON representation
KeyManagementMode
Methods
Resource: Ekm Connection
An EkmConnection represents an individual EKM connection. It can be used for creating CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC , as well as performing cryptographic operations using keys created within the EkmConnection .
JSON representation
See more code actions.
Light code theme
Dark code theme
{
"name" : string ,
"createTime" : string ,
"serviceResolvers" : [
{
object ( ServiceResolver )
}
] ,
"etag" : string ,
"keyManagementMode" : enum ( KeyManagementMode ) ,
"cryptoSpacePath" : string
}
Fields
name
string
Output only. The resource name for the EkmConnection in the format projects/*/locations/*/ekmConnections/* .
create Time
string ( Timestamp format)
Output only. The time at which the EkmConnection was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
service Resolvers[]
object ( ServiceResolver )
Optional. A list of ServiceResolvers where the EKM can be reached. There should be one ServiceResolver per EKM replica. Currently, only a single ServiceResolver is supported.
etag
string
Optional. Etag of the currently stored EkmConnection .
key Management Mode
enum ( KeyManagementMode )
Optional. Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL .
crypto Space Path
string
Optional. Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS .
Service Resolver
A ServiceResolver represents an EKM replica that can be reached within an EkmConnection .
JSON representation
{
"serviceDirectoryService" : string ,
"endpointFilter" : string ,
"hostname" : string ,
"serverCertificates" : [
{
object ( Certificate )
}
]
}
Fields
serviceDirectoryService
string
Required. The resource name of the Service Directory service pointing to an EKM replica, in the format projects/*/locations/*/namespaces/*/services/* .
endpointFilter
string
Optional. The filter applied to the endpoints of the resolved service. If no filter is specified, all endpoints will be considered. An endpoint will be chosen arbitrarily from the filtered list for each request.
For endpoint filter syntax and examples, see https://cloud.google.com/service-directory/docs/reference/rpc/google.cloud.servicedirectory.v1#resolveservicerequest .
hostname
string
Required. The hostname of the EKM replica used at TLS and HTTP layers.
serverCertificates[]
object ( Certificate )
Required. A list of leaf server certificates used to authenticate HTTPS connections to the EKM replica. Currently, a maximum of 10 Certificate is supported.
Certificate
A Certificate represents an X.509 certificate used to authenticate HTTPS connections to EKM replicas.
JSON representation
{
"rawDer" : string ,
"parsed" : boolean ,
"issuer" : string ,
"subject" : string ,
"subjectAlternativeDnsNames" : [
string
] ,
"notBeforeTime" : string ,
"notAfterTime" : string ,
"serialNumber" : string ,
"sha256Fingerprint" : string
}
Fields
rawDer
string ( bytes format)
Required. The raw certificate bytes in DER format.
A base64-encoded string.
parsed
boolean
Output only. True if the certificate was parsed successfully.
issuer
string
Output only. The issuer distinguished name in RFC 2253 format. Only present if parsed is true.
subject
string
Output only. The subject distinguished name in RFC 2253 format. Only present if parsed is true.
subjectAlternativeDnsNames[]
string
Output only. The subject Alternative DNS names. Only present if parsed is true.
notBeforeTime
string ( Timestamp format)
Output only. The certificate is not valid before this time. Only present if parsed is true.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
notAfterTime
string ( Timestamp format)
Output only. The certificate is not valid after this time. Only present if parsed is true.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
serialNumber
string
Output only. The certificate serial number as a hex string. Only present if parsed is true.
sha256Fingerprint
string
Output only. The SHA-256 certificate fingerprint as a hex string. Only present if parsed is true.
KeyManagementMode
KeyManagementMode describes who can perform control plane cryptographic operations using this EkmConnection .
Enums
KEY_MANAGEMENT_MODE_UNSPECIFIED
Not specified.
MANUAL
EKM-side key management operations on CryptoKeys created with this EkmConnection must be initiated from the EKM directly and cannot be performed from Cloud KMS. This means that: * When creating a CryptoKeyVersion associated with this EkmConnection , the caller must supply the key path of pre-existing external key material that will be linked to the CryptoKeyVersion . * Destruction of external key material cannot be requested via the Cloud KMS API and must be performed directly in the EKM. * Automatic rotation of key material is not supported.
CLOUD_KMS
All CryptoKeys created with this EkmConnection use EKM-side key management operations initiated from Cloud KMS. This means that:
When a CryptoKeyVersion associated with this EkmConnection is created, the EKM automatically generates new key material and a new key path. The caller cannot supply the key path of pre-existing external key material.
Destruction of external key material associated with this EkmConnection can be requested by calling cryptoKeyVersions.destroy .
Automatic rotation of key material is supported.
Methods
create
Creates a new EkmConnection in a given Project and Location.
get
Returns metadata for a given EkmConnection .
getIamPolicy
Gets the access control policy for a resource.
list
Lists EkmConnections .
patch
Updates an EkmConnection 's metadata.
setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
Returns permissions that a caller has on the specified resource.
verifyConnectivity
Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-19 UTC."],[],[]]
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
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
