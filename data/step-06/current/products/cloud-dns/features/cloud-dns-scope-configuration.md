---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:24.686Z"
product_name: "Cloud DNS"
product_slug: "cloud-dns"
feature_name: "Cloud DNS scope configuration"
feature_slug: "cloud-dns-scope-configuration"
latest_feature_date: "2022-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dns/docs/dnssec-migrate"
  - "https://docs.cloud.google.com/dns/docs/dnssec-config"
  - "https://docs.cloud.google.com/dns/docs/configure-routing-policies"
  - "https://docs.cloud.google.com/dns/docs/zones"
keywords:
  - "dns"
  - "scope"
  - "configuration"
  - "now"
  - "supports"
  - "configuring"
  - "zone"
  - "scopes"
---

# Cloud DNS scope configuration

Product: Cloud DNS
Coverage: MEDIUM

## Step 02 Summary

Cloud DNS now supports configuring zone scopes.

## Extended Definition

Cloud DNS now supports configuring zone scopes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dns/docs/dnssec-migrate](https://docs.cloud.google.com/dns/docs/dnssec-migrate)
- [https://docs.cloud.google.com/dns/docs/dnssec-config](https://docs.cloud.google.com/dns/docs/dnssec-config)
- [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies)
- [https://docs.cloud.google.com/dns/docs/zones](https://docs.cloud.google.com/dns/docs/zones)

## Supporting Pages

### Migrate or transfer DNSSEC-enabled zones \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/dnssec-migrate](https://docs.cloud.google.com/dns/docs/dnssec-migrate)
- Source ID: `site-iam-reference`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations Migrating a DNSSEC zone has the following limitations: You can only migrate a zone while maintaining the DNSSEC chain of trust if the new operator and registrar support DNSSEC migration, including importing DNSKEY records, setting multiple DS records, and preventing automatic key rotation during migration.
- Permissions dns.dnsKeys.create to create DNSKEYS dns.dnsKeys.delete to delete DNSKEYS dns.dnsKeys.list to list DNSKEYS dns.dnsKeys.update to update DNSKEYS Roles roles/dns.admin Before you begin DNSSEC migration is complex and requires coordination to migrate a zone between operators without incurring outages.
- Do not attempt zone migration if the zone contains any record types that rely on DNSSEC authenticity and integrity guarantees because migrating a zone in these conditions might cause loss of functionality or security.
- This page describes how to migrate a DNSSEC-enabled zone that is activated at the domain registrar between Cloud DNS and other DNS hosting providers while maintaining the DNSSEC chain of trust.

### Manage DNSSEC configuration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/dnssec-config](https://docs.cloud.google.com/dns/docs/dnssec-config)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To verify that you have the right configuration in place and to cross-check the DS record before placing it in the parent zone, use the following tools: DNSViz Verisign DNSSEC debugger Zonemaster You can use the Verisign DNSSEC debugger and Zonemaster sites to validate your DNSSEC configuration before you update your registrar with your Cloud DNS name servers or DS record.
- Terraform resource "google dns managed zone" "example" { name = "example-zone-name" dns name = "example.com." description = "Example Signed Zone" dnssec config { state = "on" } } Enable DNSSEC when creating zones To enable DNSSEC when you are creating a zone, follow these steps.
- To sign existing large zones, consider setting up a new zone with the same DNS name with DNSSEC enabled, populating it with your resource record sets in additional operations, and changing your delegation to point to the name server set for the new zone that has DNSSEC enabled.
- After you have removed DS records and waited for them to expire from cache, you can use the following gcloud command to turn off DNSSEC: gcloud dns managed-zones update EXAMPLE ZONE \ --dnssec-state off Replace EXAMPLE ZONE with the zone ID.

### Configure DNS routing policies and health checks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies)
- Source ID: `site-iam-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Console Start the configuration In the Google Cloud console, go to the Cloud DNS zones page.
- Console Start the configuration In the Google Cloud console, go to the Cloud DNS zones page.
- POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones/ MANAGED ZONE /rrsets { "name": " RRSET NAME ", "type": " RRSET TYPE ", "ttl": TTL , "routingPolicy": { "primaryBackup": { "trickleTraffic": TRICKLE TRAFFIC , "primaryTargets": { "internalLoadBalancers": [ { "ipAddress": " IP ADDRESS " "ipProtocol": " IP PROTOCOL " "loadBalancerType": " LOAD BALANCER TYPE " "networkUrl": " NETWORK URL " "port": " PORT NUMBER " "project": " PROJECT ID " "region": " REGION " } ] }, "backupGeoTargets": { "enableFencing": ENABLE FENCING , "items": [ { "location": " LOCATION ", "rrdatas": [ " RRDATA " ] }, { "location": " LOCATION ", "rrdatas": [ " RRDATA " ] } ] } } } } Replace the following: PROJECT ID : the ID of the project MANAGED ZONE : the managed zone that this ResourceRecordSet is affiliated with, such as service-zone ; the name of this ResourceRecordSet must have the DNS name of the managed zone as its suffix RRSET NAME : the DNS name that matches the incoming queries with this zone's DNS name as its suffix, such as service.example.com RRSET TYPE : the resource record type of this ResourceRecordSet , such as A TTL : the TTL, in seconds, in which the resolver caches this ResourceRecordSet , such as 30 TRICKLE TRAFFIC : the ratio of traffic to send to the backup targets even when the primaries are healthy; the ratio must be between 0 and 1, such as 0.1 IP ADDRESS : the IP address that the forwarding rule serves PORT NUMBER : the port number IP PROTOCOL : defines the protocol used for the health check; valid options are tcp and udp NETWORK URL : the network URL to which this forwarding rule applies PORT NUMBER : the port number of the internal load balancer REGION : the region in which you created the forwarding rule ENABLE FENCING : for GEO routing policies, this determines whether traffic should failover across regions if all endpoints in a region are unhealthy.
- IP ADDRESS : the IP address that the forwarding rule serves PORT NUMBER : the port number IP PROTOCOL : defines the protocol used for the health check; valid options are tcp and udp NETWORK URL : the network URL to which this forwarding rule applies REGION : the region in which you created the forwarding rule Geolocation POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones/ MANAGED ZONE /rrsets { "name": " RRSET NAME ", "type": " RRSET TYPE ", "ttl": TTL , "routingPolicy": { "geo": { "items": [ { "location": " LOCATION ", "healthCheckedTargets": { "internalLoadBalancers": [ { "loadBalancerType": " LOAD BALANCER TYPE " "ipAddress": " IP ADDRESS " "port": " PORT NUMBER " "ipProtocol": " IP PROTOCOL " "networkUrl": " NETWORK URL " "project": " PROJECT ID " "region": " REGION " } ] } }, { "location": " LOCATION ", "healthCheckedTargets": { "internalLoadBalancers": [ { "loadBalancerType": " LOAD BALANCER TYPE " "ipAddress": " IP ADDRESS " "port": " PORT NUMBER " "ipProtocol": " IP PROTOCOL " "networkUrl": " NETWORK URL " "project": " PROJECT ID " "region": " REGION " } ] } } ] } } } Replace the following: PROJECT ID : the ID of the project MANAGED ZONE : the managed zone that this ResourceRecordSet is affiliated with, such as service-zone ; the name of this ResourceRecordSet must have the DNS name of the managed zone as its suffix RRSET NAME : the DNS name that matches the incoming queries with this zone's DNS name as its suffix, such as service.example.com RRSET TYPE : the resource record type of this ResourceRecordSet , such as A TTL : the TTL, in seconds, in which the resolver caches this ResourceRecordSet , such as 30 LOCATION : for GEO policies, the geolocation for which you need to create the policy, such as asia-east1 LOAD BALANCER TYPE : the type of load balancer, such as regionalL4ilb , globalL7ilb , or regionalL7ilb .

### Create, modify, and delete zones \_|\_ Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/zones](https://docs.cloud.google.com/dns/docs/zones)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- For detailed instructions about how to create a Service Directory DNS zone, see Configuring a Service Directory DNS zone .
- The following sections describe how to create the type of managed zone that Cloud DNS supports.
- Update public zones You can change the description or DNSSEC configuration of a public zone.
- Click Create . gcloud Run the dns managed-zones create command: gcloud dns managed-zones create NAME \ --description= DESCRIPTION \ --dns-name= DNS SUFFIX \ --networks= VPC NETWORK LIST \ --labels= LABELS \ --visibility=private Replace the following: NAME : a name for your zone DESCRIPTION : a description for your zone DNS SUFFIX : the DNS suffix for your zone, such as example.private VPC NETWORK LIST : a comma-delimited list of VPC networks that are authorized to query the zone LABELS : an optional comma-delimited list of key-value pairs such as dept=marketing or project=project1 ; for more information, see the SDK documentation Terraform resource "google dns managed zone" "private zone" { name = "private-zone" dns name = "private.example.com." description = "Example private DNS zone" labels = { foo = "bar" } visibility = "private" private visibility config { networks { network url = google compute network.network 1.id } networks { network url = google compute network.network 2.id } } } resource "google compute network" "network 1" { name = "network-1" auto create subnetworks = false } resource "google compute network" "network 2" { name = "network-2" auto create subnetworks = false } API Send a POST request using the managedZones.create method: POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones { "name": " NAME ", "description": " DESCRIPTION ", "dnsName": " DNS NAME ", "visibility": "private", "privateVisibilityConfig": { "kind": "dns#managedZonePrivateVisibilityConfig", "networks": [ { "kind": "dns#managedZonePrivateVisibilityConfigNetwork", "networkUrl": " VPC NETWORK 1 " }, { "kind": "dns#managedZonePrivateVisibilityConfigNetwork", "networkUrl": " VPC NETWORK 2 " }, .... ] } } Replace the following: PROJECT ID : the ID of the project where the managed zone is created NAME : a name for your zone DESCRIPTION : a description for your zone DNS NAME : the DNS suffix for your zone, such as example.private VPC NETWORK 1 and VPC NETWORK 2 : URLs for VPC networks in the same project that can query records in this zone.

