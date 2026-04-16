---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.002Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Single-tenant Cloud HSM"
feature_slug: "single-tenant-cloud-hsm"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm"
  - "https://docs.cloud.google.com/kms/docs/hsm"
  - "https://docs.cloud.google.com/kms/docs/importing-a-key"
  - "https://docs.cloud.google.com/kms/docs/key-management-service"
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

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)
- [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm)
- [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service)

## Supporting Pages

### "Create and manage a Single-tenant Cloud HSM instance \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)
- Source ID: `site-iam-reference`
- Final score: 362
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To get the permissions that you need to create, manage, and use Single-tenant Cloud HSM instances, ask your administrator to grant you the following IAM roles on the project or a parent resource: Create proposals: Cloud KMS single-tenant HSM Proposer ( cloudkms.hsmSingleTenantProposer ) Approve proposals: Cloud KMS single-tenant HSM Quorum Member ( cloudkms.hsmSingleTenantQuorumMember ) Execute proposals: Cloud KMS single-tenant HSM Executor ( cloudkms.hsmSingleTenantExecutor ) Create keys: Cloud KMS single-tenant HSM Key Creator ( roles/cloudkms.hsmSingleTenantKeyCreator ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- For example, you can filter the list to see only the proposal that is pending approval or only proposals that have been successfully completed. gcloud View a list of existing proposals using the kms single-tenant-hsm proposal list method. gcloud kms single-tenant-hsm proposal list --location = LOCATION \ --singletenanthsminstance = INSTANCE ID Replace the following: LOCATION : the location where you want to view Single-tenant Cloud HSM instances.
- You can compare the public keys with your private 2FA keys to verify which control keys are active. gcloud View a list of existing instances using the kms single-tenant-hsm list method. gcloud kms single-tenant-hsm list projects/ PROJECT ID /locations/ LOCATION Replace the following: PROJECT ID : the identifier of the project where you want to view Single-tenant Cloud HSM instances.
- View instances Users with any of the following roles can view a list of Single-tenant Cloud HSM instances and their states: Cloud KMS single-tenant HSM Proposer Cloud KMS single-tenant HSM Quorum Member Cloud KMS single-tenant HSM Executor Cloud KMS Viewer Cloud KMS Administrator Make sure to review the state of your instances regularly.

### Cloud HSM \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm)
- Source ID: `site-docs-root`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a Single-tenant Cloud HSM key, use the CryptoKey.create method with the HSM SINGLE TENANT protection level: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?crypto key id= KEY NAME " \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"purpose": "ENCRYPT DECRYPT", "versionTemplate": { "protectionLevel": "HSM SINGLE TENANT", "algorithm": " ALGORITHM ", "cryptoKeyBackend": "projects/ INSTANCE PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE NAME " }}' Replace the following: PROJECT ID : the ID of the project that contains the key ring.
- The Single-tenant Cloud HSM instance must be in the same location as the key ring. gcloud kms keys create KEY NAME \ --keyring KEY RING \ --location LOCATION \ --purpose "encryption" \ --protection-level "hsm-single-tenant" \ --crypto-key-backend="projects/ INSTANCE PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE NAME " Replace the following: KEY NAME : the name that you want to use for the key.
- To create a Single-tenant Cloud HSM key, run the kms keys create command with the hsm-single-tenant protection level and specify the Single-tenant Cloud HSM instance where you want to create the key.
- For a list of all locations that support Single-tenant Cloud HSM, see Cloud KMS locations , and select Supports single-tenant HSM for the HSM support filter.

### "Import a key version into Cloud KMS \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a Single-tenant Cloud HSM key, add the --cryptoKeyBackend flag to this command and add the resource identifier of the Single-tenant Cloud HSM instance where you want to import the key: --crypto-key-backend = "projects/ INSTANCE PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE NAME " Go To run this code, first set up a Go development environment and install the Cloud KMS Go SDK . import ( "context" "fmt" "io" kms "cloud.google.com/go/kms/apiv1" "cloud.google.com/go/kms/apiv1/kmspb" ) // createKeyForImport creates a new asymmetric signing key in Cloud HSM. func createKeyForImport ( w io .
- If you want to create your key in a Single-tenant Cloud HSM, add the cryptoKeyBackend field to the body of the command and add the resource identifier of the Single-tenant Cloud HSM instance where you want to import the key: "crypto-key-backend" : "projects/ INSTANCE PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE NAME " The key ring and key now exist, but the key contains no key material, has no version, and is not active.
- The following can't be changed for a key version after it is created or imported: The protection level indicates whether the key persists in software, in a multi-tenant HSM, in a single-tenant HSM, or in an external key management system.
- The protection level defines whether keys imported by this import job will reside in software, in a multi-tenant HSM, in a single-tenant HSM, or in an external key management system.

### Cloud Key Management Service overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service)
- Source ID: `site-api-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Hardware keys with Single-tenant Cloud HSM - You can generate hardware keys in a cluster of dedicated partitions in FIPS 140-2 Level 3 Hardware Security Modules (HSMs) that you control.
- Create and maintain Single-tenant Cloud HSM instances, and create or import and then use Single-tenant Cloud HSM keys.
- Single-tenant Cloud HSM instances incur additional costs.
- When you create a Single-tenant Cloud HSM instance, Google Cloud hosts the HSM clusters so you don't have to, but you control access to the instance and maintain it with a quorum of designated administrators.

