---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:26:34.032Z"
product_name: "Cloud Interconnect"
product_slug: "cloud-interconnect"
feature_name: "100 Gbps Dedicated Interconnect ports"
feature_slug: "100-gbps-dedicated-interconnect-ports"
latest_feature_date: "2019-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/ordering-dedicated-interconnect"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview"
keywords:
  - "100"
  - "gbps"
  - "dedicated"
  - "interconnect"
  - "ports"
  - "supports"
---

# 100 Gbps Dedicated Interconnect ports

Product: Cloud Interconnect
Coverage: MEDIUM

## Step 02 Summary

Dedicated Interconnect supports 100 Gbps ports; Dedicated Interconnect supports 100 Gbps ports.

## Extended Definition

Dedicated Interconnect supports 100 Gbps ports; Dedicated Interconnect supports 100 Gbps ports.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/ordering-dedicated-interconnect](https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/ordering-dedicated-interconnect)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview)

## Supporting Pages

### Order a Dedicated Interconnect connection \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/ordering-dedicated-interconnect](https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/ordering-dedicated-interconnect)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 9% availability Partner Interconnect Overview Supported service providers Create Partner Interconnect connections Provisioning overview Create VLAN attachments Request connections Activate connections Configure on-premises routers Manage Partner Interconnect connections Duplicate a VLAN attachment for redundancy View VLAN attachments Modify VLAN attachments Disable VLAN attachments Delete VLAN attachments Establish 99.99% availability Establish 99.9% availability Cross-Cloud Interconnect Overview Create Cross-Cloud Interconnect connections Connect to AWS Overview Choose your locations Order Cross-Cloud Interconnect connections Order AWS ports Configure Google Cloud resources Configure your AWS resources Verify your connections Connect to Azure Overview Choose your locations Order Cross-Cloud Interconnect connections Order Azure ports Configure your Google Cloud resources Configure your Azure resources Verify your connections Connect to OCI Overview Choose your locations Order Cross-Cloud Interconnect connections Order OCI ports Configure your Google Cloud resources Configure your OCI resources Verify your connections Connect to Alibaba Cloud Overview Choose your locations Order Cross-Cloud Interconnect connections Order Alibaba Cloud ports Configure your Google Cloud resources Configure your Alibaba Cloud resources Verify your connections Manage Cross-Cloud Interconnect connections View VLAN attachments Modify VLAN attachments Disable VLAN attachments Use connections in other projects Configure traffic differentiation View connection details Get diagnostics Disconnect networks Delete connections Partner Cross-Cloud Interconnect for OCI Overview Create Partner Cross-Cloud Interconnect connections Provisioning overview Paired locations Create VLAN attachments Request OCI connections Activate connections Partner Cross-Cloud Interconnect for AWS Overview Create Partner Cross-Cloud Interconnect connections Provisioning overview Choose a paired location Create a connection initiated from Google Cloud Create a connection initiated from AWS Manage connections Cross-Site Interconnect Overview Colocation facilities Create Cross-Site Interconnect Connections Provisioning overview Check bandwidth quotas and limits Order connections Retrieve LOA-CFAs Test connections Create a cross-site network Configure on-premises routers Manage Cross-Site Interconnect connections View cross-site networks Modify a cross-site network Disable a wire group Delete a cross-site network List locations View connection details Get diagnostics Delete connections Deploy HA VPN over Cloud Interconnect Overview Deployment process Terraform examples Assign internal IP address ranges to HA VPN gateways Configure HA VPN over Cloud Interconnect Delete HA VPN over Cloud Interconnect MACsec for Cloud Interconnect Overview Set up MACsec Enable MACsec Disable MACsec Modify fail-open behavior Get MACsec keys View MACsec status Rotate MACsec keys Troubleshoot MACsec Manage Restrict Cloud Interconnect usage Manage resources by using custom constraints Create and manage tags Calculate network throughput over Cloud Interconnect Monitor and troubleshoot Fix SLA eligibility problems Monitor connections Troubleshooting Infrastructure maintenance events Failure scenarios and impacts AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Create a Dedicated Interconnect connection group Create connections in a Dedicated Interconnect connection group Create a Dedicated Interconnect connection Home Documentation Networking Network Connectivity Cloud Interconnect Guides Was this helpful?
- In the following example, each Cloud Interconnect connection has a different name and description, but share the same values for all other fields. gcloud compute interconnects groups create-members GROUP NAME \ --interconnect-type dedicated \ --link-type LINK TYPE \ --facility FACILITY NAME \ --customer-name NAME \ --noc-contact-email EMAIL ADDRESS \ --interconnect "name= CONNECTION 1 ,description='The first interconnect connection'" \ --interconnect "name= CONNECTION 2 ,description='The second interconnect connection'" Replace the following values: GROUP NAME : the name of your connection group LINK TYPE : If you want your Dedicated Interconnect connection to be made up of 10-Gbps circuits, replace LINK TYPE with LINK TYPE ETHERNET 10G LR .
- In the following alternative example the Cloud Interconnect connections have the same description, but different facilities: gcloud compute interconnects groups create-members GROUP NAME \ --interconnect-type dedicated \ --description "Both will have this same description" \ --link-type LINK TYPE \ --customer-name NAME \ --noc-contact-email EMAIL ADDRESS \ --interconnect "name= CONNECTION 1 ,facility= FACILITY NAME 1 " \ --interconnect "name= CONNECTION 2 ,facility= FACILITY NAME 2 " \ Replace the following values: GROUP NAME : the name of your connection group LINK TYPE : If you want your Dedicated Interconnect connection to be made up of 10-Gbps circuits, replace LINK TYPE with LINK TYPE ETHERNET 10G LR .
- After you order a Dedicated Interconnect connection, Google sends you a confirmation through email, and allocates ports for you.

