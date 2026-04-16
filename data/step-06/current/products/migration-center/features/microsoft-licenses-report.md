---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.094Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "Microsoft licenses report"
feature_slug: "microsoft-licenses-report"
latest_feature_date: "2024-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migration-center/docs/generate-tco-report"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
  - "https://docs.cloud.google.com/migration-center/docs/migration-center-overview"
keywords:
  - "microsoft"
  - "licenses"
  - "report"
  - "migration"
  - "center"
  - "can"
  - "generate"
  - "for"
---

# Microsoft licenses report

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center can generate a report for Microsoft licenses, including Windows Server and SQL Server.

## Extended Definition

Migration Center can generate a report for Microsoft licenses, including Windows Server and SQL Server.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migration-center/docs/generate-tco-report](https://docs.cloud.google.com/migration-center/docs/generate-tco-report)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- [https://docs.cloud.google.com/migration-center/docs/migration-center-overview](https://docs.cloud.google.com/migration-center/docs/migration-center-overview)

## Supporting Pages

### Generate TCO reports \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/generate-tco-report](https://docs.cloud.google.com/migration-center/docs/generate-tco-report)
- Source ID: `site-docs-root`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations If you generate a TCO report for a group that contains a database deployment and its underlying server, Migration Center generates separate cost estimates for the server and the database.
- You can view your TCO report directly in Migration Center, or export it to Google Slides or Google Sheets, or download it as a CSV file or a Microsoft Excel spreadsheet.
- It provides the details of the discovered assets, the recommended target product for migration, and the associated costs for each individual asset in the groups for which you generated the report.
- Home Documentation Migration Migration Center Guides Send feedback Generate TCO reports Stay organized with collections Save and categorize content based on your preferences.

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 261
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.migrationcenter v1.types.ReportConfig The groups and associated preference sets on which we can generate reports. get settings get settings ( request : typing .
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 async def sample create report config(): Create a client client = migrationcenter v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 async def sample delete report config(): Create a client client = migrationcenter v1 .

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 261
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.migrationcenter v1.types.ReportConfig The groups and associated preference sets on which we can generate reports. get settings get settings ( request : typing .
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 def sample create report config(): Create a client client = migrationcenter v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 def sample delete report config(): Create a client client = migrationcenter v1 .

### Migration Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/migration-center-overview](https://docs.cloud.google.com/migration-center/docs/migration-center-overview)
- Source ID: `site-api-reference`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Discover your assets Migration Center helps you create an inventory of your assets, including servers, Microsoft SQL Server, MySQL, and PostgreSQL databases, by automatically scanning your on-premises environment.
- Migrate When you need to migrate your infrastructure to Google Cloud, Migration Center can help you with many different tools that support a variety of migration strategies like rehost, replatform, and refactor.
- However, if you don't want automatic data collection for your assets, you can also choose to manually upload your infrastructure data into Migration Center.
- Estimate your cloud costs Migration Center lets you generate a rapid cost estimate of future Google Cloud costs based on the size and configuration of your current on-premises or other cloud environment resources ( Preview ).

