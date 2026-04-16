---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.474Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Reserved external IPv4 address move across projects"
feature_slug: "reserved-external-ipv4-address-move-across-projects"
latest_feature_date: "2022-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/quota"
  - "https://docs.cloud.google.com/vpc/docs/bring-your-own-ip"
  - "https://docs.cloud.google.com/vpc/docs/subnets"
keywords:
  - "reserved"
  - "external"
  - "ipv4"
  - "address"
  - "move"
  - "across"
  - "projects"
  - "virtual"
---

# Reserved external IPv4 address move across projects

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Google Cloud Virtual Private Cloud now supports moving a reserved external IPv4 address from one project to another, available in Preview.

## Extended Definition

Google Cloud Virtual Private Cloud now supports moving a reserved external IPv4 address from one project to another, available in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)

## Supporting Pages

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Edit secondary IPv4 ranges You can add secondary IPv4 ranges to subnets, or you can remove any secondary IPv4 range as long as no resources are using IP addresses in it. gcloud To add a new secondary IPv4 range to a subnet, use the subnets update command . gcloud compute networks subnets update SUBNET \ --region= REGION \ --add-secondary-ranges= SECONDARY RANGE NAME = SECONDARY RANGE Replace the following: SUBNET : the name of the subnet.
- To list all subnets in a region and include their IP address utilization, make the following GET request: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks?views=WITH UTILIZATION Describe a subnet You can view the details of an existing subnet—such as its primary IPv4 ranges, secondary IP ranges, IPv6 ranges, IP address utilization, and region—by following the steps in this section.
- To describe the subnet and view its IP address utilization, send the following request: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNET ?views=WITH UTILIZATION Add an IPv4-only subnet When you create a subnet, you set a name, a region, and at least a primary IPv4 address range according to the name and IPv4 subnet range limitations.
- A dual-stack subnet can have one of the following configurations for its primary IP address ranges: Internal IPv4 range and internal IPv6 range Internal IPv4 range and external IPv6 range Each subnet in a VPC network can have a different configuration; you don't need to configure them all as dual-stack, for example.

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- Static global internal IPv4 addresses The number of static global internal IPv4 address ranges that you can reserve in your project, such as allocated IPv4 address ranges for private services access and IPv4 addresses reserved for Private Service Connect endpoints that are used to access global Google APIs.
- External IP addresses Static IP addresses The number of static regional external IPv4 addresses that you can reserve in each region in your project.
- Maximum egress data rate to an external IP address destination all flows: about 7 Gbps (gigabits per second) sustained or 25 Gbps with per VM Tier 1 networking performance single flow: 3 Gbps sustained See Egress to external IP address destinations in the Compute Engine documentation.
- Limit name: STATIC-BYOIP-ADDRESSES-per-project-region Metric: compute.googleapis.com/regional static byoip addresses Static BYOIP IP addresses global The number of bring your own IP global external IP addresses that you can create in your project.

### "Bring your own IP addresses \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- Source ID: `site-docs-root-2`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- You can use IPv4 BYOIP addresses to create external forwarding rules used with GKE ingress for external Application Load Balancers .
- You can create IPv4 BYOIP addresses in Shared VPC host projects and use the host project IP addresses in the service projects.
- Support for BYOIP addresses IPv4 BYOIP addresses can be used with most resources that support static external IP addresses.
- Cloud VPN does not support using an IPv4 BYOIP address as the external IP address of Classic VPN or HA VPN gateway tunnels.

### Subnets \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- 199.36.153.4/30 and 199.36.153.8/30 Private Google Access-specific virtual IP addresses 0.0.0.0/8 Current (local) network RFC 1122 127.0.0.0/8 Local host RFC 1122 169.254.0.0/16 Link-local RFC 3927 224.0.0.0/4 Multicast (Class D) RFC 5771 255.255.255.255/32 Limited broadcast destination address RFC 8190 and RFC 919 Unusable addresses in IPv4 subnet ranges Google Cloud uses the first two and last two IPv4 addresses in each subnet primary IPv4 address range to host the subnet.
- 100.64.0.0/10 Shared address space RFC 6598 192.0.0.0/24 IETF protocol assignments RFC 6890 192.0.2.0/24 (TEST-NET-1) 198.51.100.0/24 (TEST-NET-2) 203.0.113.0/24 (TEST-NET-3) Documentation RFC 5737 192.88.99.0/24 IPv6 to IPv4 relay (deprecated) RFC 7526 198.18.0.0/15 Benchmark testing RFC 2544 240.0.0.0/4 Reserved for future use (Class E) as noted in RFC 5735 and RFC 1112 .
- Unusable IPv4 address Description Example Network address First address in the primary IPv4 range 10.1.2.0 from range 10.1.2.0/24 Default gateway address Second address in the primary IPv4 range 10.1.2.1 from range 10.1.2.0/24 Second-to-last address Second-to-last address in the primary IPv4 range This range is reserved by Google Cloud for potential future use.
- 10.1.2.254 from range 10.1.2.0/24 Broadcast address Last address in the primary IPv4 range 10.1.2.255 from range 10.1.2.0/24 Note: Google Cloud software-defined networking reserves a virtual gateway IP address for the primary IP ranges of each subnet in a VPC network.

