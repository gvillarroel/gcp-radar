---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.462Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "IPv6 static routes with gateway and instance next hops"
feature_slug: "ipv6-static-routes-with-gateway-and-instance-next-hops"
latest_feature_date: "2023-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/routes"
  - "https://docs.cloud.google.com/vpc/docs/access-apis-external-ip"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-google-access"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
keywords:
  - "ipv6"
  - "static"
  - "routes"
  - "with"
  - "gateway"
  - "and"
  - "instance"
  - "next"
---

# IPv6 static routes with gateway and instance next hops

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

VPC now supports IPv6 static routes using next-hop-gateway and next-hop-instance targets in general availability.

## Extended Definition

VPC now supports IPv6 static routes using next-hop-gateway and next-hop-instance targets in general availability.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- [https://docs.cloud.google.com/vpc/docs/configure-private-google-access](https://docs.cloud.google.com/vpc/docs/configure-private-google-access)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)

## Supporting Pages

### Routes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Local static route Supports various destinations Forwards packets to a static route next hop For details about each static route next hop , see considerations for: Instances and internal passthrough Network Load Balancers Next hop instances Internal passthrough Network Load Balancer next hops Classic VPN tunnel next hops Local dynamic route Destinations that don't conflict with subnet routes or static routes Peer of a BGP session on a Cloud Router Routes are added and removed automatically based on learned routes from Cloud Routers in your VPC network.
- If you access global Google APIs and services by sending packets to IPv4 or IPv6 addresses for the default domains, the IPv4 or IPv6 addresses for private.googleapis.com , or the IPv4 or IPv6 addresses for restricted.googleapis.com , you can either use default IPv4 and IPv6 routes that have default internet gateway next hops, or you can create and use IPv4 and IPv6 static routes that have more specific destinations and default internet gateway next hops: If your VMs have only internal IP addresses, see Routing options for Private Google Access.
- Preference category Route type and next hop type First preference (most preferred) One or more static routes with next hop instances ( next-hop-instance or next-hop-address ) or next hop Classic VPN tunnels.
- A local static route with the ::/0 destination and default internet gateway next hop provides a path to external IPv6 addresses , including IPv6 addresses on the internet.

### "Access APIs from VMs with external IP addresses \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- Source ID: `site-docs-root-2`
- Final score: 226
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

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Resources that reference the network include VPC Network Peering connections , Cloud VPN gateways , Cloud Routers , Serverless VPC Access connectors and their connected services, firewall rules , and custom static routes .
- To list all subnets in a region and include their IP address utilization, make the following GET request: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks?views=WITH UTILIZATION Describe a subnet You can view the details of an existing subnet—such as its primary IPv4 ranges, secondary IP ranges, IPv6 ranges, IP address utilization, and region—by following the steps in this section.
- NAME SUBNET MODE BGP ROUTING MODE IPV4 RANGE GATEWAY IPV4 custom-network CUSTOM REGIONAL default AUTO REGIONAL legacy-network1 LEGACY REGIONAL 10.240.0.0/16 10.240.0.1 To describe a network and view its details, such as peering connections and subnets, use the networks describe command . gcloud compute networks describe NETWORK Replace NETWORK with the name of the network.
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-custom-mode-network" mtu = 1460 subnets = [ { subnet name = "subnet-01" subnet ip = "10.10.10.0/24" subnet region = "us-west1" }, { subnet name = "subnet-02" subnet ip = "10.10.20.0/24" subnet region = "us-west1" subnet private access = "true" subnet flow logs = "true" }, { subnet name = "subnet-03" subnet ip = "10.10.30.0/24" subnet region = "us-west1" subnet flow logs = "true" subnet flow logs interval = "INTERVAL 10 MIN" subnet flow logs sampling = 0.7 subnet flow logs metadata = "INCLUDE ALL METADATA" subnet flow logs filter = "false" } ] } Next, create firewall rules .

