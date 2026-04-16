---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.452Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Auto mode VPC subnet expansion for northamerica-south1"
feature_slug: "auto-mode-vpc-subnet-expansion-for-northamerica-south1"
latest_feature_date: "2024-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/subnets"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
keywords:
  - "auto"
  - "mode"
  - "vpc"
  - "subnet"
  - "expansion"
  - "for"
  - "northamerica"
  - "south1"
---

# Auto mode VPC subnet expansion for northamerica-south1

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Added a new auto mode VPC subnet range of 10.224.0.0/20 for the northamerica-south1 (Mexico) region.

## Extended Definition

Added a new auto mode VPC subnet range of 10.224.0.0/20 for the northamerica-south1 (Mexico) region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)

## Supporting Pages

### Subnets \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- Auto mode IPv4 ranges This table lists the IPv4 ranges for the automatically created subnets in an auto mode VPC network.
- For example, auto mode VPC networks do create subnets that fit within a predefined auto mode IP range.
- When you create an IPv4 subnet range, you provide the following information: Subnet setting Valid values Details IPv4 range A valid range that you choose Required Secondary IPv4 range A valid range that you choose Optional When you create an IPv6 subnet range, you specify the access type and the source of the IP addresses: Access type Address type and source Internal (not internet routable) ULAs : Automatically assigned from the VPC network's /48 ULA range .
- Note: If you want to create subnets with IPv6 address ranges in an auto mode VPC network, you must first convert an auto mode VPC network to custom mode .

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . resource "google compute network" "vpc network" { project = var.project id # Replace this with your project ID in quotes name = "my-auto-mode-network" auto create subnetworks = true mtu = 1460 } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . resource "google compute network" "vpc network" { project = var.project id # Replace this with your project ID in quotes name = "my-custom-mode-network" auto create subnetworks = false mtu = 1460 } Next, add subnets to your network.
- Click Create . gcloud Use the networks create command . gcloud compute networks create NETWORK \ --subnet-mode=auto \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.
- Note: For auto mode VPC networks, you cannot delete any of the automatically created subnets.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Considerations for auto mode VPC networks Auto mode VPC networks are easy to set up and use, and they are well suited for use cases with these attributes: Having subnets automatically created in each region is useful.
- For example, auto mode VPC networks do create subnets that fit within a predefined auto mode IP range.
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- You plan to connect your VPC network to another network: Because the subnets of every auto mode VPC network use the same predefined range of IP addresses, you can't connect auto mode VPC networks to one another by using VPC Network Peering or Cloud VPN.

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Service Project Admins When defining each Service Project Admin, a Shared VPC Admin can grant permission to use the whole host project or just some subnets: Project-level permissions : A Service Project Admin can be defined to have permission to use all subnets in the host project if the Shared VPC Admin grants the role of compute.networkUser for the whole host project to the Service Project Admin.
- The Shared VPC Admin has granted subnet-level or project-level permissions to the necessary Service Project Admins so they can create instances that use the Shared VPC network: A Service Project Admin for Service project A who has subnet-level permissions to the 10.0.1.0/24 subnet can create Instance A in it.
- After new Shared VPC networks or new subnets are added to the host project, a Shared VPC Admin should review the permission bindings for the compute.networkUser role to ensure that the subnet-level permissions for all Service Project Admins match the intended configuration.
- Subnet-level permissions : Alternatively, a Service Project Admin can be granted a more restrictive set of permissions to use only some subnets if the Shared VPC Admin grants the role of compute.networkUser for those selected subnets to the Service Project Admin.

