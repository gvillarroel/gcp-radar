---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.499Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "32 Gbps VM network egress for Skylake and ultramem instances"
feature_slug: "32-gbps-vm-network-egress-for-skylake-and-ultramem-instances"
latest_feature_date: "2019-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/performance-dashboard/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets"
keywords:
  - "32"
  - "gbps"
  - "vm"
  - "network"
  - "egress"
  - "for"
  - "skylake"
  - "and"
---

# 32 Gbps VM network egress for Skylake and ultramem instances

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Virtual machine network I/O egress for Skylake CPU platform and ultramem machine types is increased to up to 32 Gbps in beta.

## Extended Definition

Virtual machine network I/O egress for Skylake CPU platform and ultramem machine types is increased to up to 32 Gbps in beta.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/performance-dashboard/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/performance-dashboard/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets)

## Supporting Pages

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.
- Base entity Icon Description Aggregation hierarchy (top to bottom) VM instance A Compute Engine VM instance region > network > subnet > zone > instance group > instance VM instance group The collection of VM instances that you can manage as a single entity. region > network > subnet > zone > instance group > Classic Application Load Balancer External passthrough Network Load Balancer External proxy Network Load Balancer The base entity for external load balancer components, such as the forwarding rule and backend service. external load balancing > load balancer Internal load balancer The base entity for internal load balancer components, such as the forwarding rule and backend service. internal load balancing > load balancer Cloud NAT gateway A NAT gateway region > network > NATs > NAT gateway VPC Network Peering A VPC peering endpoint that is shown when you don't have permissions to view the peer network.
- Metrics for the selected hour on the timeline include the following: Average hourly throughput available for most entities Average hourly packet loss available for traffic within Google Cloud regions and zones Hourly median latency (RTT) available for many entity types In the GKE Enterprise view available for GKE Enterprise projects, the metrics for the selected hour on the timeline also include the following: Average hourly throughput available for most entities Median latency available for traffic within Google Cloud regions and zones with GKE clusters Network verdict metrics displaying the GKE workloads with the most dropped and most forwarded traffic flows for the selected cluster You can also download the table of outliers in a CSV format for the High egress and Network verdict traffic insights.
- For example, Network Topology aggregates the entities as follows: VM instances into their instance group, then aggregates instance groups into a Google Cloud zone GKE pods into their GKE workloads, then aggregates GKE workloads into GKE namespaces, and then the GKE namespaces into a GKE cluster.

### "Performance Dashboard overview \_|\_ Network Intelligence Center - Performance\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/performance-dashboard/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/performance-dashboard/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, your project has a Virtual Private Cloud network with VMs in region A that receive traffic from clients in cities X and Y.
- For example, your project has a Virtual Private Cloud (VPC) network with VMs in zones A and B.
- The dashboard lets you see and understand the following: Packet loss summary Packet loss average between region pairs of the regions selected Packet loss average between zone pairs of selected regions Latency summary Latency median between region pairs of the regions selected Latency median between zone pairs of the regions selected Traffic between VM instances Performance Dashboard shows packet loss and latency metrics (in summary charts and heatmap views) for zones where you have Compute Engine virtual machine (VM) instances.
- Traffic between Google Cloud and internet locations Performance Dashboard shows latency metrics for regions where you have Compute Engine virtual machine (VM) instances and the internet locations of the end devices that communicate with the VMs.

### "Create and run Connectivity Tests \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests)
- Source ID: `site-iam-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- If you use this page, you must use the current network interface as either the Source or Destination of the test. gcloud and API You must specify the network interface to use for the test in one of the following ways: IP address and network URI IP address and VM URI Network URI and VM URI Providing only the URI for a VM with multiple interfaces selects only the VM's primary interface.
- If you use a Serverless VPC Access connector for your Cloud Run function, keep in mind that egress settings for Cloud Run functions control the routing of outbound HTTP requests from a Cloud Run function and control the traffic types routed through the connector to your VPC network.
- These parameters are automatically selected based on your source and destination IP addresses. resource "google network management connectivity test" "default" { name = "conn-test-addr" source { ip address = google compute address.source addr.address project id = google compute address.source addr.project network = google compute network.default.id network type = "GCP NETWORK" } destination { ip address = google compute address.dest addr.address project id = google compute address.dest addr.project network = google compute network.default.id port = "80" } protocol = "UDP" } resource "google compute network" "default" { name = "connectivity-vpc" auto create subnetworks = false } resource "google compute subnetwork" "default" { name = "connectivity-vpc-subnet" ip cidr range = "10.0.0.0/8" region = "us-central1" network = google compute network.default.id } resource "google compute firewall" "default" { name = "allow-incoming-all" network = google compute network.default.name allow { protocol = "all" } source ranges = ["0.0.0.0/0"] } resource "google compute address" "source addr" { name = "src-addr" subnetwork = google compute subnetwork.default.id address type = "INTERNAL" address = "10.0.0.42" region = "us-central1" } resource "google compute address" "dest addr" { name = "dest-addr" subnetwork = google compute subnetwork.default.id address type = "INTERNAL" address = "10.0.0.43" region = "us-central1" } resource "google compute instance" "source" { name = "source-vm1" machine type = "e2-medium" zone = "us-central1-a" boot disk { initialize params { image = data.google compute image.default.id } } network interface { network = google compute network.default.id subnetwork = google compute subnetwork.default.id network ip = "10.0.0.42" access config { } } } resource "google compute instance" "destination" { name = "dest-vm1" machine type = "e2-medium" zone = "us-central1-a" boot disk { initialize params { image = data.google compute image.default.id } } network interface { network = google compute network.default.id subnetwork = google compute subnetwork.default.id network ip = "10.0.0.43" access config { } } } data "google compute image" "default" { family = "debian-11" project = "debian-cloud" } API This example tests the ability to ping from the source IP address to the destination IP address.
- Terraform You can use a Terraform resource to create a test between two VM instances in a VPC network. resource "google network management connectivity test" "instance test" { name = "conn-test-instances" source { instance = google compute instance.source.id } destination { instance = google compute instance.destination.id port = "80" } protocol = "TCP" } resource "google compute instance" "source" { name = "source-vm" machine type = "e2-medium" boot disk { initialize params { image = data.google compute image.debian 9.id } } network interface { network = "default" access config { } } } resource "google compute instance" "destination" { name = "dest-vm" machine type = "e2-medium" boot disk { initialize params { image = data.google compute image.debian 9.id } } network interface { network = "default" access config { } } } data "google compute image" "debian 9" { family = "debian-11" project = "debian-cloud" } API The following sample test determines if the existing network configuration allows VM instance1 to ping VM instance2 .

### "Reasons for dropped test packets \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets)
- Source ID: `site-iam-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- If you try to access the destination endpoint by using its internal IP address, make sure that the source and destination networks are connected (for example, using the VPC Network Peering , Network Connectivity Center , or a hybrid connectivity solution such as Cloud VPN).
- Home Documentation Networking Network Intelligence Center Connectivity Tests Guides Send feedback Reasons for dropped test packets Stay organized with collections Save and categorize content based on your preferences.
- Recommendations You can allow the Compute Engine VM instance to reach the external IP address of Google APIs and services in any of the following ways: Enable Private Google Access for the instance's subnet.
- For connectivity to succeed, you need an egress firewall rule at the source allowing access to the destination endpoint, and an ingress firewall rule at the destination to allow this connection.

