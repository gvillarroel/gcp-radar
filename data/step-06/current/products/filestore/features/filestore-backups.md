---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.667Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Filestore backups"
feature_slug: "filestore-backups"
latest_feature_date: "2020-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/backups"
  - "https://docs.cloud.google.com/filestore/docs/backups-limitations"
  - "https://docs.cloud.google.com/filestore/docs/backups-before-you-start"
  - "https://docs.cloud.google.com/filestore/docs/backup-data"
keywords:
  - "filestore"
  - "backups"
  - "let"
  - "you"
  - "back"
  - "up"
  - "instances"
---

# Filestore backups

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Filestore backups let you back up Filestore instances.

## Extended Definition

Filestore backups let you back up Filestore instances.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/backups](https://docs.cloud.google.com/filestore/docs/backups)
- [https://docs.cloud.google.com/filestore/docs/backups-limitations](https://docs.cloud.google.com/filestore/docs/backups-limitations)
- [https://docs.cloud.google.com/filestore/docs/backups-before-you-start](https://docs.cloud.google.com/filestore/docs/backups-before-you-start)
- [https://docs.cloud.google.com/filestore/docs/backup-data](https://docs.cloud.google.com/filestore/docs/backup-data)

## Supporting Pages

### About backups \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/backups](https://docs.cloud.google.com/filestore/docs/backups)
- Source ID: `site-docs-root-2`
- Final score: 304
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported tiers The following table shows the Filestore service tiers that support backups, encryption, and related restore operations: Tier Backups support restore to new instance restore to existing instance restore to source instance CMEK support Basic HDD Yes Yes Yes Yes No Basic SSD Yes Yes Yes Yes No Zonal Yes Yes No No Yes Regional Yes Yes No No Yes Enterprise Yes Yes No No Yes Backup options Filestore offers the following backup options: Standard backups: Filestore creates, manages, and stores standard backups in the same project as your Filestore instances..
- The following table shows the differences between standard and enhanced backups: Feature Standard backups Enhanced backups Backup management Filestore Backup and DR Service Tier availability Basic , Zonal, Regional, Enterprise Zonal, Regional, Enterprise Backup scheduling No Yes Backup secured against unauthorized deletion or changes - Immutable and indelible backups through backup vault Automated backup frequency - Hourly, daily, weekly, monthly, yearly On-demand backup retention Retained indefinitely until manually deleted Retained until expired (by a backup rule) or manually deleted Backups protected against source project deletion - ✔ Centralized backup management across resources and projects - ✔ Long-term (>1 year) backup retention - ✔ Backups protected against source instance deletion ✔ ✔ Customer-managed encryption (CMEK) ✔ Planned Multi-regional backups ✔ Planned Cross-region backups ✔ Planned Back up a file share Backed up data include all the file system data and metadata.
- Home Documentation Storage Filestore Guides Send feedback About backups Stay organized with collections Save and categorize content based on your preferences.
- You can use a backup to restore a file share to a new Filestore instance or, for basic tier instances, to the source of an existing file share.

### Backup limitations \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/backups-limitations](https://docs.cloud.google.com/filestore/docs/backups-limitations)
- Source ID: `site-docs-root-2`
- Final score: 296
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Filestore supports concurrent backup delete operations when backups reference separate source instances.
- Home Documentation Storage Filestore Guides Send feedback Backup limitations Stay organized with collections Save and categorize content based on your preferences.
- To migrate your data to another region, you can create a backup of it and use the backup to create a new Filestore instance or restore it to an existing instance.
- When you've already started creating a new backup, you have to wait until the operation completes to delete the most recent existing backup.

### Before you start creating backups \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/backups-before-you-start](https://docs.cloud.google.com/filestore/docs/backups-before-you-start)
- Source ID: `site-docs-root-2`
- Final score: 296
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the APIs Required roles To get the permissions that you need to create an enhanced backup, ask your administrator to grant you the following IAM roles on your project: Create and manage backups with Backup and DR Service: Backup and DR Backup User ( roles/backupdr.backupUser ) Create and manage Filestore instances: Cloud Filestore Editor ( roles/file.editor ) Use Cloud Key Management Service resources for encrypt and decrypt operations only: Cloud Key Management Service CryptoKey Encrypter/Decrypter ( roles/cloudkms.cryptoKeyEncrypterDecrypter ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create an enhanced backup: backupdr.backupPlans.list backupdr.backupPlanAssociations.createForFilestoreInstance backupdr.backupPlanAssociations.list backupdr.backupPlanAssociations.get backupdr.backupPlanAssociations.triggerBackupForFilestoreInstance backupdr.backupPlanAssociations.deleteForFilestoreInstance backupdr.backupPlans.useForFilestoreInstance backupdr.locations.list backupdr.operations.get cloudasset.assets.searchAllResources You might also be able to get these permissions with custom roles or other predefined roles .
- Home Documentation Storage Filestore Guides Send feedback Before you start creating backups Stay organized with collections Save and categorize content based on your preferences.
- Complete the following steps before creating, scheduling, or restoring backups.

### Back up data \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/backup-data](https://docs.cloud.google.com/filestore/docs/backup-data)
- Source ID: `site-docs-root-2`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click the backup name to view the details of the specific backup. gcloud List all backups in your current project To view a list of backups for your current project, run the backups list command: View information about a backup To view information about a backup, run the backups describe command: ` shell gcloud filestore backups describe BACKUP NAME \ -- region = BACKUP LOCATION ``` Where: BACKUP NAME is the name of the backup whose information you want to view.
- The --kms-key flag is optional: gcloud filestore backups create BACKUP NAME \ --instance= INSTANCE NAME \ --file-share= FILE SHARE NAME \ --instance-location= INSTANCE LOCATION \ --region= BACKUP LOCATION \ --kms-key=projects/ KMS PROJECT /locations/ KMS LOCATION /keyRings/ KEYRING /cryptoKeys/ CRYPTO KEY Where: BACKUP NAME is the name you want to give the backup.
- Update gcloud components : gcloud components update Run the following gcloud filestore backups create command in a terminal window on your local machine.
- This page shows you how to back up data for disaster recovery using Filestore backups.

