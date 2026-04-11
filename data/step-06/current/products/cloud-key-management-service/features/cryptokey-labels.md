---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:26:39.874Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "CryptoKey labels"
feature_slug: "cryptokey-labels"
latest_feature_date: "2017-09-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1"
  - "https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys"
  - "https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys"
keywords:
  - "cryptokey"
  - "labels"
  - "kms"
  - "cryptokeys"
  - "user"
  - "defined"
  - "through"
  - "the"
---

# CryptoKey labels

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS CryptoKeys support user-defined labels through the labels field.

## Extended Definition

Cloud KMS CryptoKeys support user-defined labels through the labels field.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1](https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1)
- [https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)

## Supporting Pages

### "Package google.cloud.kms.v1 \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1](https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Setting a configuration on a folder is a prerequisite for Cloud KMS Autokey, so that users working in a descendant project can request provisioned CryptoKeys , ready for Customer Managed Encryption Key (CMEK) use, on-demand when using the dedicated key project mode.
- The properties of new CryptoKeyVersion instances created by either CreateCryptoKeyVersion or auto-rotation are controlled by this template. labels map<string, string> Labels with user-defined metadata.
- Authorization requires the following IAM permission on the specified resource name : cloudkms.cryptoKeys.get GetCryptoKeyVersionRequest Request message for KeyManagementService.GetCryptoKeyVersion .
- Prior to use in a given resource project, UpdateAutokeyConfig should have been called on an ancestor folder, setting the key project where Cloud KMS Autokey should create new CryptoKeys .

