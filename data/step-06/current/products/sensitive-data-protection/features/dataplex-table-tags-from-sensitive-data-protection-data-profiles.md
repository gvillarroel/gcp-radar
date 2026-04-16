---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.358Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Dataplex table tags from Sensitive Data Protection data profiles"
feature_slug: "dataplex-table-tags-from-sensitive-data-protection-data-profiles"
latest_feature_date: "2023-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-sql"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql"
keywords:
  - "exporting"
  - "dataplex"
  - "automatically"
  - "tags"
  - "profiles"
  - "table"
---

# Dataplex table tags from Sensitive Data Protection data profiles

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Exporting data profiles to Dataplex automatically attaches tags with profile insights to profiled BigQuery tables.

## Extended Definition

Exporting data profiles to Dataplex automatically attaches tags with profile insights to profiled BigQuery tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-sql)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql)

## Supporting Pages

### "Add Knowledge Catalog aspects based on insights from data profiles \_|\_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects)
- Source ID: `site-api-reference-required-2`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples: Project-level profile: https://console.cloud.google.com/security/sensitive-data-protection/projects/ PROJECT ID /locations/ LOCATION /tableDataProfiles/ PROFILE ID Organization-level or folder-level profile: https://console.cloud.google.com/security/sensitive-data-protection/organizations/ ORGANIZATION ID /locations/ LOCATION /tableDataProfiles/ PROFILE ID Enable the Dataplex API The Dataplex API must be enabled in each project that contains data that you want to add aspects for.
- Find all resources that have a project-level profile aspect:sensitive-data-protection-profile.projectProfile Find all resources that have an organization-level profile aspect:sensitive-data-protection-profile.organizationProfile Migrate to the Send to Dataplex Catalog as aspects action To migrate a discovery configuration that is set to use the deprecated Send to Dataplex as tags action, follow these steps: Edit the discovery configuration that is configured to send discovery results to Data Catalog as tags.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to search for aspects associated with your resources: View Knowledge Catalog entries: dataplex.entries.list dataplex.entries.get View BigQuery datasets and tables: bigquery.datasets.get bigquery.tables.get View Vertex AI datasets: aiplatform.datasets.get You might also be able to get these permissions with custom roles or other predefined roles .
- The generated aspects include the following insights: Calculated sensitivity level of the table or dataset Calculated data risk level of the table or dataset Information types ( infoTypes ) that were detected in the table or dataset Insights from Sensitive Data Protection data profiles can help you use Knowledge Catalog to discover sensitive and high-risk data in your organization.

### "Profile Cloud SQL data in a single project \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql)
- Source ID: `site-docs-reference-3`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SELECT findings table . quote , findings table . infotype . name , findings table . location . container name , findings table . location . data profile finding record location . field . name AS field name , profiles table . table profile . dataset project id AS project id , profiles table . table profile . dataset id AS dataset id , profiles table . table profile . table id AS table id , profiles table . table profile . sensitivity score AS table sensitivity score FROM FINDINGS TABLE PROJECT ID .
- PROFILES TABLE ID latest v1 AS profiles table ON findings table . data profile resource name = profiles table . table profile . name To save sample findings to a BigQuery table, follow these steps: Turn on Save sample discovery findings to BigQuery .
- This option is useful in the following cases: You opted to save data profiles to BigQuery and you want to make sure the service agent has write access to the BigQuery table where the data profile copies will be saved.
- If we find that your organization or project would benefit from a new improvement that we implement, we might automatically regenerate your data profiles and redo the actions in your scan configuration .

### "Profile Cloud SQL data in an organization or folder \_|\_ Sensitive Data\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-sql)
- Source ID: `site-docs-reference-3`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SELECT findings table . quote , findings table . infotype . name , findings table . location . container name , findings table . location . data profile finding record location . field . name AS field name , profiles table . table profile . dataset project id AS project id , profiles table . table profile . dataset id AS dataset id , profiles table . table profile . table id AS table id , profiles table . table profile . sensitivity score AS table sensitivity score FROM FINDINGS TABLE PROJECT ID .
- PROFILES TABLE ID latest v1 AS profiles table ON findings table . data profile resource name = profiles table . table profile . name To save sample findings to a BigQuery table, follow these steps: Turn on Save sample discovery findings to BigQuery .
- If we find that your organization or project would benefit from a new improvement that we implement, we might automatically regenerate your data profiles and redo the actions in your scan configuration .
- Example query: Show sample findings related to table data profiles This example requires both Save data profile copies to BigQuery and Save sample discovery findings to BigQuery to be enabled.

