---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.498Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "32 Gbps VM egress network throughput"
feature_slug: "32-gbps-vm-egress-network-throughput"
latest_feature_date: "2019-06-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  - "https://docs.cloud.google.com/vpc/docs/quota"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/add-remove-network-tags"
keywords:
  - "32"
  - "gbps"
  - "vm"
  - "egress"
  - "network"
  - "throughput"
  - "increased"
  - "virtual"
---

# 32 Gbps VM egress network throughput

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Increased virtual machine egress network I/O is now available at 32 Gbps for VMs using the Skylake CPU platform or ultramem machine types.

## Extended Definition

Increased virtual machine egress network I/O is now available at 32 Gbps for VMs using the Skylake CPU platform or ultramem machine types.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/add-remove-network-tags](https://docs.cloud.google.com/vpc/docs/add-remove-network-tags)

## Supporting Pages

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- This view makes it easier to understand networking relationships between various workloads on Google Cloud and their current state, such as the traffic paths and throughput between virtual machine (VM) instances.
- Metrics for the selected hour on the timeline include the following: Average hourly throughput available for most entities Average hourly packet loss available for traffic within Google Cloud regions and zones Hourly median latency (RTT) available for many entity types In the GKE Enterprise view available for GKE Enterprise projects, the metrics for the selected hour on the timeline also include the following: Average hourly throughput available for most entities Median latency available for traffic within Google Cloud regions and zones with GKE clusters Network verdict metrics displaying the GKE workloads with the most dropped and most forwarded traffic flows for the selected cluster You can also download the table of outliers in a CSV format for the High egress and Network verdict traffic insights.
- Insights for entities with high metric values In addition to the average hourly metrics, Network Topology also shows the ranking of VMs or instance groups that generate the highest egress.
- Network Topology also displays separate time series charts that show metrics such as the traffic throughput between communicating entities or the CPU utilization of VM instances.

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Maximum egress data rate to an external IP address destination all flows: about 7 Gbps (gigabits per second) sustained or 25 Gbps with per VM Tier 1 networking performance single flow: 3 Gbps sustained See Egress to external IP address destinations in the Compute Engine documentation.
- Inter-region network egress bandwidth (Mbps) from Compute instances Total egress bandwidth from Google Cloud VMs in one region to destinations that are routable within a VPC network (using next hops that are not the default internet gateway).
- Quota Description Network bandwidth GCE VM to internet egress bandwidth Mbps Total egress bandwidth from Google Cloud VMs in one region to destinations outside of a VPC network (using the default internet gateway).
- Quota name: INSTANCES PER NETWORK GLOBAL Available metrics: compute.googleapis.com/quota/instances per vpc network/limit compute.googleapis.com/quota/instances per vpc network/usage compute.googleapis.com/quota/instances per vpc network/exceeded IP aliases per VPC network The total number of alias IP ranges used by VM network interfaces (NICs) in the VPC network.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Egress throughput limits Network throughput information is available on the Network bandwidth page in the Compute Engine documentation.
- A VPC network does the following: Provides connectivity for your Compute Engine virtual machine (VM) instances .
- Google Cloud typically measures round-trip latencies less than 45μs at the 50th percentile and tail latencies less than 60μs at the 99th percentile between c2-standard-4 VM instances in the same low-latency network ("compact" placement policy).
- VM instances in a VPC network containing subnet ranges with privately used public IP addresses are not able to connect to external resources which use those same public IP addresses.

### Add network tags \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/add-remove-network-tags](https://docs.cloud.google.com/vpc/docs/add-remove-network-tags)
- Source ID: `site-docs-root-2`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add network tags A tag is simply a character string added to a tags field in a resource, such as Compute Engine virtual machine (VM) instances or instance templates .
- Terraform You can use the Terraform resource to create a VM instance that has network tags. resource "google compute instance" "default" { project = var.project id # Replace this with your project ID in quotes zone = "southamerica-east1-b" name = "backend-instance" machine type = "e2-medium" boot disk { initialize params { image = "debian-cloud/debian-9" } } network interface { network = "default" } tags = ["health-check", "ssh"] } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- Task Required Role Assign a network tag to a new instance when it is created Project owner or editor or Instance Admin Add or remove network tags for existing instances Add, remove, or edit firewall rules Project owner or editor or Security Admin Limits The following limits apply to network tags: Limit Value Description Maximum number of tags per VM 64 All tags for a VM must be unique.
- Home Documentation Networking Virtual Private Cloud Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

