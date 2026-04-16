---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.447Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC Flow Logs InstanceGroupDetails metadata annotations"
feature_slug: "vpc-flow-logs-instancegroupdetails-metadata-annotations"
latest_feature_date: "2025-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-flow-logs-records"
  - "https://docs.cloud.google.com/vpc/docs/flow-logs"
  - "https://docs.cloud.google.com/vpc/docs/access-flow-logs"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
keywords:
  - "vpc"
  - "flow"
  - "logs"
  - "instancegroupdetails"
  - "metadata"
  - "annotations"
  - "now"
  - "include"
---

# VPC Flow Logs InstanceGroupDetails metadata annotations

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

VPC Flow Logs metadata annotations now include InstanceGroupDetails information for flow events.

## Extended Definition

VPC Flow Logs metadata annotations now include InstanceGroupDetails information for flow events.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-flow-logs-records](https://docs.cloud.google.com/vpc/docs/about-flow-logs-records)
- [https://docs.cloud.google.com/vpc/docs/flow-logs](https://docs.cloud.google.com/vpc/docs/flow-logs)
- [https://docs.cloud.google.com/vpc/docs/access-flow-logs](https://docs.cloud.google.com/vpc/docs/access-flow-logs)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)

## Supporting Pages

### "About VPC Flow Logs records \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-flow-logs-records](https://docs.cloud.google.com/vpc/docs/about-flow-logs-records)
- Source ID: `site-docs-root-2`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you select custom metadata, you can specify the metadata fields that you want to include by the parent field, such as src vpc , or by their full names, such as src vpc.project id When new metadata fields are added to the record format, they're excluded from the flow logs unless they're within a parent field that you have specified to include.
- If you select all metadata, all metadata fields in the VPC Flow Logs record format are included in the flow logs.
- Cross-project annotations If VPC Flow Logs is enabled at the organization level , flows through Shared VPC, VPC Network Peering, and Network Connectivity Center are annotated with cross-project annotations.
- GKE metadata annotations Flows that have an endpoint in a GKE Cluster can be annotated with GKE metadata annotations , which can include details of the Cluster, Pod, and Service of the endpoint.

### VPC Flow Logs \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/flow-logs](https://docs.cloud.google.com/vpc/docs/flow-logs)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: N/A

Evidence snippets:
- What's next To learn more about the VPC Flow Logs record format and which metadata annotations are available, see About VPC Flow Logs records .
- Configuration scope Generates flow logs for these resources Steps to enable Organization All VM instances and Cloud Run resources in all subnets in the organization All VLAN attachments in the organization All Cloud VPN tunnels in the organization Enable VPC Flow Logs for an organization VPC network All VM instances and Cloud Run resources in all subnets in the VPC network All VLAN attachments in the VPC network All Cloud VPN tunnels in the VPC network Enable VPC Flow Logs for a VPC network Subnet All VM instances and Cloud Run resources in a specific subnet Enable VPC Flow Logs for a subnet: Recommended: Enable VPC Flow Logs for a subnet (Network Management API) Enable VPC Flow Logs for a subnet (Compute Engine API) VLAN attachment A specific VLAN attachment Enable VPC Flow Logs for a VLAN attachment Cloud VPN tunnel A specific Cloud VPN tunnel Enable VPC Flow Logs for a Cloud VPN tunnel You can use filtering to customize these configuration scopes.
- VPC Flow Logs samples the following packets: Packets that are sent from and received by virtual machine (VM) instances , including instances used as Google Kubernetes Engine nodes Packets that are sent from and received by Cloud Run resources configured with Direct VPC egress Packets that are sent through VLAN attachments for Cloud Interconnect and Cloud VPN tunnels You can view flow logs in Cloud Logging , and you can export logs to any destination that Cloud Logging export supports.
- You can: Monitor the VPC network Perform network diagnosis Filter the flow logs by VMs, serverless endpoints, VLAN attachments, and Cloud VPN tunnels to understand traffic changes Understand traffic growth for capacity forecasting Understanding network usage and optimizing network traffic expenses You can analyze network usage with VPC Flow Logs to optimize network traffic expenses.

### Access flow logs \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/access-flow-logs](https://docs.cloud.google.com/vpc/docs/access-flow-logs)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Logs you want to view Query All flow logs resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") Logs for a specific configuration resource.type="vpc flow logs config" logName="projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" resource.labels.name=" CONFIG NAME " Logs for VM instances in a specific VPC network resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") (jsonPayload.src vpc.vpc name=" NETWORK NAME " OR jsonPayload.dest vpc.vpc name=" NETWORK NAME ") Logs for VM instances in a specific subnet resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") (jsonPayload.src vpc.subnetwork name=" SUBNET NAME " OR jsonPayload.dest vpc.subnetwork name=" SUBNET NAME ") Logs for a specific VM instance resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") (jsonPayload.src instance.vm name=" VM NAME " OR jsonPayload.dest instance.vm name=" VM NAME ") Logs for a specific Google Kubernetes Engine cluster resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") (jsonPayload.src gke details.cluster.cluster name=" CLUSTER NAME " OR jsonPayload.dest gke details.cluster.cluster name=" CLUSTER NAME ") Logs for only egress VM traffic from a subnet resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") jsonPayload.reporter="SRC" AND jsonPayload.src vpc.subnetwork name=" SUBNET NAME " AND (jsonPayload.dest vpc.subnetwork name!=" SUBNET NAME " OR NOT jsonPayload.dest vpc.subnetwork name: ) Logs for only egress VM traffic from a VPC network resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") jsonPayload.reporter="SRC" AND jsonPayload.src vpc.vpc name=" VPC NAME " AND (jsonPayload.dest vpc.vpc name!=" VPC NAME " OR NOT jsonPayload.dest vpc: ) Logs for traffic to a specific subnet range resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") ip in net(jsonPayload.connection.dest ip, " SUBNET RANGE ") Logs for an individual destination port resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") jsonPayload.connection.dest port= PORT jsonPayload.connection.protocol= PROTOCOL Logs for multiple destination ports resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") jsonPayload.connection.dest port=( PORT 1 OR PORT 2 ) jsonPayload.connection.protocol= PROTOCOL Logs for a specific source Cloud VPN tunnel resource.type="vpc flow logs config" logName="projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" jsonPayload.reporter="SRC GATEWAY" labels.target resource name="projects/ PROJECT NUMBER /regions/ REGION /vpnTunnels/ NAME " Logs for all destination VLAN attachments resource.type="vpc flow logs config" logName="projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" jsonPayload.reporter="DEST GATEWAY" jsonPayload.dest gateway.type="INTERCONNECT ATTACHMENT" Logs for all destination VLAN attachments in a specific region resource.type="vpc flow logs config" logName="projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" jsonPayload.reporter="DEST GATEWAY" jsonPayload.dest gateway.type="INTERCONNECT ATTACHMENT" jsonPayload.dest gateway.location=" REGION " Replace the following: PROJECT ID : the project ID CONFIG NAME : the name of the VPC Flow Logs configuration SUBNET NAME : the name of the subnet VM NAME : the name of the VM SUBNET RANGE : a CIDR range, such as 192.168.1.0/24 CLUSTER NAME : the name of the GKE cluster VPC NAME : the name of the VPC network PORT 1 and PORT 2 : the destination ports PROTOCOL : the communication protocol PROJECT NUMBER : the project number of the Cloud VPN tunnel REGION : the region of the VLAN attachment or Cloud VPN tunnel NAME : the name of the Cloud VPN tunnel Route logs to BigQuery, Pub/Sub, and custom targets You can route flow logs from Logging to a destination of your choice as described in the Routing and storage overview in the Logging documentation.
- In the query editor field, enter a query: For example, to view flow logs for a specific source Cloud VPN tunnel, enter the following query: resource.type="vpc flow logs config" logName="projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" jsonPayload.reporter="SRC GATEWAY" labels.target resource name="projects/ PROJECT NUMBER /regions/ REGION /vpnTunnels/ NAME " Replace the following: PROJECT ID : the Google Cloud project ID of the Cloud VPN tunnel PROJECT NUMBER : the project number of the Cloud VPN tunnel REGION : the region of the Cloud VPN tunnel NAME : the name of the Cloud VPN tunnel If you enabled VPC Flow Logs for a subnet by using the Compute Engine API, the query must target compute.googleapis.com .
- Log Resource type and log name networkmanagement.googleapis.com/vpc flows Collects logs for configurations that are managed by the Network Management API. resource.type="vpc flow logs config" logName="projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" compute.googleapis.com/vpc flows Collects logs for configurations that are managed by the Compute Engine API. resource.type="gce subnetwork" logName="projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows" Replace PROJECT ID with the Google Cloud project ID of the reporting resource.
- A resource is associated with more than one configuration if you create multiple configurations per resource or if you create multiple configurations and their scopes overlap as described in the following list: VPC Flow Logs is configured for the organization, and you have additional configurations for the organization or VPC networks, subnets, VLAN attachments, or Cloud VPN tunnels in any of the organization's projects.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-custom-mode-network" mtu = 1460 subnets = [ { subnet name = "subnet-01" subnet ip = "10.10.10.0/24" subnet region = "us-west1" }, { subnet name = "subnet-02" subnet ip = "10.10.20.0/24" subnet region = "us-west1" subnet private access = "true" subnet flow logs = "true" }, { subnet name = "subnet-03" subnet ip = "10.10.30.0/24" subnet region = "us-west1" subnet flow logs = "true" subnet flow logs interval = "INTERVAL 10 MIN" subnet flow logs sampling = 0.7 subnet flow logs metadata = "INCLUDE ALL METADATA" subnet flow logs filter = "false" } ] } Next, create firewall rules .
- The per network limits describe the maximum number of secondary ranges that you can define for each subnet. --enable-flow-logs : Enables VPC Flow Logs in the subnet at creation time. --enable-private-ip-google-access : Enables Private Google Access in the subnet at creation time. --purpose : Enables you to specify the purpose of the subnet . --role : Enables you to specify a role (active or backup) for a proxy-only subnet .
- Error: Constraint constraints/compute.requireVpcFlowLogs violated This error occurs if both of these conditions apply: An organization policy constraint has been set that requires that VPC Flow Logs is configured.
- You create a subnet, or update the VPC Flow Logs configuration of an existing subnet, and the configuration does not meet the requirements of the policy.

