---
title: "Package google.cloud.kms.v1 \_|\_ Cloud Key Management Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1
  title: "Package google.cloud.kms.v1 \_|\_ Cloud Key Management Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Package google.cloud.kms.v1 | Cloud Key Management Service | Google Cloud Documentation
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
Index
Autokey
AutokeyAdmin
EkmService
HsmManagement
KeyAccessJustificationsConfig
KeyManagementService
AccessReason
ApproveSingleTenantHsmInstanceProposalRequest
QuorumReply
RequiredActionQuorumReply
ApproveSingleTenantHsmInstanceProposalResponse
AsymmetricDecryptRequest
AsymmetricDecryptResponse
AsymmetricSignRequest
AsymmetricSignResponse
AutokeyConfig
KeyProjectResolutionMode
State
Certificate
Challenge
ChallengeReply
ChecksummedData
CreateCryptoKeyRequest
CreateCryptoKeyVersionRequest
CreateEkmConnectionRequest
CreateImportJobRequest
CreateKeyHandleMetadata
CreateKeyHandleRequest
CreateKeyRingRequest
CreateSingleTenantHsmInstanceMetadata
CreateSingleTenantHsmInstanceProposalMetadata
CreateSingleTenantHsmInstanceProposalRequest
CreateSingleTenantHsmInstanceRequest
CryptoKey
CryptoKeyPurpose
CryptoKeyVersion
CryptoKeyVersionAlgorithm
CryptoKeyVersionState
CryptoKeyVersionView
CryptoKeyVersionTemplate
DecapsulateRequest
DecapsulateResponse
DecryptRequest
DecryptResponse
DeleteCryptoKeyMetadata
DeleteCryptoKeyRequest
DeleteCryptoKeyVersionMetadata
DeleteCryptoKeyVersionRequest
DeleteSingleTenantHsmInstanceProposalRequest
DestroyCryptoKeyVersionRequest
Digest
EkmConfig
EkmConnection
KeyManagementMode
ServiceResolver
EncryptRequest
EncryptResponse
ExecuteSingleTenantHsmInstanceProposalMetadata
ExecuteSingleTenantHsmInstanceProposalRequest
ExecuteSingleTenantHsmInstanceProposalResponse
ExternalProtectionLevelOptions
GenerateRandomBytesRequest
GenerateRandomBytesResponse
GetAutokeyConfigRequest
GetCryptoKeyRequest
GetCryptoKeyVersionRequest
GetEkmConfigRequest
GetEkmConnectionRequest
GetImportJobRequest
GetKeyAccessJustificationsPolicyConfigRequest
GetKeyHandleRequest
GetKeyRingRequest
GetPublicKeyRequest
GetRetiredResourceRequest
GetSingleTenantHsmInstanceProposalRequest
GetSingleTenantHsmInstanceRequest
ImportCryptoKeyVersionRequest
ImportJob
ImportJobState
ImportMethod
WrappingPublicKey
KeyAccessJustificationsEnrollmentConfig
KeyAccessJustificationsPolicy
KeyAccessJustificationsPolicyConfig
KeyHandle
KeyOperationAttestation
AttestationFormat
CertificateChains
KeyRing
ListCryptoKeyVersionsRequest
ListCryptoKeyVersionsResponse
ListCryptoKeysRequest
ListCryptoKeysResponse
ListEkmConnectionsRequest
ListEkmConnectionsResponse
ListImportJobsRequest
ListImportJobsResponse
ListKeyHandlesRequest
ListKeyHandlesResponse
ListKeyRingsRequest
ListKeyRingsResponse
ListRetiredResourcesRequest
ListRetiredResourcesResponse
ListSingleTenantHsmInstanceProposalsRequest
ListSingleTenantHsmInstanceProposalsResponse
ListSingleTenantHsmInstancesRequest
ListSingleTenantHsmInstancesResponse
LocationMetadata
MacSignRequest
MacSignResponse
MacVerifyRequest
MacVerifyResponse
ProtectionLevel
PublicKey
PublicKeyFormat
RawDecryptRequest
RawDecryptResponse
RawEncryptRequest
RawEncryptResponse
RestoreCryptoKeyVersionRequest
RetiredResource
ShowEffectiveAutokeyConfigRequest
ShowEffectiveAutokeyConfigResponse
ShowEffectiveKeyAccessJustificationsEnrollmentConfigRequest
ShowEffectiveKeyAccessJustificationsEnrollmentConfigResponse
ShowEffectiveKeyAccessJustificationsPolicyConfigRequest
ShowEffectiveKeyAccessJustificationsPolicyConfigResponse
SingleTenantHsmInstance
QuorumAuth
State
SingleTenantHsmInstanceProposal
AddQuorumMember
DeleteSingleTenantHsmInstance
DisableSingleTenantHsmInstance
EnableSingleTenantHsmInstance
QuorumParameters
RefreshSingleTenantHsmInstance
RegisterTwoFactorAuthKeys
RemoveQuorumMember
RequiredActionQuorumParameters
State
UpdateAutokeyConfigRequest
UpdateCryptoKeyPrimaryVersionRequest
UpdateCryptoKeyRequest
UpdateCryptoKeyVersionRequest
UpdateEkmConfigRequest
UpdateEkmConnectionRequest
UpdateKeyAccessJustificationsPolicyConfigRequest
VerifyConnectivityRequest
VerifyConnectivityResponse
Home
Documentation
Security
Cloud KMS
Reference
Was this helpful?
Send feedback
Package google. cloud. kms. v1
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Index
Autokey
AutokeyAdmin
EkmService
HsmManagement
KeyAccessJustificationsConfig
KeyManagementService
AccessReason
ApproveSingleTenantHsmInstanceProposalRequest
QuorumReply
RequiredActionQuorumReply
ApproveSingleTenantHsmInstanceProposalResponse
AsymmetricDecryptRequest
AsymmetricDecryptResponse
AsymmetricSignRequest
AsymmetricSignResponse
AutokeyConfig
KeyProjectResolutionMode
State
Certificate
Challenge
ChallengeReply
ChecksummedData
CreateCryptoKeyRequest
CreateCryptoKeyVersionRequest
CreateEkmConnectionRequest
CreateImportJobRequest
CreateKeyHandleMetadata
CreateKeyHandleRequest
CreateKeyRingRequest
CreateSingleTenantHsmInstanceMetadata
CreateSingleTenantHsmInstanceProposalMetadata
CreateSingleTenantHsmInstanceProposalRequest
CreateSingleTenantHsmInstanceRequest
CryptoKey
CryptoKeyPurpose
CryptoKeyVersion
CryptoKeyVersionAlgorithm
CryptoKeyVersionState
CryptoKeyVersionView
CryptoKeyVersionTemplate
DecapsulateRequest
DecapsulateResponse
DecryptRequest
DecryptResponse
DeleteCryptoKeyMetadata
DeleteCryptoKeyRequest
DeleteCryptoKeyVersionMetadata
DeleteCryptoKeyVersionRequest
DeleteSingleTenantHsmInstanceProposalRequest
DestroyCryptoKeyVersionRequest
Digest
EkmConfig
EkmConnection
KeyManagementMode
ServiceResolver
EncryptRequest
EncryptResponse
ExecuteSingleTenantHsmInstanceProposalMetadata
ExecuteSingleTenantHsmInstanceProposalRequest
ExecuteSingleTenantHsmInstanceProposalResponse
ExternalProtectionLevelOptions
GenerateRandomBytesRequest
GenerateRandomBytesResponse
GetAutokeyConfigRequest
GetCryptoKeyRequest
GetCryptoKeyVersionRequest
GetEkmConfigRequest
GetEkmConnectionRequest
GetImportJobRequest
GetKeyAccessJustificationsPolicyConfigRequest
GetKeyHandleRequest
GetKeyRingRequest
GetPublicKeyRequest
GetRetiredResourceRequest
GetSingleTenantHsmInstanceProposalRequest
GetSingleTenantHsmInstanceRequest
ImportCryptoKeyVersionRequest
ImportJob
ImportJobState
ImportMethod
WrappingPublicKey
KeyAccessJustificationsEnrollmentConfig
KeyAccessJustificationsPolicy
KeyAccessJustificationsPolicyConfig
KeyHandle
KeyOperationAttestation
AttestationFormat
CertificateChains
KeyRing
ListCryptoKeyVersionsRequest
ListCryptoKeyVersionsResponse
ListCryptoKeysRequest
ListCryptoKeysResponse
ListEkmConnectionsRequest
ListEkmConnectionsResponse
ListImportJobsRequest
ListImportJobsResponse
ListKeyHandlesRequest
ListKeyHandlesResponse
ListKeyRingsRequest
ListKeyRingsResponse
ListRetiredResourcesRequest
ListRetiredResourcesResponse
ListSingleTenantHsmInstanceProposalsRequest
ListSingleTenantHsmInstanceProposalsResponse
ListSingleTenantHsmInstancesRequest
ListSingleTenantHsmInstancesResponse
LocationMetadata
MacSignRequest
MacSignResponse
MacVerifyRequest
MacVerifyResponse
ProtectionLevel
PublicKey
PublicKeyFormat
RawDecryptRequest
RawDecryptResponse
RawEncryptRequest
RawEncryptResponse
RestoreCryptoKeyVersionRequest
RetiredResource
ShowEffectiveAutokeyConfigRequest
ShowEffectiveAutokeyConfigResponse
ShowEffectiveKeyAccessJustificationsEnrollmentConfigRequest
ShowEffectiveKeyAccessJustificationsEnrollmentConfigResponse
ShowEffectiveKeyAccessJustificationsPolicyConfigRequest
ShowEffectiveKeyAccessJustificationsPolicyConfigResponse
SingleTenantHsmInstance
QuorumAuth
State
SingleTenantHsmInstanceProposal
AddQuorumMember
DeleteSingleTenantHsmInstance
DisableSingleTenantHsmInstance
EnableSingleTenantHsmInstance
QuorumParameters
RefreshSingleTenantHsmInstance
RegisterTwoFactorAuthKeys
RemoveQuorumMember
RequiredActionQuorumParameters
State
UpdateAutokeyConfigRequest
UpdateCryptoKeyPrimaryVersionRequest
UpdateCryptoKeyRequest
UpdateCryptoKeyVersionRequest
UpdateEkmConfigRequest
UpdateEkmConnectionRequest
UpdateKeyAccessJustificationsPolicyConfigRequest
VerifyConnectivityRequest
VerifyConnectivityResponse
Index
Autokey (interface)
AutokeyAdmin (interface)
EkmService (interface)
HsmManagement (interface)
KeyAccessJustificationsConfig (interface)
KeyManagementService (interface)
AccessReason (enum)
ApproveSingleTenantHsmInstanceProposalRequest (message)
ApproveSingleTenantHsmInstanceProposalRequest.QuorumReply (message)
ApproveSingleTenantHsmInstanceProposalRequest.RequiredActionQuorumReply (message)
ApproveSingleTenantHsmInstanceProposalResponse (message)
AsymmetricDecryptRequest (message)
AsymmetricDecryptResponse (message)
AsymmetricSignRequest (message)
AsymmetricSignResponse (message)
AutokeyConfig (message)
AutokeyConfig.KeyProjectResolutionMode (enum)
AutokeyConfig.State (enum)
Certificate (message)
Challenge (message)
ChallengeReply (message)
ChecksummedData (message)
CreateCryptoKeyRequest (message)
CreateCryptoKeyVersionRequest (message)
CreateEkmConnectionRequest (message)
CreateImportJobRequest (message)
CreateKeyHandleMetadata (message)
CreateKeyHandleRequest (message)
CreateKeyRingRequest (message)
CreateSingleTenantHsmInstanceMetadata (message)
CreateSingleTenantHsmInstanceProposalMetadata (message)
CreateSingleTenantHsmInstanceProposalRequest (message)
CreateSingleTenantHsmInstanceRequest (message)
CryptoKey (message)
CryptoKey.CryptoKeyPurpose (enum)
CryptoKeyVersion (message)
CryptoKeyVersion.CryptoKeyVersionAlgorithm (enum)
CryptoKeyVersion.CryptoKeyVersionState (enum)
CryptoKeyVersion.CryptoKeyVersionView (enum)
CryptoKeyVersionTemplate (message)
DecapsulateRequest (message)
DecapsulateResponse (message)
DecryptRequest (message)
DecryptResponse (message)
DeleteCryptoKeyMetadata (message)
DeleteCryptoKeyRequest (message)
DeleteCryptoKeyVersionMetadata (message)
DeleteCryptoKeyVersionRequest (message)
DeleteSingleTenantHsmInstanceProposalRequest (message)
DestroyCryptoKeyVersionRequest (message)
Digest (message)
EkmConfig (message)
EkmConnection (message)
EkmConnection.KeyManagementMode (enum)
EkmConnection.ServiceResolver (message)
EncryptRequest (message)
EncryptResponse (message)
ExecuteSingleTenantHsmInstanceProposalMetadata (message)
ExecuteSingleTenantHsmInstanceProposalRequest (message)
ExecuteSingleTenantHsmInstanceProposalResponse (message)
ExternalProtectionLevelOptions (message)
GenerateRandomBytesRequest (message)
GenerateRandomBytesResponse (message)
GetAutokeyConfigRequest (message)
GetCryptoKeyRequest (message)
GetCryptoKeyVersionRequest (message)
GetEkmConfigRequest (message)
GetEkmConnectionRequest (message)
GetImportJobRequest (message)
GetKeyAccessJustificationsPolicyConfigRequest (message)
GetKeyHandleRequest (message)
GetKeyRingRequest (message)
GetPublicKeyRequest (message)
GetRetiredResourceRequest (message)
GetSingleTenantHsmInstanceProposalRequest (message)
GetSingleTenantHsmInstanceRequest (message)
ImportCryptoKeyVersionRequest (message)
ImportJob (message)
ImportJob.ImportJobState (enum)
ImportJob.ImportMethod (enum)
ImportJob.WrappingPublicKey (message)
KeyAccessJustificationsEnrollmentConfig (message)
KeyAccessJustificationsPolicy (message)
KeyAccessJustificationsPolicyConfig (message)
KeyHandle (message)
KeyOperationAttestation (message)
KeyOperationAttestation.AttestationFormat (enum)
KeyOperationAttestation.CertificateChains (message)
KeyRing (message)
ListCryptoKeyVersionsRequest (message)
ListCryptoKeyVersionsResponse (message)
ListCryptoKeysRequest (message)
ListCryptoKeysResponse (message)
ListEkmConnectionsRequest (message)
ListEkmConnectionsResponse (message)
ListImportJobsRequest (message)
ListImportJobsResponse (message)
ListKeyHandlesRequest (message)
ListKeyHandlesResponse (message)
ListKeyRingsRequest (message)
ListKeyRingsResponse (message)
ListRetiredResourcesRequest (message)
ListRetiredResourcesResponse (message)
ListSingleTenantHsmInstanceProposalsRequest (message)
ListSingleTenantHsmInstanceProposalsResponse (message)
ListSingleTenantHsmInstancesRequest (message)
ListSingleTenantHsmInstancesResponse (message)
LocationMetadata (message)
MacSignRequest (message)
MacSignResponse (message)
MacVerifyRequest (message)
MacVerifyResponse (message)
ProtectionLevel (enum)
PublicKey (message)
PublicKey.PublicKeyFormat (enum)
RawDecryptRequest (message)
RawDecryptResponse (message)
RawEncryptRequest (message)
RawEncryptResponse (message)
RestoreCryptoKeyVersionRequest (message)
RetiredResource (message)
ShowEffectiveAutokeyConfigRequest (message)
ShowEffectiveAutokeyConfigResponse (message)
ShowEffectiveKeyAccessJustificationsEnrollmentConfigRequest (message)
ShowEffectiveKeyAccessJustificationsEnrollmentConfigResponse (message)
ShowEffectiveKeyAccessJustificationsPolicyConfigRequest (message)
ShowEffectiveKeyAccessJustificationsPolicyConfigResponse (message)
SingleTenantHsmInstance (message)
SingleTenantHsmInstance.QuorumAuth (message)
SingleTenantHsmInstance.State (enum)
SingleTenantHsmInstanceProposal (message)
SingleTenantHsmInstanceProposal.AddQuorumMember (message)
SingleTenantHsmInstanceProposal.DeleteSingleTenantHsmInstance (message)
SingleTenantHsmInstanceProposal.DisableSingleTenantHsmInstance (message)
SingleTenantHsmInstanceProposal.EnableSingleTenantHsmInstance (message)
SingleTenantHsmInstanceProposal.QuorumParameters (message)
SingleTenantHsmInstanceProposal.RefreshSingleTenantHsmInstance (message)
SingleTenantHsmInstanceProposal.RegisterTwoFactorAuthKeys (message)
SingleTenantHsmInstanceProposal.RemoveQuorumMember (message)
SingleTenantHsmInstanceProposal.RequiredActionQuorumParameters (message)
SingleTenantHsmInstanceProposal.State (enum)
UpdateAutokeyConfigRequest (message)
UpdateCryptoKeyPrimaryVersionRequest (message)
UpdateCryptoKeyRequest (message)
UpdateCryptoKeyVersionRequest (message)
UpdateEkmConfigRequest (message)
UpdateEkmConnectionRequest (message)
UpdateKeyAccessJustificationsPolicyConfigRequest (message)
VerifyConnectivityRequest (message)
VerifyConnectivityResponse (message)
Autokey
Provides interfaces for using Cloud KMS Autokey to provision new CryptoKeys , ready for Customer Managed Encryption Key (CMEK) use, on-demand. To support certain client tooling, this feature is modeled around a KeyHandle resource: creating a KeyHandle in a resource project and given location triggers Cloud KMS Autokey to provision a CryptoKey in the configured key project and the same location.
Prior to use in a given resource project, UpdateAutokeyConfig should have been called on an ancestor folder, setting the key project where Cloud KMS Autokey should create new CryptoKeys . See documentation for additional prerequisites. To check what key project, if any, is currently configured on a resource project's ancestor folder, see ShowEffectiveAutokeyConfig .
CreateKeyHandle
rpc CreateKeyHandle( CreateKeyHandleRequest ) returns ( Operation )
Creates a new KeyHandle , triggering the provisioning of a new CryptoKey for CMEK use with the given resource type in the configured key project and the same location. GetOperation should be used to resolve the resulting long-running operation and get the resulting KeyHandle and CryptoKey .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
cloudkms.keyHandles.create
For more information, see the IAM documentation .
GetKeyHandle
rpc GetKeyHandle( GetKeyHandleRequest ) returns ( KeyHandle )
Returns the KeyHandle .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
cloudkms.keyHandles.get
For more information, see the IAM documentation .
ListKeyHandles
rpc ListKeyHandles( ListKeyHandlesRequest ) returns ( ListKeyHandlesResponse )
Lists KeyHandles .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
cloudkms.keyHandles.list
For more information, see the IAM documentation .
AutokeyAdmin
Provides interfaces for managing Cloud KMS Autokey folder-level or project-level configurations. A configuration is inherited by all descendent folders and projects. A configuration at a folder or project overrides any other configurations in its ancestry. Setting a configuration on a folder is a prerequisite for Cloud KMS Autokey, so that users working in a descendant project can request provisioned CryptoKeys , ready for Customer Managed Encryption Key (CMEK) use, on-demand when using the dedicated key project mode. This is not required when using the delegated key management mode for same-project keys.
GetAutokeyConfig
rpc GetAutokeyConfig( GetAutokeyConfigRequest ) returns ( AutokeyConfig )
Returns the AutokeyConfig for a folder or project.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
cloudkms.autokeyConfigs.get
For more information, see the IAM documentation .
ShowEffectiveAutokeyConfig
rpc ShowEffectiveAutokeyConfig( ShowEffectiveAutokeyConfigRequest ) returns ( ShowEffectiveAutokeyConfigResponse )
Returns the effective Cloud KMS Autokey configuration for a given project.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
cloudkms.projects.showEffectiveAutokeyConfig
For more information, see the IAM documentation .
UpdateAutokeyConfig
rpc UpdateAutokeyConfig( UpdateAutokeyConfigRequest ) returns ( AutokeyConfig )
Updates the AutokeyConfig for a folder or a project. The caller must have both cloudkms.autokeyConfigs.update permission on the parent folder and cloudkms.cryptoKeys.setIamPolicy permission on the provided key project. A KeyHandle creation in the folder's descendant projects will use this configuration to determine where to create the resulting CryptoKey .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
cloudkms.autokeyConfigs.update
For more information, see the IAM documentation .
EkmService
Google Cloud Key Management EKM Service
Manages external cryptographic keys and operations using those keys. Implements a REST model with the following objects: * EkmConnection
CreateEkmConnection
rpc CreateEkmConnection( CreateEkmConnectionRequest ) returns ( EkmConnection )
Creates a new EkmConnection in a given Project and Location.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
GetEkmConfig
rpc GetEkmConfig( GetEkmConfigRequest ) returns ( EkmConfig )
Returns the EkmConfig singleton resource for a given project and location.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
GetEkmConnection
rpc GetEkmConnection( GetEkmConnectionRequest ) returns ( EkmConnection )
Returns metadata for a given EkmConnection .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
ListEkmConnections
rpc ListEkmConnections( ListEkmConnectionsRequest ) returns ( ListEkmConnectionsResponse )
Lists EkmConnections .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
UpdateEkmConfig
rpc UpdateEkmConfig( UpdateEkmConfigRequest ) returns ( EkmConfig )
Updates the EkmConfig singleton resource for a given project and location.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
UpdateEkmConnection
rpc UpdateEkmConnection( UpdateEkmConnectionRequest ) returns ( EkmConnection )
Updates an EkmConnection 's metadata.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
VerifyConnectivity
rpc VerifyConnectivity( VerifyConnectivityRequest ) returns ( VerifyConnectivityResponse )
Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection . If there is an error connecting to the EKM, this method returns a FAILED_PRECONDITION status containing structured information as described at https://cloud.google.com/kms/docs/reference/ekm_errors .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
HsmManagement
Google Cloud HSM Management Service
Provides interfaces for managing HSM instances.
Implements a REST model with the following objects: * SingleTenantHsmInstance * SingleTenantHsmInstanceProposal
ApproveSingleTenantHsmInstanceProposal
rpc ApproveSingleTenantHsmInstanceProposal( ApproveSingleTenantHsmInstanceProposalRequest ) returns ( ApproveSingleTenantHsmInstanceProposalResponse )
Approves a SingleTenantHsmInstanceProposal for a given SingleTenantHsmInstance . The proposal must be in the PENDING state.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
cloudkms.singleTenantHsmInstanceProposals.approve
For more information, see the IAM documentation .
CreateSingleTenantHsmInstance
rpc CreateSingleTenantHsmInstance( CreateSingleTenantHsmInstanceRequest ) returns ( Operation )
Creates a new SingleTenantHsmInstance in a given Project and Location. User must create a RegisterTwoFactorAuthKeys proposal with this single-tenant HSM instance to finish setup of the instance.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
cloudkms.singleTenantHsmInstances.create
For more information, see the IAM documentation .
CreateSingleTenantHsmInstanceProposal
rpc CreateSingleTenantHsmInstanceProposal( CreateSingleTenantHsmInstanceProposalRequest ) returns ( Operation )
Creates a new SingleTenantHsmInstanceProposal for a given SingleTenantHsmInstance .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
cloudkms.singleTenantHsmInstanceProposals.create
For more information, see the IAM documentation .
DeleteSingleTenantHsmInstanceProposal
rpc DeleteSingleTenantHsmInstanceProposal( DeleteSingleTenantHsmInstanceProposalRequest ) returns ( Empty )
Deletes a SingleTenantHsmInstanceProposal .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
cloudkms.singleTenantHsmInstanceProposals.delete
For more information, see the IAM documentation .
ExecuteSingleTenantHsmInstanceProposal
rpc ExecuteSingleTenantHsmInstanceProposal( ExecuteSingleTenantHsmInstanceProposalRequest ) returns ( Operation )
Executes a SingleTenantHsmInstanceProposal for a given SingleTenantHsmInstance . The proposal must be in the APPROVED state.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
cloudkms.singleTenantHsmInstanceProposals.execute
For more information, see the IAM documentation .
GetSingleTenantHsmInstance
rpc GetSingleTenantHsmInstance( GetSingleTenantHsmInstanceRequest ) returns ( SingleTenantHsmInstance )
Returns metadata for a given SingleTenantHsmInstance .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
cloudkms.singleTenantHsmInstances.get
For more information, see the IAM documentation .
GetSingleTenantHsmInstanceProposal
rpc GetSingleTenantHsmInstanceProposal( GetSingleTenantHsmInstanceProposalRequest ) returns ( SingleTenantHsmInstanceProposal )
Returns metadata for a given SingleTenantHsmInstanceProposal .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
cloudkms.singleTenantHsmInstanceProposals.get
For more information, see the IAM documentation .
ListSingleTenantHsmInstanceProposals
rpc ListSingleTenantHsmInstanceProposals( ListSingleTenantHsmInstanceProposalsRequest ) returns ( ListSingleTenantHsmInstanceProposalsResponse )
Lists SingleTenantHsmInstanceProposals .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
cloudkms.singleTenantHsmInstanceProposals.list
For more information, see the IAM documentation .
ListSingleTenantHsmInstances
rpc ListSingleTenantHsmInstances( ListSingleTenantHsmInstancesRequest ) returns ( ListSingleTenantHsmInstancesResponse )
Lists SingleTenantHsmInstances .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
cloudkms.singleTenantHsmInstances.list
For more information, see the IAM documentation .
KeyAccessJustificationsConfig
Service for managing Key Access Justifications policy settings for Cloud Key Management Service keys.
GetKeyAccessJustificationsPolicyConfig
rpc GetKeyAccessJustificationsPolicyConfig( GetKeyAccessJustificationsPolicyConfigRequest ) returns ( KeyAccessJustificationsPolicyConfig )
Gets the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
ShowEffectiveKeyAccessJustificationsEnrollmentConfig
rpc ShowEffectiveKeyAccessJustificationsEnrollmentConfig( ShowEffectiveKeyAccessJustificationsEnrollmentConfigRequest ) returns ( ShowEffectiveKeyAccessJustificationsEnrollmentConfigResponse )
Returns the KeyAccessJustificationsEnrollmentConfig of the resource closest to the given project in hierarchy.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
ShowEffectiveKeyAccessJustificationsPolicyConfig
rpc ShowEffectiveKeyAccessJustificationsPolicyConfig( ShowEffectiveKeyAccessJustificationsPolicyConfigRequest ) returns ( ShowEffectiveKeyAccessJustificationsPolicyConfigResponse )
Returns the KeyAccessJustificationsPolicyConfig of the resource closest to the given project in hierarchy.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
UpdateKeyAccessJustificationsPolicyConfig
rpc UpdateKeyAccessJustificationsPolicyConfig( UpdateKeyAccessJustificationsPolicyConfigRequest ) returns ( KeyAccessJustificationsPolicyConfig )
Updates the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
KeyManagementService
Google Cloud Key Management Service
Manages cryptographic keys and operations using those keys. Implements a REST model with the following objects:
KeyRing
CryptoKey
CryptoKeyVersion
ImportJob
If you are using manual gRPC libraries, see Using gRPC with Cloud KMS .
AsymmetricDecrypt
rpc AsymmetricDecrypt( AsymmetricDecryptRequest ) returns ( AsymmetricDecryptResponse )
Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
AsymmetricSign
rpc AsymmetricSign( AsymmetricSignRequest ) returns ( AsymmetricSignResponse )
Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
CreateCryptoKey
rpc CreateCryptoKey( CreateCryptoKeyRequest ) returns ( CryptoKey )
Create a new CryptoKey within a KeyRing .
CryptoKey.purpose and CryptoKey.version_template.algorithm are required.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
CreateCryptoKeyVersion
rpc CreateCryptoKeyVersion( CreateCryptoKeyVersionRequest ) returns ( CryptoKeyVersion )
Create a new CryptoKeyVersion in a CryptoKey .
The server will assign the next sequential id. If unset, state will be set to ENABLED .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
CreateImportJob
rpc CreateImportJob( CreateImportJobRequest ) returns ( ImportJob )
Create a new ImportJob within a KeyRing .
ImportJob.import_method is required.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
CreateKeyRing
rpc CreateKeyRing( CreateKeyRingRequest ) returns ( KeyRing )
Create a new KeyRing in a given Project and Location.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Decapsulate
rpc Decapsulate( DecapsulateRequest ) returns ( DecapsulateResponse )
Decapsulates data that was encapsulated with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose KEY_ENCAPSULATION.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Decrypt
rpc Decrypt( DecryptRequest ) returns ( DecryptResponse )
Decrypts data that was protected by Encrypt . The CryptoKey.purpose must be ENCRYPT_DECRYPT .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
DeleteCryptoKey
rpc DeleteCryptoKey( DeleteCryptoKeyRequest ) returns ( Operation )
Permanently deletes the given CryptoKey . All child CryptoKeyVersions must have been previously deleted using KeyManagementService.DeleteCryptoKeyVersion . The specified crypto key will be immediately and permanently deleted upon calling this method. This action cannot be undone.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
DeleteCryptoKeyVersion
rpc DeleteCryptoKeyVersion( DeleteCryptoKeyVersionRequest ) returns ( Operation )
Permanently deletes the given CryptoKeyVersion . Only possible if the version has not been previously imported and if its state is one of DESTROYED , IMPORT_FAILED , or GENERATION_FAILED . Successfully imported CryptoKeyVersions cannot be deleted at this time. The specified version will be immediately and permanently deleted upon calling this method. This action cannot be undone.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
DestroyCryptoKeyVersion
rpc DestroyCryptoKeyVersion( DestroyCryptoKeyVersionRequest ) returns ( CryptoKeyVersion )
Schedule a CryptoKeyVersion for destruction.
Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED , and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED , and the key material will be irrevocably destroyed.
Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Encrypt
rpc Encrypt( EncryptRequest ) returns ( EncryptResponse )
Encrypts data, so that it can only be recovered by a call to Decrypt . The CryptoKey.purpose must be ENCRYPT_DECRYPT .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
GenerateRandomBytes
rpc GenerateRandomBytes( GenerateRandomBytesRequest ) returns ( GenerateRandomBytesResponse )
Generate random bytes using the Cloud KMS randomness source in the provided location.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
GetCryptoKey
rpc GetCryptoKey( GetCryptoKeyRequest ) returns ( CryptoKey )
Returns metadata for a given CryptoKey , as well as its primary CryptoKeyVersion .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
GetCryptoKeyVersion
rpc GetCryptoKeyVersion( GetCryptoKeyVersionRequest ) returns ( CryptoKeyVersion )
Returns metadata for a given CryptoKeyVersion .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
GetImportJob
rpc GetImportJob( GetImportJobRequest ) returns ( ImportJob )
Returns metadata for a given ImportJob .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
GetKeyRing
rpc GetKeyRing( GetKeyRingRequest ) returns ( KeyRing )
Returns metadata for a given KeyRing .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
GetPublicKey
rpc GetPublicKey( GetPublicKeyRequest ) returns ( PublicKey )
Returns the public key for the given CryptoKeyVersion . The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
GetRetiredResource
rpc GetRetiredResource( GetRetiredResourceRequest ) returns ( RetiredResource )
Retrieves a specific RetiredResource resource, which represents the record of a deleted CryptoKey .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
ImportCryptoKeyVersion
rpc ImportCryptoKeyVersion( ImportCryptoKeyVersionRequest ) returns ( CryptoKeyVersion )
Import wrapped key material into a CryptoKeyVersion .
All requests must specify a CryptoKey . If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
ListCryptoKeyVersions
rpc ListCryptoKeyVersions( ListCryptoKeyVersionsRequest ) returns ( ListCryptoKeyVersionsResponse )
Lists CryptoKeyVersions .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
ListCryptoKeys
rpc ListCryptoKeys( ListCryptoKeysRequest ) returns ( ListCryptoKeysResponse )
Lists CryptoKeys .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
ListImportJobs
rpc ListImportJobs( ListImportJobsRequest ) returns ( ListImportJobsResponse )
Lists ImportJobs .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
ListKeyRings
rpc ListKeyRings( ListKeyRingsRequest ) returns ( ListKeyRingsResponse )
Lists KeyRings .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
ListRetiredResources
rpc ListRetiredResources( ListRetiredResourcesRequest ) returns ( ListRetiredResourcesResponse )
Lists the RetiredResources which are the records of deleted CryptoKeys . RetiredResources prevent the reuse of these resource names after deletion.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
MacSign
rpc MacSign( MacSignRequest ) returns ( MacSignResponse )
Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
MacVerify
rpc MacVerify( MacVerifyRequest ) returns ( MacVerifyResponse )
Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
RawDecrypt
rpc RawDecrypt( RawDecryptRequest ) returns ( RawDecryptResponse )
Decrypts data that was originally encrypted using a raw cryptographic mechanism. The CryptoKey.purpose must be RAW_ENCRYPT_DECRYPT .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
RawEncrypt
rpc RawEncrypt( RawEncryptRequest ) returns ( RawEncryptResponse )
Encrypts data using portable cryptographic primitives. Most users should choose Encrypt and Decrypt rather than their raw counterparts. The CryptoKey.purpose must be RAW_ENCRYPT_DECRYPT .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
RestoreCryptoKeyVersion
rpc RestoreCryptoKeyVersion( RestoreCryptoKeyVersionRequest ) returns ( CryptoKeyVersion )
Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state.
Upon restoration of the CryptoKeyVersion, state will be set to DISABLED , and destroy_time will be cleared.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
UpdateCryptoKey
rpc UpdateCryptoKey( UpdateCryptoKeyRequest ) returns ( CryptoKey )
Update a CryptoKey .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
UpdateCryptoKeyPrimaryVersion
rpc UpdateCryptoKeyPrimaryVersion( UpdateCryptoKeyPrimaryVersionRequest ) returns ( CryptoKey )
Update the version of a CryptoKey that will be used in Encrypt .
Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
UpdateCryptoKeyVersion
rpc UpdateCryptoKeyVersion( UpdateCryptoKeyVersionRequest ) returns ( CryptoKeyVersion )
Update a CryptoKeyVersion 's metadata.
state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
AccessReason
Describes the reason for a data access. Please refer to https://cloud.google.com/assured-workloads/key-access-justifications/docs/justification-codes for the detailed semantic meaning of justification reason codes.
Enums
REASON_UNSPECIFIED
Unspecified access reason.
CUSTOMER_INITIATED_SUPPORT
Customer-initiated support.
GOOGLE_INITIATED_SERVICE
Google-initiated access for system management and troubleshooting.
THIRD_PARTY_DATA_REQUEST
Google-initiated access in response to a legal request or legal process.
GOOGLE_INITIATED_REVIEW
Google-initiated access for security, fraud, abuse, or compliance purposes.
CUSTOMER_INITIATED_ACCESS
Customer uses their account to perform any access to their own data which their IAM policy authorizes.
GOOGLE_INITIATED_SYSTEM_OPERATION
Google systems access customer data to help optimize the structure of the data or quality for future uses by the customer.
REASON_NOT_EXPECTED
No reason is expected for this key request.
MODIFIED_CUSTOMER_INITIATED_ACCESS
Deprecated: This code is no longer generated by Google Cloud. The GOOGLE_RESPONSE_TO_PRODUCTION_ALERT justification codes available in both Key Access Justifications and Access Transparency logs provide customer-visible signals of emergency access in more precise contexts.
Customer uses their account to perform any access to their own data which their IAM policy authorizes, and one of the following is true:
A Google administrator has reset the root-access account associated with the user's organization within the past 7 days.
A Google-initiated emergency access operation has interacted with a resource in the same project or folder as the currently accessed resource within the past 7 days.
This item is deprecated!
MODIFIED_GOOGLE_INITIATED_SYSTEM_OPERATION
Deprecated: This code is no longer generated by Google Cloud. The GOOGLE_RESPONSE_TO_PRODUCTION_ALERT justification codes available in both Key Access Justifications and Access Transparency logs provide customer-visible signals of emergency access in more precise contexts.
Google systems access customer data to help optimize the structure of the data or quality for future uses by the customer, and one of the following is true:
A Google administrator has reset the root-access account associated with the user's organization within the past 7 days.
A Google-initiated emergency access operation has interacted with a resource in the same project or folder as the currently accessed resource within the past 7 days.
This item is deprecated!
GOOGLE_RESPONSE_TO_PRODUCTION_ALERT
Google-initiated access to maintain system reliability.
CUSTOMER_AUTHORIZED_WORKFLOW_SERVICING
One of the following operations is being executed while simultaneously encountering an internal technical issue which prevented a more precise justification code from being generated:
Your account has been used to perform any access to your own data which your IAM policy authorizes.
An automated Google system operates on encrypted customer data which your IAM policy authorizes.
Customer-initiated Google support access.
Google-initiated support access to protect system reliability.
ApproveSingleTenantHsmInstanceProposalRequest
Request message for HsmManagement.ApproveSingleTenantHsmInstanceProposal .
Fields
name
string
Required. The name of the SingleTenantHsmInstanceProposal to approve.
Union field approval_payload . The approval payload. The type of approval payload must correspond to the type of approval_parameters in the proposal. approval_payload can be only one of the following:
quorum_reply
QuorumReply
Required. The reply to QuorumParameters for approving the proposal.
required_action_quorum_reply
RequiredActionQuorumReply
Required. The reply to RequiredActionQuorumParameters for approving the proposal.
QuorumReply
The reply to QuorumParameters for approving the proposal.
Fields
challenge_replies[]
ChallengeReply
Required. The challenge replies to approve the proposal. Challenge replies can be sent across multiple requests. The proposal will be approved when required_approver_count challenge replies are provided.
RequiredActionQuorumReply
The reply to RequiredActionQuorumParameters for approving the proposal.
Fields
required_challenge_replies[]
ChallengeReply
Required. All required challenges must be signed for the proposal to be approved. These can be sent across multiple requests.
quorum_challenge_replies[]
ChallengeReply
Required. Quorum members' signed challenge replies. These can be provided across multiple requests. The proposal will be approved when required_approver_count quorum_challenge_replies are provided and when all required_challenge_replies are provided.
ApproveSingleTenantHsmInstanceProposalResponse
This type has no fields.
Response message for HsmManagement.ApproveSingleTenantHsmInstanceProposal .
AsymmetricDecryptRequest
Request message for KeyManagementService.AsymmetricDecrypt .
Fields
name
string
Required. The resource name of the CryptoKeyVersion to use for decryption.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeyVersions.useToDecrypt
ciphertext
bytes
Required. The data encrypted with the named CryptoKeyVersion 's public key using OAEP.
ciphertext_crc32c
Int64Value
Optional. An optional CRC32C checksum of the AsymmetricDecryptRequest.ciphertext . If specified, KeyManagementService will verify the integrity of the received AsymmetricDecryptRequest.ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C( AsymmetricDecryptRequest.ciphertext ) is equal to AsymmetricDecryptRequest.ciphertext_crc32c , and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
AsymmetricDecryptResponse
Response message for KeyManagementService.AsymmetricDecrypt .
Fields
plaintext
bytes
The decrypted data originally encrypted with the matching public key.
plaintext_crc32c
Int64Value
Integrity verification field. A CRC32C checksum of the returned AsymmetricDecryptResponse.plaintext . An integrity check of AsymmetricDecryptResponse.plaintext can be performed by computing the CRC32C checksum of AsymmetricDecryptResponse.plaintext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
verified_ciphertext_crc32c
bool
Integrity verification field. A flag indicating whether AsymmetricDecryptRequest.ciphertext_crc32c was received by KeyManagementService and used for the integrity verification of the ciphertext . A false value of this field indicates either that AsymmetricDecryptRequest.ciphertext_crc32c was left unset or that it was not delivered to KeyManagementService . If you've set AsymmetricDecryptRequest.ciphertext_crc32c but this field is still false, discard the response and perform a limited number of retries.
protection_level
ProtectionLevel
The ProtectionLevel of the CryptoKeyVersion used in decryption.
AsymmetricSignRequest
Request message for KeyManagementService.AsymmetricSign .
Fields
name
string
Required. The resource name of the CryptoKeyVersion to use for signing.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeyVersions.useToSign
digest
Digest
Optional. The digest of the data to sign. The digest must be produced with the same digest algorithm as specified by the key version's algorithm .
This field may not be supplied if AsymmetricSignRequest.data is supplied.
digest_crc32c
Int64Value
Optional. An optional CRC32C checksum of the AsymmetricSignRequest.digest . If specified, KeyManagementService will verify the integrity of the received AsymmetricSignRequest.digest using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C( AsymmetricSignRequest.digest ) is equal to AsymmetricSignRequest.digest_crc32c , and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
data
bytes
Optional. The data to sign. It can't be supplied if AsymmetricSignRequest.digest is supplied.
data_crc32c
Int64Value
Optional. An optional CRC32C checksum of the AsymmetricSignRequest.data . If specified, KeyManagementService will verify the integrity of the received AsymmetricSignRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C( AsymmetricSignRequest.data ) is equal to AsymmetricSignRequest.data_crc32c , and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
AsymmetricSignResponse
Response message for KeyManagementService.AsymmetricSign .
Fields
signature
bytes
The created signature.
signature_crc32c
Int64Value
Integrity verification field. A CRC32C checksum of the returned AsymmetricSignResponse.signature . An integrity check of AsymmetricSignResponse.signature can be performed by computing the CRC32C checksum of AsymmetricSignResponse.signature and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
verified_digest_crc32c
bool
Integrity verification field. A flag indicating whether AsymmetricSignRequest.digest_crc32c was received by KeyManagementService and used for the integrity verification of the digest . A false value of this field indicates either that AsymmetricSignRequest.digest_crc32c was left unset or that it was not delivered to KeyManagementService . If you've set AsymmetricSignRequest.digest_crc32c but this field is still false, discard the response and perform a limited number of retries.
name
string
The resource name of the CryptoKeyVersion used for signing. Check this field to verify that the intended resource was used for signing.
verified_data_crc32c
bool
Integrity verification field. A flag indicating whether AsymmetricSignRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data . A false value of this field indicates either that AsymmetricSignRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService . If you've set AsymmetricSignRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries.
protection_level
ProtectionLevel
The ProtectionLevel of the CryptoKeyVersion used for signing.
AutokeyConfig
Cloud KMS Autokey configuration for a folder.
Fields
name
string
Identifier. Name of the AutokeyConfig resource, e.g. folders/{FOLDER_NUMBER}/autokeyConfig or projects/{PROJECT_NUMBER}/autokeyConfig .
key_project
string
Optional. Name of the key project, e.g. projects/{PROJECT_ID} or projects/{PROJECT_NUMBER} , where Cloud KMS Autokey will provision a new CryptoKey when a KeyHandle is created. On UpdateAutokeyConfig , the caller will require cloudkms.cryptoKeys.setIamPolicy permission on this key project. Once configured, for Cloud KMS Autokey to function properly, this key project must have the Cloud KMS API activated and the Cloud KMS Service Agent for this key project must be granted the cloudkms.admin role (or pertinent permissions). A request with an empty key project field will clear the configuration.
state
State
Output only. The state for the AutokeyConfig.
etag
string
Optional. A checksum computed by the server based on the value of other fields. This may be sent on update requests to ensure that the client has an up-to-date value before proceeding. The request will be rejected with an ABORTED error on a mismatched etag.
key_project_resolution_mode
KeyProjectResolutionMode
Optional. KeyProjectResolutionMode for the AutokeyConfig. Valid values are DEDICATED_KEY_PROJECT , RESOURCE_PROJECT , or DISABLED .
KeyProjectResolutionMode
Defines the resolution mode enum for the key project. The KeyProjectResolutionMode determines the mechanism by which AutokeyConfig identifies a key_project at its specific configuration node. This parameter also determines if Autokey can be used within this project or folder.
Enums
KEY_PROJECT_RESOLUTION_MODE_UNSPECIFIED
Default value. KeyProjectResolutionMode when not specified will act as DEDICATED_KEY_PROJECT .
DEDICATED_KEY_PROJECT
Keys are created in a dedicated project specified by key_project .
RESOURCE_PROJECT
Keys are created in the same project as the resource requesting the key. The key_project must not be set when this mode is used.
DISABLED
Disables the AutokeyConfig. When this mode is set, any AutokeyConfig from higher levels in the resource hierarchy are ignored for this resource and its descendants. This setting can be overridden by a more specific configuration at a lower level. For example, if Autokey is disabled on a folder, it can be re-enabled on a sub-folder or project within that folder by setting a different mode (e.g., DEDICATED_KEY_PROJECT or RESOURCE_PROJECT).
State
The states AutokeyConfig can be in.
Enums
STATE_UNSPECIFIED
The state of the AutokeyConfig is unspecified.
ACTIVE
The AutokeyConfig is currently active.
KEY_PROJECT_DELETED
A previously configured key project has been deleted and the current AutokeyConfig is unusable.
UNINITIALIZED
The AutokeyConfig is not yet initialized or has been reset to its default uninitialized state.
Certificate
A Certificate represents an X.509 certificate used to authenticate HTTPS connections to EKM replicas.
Fields
raw_der
bytes
Required. The raw certificate bytes in DER format.
parsed
bool
Output only. True if the certificate was parsed successfully.
issuer
string
Output only. The issuer distinguished name in RFC 2253 format. Only present if parsed is true.
subject
string
Output only. The subject distinguished name in RFC 2253 format. Only present if parsed is true.
subject_alternative_dns_names[]
string
Output only. The subject Alternative DNS names. Only present if parsed is true.
not_before_time
Timestamp
Output only. The certificate is not valid before this time. Only present if parsed is true.
not_after_time
Timestamp
Output only. The certificate is not valid after this time. Only present if parsed is true.
serial_number
string
Output only. The certificate serial number as a hex string. Only present if parsed is true.
sha256_fingerprint
string
Output only. The SHA-256 certificate fingerprint as a hex string. Only present if parsed is true.
Challenge
A challenge to be signed by a 2FA key.
Fields
challenge
bytes
Output only. The challenge to be signed by the 2FA key indicated by the public key.
public_key_pem
string
Output only. The public key associated with the 2FA key that should sign the challenge.
ChallengeReply
A reply to a challenge signed by a 2FA key.
Fields
signed_challenge
bytes
Required. The signed challenge associated with the 2FA key. The signature must be RSASSA-PKCS1 v1.5 with a SHA256 digest.
public_key_pem
string
Required. The public key associated with the 2FA key.
ChecksummedData
Data with integrity verification field.
Fields
data
bytes
Raw Data.
crc32c_checksum
Int64Value
Integrity verification field. A CRC32C checksum of the returned ChecksummedData.data . An integrity check of ChecksummedData.data can be performed by computing the CRC32C checksum of ChecksummedData.data and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1 , and can be safely downconverted to uint32 in languages that support this type.
CreateCryptoKeyRequest
Request message for KeyManagementService.CreateCryptoKey .
Fields
parent
string
Required. The name of the KeyRing associated with the CryptoKeys .
Authorization requires the following IAM permission on the specified resource parent :
cloudkms.cryptoKeys.create
crypto_key_id
string
Required. It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}
crypto_key
CryptoKey
Required. A CryptoKey with initial field values.
skip_initial_version_creation
bool
If set to true, the request will create a CryptoKey without any CryptoKeyVersions . You must manually call CreateCryptoKeyVersion or ImportCryptoKeyVersion before you can use this CryptoKey .
CreateCryptoKeyVersionRequest
Request message for KeyManagementService.CreateCryptoKeyVersion .
Fields
parent
string
Required. The name of the CryptoKey associated with the CryptoKeyVersions .
Authorization requires the following IAM permission on the specified resource parent :
cloudkms.cryptoKeyVersions.create
crypto_key_version
CryptoKeyVersion
Required. A CryptoKeyVersion with initial field values.
CreateEkmConnectionRequest
Request message for EkmService.CreateEkmConnection .
Fields
parent
string
Required. The resource name of the location associated with the EkmConnection , in the format projects/*/locations/* .
Authorization requires the following IAM permission on the specified resource parent :
cloudkms.ekmConnections.create
ekm_connection_id
string
Required. It must be unique within a location and match the regular expression [a-zA-Z0-9_-]{1,63} .
ekm_connection
EkmConnection
Required. An EkmConnection with initial field values.
CreateImportJobRequest
Request message for KeyManagementService.CreateImportJob .
Fields
parent
string
Required. The name of the KeyRing associated with the ImportJobs .
Authorization requires the following IAM permission on the specified resource parent :
cloudkms.importJobs.create
import_job_id
string
Required. It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}
import_job
ImportJob
Required. An ImportJob with initial field values.
CreateKeyHandleMetadata
This type has no fields.
Metadata message for CreateKeyHandle long-running operation response.
CreateKeyHandleRequest
Request message for Autokey.CreateKeyHandle .
Fields
parent
string
Required. Name of the resource project and location to create the KeyHandle in, e.g. projects/{PROJECT_ID}/locations/{LOCATION} .
key_handle_id
string
Optional. Id of the KeyHandle . Must be unique to the resource project and location. If not provided by the caller, a new UUID is used.
key_handle
KeyHandle
Required. KeyHandle to create.
CreateKeyRingRequest
Request message for KeyManagementService.CreateKeyRing .
Fields
parent
string
Required. The resource name of the location associated with the KeyRings , in the format projects/*/locations/* .
Authorization requires the following IAM permission on the specified resource parent :
cloudkms.keyRings.create
key_ring_id
string
Required. It must be unique within a location and match the regular expression [a-zA-Z0-9_-]{1,63}
key_ring
KeyRing
Required. A KeyRing with initial field values.
CreateSingleTenantHsmInstanceMetadata
This type has no fields.
Metadata message for CreateSingleTenantHsmInstance long-running operation response.
CreateSingleTenantHsmInstanceProposalMetadata
This type has no fields.
Metadata message for CreateSingleTenantHsmInstanceProposal long-running operation response.
CreateSingleTenantHsmInstanceProposalRequest
Request message for HsmManagement.CreateSingleTenantHsmInstanceProposal .
Fields
parent
string
Required. The name of the SingleTenantHsmInstance associated with the SingleTenantHsmInstanceProposals .
single_tenant_hsm_instance_proposal_id
string
Optional. It must be unique within a location and match the regular expression [a-zA-Z0-9_-]{1,63} .
single_tenant_hsm_instance_proposal
SingleTenantHsmInstanceProposal
Required. The SingleTenantHsmInstanceProposal to create.
CreateSingleTenantHsmInstanceRequest
Request message for HsmManagement.CreateSingleTenantHsmInstance .
Fields
parent
string
Required. The resource name of the location associated with the SingleTenantHsmInstance , in the format projects/*/locations/* .
single_tenant_hsm_instance_id
string
Optional. It must be unique within a location and match the regular expression [a-zA-Z0-9_-]{1,63} .
single_tenant_hsm_instance
SingleTenantHsmInstance
Required. An SingleTenantHsmInstance with initial field values.
CryptoKey
A CryptoKey represents a logical key that can be used for cryptographic operations.
A CryptoKey is made up of zero or more versions , which represent the actual key material used in cryptographic operations.
Fields
name
string
Output only. The resource name for this CryptoKey in the format projects/*/locations/*/keyRings/*/cryptoKeys/* .
primary
CryptoKeyVersion
Output only. A copy of the "primary" CryptoKeyVersion that will be used by Encrypt when this CryptoKey is given in EncryptRequest.name .
The CryptoKey 's primary version can be updated via UpdateCryptoKeyPrimaryVersion .
Keys with purpose ENCRYPT_DECRYPT may have a primary. For other keys, this field will be omitted.
purpose
CryptoKeyPurpose
Immutable. The immutable purpose of this CryptoKey .
create_time
Timestamp
Output only. The time at which this CryptoKey was created.
next_rotation_time
Timestamp
At next_rotation_time , the Key Management Service will automatically:
Create a new version of this CryptoKey .
Mark the new version as primary.
Key rotations performed manually via CreateCryptoKeyVersion and UpdateCryptoKeyPrimaryVersion do not affect next_rotation_time .
Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.
version_template
CryptoKeyVersionTemplate
A template describing settings for new CryptoKeyVersion instances. The properties of new CryptoKeyVersion instances created by either CreateCryptoKeyVersion or auto-rotation are controlled by this template.
labels
map<string, string>
Labels with user-defined metadata. For more information, see Labeling Keys .
import_only
bool
Immutable. Whether this key may contain imported versions only.
destroy_scheduled_duration
Duration
Immutable. The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED . If not specified at creation time, the default duration is 30 days.
crypto_key_backend
string
Immutable. The resource name of the backend environment where the key material for all CryptoKeyVersions associated with this CryptoKey reside and where all related cryptographic operations are performed. Only applicable if CryptoKeyVersions have a ProtectionLevel of EXTERNAL_VPC , with the resource name in the format projects/*/locations/*/ekmConnections/* . Only applicable if CryptoKeyVersions have a ProtectionLevel of HSM_SINGLE_TENANT , with the resource name in the format projects/*/locations/*/singleTenantHsmInstances/* . Note, this list is non-exhaustive and may apply to additional ProtectionLevels in the future.
key_access_justifications_policy
KeyAccessJustificationsPolicy
Optional. The policy used for Key Access Justifications Policy Enforcement. If this field is present and this key is enrolled in Key Access Justifications Policy Enforcement, the policy will be evaluated in encrypt, decrypt, and sign operations, and the operation will fail if rejected by the policy. The policy is defined by specifying zero or more allowed justification codes. https://cloud.google.com/assured-workloads/key-access-justifications/docs/justification-codes By default, this field is absent, and all justification codes are allowed.
Union field rotation_schedule . Controls the rate of automatic rotation. rotation_schedule can be only one of the following:
rotation_period
Duration
next_rotation_time will be advanced by this period when the service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.
If rotation_period is set, next_rotation_time must also be set.
Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.
CryptoKeyPurpose
CryptoKeyPurpose describes the cryptographic capabilities of a CryptoKey . A given key can only be used for the operations allowed by its purpose. For more information, see Key purposes .
Enums
CRYPTO_KEY_PURPOSE_UNSPECIFIED
Not specified.
ENCRYPT_DECRYPT
CryptoKeys with this purpose may be used with Encrypt and Decrypt .
ASYMMETRIC_SIGN
CryptoKeys with this purpose may be used with AsymmetricSign and GetPublicKey .
ASYMMETRIC_DECRYPT
CryptoKeys with this purpose may be used with AsymmetricDecrypt and GetPublicKey .
RAW_ENCRYPT_DECRYPT
CryptoKeys with this purpose may be used with RawEncrypt and RawDecrypt . This purpose is meant to be used for interoperable symmetric encryption and does not support automatic CryptoKey rotation.
MAC
CryptoKeys with this purpose may be used with MacSign .
KEY_ENCAPSULATION
CryptoKeys with this purpose may be used with GetPublicKey and Decapsulate .
CryptoKeyVersion
A CryptoKeyVersion represents an individual cryptographic key, and the associated key material.
An ENABLED version can be used for cryptographic operations.
For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.
Fields
name
string
Output only. The resource name for this CryptoKeyVersion in the format projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/* .
state
CryptoKeyVersionState
The current state of the CryptoKeyVersion .
protection_level
ProtectionLevel
Output only. The ProtectionLevel describing how crypto operations are performed with this CryptoKeyVersion .
algorithm
CryptoKeyVersionAlgorithm
Output only. The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports.
attestation
KeyOperationAttestation
Output only. Statement that was generated and signed by the HSM at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google. Only provided for key versions with protection_level HSM .
create_time
Timestamp
Output only. The time at which this CryptoKeyVersion was created.
generate_time
Timestamp
Output only. The time this CryptoKeyVersion 's key material was generated.
destroy_time
Timestamp
Output only. The time this CryptoKeyVersion 's key material is scheduled for destruction. Only present if state is DESTROY_SCHEDULED .
destroy_event_time
Timestamp
Output only. The time this CryptoKeyVersion's key material was destroyed. Only present if state is DESTROYED .
import_job
string
Output only. The name of the ImportJob used in the most recent import of this CryptoKeyVersion . Only present if the underlying key material was imported.
import_time
Timestamp
Output only. The time at which this CryptoKeyVersion 's key material was most recently imported.
import_failure_reason
string
Output only. The root cause of the most recent import failure. Only present if state is IMPORT_FAILED .
generation_failure_reason
string
Output only. The root cause of the most recent generation failure. Only present if state is GENERATION_FAILED .
external_destruction_failure_reason
string
Output only. The root cause of the most recent external destruction failure. Only present if state is EXTERNAL_DESTRUCTION_FAILED .
external_protection_level_options
ExternalProtectionLevelOptions
ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
reimport_eligible
bool
Output only. Whether or not this key version is eligible for reimport, by being specified as a target in ImportCryptoKeyVersionRequest.crypto_key_version .
CryptoKeyVersionAlgorithm
The algorithm of the CryptoKeyVersion , indicating what parameters must be used for each cryptographic operation.
The GOOGLE_SYMMETRIC_ENCRYPTION algorithm is usable with CryptoKey.purpose ENCRYPT_DECRYPT .
Algorithms beginning with RSA_SIGN_ are usable with CryptoKey.purpose ASYMMETRIC_SIGN .
The fields in the name after RSA_SIGN_ correspond to the following parameters: padding algorithm, modulus bit length, and digest algorithm.
For PSS, the salt length used is equal to the length of digest algorithm. For example, RSA_SIGN_PSS_2048_SHA256 will use PSS with a salt length of 256 bits or 32 bytes.
Algorithms beginning with RSA_DECRYPT_ are usable with CryptoKey.purpose ASYMMETRIC_DECRYPT .
The fields in the name after RSA_DECRYPT_ correspond to the following parameters: padding algorithm, modulus bit length, and digest algorithm.
Algorithms beginning with EC_SIGN_ are usable with CryptoKey.purpose ASYMMETRIC_SIGN .
The fields in the name after EC_SIGN_ correspond to the following parameters: elliptic curve, digest algorithm.
Algorithms beginning with HMAC_ are usable with CryptoKey.purpose MAC .
The suffix following HMAC_ corresponds to the hash algorithm being used (eg. SHA256).
Algorithms beginning with PQ_ are post-quantum.
For more information, see Key purposes and algorithms .
Enums
CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED
Not specified.
GOOGLE_SYMMETRIC_ENCRYPTION
Creates symmetric encryption keys.
AES_128_GCM
AES-GCM (Galois Counter Mode) using 128-bit keys.
AES_256_GCM
AES-GCM (Galois Counter Mode) using 256-bit keys.
AES_128_CBC
AES-CBC (Cipher Block Chaining Mode) using 128-bit keys.
AES_256_CBC
AES-CBC (Cipher Block Chaining Mode) using 256-bit keys.
AES_128_CTR
AES-CTR (Counter Mode) using 128-bit keys.
AES_256_CTR
AES-CTR (Counter Mode) using 256-bit keys.
RSA_SIGN_PSS_2048_SHA256
RSASSA-PSS 2048 bit key with a SHA256 digest.
RSA_SIGN_PSS_3072_SHA256
RSASSA-PSS 3072 bit key with a SHA256 digest.
RSA_SIGN_PSS_4096_SHA256
RSASSA-PSS 4096 bit key with a SHA256 digest.
RSA_SIGN_PSS_4096_SHA512
RSASSA-PSS 4096 bit key with a SHA512 digest.
RSA_SIGN_PKCS1_2048_SHA256
RSASSA-PKCS1-v1_5 with a 2048 bit key and a SHA256 digest.
RSA_SIGN_PKCS1_3072_SHA256
RSASSA-PKCS1-v1_5 with a 3072 bit key and a SHA256 digest.
RSA_SIGN_PKCS1_4096_SHA256
RSASSA-PKCS1-v1_5 with a 4096 bit key and a SHA256 digest.
RSA_SIGN_PKCS1_4096_SHA512
RSASSA-PKCS1-v1_5 with a 4096 bit key and a SHA512 digest.
RSA_SIGN_RAW_PKCS1_2048
RSASSA-PKCS1-v1_5 signing without encoding, with a 2048 bit key.
RSA_SIGN_RAW_PKCS1_3072
RSASSA-PKCS1-v1_5 signing without encoding, with a 3072 bit key.
RSA_SIGN_RAW_PKCS1_4096
RSASSA-PKCS1-v1_5 signing without encoding, with a 4096 bit key.
RSA_DECRYPT_OAEP_2048_SHA256
RSAES-OAEP 2048 bit key with a SHA256 digest.
RSA_DECRYPT_OAEP_3072_SHA256
RSAES-OAEP 3072 bit key with a SHA256 digest.
RSA_DECRYPT_OAEP_4096_SHA256
RSAES-OAEP 4096 bit key with a SHA256 digest.
RSA_DECRYPT_OAEP_4096_SHA512
RSAES-OAEP 4096 bit key with a SHA512 digest.
RSA_DECRYPT_OAEP_2048_SHA1
RSAES-OAEP 2048 bit key with a SHA1 digest.
RSA_DECRYPT_OAEP_3072_SHA1
RSAES-OAEP 3072 bit key with a SHA1 digest.
RSA_DECRYPT_OAEP_4096_SHA1
RSAES-OAEP 4096 bit key with a SHA1 digest.
EC_SIGN_P256_SHA256
ECDSA on the NIST P-256 curve with a SHA256 digest. Other hash functions can also be used: https://cloud.google.com/kms/docs/create-validate-signatures#ecdsa_support_for_other_hash_algorithms
EC_SIGN_P384_SHA384
ECDSA on the NIST P-384 curve with a SHA384 digest. Other hash functions can also be used: https://cloud.google.com/kms/docs/create-validate-signatures#ecdsa_support_for_other_hash_algorithms
EC_SIGN_SECP256K1_SHA256
ECDSA on the non-NIST secp256k1 curve. This curve is only supported for HSM protection level. Other hash functions can also be used: https://cloud.google.com/kms/docs/create-validate-signatures#ecdsa_support_for_other_hash_algorithms
EC_SIGN_ED25519
EdDSA on the Curve25519 in pure mode (taking data as input).
HMAC_SHA256
HMAC-SHA256 signing with a 256 bit key.
HMAC_SHA1
HMAC-SHA1 signing with a 160 bit key.
HMAC_SHA384
HMAC-SHA384 signing with a 384 bit key.
HMAC_SHA512
HMAC-SHA512 signing with a 512 bit key.
HMAC_SHA224
HMAC-SHA224 signing with a 224 bit key.
EXTERNAL_SYMMETRIC_ENCRYPTION
Algorithm representing symmetric encryption by an external key manager.
ML_KEM_768
ML-KEM-768 (FIPS 203)
ML_KEM_1024
ML-KEM-1024 (FIPS 203)
KEM_XWING
X-Wing hybrid KEM combining ML-KEM-768 with X25519 following datatracker.ietf.org/doc/draft-connolly-cfrg-xwing-kem/.
PQ_SIGN_ML_DSA_44
The post-quantum Module-Lattice-Based Digital Signature Algorithm, at security level 1. Randomized version.
PQ_SIGN_ML_DSA_65
The post-quantum Module-Lattice-Based Digital Signature Algorithm, at security level 3. Randomized version.
PQ_SIGN_ML_DSA_87
The post-quantum Module-Lattice-Based Digital Signature Algorithm, at security level 5. Randomized version.
PQ_SIGN_SLH_DSA_SHA2_128S
The post-quantum stateless hash-based digital signature algorithm, at security level 1. Randomized version.
PQ_SIGN_HASH_SLH_DSA_SHA2_128S_SHA256
The post-quantum stateless hash-based digital signature algorithm, at security level 1. Randomized pre-hash version supporting SHA256 digests.
PQ_SIGN_ML_DSA_44_EXTERNAL_MU
The post-quantum Module-Lattice-Based Digital Signature Algorithm, at security level 1. Randomized version supporting externally-computed message representatives.
PQ_SIGN_ML_DSA_65_EXTERNAL_MU
The post-quantum Module-Lattice-Based Digital Signature Algorithm, at security level 3. Randomized version supporting externally-computed message representatives.
PQ_SIGN_ML_DSA_87_EXTERNAL_MU
The post-quantum Module-Lattice-Based Digital Signature Algorithm, at security level 5. Randomized version supporting externally-computed message representatives.
CryptoKeyVersionState
The state of a CryptoKeyVersion , indicating if it can be used.
Enums
CRYPTO_KEY_VERSION_STATE_UNSPECIFIED
Not specified.
PENDING_GENERATION
This version is still being generated. It may not be used, enabled, disabled, or destroyed yet. Cloud KMS will automatically mark this version ENABLED as soon as the version is ready.
ENABLED
This version may be used for cryptographic operations.
DISABLED
This version may not be used, but the key material is still available, and the version can be placed back into the ENABLED state.
DESTROYED
The key material of this version is destroyed and no longer stored. This version may only become ENABLED again if this version is reimport_eligible and the original key material is reimported with a call to KeyManagementService.ImportCryptoKeyVersion .
DESTROY_SCHEDULED
This version is scheduled for destruction, and will be destroyed soon. Call RestoreCryptoKeyVersion to put it back into the DISABLED state.
PENDING_IMPORT
This version is still being imported. It may not be used, enabled, disabled, or destroyed yet. Cloud KMS will automatically mark this version ENABLED as soon as the version is ready.
IMPORT_FAILED
This version was not imported successfully. It may not be used, enabled, disabled, or destroyed. The submitted key material has been discarded. Additional details can be found in CryptoKeyVersion.import_failure_reason .
GENERATION_FAILED
This version was not generated successfully. It may not be used, enabled, disabled, or destroyed. Additional details can be found in CryptoKeyVersion.generation_failure_reason .
PENDING_EXTERNAL_DESTRUCTION
This version was destroyed, and it may not be used or enabled again. Cloud KMS is waiting for the corresponding key material residing in an external key manager to be destroyed.
EXTERNAL_DESTRUCTION_FAILED
This version was destroyed, and it may not be used or enabled again. However, Cloud KMS could not confirm that the corresponding key material residing in an external key manager was destroyed. Additional details can be found in CryptoKeyVersion.external_destruction_failure_reason .
CryptoKeyVersionView
A view for CryptoKeyVersion s. Controls the level of detail returned for CryptoKeyVersions in KeyManagementService.ListCryptoKeyVersions and KeyManagementService.ListCryptoKeys .
Enums
CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED
Default view for each CryptoKeyVersion . Does not include the attestation field.
FULL
Provides all fields in each CryptoKeyVersion , including the attestation .
CryptoKeyVersionTemplate
A CryptoKeyVersionTemplate specifies the properties to use when creating a new CryptoKeyVersion , either manually with CreateCryptoKeyVersion or automatically as a result of auto-rotation.
Fields
protection_level
ProtectionLevel
ProtectionLevel to use when creating a CryptoKeyVersion based on this template. Immutable. Defaults to SOFTWARE .
algorithm
CryptoKeyVersionAlgorithm
Required. Algorithm to use when creating a CryptoKeyVersion based on this template.
For backwards compatibility, GOOGLE_SYMMETRIC_ENCRYPTION is implied if both this field is omitted and CryptoKey.purpose is ENCRYPT_DECRYPT .
DecapsulateRequest
Request message for KeyManagementService.Decapsulate .
Fields
name
string
Required. The resource name of the CryptoKeyVersion to use for decapsulation.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeyVersions.useToDecapsulate
ciphertext
bytes
Required. The ciphertext produced from encapsulation with the named CryptoKeyVersion public key(s).
ciphertext_crc32c
Int64Value
Optional. A CRC32C checksum of the DecapsulateRequest.ciphertext . If specified, KeyManagementService will verify the integrity of the received DecapsulateRequest.ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C( DecapsulateRequest.ciphertext ) is equal to DecapsulateRequest.ciphertext_crc32c , and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
DecapsulateResponse
Response message for KeyManagementService.Decapsulate .
Fields
name
string
The resource name of the CryptoKeyVersion used for decapsulation. Check this field to verify that the intended resource was used for decapsulation.
shared_secret
bytes
The decapsulated shared_secret originally encapsulated with the matching public key.
verified_ciphertext_crc32c
bool
Integrity verification field. A flag indicating whether DecapsulateRequest.ciphertext_crc32c was received by KeyManagementService and used for the integrity verification of the ciphertext . A false value of this field indicates either that DecapsulateRequest.ciphertext_crc32c was left unset or that it was not delivered to KeyManagementService . If you've set DecapsulateRequest.ciphertext_crc32c but this field is still false, discard the response and perform a limited number of retries.
protection_level
ProtectionLevel
The ProtectionLevel of the CryptoKeyVersion used in decapsulation.
shared_secret_crc32c
int64
Integrity verification field. A CRC32C checksum of the returned DecapsulateResponse.shared_secret . An integrity check of DecapsulateResponse.shared_secret can be performed by computing the CRC32C checksum of DecapsulateResponse.shared_secret and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: receiving this response message indicates that KeyManagementService is able to successfully decrypt the ciphertext . Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
DecryptRequest
Request message for KeyManagementService.Decrypt .
Fields
name
string
Required. The resource name of the CryptoKey to use for decryption. The server will choose the appropriate version.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeyVersions.useToDecrypt
ciphertext
bytes
Required. The encrypted data originally returned in EncryptResponse.ciphertext .
additional_authenticated_data
bytes
Optional. Optional data that must match the data originally supplied in EncryptRequest.additional_authenticated_data .
ciphertext_crc32c
Int64Value
Optional. An optional CRC32C checksum of the DecryptRequest.ciphertext . If specified, KeyManagementService will verify the integrity of the received DecryptRequest.ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C( DecryptRequest.ciphertext ) is equal to DecryptRequest.ciphertext_crc32c , and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
additional_authenticated_data_crc32c
Int64Value
Optional. An optional CRC32C checksum of the DecryptRequest.additional_authenticated_data . If specified, KeyManagementService will verify the integrity of the received DecryptRequest.additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C( DecryptRequest.additional_authenticated_data ) is equal to DecryptRequest.additional_authenticated_data_crc32c , and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
DecryptResponse
Response message for KeyManagementService.Decrypt .
Fields
plaintext
bytes
The decrypted data originally supplied in EncryptRequest.plaintext .
plaintext_crc32c
Int64Value
Integrity verification field. A CRC32C checksum of the returned DecryptResponse.plaintext . An integrity check of DecryptResponse.plaintext can be performed by computing the CRC32C checksum of DecryptResponse.plaintext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: receiving this response message indicates that KeyManagementService is able to successfully decrypt the ciphertext . Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
used_primary
bool
Whether the Decryption was performed using the primary key version.
protection_level
ProtectionLevel
The ProtectionLevel of the CryptoKeyVersion used in decryption.
DeleteCryptoKeyMetadata
Represents the metadata of the KeyManagementService.DeleteCryptoKey long-running operation.
Fields
retired_resource
string
Output only. The resource name of the RetiredResource created as a result of this operation, in the format projects/*/locations/*/retiredResources/* .
DeleteCryptoKeyRequest
Request message for KeyManagementService.DeleteCryptoKey .
Fields
name
string
Required. The name of the CryptoKey to delete.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeys.delete
DeleteCryptoKeyVersionMetadata
This type has no fields.
Represents the metadata of the KeyManagementService.DeleteCryptoKeyVersion long-running operation.
DeleteCryptoKeyVersionRequest
Request message for KeyManagementService.DeleteCryptoKeyVersion .
Fields
name
string
Required. The name of the CryptoKeyVersion to delete.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeyVersions.delete
DeleteSingleTenantHsmInstanceProposalRequest
Request message for HsmManagement.DeleteSingleTenantHsmInstanceProposal .
Fields
name
string
Required. The name of the SingleTenantHsmInstanceProposal to delete.
DestroyCryptoKeyVersionRequest
Request message for KeyManagementService.DestroyCryptoKeyVersion .
Fields
name
string
Required. The resource name of the CryptoKeyVersion to destroy.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeyVersions.destroy
Digest
A Digest holds a cryptographic message digest.
Fields
Union field digest . Required. The message digest. digest can be only one of the following:
sha256
bytes
A message digest produced with the SHA-256 algorithm.
sha384
bytes
A message digest produced with the SHA-384 algorithm.
sha512
bytes
A message digest produced with the SHA-512 algorithm.
EkmConfig
An EkmConfig is a singleton resource that represents configuration parameters that apply to all CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC in a given project and location.
Fields
name
string
Output only. The resource name for the EkmConfig in the format projects/*/locations/*/ekmConfig .
default_ekm_connection
string
Optional. Resource name of the default EkmConnection . Setting this field to the empty string removes the default.
EkmConnection
An EkmConnection represents an individual EKM connection. It can be used for creating CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC , as well as performing cryptographic operations using keys created within the EkmConnection .
Fields
name
string
Output only. The resource name for the EkmConnection in the format projects/*/locations/*/ekmConnections/* .
create_time
Timestamp
Output only. The time at which the EkmConnection was created.
service_resolvers[]
ServiceResolver
Optional. A list of ServiceResolvers where the EKM can be reached. There should be one ServiceResolver per EKM replica. Currently, only a single ServiceResolver is supported.
etag
string
Optional. Etag of the currently stored EkmConnection .
key_management_mode
KeyManagementMode
Optional. Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL .
crypto_space_path
string
Optional. Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS .
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
Destruction of external key material associated with this EkmConnection can be requested by calling DestroyCryptoKeyVersion .
Automatic rotation of key material is supported.
ServiceResolver
A ServiceResolver represents an EKM replica that can be reached within an EkmConnection .
Fields
service_directory_service
string
Required. The resource name of the Service Directory service pointing to an EKM replica, in the format projects/*/locations/*/namespaces/*/services/* .
endpoint_filter
string
Optional. The filter applied to the endpoints of the resolved service. If no filter is specified, all endpoints will be considered. An endpoint will be chosen arbitrarily from the filtered list for each request.
For endpoint filter syntax and examples, see https://cloud.google.com/service-directory/docs/reference/rpc/google.cloud.servicedirectory.v1#resolveservicerequest .
hostname
string
Required. The hostname of the EKM replica used at TLS and HTTP layers.
server_certificates[]
Certificate
Required. A list of leaf server certificates used to authenticate HTTPS connections to the EKM replica. Currently, a maximum of 10 Certificate is supported.
EncryptRequest
Request message for KeyManagementService.Encrypt .
Fields
name
string
Required. The resource name of the CryptoKey or CryptoKeyVersion to use for encryption.
If a CryptoKey is specified, the server will use its primary version .
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeyVersions.useToEncrypt
plaintext
bytes
Required. The data to encrypt. Must be no larger than 64KiB.
The maximum size depends on the key version's protection_level . For SOFTWARE , EXTERNAL , and EXTERNAL_VPC keys, the plaintext must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB.
additional_authenticated_data
bytes
Optional. Optional data that, if specified, must also be provided during decryption through DecryptRequest.additional_authenticated_data .
The maximum size depends on the key version's protection_level . For SOFTWARE , EXTERNAL , and EXTERNAL_VPC keys the AAD must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB.
plaintext_crc32c
Int64Value
Optional. An optional CRC32C checksum of the EncryptRequest.plaintext . If specified, KeyManagementService will verify the integrity of the received EncryptRequest.plaintext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C( EncryptRequest.plaintext ) is equal to EncryptRequest.plaintext_crc32c , and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
additional_authenticated_data_crc32c
Int64Value
Optional. An optional CRC32C checksum of the EncryptRequest.additional_authenticated_data . If specified, KeyManagementService will verify the integrity of the received EncryptRequest.additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C( EncryptRequest.additional_authenticated_data ) is equal to EncryptRequest.additional_authenticated_data_crc32c , and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
EncryptResponse
Response message for KeyManagementService.Encrypt .
Fields
name
string
The resource name of the CryptoKeyVersion used in encryption. Check this field to verify that the intended resource was used for encryption.
ciphertext
bytes
The encrypted data.
ciphertext_crc32c
Int64Value
Integrity verification field. A CRC32C checksum of the returned EncryptResponse.ciphertext . An integrity check of EncryptResponse.ciphertext can be performed by computing the CRC32C checksum of EncryptResponse.ciphertext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
verified_plaintext_crc32c
bool
Integrity verification field. A flag indicating whether EncryptRequest.plaintext_crc32c was received by KeyManagementService and used for the integrity verification of the plaintext . A false value of this field indicates either that EncryptRequest.plaintext_crc32c was left unset or that it was not delivered to KeyManagementService . If you've set EncryptRequest.plaintext_crc32c but this field is still false, discard the response and perform a limited number of retries.
verified_additional_authenticated_data_crc32c
bool
Integrity verification field. A flag indicating whether EncryptRequest.additional_authenticated_data_crc32c was received by KeyManagementService and used for the integrity verification of the AAD . A false value of this field indicates either that EncryptRequest.additional_authenticated_data_crc32c was left unset or that it was not delivered to KeyManagementService . If you've set EncryptRequest.additional_authenticated_data_crc32c but this field is still false, discard the response and perform a limited number of retries.
protection_level
ProtectionLevel
The ProtectionLevel of the CryptoKeyVersion used in encryption.
ExecuteSingleTenantHsmInstanceProposalMetadata
This type has no fields.
Metadata message for ExecuteSingleTenantHsmInstanceProposal long-running operation response.
ExecuteSingleTenantHsmInstanceProposalRequest
Request message for HsmManagement.ExecuteSingleTenantHsmInstanceProposal .
Fields
name
string
Required. The name of the SingleTenantHsmInstanceProposal to execute.
ExecuteSingleTenantHsmInstanceProposalResponse
This type has no fields.
Response message for HsmManagement.ExecuteSingleTenantHsmInstanceProposal .
ExternalProtectionLevelOptions
ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
Fields
external_key_uri
string
The URI for an external resource that this CryptoKeyVersion represents.
ekm_connection_key_path
string
The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of external_key_uri when using an EkmConnection .
GenerateRandomBytesRequest
Request message for KeyManagementService.GenerateRandomBytes .
Fields
location
string
The project-specific location in which to generate random bytes. For example, "projects/my-project/locations/us-central1".
length_bytes
int32
The length in bytes of the amount of randomness to retrieve. Minimum 8 bytes, maximum 1024 bytes.
protection_level
ProtectionLevel
The ProtectionLevel to use when generating the random data. Currently, only HSM protection level is supported.
GenerateRandomBytesResponse
Response message for KeyManagementService.GenerateRandomBytes .
Fields
data
bytes
The generated data.
data_crc32c
Int64Value
Integrity verification field. A CRC32C checksum of the returned GenerateRandomBytesResponse.data . An integrity check of GenerateRandomBytesResponse.data can be performed by computing the CRC32C checksum of GenerateRandomBytesResponse.data and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
GetAutokeyConfigRequest
Request message for GetAutokeyConfig .
Fields
name
string
Required. Name of the AutokeyConfig resource, e.g. folders/{FOLDER_NUMBER}/autokeyConfig or projects/{PROJECT_NUMBER}/autokeyConfig .
GetCryptoKeyRequest
Request message for KeyManagementService.GetCryptoKey .
Fields
name
string
Required. The name of the CryptoKey to get.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeys.get
GetCryptoKeyVersionRequest
Request message for KeyManagementService.GetCryptoKeyVersion .
Fields
name
string
Required. The name of the CryptoKeyVersion to get.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeyVersions.get
GetEkmConfigRequest
Request message for EkmService.GetEkmConfig .
Fields
name
string
Required. The name of the EkmConfig to get.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.ekmConfigs.get
GetEkmConnectionRequest
Request message for EkmService.GetEkmConnection .
Fields
name
string
Required. The name of the EkmConnection to get.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.ekmConnections.get
GetImportJobRequest
Request message for KeyManagementService.GetImportJob .
Fields
name
string
Required. The name of the ImportJob to get.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.importJobs.get
GetKeyAccessJustificationsPolicyConfigRequest
Request message for KeyAccessJustificationsConfig.GetKeyAccessJustificationsPolicyConfig .
Fields
name
string
Required. The name of the KeyAccessJustificationsPolicyConfig to get.
GetKeyHandleRequest
Request message for GetKeyHandle .
Fields
name
string
Required. Name of the KeyHandle resource, e.g. projects/{PROJECT_ID}/locations/{LOCATION}/keyHandles/{KEY_HANDLE_ID} .
GetKeyRingRequest
Request message for KeyManagementService.GetKeyRing .
Fields
name
string
Required. The name of the KeyRing to get.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.keyRings.get
GetPublicKeyRequest
Request message for KeyManagementService.GetPublicKey .
Fields
name
string
Required. The name of the CryptoKeyVersion public key to get.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeyVersions.viewPublicKey
public_key_format
PublicKeyFormat
Optional. The PublicKey format specified by the user. This field is required for PQC algorithms. If specified, the public key will be exported through the public_key field in the requested format. Otherwise, the pem field will be populated for non-PQC algorithms, and an error will be returned for PQC algorithms.
GetRetiredResourceRequest
Request message for KeyManagementService.GetRetiredResource .
Fields
name
string
Required. The name of the RetiredResource to get.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.retiredResources.get
GetSingleTenantHsmInstanceProposalRequest
Request message for HsmManagement.GetSingleTenantHsmInstanceProposal .
Fields
name
string
Required. The name of the SingleTenantHsmInstanceProposal to get.
GetSingleTenantHsmInstanceRequest
Request message for HsmManagement.GetSingleTenantHsmInstance .
Fields
name
string
Required. The name of the SingleTenantHsmInstance to get.
ImportCryptoKeyVersionRequest
Request message for KeyManagementService.ImportCryptoKeyVersion .
Fields
parent
string
Required. The name of the CryptoKey to be imported into.
The create permission is only required on this key when creating a new CryptoKeyVersion .
Authorization requires the following IAM permission on the specified resource parent :
cloudkms.cryptoKeyVersions.create
crypto_key_version
string
Optional. The optional name of an existing CryptoKeyVersion to target for an import operation. If this field is not present, a new CryptoKeyVersion containing the supplied key material is created.
If this field is present, the supplied key material is imported into the existing CryptoKeyVersion . To import into an existing CryptoKeyVersion , the CryptoKeyVersion must be a child of ImportCryptoKeyVersionRequest.parent , have been previously created via ImportCryptoKeyVersion , and be in DESTROYED or IMPORT_FAILED state. The key material and algorithm must match the previous CryptoKeyVersion exactly if the CryptoKeyVersion has ever contained key material.
Authorization requires the following IAM permission on the specified resource cryptoKeyVersion :
cloudkms.cryptoKeyVersions.update
algorithm
CryptoKeyVersionAlgorithm
Required. The algorithm of the key being imported. This does not need to match the version_template of the CryptoKey this version imports into.
import_job
string
Required. The name of the ImportJob that was used to wrap this key material.
Authorization requires the following IAM permission on the specified resource importJob :
cloudkms.importjobs.useToImport
wrapped_key
bytes
Optional. The wrapped key material to import.
Before wrapping, key material must be formatted. If importing symmetric key material, the expected key material format is plain bytes. If importing asymmetric key material, the expected key material format is PKCS#8-encoded DER (the PrivateKeyInfo structure from RFC 5208).
When wrapping with import methods ( RSA_OAEP_3072_SHA1_AES_256 or RSA_OAEP_4096_SHA1_AES_256 or RSA_OAEP_3072_SHA256_AES_256 or RSA_OAEP_4096_SHA256_AES_256 ),
this field must contain the concatenation of:
An ephemeral AES-256 wrapping key wrapped with the public_key using RSAES-OAEP with SHA-1/SHA-256, MGF1 with SHA-1/SHA-256, and an empty label.
The formatted key to be imported, wrapped with the ephemeral AES-256 key using AES-KWP (RFC 5649).
This format is the same as the format produced by PKCS#11 mechanism CKM_RSA_AES_KEY_WRAP.
When wrapping with import methods ( RSA_OAEP_3072_SHA256 or RSA_OAEP_4096_SHA256 ),
this field must contain the formatted key to be imported, wrapped with the public_key using RSAES-OAEP with SHA-256, MGF1 with SHA-256, and an empty label.
Union field wrapped_key_material . This field is legacy. Use the field wrapped_key instead. wrapped_key_material can be only one of the following:
rsa_aes_wrapped_key
bytes
Optional. This field has the same meaning as wrapped_key . Prefer to use that field in new work. Either that field or this field (but not both) must be specified.
ImportJob
An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS.
When an ImportJob is created, Cloud KMS will generate a "wrapping key", which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of import_method . When the wrapping key generation is complete, the state will be set to ACTIVE and the public_key can be fetched. The fetched public key can then be used to wrap your pre-existing key material.
Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling ImportCryptoKeyVersion . Multiple CryptoKeyVersions can be imported with a single ImportJob . Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key.
An ImportJob expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the ImportJob 's public key.
For more information, see Importing a key .
Fields
name
string
Output only. The resource name for this ImportJob in the format projects/*/locations/*/keyRings/*/importJobs/* .
import_method
ImportMethod
Required. Immutable. The wrapping method to be used for incoming key material.
protection_level
ProtectionLevel
Required. Immutable. The protection level of the ImportJob . This must match the protection_level of the version_template on the CryptoKey you attempt to import into.
create_time
Timestamp
Output only. The time at which this ImportJob was created.
generate_time
Timestamp
Output only. The time this ImportJob 's key material was generated.
expire_time
Timestamp
Output only. The time at which this ImportJob is scheduled for expiration and can no longer be used to import key material.
expire_event_time
Timestamp
Output only. The time this ImportJob expired. Only present if state is EXPIRED .
state
ImportJobState
Output only. The current state of the ImportJob , indicating if it can be used.
public_key
WrappingPublicKey
Output only. The public key with which to wrap key material prior to import. Only returned if state is ACTIVE .
attestation
KeyOperationAttestation
Output only. Statement that was generated and signed by the key creator (for example, an HSM) at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google. Only present if the chosen ImportMethod is one with a protection level of HSM .
crypto_key_backend
string
Immutable. The resource name of the backend environment where the key material for the wrapping key resides and where all related cryptographic operations are performed. Currently, this field is only populated for keys stored in HSM_SINGLE_TENANT. Note, this list is non-exhaustive and may apply to additional ProtectionLevels in the future. Supported resources: * "projects/*/locations/*/singleTenantHsmInstances/*"
ImportJobState
The state of the ImportJob , indicating if it can be used.
Enums
IMPORT_JOB_STATE_UNSPECIFIED
Not specified.
PENDING_GENERATION
The wrapping key for this job is still being generated. It may not be used. Cloud KMS will automatically mark this job as ACTIVE as soon as the wrapping key is generated.
ACTIVE
This job may be used in CreateCryptoKey and CreateCryptoKeyVersion requests.
EXPIRED
This job can no longer be used and may not leave this state once entered.
ImportMethod
ImportMethod describes the key wrapping method chosen for this ImportJob .
Enums
IMPORT_METHOD_UNSPECIFIED
Not specified.
RSA_OAEP_3072_SHA1_AES_256
This ImportMethod represents the CKM_RSA_AES_KEY_WRAP key wrapping scheme defined in the PKCS #11 standard. In summary, this involves wrapping the raw key with an ephemeral AES key, and wrapping the ephemeral AES key with a 3072 bit RSA key. For more details, see RSA AES key wrap mechanism .
RSA_OAEP_4096_SHA1_AES_256
This ImportMethod represents the CKM_RSA_AES_KEY_WRAP key wrapping scheme defined in the PKCS #11 standard. In summary, this involves wrapping the raw key with an ephemeral AES key, and wrapping the ephemeral AES key with a 4096 bit RSA key. For more details, see RSA AES key wrap mechanism .
RSA_OAEP_3072_SHA256_AES_256
This ImportMethod represents the CKM_RSA_AES_KEY_WRAP key wrapping scheme defined in the PKCS #11 standard. In summary, this involves wrapping the raw key with an ephemeral AES key, and wrapping the ephemeral AES key with a 3072 bit RSA key. For more details, see RSA AES key wrap mechanism .
RSA_OAEP_4096_SHA256_AES_256
This ImportMethod represents the CKM_RSA_AES_KEY_WRAP key wrapping scheme defined in the PKCS #11 standard. In summary, this involves wrapping the raw key with an ephemeral AES key, and wrapping the ephemeral AES key with a 4096 bit RSA key. For more details, see RSA AES key wrap mechanism .
RSA_OAEP_3072_SHA256
This ImportMethod represents RSAES-OAEP with a 3072 bit RSA key. The key material to be imported is wrapped directly with the RSA key. Due to technical limitations of RSA wrapping, this method cannot be used to wrap RSA keys for import.
RSA_OAEP_4096_SHA256
This ImportMethod represents RSAES-OAEP with a 4096 bit RSA key. The key material to be imported is wrapped directly with the RSA key. Due to technical limitations of RSA wrapping, this method cannot be used to wrap RSA keys for import.
WrappingPublicKey
The public key component of the wrapping key. For details of the type of key this public key corresponds to, see the ImportMethod .
Fields
pem
string
The public key, encoded in PEM format. For more information, see the RFC 7468 sections for General Considerations and Textual Encoding of Subject Public Key Info .
KeyAccessJustificationsEnrollmentConfig
The configuration of a protection level for a project's Key Access Justifications enrollment.
Fields
audit_logging
bool
Whether the project has KAJ logging enabled.
policy_enforcement
bool
Whether the project is enrolled in KAJ policy enforcement.
KeyAccessJustificationsPolicy
A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey .
Fields
allowed_access_reasons[]
AccessReason
The list of allowed reasons for access to a CryptoKey . Zero allowed access reasons means all encrypt, decrypt, and sign operations for the CryptoKey associated with this policy will fail.
KeyAccessJustificationsPolicyConfig
A singleton configuration for Key Access Justifications policies.
Fields
name
string
Identifier. The resource name for this KeyAccessJustificationsPolicyConfig in the format of "{organizations|folders|projects}/*/kajPolicyConfig".
default_key_access_justification_policy
KeyAccessJustificationsPolicy
Optional. The default key access justification policy used when a CryptoKey is created in this folder. This is only used when a Key Access Justifications policy is not provided in the CreateCryptoKeyRequest . This overrides any default policies in its ancestry.
KeyHandle
Resource-oriented representation of a request to Cloud KMS Autokey and the resulting provisioning of a CryptoKey .
Fields
name
string
Identifier. Name of the KeyHandle resource, e.g. projects/{PROJECT_ID}/locations/{LOCATION}/keyHandles/{KEY_HANDLE_ID} .
kms_key
string
Output only. Name of a CryptoKey that has been provisioned for Customer Managed Encryption Key (CMEK) use in the KeyHandle project and location for the requested resource type. The CryptoKey project will reflect the value configured in the AutokeyConfig on the resource project's ancestor folder at the time of the KeyHandle creation. If more than one ancestor folder has a configured AutokeyConfig , the nearest of these configurations is used.
resource_type_selector
string
Required. Indicates the resource type that the resulting CryptoKey is meant to protect, e.g. {SERVICE}.googleapis.com/{TYPE} . See documentation for supported resource types.
KeyOperationAttestation
Contains an HSM-generated attestation about a key operation. For more information, see Verifying attestations .
Fields
format
AttestationFormat
Output only. The format of the attestation data.
content
bytes
Output only. The attestation data provided by the HSM when the key operation was performed.
cert_chains
CertificateChains
Output only. The certificate chains needed to validate the attestation
AttestationFormat
Attestation formats provided by the HSM.
Enums
ATTESTATION_FORMAT_UNSPECIFIED
Not specified.
CAVIUM_V1_COMPRESSED
Cavium HSM attestation compressed with gzip. Note that this format is defined by Cavium and subject to change at any time.
See https://www.marvell.com/products/security-solutions/nitrox-hs-adapters/software-key-attestation.html .
CAVIUM_V2_COMPRESSED
Cavium HSM attestation V2 compressed with gzip. This is a new format introduced in Cavium's version 3.2-08.
CertificateChains
Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2 .
Fields
cavium_certs[]
string
Cavium certificate chain corresponding to the attestation.
google_card_certs[]
string
Google card certificate chain corresponding to the attestation.
google_partition_certs[]
string
Google partition certificate chain corresponding to the attestation.
KeyRing
A KeyRing is a toplevel logical grouping of CryptoKeys .
Fields
name
string
Output only. The resource name for the KeyRing in the format projects/*/locations/*/keyRings/* .
create_time
Timestamp
Output only. The time at which this KeyRing was created.
ListCryptoKeyVersionsRequest
Request message for KeyManagementService.ListCryptoKeyVersions .
Fields
parent
string
Required. The resource name of the CryptoKey to list, in the format projects/*/locations/*/keyRings/*/cryptoKeys/* .
Authorization requires the following IAM permission on the specified resource parent :
cloudkms.cryptoKeyVersions.list
page_size
int32
Optional. Optional limit on the number of CryptoKeyVersions to include in the response. Further CryptoKeyVersions can subsequently be obtained by including the ListCryptoKeyVersionsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
page_token
string
Optional. Optional pagination token, returned earlier via ListCryptoKeyVersionsResponse.next_page_token .
view
CryptoKeyVersionView
The fields to include in the response.
filter
string
Optional. Only include resources that match the filter in the response. For more information, see Sorting and filtering list results .
order_by
string
Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see Sorting and filtering list results .
ListCryptoKeyVersionsResponse
Response message for KeyManagementService.ListCryptoKeyVersions .
Fields
crypto_key_versions[]
CryptoKeyVersion
The list of CryptoKeyVersions .
next_page_token
string
A token to retrieve next page of results. Pass this value in ListCryptoKeyVersionsRequest.page_token to retrieve the next page of results.
total_size
int32
The total number of CryptoKeyVersions that matched the query.
This field is not populated if ListCryptoKeyVersionsRequest.filter is applied.
ListCryptoKeysRequest
Request message for KeyManagementService.ListCryptoKeys .
Fields
parent
string
Required. The resource name of the KeyRing to list, in the format projects/*/locations/*/keyRings/* .
Authorization requires the following IAM permission on the specified resource parent :
cloudkms.cryptoKeys.list
page_size
int32
Optional. Optional limit on the number of CryptoKeys to include in the response. Further CryptoKeys can subsequently be obtained by including the ListCryptoKeysResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
page_token
string
Optional. Optional pagination token, returned earlier via ListCryptoKeysResponse.next_page_token .
version_view
CryptoKeyVersionView
The fields of the primary version to include in the response.
filter
string
Optional. Only include resources that match the filter in the response. For more information, see Sorting and filtering list results .
order_by
string
Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see Sorting and filtering list results .
ListCryptoKeysResponse
Response message for KeyManagementService.ListCryptoKeys .
Fields
crypto_keys[]
CryptoKey
The list of CryptoKeys .
next_page_token
string
A token to retrieve next page of results. Pass this value in ListCryptoKeysRequest.page_token to retrieve the next page of results.
total_size
int32
The total number of CryptoKeys that matched the query.
This field is not populated if ListCryptoKeysRequest.filter is applied.
ListEkmConnectionsRequest
Request message for EkmService.ListEkmConnections .
Fields
parent
string
Required. The resource name of the location associated with the EkmConnections to list, in the format projects/*/locations/* .
Authorization requires the following IAM permission on the specified resource parent :
cloudkms.ekmConnections.list
page_size
int32
Optional. Optional limit on the number of EkmConnections to include in the response. Further EkmConnections can subsequently be obtained by including the ListEkmConnectionsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
page_token
string
Optional. Optional pagination token, returned earlier via ListEkmConnectionsResponse.next_page_token .
filter
string
Optional. Only include resources that match the filter in the response. For more information, see Sorting and filtering list results .
order_by
string
Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see Sorting and filtering list results .
ListEkmConnectionsResponse
Response message for EkmService.ListEkmConnections .
Fields
ekm_connections[]
EkmConnection
The list of EkmConnections .
next_page_token
string
A token to retrieve next page of results. Pass this value in ListEkmConnectionsRequest.page_token to retrieve the next page of results.
total_size
int32
The total number of EkmConnections that matched the query.
This field is not populated if ListEkmConnectionsRequest.filter is applied.
ListImportJobsRequest
Request message for KeyManagementService.ListImportJobs .
Fields
parent
string
Required. The resource name of the KeyRing to list, in the format projects/*/locations/*/keyRings/* .
Authorization requires the following IAM permission on the specified resource parent :
cloudkms.importJobs.list
page_size
int32
Optional. Optional limit on the number of ImportJobs to include in the response. Further ImportJobs can subsequently be obtained by including the ListImportJobsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
page_token
string
Optional. Optional pagination token, returned earlier via ListImportJobsResponse.next_page_token .
filter
string
Optional. Only include resources that match the filter in the response. For more information, see Sorting and filtering list results .
order_by
string
Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see Sorting and filtering list results .
ListImportJobsResponse
Response message for KeyManagementService.ListImportJobs .
Fields
import_jobs[]
ImportJob
The list of ImportJobs .
next_page_token
string
A token to retrieve next page of results. Pass this value in ListImportJobsRequest.page_token to retrieve the next page of results.
total_size
int32
The total number of ImportJobs that matched the query.
This field is not populated if ListImportJobsRequest.filter is applied.
ListKeyHandlesRequest
Request message for Autokey.ListKeyHandles .
Fields
parent
string
Required. Name of the resource project and location from which to list KeyHandles , e.g. projects/{PROJECT_ID}/locations/{LOCATION} .
page_size
int32
Optional. Optional limit on the number of KeyHandles to include in the response. The service may return fewer than this value. Further KeyHandles can subsequently be obtained by including the ListKeyHandlesResponse.next_page_token in a subsequent request. If unspecified, at most 100 KeyHandles will be returned.
page_token
string
Optional. Optional pagination token, returned earlier via ListKeyHandlesResponse.next_page_token .
filter
string
Optional. Filter to apply when listing KeyHandles , e.g. resource_type_selector="{SERVICE}.googleapis.com/{TYPE}" .
ListKeyHandlesResponse
Response message for Autokey.ListKeyHandles .
Fields
key_handles[]
KeyHandle
Resulting KeyHandles .
next_page_token
string
A token to retrieve next page of results. Pass this value in ListKeyHandlesRequest.page_token to retrieve the next page of results.
ListKeyRingsRequest
Request message for KeyManagementService.ListKeyRings .
Fields
parent
string
Required. The resource name of the location associated with the KeyRings , in the format projects/*/locations/* .
Authorization requires the following IAM permission on the specified resource parent :
cloudkms.keyRings.list
page_size
int32
Optional. Optional limit on the number of KeyRings to include in the response. Further KeyRings can subsequently be obtained by including the ListKeyRingsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
page_token
string
Optional. Optional pagination token, returned earlier via ListKeyRingsResponse.next_page_token .
filter
string
Optional. Only include resources that match the filter in the response. For more information, see Sorting and filtering list results .
order_by
string
Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see Sorting and filtering list results .
ListKeyRingsResponse
Response message for KeyManagementService.ListKeyRings .
Fields
key_rings[]
KeyRing
The list of KeyRings .
next_page_token
string
A token to retrieve next page of results. Pass this value in ListKeyRingsRequest.page_token to retrieve the next page of results.
total_size
int32
The total number of KeyRings that matched the query.
This field is not populated if ListKeyRingsRequest.filter is applied.
ListRetiredResourcesRequest
Request message for KeyManagementService.ListRetiredResources .
Fields
parent
string
Required. The project-specific location holding the RetiredResources , in the format projects/*/locations/* .
Authorization requires the following IAM permission on the specified resource parent :
cloudkms.retiredResources.list
page_size
int32
Optional. Optional limit on the number of RetiredResources to be included in the response. Further RetiredResources can subsequently be obtained by including the ListRetiredResourcesResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
page_token
string
Optional. Optional pagination token, returned earlier via ListRetiredResourcesResponse.next_page_token .
ListRetiredResourcesResponse
Response message for KeyManagementService.ListRetiredResources .
Fields
retired_resources[]
RetiredResource
The list of RetiredResources .
next_page_token
string
A token to retrieve the next page of results. Pass this value in ListRetiredResourcesRequest.page_token to retrieve the next page of results.
total_size
int64
The total number of RetiredResources that matched the query.
ListSingleTenantHsmInstanceProposalsRequest
Request message for HsmManagement.ListSingleTenantHsmInstanceProposals .
Fields
parent
string
Required. The resource name of the single tenant HSM instance associated with the SingleTenantHsmInstanceProposals to list, in the format projects/*/locations/*/singleTenantHsmInstances/* .
page_size
int32
Optional. Optional limit on the number of SingleTenantHsmInstanceProposals to include in the response. Further SingleTenantHsmInstanceProposals can subsequently be obtained by including the ListSingleTenantHsmInstanceProposalsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
page_token
string
Optional. Optional pagination token, returned earlier via ListSingleTenantHsmInstanceProposalsResponse.next_page_token .
filter
string
Optional. Only include resources that match the filter in the response. For more information, see Sorting and filtering list results .
order_by
string
Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see Sorting and filtering list results .
show_deleted
bool
Optional. If set to true, HsmManagement.ListSingleTenantHsmInstanceProposals will also return SingleTenantHsmInstanceProposals in DELETED state.
ListSingleTenantHsmInstanceProposalsResponse
Response message for HsmManagement.ListSingleTenantHsmInstanceProposals .
Fields
single_tenant_hsm_instance_proposals[]
SingleTenantHsmInstanceProposal
The list of SingleTenantHsmInstanceProposals .
next_page_token
string
A token to retrieve next page of results. Pass this value in ListSingleTenantHsmInstanceProposalsRequest.page_token to retrieve the next page of results.
total_size
int32
The total number of SingleTenantHsmInstanceProposals that matched the query.
This field is not populated if ListSingleTenantHsmInstanceProposalsRequest.filter is applied.
ListSingleTenantHsmInstancesRequest
Request message for HsmManagement.ListSingleTenantHsmInstances .
Fields
parent
string
Required. The resource name of the location associated with the SingleTenantHsmInstances to list, in the format projects/*/locations/* .
page_size
int32
Optional. Optional limit on the number of SingleTenantHsmInstances to include in the response. Further SingleTenantHsmInstances can subsequently be obtained by including the ListSingleTenantHsmInstancesResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
page_token
string
Optional. Optional pagination token, returned earlier via ListSingleTenantHsmInstancesResponse.next_page_token .
filter
string
Optional. Only include resources that match the filter in the response. For more information, see Sorting and filtering list results .
order_by
string
Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see Sorting and filtering list results .
show_deleted
bool
Optional. If set to true, HsmManagement.ListSingleTenantHsmInstances will also return SingleTenantHsmInstances in DELETED state.
ListSingleTenantHsmInstancesResponse
Response message for HsmManagement.ListSingleTenantHsmInstances .
Fields
single_tenant_hsm_instances[]
SingleTenantHsmInstance
The list of SingleTenantHsmInstances .
next_page_token
string
A token to retrieve next page of results. Pass this value in ListSingleTenantHsmInstancesRequest.page_token to retrieve the next page of results.
total_size
int32
The total number of SingleTenantHsmInstances that matched the query.
This field is not populated if ListSingleTenantHsmInstancesRequest.filter is applied.
LocationMetadata
Cloud KMS metadata for the given google.cloud.location.Location .
Fields
hsm_available
bool
Indicates whether CryptoKeys with protection_level HSM can be created in this location.
ekm_available
bool
Indicates whether CryptoKeys with protection_level EXTERNAL can be created in this location.
hsm_single_tenant_available
bool
Indicates whether CryptoKeys with protection_level HSM_SINGLE_TENANT can be created in this location.
MacSignRequest
Request message for KeyManagementService.MacSign .
Fields
name
string
Required. The resource name of the CryptoKeyVersion to use for signing.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeyVersions.useToSign
data
bytes
Required. The data to sign. The MAC tag is computed over this data field based on the specific algorithm.
data_crc32c
Int64Value
Optional. An optional CRC32C checksum of the MacSignRequest.data . If specified, KeyManagementService will verify the integrity of the received MacSignRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C( MacSignRequest.data ) is equal to MacSignRequest.data_crc32c , and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
MacSignResponse
Response message for KeyManagementService.MacSign .
Fields
name
string
The resource name of the CryptoKeyVersion used for signing. Check this field to verify that the intended resource was used for signing.
mac
bytes
The created signature.
mac_crc32c
Int64Value
Integrity verification field. A CRC32C checksum of the returned MacSignResponse.mac . An integrity check of MacSignResponse.mac can be performed by computing the CRC32C checksum of MacSignResponse.mac and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
verified_data_crc32c
bool
Integrity verification field. A flag indicating whether MacSignRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data . A false value of this field indicates either that MacSignRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService . If you've set MacSignRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries.
protection_level
ProtectionLevel
The ProtectionLevel of the CryptoKeyVersion used for signing.
MacVerifyRequest
Request message for KeyManagementService.MacVerify .
Fields
name
string
Required. The resource name of the CryptoKeyVersion to use for verification.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeyVersions.useToVerify
data
bytes
Required. The data used previously as a MacSignRequest.data to generate the MAC tag.
data_crc32c
Int64Value
Optional. An optional CRC32C checksum of the MacVerifyRequest.data . If specified, KeyManagementService will verify the integrity of the received MacVerifyRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C( MacVerifyRequest.data ) is equal to MacVerifyRequest.data_crc32c , and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
mac
bytes
Required. The signature to verify.
mac_crc32c
Int64Value
Optional. An optional CRC32C checksum of the MacVerifyRequest.mac . If specified, KeyManagementService will verify the integrity of the received MacVerifyRequest.mac using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C( MacVerifyRequest.mac ) is equal to MacVerifyRequest.mac_crc32c , and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
MacVerifyResponse
Response message for KeyManagementService.MacVerify .
Fields
name
string
The resource name of the CryptoKeyVersion used for verification. Check this field to verify that the intended resource was used for verification.
success
bool
This field indicates whether or not the verification operation for MacVerifyRequest.mac over MacVerifyRequest.data was successful.
verified_data_crc32c
bool
Integrity verification field. A flag indicating whether MacVerifyRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data . A false value of this field indicates either that MacVerifyRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService . If you've set MacVerifyRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries.
verified_mac_crc32c
bool
Integrity verification field. A flag indicating whether MacVerifyRequest.mac_crc32c was received by KeyManagementService and used for the integrity verification of the data . A false value of this field indicates either that MacVerifyRequest.mac_crc32c was left unset or that it was not delivered to KeyManagementService . If you've set MacVerifyRequest.mac_crc32c but this field is still false, discard the response and perform a limited number of retries.
verified_success_integrity
bool
Integrity verification field. This value is used for the integrity verification of [MacVerifyResponse.success]. If the value of this field contradicts the value of [MacVerifyResponse.success], discard the response and perform a limited number of retries.
protection_level
ProtectionLevel
The ProtectionLevel of the CryptoKeyVersion used for verification.
ProtectionLevel
ProtectionLevel specifies how cryptographic operations are performed. For more information, see Protection levels .
Enums
PROTECTION_LEVEL_UNSPECIFIED
Not specified.
SOFTWARE
Crypto operations are performed in software.
HSM
Crypto operations are performed in a Hardware Security Module.
EXTERNAL
Crypto operations are performed by an external key manager.
EXTERNAL_VPC
Crypto operations are performed in an EKM-over-VPC backend.
HSM_SINGLE_TENANT
Crypto operations are performed in a single-tenant HSM.
PublicKey
The public keys for a given CryptoKeyVersion . Obtained via GetPublicKey .
Fields
pem
string
The public key, encoded in PEM format. For more information, see the RFC 7468 sections for General Considerations and Textual Encoding of Subject Public Key Info .
algorithm
CryptoKeyVersionAlgorithm
The Algorithm associated with this key.
pem_crc32c
Int64Value
Integrity verification field. A CRC32C checksum of the returned PublicKey.pem . An integrity check of PublicKey.pem can be performed by computing the CRC32C checksum of PublicKey.pem and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1 , and can be safely downconverted to uint32 in languages that support this type.
NOTE: This field is in Beta.
name
string
The name of the CryptoKeyVersion public key. Provided here for verification.
NOTE: This field is in Beta.
protection_level
ProtectionLevel
The ProtectionLevel of the CryptoKeyVersion public key.
public_key_format
PublicKeyFormat
The PublicKey format specified by the customer through the public_key_format field.
public_key
ChecksummedData
This field contains the public key (with integrity verification), formatted according to the public_key_format field.
PublicKeyFormat
The supported PublicKey formats.
Enums
PUBLIC_KEY_FORMAT_UNSPECIFIED
If the public_key_format field is not specified: - For PQC algorithms, an error will be returned. - For non-PQC algorithms, the default format is PEM, and the field pem will be populated.
Otherwise, the public key will be exported through the public_key field in the requested format.
PEM
The returned public key will be encoded in PEM format. See the RFC7468 sections for General Considerations and Textual Encoding of Subject Public Key Info for more information.
DER
The returned public key will be encoded in DER format (the PrivateKeyInfo structure from RFC 5208).
NIST_PQC
This is supported only for PQC algorithms. The key material is returned in the format defined by NIST PQC standards (FIPS 203, FIPS 204, and FIPS 205).
XWING_RAW_BYTES
The returned public key is in raw bytes format defined in its standard https://datatracker.ietf.org/doc/draft-connolly-cfrg-xwing-kem .
RawDecryptRequest
Request message for KeyManagementService.RawDecrypt .
Fields
name
string
Required. The resource name of the CryptoKeyVersion to use for decryption.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeyVersions.useToDecrypt
ciphertext
bytes
Required. The encrypted data originally returned in RawEncryptResponse.ciphertext .
additional_authenticated_data
bytes
Optional. Optional data that must match the data originally supplied in RawEncryptRequest.additional_authenticated_data .
initialization_vector
bytes
Required. The initialization vector (IV) used during encryption, which must match the data originally provided in RawEncryptResponse.initialization_vector .
tag_length
int32
The length of the authentication tag that is appended to the end of the ciphertext. If unspecified (0), the default value for the key's algorithm will be used (for AES-GCM, the default value is 16).
ciphertext_crc32c
Int64Value
Optional. An optional CRC32C checksum of the RawDecryptRequest.ciphertext . If specified, KeyManagementService will verify the integrity of the received ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(ciphertext) is equal to ciphertext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
additional_authenticated_data_crc32c
Int64Value
Optional. An optional CRC32C checksum of the RawDecryptRequest.additional_authenticated_data . If specified, KeyManagementService will verify the integrity of the received additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(additional_authenticated_data) is equal to additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
initialization_vector_crc32c
Int64Value
Optional. An optional CRC32C checksum of the RawDecryptRequest.initialization_vector . If specified, KeyManagementService will verify the integrity of the received initialization_vector using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(initialization_vector) is equal to initialization_vector_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
RawDecryptResponse
Response message for KeyManagementService.RawDecrypt .
Fields
plaintext
bytes
The decrypted data.
plaintext_crc32c
Int64Value
Integrity verification field. A CRC32C checksum of the returned RawDecryptResponse.plaintext . An integrity check of plaintext can be performed by computing the CRC32C checksum of plaintext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: receiving this response message indicates that KeyManagementService is able to successfully decrypt the ciphertext . Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
protection_level
ProtectionLevel
The ProtectionLevel of the CryptoKeyVersion used in decryption.
verified_ciphertext_crc32c
bool
Integrity verification field. A flag indicating whether RawDecryptRequest.ciphertext_crc32c was received by KeyManagementService and used for the integrity verification of the ciphertext. A false value of this field indicates either that RawDecryptRequest.ciphertext_crc32c was left unset or that it was not delivered to KeyManagementService . If you've set RawDecryptRequest.ciphertext_crc32c but this field is still false, discard the response and perform a limited number of retries.
verified_additional_authenticated_data_crc32c
bool
Integrity verification field. A flag indicating whether RawDecryptRequest.additional_authenticated_data_crc32c was received by KeyManagementService and used for the integrity verification of additional_authenticated_data. A false value of this field indicates either that // RawDecryptRequest.additional_authenticated_data_crc32c was left unset or that it was not delivered to KeyManagementService . If you've set RawDecryptRequest.additional_authenticated_data_crc32c but this field is still false, discard the response and perform a limited number of retries.
verified_initialization_vector_crc32c
bool
Integrity verification field. A flag indicating whether RawDecryptRequest.initialization_vector_crc32c was received by KeyManagementService and used for the integrity verification of initialization_vector. A false value of this field indicates either that RawDecryptRequest.initialization_vector_crc32c was left unset or that it was not delivered to KeyManagementService . If you've set RawDecryptRequest.initialization_vector_crc32c but this field is still false, discard the response and perform a limited number of retries.
RawEncryptRequest
Request message for KeyManagementService.RawEncrypt .
Fields
name
string
Required. The resource name of the CryptoKeyVersion to use for encryption.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeyVersions.useToEncrypt
plaintext
bytes
Required. The data to encrypt. Must be no larger than 64KiB.
The maximum size depends on the key version's protection_level . For SOFTWARE keys, the plaintext must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB.
additional_authenticated_data
bytes
Optional. Optional data that, if specified, must also be provided during decryption through RawDecryptRequest.additional_authenticated_data .
This field may only be used in conjunction with an algorithm that accepts additional authenticated data (for example, AES-GCM).
The maximum size depends on the key version's protection_level . For SOFTWARE keys, the plaintext must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB.
plaintext_crc32c
Int64Value
Optional. An optional CRC32C checksum of the RawEncryptRequest.plaintext . If specified, KeyManagementService will verify the integrity of the received plaintext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(plaintext) is equal to plaintext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
additional_authenticated_data_crc32c
Int64Value
Optional. An optional CRC32C checksum of the RawEncryptRequest.additional_authenticated_data . If specified, KeyManagementService will verify the integrity of the received additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(additional_authenticated_data) is equal to additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
initialization_vector
bytes
Optional. A customer-supplied initialization vector that will be used for encryption. If it is not provided for AES-CBC and AES-CTR, one will be generated. It will be returned in RawEncryptResponse.initialization_vector .
initialization_vector_crc32c
Int64Value
Optional. An optional CRC32C checksum of the RawEncryptRequest.initialization_vector . If specified, KeyManagementService will verify the integrity of the received initialization_vector using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(initialization_vector) is equal to initialization_vector_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
RawEncryptResponse
Response message for KeyManagementService.RawEncrypt .
Fields
ciphertext
bytes
The encrypted data. In the case of AES-GCM, the authentication tag is the tag_length bytes at the end of this field.
initialization_vector
bytes
The initialization vector (IV) generated by the service during encryption. This value must be stored and provided in RawDecryptRequest.initialization_vector at decryption time.
tag_length
int32
The length of the authentication tag that is appended to the end of the ciphertext.
ciphertext_crc32c
Int64Value
Integrity verification field. A CRC32C checksum of the returned RawEncryptResponse.ciphertext . An integrity check of ciphertext can be performed by computing the CRC32C checksum of ciphertext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
initialization_vector_crc32c
Int64Value
Integrity verification field. A CRC32C checksum of the returned RawEncryptResponse.initialization_vector . An integrity check of initialization_vector can be performed by computing the CRC32C checksum of initialization_vector and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
verified_plaintext_crc32c
bool
Integrity verification field. A flag indicating whether RawEncryptRequest.plaintext_crc32c was received by KeyManagementService and used for the integrity verification of the plaintext. A false value of this field indicates either that RawEncryptRequest.plaintext_crc32c was left unset or that it was not delivered to KeyManagementService . If you've set RawEncryptRequest.plaintext_crc32c but this field is still false, discard the response and perform a limited number of retries.
verified_additional_authenticated_data_crc32c
bool
Integrity verification field. A flag indicating whether RawEncryptRequest.additional_authenticated_data_crc32c was received by KeyManagementService and used for the integrity verification of additional_authenticated_data. A false value of this field indicates either that // RawEncryptRequest.additional_authenticated_data_crc32c was left unset or that it was not delivered to KeyManagementService . If you've set RawEncryptRequest.additional_authenticated_data_crc32c but this field is still false, discard the response and perform a limited number of retries.
verified_initialization_vector_crc32c
bool
Integrity verification field. A flag indicating whether RawEncryptRequest.initialization_vector_crc32c was received by KeyManagementService and used for the integrity verification of initialization_vector. A false value of this field indicates either that RawEncryptRequest.initialization_vector_crc32c was left unset or that it was not delivered to KeyManagementService . If you've set RawEncryptRequest.initialization_vector_crc32c but this field is still false, discard the response and perform a limited number of retries.
name
string
The resource name of the CryptoKeyVersion used in encryption. Check this field to verify that the intended resource was used for encryption.
protection_level
ProtectionLevel
The ProtectionLevel of the CryptoKeyVersion used in encryption.
RestoreCryptoKeyVersionRequest
Request message for KeyManagementService.RestoreCryptoKeyVersion .
Fields
name
string
Required. The resource name of the CryptoKeyVersion to restore.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeyVersions.restore
RetiredResource
A RetiredResource resource represents the record of a deleted CryptoKey . Its purpose is to provide visibility into retained user data and to prevent reuse of these names for new CryptoKeys .
Fields
name
string
Output only. Identifier. The resource name for this RetiredResource in the format projects/*/locations/*/retiredResources/* .
original_resource
string
Output only. The full resource name of the original CryptoKey that was deleted in the format projects/*/locations/*/keyRings/*/cryptoKeys/* .
resource_type
string
Output only. The resource type of the original deleted resource.
delete_time
Timestamp
Output only. The time at which the original resource was deleted and this RetiredResource record was created.
ShowEffectiveAutokeyConfigRequest
Request message for ShowEffectiveAutokeyConfig .
Fields
parent
string
Required. Name of the resource project to the show effective Cloud KMS Autokey configuration for. This may be helpful for interrogating the effect of nested folder configurations on a given resource project.
ShowEffectiveAutokeyConfigResponse
Response message for ShowEffectiveAutokeyConfig .
Fields
key_project
string
Name of the key project configured in the resource project's folder ancestry.
ShowEffectiveKeyAccessJustificationsEnrollmentConfigRequest
Request message for KeyAccessJustificationsConfig.ShowEffectiveKeyAccessJustificationsEnrollmentConfig
Fields
project
string
Required. The number or id of the project to get the effective KeyAccessJustificationsEnrollmentConfig for.
ShowEffectiveKeyAccessJustificationsEnrollmentConfigResponse
Response message for KeyAccessJustificationsConfig.ShowEffectiveKeyAccessJustificationsEnrollmentConfig
Fields
hardware_config
KeyAccessJustificationsEnrollmentConfig
The effective KeyAccessJustificationsEnrollmentConfig for hardware keys.
software_config
KeyAccessJustificationsEnrollmentConfig
The effective KeyAccessJustificationsEnrollmentConfig for software keys.
external_config
KeyAccessJustificationsEnrollmentConfig
The effective KeyAccessJustificationsEnrollmentConfig for external keys.
ShowEffectiveKeyAccessJustificationsPolicyConfigRequest
Request message for KeyAccessJustificationsConfig.ShowEffectiveKeyAccessJustificationsPolicyConfig .
Fields
project
string
Required. The number or id of the project to get the effective KeyAccessJustificationsPolicyConfig . In the format of "projects/{ | }"
ShowEffectiveKeyAccessJustificationsPolicyConfigResponse
Response message for KeyAccessJustificationsConfig.ShowEffectiveKeyAccessJustificationsPolicyConfig .
Fields
effective_kaj_policy
KeyAccessJustificationsPolicyConfig
The effective KeyAccessJustificationsPolicyConfig .
SingleTenantHsmInstance
A SingleTenantHsmInstance represents a single-tenant HSM instance. It can be used for creating CryptoKeys with a ProtectionLevel of [HSM_SINGLE_TENANT][CryptoKeyVersion.ProtectionLevel.HSM_SINGLE_TENANT], as well as performing cryptographic operations using keys created within the SingleTenantHsmInstance .
Fields
name
string
Identifier. The resource name for this SingleTenantHsmInstance in the format projects/*/locations/*/singleTenantHsmInstances/* .
create_time
Timestamp
Output only. The time at which the SingleTenantHsmInstance was created.
state
State
Output only. The state of the SingleTenantHsmInstance .
quorum_auth
QuorumAuth
Required. The quorum auth configuration for the SingleTenantHsmInstance .
delete_time
Timestamp
Output only. The time at which the SingleTenantHsmInstance was deleted.
unrefreshed_duration_until_disable
Duration
Output only. The system-defined duration that an instance can remain unrefreshed until it is automatically disabled. This will have a value of 120 days.
disable_time
Timestamp
Output only. The time at which the instance will be automatically disabled if not refreshed. This field is updated upon creation and after each successful refresh operation and enable. A RefreshSingleTenantHsmInstance operation must be made via a SingleTenantHsmInstanceProposal before this time otherwise the SingleTenantHsmInstance will become disabled.
QuorumAuth
Configuration for M of N quorum auth.
Fields
total_approver_count
int32
Required. The total number of approvers. This is the N value used for M of N quorum auth. Must be greater than or equal to 3 and less than or equal to 16.
required_approver_count
int32
Output only. The required numbers of approvers. The M value used for M of N quorum auth. Must be greater than or equal to 2 and less than or equal to total_approver_count - 1.
two_factor_public_key_pems[]
string
Output only. The public keys associated with the 2FA keys for M of N quorum auth.
State
The set of states of a SingleTenantHsmInstance .
Enums
STATE_UNSPECIFIED
Not specified.
CREATING
The SingleTenantHsmInstance is being created.
PENDING_TWO_FACTOR_AUTH_REGISTRATION
The SingleTenantHsmInstance is waiting for 2FA keys to be registered. This can be done by calling CreateSingleTenantHsmInstanceProposal with the RegisterTwoFactorAuthKeys operation.
ACTIVE
The SingleTenantHsmInstance is ready to use. A SingleTenantHsmInstance must be in the ACTIVE state for all CryptoKeys created within the SingleTenantHsmInstance to be usable.
DISABLING
The SingleTenantHsmInstance is being disabled.
DISABLED
The SingleTenantHsmInstance is disabled.
DELETING
The SingleTenantHsmInstance is being deleted. Requests to the instance will be rejected in this state.
DELETED
The SingleTenantHsmInstance has been deleted.
FAILED
The SingleTenantHsmInstance has failed and can not be recovered or used.
SingleTenantHsmInstanceProposal
A SingleTenantHsmInstanceProposal represents a proposal to perform an operation on a SingleTenantHsmInstance .
Fields
name
string
Identifier. The resource name for this SingleTenantHsmInstance in the format projects/*/locations/*/singleTenantHsmInstances/*/proposals/* .
create_time
Timestamp
Output only. The time at which the SingleTenantHsmInstanceProposal was created.
state
State
Output only. The state of the SingleTenantHsmInstanceProposal .
failure_reason
string
Output only. The root cause of the most recent failure. Only present if state is FAILED .
delete_time
Timestamp
Output only. The time at which the SingleTenantHsmInstanceProposal was deleted.
purge_time
Timestamp
Output only. The time at which the soft-deleted SingleTenantHsmInstanceProposal will be permanently purged. This field is only populated when the state is DELETED and will be set a time after expiration of the proposal, i.e. >= expire_time or (create_time + ttl).
Union field approval_parameters . The approval parameters for the SingleTenantHsmInstanceProposal . The type of parameters is determined by the operation being proposed. approval_parameters can be only one of the following:
quorum_parameters
QuorumParameters
Output only. The quorum approval parameters for the SingleTenantHsmInstanceProposal .
required_action_quorum_parameters
RequiredActionQuorumParameters
Output only. Parameters for an approval of a SingleTenantHsmInstanceProposal that has both required challenges and a quorum.
Union field expiration . The expiration of the SingleTenantHsmInstanceProposal . If not set, the SingleTenantHsmInstanceProposal will expire in 1 day. The maximum expire time is 7 days. The minimum expire time is 5 minutes. expiration can be only one of the following:
expire_time
Timestamp
The time at which the SingleTenantHsmInstanceProposal will expire if not approved and executed.
ttl
Duration
Input only. The TTL for the SingleTenantHsmInstanceProposal . Proposals will expire after this duration.
Union field operation . The operation to perform on the SingleTenantHsmInstance . operation can be only one of the following:
register_two_factor_auth_keys
RegisterTwoFactorAuthKeys
Register 2FA keys for the SingleTenantHsmInstance . This operation requires all N Challenges to be signed by 2FA keys. The SingleTenantHsmInstance must be in the PENDING_TWO_FACTOR_AUTH_REGISTRATION state to perform this operation.
disable_single_tenant_hsm_instance
DisableSingleTenantHsmInstance
Disable the SingleTenantHsmInstance . The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation.
enable_single_tenant_hsm_instance
EnableSingleTenantHsmInstance
Enable the SingleTenantHsmInstance . The SingleTenantHsmInstance must be in the DISABLED state to perform this operation.
delete_single_tenant_hsm_instance
DeleteSingleTenantHsmInstance
Delete the SingleTenantHsmInstance . Deleting a SingleTenantHsmInstance will make all CryptoKeys attached to the SingleTenantHsmInstance unusable. The SingleTenantHsmInstance must be in the DISABLED or PENDING_TWO_FACTOR_AUTH_REGISTRATION state to perform this operation.
add_quorum_member
AddQuorumMember
Add a quorum member to the SingleTenantHsmInstance . This will increase the total_approver_count by 1. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation.
remove_quorum_member
RemoveQuorumMember
Remove a quorum member from the SingleTenantHsmInstance . This will reduce total_approver_count by 1. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation.
refresh_single_tenant_hsm_instance
RefreshSingleTenantHsmInstance
Refreshes the SingleTenantHsmInstance . This operation must be performed periodically to keep the SingleTenantHsmInstance active. This operation must be performed before unrefreshed_duration_until_disable has passed. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation.
AddQuorumMember
Add a quorum member to the SingleTenantHsmInstance . This will increase the total_approver_count by 1. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation.
Fields
two_factor_public_key_pem
string
Required. The public key associated with the 2FA key for the new quorum member to add. Public keys must be associated with RSA 2048 keys.
DeleteSingleTenantHsmInstance
This type has no fields.
Delete the SingleTenantHsmInstance . Deleting a SingleTenantHsmInstance will make all CryptoKeys attached to the SingleTenantHsmInstance unusable. The SingleTenantHsmInstance must not be in the DELETING or DELETED state to perform this operation.
DisableSingleTenantHsmInstance
This type has no fields.
Disable the SingleTenantHsmInstance . The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation.
EnableSingleTenantHsmInstance
This type has no fields.
Enable the SingleTenantHsmInstance . The SingleTenantHsmInstance must be in the DISABLED state to perform this operation.
QuorumParameters
Parameters of quorum approval for the SingleTenantHsmInstanceProposal .
Fields
required_approver_count
int32
Output only. The required numbers of approvers. This is the M value used for M of N quorum auth. It is less than the number of public keys.
challenges[]
Challenge
Output only. The challenges to be signed by 2FA keys for quorum auth. M of N of these challenges are required to be signed to approve the operation.
approved_two_factor_public_key_pems[]
string
Output only. The public keys associated with the 2FA keys that have already approved the SingleTenantHsmInstanceProposal by signing the challenge.
RefreshSingleTenantHsmInstance
This type has no fields.
Refreshes the SingleTenantHsmInstance . This operation must be performed periodically to keep the SingleTenantHsmInstance active. This operation must be performed before unrefreshed_duration_until_disable has passed. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation.
RegisterTwoFactorAuthKeys
Register 2FA keys for the SingleTenantHsmInstance . This operation requires all Challenges to be signed by 2FA keys. The SingleTenantHsmInstance must be in the PENDING_TWO_FACTOR_AUTH_REGISTRATION state to perform this operation.
Fields
required_approver_count
int32
Required. The required numbers of approvers to set for the SingleTenantHsmInstance . This is the M value used for M of N quorum auth. Must be greater than or equal to 2 and less than or equal to total_approver_count - 1.
two_factor_public_key_pems[]
string
Required. The public keys associated with the 2FA keys for M of N quorum auth. Public keys must be associated with RSA 2048 keys.
RemoveQuorumMember
Remove a quorum member from the SingleTenantHsmInstance . This will reduce total_approver_count by 1. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation.
Fields
two_factor_public_key_pem
string
Required. The public key associated with the 2FA key for the quorum member to remove. Public keys must be associated with RSA 2048 keys.
RequiredActionQuorumParameters
Parameters for an approval that has both required challenges and a quorum.
Fields
required_challenges[]
Challenge
Output only. A list of specific challenges that must be signed. For some operations, this will contain a single challenge.
required_approver_count
int32
Output only. The required number of quorum approvers. This is the M value used for M of N quorum auth. It is less than the number of public keys.
quorum_challenges[]
Challenge
Output only. The challenges to be signed by 2FA keys for quorum auth. M of N of these challenges are required to be signed to approve the operation.
approved_two_factor_public_key_pems[]
string
Output only. The public keys associated with the 2FA keys that have already approved the SingleTenantHsmInstanceProposal by signing the challenge.
State
The set of states of a SingleTenantHsmInstanceProposal .
Enums
STATE_UNSPECIFIED
Not specified.
CREATING
The SingleTenantHsmInstanceProposal is being created.
PENDING
The SingleTenantHsmInstanceProposal is pending approval.
APPROVED
The SingleTenantHsmInstanceProposal has been approved.
RUNNING
The SingleTenantHsmInstanceProposal is being executed.
SUCCEEDED
The SingleTenantHsmInstanceProposal has been executed successfully.
FAILED
The SingleTenantHsmInstanceProposal has failed.
DELETED
The SingleTenantHsmInstanceProposal has been deleted and will be purged after the purge_time.
UpdateAutokeyConfigRequest
Request message for UpdateAutokeyConfig .
Fields
autokey_config
AutokeyConfig
Required. AutokeyConfig with values to update.
update_mask
FieldMask
Required. Masks which fields of the AutokeyConfig to update, e.g. keyProject .
UpdateCryptoKeyPrimaryVersionRequest
Request message for KeyManagementService.UpdateCryptoKeyPrimaryVersion .
Fields
name
string
Required. The resource name of the CryptoKey to update.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeys.update
crypto_key_version_id
string
Required. The id of the child CryptoKeyVersion to use as primary.
UpdateCryptoKeyRequest
Request message for KeyManagementService.UpdateCryptoKey .
Fields
crypto_key
CryptoKey
Required. CryptoKey with updated values.
Authorization requires the following IAM permission on the specified resource cryptoKey :
cloudkms.cryptoKeys.update
update_mask
FieldMask
Required. List of fields to be updated in this request.
UpdateCryptoKeyVersionRequest
Request message for KeyManagementService.UpdateCryptoKeyVersion .
Fields
crypto_key_version
CryptoKeyVersion
Required. CryptoKeyVersion with updated values.
Authorization requires the following IAM permission on the specified resource cryptoKeyVersion :
cloudkms.cryptoKeyVersions.update
update_mask
FieldMask
Required. List of fields to be updated in this request.
UpdateEkmConfigRequest
Request message for EkmService.UpdateEkmConfig .
Fields
ekm_config
EkmConfig
Required. EkmConfig with updated values.
Authorization requires the following IAM permission on the specified resource ekmConfig :
cloudkms.ekmConfigs.update
update_mask
FieldMask
Required. List of fields to be updated in this request.
UpdateEkmConnectionRequest
Request message for EkmService.UpdateEkmConnection .
Fields
ekm_connection
EkmConnection
Required. EkmConnection with updated values.
Authorization requires the following IAM permission on the specified resource ekmConnection :
cloudkms.ekmConnections.update
update_mask
FieldMask
Required. List of fields to be updated in this request.
UpdateKeyAccessJustificationsPolicyConfigRequest
Request message for KeyAccessJustificationsConfig.UpdateKeyAccessJustificationsPolicyConfig .
Fields
key_access_justifications_policy_config
KeyAccessJustificationsPolicyConfig
Required. KeyAccessJustificationsPolicyConfig with updated values.
update_mask
FieldMask
Optional. The list of fields to update.
VerifyConnectivityRequest
Request message for EkmService.VerifyConnectivity .
Fields
name
string
Required. The name of the EkmConnection to verify.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.ekmConnections.verifyConnectivity
VerifyConnectivityResponse
This type has no fields.
Response message for EkmService.VerifyConnectivity .
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
