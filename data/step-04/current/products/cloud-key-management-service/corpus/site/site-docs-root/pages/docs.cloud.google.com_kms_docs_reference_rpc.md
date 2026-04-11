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
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud KMS
Reference
Send feedback
Cloud Key Management Service (KMS) API
Stay organized with collections
Save and categorize content based on your preferences.
Manages keys and performs cryptographic operations in a central cloud service, for direct use by other cloud resources and applications.
Service: cloudkms.googleapis.com
The Service name cloudkms.googleapis.com is needed to create RPC client stubs.
google.cloud.kms.v1.Autokey
Methods
CreateKeyHandle
Creates a new KeyHandle , triggering the provisioning of a new CryptoKey for CMEK use with the given resource type in the configured key project and the same location.
GetKeyHandle
Returns the KeyHandle .
ListKeyHandles
Lists KeyHandles .
google.cloud.kms.v1.AutokeyAdmin
Methods
GetAutokeyConfig
Returns the AutokeyConfig for a folder or project.
ShowEffectiveAutokeyConfig
Returns the effective Cloud KMS Autokey configuration for a given project.
UpdateAutokeyConfig
Updates the AutokeyConfig for a folder or a project.
google.cloud.kms.v1.EkmService
Methods
CreateEkmConnection
Creates a new EkmConnection in a given Project and Location.
GetEkmConfig
Returns the EkmConfig singleton resource for a given project and location.
GetEkmConnection
Returns metadata for a given EkmConnection .
ListEkmConnections
Lists EkmConnections .
UpdateEkmConfig
Updates the EkmConfig singleton resource for a given project and location.
UpdateEkmConnection
Updates an EkmConnection 's metadata.
VerifyConnectivity
Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection .
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-02 UTC."],[],[]]
