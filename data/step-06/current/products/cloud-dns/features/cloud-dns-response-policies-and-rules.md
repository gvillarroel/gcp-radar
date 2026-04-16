---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:24.692Z"
product_name: "Cloud DNS"
product_slug: "cloud-dns"
feature_name: "Cloud DNS response policies and rules"
feature_slug: "cloud-dns-response-policies-and-rules"
latest_feature_date: "2021-02-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dns/docs/configure-routing-policies"
  - "https://docs.cloud.google.com/dns/docs/access-control"
  - "https://docs.cloud.google.com/dns/docs/audit-logging"
  - "https://docs.cloud.google.com/dns/docs/troubleshooting"
keywords:
  - "dns"
  - "response"
  - "policies"
  - "and"
  - "rules"
  - "adds"
  - "management"
  - "capabilities"
---

# Cloud DNS response policies and rules

Product: Cloud DNS
Coverage: MEDIUM

## Step 02 Summary

Cloud DNS adds management capabilities for response policies and response rules.

## Extended Definition

Cloud DNS adds management capabilities for response policies and response rules.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies)
- [https://docs.cloud.google.com/dns/docs/access-control](https://docs.cloud.google.com/dns/docs/access-control)
- [https://docs.cloud.google.com/dns/docs/audit-logging](https://docs.cloud.google.com/dns/docs/audit-logging)
- [https://docs.cloud.google.com/dns/docs/troubleshooting](https://docs.cloud.google.com/dns/docs/troubleshooting)

## Supporting Pages

### Configure DNS routing policies and health checks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies)
- Source ID: `site-iam-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones/ MANAGED ZONE /rrsets { "name": " RRSET NAME ", "type": " RRSET TYPE ", "ttl": TTL , "routingPolicy": { "primaryBackup": { "trickleTraffic": TRICKLE TRAFFIC , "primaryTargets": { "internalLoadBalancers": [ { "ipAddress": " IP ADDRESS " "ipProtocol": " IP PROTOCOL " "loadBalancerType": " LOAD BALANCER TYPE " "networkUrl": " NETWORK URL " "port": " PORT NUMBER " "project": " PROJECT ID " "region": " REGION " } ] }, "backupGeoTargets": { "enableFencing": ENABLE FENCING , "items": [ { "location": " LOCATION ", "rrdatas": [ " RRDATA " ] }, { "location": " LOCATION ", "rrdatas": [ " RRDATA " ] } ] } } } } Replace the following: PROJECT ID : the ID of the project MANAGED ZONE : the managed zone that this ResourceRecordSet is affiliated with, such as service-zone ; the name of this ResourceRecordSet must have the DNS name of the managed zone as its suffix RRSET NAME : the DNS name that matches the incoming queries with this zone's DNS name as its suffix, such as service.example.com RRSET TYPE : the resource record type of this ResourceRecordSet , such as A TTL : the TTL, in seconds, in which the resolver caches this ResourceRecordSet , such as 30 TRICKLE TRAFFIC : the ratio of traffic to send to the backup targets even when the primaries are healthy; the ratio must be between 0 and 1, such as 0.1 IP ADDRESS : the IP address that the forwarding rule serves PORT NUMBER : the port number IP PROTOCOL : defines the protocol used for the health check; valid options are tcp and udp NETWORK URL : the network URL to which this forwarding rule applies PORT NUMBER : the port number of the internal load balancer REGION : the region in which you created the forwarding rule ENABLE FENCING : for GEO routing policies, this determines whether traffic should failover across regions if all endpoints in a region are unhealthy.
- IP ADDRESS : the IP address that the forwarding rule serves PORT NUMBER : the port number IP PROTOCOL : defines the protocol used for the health check; valid options are tcp and udp NETWORK URL : the network URL to which this forwarding rule applies REGION : the region in which you created the forwarding rule Geolocation POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones/ MANAGED ZONE /rrsets { "name": " RRSET NAME ", "type": " RRSET TYPE ", "ttl": TTL , "routingPolicy": { "geo": { "items": [ { "location": " LOCATION ", "healthCheckedTargets": { "internalLoadBalancers": [ { "loadBalancerType": " LOAD BALANCER TYPE " "ipAddress": " IP ADDRESS " "port": " PORT NUMBER " "ipProtocol": " IP PROTOCOL " "networkUrl": " NETWORK URL " "project": " PROJECT ID " "region": " REGION " } ] } }, { "location": " LOCATION ", "healthCheckedTargets": { "internalLoadBalancers": [ { "loadBalancerType": " LOAD BALANCER TYPE " "ipAddress": " IP ADDRESS " "port": " PORT NUMBER " "ipProtocol": " IP PROTOCOL " "networkUrl": " NETWORK URL " "project": " PROJECT ID " "region": " REGION " } ] } } ] } } } Replace the following: PROJECT ID : the ID of the project MANAGED ZONE : the managed zone that this ResourceRecordSet is affiliated with, such as service-zone ; the name of this ResourceRecordSet must have the DNS name of the managed zone as its suffix RRSET NAME : the DNS name that matches the incoming queries with this zone's DNS name as its suffix, such as service.example.com RRSET TYPE : the resource record type of this ResourceRecordSet , such as A TTL : the TTL, in seconds, in which the resolver caches this ResourceRecordSet , such as 30 LOCATION : for GEO policies, the geolocation for which you need to create the policy, such as asia-east1 LOAD BALANCER TYPE : the type of load balancer, such as regionalL4ilb , globalL7ilb , or regionalL7ilb .
- IP ADDRESS : the IP address that the forwarding rule serves PORT NUMBER : the port number IP PROTOCOL : defines the protocol used for the health check; valid options are tcp and udp NETWORK URL : the network URL to which this forwarding rule applies REGION : the region in which you created the forwarding rule Delete DNS routing policies To delete a routing policy, you must delete the resource record set that contains the routing policy.
- IP ADDRESS : the IP address that the forwarding rule serves PORT NUMBER : the port number of the internal load balancer IP PROTOCOL : defines the protocol used for the health check; valid options are tcp and udp NETWORK URL : the network URL to which this forwarding rule applies REGION : the region in which you created the forwarding rule Failover In the failover option, Cloud DNS only supports GEO policies.

### Roles and permissions \_|\_ Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/access-control](https://docs.cloud.google.com/dns/docs/access-control)
- Source ID: `site-iam-reference`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Lowest-level resources where you can grant this role: Managed zone compute.networks.get compute.networks.list dns.changes. dns.changes.create dns.changes.get dns.changes.list dns.dnsKeys. dns.dnsKeys.get dns.dnsKeys.list dns.gkeClusters. dns. gkeClusters. bindDNSResponsePolicy dns. gkeClusters. bindPrivateDNSZone dns.managedZoneOperations. dns.managedZoneOperations.get dns.managedZoneOperations.list dns.managedZones.create dns.managedZones.delete dns.managedZones.get dns.managedZones.getIamPolicy dns.managedZones.list dns.managedZones.update dns.networks. dns. networks. bindDNSResponsePolicy dns. networks. bindPrivateDNSPolicy dns. networks. bindPrivateDNSZone dns. networks. targetWithPeeringZone dns.networks.useHealthSignals dns.policies. dns.policies.create dns.policies.createTagBinding dns.policies.delete dns.policies.deleteTagBinding dns.policies.get dns.policies.list dns.policies.listEffectiveTags dns.policies.listTagBindings dns.policies.update dns.projects.get dns.resourceRecordSets. dns.resourceRecordSets.create dns.resourceRecordSets.delete dns.resourceRecordSets.get dns.resourceRecordSets.list dns.resourceRecordSets.update dns.responsePolicies. dns.responsePolicies.create dns.responsePolicies.delete dns.responsePolicies.get dns.responsePolicies.list dns.responsePolicies.update dns.responsePolicyRules. dns.responsePolicyRules.create dns.responsePolicyRules.delete dns.responsePolicyRules.get dns.responsePolicyRules.list dns.responsePolicyRules.update resourcemanager.projects.get resourcemanager.projects.list DNS Peer ( roles/ dns.peer ) Access to target networks with DNS peering zones dns. networks. targetWithPeeringZone DNS Reader ( roles/ dns.reader ) Provides read-only access to all Cloud DNS resources.
- If the policy is updated to be on a VPC network, you also need dns.networks.bindPrivateDNSPolicy for each project containing each VPC network. dns.projects.get dns.projects.get on the project. dns.resourceRecordSets.create dns.resourceRecordSets.create on the project containing the record set. dns.resourceRecordSets.delete dns.resourceRecordSets.delete on the project containing the record set. dns.resourceRecordSets.get dns.resourceRecordSets.get on the project containing the record set. dns.resourceRecordSets.list dns.resourceRecordSets.list on the project containing the managed zone. dns.resourceRecordSets.update dns.resourceRecordSets.update and dns.changes.create on the project containing the record set. dns.responsePolicies.create dns.responsePolicies.create on the project containing the response policy.
- Lowest-level resources where you can grant this role: Managed zone compute.networks.get dns.changes.get dns.changes.list dns.dnsKeys. dns.dnsKeys.get dns.dnsKeys.list dns.managedZoneOperations. dns.managedZoneOperations.get dns.managedZoneOperations.list dns.managedZones.get dns.managedZones.list dns.policies.get dns.policies.list dns.policies.listEffectiveTags dns.policies.listTagBindings dns.projects.get dns.resourceRecordSets.get dns.resourceRecordSets.list dns.responsePolicies.get dns.responsePolicies.list dns.responsePolicyRules.get dns.responsePolicyRules.list resourcemanager.projects.get resourcemanager.projects.list Service agent roles Service agent roles should only be granted to service agents .
- If you want to create a response policy attached to a GKE cluster, you need dns.gkeClusters.bindDNSResponsePolicy . dns.responsePolicyRules.create dns.responsePolicyRules.create on the project containing the response policy rule. dns.responsePolicyRules.delete dns.responsePolicyRules.delete on the project containing the response policy rule. dns.responsePolicyRules.get dns.responsePolicyRules.get on the project containing the response policy rule. dns.responsePolicyRules.list dns.responsePolicyRules.list on the project containing the response policy. dns.responsePolicyRules.update dns.responsePolicyRules.update on the project containing the response policy rule. networksecurity.dnsThreatDetectors.list networksecurity.dnsThreatDetectors.list on the project where the VPC networks are monitored for threats. networksecurity.dnsThreatDetectors.get networksecurity.dnsThreatDetectors.get on the project where the VPC networks are monitored for threats. networksecurity.dnsThreatDetectors.create networksecurity.dnsThreatDetectors.create on the project containing the VPC networks you want to monitor for threats. networksecurity.dnsThreatDetectors.update networksecurity.dnsThreatDetectors.update on the project where the VPC networks are monitored for threats. networksecurity.dnsThreatDetectors.delete networksecurity.dnsThreatDetectors.delete on the project where the VPC networks are monitored for threats.

### Cloud DNS audit logging information \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/audit-logging](https://docs.cloud.google.com/dns/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ dns.changes.get dns.changes.list dns.dnsKeys.get dns.managedZoneOperations.list dns.managedZones.get dns.managedZones.getiampolicy dns.managedZones.list dns.policies.get dns.policies.list dns.projects.get dns.resourceRecordSets.get dns.resourceRecordSets.list dns.responsePolicies.get dns.responsePolicies.list dns.responsePolicyRules.get dns.responsePolicyRules.list dns.changes.get dns.changes.list dns.dnsKeys.get dns.managedZoneOperations.list dns.managedZones.get dns.managedZones.getiampolicy dns.managedZones.list dns.policies.get dns.policies.list dns.projects.get dns.resourceRecordSets.get dns.resourceRecordSets.list dns.responsePolicies.get dns.responsePolicies.list dns.responsePolicyRules.get dns.responsePolicyRules.list ADMIN WRITE dns.changes.create dns.managedZones.create dns.managedZones.delete dns.managedZones.patch dns.managedZones.setiampolicy dns.managedZones.update dns.policies.create dns.policies.delete dns.policies.patch dns.policies.update dns.resourceRecordSets.create dns.resourceRecordSets.delete dns.resourceRecordSets.patch dns.responsePolicies.create dns.responsePolicies.delete dns.responsePolicies.patch dns.responsePolicies.update dns.responsePolicyRules.create dns.responsePolicyRules.delete dns.responsePolicyRules.patch dns.responsePolicyRules.update dns.changes.create dns.managedZones.create dns.managedZones.delete dns.managedZones.patch dns.managedZones.setiampolicy dns.managedZones.update dns.policies.create dns.policies.delete dns.policies.patch dns.policies.update dns.resourceRecordSets.create dns.resourceRecordSets.delete dns.resourceRecordSets.patch dns.responsePolicies.create dns.responsePolicies.delete dns.responsePolicies.patch dns.responsePolicies.update dns.responsePolicyRules.create dns.responsePolicyRules.delete dns.responsePolicyRules.patch dns.responsePolicyRules.update DATA READ dns.dnsKeys.list dns.managedZoneOperations.get dns.managedZoneOperations.list dns.dnsKeys.list dns.managedZoneOperations.get dns.managedZoneOperations.list API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud DNS. cloud.dns.api.v1.ChangesService The following audit logs are associated with methods belonging to cloud.dns.api.v1.ChangesService . create Method : dns.changes.create Audit log type : Admin activity Permissions : dns.changes.create - ADMIN WRITE dns.resourceRecordSets.create - ADMIN WRITE dns.resourceRecordSets.delete - ADMIN WRITE dns.resourceRecordSets.update - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="dns.responsePolicies.update" cloud.dns.api.v1beta2.ResponsePolicyRulesService The following audit logs are associated with methods belonging to cloud.dns.api.v1beta2.ResponsePolicyRulesService . create Method : dns.responsePolicyRules.create Audit log type : Admin activity Permissions : dns.responsePolicyRules.create - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="dns.responsePolicies.update" cloud.dns.api.v1.ResponsePolicyRulesService The following audit logs are associated with methods belonging to cloud.dns.api.v1.ResponsePolicyRulesService . create Method : dns.responsePolicyRules.create Audit log type : Admin activity Permissions : dns.responsePolicyRules.create - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="dns.responsePolicyRules.update" Methods that don't produce audit logs A method might not produce audit logs for one or more of the following reasons: It is a high volume method involving significant log generation and storage costs.

### Troubleshoot Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/troubleshooting](https://docs.cloud.google.com/dns/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- You must also attempt to query your on-premises name server directly from a sample Google Cloud VM by using a tool like dig : dig DNS NAME @192.168.x.x # address of the onprem DNS server Check firewall rules in your VPC network The implied allow egress firewall rule allows outbound connections and established responses from VMs in your VPC network unless you have created custom rules to deny egress.
- Use the following command to list all policies: gcloud dns policies list Identify the network in the output table, and check for the Forwarding field to see if forwarding is enabled.
- Go to Monitoring In Metric select Cloud DNS Query , then choose Query and DNS response counts .
- Forwarding queries from VMs in a consumer VPC network to a producer VPC network not working If you are using DNS peering and you want to forward queries from VMs in a consumer VPC network to a producer VPC network, and then to one or more on-premises name servers, make sure that one of the following prerequisites is met: The producer VPC network has its dynamic routing mode set to GLOBAL The VM in the consumer VPC network is in the same region as the VPN tunnel or Cloud Interconnect in the producer VPC ( Classic VPN only ) The producer VPC network has a static route configured to send traffic destined for the on-premise name servers through the Classic VPN tunnel.

