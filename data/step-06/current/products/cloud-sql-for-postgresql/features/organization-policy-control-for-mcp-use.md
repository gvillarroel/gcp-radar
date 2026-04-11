---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.271Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Organization policy control for MCP use"
feature_slug: "organization-policy-control-for-mcp-use"
latest_feature_date: "2026-02-18"
deprecation_date: "2026-03-17"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls"
keywords:
  - "organization"
  - "policy"
  - "control"
  - "for"
  - "mcp"
  - "use"
  - "lets"
  - "administrators"
---

# Organization policy control for MCP use

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Organization policy control for MCP use lets administrators restrict MCP services with an organization policy constraint; deprecated on 2026-03-17.

## Extended Definition

Organization policy control for MCP use lets administrators restrict MCP services with an organization policy constraint; deprecated on 2026-03-17.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- April 12, 2022 Feature Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview . constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
- After March 17, 2026, organization policies that use the gcp.managed.allowedMCPServices constraint won't work, and you can control MCP use with IAM deny policies.
- For more information about controlling MCP use, see Control MCP use with IAM .
- Deprecated Control of MCP use with organization policies is deprecated.

### "Configure VPC Service Controls \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Optionally, add an organization policy that restricts public IP on instances in projects that use that policy.
- Click Save . gcloud gcloud access-context-manager perimeters update PERIMETER ID \ --policy = POLICY ID \ --add-restricted-services = sqladmin.googleapis.com,storage.googleapis.com Where: PERIMETER ID is the ID of the perimeter or the fully qualified identifier for the perimeter.
- To either disallow or disable public IP on Cloud SQL instances: Organization administrators can apply organization policies that disallow creating new instances with public IP.
- Enable the API Add the Identity and Access Management (IAM) roles to the user or service account you are using to set up and administer VPC Service Controls.

### "Configure VPC Service Controls \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Optionally, add an organization policy that restricts public IP on instances in projects that use that policy.
- Click Save . gcloud gcloud access-context-manager perimeters update PERIMETER ID \ --policy = POLICY ID \ --add-restricted-services = sqladmin.googleapis.com,storage.googleapis.com Where: PERIMETER ID is the ID of the perimeter or the fully qualified identifier for the perimeter.
- To either disallow or disable public IP on Cloud SQL instances: Organization administrators can apply organization policies that disallow creating new instances with public IP.
- Enable the API Add the Identity and Access Management (IAM) roles to the user or service account you are using to set up and administer VPC Service Controls.

