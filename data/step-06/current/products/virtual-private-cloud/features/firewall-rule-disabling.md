---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.502Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Firewall rule disabling"
feature_slug: "firewall-rule-disabling"
latest_feature_date: "2018-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-private-google-access"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/audit-logging"
keywords:
  - "firewall"
  - "rule"
  - "disabling"
  - "virtual"
  - "private"
  - "supports"
  - "rules"
  - "enabling"
---

# Firewall rule disabling

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Virtual Private Cloud supports disabling firewall rules, enabling administrators to temporarily deactivate rules without deleting them.

## Extended Definition

Virtual Private Cloud supports disabling firewall rules, enabling administrators to temporarily deactivate rules without deleting them.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-private-google-access](https://docs.cloud.google.com/vpc/docs/configure-private-google-access)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/audit-logging](https://docs.cloud.google.com/vpc/docs/audit-logging)

## Supporting Pages

### "Configure Private Google Access \_|\_ Virtual Private Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-google-access](https://docs.cloud.google.com/vpc/docs/configure-private-google-access)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Default domains: all IP address ranges for Google APIs and services . private.googleapis.com : 199.36.153.8/30 and 2600:2d00:0002:2000::/56 restricted.googleapis.com : 199.36.153.4/30 and 2600:2d00:0002:1000::/56 Additionally, we recommend that you include 34.126.0.0/18 and 2001:4860:8040::/42 in your egress allow firewall rule.
- The default allow egress firewall rule allows this traffic, if there is no higher priority rule that blocks it. private.googleapis.com Configure DNS records in a private DNS zone to send requests to the following IP addresses: For IPv4 traffic: 199.36.
- 0.0/18 For IPv6 traffic: 2600:2d00: 0002: 2000::/56 2001:4860: 8040::/42 Ensure that your firewall rules allow egress to the following IP ranges: For IPv4 traffic: 199.36.
- 0.0/18 For IPv6 traffic: 2600:2d00: 0002: 1000::/56 2001:4860: 8040::/42 Ensure that your firewall rules allow egress to the following IP ranges: For IPv4 traffic: 199.36.

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- VPC Network Peering also provides certain external IPv6 connectivity to the destination external IPv6 address ranges of the following resources when the routes to those destination external IPv6 addresses are exchanged by VPC Network Peering: Dual-stack and IPv6-only virtual machine (VM) instance network interfaces Forwarding rules for external protocol forwarding Forwarding rules for external passthrough Network Load Balancers VPC Network Peering supports both IPv4 and IPv6 connectivity.
- Rules in network firewall policies can use secure Tags , which are different from network tags, to identify targets and sources: When used to specify a target for an ingress or egress rule in a network firewall policy, a Tag can only identify targets in the VPC network to which the Tag is scoped.
- Subject to IAM permissions, a security administrator of a peered VPC network might be able to use the same service account to define targets of firewall rules in a peered VPC network, but the targets of the firewall rules in the peered VPC network don't include instances in your VPC network.
- Even though a security administrator of a peered VPC network can use the same network tag to define targets of firewall rules in a peered VPC network, the targets of the firewall rules in the peered VPC network don't include instances in your VPC network.

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- When you configure ingress firewall rules for backend services, the source of traffic depends on the type of load balancer that your service uses: Category Source of traffic to backends Passthrough load balancers: Internal passthrough Network Load Balancer Internal protocol forwarding Port mapping service The IP address ranges of the Private Service Connect (NAT) subnets associated with the service Proxy load balancers: Cross-region internal Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Secure Web Proxy The IP address ranges of the associated proxy-only subnets Services with health checks The probe IP address ranges of your load balancer type Publish a service To publish a service, you create a service attachment.
- Configure firewall rules Your network configuration must allow traffic from appropriate source IP address ranges to the instances or network endpoints that are configured as backends for your backend services.
- If your backends are in a VPC network, you can use VPC ingress firewall rules or firewall policies to allow this traffic.
- For Cross-region internal Application Load Balancers, use the following format: projects/ PROJECT ID /global/forwardingRules/ RULE NAME For all other producer forwarding rules, use the following format: projects/ PROJECT ID /regions/ RULE REGION /forwardingRules/ RULE NAME Service Project Admins can specify the forwarding rule of an internal load balancer that has an IP address from a Shared VPC network .

### Virtual Private Cloud audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/audit-logging](https://docs.cloud.google.com/vpc/docs/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ v1.compute.firewalls.get v1.compute.firewalls.list v1.compute.networks.get v1.compute.networks.getEffectiveFirewalls v1.compute.networks.list v1.compute.networks.listPeeringRoutes v1.compute.forwardingRules.aggregatedList v1.compute.forwardingRules.get v1.compute.forwardingRules.list v1.compute.routes.get v1.compute.routes.list v1.compute.subnetworks.aggregatedList v1.compute.subnetworks.get v1.compute.subnetworks.getIamPolicy v1.compute.subnetworks.list v1.compute.subnetworks.testIamPermissions ADMIN WRITE v1.compute.firewalls.delete v1.compute.firewalls.insert v1.compute.firewalls.patch v1.compute.firewalls.update v1.compute.networks.addPeering v1.compute.networks.delete v1.compute.networks.insert v1.compute.networks.patch v1.compute.networks.removePeering v1.compute.networks.switchToCustomMode v1.compute.networks.updatePeering v1.compute.forwardingRules.delete v1.compute.forwardingRules.insert v1.compute.forwardingRules.patch v1.compute.forwardingRules.setLabels v1.compute.forwardingRules.setTarget v1.compute.routes.delete v1.compute.routes.insert v1.compute.subnetworks.delete v1.compute.subnetworks.expandIpCidrRange v1.compute.subnetworks.insert v1.compute.subnetworks.patch v1.compute.subnetworks.setIamPolicy v1.compute.subnetworks.setPrivateIpGoogleAccess google.cloud.networkconnectivity.v1.PolicyBasedRoutingService.CreatePolicyBasedRoute google.cloud.networkconnectivity.v1.PolicyBasedRoutingService.DeletePolicyBasedRoute OTHER google.cloud.networkconnectivity.v1.PolicyBasedRoutingService.GetPolicyBasedRoute : To enable this log, enable ADMIN READ under the service networkconnectivity.googleapis.com . google.cloud.networkconnectivity.v1.PolicyBasedRoutingService.ListPolicyBasedRoutes : To enable this log, enable ADMIN READ under the service networkconnectivity.googleapis.com .
- API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Virtual Private Cloud. compute.v1.FirewallsService The following audit logs are associated with methods belonging to compute.v1.FirewallsService . delete Method : v1.compute.firewalls.delete Audit log type : Admin activity Permissions : compute.firewalls.delete - ADMIN WRITE compute.networks.updatePolicy - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.firewalls.delete" get Method : v1.compute.firewalls.get Audit log type : Data access Permissions : compute.firewalls.get - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="v1.compute.networks.listPeeringRoutes" patch Method : v1.compute.networks.patch Audit log type : Admin activity Permissions : compute.networks.get - ADMIN READ compute.networks.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.networks.patch" removePeering Method : v1.compute.networks.removePeering Audit log type : Admin activity Permissions : compute.networks.removePeering - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.networks.removePeering" switchToCustomMode Method : v1.compute.networks.switchToCustomMode Audit log type : Admin activity Permissions : compute.networks.switchToCustomMode - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.networks.switchToCustomMode" updatePeering Method : v1.compute.networks.updatePeering Audit log type : Admin activity Permissions : compute.networks.updatePeering - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.networks.updatePeering" compute.v1.RegionForwardingRulesService The following audit logs are associated with methods belonging to compute.v1.RegionForwardingRulesService . aggregatedList Method : v1.compute.forwardingRules.aggregatedList Audit log type : Data access Permissions : compute.forwardingRules.list - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="v1.compute.forwardingRules.list" patch Method : v1.compute.forwardingRules.patch Audit log type : Admin activity Permissions : compute.forwardingRules.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.forwardingRules.patch" setLabels Method : v1.compute.forwardingRules.setLabels Audit log type : Admin activity Permissions : compute.forwardingRules.setLabels - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.forwardingRules.setLabels" setTarget Method : v1.compute.forwardingRules.setTarget Audit log type : Admin activity Permissions : compute.forwardingRules.setTarget - ADMIN WRITE compute.regionBackendServices.use - ADMIN WRITE compute.regionTargetHttpsProxies.use - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.forwardingRules.setTarget" compute.v1.RoutesService The following audit logs are associated with methods belonging to compute.v1.RoutesService . delete Method : v1.compute.routes.delete Audit log type : Admin activity Permissions : compute.routes.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.routes.delete" get Method : v1.compute.routes.get Audit log type : Data access Permissions : compute.routes.get - ADMIN READ Method is a long-running or streaming operation : No.

