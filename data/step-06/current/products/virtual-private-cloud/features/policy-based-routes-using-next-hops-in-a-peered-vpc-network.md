---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.438Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Policy-based routes using next hops in a peered VPC network"
feature_slug: "policy-based-routes-using-next-hops-in-a-peered-vpc-network"
latest_feature_date: "2025-07-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/routes"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks"
keywords:
  - "policy"
  - "based"
  - "routes"
  - "using"
  - "next"
  - "hops"
  - "in"
  - "peered"
---

# Policy-based routes using next hops in a peered VPC network

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Policy-based routes now support using a next hop that resides in a peered VPC network.

## Extended Definition

Policy-based routes now support using a next hop that resides in a peered VPC network.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks)

## Supporting Pages

### Routes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- If your model isn't empty, all routes in your model have these characteristics: Identical preference category Identical priorities Next hops that haven't been disregarded Next hops in one VPC network Identical destinations Route types that aren't policy-based or subnet routes Send or drop packet : Depending on the number of routes remaining in the route model, Google Cloud sends or drops the packet: If your route model contains a single route, Google Cloud sends the packet to the next hop, with the following exception: Next hop internal passthrough Network Load Balancers that don't have global access enabled aren't reachable from regions outside of the load balancer's region.
- If your model isn't empty, all routes in your model have the following characteristics: Identical priorities Next hops that haven't been disregarded Identical destinations Route types that aren't policy-based or subnet routes Select next hops for NCC dynamic routes from a single VPC network : Next hops for the same destination must be located in the same VPC network.
- The following route types always apply to all VM instances, VLAN attachments, and Cloud VPN tunnels: Special routing paths Subnet routes The following route types can be configured to apply only to certain VM instances, VLAN attachments, or Cloud VPN tunnels: Policy-based routes can apply to: All VM instances, VLAN attachments, and Cloud VPN tunnels Only VM instances identified by network tags Only VLAN attachments in a particular region Static routes can apply to: All VM instances, VLAN attachments, and Cloud VPN tunnels Only VM instances identified by network tags Dynamic routes can apply to VM instances, VLAN attachments, and Cloud VPN tunnels in either the region containing the dynamic route's next hop or all regions, based on the dynamic routing mode of the VPC network.
- Local static route Supports various destinations Forwards packets to a static route next hop For details about each static route next hop , see considerations for: Instances and internal passthrough Network Load Balancers Next hop instances Internal passthrough Network Load Balancer next hops Classic VPN tunnel next hops Local dynamic route Destinations that don't conflict with subnet routes or static routes Peer of a BGP session on a Cloud Router Routes are added and removed automatically based on learned routes from Cloud Routers in your VPC network.

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the Use VPC Network Peering sections of the following load balancer documentation: Internal passthrough Network Load Balancers and connected networks Internal proxy Network Load Balancers and connected networks Internal Application Load Balancers and connected networks Peered networks can exchange static routes that use internal passthrough Network Load Balancers as next hops.
- Route type Route export conditions Route import conditions Static routes with network tags (all next hop types ) Can't be exported Can't be imported Static routes that use the default internet gateway next hop Can't be exported Can't be imported IPv4 static routes—without network tags—that use a next hop different from default internet gateway Not exported by default Export is controlled by using the --export-custom-routes flag Not imported by default Import is controlled by using the --import-custom-routes flag IPv6 static routes—without network tags—that use a VM instance as the next hop Not exported by default Export is controlled by using the --export-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Not imported by default Import is controlled by using the --import-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Options for exchanging dynamic routes The following table describes the route exchange options for dynamic routes .
- Route type Route export conditions Route import conditions Dynamic IPv4 routes Not exported by default Export is controlled by using the --export-custom-routes flag Not imported by default Import is controlled by using the --import-custom-routes flag Dynamic IPv6 routes Not exported by default Export is controlled by using the --export-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Not imported by default Import is controlled by using the --import-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Benefits of exchanging static and dynamic routes When one VPC network exports static and dynamic routes and the other VPC network imports those routes, the importing network can send packets directly to the next hop for each imported static or dynamic route whose next hop is in the peer VPC network.
- Local VPC network and peer VPC network with on-premises connectivity In this example, the following network peering is set up: network-a is peered to network-b , and network-b is peered to network-a . network-a contains two subnets where each subnet is in a separate region. network-b contains a single subnet. network-b is connected to an on-premises network with Cloud VPN tunnels by using dynamic routing. (The same principles hold if the tunnels are replaced with Cloud Interconnect VLAN attachments.) The peering connection for network-b is configured with the --export-custom-routes flag, and the peering connection for network-a is configured with the --import-custom-routes flag.

### "About accessing published services through endpoints \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Static routes with load balancer next hops Static routes can be configured to use the forwarding rule of an internal passthrough Network Load Balancer as the next hop ( --next-hop-ilb ).
- For more information, see Static routes with load balancer next hops .
- Static routes that use --next-hop-ilb to specify the name of an internal passthrough Network Load Balancer forwarding rule can be used to send and receive traffic to a Private Service Connect endpoint when the route and the endpoint are in the same VPC network and region.
- What's next Access published services by using endpoints Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Test connectivity within VPC networks \_|\_ Network Intelligence Center\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- VM-to-VM trace through an inaccessible peered VPC network in a different project (click to enlarge) What's next Common test scenarios Learn about Connectivity Tests Troubleshoot Connectivity Tests Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Ingress firewall rule card expanded (click to enlarge) When a trace contains a VPC network route with the next hop as a peered VPC network, the start of the trace is not a VM instance, but a VPC network.
- If no other routes are available to the destination VM instance, Connectivity Tests uses the default static route with the next hop as the internet gateway.
- The Match routes object can represent routes that direct traffic in a single VPC network or between two peered VPC networks.

