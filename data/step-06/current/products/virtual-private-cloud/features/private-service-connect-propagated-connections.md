---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:13.108Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect propagated connections"
feature_slug: "private-service-connect-propagated-connections"
latest_feature_date: "2025-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/release-notes"
  - "https://docs.cloud.google.com/vpc/docs/private-service-connect"
  - "https://docs.cloud.google.com/vpc/docs/quota"
keywords:
  - "private"
  - "connect"
  - "propagated"
  - "connections"
  - "became"
  - "generally"
  - "available"
  - "enabling"
---

# Private Service Connect propagated connections

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect propagated connections became generally available, enabling services in one consumer VPC spoke to be privately accessed from other spokes connected to the same Network Connectivity Center hub; Private Service Connect propagated connections allow services exposed through one consumer VPC spoke via Private Service Connect to be privately reached by other consumer VPC spokes connected to the same Network Connectivity Center hub.

## Extended Definition

Private Service Connect propagated connections became generally available, enabling services in one consumer VPC spoke to be privately accessed from other spokes connected to the same Network Connectivity Center hub; Private Service Connect propagated connections allow services exposed through one consumer VPC spoke via Private Service Connect to be privately reached by other consumer VPC spokes connected to the same Network Connectivity Center hub.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/release-notes](https://docs.cloud.google.com/vpc/docs/release-notes)
- [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)

## Supporting Pages

### VPC release notes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/release-notes](https://docs.cloud.google.com/vpc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- February 26, 2025 Feature Private Service Connect propagated connections are available in General Availability .
- Feature Private Service Connect propagated connections are available in Preview .
- February 27, 2025 Feature The following Private Service Connect monitoring metrics are available for both producers and consumers in General Availability : Closed connections count Received packets dropped count Sent packets dropped count New connections count Open connections Received bytes count Received packets count Sent bytes count Sent packets count Additionally, the NAT IP address capacity metric is available for producers in General Availability .
- With propagated connections, services that are accessible in one consumer VPC spoke through Private Service Connect endpoints can be privately accessed by other consumer VPC spokes that are connected to the same Network Connectivity Center hub.

### Private Service Connect \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Virtual Private Cloud Start free Overview Guides Reference Resources More Technology areas More Overview Guides Reference Resources Cross-product tools More Console Discover Virtual Private Cloud overview Get started VPC networks Subnets IPv6 support Create and manage VPC networks Add networking features Add IP addresses Overview Reserve internal IP addresses Reserve external IP addresses Move an external IPv4 address to a different project Add alias IP ranges Overview Configure alias IP ranges Bring your own IP addresses (BYOIP) Overview Planning and architecture Create a public advertised prefix Create public delegated prefixes Create IPv4 sub-prefixes and IP addresses Create and use IPv6 sub-prefixes Manage BGP announcement Deprovision BYOIP Add routes Routes overview Static routes overview Use routes Add policy-based routes Overview Use policy-based-routes Change MTU Overview Change MTU of a VPC network Create and verify a jumbo frame MTU network Access IPv4 destinations from IPv6-only instances Overview Configure IPv6-only subnets and instances with DNS64 and NAT64 Configure VMs Add network tags Add VMs with multiple network interfaces Overview Create VMs with multiple network interfaces Configure Dynamic NICs Add Dynamic NICs Delete Dynamic NICs Configure routing for an additional network interface Troubleshoot Add capabilities Network Connectivity Center VPC Network Peering Overview About peering connections Set up and manage VPC Network Peering Peer two VPC networks Shared VPC Overview Provision Shared VPC Deprovision Shared VPC Hybrid Subnets About migrating to Google Cloud with Hybrid Subnets Prepare for Hybrid Subnets connectivity Migrate to Google Cloud with Hybrid Subnets Disable hybrid subnet routing Internal ranges Overview Create and use internal ranges Network profiles for specific use cases Overview RDMA network profiles Create a VPC network for RDMA NICs View network profiles Access APIs and services Choose a private access option Private Service Connect Overview Compatibility Deployment patterns Architecture Security Create and access your own service Overview Create a load-balanced service Make the service accessible to other VPC networks Access the service from another VPC network Service consumers Endpoints Published services About accessing published services Access published services Manage endpoints that access published services Global Google APIs About accessing global Google APIs Access global Google APIs Regional Google APIs About accessing regional Google APIs Access regional Google APIs About propagated connections Backends About backends Create a backend Access published services Access regional Google APIs Access global Google APIs Network attachments About network attachments Create network attachments Configure security Service connection policies About service connectivity automation About service connection policies Configure connectivity to services Configure service connection policies Deploy service instances Manage consumer security Service producers Published services About published services About controlling access to published services Publish services Manage published services DNS configuration for services Private Service Connect health About Private Service Connect health Configure Private Service Connect health for failover View, update, and delete Private Service Connect health configurations Port mapping About port mapping Create port mapping services Update port mapping services Migrate peering services to Private Service Connect About migrating peering services Migrate peering services Interfaces About interfaces Create interfaces Configure routing Configure security Manage destination overlap Manage producer security Monitor connections Private Google Access Overview Configure Private Google Access Private Google Access for on-premises hosts Overview Configure Private Google Access for on-premises hosts Access APIs from VMs with external IP addresses Private services access Overview Configure private services access Send serverless traffic to a VPC network Overview Configure serverless traffic Monitor VPC Flow Logs Overview About VPC Flow Logs records About traffic flows Configure VPC Flow Logs Configure organization policy constraints Access flow logs Audit logging VPC audit logging Private services access audit logging Serverless VPC Access audit logging Packet Mirroring Overview Use Packet Mirroring Monitor Packet Mirroring Packet Mirroring partner providers Control access Manage resources by using custom constraints Create and manage tags for VPC resources Troubleshoot Troubleshoot internal connectivity between VMs Troubleshoot policy and access problems Advanced topics Advanced VPC concepts Legacy networks Overview Manage legacy networks AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Choosing a Private Service Connect feature Private Service Connect types Endpoints Backends Interfaces Private Service Connect managed services Published services Google APIs Private Service Connect characteristics What's next Home Documentation Networking Virtual Private Cloud Guides Was this helpful?
- A connection between a Private Service Connect interface and a network attachment is similar to the connection between a Private Service Connect endpoint and a service attachment , but it has two key differences: A Private Service Connect interface lets a producer VPC network initiate connections to a consumer VPC network (managed service egress).
- Private Service Connect types Private Service Connect is available in different types that provide different capabilities and modes of communication.
- Service producers can initiate connections to service consumers by using Private Service Connect interfaces .

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Quota name: PSC PROPAGATED CONNECTIONS PER VPC NETWORK Available metrics: compute.googleapis.com/quota/psc propagated connections per vpc network/limit compute.googleapis.com/quota/psc propagated connections per vpc network/usage compute.googleapis.com/quota/psc propagated connections per vpc network/exceeded PSC ILB consumer forwarding rules per producer VPC network The maximum number of Private Service Connect endpoints and propagated connections that can access a service producer VPC network.
- Quota name: PSC GOOGLE APIS FORWARDING RULES PER NETWORK Available metrics: compute.googleapis.com/quota/psc google apis forwarding rules per vpc network/limit compute.googleapis.com/quota/psc google apis forwarding rules per vpc network/usage compute.googleapis.com/quota/psc google apis forwarding rules per vpc network/exceeded PSC propagated connections per VPC network The maximum number of Private Service Connect propagated connections that can exist in a consumer's VPC network .
- Propagated connections contribute to this quota until the associated endpoint is deleted, even if connection propagation is disabled on the hub or the propagated connection's spoke is deleted.
- This quota applies to the total number of endpoints and propagated connections that access services in all regions of the service producer VPC network.

