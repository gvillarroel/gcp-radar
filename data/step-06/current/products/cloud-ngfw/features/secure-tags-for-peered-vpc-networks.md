---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T23:03:42.249Z"
product_name: "Cloud NGFW"
product_slug: "cloud-ngfw"
feature_name: "Secure tags for peered VPC networks"
feature_slug: "secure-tags-for-peered-vpc-networks"
latest_feature_date: "2026-03-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs"
  - "https://docs.cloud.google.com/firewall/docs/custom-constraints"
  - "https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups"
keywords:
  - "secure"
  - "tags"
  - "for"
  - "peered"
  - "vpc"
  - "networks"
  - "with"
  - "purpose"
---

# Secure tags for peered VPC networks

Product: Cloud NGFW
Coverage: LOW

## Step 02 Summary

Secure tags with a purpose-data attribute for a VPC network or organization can be used with VPC networks connected through VPC Network Peering.

## Extended Definition

Secure tags with a purpose-data attribute for a VPC network or organization can be used with VPC networks connected through VPC Network Peering.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs)
- [https://docs.cloud.google.com/firewall/docs/custom-constraints](https://docs.cloud.google.com/firewall/docs/custom-constraints)
- [https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups](https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups)

## Supporting Pages

### "Create and manage firewall rules for RoCE VPC networks \_|\_ Cloud Next\

- URL: [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin, review the following information: RDMA RoCE network profile Cloud NGFW for RoCE VPC networks Because the rules in a regional network firewall policy used by an RoCE VPC network rely heavily on target secure tags and source secure tags, ensure that you're familiar with how to create and manage secure tags and bind secure tags to the VM instances.
- This section describes how to perform the following tasks: Create an RoCE VPC network Create a regional network firewall policy that works with the RoCE VPC network Create rules in the regional network firewall policy Associate the regional network firewall policy with the RoCE VPC network Before you begin Make sure that you review the supported and unsupported features in VPC networks with an RDMA network profile.
- Home Documentation Networking Cloud NGFW Guides Send feedback Create and manage firewall rules for RoCE VPC networks Stay organized with collections Save and categorize content based on your preferences.
- For VPC networks with an RDMA network profile, the default MTU value is 8896 .

### "Manage VPC firewall rule resources by using custom constraints \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/firewall/docs/custom-constraints](https://docs.cloud.google.com/firewall/docs/custom-constraints)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enforce the policy. gcloud org-policies set-policy restrictSshRanges-policy.yaml To test the constraint, create an auto mode VPC network. gcloud compute firewall-rules create ssh-firewall-rule \ --action=ALLOW --direction=INGRESS --network= NETWORK \ --priority=1000 --rules=tcp:22 --source-ranges=0.0.0.0/0 Replace NETWORK with your network name.
- Enforce the policy. gcloud org-policies set-policy restrictWebPorts-policy.yaml To test the constraint, create an auto mode VPC network. gcloud compute firewall-rules create ssh-firewall-rule \ --action=ALLOW --direction=INGRESS --network= NETWORK \ --priority=1000 --rules=tcp:22 --source-ranges=0.0.0.0/0 Replace NETWORK with your network name.
- For more information, see Scope organization policies with tags .
- Example: Restrict ingress traffic to only standard web ports This constraint blocks the creation of ingress firewall rules that allow traffic from 0.0.0.0/0 on TCP ports other than 80 or 443 . gcloud Create a restrictWebPorts.yaml constraint file with the following information. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictWebPorts resource types : compute.googleapis.com/Firewall condition : "resource.direction.matches('INGRESS') && resource.sourceRanges.all(range, range == '0.0.0.0/0') && resource.allowed.exists(allowed, allowed.IPProtocol != 'tcp' allowed.ports.exists(port, port != '80' && port != '443'))" action type : DENY method types : CREATE display name : Limit firewall rules that allow ingress traffic from 0.0.0.0/0 description : Firewall rules that allow ingress traffic from 0.0.0.0/0 on TCP ports other than 80 or 443.

### "Configure address groups for firewall policies \_|\_ Cloud Next Generation\

- URL: [https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups](https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Peer vpc-consumer with vpc-producer To successfully establish VPC Network Peering, you must separately configure the peering association for the vpc-consumer and the vpc-producer networks.
- To create a subnet, run the following command: gcloud compute networks subnets create subnet-consumer-allowed \ --network=vpc-consumer \ --region=us-central1 \ --range=192.168.10.0/29 To create another subnet, run the following command: gcloud compute networks subnets create subnet-consumer-blocked \ --network=vpc-consumer \ --region=us-central1 \ --range=192.168.20.0/29 Create a producer VPC network with subnet In this section, you create a producer VPC network with an IPv4 subnet.
- The following diagram shows the traffic between producer and consumer VMs in the us-central1 region within two custom VPC networks.
- Objectives This tutorial shows you how to complete the following tasks: Create two custom VPC networks with subnets.

