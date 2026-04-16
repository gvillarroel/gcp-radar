---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.755Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory ListAssets API Beta"
feature_slug: "cloud-asset-inventory-listassets-api-beta"
latest_feature_date: "2020-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/audit-logging"
  - "https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.ListAssetsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.ListAssetsPager"
keywords:
  - "paginated"
  - "adding"
  - "reached"
  - "listing"
  - "beta"
  - "listassets"
---

# Cloud Asset Inventory ListAssets API Beta

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

The ListAssets API reached Beta, adding paginated listing of assets across organizations, folders, and projects.

## Extended Definition

The ListAssets API reached Beta, adding paginated listing of assets across organizations, folders, and projects.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/audit-logging](https://docs.cloud.google.com/asset-inventory/docs/audit-logging)
- [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.ListAssetsAsyncPager](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.ListAssetsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.ListAssetsPager](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.ListAssetsPager)

## Supporting Pages

### "Class ListAssetsAsyncPager (4.2.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.ListAssetsAsyncPager](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.ListAssetsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.asset v1.types.ListAssetsRequest The initial request object. response google.cloud.asset v1.types.ListAssetsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Version latest keyboard arrow down 4.2.0 (latest) 4.1.0 4.0.0 3.30.1 3.29.2 3.28.0 3.27.1 3.26.4 3.25.1 3.24.3 3.23.0 3.22.0 3.21.0 3.20.1 3.19.1 3.18.1 3.17.1 3.16.0 3.15.0 3.14.2 3.13.1 3.12.0 3.11.0 3.10.0 3.9.1 3.8.1 3.7.1 3.6.1 3.5.0 3.4.0 3.3.0 3.2.1 3.1.0 2.2.2 2.1.0 2.0.0 1.3.2 1.2.0 1.1.0 1.0.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.1 0.3.0 ListAssetsAsyncPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListAssetsAsyncPager (4.2.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional ListAssets requests and continue to iterate through the assets field on the corresponding responses.

### "Class ListAssetsPager (4.2.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.ListAssetsPager](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.ListAssetsPager)
- Source ID: `site-python-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.asset v1.types.ListAssetsRequest The initial request object. response google.cloud.asset v1.types.ListAssetsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Version latest keyboard arrow down 4.2.0 (latest) 4.1.0 4.0.0 3.30.1 3.29.2 3.28.0 3.27.1 3.26.4 3.25.1 3.24.3 3.23.0 3.22.0 3.21.0 3.20.1 3.19.1 3.18.1 3.17.1 3.16.0 3.15.0 3.14.2 3.13.1 3.12.0 3.11.0 3.10.0 3.9.1 3.8.1 3.7.1 3.6.1 3.5.0 3.4.0 3.3.0 3.2.1 3.1.0 2.2.2 2.1.0 2.0.0 1.3.2 1.2.0 1.1.0 1.0.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.1 0.3.0 ListAssetsPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListAssetsPager (4.2.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the iter method will make additional ListAssets requests and continue to iterate through the assets field on the corresponding responses.

### Cloud Asset Inventory audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/audit-logging](https://docs.cloud.google.com/asset-inventory/docs/audit-logging)
- Source ID: `site-docs-root`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.asset.v1.AssetService.AnalyzeIamPolicy google.cloud.asset.v1.AssetService.AnalyzeIamPolicyLongrunning AnalyzeMove google.cloud.asset.v1.AssetService.AnalyzeOrgPolicies google.cloud.asset.v1.AssetService.AnalyzeOrgPolicyGovernedAssets google.cloud.asset.v1.AssetService.AnalyzeOrgPolicyGovernedContainers google.cloud.asset.v1.AssetService.BatchGetAssetsHistory google.cloud.asset.v1.AssetService.BatchGetEffectiveIamPolicies google.cloud.asset.v1.AssetService.ExportAssets google.cloud.asset.v1.AssetService.GetFeed google.cloud.asset.v1.AssetService.GetSavedQuery google.cloud.asset.v1.AssetService.ListAssets google.cloud.asset.v1.AssetService.ListFeeds google.cloud.asset.v1.AssetService.ListSavedQueries google.cloud.asset.v1.AssetService.QueryAssets google.cloud.asset.v1.AssetService.SearchAllIamPolicies google.cloud.asset.v1.AssetService.SearchAllResources google.cloud.asset.v1beta1.AssetService.BatchGetAssetsHistory google.cloud.asset.v1beta1.AssetService.ExportAssets google.cloud.asset.v1p2beta1.AssetService.GetFeed google.cloud.asset.v1p2beta1.AssetService.ListFeeds google.cloud.asset.v1p5beta1.AssetService.ListAssets google.cloud.asset.v1p7beta1.AssetService.ExportAssets ADMIN WRITE google.cloud.asset.v1.AssetService.CreateFeed google.cloud.asset.v1.AssetService.CreateSavedQuery google.cloud.asset.v1.AssetService.DeleteFeed google.cloud.asset.v1.AssetService.DeleteSavedQuery google.cloud.asset.v1.AssetService.UpdateFeed google.cloud.asset.v1.AssetService.UpdateSavedQuery google.cloud.asset.v1p2beta1.AssetService.CreateFeed google.cloud.asset.v1p2beta1.AssetService.DeleteFeed google.cloud.asset.v1p2beta1.AssetService.UpdateFeed API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud Asset Inventory. google.cloud.asset.v1.AssetService The following audit logs are associated with methods belonging to google.cloud.asset.v1.AssetService .
- Filter for this method : protoPayload.methodName="google.cloud.asset.v1p5beta1.AssetService.ListAssets" google.cloud.asset.v1p7beta1.AssetService The following audit logs are associated with methods belonging to google.cloud.asset.v1p7beta1.AssetService .
- ListAssets Method : google.cloud.asset.v1p5beta1.AssetService.ListAssets Audit log type : Data access Permissions : cloudasset.assets.listResource - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.asset.v1beta1.AssetService.BatchGetAssetsHistory" ExportAssets Method : google.cloud.asset.v1beta1.AssetService.ExportAssets Audit log type : Data access Permissions : cloudasset.assets.exportResource - ADMIN READ Method is a long-running or streaming operation : No.

