---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:29.575Z"
product_name: "Cloud Interconnect"
product_slug: "cloud-interconnect"
feature_name: "VLAN attachment modification"
feature_slug: "vlan-attachment-modification"
latest_feature_date: "2019-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/provisioning-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-999-availability"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-9999-availability"
keywords:
  - "vlan"
  - "attachment"
  - "modification"
  - "dedicated"
  - "interconnect"
  - "lets"
  - "you"
  - "modify"
---

# VLAN attachment modification

Product: Cloud Interconnect
Coverage: MEDIUM

## Step 02 Summary

Dedicated Interconnect lets you modify an existing VLAN attachment; Dedicated Interconnect lets you modify an existing VLAN attachment.

## Extended Definition

Dedicated Interconnect lets you modify an existing VLAN attachment; Dedicated Interconnect lets you modify an existing VLAN attachment.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/provisioning-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/provisioning-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-999-availability](https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-999-availability)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-9999-availability](https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-9999-availability)

## Supporting Pages

### Dedicated Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Single stack (IPv4 only) Dual stack (IPv4 and IPv6) The stack type that you select for your VLAN attachment determines what version of IP traffic is supported by your Dedicated Interconnect connection.
- Custom IP address ranges When you create a VLAN attachment for Dedicated Interconnect, you can configure custom IP address ranges for the Cloud Router and customer router ends of the attachment.
- When you configure custom IP address ranges for VLAN attachments that you use with Dedicated Interconnect, you must provide the custom IP address ranges during VLAN creation.
- Stack types and BGP sessions With Dedicated Interconnect, you can choose between two different stack types for your VLAN attachment.

### Dedicated Interconnect provisioning overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/provisioning-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/provisioning-overview)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: Configure HA VPN over Cloud Interconnect If you are deploying HA VPN over Cloud Interconnect, you must build the HA VPN tunnels that carry IPsec-encrypted traffic over your VLAN attachment.
- If you want to deploy HA VPN over Cloud Interconnect , you must create encrypted VLAN attachments .
- Home Documentation Networking Network Connectivity Cloud Interconnect Guides Send feedback Dedicated Interconnect provisioning overview Stay organized with collections Save and categorize content based on your preferences.
- Configure on-premises routers After you create a VLAN attachment, to start sending traffic between networks, you need to configure your on-premises router to establish a BGP session with your Cloud Router.

### "Establish 99.9% availability for Dedicated Interconnect \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-999-availability](https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-999-availability)
- Source ID: `site-iam-reference`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use router1 for the attachment's Cloud Router. gcloud Create two attachments, one for the int-lga1 Cloud Interconnect connection and the router1 Cloud Router and another for the int-lga2 connection and router1 : gcloud compute interconnects attachments dedicated create attachment-lga1-central1 \ --interconnect int-lga1 \ --router router1 gcloud compute interconnects attachments dedicated create attachment-lga2-central1 \ --interconnect int-lga2 \ --router router1 Describe the attachment-lga1-central1 attachment to retrieve the resources that it allocated, such as the VLAN ID and BGP peering addresses; use these values to configure the Cloud Router and on-premises router: gcloud compute interconnects attachments describe attachment-lga1-central1 \ --region us-central1 The previous command outputs the following information: cloudRouterIpAddress: 169.254.58.49/29 creationTimestamp: '2017-08-15T08:34:11.137-07:00' customerRouterIpAddress: 169.254.58.50/29 id: '5630382895290821276' interconnect: https://www.googleapis.com/compute/v1/projects/customer-project/global/interconnects/int-lga1 kind: compute#interconnectAttachment name: attachment-lga1-central1 operationalStatus: ACTIVE privateInterconnectInfo: tag8021q: 1000 region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1 router: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/routers/router1 selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/interconnectAttachments/attachment-lga1-central1 Record the following values: tag8021q : Specifies the VLAN ID, which is 1000 .
- Create VLAN attachments After your Cloud Interconnect connections are ready to use (in the ACTIVE state), create VLAN attachments to connect the connections with Cloud Router.
- On the order confirmation page, review the next steps, and then click Done . gcloud Order two Cloud Interconnect connections with the names int-lga1 and int-lga2 : gcloud compute interconnects create int-lga1 \ --customer-name "The Customer" \ --description "Example Cloud Interconnect connection in LGA ZONE1" \ --interconnect-type DEDICATED \ --link-type ETHERNET 10G LR \ --location lga-zone1-16 \ --requested-link-count 1 \ --noc-contact-email customer@customer.com gcloud compute interconnects create int-lga2 \ --customer-name "The Customer" \ --description "Example Cloud Interconnect connection in LGA ZONE2" \ --interconnect-type DEDICATED \ --link-type ETHERNET 10G LR \ --location lga-zone2-1422 \ --requested-link-count 1 \ --noc-contact-email customer@customer.com After you order Cloud Interconnect connections, Google emails you a confirmation and allocates ports for you.
- For more information, see Configuring on-premises routers . interface ae20 { flexible-vlan-tagging; native-vlan-id 1; aggregated-ether-options { lacp { active; } } unit 1000 { vlan-id 1000; family inet { address 169.254.58.50/29; } } } protocols bgp { group google { type external; multihop { ttl 4; } hold-time 60; peer-as 64513; local-as 12345; local-address 169.254.58.50; neighbor 169.254.58.49 { ... } } } What's next To learn more about each of these steps, see the Dedicated Interconnect provisioning overview .

