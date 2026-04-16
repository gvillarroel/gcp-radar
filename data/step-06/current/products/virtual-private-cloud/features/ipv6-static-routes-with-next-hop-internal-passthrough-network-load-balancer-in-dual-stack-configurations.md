---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.443Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "IPv6 static routes with next-hop internal passthrough Network Load Balancer in dual-stack configurations"
feature_slug: "ipv6-static-routes-with-next-hop-internal-passthrough-network-load-balancer-in-dual-stack-configurations"
latest_feature_date: "2025-03-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/routes"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets"
keywords:
  - "ipv6"
  - "static"
  - "routes"
  - "with"
  - "next"
  - "hop"
  - "internal"
  - "passthrough"
---

# IPv6 static routes with next-hop internal passthrough Network Load Balancer in dual-stack configurations

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Dual-stack VPC networks now support IPv6 static routes that use next-hop-ilb (internal passthrough Network Load Balancer) as the next hop.

## Extended Definition

Dual-stack VPC networks now support IPv6 static routes that use next-hop-ilb (internal passthrough Network Load Balancer) as the next hop.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets)

## Supporting Pages

### Routes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Local static route Supports various destinations Forwards packets to a static route next hop For details about each static route next hop , see considerations for: Instances and internal passthrough Network Load Balancers Next hop instances Internal passthrough Network Load Balancer next hops Classic VPN tunnel next hops Local dynamic route Destinations that don't conflict with subnet routes or static routes Peer of a BGP session on a Cloud Router Routes are added and removed automatically based on learned routes from Cloud Routers in your VPC network.
- If your model isn't empty, all routes in your model have these characteristics: Identical preference category Identical priorities Next hops that haven't been disregarded Next hops in one VPC network Identical destinations Route types that aren't policy-based or subnet routes Send or drop packet : Depending on the number of routes remaining in the route model, Google Cloud sends or drops the packet: If your route model contains a single route, Google Cloud sends the packet to the next hop, with the following exception: Next hop internal passthrough Network Load Balancers that don't have global access enabled aren't reachable from regions outside of the load balancer's region.
- The following routes have next hops in regions different from the hybrid subnet's region, so they always result in packet drops: Dynamic routes learned by Cloud Routers in regions different from the hybrid subnet route's region, even if the dynamic routing mode of the VPC network that contains the Cloud Routers is global Static routes that have next hops in regions different from the hybrid subnet's region, including all internal passthrough Network Load Balancers in different regions even if they have global access enabled What's next To create and manage routes, see Use routes .
- If you access global Google APIs and services by sending packets to IPv4 or IPv6 addresses for the default domains, the IPv4 or IPv6 addresses for private.googleapis.com , or the IPv4 or IPv6 addresses for restricted.googleapis.com , you can either use default IPv4 and IPv6 routes that have default internet gateway next hops, or you can create and use IPv4 and IPv6 static routes that have more specific destinations and default internet gateway next hops: If your VMs have only internal IP addresses, see Routing options for Private Google Access.

### "About accessing published services through endpoints \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- The following routing configurations are not supported with Private Service Connect: Static routes that use --next-hop-ilb to specify the IP address of an internal passthrough Network Load Balancer forwarding rule.
- Static routes with load balancer next hops Static routes can be configured to use the forwarding rule of an internal passthrough Network Load Balancer as the next hop ( --next-hop-ilb ).
- Static routes that use --next-hop-ilb to specify the name of an internal passthrough Network Load Balancer forwarding rule can be used to send and receive traffic to a Private Service Connect endpoint when the route and the endpoint are in the same VPC network and region.
- Not all static routes with load balancer next hops are supported with Private Service Connect.

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Route type Route export conditions Route import conditions Static routes with network tags (all next hop types ) Can't be exported Can't be imported Static routes that use the default internet gateway next hop Can't be exported Can't be imported IPv4 static routes—without network tags—that use a next hop different from default internet gateway Not exported by default Export is controlled by using the --export-custom-routes flag Not imported by default Import is controlled by using the --import-custom-routes flag IPv6 static routes—without network tags—that use a VM instance as the next hop Not exported by default Export is controlled by using the --export-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Not imported by default Import is controlled by using the --import-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Options for exchanging dynamic routes The following table describes the route exchange options for dynamic routes .
- For more information, see the Use VPC Network Peering sections of the following load balancer documentation: Internal passthrough Network Load Balancers and connected networks Internal proxy Network Load Balancers and connected networks Internal Application Load Balancers and connected networks Peered networks can exchange static routes that use internal passthrough Network Load Balancers as next hops.
- Options for exchanging subnet routes The following table describes the route exchange options for subnet routes : Route type Route export conditions Route import conditions IPv4 subnet routes (primary and secondary IPv4 subnet ranges) using private IPv4 address ranges Always exported Can't be disabled Always imported Can't be disabled IPv4 subnet routes (primary and secondary IPv4 subnet ranges) using privately used public IPv4 address ranges Exported by default Export is controlled using the --export-subnet-routes-with-public-ip flag Not imported by default Import is controlled using the --import-subnet-routes-with-public-ip flag Internal IPv6 subnet ranges ( ipv6-access-type=INTERNAL ) Not exported by default Export is enabled by setting --stack-type=IPV4 IPV6 Not imported by default Import is enabled by setting --stack-type=IPV4 IPV6 External IPv6 subnet ranges ( ipv6-access-type=EXTERNAL ) Not exported by default Export is enabled by setting --stack-type=IPV4 IPV6 Not imported by default Import is enabled by setting --stack-type=IPV4 IPV6 Options for exchanging static routes The following table describes the route exchange options for static routes .
- Route type Route export conditions Route import conditions Dynamic IPv4 routes Not exported by default Export is controlled by using the --export-custom-routes flag Not imported by default Import is controlled by using the --import-custom-routes flag Dynamic IPv6 routes Not exported by default Export is controlled by using the --export-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Not imported by default Import is controlled by using the --import-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Benefits of exchanging static and dynamic routes When one VPC network exports static and dynamic routes and the other VPC network imports those routes, the importing network can send packets directly to the next hop for each imported static or dynamic route whose next hop is in the peer VPC network.

### "Reasons for dropped test packets \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets)
- Source ID: `site-iam-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- If this is a route with next-hop-ilb , the next hop address must be an address of the internal passthrough Network Load Balancer (forwarding rules used by other load balancers, protocol forwarding, or as Private Service Connect endpoints are not supported).
- Route next hop forwarding rule type is invalid The packet is sent to a destination using an invalid route with the next hop forwarding rule ( next-hop-ilb ) not being a forwarding rule of the internal passthrough Network Load Balancer.
- Probable cause If this is a route with next-hop-address , the next hop address must be a primary internal IPv4 address or an IPv6 address of the Compute Engine instance in the route's VPC network.
- No external address available A VM instance with only an internal IP address tried to access external hosts through a route whose next hop is the default internet gateway.

