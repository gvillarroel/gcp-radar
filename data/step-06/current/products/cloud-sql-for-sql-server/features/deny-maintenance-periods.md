---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.589Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "deny maintenance periods"
feature_slug: "deny-maintenance-periods"
latest_feature_date: "2020-10-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/best-practices"
keywords:
  - "deny"
  - "maintenance"
  - "periods"
  - "sql"
  - "lets"
  - "you"
  - "block"
  - "automatic"
---

# deny maintenance periods

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL lets you block automatic maintenance during specified date ranges.

## Extended Definition

Cloud SQL lets you block automatic maintenance during specified date ranges.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)
- [https://docs.cloud.google.com/sql/docs/sqlserver/best-practices](https://docs.cloud.google.com/sql/docs/sqlserver/best-practices)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- AUTOMATIC ROTATION DURING MAINTENANCE : With this option, automatic server certificate rotation is enabled during Cloud SQL scheduled maintenance or self-service maintenance updates.
- SERVER CERTIFICATE ROTATION MODE : For automatic server certificate rotation for your instance, specify AUTOMATIC ROTATION DURING MAINTENANCE .
- SERVER CERTIFICATE ROTATION MODE : For automatic server certificate rotation for your instance, specify AUTOMATIC ROTATION DURING MAINTENANCE .
- Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 32 vCPUs, 3.75 GB to 208 GB SQL Server 2017 Standard, SQL Server 2019 Standard, SQL Server 2022 Standard, and SQL Server 2025 Standard Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 48 vCPUs, 3.75 GB to 312 GB SQL Server 2017 Enterprise, SQL Server 2019 Enterprise, SQL Server 2022 Enterprise, and SQL Server 2025 Enterprise Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 2 to 96 vCPUs, 3.75 GB to 624 GB Performance-optimized (Cloud SQL Enterprise Plus only) 2 vCPUs, 16 GB 4 vCPUs, 32 GB 8 vCPUs, 64 GB 16 vCPUs, 128 GB 32 vCPUs, 256 GB 48 vCPUs, 384 GB 64 vCPUs, 512 GB 80 vCPUs, 640 GB 96 vCPUs, 768 GB 128 vCPUs, 864 GB Memory-optimized (Cloud SQL Enterprise Plus only) 4 vCPUs, 128 GB 8 vCPUs, 256 GB 16 vCPUs, 512 GB Simultaneous multithreading Simultaneous multithreading (SMT) on Cloud SQL for SQL Server lets you run two virtual CPUs (vCPUs) as independent, separate threads on one physical core.

### "General best practices \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/best-practices](https://docs.cloud.google.com/sql/docs/sqlserver/best-practices)
- Source ID: `site-docs-reference-required-4`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- If the enable automatic storage increases instance setting is disabled or the automatic storage increase limit is enabled, ensure you have at least 20% available space to accommodate any critical database maintenance operations that Cloud SQL may perform.
- The value is automatically calculated by the SQL Server engine at startup. max server memory (mb) This flag limits the amount of memory that Cloud SQL can allocate for its internal pools.
- If you don't set a value for the flag and you resize your instance, then Cloud SQL adjusts the value of the flag automatically to meet our recommendations for the new instance size.
- Additionally, ensure that the Cloud SQL Enable automatic storage increases feature is enabled so Cloud SQL can add storage space if the database and the instance run out of space.

### "Use the Cloud SQL remote MCP server \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)
- Source ID: `site-docs-reference-required-4`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- See the following example command: gcloud model-armor floorsettings update \ --full-uri = 'projects/ PROJECT ID /locations/global/floorSetting' \ --enable-floor-setting-enforcement = TRUE \ --add-integrated-services = GOOGLE MCP SERVER \ --google-mcp-server-enforcement-type = INSPECT AND BLOCK \ --enable-google-mcp-server-cloud-logging \ --malicious-uri-filter-settings-enforcement = ENABLED \ --add-rai-settings-filters = '[{"confidenceLevel": "MEDIUM AND ABOVE", "filterType": "DANGEROUS"}]' Replace PROJECT ID with your Google Cloud project ID.
- For example, you can deny or allow access based on: The principal Tool properties like read-only The application's OAuth client ID For more information, see Control MCP use with Identity and Access Management .
- The Cloud SQL remote MCP server lets you access and run Cloud SQL tools to create, manage, and query Cloud SQL resources from your AI-enabled development environments and AI agent platforms. .
- Note the following settings: INSPECT AND BLOCK : The enforcement type that inspects content for the Google MCP server and blocks prompts and responses that match the filters.

