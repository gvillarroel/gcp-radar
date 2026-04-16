---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.995Z"
product_name: "Cloud NGFW"
product_slug: "cloud-ngfw"
feature_name: "Secure tags for peered VPC networks"
feature_slug: "secure-tags-for-peered-vpc-networks"
latest_feature_date: "2026-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs"
  - "https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial"
  - "https://docs.cloud.google.com/firewall/docs/tutorials/set-up-urlf-tutorial"
  - "https://docs.cloud.google.com/firewall/docs/about-firewalls"
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
Coverage: MEDIUM

## Step 02 Summary

Secure tags with a purpose-data attribute for a VPC network or organization can be used with VPC networks connected through VPC Network Peering.

## Extended Definition

Secure tags with a purpose-data attribute for a VPC network or organization can be used with VPC networks connected through VPC Network Peering.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs)
- [https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial](https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial)
- [https://docs.cloud.google.com/firewall/docs/tutorials/set-up-urlf-tutorial](https://docs.cloud.google.com/firewall/docs/tutorials/set-up-urlf-tutorial)
- [https://docs.cloud.google.com/firewall/docs/about-firewalls](https://docs.cloud.google.com/firewall/docs/about-firewalls)

## Supporting Pages

### "Create and manage firewall rules for RoCE VPC networks \_|\_ Cloud Next\

- URL: [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin, review the following information: RDMA RoCE network profile Cloud NGFW for RoCE VPC networks Because the rules in a regional network firewall policy used by an RoCE VPC network rely heavily on target secure tags and source secure tags, ensure that you're familiar with how to create and manage secure tags and bind secure tags to the VM instances.
- This section describes how to perform the following tasks: Create an RoCE VPC network Create a regional network firewall policy that works with the RoCE VPC network Create rules in the regional network firewall policy Associate the regional network firewall policy with the RoCE VPC network Before you begin Make sure that you review the supported and unsupported features in VPC networks with an RDMA network profile.
- Home Documentation Networking Cloud NGFW Guides Send feedback Create and manage firewall rules for RoCE VPC networks Stay organized with collections Save and categorize content based on your preferences.
- For VPC networks with an RDMA network profile, the default MTU value is 8896 .

### "Set up intrusion detection and prevention service in your network \_|\_\

- URL: [https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial](https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a subnet, run the following command: gcloud compute networks subnets create subnet-ips-server \ --network vpc-ips \ --region asia-southeast1 \ --range 10.0.0.0/24 To create another subnet, run the following command: gcloud compute networks subnets create subnet-ips-client \ --network vpc-ips \ --region us-central1 \ --range 192.168.10.0/24 Create a Cloud Router and a Cloud NAT gateway Before you create client and server Linux VM instances without public IPv4 addresses in the next section, you must create a Cloud Router and a Cloud NAT gateway, which enables these VMs to access the public internet.
- To delete the vpc-ips VPC network, run the following command: gcloud compute networks delete vpc-ips What's next For conceptual information about intrusion detection and prevention service, see Intrusion detection and prevention service overview .
- To add the firewall rule to enable IAP access, run the following command: gcloud compute network-firewall-policies rules create 100 \ --firewall-policy fw-policy-ips \ --direction INGRESS \ --action ALLOW \ --src-ip-ranges 35.235.240.0/20 \ --layer4-configs tcp:22, tcp:3389 \ --global-firewall-policy \ --enable-logging To add the firewall rule to enable Layer 7 inspection for threat prevention and detection, run the following command: gcloud compute network-firewall-policies rules create 200 \ --direction INGRESS \ --firewall-policy fw-policy-ips \ --action apply security profile group \ --dest-ip-ranges SERVER VM IP \ --layer4-configs tcp:0-65535 \ --global-firewall-policy \ --security-profile-group \ //networksecurity.googleapis.com/organizations/ ORGANIZATION ID \ /locations/global/securityProfileGroups/sec-profile-group-ips \ --enable-logging Replace the following: SERVER VM IP : the external IP address of the server VM that you created in the Create the server VM instances section.
- To associate the firewall policy with the VPC network, run the following command: gcloud compute network-firewall-policies associations create \ --firewall-policy fw-policy-ips \ --network vpc-ips \ --name fw-pol-association-ips \ --global-firewall-policy \ --project PROJECT ID Replace the following: PROJECT ID : the project ID where the VPC association is created.

### "Set up URL filtering service in your network \_|\_ Cloud Next Generation\

- URL: [https://docs.cloud.google.com/firewall/docs/tutorials/set-up-urlf-tutorial](https://docs.cloud.google.com/firewall/docs/tutorials/set-up-urlf-tutorial)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a subnet, run the following command: gcloud compute networks subnets create subnet-server-urlf \ --network vpc-urlf \ --region asia-southeast1 \ --range 10.0.0.0/24 To create another subnet, run the following command: gcloud compute networks subnets create subnet-client-urlf \ --network vpc-urlf \ --region us-central1 \ --range 192.168.10.0/24 Create a Cloud Router and a Cloud NAT gateway Before you create client and server Linux VM instances without public IPv4 addresses in the next section, you must create a Cloud Router and a Cloud NAT gateway, which enables these VMs to access the public internet.
- To add the firewall rule to enable IAP access, run the following command: gcloud compute network-firewall-policies rules create 100 \ --firewall-policy fw-policy-urlf \ --direction INGRESS \ --action ALLOW \ --src-ip-ranges 35.235.240.0/20 \ --layer4-configs tcp:22 \ --global-firewall-policy \ --enable-logging To add the firewall rule to enable Layer 7 inspection for URL filtering, run the following command: gcloud compute network-firewall-policies rules create 200 \ --direction EGRESS \ --firewall-policy fw-policy-urlf \ --action apply security profile group \ --dest-ip-ranges 0.0.0.0/0 \ --layer4-configs tcp:80, tcp:443 \ --global-firewall-policy \ --security-profile-group \ //networksecurity.googleapis.com/organizations/ ORGANIZATION ID \ /locations/global/securityProfileGroups/sec-profile-group-urlf \ --enable-logging Replace the following: ORGANIZATION ID : the organization where the secure profile group is created.
- Replace PROJECT ID with the ID of your project. resource.type="networksecurity.googleapis.com/FirewallEndpoint" logName="projects/ PROJECT ID /logs/networksecurity.googleapis.com%2Ffirewall url filter" Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- To delete the vpc-urlf VPC network, run the following command: gcloud compute networks delete vpc-urlf Delete the DNS zone Delete the DNS zone that you created for the server VM domain URL.

### "Cloud NGFW overview \_|\_ Cloud Next Generation Firewall \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firewall/docs/about-firewalls](https://docs.cloud.google.com/firewall/docs/about-firewalls)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud NGFW provides stateful inspection and Layer 7 application control for both north-south traffic (entering or leaving a Virtual Private Cloud (VPC) network) and east-west traffic (communication among resources within VPC networks).
- Cloud NGFW lets you group firewall rules into policy objects that you can apply consistently across multiple Virtual Private Cloud (VPC) networks, either globally or within a specific region.
- Supported VPC networks Cloud NGFW supports the following VPC networks, each designed for specific workload requirements and performance profiles.
- Regular VPC network : Regular VPC networks support the following Cloud NGFW firewall policies: Global network firewall policies Regional network firewall policies Hierarchical firewall policies Regular VPC networks also support VPC firewall rules .

