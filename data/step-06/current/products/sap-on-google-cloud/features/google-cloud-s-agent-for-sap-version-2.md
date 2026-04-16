---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:12:10.627Z"
product_name: "SAP on Google Cloud"
product_slug: "sap-on-google-cloud"
feature_name: "Google Cloud's Agent for SAP version 2"
feature_slug: "google-cloud-s-agent-for-sap-version-2"
latest_feature_date: "2025-09-02"
deprecation_date: "2025-07-31"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/agent-for-sap/2.0/all-guides"
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles"
  - "https://docs.cloud.google.com/sap/docs/agent-for-sap/latest/all-guides"
keywords:
  - "agent"
  - "sap"
  - "version"
  - "has"
  - "reached"
  - "end"
  - "deprecated"
  - "2025"
---

# Google Cloud's Agent for SAP version 2

Product: SAP on Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Version 2 of Google Cloud's Agent for SAP has reached end of support; deprecated on 2025-07-31.

## Extended Definition

Version 2 of Google Cloud's Agent for SAP has reached end of support; deprecated on 2025-07-31.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sap/docs/agent-for-sap/2.0/all-guides](https://docs.cloud.google.com/sap/docs/agent-for-sap/2.0/all-guides)
- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)
- [https://docs.cloud.google.com/sap/docs/agent-for-sap/latest/all-guides](https://docs.cloud.google.com/sap/docs/agent-for-sap/latest/all-guides)

## Supporting Pages

### "Version 2: Google Cloud's Agent for SAP guides \_|\_ SAP on Google Cloud\

- URL: [https://docs.cloud.google.com/sap/docs/agent-for-sap/2.0/all-guides](https://docs.cloud.google.com/sap/docs/agent-for-sap/2.0/all-guides)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Version 2 keyboard arrow down Version 3.12 (latest) Version 2 Warning: Support for version 2 of Google Cloud's Agent for SAP ended on July 31, 2025.
- Home Documentation Compute SAP on Google Cloud Guides Send feedback Version 2: Google Cloud's Agent for SAP guides Stay organized with collections Save and categorize content based on your preferences.
- Installation guides Installation guide for Compute Engine instances Provides instructions for installing version 2 of Google Cloud's Agent for SAP on a Compute Engine VM or bare metal instance.
- Workload Manager evaluation metrics collection Provides conceptual information about using version 2 of Google Cloud's Agent for SAP to collect the Workload Manager evaluation metrics.

### "Google Cloud's Agent for SAP guides \_|\_ SAP on Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/sap/docs/agent-for-sap/latest/all-guides](https://docs.cloud.google.com/sap/docs/agent-for-sap/latest/all-guides)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Version 3.12 (latest) keyboard arrow down Version 3.12 (latest) Version 2 Planning for Google Cloud's Agent for SAP Planning guide Provides an overview of Google Cloud's Agent for SAP.
- Installation guides Install the agent on a compute instance by package manager Provides information about how to install Google Cloud's Agent for SAP on a Compute Engine VM or bare metal instance by using package manager.
- Configure guest OS on bare metal instances Provides information about how to configure the guest OS on Compute Engine bare metal instances for the optimal running of SAP workloads, by using Google Cloud's Agent for SAP.
- Backup and recovery for SAP HANA by using disk snapshots Provides conceptual information about performing backup and recovery operations for SAP HANA by using the disk snapshot feature of Google Cloud's Agent for SAP.

### "HA scale-up cluster configuration guide for SAP HANA on SLES \_|\_ SAP on\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)
- Source ID: `site-docs-reference-required-2`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- From version 2.0, you can configure the agent to collect the SAP HANA monitoring metrics and send them to Cloud Monitoring .
- Note: Cloud Deployment Manager reached end of support on December 31, 2025.
- SLES for SAP 15 SP5 or earlier Cluster Summary: Stack: corosync Current DC: hana-ha-vm-1 (version 2.0.4+20200616.2deceaa3a-3.15.1-2.0.4+20200616.2deceaa3a) - partition with quorum Last updated: Fri Oct 7 21:52:46 2022 Last change: Fri Oct 7 21:51:42 2022 by root via crm attribute on hana-ha-vm-1 2 nodes configured 10 resource instances configured Node List: Online: [ hana-ha-vm-1 hana-ha-vm-2 ] Active Resources: STONITH-hana-ha-vm-1 (stonith:fence gce): Started hana-ha-vm-2 STONITH-hana-ha-vm-2 (stonith:fence gce): Started hana-ha-vm-1 Resource Group: g-primary: rsc vip int-primary (ocf::heartbeat:IPaddr2): Started hana-ha-vm-1 rsc vip hc-primary (ocf::heartbeat:anything): Started hana-ha-vm-1 Clone Set: cln SAPHanaTopology HA1 HDB00 [rsc SAPHanaTopology HA1 HDB00]: Started: [ hana-ha-vm-1 hana-ha-vm-2 ] Clone Set: msl SAPHana HA1 HDB00 [rsc SAPHana HA1 HDB00] (promotable): Masters: [ hana-ha-vm-1 ] Slaves: [ hana-ha-vm-2 ] Resource Group: g-secondary: rsc vip int-secondary (ocf::heartbeat:IPaddr2): Started hana-ha-vm-2 rsc healthcheck-secondary (ocf::heartbeat:anything): Started hana-ha-vm-2 SLES for SAP 15 SP6 or later Cluster Summary: Stack: corosync Current DC: hana-ha-vm-1 (version 2.1.7+20231219.0f7f88312-150600.6.3.1-2.1.7+20231219.0f7f88312) - partition with quorum Last updated: Tue Oct 15 05:46:18 2024 Last change: Tue Oct 15 05:46:18 2024 by root via via crm attribute on hana-ha-vm-1 2 nodes configured 10 resource instances configured Node List: Online: [ hana-ha-vm-1 hana-ha-vm-2 ] Active Resources: STONITH-hana-ha-vm-1 (stonith:fence gce): Started hana-ha-vm-2 STONITH-hana-ha-vm-2 (stonith:fence gce): Started hana-ha-vm-1 Resource Group: g-primary: rsc vip int-primary (ocf::heartbeat:IPaddr2): Started hana-ha-vm-1 rsc vip hc-primary (ocf::heartbeat:anything): Started hana-ha-vm-1 Clone Set: cln SAPHanaTopology HA1 HDB00 [rsc SAPHanaTopology HA1 HDB00]: Started: [ hana-ha-vm-1 hana-ha-vm-2 ] Clone Set: cln SAPHanaFileSystem HA1 HDB00 [rsc SAPHanaFileSystem HA1 HDB00]: Started: [ hana-ha-vm-1 hana-ha-vm-2 ] Clone Set: mst SAPHana HA1 HDB00 [rsc SAPHana HA1 HDB00] (promotable): Masters: [ hana-ha-vm-1 ] Slaves: [ hana-ha-vm-2 ] Resource Group: g-secondary: rsc vip int-secondary (ocf::heartbeat:IPaddr2): Started hana-ha-vm-2 rsc healthcheck-secondary (ocf::heartbeat:anything): Started hana-ha-vm-2 Evaluate your SAP HANA workload To automate continuous validation checks for your SAP HANA high-availability workloads running on Google Cloud, you can use Workload Manager .
- Wait 15 seconds and then on the primary host as root, check the status of the cluster: crm status The following examples shows the status of an active, properly configured cluster: SLES for SAP 15 SP5 or earlier Stack: corosync Current DC: hana-ha-vm-1 (version 2.0.1+20190417.13d370ca9-3.9.1-2.0.1+20190417.13d370ca9) - partition with quorum Last updated: Sun Jun 7 00:36:56 2020 Last change: Sun Jun 7 00:36:53 2020 by root via crm attribute on hana-ha-vm-1 2 nodes configured 8 resources configured Online: [ hana-ha-vm-1 hana-ha-vm-2 ] Full list of resources: STONITH-hana-ha-vm-1 (stonith:fence gce): Started hana-ha-vm-2 STONITH-hana-ha-vm-2 (stonith:fence gce): Started hana-ha-vm-1 Clone Set: cln SAPHanaTopology HA1 HDB22 [rsc SAPHanaTopology HA1 HDB22] Started: [ hana-ha-vm-1 hana-ha-vm-2 ] Resource Group: g-primary rsc vip int-primary (ocf::heartbeat:IPaddr2): Started hana-ha-vm-1 rsc healthcheck-primary (ocf::heartbeat:anything): Started hana-ha-vm-1 Clone Set: msl SAPHana HA1 HDB22 [rsc SAPHana HA1 HDB22] (promotable) Masters: [ hana-ha-vm-1 ] Slaves: [ hana-ha-vm-2 ] SLES for SAP 15 SP6 or later Stack: corosync Current DC: hana-ha-vm-1 (version 2.1.7+20231219.0f7f88312-150600.6.3.1-2.1.7+20231219.0f7f88312) - partition with quorum Last updated: Tue Oct 15 03:26:11 2024 Last change: Tue Oct 15 03:26:08 2024 by root via via crm attribute on hana-ha-vm-1 2 nodes configured 10 resources configured Online: [ hana-ha-vm-1 hana-ha-vm-2 ] Full list of resources: STONITH-hana-ha-vm-1 (stonith:fence gce): Started hana-ha-vm-2 STONITH-hana-ha-vm-2 (stonith:fence gce): Started hana-ha-vm-1 Resource Group: g-primary rsc vip int-primary (ocf::heartbeat:IPaddr2): Started hana-ha-vm-1 rsc healthcheck-primary (ocf::heartbeat:anything): Started hana-ha-vm-1 Clone Set: cln SAPHanaTopology HA1 HDB22 [rsc SAPHanaTopology HA1 HDB22] Started: [ hana-ha-vm-1 hana-ha-vm-2 ] Clone Set: cln SAPHanaFileSystem HA1 HDB22 [rsc SAPHanaFilesystem HA1 HDB22] Started: [ hana-ha-vm-1 hana-ha-vm-2 ] Clone Set: mst SAPHana HA1 HDB22 [rsc SAPHana HA1 HDB22] (promotable) Masters: [ hana-ha-vm-1 ] Slaves: [ hana-ha-vm-2 ] Test failover Test your cluster by simulating a failure on the primary host.

