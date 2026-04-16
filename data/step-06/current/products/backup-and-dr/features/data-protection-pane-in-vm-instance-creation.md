---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.924Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Data protection pane in VM instance creation"
feature_slug: "data-protection-pane-in-vm-instance-creation"
latest_feature_date: "2025-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery"
keywords:
  - "pane"
  - "page"
  - "instance"
  - "creation"
  - "protection"
  - "console"
---

# Data protection pane in VM instance creation

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console instance creation page now includes a Data protection pane to configure backup and replication settings at creation time.

## Extended Definition

The Google Cloud console instance creation page now includes a Data protection pane to configure backup and replication settings at creation time.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)

## Supporting Pages

### "Automate protection of Compute Engine instances \_|\_ Backup and DR \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Your Dynamic Protection Tags can be attached to Compute Engine instances using these instructions: In the Google Cloud console, go to the Compute Engine > VM instances page.
- You can wait for the scheduled dynamic protection job to run at 4:15 AM or 4:15 PM local time for it to take effect, or you can run a dynamic protection job on-demand by following the steps in Run Manual Auto Protection . variable "project id" { description = "The ID of the existing Google Cloud project" type = string } variable "region" { description = "The Google Cloud region where demo-instance should be created" type = string } variable "zone" { description = "The Google Cloud zone where demo-instance should be created" type = string } provider "google" { project = var.project id region = var.region zone = var.zone } data "google project" "project" { project id = var.project id } Reference: https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/tags tag key resource "google tags tag key" "key" { parent = "projects/${var.project id}" short name = "backupdr-dynamicprotect" description = "Tag key for Dynamic Protection." } Reference: https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/tags tag value resource "google tags tag value" "value" { parent = "tagKeys/${google tags tag key.key.name}" short name = "backupdr-gold" # This value should be present in the "Management Console UI" > "Backup Plans" > "Dynamic Protection Tags" description = "Tag value for gold plan." } Reference: https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute instance Ensure not to define tag in "resource manager tags" block while creating VM instance.
- For example, https://bmc-PROJECT NUMBER-GENERATED ID-dot-REGION.backupdr.googleusercontent.com #!/bin/bash export MC ENDPOINT = " MC ENDPOINT edited value " Enable migration. curl -H "Authorization: Bearer $BEARER TOKEN " -H "backupdr-management-session: Actifio $SESSION ID " -H "Content-Type: application/json" -XPATCH -d '{ "enableMigrationToTagBasedProtection":"true"}' " $MC ENDPOINT /actifio/dynamicprotection/jobconfig" Appliance management console To enable migration of manually protected Compute Engine instances to tag-based protection, follow these steps: Toggle Enable migration to tag based protection to ON status Confirm the Enable Migration dialog.
- Create Dynamic Protection Tag values Use these instructions to create Dynamic Protection Tag values that can be used with your Compute Engine instances: In the Backup and DR appliance management console, click the Backup Plans drop-down menu and select Dynamic Protection Tags .

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run an on-demand backup job from the appliance management console To run an on-demand capture of a managed application from the Manage Backup Plan page: Click the App Manager tab and select the Applications option from the drop-down list.
- Job status panel The appliance management console Jobs panel provides information about jobs that have run over the past 24 hours (default).
- View job details From the Job Details window, you can review the following: Details about the job Volume information Number of job retries Job statistics When you are done reviewing job details, click Return to Jobs to return to the Jobs page.
- If the constraints continue to be present until it is time to run the next instance of the same policy, the job is given notrun status, and a new job instance with the same job ID and a letter appended to it is added in the queued state.

### "Protect and recover SAP HANA databases in Compute Engine instances \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- On the Restore page the options are: Restore back to source : All fields are pre-populated with the source value of protected SAP HANA instance and are immutable except application options.
- On the Mount page: Project name , Region , and Zone : Select the project, region, and Zone of the instance to which you want to mount the HANA database image.
- To discover and protect the HANA database applications: Select Add Application from the appliance management console's App Manager > Applications page .
- You will have to use the Google Cloud console to remove this image from the target instance after this operation is finished.

