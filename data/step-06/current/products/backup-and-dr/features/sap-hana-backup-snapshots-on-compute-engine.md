---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.937Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "SAP HANA backup snapshots on Compute Engine"
feature_slug: "sap-hana-backup-snapshots-on-compute-engine"
latest_feature_date: "2023-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana"
keywords:
  - "hana"
  - "snapshots"
  - "compute"
  - "engine"
  - "added"
---

# SAP HANA backup snapshots on Compute Engine

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR added support for backing up SAP HANA databases on Compute Engine instances as Compute Engine Persistent Disk snapshots, introduced in private preview.

## Extended Definition

Backup and DR added support for backing up SAP HANA databases on Compute Engine instances as Compute Engine Persistent Disk snapshots, introduced in private preview.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana)

## Supporting Pages

### "Protect and recover SAP HANA databases in Compute Engine instances \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Install the Backup and DR agent on the Compute Engine Create a backup plan for the SAP HANA database Discover and protect SAP HANA databases Mount an SAP HANA backup image as a standard mount Restore SAP HANA databases Install the Backup and DR agent on the host The Backup and DR agent connects the Compute Engine instance to the backup/recovery appliance.
- All SAP HANA servers (Compute Engine) that have HANA data to be protected by Backup and DR Service must have been onboarded to Backup and DR Service All SAP HANA servers (Compute Engine) that have HANA data to be protected by Backup and DR Service must have the Backup and DR agent installed.
- About this quickstart exercise This exercise guides you through the steps of discovering and protecting an SAP HANA database running in a Compute Engine instance, and finally mounting a fully-functional new HANA database from the backup image to a new location.
- To discover HANA databases on a Compute Engine instance and then protect them with Backup and DR Service, the Compute Engine instance hosting the SAP HANA database must be onboarded before you can onboard the SAP HANA database application.

### "Backup and DR Service for Compute Engine for self-managed storage \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- Source ID: `site-api-reference`
- Final score: 147
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: If you create application consistent snapshots of Windows Compute Engine instances then on mount to existing VM or mount as new VM, you need to mark your disk as available for read and write to make them usable.
- Backup and DR requests Compute Engine to create new disks from the snapshots When these disks are created they are attached to the new or existing instance.
- The Backup and DR Compute Engine guide Check for the cloud credentials Discover and protect Compute Engine instances Mount backup images of Compute Engine instances Restore a Compute Engine instance Import Persistent Disk snapshot images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for Compute Engine for self-managed storage Stay organized with collections Save and categorize content based on your preferences.

### Prepare SAP HANA for Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana)
- Source ID: `site-api-reference`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Clean up SAP HANA Backint Backup If SAP HANA Backint is protected already with Compute Engine or any other third party, perform the following cleanup steps on the SAP HANA host before assigning a backup plan: Delete old Backint symbolic files from /usr/sap/(HANA SID)/SYS/global/hdb/opt .
- Advanced Policy Settings specific to HANA databases on Compute Engine Persistent Disks The policy template needs these specific advanced settings.
- Now you must create a backup plan for the HANA database that is running inside the Compute Engine instance.
- Compute Engine stores multiple copies of each snapshot across multiple locations with automatic checksums to ensure the integrity of your data.

