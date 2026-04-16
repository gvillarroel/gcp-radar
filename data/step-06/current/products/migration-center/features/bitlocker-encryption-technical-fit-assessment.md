---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.078Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "BitLocker encryption technical fit assessment"
feature_slug: "bitlocker-encryption-technical-fit-assessment"
latest_feature_date: "2024-09-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
  - "https://docs.cloud.google.com/migration-center/docs/migration-center-overview"
  - "https://docs.cloud.google.com/migration-center/docs/run-offline-assessment"
keywords:
  - "bitlocker"
  - "encryption"
  - "technical"
  - "fit"
  - "assessment"
  - "migration"
  - "center"
  - "adds"
---

# BitLocker encryption technical fit assessment

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center adds a technical fit assessment for BitLocker encryption in Shift to GCE and Shift to GDC assessments.

## Extended Definition

Migration Center adds a technical fit assessment for BitLocker encryption in Shift to GCE and Shift to GDC assessments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- [https://docs.cloud.google.com/migration-center/docs/migration-center-overview](https://docs.cloud.google.com/migration-center/docs/migration-center-overview)
- [https://docs.cloud.google.com/migration-center/docs/run-offline-assessment](https://docs.cloud.google.com/migration-center/docs/run-offline-assessment)

## Supporting Pages

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- CreateImportDataFileRequest ( parent="parent value", import data file id="import data file id value", import data file=import data file, ) Make the request operation = client. create import data file (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateImportDataFileRequest , dict]] The request object.
- Returns Type Description google.cloud.migrationcenter v1.types.ReportAssetFramesResponse A response to a call to ReportAssetFrame. report config path report config path ( project : str , location : str , report config : str ) - > str Returns a fully-qualified report config string. report path report path ( project : str , location : str , report config : str , report : str ) - > str Returns a fully-qualified report string. run import job run import job ( request : typing .
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict]] The request object.
- CreateImportJobRequest ( parent="parent value", import job id="import job id value", import job=import job, ) Make the request operation = client. create import job (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateImportJobRequest , dict]] The request object.

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.migrationcenter v1.types.Source Source represents an object from which asset information is streamed to Migration Center. group path group path ( project : str , location : str , group : str ) - > str Returns a fully-qualified group string. import data file path import data file path ( project : str , location : str , import job : str , import data file : str ) - > str Returns a fully-qualified import data file string. import job path import job path ( project : str , location : str , import job : str ) - > str Returns a fully-qualified import job string. list assets list assets ( request : typing .
- Returns Type Description google.cloud.migrationcenter v1.types.ReportAssetFramesResponse A response to a call to ReportAssetFrame. report config path report config path ( project : str , location : str , report config : str ) - > str Returns a fully-qualified report config string. report path report path ( project : str , location : str , report config : str , report : str ) - > str Returns a fully-qualified report string. run import job run import job ( request : typing .
- CreateImportDataFileRequest ( parent="parent value", import data file id="import data file id value", import data file=import data file, ) Make the request operation = client. create import data file (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreateImportDataFileRequest , dict] The request object.
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict] The request object.

### Migration Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/migration-center-overview](https://docs.cloud.google.com/migration-center/docs/migration-center-overview)
- Source ID: `site-api-reference`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- Get data-driven suggestions based on a technical fit assessment on the Google Cloud products to migrate your assets to, and know the costs in advance.
- Estimate your cloud costs Migration Center lets you generate a rapid cost estimate of future Google Cloud costs based on the size and configuration of your current on-premises or other cloud environment resources ( Preview ).
- With features like cloud spend estimation, asset discovery of your current environment, and a variety of tooling for different migration scenarios, Migration Center provides you with what you need for your migration.
- Discover your assets Migration Center helps you create an inventory of your assets, including servers, Microsoft SQL Server, MySQL, and PostgreSQL databases, by automatically scanning your on-premises environment.

### "Generate an offline assessment \_|\_ Migration Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migration-center/docs/run-offline-assessment](https://docs.cloud.google.com/migration-center/docs/run-offline-assessment)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Migration Migration Center Guides Send feedback Generate an offline assessment Stay organized with collections Save and categorize content based on your preferences.
- The offline assessment creates reports that provide you with a high-level fit assessment result for migration and potential blockers for different migration journeys.
- The spreadsheet contains a number of worksheets displaying the following: Information about all discovered VMs Information about all discovered application components Fit score for all journeys for each VM and app component A worksheet per journey containing the results for all rules for that journey The mcdc CLI stores assessment data and log information in the /.mcdc directory on the host machine.
- It provides an overall fit assessment using one of the following scores: Excellent fit Good fit, with some findings that might require attention Needs minimal work before migrating Needs moderate work before migrating Needs major work before migrating No fit Insufficient data You can generate reports in HTML, Microsoft Excel, CSV, and JSON format.

