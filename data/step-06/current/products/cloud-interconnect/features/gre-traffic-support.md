---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:29.572Z"
product_name: "Cloud Interconnect"
product_slug: "cloud-interconnect"
feature_name: "GRE traffic support"
feature_slug: "gre-traffic-support"
latest_feature_date: "2021-05-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices"
keywords:
  - "gre"
  - "traffic"
  - "interconnect"
  - "supports"
  - "generic"
  - "routing"
  - "encapsulation"
---

# GRE traffic support

Product: Cloud Interconnect
Coverage: MEDIUM

## Step 02 Summary

Cloud Interconnect supports Generic Routing Encapsulation (GRE) traffic; Cloud Interconnect supports Generic Routing Encapsulation (GRE) traffic.

## Extended Definition

Cloud Interconnect supports Generic Routing Encapsulation (GRE) traffic; Cloud Interconnect supports Generic Routing Encapsulation (GRE) traffic.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices)

## Supporting Pages

### Cloud Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- The following reserved IP address ranges are not supported: Reserved IPv4 address ranges: 0.0.0.0/8 10.0.0.0/8 100.64.0.0/10 127.0.0.0/8 172.16.0.0/12 192.0.0.0/24 192.0.2.0/24 192.88.99.0/24 192.168.0.0/16 198.18.0.0/15 198.51.100.0/24 203.0.113.0/24 224.0.0.0/4 240.0.0.0/4 Reserved IPv6 address ranges: ::ffff:0:0/96 64:ff9b::/96 64:ff9b:1::/48 100::/64 2001:/32 2001:20::/28 2001:db8::/32 fe80::/10 2002::/16 3fff::/20 5f00::/16 fc00::/7 fe80::/10 ff00::/8 Configure custom IP address ranges To create VLAN attachments with custom IP address ranges, see the following pages: Dedicated Interconnect: configure custom IP address ranges Layer 2 Partner Interconnect connections: use custom IP address ranges with Layer 2 connections Layer 3 Partner Interconnect connections: use custom IP address ranges with Layer 3 connections Cross-Cloud Interconnect: Alibaba Cloud: configure custom IP address ranges Amazon Web Services (AWS): configure custom IP address ranges Microsoft Azure: configure custom IP address ranges Oracle Cloud Infrastructure: configure custom IP address ranges Support for GRE traffic Cloud Interconnect supports GRE traffic.
- Dedicated Interconnect, Partner Interconnect, Direct Peering , and Carrier Peering can all help you optimize egress traffic from your VPC network and reduce your egress costs.
- Support for GRE lets you terminate GRE traffic on a VM from the internet (external IP address) and Cloud VPN or Cloud Interconnect (internal IP address).
- The following configurations require that you create custom advertised routes on your Cloud Router to direct traffic from your on-premises network to certain internal IP addresses by using a Cloud Interconnect connection: Configure Private Google Access for on-premises hosts Create a Cloud DNS forwarding zone Alternative name server network requirements Cloud Interconnect as a data transfer network Before you use Cloud Interconnect, carefully review Section 2 of the General Service Terms for Google Cloud.

### Partner Cross-Cloud Interconnect for OCI overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Partner Cross-Cloud Interconnect for OCI supports connections at multiple speeds with no data transfer charges for traffic that is exchanged between Google Cloud and OCI.
- IPv6 support Partner Cross-Cloud Interconnect for OCI supports IPv6 traffic for Layer 3 connectivity.
- Balancing egress traffic with redundant VLAN attachments When you have a redundant topology similar to the 99.99% configuration, there are multiple paths for traffic to traverse from the VPC network to your on-premises network.
- To support IPv6 traffic in a Partner Cross-Cloud Interconnect for OCI connection, do the following: Configure your VPC networks to use either IPv4 and IPv6 (dual stack) or IPv6-only subnets .

### Troubleshooting \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Troubleshooting steps to follow Dedicated Interconnect Partner Interconnect with L3 partner Partner Interconnect with L2 partner For Partner Interconnect, the Cloud Router might never be pingable because some partners filter traffic to the IP range ( 169.254.0.0/16 ) for Cloud Router.
- However, when viewing the corresponding ingress and egress utilization graphs there aren't traffic spikes displayed.
- Yes Not applicable Yes Troubleshooting ARP For Dedicated Interconnect, to find the correct MAC address, run the following gcloud command: gcloud compute interconnects get-diagnostics INTERCONNECT NAME The googleSystemID contains the MAC address that should be present in your device's ARP table for IP addresses assigned to Cloud Router. result: links: — circuitId: SAMPLE-0 googleDemarc: sample-local-demarc-0 lacpStatus: googleSystemId: '' neighborSystemId: '' state: DETACHED receivingOpticalPower: value: 0.0 transmittingOpticalPower: value: 0.0 macAddress: 00:00:00:00:00:00 If your device has not learned a MAC address, verify that the correct VLAN ID and IP address are configured on the subinterface.
- For more information about advertising routes between on-premises networks and VPC peered networks, see the following resources: Advertising custom IP ranges Troubleshooting in Using VPC Network Peering Missing subnets in a connection To advertise all of the available subnets, specify the missing routes with custom advertised routes and advertise all subnet routes between regions with global dynamic routing.

### Best practices for Cloud Interconnect \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices)
- Source ID: `site-iam-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Consider an example in which you build the topology for production-level applications , and you have a VPC network with the following: VLAN attachments in two regions Global dynamic routing enabled Traffic prefers to egress the VLAN attachments in the local region, even if the attachments in that region are overloaded.
- Cloud Interconnect connections provide protection for up to 50% of network traffic on aggregate capacity when capacity is split evenly between edge availability domains.
- Scenario 2: Insufficient capacity during failover In this scenario, you provision two Dedicated Interconnect connections in two different edge availability domains as shown in the following table: Edge availability domain Connection capacity Attachment capacity Attachment region EDGE DOMAIN 1 1 x 100 Gbps 100 Gbps (2 x 50 Gbps) ATTACHMENT REGION 1 EDGE DOMAIN 2 1 x 100 Gbps 100 Gbps (2 x 50 Gbps) ATTACHMENT REGION 1 The following table describes how this configuration handles your workload during normal operation and failover: Resource Description Size of your workload 150 Gbps of total traffic between ATTACHMENT REGION 1 and your on-premises network.
- Scenario 1: Sufficient capacity In this scenario, you provision two Dedicated Interconnect connections in two different edge availability domains as shown in the following table: Edge availability domain Connection capacity Attachment capacity Attachment region EDGE DOMAIN 1 1 x 10 Gbps 1 x 10 Gbps ATTACHMENT REGION 1 EDGE DOMAIN 2 1 x 10 Gbps 1 x 10 Gbps ATTACHMENT REGION 1 The following table describes how this configuration handles your workload during normal operation and failover: Resource Description Size of your workload 10 Gbps of total traffic between ATTACHMENT REGION 1 and your on-premises network.

