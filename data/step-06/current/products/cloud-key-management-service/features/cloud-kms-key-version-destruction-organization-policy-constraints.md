---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.006Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS key version destruction organization policy constraints"
feature_slug: "cloud-kms-key-version-destruction-organization-policy-constraints"
latest_feature_date: "2024-05-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/control-key-destruction"
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
  - "https://docs.cloud.google.com/kms/docs/cmek"
  - "https://docs.cloud.google.com/kms/docs/reference/rest"
keywords:
  - "kms"
  - "key"
  - "version"
  - "destruction"
  - "organization"
  - "policy"
  - "constraints"
  - "provides"
---

# Cloud KMS key version destruction organization policy constraints

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS provides organization policy constraints to control key version destruction.

## Extended Definition

Cloud KMS provides organization policy constraints to control key version destruction.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/control-key-destruction](https://docs.cloud.google.com/kms/docs/control-key-destruction)
- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/cmek](https://docs.cloud.google.com/kms/docs/cmek)
- [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)

## Supporting Pages

### "Control key version destruction \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/control-key-destruction](https://docs.cloud.google.com/kms/docs/control-key-destruction)
- Source ID: `site-iam-reference`
- Final score: 298
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud offers two organization policy constraints to set key version destruction policy across an organization: constraints/cloudkms.minimumDestroyScheduledDuration is used to set a minimum length for the scheduled for destruction duration for new keys within the organization. constraints/cloudkms.disableBeforeDestroy is used to require that a key version has been disabled before it can be scheduled for destruction.
- This command returns the organization policy as it is evaluated at this point in the resource hierarchy with inheritance included. gcloud org-policies describe \ constraints/cloudkms.minimumDestroyScheduledDuration --effective \ --organization = ORGANIZATION ID The output is similar to the following: name : organizations/ ORGANIZATION ID /policies/cloudkms.minimumDestroyScheduledDuration spec : rules : - values : allowedValues : - 30d - 15d - 90d - 60d - 7d - 120d Because this organization policy was set at the organization level, it is inherited by all child resources that allow inheritance.
- This command returns the organization policy as it is evaluated at this point in the resource hierarchy with inheritance included. gcloud org-policies describe \ constraints/cloudkms.disableBeforeDestroy --effective \ --organization = ORGANIZATION ID The output is similar to the following: name : organizations/ ORGANIZATION ID /policies/cloudkms.minimumDestroyScheduledDuration spec : rules : - enforce : true Because this organization policy was set at the organization level, it is inherited by all child resources that allow inheritance.
- This command returns the policy directly applied to this resource: gcloud org-policies describe \ constraints/cloudkms.minimumDestroyScheduledDuration \ --organization = ORGANIZATION ID Replace ORGANIZATION ID with the unique identifier for the organization resource.

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To ensure that all keys created adhere to a minimum scheduled for destruction duration, we recommend that you configure the organization policy constraint constraints/cloudkms.minimumDestroyScheduledDuration with a minimum of 30 days, or your preferred duration.
- Enforce allowed protection levels for CMEKs We recommend that you enforce your requirements for key protection levels consistently across your environment using organization policy constraints.
- Use constraints/cloudkms.allowedProtectionLevels to enforce that new keys, key versions, and import jobs must use the protection levels that you allow.
- This organization policy prevents users from creating keys with a scheduled for destruction duration less than the value specified in the policy.

### "Customer-managed encryption keys (CMEK) \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/cmek](https://docs.cloud.google.com/kms/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These constraints provide controls to Organization Administrators to require CMEK usage and to specify limitations and controls on the Cloud KMS keys used for CMEK protection, including the following: Limits on which Cloud KMS keys are used for CMEK protection Limits on the allowed protection levels of keys Limits on the location of CMEKs Controls for key version destruction What's next See the list of services with CMEK integrations .
- For more information about key usage tracking, see View key usage CMEK organization policies Google Cloud offers organization policy constraints to help ensure consistent CMEK usage across an organization resource.
- This document provides an overview of using Cloud Key Management Service (Cloud KMS) for customer-managed encryption keys (CMEK).
- Using Cloud KMS incurs costs related to the number of key versions and cryptographic operations with those key versions.

### Cloud Key Management Service (KMS) API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects Methods getAutokeyConfig GET /v1/{name=projects/ /autokeyConfig} Returns the AutokeyConfig for a folder or project. getKajPolicyConfig GET /v1/{name=projects/ /kajPolicyConfig} Gets the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project. showEffectiveAutokeyConfig GET /v1/{parent=projects/ }:showEffectiveAutokeyConfig Returns the effective Cloud KMS Autokey configuration for a given project. showEffectiveKeyAccessJustificationsEnrollmentConfig GET /v1/{project=projects/ }:showEffectiveKeyAccessJustificationsEnrollmentConfig Returns the KeyAccessJustificationsEnrollmentConfig of the resource closest to the given project in hierarchy. showEffectiveKeyAccessJustificationsPolicyConfig GET /v1/{project=projects/ }:showEffectiveKeyAccessJustificationsPolicyConfig Returns the KeyAccessJustificationsPolicyConfig of the resource closest to the given project in hierarchy. updateAutokeyConfig PATCH /v1/{autokeyConfig.name=projects/ /autokeyConfig} Updates the AutokeyConfig for a folder or a project. updateKajPolicyConfig PATCH /v1/{keyAccessJustificationsPolicyConfig.name=projects/ /kajPolicyConfig} Updates the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.
- Select a location to see its regional service endpoint for this service. global europe-west3 europe-west8 europe-west9 me-central2 us-east1 us-east4 us-west2 us-west1 us-east7 us-central1 us-west3 us-central2 us-west4 us-west8 us-east5 us-south1 us in ca https://cloudkms.googleapis.com REST Resource: v1.folders Methods getAutokeyConfig GET /v1/{name=folders/ /autokeyConfig} Returns the AutokeyConfig for a folder or project. getKajPolicyConfig GET /v1/{name=folders/ /kajPolicyConfig} Gets the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project. updateAutokeyConfig PATCH /v1/{autokeyConfig.name=folders/ /autokeyConfig} Updates the AutokeyConfig for a folder or a project. updateKajPolicyConfig PATCH /v1/{keyAccessJustificationsPolicyConfig.name=folders/ /kajPolicyConfig} Updates the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.
- REST Resource: v1.folders REST Resource: v1.organizations REST Resource: v1.projects REST Resource: v1.projects.locations REST Resource: v1.projects.locations.ekmConfig REST Resource: v1.projects.locations.ekmConnections REST Resource: v1.projects.locations.keyHandles REST Resource: v1.projects.locations.keyRings REST Resource: v1.projects.locations.keyRings.cryptoKeys REST Resource: v1.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions REST Resource: v1.projects.locations.keyRings.importJobs REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.retiredResources REST Resource: v1.projects.locations.singleTenantHsmInstances REST Resource: v1.projects.locations.singleTenantHsmInstances.proposals Service: cloudkms.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions Methods asymmetricDecrypt POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:asymmetricDecrypt Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC DECRYPT. asymmetricSign POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:asymmetricSign Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey . create POST /v1/{parent=projects/ /locations/ /keyRings/ /cryptoKeys/ }/cryptoKeyVersions Create a new CryptoKeyVersion in a CryptoKey . decapsulate POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:decapsulate Decapsulates data that was encapsulated with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose KEY ENCAPSULATION. delete DELETE /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ } Permanently deletes the given CryptoKeyVersion . destroy POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:destroy Schedule a CryptoKeyVersion for destruction. get GET /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ } Returns metadata for a given CryptoKeyVersion . getPublicKey GET /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }/publicKey Returns the public key for the given CryptoKeyVersion . import POST /v1/{parent=projects/ /locations/ /keyRings/ /cryptoKeys/ }/cryptoKeyVersions:import Import wrapped key material into a CryptoKeyVersion . list GET /v1/{parent=projects/ /locations/ /keyRings/ /cryptoKeys/ }/cryptoKeyVersions Lists CryptoKeyVersions . macSign POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:macSign Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key. macVerify POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:macVerify Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful. patch PATCH /v1/{cryptoKeyVersion.name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ } Update a CryptoKeyVersion 's metadata. rawDecrypt POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:rawDecrypt Decrypts data that was originally encrypted using a raw cryptographic mechanism. rawEncrypt POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:rawEncrypt Encrypts data using portable cryptographic primitives. restore POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:restore Restore a CryptoKeyVersion in the DESTROY SCHEDULED state.

