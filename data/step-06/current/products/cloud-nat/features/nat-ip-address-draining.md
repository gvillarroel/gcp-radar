---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:57:06.738Z"
product_name: "Cloud NAT"
product_slug: "cloud-nat"
feature_name: "NAT IP address draining"
feature_slug: "nat-ip-address-draining"
latest_feature_date: "2019-09-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/nat/docs/set-up-network-address-translation"
  - "https://docs.cloud.google.com/nat/docs/overview"
  - "https://docs.cloud.google.com/nat/docs/troubleshooting"
keywords:
  - "nat"
  - "ip"
  - "address"
  - "draining"
  - "can"
  - "drain"
  - "addresses"
  - "to"
---

# NAT IP address draining

Product: Cloud NAT
Coverage: LOW

## Step 02 Summary

Cloud NAT can drain NAT IP addresses to transition traffic away from selected addresses.

## Extended Definition

Cloud NAT can drain NAT IP addresses to transition traffic away from selected addresses.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- [https://docs.cloud.google.com/nat/docs/troubleshooting](https://docs.cloud.google.com/nat/docs/troubleshooting)

## Supporting Pages

### "Quickstart: Set up and manage network address translation with Public NAT\

- URL: [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Drain external IP addresses assigned to NAT Before you remove a manually configured IP address, you can drain it so that existing connections aren't disrupted.
- For NAT IP addresses , set the IP draining value next to the IP address to On .
- To view NAT status, see the Status column for your NAT gateway. gcloud You can view the NAT configuration details by running the following commands: View the Public NAT gateway configuration. gcloud compute routers nats describe NAT CONFIG \ --router= ROUTER NAME \ --region= REGION Replace the following: NAT CONFIG : the name of your NAT configuration ROUTER NAME : the name of your Cloud Router REGION : the region of the NAT to describe; if not specified, you might be prompted to select a region (interactive mode only) View the mapping of the IP:port-ranges allocated to each VM's interface. gcloud compute routers get-nat-mapping-info ROUTER NAME \ --region= REGION View the status of the Public NAT gateway. gcloud compute routers get-status ROUTER NAME \ --region= REGION View external IP addresses assigned to a Cloud NAT gateway By default, Cloud NAT gateways for Public NAT use automatic IP address allocation.
- The following example disables NAT for IPv6 subnet ranges: gcloud compute routers nats update NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --clear-nat64-subnet-ip-ranges Replace the following: NAT CONFIG : the name of your NAT configuration NAT ROUTER : the name of your Cloud Router REGION : the region of the NAT gateway Update external IP addresses assigned to NAT You can change the list of external IP addresses for a given gateway or switch from manual to automatic IP allocation.

### Cloud NAT overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Scalability Cloud NAT can be configured to automatically scale the number of NAT IP addresses that it uses, and it supports VMs that belong to managed instance groups, including the groups with autoscaling enabled.
- If you use manual NAT IP address assignment to configure a Cloud NAT gateway for Public NAT, you can confidently share a set of common external source IP addresses with a destination party.
- Benefits Cloud NAT provides the following benefits: Security When using a Cloud NAT gateway for Public NAT, you can reduce the need for individual VMs to each have external IP addresses.
- Subject to egress firewall rules , VMs without external IP addresses can access destinations on the internet.

### Troubleshoot configuration \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/troubleshooting](https://docs.cloud.google.com/nat/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When Cloud NAT can and cannot be used Does Cloud NAT apply to instances, including GKE node VMs, that have external IP addresses?
- Common issues VMs can reach the internet unexpectedly, without Cloud NAT If your virtual machine (VM) instances or container instances can reach the internet without Cloud NAT, but you don't want them to, check for the following issues: Determine if the VM's network interface has an external IP address.
- Dropped received packets A Cloud NAT gateway maintains a connection tracking table to store active connection details and IP address and port mappings—how VM IP addresses and ports translate to NAT IP addresses and ports.
- If you need to rapidly create a series of TCP connections to the same destination 3-tuple, consider reducing the TCP time wait so that Cloud NAT can more quickly re-use NAT source IP address and source port tuples.

