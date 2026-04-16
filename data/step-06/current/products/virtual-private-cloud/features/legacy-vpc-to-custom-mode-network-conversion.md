---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.482Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Legacy VPC to custom mode network conversion"
feature_slug: "legacy-vpc-to-custom-mode-network-conversion"
latest_feature_date: "2021-11-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network"
keywords:
  - "legacy"
  - "vpc"
  - "to"
  - "custom"
  - "mode"
  - "network"
  - "conversion"
  - "converting"
---

# Legacy VPC to custom mode network conversion

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Converting single-region legacy networks to custom mode VPC networks is now available in Preview.

## Extended Definition

Converting single-region legacy networks to custom mode VPC networks is now available in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network](https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network)

## Supporting Pages

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: N/A

Evidence snippets:
- Converting an auto mode VPC network to a custom mode VPC network preserves all of its automatically created subnets and any subnets you have added.
- Legacy networks show a subnet creation mode of LEGACY , while VPC networks show either AUTO or CUSTOM .
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-custom-mode-network" mtu = 1460 subnets = [ { subnet name = "subnet-01" subnet ip = "10.10.10.0/24" subnet region = "us-west1" }, { subnet name = "subnet-02" subnet ip = "10.10.20.0/24" subnet region = "us-west1" subnet private access = "true" subnet flow logs = "true" }, { subnet name = "subnet-03" subnet ip = "10.10.30.0/24" subnet region = "us-west1" subnet flow logs = "true" subnet flow logs interval = "INTERVAL 10 MIN" subnet flow logs sampling = 0.7 subnet flow logs metadata = "INCLUDE ALL METADATA" subnet flow logs filter = "false" } ] } Next, create firewall rules .
- NAME SUBNET MODE BGP ROUTING MODE IPV4 RANGE GATEWAY IPV4 custom-network CUSTOM REGIONAL default AUTO REGIONAL legacy-network1 LEGACY REGIONAL 10.240.0.0/16 10.240.0.1 To describe a network and view its details, such as peering connections and subnets, use the networks describe command . gcloud compute networks describe NETWORK Replace NETWORK with the name of the network.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: N/A

Evidence snippets:
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- This is a one-way conversion; custom mode VPC networks cannot be changed to auto mode VPC networks.
- IPv6 subnet ranges When you create a subnet with an IPv6 range in a custom mode VPC network, you choose whether the subnet is configured with an internal IPv6 subnet range or an external IPv6 subnet range.
- The following attributes highlight use cases where custom mode VPC networks are recommended or required: Having one subnet automatically created in each region isn't necessary.

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- To provide a path from the on-premises network to the peered VPC network, a network administrator for the local VPC network must configure Cloud Router custom advertisement mode on the Cloud Router that manages the BGP session for the Cloud VPN tunnel, Cloud Interconnect attachment (VLAN), or Router appliance that connects to the on-premises network.
- To advertise peering subnet routes or aggregate ranges of peering subnet routes, you must enable custom advertised mode, and ensure that the custom advertised routes include the IP address ranges of the subnets in the peered VPC network.
- You can connect a custom mode VPC network to an auto mode VPC network as long as the custom mode VPC network doesn't have any subnet IP address ranges that fit within 10.128.0.0/9 .
- Route type Route export conditions Route import conditions Dynamic IPv4 routes Not exported by default Export is controlled by using the --export-custom-routes flag Not imported by default Import is controlled by using the --import-custom-routes flag Dynamic IPv6 routes Not exported by default Export is controlled by using the --export-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Not imported by default Import is controlled by using the --import-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Benefits of exchanging static and dynamic routes When one VPC network exports static and dynamic routes and the other VPC network imports those routes, the importing network can send packets directly to the next hop for each imported static or dynamic route whose next hop is in the peer VPC network.

### "Access the service from another VPC network \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network](https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network)
- Source ID: `site-docs-root-2`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- Click Create . gcloud Create a custom mode VPC network: gcloud compute networks create consumer-network --subnet-mode=custom In the consumer-network network, create a subnet. gcloud compute networks subnets create consumer-subnet \ --network=consumer-network \ --range=192.168.10.0/24 \ --region= REGION Replace REGION with the same region as the published service that you created.
- Console In the Google Cloud console, go to the VPC networks page.
- Go to VPC networks Click Create VPC network .
- For Subnet creation mode , select Custom .

