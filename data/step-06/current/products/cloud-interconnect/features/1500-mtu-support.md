---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:26:34.031Z"
product_name: "Cloud Interconnect"
product_slug: "cloud-interconnect"
feature_name: "1500 MTU support"
feature_slug: "1500-mtu-support"
latest_feature_date: "2021-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/creating-vlan-attachments"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/creating-vlan-attachments"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-oci/creating-vlan-attachments"
keywords:
  - "1500"
  - "mtu"
  - "interconnect"
  - "supports"
  - "an"
  - "of"
  - "bytes"
---

# 1500 MTU support

Product: Cloud Interconnect
Coverage: MEDIUM

## Step 02 Summary

Cloud Interconnect supports an MTU of 1500 bytes.

## Extended Definition

Cloud Interconnect supports an MTU of 1500 bytes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/creating-vlan-attachments](https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/creating-vlan-attachments)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/creating-vlan-attachments](https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/creating-vlan-attachments)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-oci/creating-vlan-attachments](https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-oci/creating-vlan-attachments)

## Supporting Pages

### Create VLAN attachments \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/creating-vlan-attachments](https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/creating-vlan-attachments)
- Source ID: `site-iam-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- To specify an MTU of 1460, 1500, or 8896 bytes for the attachment, use the --mtu flag, as shown in the following example: gcloud compute interconnects attachments dedicated create ATTACHMENT NAME \ --region= REGION \ --router= ROUTER NAME \ --interconnect= INTERCONNECT NAME \ --mtu=1500 To make use of a 1460, 1500 or 8896-byte MTU, the VPC network that uses the attachment and the on-premises systems and routers must all have the same MTU value set .
- You can also specify an attachment MTU of 1460, 1500, or 8896 bytes.
- Describe the attachment to retrieve the IPv4 or IPv6 next hop address. gcloud compute interconnects attachments describe ATTACHMENT NAME \ --region= REGION The output is similar to the following: cloudRouterIpAddress: 169.254.180.81/29 cloudRouterIpv6Address: 2600:2d00:0:1:8000:12:0:299/125 creationTimestamp: '2022-03-22T10:31:40.829-07:00' customerRouterIpAddress: 169.254.180.82/29 customerRouterIpv6Address: 2600:2d00:0:1:8000:12:0:29a/125 dataplaneVersion: 2 id: '2973197662755397267' interconnect: https://www.googleapis.com/compute/v1/projects/my-project/global/interconnects/myinterconnect kind: compute#interconnectAttachment mtu: 1500 name: my-attachment operationalStatus: ACTIVE privateInterconnectInfo: tag8021q: 1000 region: https://www.googleapis.com/compute/v1/projects/my-project/regions/us-central1 router: https://www.googleapis.com/compute/v1/projects/my-project/regions/us-central1/routers/my-router stackType: IPV4 IPV6 state: ACTIVE type: DEDICATED vlanTag8021q: 1000 Custom advertised route and MED value configuration To specify a base MED value, use the --advertised-route-priority flag.
- Use these values to configure your Cloud Router and your on-premises router. gcloud compute interconnects attachments describe ATTACHMENT NAME \ --region= REGION The output is similar to the following: cloudRouterIpAddress: 169.254.180.81/29 creationTimestamp: '2022-03-22T10:31:40.829-07:00' customerRouterIpAddress: 169.254.180.82/29 dataplaneVersion: 2 id: '2973197662755397267' interconnect: https://www.googleapis.com/compute/v1/projects/my-project/global/interconnects/myinterconnect kind: compute#interconnectAttachment mtu: 1500 name: my-attachment operationalStatus: ACTIVE privateInterconnectInfo: tag8021q: 1000 region: https://www.googleapis.com/compute/v1/projects/my-project/regions/us-central1 router: https://www.googleapis.com/compute/v1/projects/my-project/regions/us-central1/routers/my-router stackType: IPV4 ONLY state: ACTIVE type: DEDICATED vlanTag8021q: 1000 The cloudRouterIpAddress value ( 169.254.180.81/29 ) is an IPv4 link-local address.

### Create VLAN attachments \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/creating-vlan-attachments](https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/creating-vlan-attachments)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Maximum transmission unit (MTU) for the attachment: To make use of the 1460-, 1500-, or 8896-byte maximum transmission unit (MTU), the VPC network that uses the attachment must have an MTU set to the same value .
- To specify an MTU of 1460 , 1500 , or 8896 use the --mtu parameter—for example, --mtu 1500 .
- All encrypted VLAN attachments must use an MTU of 1440 bytes, which is the default value.
- For more information about prerequisites, limitations and why you might use custom IP address ranges, see Custom IP address ranges . gcloud compute interconnects attachments partner create ATTACHMENT NAME \ --project= PROJECT ID \ --region= REGION \ --router= ROUTER NAME \ --encryption IPSEC \ --candidate-cloud-router-ip-address= CANDIDATE CLOUD ROUTER IP ADDRESS \ --candidate-customer-router-ip-address= CANDIDATE CUSTOMER ROUTER IP ADDRESS Replace the following: CANDIDATE CLOUD ROUTER IP ADDRESS : the IPv4 CIDR address that you want to assign to the Cloud Router end of your VLAN attachment, like 192.0.2.1/29 CANDIDATE CUSTOMER ROUTER IP ADDRESS : the IPv4 CIDR address that you want to assign to the customer router end of your VLAN attachment If you use IPv6 dual-stack attachments, use the following command. gcloud compute interconnects attachments partner create ATTACHMENT NAME \ --project= PROJECT ID \ --region= REGION \ --router= ROUTER NAME \ --stack-type=IPV4 IPV6 \ --encryption IPSEC \ --candidate-cloud-router-ipv6-address= CANDIDATE CLOUD ROUTER IP ADDRESS \ --candidate-customer-router-ipv6-address= CANDIDATE CUSTOMER ROUTER IP ADDRESS Replace the following: CANDIDATE CLOUD ROUTER IP ADDRESS : an IPv6 CIDR address, like 2001:db8::1/125 CANDIDATE CUSTOMER ROUTER IP ADDRESS : an IPv6 CIDR address You can use the --candidate-cloud-router-ip-address and --candidate-customer-router-ip-address flags alongside the --candidate-cloud-router-ipv6-address and --candidate-customer-router-ipv6-address flags to create an attachment that uses both IPv4 and IPv6 custom address ranges.

### Create VLAN attachments \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-oci/creating-vlan-attachments](https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-oci/creating-vlan-attachments)
- Source ID: `site-iam-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To specify an MTU of 1460 , 1500 , or 8896 use the --mtu parameter—for example, --mtu 1500 .
- Create VLAN attachments Cloud Interconnect Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools More / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
- Run the following command twice—once for each attachment: gcloud compute interconnects attachments describe NAME --region REGION Replace the following: NAME : the name of the VLAN attachment REGION : the region where the VLAN attachment is located The command returns output that includes cloudRouterIpAddress and customerRouterIpAddress .
- To configure the Google Cloud resources needed for Partner Cross-Cloud Interconnect for OCI, complete the following tasks: Create two VLAN attachments, one for each of your Partner Cross-Cloud Interconnect for OCI connections.

