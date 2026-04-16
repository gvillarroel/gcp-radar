---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.464Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC custom constraints"
feature_slug: "vpc-custom-constraints"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
keywords:
  - "vpc"
  - "custom"
  - "constraints"
  - "provides"
  - "to"
  - "control"
  - "specific"
  - "fields"
---

# VPC custom constraints

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Provides custom constraints to control specific fields on selected VPC resources more granularly.

## Extended Definition

Provides custom constraints to control specific fields on selected VPC resources more granularly.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)

## Supporting Pages

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- You can control the following IPv6 configurations using organization policies : Disable VPC External IPv6 usage : If set to true, the constraints/compute.disableVpcExternalIpv6 constraint prevents you from configuring subnets with external IPv6 ranges.
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- IPv6 subnet ranges When you create a subnet with an IPv6 range in a custom mode VPC network, you choose whether the subnet is configured with an internal IPv6 subnet range or an external IPv6 subnet range.
- The following attributes highlight use cases where custom mode VPC networks are recommended or required: Having one subnet automatically created in each region isn't necessary.

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- Route type Route export conditions Route import conditions Dynamic IPv4 routes Not exported by default Export is controlled by using the --export-custom-routes flag Not imported by default Import is controlled by using the --import-custom-routes flag Dynamic IPv6 routes Not exported by default Export is controlled by using the --export-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Not imported by default Import is controlled by using the --import-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Benefits of exchanging static and dynamic routes When one VPC network exports static and dynamic routes and the other VPC network imports those routes, the importing network can send packets directly to the next hop for each imported static or dynamic route whose next hop is in the peer VPC network.
- A network administrator of a local VPC network controls the export of that network's static and dynamic routes—together—by using the --export-custom-routes flag.
- A network administrator of the corresponding peered VPC network controls the import of those static and dynamic routes by using the --import-custom-routes flag.
- VPC Network Peering doesn't provide: A granular method to control the exchange of specific subnet routes, static routes, and dynamic routes.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- For gcloud CLI commands that have a subnet specification flag ( --subnet ), that flag is required to reference subnets in a custom mode VPC network.
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-custom-mode-network" mtu = 1460 subnets = [ { subnet name = "subnet-01" subnet ip = "10.10.10.0/24" subnet region = "us-west1" }, { subnet name = "subnet-02" subnet ip = "10.10.20.0/24" subnet region = "us-west1" subnet private access = "true" subnet flow logs = "true" }, { subnet name = "subnet-03" subnet ip = "10.10.30.0/24" subnet region = "us-west1" subnet flow logs = "true" subnet flow logs interval = "INTERVAL 10 MIN" subnet flow logs sampling = 0.7 subnet flow logs metadata = "INCLUDE ALL METADATA" subnet flow logs filter = "false" } ] } Next, create firewall rules .
- You can omit both flags if you want to configure only external IPv6 on subnets in this VPC network. gcloud compute networks create NETWORK \ --subnet-mode=custom \ [ --enable-ula-internal-ipv6 [ --internal-ipv6-range= ULA IPV6 RANGE ]] \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.
- You can omit both flags if you want to configure only external IPv6 on subnets in this VPC network. gcloud compute networks create NETWORK \ --subnet-mode=custom \ [ --enable-ula-internal-ipv6 [ --internal-ipv6-range= ULA IPV6 RANGE ]] \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- If you are an organization policy administrator , you can specify the following Shared VPC constraints in an organization policy: You can limit the set of host projects to which a non-host project or non-host projects in a folder or organization can be attached.
- Shared VPC lets organization administrators delegate administrative responsibilities, such as creating and managing instances, to Service Project Admins while maintaining centralized control over network resources like subnets, routes, and firewalls.
- A host project with a Shared VPC network provides internal connectivity for two service projects, while a standalone project doesn't use Shared VPC (click to enlarge).
- Security Admins create and manage firewall rules in the Shared VPC network to control traffic among instances in Google Cloud and the on-premises network.

