---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.078Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "Server-to-hosted-database relationship view"
feature_slug: "server-to-hosted-database-relationship-view"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools"
  - "https://docs.cloud.google.com/migration-center/docs/view-assets"
  - "https://docs.cloud.google.com/migration-center/docs/migration-center-overview"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
keywords:
  - "server"
  - "to"
  - "hosted"
  - "database"
  - "relationship"
  - "view"
  - "migration"
  - "center"
---

# Server-to-hosted-database relationship view

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center shows the relationship between a server and a hosted database directly in the Console.

## Extended Definition

Migration Center shows the relationship between a server and a hosted database directly in the Console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools](https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools)
- [https://docs.cloud.google.com/migration-center/docs/view-assets](https://docs.cloud.google.com/migration-center/docs/view-assets)
- [https://docs.cloud.google.com/migration-center/docs/migration-center-overview](https://docs.cloud.google.com/migration-center/docs/migration-center-overview)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)

## Supporting Pages

### Migration tools \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools](https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Database Migration Service PostgreSQL, MySQL, SQL Server, Oracle Cloud SQL, AlloyDB for PostgreSQL This tool is a serverless service that helps migrate PostgreSQL workloads into Cloud SQL and AlloyDB for PostgreSQL, MySQL and SQL Server workloads into Cloud SQL, and Oracle workloads into Cloud SQL for PostgreSQL or AlloyDB for PostgreSQL.
- HarbourBridge: Spanner Evaluation and Migration is a standalone open source tool for Spanner evaluation and migration, using data from an existing PostgreSQL, MySQL, SQL Server, Oracle or DynamoDB database.
- RackWare Management Module (RMM) is a fully-automated enterprise-grade migration solution that lets you migrate physical and virtual servers from any data center or public cloud into Google Cloud.
- Home Documentation Migration Migration Center Guides Send feedback Migration tools Stay organized with collections Save and categorize content based on your preferences.

### View the collected assets \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/view-assets](https://docs.cloud.google.com/migration-center/docs/view-assets)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- After you add your assets to Migration Center with an automatic scan by using one of the available collection methods , you can review the basic information about your infrastructure directly in Migration Center, both at the asset level, and in aggregate.
- This tab shows all the aggregated performance data and statistics collected with the Migration Center discovery client, manual file import, and the mcdc CLI, such as the following: Daily input/output operations per second Daily memory usage Daily CPU usage Network bytes received and sent per second Available details for databases On the details page for a database, you can see the basic information about the database, including the name, engine, edition, and version.
- For example, you can see the following structured attributes for an EKS cluster: cluster endpoint access cluster vpc id endpoint kubernetes version logging platform version role arn status Label assets Migration Center lets you assign labels to your assets to help you organize your resources.
- Home Documentation Migration Migration Center Guides Send feedback View the collected assets Stay organized with collections Save and categorize content based on your preferences.

### Migration Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/migration-center-overview](https://docs.cloud.google.com/migration-center/docs/migration-center-overview)
- Source ID: `site-api-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Discover your assets Migration Center helps you create an inventory of your assets, including servers, Microsoft SQL Server, MySQL, and PostgreSQL databases, by automatically scanning your on-premises environment.
- Assess your infrastructure With Migration Center, you can dive deep in the analysis and get a holistic view into your environment.
- Estimate your cloud costs Migration Center lets you generate a rapid cost estimate of future Google Cloud costs based on the size and configuration of your current on-premises or other cloud environment resources ( Preview ).
- With features like cloud spend estimation, asset discovery of your current environment, and a variety of tooling for different migration scenarios, Migration Center provides you with what you need for your migration.

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- CreateImportDataFileRequest ( parent="parent value", import data file id="import data file id value", import data file=import data file, ) Make the request operation = client. create import data file (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateImportDataFileRequest , dict]] The request object.
- Returns Type Description google.cloud.migrationcenter v1.types.ReportAssetFramesResponse A response to a call to ReportAssetFrame. report config path report config path ( project : str , location : str , report config : str ) - > str Returns a fully-qualified report config string. report path report path ( project : str , location : str , report config : str , report : str ) - > str Returns a fully-qualified report string. run import job run import job ( request : typing .
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict]] The request object.
- CreateImportJobRequest ( parent="parent value", import job id="import job id value", import job=import job, ) Make the request operation = client. create import job (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateImportJobRequest , dict]] The request object.

