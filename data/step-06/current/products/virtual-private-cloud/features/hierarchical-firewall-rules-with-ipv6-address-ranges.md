---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.485Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Hierarchical firewall rules with IPv6 address ranges"
feature_slug: "hierarchical-firewall-rules-with-ipv6-address-ranges"
latest_feature_date: "2021-07-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview"
  - "https://docs.cloud.google.com/vpc/docs/access-apis-external-ip"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges"
keywords:
  - "hierarchical"
  - "firewall"
  - "rules"
  - "with"
  - "ipv6"
  - "address"
  - "ranges"
  - "can"
---

# Hierarchical firewall rules with IPv6 address ranges

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Hierarchical firewall rules can now use IPv6 address ranges for matching and enforcement.

## Extended Definition

Hierarchical firewall rules can now use IPv6 address ranges for matching and enforcement.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)

## Supporting Pages

### "Firewall Insights overview \_|\_ Network Intelligence Center - Firewall\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With these insights, you can perform the following tasks: Identify firewall misconfigurations for firewall rules containing IPv4 or IPv6 address ranges.
- Insights help you identify firewall rules that overlap existing rules, rules with no hits, and unused firewall rule attributes such as IP address and port ranges.
- Note: For firewall rules containing IPv6 address ranges, insights are generated based on firewall logging data gathered only after June 17, 2022.
- Overly permissive rule insights, including each of the following: Allow rules with no hits Allow rules that are obsolete based on adaptive analysis Allow rules with unused attributes Allow rules with overly permissive IP addresses or port ranges Deny rule insights with no hits during the observation period .

### "Access APIs from VMs with external IP addresses \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- Source ID: `site-docs-root-2`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- IPv6 support for private.googleapis.com and restricted.googleapis.com The following IPv6 address ranges can be used to direct traffic from IPv6 clients to Google APIs and services: private.googleapis.com : 2600:2d00:0002:2000::/56 restricted.googleapis.com : 2600:2d00:0002:1000::/56 Consider configuring the IPv6 addresses if you want to use the private.googleapis.com or restricted.googleapis.com domain, and you have clients that use IPv6 addresses.
- 0.0/18 For IPv6 traffic: 2600:2d00: 0002: 2000::/56 2001:4860: 8040::/42 Ensure that your firewall rules allow egress to the following IP ranges: For IPv4 traffic: 199.36.
- 0.0/18 For IPv6 traffic: 2600:2d00: 0002: 1000::/56 2001:4860: 8040::/42 Ensure that your firewall rules allow egress to the following IP ranges: For IPv4 traffic: 199.36.
- Ensure that your firewall rules allow egress to the IP address ranges used by Google APIs and services.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- To list all subnets in a region and include their IP address utilization, make the following GET request: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks?views=WITH UTILIZATION Describe a subnet You can view the details of an existing subnet—such as its primary IPv4 ranges, secondary IP ranges, IPv6 ranges, IP address utilization, and region—by following the steps in this section.
- A dual-stack subnet can have one of the following configurations for its primary IP address ranges: Internal IPv4 range and internal IPv6 range Internal IPv4 range and external IPv6 range Each subnet in a VPC network can have a different configuration; you don't need to configure them all as dual-stack, for example.
- Add a subnet that uses an IPv6 BYOIP address range Bring your own IP addresses (BYOIP) lets you import global unicast address (GUA) ranges that you can assign to a subnet's internal or external IPv6 address range.
- Add an IPv6-only subnet You can create an IPv6-only subnet with external or internal IPv6 addresses enabled.

### "Configure alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- Source ID: `site-docs-root-2`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Alias IP addresses can be added to firewall rules as source or destination ranges.
- We recommend keeping the alias IP ranges separate from the primary range of the subnet to create firewall rules that allow access to the services running on a VM, but not to the VM's primary IP address.
- The Terraform arguments have example values that you can change. resource "google compute subnetwork" "network-with-private-secondary-ip-ranges" { project = var.project id # Replace this with your project ID in quotes name = "test-subnetwork" ip cidr range = "10.2.0.0/16" region = "us-central1" network = "test-vpc-network" secondary ip range { range name = "tf-test-secondary-range-update1" ip cidr range = "192.168.10.0/24" } } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- If necessary, add firewall rules to allow pinging an alias IP range: gcloud compute firewall-rules create FIREWALL NAME1 \ --network NETWORK NAME \ --priority 0 \ --source-ranges ALIAS IP \ --allow icmp gcloud compute firewall-rules create FIREWALL NAME2 \ --network NETWORK NAME \ --priority 0 \ --direction out \ --destination-ranges ALIAS IP \ --allow icmp Ensure that the VM recognizes the IP alias ranges as being local.

