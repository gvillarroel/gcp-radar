---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:26:34.033Z"
product_name: "Cloud Interconnect"
product_slug: "cloud-interconnect"
feature_name: "20 Gbps and 50 Gbps interconnect attachments"
feature_slug: "20-gbps-and-50-gbps-interconnect-attachments"
latest_feature_date: "2019-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/creating-vlan-attachments"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/creating-vlan-attachments"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/ordering-dedicated-interconnect"
keywords:
  - "20"
  - "gbps"
  - "and"
  - "50"
  - "interconnect"
  - "attachments"
  - "dedicated"
  - "partner"
---

# 20 Gbps and 50 Gbps interconnect attachments

Product: Cloud Interconnect
Coverage: MEDIUM

## Step 02 Summary

Dedicated Interconnect and Partner Interconnect support 20 Gbps and 50 Gbps interconnect attachments.

## Extended Definition

Dedicated Interconnect and Partner Interconnect support 20 Gbps and 50 Gbps interconnect attachments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/creating-vlan-attachments](https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/creating-vlan-attachments)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/creating-vlan-attachments](https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/creating-vlan-attachments)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/ordering-dedicated-interconnect](https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/ordering-dedicated-interconnect)

## Supporting Pages

### Create VLAN attachments \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/creating-vlan-attachments](https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/creating-vlan-attachments)
- Source ID: `site-iam-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Describe the attachment to retrieve the IPv4 or IPv6 next hop address. gcloud compute interconnects attachments describe ATTACHMENT NAME \ --region= REGION The output is similar to the following: cloudRouterIpAddress: 169.254.180.81/29 cloudRouterIpv6Address: 2600:2d00:0:1:8000:12:0:299/125 creationTimestamp: '2022-03-22T10:31:40.829-07:00' customerRouterIpAddress: 169.254.180.82/29 customerRouterIpv6Address: 2600:2d00:0:1:8000:12:0:29a/125 dataplaneVersion: 2 id: '2973197662755397267' interconnect: https://www.googleapis.com/compute/v1/projects/my-project/global/interconnects/myinterconnect kind: compute#interconnectAttachment mtu: 1500 name: my-attachment operationalStatus: ACTIVE privateInterconnectInfo: tag8021q: 1000 region: https://www.googleapis.com/compute/v1/projects/my-project/regions/us-central1 router: https://www.googleapis.com/compute/v1/projects/my-project/regions/us-central1/routers/my-router stackType: IPV4 IPV6 state: ACTIVE type: DEDICATED vlanTag8021q: 1000 Custom advertised route and MED value configuration To specify a base MED value, use the --advertised-route-priority flag.
- Use these values to configure your Cloud Router and your on-premises router. gcloud compute interconnects attachments describe ATTACHMENT NAME \ --region= REGION The output is similar to the following: cloudRouterIpAddress: 169.254.180.81/29 creationTimestamp: '2022-03-22T10:31:40.829-07:00' customerRouterIpAddress: 169.254.180.82/29 dataplaneVersion: 2 id: '2973197662755397267' interconnect: https://www.googleapis.com/compute/v1/projects/my-project/global/interconnects/myinterconnect kind: compute#interconnectAttachment mtu: 1500 name: my-attachment operationalStatus: ACTIVE privateInterconnectInfo: tag8021q: 1000 region: https://www.googleapis.com/compute/v1/projects/my-project/regions/us-central1 router: https://www.googleapis.com/compute/v1/projects/my-project/regions/us-central1/routers/my-router stackType: IPV4 ONLY state: ACTIVE type: DEDICATED vlanTag8021q: 1000 The cloudRouterIpAddress value ( 169.254.180.81/29 ) is an IPv4 link-local address.
- The maximum bandwidth is approximate, so it's possible for VLAN attachments to use more bandwidth than the selected capacity. gcloud compute interconnects attachments dedicated create ATTACHMENT NAME \ --region= REGION \ --router= ROUTER NAME \ --interconnect= INTERCONNECT NAME \ --bandwidth=500M If you don't specify a capacity, Cloud Interconnect uses the default of 10 Gbps.
- Note: Creating VLAN attachments with a combined bandwidth greater than the Dedicated Interconnect connection doesn't give you more than the maximum stated bandwidth of the connection: To use a 20-Gbps attachment, you need at least a 2 x 10-Gbps Dedicated Interconnect connection or a 100-Gbps connection.

### Create VLAN attachments \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/creating-vlan-attachments](https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/creating-vlan-attachments)
- Source ID: `site-iam-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Describe the attachment to retrieve its pairing key; you need to share this key with your service provider when you request a connection with them: gcloud compute interconnects attachments describe ATTACHMENT NAME \ --region= REGION The output is similar to the following for IPv4 VLAN attachments: adminEnabled: false edgeAvailabilityDomain: AVAILABILITY DOMAIN 1 creationTimestamp: '2017-12-01T08:29:09.886-08:00' id: '7976913826166357434' kind: compute#interconnectAttachment labelFingerprint: 42WmSpB8rSM= name: ATTACHMENT NAME pairingKey: 7e51371e-72a3-40b5-b844-2e3efefaee59/ REGION /1 region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/ REGION router: https://www.googleapis.com/compute/v1/projects/customer-project/regions/ REGION /routers/ ROUTER NAME selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/ REGION /interconnectAttachments/ ATTACHMENT NAME stackType: IPV4 ONLY state: PENDING PARTNER type: PARTNER The output is similar to the following for IPv4 and IPv6 (dual stack) VLAN attachments: bandwidth: BPS 1G cloudRouterIpAddress: 169.254.67.201/29 cloudRouterIpv6Address: 2600:2d00:0:1::1/125 creationTimestamp: '2017-12-01T08:31:11.580-08:00' customerRouterIpAddress: 169.254.67.202/29 customerRouterIpv6Address: 2600:2d00:0:1::2/125 description: Interconnect for Customer 1 id: '7193021941765913888' interconnect: https://www.googleapis.com/compute/alpha/projects/partner-project/global/interconnects/lga-2 kind: compute#interconnectAttachment labelFingerprint: 42WmSpB8rSM= name: partner-attachment partnerMetadata: interconnectName: New York (2) partnerName: Partner Inc portalUrl: https://partner-portal.com region: https://www.googleapis.com/compute/alpha/projects/partner-project/regions/ REGION selfLink: https://www.googleapis.com/compute/alpha/projects/partner-project/regions/ REGION /interconnectAttachments/ ATTACHMENT NAME stackType: IPV4 IPV6 state: ACTIVE type: PARTNER vlanTag8021q: 1000 The pairingKey field contains the pairing key that you need to share with your service provider.
- For more information about prerequisites, limitations and why you might use custom IP address ranges, see Custom IP address ranges . gcloud compute interconnects attachments partner create ATTACHMENT NAME \ --project= PROJECT ID \ --region= REGION \ --router= ROUTER NAME \ --encryption IPSEC \ --candidate-cloud-router-ip-address= CANDIDATE CLOUD ROUTER IP ADDRESS \ --candidate-customer-router-ip-address= CANDIDATE CUSTOMER ROUTER IP ADDRESS Replace the following: CANDIDATE CLOUD ROUTER IP ADDRESS : the IPv4 CIDR address that you want to assign to the Cloud Router end of your VLAN attachment, like 192.0.2.1/29 CANDIDATE CUSTOMER ROUTER IP ADDRESS : the IPv4 CIDR address that you want to assign to the customer router end of your VLAN attachment If you use IPv6 dual-stack attachments, use the following command. gcloud compute interconnects attachments partner create ATTACHMENT NAME \ --project= PROJECT ID \ --region= REGION \ --router= ROUTER NAME \ --stack-type=IPV4 IPV6 \ --encryption IPSEC \ --candidate-cloud-router-ipv6-address= CANDIDATE CLOUD ROUTER IP ADDRESS \ --candidate-customer-router-ipv6-address= CANDIDATE CUSTOMER ROUTER IP ADDRESS Replace the following: CANDIDATE CLOUD ROUTER IP ADDRESS : an IPv6 CIDR address, like 2001:db8::1/125 CANDIDATE CUSTOMER ROUTER IP ADDRESS : an IPv6 CIDR address You can use the --candidate-cloud-router-ip-address and --candidate-customer-router-ip-address flags alongside the --candidate-cloud-router-ipv6-address and --candidate-customer-router-ipv6-address flags to create an attachment that uses both IPv4 and IPv6 custom address ranges.
- For more information about prerequisites, limitations and why you might use custom IP address ranges, see Custom IP address ranges . gcloud compute interconnects attachments partner create ATTACHMENT NAME \ --project= PROJECT ID \ --region= REGION \ --router= ROUTER NAME \ --candidate-cloud-router-ip-address= CANDIDATE CLOUD ROUTER IP ADDRESS \ --candidate-customer-router-ip-address= CANDIDATE CUSTOMER ROUTER IP ADDRESS Replace the following: CANDIDATE CLOUD ROUTER IP ADDRESS : the IPv4 CIDR address that you want to assign to the Cloud Router end of your VLAN attachment, like 192.0.2.1/29 CANDIDATE CUSTOMER ROUTER IP ADDRESS : the IPv4 CIDR address that you want to assign to the customer router end of your VLAN attachment If you use IPv6 dual-stack attachments, use the following command. gcloud compute interconnects attachments partner create ATTACHMENT NAME \ --project= PROJECT ID \ --region= REGION \ --router= ROUTER NAME \ --stack-type=IPV4 IPV6 \ --candidate-cloud-router-ipv6-address= CANDIDATE CLOUD ROUTER IP ADDRESS \ --candidate-customer-router-ipv6-address= CANDIDATE CUSTOMER ROUTER IP ADDRESS Replace the following: CANDIDATE CLOUD ROUTER IP ADDRESS : an IPv6 CIDR address, like 2001:db8::1/125 CANDIDATE CUSTOMER ROUTER IP ADDRESS : an IPv6 CIDR address You can use the --candidate-cloud-router-ip-address and --candidate-customer-router-ip-address flags alongside the --candidate-cloud-router-ipv6-address and --candidate-customer-router-ipv6-address flags to create an attachment that uses both IPv4 and IPv6 custom address ranges.
- Google Cloud CLI : Use the gcloud compute interconnects attachments describe ATTACHMENT-NAME command where ATTACHMENT-NAME is the name of the VLAN attachment for either Dedicated Interconnect or Partner Interconnect.

