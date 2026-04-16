---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.106Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "Database TCO preferences"
feature_slug: "database-tco-preferences"
latest_feature_date: "2024-03-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
  - "https://docs.cloud.google.com/migration-center/docs/generate-tco-report"
  - "https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools"
keywords:
  - "database"
  - "tco"
  - "preferences"
  - "migration"
  - "center"
  - "lets"
  - "you"
  - "include"
---

# Database TCO preferences

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center lets you include databases in the total cost of ownership report through expanded database preferences.

## Extended Definition

Migration Center lets you include databases in the total cost of ownership report through expanded database preferences.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- [https://docs.cloud.google.com/migration-center/docs/generate-tco-report](https://docs.cloud.google.com/migration-center/docs/generate-tco-report)
- [https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools](https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools)

## Supporting Pages

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 305
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class MigrationCenterAsyncClient (0.4.0) Stay organized with collections Save and categorize content based on your preferences.
- ReportConfig () report config.group preferenceset assignments.group = "group value" report config.group preferenceset assignments.preference set = "preference set value" request = migrationcenter v1 .
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict]] The request object.
- CreatePreferenceSetRequest ( parent="parent value", preference set id="preference set id value", ) Make the request operation = client. create preference set (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreatePreferenceSetRequest , dict]] The request object.

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 305
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ReportConfig () report config.group preferenceset assignments.group = "group value" report config.group preferenceset assignments.preference set = "preference set value" request = migrationcenter v1 .
- Home Documentation Developer tools Python Client libraries Send feedback Class MigrationCenterClient (0.4.0) Stay organized with collections Save and categorize content based on your preferences.
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict] The request object.
- CreatePreferenceSetRequest ( parent="parent value", preference set id="preference set id value", ) Make the request operation = client. create preference set (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreatePreferenceSetRequest , dict] The request object.

### Generate TCO reports \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/generate-tco-report](https://docs.cloud.google.com/migration-center/docs/generate-tco-report)
- Source ID: `site-docs-root`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations If you generate a TCO report for a group that contains a database deployment and its underlying server, Migration Center generates separate cost estimates for the server and the database.
- Home Documentation Migration Migration Center Guides Send feedback Generate TCO reports Stay organized with collections Save and categorize content based on your preferences.
- If assets don't have performance data, Migration Center generates sizing recommendations based on the target sizing strategy that you choose in the migration preferences.
- You can view your TCO report directly in Migration Center, or export it to Google Slides or Google Sheets, or download it as a CSV file or a Microsoft Excel spreadsheet.

### Migration tools \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools](https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following list includes additional migration tools: Storage Transfer Service lets you bring data to Cloud Storage from other cloud providers, online resources, or local data (for example: S3, Blob, Data Lake, on-premises file systems).
- RackWare Management Module (RMM) is a fully-automated enterprise-grade migration solution that lets you migrate physical and virtual servers from any data center or public cloud into Google Cloud.
- Home Documentation Migration Migration Center Guides Send feedback Migration tools Stay organized with collections Save and categorize content based on your preferences.
- Database Migration Service PostgreSQL, MySQL, SQL Server, Oracle Cloud SQL, AlloyDB for PostgreSQL This tool is a serverless service that helps migrate PostgreSQL workloads into Cloud SQL and AlloyDB for PostgreSQL, MySQL and SQL Server workloads into Cloud SQL, and Oracle workloads into Cloud SQL for PostgreSQL or AlloyDB for PostgreSQL.

