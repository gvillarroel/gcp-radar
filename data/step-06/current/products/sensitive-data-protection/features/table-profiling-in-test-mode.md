---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.367Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Table profiling in test mode"
feature_slug: "table-profiling-in-test-mode"
latest_feature_date: "2023-04-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-amazon-s3"
keywords:
  - "single"
  - "test"
  - "mode"
  - "profiling"
  - "profile"
  - "table"
---

# Table profiling in test mode

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

You can profile a single table in test mode with up to 25 free profiling runs for tables up to 1 TB.

## Extended Definition

You can profile a single table in test mode with up to 25 free profiling runs for tables up to 1 TB.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-amazon-s3](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-amazon-s3)

## Supporting Pages

### "Profile Cloud SQL data in a single project \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql)
- Source ID: `site-docs-reference-3`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PROFILES TABLE ID latest v1 AS profiles table ON findings table . data profile resource name = profiles table . table profile . name To save sample findings to a BigQuery table, follow these steps: Turn on Save sample discovery findings to BigQuery .
- FINDINGS TABLE ID latest v1 AS findings table INNER JOIN PROFILES TABLE PROJECT ID .
- SELECT findings table . quote , findings table . infotype . name , findings table . location . container name , findings table . location . data profile finding record location . field . name AS field name , profiles table . table profile . dataset project id AS project id , profiles table . table profile . dataset id AS dataset id , profiles table . table profile . table id AS table id , profiles table . table profile . sensitivity score AS table sensitivity score FROM FINDINGS TABLE PROJECT ID .
- This option is useful in the following cases: You opted to save data profiles to BigQuery and you want to make sure the service agent has write access to the BigQuery table where the data profile copies will be saved.

### "Profile Cloud Storage data in a single project \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage)
- Source ID: `site-docs-reference-3`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PROFILES TABLE ID latest v1 AS profiles table ON findings table . data profile resource name = profiles table . file store profile . name To save sample findings to a BigQuery table, follow these steps: Turn on Save sample discovery findings to BigQuery .
- FINDINGS TABLE ID latest v1 AS findings table INNER JOIN PROFILES TABLE PROJECT ID .
- SELECT findings table . quote , findings table . infotype . name , findings table . location . container name , profiles table . file store profile . file store path as bucket name , profiles table . file store profile . sensitivity score as bucket sensitivity score FROM FINDINGS TABLE PROJECT ID .
- This option is useful in the following cases: You opted to save data profiles to BigQuery and you want to make sure the service agent has write access to the BigQuery table where the data profile copies will be saved.

### "Profile Amazon S3 data \_|\_ Sensitive Data Protection \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-amazon-s3](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-amazon-s3)
- Source ID: `site-docs-reference-3`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PROFILES TABLE ID latest v1 AS profiles table ON findings table . data profile resource name = profiles table . file store profile . name To save sample findings to a BigQuery table, follow these steps: Turn on Save sample discovery findings to BigQuery .
- FINDINGS TABLE ID latest v1 AS findings table INNER JOIN PROFILES TABLE PROJECT ID .
- SELECT findings table . quote , findings table . infotype . name , findings table . location . container name , profiles table . file store profile . file store path as bucket name , profiles table . file store profile . sensitivity score as bucket sensitivity score FROM FINDINGS TABLE PROJECT ID .
- Review and create the configuration If you want to make sure that profiling doesn't start automatically after you create the scan configuration, select Create scan in paused mode .

