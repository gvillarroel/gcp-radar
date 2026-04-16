---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.999Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "Replication-based migration"
feature_slug: "replication-based-migration"
latest_feature_date: "2021-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks"
keywords:
  - "replication"
  - "based"
  - "migration"
  - "supports"
  - "initiating"
  - "and"
  - "scheduling"
  - "as"
---

# Replication-based migration

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Supports initiating and scheduling replication as part of the VM migration journey.

## Extended Definition

Supports initiating and scheduling replication as part of the VM migration journey.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)

## Supporting Pages

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- Then, as you refine your migration, you create new test-clones because of: Modifications you make to your source VM to support migration Modifications you make to the target details of the migrated VM New replication data from the source VM Any other changes you make over the duration of your testing cycle Remember that a test-clone is a snapshot of the source VM created from the current replication data and target details.
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Migrate individual VMs Stay organized with collections Save and categorize content based on your preferences.
- Licensing Compute Engine supports premium pay as you go (PAYG) licenses and bring your own (BYOL) licenses, based on the operating system of the source VM.
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes: The replication data for the VM stored on Google Cloud The Compute Engine configuration information The monitoring history All other data associated with migrating a VM The VM from the list of onboarded VMs on the Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root-2`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- Then, as you refine your migration, you create new test-clones because of: Modifications you make to your source VM to support migration Modifications you make to the target details of the migrated VM New replication data from the source VM Any other changes you make over the duration of your testing cycle Remember that a test-clone is a snapshot of the source VM created from the current replication data and target details.
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Migrate individual VMs Stay organized with collections Save and categorize content based on your preferences.
- Licensing Compute Engine supports premium pay as you go (PAYG) licenses and bring your own (BYOL) licenses, based on the operating system of the source VM.
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes: The replication data for the VM stored on Google Cloud The Compute Engine configuration information The monitoring history All other data associated with migrating a VM The VM from the list of onboarded VMs on the Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.

### "Migrate VM disks and attach them to a new VM \_|\_ Migrate to Virtual Machines\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Then, as you refine your migration, you create new test-clones because of the following: Modifications you make to your source VM to support migration Modifications you make to the target details New replication data from the source VM Any other changes you make over the duration of your testing cycle Remember that a test-clone is a snapshot of the source VM created from the current replication data and target details.
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Migrate VM disks and attach them to a new VM Stay organized with collections Save and categorize content based on your preferences.
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes the following: The replication data for the VM stored on Google Cloud The Persistent Disk configuration information The monitoring history All other data associated with migrating a disk The VM from the list of onboarded VMs on the VM Disk Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.
- Step 3: Configure the target for a migrated VM disk Migrate to Virtual Machines lets you migrate the disks of a source VM to Persistent Disk volumes on Google Cloud with the following options: Migrate the disks to Persistent Disk volumes Migrate the disks to Persistent Disk volumes and attach them to a new VM instance You must configure the target details such as project, zone, disk type, and more based on the option you choose.

### "Migrate VM disks and attach them to a new VM \_|\_ Migrate to Virtual Machines\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- Source ID: `site-docs-root-2`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Then, as you refine your migration, you create new test-clones because of the following: Modifications you make to your source VM to support migration Modifications you make to the target details New replication data from the source VM Any other changes you make over the duration of your testing cycle Remember that a test-clone is a snapshot of the source VM created from the current replication data and target details.
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Migrate VM disks and attach them to a new VM Stay organized with collections Save and categorize content based on your preferences.
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes the following: The replication data for the VM stored on Google Cloud The Persistent Disk configuration information The monitoring history All other data associated with migrating a disk The VM from the list of onboarded VMs on the VM Disk Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.
- Step 3: Configure the target for a migrated VM disk Migrate to Virtual Machines lets you migrate the disks of a source VM to Persistent Disk volumes on Google Cloud with the following options: Migrate the disks to Persistent Disk volumes Migrate the disks to Persistent Disk volumes and attach them to a new VM instance You must configure the target details such as project, zone, disk type, and more based on the option you choose.

