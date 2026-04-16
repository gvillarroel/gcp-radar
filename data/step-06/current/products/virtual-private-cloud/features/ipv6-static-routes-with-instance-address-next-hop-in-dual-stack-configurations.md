---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.443Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "IPv6 static routes with instance-address next-hop in dual-stack configurations"
feature_slug: "ipv6-static-routes-with-instance-address-next-hop-in-dual-stack-configurations"
latest_feature_date: "2025-03-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/access-apis-external-ip"
  - "https://docs.cloud.google.com/vpc/docs/routes"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints"
keywords:
  - "ipv6"
  - "static"
  - "routes"
  - "with"
  - "instance"
  - "address"
  - "next"
  - "hop"
---

# IPv6 static routes with instance-address next-hop in dual-stack configurations

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Dual-stack VPC networks now support IPv6 static routes that use a next hop instance identified by address (next-hop-address).

## Extended Definition

Dual-stack VPC networks now support IPv6 static routes that use a next hop instance identified by address (next-hop-address).

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)

## Supporting Pages

### "Access APIs from VMs with external IP addresses \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: N/A

Evidence snippets:
- Look for a route whose destination is 0.0.0.0/0 for IPv4 traffic or ::/0 for IPv6 traffic and whose next hop is default internet gateway . gcloud Use the following gcloud command, replacing NETWORK NAME with the name of the network to inspect: gcloud compute routes list \ --filter="default-internet-gateway NETWORK NAME " If you need to create a replacement default IPv4 route, see Adding a static route .
- Basic configuration : Confirm that you have default routes with next hop default-internet-gateway and a destination range of 0.0.0.0/0 (for IPv4 traffic) and ::/0 (for IPv6 traffic, if needed).
- If your VPC network contains a default route whose next hop is the default internet gateway, you can use that route to access Google APIs and services, without needing to create custom routes.
- Custom routing As an alternative to a default route, you can use custom static routes, each having a more specific destination, and each using the default internet gateway next hop.

### Routes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- Preference category Route type and next hop type First preference (most preferred) One or more static routes with next hop instances ( next-hop-instance or next-hop-address ) or next hop Classic VPN tunnels.
- Local static route Supports various destinations Forwards packets to a static route next hop For details about each static route next hop , see considerations for: Instances and internal passthrough Network Load Balancers Next hop instances Internal passthrough Network Load Balancer next hops Classic VPN tunnel next hops Local dynamic route Destinations that don't conflict with subnet routes or static routes Peer of a BGP session on a Cloud Router Routes are added and removed automatically based on learned routes from Cloud Routers in your VPC network.
- If you access global Google APIs and services by sending packets to IPv4 or IPv6 addresses for the default domains, the IPv4 or IPv6 addresses for private.googleapis.com , or the IPv4 or IPv6 addresses for restricted.googleapis.com , you can either use default IPv4 and IPv6 routes that have default internet gateway next hops, or you can create and use IPv4 and IPv6 static routes that have more specific destinations and default internet gateway next hops: If your VMs have only internal IP addresses, see Routing options for Private Google Access.
- A local static route with the ::/0 destination and default internet gateway next hop provides a path to external IPv6 addresses , including IPv6 addresses on the internet.

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Route type Route export conditions Route import conditions Static routes with network tags (all next hop types ) Can't be exported Can't be imported Static routes that use the default internet gateway next hop Can't be exported Can't be imported IPv4 static routes—without network tags—that use a next hop different from default internet gateway Not exported by default Export is controlled by using the --export-custom-routes flag Not imported by default Import is controlled by using the --import-custom-routes flag IPv6 static routes—without network tags—that use a VM instance as the next hop Not exported by default Export is controlled by using the --export-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Not imported by default Import is controlled by using the --import-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Options for exchanging dynamic routes The following table describes the route exchange options for dynamic routes .
- Options for exchanging subnet routes The following table describes the route exchange options for subnet routes : Route type Route export conditions Route import conditions IPv4 subnet routes (primary and secondary IPv4 subnet ranges) using private IPv4 address ranges Always exported Can't be disabled Always imported Can't be disabled IPv4 subnet routes (primary and secondary IPv4 subnet ranges) using privately used public IPv4 address ranges Exported by default Export is controlled using the --export-subnet-routes-with-public-ip flag Not imported by default Import is controlled using the --import-subnet-routes-with-public-ip flag Internal IPv6 subnet ranges ( ipv6-access-type=INTERNAL ) Not exported by default Export is enabled by setting --stack-type=IPV4 IPV6 Not imported by default Import is enabled by setting --stack-type=IPV4 IPV6 External IPv6 subnet ranges ( ipv6-access-type=EXTERNAL ) Not exported by default Export is enabled by setting --stack-type=IPV4 IPV6 Not imported by default Import is enabled by setting --stack-type=IPV4 IPV6 Options for exchanging static routes The following table describes the route exchange options for static routes .
- Route type Route export conditions Route import conditions Dynamic IPv4 routes Not exported by default Export is controlled by using the --export-custom-routes flag Not imported by default Import is controlled by using the --import-custom-routes flag Dynamic IPv6 routes Not exported by default Export is controlled by using the --export-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Not imported by default Import is controlled by using the --import-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Benefits of exchanging static and dynamic routes When one VPC network exports static and dynamic routes and the other VPC network imports those routes, the importing network can send packets directly to the next hop for each imported static or dynamic route whose next hop is in the peer VPC network.
- VPC Network Peering also provides certain external IPv6 connectivity to the destination external IPv6 address ranges of the following resources when the routes to those destination external IPv6 addresses are exchanged by VPC Network Peering: Dual-stack and IPv6-only virtual machine (VM) instance network interfaces Forwarding rules for external protocol forwarding Forwarding rules for external passthrough Network Load Balancers VPC Network Peering supports both IPv4 and IPv6 connectivity.

### "About accessing published services through endpoints \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- The following routing configurations are not supported with Private Service Connect: Static routes that use --next-hop-ilb to specify the IP address of an internal passthrough Network Load Balancer forwarding rule.
- Static routes with load balancer next hops Static routes can be configured to use the forwarding rule of an internal passthrough Network Load Balancer as the next hop ( --next-hop-ilb ).
- Static routes that use --next-hop-ilb to specify the name or IP address of a Private Service Connect endpoint forwarding rule.
- Not all static routes with load balancer next hops are supported with Private Service Connect.

