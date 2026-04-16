---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.501Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Firewall rules logging"
feature_slug: "firewall-rules-logging"
latest_feature_date: "2019-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/audit-logging"
keywords:
  - "firewall"
  - "rules"
  - "logging"
  - "rule"
  - "is"
  - "now"
  - "generally"
  - "available"
---

# Firewall rules logging

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Firewall rule logging is now generally available in Virtual Private Cloud; Firewall rules logging enables logging of packets that match VPC firewall rules.

## Extended Definition

Firewall rule logging is now generally available in Virtual Private Cloud; Firewall rules logging enables logging of packets that match VPC firewall rules.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/audit-logging](https://docs.cloud.google.com/vpc/docs/audit-logging)

## Supporting Pages

### "Firewall Insights overview \_|\_ Network Intelligence Center - Firewall\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a complete list of criteria, see Specifications in the Firewall Rules Logging overview.
- They are available only for firewall rules with Firewall Rules Logging enabled.
- Note: For firewall rules in hierarchical firewall policies and global network firewall policies, insights are generated based on firewall logging data gathered only after February 27, 2023.
- Insights help you identify firewall rules that overlap existing rules, rules with no hits, and unused firewall rule attributes such as IP address and port ranges.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-custom-mode-network" mtu = 1460 subnets = [ { subnet name = "subnet-01" subnet ip = "10.10.10.0/24" subnet region = "us-west1" }, { subnet name = "subnet-02" subnet ip = "10.10.20.0/24" subnet region = "us-west1" subnet private access = "true" subnet flow logs = "true" }, { subnet name = "subnet-03" subnet ip = "10.10.30.0/24" subnet region = "us-west1" subnet flow logs = "true" subnet flow logs interval = "INTERVAL 10 MIN" subnet flow logs sampling = 0.7 subnet flow logs metadata = "INCLUDE ALL METADATA" subnet flow logs filter = "false" } ] } Next, create firewall rules .
- In both the IPv4 firewall rules tab and the IPv6 firewall rules tab, there is an editable predefined ingress firewall rule; the IPv4 rule is named NETWORK -allow-custom and the IPv6 rule is named NETWORK -allow-ipv6-custom .
- In the IPv6 firewall rules tab, there is an editable predefined ingress firewall rule named NETWORK -allow-ipv6-custom .
- For information about this error and its solution, see Resource not found error in the VPC firewall rules documentation.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- To monitor which firewall rule allowed or denied a particular connection, see Firewall Rules Logging .
- The default network is an auto mode VPC network with pre-populated IPv4 firewall rules .
- Inbound traffic is only permitted if it is allowed by both types of firewall rules.
- Protocol forwarding: the AH, ESP, GRE, ICMP, ICMPv6, SCTP, TCP, and UDP protocols To allow data packets of the supported protocols, you need to configure firewall rules or protocol forwarding rules based on your requirements.

### Virtual Private Cloud audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/audit-logging](https://docs.cloud.google.com/vpc/docs/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ v1.compute.firewalls.get v1.compute.firewalls.list v1.compute.networks.get v1.compute.networks.getEffectiveFirewalls v1.compute.networks.list v1.compute.networks.listPeeringRoutes v1.compute.forwardingRules.aggregatedList v1.compute.forwardingRules.get v1.compute.forwardingRules.list v1.compute.routes.get v1.compute.routes.list v1.compute.subnetworks.aggregatedList v1.compute.subnetworks.get v1.compute.subnetworks.getIamPolicy v1.compute.subnetworks.list v1.compute.subnetworks.testIamPermissions ADMIN WRITE v1.compute.firewalls.delete v1.compute.firewalls.insert v1.compute.firewalls.patch v1.compute.firewalls.update v1.compute.networks.addPeering v1.compute.networks.delete v1.compute.networks.insert v1.compute.networks.patch v1.compute.networks.removePeering v1.compute.networks.switchToCustomMode v1.compute.networks.updatePeering v1.compute.forwardingRules.delete v1.compute.forwardingRules.insert v1.compute.forwardingRules.patch v1.compute.forwardingRules.setLabels v1.compute.forwardingRules.setTarget v1.compute.routes.delete v1.compute.routes.insert v1.compute.subnetworks.delete v1.compute.subnetworks.expandIpCidrRange v1.compute.subnetworks.insert v1.compute.subnetworks.patch v1.compute.subnetworks.setIamPolicy v1.compute.subnetworks.setPrivateIpGoogleAccess google.cloud.networkconnectivity.v1.PolicyBasedRoutingService.CreatePolicyBasedRoute google.cloud.networkconnectivity.v1.PolicyBasedRoutingService.DeletePolicyBasedRoute OTHER google.cloud.networkconnectivity.v1.PolicyBasedRoutingService.GetPolicyBasedRoute : To enable this log, enable ADMIN READ under the service networkconnectivity.googleapis.com . google.cloud.networkconnectivity.v1.PolicyBasedRoutingService.ListPolicyBasedRoutes : To enable this log, enable ADMIN READ under the service networkconnectivity.googleapis.com .
- Filter for this method : protoPayload.methodName="v1.compute.networks.listPeeringRoutes" patch Method : v1.compute.networks.patch Audit log type : Admin activity Permissions : compute.networks.get - ADMIN READ compute.networks.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.networks.patch" removePeering Method : v1.compute.networks.removePeering Audit log type : Admin activity Permissions : compute.networks.removePeering - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.networks.removePeering" switchToCustomMode Method : v1.compute.networks.switchToCustomMode Audit log type : Admin activity Permissions : compute.networks.switchToCustomMode - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.networks.switchToCustomMode" updatePeering Method : v1.compute.networks.updatePeering Audit log type : Admin activity Permissions : compute.networks.updatePeering - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.networks.updatePeering" compute.v1.RegionForwardingRulesService The following audit logs are associated with methods belonging to compute.v1.RegionForwardingRulesService . aggregatedList Method : v1.compute.forwardingRules.aggregatedList Audit log type : Data access Permissions : compute.forwardingRules.list - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="v1.compute.forwardingRules.list" patch Method : v1.compute.forwardingRules.patch Audit log type : Admin activity Permissions : compute.forwardingRules.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.forwardingRules.patch" setLabels Method : v1.compute.forwardingRules.setLabels Audit log type : Admin activity Permissions : compute.forwardingRules.setLabels - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.forwardingRules.setLabels" setTarget Method : v1.compute.forwardingRules.setTarget Audit log type : Admin activity Permissions : compute.forwardingRules.setTarget - ADMIN WRITE compute.regionBackendServices.use - ADMIN WRITE compute.regionTargetHttpsProxies.use - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.forwardingRules.setTarget" compute.v1.RoutesService The following audit logs are associated with methods belonging to compute.v1.RoutesService . delete Method : v1.compute.routes.delete Audit log type : Admin activity Permissions : compute.routes.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.routes.delete" get Method : v1.compute.routes.get Audit log type : Data access Permissions : compute.routes.get - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="v1.compute.forwardingRules.aggregatedList" delete Method : v1.compute.forwardingRules.delete Audit log type : Admin activity Permissions : compute.forwardingRules.delete - ADMIN WRITE compute.forwardingRules.pscDelete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.forwardingRules.delete" get Method : v1.compute.forwardingRules.get Audit log type : Data access Permissions : compute.forwardingRules.get - ADMIN READ Method is a long-running or streaming operation : No.

