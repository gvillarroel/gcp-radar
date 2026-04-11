---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.184Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Backup Vault workload-level quotas"
feature_slug: "backup-vault-workload-level-quotas"
latest_feature_date: "2025-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr"
keywords:
  - "workload"
  - "quotas"
  - "level"
  - "can"
  - "vaults"
  - "vault"
  - "backup"
  - "now"
---

# Backup Vault workload-level quotas

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup vaults can now enforce quotas at workload level for data sources, backups, backup plans, and backup plan associations.

## Extended Definition

Backup vaults can now enforce quotas at workload level for data sources, backups, backup plans, and backup plan associations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- October 14, 2025 Feature You can now set up backup vault specific workload quotas for critical resources like data sources, backups, backup plans, and backup plan associations.
- You can now create backup vaults in multi-region storage locations.
- Security Command Center can now do the following: Detect Backup Vault deletions Detect Backup Plan deletions Detect deletion of backups stored in a Backup Vault These detectors are available to all Security Command Center Premium and Enterprise customers.
- Important Note: While most settings in a backup plan are now editable, the assigned backup vault cannot be changed.

### "Customer-managed encryption keys (CMEK) \_|\_ Backup and DR \_|\_ Google\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek)
- Source ID: `site-iam-reference`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table summarizes which encryption key is used for backups of different workload types: Workload Encryption Key Used for Backup CMEK Support Status Compute Engine instance Backup vault CMEK key Supported Compute Engine disk Source disk's encryption key Supported Cloud SQL - Not supported AlloyDB cluster - Not supported Filestore instance - Not supported Google Cloud VMware Engine, Oracle database, and SQL Server database - Not supported Limitations Backup and DR support for CMEK has the following limitations: CMEK protection is only supported for Compute Engine instance and Persistent Disk backups stored in backup vaults.
- You can grant this role at the time of backup vault creation using the Google Cloud console if you have permissions to grant IAM roles, or you can grant it ahead of time using the gcloud kms keys add-iam-policy-binding command: gcloud kms keys add-iam-policy-binding KEY NAME \ --location= KMS LOCATION \ --keyring= KEY RING \ --member=serviceAccount:service- VAULT PROJECT NUMBER @gcp-sa-backupdr.iam.gserviceaccount.com \ --role=roles/cloudkms.cryptoKeyEncrypterDecrypter You can grant this role on a specific key as shown in the example, or you can grant it at the key ring or project level.
- If Backup and DR cannot access your CMEK key for any reason (for example, if the key version required for encryption or decryption is disabled or destroyed, or if IAM permissions on the key are revoked from the Backup and DR service agent), you may experience the following: New backups to CMEK-enabled backup vaults will fail if the primary key version is inaccessible.
- Backups at rest When you use CMEK organization policies, the following constraints can be enforced when backups are created: If constraints/gcp.restrictNonCmekServices is enforced for backupdr.googleapis.com , new backups cannot be created if they use Google-managed encryption instead of CMEK: Compute Engine instance backup : Backup fails if the target backup vault uses Google-managed encryption.

### Product overview \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Back up self-managed Oracle and SQL Server databases Self-managed Oracle and SQL Server databases are the following databases running inside a VM or Bare Metal Solution in your project: Oracle databases running on Bare Metal Solution, Compute Engine VMs, or Google Cloud VMware Engine VMs SQL Server databases running on Compute Engine or Google Cloud VMware Engine VMs These self-managed databases can be backed up from the appliance management console into backup vaults or into self-managed storage.
- Back up Compute Engine instances using the appliance management console Compute Engine instances can be backed up using the appliance management console into self-managed storage, and using the Google Cloud console into backup vaults.
- Backups stored in backup vaults are immutable and indelible; they cannot be modified or deleted for the duration of the backup vault's minimum enforced retention period.
- Note: You can also back up Compute Engine instances and disks into backup vaults directly from the Google Cloud console, which is better in most cases.

