---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:29.575Z"
product_name: "Cloud Interconnect"
product_slug: "cloud-interconnect"
feature_name: "Partner Interconnect"
feature_slug: "partner-interconnect"
latest_feature_date: "2018-06-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/partner-creating-9999-availability"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/partner-creating-999-availability"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product"
keywords:
  - "partner"
  - "interconnect"
  - "connects"
  - "your"
  - "network"
  - "to"
  - "through"
  - "supported"
---

# Partner Interconnect

Product: Cloud Interconnect
Coverage: MEDIUM

## Step 02 Summary

Partner Interconnect connects your network to Google's network through a supported service provider; Partner Interconnect connects your network to Google's network through a supported service provider.

## Extended Definition

Partner Interconnect connects your network to Google's network through a supported service provider; Partner Interconnect connects your network to Google's network through a supported service provider.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/partner-creating-9999-availability](https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/partner-creating-9999-availability)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/partner-creating-999-availability](https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/partner-creating-999-availability)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product](https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product)

## Supporting Pages

### "Establish 99.99% availability for Partner Interconnect \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/partner-creating-9999-availability](https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/partner-creating-9999-availability)
- Source ID: `site-iam-reference`
- Final score: 322
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The values of ipAddress and peerIpAddress of the BGP peer must match the values of cloudRouterIpAddress and customerRouterIpAddress of your attachment. gcloud compute routers describe router-central1 \ --region us-central1 bgp: advertiseMode: DEFAULT asn: 16550 bgpPeers: — interfaceName: auto-ia-if-attachment-central-a-c2c53a710bd6c2e ipAddress: 169.254.67.201 managementType: MANAGED BY ATTACHMENT name: auto-ia-bgp-attachment-central-a-c2c53a710bd6c2e peerIpAddress: 169.254.67.202 creationTimestamp: '2018-01-25T07:14:43.068-08:00' description: 'test' id: '4370996577373014668' interfaces: — ipRange: 169.254.67.201/29 linkedInterconnectAttachment: https://www.googleapis.com/compute/alpha/projects/customer-project/regions/us-central1/interconnectAttachments/customer-attachment1-partner managementType: MANAGED BY ATTACHMENT name: auto-ia-if-attachment-central-a-c2c53a710bd6c2e kind: compute#router name: partner network: https://www.googleapis.com/compute/v1/projects/customer-project/global/networks/vpc1 region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1 selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/routers/router-central1 Update the BGP peer with your on-premises router's ASN: gcloud compute routers update-bgp-peer router-central1 \ --peer-name auto-ia-bgp-attachment-central-a-c2c53a710bd6c2e \ --peer-asn ON PREM ASN \ --region us-central1 After the BGP sessions are established, you can pass between your VPC network and on-premises network through your service provider's network.
- Retrieve the pairing keys for the attach-central-b , attach-east-a , and attach-east-b VLAN attachments. gcloud Retrieve the VLAN attachment pairing keys by describing each one; use these keys to request connections with your service provider: gcloud compute interconnects attachments describe attach-central-a \ --region us-central1 The previous command outputs the following information: adminEnabled: false edgeAvailabilityDomain: AVAILABILITY DOMAIN 1 creationTimestamp: '2017-12-01T08:29:09.886-08:00' id: '7976913826166357434' kind: compute#interconnectAttachment labelFingerprint: 42WmSpB8rSM= name: attach-central-a pairingKey: 7e51371e-72a3-40b5-b844-2e3efefaee59/us-central1/1 region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1 router: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/routers/router-central1 selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/interconnectAttachments/attach-central-a state: PENDING PARTNER type: PARTNER Record the value of the pairingKey for each VLAN attachment.
- Repeat these steps to create another redundant pair of attachments for the us-east4 region. gcloud Create four attachments: gcloud compute interconnects attachments partner create attach-central-a \ --router router-central1 \ --region us-central1 \ --edge-availability-domain availability-domain-1 gcloud compute interconnects attachments partner create attach-central-b \ --router router-central1 \ --region us-central1 \ --edge-availability-domain availability-domain-2 gcloud compute interconnects attachments partner create attach-east-a \ --router router-east4 \ --region us-east4 \ --edge-availability-domain availability-domain-1 gcloud compute interconnects attachments partner create attach-east-b \ --router router-east4 \ --region us-east4 \ --edge-availability-domain availability-domain-2 Retrieve pairing keys After you create your VLAN attachments, Google Cloud generates pairing keys for each one.
- Go back to the VLAN attachments tab and activate the other attachments. gcloud Describe each VLAN attachment to verify whether your service provider completed configuring them: gcloud compute interconnects attachments describe attach-central-a \ --region us-central1 \ --format '(name,state,partnerMetadata)' gcloud compute interconnects attachments describe attach-central-b \ --region us-central1 \ --format '(name,state,partnerMetadata)' gcloud compute interconnects attachments describe attach-east-a \ --region us-east4 \ --format '(name,state,partnerMetadata)' gcloud compute interconnects attachments describe attach-east-b \ --region us-east4 \ --format '(name,state,partnerMetadata)' After your service provider configures your VLAN attachments, the state of your attachments changes from PENDING PARTNER to PENDING CUSTOMER .

