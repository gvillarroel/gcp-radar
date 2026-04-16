---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.471Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Firewall address groups"
feature_slug: "firewall-address-groups"
latest_feature_date: "2022-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/access-apis-external-ip"
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
  - "https://docs.cloud.google.com/vpc/docs/byoip-planning"
  - "https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges"
keywords:
  - "firewall"
  - "address"
  - "groups"
  - "vpc"
  - "allow"
  - "multiple"
  - "ip"
  - "addresses"
---

# Firewall address groups

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

VPC Firewall address groups allow multiple IP addresses and IP ranges to be combined into a reusable named unit for application across multiple firewall rules.

## Extended Definition

VPC Firewall address groups allow multiple IP addresses and IP ranges to be combined into a reusable named unit for application across multiple firewall rules.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- [https://docs.cloud.google.com/vpc/docs/byoip-planning](https://docs.cloud.google.com/vpc/docs/byoip-planning)
- [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)

## Supporting Pages

### "Access APIs from VMs with external IP addresses \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- Source ID: `site-docs-root-2`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Firewall configuration The firewall configuration of your VPC network must allow access from VMs to the IP addresses used by Google APIs and services.
- The default allow egress firewall rule allows this traffic, if there is no higher priority rule that blocks it. private.googleapis.com Configure DNS records in a private DNS zone to send requests to the following IP addresses: For IPv4 traffic: 199.36.
- Configure DNS for Cloud Storage custom domain names If you are using Cloud Storage buckets, and you send requests to a Cloud Storage custom domain name , configuring DNS records for the custom Cloud Storage domain name to point to the IP addresses for private.googleapis.com or restricted.googleapis.com is not sufficient to allow access to the Cloud Storage buckets.
- Default domains: all IP address ranges for Google APIs and services . private.googleapis.com : 199.36.153.8/30 and 2600:2d00:0002:2000::/56 restricted.googleapis.com : 199.36.153.4/30 and 2600:2d00:0002:1000::/56 Additionally, we recommend that you include 34.126.0.0/18 and 2001:4860:8040::/42 in your egress allow firewall rule.

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- Shared VPC allows an organization to connect resources from multiple projects to a common Virtual Private Cloud (VPC) network so that they can communicate with each other securely and efficiently by using internal IP addresses from that network.
- Instances in service projects attached to a host project that uses the same Shared VPC network can communicate internally with one another by using either their internal IPv4 addresses or their internal or external IPv6 addresses, subject to applicable firewall rules .
- The internal IPv4 or IPv6 address object must be created in the same service project as the resource that uses it, even though the value of the IP address comes from the available IP addresses of the selected shared subnet in a Shared VPC network.
- The external IPv6 address object must be created in the same service project as the resource that uses it, even though the value of the IP address comes from the available IPv6 addresses of the selected shared subnet in a Shared VPC network.

### "Planning for bring your own IP addresses \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/byoip-planning](https://docs.cloud.google.com/vpc/docs/byoip-planning)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BYOIP addresses administration with Shared VPC In this example of an organization that contains Shared VPC, there is a dedicated project, Public IP project , used to manage BYOIP addresses.
- When the Shared VPC host project or the related service projects need public IP addresses, the Public IP Admin for the organization creates the IP addresses in the Shared VPC host project .
- The provisioning process for stocking IP addresses takes multiple weeks to complete, so it's useful to plan and deploy public delegated prefixes long before they are needed.
- The organization can contain multiple projects, and the Public IP Admin can delegate IP addresses to them all from the Public IP project .

### "Configure alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- The first network interface listed, the one in my-subnet1 , is the primary interface: gcloud compute instances create multi-nic-alias-vm \ --machine-type f1-micro \ --network-interface "subnet=my-subnet1,aliases=/32;range1:/24" \ --network-interface "subnet=my-subnet2,aliases=/32;range2:/24" Use the display command to see the interfaces and their addresses: gcloud compute instances describe multi-nic-alias-vm ... networkInterfaces: - ... aliasIpRanges: - ipCidrRange: 172.16.1.2/32 - ipCidrRange: 10.1.0.0/24 subnetworkRangeName: range1 name: nic0 network: .../networks/my-network1 networkIP: 172.16.1.3 subnetwork: .../subnetworks/my-subnet1 ... - ... aliasIpRanges: - ipCidrRange: 172.16.2.2/32 - ipCidrRange: 10.2.0.0/24 subnetworkRangeName: range2 name: nic1 network: .../networks/my-network2 networkIP: 172.16.2.3 subnetwork: .../subnetworks/my-subnet2 API Create two custom mode VPC networks named my-network1 and my-network2 .
- Using a secondary range for alias IP allocation lets you separate the IP space for services hosted in the VM, which helps you create firewall rules that allow access only to the services running on the VM and block access to the VM's primary IP address.
- We recommend keeping the alias IP ranges separate from the primary range of the subnet to create firewall rules that allow access to the services running on a VM, but not to the VM's primary IP address.
- We recommend using a secondary range for alias IP allocation to create firewall rules that allow access to the services running on a VM, but not to the VM's primary IP address.

