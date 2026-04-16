---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.106Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "Pricing report explainability"
feature_slug: "pricing-report-explainability"
latest_feature_date: "2024-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
  - "https://docs.cloud.google.com/migration-center/docs/generate-tco-report"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListReportConfigsAsyncPager"
keywords:
  - "pricing"
  - "report"
  - "explainability"
  - "migration"
  - "center"
  - "adds"
  - "details"
  - "to"
---

# Pricing report explainability

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center adds explainability details to the detailed pricing report, including rightsizing and resource allocation details for supported targets.

## Extended Definition

Migration Center adds explainability details to the detailed pricing report, including rightsizing and resource allocation details for supported targets.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- [https://docs.cloud.google.com/migration-center/docs/generate-tco-report](https://docs.cloud.google.com/migration-center/docs/generate-tco-report)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListReportConfigsAsyncPager](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListReportConfigsAsyncPager)

## Supporting Pages

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 245
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.migrationcenter v1.types.ReportAssetFramesResponse A response to a call to ReportAssetFrame. report config path report config path ( project : str , location : str , report config : str ) - > str Returns a fully-qualified report config string. report path report path ( project : str , location : str , report config : str , report : str ) - > str Returns a fully-qualified report string. run import job run import job ( request : typing .
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 async def sample create report config(): Create a client client = migrationcenter v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 async def sample delete report config(): Create a client client = migrationcenter v1 .

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 245
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.migrationcenter v1.types.ReportAssetFramesResponse A response to a call to ReportAssetFrame. report config path report config path ( project : str , location : str , report config : str ) - > str Returns a fully-qualified report config string. report path report path ( project : str , location : str , report config : str , report : str ) - > str Returns a fully-qualified report string. run import job run import job ( request : typing .
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 def sample create report config(): Create a client client = migrationcenter v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 def sample delete report config(): Create a client client = migrationcenter v1 .

### Generate TCO reports \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/generate-tco-report](https://docs.cloud.google.com/migration-center/docs/generate-tco-report)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- You can view your TCO report directly in Migration Center, or export it to Google Slides or Google Sheets, or download it as a CSV file or a Microsoft Excel spreadsheet.
- Depending on the report that you want to generate, on the report details page do the following: To export the TCO summary report in Google Slides format, click Export report > Export TCO report to Google Slides .
- Limitations If you generate a TCO report for a group that contains a database deployment and its underlying server, Migration Center generates separate cost estimates for the server and the database.
- It provides the details of the discovered assets, the recommended target product for migration, and the associated costs for each individual asset in the groups for which you generated the report.

### "Class ListReportConfigsAsyncPager (0.4.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListReportConfigsAsyncPager](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListReportConfigsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.migrationcenter v1.types.ListReportConfigsRequest The initial request object. response google.cloud.migrationcenter v1.types.ListReportConfigsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListReportConfigsResponse ], ], request : google . cloud . migrationcenter v1 . types . migrationcenter .
- ListReportConfigsResponse ], ], request : google . cloud . migrationcenter v1 . types . migrationcenter .
- ListReportConfigsRequest , response : google . cloud . migrationcenter v1 . types . migrationcenter .

