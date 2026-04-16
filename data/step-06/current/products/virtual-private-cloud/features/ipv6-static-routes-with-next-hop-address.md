---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.456Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "IPv6 static routes with next-hop-address"
feature_slug: "ipv6-static-routes-with-next-hop-address"
latest_feature_date: "2024-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/routes"
  - "https://docs.cloud.google.com/vpc/docs/access-apis-external-ip"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints"
keywords:
  - "ipv6"
  - "static"
  - "routes"
  - "with"
  - "next"
  - "hop"
  - "address"
  - "adds"
---

# IPv6 static routes with next-hop-address

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Adds support for IPv6 static routes that use a next hop instance identified by its address (next-hop-address).

## Extended Definition

Adds support for IPv6 static routes that use a next hop instance identified by its address (next-hop-address).

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- [https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid](https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)

## Supporting Pages

### Routes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you access global Google APIs and services by sending packets to IPv4 or IPv6 addresses for the default domains, the IPv4 or IPv6 addresses for private.googleapis.com , or the IPv4 or IPv6 addresses for restricted.googleapis.com , you can either use default IPv4 and IPv6 routes that have default internet gateway next hops, or you can create and use IPv4 and IPv6 static routes that have more specific destinations and default internet gateway next hops: If your VMs have only internal IP addresses, see Routing options for Private Google Access.
- Preference category Route type and next hop type First preference (most preferred) One or more static routes with next hop instances ( next-hop-instance or next-hop-address ) or next hop Classic VPN tunnels.
- A local static route with the ::/0 destination and default internet gateway next hop provides a path to external IPv6 addresses , including IPv6 addresses on the internet.
- Local static route Supports various destinations Forwards packets to a static route next hop For details about each static route next hop , see considerations for: Instances and internal passthrough Network Load Balancers Next hop instances Internal passthrough Network Load Balancer next hops Classic VPN tunnel next hops Local dynamic route Destinations that don't conflict with subnet routes or static routes Peer of a BGP session on a Cloud Router Routes are added and removed automatically based on learned routes from Cloud Routers in your VPC network.

### "Access APIs from VMs with external IP addresses \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- Source ID: `site-docs-root-2`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- Look for a route whose destination is 0.0.0.0/0 for IPv4 traffic or ::/0 for IPv6 traffic and whose next hop is default internet gateway . gcloud Use the following gcloud command, replacing NETWORK NAME with the name of the network to inspect: gcloud compute routes list \ --filter="default-internet-gateway NETWORK NAME " If you need to create a replacement default IPv4 route, see Adding a static route .
- Basic configuration : Confirm that you have default routes with next hop default-internet-gateway and a destination range of 0.0.0.0/0 (for IPv4 traffic) and ::/0 (for IPv6 traffic, if needed).
- If your VPC network contains a default route whose next hop is the default internet gateway, you can use that route to access Google APIs and services, without needing to create custom routes.
- Custom routing As an alternative to a default route, you can use custom static routes, each having a more specific destination, and each using the default internet gateway next hop.

### "Configure Private Google Access for on-premises hosts \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid](https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid)
- Source ID: `site-docs-root-2`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- On-premises routing with Cloud Router Routes in your on-premises network must be configured to direct traffic for the IP address ranges used by the private.googleapis.com or restricted.googleapis.com domains to the next hop Cloud VPN tunnels or VLAN attachments that connect to your VPC network.
- Consequently, even though the routes in the VPC network send traffic to the default internet gateway next hop, packets sent to those IP address ranges remain within Google's network.
- Go to Routes Use the Filter table text field to filter the list of routes using the following criteria, replacing NETWORK NAME with the name of the VPC network to which your on-premises network connects: Network: NETWORK NAME Next hop type: default internet gateway Look at the Destination IP range column for each route.
- The next hop Cloud VPN tunnels or VLAN attachments that connect to your on-premises network for these routes must be within the same region where the request originated.

### "About accessing published services through endpoints \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- The following routing configurations are not supported with Private Service Connect: Static routes that use --next-hop-ilb to specify the IP address of an internal passthrough Network Load Balancer forwarding rule.
- Static routes with load balancer next hops Static routes can be configured to use the forwarding rule of an internal passthrough Network Load Balancer as the next hop ( --next-hop-ilb ).
- Static routes that use --next-hop-ilb to specify the name or IP address of a Private Service Connect endpoint forwarding rule.
- Not all static routes with load balancer next hops are supported with Private Service Connect.

