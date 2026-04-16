---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:24.686Z"
product_name: "Cloud DNS"
product_slug: "cloud-dns"
feature_name: "Zonal private Cloud DNS zones"
feature_slug: "zonal-private-cloud-dns-zones"
latest_feature_date: "2022-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dns/docs/troubleshooting"
  - "https://docs.cloud.google.com/dns/docs/zones"
  - "https://docs.cloud.google.com/dns/docs/dnssec-migrate"
  - "https://docs.cloud.google.com/dns/docs/overview"
keywords:
  - "zonal"
  - "private"
  - "dns"
  - "zones"
  - "now"
  - "supports"
  - "that"
  - "are"
---

# Zonal private Cloud DNS zones

Product: Cloud DNS
Coverage: MEDIUM

## Step 02 Summary

Cloud DNS now supports private DNS zones that are scoped to a specific Google Cloud zone; Cloud DNS now supports private DNS zones scoped to an individual Google Cloud zone.

## Extended Definition

Cloud DNS now supports private DNS zones that are scoped to a specific Google Cloud zone; Cloud DNS now supports private DNS zones scoped to an individual Google Cloud zone.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dns/docs/troubleshooting](https://docs.cloud.google.com/dns/docs/troubleshooting)
- [https://docs.cloud.google.com/dns/docs/zones](https://docs.cloud.google.com/dns/docs/zones)
- [https://docs.cloud.google.com/dns/docs/dnssec-migrate](https://docs.cloud.google.com/dns/docs/dnssec-migrate)
- [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview)

## Supporting Pages

### Troubleshoot Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/troubleshooting](https://docs.cloud.google.com/dns/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Determine that your VM is using: gcloud compute instances describe VM NAME \ --zone= GCE ZONE \ --format="csvno-heading" Ensure that the network is in the list of networks authorized to query your private zone: gcloud dns managed-zones describe PRIVATE ZONE NAME \ --format="csv(privateVisibilityConfig['networks'])" Verify that the DNS name in the query matches your zone Google Cloud resolves a record according to the name resolution order , using the zone with the longest suffix to decide which zone to query for a given DNS name.
- This page provides solutions for common issues that you might encounter when using Cloud DNS to create public zones, private zones, reverse lookup zones, forwarding zones, and resource records.
- Private zones not resolving through Cloud VPN or Cloud Interconnect First make sure that you can successfully query and resolve the DNS name from within an authorized VPC network .
- For a list of resources and features that zonal Cloud DNS supports, see zonal Cloud DNS support .

### Create, modify, and delete zones \_|\_ Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/zones](https://docs.cloud.google.com/dns/docs/zones)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create . gcloud Run the dns managed-zones create command: gcloud dns managed-zones create NAME \ --description= DESCRIPTION \ --dns-name= DNS SUFFIX \ --networks= VPC NETWORK LIST \ --labels= LABELS \ --visibility=private Replace the following: NAME : a name for your zone DESCRIPTION : a description for your zone DNS SUFFIX : the DNS suffix for your zone, such as example.private VPC NETWORK LIST : a comma-delimited list of VPC networks that are authorized to query the zone LABELS : an optional comma-delimited list of key-value pairs such as dept=marketing or project=project1 ; for more information, see the SDK documentation Terraform resource "google dns managed zone" "private zone" { name = "private-zone" dns name = "private.example.com." description = "Example private DNS zone" labels = { foo = "bar" } visibility = "private" private visibility config { networks { network url = google compute network.network 1.id } networks { network url = google compute network.network 2.id } } } resource "google compute network" "network 1" { name = "network-1" auto create subnetworks = false } resource "google compute network" "network 2" { name = "network-2" auto create subnetworks = false } API Send a POST request using the managedZones.create method: POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones { "name": " NAME ", "description": " DESCRIPTION ", "dnsName": " DNS NAME ", "visibility": "private", "privateVisibilityConfig": { "kind": "dns#managedZonePrivateVisibilityConfig", "networks": [ { "kind": "dns#managedZonePrivateVisibilityConfigNetwork", "networkUrl": " VPC NETWORK 1 " }, { "kind": "dns#managedZonePrivateVisibilityConfigNetwork", "networkUrl": " VPC NETWORK 2 " }, .... ] } } Replace the following: PROJECT ID : the ID of the project where the managed zone is created NAME : a name for your zone DESCRIPTION : a description for your zone DNS NAME : the DNS suffix for your zone, such as example.private VPC NETWORK 1 and VPC NETWORK 2 : URLs for VPC networks in the same project that can query records in this zone.
- Click Save . gcloud Run the dns managed-zones update command: gcloud dns managed-zones update NAME \ --description= DESCRIPTION \ --networks= VPC NETWORK LIST Replace the following: NAME : a name for your zone DESCRIPTION : a description for your zone VPC NETWORK LIST : a comma-delimited list of VPC networks that are authorized to query the zone Update labels To add new, change existing, remove selected, or clear all labels on a managed zone, complete the following steps. gcloud Run the dns managed-zones update command: gcloud dns managed-zones update NAME \ --update-labels= LABELS gcloud dns managed-zones update NAME \ --remove-labels= LABELS gcloud dns managed-zones update NAME \ --clear-labels Replace the following: NAME : a name for your zone LABELS : an optional comma-delimited list of key-value pairs such as dept=marketing or project=project1 ; for more information, see the SDK documentation List and describe managed zones The following sections show how to list or describe a managed zone.
- Permissions dns.managedZones.create to create a managed zone dns.managedZones.list to list managed zones dns.networks.bindPrivateDNSZone dns.networks.targetWithPeeringZone dns.gkeClusters.bindPrivateDNSZone dns.managedZones.update dns.managedZones.list dns.managedZones.patch dns.activePeeringZones.getZoneInfo dns.activePeeringZones.list dns.activePeeringZones.deactivate Roles roles/dns.admin roles/dns.peer Before you begin The Cloud DNS API requires that you create a Cloud DNS project and enable the Cloud DNS API.
- Go to Cloud DNS zones Click the private zone that you want to update.

### Migrate or transfer DNSSEC-enabled zones \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/dnssec-migrate](https://docs.cloud.google.com/dns/docs/dnssec-migrate)
- Source ID: `site-iam-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also use dig or delv to query the Cloud DNS name servers for DNSKEY records, but you must verify that the returned public keys are correct and valid for your zone.
- This step ensures that you can establish and maintain a valid chain of trust from the parent zone to keys managed by both DNS operators during the transition.
- If your provider accepts DNSKEY at this step, you can include them now and skip the steps below that transfer public keys from Cloud DNS to the new provider.
- You can verify that the zone is ready by checking that Cloud DNS is serving all the DNSKEY records and the parent zone is serving both DS records.

### Cloud DNS overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Try Cloud DNS free Shared VPC considerations To use a Cloud DNS managed private zone, Cloud DNS forwarding zone, or Cloud DNS peering zone with Shared VPC, you must create the zone in the host project , and then add one or more Shared VPC networks to the list of authorized networks for that zone.
- When using an alternative name server, VMs in your VPC network are no longer able to resolve records in Cloud DNS private zones, forwarding zones, peering zones, or Compute Engine internal DNS zones.
- Access control for managed zones Users with the project Owner role or Editor role ( roles/owner or roles/editor ) can manage or view the managed zones in the specific project that they are managing.
- Project Owners, Editors, DNS Administrators, and DNS Readers can view the list of private zones applied to any VPC network in the current project.

