---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.674Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "DNS server IP"
feature_slug: "dns-server-ip"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection"
  - "https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud"
keywords:
  - "dns"
  - "server"
  - "ip"
  - "configuration"
  - "can"
  - "managed"
  - "terraform"
  - "resources"
---

# DNS server IP

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

DNS server IP configuration can be managed with Terraform resources.

## Extended Definition

DNS server IP configuration can be managed with Terraform resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection)
- [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)

## Supporting Pages

### "Configure DNS bindings \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authoritative gcloud dns managed-zones create zone1 \ --dns-name="zone1.example.com." \ --visibility="private" \ --description=" DESCRIPTION " \ --networks=" EXISTING VPC " gcloud dns managed-zones create peering-zone1 \ --dns-name="zone1.example.com." \ --visibility="private" \ --networks=" INTRANET VPC URL " \ --target-project=" PROJECT ID " \ --target-network=" EXISTING VPC " \ --description=" DESCRIPTION " Conditional Forwarding gcloud dns managed-zones create zone1 \ --description=" DESCRIPTION " \ --dns-name="zone1.example.com." \ --visibility="private" \ --networks= EXISTING VPC \ --forwarding-targets=" DNS SERVER IP1 "," DNS SERVER IP2 " gcloud dns managed-zones create peering-zone1 \ --dns-name="zone1.example.com." \ --visibility="private" \ --networks=" INTRANET VPC URL " \ --target-project=" PROJECT ID " \ --target-network=" EXISTING VPC " \ --description=" DESCRIPTION " Forwarding All gcloud dns managed-zones create forward-all \ --description="" --dns-name="." \ --visibility="private" \ --networks=" EXISTING VPC " \ --forwarding-targets="DNS SERVER IP1","DNS SERVER IP2" gcloud dns managed-zones create peering-forward-all \ --dns-name="." \ --visibility="private" \ --networks=" INTRANET VPC URL " \ --target-project=" PROJECT ID " \ --target-network=" EXISTING VPC " \ --description=" DESCRIPTION " Google API Private gcloud dns managed-zones create googleapis \ --dns-name="googleapis.com." \ --visibility="private" \ --description="Direct GCVE traffic to Private IPs for Google API Access" \ --networks=" EXISTING VPC " gcloud dns managed-zones create peering-googleapis \ --dns-name="googleapis.com." \ --visibility="private" \ --networks=" INTRANET VPC URL " \ --target-project=" PROJECT ID " \ --target-network=" EXISTING VPC " \ --description=" DESCRIPTION " gcloud dns record-sets create private.googleapis.com. \ --zone="googleapis" \ --type="A" \ --ttl="300" \ --rrdatas="199.36.153.8,199.36.153.9,199.36.153.10,199.36.153.11" gcloud dns record-sets create .googleapis.com. \ --zone="googleapis" \ --type="CNAME" \ --ttl="300" \ --rrdatas="private.googleapis.com." Google API Restricted gcloud dns managed-zones create googleapis \ --dns-name="googleapis.com." \ --visibility="private" \ --description="Direct GCVE traffic to Private IPs for Google API Access" \ --networks=" EXISTING VPC " gcloud dns managed-zones create peering-googleapis \ --dns-name="googleapis.com." \ --visibility="private" \ --networks=" INTRANET VPC URL " \ --target-project=" PROJECT ID " \ --target-network=" EXISTING VPC " \ --description=" DESCRIPTION " gcloud dns record-sets create restricted.googleapis.com. \ --zone="googleapis" \ --type="A" \ --ttl="300" \ --rrdatas="199.36.153.4, 199.36.153.5, 199.36.153.6, 199.36.153.7" gcloud dns record-sets create .googleapis.com. \ --zone="googleapis" \ --type="CNAME" \ --ttl="300" \ --rrdatas="restricted.googleapis.com." Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To do so, you need to: Get the IP address of the Private Cloud's DNS server Set up DNS bind permissions to allow a user principal to bind to the intranet VPC Configure DNS for your VMware workloads or NSX segment DHCP DNS setting Before you begin You can only configure DNS bindings using the gcloud tool or the API. gcloud and API requirements To use the gcloud command line tool or the API to manage your VMware Engine resources, we recommend configuring the tools as described below. gcloud Set your default project ID: gcloud config set project PROJECT ID Set a default region and zone: gcloud config set compute/region REGION gcloud config set compute/zone ZONE For more information on the gcloud vmware tool, see the Cloud SDK reference docs .
- Locate the VMware Engine Network, click the Action option and select Copy Intranet VPC network URL . gcloud gcloud vmware networks describe VMWARE ENGINE NETWORK \ --project= PROJECT ID Replace the following: VMWARE ENGINE NETWORK : the network to describe PROJECT ID : the project ID for this request API Make a GET request to the vmwareEngineNetworks resource and provide the name of the network: curl -X GET -H "Authorization: Bearer TOKEN " -H "Content-Type: application/json; charset=utf-8" https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/vmwarenEngineNetworks/ NETWORK ID Replace the following: PROJECT ID : the project for this request NETWORK ID : the network to describe Binding The intended workflow, once bind permissions are configured, is to add a DNS peering to the VMware Engine network intranet VPC into your standard Cloud DNS zone management process for each zone. gcloud gcloud dns managed-zones create peering- DOMAIN \ --dns-name=" DOMAIN " \ --visibility="private" \ --networks=" INTRANET VPC URL " \ --target-project=" PROJECT ID " \ --target-network=" EXISTING VPC " \ --description=" DESCRIPTION " Replace the following: DOMAIN : the domain to extended, example zone1.example.com INTRANET VPC URL : the intranet VPC URL for the VMware Engine network EXISTING VPC : the URL of the existing VPC network that the DOMAIN is already bound to PROJECT ID : the project ID for this request API Make a PATCH request to the managedZones resource and provide the name of the zone: curl -X POST -H "Authorization: Bearer TOKEN " -H "Content-Type: application/json; charset=utf-8" https://dns.googleapis.com/v1/projects/ PROJECT ID /managedZones -d "{ "name": "peering- DOMAIN ", "description": "", "dnsName": DOMAIN , "peeringConfig": { "targetNetwork": { "networkUrl": EXISTING VPC } }, "privateVisibilityConfig": { "networks": [ { "networkUrl": INTRANET VPC URL } ] } }" Replace the following: PROJECT ID : the project ID for this request DOMAIN : the domain to extended, example zone1.example.com INTRANET VPC URL : the intranet VPC URL for the VMware Engine network.
- On the Summary page for the private cloud, under Private Cloud DNS servers , click Copy to copy the private Cloud DNS server IP address. gcloud To get the IP address of your private cloud's DNS server using Google Cloud CLI, use the gcloud vmware private-clouds describe command : gcloud vmware private-clouds describe PRIVATE CLOUD ID \ --project= PROJECT ID \ --location= REGION Replace the following: PRIVATE CLOUD ID : the private cloud name for this request PROJECT ID : the project ID for this request REGION : the region of the private cloud; if this is stretched private cloud, specify the zone for this private cloud API To get the IP address of your private cloud's DNS server using the VMware Engine API, make a GET request: curl -X GET -H "Authorization: Bearer TOKEN " -H "Content-Type: application/json; charset=utf-8" "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /privateCloud/ PRIVATE CLOUD ID " Replace the following: PROJECT ID : the project ID for this request REGION : the region of the private cloud; if this is stretched private cloud, specify the zone for this private cloud PRIVATE CLOUD ID : the private cloud name for this request.

