---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:13.131Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Connection reconciliation for Private Service Connect service attachments"
feature_slug: "connection-reconciliation-for-private-service-connect-service-attachments"
latest_feature_date: "2023-08-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/private-service-connect"
  - "https://docs.cloud.google.com/vpc/docs/release-notes"
  - "https://docs.cloud.google.com/vpc/docs/apis"
keywords:
  - "connection"
  - "reconciliation"
  - "for"
  - "private"
  - "connect"
  - "attachments"
  - "is"
  - "now"
---

# Connection reconciliation for Private Service Connect service attachments

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Connection reconciliation is now available for Private Service Connect service attachments, allowing changes to consumer accept or reject lists to affect existing connections as well as new and pending ones.

## Extended Definition

Connection reconciliation is now available for Private Service Connect service attachments, allowing changes to consumer accept or reject lists to affect existing connections as well as new and pending ones.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- [https://docs.cloud.google.com/vpc/docs/release-notes](https://docs.cloud.google.com/vpc/docs/release-notes)
- [https://docs.cloud.google.com/vpc/docs/apis](https://docs.cloud.google.com/vpc/docs/apis)

## Supporting Pages

### Private Service Connect \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Virtual Private Cloud Start free Overview Guides Reference Resources More Technology areas More Overview Guides Reference Resources Cross-product tools More Console Discover Virtual Private Cloud overview Get started VPC networks Subnets IPv6 support Create and manage VPC networks Add networking features Add IP addresses Overview Reserve internal IP addresses Reserve external IP addresses Move an external IPv4 address to a different project Add alias IP ranges Overview Configure alias IP ranges Bring your own IP addresses (BYOIP) Overview Planning and architecture Create a public advertised prefix Create public delegated prefixes Create IPv4 sub-prefixes and IP addresses Create and use IPv6 sub-prefixes Manage BGP announcement Deprovision BYOIP Add routes Routes overview Static routes overview Use routes Add policy-based routes Overview Use policy-based-routes Change MTU Overview Change MTU of a VPC network Create and verify a jumbo frame MTU network Access IPv4 destinations from IPv6-only instances Overview Configure IPv6-only subnets and instances with DNS64 and NAT64 Configure VMs Add network tags Add VMs with multiple network interfaces Overview Create VMs with multiple network interfaces Configure Dynamic NICs Add Dynamic NICs Delete Dynamic NICs Configure routing for an additional network interface Troubleshoot Add capabilities Network Connectivity Center VPC Network Peering Overview About peering connections Set up and manage VPC Network Peering Peer two VPC networks Shared VPC Overview Provision Shared VPC Deprovision Shared VPC Hybrid Subnets About migrating to Google Cloud with Hybrid Subnets Prepare for Hybrid Subnets connectivity Migrate to Google Cloud with Hybrid Subnets Disable hybrid subnet routing Internal ranges Overview Create and use internal ranges Network profiles for specific use cases Overview RDMA network profiles Create a VPC network for RDMA NICs View network profiles Access APIs and services Choose a private access option Private Service Connect Overview Compatibility Deployment patterns Architecture Security Create and access your own service Overview Create a load-balanced service Make the service accessible to other VPC networks Access the service from another VPC network Service consumers Endpoints Published services About accessing published services Access published services Manage endpoints that access published services Global Google APIs About accessing global Google APIs Access global Google APIs Regional Google APIs About accessing regional Google APIs Access regional Google APIs About propagated connections Backends About backends Create a backend Access published services Access regional Google APIs Access global Google APIs Network attachments About network attachments Create network attachments Configure security Service connection policies About service connectivity automation About service connection policies Configure connectivity to services Configure service connection policies Deploy service instances Manage consumer security Service producers Published services About published services About controlling access to published services Publish services Manage published services DNS configuration for services Private Service Connect health About Private Service Connect health Configure Private Service Connect health for failover View, update, and delete Private Service Connect health configurations Port mapping About port mapping Create port mapping services Update port mapping services Migrate peering services to Private Service Connect About migrating peering services Migrate peering services Interfaces About interfaces Create interfaces Configure routing Configure security Manage destination overlap Manage producer security Monitor connections Private Google Access Overview Configure Private Google Access Private Google Access for on-premises hosts Overview Configure Private Google Access for on-premises hosts Access APIs from VMs with external IP addresses Private services access Overview Configure private services access Send serverless traffic to a VPC network Overview Configure serverless traffic Monitor VPC Flow Logs Overview About VPC Flow Logs records About traffic flows Configure VPC Flow Logs Configure organization policy constraints Access flow logs Audit logging VPC audit logging Private services access audit logging Serverless VPC Access audit logging Packet Mirroring Overview Use Packet Mirroring Monitor Packet Mirroring Packet Mirroring partner providers Control access Manage resources by using custom constraints Create and manage tags for VPC resources Troubleshoot Troubleshoot internal connectivity between VMs Troubleshoot policy and access problems Advanced topics Advanced VPC concepts Legacy networks Overview Manage legacy networks AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Choosing a Private Service Connect feature Private Service Connect types Endpoints Backends Interfaces Private Service Connect managed services Published services Google APIs Private Service Connect characteristics What's next Home Documentation Networking Virtual Private Cloud Guides Was this helpful?
- Backends let you create configurations such as the following: Customer-owned domains and certificates in front of managed services Consumer-controlled failover between managed services in different regions Centralized security configuration and access control for managed services The following diagram shows an internal Application Load Balancer deployed with Private Service Connect backends that reference a published service.
- A connection between a Private Service Connect interface and a network attachment is similar to the connection between a Private Service Connect endpoint and a service attachment , but it has two key differences: A Private Service Connect interface lets a producer VPC network initiate connections to a consumer VPC network (managed service egress).
- Private Service Connect lets you send traffic to endpoints and backends that forward the traffic to managed services, including Google APIs and published services.

### VPC release notes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/release-notes](https://docs.cloud.google.com/vpc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- November 17, 2022 Feature Preview : Connectivity to Private Service Connect endpoints used to access a managed service is supported over VLAN attachments for Cloud Interconnect November 16, 2022 Feature Preview: Private Service Connect endpoints with consumer HTTP(S) controls now support accessing regional Google APIs and managed services using the following load balancers: Regional internal HTTP(S) load balancer Regional external HTTP(S) load balancer November 08, 2022 Feature Preview : You use the private.googleapis.com and restricted.googleapis.com VIPs to access Google APIs and services using IPv6 addresses.
- July 24, 2024 Feature The following producer load balancers now support all Private Service Connect monitoring metrics : Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Feature Predefined dashboards for monitoring Private Service Connect connections have been enhanced: The dashboard for monitoring published services now includes more metrics.
- When connection reconciliation is enabled for a service attachment, updating the service attachment's consumer accept or reject lists affects existing Private Service Connect connections in addition to new and pending connections.
- October 21, 2021 Fixed This issue is now fixed: Connectivity from on-premises hosts to a Private Service Connect endpoint that is used to access published services might not establish for some existing Cloud VPN connections.

### APIs and reference \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/apis](https://docs.cloud.google.com/vpc/docs/apis)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Network attachments: Use to let service producer VPC networks initiate connections to consumer networks. gcloud , API Service connection policies: Use to automate deployment and connectivity for eligible managed service instances. gcloud , API Resources for service producers: Use to host managed services in their own separate VPC networks and offer a private connection to their consumers.
- Service attachments: Use to publish services. gcloud , API Interfaces: Use to let service producer VPC networks initiate connections to consumer VPC networks. gcloud , API Routes : Use to create and modify VPC network routes.
- Manage VPC Flow Logs configurations for subnets: gcloud , API Manage VPC Flow Logs configurations for VLAN attachments for Cloud Interconnect and Cloud VPN tunnels: gcloud , API Was this helpful?
- Virtual Private Cloud Start free Overview Guides Reference Resources More Technology areas More Overview Guides Reference Resources Cross-product tools More Console Virtual Private Cloud (VPC) All APIs and references Serverless VPC Access API Overview v1 REST Resources projects.locations Overview list projects.locations.connectors Overview create delete get list patch projects.locations.operations Overview get list v1beta1 REST Resources projects.locations Overview list projects.locations.connectors Overview create delete get list patch projects.locations.operations Overview get list Types Types GetOperationRequest ListLocationsRequest ListLocationsResponse ListOperationsRequest ListOperationsResponse Regional service endpoints AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page gcloud CLI and API references Home Documentation Networking Virtual Private Cloud Reference Was this helpful?

