---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.001Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS Autokey for projects"
feature_slug: "cloud-kms-autokey-for-projects"
latest_feature_date: "2026-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/autokey-overview"
  - "https://docs.cloud.google.com/kms/docs/create-resource-with-autokey"
  - "https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys"
  - "https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles"
keywords:
  - "kms"
  - "autokey"
  - "for"
  - "projects"
  - "enables"
  - "delegated"
  - "key"
  - "management"
---

# Cloud KMS Autokey for projects

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS Autokey for projects enables delegated key management by creating Autokey-managed keys in the same project as the protected resources.

## Extended Definition

Cloud KMS Autokey for projects enables delegated key management by creating Autokey-managed keys in the same project as the protected resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/autokey-overview](https://docs.cloud.google.com/kms/docs/autokey-overview)
- [https://docs.cloud.google.com/kms/docs/create-resource-with-autokey](https://docs.cloud.google.com/kms/docs/create-resource-with-autokey)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys)
- [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles)

## Supporting Pages

### Autokey overview \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/autokey-overview](https://docs.cloud.google.com/kms/docs/autokey-overview)
- Source ID: `site-iam-reference`
- Final score: 301
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This applies to projects in a folder where Autokey is enabled for centralized key management and projects where Autokey is enabled for delegated, same-project key management.
- Before you can use Autokey for delegated key management, an administrator must complete the following one-time setup tasks: Enable Cloud KMS Autokey on a project or folder.
- Delegated key management model ( Preview ): You can enable Autokey on individual projects or for all projects within a folder to use same-project Autokey.
- When Cloud KMS Autokey is enabled on a project for delegated key management, the Cloud KMS service agent is created for you when needed.

### "Create protected resources using Cloud KMS Autokey \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/create-resource-with-autokey](https://docs.cloud.google.com/kms/docs/create-resource-with-autokey)
- Source ID: `site-iam-reference`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Before you can create protected resources using Autokey, you must complete the following steps to prepare: If you don't already have a project where Autokey is enabled for either centralized or delegated key management, then you must first complete the setup steps in Enable Cloud KMS Autokey , and then return to this document.
- The output is similar to the following: { "name" : "projects/ RESOURCE PROJECT ID /locations/ LOCATION /operations/ OPERATION ID " , "done" : true , "response" : { "@type" : "type.googleapis.com/google.cloud.kms.v1.KeyHandle" , "name" : "projects/ RESOURCE PROJECT ID /locations/ LOCATION /keyHandles/ KEY HANDLE " , "kmsKey" : "projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/autokey/cryptoKeys/ KEY NAME " , "resourceTypeSelector" : " RESOURCE TYPE " } } The value of the kmsKey element in the output is the full resource ID of the key created by Autokey for this resource.
- The output is similar to the following: { "name" : "projects/ RESOURCE PROJECT ID /locations/ LOCATION /operations/ OPERATION ID " , "done" : true , "response" : { "@type" : "type.googleapis.com/google.cloud.kms.v1.KeyHandle" , "name" : "projects/ RESOURCE PROJECT ID /locations/ LOCATION /keyHandles/ KEY HANDLE " , "kmsKey" : "projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/autokey/cryptoKeys/ KEY NAME " , "resourceTypeSelector" : " RESOURCE TYPE " } } The value of the kmsKey element in the output is the full resource ID of the key created by Autokey for this resource.
- The output is similar to the following: { "name" : "projects/ RESOURCE PROJECT ID /locations/ LOCATION /operations/ OPERATION ID " , "done" : true , "response" : { "@type" : "type.googleapis.com/google.cloud.kms.v1.KeyHandle" , "name" : "projects/ RESOURCE PROJECT ID /locations/ LOCATION /keyHandles/ KEY HANDLE " , "kmsKey" : "projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/autokey/cryptoKeys/ KEY NAME " , "resourceTypeSelector" : " RESOURCE TYPE " } } The value of the kmsKey element in the output is the full resource ID of the key created by Autokey for this resource.

### "REST Resource: projects.locations.keyRings.cryptoKeys \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys)
- Source ID: `site-api-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key rotations performed manually via [CreateCryptoKeyVersion][KeyManagementService.CreateCryptoKeyVersion] and [UpdateCryptoKeyPrimaryVersion][KeyManagementService.UpdateCryptoKeyPrimaryVersion] do not affect nextRotationTime .
- Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" . nextRotationTime string ( Timestamp format) At nextRotationTime , the Key Management Service will automatically: Create a new version of this CryptoKey .
- Only applicable if CryptoKeyVersions have a ProtectionLevel of [EXTERNAL VPC][CryptoKeyVersion.ProtectionLevel.EXTERNAL VPC], with the resource name in the format projects/ /locations/ /ekmConnections/ .
- Home Documentation Security Cloud KMS Reference Send feedback REST Resource: projects.locations.keyRings.cryptoKeys Stay organized with collections Save and categorize content based on your preferences.

### "Permissions and roles \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles)
- Source ID: `site-api-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Lowest-level resources where you can grant this role: CryptoKey cloudkms.autokeyConfigs.get cloudkms.cryptoKeyVersions.get cloudkms. cryptoKeyVersions. list cloudkms.cryptoKeys.get cloudkms.cryptoKeys.list cloudkms.ekmConfigs.get cloudkms.ekmConnections.get cloudkms.ekmConnections.list cloudkms.importJobs.get cloudkms.importJobs.list cloudkms.kajPolicyConfigs.get cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.keyRings.get cloudkms.keyRings.list cloudkms.locations.get cloudkms.locations.list cloudkms.operations.get cloudkms.retiredResources. cloudkms.retiredResources.get cloudkms.retiredResources.list cloudkms. singleTenantHsmInstanceProposals. get cloudkms. singleTenantHsmInstanceProposals. list cloudkms. singleTenantHsmInstances. get cloudkms. singleTenantHsmInstances. list resourcemanager.projects.get Cloud KMS Autokey Admin ( roles/ cloudkms.autokeyAdmin ) Enables management of AutokeyConfig. cloudkms.autokeyConfigs. cloudkms.autokeyConfigs.get cloudkms.autokeyConfigs.update cloudkms. projects. showEffectiveAutokeyConfig Cloud KMS Autokey User ( roles/ cloudkms.autokeyUser ) Grants ability to use KeyHandle resources. cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig Cloud KMS CryptoKey Decrypter ( roles/ cloudkms.cryptoKeyDecrypter ) Provides ability to use Cloud KMS resources for decrypt operations only.
- Lowest-level resources where you can grant this role: CryptoKey cloudkms.autokeyConfigs. cloudkms.autokeyConfigs.get cloudkms.autokeyConfigs.update cloudkms. cryptoKeyVersions. create cloudkms. cryptoKeyVersions. delete cloudkms. cryptoKeyVersions. destroy cloudkms.cryptoKeyVersions.get cloudkms. cryptoKeyVersions. list cloudkms. cryptoKeyVersions. restore cloudkms. cryptoKeyVersions. update cloudkms. cryptoKeyVersions. useToDecryptViaDelegation cloudkms. cryptoKeyVersions. useToEncryptViaDelegation cloudkms.cryptoKeys. cloudkms.cryptoKeys.create cloudkms.cryptoKeys.delete cloudkms.cryptoKeys.get cloudkms. cryptoKeys. getIamPolicy cloudkms.cryptoKeys.list cloudkms. cryptoKeys. setIamPolicy cloudkms.cryptoKeys.update cloudkms.ekmConfigs. cloudkms.ekmConfigs.get cloudkms. ekmConfigs. getIamPolicy cloudkms. ekmConfigs. setIamPolicy cloudkms.ekmConfigs.update cloudkms.ekmConnections. cloudkms.ekmConnections.create cloudkms.ekmConnections.get cloudkms. ekmConnections. getIamPolicy cloudkms.ekmConnections.list cloudkms. ekmConnections. setIamPolicy cloudkms.ekmConnections.update cloudkms.ekmConnections.use cloudkms. ekmConnections. verifyConnectivity cloudkms.importJobs. cloudkms.importJobs.create cloudkms.importJobs.get cloudkms. importJobs. getIamPolicy cloudkms.importJobs.list cloudkms. importJobs. setIamPolicy cloudkms. importJobs. useToImport cloudkms.kajPolicyConfigs. cloudkms.kajPolicyConfigs.get cloudkms. kajPolicyConfigs. update cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.keyRings. cloudkms.keyRings.create cloudkms. keyRings. createTagBinding cloudkms. keyRings. deleteTagBinding cloudkms.keyRings.get cloudkms.keyRings.getIamPolicy cloudkms.keyRings.list cloudkms. keyRings. listEffectiveTags cloudkms. keyRings. listTagBindings cloudkms.keyRings.setIamPolicy cloudkms.locations.get cloudkms.locations.list cloudkms. locations. optOutKeyDeletionMsa cloudkms.operations.get cloudkms.projects. cloudkms. projects. showEffectiveAutokeyConfig cloudkms. projects. showEffectiveKajEnrollmentConfig cloudkms. projects. showEffectiveKajPolicyConfig cloudkms.retiredResources. cloudkms.retiredResources.get cloudkms.retiredResources.list cloudkms. singleTenantHsmInstanceProposals. delete cloudkms. singleTenantHsmInstanceProposals. get cloudkms. singleTenantHsmInstanceProposals. list cloudkms. singleTenantHsmInstances. cloudkms. singleTenantHsmInstances. create cloudkms. singleTenantHsmInstances. get cloudkms. singleTenantHsmInstances. list cloudkms. singleTenantHsmInstances. use resourcemanager.projects.get Cloud KMS CryptoKey Encrypter/Decrypter ( roles/ cloudkms.cryptoKeyEncrypterDecrypter ) Provides ability to use Cloud KMS resources for encrypt and decrypt operations only.
- Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. useToDecapsulate cloudkms. cryptoKeyVersions. useToDecrypt cloudkms. cryptoKeyVersions. useToEncrypt cloudkms. cryptoKeyVersions. useToSign cloudkms. cryptoKeyVersions. useToVerify cloudkms. cryptoKeyVersions. viewPublicKey cloudkms. locations. generateRandomBytes cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS CryptoKey Decapsulator Beta ( roles/ cloudkms.decapsulator ) Enables Decapsulate and GetPublicKey operations cloudkms. cryptoKeyVersions. useToDecapsulate cloudkms. cryptoKeyVersions. viewPublicKey cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS EkmConnections Admin ( roles/ cloudkms.ekmConnectionsAdmin ) Enables management of EkmConnections. cloudkms.ekmConfigs.get cloudkms.ekmConfigs.update cloudkms.ekmConnections.create cloudkms.ekmConnections.get cloudkms.ekmConnections.list cloudkms.ekmConnections.update cloudkms. ekmConnections. verifyConnectivity resourcemanager.projects.get resourcemanager.projects.list Cloud KMS Expert PQ Asymmetric Signing Key Manager ( roles/ cloudkms.expertPqcSigner ) Enables PQ asymmetric signing key management. cloudkms. cryptoKeyVersions. managePqcSign cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get resourcemanager.projects.list Cloud KMS Expert Raw AES-CBC Key Manager ( roles/ cloudkms.expertRawAesCbc ) Enables raw AES-CBC keys management.
- Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. useToDecrypt cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS CryptoKey Decrypter Via Delegation ( roles/ cloudkms.cryptoKeyDecrypterViaDelegation ) Enables Decrypt operations via other Google Cloud services Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. useToDecryptViaDelegation cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get resourcemanager.projects.list Cloud KMS CryptoKey Encrypter ( roles/ cloudkms.cryptoKeyEncrypter ) Provides ability to use Cloud KMS resources for encrypt operations only.

