---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.639Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Customer-managed encryption keys (CMEK)"
feature_slug: "customer-managed-encryption-keys-cmek"
latest_feature_date: "2025-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek"
  - "https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
keywords:
  - "cmek"
  - "encryption"
  - "customer"
  - "managed"
  - "keys"
  - "available"
  - "regions"
---

# Customer-managed encryption keys (CMEK)

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Customer-managed encryption keys are available in EU regions.

## Extended Definition

Customer-managed encryption keys are available in EU regions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek](https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek)
- [https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls](https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) \_|\_ Dialogflow CX \_|\_ Google\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek](https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek)
- Source ID: `site-docs-root`
- Final score: 293
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Dialogflow CX.
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .
- It won't be returned in the create response, but will have the following format: service- PROJECT NUMBER @gcp-sa-ccai-cmek.iam.gserviceaccount.com Grant the CCAI CMEK Service account the Cloud KMS CryptoKey Encrypter/Decrypter role to ensure that the service has permissions to encrypt and decrypt with your key. gcloud kms keys add-iam-policy-binding KMS KEY ID \ --project = PROJECT ID \ --location = LOCATION ID \ --keyring = KMS KEY RING \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-ccai-cmek.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter Configure a key for Dialogflow CX location Use the InitializeEncryptionSpec API to configure the key.

### Compliance and security controls \_|\_ Dialogflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls](https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls)
- Source ID: `site-docs-root-2`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Certifications Dialogflow CX is compliant with the following: Compliance Certification Dialogflow CX (including generative features ) Dialogflow ES HIPAA ✔ ✔ ISO 27001 , ISO 27017 , ISO 27018 , and ISO 27701 ✔ ✔ SOC 1 , SOC 2 , SOC 3 ✔ ✔ Security controls Dialogflow CX provides the following security controls: Security controls compliance Dialogflow CX (including generative features ) Dialogflow ES Data Residency Regionalization and location settings Regionalization and data residency Customer-managed encryption keys (CMEK) Customer-managed encryption keys (CMEK) - VPC Service Controls (VPC-SC) Using VPC Service Controls Using VPC Service Controls Access Transparency Access Transparency - Government authorizations Dialogflow CX has received the following authorizations: Authorization Dialogflow CX (including generative features ) Dialogflow ES FedRAMP High Authorization - Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Encryption Spec A customer-managed encryption key specification that can be applied to all created resources (e.g.
- Builder A customer-managed encryption key specification that can be applied to all created resources (e.g.
- Answer Feedback Represents feedback the customer has about the quality & correctness of a certain answer in a conversation. com. google. cloud. dialogflow. v2.
- Builder Represents feedback the customer has about the quality & correctness of a certain answer in a conversation. com. google. cloud. dialogflow. v2.

