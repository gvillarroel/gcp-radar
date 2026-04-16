---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.480Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Predefined firewall rules for custom mode VPC networks"
feature_slug: "predefined-firewall-rules-for-custom-mode-vpc-networks"
latest_feature_date: "2021-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network"
keywords:
  - "predefined"
  - "firewall"
  - "rules"
  - "for"
  - "custom"
  - "mode"
  - "vpc"
  - "networks"
---

# Predefined firewall rules for custom mode VPC networks

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

When creating a custom mode VPC network, users can now select predefined firewall rules to quickly apply common instance connectivity patterns.

## Extended Definition

When creating a custom mode VPC network, users can now select predefined firewall rules to quickly apply common instance connectivity patterns.

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
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-custom-mode-network" mtu = 1460 subnets = [ { subnet name = "subnet-01" subnet ip = "10.10.10.0/24" subnet region = "us-west1" }, { subnet name = "subnet-02" subnet ip = "10.10.20.0/24" subnet region = "us-west1" subnet private access = "true" subnet flow logs = "true" }, { subnet name = "subnet-03" subnet ip = "10.10.30.0/24" subnet region = "us-west1" subnet flow logs = "true" subnet flow logs interval = "INTERVAL 10 MIN" subnet flow logs sampling = 0.7 subnet flow logs metadata = "INCLUDE ALL METADATA" subnet flow logs filter = "false" } ] } Next, create firewall rules .
- You can omit both flags if you want to configure only external IPv6 on subnets in this VPC network. gcloud compute networks create NETWORK \ --subnet-mode=custom \ [ --enable-ula-internal-ipv6 [ --internal-ipv6-range= ULA IPV6 RANGE ]] \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.
- You can omit both flags if you want to configure only external IPv6 on subnets in this VPC network. gcloud compute networks create NETWORK \ --subnet-mode=custom \ [ --enable-ula-internal-ipv6 [ --internal-ipv6-range= ULA IPV6 RANGE ]] \ --bgp-routing-mode= DYNAMIC ROUTING MODE \ --mtu= MTU Replace the following: NETWORK : a name for the VPC network.
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . resource "google compute network" "vpc network" { project = var.project id # Replace this with your project ID in quotes name = "my-custom-mode-network" auto create subnetworks = false mtu = 1460 } Next, add subnets to your network.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Rules that come with the default network are also presented as options for you to apply to new auto mode VPC networks that you create by using the Google Cloud console.
- For example, auto mode VPC networks do create subnets that fit within a predefined auto mode IP range.
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- You plan to connect your VPC network to another network: Because the subnets of every auto mode VPC network use the same predefined range of IP addresses, you can't connect auto mode VPC networks to one another by using VPC Network Peering or Cloud VPN.

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: N/A

Evidence snippets:
- The dynamic routing mode of the exporting VPC network—the network that contains the Cloud Routers that learned the prefixes for those dynamic routes— determines the regions in which the peering dynamic routes can be programmed in peer networks: If the dynamic routing mode of the exporting VPC network is regional, then that network exports dynamic routes only in the same region as its Cloud Routers that learned the prefixes.
- To provide a path from the on-premises network to the peered VPC network, a network administrator for the local VPC network must configure Cloud Router custom advertisement mode on the Cloud Router that manages the BGP session for the Cloud VPN tunnel, Cloud Interconnect attachment (VLAN), or Router appliance that connects to the on-premises network.
- Rules in network firewall policies can use secure Tags , which are different from network tags, to identify targets and sources: When used to specify a target for an ingress or egress rule in a network firewall policy, a Tag can only identify targets in the VPC network to which the Tag is scoped.
- When used to specify a source for an ingress rule in a network firewall policy, a Tag can identify sources in both the VPC network to which the Tag is scoped and any peered VPC networks that are connected to the VPC network to which the Tag is scoped.

### "Access the service from another VPC network \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network](https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network)
- Source ID: `site-docs-root-2`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create . gcloud Create a custom mode VPC network: gcloud compute networks create consumer-network --subnet-mode=custom In the consumer-network network, create a subnet. gcloud compute networks subnets create consumer-subnet \ --network=consumer-network \ --range=192.168.10.0/24 \ --region= REGION Replace REGION with the same region as the published service that you created.
- For Subnet creation mode , select Custom .
- Create a forwarding rule to connect the endpoint to the service producer's service attachment. gcloud compute forwarding-rules create ep-1 \ --region= REGION \ --network=consumer-network \ --address=ep-ip-1 \ --target-service-attachment=projects/ PRODUCER PROJECT /regions/ REGION /serviceAttachments/published-service Replace the following: PRODUCER PROJECT : the project ID of the service producer project.
- Click Create . gcloud Create the fw-allow-ssh firewall rule to allow SSH connectivity to VMs with the network tag allow-ssh . gcloud compute firewall-rules create fw-allow-ssh \ --network=consumer-network \ --action=allow \ --direction=ingress \ --source-ranges=0.0.0.0/0 \ --target-tags=allow-ssh \ --rules=tcp:22 Create an endpoint Create an endpoint that points to the published service that you created.

