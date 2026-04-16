---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.453Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "VPC Flow Logs metadata annotation fields"
feature_slug: "vpc-flow-logs-metadata-annotation-fields"
latest_feature_date: "2024-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-flow-logs-records"
  - "https://docs.cloud.google.com/vpc/docs/flow-logs"
  - "https://docs.cloud.google.com/vpc/docs/access-flow-logs"
  - "https://docs.cloud.google.com/vpc/docs/about-traffic-flows"
keywords:
  - "vpc"
  - "flow"
  - "logs"
  - "metadata"
  - "annotation"
  - "fields"
  - "now"
  - "supports"
---

# VPC Flow Logs metadata annotation fields

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

VPC Flow Logs now supports additional GA metadata annotations, including gateway, Google service, load balancing, and Private Service Connect fields.

## Extended Definition

VPC Flow Logs now supports additional GA metadata annotations, including gateway, Google service, load balancing, and Private Service Connect fields.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-flow-logs-records](https://docs.cloud.google.com/vpc/docs/about-flow-logs-records)
- [https://docs.cloud.google.com/vpc/docs/flow-logs](https://docs.cloud.google.com/vpc/docs/flow-logs)
- [https://docs.cloud.google.com/vpc/docs/access-flow-logs](https://docs.cloud.google.com/vpc/docs/access-flow-logs)
- [https://docs.cloud.google.com/vpc/docs/about-traffic-flows](https://docs.cloud.google.com/vpc/docs/about-traffic-flows)

## Supporting Pages

### "About VPC Flow Logs records \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-flow-logs-records](https://docs.cloud.google.com/vpc/docs/about-flow-logs-records)
- Source ID: `site-docs-root-2`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- If you select custom metadata, you can specify the metadata fields that you want to include by the parent field, such as src vpc , or by their full names, such as src vpc.project id When new metadata fields are added to the record format, they're excluded from the flow logs unless they're within a parent field that you have specified to include.
- Log filtering When you enable VPC Flow Logs, you can set a filter based on both base and metadata fields that only preserves logs that match the filter.
- About VPC Flow Logs records This page describes the VPC Flow Logs record format, including which base and metadata fields are available.
- For information about how to customize metadata fields, see Enable VPC Flow Logs or Update VPC Flow Logs configuration .

### VPC Flow Logs \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/flow-logs](https://docs.cloud.google.com/vpc/docs/flow-logs)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next To learn more about the VPC Flow Logs record format and which metadata annotations are available, see About VPC Flow Logs records .
- VPC Flow Logs samples the following packets: Packets that are sent from and received by virtual machine (VM) instances , including instances used as Google Kubernetes Engine nodes Packets that are sent from and received by Cloud Run resources configured with Direct VPC egress Packets that are sent through VLAN attachments for Cloud Interconnect and Cloud VPN tunnels You can view flow logs in Cloud Logging , and you can export logs to any destination that Cloud Logging export supports.
- VPC Flow Logs supports VMs that have multiple network interfaces.
- Configuration scope Generates flow logs for these resources Steps to enable Organization All VM instances and Cloud Run resources in all subnets in the organization All VLAN attachments in the organization All Cloud VPN tunnels in the organization Enable VPC Flow Logs for an organization VPC network All VM instances and Cloud Run resources in all subnets in the VPC network All VLAN attachments in the VPC network All Cloud VPN tunnels in the VPC network Enable VPC Flow Logs for a VPC network Subnet All VM instances and Cloud Run resources in a specific subnet Enable VPC Flow Logs for a subnet: Recommended: Enable VPC Flow Logs for a subnet (Network Management API) Enable VPC Flow Logs for a subnet (Compute Engine API) VLAN attachment A specific VLAN attachment Enable VPC Flow Logs for a VLAN attachment Cloud VPN tunnel A specific Cloud VPN tunnel Enable VPC Flow Logs for a Cloud VPN tunnel You can use filtering to customize these configuration scopes.

### Access flow logs \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/access-flow-logs](https://docs.cloud.google.com/vpc/docs/access-flow-logs)
- Source ID: `site-docs-root-2`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- If you use multiple VPC Flow Logs configurations per resource, specify the name of the configuration that you want to query and the target resource by adding the resource.labels.name and labels.target resource name fields to the query.
- For more information about these fields and how to use them, see Examples of Logs Explorer queries for VPC Flow Logs .
- Logs you want to view Query All flow logs resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") Logs for a specific configuration resource.type="vpc flow logs config" logName="projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" resource.labels.name=" CONFIG NAME " Logs for VM instances in a specific VPC network resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") (jsonPayload.src vpc.vpc name=" NETWORK NAME " OR jsonPayload.dest vpc.vpc name=" NETWORK NAME ") Logs for VM instances in a specific subnet resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") (jsonPayload.src vpc.subnetwork name=" SUBNET NAME " OR jsonPayload.dest vpc.subnetwork name=" SUBNET NAME ") Logs for a specific VM instance resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") (jsonPayload.src instance.vm name=" VM NAME " OR jsonPayload.dest instance.vm name=" VM NAME ") Logs for a specific Google Kubernetes Engine cluster resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") (jsonPayload.src gke details.cluster.cluster name=" CLUSTER NAME " OR jsonPayload.dest gke details.cluster.cluster name=" CLUSTER NAME ") Logs for only egress VM traffic from a subnet resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") jsonPayload.reporter="SRC" AND jsonPayload.src vpc.subnetwork name=" SUBNET NAME " AND (jsonPayload.dest vpc.subnetwork name!=" SUBNET NAME " OR NOT jsonPayload.dest vpc.subnetwork name: ) Logs for only egress VM traffic from a VPC network resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") jsonPayload.reporter="SRC" AND jsonPayload.src vpc.vpc name=" VPC NAME " AND (jsonPayload.dest vpc.vpc name!=" VPC NAME " OR NOT jsonPayload.dest vpc: ) Logs for traffic to a specific subnet range resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") ip in net(jsonPayload.connection.dest ip, " SUBNET RANGE ") Logs for an individual destination port resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") jsonPayload.connection.dest port= PORT jsonPayload.connection.protocol= PROTOCOL Logs for multiple destination ports resource.type=("vpc flow logs config" OR "gce subnetwork") logName=("projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" OR "projects/ PROJECT ID /logs/compute.googleapis.com%2Fvpc flows") jsonPayload.connection.dest port=( PORT 1 OR PORT 2 ) jsonPayload.connection.protocol= PROTOCOL Logs for a specific source Cloud VPN tunnel resource.type="vpc flow logs config" logName="projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" jsonPayload.reporter="SRC GATEWAY" labels.target resource name="projects/ PROJECT NUMBER /regions/ REGION /vpnTunnels/ NAME " Logs for all destination VLAN attachments resource.type="vpc flow logs config" logName="projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" jsonPayload.reporter="DEST GATEWAY" jsonPayload.dest gateway.type="INTERCONNECT ATTACHMENT" Logs for all destination VLAN attachments in a specific region resource.type="vpc flow logs config" logName="projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" jsonPayload.reporter="DEST GATEWAY" jsonPayload.dest gateway.type="INTERCONNECT ATTACHMENT" jsonPayload.dest gateway.location=" REGION " Replace the following: PROJECT ID : the project ID CONFIG NAME : the name of the VPC Flow Logs configuration SUBNET NAME : the name of the subnet VM NAME : the name of the VM SUBNET RANGE : a CIDR range, such as 192.168.1.0/24 CLUSTER NAME : the name of the GKE cluster VPC NAME : the name of the VPC network PORT 1 and PORT 2 : the destination ports PROTOCOL : the communication protocol PROJECT NUMBER : the project number of the Cloud VPN tunnel REGION : the region of the VLAN attachment or Cloud VPN tunnel NAME : the name of the Cloud VPN tunnel Route logs to BigQuery, Pub/Sub, and custom targets You can route flow logs from Logging to a destination of your choice as described in the Routing and storage overview in the Logging documentation.
- In the query editor field, enter a query: For example, to view flow logs for a specific source Cloud VPN tunnel, enter the following query: resource.type="vpc flow logs config" logName="projects/ PROJECT ID /logs/networkmanagement.googleapis.com%2Fvpc flows" jsonPayload.reporter="SRC GATEWAY" labels.target resource name="projects/ PROJECT NUMBER /regions/ REGION /vpnTunnels/ NAME " Replace the following: PROJECT ID : the Google Cloud project ID of the Cloud VPN tunnel PROJECT NUMBER : the project number of the Cloud VPN tunnel REGION : the region of the Cloud VPN tunnel NAME : the name of the Cloud VPN tunnel If you enabled VPC Flow Logs for a subnet by using the Compute Engine API, the query must target compute.googleapis.com .

### About traffic flows \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/about-traffic-flows](https://docs.cloud.google.com/vpc/docs/about-traffic-flows)
- Source ID: `site-docs-root-2`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Flows between VPC networks in different projects If VPC Flow Logs is configured for an organization and cross-project annotations are enabled (default), traffic flows between VPC networks in different projects are annotated in the same way as traffic flows between VPC networks in the same project; log records for these flows provide information about both sides of the connection.
- In this example, VPC Flow Logs is not turned on in project webserver-test, so no logs are recorded by VM 10.50.0.2 . reporter connection.src ip connection.dest ip bytes sent Annotations source 10.10.0.2 10.50.0.2 1,224 src instance. src vpc. destination 10.50.0.2 10.10.0.2 5,342 dest instance. dest vpc.
- Cross-project annotations disabled The following example describes how VPC Flow Logs annotates log records for VM-to-VM flows between projects when cross-project annotations are disabled.
- Cross-project annotations enabled The following example describes how VPC Flow Logs annotates log records for VM-to-VM flows between projects when cross-project annotations are enabled.

