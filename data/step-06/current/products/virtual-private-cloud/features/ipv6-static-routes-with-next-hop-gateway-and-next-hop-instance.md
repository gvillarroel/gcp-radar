---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.466Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "IPv6 static routes with next-hop gateway and next-hop instance"
feature_slug: "ipv6-static-routes-with-next-hop-gateway-and-next-hop-instance"
latest_feature_date: "2023-06-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/routes"
  - "https://docs.cloud.google.com/vpc/docs/access-apis-external-ip"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-google-access"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid"
keywords:
  - "ipv6"
  - "static"
  - "routes"
  - "with"
  - "next"
  - "hop"
  - "gateway"
  - "and"
---

# IPv6 static routes with next-hop gateway and next-hop instance

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

IPv6 static routes now support specific next-hop types, including next-hop-gateway and next-hop-instance, and this capability was introduced in Preview.

## Extended Definition

IPv6 static routes now support specific next-hop types, including next-hop-gateway and next-hop-instance, and this capability was introduced in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- [https://docs.cloud.google.com/vpc/docs/configure-private-google-access](https://docs.cloud.google.com/vpc/docs/configure-private-google-access)
- [https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid](https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid)

## Supporting Pages

### Routes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you access global Google APIs and services by sending packets to IPv4 or IPv6 addresses for the default domains, the IPv4 or IPv6 addresses for private.googleapis.com , or the IPv4 or IPv6 addresses for restricted.googleapis.com , you can either use default IPv4 and IPv6 routes that have default internet gateway next hops, or you can create and use IPv4 and IPv6 static routes that have more specific destinations and default internet gateway next hops: If your VMs have only internal IP addresses, see Routing options for Private Google Access.
- A local static route with the ::/0 destination and default internet gateway next hop provides a path to external IPv6 addresses , including IPv6 addresses on the internet.
- Local static route Supports various destinations Forwards packets to a static route next hop For details about each static route next hop , see considerations for: Instances and internal passthrough Network Load Balancers Next hop instances Internal passthrough Network Load Balancer next hops Classic VPN tunnel next hops Local dynamic route Destinations that don't conflict with subnet routes or static routes Peer of a BGP session on a Cloud Router Routes are added and removed automatically based on learned routes from Cloud Routers in your VPC network.
- Accessing global Google APIs sometimes depends on a local IPv4 or IPv6 default route with default internet gateway next hop: If you access global Google APIs and services by sending packets to a Private Service Connect endpoint for global Google APIs , your VPC network doesn't require a default route with default internet gateway next hop.

### "Access APIs from VMs with external IP addresses \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- Source ID: `site-docs-root-2`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- Look for a route whose destination is 0.0.0.0/0 for IPv4 traffic or ::/0 for IPv6 traffic and whose next hop is default internet gateway . gcloud Use the following gcloud command, replacing NETWORK NAME with the name of the network to inspect: gcloud compute routes list \ --filter="default-internet-gateway NETWORK NAME " If you need to create a replacement default IPv4 route, see Adding a static route .
- Basic configuration : Confirm that you have default routes with next hop default-internet-gateway and a destination range of 0.0.0.0/0 (for IPv4 traffic) and ::/0 (for IPv6 traffic, if needed).
- If your VPC network contains a default route whose next hop is the default internet gateway, you can use that route to access Google APIs and services, without needing to create custom routes.
- Custom routing As an alternative to a default route, you can use custom static routes, each having a more specific destination, and each using the default internet gateway next hop.

### "Configure Private Google Access \_|\_ Virtual Private Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-google-access](https://docs.cloud.google.com/vpc/docs/configure-private-google-access)
- Source ID: `site-docs-root-2`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Look for a route whose destination is 0.0.0.0/0 for IPv4 traffic or ::/0 for IPv6 traffic and whose next hop is default internet gateway . gcloud Use the following gcloud command, replacing NETWORK NAME with the name of the network to inspect: gcloud compute routes list \ --filter="default-internet-gateway NETWORK NAME " If you need to create a replacement default IPv4 route, see Adding a static route .
- Basic configuration : Confirm that you have default routes with next hop default-internet-gateway and a destination range of 0.0.0.0/0 (for IPv4 traffic) and ::/0 (for IPv6 traffic, if needed).
- If your VPC network contains a default route whose next hop is the default internet gateway, you can use that route to access Google APIs and services, without needing to create custom routes.
- Custom routing As an alternative to a default route, you can use custom static routes, each having a more specific destination, and each using the default internet gateway next hop.

### "Configure Private Google Access for on-premises hosts \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid](https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid)
- Source ID: `site-docs-root-2`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Go to Routes Use the Filter table text field to filter the list of routes using the following criteria, replacing NETWORK NAME with the name of the VPC network to which your on-premises network connects: Network: NETWORK NAME Next hop type: default internet gateway Look at the Destination IP range column for each route.
- Consequently, even though the routes in the VPC network send traffic to the default internet gateway next hop, packets sent to those IP address ranges remain within Google's network.
- This updates the route advertisement mode on all the Cloud Router's BGP sessions, except for those BGP sessions that use custom BGP advertisements themselves: gcloud compute routers update ROUTER NAME \ --region= REGION \ --add-advertisement-ranges= CUSTOM RANGES Alternatively, use compute routers update-bgp-peer to configure a specific BGP peer on the Cloud Router: If you are adding IPv6 custom ranges, and if IPv6 traffic is disabled for the BGP session, you can enable it with the --enable-ipv6 flag. gcloud compute routers update-bgp-peer ROUTER NAME \ --region= REGION \ --peer-name= PEER NAME \ --advertisement-mode=CUSTOM \ --set-advertisement-groups=ALL SUBNETS \ --set-advertisement-ranges= CUSTOM RANGES You can append new advertisement ranges if you're already using the CUSTOM advertisement mode for a BGP session on a Cloud Router If you are adding IPv6 custom ranges, and if IPv6 traffic is disabled for the BGP session, you can enable it with the --enable-ipv6 flag. gcloud compute routers update-bgp-peer ROUTER NAME \ --region= REGION \ --peer-name= PEER NAME \ --add-advertisement-ranges= CUSTOM RANGES In the commands above, replace the following with valid values: ROUTER NAME : The name of the Cloud Router REGION : The region of the Cloud Router PEER NAME : The name of the BGP peer configured when you create a VLAN attachment for Dedicated Interconnect , when you create a VLAN attachment for Partner Interconnect , or when you create an HA VPN tunnel Leave --set-advertisement-groups=ALL SUBNETS in order to advertise all subnet routes available to the Cloud Router.
- Look for a route whose destination range matches: 199.36.153.8/30 if you chose private.googleapis.com 199.36.153.4/30 if you chose restricted.googleapis.com gcloud Use the following gcloud command, replacing NETWORK NAME with the name of the VPC network to which your on-premises network connects: gcloud compute routes list \ --filter="default-internet-gateway NETWORK NAME " Routes are listed in table format unless you customize the command with the --format flag.

