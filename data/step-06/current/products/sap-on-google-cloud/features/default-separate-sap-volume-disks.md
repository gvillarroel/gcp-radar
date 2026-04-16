---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:12:10.638Z"
product_name: "SAP on Google Cloud"
product_slug: "sap-on-google-cloud"
feature_name: "Default separate SAP volume disks"
feature_slug: "default-separate-sap-volume-disks"
latest_feature_date: "2023-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp"
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana"
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles"
keywords:
  - "default"
  - "separate"
  - "sap"
  - "volume"
  - "disks"
  - "terraform"
  - "automation"
  - "hana"
---

# Default separate SAP volume disks

Product: SAP on Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Terraform automation for SAP HANA now mounts SAP volumes on separate SSD-based persistent disks or Hyperdisks by default.

## Extended Definition

Terraform automation for SAP HANA now mounts SAP volumes on separate SSD-based persistent disks or Hyperdisks by default.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)
- [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana)
- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)

## Supporting Pages

### "Reference architecture: SAP S/4HANA on Google Cloud \_|\_ SAP on Google\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following diagram shows the flow of backups when you use the Backint feature of Google Cloud's Agent for SAP: Back up to disks You can use the native SAP HANA backup and recovery function with Compute Engine Persistent Disk volumes and use a Cloud Storage bucket for longer-term storage of the backups.
- SAP Note 2456432 - SAP Applications on Google Cloud: Supported Products and Google Cloud machine types 2446441 - Linux on Google Cloud Platform (IaaS): Adaption of your SAP License 2456953 - Windows on Google Cloud (IaaS): Adaption of your SAP License 1380654 - SAP support in public cloud environments SAP Note 2456406 - SAP on Google Cloud Platform: Support Prerequisites Deployment automation To install SAP S/4HANA on Google Cloud, you can use the following deployment options: To automate the deployment of a distributed or distributed with high availability (HA) system, you can use the Guided Deployment Automation tool in Workload Manager.
- The following diagram shows some details of a three-tier architecture for SAP S/4HANA running on Compute Engine VMs: In this architecture, the SAP S/4HANA system distributes work across multiple NetWeaver Application Servers (AS), each hosted on a separate VM.
- The following diagram shows the flow of the backup feature for SAP HANA: Back up disks using snapshots Another option that you can add to your backup strategy is to take snapshots of entire disks by using the disk snapshot feature of Compute Engine.

### "HA scale-up cluster configuration guide for SAP HANA on SLES \_|\_ SAP on\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)
- Source ID: `site-docs-reference-required-2`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- INFO - Running command: select from dummy DUMMY "X" 1 row selected (overall time 4124 usec; server time 130 usec) INFO - Running command: ALTER SYSTEM ALTER CONFIGURATION ('global.ini', 'SYSTEM') SET ('persistence', 'basepath persistent memory volumes') = '/hana/tmpfs0/TST;/hana/tmpfs1/TST;' 0 rows affected (overall time 3570 usec; server time 2239 usec) INFO - Running command: ALTER SYSTEM ALTER CONFIGURATION ('global.ini', 'SYSTEM') SET ('persistent memory', 'table unload action') = 'retain'; 0 rows affected (overall time 4308 usec; server time 2441 usec) INFO - Running command: ALTER SYSTEM ALTER CONFIGURATION ('indexserver.ini', 'SYSTEM') SET ('persistent memory', 'table default') = 'ON'; 0 rows affected (overall time 3422 usec; server time 2152 usec) Configure SSH keys on the primary and secondary VMs The SAP HANA secure store (SSFS) keys need to be synchronized between the hosts in the HA cluster.
- Separate each tmpfs location with a semicolon: [persistence] basepath datavolumes = /hana/data basepath logvolumes = /hana/log basepath persistent memory volumes = /hana/tmpfs0/ SID ;/hana/tmpfs1/ SID ;/hana/tmpfs2/ SID ;/hana/tmpfs3/ SID The preceding example specifies four memory volumes for four NUMA nodes, which corresponds to the m2-ultramem-208 .
- To fix your deployments to a specific release of the scripts, comment out the type property above and uncomment the type property below. type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/ yyyymmddhhmm /dm-templates/sap hana/sap hana.py properties: instanceName: hana-ha-vm-1 instanceType: n2-highmem-32 zone: us-central1-a subnetwork: example-subnet-us-central1 linuxImage: family/sles-15-sp1-sap linuxImageProject: suse-sap-cloud sap hana deployment bucket: hana2-sp4-rev46 sap hana sid: HA1 sap hana instance number: 22 sap hana sidadm password: Tempa55word sap hana system password: Tempa55word sap hana scaleout nodes: 0 networkTag: cluster-ntwk-tag serviceAccount: limited-roles@example-project-123456.iam.gserviceaccount.com sap hana sidadm uid: 900 sap hana sapsys gid: 79 - name: sap hana secondary type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/latest/dm-templates/sap hana/sap hana.py By default, this configuration file uses the latest release of the deployment scripts for SAP on Google Cloud.
- The properties sap hana sidadm uid and sap hana sapsys gid are included to show their default values, which are used because the properties are commented out. resources: - name: sap hana primary type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/latest/dm-templates/sap hana/sap hana.py By default, this configuration file uses the latest release of the deployment scripts for SAP on Google Cloud.

### "Reference architecture: SAP Business Suite on SAP HANA on Google Cloud \_\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SAP Note 2456432 - SAP Applications on Google Cloud: Supported Products and Google Cloud machine types 2446441 - Linux on Google Cloud Platform (IaaS): Adaption of your SAP License 2456953 - Windows on Google Cloud (IaaS): Adaption of your SAP License 1380654 - SAP support in public cloud environments SAP Note 2456406 - SAP on Google Cloud Platform: Support Prerequisites 1774566 - SAP Business Suite - Restrictions 1825774 - SAP Business Suite Powered by SAP HANA - Multi-Node Support Deployment automation To install SAP Business Suite on SAP HANA on Google Cloud, you can use the following deployment options: To automate the deployment of a centralized deployment or distributed SAP NetWeaver system, you can use the Terraform configurations provided by Google Cloud.
- The following diagram shows the flow of backups when you use the Backint feature of Google Cloud's Agent for SAP: Back up to disks You can use the native SAP HANA backup and recovery function with Compute Engine Persistent Disk volumes and use a Cloud Storage bucket for longer-term storage of the backups.
- In both cases, you start by setting up two Compute Engine compute instances in separate zones for maximum redundancy, each with its own SAP HANA database. on SAP HANA The following diagram shows an SAP Business Suite on SAP HANA architecture that uses a Linux cluster to achieve high availability on both the application and the SAP HANA database side: The following diagrams show an SAP HANA database that is highly available during both normal operation and a takeover operation: Normal operation: Takeover operation: To combine both high availability and disaster recovery for the database, you can use SAP HANA System Replication.
- The following diagram shows the flow of the backup feature for SAP HANA: Back up disks using snapshots Another option that you can add to your backup strategy is to take snapshots of entire disks by using the disk snapshot feature of Compute Engine.

