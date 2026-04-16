---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.473Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC firewall rule destination/source IP range support"
feature_slug: "vpc-firewall-rule-destination-source-ip-range-support"
latest_feature_date: "2022-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges"
  - "https://docs.cloud.google.com/vpc/docs/alias-ip"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/access-apis-external-ip"
keywords:
  - "vpc"
  - "firewall"
  - "rule"
  - "destination"
  - "source"
  - "ip"
  - "range"
  - "virtual"
---

# VPC firewall rule destination/source IP range support

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Virtual Private Cloud firewall rules now support specifying destination IP ranges for ingress rules and source IP ranges for egress rules, available in Preview.

## Extended Definition

Virtual Private Cloud firewall rules now support specifying destination IP ranges for ingress rules and source IP ranges for egress rules, available in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)

## Supporting Pages

### "Configure alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- Source ID: `site-docs-root-2`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If necessary, add firewall rules to allow pinging an alias IP range: gcloud compute firewall-rules create FIREWALL NAME1 \ --network NETWORK NAME \ --priority 0 \ --source-ranges ALIAS IP \ --allow icmp gcloud compute firewall-rules create FIREWALL NAME2 \ --network NETWORK NAME \ --priority 0 \ --direction out \ --destination-ranges ALIAS IP \ --allow icmp Ensure that the VM recognizes the IP alias ranges as being local.
- Alias IP addresses can be added to firewall rules as source or destination ranges.
- The Terraform arguments have example values that you can change. resource "google compute subnetwork" "network-with-private-secondary-ip-ranges" { project = var.project id # Replace this with your project ID in quotes name = "test-subnetwork" ip cidr range = "10.2.0.0/16" region = "us-central1" network = "test-vpc-network" secondary ip range { range name = "tf-test-secondary-range-update1" ip cidr range = "192.168.10.0/24" } } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- Using a secondary range for alias IP allocation lets you separate the IP space for services hosted in the VM, which helps you create firewall rules that allow access only to the services running on the VM and block access to the VM's primary IP address.

### Alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- Source ID: `site-docs-root-2`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Firewalls All ingress or egress traffic, including traffic for Alias IP ranges, is evaluated by a VPC firewall rule for a matching target tag or target service account .
- Alias IP ranges are not included when you specify sources for an ingress firewall rule using source tags or source service accounts.
- To create this configuration, do the following: When you create the subnet, you configure One primary CIDR range, for example, 10.128.0.0/16 One secondary CIDR range, for example, 172.16.0.0/16 Use an instance template to create VMs and automatically assign each the following: A primary IP from the 10.128.0.0/16 range An Alias range /24 from the secondary CIDR 172.16.0.0/16 space, so that you can assign each container on a VM an IP from the /24 secondary CIDR range Create two firewall rules .
- Key benefits of alias IP ranges When alias IP ranges are configured, Google Cloud automatically installs Virtual Private Cloud (VPC) network routes for primary and alias IP ranges for the subnet of the primary network interface.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resources within a VPC network can communicate with one another by using internal IPv4 addresses, internal IPv6 addresses, or external IPv6 addresses, subject to applicable network firewall rules.
- Firewall rules Both hierarchical firewall policies and VPC firewall rules apply to packets sent to and from VM instances (and resources that depend on VMs, such as Google Kubernetes Engine nodes).
- VM instances in a VPC network containing subnet ranges with privately used public IP addresses are not able to connect to external resources which use those same public IP addresses.
- Specifications VPC networks have the following properties: VPC networks, including their associated routes and firewall rules, are global resources .

### "Access APIs from VMs with external IP addresses \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- Source ID: `site-docs-root-2`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Default domains: all IP address ranges for Google APIs and services . private.googleapis.com : 199.36.153.8/30 and 2600:2d00:0002:2000::/56 restricted.googleapis.com : 199.36.153.4/30 and 2600:2d00:0002:1000::/56 Additionally, we recommend that you include 34.126.0.0/18 and 2001:4860:8040::/42 in your egress allow firewall rule.
- In that case, you must create one egress allow firewall rule whose priority is higher than the egress deny rule for each IP address range used by your chosen domain for Google APIs and services.
- 0.0/18 For IPv6 traffic: 2600:2d00: 0002: 2000::/56 2001:4860: 8040::/42 Ensure that your firewall rules allow egress to the following IP ranges: For IPv4 traffic: 199.36.
- 0.0/18 For IPv6 traffic: 2600:2d00: 0002: 1000::/56 2001:4860: 8040::/42 Ensure that your firewall rules allow egress to the following IP ranges: For IPv4 traffic: 199.36.

