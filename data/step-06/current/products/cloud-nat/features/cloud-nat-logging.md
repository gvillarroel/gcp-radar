---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.331Z"
product_name: "Cloud NAT"
product_slug: "cloud-nat"
feature_name: "Cloud NAT logging"
feature_slug: "cloud-nat-logging"
latest_feature_date: "2019-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/nat/docs/monitoring"
  - "https://docs.cloud.google.com/nat/docs/set-up-network-address-translation"
  - "https://docs.cloud.google.com/nat/docs/overview"
  - "https://docs.cloud.google.com/nat/docs/troubleshooting"
keywords:
  - "nat"
  - "logging"
  - "provides"
  - "for"
  - "traffic"
  - "and"
  - "operations"
---

# Cloud NAT logging

Product: Cloud NAT
Coverage: MEDIUM

## Step 02 Summary

Cloud NAT provides logging for NAT traffic and operations; Cloud NAT provides logging for NAT traffic and operations.

## Extended Definition

Cloud NAT provides logging for NAT traffic and operations; Cloud NAT provides logging for NAT traffic and operations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/nat/docs/monitoring](https://docs.cloud.google.com/nat/docs/monitoring)
- [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- [https://docs.cloud.google.com/nat/docs/troubleshooting](https://docs.cloud.google.com/nat/docs/troubleshooting)

## Supporting Pages

### Logs and metrics \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/monitoring](https://docs.cloud.google.com/nat/docs/monitoring)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Save . gcloud Use the gcloud compute routers nats update command . gcloud compute routers nats update NAT GATEWAY \ --router= ROUTER NAME \ --region= REGION \ --no-enable-logging Replace the following: NAT GATEWAY : the name of the NAT gateway ROUTER NAME : the name of the Cloud Router that hosts the NAT gateway REGION : the region of the Cloud Router Determine logging status To determine the status for logging, do the following: Console In the Google Cloud console, go to the Cloud NAT page.
- Specifications The following specifications apply to Cloud NAT logging: Cloud NAT logging handles TCP and UDP traffic only.
- What is logged Cloud NAT log entries contain information useful for monitoring and debugging your NAT traffic.
- The following commands enable logging for an existing NAT gateway.

### "Quickstart: Set up and manage network address translation with Public NAT\

- URL: [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- Click Save . gcloud Use the gcloud compute routers nats update command . gcloud compute routers nats update NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ [--enable-endpoint-independent-mapping --no-enable-endpoint-independent-mapping] Replace the following: NAT CONFIG : the name of your NAT configuration NAT ROUTER : the name of your Cloud Router REGION : the region of the NAT to update; if not specified, you might be prompted to select a region (interactive mode only) Update logging To add, modify, or remove logging for an existing Cloud NAT gateway, see Configuring logging .
- Source subnets For IPv4 traffic: Primary and secondary ranges for all subnets Primary ranges for all subnets Custom For IPv6 traffic: All subnets Custom Public NAT supports the following subnet ranges in the region for the VPC network that you specify: For IPv4 traffic: primary and secondary ranges.
- Example setups Use Public NAT with Compute Engine Use Public NAT with GKE Configure IPv6-only subnets and instances with DNS64 and NAT64 What's next Configure logging and monitoring for Cloud NAT.
- To create a Cloud NAT gateway that restricts which subnets and subnet ranges can use NAT, run one of the following commands: Restrict which IPv4 subnet ranges can use NAT: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-custom-subnet-ip-ranges= IPV4 SUBNET RANGES \ --auto-allocate-nat-external-ips Restrict which IPv6 subnet ranges can use NAT: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat64-custom-v6-subnet-ip-ranges= IPV6 SUBNET RANGES \ --auto-allocate-nat-external-ips Restrict both IPv4 and IPv6 subnet ranges: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-custom-subnet-ip-ranges= IPV4 SUBNET RANGES \ --nat64-custom-v6-subnet-ip-ranges= IPV6 SUBNET RANGES \ --auto-allocate-nat-external-ips Replace the following: NAT CONFIG : a name for your NAT configuration NAT ROUTER : the name of the Cloud Router that you created in the previous step REGION : the region where you want to use the Cloud NAT gateway IPV4 SUBNET RANGES : a comma-separated list of subnet names—for example: SUBNET NAME 1:ALL,SUBNET NAME 2:ALL : includes both the primary and all secondary ranges of subnets SUBNET NAME 1 and SUBNET NAME 2 .

### Cloud NAT overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Cloud NAT overview Cloud NAT provides network address translation (NAT) for outbound traffic to the internet, Virtual Private Cloud (VPC) networks, on-premises networks, and other cloud provider networks.
- Logging For Cloud NAT traffic, you can trace the connections and bandwidth for compliance, debugging, analytics, and accounting purposes.
- From a VPC network to a network outside of Google Cloud Private NAT supports the following options for traffic between VPC networks and on-premises or other cloud provider networks: Private-to-private NAT for networks connected through NCC hybrid spokes.
- In this scenario, you create a Cloud NAT gateway for Private NAT that translates traffic between the subnets in your source VPC network and the nonoverlapping subnets of the other network.

### Troubleshoot configuration \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/troubleshooting](https://docs.cloud.google.com/nat/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Increase the value for TCP Transitory Connection Idle Timeout, so that external endpoints that receive traffic (initiated by Google Cloud resources) through a Cloud NAT gateway get more time to respond and to establish the connection.
- When a Cloud NAT gateway provides NAT for a VM, it reserves source address and source port tuples according to the port reservation procedure .
- The destination for your traffic might not be handled by NAT.
- Packets dropped with reason: out of resources If you see packet loss from VMs that use Cloud NAT, this might be because there are not enough available NAT source IP address and source port tuples for the VM to use at the time of the packet loss (port exhaustion).

