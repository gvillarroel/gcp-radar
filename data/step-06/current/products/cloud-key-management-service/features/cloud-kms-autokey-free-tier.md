---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:26:39.813Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS Autokey free tier"
feature_slug: "cloud-kms-autokey-free-tier"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/kms-autokey"
  - "https://docs.cloud.google.com/kms/docs/formatting-keys-for-import"
  - "https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions/getPublicKey"
keywords:
  - "kms"
  - "autokey"
  - "free"
  - "tier"
  - "includes"
  - "for"
  - "active"
  - "key"
---

# Cloud KMS Autokey free tier

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS Autokey includes a free tier for active key versions and cryptographic operations on Autokey-created keys.

## Extended Definition

Cloud KMS Autokey includes a free tier for active key versions and cryptographic operations on Autokey-created keys.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/kms-autokey](https://docs.cloud.google.com/kms/docs/kms-autokey)
- [https://docs.cloud.google.com/kms/docs/formatting-keys-for-import](https://docs.cloud.google.com/kms/docs/formatting-keys-for-import)
- [https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions/getPublicKey](https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions/getPublicKey)

## Supporting Pages

### "Cloud KMS with Autokey \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/kms-autokey](https://docs.cloud.google.com/kms/docs/kms-autokey)
- Source ID: `site-iam-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure OpenSSL for manual key wrapping Wrap a key using OpenSSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Choose between Autokey and other encryption options Centralized or delegated key management Compatible services What's next Home Documentation Security Cloud KMS Guides Was this helpful?
- One key per resource Dataflow dataflow.googleapis.com/Job One key per resource Dataproc dataproc.googleapis.com/Cluster dataproc.googleapis.com/SessionTemplate dataproc.googleapis.com/WorkflowTemplate dataproc.googleapis.com/Batch dataproc.googleapis.com/Session For Cluster, SessionTemplate, and WorkflowTemplate resources: One key per resource For Batch and Session resources: One key per location within a project What's next To learn more about how Cloud KMS Autokey works, see Autokey overview .
- Compatible services The following table lists services that are compatible with Cloud KMS Autokey: Service Protected resources Key granularity Artifact Registry artifactregistry.googleapis.com/Repository Autokey creates keys during Repository creation, used for all stored artifacts.
- One key per location within a project Secure Source Manager securesourcemanager.googleapis.com/Instance One key per resource Spanner spanner.googleapis.com/Database Spanner is only compatible with Cloud KMS Autokey when creating resources using Terraform or the REST API.

### "Formatting keys for import \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/formatting-keys-for-import](https://docs.cloud.google.com/kms/docs/formatting-keys-for-import)
- Source ID: `site-iam-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure OpenSSL for manual key wrapping Wrap a key using OpenSSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Supported key formats Checking a symmetric key Formatting asymmetric keys Troubleshooting What's next Home Documentation Security Cloud KMS Guides Was this helpful?
- On this page Supported key formats Checking a symmetric key Formatting asymmetric keys Troubleshooting What's next This topic describes how to format your keys so that they can be imported by Cloud KMS as new key versions.
- For that reason, we recommend that you run the following commands on each asymmetric key before attempting to import it into Cloud KMS.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]] Products and pricing See all products Google Cloud pricing Google Cloud Marketplace Contact sales Support Community forums Support Release Notes System status Resources GitHub Getting Started with Google Cloud Code samples Cloud Architecture Center Training and Certification Engage Blog Events X (Twitter) Google Cloud on YouTube Google Cloud Tech on YouTube About Google Privacy Site terms Google Cloud terms Manage cookies Our third decade of climate action: join us Sign up for the Google Cloud newsletter Subscribe English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 close Welcome to Cloud Shell Cloud Shell is a development environment that you can use in the browser: Activate Cloud Shell to explore Google Cloud with a terminal and an editor Start a free trial to get $300 in free credits Activate Cloud Shell Start a free trial

