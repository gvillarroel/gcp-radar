---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.029Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud HSM attestation certificate chains"
feature_slug: "cloud-hsm-attestation-certificate-chains"
latest_feature_date: "2021-11-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys"
  - "https://docs.cloud.google.com/kms/docs/attest-key"
  - "https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation"
  - "https://docs.cloud.google.com/kms/docs/reference/cng-signtool"
keywords:
  - "hsm"
  - "attestation"
  - "certificate"
  - "chains"
  - "kms"
  - "supports"
  - "attesting"
  - "keys"
---

# Cloud HSM attestation certificate chains

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS supports attesting HSM keys using certificate chains through gcloud, Cloud Console, or the Cloud KMS API.

## Extended Definition

Cloud KMS supports attesting HSM keys using certificate chains through gcloud, Cloud Console, or the Cloud KMS API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key)
- [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation)
- [https://docs.cloud.google.com/kms/docs/reference/cng-signtool](https://docs.cloud.google.com/kms/docs/reference/cng-signtool)

## Supporting Pages

### "REST Resource: projects.cryptoKeys \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- Source ID: `site-api-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The certificate chains needed to validate the attestation AttestationFormat Attestation formats provided by the HSM.
- Resource: CryptoKey JSON representation CryptoKeyVersion JSON representation CryptoKeyVersionState ProtectionLevel CryptoKeyVersionAlgorithm KeyOperationAttestation JSON representation AttestationFormat CertificateChains JSON representation ExternalProtectionLevelOptions JSON representation CryptoKeyPurpose CryptoKeyVersionTemplate JSON representation Methods Resource: CryptoKey A CryptoKey represents a logical key that can be used for cryptographic operations.
- JSON representation { "format" : enum ( AttestationFormat ) , "content" : string , "certChains" : { object ( CertificateChains ) } } Fields format enum ( AttestationFormat ) Output only.
- CertificateChains Certificate chains needed to verify the attestation.

### "Verifying attestations \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key)
- Source ID: `site-iam-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The --attestation-file flag specifies the path and filename destination for the retrieved attestation. gcloud kms keys versions describe key-version \ --key key-name \ --location location \ --keyring keyring-name \ --attestation-file [attestation-file] \ At the Cloud Shell command-line prompt, use the gcloud kms keys versions get-certificate-chain command to retrieve the certificate chains for the key that you want to attest.
- The --output-file flag specifies the path and filename destination for the retrieved certificates. gcloud kms keys versions get-certificate-chain key-version \ --key key-name \ --location location \ --keyring keyring-name \ --output-file [certificates-file] \ Download the script for verifying attestations and its prerequisites, and go through the documentation for the script to verify the attestation in the attestation file using the certificates in the certificates file.
- To view and verify the attestations, you request a cryptographically-signed attestation statement from the HSM, along with the certificate chains used to sign it.
- Uncompress the compressed attestation. gzip -d < compressed attestation.dat > attestation.dat These links go directly to specific instructions from the HSM manufacturer: Verify an asymmetric keypair's public key Parse the attestation's values The instructions for parsing the attestation's value include a reference of general fields in the attestation, not specific to HSM keys in Cloud HSM.

### "KeyOperationAttestation \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation)
- Source ID: `site-api-reference`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation AttestationFormat CertificateChains JSON representation Contains an HSM-generated attestation about a key operation.
- The certificate chains needed to validate the attestation AttestationFormat Attestation formats provided by the HSM.
- JSON representation { "format" : enum ( AttestationFormat ) , "content" : string , "certChains" : { object ( CertificateChains ) } } Fields format enum ( AttestationFormat ) Output only.
- CertificateChains Certificate chains needed to verify the attestation.

### "Use CNG Provider and SignTool to sign Windows artifacts \_|\_ Cloud Key\

- URL: [https://docs.cloud.google.com/kms/docs/reference/cng-signtool](https://docs.cloud.google.com/kms/docs/reference/cng-signtool)
- Source ID: `site-api-reference`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configuration Create a Cloud KMS-hosted signing key Using Cloud Shell or your own machine, create a Cloud KMS key ring in your Google Cloud project using the following command: gcloud kms keyrings create " KEY RING " --location " LOCATION " Then, create a Cloud KMS EC-P256-SHA256 hardware signing key in your Google Cloud project, in the key ring that you have just created: gcloud kms keys create " KEY NAME " --keyring " KEY RING " \ --project " PROJECT ID " --location " LOCATION " \ --purpose "asymmetric-signing" --default-algorithm "ec-sign-p256-sha256" \ --protection-level "hsm" Note: Make sure that your Compute Engine service account has the roles/cloudkms.signer Identity and Access Management (IAM) permission on the key ring to be able to use it.
- Use SignTool to sign the artifacts, using your Cloud KMS key and your certificate. " PATH TO SIGNTOOL.EXE " sign ^ /v /debug /fd sha256 /t http://timestamp.digicert.com ^ /f PATH TO CA.CERT ^ /csp "Google Cloud KMS Provider" ^ /kc projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME /cryptoKeyVersions/1 ^ PATH TO ARTIFACT TO SIGN Replace the following: PATH TO SIGNTOOL.EXE : the path to signtool.exe (eg.
- To download the HSM attestation associated with your Cloud KMS key, complete the following steps: In the Google Cloud console, go to the Key Management page.
- This downloads a zip file containing the attestation and certificate chains.

