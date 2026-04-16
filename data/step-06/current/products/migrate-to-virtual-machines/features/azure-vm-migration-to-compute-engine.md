---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.992Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "Azure VM migration to Compute Engine"
feature_slug: "azure-vm-migration-to-compute-engine"
latest_feature_date: "2023-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
keywords:
  - "azure"
  - "vm"
  - "migration"
  - "to"
  - "compute"
  - "engine"
  - "migrates"
  - "instances"
---

# Azure VM migration to Compute Engine

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Migrates VM instances running on Azure to Google Cloud Compute Engine.

## Extended Definition

Migrates VM instances running on Azure to Google Cloud Compute Engine.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)

## Supporting Pages

### "Create an Azure source \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate to Virtual Machines lets you migrate your Azure virtual machines (VMs) from your Azure account to Compute Engine instances.
- Save following JSON template and replace SUBSCRIPTION ID with the Subscription ID you copied in Step 2: { "properties": { "roleName": "Minimum M2VM permissions role", "description": "This role contains the bare minimum of Azure IAM permissions to support M2VM flow", "assignableScopes": [ "/subscriptions/ SUBSCRIPTION ID " ], "permissions": [ { "actions": [ "Microsoft.Resources/subscriptions/resourceGroups/write", "Microsoft.Resources/subscriptions/resourceGroups/read", "Microsoft.Resources/subscriptions/resourceGroups/delete", "Microsoft.Compute/virtualMachines/read", "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/deallocate/action", "Microsoft.Compute/disks/read", "Microsoft.Compute/snapshots/delete", "Microsoft.Compute/snapshots/write", "Microsoft.Compute/snapshots/beginGetAccess/action", "Microsoft.Compute/snapshots/read", "Microsoft.Compute/snapshots/endGetAccess/action" ], "notActions": [], "dataActions": [], "notDataActions": [] } ] } } For more information about the permission details, see permission details .
- Migration limitations from Azure Migrate to Virtual Machines does not support migration of VMs with the following attributes: Ephemeral OS disks Non-managed disks Attempting a migration of a VM with such disks will fail with an appropriate error message.
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Create an Azure source Stay organized with collections Save and categorize content based on your preferences.

### "Create an Azure source \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source)
- Source ID: `site-docs-root-2`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate to Virtual Machines lets you migrate your Azure virtual machines (VMs) from your Azure account to Compute Engine instances.
- Save following JSON template and replace SUBSCRIPTION ID with the Subscription ID you copied in Step 2: { "properties": { "roleName": "Minimum M2VM permissions role", "description": "This role contains the bare minimum of Azure IAM permissions to support M2VM flow", "assignableScopes": [ "/subscriptions/ SUBSCRIPTION ID " ], "permissions": [ { "actions": [ "Microsoft.Resources/subscriptions/resourceGroups/write", "Microsoft.Resources/subscriptions/resourceGroups/read", "Microsoft.Resources/subscriptions/resourceGroups/delete", "Microsoft.Compute/virtualMachines/read", "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/deallocate/action", "Microsoft.Compute/disks/read", "Microsoft.Compute/snapshots/delete", "Microsoft.Compute/snapshots/write", "Microsoft.Compute/snapshots/beginGetAccess/action", "Microsoft.Compute/snapshots/read", "Microsoft.Compute/snapshots/endGetAccess/action" ], "notActions": [], "dataActions": [], "notDataActions": [] } ] } } For more information about the permission details, see permission details .
- Migration limitations from Azure Migrate to Virtual Machines does not support migration of VMs with the following attributes: Ephemeral OS disks Non-managed disks Attempting a migration of a VM with such disks will fail with an appropriate error message.
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Create an Azure source Stay organized with collections Save and categorize content based on your preferences.

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes: The replication data for the VM stored on Google Cloud The Compute Engine configuration information The monitoring history All other data associated with migrating a VM The VM from the list of onboarded VMs on the Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.
- To manage the running Compute Engine instance, go to the VM instances page in the Google Cloud console for your project: Go to VM instances page From the Google Cloud console manage the Compute Engine instance to: Start, stop, and delete the instance.
- Or, go directly to the VM instances page in the Google Cloud console: Go to VM instances page From the Google Cloud console manage the Compute Engine instance to: Start, stop, and delete the instance.
- Step 6: Finalize a migration The replication data used to create a Compute Engine VM is retained after cut-over to allow you to resume replication from the last replication snapshot.

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root-2`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes: The replication data for the VM stored on Google Cloud The Compute Engine configuration information The monitoring history All other data associated with migrating a VM The VM from the list of onboarded VMs on the Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.
- To manage the running Compute Engine instance, go to the VM instances page in the Google Cloud console for your project: Go to VM instances page From the Google Cloud console manage the Compute Engine instance to: Start, stop, and delete the instance.
- Or, go directly to the VM instances page in the Google Cloud console: Go to VM instances page From the Google Cloud console manage the Compute Engine instance to: Start, stop, and delete the instance.
- Step 6: Finalize a migration The replication data used to create a Compute Engine VM is retained after cut-over to allow you to resume replication from the last replication snapshot.

