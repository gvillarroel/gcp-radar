---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.996Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "Agentless vSphere migration"
feature_slug: "agentless-vsphere-migration"
latest_feature_date: "2021-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source"
keywords:
  - "agentless"
  - "vsphere"
  - "migration"
  - "supports"
  - "of"
  - "source"
  - "environments"
  - "using"
---

# Agentless vSphere migration

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Supports agentless migration of vSphere source environments using the Migrate Connector appliance.

## Extended Definition

Supports agentless migration of vSphere source environments using the Migrate Connector appliance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source)

## Supporting Pages

### "Prepare a VMware source for migration \_|\_ Migrate to Virtual Machines\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source)
- Source ID: `site-docs-root-2`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following diagram shows the architecture of a typical Migrate to Virtual Machines deployment: Follow these steps to install and configure a Migrate Connector, and create a VMware source: On vSphere , you must create a vCenter user account with the permissions required by the Migrate Connector to access your vSphere environment.
- In that way, if one region goes down, you can still perform migrations by using a migration source associated with a different region.
- To configure a migration source, you have to install and configure the Migrate Connector on your on-premises vSphere data center.
- Note: Migrate to Virtual Machines supports migration to multiple regions using the same host project.

### "Prepare a VMware source for migration \_|\_ Migrate to Virtual Machines\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- The following diagram shows the architecture of a typical Migrate to Virtual Machines deployment: Follow these steps to install and configure a Migrate Connector, and create a VMware source: On vSphere , you must create a vCenter user account with the permissions required by the Migrate Connector to access your vSphere environment.
- In that way, if one region goes down, you can still perform migrations by using a migration source associated with a different region.
- To configure a migration source, you have to install and configure the Migrate Connector on your on-premises vSphere data center.
- Note: Migrate to Virtual Machines supports migration to multiple regions using the same host project.

### "Prepare a Google Cloud VMware Engine source for migration \_|\_ Migrate\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In that way, if one region goes down, you can still perform migrations by using a migration source associated with a different region.
- Note: Migrate to Virtual Machines supports migration to multiple regions using the same host project.
- The following table lists the network connectivity requirements for the connector: Source Destination Firewall scope Protocol Port Migrate Connector vCenter Server Corp LAN HTTPS TCP/443 Migrate Connector vCenter Server Corp LAN VMW NBD TCP/902 Migrate Connector vSphere ESXi Corp LAN VMW NBD TCP/902 Migrate Connector Google Cloud APIs and Artifact Registry ( .googleapis.com, gcr.io) Internet, Cloud VPN , or Cloud Interconnect HTTPS TCP/443 Migrate Connector Corp DNS Server Corp LAN DNS TCP/UDP/53 If you configure the Migrate Connector VM on vSphere or VMware Engine to use a proxy server , traffic sent to Google Cloud APIs is directed over the proxy server.
- Grant the iam.serviceAccountCreator role to the user account: gcloud projects add-iam-policy-binding PROJECT ID --member=user: USER EMAIL ADDRESS --role=roles/iam.serviceAccountCreator Grant the vmmigration.admin role to the user account: gcloud projects add-iam-policy-binding PROJECT ID --member=user: USER EMAIL ADDRESS --role=roles/vmmigration.admin For more on assigning roles and permissions to a user account, see Granting, changing, and revoking access to resources .

### "Prepare a Google Cloud VMware Engine source for migration \_|\_ Migrate\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-gcve-source)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In that way, if one region goes down, you can still perform migrations by using a migration source associated with a different region.
- Note: Migrate to Virtual Machines supports migration to multiple regions using the same host project.
- The following table lists the network connectivity requirements for the connector: Source Destination Firewall scope Protocol Port Migrate Connector vCenter Server Corp LAN HTTPS TCP/443 Migrate Connector vCenter Server Corp LAN VMW NBD TCP/902 Migrate Connector vSphere ESXi Corp LAN VMW NBD TCP/902 Migrate Connector Google Cloud APIs and Artifact Registry ( .googleapis.com, gcr.io) Internet, Cloud VPN , or Cloud Interconnect HTTPS TCP/443 Migrate Connector Corp DNS Server Corp LAN DNS TCP/UDP/53 If you configure the Migrate Connector VM on vSphere or VMware Engine to use a proxy server , traffic sent to Google Cloud APIs is directed over the proxy server.
- Grant the iam.serviceAccountCreator role to the user account: gcloud projects add-iam-policy-binding PROJECT ID --member=user: USER EMAIL ADDRESS --role=roles/iam.serviceAccountCreator Grant the vmmigration.admin role to the user account: gcloud projects add-iam-policy-binding PROJECT ID --member=user: USER EMAIL ADDRESS --role=roles/vmmigration.admin For more on assigning roles and permissions to a user account, see Granting, changing, and revoking access to resources .

