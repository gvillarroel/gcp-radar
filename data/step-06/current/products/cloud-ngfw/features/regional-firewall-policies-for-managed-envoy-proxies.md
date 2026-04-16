---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.996Z"
product_name: "Cloud NGFW"
product_slug: "cloud-ngfw"
feature_name: "Regional firewall policies for managed Envoy proxies"
feature_slug: "regional-firewall-policies-for-managed-envoy-proxies"
latest_feature_date: "2026-01-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firewall/docs/address-groups-firewall-policies"
  - "https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs"
  - "https://docs.cloud.google.com/firewall/docs/about-firewalls"
  - "https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups"
keywords:
  - "regional"
  - "firewall"
  - "policies"
  - "for"
  - "managed"
  - "envoy"
  - "proxies"
  - "can"
---

# Regional firewall policies for managed Envoy proxies

Product: Cloud NGFW
Coverage: MEDIUM

## Step 02 Summary

Regional firewall policies can protect managed Envoy proxies used by internal Application Load Balancers and internal proxy Network Load Balancers.

## Extended Definition

Regional firewall policies can protect managed Envoy proxies used by internal Application Load Balancers and internal proxy Network Load Balancers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firewall/docs/address-groups-firewall-policies](https://docs.cloud.google.com/firewall/docs/address-groups-firewall-policies)
- [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs)
- [https://docs.cloud.google.com/firewall/docs/about-firewalls](https://docs.cloud.google.com/firewall/docs/about-firewalls)
- [https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups](https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups)

## Supporting Pages

### "Address groups for firewall policies \_|\_ Cloud Next Generation Firewall\

- URL: [https://docs.cloud.google.com/firewall/docs/address-groups-firewall-policies](https://docs.cloud.google.com/firewall/docs/address-groups-firewall-policies)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can share the IP addresses across firewall policies and define more complex, consistent, and robust firewall policies for your network with reduced maintenance overhead.
- Organization-scoped address groups can be used in hierarchical firewall policies , global network firewall policies , and regional network firewall policies .
- Project-scoped address groups can only be used in global network firewall policies and regional network firewall policies .
- For information about how source address groups work with other source filters in the ingress rules, see Sources for ingress rules in hierarchical firewall policies and Sources for ingress rules in network firewall policies .

### "Create and manage firewall rules for RoCE VPC networks \_|\_ Cloud Next\

- URL: [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create . gcloud To create a regional network firewall policy for a RoCE VPC network, use the gcloud compute network-firewall-policies create command : gcloud compute network-firewall-policies create FIREWALL POLICY \ --region REGION \ --policy-type=RDMA ROCE POLICY Replace the following: FIREWALL POLICY : a name for the network firewall policy REGION : a region you want to apply to the policy.
- NETWORK URL : the URL of the VPC network where you're adding the subnet SUBNET : a name for the subnet Create a regional network firewall policy RoCE VPC networks only support regional network firewall policies that have a policy type of RDMA ROCE POLICY .
- Click Create . gcloud To create an ingress rule that uses the --src-ip-ranges=0.0.0.0/0 flag and applies to all network interfaces in the RoCE VPC network, use the gcloud compute network-firewall-policies rules create command : gcloud compute network-firewall-policies rules create PRIORITY \ --direction=ingress \ --layer4-configs=all \ --enable-logging \ --action ACTION \ --firewall-policy FIREWALL POLICY NAME \ --firewall-policy-region FIREWALL POLICY REGION \ --src-ip-ranges=0.0.0.0/0 To create an ingress rule that uses a source secure tag and applies to specific network interfaces of VMs with an associated secure tag value, use the gcloud compute network-firewall-policies rules create command : gcloud compute network-firewall-policies rules create PRIORITY \ --direction=ingress \ --layer4-configs=all \ --enable-logging \ --action ALLOW \ --firewall-policy FIREWALL POLICY NAME \ --firewall-policy-region FIREWALL POLICY REGION \ --src-secure-tag SRC SECURE TAG [, SRC SECURE TAG ,...] \ --target-secure-tag TARGET SECURE TAG [, TARGET SECURE TAG ,...] Replace the following: PRIORITY : the priority of the rule ACTION : the action on match of the rule If you use --src-ip-ranges=0.0.0.0/0 , you can use either ALLOW or DENY .
- Click Associate . gcloud To associate a regional network firewall policy with an RoCE VPC network, use the gcloud compute network-firewall-policies associations create command : gcloud compute network-firewall-policies associations create \ --firewall-policy FIREWALL POLICY \ --network NETWORK \ --firewall-policy-region FIREWALL POLICY REGION Replace the following: FIREWALL POLICY : a name of the regional network firewall policy The regional network firewall policy must have a policy type of RDMA ROCE POLICY .

### "Cloud NGFW overview \_|\_ Cloud Next Generation Firewall \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firewall/docs/about-firewalls](https://docs.cloud.google.com/firewall/docs/about-firewalls)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Remote Direct Memory Access (RDMA) network : You can protect RDMA networks by applying regional network firewall policies .
- For more information, see Global network firewall policies and Regional network firewall policies .
- What's next Cloud NGFW tiers Firewall policies and rules Evaluation order for firewall policies and rules Network profiles Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Regular VPC network : Regular VPC networks support the following Cloud NGFW firewall policies: Global network firewall policies Regional network firewall policies Hierarchical firewall policies Regular VPC networks also support VPC firewall rules .

### "Configure address groups for firewall policies \_|\_ Cloud Next Generation\

- URL: [https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups](https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Networking Cloud NGFW Guides Send feedback Configure address groups for firewall policies Stay organized with collections Save and categorize content based on your preferences.
- For more information about the project-scoped address groups, see Use address groups in firewall policies .
- This tutorial describes how to create and configure address groups for firewall policies in your network.
- What's next For conceptual information about firewall policies, see Firewall policies .

