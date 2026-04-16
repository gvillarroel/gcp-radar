---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:24.693Z"
product_name: "Cloud DNS"
product_slug: "cloud-dns"
feature_name: "Cloud DNS forwarding to non-RFC 1918 addresses"
feature_slug: "cloud-dns-forwarding-to-non-rfc-1918-addresses"
latest_feature_date: "2020-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dns/docs/key-terms"
  - "https://docs.cloud.google.com/dns/docs/troubleshooting"
  - "https://docs.cloud.google.com/dns/docs/configure-routing-policies"
  - "https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors"
keywords:
  - "dns"
  - "forwarding"
  - "to"
  - "non"
  - "rfc"
  - "1918"
  - "addresses"
  - "enables"
---

# Cloud DNS forwarding to non-RFC 1918 addresses

Product: Cloud DNS
Coverage: MEDIUM

## Step 02 Summary

Cloud DNS enables DNS forwarding to non-RFC 1918 addresses; Cloud DNS supports DNS forwarding to non-RFC 1918 addresses.

## Extended Definition

Cloud DNS enables DNS forwarding to non-RFC 1918 addresses; Cloud DNS supports DNS forwarding to non-RFC 1918 addresses.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dns/docs/key-terms](https://docs.cloud.google.com/dns/docs/key-terms)
- [https://docs.cloud.google.com/dns/docs/troubleshooting](https://docs.cloud.google.com/dns/docs/troubleshooting)
- [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies)
- [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors)

## Supporting Pages

### Key terms \_|\_ Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/key-terms](https://docs.cloud.google.com/dns/docs/key-terms)
- Source ID: `site-iam-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud DNS also supports outbound forwarding to non-RFC 1918 addresses by privately routing those addresses within Google Cloud.
- This configuration enables Cloud DNS to resolve non-RFC 1918 addresses locally instead of sending them over the internet.
- After you configure a VPC network to use non-RFC 1918 addresses, you must configure a Cloud DNS private zone as a managed reverse lookup zone .
- Cloud DNS and reverse lookup for non-RFC 1918 addresses By default, Cloud DNS forwards requests for PTR records of non-RFC 1918 addresses through the public internet.

### Troubleshoot Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/troubleshooting](https://docs.cloud.google.com/dns/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Outbound forwarding to a name server that uses a non-RFC 1918 IP address fails By default, Cloud DNS uses standard routing, which routes queries through the public internet when the target name server has a non-RFC 1918 IP address.
- This limitation applies even if there is a VPC route for the target name server; routes for non-RFC 1918 addresses have no effect on Cloud DNS's outbound forwarding behavior when standard routing is configured.
- To forward queries to a name server that uses a non-RFC 1918 IP address through your VPC network, configure the Cloud DNS forwarding zone or server policy to use private routing for the target name server.
- Standard routing doesn't support forwarding queries to name servers with non-RFC 1918 addresses that are not reachable from the public internet.

### Configure DNS routing policies and health checks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies)
- Source ID: `site-iam-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones/ MANAGED ZONE /rrsets { "name": " RRSET NAME ", "type": " RRSET TYPE ", "ttl": TTL , "routingPolicy": { "primaryBackup": { "trickleTraffic": TRICKLE TRAFFIC , "primaryTargets": { "internalLoadBalancers": [ { "ipAddress": " IP ADDRESS " "ipProtocol": " IP PROTOCOL " "loadBalancerType": " LOAD BALANCER TYPE " "networkUrl": " NETWORK URL " "port": " PORT NUMBER " "project": " PROJECT ID " "region": " REGION " } ] }, "backupGeoTargets": { "enableFencing": ENABLE FENCING , "items": [ { "location": " LOCATION ", "rrdatas": [ " RRDATA " ] }, { "location": " LOCATION ", "rrdatas": [ " RRDATA " ] } ] } } } } Replace the following: PROJECT ID : the ID of the project MANAGED ZONE : the managed zone that this ResourceRecordSet is affiliated with, such as service-zone ; the name of this ResourceRecordSet must have the DNS name of the managed zone as its suffix RRSET NAME : the DNS name that matches the incoming queries with this zone's DNS name as its suffix, such as service.example.com RRSET TYPE : the resource record type of this ResourceRecordSet , such as A TTL : the TTL, in seconds, in which the resolver caches this ResourceRecordSet , such as 30 TRICKLE TRAFFIC : the ratio of traffic to send to the backup targets even when the primaries are healthy; the ratio must be between 0 and 1, such as 0.1 IP ADDRESS : the IP address that the forwarding rule serves PORT NUMBER : the port number IP PROTOCOL : defines the protocol used for the health check; valid options are tcp and udp NETWORK URL : the network URL to which this forwarding rule applies PORT NUMBER : the port number of the internal load balancer REGION : the region in which you created the forwarding rule ENABLE FENCING : for GEO routing policies, this determines whether traffic should failover across regions if all endpoints in a region are unhealthy.
- IP ADDRESS : the IP address that the forwarding rule serves PORT NUMBER : the port number IP PROTOCOL : defines the protocol used for the health check; valid options are tcp and udp NETWORK URL : the network URL to which this forwarding rule applies REGION : the region in which you created the forwarding rule Geolocation POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones/ MANAGED ZONE /rrsets { "name": " RRSET NAME ", "type": " RRSET TYPE ", "ttl": TTL , "routingPolicy": { "geo": { "items": [ { "location": " LOCATION ", "healthCheckedTargets": { "internalLoadBalancers": [ { "loadBalancerType": " LOAD BALANCER TYPE " "ipAddress": " IP ADDRESS " "port": " PORT NUMBER " "ipProtocol": " IP PROTOCOL " "networkUrl": " NETWORK URL " "project": " PROJECT ID " "region": " REGION " } ] } }, { "location": " LOCATION ", "healthCheckedTargets": { "internalLoadBalancers": [ { "loadBalancerType": " LOAD BALANCER TYPE " "ipAddress": " IP ADDRESS " "port": " PORT NUMBER " "ipProtocol": " IP PROTOCOL " "networkUrl": " NETWORK URL " "project": " PROJECT ID " "region": " REGION " } ] } } ] } } } Replace the following: PROJECT ID : the ID of the project MANAGED ZONE : the managed zone that this ResourceRecordSet is affiliated with, such as service-zone ; the name of this ResourceRecordSet must have the DNS name of the managed zone as its suffix RRSET NAME : the DNS name that matches the incoming queries with this zone's DNS name as its suffix, such as service.example.com RRSET TYPE : the resource record type of this ResourceRecordSet , such as A TTL : the TTL, in seconds, in which the resolver caches this ResourceRecordSet , such as 30 LOCATION : for GEO policies, the geolocation for which you need to create the policy, such as asia-east1 LOAD BALANCER TYPE : the type of load balancer, such as regionalL4ilb , globalL7ilb , or regionalL7ilb .
- WRR POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones/ MANAGED ZONE /rrsets { "name": " RRSET NAME ", "type": " RRSET TYPE ", "ttl": TTL , "routingPolicy": { "wrr": { "items": [ { "weight": WEIGHT , "healthCheckedTargets": { "internalLoadBalancers": [ { "loadBalancerType": " LOAD BALANCER TYPE " "ipAddress": " IP ADDRESS " "port": " PORT NUMBER " "ipProtocol": " IP PROTOCOL " "networkUrl": " NETWORK URL " "project": " PROJECT ID " "region": " REGION " } ] } }, { "weight": WEIGHT , "healthCheckedTargets": { "internalLoadBalancers": [ { "loadBalancerType": " LOAD BALANCER TYPE " "ipAddress": " IP ADDRESS " "port": " PORT NUMBER " "ipProtocol": " IP PROTOCOL " "networkUrl": " NETWORK URL " "project": " PROJECT ID " "region": " REGION " } ] } } ] } } } Replace the following: PROJECT ID : the ID of the project MANAGED ZONE : the managed zone that this ResourceRecordSet is affiliated with, such as service-zone ; the name of this ResourceRecordSet must have the DNS name of the managed zone as its suffix RRSET NAME : the DNS name that matches the incoming queries with this zone's DNS name as its suffix, such as service.example.com RRSET TYPE : the resource record type of this ResourceRecordSet , such as A TTL : the TTL, in seconds, in which the resolver caches this ResourceRecordSet , such as 30 WEIGHT : for WRR policies, a semicolon-delimited list in the format ${weight percent}=${rrdatas} , such as .8=10.128.1.1;.2=10.130.1.1 ; specify the weight as any nonnegative decimal Note: You must specify weight as a nonnegative number.
- IP ADDRESS : the IP address that the forwarding rule serves PORT NUMBER : the port number IP PROTOCOL : defines the protocol used for the health check; valid options are tcp and udp NETWORK URL : the network URL to which this forwarding rule applies REGION : the region in which you created the forwarding rule Delete DNS routing policies To delete a routing policy, you must delete the resource record set that contains the routing policy.

### "REST Resource: projects.locations.dnsThreatDetectors \_|\_ Cloud DNS \_\

- URL: [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods create Creates a new DnsThreatDetector in a given project and location. delete Deletes a single DnsThreatDetector. get Gets the details of a single DnsThreatDetector. list Lists DnsThreatDetectors in a given project and location. patch Updates a single DnsThreatDetector.
- Home Documentation Networking Cloud DNS Reference Send feedback REST Resource: projects.locations.dnsThreatDetectors Stay organized with collections Save and categorize content based on your preferences.
- Resource: DnsThreatDetector A DNS threat detector sends DNS query logs to a provider that then analyzes the logs to identify threat events in the DNS queries.
- Name of the DnsThreatDetector resource. createTime string ( Timestamp format) Output only.

