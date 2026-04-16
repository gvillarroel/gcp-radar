---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.494Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Packet Mirroring"
feature_slug: "packet-mirroring"
latest_feature_date: "2020-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/quota"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping"
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces"
keywords:
  - "packet"
  - "mirroring"
  - "reached"
  - "general"
  - "availability"
  - "in"
  - "virtual"
  - "private"
---

# Packet Mirroring

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Packet Mirroring reached General Availability in Virtual Private Cloud; Packet Mirroring allows administrators to capture and replicate network traffic for inspection, analysis, and security monitoring.

## Extended Definition

Packet Mirroring reached General Availability in Virtual Private Cloud; Packet Mirroring allows administrators to capture and replicate network traffic for inspection, analysis, and security monitoring.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping)
- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces)

## Supporting Pages

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- In network-d : max(400,300) = 400 List of maxima for direct peers: network-c : max(300,300) = 300 Minimum of the list of direct peers: min(300) = 300 Effective limit for INTERNAL FORWARDING RULES PER PEERING GROUP in network-d : max(400,300) = 400 Manage quotas Virtual Private Cloud enforces quotas on resource usage for various reasons.
- Home Documentation Networking Virtual Private Cloud Resources Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Packet Mirrorings The number of Packet Mirroring policies that you can create in your project, in any network and region.
- Quotas and limits This document lists the quotas and limits that apply to Virtual Private Cloud (VPC) networking.

### "About accessing published services through endpoints \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Packet Mirroring can't mirror packets for Private Service Connect published services traffic.
- Home Documentation Networking Virtual Private Cloud Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Producer type Producer configuration (published service) Supported producer backends PROXY protocol (TCP traffic only) IP version Cross-region internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups IPv4 Internal passthrough Network Load Balancer GCE VM IP zonal NEGs Instance groups IPv4 IPv6 Internal protocol forwarding (target instance) Not applicable IPv4 IPv6 Port mapping services Port mapping NEG IPv4 IPv6 Regional internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups Regional internet NEGs IPv4 Regional internal proxy Network Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Private Service Connect NEGs Instance groups IPv4 Secure Web Proxy Not applicable IPv4 Different load balancers support different port configurations; some load balancers support a single port, some support a range of ports, and some support all ports.
- The following combinations are possible for supported configurations : IPv4 endpoint to IPv4 service attachment IPv6 endpoint to IPv6 service attachment IPv6 endpoint to IPv4 service attachment In this configuration, Private Service Connect automatically translates between the two IP versions.

### "About Private Service Connect port mapping \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping)
- Source ID: `site-docs-root-2`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- Private Service Connect port mapping lets consumer VMs communicate with specific producer VMs through the following process: The consumer VM sends packets to the endpoint's IP address, using a designated client destination port.
- Private Service Connect port mapping lets consumer virtual machine (VM) instances privately communicate with specific service ports on specific producer VMs through a single Private Service Connect endpoint.
- Home Documentation Networking Virtual Private Cloud Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Private Service Connect uses the mapping of the client destination port that receives the traffic to determine the packet's destination.

### "About Private Service Connect interfaces \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces)
- Source ID: `site-docs-root-2`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- The main differences between virtual and dynamic Private Service Connect interfaces are described in the following table: Type Max Private Service Connect interfaces per VM Interface management Supported guest OS Virtual Private Service Connect interface Up to 9 ( depends on number of vCPUs ) Added at VM creation time; removed with VM deletion Linux, Windows Dynamic Private Service Connect interface Up to 15 ( depends on number of vCPUs ) Added at any time; can be removed independently of VM Linux only Consider using virtual Private Service Connect interfaces when you expect your interface configuration to remain unchanged throughout the VM's lifecycle.
- Private Service Connect interface types There are two types of Private Service Connect interfaces: Virtual Private Service Connect interfaces are based on the virtual network interfaces (vNICs) that are used by Compute Engine VMs.
- A Private Service Connect interface is a resource that lets a producer Virtual Private Cloud (VPC) network initiate connections to various destinations in a consumer VPC network.
- Home Documentation Networking Virtual Private Cloud Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