### Order a Dedicated Interconnect connection \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/ordering-dedicated-interconnect](https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/ordering-dedicated-interconnect)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 9% availability Partner Interconnect Overview Supported service providers Create Partner Interconnect connections Provisioning overview Create VLAN attachments Request connections Activate connections Configure on-premises routers Manage Partner Interconnect connections Duplicate a VLAN attachment for redundancy View VLAN attachments Modify VLAN attachments Disable VLAN attachments Delete VLAN attachments Establish 99.99% availability Establish 99.9% availability Cross-Cloud Interconnect Overview Create Cross-Cloud Interconnect connections Connect to AWS Overview Choose your locations Order Cross-Cloud Interconnect connections Order AWS ports Configure Google Cloud resources Configure your AWS resources Verify your connections Connect to Azure Overview Choose your locations Order Cross-Cloud Interconnect connections Order Azure ports Configure your Google Cloud resources Configure your Azure resources Verify your connections Connect to OCI Overview Choose your locations Order Cross-Cloud Interconnect connections Order OCI ports Configure your Google Cloud resources Configure your OCI resources Verify your connections Connect to Alibaba Cloud Overview Choose your locations Order Cross-Cloud Interconnect connections Order Alibaba Cloud ports Configure your Google Cloud resources Configure your Alibaba Cloud resources Verify your connections Manage Cross-Cloud Interconnect connections View VLAN attachments Modify VLAN attachments Disable VLAN attachments Use connections in other projects Configure traffic differentiation View connection details Get diagnostics Disconnect networks Delete connections Partner Cross-Cloud Interconnect for OCI Overview Create Partner Cross-Cloud Interconnect connections Provisioning overview Paired locations Create VLAN attachments Request OCI connections Activate connections Partner Cross-Cloud Interconnect for AWS Overview Create Partner Cross-Cloud Interconnect connections Provisioning overview Choose a paired location Create a connection initiated from Google Cloud Create a connection initiated from AWS Manage connections Cross-Site Interconnect Overview Colocation facilities Create Cross-Site Interconnect Connections Provisioning overview Check bandwidth quotas and limits Order connections Retrieve LOA-CFAs Test connections Create a cross-site network Configure on-premises routers Manage Cross-Site Interconnect connections View cross-site networks Modify a cross-site network Disable a wire group Delete a cross-site network List locations View connection details Get diagnostics Delete connections Deploy HA VPN over Cloud Interconnect Overview Deployment process Terraform examples Assign internal IP address ranges to HA VPN gateways Configure HA VPN over Cloud Interconnect Delete HA VPN over Cloud Interconnect MACsec for Cloud Interconnect Overview Set up MACsec Enable MACsec Disable MACsec Modify fail-open behavior Get MACsec keys View MACsec status Rotate MACsec keys Troubleshoot MACsec Manage Restrict Cloud Interconnect usage Manage resources by using custom constraints Create and manage tags Calculate network throughput over Cloud Interconnect Monitor and troubleshoot Fix SLA eligibility problems Monitor connections Troubleshooting Infrastructure maintenance events Failure scenarios and impacts AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Create a Dedicated Interconnect connection group Create connections in a Dedicated Interconnect connection group Create a Dedicated Interconnect connection Home Documentation Networking Network Connectivity Cloud Interconnect Guides Was this helpful?
- Network Connectivity Cloud Interconnect Start free Overview Guides Reference Support Resources More Technology areas More Overview Guides Reference Support Resources Cross-product tools More Console Cloud Interconnect Network Connectivity home Cloud Interconnect overview Options for connecting to multiple VPC networks Best practices Key terms Topology for production-level applications (recommended) Topology for non-critical applications Dedicated Interconnect Overview Colocation facilities Create Dedicated Interconnect connections Provisioning overview Order a connection Retrieve LOA-CFAs Test connections Create VLAN attachments Configure on-premises routers Manage Dedicated Interconnect connections View VLAN attachments and groups Modify VLAN attachments Disable or enable VLAN attachments Duplicate a connection for redundancy Use connections in other projects Configure traffic differentiation List locations View connection details Get diagnostics Modify connection groups Modify connections Delete VLAN attachments Delete connections Change reliability options Establish 99.
- In the following example, each Cloud Interconnect connection has a different name and description, but share the same values for all other fields. gcloud compute interconnects groups create-members GROUP NAME \ --interconnect-type dedicated \ --link-type LINK TYPE \ --facility FACILITY NAME \ --customer-name NAME \ --noc-contact-email EMAIL ADDRESS \ --interconnect "name= CONNECTION 1 ,description='The first interconnect connection'" \ --interconnect "name= CONNECTION 2 ,description='The second interconnect connection'" Replace the following values: GROUP NAME : the name of your connection group LINK TYPE : If you want your Dedicated Interconnect connection to be made up of 10-Gbps circuits, replace LINK TYPE with LINK TYPE ETHERNET 10G LR .
- Create a Dedicated Interconnect connection that is a connection type of DEDICATED : gcloud compute interconnects create INTERCONNECT NAME \ --customer-name= NAME \ --interconnect-type=DEDICATED \ --link-type= LINK TYPE \ --location= LOCATION NAME \ --requested-link-count= NUMBER OF LINKS \ [--requested-features=MACSEC] [--noc-contact-email= EMAIL ADDRESS ] \ [--description= STRING ] Replace the following values: INTERCONNECT NAME : a name for the Dedicated Interconnect connection; this name is displayed in the Google Cloud console and is used by the Google Cloud CLI to reference the connection, such as my-interconnect NAME : the name of your organization to put in the LOA as the party authorized to request a connection LINK TYPE : the type of circuits with which you want to configure your connection.

