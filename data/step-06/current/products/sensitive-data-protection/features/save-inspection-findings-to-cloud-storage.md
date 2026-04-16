---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.244Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Save inspection findings to Cloud Storage"
feature_slug: "save-inspection-findings-to-cloud-storage"
latest_feature_date: "2025-08-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage"
keywords:
  - "bucket"
  - "saved"
  - "save"
  - "inspection"
  - "findings"
  - "storage"
---

# Save inspection findings to Cloud Storage

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Inspection job findings can be saved to a Cloud Storage bucket or folder.

## Extended Definition

Inspection job findings can be saved to a Cloud Storage bucket or folder.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage)

## Supporting Pages

### "Profile Cloud Storage data in a single project \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage)
- Source ID: `site-docs-reference-3`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You opted to save sample discovery findings to BigQuery and you want to make sure that the service agent has write access to the BigQuery table where the sample findings will be saved.
- Example conditions Suppose that you have the following configuration: Minimum conditions Minimum duration: 24 hours Bucket attribute conditions None selected Object attribute conditions Scan objects with the Standard storage class Scan objects with the Nearline storage class Time condition Timestamp: 05/4/22, 11:59 PM In this case, Sensitive Data Protection excludes any bucket that was created on or before May 4, 2022, 11:59 PM.
- SELECT findings table . quote , findings table . infotype . name , findings table . location . container name , profiles table . file store profile . file store path as bucket name , profiles table . file store profile . sensitivity score as bucket sensitivity score FROM FINDINGS TABLE PROJECT ID .
- PROFILES TABLE ID latest v1 AS profiles table ON findings table . data profile resource name = profiles table . file store profile . name To save sample findings to a BigQuery table, follow these steps: Turn on Save sample discovery findings to BigQuery .

### "Profile Cloud Storage data in an organization or folder \_|\_ Sensitive\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage)
- Source ID: `site-docs-reference-3`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You opted to save sample discovery findings to BigQuery and you want to make sure that the service agent has write access to the BigQuery table where the sample findings will be saved.
- Example conditions Suppose that you have the following configuration: Minimum conditions Minimum duration: 24 hours Bucket attribute conditions None selected Object attribute conditions Scan objects with the Standard storage class Scan objects with the Nearline storage class Time condition Timestamp: 05/4/22, 11:59 PM In this case, Sensitive Data Protection excludes any bucket that was created on or before May 4, 2022, 11:59 PM.
- SELECT findings table . quote , findings table . infotype . name , findings table . location . container name , profiles table . file store profile . file store path as bucket name , profiles table . file store profile . sensitivity score as bucket sensitivity score FROM FINDINGS TABLE PROJECT ID .
- PROFILES TABLE ID latest v1 AS profiles table ON findings table . data profile resource name = profiles table . file store profile . name To save sample findings to a BigQuery table, follow these steps: Turn on Save sample discovery findings to BigQuery .

### "Profile Azure Blob Storage data \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage)
- Source ID: `site-docs-reference-3`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You opted to save sample discovery findings to BigQuery and you want to make sure that the service agent has write access to the BigQuery table where the sample findings will be saved.
- SELECT findings table . quote , findings table . infotype . name , findings table . location . container name , profiles table . file store profile . file store path as bucket name , profiles table . file store profile . sensitivity score as bucket sensitivity score FROM FINDINGS TABLE PROJECT ID .
- PROFILES TABLE ID latest v1 AS profiles table ON findings table . data profile resource name = profiles table . file store profile . name To save sample findings to a BigQuery table, follow these steps: Turn on Save sample discovery findings to BigQuery .
- Example query: Show sample findings related to file store data profiles This example requires both Save data profile copies to BigQuery and Save sample discovery findings to BigQuery to be enabled.

