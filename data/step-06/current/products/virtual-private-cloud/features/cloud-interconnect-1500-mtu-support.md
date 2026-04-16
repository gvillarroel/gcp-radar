---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.488Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Cloud Interconnect 1500 MTU support"
feature_slug: "cloud-interconnect-1500-mtu-support"
latest_feature_date: "2021-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services"
  - "https://docs.cloud.google.com/vpc/docs/configure-jumbo-frame-mtu-vpc"
  - "https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network"
  - "https://docs.cloud.google.com/vpc/docs/quota"
keywords:
  - "interconnect"
  - "1500"
  - "mtu"
  - "now"
  - "supports"
  - "byte"
  - "enabling"
  - "larger"
---

# Cloud Interconnect 1500 MTU support

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Cloud Interconnect now supports 1500-byte MTU, enabling larger packet payloads in General Availability.

## Extended Definition

Cloud Interconnect now supports 1500-byte MTU, enabling larger packet payloads in General Availability.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- [https://docs.cloud.google.com/vpc/docs/configure-jumbo-frame-mtu-vpc](https://docs.cloud.google.com/vpc/docs/configure-jumbo-frame-mtu-vpc)
- [https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network](https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)

## Supporting Pages

### "About published services \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- Source ID: `site-docs-root-2`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Target producer Consumer configuration (endpoint) Consumer global access Hybrid access Automatic DNS configuration (IPv4-only) VPC Network Peering access NCC connection propagation (IPv4 only) Supported target services for IPv4 endpoints Supported target services for IPv6 endpoints Cross-region internal Application Load Balancer IPv4 services IPv4 services Internal passthrough Network Load Balancer Only if global access is enabled on the load balancer ( known issue ) IPv4 services IPv4 services IPv6 services Internal protocol forwarding (target instance) Only if global access is enabled on the producer forwarding rule ( known issue ) IPv4 services IPv4 services IPv6 services Port mapping services Only if global access is enabled on the producer forwarding rule IPv4 services IPv4 services IPv6 services Regional internal Application Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Regional internal proxy Network Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Secure Web Proxy IPv4 services IPv4 services Producer configuration This table summarizes the supported configuration options and capabilities of published services that are accessed by endpoints.
- Producer type Producer configuration (published service) Supported producer backends Forwarding rule protocols Forwarding rule ports PROXY protocol IP version Private Service Connect health support Cross-region internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups TCP HTTP HTTPS HTTP/2 gRPC Supports one, multiple, or all ports IPv4 Internal passthrough Network Load Balancer GCE VM IP zonal NEGs Instance groups TCP See Producer port configuration IPv4 Regional internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups HTTP HTTPS HTTP/2 Supports a single port IPv4 Regional internal proxy Network Load Balancer Note: Connections from consumer global external Application Load Balancers aren't supported.
- GCE VM IP PORT zonal NEGs Hybrid NEGs Private Service Connect NEGs Instance groups TCP Supports a single port IPv4 Secure Web Proxy Not applicable Not applicable Not applicable IPv4 Note: To support access by a Private Service Connect backend in a global or cross-regional load balancer, the producer load balancer must have global access turned on before the service attachment is created.
- The backend must be based on a load balancer that supports cross-region failover and includes the following configuration: A Private Service Connect NEG in each region that points to that region's service attachment A global backend service that contains the NEG backends This configuration supports automatic cross-region failover.

### "Create and verify a jumbo frame MTU network \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-jumbo-frame-mtu-vpc](https://docs.cloud.google.com/vpc/docs/configure-jumbo-frame-mtu-vpc)
- Source ID: `site-docs-root-2`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a VM to send and receive jumbo frames, the VM's virtual NIC needs to be connected to a VPC network with a MTU value that is as large or larger than the machine MTU.
- The ping command must specify a packet size that is 28 bytes smaller than the network MTU.
- Verify MTU In the terminal for your first VM, run the following command: /sbin/ifconfig grep mtu The reported MTU should be 8896 . ens4: flags=4163 mtu 8896 lo: flags=73 mtu 65536 In the terminal for your second VM, install tcpdump : sudo apt-get install tcpdump --yes In the terminal of your second VM, start tcpdump .
- You should see something like the following: tcpdump: listening on ens4, link-type EN10MB (Ethernet), snapshot length 262144 bytes 19:43:57.116005 IP (tos 0x0, ttl 64, id 0, offset 0, flags [DF], proto ICMP (1), length 8896) FIRST VM NAME .c.

### "Change the MTU setting of a VPC network \_|\_ Virtual Private Cloud \_|\_\

- URL: [https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network](https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network)
- Source ID: `site-docs-root-2`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- MTU specifies whether the network has an MTU of 1460 (default), 1500 , or 8896 .
- Run the following command: Set-NetIPInterface -InterfaceAlias INTERFACE NAME -AddressFamily IPv4 -NlMtu MTU Run the following command to update device driver settings: Set-NetAdapterAdvancedProperty -Name "Ethernet" -RegistryKeyword MTU -RegistryValue MTU You will briefly lose connectivity to the VM, because the driver automatically restarts when the registry entries change.
- Run the following command to determine the index of the interface that you want to update: netsh interface ipv4 show interface Update the interface: netsh interface ipv4 set interface INTERFACE INDEX mtu= MTU store=persistent Update the device driver configuration: Open the Device Manager with following command: devmgmt.msc Expand the Network adapters category.
- PATCH https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/ NETWORK { "mtu": MTU } Replace the placeholders with valid values: PROJECT ID is the ID of the project that contains the VPC network to modify.

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Common values include 1460 bytes (default), 1500 bytes (standard Ethernet), and 8896 bytes (jumbo frames).
- Item Limit Notes Maximum Transmission Unit (MTU) Between 1,300 bytes and 8,896 bytes (inclusive).
- Instance machine type Maximum number of connections logged in a 5-second interval f1-micro 100 connections g1-small 250 connections Machine types with 1–8 vCPUs 500 connections per vCPU Machine types with more than 8 vCPUs 4,000 (500×8) connections Hybrid connectivity Use the following links to find quotas and limits for Cloud VPN, Cloud Interconnect, and Cloud Router: Cloud VPN quotas and limits Cloud Interconnect quotas and limits Cloud Router quotas and limits Effective limits for per-peering group quotas Each per-peering group quota has the concept of an effective limit .
- If you don't know the name of the quota, use the links on this page instead. gcloud Using the Google Cloud CLI, run the following command to check your quotas.

