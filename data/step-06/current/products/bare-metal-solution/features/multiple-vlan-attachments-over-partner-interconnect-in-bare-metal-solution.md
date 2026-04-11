---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:23.999Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Multiple VLAN attachments over Partner Interconnect in Bare Metal Solution"
feature_slug: "multiple-vlan-attachments-over-partner-interconnect-in-bare-metal-solution"
latest_feature_date: "2022-06-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-security"
keywords:
  - "attachments"
  - "vlan"
  - "over"
  - "interconnect"
  - "partner"
  - "multiple"
  - "bare"
  - "in"
---

# Multiple VLAN attachments over Partner Interconnect in Bare Metal Solution

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Enables configuring multiple VLAN attachments over a Partner Interconnect connection.

## Extended Definition

Enables configuring multiple VLAN attachments over a Partner Interconnect connection.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Manage VRFs In Bare Metal Solution environment, a VRF (Virtual Routing and Forwarding) is a connecting interface between a client network and VLAN attachments (also known as interconnectAttachments ).
- You can manage the VRFs and VLAN attachments in your Bare Metal Solution environment in the following ways: View VRFs Create a VRF Delete a VRF Add a VLAN attachment pair Update a VLAN attachment pair Delete a VLAN attachment pair Note: Bare Metal Solution doesn't support moving an existing client network between VRFs.
- To add a VLAN attachment pair from different project: Make sure to Enable and activate the Bare Metal Solutions API and gcloud CLI in your networking project that contains your VLAN attachments Clear the Select VLAN attachments in your current project checkbox.
- Manage VLAN attachments You can manage your VLAN attachment pairs in the following ways: Add a VLAN attachment pair Update a VLAN attachment pair Delete a VLAN attachment pair Add a VLAN attachment pair A VRF can have multiple VLAN attachment pairs.

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Multiple VLAN attachments You can configure multiple VLAN attachment pairs over a Partner Interconnect connection to your Bare Metal Solution environment.
- To configure multiple VLAN attachment pairs, see Create the VLAN attachments for the Partner Interconnect connection in Bare Metal Solution .
- We recommend using the following Bare Metal Solution standard networking configuration for small scale deployments: The standard networking configuration consist of the following: A single client network connects Bare Metal Solution servers to the Google Cloud using a single Partner Interconnect VLAN attachment pair.
- A single Partner Interconnect VLAN attachment pair connects your Virtual Private Cloud to the client network in your Bare Metal Solution environment You create a Cloud Router before provisioning VLAN attachment pair.

### "Provide security for enterprise workloads in a Bare Metal Solution environment\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Applications running in Google Cloud Bare Metal Solution runs in regional extensions; the only network path to or from the regional extension is through a Partner Interconnect to the associated Google Cloud region over customer-specific VLAN attachments.
- Network security Network security is offered at two layers, as shown in Figure 3 : Layer 3 VLAN attachments connect your Google Virtual Private Cloud to a unique virtual routing and forwarding instance (VRF) on the Bare Metal Solution edge routers.
- To connect to your Bare Metal Solution servers from your on-premises environment, you must connect your on-premises data center to Google Cloud by using a Dedicated Interconnect , Partner Interconnect , or Cloud VPN .
- Applications running on-premises As previously mentioned, the only network path to or from the Bare Metal Solution regional extension is through a Partner Interconnect to the associated Google Cloud region.

