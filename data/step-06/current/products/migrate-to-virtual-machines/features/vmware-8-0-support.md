---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.994Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "VMware 8.0 support"
feature_slug: "vmware-8-0-support"
latest_feature_date: "2023-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source"
keywords:
  - "vmware"
  - "adds"
  - "for"
  - "migrations"
  - "from"
  - "environments"
---

# VMware 8.0 support

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Adds support for migrations from VMware 8.0 environments.

## Extended Definition

Adds support for migrations from VMware 8.0 environments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source)

## Supporting Pages

### "Prepare a VMware source for migration \_|\_ Migrate to Virtual Machines\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Supported VMware Versions Migrate to Virtual Machines supports migrations from VMware vCenter and ESXi.
- The following table lists the network connectivity requirements for the connector: Source Destination Firewall scope Protocol Port Migrate Connector vCenter Server Corp LAN HTTPS TCP/443 Migrate Connector vCenter Server Corp LAN VMW NBD TCP/902 Migrate Connector vSphere ESXi Corp LAN VMW NBD TCP/902 Migrate Connector Google Cloud APIs and Artifact Registry ( .googleapis.com, gcr.io) Internet, Cloud VPN , or Cloud Interconnect HTTPS TCP/443 Migrate Connector Corp DNS Server Corp LAN DNS TCP/UDP/53 If you configure the Migrate Connector VM on vSphere or VMware Engine to use a proxy server , traffic sent to Google Cloud APIs is directed over the proxy server.
- Configure network access Enable network access for the Migrate Connector by opening the required ports and by opening access to the domains required by the Google Cloud APIs: Note: Your on-premises or Google Cloud VMware Engine hosts might also use Private Google Access .
- Migrate your workload from an on-premises VMware source To migrate VMs from an on-premises VMware source, you must configure a migration source that specifies the on-premises data center from which you'll be migrating the VMs.

### "Prepare a VMware source for migration \_|\_ Migrate to Virtual Machines\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source)
- Source ID: `site-docs-root-2`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Supported VMware Versions Migrate to Virtual Machines supports migrations from VMware vCenter and ESXi.
- The following table lists the network connectivity requirements for the connector: Source Destination Firewall scope Protocol Port Migrate Connector vCenter Server Corp LAN HTTPS TCP/443 Migrate Connector vCenter Server Corp LAN VMW NBD TCP/902 Migrate Connector vSphere ESXi Corp LAN VMW NBD TCP/902 Migrate Connector Google Cloud APIs and Artifact Registry ( .googleapis.com, gcr.io) Internet, Cloud VPN , or Cloud Interconnect HTTPS TCP/443 Migrate Connector Corp DNS Server Corp LAN DNS TCP/UDP/53 If you configure the Migrate Connector VM on vSphere or VMware Engine to use a proxy server , traffic sent to Google Cloud APIs is directed over the proxy server.
- Configure network access Enable network access for the Migrate Connector by opening the required ports and by opening access to the domains required by the Google Cloud APIs: Note: Your on-premises or Google Cloud VMware Engine hosts might also use Private Google Access .
- Migrate your workload from an on-premises VMware source To migrate VMs from an on-premises VMware source, you must configure a migration source that specifies the on-premises data center from which you'll be migrating the VMs.

### "Prepare a Google Cloud VMware Engine source for migration \_|\_ Migrate\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table lists the network connectivity requirements for the connector: Source Destination Firewall scope Protocol Port Migrate Connector vCenter Server Corp LAN HTTPS TCP/443 Migrate Connector vCenter Server Corp LAN VMW NBD TCP/902 Migrate Connector vSphere ESXi Corp LAN VMW NBD TCP/902 Migrate Connector Google Cloud APIs and Artifact Registry ( .googleapis.com, gcr.io) Internet, Cloud VPN , or Cloud Interconnect HTTPS TCP/443 Migrate Connector Corp DNS Server Corp LAN DNS TCP/UDP/53 If you configure the Migrate Connector VM on vSphere or VMware Engine to use a proxy server , traffic sent to Google Cloud APIs is directed over the proxy server.
- Migrate your workload from a Google Cloud VMware Engine source To migrate VMs from an VMware Engine source, you must configure a migration source that specifies the VMware Engine data center from which you'll be migrating the VMs.
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Prepare a Google Cloud VMware Engine source for migration Stay organized with collections Save and categorize content based on your preferences.
- Create the VMware Engine user for the Migrate Connector Create a VMware Engine user account with the permissions required by the Migrate Connector to access your VMware Engine environment.

### "Prepare a Google Cloud VMware Engine source for migration \_|\_ Migrate\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source)
- Source ID: `site-docs-root-2`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table lists the network connectivity requirements for the connector: Source Destination Firewall scope Protocol Port Migrate Connector vCenter Server Corp LAN HTTPS TCP/443 Migrate Connector vCenter Server Corp LAN VMW NBD TCP/902 Migrate Connector vSphere ESXi Corp LAN VMW NBD TCP/902 Migrate Connector Google Cloud APIs and Artifact Registry ( .googleapis.com, gcr.io) Internet, Cloud VPN , or Cloud Interconnect HTTPS TCP/443 Migrate Connector Corp DNS Server Corp LAN DNS TCP/UDP/53 If you configure the Migrate Connector VM on vSphere or VMware Engine to use a proxy server , traffic sent to Google Cloud APIs is directed over the proxy server.
- Migrate your workload from a Google Cloud VMware Engine source To migrate VMs from an VMware Engine source, you must configure a migration source that specifies the VMware Engine data center from which you'll be migrating the VMs.
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Prepare a Google Cloud VMware Engine source for migration Stay organized with collections Save and categorize content based on your preferences.
- Create the VMware Engine user for the Migrate Connector Create a VMware Engine user account with the permissions required by the Migrate Connector to access your VMware Engine environment.

