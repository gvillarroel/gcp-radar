---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.007Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud HSM attestation certificate bundles"
feature_slug: "cloud-hsm-attestation-certificate-bundles"
latest_feature_date: "2024-03-20"
deprecation_date: "2024-03-20"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/attest-key"
  - "https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys"
  - "https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation"
  - "https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx"
keywords:
  - "hsm"
  - "attestation"
  - "certificate"
  - "bundles"
  - "for"
  - "verifying"
  - "attestations"
  - "keys"
---

# Cloud HSM attestation certificate bundles

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Certificate bundles for verifying attestations for Cloud HSM keys were replaced by certificate chains; deprecated on 2024-03-20.

## Extended Definition

Certificate bundles for verifying attestations for Cloud HSM keys were replaced by certificate chains; deprecated on 2024-03-20.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation)
- [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx)

## Supporting Pages

### "Verifying attestations \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key)
- Source ID: `site-iam-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The --output-file flag specifies the path and filename destination for the retrieved certificates. gcloud kms keys versions get-certificate-chain key-version \ --key key-name \ --location location \ --keyring keyring-name \ --output-file [certificates-file] \ Download the script for verifying attestations and its prerequisites, and go through the documentation for the script to verify the attestation in the attestation file using the certificates in the certificates file.
- This guide shows you how to verify attestations for Cloud HSM keys , which are always stored in a hardware security module (HSM).
- The --attestation-file flag specifies the path and filename destination for the retrieved attestation. gcloud kms keys versions describe key-version \ --key key-name \ --location location \ --keyring keyring-name \ --attestation-file [attestation-file] \ At the Cloud Shell command-line prompt, use the gcloud kms keys versions get-certificate-chain command to retrieve the certificate chains for the key that you want to attest.
- Uncompress the compressed attestation. gzip -d < compressed attestation.dat > attestation.dat These links go directly to specific instructions from the HSM manufacturer: Verify an asymmetric keypair's public key Parse the attestation's values The instructions for parsing the attestation's value include a reference of general fields in the attestation, not specific to HSM keys in Cloud HSM.

### "REST Resource: projects.cryptoKeys \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- The certificate chains needed to validate the attestation AttestationFormat Attestation formats provided by the HSM.
- For more information, see Verifying attestations .
- Resource: CryptoKey JSON representation CryptoKeyVersion JSON representation CryptoKeyVersionState ProtectionLevel CryptoKeyVersionAlgorithm KeyOperationAttestation JSON representation AttestationFormat CertificateChains JSON representation ExternalProtectionLevelOptions JSON representation CryptoKeyPurpose CryptoKeyVersionTemplate JSON representation Methods Resource: CryptoKey A CryptoKey represents a logical key that can be used for cryptographic operations.
- JSON representation { "format" : enum ( AttestationFormat ) , "content" : string , "certChains" : { object ( CertificateChains ) } } Fields format enum ( AttestationFormat ) Output only.

### "KeyOperationAttestation \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyOperationAttestation)
- Source ID: `site-api-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation AttestationFormat CertificateChains JSON representation Contains an HSM-generated attestation about a key operation.
- The certificate chains needed to validate the attestation AttestationFormat Attestation formats provided by the HSM.
- For more information, see Verifying attestations .
- JSON representation { "format" : enum ( AttestationFormat ) , "content" : string , "certChains" : { object ( CertificateChains ) } } Fields format enum ( AttestationFormat ) Output only.

### "Use a Cloud HSM key for TLS offloading with NGINX \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx)
- Source ID: `site-api-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Create a Cloud HSM-hosted signing key Create a Cloud HSM EC-P256-SHA256 signing key in your Google Cloud project, in the key ring that you previously configured for OpenSSL: gcloud kms keys create NGINX KEY \ --keyring " KEY RING " --project " PROJECT ID " \ --location " LOCATION " --purpose "asymmetric-signing" \ --default-algorithm "ec-sign-p256-sha256" --protection-level "hsm" Note: Make sure that your Compute Engine service account has the correct Identity and Access Management (IAM) permissions on the key ring to be able to use it.
- To do so, OpenSSL lets you use PKCS #11 URIs instead of a regular path, identifying the key by its label (for Cloud KMS keys, the label is the CryptoKey name). openssl req -new -x509 -days 3650 -subj '/CN= CERTIFICATE NAME /' \ DIGEST FLAG -engine pkcs11 -keyform engine \ -key PKCS KEY TYPE = KEY IDENTIFIER > CA CERT Replace the following: CERTIFICATE NAME : a name for the certificate.
- After the event block and before the http block, add the following directives: ssl engine pkcs11 ; env KMS PKCS11 CONFIG = /etc/nginx/pkcs11-config.yaml ; In the same /etc/nginx/nginx.conf file, configure SSL directives to use your certificate and its private key in Cloud HSM.
- For example purposes, you can generate a self-signed certificate with the Cloud HSM signing key.

