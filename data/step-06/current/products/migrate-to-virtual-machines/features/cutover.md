---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.997Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "Cutover"
feature_slug: "cutover"
latest_feature_date: "2021-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle"
keywords:
  - "cutover"
  - "supports"
  - "cutting"
  - "over"
  - "migrating"
  - "vm"
  - "to"
  - "with"
---

# Cutover

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Supports cutting over a migrating VM to Google Cloud with minimized downtime.

## Extended Definition

Supports cutting over a migrating VM to Google Cloud with minimized downtime.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle](https://cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle)

## Supporting Pages

### Migrate to Virtual Machines best practices \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)
- Source ID: `site-docs-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, after analyzing the migration plan, you might determine values for the following: The expected migration duration The expected number of VMs to migrate for each time unit The total migration cost The migration cost per VM The available network throughput The compatibility of the tools you're using for backup and disaster recovery with the target environment Consider all deployment environments for your applications when you analyze the migration plan.
- The best practices described in this document cover the following areas: Assessing your source environment Building your foundation Migrating your VMs Troubleshooting migration issues Assessment best practices This section describes best practices to address common issues that might arise during the migration assessment phase .
- If there's no VMware host in the network, we recommend one of the following options to migrate your VMs to a source environment that Migrate to Virtual Machines supports: Migrate VMware VMs with VMware HCX to Google Cloud VMware Engine .
- After you complete the cut-over phase, check the operation of your VMs by involving the owner of each workload, and asking them to assess if there are any issues with such workloads.

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes: The replication data for the VM stored on Google Cloud The Compute Engine configuration information The monitoring history All other data associated with migrating a VM The VM from the list of onboarded VMs on the Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.
- When instantiating a Compute Engine instance for either the test-clone or cut-over phase, Migrate to Virtual Machines uses the target details settings at the time of the operation. (Optional) Step 4: Test a clone of a migrating VM In the test-clone phase, Migrate to Virtual Machines deploys a clone of your migrated VM to a Compute Engine instance in your testing environment.
- Note: When migrating VM instances with 16 or more disks to regions that don't support N2 machines, we recommend that you migrate fewer than 200 VMs concurrently to avoid any issues.
- Note: When migrating VM instances with 16 or more disks to regions that don't support N2 machines, we recommend that you migrate fewer than 200 VMs concurrently to avoid any issues.

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root-2`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes: The replication data for the VM stored on Google Cloud The Compute Engine configuration information The monitoring history All other data associated with migrating a VM The VM from the list of onboarded VMs on the Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.
- When instantiating a Compute Engine instance for either the test-clone or cut-over phase, Migrate to Virtual Machines uses the target details settings at the time of the operation. (Optional) Step 4: Test a clone of a migrating VM In the test-clone phase, Migrate to Virtual Machines deploys a clone of your migrated VM to a Compute Engine instance in your testing environment.
- Note: When migrating VM instances with 16 or more disks to regions that don't support N2 machines, we recommend that you migrate fewer than 200 VMs concurrently to avoid any issues.
- Note: When migrating VM instances with 16 or more disks to regions that don't support N2 machines, we recommend that you migrate fewer than 200 VMs concurrently to avoid any issues.

### "VM migration process \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle](https://cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle)
- Source ID: `site-docs-root-2`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The cut-over results determine your next actions: Cut-over failed : For some reason, cutover to the new VM instance on Compute Engine failed, possibly due to a network issue or other issue.
- Initiating a cut-over on a migrating VM starts the following sequence of actions performed by Migrate to Virtual Machines: Shutdown the source VM.
- Cut-over phase In the cut-over phase, the source VM is stopped by Migrate to Virtual Machines, replication is finalized, and a new VM instance is created on Compute Engine on Google Cloud: You should only perform the cut-over after you have performed all validations during the recommended testing phase.
- However, because the source VM continues to run during the migration process, including during testing, Migrate to Virtual Machines continues to replicate data until you perform the final cut-over to your migrated VM.

