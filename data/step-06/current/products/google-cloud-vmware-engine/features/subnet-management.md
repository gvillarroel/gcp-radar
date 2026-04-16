---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.678Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Subnet management"
feature_slug: "subnet-management"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets"
  - "https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud"
keywords:
  - "subnet"
  - "management"
  - "subnets"
  - "can"
  - "managed"
  - "terraform"
  - "resources"
---

# Subnet management

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Subnets can be managed with Terraform resources.

## Extended Definition

Subnets can be managed with Terraform resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets](https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets)
- [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)

## Supporting Pages

### "Configure and manage subnets \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to Subnets gcloud Get the description of a subnet using the gcloud vmware private-clouds subnets update command : gcloud vmware private-clouds subnets describe SUBNET NAME \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE Replace the following: SUBNET NAME : the name of the subnet to update in this private cloud PRIVATE CLOUD ID : the name for the private cloud ZONE : the zone for the private cloud API To get the description of a subnet using the VMware Engine API, make a GET request: GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /privateClouds/ PRIVATE CLOUD ID /subnets/ SUBNET NAME " Replace the following: PROJECT ID : the project name for this request REGION : the region of the network PRIVATE CLOUD ID : the name for the private cloud SUBNET NAME : the name for the subnet to update in this private cloud What's next Manage your private cloud resources and activity .
- ZONE : the zone for the private cloud PRIVATE CLOUD ID : the name for the private cloud SUBNET NAME : the name of the subnet to update in this private cloud IP ADDRESS : the IP address and range, for the example 10.0.0.0/24 Management subnets Management subnets are read-only subnets that you can view using the Google Cloud CLI or VMware Engine API.
- There are three types of subnets: workload subnets, service subnets, and management workload subnets.
- Look for the userDefined subnet you want to edit and click the pencil icon to edit the subnet. gcloud Edit a subnet using the Google Cloud CLI using the gcloud vmware private-clouds subnets update command : gcloud vmware private-clouds subnets update SUBNET NAME \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE \ --ip-cidr-range= IP ADDRESS Replace the following: SUBNET NAME : the name of the subnet to update in this private cloud PRIVATE CLOUD ID : the name for the private cloud ZONE : the zone for the private cloud IP ADDRESS : the IP address and range, for the example 10.0.0.0/24 API To edit a subnet using the VMware Engine API, make a PATCH request: curl -sSL -XPATCH -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json; charset=utf-8" "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /subnets/ SUBNET NAME ?update mask=ip cidr range" -d '{ "ip cidr range": " IP ADDRESS " }' Replace the following: PROJECT ID : the project ID for this request.

### "VLANs and subnets on VMware Engine \_|\_ Google Cloud VMware Engine \_|\_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets](https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Management subnets created on a private cloud When you create a private cloud, VMware Engine creates the following management subnets: System management: VLAN and subnet for ESXi hosts' management network, DNS server, vCenter Server VMotion: VLAN and subnet for ESXi hosts' vMotion network VSAN: VLAN and subnet for ESXi hosts' vSAN network NsxtEdgeUplink1: VLAN and subnet for VLAN uplinks to an external network NsxtEdgeUplink2: VLAN and subnet for VLAN uplinks to an external network HCXUplink: Used by HCX IX (mobility) and NE (extension) appliances to reach their peers and enable the creation of the HCX Cloud Service Mesh.
- The following are Distributed Port Group critical configuration values: Port binding : static binding Port allocation : elastic Number of ports : 120 VLAN type : VLAN VLAN ID : the corresponding subnet ID within the subnets section of the Google Cloud VMware Engine interface Recommended MTU settings The maximum transmission unit (MTU) is the size, in bytes, of the largest packet supported by a network layer protocol, including both headers and data.
- You can target service subnets for appliance or service deployment scenarios, such as storage, backup, disaster recover (DR), media streaming, and providing high scale linear throughput and packet processing for even the largest scaled private clouds.
- You can configure any IP address range that doesn't overlap with other networks in your private cloud, your on-premises network, your private cloud management network, or subnet IP address ranges in any peered Virtual Private Cloud (VPC) network.

### "Manage private cloud resources and activity \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Viewing subnets To view the list of defined management subnets for your private cloud, select the Subnets tab.
- Manage private cloud resources and activity After you create a private cloud, you can view detailed information about it, manage its resources and activity, and access its VMware management appliances.
- Viewing vSphere management network To view the list of VMware management resources and virtual machines that are configured on your private cloud, select the vSphere Management Network tab.
- Google Cloud VMware Engine does not support Terraform for provisioning or managing resources.

