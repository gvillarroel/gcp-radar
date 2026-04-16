---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.718Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "VMware Engine nodes in europe-west3-b"
feature_slug: "vmware-engine-nodes-in-europe-west3-b"
latest_feature_date: "2021-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-high-availability-vmware"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types"
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes"
keywords:
  - "vmware"
  - "engine"
  - "nodes"
  - "europe"
  - "west3"
  - "available"
  - "frankfurt"
  - "zone"
---

# VMware Engine nodes in europe-west3-b

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

VMware Engine nodes are available in the Frankfurt europe-west3-b zone.

## Extended Definition

VMware Engine nodes are available in the Frankfurt europe-west3-b zone.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/concepts-high-availability-vmware](https://docs.cloud.google.com/vmware-engine/docs/concepts-high-availability-vmware)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types](https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types)
- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes)

## Supporting Pages

### "Availability and redundancy \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-high-availability-vmware](https://docs.cloud.google.com/vmware-engine/docs/concepts-high-availability-vmware)
- Source ID: `site-docs-reference-required-4`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VMware Engine zone Dedicated Interconnect locations asia-northeast1-a AT Tokyo CC2 (nrt-zone1-738, nrt-zone2-738) asia-south1-a Equinix MB1 - Mumbai (GPX Mumbai 1) (bom-zone1-2310, bom-zone2-2310) asia-south2-a Sify Greenfort - Noida (del-zone1-2411, del-zone2-2411) australia-southeast1-a NEXTDC S1 (syd-zone1-1660, syd-zone2-1660) europe-west12-a Telecom Italia Cebrosa Campus (trn-zone1-99032, trn-zone2-99032) europe-west2-a Equinix London Slough (LD5) (lhr-zone1-832, lhr-zone2-832) Equinix London Slough (LD6) (lhr-zone1-2262, lhr-zone2-2262) europe-west3-a Digital Realty Frankfurt FRA1-16 (fra-zone1-58, fra-zone2-58) europe-west3-b e-shelter Frankfurt (FRA1) (fra-zone1-277, fra-zone2-277) europe-west6-a greenDatacenter Lupfig (zrh-zone1-1086, zrh-zone2-1086) europe-west8-a Telecom Italia Sparkle Milano Data Center (mil-zone1-99013, mil-zone2-99013) northamerica-northeast1-a Cologix MTL10-H (yul-zone1-99002, yul-zone2-99002) northamerica-northeast2-a Equinix Toronto (TR2) (yyz-zone1-2206, yyz-zone2-2206) southamerica-east1-a Ascenty - Sao Paulo 2 (gru-zone1-7580, gru-zone2-7580) southamerica-west1-a GTD Panamericana (scl-zone2-99014, scl-zone2-99014) us-east4-a Equinix DC1-DC15, DC21 - Ashburn (iad-zone1-1, iad-zone2-1) us-west2-a Digital Realty LAX (600 West 7th) (lax-zone1-403, lax-zone2-403) CoreSite - LA1 - One Wilshire (lax-zone1-19, lax-zone2-19) Redundant networking services All Google networking services for the private cloud (including firewall, public IP addresses, internet, Dedicated Interconnect, Partner Interconnect, and Cloud VPN) are highly available and support the SLA.
- When zone separation is enabled, VMware Engine zones are mapped to the same Google Cloud zones, with the following exceptions: VMware Engine zone Google Cloud zone australia-southeast1-a australia-southeast1-b † australia-southeast1-b australia-southeast1-c † europe-west2-a europe-west2-c † europe-west2-b europe-west2-a † europe-west3-a europe-west3-b † europe-west3-b europe-west3-a † us-east4-a us-east4-b † us-east4-b us-east4-a † † When using zone separation.
- When VMware Engine detects an ESXi node failure, it adds a new ESXi host to the affected VMware cluster from its pool of readily available nodes and removes the failed node from the cluster.
- If you require applications to remain operational during a VMware Engine zone failure, we recommend that you distribute redundant resources across different zones so you can safeguard your applications and data from potential data center failures.

