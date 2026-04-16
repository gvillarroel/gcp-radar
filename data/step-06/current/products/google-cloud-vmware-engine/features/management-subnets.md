---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.698Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Management subnets"
feature_slug: "management-subnets"
latest_feature_date: "2023-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient"
keywords:
  - "management"
  - "subnets"
  - "let"
  - "you"
  - "configure"
  - "hcx"
  - "vmware"
  - "engine"
---

# Management subnets

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Management subnets let you configure HCX and service subnets for VMware Engine environments.

## Extended Definition

Management subnets let you configure HCX and service subnets for VMware Engine environments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets](https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)

## Supporting Pages

### "Configure and manage subnets \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ZONE : the zone for the private cloud PRIVATE CLOUD ID : the name for the private cloud SUBNET NAME : the name of the subnet to update in this private cloud IP ADDRESS : the IP address and range, for the example 10.0.0.0/24 Management subnets Management subnets are read-only subnets that you can view using the Google Cloud CLI or VMware Engine API.
- Configure and manage subnets This document describes how to create and manage different subnets in VMware Engine.
- Look for the userDefined subnet you want to edit and click the pencil icon to edit the subnet. gcloud Edit a subnet using the Google Cloud CLI using the gcloud vmware private-clouds subnets update command : gcloud vmware private-clouds subnets update SUBNET NAME \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE \ --ip-cidr-range= IP ADDRESS Replace the following: SUBNET NAME : the name of the subnet to update in this private cloud PRIVATE CLOUD ID : the name for the private cloud ZONE : the zone for the private cloud IP ADDRESS : the IP address and range, for the example 10.0.0.0/24 API To edit a subnet using the VMware Engine API, make a PATCH request: curl -sSL -XPATCH -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json; charset=utf-8" "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /subnets/ SUBNET NAME ?update mask=ip cidr range" -d '{ "ip cidr range": " IP ADDRESS " }' Replace the following: PROJECT ID : the project ID for this request.
- Go to Subnets gcloud Get the description of a subnet using the gcloud vmware private-clouds subnets update command : gcloud vmware private-clouds subnets describe SUBNET NAME \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE Replace the following: SUBNET NAME : the name of the subnet to update in this private cloud PRIVATE CLOUD ID : the name for the private cloud ZONE : the zone for the private cloud API To get the description of a subnet using the VMware Engine API, make a GET request: GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /privateClouds/ PRIVATE CLOUD ID /subnets/ SUBNET NAME " Replace the following: PROJECT ID : the project name for this request REGION : the region of the network PRIVATE CLOUD ID : the name for the private cloud SUBNET NAME : the name for the subnet to update in this private cloud What's next Manage your private cloud resources and activity .

### "VLANs and subnets on VMware Engine \_|\_ Google Cloud VMware Engine \_|\_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets](https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Management subnets created on a private cloud When you create a private cloud, VMware Engine creates the following management subnets: System management: VLAN and subnet for ESXi hosts' management network, DNS server, vCenter Server VMotion: VLAN and subnet for ESXi hosts' vMotion network VSAN: VLAN and subnet for ESXi hosts' vSAN network NsxtEdgeUplink1: VLAN and subnet for VLAN uplinks to an external network NsxtEdgeUplink2: VLAN and subnet for VLAN uplinks to an external network HCXUplink: Used by HCX IX (mobility) and NE (extension) appliances to reach their peers and enable the creation of the HCX Cloud Service Mesh.
- The following are Distributed Port Group critical configuration values: Port binding : static binding Port allocation : elastic Number of ports : 120 VLAN type : VLAN VLAN ID : the corresponding subnet ID within the subnets section of the Google Cloud VMware Engine interface Recommended MTU settings The maximum transmission unit (MTU) is the size, in bytes, of the largest packet supported by a network layer protocol, including both headers and data.
- VLANs and subnets on VMware Engine Google Cloud VMware Engine uses a VMware Engine network to provide network connectivity between one or more private clouds, Google Cloud Virtual Private Cloud networks, and on-premises networks.
- Instead, VMware Engine automatically allocates the required network space for HCX components (such as HCX Manager, vMotion, and WAN Uplink) from the management CIDR range you specify for your private cloud.

### "Class VmwareEngineAsyncClient (1.11.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- Source ID: `site-python-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Either management subnets (such as vMotion) that are read-only, or userDefined, which can also be updated. update vmware engine network update vmware engine network ( request : typing .
- Returns Type Description google.cloud.vmwareengine v1.services.vmware engine.pagers.ListVmwareEngineNetworksAsyncPager Response message for VmwareEngine.ListVmwareEngineNetworks Iterating over this object will yield results and resolve additional pages automatically. logging server path logging server path ( project : str , location : str , private cloud : str , logging server : str ) - > str Returns a fully-qualified logging server string. management dns zone binding path management dns zone binding path ( project : str , location : str , private cloud : str , management dns zone binding : str ) - > str Returns a fully-qualified management dns zone binding string. network path network path ( project : str , network : str ) - > str Returns a fully-qualified network string. network peering path network peering path ( project : str , location : str , network peering : str ) - > str Returns a fully-qualified network peering string. network policy path network policy path ( project : str , location : str , network policy : str ) - > str Returns a fully-qualified network policy string. node path node path ( project : str , location : str , private cloud : str , cluster : str , node : str ) - > str Returns a fully-qualified node string. node type path node type path ( project : str , location : str , node type : str ) - > str Returns a fully-qualified node type string. parse cluster path parse cluster path ( path : str ) - > typing .
- CreateManagementDnsZoneBindingRequest ( parent="parent value", management dns zone binding=management dns zone binding, management dns zone binding id="management dns zone binding id value", ) Make the request operation = client. create management dns zone binding (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.vmwareengine v1.types.CreateManagementDnsZoneBindingRequest , dict]] The request object.
- Dict [ str , str ] Parses a vmware engine network path into its component segments. private cloud path private cloud path ( project : str , location : str , private cloud : str ) - > str Returns a fully-qualified private cloud string. private connection path private connection path ( project : str , location : str , private connection : str ) - > str Returns a fully-qualified private connection string. repair management dns zone binding repair management dns zone binding ( request : typing .

