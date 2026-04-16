---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:12:10.628Z"
product_name: "SAP on Google Cloud"
product_slug: "sap-on-google-cloud"
feature_name: "Terraform NFS support for SAP HANA scale-out high-availability deployments"
feature_slug: "terraform-nfs-support-for-sap-hana-scale-out-high-availability-deployments"
latest_feature_date: "2025-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment"
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles"
  - "https://docs.cloud.google.com/sap/docs/sap-hana-guides"
keywords:
  - "terraform"
  - "nfs"
  - "sap"
  - "hana"
  - "scale"
  - "out"
  - "high"
  - "availability"
---

# Terraform NFS support for SAP HANA scale-out high-availability deployments

Product: SAP on Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Terraform can use existing NFS solutions to share /hana/shared and /hanabackup volumes with worker hosts in SAP HANA scale-out high-availability deployments.

## Extended Definition

Terraform can use existing NFS solutions to share /hana/shared and /hanabackup volumes with worker hosts in SAP HANA scale-out high-availability deployments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment)
- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)
- [https://docs.cloud.google.com/sap/docs/sap-hana-guides](https://docs.cloud.google.com/sap/docs/sap-hana-guides)

## Supporting Pages

### "Deployment Manager: SAP HANA scale-up high-availability cluster configuration\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment)
- Source ID: `site-docs-reference-required-3`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To automate the deployment of an SAP HANA scale-up system in a high-availability cluster on Google Cloud, we recommend that you use Terraform.
- For more information, see Terraform: SAP HANA scale-up high-availability cluster configuration guide .
- Home Documentation Compute SAP on Google Cloud Guides Send feedback Deployment Manager: SAP HANA scale-up high-availability cluster configuration guide Stay organized with collections Save and categorize content based on your preferences.
- Click Create to create your firewall rule. gcloud Create a firewall rule by using the following command: $ gcloud compute firewall-rules create FIREWALL NAME --direction=INGRESS --priority=1000 \ --network= NETWORK NAME --action=ALLOW --rules= PROTOCOL : PORT \ --source-ranges IP RANGE --target-tags= NETWORK TAGS Creating a high-availability Linux cluster with SAP HANA installed The following instructions use the Cloud Deployment Manager to create a RHEL or SLES cluster with two SAP HANA systems: a primary single-host SAP HANA system on one VM instance and a standby SAP HANA system on another VM instance in the same Compute Engine region.

### "HA scale-up cluster configuration guide for SAP HANA on SLES \_|\_ SAP on\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)
- Source ID: `site-docs-reference-required-2`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- To manually configure a high-availability (HA) cluster for an SAP HANA scale-up system on SLES on Google Cloud, we recommend that you instead see HA scale-up cluster configuration guide for SAP HANA on SLES , which uses Terraform.
- Automated SAP HANA System Replication in Scale-Up in pacemaker cluster SAP HANA high-availability planning guide SAP HANA disaster recovery planning guide For more information about VM administration and monitoring, see the SAP HANA Operations Guide Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This guide shows you how to deploy and configure a performance-optimized SUSE Linux Enterprise Server (SLES) high-availability (HA) cluster for an SAP HANA scale-up system on Google Cloud.
- SLES for SAP 15 SP5 or earlier Cluster Summary: Stack: corosync Current DC: hana-ha-vm-1 (version 2.0.4+20200616.2deceaa3a-3.15.1-2.0.4+20200616.2deceaa3a) - partition with quorum Last updated: Fri Oct 7 21:52:46 2022 Last change: Fri Oct 7 21:51:42 2022 by root via crm attribute on hana-ha-vm-1 2 nodes configured 10 resource instances configured Node List: Online: [ hana-ha-vm-1 hana-ha-vm-2 ] Active Resources: STONITH-hana-ha-vm-1 (stonith:fence gce): Started hana-ha-vm-2 STONITH-hana-ha-vm-2 (stonith:fence gce): Started hana-ha-vm-1 Resource Group: g-primary: rsc vip int-primary (ocf::heartbeat:IPaddr2): Started hana-ha-vm-1 rsc vip hc-primary (ocf::heartbeat:anything): Started hana-ha-vm-1 Clone Set: cln SAPHanaTopology HA1 HDB00 [rsc SAPHanaTopology HA1 HDB00]: Started: [ hana-ha-vm-1 hana-ha-vm-2 ] Clone Set: msl SAPHana HA1 HDB00 [rsc SAPHana HA1 HDB00] (promotable): Masters: [ hana-ha-vm-1 ] Slaves: [ hana-ha-vm-2 ] Resource Group: g-secondary: rsc vip int-secondary (ocf::heartbeat:IPaddr2): Started hana-ha-vm-2 rsc healthcheck-secondary (ocf::heartbeat:anything): Started hana-ha-vm-2 SLES for SAP 15 SP6 or later Cluster Summary: Stack: corosync Current DC: hana-ha-vm-1 (version 2.1.7+20231219.0f7f88312-150600.6.3.1-2.1.7+20231219.0f7f88312) - partition with quorum Last updated: Tue Oct 15 05:46:18 2024 Last change: Tue Oct 15 05:46:18 2024 by root via via crm attribute on hana-ha-vm-1 2 nodes configured 10 resource instances configured Node List: Online: [ hana-ha-vm-1 hana-ha-vm-2 ] Active Resources: STONITH-hana-ha-vm-1 (stonith:fence gce): Started hana-ha-vm-2 STONITH-hana-ha-vm-2 (stonith:fence gce): Started hana-ha-vm-1 Resource Group: g-primary: rsc vip int-primary (ocf::heartbeat:IPaddr2): Started hana-ha-vm-1 rsc vip hc-primary (ocf::heartbeat:anything): Started hana-ha-vm-1 Clone Set: cln SAPHanaTopology HA1 HDB00 [rsc SAPHanaTopology HA1 HDB00]: Started: [ hana-ha-vm-1 hana-ha-vm-2 ] Clone Set: cln SAPHanaFileSystem HA1 HDB00 [rsc SAPHanaFileSystem HA1 HDB00]: Started: [ hana-ha-vm-1 hana-ha-vm-2 ] Clone Set: mst SAPHana HA1 HDB00 [rsc SAPHana HA1 HDB00] (promotable): Masters: [ hana-ha-vm-1 ] Slaves: [ hana-ha-vm-2 ] Resource Group: g-secondary: rsc vip int-secondary (ocf::heartbeat:IPaddr2): Started hana-ha-vm-2 rsc healthcheck-secondary (ocf::heartbeat:anything): Started hana-ha-vm-2 Evaluate your SAP HANA workload To automate continuous validation checks for your SAP HANA high-availability workloads running on Google Cloud, you can use Workload Manager .

### All SAP HANA Guides \_|\_ SAP on Google Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-guides](https://docs.cloud.google.com/sap/docs/sap-hana-guides)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deploying an SAP HANA scale-out system in a high-availability cluster Terraform: SAP HANA scale-out high-availability cluster configuration guide Provides instructions for using Terraform to automate the deployment of an SAP HANA scale-out system in a SLES high-availability cluster on Google Cloud.
- Deploying an SAP HANA scale-up system in a high-availability cluster Terraform: SAP HANA scale-up high-availability cluster configuration guide Provides Terraform specific instructions for the automated deployment of an SAP HANA scale-up system in a Linux high-availability cluster on Google Cloud.
- Manual HA scale-up cluster configuration on SLES Provides instructions for manually configuring a SUSE Linux Enterprise Server (SLES) high-availability scale-up cluster for SAP HANA on Google Cloud.
- Manual HA scale-up cluster configuration on RHEL Provides instructions for manually configuring a Red Hat Enterprise Linux (RHEL) high-availability scale-up cluster for SAP HANA on Google Cloud.

