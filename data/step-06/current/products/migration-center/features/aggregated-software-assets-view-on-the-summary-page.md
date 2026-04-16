---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.045Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "Aggregated software assets view on the Summary page"
feature_slug: "aggregated-software-assets-view-on-the-summary-page"
latest_feature_date: "2025-10-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migration-center/docs/view-assets"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListAssetsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListAssetsPager"
  - "https://docs.cloud.google.com/migration-center/docs/generate-tco-report"
keywords:
  - "aggregated"
  - "software"
  - "assets"
  - "view"
  - "on"
  - "the"
  - "summary"
  - "page"
---

# Aggregated software assets view on the Summary page

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

The Migration Center Summary page shows an aggregated view of detected software assets.

## Extended Definition

The Migration Center Summary page shows an aggregated view of detected software assets.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migration-center/docs/view-assets](https://docs.cloud.google.com/migration-center/docs/view-assets)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListAssetsAsyncPager](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListAssetsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListAssetsPager](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListAssetsPager)
- [https://docs.cloud.google.com/migration-center/docs/generate-tco-report](https://docs.cloud.google.com/migration-center/docs/generate-tco-report)

## Supporting Pages

### View the collected assets \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/view-assets](https://docs.cloud.google.com/migration-center/docs/view-assets)
- Source ID: `site-docs-root`
- Final score: 303
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View summary of all the collected assets To view an aggregated summary about your assets, follow these steps: In the Google Cloud console, go to the Summary page.
- Go to Summary The Summary page displays a dashboard with high-level information about your assets, including asset types, graphs about the operating system installed, memory, cores, and storage.
- View details for an individual asset To view the details about a specific asset, follow these steps: In the Google Cloud console, go to the Assets page.
- To view out-of-scope assets, click the Out of scope tab on the Assets page.

### "Class ListAssetsAsyncPager (0.4.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListAssetsAsyncPager](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListAssetsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.migrationcenter v1.types.ListAssetsRequest The initial request object. response google.cloud.migrationcenter v1.types.ListAssetsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the aiter method will make additional ListAssets requests and continue to iterate through the assets field on the corresponding responses.
- All the usual ListAssetsResponse attributes are available on the pager.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListAssetsAsyncPager (0.4.0) Stay organized with collections Save and categorize content based on your preferences.

### "Class ListAssetsPager (0.4.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListAssetsPager](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.pagers.ListAssetsPager)
- Source ID: `site-python-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.migrationcenter v1.types.ListAssetsRequest The initial request object. response google.cloud.migrationcenter v1.types.ListAssetsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the iter method will make additional ListAssets requests and continue to iterate through the assets field on the corresponding responses.
- All the usual ListAssetsResponse attributes are available on the pager.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Generate TCO reports \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/generate-tco-report](https://docs.cloud.google.com/migration-center/docs/generate-tco-report)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- When you make changes to your software assets, for example by installing new software, you might see a discrepancy between the list of software aggregated on the Summary page and what is shown in the TCO report.
- Depending on the report that you want to generate, on the report details page do the following: To export the TCO summary report in Google Slides format, click Export report > Export TCO report to Google Slides .
- Your TCO report provides you with a high-level summary of the specifications of your assets across your groups, including information such as memory usage and storage usage.
- On the Select groups page, select up to five groups of assets that you want to include in the report, then click Next .

