---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.345Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Cloud SQL data profiling"
feature_slug: "cloud-sql-data-profiling"
latest_feature_date: "2024-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/known-issues"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-sql"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql"
keywords:
  - "profiling"
  - "tables"
  - "discovery"
  - "profile"
---

# Cloud SQL data profiling

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Sensitive Data Protection discovery can profile Cloud SQL tables at the organization, folder, or project level.

## Extended Definition

Sensitive Data Protection discovery can profile Cloud SQL tables at the organization, folder, or project level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/known-issues](https://docs.cloud.google.com/sensitive-data-protection/docs/known-issues)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-sql)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql)

## Supporting Pages

### Known issues \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/known-issues](https://docs.cloud.google.com/sensitive-data-protection/docs/known-issues)
- Source ID: `site-docs-reference-3`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you have row-level security policies applied to your BigQuery tables, we recommend that you set a TRUE filter and include the service agent in the grantee list: If you're profiling data at the organization or folder level , include the service agent of the container project in the grantee list.
- Organizations or projects with more than 500 million tables Sensitive Data Protection returns an error if you attempt to profile an organization or project that has more than 500 million tables.
- Rows with row-level security can't be scanned Row-level security policies can prevent Sensitive Data Protection from inspecting and profiling the protected BigQuery tables.
- Discovery for Cloud SQL Security Command Center duplicate findings Cloud SQL data profiling supports publishing findings to Security Command Center .

### "Profile Cloud SQL data in a single project \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql)
- Source ID: `site-docs-reference-3`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Frequency section, specify whether the discovery service should profile the tables you selected and, if so, how often: If you never want the tables to be profiled, turn off Do profile this data .
- PROFILES TABLE ID latest v1 AS profiles table ON findings table . data profile resource name = profiles table . table profile . name To save sample findings to a BigQuery table, follow these steps: Turn on Save sample discovery findings to BigQuery .
- Example query: Show sample findings related to table data profiles This example requires both Save data profile copies to BigQuery and Save sample discovery findings to BigQuery to be enabled.
- If Sensitive Data Protection later adds discovery support for more Cloud SQL database resource types, those types will only be profiled if you return to this list and select them.

### "Profile Cloud SQL data in an organization or folder \_|\_ Sensitive Data\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-sql)
- Source ID: `site-docs-reference-3`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Frequency section, specify whether the discovery service should profile the tables you selected and, if so, how often: If you never want the tables to be profiled, turn off Do profile this data .
- PROFILES TABLE ID latest v1 AS profiles table ON findings table . data profile resource name = profiles table . table profile . name To save sample findings to a BigQuery table, follow these steps: Turn on Save sample discovery findings to BigQuery .
- Example query: Show sample findings related to table data profiles This example requires both Save data profile copies to BigQuery and Save sample discovery findings to BigQuery to be enabled.
- If Sensitive Data Protection later adds discovery support for more Cloud SQL database resource types, those types will only be profiled if you return to this list and select them.

