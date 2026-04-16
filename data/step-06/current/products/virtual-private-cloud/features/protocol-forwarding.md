---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.506Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Protocol Forwarding"
feature_slug: "protocol-forwarding"
latest_feature_date: "2013-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services"
  - "https://docs.cloud.google.com/vpc/docs/routes"
  - "https://docs.cloud.google.com/vpc/docs/about-flow-logs-records"
  - "https://docs.cloud.google.com/vpc/docs/subnets"
keywords:
  - "protocol"
  - "forwarding"
  - "introduced"
  - "which"
  - "allows"
  - "traffic"
  - "to"
  - "single"
---

# Protocol Forwarding

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Introduced protocol forwarding, which allows forwarding traffic to a single VM instance via forwarding rules and added support for AH, ESP, and SCTP protocols.

## Extended Definition

Introduced protocol forwarding, which allows forwarding traffic to a single VM instance via forwarding rules and added support for AH, ESP, and SCTP protocols.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- [https://docs.cloud.google.com/vpc/docs/about-flow-logs-records](https://docs.cloud.google.com/vpc/docs/about-flow-logs-records)
- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)

## Supporting Pages

### "About published services \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Producer type Producer configuration (published service) Supported producer backends PROXY protocol (TCP traffic only) IP version Cross-region internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups IPv4 Internal passthrough Network Load Balancer GCE VM IP zonal NEGs Instance groups IPv4 IPv6 Internal protocol forwarding (target instance) Not applicable IPv4 IPv6 Port mapping services Port mapping NEG IPv4 IPv6 Regional internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups Regional internet NEGs IPv4 Regional internal proxy Network Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Private Service Connect NEGs Instance groups IPv4 Secure Web Proxy Not applicable IPv4 Different load balancers support different port configurations; some load balancers support a single port, some support a range of ports, and some support all ports.
- Producer type Producer configuration (published service) Supported producer backends Forwarding rule protocols Forwarding rule ports PROXY protocol IP version Private Service Connect health support Cross-region internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups TCP HTTP HTTPS HTTP/2 gRPC Supports one, multiple, or all ports IPv4 Internal passthrough Network Load Balancer GCE VM IP zonal NEGs Instance groups TCP See Producer port configuration IPv4 Regional internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups HTTP HTTPS HTTP/2 Supports a single port IPv4 Regional internal proxy Network Load Balancer Note: Connections from consumer global external Application Load Balancers aren't supported.
- Target producer Consumer configuration (endpoint) Consumer global access Hybrid access Automatic DNS configuration (IPv4-only) VPC Network Peering access NCC connection propagation (IPv4 only) Supported target services for IPv4 endpoints Supported target services for IPv6 endpoints Cross-region internal Application Load Balancer IPv4 services IPv4 services Internal passthrough Network Load Balancer Only if global access is enabled on the load balancer ( known issue ) IPv4 services IPv4 services IPv6 services Internal protocol forwarding (target instance) Only if global access is enabled on the producer forwarding rule ( known issue ) IPv4 services IPv4 services IPv6 services Port mapping services Only if global access is enabled on the producer forwarding rule IPv4 services IPv4 services IPv6 services Regional internal Application Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Regional internal proxy Network Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Secure Web Proxy IPv4 services IPv4 services Producer configuration This table summarizes the supported configuration options and capabilities of published services that are accessed by endpoints.
- Original target service New target service Internal passthrough Network Load Balancer Internal protocol forwarding (target instance) Port mapping services Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Cross-region internal Application Load Balancer Secure Web Proxy Internal passthrough Network Load Balancer Internal protocol forwarding (target instance) Port mapping services Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Cross-region internal Application Load Balancer Secure Web Proxy Shared VPC Service Project Admins can create service attachments in Shared VPC service projects that connect to resources in Shared VPC networks .

### Routes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Each forwarding rule for an external passthrough Network Load Balancer or for external protocol forwarding also provides a routing path for its backend VMs or target instance to send packets to destinations outside of the VPC network: Packets sent by backend VMs or target instances can be either outbound response packets (sent back to the client) or they can be outbound packets that initiate a new connection.
- Paths for external passthrough Network Load Balancers and external protocol forwarding External passthrough Network Load Balancers and external protocol forwarding use Maglev systems to route packets from clients on the internet to backend VMs and target instances in your VPC network.
- The absence of a default route doesn't necessarily isolate your network from the internet because special routing paths for external passthrough Network Load Balancers and external protocol forwarding don't depend on a default route.
- Packet protocol and source port don't have to match the forwarding rule's protocol and port specification.

### "About VPC Flow Logs records \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-flow-logs-records](https://docs.cloud.google.com/vpc/docs/about-flow-logs-records)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- For example, the connection field is of the IpConnection format, which contains the source and destination IP address and port, plus the protocol, in a single field.
- The reporter of the Private Service Connect traffic is a producer and is using an internal passthrough Network Load Balancer or internal protocol forwarding.
- Metadata load balancing LoadBalancingDetails If the flow passes through a load balancer in one of the following configurations, this field is populated with Cloud Load Balancing details: The reporter of the flow is the client of the load balancer, and the load balancer type is APPLICATION LOAD BALANCER , PROXY NETWORK LOAD BALANCER , PASSTHROUGH NETWORK LOAD BALANCER , or PROTOCOL FORWARDING .
- Can be APPLICATION LOAD BALANCER , PROXY NETWORK LOAD BALANCER , PASSTHROUGH NETWORK LOAD BALANCER , or PROTOCOL FORWARDING . scheme string Load balancer scheme.

### Subnets \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Internal subnet /64 IPv6 ranges can be used by the following, regardless of the type of addresses: Internal /96 IPv6 address ranges of VM network interfaces Internal /96 IPv6 address ranges of forwarding rules for the following: Internal protocol forwarding Internal passthrough Network Load Balancers Private Service Connect endpoints Internal /96 IPv6 address ranges can be assigned in the following ways: If not specified, Google Cloud automatically assigns an ephemeral internal IPv6 /96 address range.
- Forwarding rule for an internal passthrough Network Load Balancer, external passthrough Network Load Balancer, or protocol forwarding /96 or specified by a BYOIP sub-prefix The IPv6 address range of a forwarding rule for internal protocol forwarding or an internal passthrough Network Load Balancer is an internal /96 IP address range from a subnet's internal IPv6 address range.
- Stack type Subnet ranges Compatible VM network interfaces IPv4-only (single-stack) Only IPv4 subnet ranges IPv4-only interfaces IPv4 and IPv6 (dual-stack) Both IPv4 and IPv6 subnet ranges IPv4-only, dual-stack, and IPv6-only interfaces IPv6-only (single-stack) Only IPv6 subnet ranges IPv6-only interfaces When you create a subnet, you specify which stack type to use.
- The IPv6 address range of a forwarding rule for external protocol forwarding or an external passthrough Network Load Balancer is one of the following: If using Google-provided external IPv6 addresses, the IPv6 address range is an external /96 address range selected automatically by Google Cloud from a subnet's external IPv6 address range.