### "Establish 99.99% availability for Dedicated Interconnect \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-9999-availability](https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-9999-availability)
- Source ID: `site-iam-reference`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create three more attachments for the other connections: int-lga2 ( rtr-cent1 ) int-iad1 ( rtr-east1 ) int-iad2 ( rtr-east1 ) Record the information for each attachment. gcloud Create four attachments: gcloud compute interconnects attachments dedicated create attachment-lga1-central1 \ --interconnect int-lga1 \ --router rtr-cent1 \ --region us-central1 gcloud compute interconnects attachments dedicated create attachment-lga2-central1 \ --interconnect int-lga2 \ --router rtr-cent1 \ --region us-central1 gcloud compute interconnects attachments dedicated create attachment-iad1-east1 \ --interconnect int-iad1 \ --router rtr-east1 \ --region us-east1 gcloud compute interconnects attachments dedicated create attachment-iad2-east1 \ --interconnect int-iad2 \ --router rtr-east1 \ --region us-east1 Describe the attachment-lga1-central1 attachment to retrieve the resources that it allocated, such as the VLAN ID and BGP peering addresses; use these values to configure the Cloud Router and on-premises router: gcloud compute interconnects attachments describe attachment-lga1-central1 \ --region us-central1 The previous command outputs the following information: cloudRouterIpAddress: 169.254.58.49/29 creationTimestamp: '2017-08-15T08:34:11.137-07:00' customerRouterIpAddress: 169.254.58.50/29 id: '5630382895290821276' interconnect: https://www.googleapis.com/compute/v1/projects/customer-project/global/interconnects/int-lga1 kind: compute#interconnectAttachment name: attachment-lga1-central1 operationalStatus: ACTIVE privateInterconnectInfo: tag8021q: 1000 region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1 router: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/routers/router1 selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/interconnectAttachments/attachment-lga1-central1 Record the following values: tag8021q : Specifies the VLAN ID, which is 1000 .
- Each Cloud Router must be attached to a pair of Dedicated Interconnect connections in a metro (two VLAN attachments for each Cloud Router).
- Because the Ashburn facility has two zones, the Google Cloud console automatically selects the same facility but a different zone for the redundant connection. gcloud Order four Dedicated Interconnect connections with the names int-lga1 , int-lga2 , int-iad1 , and int-iad2 : gcloud compute interconnects create int-lga1 \ --customer-name "The Customer" \ --description "Example connection in LGA ZONE1" \ --interconnect-type DEDICATED \ --link-type ETHERNET 10G LR \ --location lga-zone1-16 \ --requested-link-count 1 \ --noc-contact-email customer@customer.com gcloud compute interconnects create int-lga2 \ --customer-name "The Customer" \ --description "Example connection in LGA ZONE2" \ --interconnect-type DEDICATED \ --link-type ETHERNET 10G LR \ --location lga-zone2-1422 \ --requested-link-count 1 \ --noc-contact-email customer@customer.com gcloud compute interconnects create int-iad1 \ --customer-name "The Customer" \ --description "Example connection in IAD ZONE1" \ --interconnect-type DEDICATED \ --link-type ETHERNET 10G LR \ --location iad-zone1-1 \ --requested-link-count 1 \ --noc-contact-email customer@customer.com gcloud compute interconnects create int-iad2 \ --customer-name "The Customer" \ --description "Example connection in IAD ZONE2" \ --interconnect-type DEDICATED \ --link-type ETHERNET 10G LR \ --location iad-zone2-1 \ --requested-link-count 1 \ --noc-contact-email customer@customer.com After you order Dedicated Interconnect connections, Google emails you a confirmation and allocates ports for you.
- Create one more Cloud Router with the same attributes in the us-east1 region with the name rtr-east1 . gcloud Create a Cloud Router in the vpc1 network in the us-central1 region; use ASN 64513 : gcloud compute routers create rtr-cent1 \ --asn 64513 \ --network vpc1 \ --region us-central1 Create a Cloud Router in the vpc1 network in the us-east1 region; use ASN 64513 : gcloud compute routers create rtr-east1 \ --asn 64513 \ --network vpc1 \ --region us-east1 Create VLAN attachments After your connections are ready to use (in the ACTIVE state), create VLAN attachments to connect the connections with Cloud Routers.

