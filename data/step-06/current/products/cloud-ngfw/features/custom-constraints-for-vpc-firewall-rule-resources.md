---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T23:03:42.254Z"
product_name: "Cloud NGFW"
product_slug: "cloud-ngfw"
feature_name: "Custom constraints for VPC firewall rule resources"
feature_slug: "custom-constraints-for-vpc-firewall-rule-resources"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firewall/docs/custom-constraints"
  - "https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs"
  - "https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups"
keywords:
  - "custom"
  - "constraints"
  - "for"
  - "vpc"
  - "firewall"
  - "rule"
  - "resources"
  - "provide"
---

# Custom constraints for VPC firewall rule resources

Product: Cloud NGFW
Coverage: LOW

## Step 02 Summary

Custom constraints provide granular and customizable control over specific fields for VPC firewall rule resources.

## Extended Definition

Custom constraints provide granular and customizable control over specific fields for VPC firewall rule resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/firewall/docs/custom-constraints](https://docs.cloud.google.com/firewall/docs/custom-constraints)
- [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs)
- [https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups](https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups)

## Supporting Pages

### "Manage VPC firewall rule resources by using custom constraints \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/firewall/docs/custom-constraints](https://docs.cloud.google.com/firewall/docs/custom-constraints)
- Source ID: `site-docs-root`
- Final score: 280
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud NGFW supported resources For VPC firewall rules , you can set custom constraints on the following resources and fields.
- Home Documentation Networking Cloud NGFW Guides Send feedback Manage VPC firewall rule resources by using custom constraints Stay organized with collections Save and categorize content based on your preferences.
- Example: Restrict ingress traffic to only standard web ports This constraint blocks the creation of ingress firewall rules that allow traffic from 0.0.0.0/0 on TCP ports other than 80 or 443 . gcloud Create a restrictWebPorts.yaml constraint file with the following information. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictWebPorts resource types : compute.googleapis.com/Firewall condition : "resource.direction.matches('INGRESS') && resource.sourceRanges.all(range, range == '0.0.0.0/0') && resource.allowed.exists(allowed, allowed.IPProtocol != 'tcp' allowed.ports.exists(port, port != '80' && port != '443'))" action type : DENY method types : CREATE display name : Limit firewall rules that allow ingress traffic from 0.0.0.0/0 description : Firewall rules that allow ingress traffic from 0.0.0.0/0 on TCP ports other than 80 or 443.
- All IP address ranges that include TCP port 22 are also blocked. gcloud Create a restrictSshRanges.yaml constraint file with the following information. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictSshRanges resource types : compute.googleapis.com/Firewall condition : "resource.direction.matches('INGRESS') && resource.allowed.containsFirewallPort('tcp', '22') && !resource.sourceRanges.all(range, range == '35.235.240.0/20' range.startsWith('10.') range.startsWith('192.168.'))" action type : DENY method types : CREATE display name : Limit firewall rules that allow ingress SSH traffic description : Firewall rules that allow ingress SSH traffic can only be created with allowed source ranges.

### "Create and manage firewall rules for RoCE VPC networks \_|\_ Cloud Next\

- URL: [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This section describes how to perform the following tasks: Create an RoCE VPC network Create a regional network firewall policy that works with the RoCE VPC network Create rules in the regional network firewall policy Associate the regional network firewall policy with the RoCE VPC network Before you begin Make sure that you review the supported and unsupported features in VPC networks with an RDMA network profile.
- Before you begin, review the following information: RDMA RoCE network profile Cloud NGFW for RoCE VPC networks Because the rules in a regional network firewall policy used by an RoCE VPC network rely heavily on target secure tags and source secure tags, ensure that you're familiar with how to create and manage secure tags and bind secure tags to the VM instances.
- Home Documentation Networking Cloud NGFW Guides Send feedback Create and manage firewall rules for RoCE VPC networks Stay organized with collections Save and categorize content based on your preferences.
- Click Create . gcloud To create an ingress rule that uses the --src-ip-ranges=0.0.0.0/0 flag and applies to all network interfaces in the RoCE VPC network, use the gcloud compute network-firewall-policies rules create command : gcloud compute network-firewall-policies rules create PRIORITY \ --direction=ingress \ --layer4-configs=all \ --enable-logging \ --action ACTION \ --firewall-policy FIREWALL POLICY NAME \ --firewall-policy-region FIREWALL POLICY REGION \ --src-ip-ranges=0.0.0.0/0 To create an ingress rule that uses a source secure tag and applies to specific network interfaces of VMs with an associated secure tag value, use the gcloud compute network-firewall-policies rules create command : gcloud compute network-firewall-policies rules create PRIORITY \ --direction=ingress \ --layer4-configs=all \ --enable-logging \ --action ALLOW \ --firewall-policy FIREWALL POLICY NAME \ --firewall-policy-region FIREWALL POLICY REGION \ --src-secure-tag SRC SECURE TAG [, SRC SECURE TAG ,...] \ --target-secure-tag TARGET SECURE TAG [, TARGET SECURE TAG ,...] Replace the following: PRIORITY : the priority of the rule ACTION : the action on match of the rule If you use --src-ip-ranges=0.0.0.0/0 , you can use either ALLOW or DENY .

### "Configure address groups for firewall policies \_|\_ Cloud Next Generation\

- URL: [https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups](https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Create . gcloud To let IAP access the VM instances in the vpc-producer network, run the following command: To create a firewall policy, run the following command: gcloud compute network-firewall-policies create fw-policy-addressgrp \ --global To create a firewall rule that allows traffic to all destinations and enables logs, run the following command: gcloud compute network-firewall-policies rules create 100 \ --firewall-policy=fw-policy-addressgrp \ --direction=INGRESS \ --action=ALLOW \ --layer4-configs=tcp:22 \ --src-ip-ranges=35.235.240.0/20 \ --global-firewall-policy To associate the firewall policy with the producer VPC network, run the following command: gcloud compute network-firewall-policies associations create \ --firewall-policy=fw-policy-addressgrp \ --network=vpc-producer \ --name=pol-association-vpc-producer \ --global-firewall-policy To associate the firewall policy with the consumer VPC network, run the following command: gcloud compute network-firewall-policies associations create \ --firewall-policy=fw-policy-addressgrp \ --network=vpc-consumer \ --name=pol-association-vpc-consumer \ --global-firewall-policy Create a project-scoped address group Create a project-scoped address group that uses the IP address assigned to the subnet-consumer-allowed subnet of the vpc-consumer VPC network.
- It walks through an example of creating a Virtual Private Cloud (VPC) network with subnets, creating a project-scoped address group, setting up a firewall policy that uses the address group with firewall rules, and then testing the firewall rules.
- In the Hit count column, select the number for the rule you created during Add a firewall rule to allow traffic to an address group .
- For conceptual information about firewall policy rules, see Firewall policy rule components .

