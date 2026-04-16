---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.440Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "RDMA traffic annotation in VPC Flow Logs"
feature_slug: "rdma-traffic-annotation-in-vpc-flow-logs"
latest_feature_date: "2025-06-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-flow-logs-records"
  - "https://docs.cloud.google.com/vpc/docs/flow-logs"
  - "https://docs.cloud.google.com/vpc/docs/about-traffic-flows"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview"
keywords:
  - "rdma"
  - "traffic"
  - "annotation"
  - "in"
  - "vpc"
  - "flow"
  - "logs"
  - "adds"
---

# RDMA traffic annotation in VPC Flow Logs

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Adds RDMA traffic annotations to records produced by VPC Flow Logs, available in General Availability.

## Extended Definition

Adds RDMA traffic annotations to records produced by VPC Flow Logs, available in General Availability.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-flow-logs-records](https://docs.cloud.google.com/vpc/docs/about-flow-logs-records)
- [https://docs.cloud.google.com/vpc/docs/flow-logs](https://docs.cloud.google.com/vpc/docs/flow-logs)
- [https://docs.cloud.google.com/vpc/docs/about-traffic-flows](https://docs.cloud.google.com/vpc/docs/about-traffic-flows)
- [https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview)

## Supporting Pages

### "About VPC Flow Logs records \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-flow-logs-records](https://docs.cloud.google.com/vpc/docs/about-flow-logs-records)
- Source ID: `site-docs-root-2`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cross-project annotations If VPC Flow Logs is enabled at the organization level , flows through Shared VPC, VPC Network Peering, and Network Connectivity Center are annotated with cross-project annotations.
- VPC Flow Logs can't add Pod annotations because, for packets to the internet, the masquerade agent translates the Pod IP address to the node IP address before VPC Flow Logs sees the packet.
- If VPC Flow Logs is enabled at the project level, flows between resources in different projects aren't annotated with cross-project annotations.
- If you select custom metadata, you can specify the metadata fields that you want to include by the parent field, such as src vpc , or by their full names, such as src vpc.project id When new metadata fields are added to the record format, they're excluded from the flow logs unless they're within a parent field that you have specified to include.

### VPC Flow Logs \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/flow-logs](https://docs.cloud.google.com/vpc/docs/flow-logs)
- Source ID: `site-docs-root`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can: Monitor the VPC network Perform network diagnosis Filter the flow logs by VMs, serverless endpoints, VLAN attachments, and Cloud VPN tunnels to understand traffic changes Understand traffic growth for capacity forecasting Understanding network usage and optimizing network traffic expenses You can analyze network usage with VPC Flow Logs to optimize network traffic expenses.
- For example, you can analyze the network flows for the following: Traffic between regions and zones Traffic to specific countries on the internet Traffic to on-premises and other cloud networks Top talkers in the network, including VMs, serverless endpoints, VLAN attachments, and Cloud VPN tunnels Network forensics You can use VPC Flow Logs for network forensics.
- VPC Flow Logs samples TCP, UDP, ICMP, ESP, GRE, and RDMA flows: Both inbound and outbound flows are sampled.
- Configuration scope Generates flow logs for these resources Steps to enable Organization All VM instances and Cloud Run resources in all subnets in the organization All VLAN attachments in the organization All Cloud VPN tunnels in the organization Enable VPC Flow Logs for an organization VPC network All VM instances and Cloud Run resources in all subnets in the VPC network All VLAN attachments in the VPC network All Cloud VPN tunnels in the VPC network Enable VPC Flow Logs for a VPC network Subnet All VM instances and Cloud Run resources in a specific subnet Enable VPC Flow Logs for a subnet: Recommended: Enable VPC Flow Logs for a subnet (Network Management API) Enable VPC Flow Logs for a subnet (Compute Engine API) VLAN attachment A specific VLAN attachment Enable VPC Flow Logs for a VLAN attachment Cloud VPN tunnel A specific Cloud VPN tunnel Enable VPC Flow Logs for a Cloud VPN tunnel You can use filtering to customize these configuration scopes.

### About traffic flows \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/about-traffic-flows](https://docs.cloud.google.com/vpc/docs/about-traffic-flows)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Flows between VPC networks in different projects If VPC Flow Logs is configured for an organization and cross-project annotations are enabled (default), traffic flows between VPC networks in different projects are annotated in the same way as traffic flows between VPC networks in the same project; log records for these flows provide information about both sides of the connection.
- In this example, VPC Flow Logs is not turned on in project webserver-test, so no logs are recorded by VM 10.50.0.2 . reporter connection.src ip connection.dest ip bytes sent Annotations source 10.10.0.2 10.50.0.2 1,224 src instance. src vpc. destination 10.50.0.2 10.10.0.2 5,342 dest instance. dest vpc.
- VM flows through an internal proxy Network Load Balancer or internal Application Load Balancer Traffic flows through an internal proxy Network Load Balancer or internal Application Load Balancer are reported by client VMs, as long as the client VM is in a subnet that has VPC Flow Logs enabled.
- For flows that traverse the internet between a VM that's in a VPC network and an endpoint with an external IP address, flow logs are reported from the VM that's in the VPC network only: For egress flows, the logs are reported from the VPC network VM that is the source of the traffic.

### "Flow Analyzer overview \_|\_ Network Intelligence Center - Flow Analyzer\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview)
- Source ID: `site-iam-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can choose one of the following four approaches to determine which VPC Flow Logs contribute to the computed metrics and how they are evaluated: Source endpoint : the number of bytes sent or packets sent reported at the source endpoint of a flow Destination endpoint : the number of bytes sent or packets sent reported at the destination endpoint of a flow Sum of source and destination endpoint : the sum of bytes sent or packets sent reported by both endpoints of a flow Average of source and destination endpoint : an average of bytes sent or packets sent reported by both endpoints of a flow if both the source and the destination information are available in VPC Flow Logs Traffic deduplication To prevent traffic reported at the source and destination VMs from being counted twice, you can choose the Average of source and destination endpoint sampling option.
- In Flow Analyzer, you can do the following: Query logs reported by VPC Flow Logs Use SQL filters to refine your queries Sort query results by total traffic, aggregate packets, or latency View traffic for a specific time period View the top five flows with the highest traffic or latency, for the selected time period View resources with the highest traffic or latency, for the selected time period View traffic details for specific source and destination pairs in your query results How it works VPC Flow Logs samples packets in your VPC network to generate flow logs, which can be stored in Cloud Logging or routed to supported destinations, such as BigQuery or a third-party platform through Pub/Sub.
- Flow Analyzer lets you quickly and efficiently understand your Virtual Private Cloud (VPC) traffic flows without the need to write complex SQL queries for analyzing VPC Flow Logs.
- Flow Analyzer organizes the flow logs for aggregation in the following ways: Source and destination : this option uses the SRC and DEST information included in VPC Flow Logs.

