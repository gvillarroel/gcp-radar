---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.682Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Network policy"
feature_slug: "network-policy"
latest_feature_date: "2023-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-asset-inventory-services"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.FetchNetworkPolicyExternalAddressesAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.FetchNetworkPolicyExternalAddressesPager"
keywords:
  - "network"
  - "policy"
  - "policies"
  - "available"
  - "through"
  - "asset"
  - "inventory"
  - "apis"
---

# Network policy

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Network policies are available through Cloud Asset Inventory and Cloud Asset APIs.

## Extended Definition

Network policies are available through Cloud Asset Inventory and Cloud Asset APIs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/concepts-asset-inventory-services](https://docs.cloud.google.com/vmware-engine/docs/concepts-asset-inventory-services)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.FetchNetworkPolicyExternalAddressesAsyncPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.FetchNetworkPolicyExternalAddressesAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.FetchNetworkPolicyExternalAddressesPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.FetchNetworkPolicyExternalAddressesPager)

## Supporting Pages

### "Asset inventory services for VMware Engine \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-asset-inventory-services](https://docs.cloud.google.com/vmware-engine/docs/concepts-asset-inventory-services)
- Source ID: `site-docs-reference-required-4`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Cloud Asset API resources include: PrivateCloud Cluster VMwareEngineNetwork NetworkPeering PrivateConnection NetworkPolicy ExternalAccessRule ExternalAddress For these resources, the Cloud Asset Inventory UI and Cloud Asset API enable the following features: Search and visibility: Search asset metadata, including IAM policies associated with it by using a custom query language.
- Key VMware Engine resources or assets are available through the Cloud Asset API and are also available using the Cloud Asset Inventory UI under Identity and Access Management on your Google Cloud console.
- To analyze which IAM policies have access to which Google Cloud resources using the Cloud Asset Inventory console, do the following: In the Google Cloud console, go to the Policy Analyzer page.
- To search VMware Engine resources or IAM policies using the Cloud Asset Inventory console, do the following: Go to the Asset Inventory page in the Google Cloud console.

### "Class FetchNetworkPolicyExternalAddressesAsyncPager (1.11.0) \_|\_ Python\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.FetchNetworkPolicyExternalAddressesAsyncPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.FetchNetworkPolicyExternalAddressesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If there are more pages, the aiter method will make additional FetchNetworkPolicyExternalAddresses requests and continue to iterate through the external addresses field on the corresponding responses.
- This class thinly wraps an initial FetchNetworkPolicyExternalAddressesResponse object, and provides an aiter method to iterate through its external addresses field.
- Union [ str , bytes ]]] = () ) A pager for iterating through fetch network policy external addresses requests.
- All the usual FetchNetworkPolicyExternalAddressesResponse attributes are available on the pager.

### "Class FetchNetworkPolicyExternalAddressesPager (1.11.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.FetchNetworkPolicyExternalAddressesPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.FetchNetworkPolicyExternalAddressesPager)
- Source ID: `site-python-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If there are more pages, the iter method will make additional FetchNetworkPolicyExternalAddresses requests and continue to iterate through the external addresses field on the corresponding responses.
- This class thinly wraps an initial FetchNetworkPolicyExternalAddressesResponse object, and provides an iter method to iterate through its external addresses field.
- Union [ str , bytes ]]] = () ) A pager for iterating through fetch network policy external addresses requests.
- All the usual FetchNetworkPolicyExternalAddressesResponse attributes are available on the pager.

