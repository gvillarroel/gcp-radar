---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:13.183Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Protocol Forwarding"
feature_slug: "protocol-forwarding"
latest_feature_date: "2013-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/release-notes"
  - "https://docs.cloud.google.com/vpc/docs/routes"
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

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/release-notes](https://docs.cloud.google.com/vpc/docs/release-notes)
- [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)

## Supporting Pages

### VPC release notes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/release-notes](https://docs.cloud.google.com/vpc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Protocol forwarding provides support for these additional features: AH : IP Authentication Header protocol ESP : IP Encapsulating Security Payload protocol SCTP : Stream Control Transmission protocol Feature Added support for new Target Instance resources , which allows for non-NAT'ed traffic to be forwarded to a single virtual machine instance.
- Forwarding rules allows you to forward traffic to a single virtual machine instance, using a target.instance.
- Change Introduced new default firewall rule that will be created with each new project. default-allow-icmp - Allows ICMP traffic from any source to any instance on the network.
- New projects will have the same default firewalls but with the following new names: default-allow-internal - Allows network connections of any protocol and port between any two instances. default-allow-ssh - Allows TCP connections from any source to any instance on the network, over port 22.

### Routes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Each forwarding rule for an external passthrough Network Load Balancer or for external protocol forwarding also provides a routing path for its backend VMs or target instance to send packets to destinations outside of the VPC network: Packets sent by backend VMs or target instances can be either outbound response packets (sent back to the client) or they can be outbound packets that initiate a new connection.
- Paths for external passthrough Network Load Balancers and external protocol forwarding External passthrough Network Load Balancers and external protocol forwarding use Maglev systems to route packets from clients on the internet to backend VMs and target instances in your VPC network.
- The absence of a default route doesn't necessarily isolate your network from the internet because special routing paths for external passthrough Network Load Balancers and external protocol forwarding don't depend on a default route.
- Packet protocol and source port don't have to match the forwarding rule's protocol and port specification.

### Subnets \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Internal subnet /64 IPv6 ranges can be used by the following, regardless of the type of addresses: Internal /96 IPv6 address ranges of VM network interfaces Internal /96 IPv6 address ranges of forwarding rules for the following: Internal protocol forwarding Internal passthrough Network Load Balancers Private Service Connect endpoints Internal /96 IPv6 address ranges can be assigned in the following ways: If not specified, Google Cloud automatically assigns an ephemeral internal IPv6 /96 address range.
- Forwarding rule for an internal passthrough Network Load Balancer, external passthrough Network Load Balancer, or protocol forwarding /96 or specified by a BYOIP sub-prefix The IPv6 address range of a forwarding rule for internal protocol forwarding or an internal passthrough Network Load Balancer is an internal /96 IP address range from a subnet's internal IPv6 address range.
- Stack type Subnet ranges Compatible VM network interfaces IPv4-only (single-stack) Only IPv4 subnet ranges IPv4-only interfaces IPv4 and IPv6 (dual-stack) Both IPv4 and IPv6 subnet ranges IPv4-only, dual-stack, and IPv6-only interfaces IPv6-only (single-stack) Only IPv6 subnet ranges IPv6-only interfaces When you create a subnet, you specify which stack type to use.
- The IPv6 address range of a forwarding rule for external protocol forwarding or an external passthrough Network Load Balancer is one of the following: If using Google-provided external IPv6 addresses, the IPv6 address range is an external /96 address range selected automatically by Google Cloud from a subnet's external IPv6 address range.

