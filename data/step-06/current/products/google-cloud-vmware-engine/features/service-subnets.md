---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.708Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Service subnets"
feature_slug: "service-subnets"
latest_feature_date: "2022-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets"
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault"
keywords:
  - "subnets"
  - "add"
  - "dedicated"
  - "appliance"
  - "deployments"
  - "such"
  - "storage"
  - "backup"
---

# Service subnets

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Service subnets add dedicated subnets for appliance and service deployments such as storage, backup, disaster recovery, and media streaming.

## Extended Definition

Service subnets add dedicated subnets for appliance and service deployments such as storage, backup, disaster recovery, and media streaming.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets](https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets)
- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault)

## Supporting Pages

### "Backup vault for immutable and indelible backups \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault)
- Source ID: `site-docs-reference-2`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This selection makes the backup vault compatible with resources managed through Google Cloud console, such as Compute Engine VMs, but not with resources managed through the appliance management console.
- Workload Managed by Compute Engine instance Google Cloud console Compute Engine disk Google Cloud console Filestore instance (invitation only) Google Cloud console Cloud SQL instance Google Cloud console AlloyDB cluster Google Cloud console Google Cloud VMware Engine, Oracle database, and SQL Server database appliance management console Note: AlloyDB clusters and Filestore instances in backup vaults are not supported for multi-regions.
- Set up a backup vault This page describes the Backup and DR Service backup vault, including supported backup models, available locations and resources, key features such as enforced retention periods and access restrictions, and how to manage them.
- Resources managed through the appliance management console (for example, Google Cloud VMware Engine VMs) are also supported, but backup and restore operations for those resources are not restricted to your current organization.

### "VLANs and subnets on VMware Engine \_|\_ Google Cloud VMware Engine \_|\_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets](https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can target service subnets for appliance or service deployment scenarios, such as storage, backup, disaster recover (DR), media streaming, and providing high scale linear throughput and packet processing for even the largest scaled private clouds.
- Management subnets created on a private cloud When you create a private cloud, VMware Engine creates the following management subnets: System management: VLAN and subnet for ESXi hosts' management network, DNS server, vCenter Server VMotion: VLAN and subnet for ESXi hosts' vMotion network VSAN: VLAN and subnet for ESXi hosts' vSAN network NsxtEdgeUplink1: VLAN and subnet for VLAN uplinks to an external network NsxtEdgeUplink2: VLAN and subnet for VLAN uplinks to an external network HCXUplink: Used by HCX IX (mobility) and NE (extension) appliances to reach their peers and enable the creation of the HCX Cloud Service Mesh.
- The following are Distributed Port Group critical configuration values: Port binding : static binding Port allocation : elastic Number of ports : 120 VLAN type : VLAN VLAN ID : the corresponding subnet ID within the subnets section of the Google Cloud VMware Engine interface Recommended MTU settings The maximum transmission unit (MTU) is the size, in bytes, of the largest packet supported by a network layer protocol, including both headers and data.
- VLANs and subnets on VMware Engine Google Cloud VMware Engine uses a VMware Engine network to provide network connectivity between one or more private clouds, Google Cloud Virtual Private Cloud networks, and on-premises networks.

### "Configure and manage subnets \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can target using service subnets for appliance or service deployment scenarios, such as storage, backup, disaster recovery (DR), media streaming, and providing high scale linear throughput and packet processing for even the largest scaled private clouds.
- Look for the userDefined subnet you want to edit and click the pencil icon to edit the subnet. gcloud Edit a subnet using the Google Cloud CLI using the gcloud vmware private-clouds subnets update command : gcloud vmware private-clouds subnets update SUBNET NAME \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE \ --ip-cidr-range= IP ADDRESS Replace the following: SUBNET NAME : the name of the subnet to update in this private cloud PRIVATE CLOUD ID : the name for the private cloud ZONE : the zone for the private cloud IP ADDRESS : the IP address and range, for the example 10.0.0.0/24 API To edit a subnet using the VMware Engine API, make a PATCH request: curl -sSL -XPATCH -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json; charset=utf-8" "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /subnets/ SUBNET NAME ?update mask=ip cidr range" -d '{ "ip cidr range": " IP ADDRESS " }' Replace the following: PROJECT ID : the project ID for this request.
- Go to Subnets gcloud Get the description of a subnet using the gcloud vmware private-clouds subnets update command : gcloud vmware private-clouds subnets describe SUBNET NAME \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE Replace the following: SUBNET NAME : the name of the subnet to update in this private cloud PRIVATE CLOUD ID : the name for the private cloud ZONE : the zone for the private cloud API To get the description of a subnet using the VMware Engine API, make a GET request: GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /privateClouds/ PRIVATE CLOUD ID /subnets/ SUBNET NAME " Replace the following: PROJECT ID : the project name for this request REGION : the region of the network PRIVATE CLOUD ID : the name for the private cloud SUBNET NAME : the name for the subnet to update in this private cloud What's next Manage your private cloud resources and activity .
- Go to Subnets gcloud List a subnet using the Google Cloud CLI by entering the gcloud vmware private-clouds subnets list command : gcloud vmware private-clouds subnets list \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE Replace the following: PRIVATE CLOUD ID : the name for the private cloud ZONE : the zone for the private cloud API To list a subnet using the VMware Engine API, make a GET request: curl -sSL -XGET -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json; charset=utf-8" "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /subnets" Replace the following: PROJECT ID : the project ID for this request.

