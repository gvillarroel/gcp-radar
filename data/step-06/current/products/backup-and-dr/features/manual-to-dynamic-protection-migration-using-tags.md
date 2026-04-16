---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.932Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Manual-to-dynamic protection migration using tags"
feature_slug: "manual-to-dynamic-protection-migration-using-tags"
latest_feature_date: "2024-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
keywords:
  - "migrating"
  - "migration"
  - "manual"
  - "dynamic"
  - "protection"
  - "tags"
  - "added"
---

# Manual-to-dynamic protection migration using tags

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Added support for migrating manual protection to tag-based dynamic protection across all backup/recovery appliance types.

## Extended Definition

Added support for migrating manual protection to tag-based dynamic protection across all backup/recovery appliance types.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)

## Supporting Pages

### "Automate protection of Compute Engine instances \_|\_ Backup and DR \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Migrate manual protection to Dynamic Protection If you intend to migrate your already protected resources to using dynamic protection using Tags, you must enable the migration flag in your project.
- You can wait for the scheduled dynamic protection job to run at 4:15 AM or 4:15 PM local time for it to take effect, or you can run a dynamic protection job on-demand by following the steps in Run Manual Auto Protection . variable "project id" { description = "The ID of the existing Google Cloud project" type = string } variable "region" { description = "The Google Cloud region where demo-instance should be created" type = string } variable "zone" { description = "The Google Cloud zone where demo-instance should be created" type = string } provider "google" { project = var.project id region = var.region zone = var.zone } data "google project" "project" { project id = var.project id } Reference: https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/tags tag key resource "google tags tag key" "key" { parent = "projects/${var.project id}" short name = "backupdr-dynamicprotect" description = "Tag key for Dynamic Protection." } Reference: https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/tags tag value resource "google tags tag value" "value" { parent = "tagKeys/${google tags tag key.key.name}" short name = "backupdr-gold" # This value should be present in the "Management Console UI" > "Backup Plans" > "Dynamic Protection Tags" description = "Tag value for gold plan." } Reference: https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute instance Ensure not to define tag in "resource manager tags" block while creating VM instance.
- For example, https://bmc-PROJECT NUMBER-GENERATED ID-dot-REGION.backupdr.googleusercontent.com #!/bin/bash export MC ENDPOINT = " MC ENDPOINT edited value " Enable migration. curl -H "Authorization: Bearer $BEARER TOKEN " -H "backupdr-management-session: Actifio $SESSION ID " -H "Content-Type: application/json" -XPATCH -d '{ "enableMigrationToTagBasedProtection":"true"}' " $MC ENDPOINT /actifio/dynamicprotection/jobconfig" Appliance management console To enable migration of manually protected Compute Engine instances to tag-based protection, follow these steps: Toggle Enable migration to tag based protection to ON status Confirm the Enable Migration dialog.
- After you've enabled migration, any manually protected instances can now use dynamic protection.

### "Automate protection of Google Cloud VMware Engine \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The triggered job can take a few minutes depending on the number of changes pending for your workloads. echo "Triggering dynamic protection job.." curl -H "Authorization: Bearer $BEARER TOKEN " -H "backupdr-management-session: Actifio $SESSION ID " -H "Content-Type: application/json" -XPOST -d '{}' " $MC ENDPOINT /actifio/dynamicprotection/job/vmwarevm" echo "Dynamic protection job triggered." Migrate manual protection to dynamic protection If you intend to migrate your already protected resources to use dynamic protection using tags, you must enable the migration flag in your project.
- For example, https://bmc-PROJECT NUMBER-GENERATED ID-dot-REGION.backupdr.googleusercontent.com #!/bin/bash export MC ENDPOINT = " MC ENDPOINT edited value " Enable migration. curl -H "Authorization: Bearer $BEARER TOKEN " -H "backupdr-management-session: Actifio $SESSION ID " -H "Content-Type: application/json" -XPATCH -d '{ "enableMigrationToTagBasedProtection":"true"}' " $MC ENDPOINT /actifio/dynamicprotection/jobconfig" Appliance management console To enable migration of manually protected VMware VMs to tag-based protection, follow these steps: Toggle Enable migration to tag based protection to ON status Confirm the Enable Migration dialog.
- After you've enabled migration, any manually protected VMs can now use dynamic protection.
- IAM roles and permissions To create, update, and delete Dynamic Protection Tags in the appliance management console, you need to have one of the following roles: Backup and DR Admin Backup and DR Backup User Backup and DR User V2 Project Editor Project Owner a custom role that includes the following permissions: Required permissions backupdr.managementServers.listDynamicProtection backupdr.managementServers.getDynamicProtection backupdr.managementServers.createDynamicProtection backupdr.managementServers.deleteDynamicProtection compute.instances.listEffectiveTags Learn more about Backup and DR Service roles .

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- If the constraints continue to be present until it is time to run the next instance of the same policy, the job is given notrun status, and a new job instance with the same job ID and a letter appended to it is added in the queued state.
- For example, you might need to manually perform log replication if the log for a database image did not properly replicate to the backup/recovery appliance or if there is no log for the database image on the backup/recovery appliance.
- When adding multiple new applications or VMs, try to stagger the initial protection jobs for each new application over time, to prevent all of the new data from being ingested simultaneously.
- Note: Manually replicated transaction logs won't be visible on the remote appliance until the Oracle or Microsoft SQL Server database image is replicated to the remote appliance.

