---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.624Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "tempdb file size control"
feature_slug: "tempdb-file-size-control"
latest_feature_date: "2025-01-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/best-practices"
keywords:
  - "tempdb"
  - "file"
  - "size"
  - "control"
  - "lets"
  - "you"
  - "manage"
  - "the"
---

# tempdb file size control

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Tempdb file size control lets you manage the file size of the SQL Server tempdb database.

## Extended Definition

Tempdb file size control lets you manage the file size of the SQL Server tempdb database.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/best-practices](https://docs.cloud.google.com/sql/docs/sqlserver/best-practices)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- After you connect to an instance, the sqlserver user can manage the tempdb files.
- Cloud SQL for SQL Server Feature Control the file size of the tempdb database.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Cloud SQL for MySQL Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.
- April 12, 2022 Cloud SQL for MySQL Feature Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview . constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Specifically, the user has the CONTROL permission on the tempdb database, and can do many operations, including (and not limited to) the following: ALTER DATABASE [ tempdb ] ADD FILE ALTER DATABASE [ tempdb ] REMOVE March 29, 2021 Feature You can integrate Cloud SQL for SQL Server with Managed Service for Microsoft Active Directory.
- After you connect to an instance, the sqlserver user can manage the tempdb files.
- January 17, 2025 Feature Control the file size of the tempdb database.
- April 12, 2022 Feature Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview . constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.

### "General best practices \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/best-practices](https://docs.cloud.google.com/sql/docs/sqlserver/best-practices)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- If you don't set a value for this flag, then Cloud SQL manages the value automatically, based on the size of the RAM for your instance.
- If, after the resize, you want to manually control the flag value, you'll need to enter a new value to reactivate manual control.
- All files in tempdb should be equally sized and have the same file growth set.
- To improve the efficiency of the plan cache for workloads that contain many single use ad hoc batches, set this option to 1 . tempdb Pre-size tempdb so that it does not need to autogrow.

