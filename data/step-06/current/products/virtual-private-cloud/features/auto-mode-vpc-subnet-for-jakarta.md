---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.491Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Auto mode VPC subnet for Jakarta"
feature_slug: "auto-mode-vpc-subnet-for-jakarta"
latest_feature_date: "2020-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/subnets"
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
keywords:
  - "auto"
  - "mode"
  - "vpc"
  - "subnet"
  - "for"
  - "jakarta"
  - "networks"
  - "now"
---

# Auto mode VPC subnet for Jakarta

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Auto mode VPC networks now include a new 10.184.0.0/20 subnet for the asia-southeast2 (Jakarta) region.

## Extended Definition

Auto mode VPC networks now include a new 10.184.0.0/20 subnet for the asia-southeast2 (Jakarta) region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)

## Supporting Pages

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: N/A

Evidence snippets:
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . resource "google compute network" "vpc network" { project = var.project id # Replace this with your project ID in quotes name = "my-auto-mode-network" auto create subnetworks = true mtu = 1460 } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . resource "google compute network" "vpc network" { project = var.project id # Replace this with your project ID in quotes name = "my-custom-mode-network" auto create subnetworks = false mtu = 1460 } Next, add subnets to your network.
- Click Create . gcloud Use the networks create command . gcloud compute networks create NETWORK \ --subnet-mode=auto \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.
- Note: For auto mode VPC networks, you cannot delete any of the automatically created subnets.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- Considerations for auto mode VPC networks Auto mode VPC networks are easy to set up and use, and they are well suited for use cases with these attributes: Having subnets automatically created in each region is useful.
- For example, auto mode VPC networks do create subnets that fit within a predefined auto mode IP range.
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- You plan to connect your VPC network to another network: Because the subnets of every auto mode VPC network use the same predefined range of IP addresses, you can't connect auto mode VPC networks to one another by using VPC Network Peering or Cloud VPN.

### Subnets \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- For example, auto mode VPC networks do create subnets that fit within a predefined auto mode IP range.
- Auto mode VPC networks are built with one subnet per region at creation time and automatically receive new subnets in new regions.
- Auto mode IPv4 ranges This table lists the IPv4 ranges for the automatically created subnets in an auto mode VPC network.
- Regular subnets are created by users or automatically created in auto mode VPC networks to be used with VM instances.

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- After new Shared VPC networks or new subnets are added to the host project, a Shared VPC Admin should review the permission bindings for the compute.networkUser role to ensure that the subnet-level permissions for all Service Project Admins match the intended configuration.
- They perform various tasks necessary to set up Shared VPC , such as enabling host projects, attaching service projects to host projects, and delegating access to some or all of the subnets in Shared VPC networks to Service Project Admins.
- A Service Project Admin for Service project C who has project-level permissions to the whole host project can create instances in any of the subnets in any of the VPC networks in the host project.
- Shared VPC networks can be either auto or custom mode , but legacy networks are not supported.

