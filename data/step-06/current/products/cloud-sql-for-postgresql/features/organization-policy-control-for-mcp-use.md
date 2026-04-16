---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.740Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Organization policy control for MCP use"
feature_slug: "organization-policy-control-for-mcp-use"
latest_feature_date: "2026-02-18"
deprecation_date: "2026-03-17"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls"
  - "https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview"
keywords:
  - "restrict"
  - "administrators"
  - "organization"
  - "control"
  - "policy"
  - "lets"
---

# Organization policy control for MCP use

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Organization policy control for MCP use lets administrators restrict MCP services with an organization policy constraint; deprecated on 2026-03-17.

## Extended Definition

Organization policy control for MCP use lets administrators restrict MCP services with an organization policy constraint; deprecated on 2026-03-17.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls)
- [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview)

## Supporting Pages

### "Configure VPC Service Controls \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optionally, add an organization policy that restricts public IP on instances in projects that use that policy.
- Click Save . gcloud gcloud access-context-manager perimeters update PERIMETER ID \ --policy = POLICY ID \ --add-restricted-services = sqladmin.googleapis.com,storage.googleapis.com Where: PERIMETER ID is the ID of the perimeter or the fully qualified identifier for the perimeter.
- To either disallow or disable public IP on Cloud SQL instances: Organization administrators can apply organization policies that disallow creating new instances with public IP.
- To add Cloud SQL and Cloud Storage APIs as restricted services: Console In the Google Cloud console navigation menu, click Security , and then click VPC Service Controls .

### "Configure VPC Service Controls \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optionally, add an organization policy that restricts public IP on instances in projects that use that policy.
- Click Save . gcloud gcloud access-context-manager perimeters update PERIMETER ID \ --policy = POLICY ID \ --add-restricted-services = sqladmin.googleapis.com,storage.googleapis.com Where: PERIMETER ID is the ID of the perimeter or the fully qualified identifier for the perimeter.
- To either disallow or disable public IP on Cloud SQL instances: Organization administrators can apply organization policies that disallow creating new instances with public IP.
- To add Cloud SQL and Cloud Storage APIs as restricted services: Console In the Google Cloud console navigation menu, click Security , and then click VPC Service Controls .

### "Data residency overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VPC Service Controls help you enforce data residency by letting you restrict the use of Cloud SQL APIs to import and export data using either the Cloud SQL Admin API or the Cloud Storage API.
- You can use organizational policy constraints to enforce data residency requirements at the organization, project, or folder level.
- To enable or disable services for sets of users, you can combine organizational policy constraints using IAM policy configurations.
- Control the network locations where users can access data, as well as control cloud administrators' access to this data.

