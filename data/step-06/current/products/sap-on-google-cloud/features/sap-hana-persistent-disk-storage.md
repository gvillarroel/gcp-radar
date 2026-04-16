---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:12:10.646Z"
product_name: "SAP on Google Cloud"
product_slug: "sap-on-google-cloud"
feature_name: "SAP HANA persistent disk storage"
feature_slug: "sap-hana-persistent-disk-storage"
latest_feature_date: "2020-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana"
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp"
  - "https://docs.cloud.google.com/sap/docs/certifications-sap-hana"
keywords:
  - "sap"
  - "hana"
  - "persistent"
  - "disk"
  - "storage"
  - "guidance"
  - "compute"
  - "engine"
---

# SAP HANA persistent disk storage

Product: SAP on Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Guidance for using Compute Engine persistent disks, including balanced persistent disks, with SAP applications and SAP HANA on Google Cloud.

## Extended Definition

Guidance for using Compute Engine persistent disks, including balanced persistent disks, with SAP applications and SAP HANA on Google Cloud.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana)
- [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)
- [https://docs.cloud.google.com/sap/docs/certifications-sap-hana](https://docs.cloud.google.com/sap/docs/certifications-sap-hana)

## Supporting Pages

### "Reference architecture: SAP Business Suite on SAP HANA on Google Cloud \_\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following diagram shows the flow of backups when you use the Backint feature of Google Cloud's Agent for SAP: Back up to disks You can use the native SAP HANA backup and recovery function with Compute Engine Persistent Disk volumes and use a Cloud Storage bucket for longer-term storage of the backups.
- This new feature is available for SAP HANA instances running on Compute Engine instances, on premises servers, or on other cloud platforms so you can back up directly to, and recover from, Cloud Storage without needing persistent disk storage for your backups.
- What's next Learn more about the Google Cloud services used in this guide: VPC networks Compute Engine Storage options : Persistent Disk, Hyperdisk, and Cloud Storage Google Cloud console Cloud Monitoring Identity and Access Management Filestore NetApp Cloud Volumes ONTAP Google Cloud NetApp Volumes Backup and DR Service For more reference architectures, design guides, and best practices, explore the Cloud Architecture Center .
- Cloud Monitoring Provides visibility into the deployment, performance, uptime, and health of Compute Engine, network, and persistent storage disks.

### "Reference architecture: SAP S/4HANA on Google Cloud \_|\_ SAP on Google\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following diagram shows the flow of backups when you use the Backint feature of Google Cloud's Agent for SAP: Back up to disks You can use the native SAP HANA backup and recovery function with Compute Engine Persistent Disk volumes and use a Cloud Storage bucket for longer-term storage of the backups.
- This new feature is available for SAP HANA instances running on Compute Engine instances, on premises servers, or on other cloud platforms so you can back up directly to, and recover from, Cloud Storage without needing persistent disk storage for your backups.
- What's next Learn more about the Google Cloud services used in this guide: VPC networks Compute Engine Storage options : Persistent Disk, Hyperdisk, and Cloud Storage Google Cloud console Cloud Monitoring Identity and Access Management Filestore NetApp Cloud Volumes ONTAP Google Cloud NetApp Volumes Backup and DR Service For more reference architectures, design guides, and best practices, explore the Cloud Architecture Center .
- Cloud Monitoring Provides visibility into the deployment, performance, uptime, and health of Compute Engine, network, and persistent storage disks.

### "Certifications for SAP HANA on Google Cloud \_|\_ SAP on Google Cloud \_\

- URL: [https://docs.cloud.google.com/sap/docs/certifications-sap-hana](https://docs.cloud.google.com/sap/docs/certifications-sap-hana)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Machine types vCPUs Memory Operating system CPU platform Application type Notes N1 high-memory, general-purpose machine types n1-highmem-32 32 208 GB RHEL , SUSE Intel Broadwell OLAP or OLTP Block storage: Compute Engine Persistent Disk or, for scale up only, Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes). n1-highmem-64 64 416 GB RHEL , SUSE Intel Broadwell OLAP or OLTP Block storage: Compute Engine Persistent Disk or, for scale up only, Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes). n1-highmem-96 96 624 GB RHEL , SUSE Intel Skylake OLAP or OLTP Block storage: Compute Engine Persistent Disk or, for scale up only, Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
- For more information about the different types of Persistent Disk and Hyperdisk volumes, their performance characteristics, and how to work with them, see the following documentation: Storage options About Hyperdisk Hyperdisk performance Hyperdisk performance limits Persistent Disk performance Other factors that affect Persistent Disk performance Attach a non-boot disk to a VM Create and manage disk snapshots Migrate SAP HANA Persistent Disk volumes to Hyperdisk volumes Minimum sizes and performance for Persistent Disk and Hyperdisk volumes When you size certain Compute Engine SSD-based Persistent Disk or Hyperdisk volumes for SAP HANA, you need to account for not only the storage requirements of your SAP HANA instance, but also for the performance of the disk.
- Block storage: Compute Engine Persistent Disk, Hyperdisk Extreme, Hyperdisk Balanced, or Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes). m2-ultramem-416 416 11,776 GB RHEL , SUSE Intel Cascade Lake-SP OLAP or OLTP OLAP workloads are certified with workload-based sizing for scale up, and scale out up to 16 nodes.
- Block storage: Compute Engine Persistent Disk, Hyperdisk Extreme, Hyperdisk Balanced, or Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes). m3-ultramem-128 128 3,904 GB RHEL , SUSE Intel Ice Lake OLAP or OLTP OLAP workloads are certified with workload-based sizing for scale-up, and scale-out up to 8 nodes.

