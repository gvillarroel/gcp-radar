---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.993Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "Migrate Connector throttling"
feature_slug: "migrate-connector-throttling"
latest_feature_date: "2023-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source"
keywords:
  - "migrate"
  - "connector"
  - "throttling"
  - "lets"
  - "you"
  - "throttle"
  - "transfer"
  - "rates"
---

# Migrate Connector throttling

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Lets you throttle data transfer rates on the Migrate Connector to control migration bandwidth.

## Extended Definition

Lets you throttle data transfer rates on the Migrate Connector to control migration bandwidth.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source)

## Supporting Pages

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Step 5: Create a Cut-over In the cut-over phase, you transfer control to your migrated VM running in a Compute Engine instance in your production environment on Google Cloud.
- Add Network Interface Migrate to Virtual Machines lets you optionally create a Compute Engine instance with multiple network interfaces (NICs).
- Migrate to Virtual Machines generates an adaptation report after your replication cycle is complete.
- Migrate to Virtual Machines generates an adaptation report when your cut-over cycle is complete.

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root-2`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Step 5: Create a Cut-over In the cut-over phase, you transfer control to your migrated VM running in a Compute Engine instance in your production environment on Google Cloud.
- Add Network Interface Migrate to Virtual Machines lets you optionally create a Compute Engine instance with multiple network interfaces (NICs).
- Migrate to Virtual Machines generates an adaptation report after your replication cycle is complete.
- Migrate to Virtual Machines generates an adaptation report when your cut-over cycle is complete.

### "Prepare a Google Cloud VMware Engine source for migration \_|\_ Migrate\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Define Google Cloud accounts On Google Cloud, you need two accounts: A service account in your host project used by the Migrate Connector for run-time data transfer to Google Cloud.
- The following table lists the network connectivity requirements for the connector: Source Destination Firewall scope Protocol Port Migrate Connector vCenter Server Corp LAN HTTPS TCP/443 Migrate Connector vCenter Server Corp LAN VMW NBD TCP/902 Migrate Connector vSphere ESXi Corp LAN VMW NBD TCP/902 Migrate Connector Google Cloud APIs and Artifact Registry ( .googleapis.com, gcr.io) Internet, Cloud VPN , or Cloud Interconnect HTTPS TCP/443 Migrate Connector Corp DNS Server Corp LAN DNS TCP/UDP/53 If you configure the Migrate Connector VM on vSphere or VMware Engine to use a proxy server , traffic sent to Google Cloud APIs is directed over the proxy server.
- Ensure that the firewall rules on your vSphere or VMware Engine server allow external access to the following domains required by the Google Cloud APIs: .googleapis.com gcr.io Install the Migrate Connector You can now install and register the Migrate Connector.
- Follow these steps to install and configure a Migrate Connector, and create a VMware Engine source: On VMware Engine , you must create a VMware Engine user account with the permissions required by the Migrate Connector to access your VMware Engine environment.

### "Prepare a Google Cloud VMware Engine source for migration \_|\_ Migrate\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source)
- Source ID: `site-docs-root-2`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Define Google Cloud accounts On Google Cloud, you need two accounts: A service account in your host project used by the Migrate Connector for run-time data transfer to Google Cloud.
- The following table lists the network connectivity requirements for the connector: Source Destination Firewall scope Protocol Port Migrate Connector vCenter Server Corp LAN HTTPS TCP/443 Migrate Connector vCenter Server Corp LAN VMW NBD TCP/902 Migrate Connector vSphere ESXi Corp LAN VMW NBD TCP/902 Migrate Connector Google Cloud APIs and Artifact Registry ( .googleapis.com, gcr.io) Internet, Cloud VPN , or Cloud Interconnect HTTPS TCP/443 Migrate Connector Corp DNS Server Corp LAN DNS TCP/UDP/53 If you configure the Migrate Connector VM on vSphere or VMware Engine to use a proxy server , traffic sent to Google Cloud APIs is directed over the proxy server.
- Ensure that the firewall rules on your vSphere or VMware Engine server allow external access to the following domains required by the Google Cloud APIs: .googleapis.com gcr.io Install the Migrate Connector You can now install and register the Migrate Connector.
- Follow these steps to install and configure a Migrate Connector, and create a VMware Engine source: On VMware Engine , you must create a VMware Engine user account with the permissions required by the Migrate Connector to access your VMware Engine environment.

