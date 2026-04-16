---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:12:10.635Z"
product_name: "SAP on Google Cloud"
product_slug: "sap-on-google-cloud"
feature_name: "Persistent Disk Asynchronous Replication"
feature_slug: "persistent-disk-asynchronous-replication"
latest_feature_date: "2023-08-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana"
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp"
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2"
keywords:
  - "persistent"
  - "disk"
  - "asynchronous"
  - "replication"
  - "supports"
  - "cross"
  - "region"
  - "active"
---

# Persistent Disk Asynchronous Replication

Product: SAP on Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Persistent Disk Asynchronous Replication supports cross-region active-passive disaster recovery for SAP HANA and SAP NetWeaver.

## Extended Definition

Persistent Disk Asynchronous Replication supports cross-region active-passive disaster recovery for SAP HANA and SAP NetWeaver.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana)
- [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)
- [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2)

## Supporting Pages

### "Reference architecture: SAP Business Suite on SAP HANA on Google Cloud \_\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Balanced Persistent Disk and SSD Persistent Disk volumes, PD Async Replication provides asynchronous replication of SAP data between two Google Cloud regions.
- This shared file system is hosted on a Persistent Disk volume shared across all nodes or on a supported file sharing solution .
- Global resources, such as pre-configured disk images and disk snapshots, can be accessed across regions and zones.
- Recommended storage options for Linux directory structure on SAP HANA: SAP HANA directory Recommended storage option in Google Cloud /usr/sap Balanced Persistent Disk /hana/data SSD-based Persistent Disk or Hyperdisk /hana/log SSD-based Persistent Disk or Hyperdisk /hana/shared Balanced Persistent Disk /hanabackup Balanced Persistent Disk In distributed deployments, /hana/shared and /hanabackup can also be mounted as a network file system using an NFS solution such as Filestore.

### "Reference architecture: SAP S/4HANA on Google Cloud \_|\_ SAP on Google\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)
- Source ID: `site-docs-reference`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Balanced Persistent Disk and SSD Persistent Disk volumes, PD Async Replication provides asynchronous replication of SAP data between two Google Cloud regions.
- This shared file system is hosted on a Persistent Disk volume shared across all nodes or on a supported file sharing solution .
- Global resources, such as pre-configured disk images and disk snapshots, can be accessed across regions and zones.
- Recommended storage options for Linux directory structure on SAP HANA: SAP HANA directory Recommended storage option in Google Cloud /usr/sap Balanced Persistent Disk /hana/data SSD-based Persistent Disk or Hyperdisk /hana/log SSD-based Persistent Disk or Hyperdisk /hana/shared Balanced Persistent Disk /hanabackup Balanced Persistent Disk In distributed deployments, /hana/shared and /hanabackup can also be mounted as a network file system using an NFS solution such as Filestore.

### "Reference architecture: SAP Business Suite on SAP ASE or IBM Db2 on Google\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Balanced Persistent Disk and SSD Persistent Disk volumes, PD Async Replication provides asynchronous replication of SAP data between two Google Cloud regions.
- This shared file system is hosted on a Persistent Disk volume shared across all nodes or on a supported file sharing solution .
- Global resources, such as pre-configured disk images and disk snapshots, can be accessed across regions and zones.
- Recommended Linux directory structure for SAP Business Suite on IBM Db2 on Google Cloud: IBM Db2 directory structure Recommended storage option in Google Cloud /sapmnt Balanced Persistent Disk /usr/sap Balanced Persistent Disk /db2/ DB SID Balanced Persistent Disk /db2/ DB SID /db2dump Balanced Persistent Disk /db2/ DB SID /sapdata1 SSD-based Persistent Disk or Hyperdisk /db2/ DB SID /log dir SSD-based Persistent Disk or Hyperdisk /db2/ DB SID /saptmp1 Balanced Persistent Disk /db2backup Balanced Persistent Disk For information from SAP about running SAP systems on IBM Db2, see SAP on IBM Db2 for Linux, UNIX, and Windows .

