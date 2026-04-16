---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.118Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "TCO reports for additional target environments"
feature_slug: "tco-reports-for-additional-target-environments"
latest_feature_date: "2023-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
  - "https://docs.cloud.google.com/migration-center/docs/generate-tco-report"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers"
keywords:
  - "tco"
  - "reports"
  - "for"
  - "additional"
  - "target"
  - "environments"
  - "migration"
  - "center"
---

# TCO reports for additional target environments

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center can create TCO reports for Google Cloud VMware Engine and sole-tenant nodes on Compute Engine as target environments.

## Extended Definition

Migration Center can create TCO reports for Google Cloud VMware Engine and sole-tenant nodes on Compute Engine as target environments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- [https://docs.cloud.google.com/migration-center/docs/generate-tco-report](https://docs.cloud.google.com/migration-center/docs/generate-tco-report)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers)

## Supporting Pages

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 272
- Re-rank relevance: N/A

Evidence snippets:
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 async def sample list reports(): Create a client client = migrationcenter v1 .
- DeleteReportConfigRequest ( name="name value", ) Make the request operation = client. delete report config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.DeleteReportConfigRequest , dict]] The request object.
- ListReportConfigsRequest ( parent="parent value", ) Make the request page result = client. list report configs (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.ListReportConfigsRequest , dict]] The request object.

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 272
- Re-rank relevance: N/A

Evidence snippets:
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 def sample list reports(): Create a client client = migrationcenter v1 .
- DeleteReportConfigRequest ( name="name value", ) Make the request operation = client. delete report config (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.DeleteReportConfigRequest , dict] The request object.
- ListReportConfigsRequest ( parent="parent value", ) Make the request page result = client. list report configs (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.ListReportConfigsRequest , dict] The request object.

### Generate TCO reports \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/generate-tco-report](https://docs.cloud.google.com/migration-center/docs/generate-tco-report)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: N/A

Evidence snippets:
- Limitations If you generate a TCO report for a group that contains a database deployment and its underlying server, Migration Center generates separate cost estimates for the server and the database.
- Home Documentation Migration Migration Center Guides Send feedback Generate TCO reports Stay organized with collections Save and categorize content based on your preferences.
- If assets don't have performance data, Migration Center generates sizing recommendations based on the target sizing strategy that you choose in the migration preferences.
- It provides the details of the discovered assets, the recommended target product for migration, and the associated costs for each individual asset in the groups for which you generated the report.

### Module pagers (0.4.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers)
- Source ID: `site-python-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 0.4.0 (latest) 0.3.0 0.2.0 0.1.15 API documentation for migrationcenter v1.services.migration center.pagers module.
- ListReportConfigsResponse ], ], request : google . cloud . migrationcenter v1 . types . migrationcenter .
- ListReportConfigsResponse , ], request : google . cloud . migrationcenter v1 . types . migrationcenter .
- ListReportConfigsRequest , response : google . cloud . migrationcenter v1 . types . migrationcenter .

