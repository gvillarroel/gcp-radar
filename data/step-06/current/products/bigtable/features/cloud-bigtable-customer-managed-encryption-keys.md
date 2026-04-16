---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.029Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable customer-managed encryption keys"
feature_slug: "cloud-bigtable-customer-managed-encryption-keys"
latest_feature_date: "2021-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cmek"
  - "https://docs.cloud.google.com/bigtable/docs/creating-instance"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/EncryptionInfo"
keywords:
  - "encryption"
  - "customer"
  - "managed"
  - "keys"
  - "cmek"
  - "generally"
---

# Cloud Bigtable customer-managed encryption keys

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Customer-managed encryption keys (CMEK) support for Cloud Bigtable is now generally available.

## Extended Definition

Customer-managed encryption keys (CMEK) support for Cloud Bigtable is now generally available.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek)
- [https://docs.cloud.google.com/bigtable/docs/creating-instance](https://docs.cloud.google.com/bigtable/docs/creating-instance)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/EncryptionInfo](https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/EncryptionInfo)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) \_|\_ Bigtable \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek)
- Source ID: `site-docs-reference-2`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Bigtable.
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .
- Customer-managed encryption keys (CMEK) By default, Bigtable encrypts customer content at rest.
- Some data is protected by Google default encryption at rest and not by the CMEK key: A subset of row keys that mark range boundaries and are used for routing Debugging data including core dumps and operational logs Data in transit or in memory A subset of timestamp values used for garbage collection Bigtable uses envelope encryption for data at rest.

### Create an instance \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/creating-instance](https://docs.cloud.google.com/bigtable/docs/creating-instance)
- Source ID: `site-docs-reference-2`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Optional: If you want to use customer-managed encryption keys (CMEK) instead of the default Google-managed encryption, have your CMEK key ID ready before you create your new instance.
- For more information, see Use customer-managed encryption keys (CMEK) .
- For Autoscaling , enter values for the following: Minimum number of nodes Maximum number of nodes CPU utilization target Storage utilization target Optional: To protect your instance with CMEK instead of the default Google-managed encryption, complete the following: Click Show encryption options .
- The KMS KEY value must be set in the following format: projects/ PROJECT /locations/ LOCATION /keyRings/ KEYRING /cryptoKeys/ KEY Replace the following: PROJECT : the permanent identifier for the project LOCATION : the location of your cluster KEYRING : the name of the key ring that contains the key KEY : the name of the key The following is an example: projects/examplestore.com:dev/locations/us-east1/keyRings/devt-cmek-2/cryptoKeys/key2 If the instance is CMEK-protected, each cluster must be in the same region as its CMEK key.

### EncryptionInfo \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/EncryptionInfo](https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/EncryptionInfo)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status.
- CUSTOMER MANAGED ENCRYPTION The data backing this resource is encrypted at rest with a key that is managed by the customer.
- GOOGLE DEFAULT ENCRYPTION The data backing this resource is encrypted at rest with a key that is fully managed by Google.
- JSON representation { "encryptionType" : enum ( EncryptionType ) , "encryptionStatus" : { object ( Status ) } , "kmsKeyVersion" : string } Fields encryptionType enum ( EncryptionType ) Output only.

