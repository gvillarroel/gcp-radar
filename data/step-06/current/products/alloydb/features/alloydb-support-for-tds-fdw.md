---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.575Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB support for tds_fdw"
feature_slug: "alloydb-support-for-tds-fdw"
latest_feature_date: "2025-10-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/alloydb/docs/reference/extensions"
keywords:
  - "tds foreign data wrapper"
  - "TDS protocol"
  - "CREATE EXTENSION tds_fdw"
  - "foreign data wrapper"
  - "Microsoft SQL Server access"
  - "tds_fdw extension"
  - "TDS FDW"
  - "Sybase access"
---

# AlloyDB support for tds_fdw

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB now supports the tds_fdw extension to access TDS protocol databases, such as Microsoft SQL Server and Sybase, through foreign data wrappers.

## Extended Definition

AlloyDB now supports the tds_fdw extension to access TDS protocol databases, such as Microsoft SQL Server and Sybase, through foreign data wrappers.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- October 06, 2025 Feature AlloyDB supports the tds fdw extension, which provides a foreign data wrapper for accessing databases—such as Microsoft SQL Server and Sybase—that use the Tabular Data Stream (TDS) protocol.
- Enabling outbound connectivity allows secure connection between your project and an AlloyDB instance during outbound operations such as migrations or foreign data wrappers (FDW).
- The extension provides a foreign data wrapper for accessing Oracle databases.

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- RUM indexes improve upon standard GIN indexes by storing positional information directly in the index, letting you perform faster phrase searches and relevance ranking without accessing the table data. sslinfo Provides information about the SSL certificate that the current client provided when it connected to the instance. tablefunc Provides various functions that return tables (multiple rows). tcn Provides a trigger function that notifies listeners of changes to the content of database tables. tds fdw Provides a foreign data wrapper ( fdw ) for accessing databases that use the Tabular Data Stream (TDS) protocol, such as Microsoft SQL Server or Sybase. temporal tables Provides support for temporal tables.
- You can use this function to track the last time that a row in a database table was modified. oracle fdw Provides a foreign data wrapper (fdw) for accessing Oracle databases easily and efficiently. orafce Emulates a subset of functions, packages, and operators from the Oracle RDBMS.