### "Establish 99.9% availability for Partner Interconnect \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/partner-creating-999-availability](https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/partner-creating-999-availability)
- Source ID: `site-iam-reference`
- Final score: 314
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The values of ipAddress and peerIpAddress of the BGP peer must match the values of cloudRouterIpAddress and customerRouterIpAddress of your attachment. gcloud compute routers describe router-central \ --region us-central1 bgp: advertiseMode: DEFAULT asn: 16550 bgpPeers: — interfaceName: auto-ia-if-attachment-central-a-c2c53a710bd6c2e ipAddress: 169.254.67.201 managementType: MANAGED BY ATTACHMENT name: auto-ia-bgp-attachment-central-a-c2c53a710bd6c2e peerIpAddress: 169.254.67.202 creationTimestamp: '2018-01-25T07:14:43.068-08:00' description: 'test' id: '4370996577373014668' interfaces: — ipRange: 169.254.67.201/29 linkedInterconnectAttachment: https://www.googleapis.com/compute/alpha/projects/customer-project/regions/us-central1/interconnectAttachments/customer-attachment1-partner managementType: MANAGED BY ATTACHMENT name: auto-ia-if-attachment-central-a-c2c53a710bd6c2e kind: compute#router name: partner network: https://www.googleapis.com/compute/v1/projects/customer-project/global/networks/vpc1 region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1 selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/routers/router-central Update the BGP peer with your on-premises router's ASN: gcloud compute routers update-bgp-peer router-central \ --peer-name auto-ia-bgp-attachment-central-c2c53a710bd6c2e \ --peer-asn ON PREM ASN \ --region us-central1 After the BGP sessions are established, you can pass between your VPC network and on-premises network through your service provider's network.
- Retrieve the pairing keys for the attach-central-b VLAN attachment. gcloud Retrieve the VLAN attachment pairing keys by describing each one; use these keys to request connections with your service provider: gcloud compute interconnects attachments describe attach-central-a \ --region us-central1 The previous command outputs the following information: adminEnabled: false edgeAvailabilityDomain: AVAILABILITY DOMAIN 1 creationTimestamp: '2017-12-01T08:29:09.886-08:00' id: '7976913826166357434' kind: compute#interconnectAttachment labelFingerprint: 42WmSpB8rSM= name: attach-central-a pairingKey: 7e51371e-72a3-40b5-b844-2e3efefaee59/us-central1/1 region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1 router: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/routers/router-central selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/interconnectAttachments/attach-central-a state: PENDING PARTNER type: PARTNER Record the value of the pairingKey for each VLAN attachment.
- Go back to the VLAN attachments tab and activate the other attachment. gcloud Describe each VLAN attachment to verify whether your service provider completed configuring them: gcloud compute interconnects attachments describe attach-central-a \ --region us-central1 \ --router router-central \ --format '(name,state,partnerMetadata)' gcloud compute interconnects attachments describe attach-central-b \ --region us-central1 \ --router router-central \ --format '(name,state,partnerMetadata)' After your service provider configures your VLAN attachments, the state of your attachments changes from PENDING PARTNER to PENDING CUSTOMER .
- Click OK to view a list of your VLAN attachments. gcloud Create two attachments: gcloud compute interconnects attachments partner create attach-central-a \ --router router-central \ --region us-central1 \ --edge-availability-domain availability-domain-1 gcloud compute interconnects attachments partner create attach-central-b \ --router router-central \ --region us-central1 \ --edge-availability-domain availability-domain-2 Retrieve pairing keys After you create your VLAN attachments, Google Cloud generates pairing keys for each one.

### Partner Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview)
- Source ID: `site-docs-root`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Provisioning To provision a Partner Interconnect connection with a service provider, you start by selecting a partner and whether you want MACsec for Cloud Interconnect , and then connecting your on-premises network to a supported service provider.
- Partner Interconnect provides connectivity between your on-premises network and your Virtual Private Cloud (VPC) network through a supported service provider.
- To support IPv6 traffic in a Partner Interconnect connection, do the following: Configure your VPC networks to use either IPv4 and IPv6 (dual stack) or IPv6-only subnets .
- The process for creating VLAN attachments differs based on whether you request a Layer 3 or Layer 2 connection from your service provider: Layer 2: when you configure custom IP address ranges for VLAN attachments that you use with Partner Interconnect, you must provide the custom IP address ranges during VLAN creation.

### Choosing a Network Connectivity product \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product](https://docs.cloud.google.com/network-connectivity/docs/how-to/choose-product)
- Source ID: `site-iam-reference`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the following resources: Cloud Interconnect overview Dedicated Interconnect overview Partner Interconnect overview Topology for production-level applications overview Topology for non-critical applications overview Cross-Cloud Interconnect If you need to connect your Google Cloud VPC network to your network that's hosted by another cloud service provider, use Cross-Cloud Interconnect.
- If you can't physically meet Google's network in a colocation facility to reach your VPC networks, you can use Partner Interconnect to connect to service providers that connect directly to Google: If you have high bandwidth needs, Dedicated Interconnect can be a cost-effective solution.
- Your network traffic egressing from Google Cloud through one of these links benefits from the direct connectivity to supported CDN providers and is billed automatically with reduced pricing.
- Dedicated Interconnect and Partner Interconnect Network Connectivity provides two options for extending your on-premises network to your VPC networks in Google Cloud.

