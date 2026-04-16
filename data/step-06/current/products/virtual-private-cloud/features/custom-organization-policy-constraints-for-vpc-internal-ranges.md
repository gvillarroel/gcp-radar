---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.427Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Custom organization policy constraints for VPC internal ranges"
feature_slug: "custom-organization-policy-constraints-for-vpc-internal-ranges"
latest_feature_date: "2026-02-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
keywords:
  - "custom"
  - "organization"
  - "policy"
  - "constraints"
  - "for"
  - "vpc"
  - "internal"
  - "ranges"
---

# Custom organization policy constraints for VPC internal ranges

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

VPC now supports using custom organization policy constraints to apply granular, field-level control to internal IP ranges.

## Extended Definition

VPC now supports using custom organization policy constraints to apply granular, field-level control to internal IP ranges.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)

## Supporting Pages

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- Route advertisements and internal IP addresses The following IP addresses are advertised within a VPC network: Regional internal IPv4 addresses Used for primary and secondary IPv4 subnet address ranges Regional internal and external IPv6 addresses Used for internal and external IPv6 subnet address ranges Global internal IPv4 addresses Used for Private Service Connect endpoints for Google APIs If you connect VPC networks using VPC Network Peering, subnet ranges using private IPv4 addresses are always exchanged.
- You can control the following IPv6 configurations using organization policies : Disable VPC External IPv6 usage : If set to true, the constraints/compute.disableVpcExternalIpv6 constraint prevents you from configuring subnets with external IPv6 ranges.
- IPv6 subnet ranges When you create a subnet with an IPv6 range in a custom mode VPC network, you choose whether the subnet is configured with an internal IPv6 subnet range or an external IPv6 subnet range.
- Disable VPC Internal IPv6 usage : If set to true, the constraints/compute.disableVpcInternalIpv6 constraint prevents you from configuring subnets with internal IPv6 ranges.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- For more information about this constraint and its effects on subnet creation and updates, see Organization policy constraints for VPC Flow Logs .
- You can omit both flags if you want to configure only external IPv6 on subnets in this VPC network. gcloud compute networks create NETWORK \ --subnet-mode=custom \ [ --enable-ula-internal-ipv6 [ --internal-ipv6-range= ULA IPV6 RANGE ]] \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.
- You can omit both flags if you want to configure only external IPv6 on subnets in this VPC network. gcloud compute networks create NETWORK \ --subnet-mode=custom \ [ --enable-ula-internal-ipv6 [ --internal-ipv6-range= ULA IPV6 RANGE ]] \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.
- A dual-stack subnet can have one of the following configurations for its primary IP address ranges: Internal IPv4 range and internal IPv6 range Internal IPv4 range and external IPv6 range Each subnet in a VPC network can have a different configuration; you don't need to configure them all as dual-stack, for example.

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- If you are an organization policy administrator , you can specify the following Shared VPC constraints in an organization policy: You can limit the set of host projects to which a non-host project or non-host projects in a folder or organization can be attached.
- Shared VPC Admin ( compute.xpnAdmin and resourcemanager.projectIamAdmin ) • IAM principal in the organization, or • IAM principal in a folder Shared VPC Admins have the Compute Shared VPC Admin ( compute.xpnAdmin ) and Project IAM Admin ( resourcemanager.projectIamAdmin ) roles for the organization or one or more folders.
- Shared VPC allows an organization to connect resources from multiple projects to a common Virtual Private Cloud (VPC) network so that they can communicate with each other securely and efficiently by using internal IP addresses from that network.
- A Shared VPC Admin for the organization has created a host project and attached two service projects to it: Service Project Admins in Service project A can be configured to access all or some of the subnets in the Shared VPC network.

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- Further, if the constraints/compute.disableAllIpv6 organization policy constraint has been set, a Network Administrator may not be able to create subnets with IPv6 address ranges.
- Options for exchanging subnet routes The following table describes the route exchange options for subnet routes : Route type Route export conditions Route import conditions IPv4 subnet routes (primary and secondary IPv4 subnet ranges) using private IPv4 address ranges Always exported Can't be disabled Always imported Can't be disabled IPv4 subnet routes (primary and secondary IPv4 subnet ranges) using privately used public IPv4 address ranges Exported by default Export is controlled using the --export-subnet-routes-with-public-ip flag Not imported by default Import is controlled using the --import-subnet-routes-with-public-ip flag Internal IPv6 subnet ranges ( ipv6-access-type=INTERNAL ) Not exported by default Export is enabled by setting --stack-type=IPV4 IPV6 Not imported by default Import is enabled by setting --stack-type=IPV4 IPV6 External IPv6 subnet ranges ( ipv6-access-type=EXTERNAL ) Not exported by default Export is enabled by setting --stack-type=IPV4 IPV6 Not imported by default Import is enabled by setting --stack-type=IPV4 IPV6 Options for exchanging static routes The following table describes the route exchange options for static routes .
- Route type Route export conditions Route import conditions Dynamic IPv4 routes Not exported by default Export is controlled by using the --export-custom-routes flag Not imported by default Import is controlled by using the --import-custom-routes flag Dynamic IPv6 routes Not exported by default Export is controlled by using the --export-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Not imported by default Import is controlled by using the --import-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Benefits of exchanging static and dynamic routes When one VPC network exports static and dynamic routes and the other VPC network imports those routes, the importing network can send packets directly to the next hop for each imported static or dynamic route whose next hop is in the peer VPC network.
- Local VPC network and peer VPC network with on-premises connectivity In this example, the following network peering is set up: network-a is peered to network-b , and network-b is peered to network-a . network-a contains two subnets where each subnet is in a separate region. network-b contains a single subnet. network-b is connected to an on-premises network with Cloud VPN tunnels by using dynamic routing. (The same principles hold if the tunnels are replaced with Cloud Interconnect VLAN attachments.) The peering connection for network-b is configured with the --export-custom-routes flag, and the peering connection for network-a is configured with the --import-custom-routes flag.

