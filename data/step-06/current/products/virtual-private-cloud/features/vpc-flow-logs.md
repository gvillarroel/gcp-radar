---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.502Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC Flow Logs"
feature_slug: "vpc-flow-logs"
latest_feature_date: "2018-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-flow-logs-records"
  - "https://docs.cloud.google.com/vpc/docs/flow-logs"
  - "https://docs.cloud.google.com/vpc/docs/access-flow-logs"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview"
keywords:
  - "vpc"
  - "flow"
  - "logs"
  - "were"
  - "launched"
  - "as"
  - "generally"
  - "available"
---

# VPC Flow Logs

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

VPC Flow Logs were launched as a generally available feature; VPC Flow Logs became available, allowing traffic logs for virtual private cloud networks to be captured and reviewed.

## Extended Definition

VPC Flow Logs were launched as a generally available feature; VPC Flow Logs became available, allowing traffic logs for virtual private cloud networks to be captured and reviewed.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-flow-logs-records](https://docs.cloud.google.com/vpc/docs/about-flow-logs-records)
- [https://docs.cloud.google.com/vpc/docs/flow-logs](https://docs.cloud.google.com/vpc/docs/flow-logs)
- [https://docs.cloud.google.com/vpc/docs/access-flow-logs](https://docs.cloud.google.com/vpc/docs/access-flow-logs)
- [https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview)

## Supporting Pages

### "About VPC Flow Logs records \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-flow-logs-records](https://docs.cloud.google.com/vpc/docs/about-flow-logs-records)
- Source ID: `site-docs-root-2`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About VPC Flow Logs records This page describes the VPC Flow Logs record format, including which base and metadata fields are available.
- If you select custom metadata, you can specify the metadata fields that you want to include by the parent field, such as src vpc , or by their full names, such as src vpc.project id When new metadata fields are added to the record format, they're excluded from the flow logs unless they're within a parent field that you have specified to include.
- You can filter on any subset of fields listed in Record format , except for the following fields: rtt msec bytes sent packets sent start time end time VPC Flow Logs filtering uses CEL, an embedded expression language for attribute-based logic expressions.
- What's next Configure VPC Flow Logs Access flow logs Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### VPC Flow Logs \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/flow-logs](https://docs.cloud.google.com/vpc/docs/flow-logs)
- Source ID: `site-docs-root`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VPC Flow Logs samples the following packets: Packets that are sent from and received by virtual machine (VM) instances , including instances used as Google Kubernetes Engine nodes Packets that are sent from and received by Cloud Run resources configured with Direct VPC egress Packets that are sent through VLAN attachments for Cloud Interconnect and Cloud VPN tunnels You can view flow logs in Cloud Logging , and you can export logs to any destination that Cloud Logging export supports.
- You can: Monitor the VPC network Perform network diagnosis Filter the flow logs by VMs, serverless endpoints, VLAN attachments, and Cloud VPN tunnels to understand traffic changes Understand traffic growth for capacity forecasting Understanding network usage and optimizing network traffic expenses You can analyze network usage with VPC Flow Logs to optimize network traffic expenses.
- Log sampling and processing To generate flow logs, VPC Flow Logs samples packets in your VPC network, including packets that are sent from and received by VMs and serverless endpoints and packets that pass through gateways such as VLAN attachments or Cloud VPN tunnels.
- VPC Flow Logs isn't supported for subnets with purpose INTERNAL HTTPS LOAD BALANCER because these subnets are used as proxy-only subnets and have no VM instances or serverless endpoints.

### Access flow logs \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/access-flow-logs](https://docs.cloud.google.com/vpc/docs/access-flow-logs)
- Source ID: `site-docs-root-2`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Logs you want to view Query All flow logs resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") Logs for a specific configuration resource.type="vpc flow logs config" logName="projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" resource.labels.name=" CONFIG NAME " Logs for VM instances in a specific VPC network resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") (jsonPayload.src vpc.vpc name=" NETWORK NAME " OR jsonPayload.dest vpc.vpc name=" NETWORK NAME ") Logs for VM instances in a specific subnet resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") (jsonPayload.src vpc.subnetwork name=" SUBNET NAME " OR jsonPayload.dest vpc.subnetwork name=" SUBNET NAME ") Logs for a specific VM instance resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") (jsonPayload.src instance.vm name=" VM NAME " OR jsonPayload.dest instance.vm name=" VM NAME ") Logs for a specific Google Kubernetes Engine cluster resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") (jsonPayload.src gke details.cluster.cluster name=" CLUSTER NAME " OR jsonPayload.dest gke details.cluster.cluster name=" CLUSTER NAME ") Logs for only egress VM traffic from a subnet resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") jsonPayload.reporter="SRC" AND jsonPayload.src vpc.subnetwork name=" SUBNET NAME " AND (jsonPayload.dest vpc.subnetwork name!=" SUBNET NAME " OR NOT jsonPayload.dest vpc.subnetwork name: ) Logs for only egress VM traffic from a VPC network resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") jsonPayload.reporter="SRC" AND jsonPayload.src vpc.vpc name=" VPC NAME " AND (jsonPayload.dest vpc.vpc name!=" VPC NAME " OR NOT jsonPayload.dest vpc: ) Logs for traffic to a specific subnet range resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") ip in net(jsonPayload.connection.dest ip, " SUBNET RANGE ") Logs for an individual destination port resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") jsonPayload.connection.dest port= PORT jsonPayload.connection.protocol= PROTOCOL Logs for multiple destination ports resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") jsonPayload.connection.dest port=( PORT 1 OR PORT 2 ) jsonPayload.connection.protocol= PROTOCOL Logs for a specific source Cloud VPN tunnel resource.type="vpc flow logs config" logName="projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" jsonPayload.reporter="SRC GATEWAY" labels.target resource name="projects/ PROJECT NUMBER /regions/ REGION /vpnTunnels/ NAME " Logs for all destination VLAN attachments resource.type="vpc flow logs config" logName="projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" jsonPayload.reporter="DEST GATEWAY" jsonPayload.dest gateway.type="INTERCONNECT ATTACHMENT" Logs for all destination VLAN attachments in a specific region resource.type="vpc flow logs config" logName="projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" jsonPayload.reporter="DEST GATEWAY" jsonPayload.dest gateway.type="INTERCONNECT ATTACHMENT" jsonPayload.dest gateway.location=" REGION " Replace the following: PROJECT ID : the project ID CONFIG NAME : the name of the VPC Flow Logs configuration SUBNET NAME : the name of the subnet VM NAME : the name of the VM SUBNET RANGE : a CIDR range, such as 192.168.1.0/24 CLUSTER NAME : the name of the GKE cluster VPC NAME : the name of the VPC network PORT 1 and PORT 2 : the destination ports PROTOCOL : the communication protocol PROJECT NUMBER : the project number of the Cloud VPN tunnel REGION : the region of the VLAN attachment or Cloud VPN tunnel NAME : the name of the Cloud VPN tunnel Route logs to BigQuery, Pub/Sub, and custom targets You can route flow logs from Logging to a destination of your choice as described in the Routing and storage overview in the Logging documentation.
- A resource is associated with more than one configuration if you create multiple configurations per resource or if you create multiple configurations and their scopes overlap as described in the following list: VPC Flow Logs is configured for the organization, and you have additional configurations for the organization or VPC networks, subnets, VLAN attachments, or Cloud VPN tunnels in any of the organization's projects.
- In the query editor field, enter a query: For example, to view flow logs for a specific source Cloud VPN tunnel, enter the following query: resource.type="vpc flow logs config" logName="projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" jsonPayload.reporter="SRC GATEWAY" labels.target resource name="projects/ PROJECT NUMBER /regions/ REGION /vpnTunnels/ NAME " Replace the following: PROJECT ID : the Google Cloud project ID of the Cloud VPN tunnel PROJECT NUMBER : the project number of the Cloud VPN tunnel REGION : the region of the Cloud VPN tunnel NAME : the name of the Cloud VPN tunnel If you enabled VPC Flow Logs for a subnet by using the Compute Engine API, the query must target compute.googleapis.com .
- Log Resource type and log name networkmanagement.googleapis.com/vpc flows Collects logs for configurations that are managed by the Network Management API. resource.type="vpc flow logs config" logName="projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" compute.googleapis.com/vpc flows Collects logs for configurations that are managed by the Compute Engine API. resource.type="gce subnetwork" logName="projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows" Replace PROJECT ID with the Google Cloud project ID of the reporting resource.

