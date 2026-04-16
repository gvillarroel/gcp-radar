---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:24.693Z"
product_name: "Cloud DNS"
product_slug: "cloud-dns"
feature_name: "Cloud DNS peering"
feature_slug: "cloud-dns-peering"
latest_feature_date: "2020-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dns/docs/best-practices"
  - "https://docs.cloud.google.com/dns/docs/overview"
  - "https://docs.cloud.google.com/dns/docs/configure-routing-policies"
  - "https://docs.cloud.google.com/dns/docs/dnssec-migrate"
keywords:
  - "dns"
  - "peering"
  - "supports"
  - "between"
  - "managed"
  - "environments"
---

# Cloud DNS peering

Product: Cloud DNS
Coverage: MEDIUM

## Step 02 Summary

Cloud DNS supports DNS peering between managed DNS environments; Cloud DNS supports DNS peering.

## Extended Definition

Cloud DNS supports DNS peering between managed DNS environments; Cloud DNS supports DNS peering.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices)
- [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview)
- [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies)
- [https://docs.cloud.google.com/dns/docs/dnssec-migrate](https://docs.cloud.google.com/dns/docs/dnssec-migrate)

## Supporting Pages

### Best practices for Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DNS peering runs in parallel with VPC Network Peering connections to allow name resolution between environments.
- Note: When you use Cloud VPN instead of VPC Network Peering between Google Cloud environments with this architecture, make sure that there is a VM or VPN tunnel in the hub project in every region used in the spoke projects.
- This document describes best practices for forwarding private DNS requests between environments to make sure that services can be addressed from both on-premises environments and within Google Cloud.
- Users with the IAM permission dns.networks.targetWithPeeringZone on the producer network's project can establish DNS peering between consumer and producer networks.

### Cloud DNS overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Try Cloud DNS free Shared VPC considerations To use a Cloud DNS managed private zone, Cloud DNS forwarding zone, or Cloud DNS peering zone with Shared VPC, you must create the zone in the host project , and then add one or more Shared VPC networks to the list of authorized networks for that zone.
- DNSSEC Cloud DNS supports managed Domain Name System Security Extensions (DNSSEC), protecting your domains from spoofing and cache poisoning attacks.
- When using an alternative name server, VMs in your VPC network are no longer able to resolve records in Cloud DNS private zones, forwarding zones, peering zones, or Compute Engine internal DNS zones.
- Per resource permission access To configure a policy on a DNS resource such as a managed zone, you must have Owner access to the project that owns that resource.

### Configure DNS routing policies and health checks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies)
- Source ID: `site-iam-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones/ MANAGED ZONE /rrsets { "name": " RRSET NAME ", "type": " RRSET TYPE ", "ttl": TTL , "routingPolicy": { "primaryBackup": { "trickleTraffic": TRICKLE TRAFFIC , "primaryTargets": { "internalLoadBalancers": [ { "ipAddress": " IP ADDRESS " "ipProtocol": " IP PROTOCOL " "loadBalancerType": " LOAD BALANCER TYPE " "networkUrl": " NETWORK URL " "port": " PORT NUMBER " "project": " PROJECT ID " "region": " REGION " } ] }, "backupGeoTargets": { "enableFencing": ENABLE FENCING , "items": [ { "location": " LOCATION ", "rrdatas": [ " RRDATA " ] }, { "location": " LOCATION ", "rrdatas": [ " RRDATA " ] } ] } } } } Replace the following: PROJECT ID : the ID of the project MANAGED ZONE : the managed zone that this ResourceRecordSet is affiliated with, such as service-zone ; the name of this ResourceRecordSet must have the DNS name of the managed zone as its suffix RRSET NAME : the DNS name that matches the incoming queries with this zone's DNS name as its suffix, such as service.example.com RRSET TYPE : the resource record type of this ResourceRecordSet , such as A TTL : the TTL, in seconds, in which the resolver caches this ResourceRecordSet , such as 30 TRICKLE TRAFFIC : the ratio of traffic to send to the backup targets even when the primaries are healthy; the ratio must be between 0 and 1, such as 0.1 IP ADDRESS : the IP address that the forwarding rule serves PORT NUMBER : the port number IP PROTOCOL : defines the protocol used for the health check; valid options are tcp and udp NETWORK URL : the network URL to which this forwarding rule applies PORT NUMBER : the port number of the internal load balancer REGION : the region in which you created the forwarding rule ENABLE FENCING : for GEO routing policies, this determines whether traffic should failover across regions if all endpoints in a region are unhealthy.
- IP ADDRESS : the IP address that the forwarding rule serves PORT NUMBER : the port number IP PROTOCOL : defines the protocol used for the health check; valid options are tcp and udp NETWORK URL : the network URL to which this forwarding rule applies REGION : the region in which you created the forwarding rule Geolocation POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones/ MANAGED ZONE /rrsets { "name": " RRSET NAME ", "type": " RRSET TYPE ", "ttl": TTL , "routingPolicy": { "geo": { "items": [ { "location": " LOCATION ", "healthCheckedTargets": { "internalLoadBalancers": [ { "loadBalancerType": " LOAD BALANCER TYPE " "ipAddress": " IP ADDRESS " "port": " PORT NUMBER " "ipProtocol": " IP PROTOCOL " "networkUrl": " NETWORK URL " "project": " PROJECT ID " "region": " REGION " } ] } }, { "location": " LOCATION ", "healthCheckedTargets": { "internalLoadBalancers": [ { "loadBalancerType": " LOAD BALANCER TYPE " "ipAddress": " IP ADDRESS " "port": " PORT NUMBER " "ipProtocol": " IP PROTOCOL " "networkUrl": " NETWORK URL " "project": " PROJECT ID " "region": " REGION " } ] } } ] } } } Replace the following: PROJECT ID : the ID of the project MANAGED ZONE : the managed zone that this ResourceRecordSet is affiliated with, such as service-zone ; the name of this ResourceRecordSet must have the DNS name of the managed zone as its suffix RRSET NAME : the DNS name that matches the incoming queries with this zone's DNS name as its suffix, such as service.example.com RRSET TYPE : the resource record type of this ResourceRecordSet , such as A TTL : the TTL, in seconds, in which the resolver caches this ResourceRecordSet , such as 30 LOCATION : for GEO policies, the geolocation for which you need to create the policy, such as asia-east1 LOAD BALANCER TYPE : the type of load balancer, such as regionalL4ilb , globalL7ilb , or regionalL7ilb .
- Geolocation Use the following method: PATCH https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones/ MANAGED ZONE /rrsets/ RRSET NAME / RRSET TYPE { "name": " RRSET NAME ", "type": " RRSET TYPE ", "ttl": TTL , "routingPolicy": { "geo": { "items": [ { "location": " LOCATION ", "healthCheckedTargets": { "internalLoadBalancers": [ { "loadBalancerType": " LOAD BALANCER TYPE " "ipAddress": " IP ADDRESS " "port": " PORT NUMBER " "ipProtocol": " IP PROTOCOL " "networkUrl": " NETWORK URL " "project": " PROJECT ID " "region": " REGION " } ] } }, { "location": " LOCATION ", "healthCheckedTargets": { "internalLoadBalancers": [ { "loadBalancerType": " LOAD BALANCER TYPE " "ipAddress": " IP ADDRESS " "port": " PORT NUMBER " "ipProtocol": " IP PROTOCOL " "networkUrl": " NETWORK URL " "project": " PROJECT ID " "region": " REGION " } ] } } ] } } } Replace the following: PROJECT ID : the ID of the project MANAGED ZONE : the managed zone that this ResourceRecordSet is affiliated with, such as service-zone ; the name of this ResourceRecordSet must have the DNS name of the managed zone as its suffix RRSET NAME : the DNS name that matches the incoming queries with this zone's DNS name as its suffix, such as service.example.com RRSET TYPE : the resource record type of this ResourceRecordSet , such as A TTL : the TTL, in seconds, in which the resolver caches this ResourceRecordSet , such as 30 LOCATION : for GEO policies, the geolocation for which you need to update the policy, such as asia-east1 LOAD BALANCER TYPE : the type of load balancer, such as regionalL4ilb , globalL7ilb , or regionalL7ilb .
- WRR POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones/ MANAGED ZONE /rrsets { "name": " RRSET NAME ", "type": " RRSET TYPE ", "ttl": TTL , "routingPolicy": { "wrr": { "items": [ { "weight": WEIGHT , "healthCheckedTargets": { "internalLoadBalancers": [ { "loadBalancerType": " LOAD BALANCER TYPE " "ipAddress": " IP ADDRESS " "port": " PORT NUMBER " "ipProtocol": " IP PROTOCOL " "networkUrl": " NETWORK URL " "project": " PROJECT ID " "region": " REGION " } ] } }, { "weight": WEIGHT , "healthCheckedTargets": { "internalLoadBalancers": [ { "loadBalancerType": " LOAD BALANCER TYPE " "ipAddress": " IP ADDRESS " "port": " PORT NUMBER " "ipProtocol": " IP PROTOCOL " "networkUrl": " NETWORK URL " "project": " PROJECT ID " "region": " REGION " } ] } } ] } } } Replace the following: PROJECT ID : the ID of the project MANAGED ZONE : the managed zone that this ResourceRecordSet is affiliated with, such as service-zone ; the name of this ResourceRecordSet must have the DNS name of the managed zone as its suffix RRSET NAME : the DNS name that matches the incoming queries with this zone's DNS name as its suffix, such as service.example.com RRSET TYPE : the resource record type of this ResourceRecordSet , such as A TTL : the TTL, in seconds, in which the resolver caches this ResourceRecordSet , such as 30 WEIGHT : for WRR policies, a semicolon-delimited list in the format ${weight percent}=${rrdatas} , such as .8=10.128.1.1;.2=10.130.1.1 ; specify the weight as any nonnegative decimal Note: You must specify weight as a nonnegative number.

### Migrate or transfer DNSSEC-enabled zones \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/dnssec-migrate](https://docs.cloud.google.com/dns/docs/dnssec-migrate)
- Source ID: `site-iam-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permissions dns.dnsKeys.create to create DNSKEYS dns.dnsKeys.delete to delete DNSKEYS dns.dnsKeys.list to list DNSKEYS dns.dnsKeys.update to update DNSKEYS Roles roles/dns.admin Before you begin DNSSEC migration is complex and requires coordination to migrate a zone between operators without incurring outages.
- Migration between operators The technical approach that Cloud DNS uses for DNSSEC migrations is the Double-DS KSK rollover variant described in RFC 6781 Appendix D Alternative Rollover Approach for Cooperating Operators .
- This page describes how to migrate a DNSSEC-enabled zone that is activated at the domain registrar between Cloud DNS and other DNS hosting providers while maintaining the DNSSEC chain of trust.
- This step ensures that you can establish and maintain a valid chain of trust from the parent zone to keys managed by both DNS operators during the transition.

