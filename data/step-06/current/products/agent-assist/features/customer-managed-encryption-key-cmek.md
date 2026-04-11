---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.438Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Customer Managed Encryption Key (CMEK)"
feature_slug: "customer-managed-encryption-key-cmek"
latest_feature_date: "2025-01-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/cmek"
keywords:
  - "audit logs for key usage"
  - "customer managed encryption keys"
  - "Customer Managed Encryption Key"
  - "encryption key management"
  - "customer managed key"
  - "key lifecycle"
  - "CMEK"
---

# Customer Managed Encryption Key (CMEK)

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Customer Managed Encryption Keys in Agent Assist are generally available and enable customers to control encryption key management details, audit logs, and key lifecycles.

## Extended Definition

Customer Managed Encryption Keys (CMEK) in Agent Assist allow customers to use a Cloud KMS CryptoKey to encrypt and decrypt Agent Assist data in a specific location. To use CMEK, customers grant the CCAI CMEK service account the Cloud KMS CryptoKey Encrypter/Decrypter role for the key, configure the key via InitializeEncryptionSpec (with matching key ring/location and key ID), and can verify the configuration with GetEncryptionSpec.

## Evidence Summary

The cited Agent Assist documentation page describes how to configure and verify CMEK for Agent Assist using IAM bindings, location-matched KMS keys, and encryption-spec APIs.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/cmek](https://docs.cloud.google.com/agent-assist/docs/cmek)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) \_|\_ Agent Assist \_|\_ Google\

- URL: [https://docs.cloud.google.com/agent-assist/docs/cmek](https://docs.cloud.google.com/agent-assist/docs/cmek)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- It won't be returned in the create response, but will have the following format: service- PROJECT NUMBER @gcp-sa-ccai-cmek.iam.gserviceaccount.com Grant the CCAI CMEK Service account the Cloud KMS CryptoKey Encrypter/Decrypter role to ensure that the service has permissions to encrypt and decrypt with your key. gcloud kms keys add-iam-policy-binding KMS KEY ID \ --project = PROJECT ID \ --location = LOCATION ID \ --keyring = KMS KEY RING \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-ccai-cmek.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter Configure a key for an Agent Assist location Use InitializeEncryptionSpec API to configure the key.
- KMS KEY RING : The key ring your KMS key was created in. (The location in the key ring, like projects/ PROJECT ID /locations/ LOCATION ID /keyRings/ KMS KEY RING , must match the location where you're enabling CMEK.) KMS KEY ID : The name of your KMS key that will be used to encrypt and decrypt Agent Assist data in the selected location.
- For example: curl -X GET \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ "https:// LOCATION ID -dialogflow.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION ID /operations/ OPERATION ID " Check CMEK Settings Use GetEncryptionSpec API to check the encryption key configured for a location.
- Home Documentation AI and ML Agent Assist Guides Send feedback Customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.

