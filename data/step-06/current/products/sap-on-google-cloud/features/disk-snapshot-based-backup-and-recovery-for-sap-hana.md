---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:12:10.633Z"
product_name: "SAP on Google Cloud"
product_slug: "sap-on-google-cloud"
feature_name: "Disk snapshot-based backup and recovery for SAP HANA"
feature_slug: "disk-snapshot-based-backup-and-recovery-for-sap-hana"
latest_feature_date: "2024-02-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana"
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp"
  - "https://docs.cloud.google.com/sap/docs/agent-for-sap/latest/all-guides"
keywords:
  - "disk"
  - "snapshot"
  - "based"
  - "backup"
  - "recovery"
  - "sap"
  - "hana"
  - "agent"
---

# Disk snapshot-based backup and recovery for SAP HANA

Product: SAP on Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Google Cloud's Agent for SAP version 3.0 can use disk snapshots to perform backup and recovery for SAP HANA systems.

## Extended Definition

Google Cloud's Agent for SAP version 3.0 can use disk snapshots to perform backup and recovery for SAP HANA systems.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana)
- [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)
- [https://docs.cloud.google.com/sap/docs/agent-for-sap/latest/all-guides](https://docs.cloud.google.com/sap/docs/agent-for-sap/latest/all-guides)

## Supporting Pages

### "Reference architecture: SAP Business Suite on SAP HANA on Google Cloud \_\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you're using version 3.0 or later of Google Cloud's Agent for SAP, you can create backups and perform recovery for SAP HANA using the agent's disk snapshot feature.
- The following diagram shows the flow of backups when you use the Backint feature of Google Cloud's Agent for SAP: Back up to disks You can use the native SAP HANA backup and recovery function with Compute Engine Persistent Disk volumes and use a Cloud Storage bucket for longer-term storage of the backups.
- For example, you can take scheduled snapshots of the disk hosting your /hanabackup directory for use in disaster recovery scenarios.
- For more information, see Backup and recovery for SAP HANA by using disk snapshots .

### "Reference architecture: SAP S/4HANA on Google Cloud \_|\_ SAP on Google\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you're using version 3.0 or later of Google Cloud's Agent for SAP, you can create backups and perform recovery for SAP HANA using the agent's disk snapshot feature.
- The following diagram shows the flow of backups when you use the Backint feature of Google Cloud's Agent for SAP: Back up to disks You can use the native SAP HANA backup and recovery function with Compute Engine Persistent Disk volumes and use a Cloud Storage bucket for longer-term storage of the backups.
- For example, you can take scheduled snapshots of the disk hosting your /hanabackup directory for use in disaster recovery scenarios.
- For more information, see Backup and recovery for SAP HANA by using disk snapshots .

### "Google Cloud's Agent for SAP guides \_|\_ SAP on Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/sap/docs/agent-for-sap/latest/all-guides](https://docs.cloud.google.com/sap/docs/agent-for-sap/latest/all-guides)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Backup and recovery for SAP HANA by using disk snapshots Provides conceptual information about performing backup and recovery operations for SAP HANA by using the disk snapshot feature of Google Cloud's Agent for SAP.
- Backup and recovery for SAP HANA by using Backint Provides conceptual information about performing backup and recovery operations for SAP HANA by using the Backint feature of Google Cloud's Agent for SAP.
- Back up and recover SAP HANA by using a disk snapshot Provides information about how to back up and recover SAP HANA by using the disk snapshot feature of Google Cloud's Agent for SAP.
- Back up and recover SAP HANA by using Backint Provides information about how to configure Google Cloud's Agent for SAP to perform backup and recovery operations for SAP HANA.

