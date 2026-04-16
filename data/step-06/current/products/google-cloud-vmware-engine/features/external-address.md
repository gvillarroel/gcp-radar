---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.680Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "External address"
feature_slug: "external-address"
latest_feature_date: "2023-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.FetchNetworkPolicyExternalAddressesAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.FetchNetworkPolicyExternalAddressesPager"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAddressesAsyncPager"
keywords:
  - "external"
  - "address"
  - "addresses"
  - "available"
  - "through"
  - "asset"
  - "inventory"
  - "apis"
---

# External address

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

External addresses are available through Cloud Asset Inventory and Cloud Asset APIs.

## Extended Definition

External addresses are available through Cloud Asset Inventory and Cloud Asset APIs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.FetchNetworkPolicyExternalAddressesAsyncPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.FetchNetworkPolicyExternalAddressesAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.FetchNetworkPolicyExternalAddressesPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.FetchNetworkPolicyExternalAddressesPager)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAddressesAsyncPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAddressesAsyncPager)

## Supporting Pages

### "Class FetchNetworkPolicyExternalAddressesAsyncPager (1.11.0) \_|\_ Python\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.FetchNetworkPolicyExternalAddressesAsyncPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.FetchNetworkPolicyExternalAddressesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 222
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
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If there are more pages, the iter method will make additional FetchNetworkPolicyExternalAddresses requests and continue to iterate through the external addresses field on the corresponding responses.
- This class thinly wraps an initial FetchNetworkPolicyExternalAddressesResponse object, and provides an iter method to iterate through its external addresses field.
- Union [ str , bytes ]]] = () ) A pager for iterating through fetch network policy external addresses requests.
- All the usual FetchNetworkPolicyExternalAddressesResponse attributes are available on the pager.

### "Class ListExternalAddressesAsyncPager (1.11.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAddressesAsyncPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAddressesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- If there are more pages, the aiter method will make additional ListExternalAddresses requests and continue to iterate through the external addresses field on the corresponding responses.
- This class thinly wraps an initial ListExternalAddressesResponse object, and provides an aiter method to iterate through its external addresses field.
- Union [ str , bytes ]]] = () ) A pager for iterating through list external addresses requests.
- All the usual ListExternalAddressesResponse attributes are available on the pager.