### "REST Resource: projects.locations.keyRings.cryptoKeys \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The properties of new CryptoKeyVersion instances created by either cryptoKeyVersions.create or auto-rotation are controlled by this template. labels map (key: string, value: string) Labels with user-defined metadata.
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Cloud KMS All APIs & references API client libraries PKCS #11 library Overview Use OpenSSL Apache TLS termination NGINX TLS offload Use pkcs11-tool Sign Windows artifacts with Jsign Windows CNG Provider Overview Signing Windows artifacts Permissions and roles Cloud EKM error reference Overview KMS REST reference Overview v1 REST Resources folders Overview getAutokeyConfig getKajPolicyConfig updateAutokeyConfig updateKajPolicyConfig organizations Overview getKajPolicyConfig updateKajPolicyConfig projects Overview getAutokeyConfig getKajPolicyConfig showEffectiveAutokeyConfig showEffectiveKeyAccessJustificationsEnrollmentConfig showEffectiveKeyAccessJustificationsPolicyConfig updateAutokeyConfig updateKajPolicyConfig projects. locations Overview generateRandomBytes get getEkmConfig list updateEkmConfig projects. locations. ekm Config Overview getIamPolicy setIamPolicy testIamPermissions projects. locations. ekm Connections Overview create get getIamPolicy list patch setIamPolicy testIamPermissions verifyConnectivity projects. locations. key Handles Overview create get list projects. locations. key Rings Overview create get getIamPolicy list setIamPolicy testIamPermissions projects. locations. key Rings. crypto Keys Overview create decrypt delete encrypt get get Iam Policy list patch set Iam Policy test Iam Permissions update Primary Version projects. locations. key Rings. crypto Keys. crypto Key Versions Overview asymmetricDecrypt asymmetricSign create decapsulate delete destroy get getPublicKey import list macSign macVerify patch rawDecrypt rawEncrypt restore projects. locations. key Rings. import Jobs Overview create get getIamPolicy list setIamPolicy testIamPermissions projects.locations.operations Overview get projects.locations.retiredResources Overview get list projects.locations.singleTenantHsmInstances Overview create get list projects.locations.singleTenantHsmInstances.proposals Overview approve create delete execute get list Types AutokeyConfig CryptoKeyVersionAlgorithm CryptoKeyVersionView EkmConfig GetPolicyOptions KeyAccessJustificationsPolicyConfig KeyOperationAttestation Location Policy ProtectionLevel TestIamPermissionsResponse KMS Inventory REST reference Overview v1 REST Resources organizations.protectedResources Overview search projects.cryptoKeys Overview list projects.locations.keyRings.cryptoKeys Overview getProtectedResourcesSummary KMS RPC reference Overview google.cloud.kms.v1 google.cloud.location google.iam.v1 google.longrunning google.rpc google.type AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Resource: CryptoKey CryptoKeyPurpose CryptoKeyVersionTemplate KeyAccessJustificationsPolicy AccessReason Methods create decrypt delete encrypt get getIamPolicy list patch setIamPolicy testIamPermissions updatePrimaryVersion Home Documentation Security Cloud KMS Reference Was this helpful?
- Methods create Create a new CryptoKey within a KeyRing . decrypt Decrypts data that was protected by Encrypt . delete Permanently deletes the given CryptoKey . encrypt Encrypts data, so that it can only be recovered by a call to Decrypt . get Returns metadata for a given CryptoKey , as well as its primary CryptoKeyVersion . getIamPolicy Gets the access control policy for a resource. list Lists CryptoKeys . patch Update a CryptoKey . setIamPolicy Sets the access control policy on the specified resource. testIamPermissions Returns permissions that a caller has on the specified resource. updatePrimaryVersion Update the version of a CryptoKey that will be used in Encrypt .
- Light code theme Dark code theme { "name" : string , "primary" : { object ( CryptoKeyVersion ) } , "purpose" : enum ( CryptoKeyPurpose ) , "createTime" : string , "nextRotationTime" : string , "versionTemplate" : { object ( CryptoKeyVersionTemplate ) } , "labels" : { string : string , ... } , "importOnly" : boolean , "destroyScheduledDuration" : string , "cryptoKeyBackend" : string , "keyAccessJustificationsPolicy" : { object ( KeyAccessJustificationsPolicy ) } , // Union field rotation schedule can be only one of the following: "rotationPeriod" : string // End of list of possible types for union field rotation schedule . } Fields name string Output only.

### "REST Resource: projects.cryptoKeys \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- Source ID: `site-api-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The properties of new CryptoKeyVersion instances created by either [CreateCryptoKeyVersion][KeyManagementService.CreateCryptoKeyVersion] or auto-rotation are controlled by this template. labels map (key: string, value: string) Labels with user-defined metadata.
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Cloud KMS All APIs & references API client libraries PKCS #11 library Overview Use OpenSSL Apache TLS termination NGINX TLS offload Use pkcs11-tool Sign Windows artifacts with Jsign Windows CNG Provider Overview Signing Windows artifacts Permissions and roles Cloud EKM error reference Overview KMS REST reference Overview v1 REST Resources folders Overview getAutokeyConfig getKajPolicyConfig updateAutokeyConfig updateKajPolicyConfig organizations Overview getKajPolicyConfig updateKajPolicyConfig projects Overview getAutokeyConfig getKajPolicyConfig showEffectiveAutokeyConfig showEffectiveKeyAccessJustificationsEnrollmentConfig showEffectiveKeyAccessJustificationsPolicyConfig updateAutokeyConfig updateKajPolicyConfig projects.locations Overview generateRandomBytes get getEkmConfig list updateEkmConfig projects.locations.ekmConfig Overview getIamPolicy setIamPolicy testIamPermissions projects.locations.ekmConnections Overview create get getIamPolicy list patch setIamPolicy testIamPermissions verifyConnectivity projects.locations.keyHandles Overview create get list projects.locations.keyRings Overview create get getIamPolicy list setIamPolicy testIamPermissions projects.locations.keyRings.cryptoKeys Overview create decrypt delete encrypt get getIamPolicy list patch setIamPolicy testIamPermissions updatePrimaryVersion projects.locations.keyRings.cryptoKeys.cryptoKeyVersions Overview asymmetricDecrypt asymmetricSign create decapsulate delete destroy get getPublicKey import list macSign macVerify patch rawDecrypt rawEncrypt restore projects.locations.keyRings.importJobs Overview create get getIamPolicy list setIamPolicy testIamPermissions projects.locations.operations Overview get projects.locations.retiredResources Overview get list projects.locations.singleTenantHsmInstances Overview create get list projects.locations.singleTenantHsmInstances.proposals Overview approve create delete execute get list Types AutokeyConfig CryptoKeyVersionAlgorithm CryptoKeyVersionView EkmConfig GetPolicyOptions KeyAccessJustificationsPolicyConfig KeyOperationAttestation Location Policy ProtectionLevel TestIamPermissionsResponse KMS Inventory REST reference Overview v1 REST Resources organizations. protected Resources Overview search projects. crypto Keys Overview list projects. locations. key Rings. crypto Keys Overview getProtectedResourcesSummary KMS RPC reference Overview google.cloud.kms.v1 google.cloud.location google.iam.v1 google.longrunning google.rpc google.type AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Resource: CryptoKey CryptoKeyVersion CryptoKeyVersionState ProtectionLevel CryptoKeyVersionAlgorithm KeyOperationAttestation AttestationFormat CertificateChains ExternalProtectionLevelOptions CryptoKeyPurpose CryptoKeyVersionTemplate Methods list Home Documentation Security Cloud KMS Reference Was this helpful?
- Light code theme Dark code theme { "name" : string , "primary" : { object ( CryptoKeyVersion ) } , "purpose" : enum ( CryptoKeyPurpose ) , "createTime" : string , "nextRotationTime" : string , "versionTemplate" : { object ( CryptoKeyVersionTemplate ) } , "labels" : { string : string , ... } , "importOnly" : boolean , "destroyScheduledDuration" : string , "cryptoKeyBackend" : string , // Union field rotation schedule can be only one of the following: "rotationPeriod" : string // End of list of possible types for union field rotation schedule . } Fields name string Output only.
- The resource name for this CryptoKeyVersion in the format projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ . state enum ( CryptoKeyVersionState ) The current state of the CryptoKeyVersion . protectionLevel enum ( ProtectionLevel ) Output only.

