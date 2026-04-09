---
title: "Cloud Key Management Service (KMS) API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/rpc
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/rpc
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
google. cloud. kms. v1
google. cloud. location
google. iam. v1
google. longrunning
google. rpc
google. type
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
Service: cloudkms.googleapis.com
google.cloud.kms.v1.Autokey
google.cloud.kms.v1.AutokeyAdmin
google.cloud.kms.v1.EkmService
google.cloud.kms.v1.HsmManagement
google.cloud.kms.v1.KeyAccessJustificationsConfig
google.cloud.kms.v1.KeyManagementService
google.cloud.location.Locations
google.iam.v1.IAMPolicy
google.longrunning.Operations
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
Service: cloudkms.googleapis.com
google.cloud.kms.v1.Autokey
google.cloud.kms.v1.AutokeyAdmin
google.cloud.kms.v1.EkmService
google.cloud.kms.v1.HsmManagement
google.cloud.kms.v1.KeyAccessJustificationsConfig
google.cloud.kms.v1.KeyManagementService
google.cloud.location.Locations
google.iam.v1.IAMPolicy
google.longrunning.Operations
Manages keys and performs cryptographic operations in a central cloud service, for direct use by other cloud resources and applications.
Service: cloudkms. googleapis. com
The Service name cloudkms.googleapis.com is needed to create RPC client stubs.
google. cloud. kms. v1. Autokey
Methods
Create Key Handle
Creates a new Key Handle , triggering the provisioning of a new Crypto Key for CMEK use with the given resource type in the configured key project and the same location.
Get Key Handle
Returns the Key Handle .
List Key Handles
Lists Key Handles .
google. cloud. kms. v1. Autokey Admin
Methods
Get Autokey Config
Returns the Autokey Config for a folder or project.
Show Effective Autokey Config
Returns the effective Cloud KMS Autokey configuration for a given project.
Update Autokey Config
Updates the Autokey Config for a folder or a project.
google. cloud. kms. v1. Ekm Service
Methods
Create Ekm Connection
Creates a new Ekm Connection in a given Project and Location.
Get Ekm Config
Returns the Ekm Config singleton resource for a given project and location.
Get Ekm Connection
Returns metadata for a given Ekm Connection .
List Ekm Connections
Lists Ekm Connections .
Update Ekm Config
Updates the Ekm Config singleton resource for a given project and location.
Update Ekm Connection
Updates an Ekm Connection 's metadata.
Verify Connectivity
Verifies that Cloud KMS can successfully connect to the external key manager specified by an Ekm Connection .
google.cloud.kms.v1.HsmManagement
Methods
ApproveSingleTenantHsmInstanceProposal
Approves a SingleTenantHsmInstanceProposal for a given SingleTenantHsmInstance .
CreateSingleTenantHsmInstance
Creates a new SingleTenantHsmInstance in a given Project and Location.
CreateSingleTenantHsmInstanceProposal
Creates a new SingleTenantHsmInstanceProposal for a given SingleTenantHsmInstance .
DeleteSingleTenantHsmInstanceProposal
Deletes a SingleTenantHsmInstanceProposal .
ExecuteSingleTenantHsmInstanceProposal
Executes a SingleTenantHsmInstanceProposal for a given SingleTenantHsmInstance .
GetSingleTenantHsmInstance
Returns metadata for a given SingleTenantHsmInstance .
GetSingleTenantHsmInstanceProposal
Returns metadata for a given SingleTenantHsmInstanceProposal .
ListSingleTenantHsmInstanceProposals
Lists SingleTenantHsmInstanceProposals .
ListSingleTenantHsmInstances
Lists SingleTenantHsmInstances .
google.cloud.kms.v1.KeyAccessJustificationsConfig
Methods
GetKeyAccessJustificationsPolicyConfig
Gets the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.
ShowEffectiveKeyAccessJustificationsEnrollmentConfig
Returns the KeyAccessJustificationsEnrollmentConfig of the resource closest to the given project in hierarchy.
ShowEffectiveKeyAccessJustificationsPolicyConfig
Returns the KeyAccessJustificationsPolicyConfig of the resource closest to the given project in hierarchy.
UpdateKeyAccessJustificationsPolicyConfig
Updates the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.
google.cloud.kms.v1.KeyManagementService
Methods
AsymmetricDecrypt
Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.
AsymmetricSign
Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey .
CreateCryptoKey
Create a new CryptoKey within a KeyRing .
CreateCryptoKeyVersion
Create a new CryptoKeyVersion in a CryptoKey .
CreateImportJob
Create a new ImportJob within a KeyRing .
CreateKeyRing
Create a new KeyRing in a given Project and Location.
Decapsulate
Decapsulates data that was encapsulated with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose KEY_ENCAPSULATION.
Decrypt
Decrypts data that was protected by Encrypt .
DeleteCryptoKey
Permanently deletes the given CryptoKey .
DeleteCryptoKeyVersion
Permanently deletes the given CryptoKeyVersion .
DestroyCryptoKeyVersion
Schedule a CryptoKeyVersion for destruction.
Encrypt
Encrypts data, so that it can only be recovered by a call to Decrypt .
GenerateRandomBytes
Generate random bytes using the Cloud KMS randomness source in the provided location.
GetCryptoKey
Returns metadata for a given CryptoKey , as well as its primary CryptoKeyVersion .
GetCryptoKeyVersion
Returns metadata for a given CryptoKeyVersion .
GetImportJob
Returns metadata for a given ImportJob .
GetKeyRing
Returns metadata for a given KeyRing .
GetPublicKey
Returns the public key for the given CryptoKeyVersion .
GetRetiredResource
Retrieves a specific RetiredResource resource, which represents the record of a deleted CryptoKey .
ImportCryptoKeyVersion
Import wrapped key material into a CryptoKeyVersion .
ListCryptoKeyVersions
Lists CryptoKeyVersions .
ListCryptoKeys
Lists CryptoKeys .
ListImportJobs
Lists ImportJobs .
ListKeyRings
Lists KeyRings .
ListRetiredResources
Lists the RetiredResources which are the records of deleted CryptoKeys .
MacSign
Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.
MacVerify
Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.
RawDecrypt
Decrypts data that was originally encrypted using a raw cryptographic mechanism.
RawEncrypt
Encrypts data using portable cryptographic primitives.
RestoreCryptoKeyVersion
Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state.
UpdateCryptoKey
Update a CryptoKey .
UpdateCryptoKeyPrimaryVersion
Update the version of a CryptoKey that will be used in Encrypt .
UpdateCryptoKeyVersion
Update a CryptoKeyVersion 's metadata.
google.cloud.location.Locations
Methods
GetLocation
Gets information about a location.
ListLocations
Lists information about the supported locations for this service.
google.iam.v1.IAMPolicy
Methods
GetIamPolicy
Gets the access control policy for a resource.
SetIamPolicy
Sets the access control policy on the specified resource.
TestIamPermissions
Returns permissions that a caller has on the specified resource.
google.longrunning.Operations
Methods
GetOperation
Gets the latest state of a long-running operation.
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
