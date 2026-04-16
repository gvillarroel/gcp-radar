---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.490Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "GRE support for VPC networks"
feature_slug: "gre-support-for-vpc-networks"
latest_feature_date: "2020-08-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-google-access"
keywords:
  - "gre"
  - "for"
  - "vpc"
  - "networks"
  - "virtual"
  - "private"
  - "added"
  - "routing"
---

# GRE support for VPC networks

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Virtual Private Cloud added support for GRE routing in VPC networks, available in Beta.

## Extended Definition

Virtual Private Cloud added support for GRE routing in VPC networks, available in Beta.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/vpc/docs/configure-private-google-access](https://docs.cloud.google.com/vpc/docs/configure-private-google-access)

## Supporting Pages

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 307
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can omit both flags if you want to configure only external IPv6 on subnets in this VPC network. gcloud compute networks create NETWORK \ --subnet-mode=custom \ [ --enable-ula-internal-ipv6 [ --internal-ipv6-range= ULA IPV6 RANGE ]] \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.
- You can omit both flags if you want to configure only external IPv6 on subnets in this VPC network. gcloud compute networks create NETWORK \ --subnet-mode=custom \ [ --enable-ula-internal-ipv6 [ --internal-ipv6-range= ULA IPV6 RANGE ]] \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.
- Click Create . gcloud Use the networks create command . gcloud compute networks create NETWORK \ --subnet-mode=custom \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.
- Click Create . gcloud Use the networks create command . gcloud compute networks create NETWORK \ --subnet-mode=auto \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 289
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Route advertisements and internal IP addresses The following IP addresses are advertised within a VPC network: Regional internal IPv4 addresses Used for primary and secondary IPv4 subnet address ranges Regional internal and external IPv6 addresses Used for internal and external IPv6 subnet address ranges Global internal IPv4 addresses Used for Private Service Connect endpoints for Google APIs If you connect VPC networks using VPC Network Peering, subnet ranges using private IPv4 addresses are always exchanged.
- VPC networks A Virtual Private Cloud (VPC) network is a virtual version of a physical network that is implemented inside of Google's production network by using Andromeda .
- Google Cloud provides RDMA network profiles that let you create Virtual Private Cloud (VPC) networks that support RDMA connectivity.
- Though connectivity between a VPC network and another network (such as an on-premises network) can use private routing provided by a Google Cloud connectivity product, the other network's IP addresses might also be publicly routable.

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The dynamic routing mode of the exporting VPC network—the network that contains the Cloud Routers that learned the prefixes for those dynamic routes— determines the regions in which the peering dynamic routes can be programmed in peer networks: If the dynamic routing mode of the exporting VPC network is regional, then that network exports dynamic routes only in the same region as its Cloud Routers that learned the prefixes.
- When used to specify a source for an ingress rule in a network firewall policy, a Tag can identify sources in both the VPC network to which the Tag is scoped and any peered VPC networks that are connected to the VPC network to which the Tag is scoped.
- VPC Network Peering Google Cloud VPC Network Peering connects two Virtual Private Cloud (VPC) networks so that resources in each network can communicate with each other.
- For example: Suppose two VPC networks are already peered, but they don't export and import IPv4 subnet routes by using privately used public IPv4 address ranges.

### "Configure Private Google Access \_|\_ Virtual Private Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-google-access](https://docs.cloud.google.com/vpc/docs/configure-private-google-access)
- Source ID: `site-docs-root-2`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To list the subnets for a particular network, use the following command: gcloud compute networks subnets list --filter= NETWORK NAME Run the following command to enable Private Google Access: gcloud compute networks subnets update SUBNET NAME \ --region= REGION \ --enable-private-ip-google-access Verify that Private Google Access is enabled by running this command: gcloud compute networks subnets describe SUBNET NAME \ --region= REGION \ --format="get(privateIpGoogleAccess)" In all above commands, replace the following with valid values: SUBNET NAME : the name of the subnet REGION : the region for the subnet NETWORK NAME : the name of the VPC network that contains the subnet When creating a new subnet , use the --enable-private-ip-google-access flag to enable Private Google Access: gcloud compute networks subnets create SUBNET NAME \ --region= REGION \ --network= NETWORK NAME \ --range= PRIMARY IPV4 RANGE \ [ --stack-type= STACK TYPE ] \ [ --ipv6-access-type= IPv6 ACCESS TYPE ] \ --enable-private-ip-google-access Replace the following with valid values: SUBNET NAME : the name of the subnet REGION : the region for the subnet NETWORK NAME : the name of the VPC network that contains the subnet PRIMARY IPV4 RANGE : the subnet's primary IPv4 address range.
- To list the subnets for a particular network, use the following command: gcloud compute networks subnets list \ --filter= NETWORK NAME Run the following command to disable Private Google Access: gcloud compute networks subnets update SUBNET NAME \ --region= REGION \ --no-enable-private-ip-google-access Run the following command to verify that Private Google Access is disabled: gcloud compute networks subnets describe SUBNET NAME \ --region= REGION \ --format="get(privateIpGoogleAccess)" In all above commands, replace the following with valid values: SUBNET NAME : the name of the subnet REGION : the region for the subnet NETWORK NAME : the name of the VPC network that contains the subnet What's next Configure Private Google Access for on-premises hosts Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Disable Private Google Access Follow these steps to disable Private Google Access for an existing subnet: Console In the Google Cloud console, go to the VPC networks page.
- Go to VPC networks Click the name of the network that contains the subnet for which you need to disable Private Google Access.

