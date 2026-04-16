---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.475Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "IPv6 subnet routes"
feature_slug: "ipv6-subnet-routes"
latest_feature_date: "2022-08-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/vpc/docs/subnets"
  - "https://docs.cloud.google.com/vpc/docs/routes"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
keywords:
  - "ipv6"
  - "subnet"
  - "routes"
  - "vpc"
  - "now"
  - "supports"
  - "for"
  - "ranges"
---

# IPv6 subnet routes

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

VPC now supports subnet routes for IPv6 subnet ranges in all regions.

## Extended Definition

VPC now supports subnet routes for IPv6 subnet ranges in all regions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)

## Supporting Pages

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 245
- Re-rank relevance: N/A

Evidence snippets:
- VPC Network Peering also provides certain external IPv6 connectivity to the destination external IPv6 address ranges of the following resources when the routes to those destination external IPv6 addresses are exchanged by VPC Network Peering: Dual-stack and IPv6-only virtual machine (VM) instance network interfaces Forwarding rules for external protocol forwarding Forwarding rules for external passthrough Network Load Balancers VPC Network Peering supports both IPv4 and IPv6 connectivity.
- Options for exchanging subnet routes The following table describes the route exchange options for subnet routes : Route type Route export conditions Route import conditions IPv4 subnet routes (primary and secondary IPv4 subnet ranges) using private IPv4 address ranges Always exported Can't be disabled Always imported Can't be disabled IPv4 subnet routes (primary and secondary IPv4 subnet ranges) using privately used public IPv4 address ranges Exported by default Export is controlled using the --export-subnet-routes-with-public-ip flag Not imported by default Import is controlled using the --import-subnet-routes-with-public-ip flag Internal IPv6 subnet ranges ( ipv6-access-type=INTERNAL ) Not exported by default Export is enabled by setting --stack-type=IPV4 IPV6 Not imported by default Import is enabled by setting --stack-type=IPV4 IPV6 External IPv6 subnet ranges ( ipv6-access-type=EXTERNAL ) Not exported by default Export is enabled by setting --stack-type=IPV4 IPV6 Not imported by default Import is enabled by setting --stack-type=IPV4 IPV6 Options for exchanging static routes The following table describes the route exchange options for static routes .
- For dual-stack peerings, if a local VPC network importing IPv6 routes doesn't have any dual-stack or IPv6-only subnets, none of the IPv6 routes it receives from peered VPC networks can be used.
- For example: Suppose two VPC networks are already peered, but they don't export and import IPv4 subnet routes by using privately used public IPv4 address ranges.

### Subnets \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- IPv6 subnet ranges When you create a subnet with an IPv6 address range or enable IPv6 on an existing subnet in a VPC network, you choose an IPv6 access type for the subnet.
- Unusable IPv6 address Description Example The first /96 range from the subnet's internal /64 IPv6 range Reserved for system use fd20:db8::/96 from range fd20:db8::/64 The last /96 range from the subnet's internal /64 IPv6 range Reserved for system use fd20:db8:0:0:ffff:ffff::/96 from range fd20:db8::/64 What's next Learn more about Geography and regions Create VPC networks Assign an internal IPv6 range for a VPC network Create a subnet Learn about using a hybrid subnet to migrate workloads to a VPC network without changing IP addresses Try it for yourself If you're new to Google Cloud, create an account to evaluate how Cloud NAT performs in real-world scenarios.
- Internal subnet /64 IPv6 ranges can be used by the following, regardless of the type of addresses: Internal /96 IPv6 address ranges of VM network interfaces Internal /96 IPv6 address ranges of forwarding rules for the following: Internal protocol forwarding Internal passthrough Network Load Balancers Private Service Connect endpoints Internal /96 IPv6 address ranges can be assigned in the following ways: If not specified, Google Cloud automatically assigns an ephemeral internal IPv6 /96 address range.
- When you create an IPv4 subnet range, you provide the following information: Subnet setting Valid values Details IPv4 range A valid range that you choose Required Secondary IPv4 range A valid range that you choose Optional When you create an IPv6 subnet range, you specify the access type and the source of the IP addresses: Access type Address type and source Internal (not internet routable) ULAs : Automatically assigned from the VPC network's /48 ULA range .

### Routes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- Local static route Supports various destinations Forwards packets to a static route next hop For details about each static route next hop , see considerations for: Instances and internal passthrough Network Load Balancers Next hop instances Internal passthrough Network Load Balancer next hops Classic VPN tunnel next hops Local dynamic route Destinations that don't conflict with subnet routes or static routes Peer of a BGP session on a Cloud Router Routes are added and removed automatically based on learned routes from Cloud Routers in your VPC network.
- Second layer GFEs open TCP connections to your backend VMs and send packets from the following sources: 35.191.0.0/16 and 130.211.0.0/22 for IPv4 2600:2d00:1:1::/64 for IPv6 Google Cloud uses routes in Google's network to deliver packets from those source ranges to backend VMs in your VPC network.
- System-generated routes System-generated default routes 0.0.0.0/0 for IPv4 ::/0 for IPv6 default-internet-gateway Applies to the whole VPC network Can be removed or replaced Subnet routes Each subnet has at least one subnet route for each IP address range that is associated with the subnet.
- Start with all routes of the VPC network that contains the hybrid subnet route and then remove the following routes: All policy-based routes All subnet routes All static routes that have network tags All routes whose destinations are broader than and contain the hybrid subnet route that was matched in the first route model Perform the most specific destination through select only the most favorable preference category steps in the routing order.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- Route advertisements and internal IP addresses The following IP addresses are advertised within a VPC network: Regional internal IPv4 addresses Used for primary and secondary IPv4 subnet address ranges Regional internal and external IPv6 addresses Used for internal and external IPv6 subnet address ranges Global internal IPv4 addresses Used for Private Service Connect endpoints for Google APIs If you connect VPC networks using VPC Network Peering, subnet ranges using private IPv4 addresses are always exchanged.
- Internal IPv6 subnet ranges are used for VM-to-VM communication within VPC networks.
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- You can control the following IPv6 configurations using organization policies : Disable VPC External IPv6 usage : If set to true, the constraints/compute.disableVpcExternalIpv6 constraint prevents you from configuring subnets with external IPv6 ranges.

