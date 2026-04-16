---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.985Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "Second NIC throttling"
feature_slug: "second-nic-throttling"
latest_feature_date: "2025-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks"
keywords:
  - "second"
  - "nic"
  - "throttling"
  - "starting"
  - "with"
  - "migrate"
  - "connector"
  - "is"
---

# Second NIC throttling

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Starting with Migrate Connector 2.7, throttling is supported for a second network interface.

## Extended Definition

Starting with Migrate Connector 2.7, throttling is supported for a second network interface.

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
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Note: When migrating VM instances with 16 or more disks to regions that don't support N2 machines, we recommend that you migrate fewer than 200 VMs concurrently to avoid any issues.
- Note: When migrating VM instances with 16 or more disks to regions that don't support N2 machines, we recommend that you migrate fewer than 200 VMs concurrently to avoid any issues.
- Add Network Interface Migrate to Virtual Machines lets you optionally create a Compute Engine instance with multiple network interfaces (NICs).
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes: The replication data for the VM stored on Google Cloud The Compute Engine configuration information The monitoring history All other data associated with migrating a VM The VM from the list of onboarded VMs on the Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Note: When migrating VM instances with 16 or more disks to regions that don't support N2 machines, we recommend that you migrate fewer than 200 VMs concurrently to avoid any issues.
- Note: When migrating VM instances with 16 or more disks to regions that don't support N2 machines, we recommend that you migrate fewer than 200 VMs concurrently to avoid any issues.
- Add Network Interface Migrate to Virtual Machines lets you optionally create a Compute Engine instance with multiple network interfaces (NICs).
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes: The replication data for the VM stored on Google Cloud The Compute Engine configuration information The monitoring history All other data associated with migrating a VM The VM from the list of onboarded VMs on the Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.

### "Migrate VM disks and attach them to a new VM \_|\_ Migrate to Virtual Machines\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Step 3: Configure the target for a migrated VM disk Migrate to Virtual Machines lets you migrate the disks of a source VM to Persistent Disk volumes on Google Cloud with the following options: Migrate the disks to Persistent Disk volumes Migrate the disks to Persistent Disk volumes and attach them to a new VM instance You must configure the target details such as project, zone, disk type, and more based on the option you choose.
- Step 5: Create a cut-over In the cut-over phase, you transfer control to your migrated disk, or the new VM you created with the migrated Persistent Disk volumes attached to it, in your target environment on Google Cloud.
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Migrate VM disks and attach them to a new VM Stay organized with collections Save and categorize content based on your preferences.
- Migrate to Virtual Machines lets you migrate disks from source virtual machine (VM) instances to Persistent Disk volumes on Google Cloud, with minimal interruptions to the workload.

### "Migrate VM disks and attach them to a new VM \_|\_ Migrate to Virtual Machines\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Step 3: Configure the target for a migrated VM disk Migrate to Virtual Machines lets you migrate the disks of a source VM to Persistent Disk volumes on Google Cloud with the following options: Migrate the disks to Persistent Disk volumes Migrate the disks to Persistent Disk volumes and attach them to a new VM instance You must configure the target details such as project, zone, disk type, and more based on the option you choose.
- Step 5: Create a cut-over In the cut-over phase, you transfer control to your migrated disk, or the new VM you created with the migrated Persistent Disk volumes attached to it, in your target environment on Google Cloud.
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Migrate VM disks and attach them to a new VM Stay organized with collections Save and categorize content based on your preferences.
- Migrate to Virtual Machines lets you migrate disks from source virtual machine (VM) instances to Persistent Disk volumes on Google Cloud, with minimal interruptions to the workload.

