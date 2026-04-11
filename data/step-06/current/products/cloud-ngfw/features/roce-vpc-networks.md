---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T23:03:42.250Z"
product_name: "Cloud NGFW"
product_slug: "cloud-ngfw"
feature_name: "RoCE VPC networks"
feature_slug: "roce-vpc-networks"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs"
  - "https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints"
  - "https://docs.cloud.google.com/firewall/docs/about-firewalls"
keywords:
  - "roce"
  - "vpc"
  - "networks"
  - "creating"
  - "rdma"
  - "over"
  - "converged"
  - "ethernet"
---

# RoCE VPC networks

Product: Cloud NGFW
Coverage: LOW

## Step 02 Summary

RoCE VPC networks support creating RDMA over converged ethernet networks and applying firewall rules to them; RoCE VPC networks support creating RDMA over converged ethernet networks and applying firewall rules to them.

## Extended Definition

RoCE VPC networks support creating RDMA over converged ethernet networks and applying firewall rules to them; RoCE VPC networks support creating RDMA over converged ethernet networks and applying firewall rules to them.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs)
- [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints)
- [https://docs.cloud.google.com/firewall/docs/about-firewalls](https://docs.cloud.google.com/firewall/docs/about-firewalls)

## Supporting Pages

### "Create and manage firewall rules for RoCE VPC networks \_|\_ Cloud Next\

- URL: [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A Virtual Private Cloud (VPC) network that uses the Remote Direct Memory Access (RDMA) over Converged Ethernet (RoCE) network profile is called an RoCE VPC network .
- This section describes how to perform the following tasks: Create an RoCE VPC network Create a regional network firewall policy that works with the RoCE VPC network Create rules in the regional network firewall policy Associate the regional network firewall policy with the RoCE VPC network Before you begin Make sure that you review the supported and unsupported features in VPC networks with an RDMA network profile.
- Before you begin, review the following information: RDMA RoCE network profile Cloud NGFW for RoCE VPC networks Because the rules in a regional network firewall policy used by an RoCE VPC network rely heavily on target secure tags and source secure tags, ensure that you're familiar with how to create and manage secure tags and bind secure tags to the VM instances.
- What's next Network profiles overview Cloud NGFW for RoCE VPC networks Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Firewall endpoint overview \_|\_ Cloud Next Generation Firewall \_|\_ Google\

- URL: [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Ability Necessary role Create a new firewall endpoint Any of the following roles on the organization where the firewall endpoint is created: Compute Network Admin ( roles/compute.networkAdmin ) Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin ) Modify an existing firewall endpoint Any of the following roles on the organization: Compute Network Admin ( roles/compute.networkAdmin ) Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin ) View details about the firewall endpoint in an organization Any of the following roles on the organization: Compute Network Admin ( roles/compute.networkAdmin ) Compute Network User ( roles/compute.networkUser ) Compute Network Viewer ( roles/compute.networkViewer ) Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin ) View all the firewall endpoints in an organization Any of the following roles on the organization: Compute Network Admin ( roles/compute.networkAdmin ) Compute Network User ( roles/compute.networkUser ) Compute Network Viewer ( roles/compute.networkViewer ) Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin ) IAM roles govern the following actions for the firewall endpoint associations: Creating a firewall endpoint association in a project Modifying or deleting a firewall endpoint association Viewing details of a firewall endpoint association Viewing all the firewall endpoint associations configured in a project The following table describes the roles that are necessary for each step.
- If you have multiple VPC networks with overlapping IP address ranges, this network identifier helps to ensure that each redirected packet is correctly associated with its VPC network.
- Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin ) Modify (update or delete) the firewall endpoint associations Any of the following roles on the project where the VPC network exists: Compute Network Admin ( roles/compute.networkAdmin ) Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin ) View details about the firewall endpoint association in a project Any of the following roles on the organization: Compute Network Admin ( roles/compute.networkAdmin ) Compute Network User ( roles/compute.networkUser ) Compute Network Viewer ( roles/compute.networkViewer ) Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin ) View all of the firewall endpoint associations in a project.
- Identity and Access Management roles Identity and Access Management (IAM) roles govern the following actions for managing the firewall endpoints: Creating a firewall endpoint in an organization Modifying or deleting a firewall endpoint Viewing details of a firewall endpoint Viewing all the firewall endpoints configured in an organization The following table describes the roles that are necessary for each step.

### "Cloud NGFW overview \_|\_ Cloud Next Generation Firewall \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firewall/docs/about-firewalls](https://docs.cloud.google.com/firewall/docs/about-firewalls)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Regular VPC network : Regular VPC networks support the following Cloud NGFW firewall policies: Global network firewall policies Regional network firewall policies Hierarchical firewall policies Regular VPC networks also support VPC firewall rules .
- Cloud NGFW provides stateful inspection and Layer 7 application control for both north-south traffic (entering or leaving a Virtual Private Cloud (VPC) network) and east-west traffic (communication among resources within VPC networks).
- Cloud NGFW lets you group firewall rules into policy objects that you can apply consistently across multiple Virtual Private Cloud (VPC) networks, either globally or within a specific region.
- Supported VPC networks Cloud NGFW supports the following VPC networks, each designed for specific workload requirements and performance profiles.

