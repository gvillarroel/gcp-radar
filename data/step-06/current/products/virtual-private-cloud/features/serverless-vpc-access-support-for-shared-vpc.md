---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.487Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Serverless VPC Access support for Shared VPC"
feature_slug: "serverless-vpc-access-support-for-shared-vpc"
latest_feature_date: "2021-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest"
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
keywords:
  - "serverless"
  - "vpc"
  - "access"
  - "for"
  - "shared"
  - "adds"
  - "workloads"
  - "to"
---

# Serverless VPC Access support for Shared VPC

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Adds support for Serverless VPC Access workloads to connect to Shared VPC networks.

## Extended Definition

Adds support for Serverless VPC Access workloads to connect to Shared VPC networks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest](https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest)
- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)

## Supporting Pages

### "Serverless VPC Access API \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest](https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest)
- Source ID: `site-docs-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta1.projects.locations.connectors Methods create POST /v1beta1/{parent=projects/ /locations/ }/connectors Creates a Serverless VPC Access connector, returns an operation. delete DELETE /v1beta1/{name=projects/ /locations/ /connectors/ } Deletes a Serverless VPC Access connector. get GET /v1beta1/{name=projects/ /locations/ /connectors/ } Gets a Serverless VPC Access connector. list GET /v1beta1/{parent=projects/ /locations/ }/connectors Lists Serverless VPC Access connectors. patch PATCH /v1beta1/{connector.name=projects/ /locations/ /connectors/ } Updates a Serverless VPC Access connector, returns an operation.
- REST Resource: v1.projects.locations.connectors Methods create POST /v1/{parent=projects/ /locations/ }/connectors Creates a Serverless VPC Access connector, returns an operation. delete DELETE /v1/{name=projects/ /locations/ /connectors/ } Deletes a Serverless VPC Access connector. get GET /v1/{name=projects/ /locations/ /connectors/ } Gets a Serverless VPC Access connector. list GET /v1/{parent=projects/ /locations/ }/connectors Lists Serverless VPC Access connectors. patch PATCH /v1/{connector.name=projects/ /locations/ /connectors/ } Updates a Serverless VPC Access connector, returns an operation.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://vpcaccess.googleapis.com REST Resource: v1beta1.projects.locations Methods list GET /v1beta1/{name=projects/ }/locations Lists information about the supported locations for this service.
- API for managing VPC access connectors.

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- They perform various tasks necessary to set up Shared VPC , such as enabling host projects, attaching service projects to host projects, and delegating access to some or all of the subnets in Shared VPC networks to Service Project Admins.
- A Shared VPC Admin for the organization has created a host project and attached two service projects to it: Service Project Admins in Service project A can be configured to access all or some of the subnets in the Shared VPC network.
- You can create your private zone in the host project and authorize access to the zone for the Shared VPC network or set up the zone in a service project using cross-project binding .
- Administrators and IAM Shared VPC makes use of Identity and Access Management (IAM) roles for delegated administration.

### "Network Topology overview \_|\_ Network Intelligence Center - Network Topology\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- Source ID: `site-iam-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Monitoring is especially useful for Shared VPC and VPC Network Peering scenarios, where resources or networks can be in different projects.
- In the Infrastructure view, the insights for metrics for the selected hour on the timeline include the following: High egress instances: aggregated hourly values for various types of egress High egress instance groups: aggregated hourly values for various types of egress In the GKE Enterprise view available for GKE Enterprise projects, the insights for metrics for the selected hour on the timeline include the following: High egress GKE workloads: aggregated hourly values for various types of egress for GKE workloads, in the GKE Enterprise view Filter the traffic based on the traffic types You can further filter the traffic based on the following traffic types: All egress traffic for an entity Cross-zonal egress traffic: useful for analyzing billable traffic Egress to internet: used for analyzing billable traffic and for analyzing the traffic that reaches external endpoints Hybrid egress: used to analyze the volume of traffic to on-premises, including Cloud Interconnect, Cloud VPN, and Router appliance connections In the GKE Enterprise view, you can further filter the traffic based on the following traffic types: All measured egress traffic from the selected entity Cross-zonal egress traffic: useful for analyzing billable traffic between Google Cloud zones Multiple projects Network Topology visualizes resources in your project, or you can use Cloud Monitoring, which can visualize metrics for multiple Google Cloud projects.
- Base entity Icon Description Aggregation hierarchy (top to bottom) VM instance A Compute Engine VM instance region > network > subnet > zone > instance group > instance VM instance group The collection of VM instances that you can manage as a single entity. region > network > subnet > zone > instance group > Classic Application Load Balancer External passthrough Network Load Balancer External proxy Network Load Balancer The base entity for external load balancer components, such as the forwarding rule and backend service. external load balancing > load balancer Internal load balancer The base entity for internal load balancer components, such as the forwarding rule and backend service. internal load balancing > load balancer Cloud NAT gateway A NAT gateway region > network > NATs > NAT gateway VPC Network Peering A VPC peering endpoint that is shown when you don't have permissions to view the peer network.
- Base entity Icon Description Aggregation hierarchy (top to bottom) GKE Pod The base entity for GKE entities such as clusters, workloads, and namespaces. region > network > subnet > zone > GKE cluster > GKE namespace > GKE workload > GKE pod GKE Workload A GKE workload region > network > subnet > zone > GKE cluster > GKE namespace > GKE workload GKE namespace A GKE namespace region > network > subnet > zone > GKE cluster > GKE namespace GKE cluster A GKE cluster region > network > subnet > zone > GKE cluster Note: In the topology view and as part of the Pod metrics, Network Topology does not show the IPv6 IP address of the dual stack Pods.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- To resolve this issue, remove any associations to the Serverless VPC Access connector from the serverless resources: If any Cloud Run services or functions used the connector, then for each service or function, follow the steps to Disconnect a Cloud Run service from a VPC network .
- Troubleshooting Can't delete a VPC network that was used with Serverless VPC Access You might receive an error when attempting to delete a VPC network for which Serverless VPC Access was configured even if you have deleted the associated Serverless VPC Access connector.
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-custom-mode-network" mtu = 1460 subnets = [ { subnet name = "subnet-01" subnet ip = "10.10.10.0/24" subnet region = "us-west1" }, { subnet name = "subnet-02" subnet ip = "10.10.20.0/24" subnet region = "us-west1" subnet private access = "true" subnet flow logs = "true" }, { subnet name = "subnet-03" subnet ip = "10.10.30.0/24" subnet region = "us-west1" subnet flow logs = "true" subnet flow logs interval = "INTERVAL 10 MIN" subnet flow logs sampling = 0.7 subnet flow logs metadata = "INCLUDE ALL METADATA" subnet flow logs filter = "false" } ] } Next, create firewall rules .
- The per network limits describe the maximum number of secondary ranges that you can define for each subnet. --enable-flow-logs : Enables VPC Flow Logs in the subnet at creation time. --enable-private-ip-google-access : Enables Private Google Access in the subnet at creation time. --purpose : Enables you to specify the purpose of the subnet . --role : Enables you to specify a role (active or backup) for a proxy-only subnet .

