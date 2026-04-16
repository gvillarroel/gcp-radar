---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.691Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Google Cloud CLI and VMware Engine API endpoints"
feature_slug: "google-cloud-cli-and-vmware-engine-api-endpoints"
latest_feature_date: "2023-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient"
  - "https://docs.cloud.google.com/vmware-engine/docs/quickstart-networking-requirements"
keywords:
  - "cli"
  - "vmware"
  - "engine"
  - "endpoints"
  - "additional"
  - "managing"
  - "networking"
  - "model"
---

# Google Cloud CLI and VMware Engine API endpoints

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Additional CLI and API endpoints support managing the networking model, network peering, external access rules, external IP service, and consumer DNS.

## Extended Definition

Additional CLI and API endpoints support managing the networking model, network peering, external access rules, external IP service, and consumer DNS.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient)
- [https://docs.cloud.google.com/vmware-engine/docs/quickstart-networking-requirements](https://docs.cloud.google.com/vmware-engine/docs/quickstart-networking-requirements)

## Supporting Pages

### "Networking requirements \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/quickstart-networking-requirements](https://docs.cloud.google.com/vmware-engine/docs/quickstart-networking-requirements)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Additionally, your workload VMs and vSphere/vSAN subnet CIDR range must not overlap with any IP addresses in the following ranges: 127.0.0.0/8 224.0.0.0/4 0.0.0.0/8 169.254.0.0/16 198.18.0.0/15 240.0.0.0/4 vSphere/vSAN subnets CIDR range VMware Engine deploys management components of a private cloud in the vSphere/vSAN subnets CIDR range that you provide during private cloud creation.
- Networking requirements Google Cloud VMware Engine offers a private cloud environment that's accessible to users and applications from on-premises environments, enterprise-managed devices, and Google Cloud services like Virtual Private Cloud (VPC) .
- Edge networking services provided by VMware Engine The following table describes the address range requirement for edge networking services provides by VMware Engine.
- To establish connectivity between VMware Engine private clouds and other networks, you use networking services such as Cloud VPN and Cloud Interconnect .

### "Class VmwareEngineAsyncClient (1.11.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- Source ID: `site-python-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.vmwareengine v1.services.vmware engine.pagers.ListVmwareEngineNetworksAsyncPager Response message for VmwareEngine.ListVmwareEngineNetworks Iterating over this object will yield results and resolve additional pages automatically. logging server path logging server path ( project : str , location : str , private cloud : str , logging server : str ) - > str Returns a fully-qualified logging server string. management dns zone binding path management dns zone binding path ( project : str , location : str , private cloud : str , management dns zone binding : str ) - > str Returns a fully-qualified management dns zone binding string. network path network path ( project : str , network : str ) - > str Returns a fully-qualified network string. network peering path network peering path ( project : str , location : str , network peering : str ) - > str Returns a fully-qualified network peering string. network policy path network policy path ( project : str , location : str , network policy : str ) - > str Returns a fully-qualified network policy string. node path node path ( project : str , location : str , private cloud : str , cluster : str , node : str ) - > str Returns a fully-qualified node string. node type path node type path ( project : str , location : str , node type : str ) - > str Returns a fully-qualified node type string. parse cluster path parse cluster path ( path : str ) - > typing .
- Returns Type Description google.cloud.vmwareengine v1.services.vmware engine.pagers.FetchNetworkPolicyExternalAddressesAsyncPager Response message for VmwareEngine.FetchNetworkPolicyExternalAddresses Iterating over this object will yield results and resolve additional pages automatically. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vmwareengine v1 async def sample fetch network policy external addresses(): Create a client client = vmwareengine v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vmwareengine v1 async def sample list private connection peering routes(): Create a client client = vmwareengine v1 .

### "Class VmwareEngineClient (1.11.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient)
- Source ID: `site-python-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.vmwareengine v1.services.vmware engine.pagers.ListVmwareEngineNetworksPager Response message for VmwareEngine.ListVmwareEngineNetworks Iterating over this object will yield results and resolve additional pages automatically. logging server path logging server path ( project : str , location : str , private cloud : str , logging server : str ) - > str Returns a fully-qualified logging server string. management dns zone binding path management dns zone binding path ( project : str , location : str , private cloud : str , management dns zone binding : str ) - > str Returns a fully-qualified management dns zone binding string. network path network path ( project : str , network : str ) - > str Returns a fully-qualified network string. network peering path network peering path ( project : str , location : str , network peering : str ) - > str Returns a fully-qualified network peering string. network policy path network policy path ( project : str , location : str , network policy : str ) - > str Returns a fully-qualified network policy string. node path node path ( project : str , location : str , private cloud : str , cluster : str , node : str ) - > str Returns a fully-qualified node string. node type path node type path ( project : str , location : str , node type : str ) - > str Returns a fully-qualified node type string. parse cluster path parse cluster path ( path : str ) - > typing .
- Returns Type Description google.cloud.vmwareengine v1.services.vmware engine.pagers.FetchNetworkPolicyExternalAddressesPager Response message for VmwareEngine.FetchNetworkPolicyExternalAddresses Iterating over this object will yield results and resolve additional pages automatically. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vmwareengine v1 def sample fetch network policy external addresses(): Create a client client = vmwareengine v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vmwareengine v1 def sample list private connection peering routes(): Create a client client = vmwareengine v1 .

