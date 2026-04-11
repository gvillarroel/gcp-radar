---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:26:39.819Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "KMS Inventory REST API"
feature_slug: "kms-inventory-rest-api"
latest_feature_date: "2023-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/release-notes"
  - "https://docs.cloud.google.com/kms/docs/reference/inventory/rest"
  - "https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory"
keywords:
  - "kms"
  - "inventory"
  - "rest"
  - "api"
  - "the"
  - "lets"
  - "you"
  - "programmatically"
---

# KMS Inventory REST API

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

The KMS Inventory REST API lets you programmatically view key inventory and usage information; The KMS Inventory REST API lets you programmatically view key inventory and usage information.

## Extended Definition

The KMS Inventory REST API lets you programmatically view key inventory and usage information; The KMS Inventory REST API lets you programmatically view key inventory and usage information.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/release-notes](https://docs.cloud.google.com/kms/docs/release-notes)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest](https://docs.cloud.google.com/kms/docs/reference/inventory/rest)
- [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)

## Supporting Pages

### "Cloud KMS release notes \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/release-notes](https://docs.cloud.google.com/kms/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- February 21, 2025 Feature Cloud KMS now supports the following post-quantum computing (PQC) algorithms for digital signatures in Public Preview: PQ SIGN ML DSA 65 : Module-lattice-based digital signature algorithm PQ SIGN SLH DSA SHA2 128S : Stateless hash-based digital signature algorithm To Retrieve a public key for a PQC key, you must use the gcloud CLI or the Cloud KMS REST API.
- May 22, 2023 Feature The Key Usage dashboard in the Google Cloud console and the new KMS Inventory REST API are now generally available.
- December 09, 2022 Feature The Key Usage dashboard in the Google Cloud console and the new KMS Inventory REST API are now in Preview.
- For example curl commands using the KMS Inventory REST API, see View key usage and View keys by project .

### "KMS Inventory API \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest](https://docs.cloud.google.com/kms/docs/reference/inventory/rest)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://kmsinventory.googleapis.com REST Resource: v1. organizations. protected Resources Methods search GET / v1/ {scope=organizations/ }/ protected Resources:search Returns metadata about the resources protected by the given Cloud KMS Crypto Key in the given Cloud organization.
- This service provides the following discovery document: https://kmsinventory.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Cloud KMS All APIs & references API client libraries PKCS #11 library Overview Use OpenSSL Apache TLS termination NGINX TLS offload Use pkcs11-tool Sign Windows artifacts with Jsign Windows CNG Provider Overview Signing Windows artifacts Permissions and roles Cloud EKM error reference Overview KMS REST reference Overview v1 REST Resources folders Overview getAutokeyConfig getKajPolicyConfig updateAutokeyConfig updateKajPolicyConfig organizations Overview getKajPolicyConfig updateKajPolicyConfig projects Overview getAutokeyConfig getKajPolicyConfig showEffectiveAutokeyConfig showEffectiveKeyAccessJustificationsEnrollmentConfig showEffectiveKeyAccessJustificationsPolicyConfig updateAutokeyConfig updateKajPolicyConfig projects.locations Overview generateRandomBytes get getEkmConfig list updateEkmConfig projects.locations.ekmConfig Overview getIamPolicy setIamPolicy testIamPermissions projects.locations.ekmConnections Overview create get getIamPolicy list patch setIamPolicy testIamPermissions verifyConnectivity projects.locations.keyHandles Overview create get list projects.locations.keyRings Overview create get getIamPolicy list setIamPolicy testIamPermissions projects.locations.keyRings.cryptoKeys Overview create decrypt delete encrypt get getIamPolicy list patch setIamPolicy testIamPermissions updatePrimaryVersion projects.locations.keyRings.cryptoKeys.cryptoKeyVersions Overview asymmetricDecrypt asymmetricSign create decapsulate delete destroy get getPublicKey import list macSign macVerify patch rawDecrypt rawEncrypt restore projects.locations.keyRings.importJobs Overview create get getIamPolicy list setIamPolicy testIamPermissions projects.locations.operations Overview get projects.locations.retiredResources Overview get list projects.locations.singleTenantHsmInstances Overview create get list projects.locations.singleTenantHsmInstances.proposals Overview approve create delete execute get list Types AutokeyConfig CryptoKeyVersionAlgorithm CryptoKeyVersionView EkmConfig GetPolicyOptions KeyAccessJustificationsPolicyConfig KeyOperationAttestation Location Policy ProtectionLevel TestIamPermissionsResponse KMS Inventory REST reference Overview v1 REST Resources organizations.protectedResources Overview search projects.cryptoKeys Overview list projects.locations.keyRings.cryptoKeys Overview getProtectedResourcesSummary KMS RPC reference Overview google.cloud.kms.v1 google.cloud.location google.iam.v1 google.longrunning google.rpc google.type AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Service: kmsinventory.googleapis.com Discovery document Service endpoint REST Resource: v1.organizations.protectedResources REST Resource: v1.projects.cryptoKeys REST Resource: v1.projects.locations.keyRings.cryptoKeys Home Documentation Security Cloud KMS Reference Was this helpful?
- KMS Inventory API Cloud Key Management Service Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools More / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Google Developer Program View your saved pages and finish your Google Developer Profile setup here.

### "Cloud KMS Inventory Service audit logging \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- Source ID: `site-iam-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure OpenSSL for manual key wrapping Wrap a key using OpenSSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Service name Methods by permission type API interface audit logs google.cloud.kms.inventory.v1.KeyDashboardService google.cloud.kms.inventory.v1.KeyTrackingService Home Documentation Security Cloud KMS Guides Was this helpful?
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Cloud KMS Inventory Service audit logs use the service name kmsinventory.googleapis.com .
- Light code theme Dark code theme protoPayload . serviceName = "kmsinventory.googleapis.com" Methods by permission type Each IAM permission has a type property, whose value is an enum that can be one of four values: ADMIN READ , ADMIN WRITE , DATA READ , or DATA WRITE .
- API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud KMS Inventory Service. google. cloud. kms. inventory. v1.