### Dedicated Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- Source ID: `site-iam-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Each link type has a different maximum capacity: 1 x 10-Gbps (10 Gbps) circuit up to 8 x 10-Gbps (80 Gbps) circuits 1 x 100-Gbps (100 Gbps) circuit up to 8 x 100-Gbps (800 Gbps) circuits 1 x 400-Gbps (400 Gbps) circuit up to 8 x 400-Gbps (3200 Gbps) circuits Caution: The link type that you select when you create a Dedicated Interconnect connection cannot be changed later.
- For example, if you select a 10-Gbps link type and need a 100-Gbps link type later, you must create a new Dedicated Interconnect connection with the higher capacity.
- IPv6 support Dedicated Interconnect supports IPv6 traffic.
- 9% availability Partner Interconnect Overview Supported service providers Create Partner Interconnect connections Provisioning overview Create VLAN attachments Request connections Activate connections Configure on-premises routers Manage Partner Interconnect connections Duplicate a VLAN attachment for redundancy View VLAN attachments Modify VLAN attachments Disable VLAN attachments Delete VLAN attachments Establish 99.99% availability Establish 99.9% availability Cross-Cloud Interconnect Overview Create Cross-Cloud Interconnect connections Connect to AWS Overview Choose your locations Order Cross-Cloud Interconnect connections Order AWS ports Configure Google Cloud resources Configure your AWS resources Verify your connections Connect to Azure Overview Choose your locations Order Cross-Cloud Interconnect connections Order Azure ports Configure your Google Cloud resources Configure your Azure resources Verify your connections Connect to OCI Overview Choose your locations Order Cross-Cloud Interconnect connections Order OCI ports Configure your Google Cloud resources Configure your OCI resources Verify your connections Connect to Alibaba Cloud Overview Choose your locations Order Cross-Cloud Interconnect connections Order Alibaba Cloud ports Configure your Google Cloud resources Configure your Alibaba Cloud resources Verify your connections Manage Cross-Cloud Interconnect connections View VLAN attachments Modify VLAN attachments Disable VLAN attachments Use connections in other projects Configure traffic differentiation View connection details Get diagnostics Disconnect networks Delete connections Partner Cross-Cloud Interconnect for OCI Overview Create Partner Cross-Cloud Interconnect connections Provisioning overview Paired locations Create VLAN attachments Request OCI connections Activate connections Partner Cross-Cloud Interconnect for AWS Overview Create Partner Cross-Cloud Interconnect connections Provisioning overview Choose a paired location Create a connection initiated from Google Cloud Create a connection initiated from AWS Manage connections Cross-Site Interconnect Overview Colocation facilities Create Cross-Site Interconnect Connections Provisioning overview Check bandwidth quotas and limits Order connections Retrieve LOA-CFAs Test connections Create a cross-site network Configure on-premises routers Manage Cross-Site Interconnect connections View cross-site networks Modify a cross-site network Disable a wire group Delete a cross-site network List locations View connection details Get diagnostics Delete connections Deploy HA VPN over Cloud Interconnect Overview Deployment process Terraform examples Assign internal IP address ranges to HA VPN gateways Configure HA VPN over Cloud Interconnect Delete HA VPN over Cloud Interconnect MACsec for Cloud Interconnect Overview Set up MACsec Enable MACsec Disable MACsec Modify fail-open behavior Get MACsec keys View MACsec status Rotate MACsec keys Troubleshoot MACsec Manage Restrict Cloud Interconnect usage Manage resources by using custom constraints Create and manage tags Calculate network throughput over Cloud Interconnect Monitor and troubleshoot Fix SLA eligibility problems Monitor connections Troubleshooting Infrastructure maintenance events Failure scenarios and impacts AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Before you use Dedicated Interconnect How does Dedicated Interconnect work?

### Cross-Cloud Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the following table to choose the option that works best for your needs: Interconnect connection type Cross-Cloud Interconnect Partner Cross-Cloud Interconnect for AWS Description Provides dedicated connectivity between Google Cloud and providers like OCI, AWS, Azure, and Alibaba Provides dedicated connectivity between Google Cloud and providers like AWS Needs physical provisioning Yes No Needs physical attachments and ports Yes No Connection increments 10 Gbps or 100 Gbps Granular pre approved speeds starting from 1 Gbps to 100 Gbps Provisioning time 1-4 weeks 1 day or less Connection ordering Must be initiated from Google Cloud Bidirectional; can be initiated from Google Cloud or Amazon Web Services Resiliency Must be configured manually Built into the product Google support for Cross-Cloud Interconnect The following diagram shows the point of physical cabling that Google support is responsible for.
- Port capacity Cross-Cloud Interconnect connections are available in the following sizes: Provider Size Amazon Web Services (AWS), Oracle Cloud Infrastructure (OCI) 10 Gbps, 100 Gbps, and 400 Gbps Microsoft Azure, Alibaba Cloud 10 Gbps, 100 Gbps Cross-Cloud Interconnect MTU Cross-Cloud Interconnect lets you configure jumbo maximum transmission units (MTUs) with any of the cloud providers.
- Supported cloud service providers Google supports the following cloud service providers for use with Cross-Cloud Interconnect: Amazon Web Services (AWS) Microsoft Azure Oracle Cloud Infrastructure (OCI) Alibaba Cloud Cross-Cloud Interconnect and this documentation refer to such cloud service providers as your remote cloud service provider or remote cloud .
- Integrated multicloud strategy Cross-Cloud Interconnect supports your adoption of an integrated multicloud strategy.

