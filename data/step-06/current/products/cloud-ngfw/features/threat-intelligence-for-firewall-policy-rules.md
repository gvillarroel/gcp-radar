---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.999Z"
product_name: "Cloud NGFW"
product_slug: "cloud-ngfw"
feature_name: "Threat Intelligence for firewall policy rules"
feature_slug: "threat-intelligence-for-firewall-policy-rules"
latest_feature_date: "2023-06-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firewall/docs/address-groups-firewall-policies"
  - "https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs"
  - "https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress"
  - "https://docs.cloud.google.com/firewall/docs/quickstarts/configure-hfwpolicy-allow-egress-vpc"
keywords:
  - "threat"
  - "intelligence"
  - "for"
  - "firewall"
  - "policy"
  - "rules"
  - "secures"
  - "networks"
---

# Threat Intelligence for firewall policy rules

Product: Cloud NGFW
Coverage: MEDIUM

## Step 02 Summary

Threat Intelligence for firewall policy rules secures networks by allowing or blocking traffic based on threat intelligence data.

## Extended Definition

Threat Intelligence for firewall policy rules secures networks by allowing or blocking traffic based on threat intelligence data.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firewall/docs/address-groups-firewall-policies](https://docs.cloud.google.com/firewall/docs/address-groups-firewall-policies)
- [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs)
- [https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress](https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress)
- [https://docs.cloud.google.com/firewall/docs/quickstarts/configure-hfwpolicy-allow-egress-vpc](https://docs.cloud.google.com/firewall/docs/quickstarts/configure-hfwpolicy-allow-egress-vpc)

## Supporting Pages

### "Address groups for firewall policies \_|\_ Cloud Next Generation Firewall\

- URL: [https://docs.cloud.google.com/firewall/docs/address-groups-firewall-policies](https://docs.cloud.google.com/firewall/docs/address-groups-firewall-policies)
- Source ID: `site-docs-root`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Use address groups Firewall policy rule components Google Threat Intelligence for firewall policy rules Fully qualified domain name objects Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For information about how source address groups work with other source filters in the ingress rules, see Sources for ingress rules in hierarchical firewall policies and Sources for ingress rules in network firewall policies .
- For both project-scoped and organization-scoped address groups, the location of the address group must match with the location of the firewall policy.
- For example, if you want to define your own threat intelligence list and add it to a rule, create an address group with the required IP addresses.

### "Create and manage firewall rules for RoCE VPC networks \_|\_ Cloud Next\

- URL: [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This section describes how to perform the following tasks: Create an RoCE VPC network Create a regional network firewall policy that works with the RoCE VPC network Create rules in the regional network firewall policy Associate the regional network firewall policy with the RoCE VPC network Before you begin Make sure that you review the supported and unsupported features in VPC networks with an RDMA network profile.
- Before you begin, review the following information: RDMA RoCE network profile Cloud NGFW for RoCE VPC networks Because the rules in a regional network firewall policy used by an RoCE VPC network rely heavily on target secure tags and source secure tags, ensure that you're familiar with how to create and manage secure tags and bind secure tags to the VM instances.
- NETWORK URL : the URL of the VPC network where you're adding the subnet SUBNET : a name for the subnet Create a regional network firewall policy RoCE VPC networks only support regional network firewall policies that have a policy type of RDMA ROCE POLICY .
- Home Documentation Networking Cloud NGFW Guides Send feedback Create and manage firewall rules for RoCE VPC networks Stay organized with collections Save and categorize content based on your preferences.

### "Configure a global network firewall policy to allow egress traffic to an\

- URL: [https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress](https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to create a custom VPC network, VM, Cloud Router, Cloud NAT, global network firewall policy and its rules, and to view the logs, ask your administrator to grant you the following IAM roles on the project: Compute Network Admin role ( roles/compute.networkAdmin ) Compute Instance Admin (v1) role ( roles/compute.instanceAdmin.v1 ) Compute Security Admin role ( roles/compute.securityAdmin ) Logs Viewer role ( roles/logging.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- This quickstart creates a Virtual Private Cloud (VPC) network with a subnet, creates a virtual machine (VM) instance in the VPC network, sets up a firewall policy that uses egress rules, and then tests the firewall policy from the VM.
- Create a global network firewall policy to allow IAP TCP tunneling To allow Identity-Aware Proxy tunneling for the VMs in your network, create a global network firewall policy and add a firewall rule to the policy.
- In the Hit count column, click the number for the rule that you created in the Create a global network firewall policy section.

### "Configure a hierarchical firewall policy to allow egress traffic from a\

- URL: [https://docs.cloud.google.com/firewall/docs/quickstarts/configure-hfwpolicy-allow-egress-vpc](https://docs.cloud.google.com/firewall/docs/quickstarts/configure-hfwpolicy-allow-egress-vpc)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a hierarchical firewall policy and add firewall rules Create a hierarchical firewall policy and add the following firewall policy rules to it: Enable IAP for all the VMs in test-folder to enable administrative access to the VMs.
- The page walks through an example of creating two VPC networks, creating virtual machine (VM) instances in the VPC networks, setting up a hierarchical firewall policy with firewall rules, and then testing the firewall policy.
- For firewall policy rules concepts, see the Firewall policy rule components .
- Add a firewall rule to enable IAP in all the VMs in the test-folder To enable IAP to connect to all the VMs in the test-folder , you need a firewall rule in the hierarchical firewall policy with the following characteristics: Applies to all VMs in the test-folder that you want to be accessible by using IAP TCP forwarding.