### "Manage private cloud resources and activity \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud VMware Engine does not support Terraform for provisioning or managing resources.
- The following example creates a new cluster of standard-72 node type. curl -L -X POST -H "Authorization: Bearer TOKEN " -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters?clusterId= CLUSTER ID " \ -d '{ "nodeTypeConfigs": { "standard-72": { "nodeCount": NODE COUNT , "customCoreCount": CORE COUNT } } }' Replace the following: PROJECT ID : the project ID for the private cloud CLUSTER ID : the cluster ID for the cluster that you are adding to the private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud NODE COUNT : the number of nodes to add CORES COUNT : the number of custom cores to add Python Add the new cluster and specify the core count configuration.
- Click Create . gcloud Add the new cluster and specify the core count configuration by running the gcloud vmware private-clouds clusters create command : The following example creates a new cluster with a standard-72 node type. gcloud vmware private-clouds clusters create CLUSTER ID \ --location= ZONE \ --private-cloud= PRIVATE CLOUD ID \ --node-type-config=type=standard-72,count= NODE COUNT ,custom-core-count= CORE COUNT Replace the following: CLUSTER ID : the cluster ID for the cluster that you are adding to the private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud NODE COUNT : the number of nodes to add CORES COUNT : the number of custom cores to add API Add the new cluster and specify the core count configuration by making a POST request.
- Select the private cloud you want to manage from the list of private clouds. gcloud and API requirements To use the gcloud command line tool or the API to manage your VMware Engine resources, we recommend configuring the tools as described below. gcloud Set your default project ID: gcloud config set project PROJECT ID Set a default region and zone: gcloud config set compute/region REGION gcloud config set compute/zone ZONE For more information on the gcloud vmware tool, see the Cloud SDK reference docs .

