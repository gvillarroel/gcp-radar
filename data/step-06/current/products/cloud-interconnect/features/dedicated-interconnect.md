---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:29.576Z"
product_name: "Cloud Interconnect"
product_slug: "cloud-interconnect"
feature_name: "Dedicated Interconnect"
feature_slug: "dedicated-interconnect"
latest_feature_date: "2017-10-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/provisioning-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-999-availability"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-9999-availability"
keywords:
  - "dedicated"
  - "interconnect"
  - "extends"
  - "an"
  - "on"
  - "premises"
  - "network"
  - "to"
---

# Dedicated Interconnect

Product: Cloud Interconnect
Coverage: MEDIUM

## Step 02 Summary

Dedicated Interconnect extends an on-premises network to Google's network through a dedicated physical connection; Dedicated Interconnect extends an on-premises network to Google's network through a dedicated physical connection.

## Extended Definition

Dedicated Interconnect extends an on-premises network to Google's network through a dedicated physical connection; Dedicated Interconnect extends an on-premises network to Google's network through a dedicated physical connection.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/provisioning-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/provisioning-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-999-availability](https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-999-availability)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-9999-availability](https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-9999-availability)

## Supporting Pages

### Dedicated Interconnect provisioning overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/provisioning-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/provisioning-overview)
- Source ID: `site-docs-root`
- Final score: 388
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking Network Connectivity Cloud Interconnect Guides Send feedback Dedicated Interconnect provisioning overview Stay organized with collections Save and categorize content based on your preferences.
- Configure on-premises routers After you create a VLAN attachment, to start sending traffic between networks, you need to configure your on-premises router to establish a BGP session with your Cloud Router.
- To create and configure a Cloud Interconnect connection for Dedicated Interconnect, follow these steps: Decide if you want MACsec for Cloud Interconnect .
- Create VLAN attachments When your connection is ready to use, you need to connect Virtual Private Cloud (VPC) networks to your on-premises network.

### Dedicated Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- Source ID: `site-docs-root`
- Final score: 364
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dedicated Interconnect connection (click to enlarge) For the basic setup shown in the diagram, a Dedicated Interconnect connection is provisioned between the Google network and the on-premises router in a common colocation facility.
- Dedicated Interconnect availability A Dedicated Interconnect connection is considered available if you can send and receive ICMP packets ( ping ) between a VM in a specific Google Cloud region and a correctly configured machine in your on-premises network.
- To support IPv6 traffic in a Dedicated Interconnect, do the following: Configure your VPC networks to use either IPv4 and IPv6 (dual stack) or IPv6-only subnets .
- The following example diagram shows a single Dedicated Interconnect connection between a Virtual Private Cloud (VPC) network and your on-premises network.

### "Establish 99.9% availability for Dedicated Interconnect \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-999-availability](https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-999-availability)
- Source ID: `site-iam-reference`
- Final score: 356
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use router1 for the attachment's Cloud Router. gcloud Create two attachments, one for the int-lga1 Cloud Interconnect connection and the router1 Cloud Router and another for the int-lga2 connection and router1 : gcloud compute interconnects attachments dedicated create attachment-lga1-central1 \ --interconnect int-lga1 \ --router router1 gcloud compute interconnects attachments dedicated create attachment-lga2-central1 \ --interconnect int-lga2 \ --router router1 Describe the attachment-lga1-central1 attachment to retrieve the resources that it allocated, such as the VLAN ID and BGP peering addresses; use these values to configure the Cloud Router and on-premises router: gcloud compute interconnects attachments describe attachment-lga1-central1 \ --region us-central1 The previous command outputs the following information: cloudRouterIpAddress: 169.254.58.49/29 creationTimestamp: '2017-08-15T08:34:11.137-07:00' customerRouterIpAddress: 169.254.58.50/29 id: '5630382895290821276' interconnect: https://www.googleapis.com/compute/v1/projects/customer-project/global/interconnects/int-lga1 kind: compute#interconnectAttachment name: attachment-lga1-central1 operationalStatus: ACTIVE privateInterconnectInfo: tag8021q: 1000 region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1 router: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/routers/router1 selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/interconnectAttachments/attachment-lga1-central1 Record the following values: tag8021q : Specifies the VLAN ID, which is 1000 .
- For more information, see Configuring on-premises routers . interface ae20 { flexible-vlan-tagging; native-vlan-id 1; aggregated-ether-options { lacp { active; } } unit 1000 { vlan-id 1000; family inet { address 169.254.58.50/29; } } } protocols bgp { group google { type external; multihop { ttl 4; } hold-time 60; peer-as 64513; local-as 12345; local-address 169.254.58.50; neighbor 169.254.58.49 { ... } } } What's next To learn more about each of these steps, see the Dedicated Interconnect provisioning overview .
- On the order confirmation page, review the next steps, and then click Done . gcloud Order two Cloud Interconnect connections with the names int-lga1 and int-lga2 : gcloud compute interconnects create int-lga1 \ --customer-name "The Customer" \ --description "Example Cloud Interconnect connection in LGA ZONE1" \ --interconnect-type DEDICATED \ --link-type ETHERNET 10G LR \ --location lga-zone1-16 \ --requested-link-count 1 \ --noc-contact-email customer@customer.com gcloud compute interconnects create int-lga2 \ --customer-name "The Customer" \ --description "Example Cloud Interconnect connection in LGA ZONE2" \ --interconnect-type DEDICATED \ --link-type ETHERNET 10G LR \ --location lga-zone2-1422 \ --requested-link-count 1 \ --noc-contact-email customer@customer.com After you order Cloud Interconnect connections, Google emails you a confirmation and allocates ports for you.
- On the router1 Cloud Router, add an interface for the attachment-lga1-central1 attachment: gcloud compute routers add-interface router1 \ --interface-name router1-1 \ --interconnect-attachment attachment-lga1-central1 \ --ip-address 169.254.58.49 \ --mask-length 29 \ --region us-central1 Add a BGP peer to the interface; for this example, the on-premises ASN is 12345 : gcloud compute routers add-bgp-peer router1 \ --interface router1-1 \ --peer-name central1 \ --peer-ip-address 169.254.58.50 \ --peer-asn 12345 \ --region us-central1 Describe the attachment-lga2-central1 attachment, and then configure another BGP session on the router1 Cloud Router.

