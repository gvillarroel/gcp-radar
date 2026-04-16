---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.683Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Private connection"
feature_slug: "private-connection"
latest_feature_date: "2023-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-asset-inventory-services"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient"
keywords:
  - "private"
  - "connection"
  - "connections"
  - "available"
  - "through"
  - "asset"
  - "inventory"
  - "apis"
---

# Private connection

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Private connections are available through Cloud Asset Inventory and Cloud Asset APIs.

## Extended Definition

Private connections are available through Cloud Asset Inventory and Cloud Asset APIs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-asset-inventory-services](https://docs.cloud.google.com/vmware-engine/docs/concepts-asset-inventory-services)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)

## Supporting Pages

### "Asset inventory services for VMware Engine \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-asset-inventory-services](https://docs.cloud.google.com/vmware-engine/docs/concepts-asset-inventory-services)
- Source ID: `site-docs-reference-required-4`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Cloud Asset API resources include: PrivateCloud Cluster VMwareEngineNetwork NetworkPeering PrivateConnection NetworkPolicy ExternalAccessRule ExternalAddress For these resources, the Cloud Asset Inventory UI and Cloud Asset API enable the following features: Search and visibility: Search asset metadata, including IAM policies associated with it by using a custom query language.
- Key VMware Engine resources or assets are available through the Cloud Asset API and are also available using the Cloud Asset Inventory UI under Identity and Access Management on your Google Cloud console.
- Use the global search bar to search for the name of any VMware Engine resource that's available through the Cloud Asset API.
- What's next Find the list of resources available using Cloud Asset Inventory and search for VMware.

### "Module pagers (1.11.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers)
- Source ID: `site-python-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If there are more pages, the aiter method will make additional ListPrivateConnections requests and continue to iterate through the private connections field on the corresponding responses.
- If there are more pages, the iter method will make additional ListPrivateConnections requests and continue to iterate through the private connections field on the corresponding responses.
- This class thinly wraps an initial ListPrivateConnectionsResponse object, and provides an aiter method to iterate through its private connections field.
- This class thinly wraps an initial ListPrivateConnectionsResponse object, and provides an iter method to iterate through its private connections field.

### "Class VmwareEngineAsyncClient (1.11.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- Source ID: `site-python-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vmwareengine v1 async def sample list private connections(): Create a client client = vmwareengine v1 .
- For example: projects/my-project/locations/us-central1/privateConnections/my-connection This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- For example: projects/my-project/locations/us-central1/privateConnections/my-connection This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- For example: projects/my-project/locations/us-west1/privateConnections/my-connection This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

