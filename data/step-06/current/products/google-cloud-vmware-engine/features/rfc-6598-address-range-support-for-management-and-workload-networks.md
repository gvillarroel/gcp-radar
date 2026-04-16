---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.734Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "RFC 6598 address range support for management and workload networks"
feature_slug: "rfc-6598-address-range-support-for-management-and-workload-networks"
latest_feature_date: "2020-10-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient"
keywords:
  - "rfc"
  - "6598"
  - "address"
  - "range"
  - "management"
  - "workload"
  - "networks"
  - "can"
---

# RFC 6598 address range support for management and workload networks

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Management and workload networks can use RFC 6598 non-private address ranges when creating a private cloud.

## Extended Definition

Management and workload networks can use RFC 6598 non-private address ranges when creating a private cloud.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets](https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient)

## Supporting Pages

### "VLANs and subnets on VMware Engine \_|\_ Google Cloud VMware Engine \_|\_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets](https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure any IP address range that doesn't overlap with other networks in your private cloud, your on-premises network, your private cloud management network, or subnet IP address ranges in any peered Virtual Private Cloud (VPC) network.
- For a detailed breakdown of how VMware Engine allocates subnet IP address ranges for management, see Networking requirements .
- Instead, VMware Engine automatically allocates the required network space for HCX components (such as HCX Manager, vMotion, and WAN Uplink) from the management CIDR range you specify for your private cloud.
- Management subnets created on a private cloud When you create a private cloud, VMware Engine creates the following management subnets: System management: VLAN and subnet for ESXi hosts' management network, DNS server, vCenter Server VMotion: VLAN and subnet for ESXi hosts' vMotion network VSAN: VLAN and subnet for ESXi hosts' vSAN network NsxtEdgeUplink1: VLAN and subnet for VLAN uplinks to an external network NsxtEdgeUplink2: VLAN and subnet for VLAN uplinks to an external network HCXUplink: Used by HCX IX (mobility) and NE (extension) appliances to reach their peers and enable the creation of the HCX Cloud Service Mesh.

### "Class VmwareEngineAsyncClient (1.11.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- Source ID: `site-python-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.vmwareengine v1.services.vmware engine.pagers.ListVmwareEngineNetworksAsyncPager Response message for VmwareEngine.ListVmwareEngineNetworks Iterating over this object will yield results and resolve additional pages automatically. logging server path logging server path ( project : str , location : str , private cloud : str , logging server : str ) - > str Returns a fully-qualified logging server string. management dns zone binding path management dns zone binding path ( project : str , location : str , private cloud : str , management dns zone binding : str ) - > str Returns a fully-qualified management dns zone binding string. network path network path ( project : str , network : str ) - > str Returns a fully-qualified network string. network peering path network peering path ( project : str , location : str , network peering : str ) - > str Returns a fully-qualified network peering string. network policy path network policy path ( project : str , location : str , network policy : str ) - > str Returns a fully-qualified network policy string. node path node path ( project : str , location : str , private cloud : str , cluster : str , node : str ) - > str Returns a fully-qualified node string. node type path node type path ( project : str , location : str , node type : str ) - > str Returns a fully-qualified node type string. parse cluster path parse cluster path ( path : str ) - > typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vmwareengine v1 async def sample fetch network policy external addresses(): Create a client client = vmwareengine v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vmwareengine v1 async def sample create management dns zone binding(): Create a client client = vmwareengine v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vmwareengine v1 async def sample delete management dns zone binding(): Create a client client = vmwareengine v1 .

### "Class VmwareEngineClient (1.11.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient)
- Source ID: `site-python-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.vmwareengine v1.services.vmware engine.pagers.ListVmwareEngineNetworksPager Response message for VmwareEngine.ListVmwareEngineNetworks Iterating over this object will yield results and resolve additional pages automatically. logging server path logging server path ( project : str , location : str , private cloud : str , logging server : str ) - > str Returns a fully-qualified logging server string. management dns zone binding path management dns zone binding path ( project : str , location : str , private cloud : str , management dns zone binding : str ) - > str Returns a fully-qualified management dns zone binding string. network path network path ( project : str , network : str ) - > str Returns a fully-qualified network string. network peering path network peering path ( project : str , location : str , network peering : str ) - > str Returns a fully-qualified network peering string. network policy path network policy path ( project : str , location : str , network policy : str ) - > str Returns a fully-qualified network policy string. node path node path ( project : str , location : str , private cloud : str , cluster : str , node : str ) - > str Returns a fully-qualified node string. node type path node type path ( project : str , location : str , node type : str ) - > str Returns a fully-qualified node type string. parse cluster path parse cluster path ( path : str ) - > typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vmwareengine v1 def sample fetch network policy external addresses(): Create a client client = vmwareengine v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vmwareengine v1 def sample create management dns zone binding(): Create a client client = vmwareengine v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vmwareengine v1 def sample delete management dns zone binding(): Create a client client = vmwareengine v1 .

