---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.432Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Subnet IP address utilization reporting"
feature_slug: "subnet-ip-address-utilization-reporting"
latest_feature_date: "2025-10-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/bring-your-own-ip"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/byoip-planning"
  - "https://docs.cloud.google.com/vpc/docs/access-apis-external-ip"
keywords:
  - "subnet"
  - "ip"
  - "address"
  - "utilization"
  - "reporting"
  - "you"
  - "can"
  - "now"
---

# Subnet IP address utilization reporting

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

You can now view free and allocated IP address counts when listing or describing a subnet.

## Extended Definition

You can now view free and allocated IP address counts when listing or describing a subnet.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/byoip-planning](https://docs.cloud.google.com/vpc/docs/byoip-planning)
- [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)

## Supporting Pages

### "Bring your own IP addresses \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- Source ID: `site-docs-root-2`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- Configuration Regional (v2) Regional internal (v2) Regional (v1) Global (v1) Availability Recommended regional configuration Used for internal IPv6 addresses Not recommended for new regional configurations Must request adding your project to an allowlist Public advertised prefix provisioning time Approximately 2 weeks Immediate Approximately 4 weeks Approximately 4 weeks Public delegated prefix provisioning time A few minutes Immediate 4 weeks Can overlap with public advertised prefix provisioning time 4 weeks Can overlap with public advertised prefix provisioning time Sub-prefix provisioning time A few minutes Immediate A few minutes A few minutes BGP announcement The public advertised prefix is not automatically announced when it is provisioned.
- Anyone who has the appropriate IAM permissions in the project can use the IP addresses: compute.addresses. for regional IP addresses compute.globalAddresses. for global IP addresses Bring your own IP configurations The following tables summarize the available bring your own IP configurations.
- You can use IPv6 BYOIP addresses in the following ways, depending on the sub-prefix: For external access sub-prefixes, you must choose one of the following mutually exclusive modes: Forwarding rules for external passthrough Network Load Balancers or external protocol forwarding.
- For information about using addresses in an internal IPv6 range, see Internal IPv6 specifications When you create IP addresses from a public delegated prefix or sub-prefix, the IP addresses can be used only within the project and scope that they are allocated to.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- To list all subnets in a region and include their IP address utilization, make the following GET request: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks?views=WITH UTILIZATION Describe a subnet You can view the details of an existing subnet—such as its primary IPv4 ranges, secondary IP ranges, IPv6 ranges, IP address utilization, and region—by following the steps in this section.
- List subnets You can see all the subnets that exist for a project or VPC network, including details about IP address utilization.
- Edit secondary IPv4 ranges You can add secondary IPv4 ranges to subnets, or you can remove any secondary IPv4 range as long as no resources are using IP addresses in it. gcloud To add a new secondary IPv4 range to a subnet, use the subnets update command . gcloud compute networks subnets update SUBNET \ --region= REGION \ --add-secondary-ranges= SECONDARY RANGE NAME = SECONDARY RANGE Replace the following: SUBNET : the name of the subnet.
- To describe the subnet and view its IP address utilization, send the following request: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNET ?views=WITH UTILIZATION Add an IPv4-only subnet When you create a subnet, you set a name, a region, and at least a primary IPv4 address range according to the name and IPv4 subnet range limitations.

### "Planning for bring your own IP addresses \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/byoip-planning](https://docs.cloud.google.com/vpc/docs/byoip-planning)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- BYOIP address administration without an organization If you use a project that does not belong to an organization, you can't create a separate project for BYOIP address administration.
- If you anticipate needing BYOIP addresses in a region, complete the public delegated prefix provisioning process in advance, so you can later fulfill addressing needs on-demand.
- You can manage prefixes centrally in a project distinct from the ultimate destinations of the IP addresses.
- You can delegate BYOIP addresses to a Shared VPC host project, but not to a Shared VPC service project.

### "Access APIs from VMs with external IP addresses \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- Source ID: `site-docs-root-2`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- IPv6 support for private.googleapis.com and restricted.googleapis.com The following IPv6 address ranges can be used to direct traffic from IPv6 clients to Google APIs and services: private.googleapis.com : 2600:2d00:0002:2000::/56 restricted.googleapis.com : 2600:2d00:0002:1000::/56 Consider configuring the IPv6 addresses if you want to use the private.googleapis.com or restricted.googleapis.com domain, and you have clients that use IPv6 addresses.
- DNS configuration For connectivity to Google APIs and services, you can choose to send packets to the IP addresses associated with the private.googleapis.com or restricted.googleapis.com VIP.
- Various IP address ranges—you can determine a set of IP ranges that contains the possible addresses used by the default domains by referencing IP addresses for default domains .
- You can use the following Python script to create a list of IP address ranges that include those used by the default domains for Google APIs and services.

