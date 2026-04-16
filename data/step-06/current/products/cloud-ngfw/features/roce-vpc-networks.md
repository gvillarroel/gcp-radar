---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.997Z"
product_name: "Cloud NGFW"
product_slug: "cloud-ngfw"
feature_name: "RoCE VPC networks"
feature_slug: "roce-vpc-networks"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs"
  - "https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints"
  - "https://docs.cloud.google.com/firewall/docs/about-security-profiles"
  - "https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation"
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
Coverage: MEDIUM

## Step 02 Summary

RoCE VPC networks support creating RDMA over converged ethernet networks and applying firewall rules to them; RoCE VPC networks support creating RDMA over converged ethernet networks and applying firewall rules to them.

## Extended Definition

RoCE VPC networks support creating RDMA over converged ethernet networks and applying firewall rules to them; RoCE VPC networks support creating RDMA over converged ethernet networks and applying firewall rules to them.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs)
- [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints)
- [https://docs.cloud.google.com/firewall/docs/about-security-profiles](https://docs.cloud.google.com/firewall/docs/about-security-profiles)
- [https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation](https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation)

## Supporting Pages

### "Create and manage firewall rules for RoCE VPC networks \_|\_ Cloud Next\

- URL: [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs)
- Source ID: `site-docs-root`
- Final score: 283
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A Virtual Private Cloud (VPC) network that uses the Remote Direct Memory Access (RDMA) over Converged Ethernet (RoCE) network profile is called an RoCE VPC network .
- This section describes how to perform the following tasks: Create an RoCE VPC network Create a regional network firewall policy that works with the RoCE VPC network Create rules in the regional network firewall policy Associate the regional network firewall policy with the RoCE VPC network Before you begin Make sure that you review the supported and unsupported features in VPC networks with an RDMA network profile.
- Before you begin, review the following information: RDMA RoCE network profile Cloud NGFW for RoCE VPC networks Because the rules in a regional network firewall policy used by an RoCE VPC network rely heavily on target secure tags and source secure tags, ensure that you're familiar with how to create and manage secure tags and bind secure tags to the VM instances.
- What's next Network profiles overview Cloud NGFW for RoCE VPC networks Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Firewall endpoint overview \_|\_ Cloud Next Generation Firewall \_|\_ Google\

- URL: [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ability Necessary role Create a new firewall endpoint Any of the following roles on the organization where the firewall endpoint is created: Compute Network Admin ( roles/compute.networkAdmin ) Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin ) Modify an existing firewall endpoint Any of the following roles on the organization: Compute Network Admin ( roles/compute.networkAdmin ) Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin ) View details about the firewall endpoint in an organization Any of the following roles on the organization: Compute Network Admin ( roles/compute.networkAdmin ) Compute Network User ( roles/compute.networkUser ) Compute Network Viewer ( roles/compute.networkViewer ) Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin ) View all the firewall endpoints in an organization Any of the following roles on the organization: Compute Network Admin ( roles/compute.networkAdmin ) Compute Network User ( roles/compute.networkUser ) Compute Network Viewer ( roles/compute.networkViewer ) Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin ) IAM roles govern the following actions for the firewall endpoint associations: Creating a firewall endpoint association in a project Modifying or deleting a firewall endpoint association Viewing details of a firewall endpoint association Viewing all the firewall endpoint associations configured in a project The following table describes the roles that are necessary for each step.
- If you have multiple VPC networks with overlapping IP address ranges, this network identifier helps to ensure that each redirected packet is correctly associated with its VPC network.
- Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin ) Modify (update or delete) the firewall endpoint associations Any of the following roles on the project where the VPC network exists: Compute Network Admin ( roles/compute.networkAdmin ) Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin ) View details about the firewall endpoint association in a project Any of the following roles on the organization: Compute Network Admin ( roles/compute.networkAdmin ) Compute Network User ( roles/compute.networkUser ) Compute Network Viewer ( roles/compute.networkViewer ) Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin ) View all of the firewall endpoint associations in a project.
- Identity and Access Management roles Identity and Access Management (IAM) roles govern the following actions for managing the firewall endpoints: Creating a firewall endpoint in an organization Modifying or deleting a firewall endpoint Viewing details of a firewall endpoint Viewing all the firewall endpoints configured in an organization The following table describes the roles that are necessary for each step.

### "Security profile overview \_|\_ Cloud Next Generation Firewall \_|\_ Google\

- URL: [https://docs.cloud.google.com/firewall/docs/about-security-profiles](https://docs.cloud.google.com/firewall/docs/about-security-profiles)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Identity and Access Management roles Identity and Access Management (IAM) roles govern the following security profiles actions: Creating a security profile in an organization Modifying or deleting a security profile Viewing details of a security profile Viewing a list of security profiles in an organization Using a security profile in a security profile group The following table describes the roles that are necessary for each step.
- View details about the security profile in an organization Any of the following roles for the organization: Compute Network Admin ( roles/compute.networkAdmin ) Compute Network User ( roles/compute.networkUser ) Compute Network Viewer ( roles/compute.networkViewer ) Security Profile Admin ( roles/networksecurity.securityProfileAdmin ) View all of the security profiles in an organization Any of the following roles for the organization: Compute Network Admin ( roles/compute.networkAdmin ) Compute Network User ( roles/compute.networkUser ) Compute Network Viewer ( roles/compute.networkViewer ) Security Profile Admin ( roles/networksecurity.securityProfileAdmin ) Use a security profile in a security profile group Any of the following roles for the organization: Compute Network Admin ( roles/compute.networkAdmin ) Compute Network User ( roles/compute.networkUser ) Security Profile Admin ( roles/networksecurity.securityProfileAdmin ) Quotas To view quotas associated with security profiles, see Quotas and limits .
- When you create a security profile of type threat-prevention , the following default threat signatures with default severity and associated actions are added to the profile: Vulnerability detection signatures Anti-spyware signatures Antivirus signatures DNS signatures You have the option to add severity overrides to your threat prevention security profiles.
- Ability Necessary role Create a security profile Compute Network Admin ( roles/compute.networkAdmin ) and Security Profile Admin ( roles/networksecurity.securityProfileAdmin ) roles on the organization where the security profile is created.

### "Configure global network firewall policy to deny egress connections to specific\

- URL: [https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation](https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- To create a subnet, run the following command: gcloud compute networks subnets create subnet-1-us \ --network=vpc-geo-location \ --region=us-central1 \ --range=10.0.0.0/24 To create another subnet, run the following command: gcloud compute networks subnets create subnet-2-sg \ --network=vpc-geo-location \ --region=asia-southeast1 \ --range=192.168.200.0/24 Create VMs In this section, you create two VMs in the subnets you configured in the preceding section.
- When you delete a VPC, its subnets are also deleted. gcloud To delete the subnet subnet-1-us of the vpc-geo-location VPC network, run the following command: gcloud compute networks subnets delete subnet-1-us \ --region=us-central1 When prompted, press Y to confirm, and then press Enter .
- To delete the subnet subnet-2-sg of the vpc-geo-location VPC network, run the following command: gcloud compute networks subnets delete subnet-2-sg \ --region=asia-southeast1 When prompted, press Y to confirm and press Enter .
- It walks through an example of creating a Virtual Private Cloud (VPC) network with two subnets, setting up a firewall policy with geolocation firewall rules, and then testing the firewall rules.

