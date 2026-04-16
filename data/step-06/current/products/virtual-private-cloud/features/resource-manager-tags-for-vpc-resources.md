---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.462Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Resource Manager tags for VPC resources"
feature_slug: "resource-manager-tags-for-vpc-resources"
latest_feature_date: "2023-08-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network"
  - "https://docs.cloud.google.com/vpc/docs/add-remove-network-tags"
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
keywords:
  - "resource"
  - "manager"
  - "tags"
  - "for"
  - "vpc"
  - "resources"
  - "you"
  - "can"
---

# Resource Manager tags for VPC resources

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

You can now add Resource Manager tags to supported VPC resources.

## Extended Definition

You can now add Resource Manager tags to supported VPC resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network](https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network)
- [https://docs.cloud.google.com/vpc/docs/add-remove-network-tags](https://docs.cloud.google.com/vpc/docs/add-remove-network-tags)
- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)

## Supporting Pages

### "Access the service from another VPC network \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network](https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, expected responses look like Page served from: vm-1 and Page served from: vm-2 . curl -s http://192.168.10.5 Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- Objectives Configure networking for the service consumer resources Create an endpoint Test accessing the endpoint Costs In this document, you use the following billable components of Google Cloud: Virtual Private Cloud Compute Engine To generate a cost estimate based on your projected usage, use the pricing calculator .
- When you finish the tasks that are described in this document, you can avoid continued billing by deleting the resources that you created.
- After you finish these steps, you can delete the project, removing all resources associated with the project.

### Add network tags \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/add-remove-network-tags](https://docs.cloud.google.com/vpc/docs/add-remove-network-tags)
- Source ID: `site-docs-root-2`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform You can use the Terraform resource to create a VM instance that has network tags. resource "google compute instance" "default" { project = var.project id # Replace this with your project ID in quotes zone = "southamerica-east1-b" name = "backend-instance" machine type = "e2-medium" boot disk { initialize params { image = "debian-cloud/debian-9" } } network interface { network = "default" } tags = ["health-check", "ssh"] } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- Perform a GET request to the instance; for example: GET https://compute.googleapis.com/compute/v1/projects/myproject/zones/us-central1-f/instances/example-instance Look for the tags.fingerprint property in the response: 200 OK { ... "tags": { "items": [ "http-server", "db-client" ], "fingerprint": "MW8EqhxILtc=" }, ... } You can also use a gcloud command to get the fingerprint , as shown in the following example: gcloud compute instances describe INSTANCE NAME \ --zone ZONE \ --format="get(tags.fingerprint)" Make a POST request to the instance().setTags method.
- You can then specify tags so that the route only applies to traffic sent from VMs with matching network tags in the specified VPC network.
- For more information about the differences between Resource Manager tags and network tags, see Comparison of Tags and network tags .

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- Shared VPC lets you map each tier of the web service to different projects so that they can be managed by different teams while sharing a common VPC network: Resources, such as instances and load balancer components, for each tier are placed in individual service projects managed by different teams.
- In this way, you can use Shared VPC to organize resources into cost centers for your organization.
- Resources Eligible resources You can use most Google Cloud products and features in Shared VPC service projects.
- Shared VPC Admin ( compute.xpnAdmin and resourcemanager.projectIamAdmin ) • IAM principal in the organization, or • IAM principal in a folder Shared VPC Admins have the Compute Shared VPC Admin ( compute.xpnAdmin ) and Project IAM Admin ( resourcemanager.projectIamAdmin ) roles for the organization or one or more folders.

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- VPC Network Peering also provides certain external IPv6 connectivity to the destination external IPv6 address ranges of the following resources when the routes to those destination external IPv6 addresses are exchanged by VPC Network Peering: Dual-stack and IPv6-only virtual machine (VM) instance network interfaces Forwarding rules for external protocol forwarding Forwarding rules for external passthrough Network Load Balancers VPC Network Peering supports both IPv4 and IPv6 connectivity.
- When the intended peering stack type is IPV4 IPV6 , if a local subnet route for 2001:0db8:0a0b:0c0d::/64 exists, you can't establish a peering connection to a VPC network with a static route whose destination exactly matches 2001:0db8:0a0b:0c0d::/64 or fits within 2001:0db8:0a0b:0c0d::/64 (for example, 2001:0db8:0a0b:0c0d::/96 ).
- If a local static route exists, Google Cloud enforces the following: You can't establish a new peering connection to a VPC network that already contains a subnet route that exactly matches or contains the local static route's destination if the peering configuration results in importing the conflicting subnet route.
- Rules in network firewall policies can use secure Tags , which are different from network tags, to identify targets and sources: When used to specify a target for an ingress or egress rule in a network firewall policy, a Tag can only identify targets in the VPC network to which the Tag is scoped.

