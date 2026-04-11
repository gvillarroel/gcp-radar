---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:13.177Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Firewall rule egress and deny support"
feature_slug: "firewall-rule-egress-and-deny-support"
latest_feature_date: "2017-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/release-notes"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
keywords:
  - "firewall"
  - "rule"
  - "egress"
  - "and"
  - "deny"
  - "rules"
  - "were"
  - "expanded"
---

# Firewall rule egress and deny support

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Firewall rules were expanded to support egress traffic controls, deny actions, and explicit rule evaluation ordering.

## Extended Definition

Firewall rules were expanded to support egress traffic controls, deny actions, and explicit rule evaluation ordering.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/release-notes](https://docs.cloud.google.com/vpc/docs/release-notes)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)

## Supporting Pages

### VPC release notes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/release-notes](https://docs.cloud.google.com/vpc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- April 17, 2017 Feature Firewall Rules egress and deny rules allows you to create firewall rules that govern egress as well as ingress traffic.
- Feature Firewall Rules egress and deny rules allows you to create firewall rules that govern egress as well as ingress traffic.
- Firewall Rules egress and deny rules is now available in General Availability .
- Firewall Rules egress and deny rules is now available in Beta .

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Virtual Private Cloud Start free Overview Guides Reference Resources More Technology areas More Overview Guides Reference Resources Cross-product tools More Console Discover Virtual Private Cloud overview Get started VPC networks Subnets IPv6 support Create and manage VPC networks Add networking features Add IP addresses Overview Reserve internal IP addresses Reserve external IP addresses Move an external IPv4 address to a different project Add alias IP ranges Overview Configure alias IP ranges Bring your own IP addresses (BYOIP) Overview Planning and architecture Create a public advertised prefix Create public delegated prefixes Create IPv4 sub-prefixes and IP addresses Create and use IPv6 sub-prefixes Manage BGP announcement Deprovision BYOIP Add routes Routes overview Static routes overview Use routes Add policy-based routes Overview Use policy-based-routes Change MTU Overview Change MTU of a VPC network Create and verify a jumbo frame MTU network Access IPv4 destinations from IPv6-only instances Overview Configure IPv6-only subnets and instances with DNS64 and NAT64 Configure VMs Add network tags Add VMs with multiple network interfaces Overview Create VMs with multiple network interfaces Configure Dynamic NICs Add Dynamic NICs Delete Dynamic NICs Configure routing for an additional network interface Troubleshoot Add capabilities Network Connectivity Center VPC Network Peering Overview About peering connections Set up and manage VPC Network Peering Peer two VPC networks Shared VPC Overview Provision Shared VPC Deprovision Shared VPC Hybrid Subnets About migrating to Google Cloud with Hybrid Subnets Prepare for Hybrid Subnets connectivity Migrate to Google Cloud with Hybrid Subnets Disable hybrid subnet routing Internal ranges Overview Create and use internal ranges Network profiles for specific use cases Overview RDMA network profiles Create a VPC network for RDMA NICs View network profiles Access APIs and services Choose a private access option Private Service Connect Overview Compatibility Deployment patterns Architecture Security Create and access your own service Overview Create a load-balanced service Make the service accessible to other VPC networks Access the service from another VPC network Service consumers Endpoints Published services About accessing published services Access published services Manage endpoints that access published services Global Google APIs About accessing global Google APIs Access global Google APIs Regional Google APIs About accessing regional Google APIs Access regional Google APIs About propagated connections Backends About backends Create a backend Access published services Access regional Google APIs Access global Google APIs Network attachments About network attachments Create network attachments Configure security Service connection policies About service connectivity automation About service connection policies Configure connectivity to services Configure service connection policies Deploy service instances Manage consumer security Service producers Published services About published services About controlling access to published services Publish services Manage published services DNS configuration for services Private Service Connect health About Private Service Connect health Configure Private Service Connect health for failover View, update, and delete Private Service Connect health configurations Port mapping About port mapping Create port mapping services Update port mapping services Migrate peering services to Private Service Connect About migrating peering services Migrate peering services Interfaces About interfaces Create interfaces Configure routing Configure security Manage destination overlap Manage producer security Monitor connections Private Google Access Overview Configure Private Google Access Private Google Access for on-premises hosts Overview Configure Private Google Access for on-premises hosts Access APIs from VMs with external IP addresses Private services access Overview Configure private services access Send serverless traffic to a VPC network Overview Configure serverless traffic Monitor VPC Flow Logs Overview About VPC Flow Logs records About traffic flows Configure VPC Flow Logs Configure organization policy constraints Access flow logs Audit logging VPC audit logging Private services access audit logging Serverless VPC Access audit logging Packet Mirroring Overview Use Packet Mirroring Monitor Packet Mirroring Packet Mirroring partner providers Control access Manage resources by using custom constraints Create and manage tags for VPC resources Troubleshoot Troubleshoot internal connectivity between VMs Troubleshoot policy and access problems Advanced topics Advanced VPC concepts Legacy networks Overview Manage legacy networks AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Create networks Create an auto mode VPC network Create a custom mode VPC network with IPv4-only subnets Create a custom mode VPC network with a dual-stack subnet Create a custom mode VPC network with IPv6-only subnets About firewall rules View networks Work with subnets List subnets Describe a subnet Add an IPv4-only subnet Add a dual-stack subnet Add an IPv6-only subnet Change an IPv4-only subnet to dual-stack Change a dual-stack subnet to IPv4 only Add a subnet that uses an IPv6 BYOIP address range Add a subnet that uses a reserved IPv4 internal range Delete a subnet Expand a primary IPv4 range Edit secondary IPv4 ranges Modify networks Convert an auto mode VPC network to custom mode Assign an internal IPv6 ULA range to a network Change the dynamic routing mode Change the MTU of a network Delete a network Monitor your VPC network Migrate VMs Troubleshooting Can't delete a VPC network that was used with Serverless VPC Access Error: Constraint constraints/compute.requireVpcFlowLogs violated Resource not found error Resource already exists What's next Home Documentation Networking Virtual Private Cloud Guides Was this helpful?
- Send feedback On this page Create networks Create an auto mode VPC network Create a custom mode VPC network with IPv4-only subnets Create a custom mode VPC network with a dual-stack subnet Create a custom mode VPC network with IPv6-only subnets About firewall rules View networks Work with subnets List subnets Describe a subnet Add an IPv4-only subnet Add a dual-stack subnet Add an IPv6-only subnet Change an IPv4-only subnet to dual-stack Change a dual-stack subnet to IPv4 only Add a subnet that uses an IPv6 BYOIP address range Add a subnet that uses a reserved IPv4 internal range Delete a subnet Expand a primary IPv4 range Edit secondary IPv4 ranges Modify networks Convert an auto mode VPC network to custom mode Assign an internal IPv6 ULA range to a network Change the dynamic routing mode Change the MTU of a network Delete a network Monitor your VPC network Migrate VMs Troubleshooting Can't delete a VPC network that was used with Serverless VPC Access Error: Constraint constraints/compute.requireVpcFlowLogs violated Resource not found error Resource already exists What's next Create and manage VPC networks Stay organized with collections Save and categorize content based on your preferences.
- In both the IPv4 firewall rules tab and the IPv6 firewall rules tab, there is an editable predefined ingress firewall rule; the IPv4 rule is named NETWORK -allow-custom and the IPv6 rule is named NETWORK -allow-ipv6-custom .
- Resources that reference the network include VPC Network Peering connections , Cloud VPN gateways , Cloud Routers , Serverless VPC Access connectors and their connected services, firewall rules , and custom static routes .

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Rules in network firewall policies can use secure Tags , which are different from network tags, to identify targets and sources: When used to specify a target for an ingress or egress rule in a network firewall policy, a Tag can only identify targets in the VPC network to which the Tag is scoped.
- Because of the implied allow egress firewall rules , you don't need to create egress allow firewall rules or rules in firewall policies to permit packets to destinations in the peered VPC network unless your networks include egress deny rules.
- If the firewall rules are correctly configured, only vm-a1 and vm-b can communicate with an on-premises resource with IPv4 address 10.5.6.7 (or IPv6 address fc:1000:1000:10a0:29b:: ) because that is the only VM in the same region as the Cloud Router.
- If firewall rules are correctly configured, vm-a1 , vm-a2 , and vm-b can communicate with an on-premises resource with IPv4 address 10.5.6.7 (or IPv6 address fc:1000:1000:10a0:29b:: ).

