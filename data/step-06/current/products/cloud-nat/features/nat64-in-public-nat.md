---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:57:06.734Z"
product_name: "Cloud NAT"
product_slug: "cloud-nat"
feature_name: "NAT64 in Public NAT"
feature_slug: "nat64-in-public-nat"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/nat/docs/set-up-network-address-translation"
  - "https://docs.cloud.google.com/nat/docs/release-notes"
  - "https://docs.cloud.google.com/nat/docs/troubleshooting"
keywords:
  - "nat64"
  - "in"
  - "public"
  - "nat"
  - "gateways"
  - "ipv6"
  - "to"
  - "ipv4"
---

# NAT64 in Public NAT

Product: Cloud NAT
Coverage: LOW

## Step 02 Summary

Public NAT gateways support IPv6-to-IPv4 network address translation; Public NAT gateways support IPv6-to-IPv4 network address translation.

## Extended Definition

Public NAT gateways support IPv6-to-IPv4 network address translation; Public NAT gateways support IPv6-to-IPv4 network address translation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- [https://docs.cloud.google.com/nat/docs/release-notes](https://docs.cloud.google.com/nat/docs/release-notes)
- [https://docs.cloud.google.com/nat/docs/troubleshooting](https://docs.cloud.google.com/nat/docs/troubleshooting)

## Supporting Pages

### "Quickstart: Set up and manage network address translation with Public NAT\

- URL: [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To create a Cloud NAT gateway that restricts which subnets and subnet ranges can use NAT, run one of the following commands: Restrict which IPv4 subnet ranges can use NAT: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-custom-subnet-ip-ranges= IPV4 SUBNET RANGES \ --auto-allocate-nat-external-ips Restrict which IPv6 subnet ranges can use NAT: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat64-custom-v6-subnet-ip-ranges= IPV6 SUBNET RANGES \ --auto-allocate-nat-external-ips Restrict both IPv4 and IPv6 subnet ranges: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-custom-subnet-ip-ranges= IPV4 SUBNET RANGES \ --nat64-custom-v6-subnet-ip-ranges= IPV6 SUBNET RANGES \ --auto-allocate-nat-external-ips Replace the following: NAT CONFIG : a name for your NAT configuration NAT ROUTER : the name of the Cloud Router that you created in the previous step REGION : the region where you want to use the Cloud NAT gateway IPV4 SUBNET RANGES : a comma-separated list of subnet names—for example: SUBNET NAME 1:ALL,SUBNET NAME 2:ALL : includes both the primary and all secondary ranges of subnets SUBNET NAME 1 and SUBNET NAME 2 .
- To update the source subnet ranges for an existing Cloud NAT gateway, run one of the following commands, depending on the IP version of the subnet ranges that you want to update: Update IPv4 subnet ranges: gcloud compute routers nats update NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-custom-subnet-ip-ranges= IPV4 SUBNET RANGES Update IPv6 subnet ranges: gcloud compute routers nats update NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat64-custom-v6-subnet-ip-ranges= IPV6 SUBNET RANGES Update both IPv4 and IPv6 subnet ranges: gcloud compute routers nats update NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-custom-subnet-ip-ranges= IPV4 SUBNET RANGES \ --nat64-custom-v6-subnet-ip-ranges= IPV6 SUBNET RANGES Replace the following: NAT CONFIG : the name of your NAT configuration NAT ROUTER : the name of your Cloud Router REGION : the region of the NAT gateway IPV4 SUBNET RANGES : a comma-separated list of subnet names—for example: SUBNET NAME 1:ALL,SUBNET NAME 2:ALL : includes both the primary and all secondary ranges of subnets SUBNET NAME 1 and SUBNET NAME 2 .
- To create a Cloud NAT gateway with dynamic port allocation, run one the following commands: For IPv4 subnet ranges: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-all-subnet-ip-ranges \ --auto-allocate-nat-external-ips \ --enable-dynamic-port-allocation \ [--min-ports-per-vm= MIN PORTS ] \ [--max-ports-per-vm= MAX PORTS ] For IPv6 subnet ranges: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat64-all-v6-subnet-ip-ranges \ --auto-allocate-nat-external-ips \ --enable-dynamic-port-allocation \ [--min-ports-per-vm= MIN PORTS ] \ [--max-ports-per-vm= MAX PORTS ] If you are creating the gateway for IPv4 and IPv6 subnet ranges, specify both the --nat-all-subnet-ip-ranges and --nat64-all-v6-subnet-ip-ranges flags in this command.
- To specify the network tier from which the Cloud NAT gateway allocates external IP addresses, run one of the following commands: For IPv4 subnet ranges: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-all-subnet-ip-ranges \ --auto-allocate-nat-external-ips \ --auto-network-tier= AUTO NETWORK TIER For IPv6 subnet ranges: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat64-all-v6-subnet-ip-ranges \ --auto-allocate-nat-external-ips \ --auto-network-tier= AUTO NETWORK TIER If you are creating the gateway for IPv4 and IPv6 subnet ranges, specify both the --nat-all-subnet-ip-ranges and --nat64-all-v6-subnet-ip-ranges flags in this command.

### Cloud NAT release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/release-notes](https://docs.cloud.google.com/nat/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- August 26, 2025 Feature General Availability : Cloud NAT gateways for Public NAT support IPv6 to IPv4 network address translation.
- February 12, 2025 Feature Preview : Cloud NAT gateways for Public NAT support IPv6 to IPv4 network address translation.
- March 31, 2026 Announcement The default TCP TIME WAIT timeout for Cloud NAT is scheduled to decrease from 120 seconds to 30 seconds, across all regions, as follows: From June 30 to September 29, 2026 : new Cloud NAT gateways will use either the 120-second or 30-second default, depending on when the update is deployed in a specific region.
- Cloud NAT gateways configured with a custom TIME WAIT value aren't affected and will continue to use your configured custom value.

### Troubleshoot configuration \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/troubleshooting](https://docs.cloud.google.com/nat/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Does Public NAT let a source VM whose network interface lacks an external IP address send traffic to a destination VM or load balancer that has an external IP address, even when the source and destination are in the same VPC network?
- When the source VM sends a packet to the destination, Public NAT performs source NAT (SNAT) before delivering the packet to the second instance.
- Public NAT performs destination NAT (DNAT) for responses from the second instance to the first.
- Check how many ephemeral source ports are being used: For Linux VMs: netstat -an egrep 'ESTABLISHED TIME WAIT CLOSE WAIT' wc -l For Windows VMs: netstat -tan findstr "ESTABLISHED TIME WAIT CLOSE WAIT" find /c /v "" Configure your VM instances to use a larger set of ephemeral source ports: For Linux VMs: You can view what port range is configured with this command: cat /proc/sys/net/ipv4/ip local port range You can set the ip local port range to the maximum number of ephemeral source ports (64,512) with this command: echo 1024 65535 > /proc/sys/net/ipv4/ip local port range For Windows VMs: You can view what port ranges are configured with these commands: netsh int ipv4 show dynamicport tcp netsh int ipv4 show dynamicport udp You can set the number of ephemeral source TCP and UDP ports to the maximum possible (64,512) with these commands: netsh int ipv4 set dynamicport tcp start=1024 num=64512 netsh int ipv4 set dynamicport udp start=1024 num=64512 On Google Kubernetes Engine nodes, you can automate this configuration by using a privileged DaemonSet .

