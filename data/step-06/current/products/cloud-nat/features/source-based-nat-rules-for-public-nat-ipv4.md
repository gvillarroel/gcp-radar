---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:57:06.733Z"
product_name: "Cloud NAT"
product_slug: "cloud-nat"
feature_name: "Source-based NAT rules for Public NAT IPv4"
feature_slug: "source-based-nat-rules-for-public-nat-ipv4"
latest_feature_date: "2025-09-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/nat/docs/set-up-network-address-translation"
  - "https://docs.cloud.google.com/nat/docs/release-notes"
  - "https://docs.cloud.google.com/nat/docs/troubleshooting"
keywords:
  - "source"
  - "based"
  - "nat"
  - "rules"
  - "for"
  - "public"
  - "ipv4"
  - "gateways"
---

# Source-based NAT rules for Public NAT IPv4

Product: Cloud NAT
Coverage: LOW

## Step 02 Summary

Public NAT gateways support source-based NAT rules for IPv4 addresses.

## Extended Definition

Public NAT gateways support source-based NAT rules for IPv4 addresses.

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
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Terraform You can use a Terraform module to create a Cloud Router with a NAT gateway for IPv4 traffic. module "cloud router" { source = "../.." name = "my-cloud-router" project id = var.project id network = module.vpc.network name region = "us-central1" nats = [{ name = "my-nat-gateway" source subnetwork ip ranges to nat = "LIST OF SUBNETWORKS" subnetworks = [ { name = module.vpc.subnets["us-central1/test-subnet-01-1"].id source ip ranges to nat = ["PRIMARY IP RANGE", "LIST OF SECONDARY IP RANGES"] secondary ip range names = module.vpc.subnets["us-central1/test-subnet-01-1"].secondary ip range[ ].range name } ] }] } The resulting NAT gateway uses the following default values: enable endpoint independent mapping = true icmp idle timeout sec = 30 min ports per vm = 0 nat ip allocate option = "AUTO ONLY" source subnetwork ip ranges to nat = "ALL SUBNETWORKS ALL IP RANGES" tcp established idle timeout sec = 1200 tcp transitory idle timeout sec = 30 udp idle timeout sec = 30 log config { enable = true filter = "ALL" } View a Public NAT configuration Console In the Google Cloud console, go to the Cloud NAT page.
- Source subnets For IPv4 traffic: Primary and secondary ranges for all subnets Primary ranges for all subnets Custom For IPv6 traffic: All subnets Custom Public NAT supports the following subnet ranges in the region for the VPC network that you specify: For IPv4 traffic: primary and secondary ranges.
- To update the source subnet ranges for an existing Cloud NAT gateway, run one of the following commands, depending on the IP version of the subnet ranges that you want to update: Update IPv4 subnet ranges: gcloud compute routers nats update NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-custom-subnet-ip-ranges= IPV4 SUBNET RANGES Update IPv6 subnet ranges: gcloud compute routers nats update NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat64-custom-v6-subnet-ip-ranges= IPV6 SUBNET RANGES Update both IPv4 and IPv6 subnet ranges: gcloud compute routers nats update NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-custom-subnet-ip-ranges= IPV4 SUBNET RANGES \ --nat64-custom-v6-subnet-ip-ranges= IPV6 SUBNET RANGES Replace the following: NAT CONFIG : the name of your NAT configuration NAT ROUTER : the name of your Cloud Router REGION : the region of the NAT gateway IPV4 SUBNET RANGES : a comma-separated list of subnet names—for example: SUBNET NAME 1:ALL,SUBNET NAME 2:ALL : includes both the primary and all secondary ranges of subnets SUBNET NAME 1 and SUBNET NAME 2 .
- To view NAT status, see the Status column for your NAT gateway. gcloud You can view the NAT configuration details by running the following commands: View the Public NAT gateway configuration. gcloud compute routers nats describe NAT CONFIG \ --router= ROUTER NAME \ --region= REGION Replace the following: NAT CONFIG : the name of your NAT configuration ROUTER NAME : the name of your Cloud Router REGION : the region of the NAT to describe; if not specified, you might be prompted to select a region (interactive mode only) View the mapping of the IP:port-ranges allocated to each VM's interface. gcloud compute routers get-nat-mapping-info ROUTER NAME \ --region= REGION View the status of the Public NAT gateway. gcloud compute routers get-status ROUTER NAME \ --region= REGION View external IP addresses assigned to a Cloud NAT gateway By default, Cloud NAT gateways for Public NAT use automatic IP address allocation.

### Cloud NAT release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/release-notes](https://docs.cloud.google.com/nat/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- September 23, 2025 Feature Preview : Cloud NAT gateways for Public NAT support source-based NAT rules for IPv4 addresses.
- August 26, 2025 Feature General Availability : Cloud NAT gateways for Public NAT support IPv6 to IPv4 network address translation.
- February 12, 2025 Feature Preview : Cloud NAT gateways for Public NAT support IPv6 to IPv4 network address translation.
- NAT rules support source NAT based on destination address.

### Troubleshoot configuration \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/troubleshooting](https://docs.cloud.google.com/nat/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When the source VM sends a packet to the destination, Public NAT performs source NAT (SNAT) before delivering the packet to the second instance.
- Check how many ephemeral source ports are being used: For Linux VMs: netstat -an egrep 'ESTABLISHED TIME WAIT CLOSE WAIT' wc -l For Windows VMs: netstat -tan findstr "ESTABLISHED TIME WAIT CLOSE WAIT" find /c /v "" Configure your VM instances to use a larger set of ephemeral source ports: For Linux VMs: You can view what port range is configured with this command: cat /proc/sys/net/ipv4/ip local port range You can set the ip local port range to the maximum number of ephemeral source ports (64,512) with this command: echo 1024 65535 > /proc/sys/net/ipv4/ip local port range For Windows VMs: You can view what port ranges are configured with these commands: netsh int ipv4 show dynamicport tcp netsh int ipv4 show dynamicport udp You can set the number of ephemeral source TCP and UDP ports to the maximum possible (64,512) with these commands: netsh int ipv4 set dynamicport tcp start=1024 num=64512 netsh int ipv4 set dynamicport udp start=1024 num=64512 On Google Kubernetes Engine nodes, you can automate this configuration by using a privileged DaemonSet .
- Packets dropped with reason: out of resources If you see packet loss from VMs that use Cloud NAT, this might be because there are not enough available NAT source IP address and source port tuples for the VM to use at the time of the packet loss (port exhaustion).
- Increase the value for TCP Transitory Connection Idle Timeout, so that external endpoints that receive traffic (initiated by Google Cloud resources) through a Cloud NAT gateway get more time to respond and to establish the connection.

