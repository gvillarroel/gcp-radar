---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.676Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Network peering"
feature_slug: "network-peering"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListNetworkPeeringsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListNetworkPeeringsPager"
  - "https://docs.cloud.google.com/vmware-engine/docs/quickstart-networking-requirements"
keywords:
  - "network"
  - "peering"
  - "can"
  - "managed"
  - "terraform"
  - "resources"
  - "available"
  - "through"
---

# Network peering

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Network peering can be managed with Terraform resources; Network peering is available through Cloud Asset Inventory and Cloud Asset APIs.

## Extended Definition

Network peering can be managed with Terraform resources; Network peering is available through Cloud Asset Inventory and Cloud Asset APIs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListNetworkPeeringsAsyncPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListNetworkPeeringsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListNetworkPeeringsPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListNetworkPeeringsPager)
- [https://docs.cloud.google.com/vmware-engine/docs/quickstart-networking-requirements](https://docs.cloud.google.com/vmware-engine/docs/quickstart-networking-requirements)

## Supporting Pages

### "Class ListNetworkPeeringsAsyncPager (1.11.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListNetworkPeeringsAsyncPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListNetworkPeeringsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- If there are more pages, the aiter method will make additional ListNetworkPeerings requests and continue to iterate through the network peerings field on the corresponding responses.
- This class thinly wraps an initial ListNetworkPeeringsResponse object, and provides an aiter method to iterate through its network peerings field.
- Union [ str , bytes ]]] = () ) A pager for iterating through list network peerings requests.
- All the usual ListNetworkPeeringsResponse attributes are available on the pager.

### "Class ListNetworkPeeringsPager (1.11.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListNetworkPeeringsPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListNetworkPeeringsPager)
- Source ID: `site-python-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- If there are more pages, the iter method will make additional ListNetworkPeerings requests and continue to iterate through the network peerings field on the corresponding responses.
- This class thinly wraps an initial ListNetworkPeeringsResponse object, and provides an iter method to iterate through its network peerings field.
- Union [ str , bytes ]]] = () ) A pager for iterating through list network peerings requests.
- All the usual ListNetworkPeeringsResponse attributes are available on the pager.

### "Networking requirements \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/quickstart-networking-requirements](https://docs.cloud.google.com/vmware-engine/docs/quickstart-networking-requirements)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Networking requirements Google Cloud VMware Engine offers a private cloud environment that's accessible to users and applications from on-premises environments, enterprise-managed devices, and Google Cloud services like Virtual Private Cloud (VPC) .
- The connection from your VPC network to a Standard VMware Engine network uses VPC Network Peering .
- Function Subnet mask/prefix vSphere/vSAN subnets CIDR range 10.0.0.0/20 10.0.0.0/21 10.0.0.0/22 10.0.0.0/23 10.0.0.0/24 System management 10.0.0.0/22 10.0.0.0/23 10.0.0.0/24 10.0.0.0/25 10.0.0.0/26 vMotion 10.0.4.0/24 10.0.2.0/25 10.0.1.0/26 10.0.0.128/27 10.0.0.64/28 vSAN 10.0.5.0/24 10.0.2.128/25 10.0.1.64/26 10.0.0.160/27 10.0.0.80/28 NSX transport 10.0.6.0/23 10.0.3.0/24 10.0.1.128/25 10.0.0.192/26 10.0.0.128/27 HCX uplink 10.0.11.128/25 10.0.6.0/26 10.0.3.32/27 10.0.1.144/28 10.0.0.216/29 NSX edge uplink1 10.0.8.0/28 10.0.4.0/28 10.0.2.0/28 10.0.1.0/28 10.0.0.160/29 NSX edge uplink2 10.0.8.16/28 10.0.4.16/28 10.0.2.16/28 10.0.1.16/28 10.0.0.168/29 NSX edge uplink3 10.0.8.32/28 10.0.4.32/28 10.0.2.32/28 10.0.1.32/28 10.0.0.176/29 NSX edge uplink4 10.0.8.48/28 10.0.4.48/28 10.0.2.48/28 10.0.1.48/28 10.0.0.184/29 HCX and NSX Edge Scaling Specified vSphere/vSAN subnets CIDR prefix Maximum remote HCX sites Maximum HCX Network Extension appliances Maximum NSX Edge VMs /24 2 1 2 /23 4 2 4 /22 14 8 8 /21 25 32 8 /20 25 64 8 Note: CIDR range prefixes /23 and larger support more than the maximum number of NSX Edge VMs.
- Name/purpose Description CIDR prefix Edge Services CIDR Required if optional edge services, such as internet access and public IP, are enabled, on a per region basis. /26 Accessing Private and Restricted Google APIs By default both Private 199.36.153.8/30 and Restricted 199.36.153.4/30 CIDRs are advertised into the VMware Engine network to support direct access to Google services.

