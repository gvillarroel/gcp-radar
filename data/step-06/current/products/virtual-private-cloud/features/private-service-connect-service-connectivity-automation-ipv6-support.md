---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.446Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect service connectivity automation IPv6 support"
feature_slug: "private-service-connect-service-connectivity-automation-ipv6-support"
latest_feature_date: "2025-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests"
keywords:
  - "private"
  - "connect"
  - "connectivity"
  - "automation"
  - "ipv6"
  - "now"
  - "supports"
  - "to"
---

# Private Service Connect service connectivity automation IPv6 support

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect service connectivity automation now supports IPv6 connectivity to eligible managed services and is generally available.

## Extended Definition

Private Service Connect service connectivity automation now supports IPv6 connectivity to eligible managed services and is generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation](https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests)

## Supporting Pages

### "About service connectivity automation \_|\_ Virtual Private Cloud \_|\_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation](https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation)
- Source ID: `site-docs-root-2`
- Final score: 289
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If a managed service supports service connectivity automation, the service instance configuration and the networking configuration can be delegated to the appropriate administrators: Service instance administrators can control which networks can access their services.
- Deploying an instance of a managed service that supports service connectivity automation involves the following steps: A network administrator creates a service connection policy for their VPC network.
- Automatic retries for endpoint failures Service connectivity automation fully manages the creation and deletion of your Private Service Connect endpoints.
- Shared VPC Service connectivity automation can be used to automatically create Private Service Connect endpoints in Shared VPC networks.

### "Connectivity Tests overview \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Source endpoints Connectivity Tests configuration analysis supports the following source endpoints: Compute Engine instance Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane GKE Pod Internet IP address IP address from an on-premises network IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod Unassigned IP address in a Virtual Private Cloud network Destination endpoints Connectivity Tests configuration analysis supports the following destination endpoints: Compute Engine instance Cloud SQL instance GKE control plane GKE Pod External and internal Application Load Balancer External and internal Proxy Network Load Balancer External and internal Passthrough Network Load Balancer Private Service Connect endpoint Memorystore for Redis Cluster Memorystore for Redis instance Internet IP address IP address from an on-premises network IP address of a forwarding rule IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod IP address of a Memorystore for Redis Cluster IP address of a Memorystore for Redis instance Google Cloud networking features You can test connectivity between resources that use the following features (both IPv4 and IPv6 are supported whenever applicable): VPC networks VPC Network Peering Shared VPC Private Google Access Cloud Load Balancing Alias IP ranges Privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing VPC firewall rules Regional network firewall policies Hierarchical firewall policies and global network firewall policies Resource Manager tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Private Service Connect Instances with IPv6 addresses , including instances with multiple network interfaces VPC spokes and hybrid spokes for NCC Public NAT and Private NAT Cloud VPN Cloud Interconnect Cloud Router , including dynamic routes that use BGP and static routes Considerations for Cloud Load Balancing For Cloud Load Balancing, Connectivity Tests configuration analysis supports the following features: Testing connectivity to the load balancer IP addresses Verifying connectivity of Cloud Load Balancing health checks to backends Internal TCP/UDP load balancers can be used as next hops For Cloud Load Balancing features that are unsupported, see the Unsupported configurations section .
- Google Cloud networking features Live data plane analysis supports the following features: VPC networks VPC Network Peering Shared VPC VPC spokes and hybrid spokes in NCC Alias IP ranges External IP addresses Internal IP addresses , including privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing Public NAT and Private NAT , except for NAT64 VPC firewall rules Hierarchical firewall policies , global network firewall policies , and regional network firewall policies Secure tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Instances with IPv6 addresses , including instances with multiple network interfaces Unsupported configurations Live data plane analysis doesn't support and isn't executed for the following network configurations: Non-Google Cloud resources as source endpoints: Internet IP addresses Inbound traffic to Google Cloud through Cloud Interconnect , Cloud VPN , and NCC hybrid spokes Unassigned IP addresses in a VPC network as source endpoints Source and destination endpoints are the same Compute Engine instance Non-running Compute Engine instances GKE Pods Google API and services External and internal Application Load Balancer External and internal Proxy Network Load Balancer External passthrough Network Load Balancer Cloud VPN NAT64 Considerations and constraints Evaluate the following considerations when deciding whether to use Connectivity Tests.
- Source endpoints Live data plane analysis supports the following source endpoints: Compute Engine instance Serverless endpoint configured with a Serverless VPC Access connector and associated with one of the following resources: Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane Destination endpoints Live data plane analysis supports the following destination endpoints: Compute Engine instance Internal passthrough Network Load Balancer Private Service Connect with a producer internal passthrough Network Load Balancer Internet IP address, tested to the network edge location VLAN attachment for Cloud Interconnect Private endpoint associated with one of the following resources: Cloud SQL instance Memorystore for Redis Cluster Memorystore for Redis instance GKE control plane Protocols Live data plane analysis supports TCP and UDP protocols.
- Considerations for Google Kubernetes Engine For GKE, Connectivity Tests configuration analysis supports the following features: Connectivity to and between GKE nodes and the GKE control plane Connectivity to and between GKE Pods, including evaluation of GKE network policies and IP masquerading .

