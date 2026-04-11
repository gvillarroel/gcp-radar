---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.208Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "SAP HANA backup snapshots on Compute Engine"
feature_slug: "sap-hana-backup-snapshots-on-compute-engine"
latest_feature_date: "2023-11-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sap-hana"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine"
keywords:
  - "hana"
  - "snapshots"
  - "sap"
  - "compute"
  - "engine"
  - "on"
  - "backup"
  - "and"
---

# SAP HANA backup snapshots on Compute Engine

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR added support for backing up SAP HANA databases on Compute Engine instances as Compute Engine Persistent Disk snapshots, introduced in private preview.

## Extended Definition

Backup and DR added support for backing up SAP HANA databases on Compute Engine instances as Compute Engine Persistent Disk snapshots, introduced in private preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sap-hana](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sap-hana)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)

## Supporting Pages

### Prepare SAP HANA for Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana)
- Source ID: `site-api-reference`
- Final score: 282
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Clean up SAP HANA Backint Backup If SAP HANA Backint is protected already with Compute Engine or any other third party, perform the following cleanup steps on the SAP HANA host before assigning a backup plan: Delete old Backint symbolic files from /usr/sap/(HANA SID)/SYS/global/hdb/opt .
- You can find additional information in the following pages: Backup and DR for SAP HANA Prepare SAP HANA databases for backup Add an SAP HANA database host, and discover and protect its databases Configure staging disk format and backup method for SAP HANA databases Set application details and settings for SAP HANA databases Back up a discovered HANA database Back up HANA 1+n and HANA scale-out databases Restore and recover SAP HANA databases Mount an SAP HANA backup image as a standard mount Mount an SAP HANA backup image as a virtual database Mount and migrate an SAP HANA backup image for instant recovery to any target Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Procedure Connect to the HANA database system using SSH and log into (sid)adm: su - (sid)adm Change directory: cd exe Create entries in hdbuserstore using command hdbuserstore : ./hdbuserstore SET (key name) (host name):(port) (DB user name) (DB user password) In this example: ` ./hdbuserstore SET ACTBACKUP s4hana:30013 ACTBACKUP (DB user password) Check the keystore: ./hdbuserstore list Set up the log mode and log backup in HANA Studio Using the HANA Studio set the HANA log mode and log backup location for Backup and DR to take backups of HANA DB transaction logs: In SAP HANA HDB studio, make sure log backup is set correctly under DATABASE (SYSTEMDB FOR HANA 2.0) > Backup > Configuration page: Destination type is File .
- If the underlying data volumes for SAP HANA are protected as SAP HANA database backups using LVM snapshot with CBT or file-based backup integrated with backint , and if you are also protecting file systems on the same host, in the file system app, you should set /hana/log & /hana/data in an exclude path.

### Backup and DR Service for SAP HANA \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sap-hana](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sap-hana)
- Source ID: `site-api-reference`
- Final score: 258
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To get started protecting your HANA databases, go through the SAP HANA procedures in Protect and recover an SAP HANA database running in Compute Engine Backup and DR uses Persistent Disk snapshots to incrementally back up data and log volume from your persistent disks with application consistency.
- What's next Go through the SAP HANA quick start exercise in Protect and recover an SAP HANA database running in Compute Engine Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Protecting SAP HANA databases The recommended protection method for SAP HANA databases and logs in Backup and DR is the SAP HANA savepoint API (Persistent Disk snapshots).
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for SAP HANA Stay organized with collections Save and categorize content based on your preferences.

### "Backup and DR Service for Compute Engine for self-managed storage \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- Source ID: `site-api-reference`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Backup and DR Compute Engine guide Check for the cloud credentials Discover and protect Compute Engine instances Mount backup images of Compute Engine instances Restore a Compute Engine instance Import Persistent Disk snapshot images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for Compute Engine for self-managed storage Stay organized with collections Save and categorize content based on your preferences.
- Note: If you create application consistent snapshots of Windows Compute Engine instances then on mount to existing VM or mount as new VM, you need to mark your disk as available for read and write to make them usable.
- Backup and DR requests Compute Engine to create new disks from the snapshots When these disks are created they are attached to the new or existing instance.

