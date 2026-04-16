---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.857Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "containsOnly() function"
feature_slug: "containsonly-function"
latest_feature_date: "2023-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-sql"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql"
keywords:
  - "containsonly"
  - "query"
  - "filters"
  - "findings"
  - "whose"
  - "array"
  - "values"
  - "match"
---

# containsOnly() function

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The containsOnly() query function filters findings whose array values match only the specified criteria.

## Extended Definition

The containsOnly() query function filters findings whose array values match only the specified criteria.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-sql)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- You can now use the containsOnly() function to query findings with an array-type attribute or subfield that only contains values that match the specified filter, and no other values.
- This includes support for sorting on JSON object sub-fields, and filtering on: Array elements Full JSON objects with partial string match JSON object sub-fields Learn more about Filtering and sorting findings .
- Additional query operators in the Add filters menu in the Query editor on the Findings page are now available.
- The results can then be filtered locally to remove findings whose strings do not match designated criteria.

### "Profile Cloud SQL data in a single project \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql)
- Source ID: `site-docs-reference-3`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using the exported data profiles and the exported sample findings, you can run queries to get more information about the specific items that were flagged, the infoTypes they matched, their exact locations, their calculated sensitivity levels, and other details.
- PROFILES TABLE ID latest v1 AS profiles table ON findings table . data profile resource name = profiles table . table profile . name To save sample findings to a BigQuery table, follow these steps: Turn on Save sample discovery findings to BigQuery .
- Example query: Show sample findings related to table data profiles This example requires both Save data profile copies to BigQuery and Save sample discovery findings to BigQuery to be enabled.
- You opted to save sample discovery findings to BigQuery and you want to make sure that the service agent has write access to the BigQuery table where the sample findings will be saved.

### "Profile Cloud SQL data in an organization or folder \_|\_ Sensitive Data\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-sql)
- Source ID: `site-docs-reference-3`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using the exported data profiles and the exported sample findings, you can run queries to get more information about the specific items that were flagged, the infoTypes they matched, their exact locations, their calculated sensitivity levels, and other details.
- PROFILES TABLE ID latest v1 AS profiles table ON findings table . data profile resource name = profiles table . table profile . name To save sample findings to a BigQuery table, follow these steps: Turn on Save sample discovery findings to BigQuery .
- Example query: Show sample findings related to table data profiles This example requires both Save data profile copies to BigQuery and Save sample discovery findings to BigQuery to be enabled.
- You opted to save sample discovery findings to BigQuery and you want to make sure that the service agent has write access to the BigQuery table where the sample findings will be saved.