### "Connectivity Tests overview \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests)
- Source ID: `site-iam-reference`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Source endpoints Connectivity Tests configuration analysis supports the following source endpoints: Compute Engine instance Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane GKE Pod Internet IP address IP address from an on-premises network IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod Unassigned IP address in a Virtual Private Cloud network Destination endpoints Connectivity Tests configuration analysis supports the following destination endpoints: Compute Engine instance Cloud SQL instance GKE control plane GKE Pod External and internal Application Load Balancer External and internal Proxy Network Load Balancer External and internal Passthrough Network Load Balancer Private Service Connect endpoint Memorystore for Redis Cluster Memorystore for Redis instance Internet IP address IP address from an on-premises network IP address of a forwarding rule IP address of a Compute Engine instance IP address of a Cloud SQL instance IP address of a GKE control plane IP address of a GKE Pod IP address of a Memorystore for Redis Cluster IP address of a Memorystore for Redis instance Google Cloud networking features You can test connectivity between resources that use the following features (both IPv4 and IPv6 are supported whenever applicable): VPC networks VPC Network Peering Shared VPC Private Google Access Cloud Load Balancing Alias IP ranges Privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing VPC firewall rules Regional network firewall policies Hierarchical firewall policies and global network firewall policies Resource Manager tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Private Service Connect Instances with IPv6 addresses , including instances with multiple network interfaces VPC spokes and hybrid spokes for NCC Public NAT and Private NAT Cloud VPN Cloud Interconnect Cloud Router , including dynamic routes that use BGP and static routes Considerations for Cloud Load Balancing For Cloud Load Balancing, Connectivity Tests configuration analysis supports the following features: Testing connectivity to the load balancer IP addresses Verifying connectivity of Cloud Load Balancing health checks to backends Internal TCP/UDP load balancers can be used as next hops For Cloud Load Balancing features that are unsupported, see the Unsupported configurations section .
- Google Cloud networking features Live data plane analysis supports the following features: VPC networks VPC Network Peering Shared VPC VPC spokes and hybrid spokes in NCC Alias IP ranges External IP addresses Internal IP addresses , including privately used public IPv4 addresses Compute Engine instances with multiple network interfaces VPC routing Public NAT and Private NAT , except for NAT64 VPC firewall rules Hierarchical firewall policies , global network firewall policies , and regional network firewall policies Secure tags for firewalls , including when attached to Compute Engine instances with multiple network interfaces Policy-based routes Instances with IPv6 addresses , including instances with multiple network interfaces Unsupported configurations Live data plane analysis doesn't support and isn't executed for the following network configurations: Non-Google Cloud resources as source endpoints: Internet IP addresses Inbound traffic to Google Cloud through Cloud Interconnect , Cloud VPN , and NCC hybrid spokes Unassigned IP addresses in a VPC network as source endpoints Source and destination endpoints are the same Compute Engine instance Non-running Compute Engine instances GKE Pods Google API and services External and internal Application Load Balancer External and internal Proxy Network Load Balancer External passthrough Network Load Balancer Cloud VPN NAT64 Considerations and constraints Evaluate the following considerations when deciding whether to use Connectivity Tests.
- Source endpoints Live data plane analysis supports the following source endpoints: Compute Engine instance Serverless endpoint configured with a Serverless VPC Access connector and associated with one of the following resources: Cloud Run revision Cloud Run functions (1st gen) App Engine standard environment Cloud SQL instance GKE control plane Destination endpoints Live data plane analysis supports the following destination endpoints: Compute Engine instance Internal passthrough Network Load Balancer Private Service Connect with a producer internal passthrough Network Load Balancer Internet IP address, tested to the network edge location VLAN attachment for Cloud Interconnect Private endpoint associated with one of the following resources: Cloud SQL instance Memorystore for Redis Cluster Memorystore for Redis instance GKE control plane Protocols Live data plane analysis supports TCP and UDP protocols.
- Considerations for Google Kubernetes Engine For GKE, Connectivity Tests configuration analysis supports the following features: Connectivity to and between GKE nodes and the GKE control plane Connectivity to and between GKE Pods, including evaluation of GKE network policies and IP masquerading .