### "Automate protection of Compute Engine instances \_|\_ Backup and DR \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection)
- Source ID: `site-docs-reference-2`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can wait for the scheduled dynamic protection job to run at 4:15 AM or 4:15 PM local time for it to take effect, or you can run a dynamic protection job on-demand by following the steps in Run Manual Auto Protection . variable "project id" { description = "The ID of the existing Google Cloud project" type = string } variable "region" { description = "The Google Cloud region where demo-instance should be created" type = string } variable "zone" { description = "The Google Cloud zone where demo-instance should be created" type = string } provider "google" { project = var.project id region = var.region zone = var.zone } data "google project" "project" { project id = var.project id } Reference: https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/tags tag key resource "google tags tag key" "key" { parent = "projects/${var.project id}" short name = "backupdr-dynamicprotect" description = "Tag key for Dynamic Protection." } Reference: https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/tags tag value resource "google tags tag value" "value" { parent = "tagKeys/${google tags tag key.key.name}" short name = "backupdr-gold" # This value should be present in the "Management Console UI" > "Backup Plans" > "Dynamic Protection Tags" description = "Tag value for gold plan." } Reference: https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute instance Ensure not to define tag in "resource manager tags" block while creating VM instance.
- It'll modify just tag binding and VM instance won't be affected. resource "google compute instance" "vm instance" { name = "demo-instance" machine type = "e2-micro" zone = var.zone boot disk { initialize params { image = "debian-cloud/debian-11" } } network interface { network = "default" access config { // Ephemeral public IP } } } Reference: https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/google tags location tag binding resource "google tags location tag binding" "binding" { parent = "//compute.googleapis.com/projects/${data.google project.project.number}/zones/${var.zone}/instances/${google compute instance.vm instance.instance id}" tag value = "tagValues/${google tags tag value.value.name}" location = var.zone } Reference for Tag bindings at project/org level: https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/tags tag binding Detach a tag from a resource You can detach a tag from a resource by deleting the tag binding resource.
- Note: Be sure that you aren't protecting the same Compute Engine instance twice if managed by two different backup/recovery appliances in two different management server instances.
- Administer Dynamic Protection Tags To create, update, and delete Dynamic Protection Tags, you need to have the appropriate permissions for your role to be sure you have one of the following roles assigned: Backup and DR Admin Backup and DR Backup User Backup and DR User V2 Project Editor Project Owner a custom role that includes the following permissions: Required permissions backupdr.managementServers.listDynamicProtection backupdr.managementServers.getDynamicProtection backupdr.managementServers.createDynamicProtection backupdr.managementServers.deleteDynamicProtection compute.instances.listEffectiveTags Learn more about Backup and DR Service roles .

