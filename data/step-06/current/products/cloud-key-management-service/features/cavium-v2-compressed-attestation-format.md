---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.057Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "CAVIUM_V2_COMPRESSED attestation format"
feature_slug: "cavium-v2-compressed-attestation-format"
latest_feature_date: "2019-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation"
  - "https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys"
  - "https://docs.cloud.google.com/kms/docs/attest-key"
  - "https://docs.cloud.google.com/kms/docs/accessing-the-api"
keywords:
  - "cavium"
  - "v2"
  - "compressed"
  - "attestation"
  - "format"
  - "kms"
  - "supports"
  - "the"
---

# CAVIUM_V2_COMPRESSED attestation format

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS supports the CAVIUM_V2_COMPRESSED attestation format enum value.

## Extended Definition

Cloud KMS supports the CAVIUM_V2_COMPRESSED attestation format enum value.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key)
- [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api)

## Supporting Pages

### "KeyOperationAttestation \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation)
- Source ID: `site-api-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CAVIUM V2 COMPRESSED Cavium HSM attestation V2 compressed with gzip.
- JSON representation { "caviumCerts" : [ string ] , "googleCardCerts" : [ string ] , "googlePartitionCerts" : [ string ] } Fields caviumCerts[] string Cavium certificate chain corresponding to the attestation. googleCardCerts[] string Google card certificate chain corresponding to the attestation. googlePartitionCerts[] string Google partition certificate chain corresponding to the attestation.
- The certificate chains needed to validate the attestation AttestationFormat Attestation formats provided by the HSM.
- The format of the attestation data. content string ( bytes format) Output only.

### "REST Resource: projects.cryptoKeys \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- Source ID: `site-api-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- CAVIUM V2 COMPRESSED Cavium HSM attestation V2 compressed with gzip.
- JSON representation { "caviumCerts" : [ string ] , "googleCardCerts" : [ string ] , "googlePartitionCerts" : [ string ] } Fields caviumCerts[] string Cavium certificate chain corresponding to the attestation. googleCardCerts[] string Google card certificate chain corresponding to the attestation. googlePartitionCerts[] string Google partition certificate chain corresponding to the attestation.
- The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports. attestation object ( KeyOperationAttestation ) Output only.
- The certificate chains needed to validate the attestation AttestationFormat Attestation formats provided by the HSM.

### "Verifying attestations \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key)
- Source ID: `site-iam-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The --output-file flag specifies the path and filename destination for the retrieved certificates. gcloud kms keys versions get-certificate-chain key-version \ --key key-name \ --location location \ --keyring keyring-name \ --output-file [certificates-file] \ Download the script for verifying attestations and its prerequisites, and go through the documentation for the script to verify the attestation in the attestation file using the certificates in the certificates file.
- The --attestation-file flag specifies the path and filename destination for the retrieved attestation. gcloud kms keys versions describe key-version \ --key key-name \ --location location \ --keyring keyring-name \ --attestation-file [attestation-file] \ At the Cloud Shell command-line prompt, use the gcloud kms keys versions get-certificate-chain command to retrieve the certificate chains for the key that you want to attest.
- Uncompress the compressed attestation. gzip -d < compressed attestation.dat > attestation.dat These links go directly to specific instructions from the HSM manufacturer: Verify an asymmetric keypair's public key Parse the attestation's values The instructions for parsing the attestation's value include a reference of general fields in the attestation, not specific to HSM keys in Cloud HSM.
- RESOURCE NAME="projects/ project-id /locations/ location /keyRings/ key-ring-name /cryptoKeys/ key-name /cryptoKeyVersions/ key-version " Since the parse script dumps all attestation fields in hex format, the key ID would have been formatted into hex format twice. (Once while creating the keyID, the other while parsing the attestation).

### "Accessing the API \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api)
- Source ID: `site-iam-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ensure that when you create an instance, you give it access to the https://www.googleapis.com/auth/cloudkms (preferred because it supports the principle of least privilege) or https://www.googleapis.com/auth/cloud-platform OAuth scope.
- For example: gcloud compute instances create "instance-1" \ --zone "us-east1-b" \ --scopes "https://www.googleapis.com/auth/cloudkms" For more information, refer to the Compute Engine documentation or the GKE documentation .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Home Documentation Security Cloud KMS Guides Send feedback Accessing the API Stay organized with collections Save and categorize content based on your preferences.

