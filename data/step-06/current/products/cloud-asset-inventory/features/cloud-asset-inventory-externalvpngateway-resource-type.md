---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.772Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory ExternalVpnGateway resource type"
feature_slug: "cloud-asset-inventory-externalvpngateway-resource-type"
latest_feature_date: "2020-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.SearchAllResourcesAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.SearchAllResourcesPager"
keywords:
  - "externalvpngateway"
  - "resource"
  - "exposes"
  - "through"
  - "type"
---

# Cloud Asset Inventory ExternalVpnGateway resource type

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory now exposes the ExternalVpnGateway resource type through its Cloud Asset APIs.

## Extended Definition

Cloud Asset Inventory now exposes the ExternalVpnGateway resource type through its Cloud Asset APIs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.SearchAllResourcesAsyncPager](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.SearchAllResourcesAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.SearchAllResourcesPager](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.pagers.SearchAllResourcesPager)

## Supporting Pages

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Controls Partner API API reference cloudcontrolspartner. googleapis. com/ Customer cloudcontrolspartner. googleapis. com/ Partner cloudcontrolspartner. googleapis. com/ Workload Cloud Data Fusion API reference datafusion. googleapis. com/ DnsPeering datafusion. googleapis. com/ Instance Cloud Deploy API reference clouddeploy. googleapis. com/ Automation clouddeploy. googleapis. com/ AutomationRun clouddeploy. googleapis. com/ CustomTargetType clouddeploy. googleapis. com/ DeliveryPipeline clouddeploy. googleapis. com/ DeployPolicy clouddeploy. googleapis. com/ JobRun clouddeploy. googleapis. com/ Release clouddeploy. googleapis. com/ Rollout clouddeploy. googleapis. com/ Target Cloud DNS API reference dns.googleapis.com/ManagedZone Searchable attributes: dnsName peeringConfig. targetNetwork. networkUrl dns.googleapis.com/Policy dns. googleapis. com/ ResourceRecordSet Not available in the analysis APIs. dns. googleapis. com/ ResponsePolicy Not available in the analysis APIs. dns. googleapis. com/ ResponsePolicyRule Not available in the analysis APIs.
- The following IAP resource types: iap.googleapis.com/Tunnel Not available in the analysis and search APIs. iap. googleapis. com/ TunnelInstance Not available in the analysis and search APIs. iap.googleapis.com/TunnelZone Not available in the analysis and search APIs. iap.googleapis.com/Web Not available in the analysis and search APIs. iap.googleapis.com/WebService Not available in the analysis and search APIs. iap. googleapis. com/ WebServiceVersion Not available in the analysis and search APIs. iap.googleapis.com/WebType Not available in the analysis and search APIs.
- You can use these asset types with the following Cloud Asset Inventory operations: Export to BigQuery Export to Cloud Storage List assets Monitor asset changes with Pub/Sub Query assets with SQL Search for resources Search resources for IAM allow policies You might also need to make use of asset names associated with these asset types when working with Cloud Asset Inventory.
- Organization policy API reference Supported resource types that organization policies can be attached to: cloudresourcemanager. googleapis. com/ Folder cloudresourcemanager. googleapis. com/ Organization cloudresourcemanager. googleapis. com/ Project Runtime information types Cloud Asset Inventory uses the following asset types for the OS INVENTORY content type .

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

