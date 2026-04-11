---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:26:39.841Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud EKM regional availability in asia-southeast2"
feature_slug: "cloud-ekm-regional-availability-in-asia-southeast2"
latest_feature_date: "2020-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/release-notes"
  - "https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys/getProtectedResourcesSummary"
  - "https://docs.cloud.google.com/kms/docs/set-up-ekm-internet"
keywords:
  - "ekm"
  - "regional"
  - "availability"
  - "in"
  - "asia"
  - "southeast2"
  - "resources"
  - "are"
---

# Cloud EKM regional availability in asia-southeast2

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud EKM resources are available in the asia-southeast2 region.

## Extended Definition

Cloud EKM resources are available in the asia-southeast2 region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/release-notes](https://docs.cloud.google.com/kms/docs/release-notes)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys/getProtectedResourcesSummary](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys/getProtectedResourcesSummary)
- [https://docs.cloud.google.com/kms/docs/set-up-ekm-internet](https://docs.cloud.google.com/kms/docs/set-up-ekm-internet)

## Supporting Pages

### "Cloud KMS release notes \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/release-notes](https://docs.cloud.google.com/kms/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- June 08, 2020 Feature Cloud KMS and Cloud EKM resources are available in the asia-southeast2 region.
- February 28, 2022 Feature Cloud HSM resources are now available in the following regions: asia1 eur3 eur4 nam3 nam4 nam6 nam9 For information about which locations are supported by Cloud KMS, Cloud HSM, and Cloud EKM, see Cloud KMS locations .
- June 04, 2019 Feature Cloud HSM resources are now available in the following regional locations: asia-south1 europe-north1 europe-west1 europe-west4 For the list of all supported regions, see Supported regions for Cloud HSM .
- June 28, 2019 Feature Cloud HSM resources are now available in the following regional locations: asia-east2 europe-west6 us-west2 For the list of all supported regions, see Supported regions .

### "Method: projects.locations.keyRings.cryptoKeys.getProtectedResourcesSummary\

- URL: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys/getProtectedResourcesSummary](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys/getProtectedResourcesSummary)
- Source ID: `site-api-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Cloud KMS All APIs & references API client libraries PKCS #11 library Overview Use OpenSSL Apache TLS termination NGINX TLS offload Use pkcs11-tool Sign Windows artifacts with Jsign Windows CNG Provider Overview Signing Windows artifacts Permissions and roles Cloud EKM error reference Overview KMS REST reference Overview v1 REST Resources folders Overview getAutokeyConfig getKajPolicyConfig updateAutokeyConfig updateKajPolicyConfig organizations Overview getKajPolicyConfig updateKajPolicyConfig projects Overview getAutokeyConfig getKajPolicyConfig showEffectiveAutokeyConfig showEffectiveKeyAccessJustificationsEnrollmentConfig showEffectiveKeyAccessJustificationsPolicyConfig updateAutokeyConfig updateKajPolicyConfig projects.locations Overview generateRandomBytes get getEkmConfig list updateEkmConfig projects.locations.ekmConfig Overview getIamPolicy setIamPolicy testIamPermissions projects.locations.ekmConnections Overview create get getIamPolicy list patch setIamPolicy testIamPermissions verifyConnectivity projects.locations.keyHandles Overview create get list projects.locations.keyRings Overview create get getIamPolicy list setIamPolicy testIamPermissions projects.locations.keyRings.cryptoKeys Overview create decrypt delete encrypt get getIamPolicy list patch setIamPolicy testIamPermissions updatePrimaryVersion projects.locations.keyRings.cryptoKeys.cryptoKeyVersions Overview asymmetricDecrypt asymmetricSign create decapsulate delete destroy get getPublicKey import list macSign macVerify patch rawDecrypt rawEncrypt restore projects.locations.keyRings.importJobs Overview create get getIamPolicy list setIamPolicy testIamPermissions projects.locations.operations Overview get projects.locations.retiredResources Overview get list projects.locations.singleTenantHsmInstances Overview create get list projects.locations.singleTenantHsmInstances.proposals Overview approve create delete execute get list Types AutokeyConfig CryptoKeyVersionAlgorithm CryptoKeyVersionView EkmConfig GetPolicyOptions KeyAccessJustificationsPolicyConfig KeyOperationAttestation Location Policy ProtectionLevel TestIamPermissionsResponse KMS Inventory REST reference Overview v1 REST Resources organizations. protected Resources Overview search projects. crypto Keys Overview list projects. locations. key Rings. crypto Keys Overview get Protected Resources Summary KMS RPC reference Overview google.cloud.kms.v1 google.cloud.location google.iam.v1 google.longrunning google.rpc google.type AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page HTTP request Path parameters Request body Response body Authorization scopes Try it!
- Method: projects.locations.keyRings.cryptoKeys.getProtectedResourcesSummary Cloud Key Management Service Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools More / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]] Products and pricing See all products Google Cloud pricing Google Cloud Marketplace Contact sales Support Community forums Support Release Notes System status Resources GitHub Getting Started with Google Cloud Code samples Cloud Architecture Center Training and Certification Engage Blog Events X (Twitter) Google Cloud on YouTube Google Cloud Tech on YouTube About Google Privacy Site terms Google Cloud terms Manage cookies Our third decade of climate action: join us Sign up for the Google Cloud newsletter Subscribe English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 close Welcome to Cloud Shell Cloud Shell is a development environment that you can use in the browser: Activate Cloud Shell to explore Google Cloud with a terminal and an editor Start a free trial to get $300 in free credits Activate Cloud Shell Start a free trial
- Example: projects/test-project/locations/us/keyRings/test-keyring/cryptoKeys/test-key/protectedResourcesSummary resourceCount string ( int64 format) The total number of protected resources in the same Cloud organization as the key. projectCount integer The number of distinct Cloud projects in the same Cloud organization as the key that have resources protected by the key. resourceTypes map (key: string, value: string ( int64 format)) The number of resources protected by the key grouped by resource type. cloudProducts map (key: string, value: string ( int64 format)) The number of resources protected by the key grouped by Cloud product. locations map (key: string, value: string ( int64 format)) The number of resources protected by the key grouped by region.

### "Set up Cloud EKM via the internet \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/set-up-ekm-internet](https://docs.cloud.google.com/kms/docs/set-up-ekm-internet)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure OpenSSL for manual key wrapping Wrap a key using OpenSSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Before you begin Create a new project Enable Cloud KMS Prepare the external key management partner system Ensure gcloud CLI is up to date Troubleshooting errors What's next Home Documentation Security Cloud KMS Guides Was this helpful?
- Set up Cloud EKM via the internet Cloud Key Management Service Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools More / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
- This information is also visible each time you use the Google Cloud console to create a Cloud EKM key. service- PROJECT NUMBER @gcp-sa-ekms.iam.gserviceaccount.com Prepare the external key management partner system In the external key management partner system, grant the Google Cloud service account access to use the external key.
- On this page Before you begin Create a new project Enable Cloud KMS Prepare the external key management partner system Ensure gcloud CLI is up to date Troubleshooting errors What's next This topic is about using Cloud External Key Manager (Cloud EKM) to create and manage external keys accessed via the internet.

