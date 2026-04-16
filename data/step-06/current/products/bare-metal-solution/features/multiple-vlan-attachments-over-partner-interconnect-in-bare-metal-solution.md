---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.430Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Multiple VLAN attachments over Partner Interconnect in Bare Metal Solution"
feature_slug: "multiple-vlan-attachments-over-partner-interconnect-in-bare-metal-solution"
latest_feature_date: "2022-06-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-setup"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-security"
keywords:
  - "attachments"
  - "vlan"
  - "over"
  - "interconnect"
  - "partner"
  - "multiple"
---

# Multiple VLAN attachments over Partner Interconnect in Bare Metal Solution

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Enables configuring multiple VLAN attachments over a Partner Interconnect connection.

## Extended Definition

Enables configuring multiple VLAN attachments over a Partner Interconnect connection.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- [https://docs.cloud.google.com/bare-metal/docs/bms-setup](https://docs.cloud.google.com/bare-metal/docs/bms-setup)
- [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security)

## Supporting Pages

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Multiple VLAN attachments You can configure multiple VLAN attachment pairs over a Partner Interconnect connection to your Bare Metal Solution environment.
- To configure multiple VLAN attachment pairs, see Create the VLAN attachments for the Partner Interconnect connection in Bare Metal Solution .
- When your order an advanced networking configuration, the following options become available for more complex network deployments: Multiple VLANs Multiple VLAN attachments Multiple VPC connections Maximum transmission unit Network templates Multiple VLANs Instead of a single client network and single private network for each bonded interface, you can add multiple client networks and private networks on server bond interfaces.
- We recommend using the following Bare Metal Solution standard networking configuration for small scale deployments: The standard networking configuration consist of the following: A single client network connects Bare Metal Solution servers to the Google Cloud using a single Partner Interconnect VLAN attachment pair.

### "Quickstart: Set up Google Cloud to work with your Bare Metal Solution environment\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-setup](https://docs.cloud.google.com/bare-metal/docs/bms-setup)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- They are both in the us-central1 region. gcloud compute interconnects attachments partner create my-attachment \ --region us-central1 \ --router my-router-1 \ --edge-availability-domain availability-domain-1 \ --admin-enabled gcloud compute interconnects attachments partner create my-attachment \ --region us-central1 \ --router my-router-2 \ --edge-availability-domain availability-domain-2 \ --admin-enabled Run the gcloud compute interconnects attachments describe command to view the details of the VLAN attachment. gcloud compute interconnects attachments describe my-attachment \ --region us-central1 adminEnabled: false edgeAvailabilityDomain: AVAILABILITY DOMAIN 1 creationTimestamp: '2017-12-01T08:29:09.886-08:00' id: '7976913826166357434' kind: compute#interconnectAttachment labelFingerprint: 42WmSpB8rSM= name: my-attachment region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1 router: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/routers/my-router selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/interconnectAttachments/my-attachment state: PENDING PARTNER type: PARTNER The state of the VLAN attachment is PENDING PARTNER until Google Cloud completes your VLAN attachment configuration.
- If the VLAN attachments do not come up after Google Cloud completes your Bare Metal Solution order, activate each VLAN attachment: gcloud compute interconnects attachments partner update attachment-name \ --region region \ --admin-enabled You can check the status of the Cloud Routers and your advertised routes in the Cloud console.
- Also, add the --admin-enabled flag to pre-activate the attachments and send traffic immediately after Google Cloud completes the Bare Metal Solution configuration. gcloud compute interconnects attachments partner create first-attachment-name \ --region region \ --router first-router-name \ --edge-availability-domain availability-domain-1 \ --admin-enabled gcloud compute interconnects attachments partner create second-attachment-name \ --region region \ --router second-router-name \ --edge-availability-domain availability-domain-2 \ --admin-enabled Google Cloud automatically adds an interface and a BGP peer on the Cloud Router.
- Create the VLAN attachments for the Cloud Interconnect connection To access your Bare Metal Solution server, you need to create and set up VLAN attachments (also known as InterconnectAttachments ) in the same region as your server.

### "Provide security for enterprise workloads in a Bare Metal Solution environment\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Applications running in Google Cloud Bare Metal Solution runs in regional extensions; the only network path to or from the regional extension is through a Partner Interconnect to the associated Google Cloud region over customer-specific VLAN attachments.
- Network security Network security is offered at two layers, as shown in Figure 3 : Layer 3 VLAN attachments connect your Google Virtual Private Cloud to a unique virtual routing and forwarding instance (VRF) on the Bare Metal Solution edge routers.
- To connect to your Bare Metal Solution servers from your on-premises environment, you must connect your on-premises data center to Google Cloud by using a Dedicated Interconnect , Partner Interconnect , or Cloud VPN .
- Applications running on-premises As previously mentioned, the only network path to or from the Bare Metal Solution regional extension is through a Partner Interconnect to the associated Google Cloud region.

