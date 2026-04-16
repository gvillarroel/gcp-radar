---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.496Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC Network Peering custom route import and export"
feature_slug: "vpc-network-peering-custom-route-import-and-export"
latest_feature_date: "2019-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/about-peering-connections"
  - "https://docs.cloud.google.com/vpc/docs/routes"
keywords:
  - "vpc"
  - "network"
  - "peering"
  - "custom"
  - "route"
  - "import"
  - "and"
  - "export"
---

# VPC Network Peering custom route import and export

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

VPC Network Peering now supports importing and exporting custom routes, and this capability is generally available.

## Extended Definition

VPC Network Peering now supports importing and exporting custom routes, and this capability is generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/about-peering-connections](https://docs.cloud.google.com/vpc/docs/about-peering-connections)
- [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)

## Supporting Pages

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Route type Route export conditions Route import conditions Dynamic IPv4 routes Not exported by default Export is controlled by using the --export-custom-routes flag Not imported by default Import is controlled by using the --import-custom-routes flag Dynamic IPv6 routes Not exported by default Export is controlled by using the --export-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Not imported by default Import is controlled by using the --import-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Benefits of exchanging static and dynamic routes When one VPC network exports static and dynamic routes and the other VPC network imports those routes, the importing network can send packets directly to the next hop for each imported static or dynamic route whose next hop is in the peer VPC network.
- Local VPC network and peer VPC network with on-premises connectivity In this example, the following network peering is set up: network-a is peered to network-b , and network-b is peered to network-a . network-a contains two subnets where each subnet is in a separate region. network-b contains a single subnet. network-b is connected to an on-premises network with Cloud VPN tunnels by using dynamic routing. (The same principles hold if the tunnels are replaced with Cloud Interconnect VLAN attachments.) The peering connection for network-b is configured with the --export-custom-routes flag, and the peering connection for network-a is configured with the --import-custom-routes flag.
- To provide a path from the peered VPC network to the on-premises network, a network administrator for the local VPC network enables custom route export, and a network administrator for the peered VPC network enables custom route import.
- Route type Route export conditions Route import conditions Static routes with network tags (all next hop types ) Can't be exported Can't be imported Static routes that use the default internet gateway next hop Can't be exported Can't be imported IPv4 static routes—without network tags—that use a next hop different from default internet gateway Not exported by default Export is controlled by using the --export-custom-routes flag Not imported by default Import is controlled by using the --import-custom-routes flag IPv6 static routes—without network tags—that use a VM instance as the next hop Not exported by default Export is controlled by using the --export-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Not imported by default Import is controlled by using the --import-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Options for exchanging dynamic routes The following table describes the route exchange options for dynamic routes .

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 261
- Re-rank relevance: N/A

Evidence snippets:
- Resources that reference the network include VPC Network Peering connections , Cloud VPN gateways , Cloud Routers , Serverless VPC Access connectors and their connected services, firewall rules , and custom static routes .
- NAME SUBNET MODE BGP ROUTING MODE IPV4 RANGE GATEWAY IPV4 custom-network CUSTOM REGIONAL default AUTO REGIONAL legacy-network1 LEGACY REGIONAL 10.240.0.0/16 10.240.0.1 To describe a network and view its details, such as peering connections and subnets, use the networks describe command . gcloud compute networks describe NETWORK Replace NETWORK with the name of the network.
- Select a VPC network to view its details, such as its peering connections and subnets. gcloud To list the networks in your project, use the networks list command . gcloud compute networks list The command lists all of your VPC and legacy networks.
- Click Create . gcloud Use the networks create command . gcloud compute networks create NETWORK \ --subnet-mode=custom \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.

### "About peering connections \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-peering-connections](https://docs.cloud.google.com/vpc/docs/about-peering-connections)
- Source ID: `site-docs-root-2`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Your network Peer network import custom route export custom route export custom route import custom route import subnet routes with public ip export subnet routes with public ip export subnet routes with public ip import subnet routes with public ip stack type stack type Pending requests to update the connection mode don't cause downtime, and the connection remains active while your request is in progress.
- For example, if your network imports custom routes, the other network must export custom routes.
- VPC Network Peering supports two connection modes: Independent mode (default) Consensus mode For standard deployments, independent mode is generally preferred.
- After the peering connection is established, the two VPC networks always exchange IPv4 subnet routes that use private IPv4 address ranges.

### Routes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom route category What happens Local dynamic and local static routes If your route model contains at least one local dynamic or local static route for the destination, Google Cloud removes the following custom route types, if they are present in the route model: NCC dynamic routes from hybrid spokes, in different VPC networks Peering dynamic routes (imported from other VPC networks connected using VPC Network Peering) NCC dynamic routes If all of the following conditions are met, Google Cloud removes all peering dynamic and peering static routes from the route model: Your route model doesn't contain any local custom routes for the destination Your route mode does contain at least one NCC dynamic route for the destination The NCC dynamic route comes from from a hybrid spoke in a different VPC network Peering dynamic and peering static routes The least favorable custom route type contains peering custom routes.
- Peering dynamic routes that are imported with custom route exchange from networks connected using VPC Network Peering .
- Google Cloud uses an internal algorithm to import peering custom routes from a single VPC network.
- If a local, peering, or NCC subnet route exists with the 2001:0db8:0a0b:0c0d::/64 destination, and if a Cloud Router in the VPC network, a peered VPC network, or a network containing a NCC hybrid spoke receives 2001:0db8:0a0b:0c0d::/96 , 2001:0db8:0a0b:0c0d::/64 , or any other prefix that fits within 2001:0db8:0a0b:0c0d::/64 , Google Cloud doesn't create any local, peering, or NCC dynamic routes for the received conflicting prefixes.

