---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.487Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Shared VPC non-primary VM interface attachment for instance templates and managed instance groups"
feature_slug: "shared-vpc-non-primary-vm-interface-attachment-for-instance-templates-and-managed-instance-groups"
latest_feature_date: "2021-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/about-network-attachments"
  - "https://docs.cloud.google.com/vpc/docs/routes"
keywords:
  - "shared"
  - "vpc"
  - "non"
  - "primary"
  - "vm"
  - "interface"
  - "attachment"
  - "for"
---

# Shared VPC non-primary VM interface attachment for instance templates and managed instance groups

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Allows VM instances created from instance templates or managed instance groups to attach network interfaces other than nic0 when connected to Shared VPC.

## Extended Definition

Allows VM instances created from instance templates or managed instance groups to attach network interfaces other than nic0 when connected to Shared VPC.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/about-network-attachments](https://docs.cloud.google.com/vpc/docs/about-network-attachments)
- [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)

## Supporting Pages

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Costs for traffic from a resource in a Shared VPC service project that transfers out through a VLAN attachment are attributed to the project that owns the VLAN attachment.
- Service Project Admins When defining each Service Project Admin, a Shared VPC Admin can grant permission to use the whole host project or just some subnets: Project-level permissions : A Service Project Admin can be defined to have permission to use all subnets in the host project if the Shared VPC Admin grants the role of compute.networkUser for the whole host project to the Service Project Admin.
- Shared VPC Admin ( compute.xpnAdmin and resourcemanager.projectIamAdmin ) • IAM principal in the organization, or • IAM principal in a folder Shared VPC Admins have the Compute Shared VPC Admin ( compute.xpnAdmin ) and Project IAM Admin ( resourcemanager.projectIamAdmin ) roles for the organization or one or more folders.
- The Shared VPC Admin has granted subnet-level or project-level permissions to the necessary Service Project Admins so they can create instances that use the Shared VPC network: A Service Project Admin for Service project A who has subnet-level permissions to the 10.0.1.0/24 subnet can create Instance A in it.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Route advertisements and internal IP addresses The following IP addresses are advertised within a VPC network: Regional internal IPv4 addresses Used for primary and secondary IPv4 subnet address ranges Regional internal and external IPv6 addresses Used for internal and external IPv6 subnet address ranges Global internal IPv4 addresses Used for Private Service Connect endpoints for Google APIs If you connect VPC networks using VPC Network Peering, subnet ranges using private IPv4 addresses are always exchanged.
- The primary internal addresses for the following resources come from the subnet's primary range: VM instances, internal load balancers, and internal protocol forwarding.
- Maximum transmission unit For more information about the maximum transmission unit (MTU) setting for a VPC network and its connected VMs, see Maximum transmission unit .
- For information about changing the MTU of a VPC network, or migrating VMs between VPC networks with different MTU settings, see Change the MTU setting of a VPC network .

### "About network attachments \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-network-attachments](https://docs.cloud.google.com/vpc/docs/about-network-attachments)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A connection between a network attachment and a Private Service Connect interface is similar to the connection between a Private Service Connect endpoint and a service attachment , but it has two key differences: A network attachment lets a producer VPC network initiate connections to a consumer VPC network (managed service egress).
- A network attachment is a resource that lets a producer Virtual Private Cloud (VPC) network initiate connections to a consumer VPC network through a Private Service Connect interface .
- A network attachment in a consumer VPC network is connected to two Private Service Connect interfaces in a producer VPC network (click to enlarge).
- Connections When a network attachment accepts a connection request from a Private Service Connect interface, a logical connection is formed.

### Routes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the following: How Cloud Router works Learned routes The next hop of a dynamic route can be one of the following: A VLAN attachment backed by either a Dedicated Interconnect connection or a Partner Interconnect connection A Cloud VPN tunnel, either a HA VPN tunnel or a Classic VPN configured to use dynamic routing A Router appliance VM instance If a next hop for a dynamic route becomes inaccessible, the Cloud Router that manages its BGP session instructs the VPC network to remove the dynamic route.
- An option to skip evaluating other policy-based routes An internal passthrough Network Load Balancer Policy-based routes can apply to all VMs in the network, to certain VMs selected by network tag, or to traffic entering the VPC network through VLAN attachments for Cloud Interconnect (in only one region, or in all regions).
- Dynamic route with nonfunctional next hop : Even before the BGP session responsible for programming a dynamic route goes down, Google Cloud disregards a dynamic route if its next hop Cloud VPN tunnel, VLAN attachment, or Router appliance VM isn't functional.
- The following route types always apply to all VM instances, VLAN attachments, and Cloud VPN tunnels: Special routing paths Subnet routes The following route types can be configured to apply only to certain VM instances, VLAN attachments, or Cloud VPN tunnels: Policy-based routes can apply to: All VM instances, VLAN attachments, and Cloud VPN tunnels Only VM instances identified by network tags Only VLAN attachments in a particular region Static routes can apply to: All VM instances, VLAN attachments, and Cloud VPN tunnels Only VM instances identified by network tags Dynamic routes can apply to VM instances, VLAN attachments, and Cloud VPN tunnels in either the region containing the dynamic route's next hop or all regions, based on the dynamic routing mode of the VPC network.

