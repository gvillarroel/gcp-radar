---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.485Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "IPv6 firewall rules"
feature_slug: "ipv6-firewall-rules"
latest_feature_date: "2021-07-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow"
keywords:
  - "ipv6"
  - "firewall"
  - "rules"
  - "now"
  - "references"
  - "to"
  - "address"
  - "ranges"
---

# IPv6 firewall rules

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Firewall rules now support references to IPv6 address ranges.

## Extended Definition

Firewall rules now support references to IPv6 address ranges.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow)

## Supporting Pages

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- To list all subnets in a region and include their IP address utilization, make the following GET request: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks?views=WITH UTILIZATION Describe a subnet You can view the details of an existing subnet—such as its primary IPv4 ranges, secondary IP ranges, IPv6 ranges, IP address utilization, and region—by following the steps in this section.
- A dual-stack subnet can have one of the following configurations for its primary IP address ranges: Internal IPv4 range and internal IPv6 range Internal IPv4 range and external IPv6 range Each subnet in a VPC network can have a different configuration; you don't need to configure them all as dual-stack, for example.
- In both the IPv4 firewall rules tab and the IPv6 firewall rules tab, there is an editable predefined ingress firewall rule; the IPv4 rule is named NETWORK -allow-custom and the IPv6 rule is named NETWORK -allow-ipv6-custom .
- If you want to configure internal IPv6 address ranges on subnets in this network, complete these steps: In the Private IPv6 address settings section, select Configure a ULA internal IPv6 range for this VPC Network .

### "Firewall Insights overview \_|\_ Network Intelligence Center - Firewall\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- With these insights, you can perform the following tasks: Identify firewall misconfigurations for firewall rules containing IPv4 or IPv6 address ranges.
- Note: For firewall rules containing IPv6 address ranges, insights are generated based on firewall logging data gathered only after June 17, 2022.
- Insights help you identify firewall rules that overlap existing rules, rules with no hits, and unused firewall rule attributes such as IP address and port ranges.
- Overly permissive rule insights, including each of the following: Allow rules with no hits Allow rules that are obsolete based on adaptive analysis Allow rules with unused attributes Allow rules with overly permissive IP addresses or port ranges Deny rule insights with no hits during the observation period .

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- Resources within a VPC network can communicate with one another by using internal IPv4 addresses, internal IPv6 addresses, or external IPv6 addresses, subject to applicable network firewall rules.
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- Networks that support subnets with IPv6 address ranges You can create subnets with IPv6 address ranges in a custom mode VPC network.
- Route advertisements and internal IP addresses The following IP addresses are advertised within a VPC network: Regional internal IPv4 addresses Used for primary and secondary IPv4 subnet address ranges Regional internal and external IPv6 addresses Used for internal and external IPv6 subnet address ranges Global internal IPv4 addresses Used for Private Service Connect endpoints for Google APIs If you connect VPC networks using VPC Network Peering, subnet ranges using private IPv4 addresses are always exchanged.

### "Identify and fix ICMP issues \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Console UI snapshot of the trace failing to reach vm2 Create the firewall rule allow-ping-from-known-ranges To allow ingress to the external IP address of vm2 , configure a new VPC firewall rule called allow-ping-from-known-ranges .
- This time, Connectivity Tests tells you that the packet has been delivered to vm2 and that the matched firewall rule, allow-ping-from-known-ranges , allows an inbound ICMP packet to the external IP address of vm2 .
- For the purposes of this tutorial, this source range includes only the external IP address of vm1 , but check any existing firewall rules or rule priorities to make sure that they don't override this new rule.
- In this case, Virtual Private Cloud (VPC) firewall rules prevent the external IP address of one virtual machine (VM) instance from using the ICMP protocol to ping the external IP address of another VM.

