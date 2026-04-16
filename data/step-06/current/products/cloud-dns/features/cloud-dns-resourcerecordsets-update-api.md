---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:24.691Z"
product_name: "Cloud DNS"
product_slug: "cloud-dns"
feature_name: "Cloud DNS ResourceRecordSets update API"
feature_slug: "cloud-dns-resourcerecordsets-update-api"
latest_feature_date: "2021-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dns/docs/records"
  - "https://docs.cloud.google.com/dns/docs/access-control"
  - "https://docs.cloud.google.com/dns/docs/configure-routing-policies"
  - "https://docs.cloud.google.com/dns/docs/audit-logging"
keywords:
  - "dns"
  - "resourcerecordsets"
  - "update"
  - "api"
  - "exposes"
  - "an"
  - "that"
  - "allows"
---

# Cloud DNS ResourceRecordSets update API

Product: Cloud DNS
Coverage: MEDIUM

## Step 02 Summary

Cloud DNS exposes an API that allows updates to ResourceRecordSets; Cloud DNS supports an API for updating ResourceRecordSets.

## Extended Definition

Cloud DNS exposes an API that allows updates to ResourceRecordSets; Cloud DNS supports an API for updating ResourceRecordSets.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dns/docs/records](https://docs.cloud.google.com/dns/docs/records)
- [https://docs.cloud.google.com/dns/docs/access-control](https://docs.cloud.google.com/dns/docs/access-control)
- [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies)
- [https://docs.cloud.google.com/dns/docs/audit-logging](https://docs.cloud.google.com/dns/docs/audit-logging)

## Supporting Pages

### Add, update, and delete records \_|\_ Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/records](https://docs.cloud.google.com/dns/docs/records)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MANAGED ZONE : the managed zone that this resource record set is affiliated with—for example, my-zone-name ; the name of this resource record set must have the DNS name of the managed zone as its suffix API To apply a partial update to an existing resource record set, use the resourceRecordSets.patch method : PATCH https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones/ MANAGED ZONE /rrsets/ RRSET NAME / RRSET TYPE { "ttl": TTL , "rrdatas": RR DATA , "update mask": { "paths": ["rrset.ttl", "rrset.rrdatas"] } } Note: The update mask is required when calling the API directly without gcloud .
- MANAGED ZONE : the managed zone that this resource record set is affiliated with—for example, my-zone-name ; the name of this resource record set must have the DNS name of the managed zone as its suffix API To add a resource record set, use the resourceRecordSets.create method method: POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones/ MANAGED ZONE /rrsets { "name": " RRSET NAME ", "type": " RRSET TYPE ", "ttl": TTL , "rrdatas": [ RR DATA ] } Replace the following: PROJECT ID : the ID of the project MANAGED ZONE : the managed zone that this resource record set is affiliated with—for example, my-zone-name ; the name of this resource record set must have the DNS name of the managed zone as its suffix RRSET NAME : the DNS name that matches the incoming queries with this zone's DNS name as its suffix—for example, test.example.com RRSET TYPE : the resource record type of this resource record set—for example, A TTL : the TTL in seconds that the resolver caches this resource record set—for example, 30 RR DATA : an arbitrary value associated with the resource record set—for example, "198.51.100.5" ; you can also enter multiple values in a comma-separated list—for example, "198.51.100.5","10.2.3.4" .
- MANAGED ZONE : the managed zone that this resource record set is affiliated with—for example, my-zone-name ; the name of this resource record set must have the DNS name of the managed zone as its suffix API To delete an existing resource record set, use the resourceRecordSets.delete method : DELETE https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones/ MANAGED ZONE /rrsets/ RRSET NAME / RRSET TYPE Replace the following: PROJECT ID : the ID of the project MANAGED ZONE : the managed zone that this resource record set is affiliated with—for example, my-zone-name ; the name of this resource record set must have the DNS name of the managed zone as its suffix RRSET NAME : the DNS name that matches the incoming queries with this zone's DNS name as its suffix—for example, test.example.com RRSET TYPE : the resource record type of this resource record set—for example, A .
- MANAGED ZONE : the managed zone that this resource record set is affiliated with—for example, my-zone-name ; the name of this resource record set must have the DNS name of the managed zone as its suffix API To get the details of an existing resource record set, use the resourceRecordSets.get method : GET https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones/ MANAGED ZONE /rrsets/ RRSET NAME / RRSET TYPE Replace the following: PROJECT ID : the ID of the project MANAGED ZONE : the managed zone that this resource record set is affiliated with—for example, my-zone-name ; the name of this resource record set must have the DNS name of the managed zone as its suffix RRSET NAME : the DNS name that matches the incoming queries with this zone's DNS name as its suffix—for example, test.example.com RRSET TYPE : the record type of this resource record set—for example, A .

### Roles and permissions \_|\_ Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/access-control](https://docs.cloud.google.com/dns/docs/access-control)
- Source ID: `site-iam-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You would then give that user (who) the /roles/dns.admin role, which has the dns.changes.create and dns.resourceRecordSets.create permissions (what) so that they can create and update resource record sets (which).
- Lowest-level resources where you can grant this role: Managed zone compute.networks.get compute.networks.list dns.changes. dns.changes.create dns.changes.get dns.changes.list dns.dnsKeys. dns.dnsKeys.get dns.dnsKeys.list dns.gkeClusters. dns. gkeClusters. bindDNSResponsePolicy dns. gkeClusters. bindPrivateDNSZone dns.managedZoneOperations. dns.managedZoneOperations.get dns.managedZoneOperations.list dns.managedZones.create dns.managedZones.delete dns.managedZones.get dns.managedZones.getIamPolicy dns.managedZones.list dns.managedZones.update dns.networks. dns. networks. bindDNSResponsePolicy dns. networks. bindPrivateDNSPolicy dns. networks. bindPrivateDNSZone dns. networks. targetWithPeeringZone dns.networks.useHealthSignals dns.policies. dns.policies.create dns.policies.createTagBinding dns.policies.delete dns.policies.deleteTagBinding dns.policies.get dns.policies.list dns.policies.listEffectiveTags dns.policies.listTagBindings dns.policies.update dns.projects.get dns.resourceRecordSets. dns.resourceRecordSets.create dns.resourceRecordSets.delete dns.resourceRecordSets.get dns.resourceRecordSets.list dns.resourceRecordSets.update dns.responsePolicies. dns.responsePolicies.create dns.responsePolicies.delete dns.responsePolicies.get dns.responsePolicies.list dns.responsePolicies.update dns.responsePolicyRules. dns.responsePolicyRules.create dns.responsePolicyRules.delete dns.responsePolicyRules.get dns.responsePolicyRules.list dns.responsePolicyRules.update resourcemanager.projects.get resourcemanager.projects.list DNS Peer ( roles/ dns.peer ) Access to target networks with DNS peering zones dns. networks. targetWithPeeringZone DNS Reader ( roles/ dns.reader ) Provides read-only access to all Cloud DNS resources.
- If the policy is updated to be on a VPC network, you also need dns.networks.bindPrivateDNSPolicy for each project containing each VPC network. dns.projects.get dns.projects.get on the project. dns.resourceRecordSets.create dns.resourceRecordSets.create on the project containing the record set. dns.resourceRecordSets.delete dns.resourceRecordSets.delete on the project containing the record set. dns.resourceRecordSets.get dns.resourceRecordSets.get on the project containing the record set. dns.resourceRecordSets.list dns.resourceRecordSets.list on the project containing the managed zone. dns.resourceRecordSets.update dns.resourceRecordSets.update and dns.changes.create on the project containing the record set. dns.responsePolicies.create dns.responsePolicies.create on the project containing the response policy.
- To update a resource record, set both dns.changes.create and dns.resourceRecordSets.update on the project containing the record set.

### Configure DNS routing policies and health checks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies)
- Source ID: `site-iam-reference`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- Geolocation Use the following method: PATCH https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones/ MANAGED ZONE /rrsets/ RRSET NAME / RRSET TYPE { "name": " RRSET NAME ", "type": " RRSET TYPE ", "ttl": TTL , "routingPolicy": { "geo": { "items": [ { "location": " LOCATION ", "healthCheckedTargets": { "internalLoadBalancers": [ { "loadBalancerType": " LOAD BALANCER TYPE " "ipAddress": " IP ADDRESS " "port": " PORT NUMBER " "ipProtocol": " IP PROTOCOL " "networkUrl": " NETWORK URL " "project": " PROJECT ID " "region": " REGION " } ] } }, { "location": " LOCATION ", "healthCheckedTargets": { "internalLoadBalancers": [ { "loadBalancerType": " LOAD BALANCER TYPE " "ipAddress": " IP ADDRESS " "port": " PORT NUMBER " "ipProtocol": " IP PROTOCOL " "networkUrl": " NETWORK URL " "project": " PROJECT ID " "region": " REGION " } ] } } ] } } } Replace the following: PROJECT ID : the ID of the project MANAGED ZONE : the managed zone that this ResourceRecordSet is affiliated with, such as service-zone ; the name of this ResourceRecordSet must have the DNS name of the managed zone as its suffix RRSET NAME : the DNS name that matches the incoming queries with this zone's DNS name as its suffix, such as service.example.com RRSET TYPE : the resource record type of this ResourceRecordSet , such as A TTL : the TTL, in seconds, in which the resolver caches this ResourceRecordSet , such as 30 LOCATION : for GEO policies, the geolocation for which you need to update the policy, such as asia-east1 LOAD BALANCER TYPE : the type of load balancer, such as regionalL4ilb , globalL7ilb , or regionalL7ilb .
- MANAGED ZONE : the managed zone that this ResourceRecordSet is affiliated with, such as service-zone ; the name of this ResourceRecordSet must have the DNS name of the managed zone as its suffix API Use the resourceRecordSets.delete method: DELETE https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones/ MANAGED ZONE /rrsets/ RRSET NAME / RRSET TYPE Replace the following: PROJECT ID : the ID of the project MANAGED ZONE : the managed zone that this ResourceRecordSet is affiliated with, such as my-zone-name ; the name of this ResourceRecordSet must have the DNS name of the managed zone as its suffix RRSET NAME : the DNS name that matches the incoming queries with this zone's DNS name as its suffix, such as test.example.com RRSET TYPE : the resource record type of this ResourceRecordSet , such as A What's next To work with managed zones, see Create, modify, and delete zones .
- POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones/ MANAGED ZONE /rrsets { "name": " RRSET NAME ", "type": " RRSET TYPE ", "ttl": TTL , "routingPolicy": { "primaryBackup": { "trickleTraffic": TRICKLE TRAFFIC , "primaryTargets": { "internalLoadBalancers": [ { "ipAddress": " IP ADDRESS " "ipProtocol": " IP PROTOCOL " "loadBalancerType": " LOAD BALANCER TYPE " "networkUrl": " NETWORK URL " "port": " PORT NUMBER " "project": " PROJECT ID " "region": " REGION " } ] }, "backupGeoTargets": { "enableFencing": ENABLE FENCING , "items": [ { "location": " LOCATION ", "rrdatas": [ " RRDATA " ] }, { "location": " LOCATION ", "rrdatas": [ " RRDATA " ] } ] } } } } Replace the following: PROJECT ID : the ID of the project MANAGED ZONE : the managed zone that this ResourceRecordSet is affiliated with, such as service-zone ; the name of this ResourceRecordSet must have the DNS name of the managed zone as its suffix RRSET NAME : the DNS name that matches the incoming queries with this zone's DNS name as its suffix, such as service.example.com RRSET TYPE : the resource record type of this ResourceRecordSet , such as A TTL : the TTL, in seconds, in which the resolver caches this ResourceRecordSet , such as 30 TRICKLE TRAFFIC : the ratio of traffic to send to the backup targets even when the primaries are healthy; the ratio must be between 0 and 1, such as 0.1 IP ADDRESS : the IP address that the forwarding rule serves PORT NUMBER : the port number IP PROTOCOL : defines the protocol used for the health check; valid options are tcp and udp NETWORK URL : the network URL to which this forwarding rule applies PORT NUMBER : the port number of the internal load balancer REGION : the region in which you created the forwarding rule ENABLE FENCING : for GEO routing policies, this determines whether traffic should failover across regions if all endpoints in a region are unhealthy.
- IP ADDRESS : the IP address that the forwarding rule serves PORT NUMBER : the port number IP PROTOCOL : defines the protocol used for the health check; valid options are tcp and udp NETWORK URL : the network URL to which this forwarding rule applies REGION : the region in which you created the forwarding rule Geolocation POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones/ MANAGED ZONE /rrsets { "name": " RRSET NAME ", "type": " RRSET TYPE ", "ttl": TTL , "routingPolicy": { "geo": { "items": [ { "location": " LOCATION ", "healthCheckedTargets": { "internalLoadBalancers": [ { "loadBalancerType": " LOAD BALANCER TYPE " "ipAddress": " IP ADDRESS " "port": " PORT NUMBER " "ipProtocol": " IP PROTOCOL " "networkUrl": " NETWORK URL " "project": " PROJECT ID " "region": " REGION " } ] } }, { "location": " LOCATION ", "healthCheckedTargets": { "internalLoadBalancers": [ { "loadBalancerType": " LOAD BALANCER TYPE " "ipAddress": " IP ADDRESS " "port": " PORT NUMBER " "ipProtocol": " IP PROTOCOL " "networkUrl": " NETWORK URL " "project": " PROJECT ID " "region": " REGION " } ] } } ] } } } Replace the following: PROJECT ID : the ID of the project MANAGED ZONE : the managed zone that this ResourceRecordSet is affiliated with, such as service-zone ; the name of this ResourceRecordSet must have the DNS name of the managed zone as its suffix RRSET NAME : the DNS name that matches the incoming queries with this zone's DNS name as its suffix, such as service.example.com RRSET TYPE : the resource record type of this ResourceRecordSet , such as A TTL : the TTL, in seconds, in which the resolver caches this ResourceRecordSet , such as 30 LOCATION : for GEO policies, the geolocation for which you need to create the policy, such as asia-east1 LOAD BALANCER TYPE : the type of load balancer, such as regionalL4ilb , globalL7ilb , or regionalL7ilb .

### Cloud DNS audit logging information \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/audit-logging](https://docs.cloud.google.com/dns/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ dns.changes.get dns.changes.list dns.dnsKeys.get dns.managedZoneOperations.list dns.managedZones.get dns.managedZones.getiampolicy dns.managedZones.list dns.policies.get dns.policies.list dns.projects.get dns.resourceRecordSets.get dns.resourceRecordSets.list dns.responsePolicies.get dns.responsePolicies.list dns.responsePolicyRules.get dns.responsePolicyRules.list dns.changes.get dns.changes.list dns.dnsKeys.get dns.managedZoneOperations.list dns.managedZones.get dns.managedZones.getiampolicy dns.managedZones.list dns.policies.get dns.policies.list dns.projects.get dns.resourceRecordSets.get dns.resourceRecordSets.list dns.responsePolicies.get dns.responsePolicies.list dns.responsePolicyRules.get dns.responsePolicyRules.list ADMIN WRITE dns.changes.create dns.managedZones.create dns.managedZones.delete dns.managedZones.patch dns.managedZones.setiampolicy dns.managedZones.update dns.policies.create dns.policies.delete dns.policies.patch dns.policies.update dns.resourceRecordSets.create dns.resourceRecordSets.delete dns.resourceRecordSets.patch dns.responsePolicies.create dns.responsePolicies.delete dns.responsePolicies.patch dns.responsePolicies.update dns.responsePolicyRules.create dns.responsePolicyRules.delete dns.responsePolicyRules.patch dns.responsePolicyRules.update dns.changes.create dns.managedZones.create dns.managedZones.delete dns.managedZones.patch dns.managedZones.setiampolicy dns.managedZones.update dns.policies.create dns.policies.delete dns.policies.patch dns.policies.update dns.resourceRecordSets.create dns.resourceRecordSets.delete dns.resourceRecordSets.patch dns.responsePolicies.create dns.responsePolicies.delete dns.responsePolicies.patch dns.responsePolicies.update dns.responsePolicyRules.create dns.responsePolicyRules.delete dns.responsePolicyRules.patch dns.responsePolicyRules.update DATA READ dns.dnsKeys.list dns.managedZoneOperations.get dns.managedZoneOperations.list dns.dnsKeys.list dns.managedZoneOperations.get dns.managedZoneOperations.list API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud DNS. cloud.dns.api.v1.ChangesService The following audit logs are associated with methods belonging to cloud.dns.api.v1.ChangesService . create Method : dns.changes.create Audit log type : Admin activity Permissions : dns.changes.create - ADMIN WRITE dns.resourceRecordSets.create - ADMIN WRITE dns.resourceRecordSets.delete - ADMIN WRITE dns.resourceRecordSets.update - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="dns.responsePolicyRules.update" cloud.dns.api.v1beta2.ChangesService The following audit logs are associated with methods belonging to cloud.dns.api.v1beta2.ChangesService . create Method : dns.changes.create Audit log type : Admin activity Permissions : dns.changes.create - ADMIN WRITE dns.resourceRecordSets.create - ADMIN WRITE dns.resourceRecordSets.delete - ADMIN WRITE dns.resourceRecordSets.update - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="dns.projects.get" cloud.dns.api.v1beta2.ResourceRecordSetsService The following audit logs are associated with methods belonging to cloud.dns.api.v1beta2.ResourceRecordSetsService . create Method : dns.resourceRecordSets.create Audit log type : Admin activity Permissions : dns.changes.create - ADMIN WRITE dns.resourceRecordSets.create - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="dns.projects.get" cloud.dns.api.v1.ResourceRecordSetsService The following audit logs are associated with methods belonging to cloud.dns.api.v1.ResourceRecordSetsService . create Method : dns.resourceRecordSets.create Audit log type : Admin activity Permissions : dns.changes.create - ADMIN WRITE dns.resourceRecordSets.create - ADMIN WRITE Method is a long-running or streaming operation : No.

