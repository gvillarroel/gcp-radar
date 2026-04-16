---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.993Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "VM disk migration to Persistent Disk"
feature_slug: "vm-disk-migration-to-persistent-disk"
latest_feature_date: "2023-08-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
keywords:
  - "vm"
  - "disk"
  - "migration"
  - "to"
  - "persistent"
  - "lets"
  - "you"
  - "migrate"
---

# VM disk migration to Persistent Disk

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Lets you migrate VM disks to Persistent Disk volumes on Google Cloud.

## Extended Definition

Lets you migrate VM disks to Persistent Disk volumes on Google Cloud.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)

## Supporting Pages

### "Migrate VM disks and attach them to a new VM \_|\_ Migrate to Virtual Machines\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- Source ID: `site-docs-root`
- Final score: 350
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Step 3: Configure the target for a migrated VM disk Migrate to Virtual Machines lets you migrate the disks of a source VM to Persistent Disk volumes on Google Cloud with the following options: Migrate the disks to Persistent Disk volumes Migrate the disks to Persistent Disk volumes and attach them to a new VM instance You must configure the target details such as project, zone, disk type, and more based on the option you choose.
- Migrate to Virtual Machines lets you migrate disks from source virtual machine (VM) instances to Persistent Disk volumes on Google Cloud, with minimal interruptions to the workload.
- If you have created a new VM instance and attached the migrated Persistent Disk volumes to it, Migrate to Virtual Machines deploys a clone of the VM instance to a Compute Engine instance in your target environment to test it.
- Step 5: Create a cut-over In the cut-over phase, you transfer control to your migrated disk, or the new VM you created with the migrated Persistent Disk volumes attached to it, in your target environment on Google Cloud.

### "Migrate VM disks and attach them to a new VM \_|\_ Migrate to Virtual Machines\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- Source ID: `site-docs-root-2`
- Final score: 350
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Step 3: Configure the target for a migrated VM disk Migrate to Virtual Machines lets you migrate the disks of a source VM to Persistent Disk volumes on Google Cloud with the following options: Migrate the disks to Persistent Disk volumes Migrate the disks to Persistent Disk volumes and attach them to a new VM instance You must configure the target details such as project, zone, disk type, and more based on the option you choose.
- Migrate to Virtual Machines lets you migrate disks from source virtual machine (VM) instances to Persistent Disk volumes on Google Cloud, with minimal interruptions to the workload.
- If you have created a new VM instance and attached the migrated Persistent Disk volumes to it, Migrate to Virtual Machines deploys a clone of the VM instance to a Compute Engine instance in your target environment to test it.
- Step 5: Create a cut-over In the cut-over phase, you transfer control to your migrated disk, or the new VM you created with the migrated Persistent Disk volumes attached to it, in your target environment on Google Cloud.

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Then, as you refine your migration, you create new test-clones because of: Modifications you make to your source VM to support migration Modifications you make to the target details of the migrated VM New replication data from the source VM Any other changes you make over the duration of your testing cycle Remember that a test-clone is a snapshot of the source VM created from the current replication data and target details.
- To switch from VM migration to disk migration, follow these steps: Open the Migrate to Virtual Machines page in the Google Cloud console: Go to the Migrate to Virtual Machines page Select the Migrations tab.
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Migrate individual VMs Stay organized with collections Save and categorize content based on your preferences.
- Note: When migrating VM instances with 16 or more disks to regions that don't support N2 machines, we recommend that you migrate fewer than 200 VMs concurrently to avoid any issues.

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root-2`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Then, as you refine your migration, you create new test-clones because of: Modifications you make to your source VM to support migration Modifications you make to the target details of the migrated VM New replication data from the source VM Any other changes you make over the duration of your testing cycle Remember that a test-clone is a snapshot of the source VM created from the current replication data and target details.
- To switch from VM migration to disk migration, follow these steps: Open the Migrate to Virtual Machines page in the Google Cloud console: Go to the Migrate to Virtual Machines page Select the Migrations tab.
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Migrate individual VMs Stay organized with collections Save and categorize content based on your preferences.
- Note: When migrating VM instances with 16 or more disks to regions that don't support N2 machines, we recommend that you migrate fewer than 200 VMs concurrently to avoid any issues.

