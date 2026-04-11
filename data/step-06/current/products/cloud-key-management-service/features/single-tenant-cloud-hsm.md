---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:26:39.811Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Single-tenant Cloud HSM"
feature_slug: "single-tenant-cloud-hsm"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm"
  - "https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.singleTenantHsmInstances/create"
  - "https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.singleTenantHsmInstances/get"
keywords:
  - "single"
  - "tenant"
  - "hsm"
  - "provides"
  - "dedicated"
  - "instances"
  - "in"
  - "kms"
---

# Single-tenant Cloud HSM

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Single-tenant Cloud HSM provides dedicated single-tenant HSM instances in a single Cloud KMS region with customer administrative control.

## Extended Definition

Single-tenant Cloud HSM provides dedicated single-tenant HSM instances in a single Cloud KMS region with customer administrative control.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)
- [https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.singleTenantHsmInstances/create](https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.singleTenantHsmInstances/create)
- [https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.singleTenantHsmInstances/get](https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.singleTenantHsmInstances/get)

## Supporting Pages

### "Create and manage a Single-tenant Cloud HSM instance \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)
- Source ID: `site-iam-reference`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure OpenSSL for manual key wrapping Wrap a key using OpenSSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Before you begin Create and provision an instance Create the instance Provision the instance View instances Use the instance Create a key Import a key Use a key Maintain an instance View instance proposals Refresh an instance Add a quorum member Remove a quorum member Disable an instance Enable an instance Delete an instance Delete a proposal What's next Home Documentation Security Cloud KMS Guides Was this helpful?
- To get the permissions that you need to create, manage, and use Single-tenant Cloud HSM instances, ask your administrator to grant you the following IAM roles on the project or a parent resource: Create proposals: Cloud KMS single-tenant HSM Proposer ( cloudkms.hsmSingleTenantProposer ) Approve proposals: Cloud KMS single-tenant HSM Quorum Member ( cloudkms.hsmSingleTenantQuorumMember ) Execute proposals: Cloud KMS single-tenant HSM Executor ( cloudkms.hsmSingleTenantExecutor ) Create keys: Cloud KMS single-tenant HSM Key Creator ( roles/cloudkms.hsmSingleTenantKeyCreator ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- View instances Users with any of the following roles can view a list of Single-tenant Cloud HSM instances and their states: Cloud KMS single-tenant HSM Proposer Cloud KMS single-tenant HSM Quorum Member Cloud KMS single-tenant HSM Executor Cloud KMS Viewer Cloud KMS Administrator Make sure to review the state of your instances regularly.
- The resource identifier uses the following format: projects/ INSTANCE PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE NAME To view instances in your organization and find their resource identifiers, follow these steps: Console gcloud More In the Google Cloud console, go to the KMS infrastructure page.

### "Method: singleTenantHsmInstances.create \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.singleTenantHsmInstances/create](https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.singleTenantHsmInstances/create)
- Source ID: `site-api-reference`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Cloud KMS All APIs & references API client libraries PKCS #11 library Overview Use OpenSSL Apache TLS termination NGINX TLS offload Use pkcs11-tool Sign Windows artifacts with Jsign Windows CNG Provider Overview Signing Windows artifacts Permissions and roles Cloud EKM error reference Overview KMS REST reference Overview v1 REST Resources folders Overview getAutokeyConfig getKajPolicyConfig updateAutokeyConfig updateKajPolicyConfig organizations Overview getKajPolicyConfig updateKajPolicyConfig projects Overview getAutokeyConfig getKajPolicyConfig showEffectiveAutokeyConfig showEffectiveKeyAccessJustificationsEnrollmentConfig showEffectiveKeyAccessJustificationsPolicyConfig updateAutokeyConfig updateKajPolicyConfig projects. locations Overview generateRandomBytes get getEkmConfig list updateEkmConfig projects. locations. ekm Config Overview getIamPolicy setIamPolicy testIamPermissions projects. locations. ekm Connections Overview create get getIamPolicy list patch setIamPolicy testIamPermissions verifyConnectivity projects. locations. key Handles Overview create get list projects. locations. key Rings Overview create get getIamPolicy list setIamPolicy testIamPermissions projects. locations. key Rings. crypto Keys Overview create decrypt delete encrypt get getIamPolicy list patch setIamPolicy testIamPermissions updatePrimaryVersion projects. locations. key Rings. crypto Keys. crypto Key Versions Overview asymmetricDecrypt asymmetricSign create decapsulate delete destroy get getPublicKey import list macSign macVerify patch rawDecrypt rawEncrypt restore projects. locations. key Rings. import Jobs Overview create get getIamPolicy list setIamPolicy testIamPermissions projects. locations. operations Overview get projects. locations. retired Resources Overview get list projects. locations. single Tenant Hsm Instances Overview create get list projects. locations. single Tenant Hsm Instances. proposals Overview approve create delete execute get list Types Autokey Config Crypto Key Version Algorithm Crypto Key Version View Ekm Config Get Policy Options Key Access Justifications Policy Config Key Operation Attestation Location Policy ProtectionLevel TestIamPermissionsResponse KMS Inventory REST reference Overview v1 REST Resources organizations.protectedResources Overview search projects.cryptoKeys Overview list projects.locations.keyRings.cryptoKeys Overview getProtectedResourcesSummary KMS RPC reference Overview google.cloud.kms.v1 google.cloud.location google.iam.v1 google.longrunning google.rpc google.type AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page HTTP request Path parameters Query parameters Request body Response body Authorization scopes IAM Permissions Try it!
- HTTP request Choose a location: global europe-west3 europe-west8 europe-west9 me-central2 us-east1 us-east4 us-west2 us-west1 us-east7 us-central1 us-west3 us-central2 us-west4 us-west8 us-east5 us-south1 us in ca POST https://cloudkms.googleapis.com/v1/{parent=projects/ /locations/ }/singleTenantHsmInstances The URLs use gRPC Transcoding syntax.
- IAM Permissions Requires the following IAM permission on the parent resource: cloudkms.singleTenantHsmInstances.create For more information, see the IAM documentation .
- Method: singleTenantHsmInstances.create Cloud Key Management Service Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools More / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Google Developer Program View your saved pages and finish your Google Developer Profile setup here.

### "Method: singleTenantHsmInstances.get \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.singleTenantHsmInstances/get](https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.singleTenantHsmInstances/get)
- Source ID: `site-api-reference`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Cloud KMS All APIs & references API client libraries PKCS #11 library Overview Use OpenSSL Apache TLS termination NGINX TLS offload Use pkcs11-tool Sign Windows artifacts with Jsign Windows CNG Provider Overview Signing Windows artifacts Permissions and roles Cloud EKM error reference Overview KMS REST reference Overview v1 REST Resources folders Overview getAutokeyConfig getKajPolicyConfig updateAutokeyConfig updateKajPolicyConfig organizations Overview getKajPolicyConfig updateKajPolicyConfig projects Overview getAutokeyConfig getKajPolicyConfig showEffectiveAutokeyConfig showEffectiveKeyAccessJustificationsEnrollmentConfig showEffectiveKeyAccessJustificationsPolicyConfig updateAutokeyConfig updateKajPolicyConfig projects. locations Overview generateRandomBytes get getEkmConfig list updateEkmConfig projects. locations. ekm Config Overview getIamPolicy setIamPolicy testIamPermissions projects. locations. ekm Connections Overview create get getIamPolicy list patch setIamPolicy testIamPermissions verifyConnectivity projects. locations. key Handles Overview create get list projects. locations. key Rings Overview create get getIamPolicy list setIamPolicy testIamPermissions projects. locations. key Rings. crypto Keys Overview create decrypt delete encrypt get getIamPolicy list patch setIamPolicy testIamPermissions updatePrimaryVersion projects. locations. key Rings. crypto Keys. crypto Key Versions Overview asymmetricDecrypt asymmetricSign create decapsulate delete destroy get getPublicKey import list macSign macVerify patch rawDecrypt rawEncrypt restore projects. locations. key Rings. import Jobs Overview create get getIamPolicy list setIamPolicy testIamPermissions projects. locations. operations Overview get projects. locations. retired Resources Overview get list projects. locations. single Tenant Hsm Instances Overview create get list projects. locations. single Tenant Hsm Instances. proposals Overview approve create delete execute get list Types Autokey Config Crypto Key Version Algorithm Crypto Key Version View Ekm Config Get Policy Options Key Access Justifications Policy Config Key Operation Attestation Location Policy ProtectionLevel TestIamPermissionsResponse KMS Inventory REST reference Overview v1 REST Resources organizations.protectedResources Overview search projects.cryptoKeys Overview list projects.locations.keyRings.cryptoKeys Overview getProtectedResourcesSummary KMS RPC reference Overview google.cloud.kms.v1 google.cloud.location google.iam.v1 google.longrunning google.rpc google.type AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page HTTP request Path parameters Request body Response body Authorization scopes IAM Permissions Try it!
- HTTP request Choose a location: global europe-west3 europe-west8 europe-west9 me-central2 us-east1 us-east4 us-west2 us-west1 us-east7 us-central1 us-west3 us-central2 us-west4 us-west8 us-east5 us-south1 us in ca GET https://cloudkms.googleapis.com/v1/{name=projects/ /locations/ /singleTenantHsmInstances/ } The URLs use gRPC Transcoding syntax.
- IAM Permissions Requires the following IAM permission on the name resource: cloudkms.singleTenantHsmInstances.get For more information, see the IAM documentation .
- Method: singleTenantHsmInstances.get Cloud Key Management Service Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools More / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Google Developer Program View your saved pages and finish your Google Developer Profile setup here.

