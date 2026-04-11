---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:26:34.028Z"
product_name: "Cloud Interconnect"
product_slug: "cloud-interconnect"
feature_name: "Partner Interconnect dual-stack IPv4 and IPv6"
feature_slug: "partner-interconnect-dual-stack-ipv4-and-ipv6"
latest_feature_date: "2024-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/modifying-vlans"
keywords:
  - "partner"
  - "interconnect"
  - "dual"
  - "stack"
  - "ipv4"
  - "and"
  - "ipv6"
  - "supports"
---

# Partner Interconnect dual-stack IPv4 and IPv6

Product: Cloud Interconnect
Coverage: MEDIUM

## Step 02 Summary

Partner Interconnect supports dual-stack IPv4 and IPv6 connectivity; Partner Interconnect supports dual-stack IPv4 and IPv6 connectivity.

## Extended Definition

Partner Interconnect supports dual-stack IPv4 and IPv6 connectivity; Partner Interconnect supports dual-stack IPv4 and IPv6 connectivity.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/modifying-vlans](https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/modifying-vlans)

## Supporting Pages

### Partner Cross-Cloud Interconnect for OCI overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview)
- Source ID: `site-iam-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To support IPv6 traffic in a Partner Cross-Cloud Interconnect for OCI connection, do the following: Configure your VPC networks to use either IPv4 and IPv6 (dual stack) or IPv6-only subnets .
- Dual-stack Partner Cross-Cloud Interconnect for OCI VLAN attachments must use separate IPv4 and IPv6 BGP sessions.
- Partner Cross-Cloud Interconnect for OCI supports connections at multiple speeds with no data transfer charges for traffic that is exchanged between Google Cloud and OCI.
- IPv6 support Partner Cross-Cloud Interconnect for OCI supports IPv6 traffic for Layer 3 connectivity.

### Partner Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To support IPv6 traffic in a Partner Interconnect connection, do the following: Configure your VPC networks to use either IPv4 and IPv6 (dual stack) or IPv6-only subnets .
- Dual-stack Partner Interconnect VLAN attachments must use separate IPv4 and IPv6 BGP sessions.
- IPv6 support Partner Interconnect supports IPv6 traffic for both Layer 2 and Layer 3 connectivity.
- You have the option to create an IPv4 and IPv6 (dual stack) VLAN attachment.

### Modify VLAN attachments \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/modifying-vlans](https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner/modifying-vlans)
- Source ID: `site-iam-reference`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The output is similar to the following when changing the stack type from IPV4 ONLY to IPV4 IPV6 : adminEnabled: true edgeAvailabilityDomain: AVAILABILITY DOMAIN 1 bandwidth: BPS 1G cloudRouterIpAddress: 169.254.67.201/29 cloudRouterIpv6Address: 2600:2d00:0:1::1/125 creationTimestamp: '2017-12-01T08:31:11.580-08:00' customerRouterIpAddress: 169.254.67.202/29 customerRouterIpv6Address: 2600:2d00:0:1::2/125 description: Interconnect for location 1 id: '7193021941765913888' interconnect: https://www.googleapis.com/compute/alpha/projects/partner-project/global/interconnects/lga-2 kind: compute#interconnectAttachment labelFingerprint: 42WmSpB8rSM= name: partner-attachment partnerMetadata: interconnectName: New York (2) partnerName: Partner Inc portalUrl: https://partner-portal.com region: https://www.googleapis.com/compute/alpha/projects/partner-project/regions/ REGION selfLink: https://www.googleapis.com/compute/alpha/projects/partner-project/regions/ REGION /interconnectAttachments/ ATTACHMENT NAME stackType: STACK TYPE state: ACTIVE type: PARTNER vlanTag8021q: 1000 The output is similar to the following when changing the stack type from IPV4 IPV6 to IPV4 ONLY : adminEnabled: true edgeAvailabilityDomain: AVAILABILITY DOMAIN 1 bandwidth: BPS 1G cloudRouterIpAddress: 169.254.67.201/29 creationTimestamp: '2017-12-01T08:31:11.580-08:00' customerRouterIpAddress: 169.254.67.202/29 description: Interconnect for location 1 id: '7193021941765913888' interconnect: https://www.googleapis.com/compute/alpha/projects/partner-project/global/interconnects/lga-2 kind: compute#interconnectAttachment labelFingerprint: 42WmSpB8rSM= name: partner-attachment partnerMetadata: interconnectName: New York (2) partnerName: Partner Inc portalUrl: https://partner-portal.com region: https://www.googleapis.com/compute/alpha/projects/partner-project/regions/ REGION selfLink: https://www.googleapis.com/compute/alpha/projects/partner-project/regions/ REGION /interconnectAttachments/ ATTACHMENT NAME stackType: STACK TYPE state: ACTIVE type: PARTNER vlanTag8021q: 1000 Add custom IP address ranges when upgrading to dual stack When you update your stack type from IPv4 only to dual stack on a Layer 2 connection, you can provide custom IPv6 address ranges by using the --candidate-cloud-router-ipv6-address and --candidate-customer-router-ipv6-address flags. gcloud compute interconnects attachments partner update ATTACHMENT NAME \ --project= PROJECT ID \ --region= REGION \ --router= ROUTER NAME \ --stack-type=IPV4 IPV6 \ --candidate-cloud-router-ipv6-address= CANDIDATE CLOUD ROUTER IP ADDRESS \ --candidate-customer-router-ipv6-address= CANDIDATE CUSTOMER ROUTER IP ADDRESS Replace the following: ATTACHMENT NAME : the name of your VLAN attachment PROJECT ID : the ID of your Google Cloud project REGION : the region of your VLAN attachment ROUTER NAME : the name of the Cloud Router CANDIDATE CLOUD ROUTER IP ADDRESS : the IPv6 CIDR address that you want to assign to the Cloud Router end of your VLAN attachment; for example, 2001:db8::1/125 CANDIDATE CUSTOMER ROUTER IP ADDRESS : the IPv6 CIDR address that you want to assign to the customer router end If you use a Layer 3 connection, your service provider can configure custom IP addresses when you upgrade the stack type.
- In the IP stack type section, select the IP stack type, either IPv4 (single-stack) or IPv4 and IPv6 (dual-stack) . (Optional): You can specify custom IP address ranges when you change your attachment's stack type.
- Modifying the stack type from IPv4 and IPv6 (dual stack) to IPv4 only (single stack) removes the IPv6 BGP session from the associated Cloud Router, and removes the IPv6 address from the VLAN attachment.
- Modifying the stack type from IPv4 and IPv6 (dual stack) to IPv4 only (single stack) removes the BGP session from the associated Cloud Router, and removes the IPv6 address from the VLAN attachment.

