---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.044Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "AI-powered insights for allocated Google Cloud assets"
feature_slug: "ai-powered-insights-for-allocated-google-cloud-assets"
latest_feature_date: "2025-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migration-center/docs/view-assets"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListAssetsAsyncPager"
keywords:
  - "ai"
  - "powered"
  - "insights"
  - "for"
  - "allocated"
  - "assets"
  - "migration"
  - "center"
---

# AI-powered insights for allocated Google Cloud assets

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center shows AI-powered insights for each allocated Google Cloud asset.

## Extended Definition

Migration Center shows AI-powered insights for each allocated Google Cloud asset.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migration-center/docs/view-assets](https://docs.cloud.google.com/migration-center/docs/view-assets)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListAssetsAsyncPager](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListAssetsAsyncPager)

## Supporting Pages

### View the collected assets \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/view-assets](https://docs.cloud.google.com/migration-center/docs/view-assets)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After you add your assets to Migration Center with an automatic scan by using one of the available collection methods , you can review the basic information about your infrastructure directly in Migration Center, both at the asset level, and in aggregate.
- This tab shows all the aggregated performance data and statistics collected with the Migration Center discovery client, manual file import, and the mcdc CLI, such as the following: Daily input/output operations per second Daily memory usage Daily CPU usage Network bytes received and sent per second Available details for databases On the details page for a database, you can see the basic information about the database, including the name, engine, edition, and version.
- For example, you can see the following structured attributes for an EKS cluster: cluster endpoint access cluster vpc id endpoint kubernetes version logging platform version role arn status Label assets Migration Center lets you assign labels to your assets to help you organize your resources.
- To filter assets with the Attributes property, use key-value pairs, using one of the following options: Filter by key only: Attributes:"key123":"" Filter by a key-value pair: Attributes:"key1":"value1" Filter by value only: Attributes:"":"value123" If you know the asset or name, you can also enter it directly in the Filter field to search for the asset or property.

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 247
- Re-rank relevance: N/A

Evidence snippets:
- RemoveAssetsFromGroupRequest ( group="group value", assets=assets, ) Make the request operation = client. remove assets from group (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.RemoveAssetsFromGroupRequest , dict]] The request object.
- AddAssetsToGroupRequest ( group="group value", assets=assets, ) Make the request operation = client. add assets to group (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.AddAssetsToGroupRequest , dict]] The request object.
- CreateImportDataFileRequest ( parent="parent value", import data file id="import data file id value", import data file=import data file, ) Make the request operation = client. create import data file (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateImportDataFileRequest , dict]] The request object.
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict]] The request object.

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 247
- Re-rank relevance: N/A

Evidence snippets:
- RemoveAssetsFromGroupRequest ( group="group value", assets=assets, ) Make the request operation = client. remove assets from group (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.RemoveAssetsFromGroupRequest , dict] The request object.
- AddAssetsToGroupRequest ( group="group value", assets=assets, ) Make the request operation = client. add assets to group (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.AddAssetsToGroupRequest , dict] The request object.
- Returns Type Description google.cloud.migrationcenter v1.types.Source Source represents an object from which asset information is streamed to Migration Center. group path group path ( project : str , location : str , group : str ) - > str Returns a fully-qualified group string. import data file path import data file path ( project : str , location : str , import job : str , import data file : str ) - > str Returns a fully-qualified import data file string. import job path import job path ( project : str , location : str , import job : str ) - > str Returns a fully-qualified import job string. list assets list assets ( request : typing .
- CreateImportDataFileRequest ( parent="parent value", import data file id="import data file id value", import data file=import data file, ) Make the request operation = client. create import data file (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreateImportDataFileRequest , dict] The request object.

### "Class ListAssetsAsyncPager (0.4.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListAssetsAsyncPager](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListAssetsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.migrationcenter v1.types.ListAssetsRequest The initial request object. response google.cloud.migrationcenter v1.types.ListAssetsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListAssetsResponse ], ], request : google . cloud . migrationcenter v1 . types . migrationcenter .
- ListAssetsResponse ], ], request : google . cloud . migrationcenter v1 . types . migrationcenter .
- ListAssetsRequest , response : google . cloud . migrationcenter v1 . types . migrationcenter .

