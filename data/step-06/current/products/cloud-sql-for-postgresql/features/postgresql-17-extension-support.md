---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.757Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "PostgreSQL 17 extension support"
feature_slug: "postgresql-17-extension-support"
latest_feature_date: "2025-01-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/features"
  - "https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli"
  - "https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp"
keywords:
  - "plugins"
  - "extensions"
  - "adds"
  - "extension"
---

# PostgreSQL 17 extension support

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for PostgreSQL 17 adds support for a new set of PostgreSQL extensions and plugins.

## Extended Definition

Cloud SQL for PostgreSQL 17 adds support for a new set of PostgreSQL extensions and plugins.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/features](https://docs.cloud.google.com/sql/docs/postgres/features)
- [https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli)
- [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp)

## Supporting Pages

### Cloud SQL for PostgreSQL features \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/features](https://docs.cloud.google.com/sql/docs/postgres/features)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Unsupported features for Cloud SQL for PostgreSQL Any feature that requires SUPERUSER privileges with the following exceptions: You can use the CREATE EXTENSION statement only for supported extensions .
- Supported PostgreSQL extensions for Cloud SQL Cloud SQL supports many PostgreSQL extensions.
- For a complete list of these extensions, see Configure PostgreSQL extensions .

### "Build context sets using Gemini CLI \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli)
- Source ID: `site-iam-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- To update the DB Context Enrichment extension, run the following command: gemini extensions update mcp-db-context-enrichment To update the DB Context Enrichment extension or to replace the GEMINI API KEY , run the following command: gemini extensions config mcp-db-context-enrichment GEMINI API KEY Replace GEMINI API KEY with your Gemini API key.
- To install the DB Context Enrichment extension, follow these steps: Install the DB Context Enrichment Gemini CLI extension: gemini extensions install https://github.com/GoogleCloudPlatform/db-context-enrichment Note: The extension requires a Gemini API key at installation to authenticate with the Gemini API and enable context generation.
- To verify the installed version of the extension, run the following command: gemini extensions list Make sure that the version is 0.4.2 or higher.
- Generate Context The extensions installed earlier empower Gemini CLI to help you author context in the form of a JSON file.

### "Export and import using pg_dump, pg_dumpall, and pg_restore \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp)
- Source ID: `site-docs-root`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- See PostgreSQL Extensions for the list of supported extensions.
- In addition, you must remove all of the following: Extension-related statements, if Cloud SQL does not support that extension.
- EXTENSION )/; \1/g' > DATABASE NAME .toc Post-processing from sed comments out all extension statements in the SQL dump file.
- This extension comes pre-installed on Cloud SQL Postgres instances.