### "VMware Engine node types \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types](https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Region Zones Private cloud types Node types asia-northeast1 (Tokyo) asia-northeast1-a Standard, Single-Node ve1, ve2 asia-northeast2 (Osaka) asia-northeast2-a Standard, Single-Node ve2 asia-south1 (Mumbai) asia-south1-a , asia-south1-b Standard, Stretched, Single-Node ve1 asia-south2 (Delhi) asia-south2-a Standard, Single-Node ve1 asia-southeast1 (Singapore) asia-southeast1-a , asia-southeast1-b Standard, Single-Node ve1 australia-southeast1 (Sydney) australia-southeast1-a , australia-southeast1-b Standard, Stretched, Single-Node ve1, ve2 ‡ australia-southeast2 (Melbourne) australia-southeast2-a , australia-southeast2-b Standard, Stretched, Single-Node ve1, ve2 europe-west2 (London) europe-west2-a , europe-west2-b Standard, Stretched, Single-Node ve1, ve2 ‡ europe-west3 (Frankfurt) europe-west3-a , europe-west3-b Standard, Stretched, Single-Node ve1, ve2 ‡ europe-west4 (Netherlands) europe-west4-a Standard, Single-Node ve1 europe-west6 (Zurich) europe-west6-a Standard, Single-Node ve1 europe-west8 (Milan) europe-west8-a , europe-west8-b Standard, Stretched, Single-Node ve1, ve2 europe-west9 (Paris) europe-west9-b Standard, Single-Node ve1, v2 europe-west12 (Turin) europe-west12-a Standard, Single-Node ve1 europe-southwest1 (Madrid) europe-southwest1-a Standard, Single-Node ve2 me-central1 (Doha) me-central1-a Standard, Single-Node ve2 me-central2 (Dammam) me-central2-c Standard, Single-Node ve2 me-west1 (Tel Aviv) me-west1-a , me-west1-b Standard, Single-Node ve1 northamerica-northeast1 (Montréal) northamerica-northeast1-a Standard, Single-Node ve1, ve2 ‡ northamerica-northeast2 (Toronto) northamerica-northeast2-a Standard, Single-Node ve1, ve2 southamerica-east1 (São Paulo) southamerica-east1-a , southamerica-east1-c Standard, Stretched, Single-Node ve1, ve2 ‡ southamerica-west1 (Santiago) southamerica-west1-a , southamerica-west1-b Standard, Stretched, Single-Node ve1, ve2 ‡ us-central1 (Iowa) us-central1-a Standard, Single-Node ve1, ve2 ‡ us-east4 (North Virginia) us-east4-a , us-east4-b Standard, Single-Node ve1, ve2 ‡ us-south1 (Dallas) us-south1-b Standard, Single-Node ve1, ve2 ‡ us-west2 (Los Angeles) us-west2-a , us-west2-b Standard, Single-Node ve1, ve2 ‡ Supports private clouds with mixed ve1 and ve2 node types.
- Node type vCPUs/Node § Memory/Node (GiB) Storage/Node (TB) ve1-standard-72 72 768 19.2 ve2-mega-128 † 128 2048 51.2 ve2-mega-112 † 112 2048 51.2 ve2-mega-96 † 96 2048 51.2 ve2-mega-80 † 80 2048 51.2 ve2-mega-64 † 64 2048 51.2 ve2-large-128 † 128 2048 38.4 ve2-large-112 † 112 2048 38.4 ve2-large-96 † 96 2048 38.4 ve2-large-80 † 80 2048 38.4 ve2-large-64 † 64 2048 38.4 ve2-standard-128 † 128 2048 25.5 ve2-standard-112 † 112 2048 25.5 ve2-standard-96 † 96 2048 25.5 ve2-standard-80 † 80 2048 25.5 ve2-standard-64 † 64 2048 25.5 ve2-small-128 † 128 2048 12.8 ve2-small-112 † 112 2048 12.8 ve2-small-96 † 96 2048 12.8 ve2-small-80 † 80 2048 12.8 ve2-small-64 † 64 2048 12.8 Storage-only node types The following table lists storage-only node types that are available when creating a VMware Engine private cloud or cluster.
- Node commitments You can purchase VMware Engine nodes with a one- or three-year committed use discount (CUD) where you make a fixed monthly payment, or you can pay for nodes as you use them.
- VMware Engine node types A Google Cloud VMware Engine private cloud is a collection of vSphere clusters created with a set of dedicated isolated bare metal hardware nodes in a region.

