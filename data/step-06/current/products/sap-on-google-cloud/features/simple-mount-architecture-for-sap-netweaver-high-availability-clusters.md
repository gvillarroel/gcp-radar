---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:12:10.631Z"
product_name: "SAP on Google Cloud"
product_slug: "sap-on-google-cloud"
feature_name: "Simple Mount architecture for SAP NetWeaver high-availability clusters"
feature_slug: "simple-mount-architecture-for-sap-netweaver-high-availability-clusters"
latest_feature_date: "2024-10-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana"
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2"
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp"
keywords:
  - "simple"
  - "mount"
  - "architecture"
  - "sap"
  - "netweaver"
  - "high"
  - "availability"
  - "clusters"
---

# Simple Mount architecture for SAP NetWeaver high-availability clusters

Product: SAP on Google Cloud
Coverage: MEDIUM

## Step 02 Summary

SAP NetWeaver Central Services high-availability clusters can be deployed using the Simple Mount architecture.

## Extended Definition

SAP NetWeaver Central Services high-availability clusters can be deployed using the Simple Mount architecture.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana)
- [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2)
- [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)

## Supporting Pages

### "Reference architecture: SAP Business Suite on SAP HANA on Google Cloud \_\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In both cases, you start by setting up two Compute Engine compute instances in separate zones for maximum redundancy, each with its own SAP HANA database. on SAP HANA The following diagram shows an SAP Business Suite on SAP HANA architecture that uses a Linux cluster to achieve high availability on both the application and the SAP HANA database side: The following diagrams show an SAP HANA database that is highly available during both normal operation and a takeover operation: Normal operation: Takeover operation: To combine both high availability and disaster recovery for the database, you can use SAP HANA System Replication.
- You can update your existing clusters from ENSA1 to ENSA2 by completing the steps described in the following SAP Notes: 2641322 - Installation of ENSA2 and update from ENSA1 to ENSA2 when using the Red Hat HA solutions for SAP 2641019 - Installation of ENSA2 and update from ENSA1 to ENSA2 in SUSE HA environment The following diagram shows an SAP Business Suite system using a Pacemaker cluster to limit the single points of failure from both the Message Server and the Enqueue Server: Details about the deployment of the high availability system and Linux clustering across zones are covered later in this document.
- For a complete list of supported SAP solutions on Google Cloud, see: Certifications for SAP applications on Google Cloud Certifications for SAP HANA on Google Cloud Architecture The following diagrams show a high-level view of three common deployment models for SAP Business Suite on SAP HANA: centralized , distributed , and distributed with high availability .
- For more information, see: SAP HANA high-availability planning guide SAP HANA disaster recovery planning guide High-availability planning guide for SAP NetWeaver on Google Cloud Live migration : Compute Engine offers live migration to keep your VM instances running even when a host system event occurs, such as a software or hardware update.

### "Reference architecture: SAP Business Suite on SAP ASE or IBM Db2 on Google\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Depending on the SAP NetWeaver version you use with your SAP Business Suite system, the Enqueue Server and the Enqueue Replication Server / Enqueue Replicator run on a different version: The following diagram shows an SAP Business Suite system using a Pacemaker cluster to limit the single points of failure from both the Message Server and the Enqueue Server: Details about the deployment of the high availability system and Linux clustering across zones are covered later in this document.
- The following diagram illustrates an architecture for SAP Business Suite on SAP ASE that uses a Linux cluster to achieve high availability on both the application and the database side: The cluster managing high availability includes the following functions and features: Three host compute instances, two hosts each with a database instance and one with Fault Manager.
- For example, the following are some HA and DR tools that you can use: Linux clustering across zones: For more information check the High-availability planning guide for SAP NetWeaver on Google Cloud .
- Distributed deployment with high availability In a distributed deployment with high availability, Linux clusters are set up across zones to help guard against component failures in a given region.

### "Reference architecture: SAP S/4HANA on Google Cloud \_|\_ SAP on Google\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- The following diagram shows an SAP S/4HANA architecture that uses a Linux cluster to achieve high availability on both the application and the SAP HANA database side: The following diagrams show an SAP HANA database that is highly available during both normal operation and a takeover operation: Normal operation: Takeover operation: To combine both high availability and disaster recovery for the database, you can use SAP HANA System Replication.
- For example, the following are some HA and DR tools that you can use: Linux clustering across zones: For more information check the High-availability planning guide for SAP NetWeaver on Google Cloud and SAP HANA high-availability planning guide .
- Distributed deployment with high availability In a distributed deployment with high availability, Linux clusters are set up across zones to help guard against component failures in a given region.
- Architecture The following diagrams show a high-level view of three common deployment models for SAP S/4HANA: centralized , distributed , and distributed with high availability .

