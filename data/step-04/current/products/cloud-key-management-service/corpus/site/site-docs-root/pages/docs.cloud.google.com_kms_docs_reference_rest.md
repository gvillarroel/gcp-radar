---
title: "Cloud Key Management Service (KMS) API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/rest
  title: "Cloud Key Management Service (KMS) API \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Cloud Key Management Service (KMS) API | Google Cloud Documentation
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
Service: cloudkms.googleapis.com Discovery document
Service endpoint
Regional service endpoint
REST Resource: v1.folders
REST Resource: v1.organizations
REST Resource: v1.projects
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.ekmConfig
REST Resource: v1.projects.locations.ekmConnections
REST Resource: v1.projects.locations.keyHandles
REST Resource: v1.projects.locations.keyRings
REST Resource: v1.projects.locations.keyRings.cryptoKeys
REST Resource: v1.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions
REST Resource: v1.projects.locations.keyRings.importJobs
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.retiredResources
REST Resource: v1.projects.locations.singleTenantHsmInstances
REST Resource: v1.projects.locations.singleTenantHsmInstances.proposals
Home
Documentation
Security
Cloud KMS
Reference
Was this helpful?
Send feedback
Cloud Key Management Service (KMS) API
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Service: cloudkms.googleapis.com Discovery document
Service endpoint
Regional service endpoint
REST Resource: v1.folders
REST Resource: v1.organizations
REST Resource: v1.projects
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.ekmConfig
REST Resource: v1.projects.locations.ekmConnections
REST Resource: v1.projects.locations.keyHandles
REST Resource: v1.projects.locations.keyRings
REST Resource: v1.projects.locations.keyRings.cryptoKeys
REST Resource: v1.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions
REST Resource: v1.projects.locations.keyRings.importJobs
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.retiredResources
REST Resource: v1.projects.locations.singleTenantHsmInstances
REST Resource: v1.projects.locations.singleTenantHsmInstances.proposals
Manages keys and performs cryptographic operations in a central cloud service, for direct use by other cloud resources and applications.
REST Resource: v1.folders
REST Resource: v1.organizations
REST Resource: v1.projects
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.ekmConfig
REST Resource: v1.projects.locations.ekmConnections
REST Resource: v1.projects.locations.keyHandles
REST Resource: v1.projects.locations.keyRings
REST Resource: v1.projects.locations.keyRings.cryptoKeys
REST Resource: v1.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions
REST Resource: v1.projects.locations.keyRings.importJobs
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.retiredResources
REST Resource: v1.projects.locations.singleTenantHsmInstances
REST Resource: v1.projects.locations.singleTenantHsmInstances.proposals
Service: cloudkms. googleapis. com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://cloudkms.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://cloudkms.googleapis.com
Regional service endpoint
A regional service endpoint is a base URL that specifies the network address of an API service in a single region. A service that is available in multiple regions might have multiple regional endpoints. Select a location to see its regional service endpoint for this service.
global europe-west3 europe-west8 europe-west9 me-central2 us-east1 us-east4 us-west2 us-west1 us-east7 us-central1 us-west3 us-central2 us-west4 us-west8 us-east5 us-south1 us in ca
https://cloudkms.googleapis.com
REST Resource: v1. folders
Methods
get Autokey Config
GET / v1/ {name=folders/ */ autokey Config}
Returns the Autokey Config for a folder or project.
get Kaj Policy Config
GET / v1/ {name=folders/ */ kaj Policy Config}
Gets the Key Access Justifications Policy Config for a given organization, folder, or project.
update Autokey Config
PATCH / v1/ {autokey Config. name=folders/ */ autokey Config}
Updates the AutokeyConfig for a folder or a project.
updateKajPolicyConfig
PATCH /v1/{keyAccessJustificationsPolicyConfig.name=folders/*/kajPolicyConfig}
Updates the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.
REST Resource: v1.organizations
Methods
getKajPolicyConfig
GET /v1/{name=organizations/*/kajPolicyConfig}
Gets the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.
updateKajPolicyConfig
PATCH /v1/{keyAccessJustificationsPolicyConfig.name=organizations/*/kajPolicyConfig}
Updates the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.
REST Resource: v1.projects
Methods
getAutokeyConfig
GET /v1/{name=projects/*/autokeyConfig}
Returns the AutokeyConfig for a folder or project.
getKajPolicyConfig
GET /v1/{name=projects/*/kajPolicyConfig}
Gets the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.
showEffectiveAutokeyConfig
GET /v1/{parent=projects/*}:showEffectiveAutokeyConfig
Returns the effective Cloud KMS Autokey configuration for a given project.
showEffectiveKeyAccessJustificationsEnrollmentConfig
GET /v1/{project=projects/*}:showEffectiveKeyAccessJustificationsEnrollmentConfig
Returns the KeyAccessJustificationsEnrollmentConfig of the resource closest to the given project in hierarchy.
showEffectiveKeyAccessJustificationsPolicyConfig
GET /v1/{project=projects/*}:showEffectiveKeyAccessJustificationsPolicyConfig
Returns the KeyAccessJustificationsPolicyConfig of the resource closest to the given project in hierarchy.
updateAutokeyConfig
PATCH /v1/{autokeyConfig.name=projects/*/autokeyConfig}
Updates the AutokeyConfig for a folder or a project.
updateKajPolicyConfig
PATCH /v1/{keyAccessJustificationsPolicyConfig.name=projects/*/kajPolicyConfig}
Updates the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.
REST Resource: v1.projects.locations
Methods
generateRandomBytes
POST /v1/{location=projects/*/locations/*}:generateRandomBytes
Generate random bytes using the Cloud KMS randomness source in the provided location.
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
getEkmConfig
GET /v1/{name=projects/*/locations/*/ekmConfig}
Returns the EkmConfig singleton resource for a given project and location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
updateEkmConfig
PATCH /v1/{ekmConfig.name=projects/*/locations/*/ekmConfig}
Updates the EkmConfig singleton resource for a given project and location.
REST Resource: v1.projects.locations.ekmConfig
Methods
getIamPolicy
GET /v1/{resource=projects/*/locations/*/ekmConfig}:getIamPolicy
Gets the access control policy for a resource.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/ekmConfig}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/ekmConfig}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.ekmConnections
Methods
create
POST /v1/{parent=projects/*/locations/*}/ekmConnections
Creates a new EkmConnection in a given Project and Location.
get
GET /v1/{name=projects/*/locations/*/ekmConnections/*}
Returns metadata for a given EkmConnection .
getIamPolicy
GET /v1/{resource=projects/*/locations/*/ekmConnections/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/ekmConnections
Lists EkmConnections .
patch
PATCH /v1/{ekmConnection.name=projects/*/locations/*/ekmConnections/*}
Updates an EkmConnection 's metadata.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/ekmConnections/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/ekmConnections/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
verifyConnectivity
GET /v1/{name=projects/*/locations/*/ekmConnections/*}:verifyConnectivity
Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection .
REST Resource: v1.projects.locations.keyHandles
Methods
create
POST /v1/{parent=projects/*/locations/*}/keyHandles
Creates a new KeyHandle , triggering the provisioning of a new CryptoKey for CMEK use with the given resource type in the configured key project and the same location.
get
GET /v1/{name=projects/*/locations/*/keyHandles/*}
Returns the KeyHandle .
list
GET /v1/{parent=projects/*/locations/*}/keyHandles
Lists KeyHandles .
REST Resource: v1.projects.locations.keyRings
Methods
create
POST /v1/{parent=projects/*/locations/*}/keyRings
Create a new KeyRing in a given Project and Location.
get
GET /v1/{name=projects/*/locations/*/keyRings/*}
Returns metadata for a given KeyRing .
getIamPolicy
GET /v1/{resource=projects/*/locations/*/keyRings/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/keyRings
Lists KeyRings .
setIamPolicy
POST /v1/{resource=projects/*/locations/*/keyRings/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/keyRings/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.keyRings.cryptoKeys
Methods
create
POST /v1/{parent=projects/*/locations/*/keyRings/*}/cryptoKeys
Create a new CryptoKey within a KeyRing .
decrypt
POST /v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/*}:decrypt
Decrypts data that was protected by Encrypt .
delete
DELETE /v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/*}
Permanently deletes the given CryptoKey .
encrypt
POST /v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/**}:encrypt
Encrypts data, so that it can only be recovered by a call to Decrypt .
get
GET /v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/*}
Returns metadata for a given CryptoKey , as well as its primary CryptoKeyVersion .
getIamPolicy
GET /v1/{resource=projects/*/locations/*/keyRings/*/cryptoKeys/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*/keyRings/*}/cryptoKeys
Lists CryptoKeys .
patch
PATCH /v1/{cryptoKey.name=projects/*/locations/*/keyRings/*/cryptoKeys/*}
Update a CryptoKey .
setIamPolicy
POST /v1/{resource=projects/*/locations/*/keyRings/*/cryptoKeys/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/keyRings/*/cryptoKeys/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
updatePrimaryVersion
POST /v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/*}:updatePrimaryVersion
Update the version of a CryptoKey that will be used in Encrypt .
REST Resource: v1.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions
Methods
asymmetricDecrypt
POST /v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*}:asymmetricDecrypt
Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.
asymmetricSign
POST /v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*}:asymmetricSign
Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey .
create
POST /v1/{parent=projects/*/locations/*/keyRings/*/cryptoKeys/*}/cryptoKeyVersions
Create a new CryptoKeyVersion in a CryptoKey .
decapsulate
POST /v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*}:decapsulate
Decapsulates data that was encapsulated with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose KEY_ENCAPSULATION.
delete
DELETE /v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*}
Permanently deletes the given CryptoKeyVersion .
destroy
POST /v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*}:destroy
Schedule a CryptoKeyVersion for destruction.
get
GET /v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*}
Returns metadata for a given CryptoKeyVersion .
getPublicKey
GET /v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*}/publicKey
Returns the public key for the given CryptoKeyVersion .
import
POST /v1/{parent=projects/*/locations/*/keyRings/*/cryptoKeys/*}/cryptoKeyVersions:import
Import wrapped key material into a CryptoKeyVersion .
list
GET /v1/{parent=projects/*/locations/*/keyRings/*/cryptoKeys/*}/cryptoKeyVersions
Lists CryptoKeyVersions .
macSign
POST /v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*}:macSign
Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.
macVerify
POST /v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*}:macVerify
Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.
patch
PATCH /v1/{cryptoKeyVersion.name=projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*}
Update a CryptoKeyVersion 's metadata.
rawDecrypt
POST /v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*}:rawDecrypt
Decrypts data that was originally encrypted using a raw cryptographic mechanism.
rawEncrypt
POST /v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*}:rawEncrypt
Encrypts data using portable cryptographic primitives.
restore
POST /v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*}:restore
Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state.
REST Resource: v1.projects.locations.keyRings.importJobs
Methods
create
POST /v1/{parent=projects/*/locations/*/keyRings/*}/importJobs
Create a new ImportJob within a KeyRing .
get
GET /v1/{name=projects/*/locations/*/keyRings/*/importJobs/*}
Returns metadata for a given ImportJob .
getIamPolicy
GET /v1/{resource=projects/*/locations/*/keyRings/*/importJobs/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*/keyRings/*}/importJobs
Lists ImportJobs .
setIamPolicy
POST /v1/{resource=projects/*/locations/*/keyRings/*/importJobs/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/keyRings/*/importJobs/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.operations
Methods
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v1.projects.locations.retiredResources
Methods
get
GET /v1/{name=projects/*/locations/*/retiredResources/*}
Retrieves a specific RetiredResource resource, which represents the record of a deleted CryptoKey .
list
GET /v1/{parent=projects/*/locations/*}/retiredResources
Lists the RetiredResources which are the records of deleted CryptoKeys .
REST Resource: v1.projects.locations.singleTenantHsmInstances
Methods
create
POST /v1/{parent=projects/*/locations/*}/singleTenantHsmInstances
Creates a new SingleTenantHsmInstance in a given Project and Location.
get
GET /v1/{name=projects/*/locations/*/singleTenantHsmInstances/*}
Returns metadata for a given SingleTenantHsmInstance .
list
GET /v1/{parent=projects/*/locations/*}/singleTenantHsmInstances
Lists SingleTenantHsmInstances .
REST Resource: v1.projects.locations.singleTenantHsmInstances.proposals
Methods
approve
POST /v1/{name=projects/*/locations/*/singleTenantHsmInstances/*/proposals/*}:approve
Approves a SingleTenantHsmInstanceProposal for a given SingleTenantHsmInstance .
create
POST /v1/{parent=projects/*/locations/*/singleTenantHsmInstances/*}/proposals
Creates a new SingleTenantHsmInstanceProposal for a given SingleTenantHsmInstance .
delete
DELETE /v1/{name=projects/*/locations/*/singleTenantHsmInstances/*/proposals/*}
Deletes a SingleTenantHsmInstanceProposal .
execute
POST /v1/{name=projects/*/locations/*/singleTenantHsmInstances/*/proposals/*}:execute
Executes a SingleTenantHsmInstanceProposal for a given SingleTenantHsmInstance .
get
GET /v1/{name=projects/*/locations/*/singleTenantHsmInstances/*/proposals/*}
Returns metadata for a given SingleTenantHsmInstanceProposal .
list
GET /v1/{parent=projects/*/locations/*/singleTenantHsmInstances/*}/proposals
Lists SingleTenantHsmInstanceProposals .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-02 UTC."],[],[]]
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
