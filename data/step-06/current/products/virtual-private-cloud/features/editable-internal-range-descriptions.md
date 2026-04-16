---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.442Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Editable internal range descriptions"
feature_slug: "editable-internal-range-descriptions"
latest_feature_date: "2025-05-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/alias-ip"
  - "https://docs.cloud.google.com/vpc/docs/add-remove-network-tags"
keywords:
  - "editable"
  - "internal"
  - "range"
  - "descriptions"
  - "allows"
  - "updating"
  - "only"
  - "the"
---

# Editable internal range descriptions

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Allows updating only the description field of an internal range while leaving other settings unchanged; Allows the description field of internal ranges to be edited without recreating the range.

## Extended Definition

Allows updating only the description field of an internal range while leaving other settings unchanged; Allows the description field of internal ranges to be edited without recreating the range.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- [https://docs.cloud.google.com/vpc/docs/add-remove-network-tags](https://docs.cloud.google.com/vpc/docs/add-remove-network-tags)

## Supporting Pages

### "Configure alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- Source ID: `site-docs-root-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- This time, the command succeeds because the interface and the secondary range are in the same subnet. gcloud compute instances network-interfaces update instance-2 \ --zone us-central1-a \ --aliases secondaryrange1:172.16.0.10/32 The output is similar to the following: Updating network interface [nic0] of instance [instance-2]...done.
- Using a secondary range for alias IP allocation lets you separate the IP space for services hosted in the VM, which helps you create firewall rules that allow access only to the services running on the VM and block access to the VM's primary IP address.
- NAME ZONE MACHINE TYPE PREEMPTIBLE INTERNAL IP EXTERNAL IP STATUS instance-1 us-central1-a n1-standard-1 10.128.0.2 47.82.96.9 RUNNING Try to assign an alias IP range from the subnet created in step 1.
- NAME ZONE MACHINE TYPE PREEMPTIBLE INTERNAL IP EXTERNAL IP STATUS instance-2 us-central1-a n1-standard-1 10.9.0.2 38.74.204.89 RUNNING Add an alias IP range to the interface.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- You can omit both flags if you want to configure only external IPv6 on subnets in this VPC network. gcloud compute networks create NETWORK \ --subnet-mode=custom \ [ --enable-ula-internal-ipv6 [ --internal-ipv6-range= ULA IPV6 RANGE ]] \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.
- You can omit both flags if you want to configure only external IPv6 on subnets in this VPC network. gcloud compute networks create NETWORK \ --subnet-mode=custom \ [ --enable-ula-internal-ipv6 [ --internal-ipv6-range= ULA IPV6 RANGE ]] \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.
- After you have enabled a ULA range for your VPC network, you can do the following: Add dual-stack subnets Change an IPv4-only subnet to dual-stack Add IPv6-only subnets To assign an internal ULA range to a network, do the following.
- You can add either an internal or an external IPv6 subnet range to an existing IPv4-only subnet in a custom mode VPC network.

### Alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- Source ID: `site-docs-root-2`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see: Next hop instance internal IP address ( next-hop-address ) Behavior when instances are stopped or deleted VPC Network Peering VPC Network Peering allows you to peer two VPC networks so that the VMs in the two networks can communicate via internal, private IP addresses.
- Static routes When you create a static route that uses a next hop instance specified by an internal IPv4 address, Google Cloud verifies that the next hop VM IP address fits within a subnet IPv4 range of a subnet in the route's VPC network.
- Although you can create a route whose next hop address is an internal IPv4 address that fits within an alias IP range, Google Cloud does not program that route—Google Cloud considers the next hop to be down.
- However, Google Cloud programs the route only if the next hop address is a primary internal IPv4 address assigned to a VM's network interface (NIC) in the route's VPC network (not a peered VPC network).

### Add network tags \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/add-remove-network-tags](https://docs.cloud.google.com/vpc/docs/add-remove-network-tags)
- Source ID: `site-docs-root-2`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can define it using ranges of either internal or external IP addresses or by referring to specific instances.
- When you make the following changes, the ingress firewall rule can take time to apply to or be removed from an associated instance: Starting or stopping an instance that has a tag that is associated with a rule's source tag Starting an instance that has a tag that is associated with a rule's target tag Adding or removing tags from an instance if the tags are used in the source or target fields of a rule Adding or removing source or target tags from a rule This propagation delay applies only to ingress rules that use source tags.
- The source tag for an ingress firewall rule applied on a VPC network defines a source of traffic as coming from the primary internal IP address associated with the network interface attached to that VPC network for any instance having a matching network tag.
- It is made applicable to the primary internal IP address associated with the network interface of any instance attached to that VPC network that has a matching network tag.

