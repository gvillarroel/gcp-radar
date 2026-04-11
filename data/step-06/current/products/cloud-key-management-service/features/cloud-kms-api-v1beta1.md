---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:26:39.876Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS API v1beta1"
feature_slug: "cloud-kms-api-v1beta1"
latest_feature_date: "2017-06-07"
deprecation_date: "2017-06-07"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1"
  - "https://docs.cloud.google.com/kms/docs/release-notes"
  - "https://docs.cloud.google.com/kms/docs/delete-kms-resources"
keywords:
  - "kms"
  - "api"
  - "v1beta1"
  - "the"
  - "endpoint"
  - "has"
  - "been"
  - "turned"
---

# Cloud KMS API v1beta1

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

The v1beta1 Cloud KMS API endpoint has been turned off in favor of the v1 API; deprecated on 2017-06-07.

## Extended Definition

The v1beta1 Cloud KMS API endpoint has been turned off in favor of the v1 API; deprecated on 2017-06-07.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1](https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1)
- [https://docs.cloud.google.com/kms/docs/release-notes](https://docs.cloud.google.com/kms/docs/release-notes)
- [https://docs.cloud.google.com/kms/docs/delete-kms-resources](https://docs.cloud.google.com/kms/docs/delete-kms-resources)

## Supporting Pages

### "Package google.cloud.kms.v1 \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1](https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CUSTOMER AUTHORIZED WORKFLOW SERVICING One of the following operations is being executed while simultaneously encountering an internal technical issue which prevented a more precise justification code from being generated: Your account has been used to perform any access to your own data which your IAM policy authorizes.
- Once configured, for Cloud KMS Autokey to function properly, this key project must have the Cloud KMS API activated and the Cloud KMS Service Agent for this key project must be granted the cloudkms.admin role (or pertinent permissions).
- Other hash functions can also be used: https://cloud.google.com/kms/docs/create-validate-signatures#ecdsa support for other hash algorithms EC SIGN ED25519 EdDSA on the Curve25519 in pure mode (taking data as input).
- Other hash functions can also be used: https://cloud.google.com/kms/docs/create-validate-signatures#ecdsa support for other hash algorithms EC SIGN P384 SHA384 ECDSA on the NIST P-384 curve with a SHA384 digest.

### "Cloud KMS release notes \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/release-notes](https://docs.cloud.google.com/kms/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- June 07, 2017 Deprecated API version v1beta1 has been turned off.
- February 21, 2025 Feature Cloud KMS now supports the following post-quantum computing (PQC) algorithms for digital signatures in Public Preview: PQ SIGN ML DSA 65 : Module-lattice-based digital signature algorithm PQ SIGN SLH DSA SHA2 128S : Stateless hash-based digital signature algorithm To Retrieve a public key for a PQC key, you must use the gcloud CLI or the Cloud KMS REST API.
- April 11, 2018 Change The URL of the Cloud KMS page in the Google Cloud Platform Console has been changed from https://console.cloud.google.com/iam-admin/kms to https://console.cloud.google.com/security/kms.
- April 03, 2018 Feature The name of the Cloud KMS page in the Google Cloud Platform Console has been changed from Encryption keys to Cryptographic keys .

### "Delete Cloud KMS resources \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/delete-kms-resources](https://docs.cloud.google.com/kms/docs/delete-kms-resources)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This method returns a long-running operation that you can poll to confirm that the key version has been deleted. curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME /cryptoKeyVersions/ KEY VERSION " \ --request "DELETE" \ --header "authorization: Bearer TOKEN " Replace the following: PROJECT ID : the ID of the project that contains the key ring.
- This method returns a long-running operation that you can poll to confirm that the key has been deleted. curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME " \ --request "DELETE" \ --header "authorization: Bearer TOKEN " Replace the following: PROJECT ID : the ID of the project that contains the key ring.
- To confirm that the key version has been deleted, you can call the operations.get method: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION NAME " \ --request "GET" \ --header "authorization: Bearer TOKEN " Replace the following: PROJECT ID : the ID of the project that contains the key ring.
- To confirm that the key has been deleted, you can call the operations.get method: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION NAME " \ --request "GET" \ --header "authorization: Bearer TOKEN " Replace the following: PROJECT ID : the ID of the project that contains the key ring.

