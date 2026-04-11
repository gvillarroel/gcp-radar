---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:26:39.872Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "IAM custom roles for Cloud KMS"
feature_slug: "iam-custom-roles-for-cloud-kms"
latest_feature_date: "2018-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/release-notes"
  - "https://docs.cloud.google.com/kms/docs/custom-org-policies"
  - "https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles"
keywords:
  - "iam"
  - "custom"
  - "roles"
  - "for"
  - "kms"
  - "supports"
  - "as"
  - "generally"
---

# IAM custom roles for Cloud KMS

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS supports IAM custom roles as a generally available feature.

## Extended Definition

Cloud KMS supports IAM custom roles as a generally available feature.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/release-notes](https://docs.cloud.google.com/kms/docs/release-notes)
- [https://docs.cloud.google.com/kms/docs/custom-org-policies](https://docs.cloud.google.com/kms/docs/custom-org-policies)
- [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles)

## Supporting Pages

### "Cloud KMS release notes \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/release-notes](https://docs.cloud.google.com/kms/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The ImportJob resource contains the following methods: ImportJobs.create ImportJobs.get ImportJobs.getIamPolicy ImportJobs.list ImportJobs.setIamPolicy ImportJobs.testIamPermissions The ImportJob resource contains the following enums: ImportJobState ImportMethod The ImportJob resource contains the following type: WrappingPublicKey New methods CryptoKeyVersions.import New fields CreateCryptoKeyRequest.skip initial version creation CryptoKeyVersions.import failure reason CryptoKeyVersions.import job CryptoKeyVersions.import time New enums CryptoKeyVersionState.PENDING IMPORT CryptoKeyVersionState.IMPORT FAILED New permissions cloudkms.cryptoKeyVersions.useToImport cloudkms.importJobs.create cloudkms.importJobs.get cloudkms.importJobs.getIamPolicy cloudkms.importJobs.list cloudkms.importJobs.setIamPolicy For more information about Cloud KMS permissions, see Permissions and roles .
- January 31, 2018 Feature Announced general availability of IAM custom roles for Cloud KMS.
- February 21, 2025 Feature Cloud KMS now supports the following post-quantum computing (PQC) algorithms for digital signatures in Public Preview: PQ SIGN ML DSA 65 : Module-lattice-based digital signature algorithm PQ SIGN SLH DSA SHA2 128S : Stateless hash-based digital signature algorithm To Retrieve a public key for a PQC key, you must use the gcloud CLI or the Cloud KMS REST API.
- Change As part of gcloud 158.0.0 , when using gcloud to update IAM policies, data access logs can be enabled for key rings and keys, in addition to projects which were already supported. gcloud kms keyrings set-iam-policy gcloud kms keys set-iam-policy May 31, 2017 Feature Added encrypt and decrypt commands to gcloud beta kms as part of gcloud 157.0.0 .

### "Create custom organization policy constraints for Cloud KMS \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/custom-org-policies](https://docs.cloud.google.com/kms/docs/custom-org-policies)
- Source ID: `site-iam-reference`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure OpenSSL for manual key wrapping Wrap a key using OpenSSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page About organization policies and constraints Policy inheritance Before you begin Required roles Set up a custom constraint Enforce a custom organization policy Example custom organization policies for common use cases Cloud Key Management Service supported resources What's next Home Documentation Security Cloud KMS Guides Was this helpful?
- On this page About organization policies and constraints Policy inheritance Before you begin Required roles Set up a custom constraint Enforce a custom organization policy Example custom organization policies for common use cases Cloud Key Management Service supported resources What's next This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: cloudkms.googleapis.com/KeyHandle cloudkms.googleapis.com/AutokeyConfig cloudkms.googleapis.com/CryptoKey cloudkms.googleapis.com/CryptoKeyVersion cloudkms.googleapis.com/EkmConnection cloudkms.googleapis.com/EkmConfig cloudkms.googleapis.com/ImportJob To learn more about Organization Policy, see Custom organization policies .
- Create custom organization policy constraints for Cloud KMS Cloud Key Management Service Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools More / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
- Required roles To get the permissions that you need to manage custom organization policies, ask your administrator to grant you the Organization Policy Administrator ( roles/orgpolicy.policyAdmin ) IAM role on the organization resource.

### "Permissions and roles \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles)
- Source ID: `site-api-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Cloud KMS All APIs & references API client libraries PKCS #11 library Overview Use OpenSSL Apache TLS termination NGINX TLS offload Use pkcs11-tool Sign Windows artifacts with Jsign Windows CNG Provider Overview Signing Windows artifacts Permissions and roles Cloud EKM error reference Overview KMS REST reference Overview v1 REST Resources folders Overview getAutokeyConfig getKajPolicyConfig updateAutokeyConfig updateKajPolicyConfig organizations Overview getKajPolicyConfig updateKajPolicyConfig projects Overview getAutokeyConfig getKajPolicyConfig showEffectiveAutokeyConfig showEffectiveKeyAccessJustificationsEnrollmentConfig showEffectiveKeyAccessJustificationsPolicyConfig updateAutokeyConfig updateKajPolicyConfig projects.locations Overview generateRandomBytes get getEkmConfig list updateEkmConfig projects.locations.ekmConfig Overview getIamPolicy setIamPolicy testIamPermissions projects.locations.ekmConnections Overview create get getIamPolicy list patch setIamPolicy testIamPermissions verifyConnectivity projects.locations.keyHandles Overview create get list projects.locations.keyRings Overview create get getIamPolicy list setIamPolicy testIamPermissions projects.locations.keyRings.cryptoKeys Overview create decrypt delete encrypt get getIamPolicy list patch setIamPolicy testIamPermissions updatePrimaryVersion projects.locations.keyRings.cryptoKeys.cryptoKeyVersions Overview asymmetricDecrypt asymmetricSign create decapsulate delete destroy get getPublicKey import list macSign macVerify patch rawDecrypt rawEncrypt restore projects.locations.keyRings.importJobs Overview create get getIamPolicy list setIamPolicy testIamPermissions projects.locations.operations Overview get projects.locations.retiredResources Overview get list projects.locations.singleTenantHsmInstances Overview create get list projects.locations.singleTenantHsmInstances.proposals Overview approve create delete execute get list Types AutokeyConfig CryptoKeyVersionAlgorithm CryptoKeyVersionView EkmConfig GetPolicyOptions KeyAccessJustificationsPolicyConfig KeyOperationAttestation Location Policy ProtectionLevel TestIamPermissionsResponse KMS Inventory REST reference Overview v1 REST Resources organizations.protectedResources Overview search projects.cryptoKeys Overview list projects.locations.keyRings.cryptoKeys Overview getProtectedResourcesSummary KMS RPC reference Overview google.cloud.kms.v1 google.cloud.location google.iam.v1 google.longrunning google.rpc google.type AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Resource hierarchy Security principles Predefined roles Custom roles General guidelines for managing access in Cloud KMS Checking permissions What's next Home Documentation Security Cloud KMS Reference Was this helpful?
- Lowest-level resources where you can grant this role: CryptoKey cloudkms.autokeyConfigs. cloudkms.autokeyConfigs.get cloudkms.autokeyConfigs.update cloudkms. cryptoKeyVersions. create cloudkms. cryptoKeyVersions. delete cloudkms. cryptoKeyVersions. destroy cloudkms.cryptoKeyVersions.get cloudkms. cryptoKeyVersions. list cloudkms. cryptoKeyVersions. restore cloudkms. cryptoKeyVersions. update cloudkms. cryptoKeyVersions. useToDecryptViaDelegation cloudkms. cryptoKeyVersions. useToEncryptViaDelegation cloudkms.cryptoKeys. cloudkms.cryptoKeys.create cloudkms.cryptoKeys.delete cloudkms.cryptoKeys.get cloudkms. cryptoKeys. getIamPolicy cloudkms.cryptoKeys.list cloudkms. cryptoKeys. setIamPolicy cloudkms.cryptoKeys.update cloudkms.ekmConfigs. cloudkms.ekmConfigs.get cloudkms. ekmConfigs. getIamPolicy cloudkms. ekmConfigs. setIamPolicy cloudkms.ekmConfigs.update cloudkms.ekmConnections. cloudkms.ekmConnections.create cloudkms.ekmConnections.get cloudkms. ekmConnections. getIamPolicy cloudkms.ekmConnections.list cloudkms. ekmConnections. setIamPolicy cloudkms.ekmConnections.update cloudkms.ekmConnections.use cloudkms. ekmConnections. verifyConnectivity cloudkms.importJobs. cloudkms.importJobs.create cloudkms.importJobs.get cloudkms. importJobs. getIamPolicy cloudkms.importJobs.list cloudkms. importJobs. setIamPolicy cloudkms. importJobs. useToImport cloudkms.kajPolicyConfigs. cloudkms.kajPolicyConfigs.get cloudkms. kajPolicyConfigs. update cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.keyRings. cloudkms.keyRings.create cloudkms. keyRings. createTagBinding cloudkms. keyRings. deleteTagBinding cloudkms.keyRings.get cloudkms.keyRings.getIamPolicy cloudkms.keyRings.list cloudkms. keyRings. listEffectiveTags cloudkms. keyRings. listTagBindings cloudkms.keyRings.setIamPolicy cloudkms.locations.get cloudkms.locations.list cloudkms. locations. optOutKeyDeletionMsa cloudkms.operations.get cloudkms.projects. cloudkms. projects. showEffectiveAutokeyConfig cloudkms. projects. showEffectiveKajEnrollmentConfig cloudkms. projects. showEffectiveKajPolicyConfig cloudkms.retiredResources. cloudkms.retiredResources.get cloudkms.retiredResources.list cloudkms. singleTenantHsmInstanceProposals. delete cloudkms. singleTenantHsmInstanceProposals. get cloudkms. singleTenantHsmInstanceProposals. list cloudkms. singleTenantHsmInstances. cloudkms. singleTenantHsmInstances. create cloudkms. singleTenantHsmInstances. get cloudkms. singleTenantHsmInstances. list cloudkms. singleTenantHsmInstances. use resourcemanager.projects.get Cloud KMS Autokey Admin ( roles/ cloudkms.autokeyAdmin ) Enables management of AutokeyConfig. cloudkms.autokeyConfigs. cloudkms.autokeyConfigs.get cloudkms.autokeyConfigs.update cloudkms. projects. showEffectiveAutokeyConfig Cloud KMS Autokey User ( roles/ cloudkms.autokeyUser ) Grants ability to use KeyHandle resources. cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig Cloud KMS CryptoKey Decrypter ( roles/ cloudkms.cryptoKeyDecrypter ) Provides ability to use Cloud KMS resources for decrypt operations only.
- Warning: Do not grant service agent roles to any principals except service agents . cloudasset. assets. listCloudkmsCryptoKeys cloudasset.assets.listResource cloudasset. assets. searchAllIamPolicies cloudasset. assets. searchAllResources cloudkms.cryptoKeys.create cloudkms. cryptoKeys. getIamPolicy cloudkms. cryptoKeys. setIamPolicy cloudkms.keyRings.create cloudkms.keyRings.get Cloud KMS CryptoKey Signer ( roles/ cloudkms.signer ) Enables Sign operations Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. useToSign cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS CryptoKey Signer/Verifier ( roles/ cloudkms.signerVerifier ) Enables Sign, Verify, and GetPublicKey operations Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. useToSign cloudkms. cryptoKeyVersions. useToVerify cloudkms. cryptoKeyVersions. viewPublicKey cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS CryptoKey Verifier ( roles/ cloudkms.verifier ) Enables Verify and GetPublicKey operations Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. useToVerify cloudkms. cryptoKeyVersions. viewPublicKey cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS Viewer ( roles/ cloudkms.viewer ) Enables Get and List operations.
- Warning: Do not grant service agent roles to any principals except service agents . cloudasset.assets.listResource cloudasset. assets. searchAllIamPolicies cloudasset. assets. searchAllResources Cloud KMS Protected Resources Viewer ( roles/ cloudkms.protectedResourcesViewer ) Enables viewing protected resources. cloudkms. protectedResources. search Cloud KMS CryptoKey Public Key Viewer ( roles/ cloudkms.publicKeyViewer ) Enables GetPublicKey operations Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. viewPublicKey cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS Service Agent ( roles/ cloudkms.serviceAgent ) Gives Cloud KMS service account access to managed resources.