### "Flow Analyzer overview \_|\_ Network Intelligence Center - Flow Analyzer\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview)
- Source ID: `site-iam-reference`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can choose one of the following four approaches to determine which VPC Flow Logs contribute to the computed metrics and how they are evaluated: Source endpoint : the number of bytes sent or packets sent reported at the source endpoint of a flow Destination endpoint : the number of bytes sent or packets sent reported at the destination endpoint of a flow Sum of source and destination endpoint : the sum of bytes sent or packets sent reported by both endpoints of a flow Average of source and destination endpoint : an average of bytes sent or packets sent reported by both endpoints of a flow if both the source and the destination information are available in VPC Flow Logs Traffic deduplication To prevent traffic reported at the source and destination VMs from being counted twice, you can choose the Average of source and destination endpoint sampling option.
- In Flow Analyzer, you can do the following: Query logs reported by VPC Flow Logs Use SQL filters to refine your queries Sort query results by total traffic, aggregate packets, or latency View traffic for a specific time period View the top five flows with the highest traffic or latency, for the selected time period View resources with the highest traffic or latency, for the selected time period View traffic details for specific source and destination pairs in your query results How it works VPC Flow Logs samples packets in your VPC network to generate flow logs, which can be stored in Cloud Logging or routed to supported destinations, such as BigQuery or a third-party platform through Pub/Sub.
- Each query tries to drill down the selected flow using the fields available in the VPC Flow Logs and not yet used in the original query.
- Metric aggregation The following options are available for aggregating latency data: Chart aggregation : defines the calculation method for the Highest latency flows chart and is applied to the data that is selected based on the ranking metric you choose.

