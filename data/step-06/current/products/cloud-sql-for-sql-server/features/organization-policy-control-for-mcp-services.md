---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.568Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Organization policy control for MCP services"
feature_slug: "organization-policy-control-for-mcp-services"
latest_feature_date: "2026-02-18"
deprecation_date: "2026-03-17"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "organization"
  - "policy"
  - "control"
  - "for"
  - "mcp"
  - "services"
  - "lets"
  - "administrators"
---

# Organization policy control for MCP services

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Organization policy control for MCP services lets administrators restrict MCP use with the gcp.managed.allowedMCPServices constraint; deprecated on 2026-03-17.

## Extended Definition

Organization policy control for MCP services lets administrators restrict MCP use with the gcp.managed.allowedMCPServices constraint; deprecated on 2026-03-17.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- April 12, 2022 Feature Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview . constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
- After March 17, 2026, organization policies that use the gcp.managed.allowedMCPServices constraint won't work, and you can control MCP use with IAM deny policies.
- December 13, 2019 Feature Connection organization policies for Cloud SQL give you the ability to set policies that control access to and from Cloud SQL instances.
- The Cloud SQL remote MCP server lets you interact easily with Cloud SQL instances from LLMs, AI applications, and AI-enabled development platforms.

### "Configure VPC Service Controls \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Save . gcloud gcloud access-context-manager perimeters update PERIMETER ID \ --policy = POLICY ID \ --add-restricted-services = sqladmin.googleapis.com,storage.googleapis.com Where: PERIMETER ID is the ID of the perimeter or the fully qualified identifier for the perimeter.
- To either disallow or disable public IP on Cloud SQL instances: Organization administrators can apply organization policies that disallow creating new instances with public IP.
- To add Cloud SQL and Cloud Storage APIs as restricted services: Console In the Google Cloud console navigation menu, click Security , and then click VPC Service Controls .
- Configure the Virtual Private Cloud (VPC) network Perform the steps in Setting up private connectivity to Google APIs and services .

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- April 12, 2022 Cloud SQL for MySQL Feature Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview . constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
- Cloud SQL for PostgreSQL Feature Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview . constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
- Cloud SQL for SQL Server Feature Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview . constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
- After March 17, 2026, organization policies that use the gcp.managed.allowedMCPServices constraint won't work, and you can control MCP use with IAM deny policies.

