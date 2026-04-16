---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.683Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "VMware Engine network"
feature_slug: "vmware-engine-network"
latest_feature_date: "2023-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/private-cloud-networking-for-vmware-engine"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-asset-inventory-services"
keywords:
  - "vmware"
  - "engine"
  - "network"
  - "networks"
  - "available"
  - "through"
  - "asset"
  - "inventory"
---

# VMware Engine network

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

VMware Engine networks are available through Cloud Asset Inventory and Cloud Asset APIs.

## Extended Definition

VMware Engine networks are available through Cloud Asset Inventory and Cloud Asset APIs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/private-cloud-networking-for-vmware-engine](https://docs.cloud.google.com/vmware-engine/docs/private-cloud-networking-for-vmware-engine)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-asset-inventory-services](https://docs.cloud.google.com/vmware-engine/docs/concepts-asset-inventory-services)

## Supporting Pages

### "Asset inventory services for VMware Engine \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-asset-inventory-services](https://docs.cloud.google.com/vmware-engine/docs/concepts-asset-inventory-services)
- Source ID: `site-docs-reference-required-4`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key VMware Engine resources or assets are available through the Cloud Asset API and are also available using the Cloud Asset Inventory UI under Identity and Access Management on your Google Cloud console.
- The Cloud Asset API resources include: PrivateCloud Cluster VMwareEngineNetwork NetworkPeering PrivateConnection NetworkPolicy ExternalAccessRule ExternalAddress For these resources, the Cloud Asset Inventory UI and Cloud Asset API enable the following features: Search and visibility: Search asset metadata, including IAM policies associated with it by using a custom query language.
- Use the global search bar to search for the name of any VMware Engine resource that's available through the Cloud Asset API.
- Asset inventory services for VMware Engine Cloud Asset Inventory provides inventory services based on a time series database that lets you to search, export, and analyze asset metadata associated with the onboarded resources.

### "About VMware Engine networks \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/private-cloud-networking-for-vmware-engine](https://docs.cloud.google.com/vmware-engine/docs/private-cloud-networking-for-vmware-engine)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Network connectivity for Legacy VMware Engine networks To establish communication to VMware Engine from your VPC network, you must enable private services access and create a private connection between your VPC network and the VMware Engine network.
- Network connectivity for Standard VMware Engine networks To establish communication to VMware Engine from your VPC network, you must create a VPC Network peering relationship between your VPC network and a VMware Engine network.
- About VMware Engine networks Google Cloud VMware Engine uses a VMware Engine network to provide network connectivity between one or more private clouds, Google Cloud Virtual Private Cloud networks, and on-premises networks.
- Types of VMware Engine networks By default, VMware Engine offers a global VMware network which provides network connectivity between one or more private clouds, Virtual Private Cloud networks, or on-premises networks.

### "Module pagers (1.11.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers)
- Source ID: `site-python-reference`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If there are more pages, the aiter method will make additional ListVmwareEngineNetworks requests and continue to iterate through the vmware engine networks field on the corresponding responses.
- If there are more pages, the iter method will make additional ListVmwareEngineNetworks requests and continue to iterate through the vmware engine networks field on the corresponding responses.
- This class thinly wraps an initial ListVmwareEngineNetworksResponse object, and provides an aiter method to iterate through its vmware engine networks field.
- This class thinly wraps an initial ListVmwareEngineNetworksResponse object, and provides an iter method to iterate through its vmware engine networks field.