### "Method: cryptoKeyVersions.getPublicKey \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions/getPublicKey](https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions/getPublicKey)
- Source ID: `site-api-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Cloud KMS All APIs & references API client libraries PKCS #11 library Overview Use OpenSSL Apache TLS termination NGINX TLS offload Use pkcs11-tool Sign Windows artifacts with Jsign Windows CNG Provider Overview Signing Windows artifacts Permissions and roles Cloud EKM error reference Overview KMS REST reference Overview v1 REST Resources folders Overview getAutokeyConfig getKajPolicyConfig updateAutokeyConfig updateKajPolicyConfig organizations Overview getKajPolicyConfig updateKajPolicyConfig projects Overview getAutokeyConfig getKajPolicyConfig showEffectiveAutokeyConfig showEffectiveKeyAccessJustificationsEnrollmentConfig showEffectiveKeyAccessJustificationsPolicyConfig updateAutokeyConfig updateKajPolicyConfig projects.locations Overview generateRandomBytes get getEkmConfig list updateEkmConfig projects.locations.ekmConfig Overview getIamPolicy setIamPolicy testIamPermissions projects. locations. ekm Connections Overview create get getIamPolicy list patch setIamPolicy testIamPermissions verifyConnectivity projects. locations. key Handles Overview create get list projects. locations. key Rings Overview create get getIamPolicy list setIamPolicy testIamPermissions projects. locations. key Rings. crypto Keys Overview create decrypt delete encrypt get getIamPolicy list patch setIamPolicy testIamPermissions updatePrimaryVersion projects. locations. key Rings. crypto Keys. crypto Key Versions Overview asymmetric Decrypt asymmetric Sign create decapsulate delete destroy get get Public Key import list mac Sign mac Verify patch raw Decrypt raw Encrypt restore projects. locations. key Rings. import Jobs Overview create get getIamPolicy list setIamPolicy testIamPermissions projects. locations. operations Overview get projects. locations. retired Resources Overview get list projects. locations. single Tenant Hsm Instances Overview create get list projects. locations. single Tenant Hsm Instances. proposals Overview approve create delete execute get list Types AutokeyConfig CryptoKeyVersionAlgorithm CryptoKeyVersionView EkmConfig GetPolicyOptions KeyAccessJustificationsPolicyConfig KeyOperationAttestation Location Policy ProtectionLevel TestIamPermissionsResponse KMS Inventory REST reference Overview v1 REST Resources organizations.protectedResources Overview search projects.cryptoKeys Overview list projects.locations.keyRings.cryptoKeys Overview getProtectedResourcesSummary KMS RPC reference Overview google.cloud.kms.v1 google.cloud.location google.iam.v1 google.longrunning google.rpc google.type AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page HTTP request Path parameters Query parameters Request body Response body Authorization scopes PublicKeyFormat ChecksummedData Try it!
- Authorization requires the following IAM permission on the specified resource name : cloudkms.cryptoKeyVersions.viewPublicKey Query parameters Parameters public Key Format enum ( PublicKeyFormat ) Optional.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-11 UTC."],[],[]] Products and pricing See all products Google Cloud pricing Google Cloud Marketplace Contact sales Support Community forums Support Release Notes System status Resources GitHub Getting Started with Google Cloud Code samples Cloud Architecture Center Training and Certification Engage Blog Events X (Twitter) Google Cloud on YouTube Google Cloud Tech on YouTube About Google Privacy Site terms Google Cloud terms Manage cookies Our third decade of climate action: join us Sign up for the Google Cloud newsletter Subscribe English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 close Welcome to Cloud Shell Cloud Shell is a development environment that you can use in the browser: Activate Cloud Shell to explore Google Cloud with a terminal and an editor Start a free trial to get $300 in free credits Activate Cloud Shell Start a free trial
- If successful, the response body contains data with the following structure: JSON representation { "pem" : string , "algorithm" : enum ( CryptoKeyVersionAlgorithm ) , "pemCrc32c" : string , "name" : string , "protectionLevel" : enum ( ProtectionLevel ) , "publicKeyFormat" : enum ( PublicKeyFormat ) , "publicKey" : { object ( ChecksummedData ) } } Fields pem string The public key, encoded in PEM format.

