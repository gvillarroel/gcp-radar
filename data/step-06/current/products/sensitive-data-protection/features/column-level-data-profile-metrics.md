---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.368Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Column-level data profile metrics"
feature_slug: "column-level-data-profile-metrics"
latest_feature_date: "2023-02-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/analyze-data-profiles"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/metrics-reference"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles"
keywords:
  - "estimated"
  - "metrics"
  - "column"
  - "include"
  - "profiles"
  - "level"
  - "profile"
---

# Column-level data profile metrics

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Column-level data profiles now include estimated null proportion and estimated uniqueness metrics.

## Extended Definition

Column-level data profiles now include estimated null proportion and estimated uniqueness metrics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/analyze-data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/analyze-data-profiles)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/metrics-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/metrics-reference)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)

## Supporting Pages

### "Analyze data profiles stored in BigQuery \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/analyze-data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/analyze-data-profiles)
- Source ID: `site-api-reference-required-2`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about the Free text score and Other infoTypes metrics, see Column data profiles .
- List table profiles that contain columns of credit card numbers, US Social Security numbers, and person names SELECT table full resource , COUNT ( ) AS count findings FROM ( SELECT DISTINCT column profile . table full resource , column profile . column info type . info type . name FROM TABLE OR VIEW WHERE column profile . column info type . info type . name IN ( 'PERSON NAME' , 'CREDIT CARD NUMBER' , 'US SOCIAL SECURITY NUMBER' ) ORDER BY column profile . table full resource ) ot1 GROUP BY table full resource increase this number to match the total distinct infoTypes that must be present HAVING count findings > = 3 This query uses the following built-in infoTypes : CREDIT CARD NUMBER : represents a credit card number PERSON NAME : represents the full name of a person US SOCIAL SECURITY NUMBER represents a US Social Security number For information about how to remediate these findings, see Recommended strategies for mitigating data risk .
- The Sensitive Data Protection Dashboard is a multi-page report that gives you a quick high-level view of your data profiles, including breakdowns by risk, by infoType, and by location.
- For example, a query on the output table can return multiple column data profiles for the same column—one for each time that column was profiled.

### Metrics reference \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/metrics-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/metrics-reference)
- Source ID: `site-docs-reference-3`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Column data profiles Each column data profile has the following fields: Insights Column data profiles provide the following insights: Data risk Level of risk associated with the data at its current state.
- Table data profiles Each table data profile has the following fields: Insights Table data profiles provide the following insights: Data risk Level of risk associated with the data at its current state.
- Insights File store data profiles provide the following insights: Data risk Level of risk associated with the data at its current state.
- Insights Project data profiles provide the following insights: Data risk Level of risk associated with the data at its current state.

### "Overview of sensitive data discovery \_|\_ Sensitive Data Protection \_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)
- Source ID: `site-docs-reference-3`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It includes the following settings: Scope (organization, folder, or project) of the discovery operation Type of resource to profile Inspection templates to use Scan frequency Specific subsets of data that should be included in or excluded from discovery Actions that you want Sensitive Data Protection to take after discovery—for example, which Google Cloud services to publish the profiles to Service agent to use for discovery operations For information about how to create an organization-level or project-level discovery scan configuration, see the following pages: Discovery type Create an organization-level scan configuration Create a project-level scan configuration 1 Discovery for BigQuery data Profile BigQuery data in an organization or folder Profile BigQuery data in a single project Discovery for Cloud SQL data Profile Cloud SQL data in an organization or folder Profile Cloud SQL data in a single project Discovery for Cloud Storage data Profile Cloud Storage data in an organization or folder Profile Cloud Storage data in a single project Discovery for Vertex AI data Profile Vertex AI data in an organization or folder Profile Vertex AI data in a single project Discovery for Amazon S3 data Discovery for Amazon S3 data Not applicable Discovery for Azure Blob Storage data Discovery for Azure Blob Storage data Not applicable Secrets discovery (no profiles generated) Configure secrets discovery at the organization level Configure secrets discovery at the project level 1 Not suitable for customers who have an organization-level discovery subscription, such as one provided through Security Command Center Scan configuration scopes You can create a scan configuration at the following levels: Organization Folder Project Single data resource At the organization and folder levels, if two or more active scan configurations have the same project in their scope, Sensitive Data Protection determines which scan configuration can generate profiles for that project.
- Discovery for BigQuery and BigLake When you profile BigQuery data, data profiles are generated at the project, table, and column levels.
- Discovery for Cloud SQL When you profile Cloud SQL data, data profiles are generated at the project, table, and column levels.
- For example, when you profile BigQuery data, profiles are generated at the project, table, and column levels.

