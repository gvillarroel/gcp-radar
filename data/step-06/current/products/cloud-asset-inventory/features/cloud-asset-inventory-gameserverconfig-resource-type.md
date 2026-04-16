---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.765Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory GameServerConfig resource type"
feature_slug: "cloud-asset-inventory-gameserverconfig-resource-type"
latest_feature_date: "2020-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
  - "https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.SearchAllResourcesAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.SearchAllResourcesPager"
keywords:
  - "gameserverconfig"
  - "resource"
  - "exposes"
  - "through"
  - "type"
---

# Cloud Asset Inventory GameServerConfig resource type

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory now exposes the GameServerConfig resource type through its Cloud Asset APIs.

## Extended Definition

Cloud Asset Inventory now exposes the GameServerConfig resource type through its Cloud Asset APIs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.SearchAllResourcesAsyncPager](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.SearchAllResourcesAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.SearchAllResourcesPager](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.SearchAllResourcesPager)

## Supporting Pages

### "Class SearchAllResourcesAsyncPager (4.2.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.SearchAllResourcesAsyncPager](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.SearchAllResourcesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.asset v1.types.SearchAllResourcesRequest The initial request object. response google.cloud.asset v1.types.SearchAllResourcesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the aiter method will make additional SearchAllResources requests and continue to iterate through the results field on the corresponding responses.
- This class thinly wraps an initial SearchAllResourcesResponse object, and provides an aiter method to iterate through its results field.
- SearchAllResourcesResponse ], ], request : google . cloud . asset v1 . types . asset service .

### "Class SearchAllResourcesPager (4.2.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.SearchAllResourcesPager](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.SearchAllResourcesPager)
- Source ID: `site-python-reference`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.asset v1.types.SearchAllResourcesRequest The initial request object. response google.cloud.asset v1.types.SearchAllResourcesResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the iter method will make additional SearchAllResources requests and continue to iterate through the results field on the corresponding responses.
- This class thinly wraps an initial SearchAllResourcesResponse object, and provides an iter method to iterate through its results field.
- SearchAllResourcesResponse ], request : google . cloud . asset v1 . types . asset service .

### "Method: searchAllResources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `site-api-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "assetType" : string , "project" : string , "folders" : [ string ] , "organization" : string , "displayName" : string , "description" : string , "location" : string , "labels" : { string : string , ... } , "networkTags" : [ string ] , "kmsKey" : string , "kmsKeys" : [ string ] , "createTime" : string , "updateTime" : string , "state" : string , "additionalAttributes" : { object } , "parentFullResourceName" : string , "versionedResources" : [ { object ( VersionedResource ) } ] , "attachedResources" : [ { object ( AttachedResource ) } ] , "relationships" : { string : { object ( RelatedResources ) } , ... } , "tagKeys" : [ string ] , "tagValues" : [ string ] , "tagValueIds" : [ string ] , "tags" : [ { object ( Tag ) } ] , "effectiveTags" : [ { object ( EffectiveTagDetails ) } ] , "enrichments" : [ { object ( AssetEnrichment ) } ] , "parentAssetType" : string , "sccSecurityMarks" : { string : string , ... } } Fields name string The full resource name of this resource.
- Use the kmsKeys field to retrieve Cloud KMS key information. kmsKeys:key to find Google Cloud resources encrypted with customer-managed encryption keys whose name contains the word key . relationships:instance-group-1 to find Google Cloud resources that have relationships with instance-group-1 in the related resource name. relationships:INSTANCE TO INSTANCEGROUP to find Compute Engine instances that have relationships of type INSTANCE TO INSTANCEGROUP . relationships.INSTANCE TO INSTANCEGROUP:instance-group-1 to find Compute Engine instances that have relationships with instance-group-1 in the Compute Engine instance group resource name, for relationship type INSTANCE TO INSTANCEGROUP . sccSecurityMarks.key=value to find Cloud resources that are attached with security marks whose key is key and value is value . sccSecurityMarks.key: to find Cloud resources that are attached with security marks whose key is key . state:ACTIVE to find Google Cloud resources whose state contains ACTIVE as a word.
- Currently supported enrichment types with v1.searchAllResources API: RESOURCE OWNERS The corresponding read masks in order to get the enrichment: enrichments.resource owners The corresponding required permissions: cloudasset.assets.searchEnrichmentResourceOwners Example query to get resource owner enrichment: scope: "projects/my-project" query: "name: my-project" assetTypes: "cloudresourcemanager.googleapis.com/Project" readMask: { paths: "assetType" paths: "name" paths: "enrichments.resource owners" } parentAssetType string The type of this resource's immediate parent, if there is one.
- The following fields are returned by default if not specified: name assetType project folders organization displayName description location labels tags effectiveTags networkTags kmsKeys createTime updateTime state additionalAttributes parentFullResourceName parentAssetType Some fields of large size, such as versionedResources , attachedResources , effectiveTags etc., are not returned by default, but you can specify them in the readMask parameter if you want to include them.

