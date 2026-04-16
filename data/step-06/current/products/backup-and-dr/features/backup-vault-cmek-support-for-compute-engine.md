---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.916Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Backup Vault CMEK support for Compute Engine"
feature_slug: "backup-vault-cmek-support-for-compute-engine"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault"
  - "https://docs.cloud.google.com/compute/docs/compute-optimized-machines"
keywords:
  - "cmek"
  - "protected"
  - "vault"
  - "supports"
  - "compute"
  - "engine"
---

# Backup Vault CMEK support for Compute Engine

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup Vault now supports CMEK-protected Compute Engine instances and Persistent Disks for backup protection.

## Extended Definition

Backup Vault now supports CMEK-protected Compute Engine instances and Persistent Disks for backup protection.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault)
- [https://docs.cloud.google.com/compute/docs/compute-optimized-machines](https://docs.cloud.google.com/compute/docs/compute-optimized-machines)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) \_|\_ Backup and DR \_|\_ Google\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek)
- Source ID: `site-iam-reference`
- Final score: 175
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If constraints/gcp.restrictCmekCryptoKeyProjects is enforced, resources protected by CMEK must use a key from an allowed project or folder: Compute Engine instance backup : If the backup vault is CMEK-encrypted, its key must be from an allowed project or folder.
- The following table summarizes which encryption key is used for backups of different workload types: Workload Encryption Key Used for Backup CMEK Support Status Compute Engine instance Backup vault CMEK key Supported Compute Engine disk Source disk's encryption key Supported Cloud SQL - Not supported AlloyDB cluster - Not supported Filestore instance - Not supported Google Cloud VMware Engine, Oracle database, and SQL Server database - Not supported Limitations Backup and DR support for CMEK has the following limitations: CMEK protection is only supported for Compute Engine instance and Persistent Disk backups stored in backup vaults.
- Backups at rest When you use CMEK organization policies, the following constraints can be enforced when backups are created: If constraints/gcp.restrictNonCmekServices is enforced for backupdr.googleapis.com , new backups cannot be created if they use Google-managed encryption instead of CMEK: Compute Engine instance backup : Backup fails if the target backup vault uses Google-managed encryption.
- Apply the backup plan to resources When you apply a backup plan to a resource, you must ensure that the backup plan targets a backup vault that is compatible with the resource's encryption configuration: If you are backing up a Compute Engine instance that has one or more CMEK-encrypted disks attached, you must use a backup plan that targets a CMEK-enabled backup vault.

### "Backup vault for immutable and indelible backups \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault)
- Source ID: `site-docs-reference`
- Final score: 169
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported backup vault regions Compute Engine instance No All supported locations including multi-region and cross-region Compute Engine disk No All supported locations including multi-region (and cross-region ( Preview )) Cloud SQL instance Yes All supported regions including multi-region AlloyDB cluster Yes Not multi-regions Filestore instance Yes Not multi-regions Google Cloud VMware Engine, Oracle database, and SQL Server database No Not multi-regions If a workload supports use of multi-region backup vaults, the source workload location must be compatible with the multi-region backup vault location.
- What's next Create and manage a backup vault in the Google Cloud console Manage data sources in the Google Cloud console Manage backups in the Google Cloud console Create and manage a backup vault in the Google Cloud console Back up Compute Engine instances to a backup vault Back up Cloud SQL instances to a backup vault Back up AlloyDB clusters to a backup vault Back up Filestore instances to a backup vault Back up disks to a backup vault Manage data sources in the Google Cloud console Manage backups in the Google Cloud console Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Workload Managed by Compute Engine instance Google Cloud console Compute Engine disk Google Cloud console Filestore instance (invitation only) Google Cloud console Cloud SQL instance Google Cloud console AlloyDB cluster Google Cloud console Google Cloud VMware Engine, Oracle database, and SQL Server database appliance management console Note: AlloyDB clusters and Filestore instances in backup vaults are not supported for multi-regions.
- Supported backup vault multi-regions Compute Engine instance Yes asia, eu, us Compute Engine disk Yes asia, eu, us Filestore instance No N/A Cloud SQL instance Yes asia, eu, us AlloyDB cluster No N/A Google Cloud VMware Engine, Oracle database, and SQL Server database No N/A Note: Backup and DR Service does not impose any restriction on the compatible destination locations when restoring a workload from a backup vault backup.

### Compute-optimized machine family for Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/compute-optimized-machines](https://docs.cloud.google.com/compute/docs/compute-optimized-machines)
- Source ID: `site-docs-reference-2`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Machine Workloads H4D machine series HPC workloads and multi-node workloads Manufacturing Weather forecasting Electronic design automation (EDA) Healthcare and life sciences Scientific computing H3 machine series HPC workloads Computational fluid dynamics Crash safety Genomics Financial modeling General scientific and engineering computing C2D machine series Memory-bound workloads Gaming (AAA game servers) High performance computing (HPC) High performance databases Electronic Design Automation (EDA) Media transcoding C2 machine series Compute-bound workloads High-performance web serving Gaming (AAA game servers) Ad serving High performance computing (HPC) Media transcoding AI/ML The following machine series are available in this machine family: H4D instances are powered by Titanium and fifth generation AMD EPYC Turin processors which have a base frequency of 2.7 GHz and a maximum frequency of 4.1 GHz.
- Home Documentation Compute Compute Engine Guides Send feedback Compute-optimized machine family for Compute Engine Stay organized with collections Save and categorize content based on your preferences.
- Maintenance experience for H4D instances During the lifecycle of a Compute Engine instance , the host machine that your instance runs on undergoes multiple host events .
- Maintenance experience for C2D instances During the lifecycle of a Compute Engine instance , the host machine that your instance runs on undergoes multiple host events .

