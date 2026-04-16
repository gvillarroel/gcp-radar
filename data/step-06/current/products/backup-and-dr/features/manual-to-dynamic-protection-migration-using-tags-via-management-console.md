---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.930Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Manual-to-dynamic protection migration using tags via management console"
feature_slug: "manual-to-dynamic-protection-migration-using-tags-via-management-console"
latest_feature_date: "2024-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
keywords:
  - "migration"
  - "manual"
  - "dynamic"
  - "protection"
  - "tags"
  - "management"
  - "console"
---

# Manual-to-dynamic protection migration using tags via management console

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Added support for migrating manual protection to dynamic protection using tags through the management console.

## Extended Definition

Added support for migrating manual protection to dynamic protection using tags through the management console.

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
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can wait for the scheduled dynamic protection job to run at 4:15 AM or 4:15 PM local time for it to take effect, or you can run a dynamic protection job on-demand by following the steps in Run Manual Auto Protection . variable "project id" { description = "The ID of the existing Google Cloud project" type = string } variable "region" { description = "The Google Cloud region where demo-instance should be created" type = string } variable "zone" { description = "The Google Cloud zone where demo-instance should be created" type = string } provider "google" { project = var.project id region = var.region zone = var.zone } data "google project" "project" { project id = var.project id } Reference: https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/tags tag key resource "google tags tag key" "key" { parent = "projects/${var.project id}" short name = "backupdr-dynamicprotect" description = "Tag key for Dynamic Protection." } Reference: https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/tags tag value resource "google tags tag value" "value" { parent = "tagKeys/${google tags tag key.key.name}" short name = "backupdr-gold" # This value should be present in the "Management Console UI" > "Backup Plans" > "Dynamic Protection Tags" description = "Tag value for gold plan." } Reference: https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute instance Ensure not to define tag in "resource manager tags" block while creating VM instance.
- For example, https://bmc-PROJECT NUMBER-GENERATED ID-dot-REGION.backupdr.googleusercontent.com #!/bin/bash export MC ENDPOINT = " MC ENDPOINT edited value " Enable migration. curl -H "Authorization: Bearer $BEARER TOKEN " -H "backupdr-management-session: Actifio $SESSION ID " -H "Content-Type: application/json" -XPATCH -d '{ "enableMigrationToTagBasedProtection":"true"}' " $MC ENDPOINT /actifio/dynamicprotection/jobconfig" Appliance management console To enable migration of manually protected Compute Engine instances to tag-based protection, follow these steps: Toggle Enable migration to tag based protection to ON status Confirm the Enable Migration dialog.
- Run Manual Auto Protection Although the protection engine runs daily at 4:15 AM and 4:15 PM local time, you can also make an on-demand run of the Dynamic Protection engine using the following command steps: Set the appliance management console endpoint by entering a value that starts with 'https://bmc-' and ends with '.com'.
- Create Dynamic Protection Tag values Use these instructions to create Dynamic Protection Tag values that can be used with your Compute Engine instances: In the Backup and DR appliance management console, click the Backup Plans drop-down menu and select Dynamic Protection Tags .

### "Automate protection of Google Cloud VMware Engine \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve)
- Source ID: `site-docs-reference`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, https://bmc-PROJECT NUMBER-GENERATED ID-dot-REGION.backupdr.googleusercontent.com #!/bin/bash export MC ENDPOINT = " MC ENDPOINT edited value " Enable migration. curl -H "Authorization: Bearer $BEARER TOKEN " -H "backupdr-management-session: Actifio $SESSION ID " -H "Content-Type: application/json" -XPATCH -d '{ "enableMigrationToTagBasedProtection":"true"}' " $MC ENDPOINT /actifio/dynamicprotection/jobconfig" Appliance management console To enable migration of manually protected VMware VMs to tag-based protection, follow these steps: Toggle Enable migration to tag based protection to ON status Confirm the Enable Migration dialog.
- The triggered job can take a few minutes depending on the number of changes pending for your workloads. echo "Triggering dynamic protection job.." curl -H "Authorization: Bearer $BEARER TOKEN " -H "backupdr-management-session: Actifio $SESSION ID " -H "Content-Type: application/json" -XPOST -d '{}' " $MC ENDPOINT /actifio/dynamicprotection/job/vmwarevm" echo "Dynamic protection job triggered." Migrate manual protection to dynamic protection If you intend to migrate your already protected resources to use dynamic protection using tags, you must enable the migration flag in your project.
- IAM roles and permissions To create, update, and delete Dynamic Protection Tags in the appliance management console, you need to have one of the following roles: Backup and DR Admin Backup and DR Backup User Backup and DR User V2 Project Editor Project Owner a custom role that includes the following permissions: Required permissions backupdr.managementServers.listDynamicProtection backupdr.managementServers.getDynamicProtection backupdr.managementServers.createDynamicProtection backupdr.managementServers.deleteDynamicProtection compute.instances.listEffectiveTags Learn more about Backup and DR Service roles .
- Run manual auto protection Although the protection engine runs daily at 4:15 AM and 4:15 PM local time, you can also make an on-demand run of the Dynamic Protection engine using the following command steps: Set the appliance management console endpoint by entering a value that starts with 'https://bmc-' and ends with '.com'.

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run an on-demand backup job from the appliance management console To run an on-demand capture of a managed application from the Manage Backup Plan page: Click the App Manager tab and select the Applications option from the drop-down list.
- Home Documentation Storage Backup and DR Guides Send feedback Monitor jobs in the appliance management console Stay organized with collections Save and categorize content based on your preferences.
- From the Monitor tab, you can view and manage jobs (cancel active jobs or change the job priority of a queued job) from backup/recovery appliances managed by the appliance management console.
- Timezone By default, in the appliance management console, all time stamps shown in the jobs and events menus are in the user's local timezone as detected by the web browser.

