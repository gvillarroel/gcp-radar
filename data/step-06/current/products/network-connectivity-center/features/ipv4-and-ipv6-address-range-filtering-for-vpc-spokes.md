---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.936Z"
product_name: "Network Connectivity Center"
product_slug: "network-connectivity-center"
feature_name: "IPv4 and IPv6 address range filtering for VPC spokes"
feature_slug: "ipv4-and-ipv6-address-range-filtering-for-vpc-spokes"
latest_feature_date: "2025-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview"
keywords:
  - "ipv4"
  - "and"
  - "ipv6"
  - "address"
  - "range"
  - "filtering"
  - "for"
  - "vpc"
---

# IPv4 and IPv6 address range filtering for VPC spokes

Product: Network Connectivity Center
Coverage: MEDIUM

## Step 02 Summary

VPC spokes can export configurable IPv4 and IPv6 address ranges to a hub.

## Extended Definition

VPC spokes can export configurable IPv4 and IPv6 address ranges to a hub.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product](https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview)

## Supporting Pages

### "Route exchange with VPC spokes \_|\_ Network Connectivity Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)
- Source ID: `site-iam-reference`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- The custom ranges can be a list of all subnet IPv4 address ranges of the VPC spokes on the hub, or you can use larger CIDRs that contain the subnet IPv4 address ranges of the VPC spokes.
- The on-premises routers advertise the 192.168.44.10/24 IP address range: Using MED 10 to the BGP sessions for the west-a and east-a VLAN attachments.
- A network administrator for the routing VPC network can advertise custom address ranges on the Cloud Routers for the hybrid spokes.
- In the routing VPC network, each region's Cloud Router dynamic route control plane and VPC control plane work together to create the following local dynamic routes for 192.168.44.10/24 in each region: In the us-west1 region, two local dynamic routes have next hops in the region and one next hop in the us-east1 region: The dynamic route with priority 10 uses the west-a VLAN attachment next hop.

### NCC overview \_|\_ Network Connectivity Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- IP addressing IP version support depends on the spoke type: VPC spokes : NCC supports the following IP versions: IPv4 and IPv6 for the exchange of subnet ranges.
- VPC spokes and VPC Network Peering NCC VPC spokes support exchanging the following: Valid IPv4 subnet ranges IPv6 subnet ranges IPv4 dynamic routes VPC spokes don't support exchanging the following: Peering subnet routes Local routes with privately used public IPv4 addresses Local subnet routes with IPv6 addresses VPC spokes don't exchange static routes; however, VPC spokes can import NCC IPv4 dynamic routes from hybrid spokes that are on the same NCC hub.
- You can configure each VPC spoke to export subnet ranges as follows: Only IPv4 subnet ranges Both IPv4 and IPv6 subnet ranges Only IPv6 subnet ranges Consider a spoke whose VPC network has a mix of subnet stack types .
- You can configure VPC spokes to exchange only IPv4 subnet ranges, only IPv6 subnet ranges, or both IPv4 and IPv6 subnet ranges.

### Choosing a Network Connectivity product \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product](https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Features Verified Peering Providers offer the following features: Simplified connectivity No need to meet Google's peering requirements Leave the complexities of peering arrangements to the Verified Peering Providers Spend less time deploying and managing the technical complexities of the Direct Peering arrangement Acquire IP address transit or dedicated internet access from a Verified Peering Provider and let the Verified Peering Provider handle the peering with Google High availability Google badge verifies redundant connectivity to Google Gold badge indicates metro redundancy; silver indicates points of presence (PoPs) redundancy For redundant connectivity details, see Google Edge Network Enterprise grade connectivity Connect to Google through internet products designed for enterprises Access Google with or without the need for border gateway protocol (BGP) or an autonomous system number (ASN) Work directly with internet service provider (ISP) customer services teams and operational escalations Dedicated private Google connectivity All Google connectivity is through private dedicated fiber optics Leverage the same Google fibers that carry all Google services Access all Google services Access to Google Cloud services includes Google Workspace, Cloud APIss, Cloud VPN, public IP addresses, Network Service Tiers, and more Any Google service that is reachable over the internet can be used with a Verified Peering Provider Compare Verified Peering Provider and Cloud Interconnect The following table describes the differences between Verified Peering Provider and Cloud Interconnect.
- Verified Peering Providers offer a variety of internet services designed for enterprises, ranging from business-class internet access to high-bandwidth IP address transit.
- Dedicated Interconnect and Partner Interconnect Network Connectivity provides two options for extending your on-premises network to your VPC networks in Google Cloud.
- To change the destination IP address ranges for your on-premises network, adjust the routes that your routers share with Cloud Routers in your project.

### "Producer VPC spokes \_|\_ Network Connectivity Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Ensure that the IP address ranges of the VPC spokes on your hub don't overlap with an allocated IP range configured for private services access.
- Avoid overlap with allocated IP ranges If you want to create a producer VPC spoke for a supported service offered through private services access, consider the following: NCC does not check for overlaps with allocated IP ranges.
- If your VPC spokes overlap with allocated IP ranges, private services access might not be able to create new resources when needed and you'll get an error.
- Then, NCC uses that information to identify the VPC network of the service producer and add a corresponding producer VPC spoke to a hub in your project.