### "Manage storage-only nodes \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Clicking the Clusters tab displays cluster data in the table. gcloud To create stretched private cloud that contains storage-only nodes using the Google Cloud CLI, do the following: Create a stretched private cloud by entering the gcloud private-clouds create command : gcloud vmware private-clouds create STRETCHED PC STORAGE NODE NAME \ --description= DESCRIPTION \ --location= REGION \ --cluster= STRETCHED CLUSTER NAME \ --node-type-config=type=standard-72,count= n \ --node-type-config=type=storage-only-standard-72,count= m \ --management-range= IP ADDRESS \ --vmware-engine-network= NETWORK NAME --preferred-zone=projects/ PROJECT ID /locations/ PREFERRED ZONE \ --secondary-zone=projects/ PROJECT ID /locations/ SECONDARY ZONE \ --type=STRETCHED Replace the following: STRETCHED PC STORAGE NODE NAME : the name for the stretched private cloud with storage-only node.
- Click Create to begin creating the private cloud. gcloud To create private cloud with storage-only nodes using the Google Cloud CLI, do the following: Create a private cloud PC STORAGE NODE NAME with n standard-72 nodes and m storage-only-standard-72 by entering the gcloud private-clouds create command : gcloud vmware private-clouds create PC STORAGE NODE NAME \ --location= ZONE \ --project= PROJECT ID \ --description= DESCRIPTION \ --management-range= IP ADDRESS \ --cluster= CLUSTER NAME \ --node-type-config=type=standard-72,count= n \ --node-type-config=type=storage-only-standard-72,count= m \ --vmware-engine-network= NETWORK NAME Replace the following: PC STORAGE NODE NAME : the name for the private cloud with storage-only node.
- API To create stretched private cloud that contains storage-only nodes using the VMware Engine API, make a GET request: GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds?alt=json&privateCloudId= PC STORAGE ONLY NODE NAME " -d '{ "description": " DESCRIPTION ", "managementCluster": { "clusterId": " CLUSTER NAME ", "nodeTypeConfigs": { "standard-72": { "nodeCount": n }, "storage-only-standard-72": { "nodeCount": m } } }, "networkConfig": { "managementCidr": " IP ADDRESS ", "vmwareEngineNetwork": "projects/ PROJECT ID /locations/ ZONE /vmwareEngineNetworks/ NETWORK NAME " } }' Replace the following: PROJECT ID : the project ID for the request.
- API To create private cloud with storage-only nodes using the VMware Engine API, make a GET request: GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds?alt=json&privateCloudId= PC STORAGE NODE NAME " -d '{ "description": " DESCRIPTION ", "managementCluster": { "clusterId": " CLUSTER NAME ", "nodeTypeConfigs": { "standard-72": { "nodeCount": n }, "storage-only-standard-72": { "nodeCount": m } } }, "networkConfig": { "managementCidr": " IP ADDRESS ", "vmwareEngineNetwork": "projects/ PROJECT ID /locations/ ZONE /vmwareEngineNetworks/ NETWORK NAME " } }' Replace the following: PROJECT ID : the project ID for the request.

