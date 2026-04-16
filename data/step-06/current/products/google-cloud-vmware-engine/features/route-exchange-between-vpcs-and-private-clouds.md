---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.729Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Route exchange between VPCs and private clouds"
feature_slug: "route-exchange-between-vpcs-and-private-clouds"
latest_feature_date: "2020-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/peer-vpc-network"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient"
keywords:
  - "route"
  - "exchange"
  - "between"
  - "vpcs"
  - "private"
  - "clouds"
  - "vmware"
  - "engine"
---

# Route exchange between VPCs and private clouds

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

VMware Engine advertises routes between VPCs and private cloud networks to enable communication between Google Cloud and private cloud resources.

## Extended Definition

VMware Engine advertises routes between VPCs and private cloud networks to enable communication between Google Cloud and private cloud resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/networking/peer-vpc-network](https://docs.cloud.google.com/vmware-engine/docs/networking/peer-vpc-network)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient)

## Supporting Pages

### "Class VmwareEngineAsyncClient (1.11.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- Source ID: `site-python-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.vmwareengine v1.services.vmware engine.pagers.ListPrivateCloudsAsyncPager Response message for VmwareEngine.ListPrivateClouds Iterating over this object will yield results and resolve additional pages automatically. list private connection peering routes list private connection peering routes ( request : typing .
- Returns Type Description google.cloud.vmwareengine v1.services.vmware engine.pagers.ListPeeringRoutesAsyncPager Response message for VmwareEngine.ListPeeringRoutes Iterating over this object will yield results and resolve additional pages automatically. list private clouds list private clouds ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vmwareengine v1 async def sample list private connection peering routes(): Create a client client = vmwareengine v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vmwareengine v1 async def sample list private clouds(): Create a client client = vmwareengine v1 .

### "Class VmwareEngineClient (1.11.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient)
- Source ID: `site-python-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.vmwareengine v1.services.vmware engine.pagers.ListPrivateCloudsPager Response message for VmwareEngine.ListPrivateClouds Iterating over this object will yield results and resolve additional pages automatically. list private connection peering routes list private connection peering routes ( request : typing .
- Returns Type Description google.cloud.vmwareengine v1.services.vmware engine.pagers.ListPeeringRoutesPager Response message for VmwareEngine.ListPeeringRoutes Iterating over this object will yield results and resolve additional pages automatically. list private clouds list private clouds ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vmwareengine v1 def sample list private connection peering routes(): Create a client client = vmwareengine v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vmwareengine v1 def sample list private clouds(): Create a client client = vmwareengine v1 .

### Peer a VPC network \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/peer-vpc-network](https://docs.cloud.google.com/vmware-engine/docs/networking/peer-vpc-network)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Peer a VPC network Virtual Private Cloud network peerings define network connectivity between Google Cloud VMware Engine networks, Google VPCs, and other services.
- In a given region, you can advertise at most 250 unique routes from VMware Engine to your VPC network using private services access.
- Otherwise, you might see unexpected behaviors, including the inability to connect to your VMware Engine private clouds.
- If you are peering to a network in a different project, you must complete creation of the VPC network peering in both projects by completing the peering in the project where the VMware Engine network and private cloud are located.

