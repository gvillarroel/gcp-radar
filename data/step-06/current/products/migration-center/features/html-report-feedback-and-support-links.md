---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.050Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "HTML report feedback and support links"
feature_slug: "html-report-feedback-and-support-links"
latest_feature_date: "2025-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListReportsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListReportsPager"
keywords:
  - "html"
  - "report"
  - "feedback"
  - "and"
  - "links"
  - "migration"
  - "center"
  - "reports"
---

# HTML report feedback and support links

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center HTML reports include feedback and support links to Google Forms.

## Extended Definition

Migration Center HTML reports include feedback and support links to Google Forms.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListReportsAsyncPager](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListReportsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListReportsPager](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListReportsPager)

## Supporting Pages

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 287
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 async def sample list reports(): Create a client client = migrationcenter v1 .
- ListReportsRequest ( parent="parent value", ) Make the request page result = client. list reports (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.ListReportsRequest , dict]] The request object.
- Returns Type Description google.cloud.migrationcenter v1.types.ReportConfig The groups and associated preference sets on which we can generate reports. get settings get settings ( request : typing .
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict]] The request object.

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 287
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 def sample list reports(): Create a client client = migrationcenter v1 .
- ListReportsRequest ( parent="parent value", ) Make the request page result = client. list reports (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.ListReportsRequest , dict] The request object.
- Returns Type Description google.cloud.migrationcenter v1.types.ReportConfig The groups and associated preference sets on which we can generate reports. get settings get settings ( request : typing .
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict] The request object.

### "Class ListReportsAsyncPager (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListReportsAsyncPager](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListReportsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.migrationcenter v1.types.ListReportsRequest The initial request object. response google.cloud.migrationcenter v1.types.ListReportsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListReportsAsyncPager (0.4.0) Stay organized with collections Save and categorize content based on your preferences.
- ListReportsResponse ], ], request : google . cloud . migrationcenter v1 . types . migrationcenter .
- ListReportsResponse ], ], request : google . cloud . migrationcenter v1 . types . migrationcenter .

### "Class ListReportsPager (0.4.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListReportsPager](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListReportsPager)
- Source ID: `site-python-reference`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.migrationcenter v1.types.ListReportsRequest The initial request object. response google.cloud.migrationcenter v1.types.ListReportsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListReportsPager (0.4.0) Stay organized with collections Save and categorize content based on your preferences.
- ListReportsResponse ], request : google . cloud . migrationcenter v1 . types . migrationcenter .
- ListReportsResponse ], request : google . cloud . migrationcenter v1 . types . migrationcenter .

