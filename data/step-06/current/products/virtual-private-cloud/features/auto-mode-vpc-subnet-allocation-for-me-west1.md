---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.474Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Auto mode VPC subnet allocation for me-west1"
feature_slug: "auto-mode-vpc-subnet-allocation-for-me-west1"
latest_feature_date: "2022-10-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/subnets"
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
keywords:
  - "auto"
  - "mode"
  - "vpc"
  - "subnet"
  - "allocation"
  - "for"
  - "me"
  - "west1"
---

# Auto mode VPC subnet allocation for me-west1

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Auto mode VPC networks now include an added subnet range of 10.208.0.0/20 for the Tel Aviv (me-west1) region.

## Extended Definition

Auto mode VPC networks now include an added subnet range of 10.208.0.0/20 for the Tel Aviv (me-west1) region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)

## Supporting Pages

### Subnets \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- Source ID: `site-docs-root`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Auto mode VPC networks are built with one subnet per region at creation time and automatically receive new subnets in new regions.
- Auto mode IPv4 ranges This table lists the IPv4 ranges for the automatically created subnets in an auto mode VPC network.
- For example, auto mode VPC networks do create subnets that fit within a predefined auto mode IP range.
- Internal subnet /64 IPv6 ranges can be used by the following, regardless of the type of addresses: Internal /96 IPv6 address ranges of VM network interfaces Internal /96 IPv6 address ranges of forwarding rules for the following: Internal protocol forwarding Internal passthrough Network Load Balancers Private Service Connect endpoints Internal /96 IPv6 address ranges can be assigned in the following ways: If not specified, Google Cloud automatically assigns an ephemeral internal IPv6 /96 address range.

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service Project Admins When defining each Service Project Admin, a Shared VPC Admin can grant permission to use the whole host project or just some subnets: Project-level permissions : A Service Project Admin can be defined to have permission to use all subnets in the host project if the Shared VPC Admin grants the role of compute.networkUser for the whole host project to the Service Project Admin.
- Subnet-level permissions : Alternatively, a Service Project Admin can be granted a more restrictive set of permissions to use only some subnets if the Shared VPC Admin grants the role of compute.networkUser for those selected subnets to the Service Project Admin.
- They perform various tasks necessary to set up Shared VPC , such as enabling host projects, attaching service projects to host projects, and delegating access to some or all of the subnets in Shared VPC networks to Service Project Admins.
- A Shared VPC Admin for the organization has created a host project and attached two service projects to it: Service Project Admins in Service project A can be configured to access all or some of the subnets in the Shared VPC network.

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 237
- Re-rank relevance: N/A

Evidence snippets:
- The following table summarizes the network configuration specified in the preceding example: Network name Networking component IPv4 range IPv6 range Region network-a subnet-a 10.0.0.0/24 fc:1000:1000:1000::/64 us-west1 network-a subnet-b 10.0.1.0/24 fc:1000:1000:1001::/64 europe-north 1 network-b subnet-c 10.0.2.0/23 fc:1000:1000:1002::/64 us-west1 network-b Cloud Router 10.0.0.0/22 fc:1000:1000:1000::/64 us-west1 On-premises network On-premises router 10.0.0.0/8 fc:1000:1000:1000::/56 N/A Regardless of the dynamic routing mode of network-a , the following routing characteristics apply: When the dynamic routing mode of network-b is global, On-premises prefix learned by the Cloud Router in network-b are added as dynamic routes in all regions of network-b and as peering dynamic routes in all regions of network-a .
- Local VPC network and peer VPC network with on-premises connectivity In this example, the following network peering is set up: network-a is peered to network-b , and network-b is peered to network-a . network-a contains two subnets where each subnet is in a separate region. network-b contains a single subnet. network-b is connected to an on-premises network with Cloud VPN tunnels by using dynamic routing. (The same principles hold if the tunnels are replaced with Cloud Interconnect VLAN attachments.) The peering connection for network-b is configured with the --export-custom-routes flag, and the peering connection for network-a is configured with the --import-custom-routes flag.
- The dynamic routing mode of the exporting VPC network—the network that contains the Cloud Routers that learned the prefixes for those dynamic routes— determines the regions in which the peering dynamic routes can be programmed in peer networks: If the dynamic routing mode of the exporting VPC network is regional, then that network exports dynamic routes only in the same region as its Cloud Routers that learned the prefixes.
- To provide a path from the on-premises network to the peered VPC network, a network administrator for the local VPC network must configure Cloud Router custom advertisement mode on the Cloud Router that manages the BGP session for the Cloud VPN tunnel, Cloud Interconnect attachment (VLAN), or Router appliance that connects to the on-premises network.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: N/A

Evidence snippets:
- You plan to connect your VPC network to another network: Because the subnets of every auto mode VPC network use the same predefined range of IP addresses, you can't connect auto mode VPC networks to one another by using VPC Network Peering or Cloud VPN.
- Considerations for auto mode VPC networks Auto mode VPC networks are easy to set up and use, and they are well suited for use cases with these attributes: Having subnets automatically created in each region is useful.
- The following attributes highlight use cases where custom mode VPC networks are recommended or required: Having one subnet automatically created in each region isn't necessary.
- Rules that come with the default network are also presented as options for you to apply to new auto mode VPC networks that you create by using the Google Cloud console.