### "Create and run Connectivity Tests \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests)
- Source ID: `site-iam-reference`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By default, Connectivity Tests attempts to run a test by using the private IP address of the Google-managed service endpoint.
- Connectivity Tests configuration analysis supports tracing simulated packets to all types of Google Cloud load balancers.
- These parameters are automatically selected based on your source and destination IP addresses. resource "google network management connectivity test" "default" { name = "conn-test-addr" source { ip address = google compute address.source addr.address project id = google compute address.source addr.project network = google compute network.default.id network type = "GCP NETWORK" } destination { ip address = google compute address.dest addr.address project id = google compute address.dest addr.project network = google compute network.default.id port = "80" } protocol = "UDP" } resource "google compute network" "default" { name = "connectivity-vpc" auto create subnetworks = false } resource "google compute subnetwork" "default" { name = "connectivity-vpc-subnet" ip cidr range = "10.0.0.0/8" region = "us-central1" network = google compute network.default.id } resource "google compute firewall" "default" { name = "allow-incoming-all" network = google compute network.default.name allow { protocol = "all" } source ranges = ["0.0.0.0/0"] } resource "google compute address" "source addr" { name = "src-addr" subnetwork = google compute subnetwork.default.id address type = "INTERNAL" address = "10.0.0.42" region = "us-central1" } resource "google compute address" "dest addr" { name = "dest-addr" subnetwork = google compute subnetwork.default.id address type = "INTERNAL" address = "10.0.0.43" region = "us-central1" } resource "google compute instance" "source" { name = "source-vm1" machine type = "e2-medium" zone = "us-central1-a" boot disk { initialize params { image = data.google compute image.default.id } } network interface { network = google compute network.default.id subnetwork = google compute subnetwork.default.id network ip = "10.0.0.42" access config { } } } resource "google compute instance" "destination" { name = "dest-vm1" machine type = "e2-medium" zone = "us-central1-a" boot disk { initialize params { image = data.google compute image.default.id } } network interface { network = google compute network.default.id subnetwork = google compute subnetwork.default.id network ip = "10.0.0.43" access config { } } } data "google compute image" "default" { family = "debian-11" project = "debian-cloud" } API This example tests the ability to ping from the source IP address to the destination IP address.
- Terraform You can use a Terraform resource to create a test between two VM instances in a VPC network. resource "google network management connectivity test" "instance test" { name = "conn-test-instances" source { instance = google compute instance.source.id } destination { instance = google compute instance.destination.id port = "80" } protocol = "TCP" } resource "google compute instance" "source" { name = "source-vm" machine type = "e2-medium" boot disk { initialize params { image = data.google compute image.debian 9.id } } network interface { network = "default" access config { } } } resource "google compute instance" "destination" { name = "dest-vm" machine type = "e2-medium" boot disk { initialize params { image = data.google compute image.debian 9.id } } network interface { network = "default" access config { } } } data "google compute image" "debian 9" { family = "debian-11" project = "debian-cloud" } API The following sample test determines if the existing network configuration allows VM instance1 to ping VM instance2 .

