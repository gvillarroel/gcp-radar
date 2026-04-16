---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.706Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "IP Plan version 2.0"
feature_slug: "ip-plan-version-2-0"
latest_feature_date: "2022-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection"
keywords:
  - "ip"
  - "plan"
  - "version"
  - "changes"
  - "subnet"
  - "allocations"
  - "newly"
  - "created"
---

# IP Plan version 2.0

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

IP Plan version 2.0 changes subnet allocations for newly created private clouds and includes HCX addressing in the management CIDR.

## Extended Definition

IP Plan version 2.0 changes subnet allocations for newly created private clouds and includes HCX addressing in the management CIDR.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection)

## Supporting Pages

### "Manage private cloud resources and activity \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Verify IP address layout version Private clouds created after November 2022 adhere to IP address layout (IP Plan) version 2.0 subnet allocations.
- Almost all private clouds created before November 2022 adhere to IP Plan version 1.0 subnet allocations.
- The list includes the HCX subnets created when the private cloud was created.
- The version number is displayed with IP Plan version .

### "Protect and recover SAP HANA databases in Compute Engine instances \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- Source ID: `site-docs-reference-2`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HANA 2.0 (SPS01 to SPS04): Click the System privilege tab and assign privileges by selecting the following: Backup admin Catalog read Database admin Database start Database stop HANA 2.0 (SPS05 and later): Click the System privilege tab and assign privileges by selecting the following: Backup admin Catalog read Database backup operator Database recovery operator Database admin Database start Database stop Deploy the newly created system user by clicking the green arrow .
- In the Manage section, apply the policy template and the resource profile that you created in Create a backup plan for the SAP HANA databases .
- You created a backup plan for the Compute Engine instance in Get started with Backup and DR: protect and recover a Compute Engine instance .
- Deploy Backup and DR Service first Before you begin, you must read and complete the following procedures: Plan a Backup and DR deployment Prepare to deploy Backup and DR Deploy Backup and DR See how Backup and DR Service works Then see how Backup and DR Service works by going through Get started with Backup and DR: protect and recover a Compute Engine instance .

### "Automate protection of Compute Engine instances \_|\_ Backup and DR \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can wait for the scheduled dynamic protection job to run at 4:15 AM or 4:15 PM local time for it to take effect, or you can run a dynamic protection job on-demand by following the steps in Run Manual Auto Protection . variable "project id" { description = "The ID of the existing Google Cloud project" type = string } variable "region" { description = "The Google Cloud region where demo-instance should be created" type = string } variable "zone" { description = "The Google Cloud zone where demo-instance should be created" type = string } provider "google" { project = var.project id region = var.region zone = var.zone } data "google project" "project" { project id = var.project id } Reference: https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/tags tag key resource "google tags tag key" "key" { parent = "projects/${var.project id}" short name = "backupdr-dynamicprotect" description = "Tag key for Dynamic Protection." } Reference: https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/tags tag value resource "google tags tag value" "value" { parent = "tagKeys/${google tags tag key.key.name}" short name = "backupdr-gold" # This value should be present in the "Management Console UI" > "Backup Plans" > "Dynamic Protection Tags" description = "Tag value for gold plan." } Reference: https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute instance Ensure not to define tag in "resource manager tags" block while creating VM instance.
- A mounted VM on any existing host or newly created host won't carry over the same protection tag as the source VM, so it won't be protected automatically after the mount operation.
- Administer Dynamic Protection Tags To create, update, and delete Dynamic Protection Tags, you need to have the appropriate permissions for your role to be sure you have one of the following roles assigned: Backup and DR Admin Backup and DR Backup User Backup and DR User V2 Project Editor Project Owner a custom role that includes the following permissions: Required permissions backupdr.managementServers.listDynamicProtection backupdr.managementServers.getDynamicProtection backupdr.managementServers.createDynamicProtection backupdr.managementServers.deleteDynamicProtection compute.instances.listEffectiveTags Learn more about Backup and DR Service roles .
- The triggered job can take a few minutes depending on the number of changes pending for your workloads. echo "Triggering dynamic protection job.." curl -H "Authorization: Bearer $BEARER TOKEN " -H "backupdr-management-session: Actifio $SESSION ID " -H "Content-Type: application/json" -XPOST -d '{}' " $MC ENDPOINT /actifio/dynamicprotection/job/gceinstance" echo "Dynamic protection job triggered." Use Dynamic Protection with the Resource Manager You can use dynamic protection tags with Resource Manager , automating protection of your Compute Engine instances at a higher organizational level.