### "Establish 99.99% availability for Dedicated Interconnect \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-9999-availability](https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-9999-availability)
- Source ID: `site-iam-reference`
- Final score: 356
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create three more attachments for the other connections: int-lga2 ( rtr-cent1 ) int-iad1 ( rtr-east1 ) int-iad2 ( rtr-east1 ) Record the information for each attachment. gcloud Create four attachments: gcloud compute interconnects attachments dedicated create attachment-lga1-central1 \ --interconnect int-lga1 \ --router rtr-cent1 \ --region us-central1 gcloud compute interconnects attachments dedicated create attachment-lga2-central1 \ --interconnect int-lga2 \ --router rtr-cent1 \ --region us-central1 gcloud compute interconnects attachments dedicated create attachment-iad1-east1 \ --interconnect int-iad1 \ --router rtr-east1 \ --region us-east1 gcloud compute interconnects attachments dedicated create attachment-iad2-east1 \ --interconnect int-iad2 \ --router rtr-east1 \ --region us-east1 Describe the attachment-lga1-central1 attachment to retrieve the resources that it allocated, such as the VLAN ID and BGP peering addresses; use these values to configure the Cloud Router and on-premises router: gcloud compute interconnects attachments describe attachment-lga1-central1 \ --region us-central1 The previous command outputs the following information: cloudRouterIpAddress: 169.254.58.49/29 creationTimestamp: '2017-08-15T08:34:11.137-07:00' customerRouterIpAddress: 169.254.58.50/29 id: '5630382895290821276' interconnect: https://www.googleapis.com/compute/v1/projects/customer-project/global/interconnects/int-lga1 kind: compute#interconnectAttachment name: attachment-lga1-central1 operationalStatus: ACTIVE privateInterconnectInfo: tag8021q: 1000 region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1 router: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/routers/router1 selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/interconnectAttachments/attachment-lga1-central1 Record the following values: tag8021q : Specifies the VLAN ID, which is 1000 .
- For more information, see Configuring on-premises routers . interface ae20 { flexible-vlan-tagging; native-vlan-id 1; aggregated-ether-options { lacp { active; } } unit 1000 { vlan-id 1000; family inet { address 169.254.58.50/29; } } } protocols bgp { group google { type external; multihop { ttl 4; } hold-time 60; peer-as 64513; local-as 12345; local-address 169.254.58.50; neighbor 169.254.58.49 { ... } } } What's next To learn more about each of these steps, see the Dedicated Interconnect Provisioning overview .
- Because the Ashburn facility has two zones, the Google Cloud console automatically selects the same facility but a different zone for the redundant connection. gcloud Order four Dedicated Interconnect connections with the names int-lga1 , int-lga2 , int-iad1 , and int-iad2 : gcloud compute interconnects create int-lga1 \ --customer-name "The Customer" \ --description "Example connection in LGA ZONE1" \ --interconnect-type DEDICATED \ --link-type ETHERNET 10G LR \ --location lga-zone1-16 \ --requested-link-count 1 \ --noc-contact-email customer@customer.com gcloud compute interconnects create int-lga2 \ --customer-name "The Customer" \ --description "Example connection in LGA ZONE2" \ --interconnect-type DEDICATED \ --link-type ETHERNET 10G LR \ --location lga-zone2-1422 \ --requested-link-count 1 \ --noc-contact-email customer@customer.com gcloud compute interconnects create int-iad1 \ --customer-name "The Customer" \ --description "Example connection in IAD ZONE1" \ --interconnect-type DEDICATED \ --link-type ETHERNET 10G LR \ --location iad-zone1-1 \ --requested-link-count 1 \ --noc-contact-email customer@customer.com gcloud compute interconnects create int-iad2 \ --customer-name "The Customer" \ --description "Example connection in IAD ZONE2" \ --interconnect-type DEDICATED \ --link-type ETHERNET 10G LR \ --location iad-zone2-1 \ --requested-link-count 1 \ --noc-contact-email customer@customer.com After you order Dedicated Interconnect connections, Google emails you a confirmation and allocates ports for you.
- On the rtr-cent1 Cloud Router, add an interface for the attachment-lga1-central1 attachment: gcloud compute routers add-interface rtr-cent1 \ --interface-name rtr-cent1-1 \ --interconnect-attachment attachment-lga1-central1 \ --ip-address 169.254.58.49 \ --mask-length 29 \ --region us-central1 Add a BGP peer to the interface; for this example, the on-premises ASN is 12345 : gcloud compute routers add-bgp-peer rtr-cent1 \ --interface rtr-cent1-1 \ --peer-name central1 \ --peer-ip-address 169.254.58.50 \ --peer-asn 12345 \ --advertised-route-priority 100 \ --region us-central1 Describe the other attachments, and then similarly configure a new BGP session on the appropriate Cloud Router.

