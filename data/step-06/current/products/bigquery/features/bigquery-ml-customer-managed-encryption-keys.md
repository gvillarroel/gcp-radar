---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.803Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML customer-managed encryption keys"
feature_slug: "bigquery-ml-customer-managed-encryption-keys"
latest_feature_date: "2019-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek"
  - "https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "bigquery"
  - "ml"
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "supports"
  - "kms"
---

# BigQuery ML customer-managed encryption keys

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML supports customer-managed Cloud KMS keys to encrypt ML models.

## Extended Definition

BigQuery ML supports customer-managed Cloud KMS keys to encrypt ML models.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek)
- [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Copy a table with customer-managed encryption keys (CMEK) \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek)
- Source ID: `site-docs-reference-required-15`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics BigQuery Samples Copy a table with customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // copyTableWithCMEK demonstrates creating a copy of a table and ensuring the copied data is // protected with a customer managed encryption key. func copyTableWithCMEK ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- Explore further For detailed documentation that includes this code sample, see the following: Customer-managed Cloud KMS keys Code sample Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .
- Copy a table with customer-managed encryption keys (CMEK).

### AEAD encryption concepts \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts)
- Source ID: `site-docs-reference-2`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery also provides support for customer managed encryption keys (CMEKs), which lets you encrypt tables using specific encryption keys.
- The KEK is a symmetric encryption keyset that is stored securely in the Cloud Key Management Service and managed using Cloud KMS permissions and roles .
- Cloud KMS keys GoogleSQL supports AEAD encryption functions with Cloud KMS keys to further secure your data.
- GoogleSQL for BigQuery supports Authenticated Encryption with Associated Data (AEAD) encryption.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery only supports unenforced primary keys. foreign key : An expression that defines a foreign key table constraint .
- For more information, see Customer-managed Cloud KMS keys .
- For more information, see Customer-managed Cloud KMS keys .
- BigQuery only supports unenforced foreign keys.

