---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.434Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Monitor NFS file storage in Bare Metal Solution via gcloud and API"
feature_slug: "monitor-nfs-file-storage-in-bare-metal-solution-via-gcloud-and-api"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/sap-hana-monitoring-agent-planning-guide"
  - "https://docs.cloud.google.com/sap/docs/sap-hana-monitoring-agent-user-guide"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
keywords:
  - "monitor"
  - "file"
  - "storage"
---

# Monitor NFS file storage in Bare Metal Solution via gcloud and API

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Adds monitoring support for NFS file storage through gcloud and API interfaces.

## Extended Definition

Adds monitoring support for NFS file storage through gcloud and API interfaces.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/sap/docs/sap-hana-monitoring-agent-planning-guide](https://docs.cloud.google.com/sap/docs/sap-hana-monitoring-agent-planning-guide)
- [https://docs.cloud.google.com/sap/docs/sap-hana-monitoring-agent-user-guide](https://docs.cloud.google.com/sap/docs/sap-hana-monitoring-agent-user-guide)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)

## Supporting Pages

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- When the migration job completes, the system removes and unmaps the Backup and DR-presented backup image copy (ASM diskgroup or file system) from the target, and the database runs from your production storage.
- You can use the Oracle online datafile move API to move the data back to the production storage location (ASM disk group or file system) while the database and application are up and running.
- The Control File and the Redo Log file of the database gets placed on the selected local production storage location (ASM diskgroup or file system) on the target.
- You can specify the disk tier to be used, where the Cloud Storage bucket(s) are located, or other information that explains the purpose of this profile.

### "Google Cloud's Agent for SAP planning guide \_|\_ SAP on Google Cloud \_\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-monitoring-agent-planning-guide](https://docs.cloud.google.com/sap/docs/sap-hana-monitoring-agent-planning-guide)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Diagnostic type Execution mode Description Input/output diagnostics On-demand This is done by using the Flexible I/O tester (FIO) tool, which can stress-test the I/O capabilities of storage systems, and also simulate workloads to assess performance of the underlying infrastructure such as disks and network file system.
- Version 3.12 (latest) of Google Cloud's Agent for SAP is the successor of Google Cloud's monitoring agent for SAP NetWeaver version 2, monitoring agent for SAP HANA version 2, and the Cloud Storage Backint agent for SAP HANA.
- For instructions about how to install and configure the agent, validate your installation, and verify that the agent is running as expected, see: Install and configure the agent on a Compute Engine instance Install and configure the agent on a Bare Metal Solution server If you use the following RHEL or SLES "for SAP" OS images that Google Cloud provides, then Google Cloud's Agent for SAP is packaged with the OS images: RHEL: all "for SAP" images SLES: SLES 15 SP4 for SAP and later versions Supported features Version 3.12 (latest) of Google Cloud's Agent for SAP supports the following features: SAP Host Agent metrics collection SAP system discovery Agent health metrics collection Process Monitoring metrics collection Workload Manager evaluation metrics collection SAP HANA monitoring metrics collection Backint based backup and recovery for SAP HANA Disk snapshot based backup and recovery for SAP HANA Workload performance diagnostics SAP Host Agent metrics collection The SAP Host Agent metrics collection is enabled by default for agent instances installed on Compute Engine instances or Bare Metal Solution servers.
- Total monthly ingestion: 1236.419678 MiB 0.0668335 MiB for one metric 18,500 (500 compute instances 37 metrics) Approximate cost per month 500 compute instances: $280.30 (1236.419678 - 150) 0.258 MiB ingested Rate ($/MiB) Cost ($) Free allotment/month 150 0.00 $0.00 Chargeable 1,086.419678 0.258 $280.30 Total 1,236.419678 $280.30 Resources consumed by the agent To help you evaluate the resources that Google Cloud's Agent for SAP consumes for collecting metrics, this section shows sample usages of the agent and the resources that they consumed in Google Cloud's test system with the following specifications: Machine type: n2-highmem-64 Type of persistent storage disk attached to the Compute Engine instance: SSD Persistent Disk ( pd-ssd ) SAP systems running on the compute instance: One instance of SAP HANA and two instances of SAP NetWeaver.

### "Google Cloud's Agent for SAP planning guide \_|\_ SAP on Google Cloud \_\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-monitoring-agent-user-guide](https://docs.cloud.google.com/sap/docs/sap-hana-monitoring-agent-user-guide)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Diagnostic type Execution mode Description Input/output diagnostics On-demand This is done by using the Flexible I/O tester (FIO) tool, which can stress-test the I/O capabilities of storage systems, and also simulate workloads to assess performance of the underlying infrastructure such as disks and network file system.
- Version 3.12 (latest) of Google Cloud's Agent for SAP is the successor of Google Cloud's monitoring agent for SAP NetWeaver version 2, monitoring agent for SAP HANA version 2, and the Cloud Storage Backint agent for SAP HANA.
- For instructions about how to install and configure the agent, validate your installation, and verify that the agent is running as expected, see: Install and configure the agent on a Compute Engine instance Install and configure the agent on a Bare Metal Solution server If you use the following RHEL or SLES "for SAP" OS images that Google Cloud provides, then Google Cloud's Agent for SAP is packaged with the OS images: RHEL: all "for SAP" images SLES: SLES 15 SP4 for SAP and later versions Supported features Version 3.12 (latest) of Google Cloud's Agent for SAP supports the following features: SAP Host Agent metrics collection SAP system discovery Agent health metrics collection Process Monitoring metrics collection Workload Manager evaluation metrics collection SAP HANA monitoring metrics collection Backint based backup and recovery for SAP HANA Disk snapshot based backup and recovery for SAP HANA Workload performance diagnostics SAP Host Agent metrics collection The SAP Host Agent metrics collection is enabled by default for agent instances installed on Compute Engine instances or Bare Metal Solution servers.
- Total monthly ingestion: 1236.419678 MiB 0.0668335 MiB for one metric 18,500 (500 compute instances 37 metrics) Approximate cost per month 500 compute instances: $280.30 (1236.419678 - 150) 0.258 MiB ingested Rate ($/MiB) Cost ($) Free allotment/month 150 0.00 $0.00 Chargeable 1,086.419678 0.258 $280.30 Total 1,236.419678 $280.30 Resources consumed by the agent To help you evaluate the resources that Google Cloud's Agent for SAP consumes for collecting metrics, this section shows sample usages of the agent and the resources that they consumed in Google Cloud's test system with the following specifications: Machine type: n2-highmem-64 Type of persistent storage disk attached to the Compute Engine instance: SSD Persistent Disk ( pd-ssd ) SAP systems running on the compute instance: One instance of SAP HANA and two instances of SAP NetWeaver.

