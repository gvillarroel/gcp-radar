---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.453Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC Flow Logs traffic sampling for VLAN attachments and VPN tunnels"
feature_slug: "vpc-flow-logs-traffic-sampling-for-vlan-attachments-and-vpn-tunnels"
latest_feature_date: "2024-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/flow-logs"
  - "https://docs.cloud.google.com/vpc/docs/about-flow-logs-records"
  - "https://docs.cloud.google.com/vpc/docs/about-traffic-flows"
  - "https://docs.cloud.google.com/vpc/docs/access-flow-logs"
keywords:
  - "vpc"
  - "flow"
  - "logs"
  - "traffic"
  - "sampling"
  - "for"
  - "vlan"
  - "attachments"
---

# VPC Flow Logs traffic sampling for VLAN attachments and VPN tunnels

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

VPC Flow Logs now supports sampling traffic for Cloud Interconnect VLAN attachments and Cloud VPN tunnels.

## Extended Definition

VPC Flow Logs now supports sampling traffic for Cloud Interconnect VLAN attachments and Cloud VPN tunnels.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/flow-logs](https://docs.cloud.google.com/vpc/docs/flow-logs)
- [https://docs.cloud.google.com/vpc/docs/about-flow-logs-records](https://docs.cloud.google.com/vpc/docs/about-flow-logs-records)
- [https://docs.cloud.google.com/vpc/docs/about-traffic-flows](https://docs.cloud.google.com/vpc/docs/about-traffic-flows)
- [https://docs.cloud.google.com/vpc/docs/access-flow-logs](https://docs.cloud.google.com/vpc/docs/access-flow-logs)

## Supporting Pages

### VPC Flow Logs \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/flow-logs](https://docs.cloud.google.com/vpc/docs/flow-logs)
- Source ID: `site-docs-root`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can: Monitor the VPC network Perform network diagnosis Filter the flow logs by VMs, serverless endpoints, VLAN attachments, and Cloud VPN tunnels to understand traffic changes Understand traffic growth for capacity forecasting Understanding network usage and optimizing network traffic expenses You can analyze network usage with VPC Flow Logs to optimize network traffic expenses.
- For example, you can analyze the network flows for the following: Traffic between regions and zones Traffic to specific countries on the internet Traffic to on-premises and other cloud networks Top talkers in the network, including VMs, serverless endpoints, VLAN attachments, and Cloud VPN tunnels Network forensics You can use VPC Flow Logs for network forensics.
- Configuration scope Generates flow logs for these resources Steps to enable Organization All VM instances and Cloud Run resources in all subnets in the organization All VLAN attachments in the organization All Cloud VPN tunnels in the organization Enable VPC Flow Logs for an organization VPC network All VM instances and Cloud Run resources in all subnets in the VPC network All VLAN attachments in the VPC network All Cloud VPN tunnels in the VPC network Enable VPC Flow Logs for a VPC network Subnet All VM instances and Cloud Run resources in a specific subnet Enable VPC Flow Logs for a subnet: Recommended: Enable VPC Flow Logs for a subnet (Network Management API) Enable VPC Flow Logs for a subnet (Compute Engine API) VLAN attachment A specific VLAN attachment Enable VPC Flow Logs for a VLAN attachment Cloud VPN tunnel A specific Cloud VPN tunnel Enable VPC Flow Logs for a Cloud VPN tunnel You can use filtering to customize these configuration scopes.
- VPC Flow Logs samples the following packets: Packets that are sent from and received by virtual machine (VM) instances , including instances used as Google Kubernetes Engine nodes Packets that are sent from and received by Cloud Run resources configured with Direct VPC egress Packets that are sent through VLAN attachments for Cloud Interconnect and Cloud VPN tunnels You can view flow logs in Cloud Logging , and you can export logs to any destination that Cloud Logging export supports.

### "About VPC Flow Logs records \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-flow-logs-records](https://docs.cloud.google.com/vpc/docs/about-flow-logs-records)
- Source ID: `site-docs-root-2`
- Final score: 282
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about accuracy and sampling, see VPC Flow Logs: Understanding byte and packet counts and Log sampling and processing .
- If you select custom metadata, you can specify the metadata fields that you want to include by the parent field, such as src vpc , or by their full names, such as src vpc.project id When new metadata fields are added to the record format, they're excluded from the flow logs unless they're within a parent field that you have specified to include.
- This field is populated as follows: Measured only for TCP traffic Populated for VMs and serverless endpoints Not populated for VLAN attachments and Cloud VPN tunnels The measured RTT is the time elapsed between sending a SEQ and receiving a corresponding ACK.
- You can filter on any subset of fields listed in Record format , except for the following fields: rtt msec bytes sent packets sent start time end time VPC Flow Logs filtering uses CEL, an embedded expression language for attribute-based logic expressions.

### About traffic flows \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/about-traffic-flows](https://docs.cloud.google.com/vpc/docs/about-traffic-flows)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Hybrid connectivity flows For hybrid connectivity through VLAN attachments for Cloud Interconnect and Cloud VPN tunnels, VPC Flow Logs annotates the following flows: Flows between VM instances, including instances used as GKE nodes, and on-premises endpoints Flows between Google services and on-premises endpoints Transit flows between on-premises endpoints The following example describes how VPC Flow Logs annotates flows between a VM instance in a VPC network and an on-premises endpoint.
- Flows between VPC networks in different projects If VPC Flow Logs is configured for an organization and cross-project annotations are enabled (default), traffic flows between VPC networks in different projects are annotated in the same way as traffic flows between VPC networks in the same project; log records for these flows provide information about both sides of the connection.
- For flows that traverse the internet between a VM that's in a VPC network and an endpoint with an external IP address, flow logs are reported from the VM that's in the VPC network only: For egress flows, the logs are reported from the VPC network VM that is the source of the traffic.
- VM-to-Google API flows For VM traffic to Google APIs through the VM's external IP address, Private Google Access, or a Private Service Connect endpoint, VPC Flow Logs annotates log records with Google API information.

### Access flow logs \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/access-flow-logs](https://docs.cloud.google.com/vpc/docs/access-flow-logs)
- Source ID: `site-docs-root-2`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Logs you want to view Query All flow logs resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") Logs for a specific configuration resource.type="vpc flow logs config" logName="projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" resource.labels.name=" CONFIG NAME " Logs for VM instances in a specific VPC network resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") (jsonPayload.src vpc.vpc name=" NETWORK NAME " OR jsonPayload.dest vpc.vpc name=" NETWORK NAME ") Logs for VM instances in a specific subnet resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") (jsonPayload.src vpc.subnetwork name=" SUBNET NAME " OR jsonPayload.dest vpc.subnetwork name=" SUBNET NAME ") Logs for a specific VM instance resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") (jsonPayload.src instance.vm name=" VM NAME " OR jsonPayload.dest instance.vm name=" VM NAME ") Logs for a specific Google Kubernetes Engine cluster resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") (jsonPayload.src gke details.cluster.cluster name=" CLUSTER NAME " OR jsonPayload.dest gke details.cluster.cluster name=" CLUSTER NAME ") Logs for only egress VM traffic from a subnet resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") jsonPayload.reporter="SRC" AND jsonPayload.src vpc.subnetwork name=" SUBNET NAME " AND (jsonPayload.dest vpc.subnetwork name!=" SUBNET NAME " OR NOT jsonPayload.dest vpc.subnetwork name: ) Logs for only egress VM traffic from a VPC network resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") jsonPayload.reporter="SRC" AND jsonPayload.src vpc.vpc name=" VPC NAME " AND (jsonPayload.dest vpc.vpc name!=" VPC NAME " OR NOT jsonPayload.dest vpc: ) Logs for traffic to a specific subnet range resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") ip in net(jsonPayload.connection.dest ip, " SUBNET RANGE ") Logs for an individual destination port resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") jsonPayload.connection.dest port= PORT jsonPayload.connection.protocol= PROTOCOL Logs for multiple destination ports resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") jsonPayload.connection.dest port=( PORT 1 OR PORT 2 ) jsonPayload.connection.protocol= PROTOCOL Logs for a specific source Cloud VPN tunnel resource.type="vpc flow logs config" logName="projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" jsonPayload.reporter="SRC GATEWAY" labels.target resource name="projects/ PROJECT NUMBER /regions/ REGION /vpnTunnels/ NAME " Logs for all destination VLAN attachments resource.type="vpc flow logs config" logName="projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" jsonPayload.reporter="DEST GATEWAY" jsonPayload.dest gateway.type="INTERCONNECT ATTACHMENT" Logs for all destination VLAN attachments in a specific region resource.type="vpc flow logs config" logName="projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" jsonPayload.reporter="DEST GATEWAY" jsonPayload.dest gateway.type="INTERCONNECT ATTACHMENT" jsonPayload.dest gateway.location=" REGION " Replace the following: PROJECT ID : the project ID CONFIG NAME : the name of the VPC Flow Logs configuration SUBNET NAME : the name of the subnet VM NAME : the name of the VM SUBNET RANGE : a CIDR range, such as 192.168.1.0/24 CLUSTER NAME : the name of the GKE cluster VPC NAME : the name of the VPC network PORT 1 and PORT 2 : the destination ports PROTOCOL : the communication protocol PROJECT NUMBER : the project number of the Cloud VPN tunnel REGION : the region of the VLAN attachment or Cloud VPN tunnel NAME : the name of the Cloud VPN tunnel Route logs to BigQuery, Pub/Sub, and custom targets You can route flow logs from Logging to a destination of your choice as described in the Routing and storage overview in the Logging documentation.
- A resource is associated with more than one configuration if you create multiple configurations per resource or if you create multiple configurations and their scopes overlap as described in the following list: VPC Flow Logs is configured for the organization, and you have additional configurations for the organization or VPC networks, subnets, VLAN attachments, or Cloud VPN tunnels in any of the organization's projects.
- VPC Flow Logs uses the following logs to collect log entries: The networkmanagement.googleapis.com/vpc flows log collects log entries for Virtual Private Cloud (VPC) networks, subnets, VLAN attachments for Cloud Interconnect, and Cloud VPN tunnels.
- By default, a VPC Flow Logs configuration for an organization generates logs for all VM instances in all subnets, all VLAN attachments, and all Cloud VPN tunnels in the organization.

