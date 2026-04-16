---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:24.690Z"
product_name: "Cloud DNS"
product_slug: "cloud-dns"
feature_name: "Cloud DNS monitoring dashboard"
feature_slug: "cloud-dns-monitoring-dashboard"
latest_feature_date: "2021-05-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dns/docs/troubleshooting"
  - "https://docs.cloud.google.com/dns/docs/zones"
  - "https://docs.cloud.google.com/dns/docs/best-practices"
  - "https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create"
keywords:
  - "dns"
  - "monitoring"
  - "dashboard"
  - "provides"
  - "for"
  - "and"
  - "operational"
  - "visibility"
---

# Cloud DNS monitoring dashboard

Product: Cloud DNS
Coverage: MEDIUM

## Step 02 Summary

Cloud DNS provides a monitoring dashboard for service and operational visibility.

## Extended Definition

Cloud DNS provides a monitoring dashboard for service and operational visibility.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dns/docs/troubleshooting](https://docs.cloud.google.com/dns/docs/troubleshooting)
- [https://docs.cloud.google.com/dns/docs/zones](https://docs.cloud.google.com/dns/docs/zones)
- [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices)
- [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create)

## Supporting Pages

### Troubleshoot Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/troubleshooting](https://docs.cloud.google.com/dns/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- This page provides solutions for common issues that you might encounter when using Cloud DNS to create public zones, private zones, reverse lookup zones, forwarding zones, and resource records.
- Advanced threat detection This section provides information about issues that you might encounter when using DNS Armor and provides suggestions for how to fix each of them.
- Forwarding queries from VMs in a consumer VPC network to a producer VPC network not working If you are using DNS peering and you want to forward queries from VMs in a consumer VPC network to a producer VPC network, and then to one or more on-premises name servers, make sure that one of the following prerequisites is met: The producer VPC network has its dynamic routing mode set to GLOBAL The VM in the consumer VPC network is in the same region as the VPN tunnel or Cloud Interconnect in the producer VPC ( Classic VPN only ) The producer VPC network has a static route configured to send traffic destined for the on-premise name servers through the Classic VPN tunnel.
- Determine that your VM is using: gcloud compute instances describe VM NAME \ --zone= GCE ZONE \ --format="csvno-heading" Ensure that the network is in the list of networks authorized to query your private zone: gcloud dns managed-zones describe PRIVATE ZONE NAME \ --format="csv(privateVisibilityConfig['networks'])" Verify that the DNS name in the query matches your zone Google Cloud resolves a record according to the name resolution order , using the zone with the longest suffix to decide which zone to query for a given DNS name.

### Create, modify, and delete zones \_|\_ Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/zones](https://docs.cloud.google.com/dns/docs/zones)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create . gcloud Run the dns managed-zones create command: gcloud dns managed-zones create NAME \ --description= DESCRIPTION \ --dns-name= DNS SUFFIX \ --networks= VPC NETWORK LIST \ --labels= LABELS \ --visibility=private Replace the following: NAME : a name for your zone DESCRIPTION : a description for your zone DNS SUFFIX : the DNS suffix for your zone, such as example.private VPC NETWORK LIST : a comma-delimited list of VPC networks that are authorized to query the zone LABELS : an optional comma-delimited list of key-value pairs such as dept=marketing or project=project1 ; for more information, see the SDK documentation Terraform resource "google dns managed zone" "private zone" { name = "private-zone" dns name = "private.example.com." description = "Example private DNS zone" labels = { foo = "bar" } visibility = "private" private visibility config { networks { network url = google compute network.network 1.id } networks { network url = google compute network.network 2.id } } } resource "google compute network" "network 1" { name = "network-1" auto create subnetworks = false } resource "google compute network" "network 2" { name = "network-2" auto create subnetworks = false } API Send a POST request using the managedZones.create method: POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones { "name": " NAME ", "description": " DESCRIPTION ", "dnsName": " DNS NAME ", "visibility": "private", "privateVisibilityConfig": { "kind": "dns#managedZonePrivateVisibilityConfig", "networks": [ { "kind": "dns#managedZonePrivateVisibilityConfigNetwork", "networkUrl": " VPC NETWORK 1 " }, { "kind": "dns#managedZonePrivateVisibilityConfigNetwork", "networkUrl": " VPC NETWORK 2 " }, .... ] } } Replace the following: PROJECT ID : the ID of the project where the managed zone is created NAME : a name for your zone DESCRIPTION : a description for your zone DNS NAME : the DNS suffix for your zone, such as example.private VPC NETWORK 1 and VPC NETWORK 2 : URLs for VPC networks in the same project that can query records in this zone.
- The Zone details page is displayed. gcloud Run the dns managed-zones create command: gcloud dns managed-zones create NAME \ --description= DESCRIPTION \ --dns-name= DNS SUFFIX \ --labels= LABELS \ --visibility=public Replace the following: NAME : a name for your zone DESCRIPTION : a description for your zone DNS SUFFIX : the DNS suffix for your zone, such as example.com LABELS : an optional comma-delimited list of key-value pairs such as dept=marketing or project=project1 ; for more information, see the SDK documentation Terraform resource "google dns managed zone" "example zone" { name = "example-zone" dns name = "example-${random id.rnd.hex}.com." description = "Example DNS zone" labels = { name = "value" } } resource "random id" "rnd" { byte length = 4 } API Send a POST request using the managedZones.create method: POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones { "name": " NAME ", "description": " DESCRIPTION ", "dnsName": " DNS NAME ", "visibility": "public" } Replace the following: PROJECT ID : the ID of the project where the managed zone is created NAME : a name for your zone DESCRIPTION : a description for your zone DNS NAME : the DNS suffix for your zone, such as example.com Important: Cloud DNS creates NS and SOA records for you automatically when you create the zone.
- This page provides directions for creating, updating, listing, and deleting Cloud DNS managed zones.
- Click Save . gcloud Run the dns managed-zones update command: gcloud dns managed-zones update NAME \ --description= DESCRIPTION \ --networks= VPC NETWORK LIST Replace the following: NAME : a name for your zone DESCRIPTION : a description for your zone VPC NETWORK LIST : a comma-delimited list of VPC networks that are authorized to query the zone Update labels To add new, change existing, remove selected, or clear all labels on a managed zone, complete the following steps. gcloud Run the dns managed-zones update command: gcloud dns managed-zones update NAME \ --update-labels= LABELS gcloud dns managed-zones update NAME \ --remove-labels= LABELS gcloud dns managed-zones update NAME \ --clear-labels Replace the following: NAME : a name for your zone LABELS : an optional comma-delimited list of key-value pairs such as dept=marketing or project=project1 ; for more information, see the SDK documentation List and describe managed zones The following sections show how to list or describe a managed zone.

### Best practices for Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- This document provides best practices for private zones, DNS forwarding, and reference architectures for hybrid DNS.
- In Cloud Router instances, add a custom advertised route for the IP address range 35.199.192.0/19 in the hub VPC network to the on-premises environment. (Optional) If you also use the automatically generated internal DNS names, peer each spoke project zone (for example, spoke-project-x.internal ) with the hub project, and forward all queries for .internal from on-premises.
- General principles Learn about DNS concepts on Google Cloud When you use DNS on Google Cloud, it's important to understand the different systems and services available in Google Cloud for DNS resolution and domain names: Internal DNS is a service that automatically creates DNS names for virtual machines and internal load balancers on Compute Engine .
- Identify stakeholders, tools, and processes When you think about building a strategy for DNS in a hybrid environment, it's important to familiarize yourself with your current architecture and contact all stakeholders.

### "Method: projects.locations.dnsThreatDetectors.create \_|\_ Cloud DNS \_\

- URL: [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-15 UTC."],[],[]]
- Home Documentation Networking Cloud DNS Reference Send feedback Method: projects.locations.dnsThreatDetectors.create Stay organized with collections Save and categorize content based on your preferences.
- IAM Permissions Requires the following IAM permission on the parent resource: networksecurity.dnsThreatDetectors.create For more information, see the IAM documentation .
- Creates a new DnsThreatDetector in a given project and location.

