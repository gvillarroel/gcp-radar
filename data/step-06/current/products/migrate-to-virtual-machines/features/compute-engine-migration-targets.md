---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.997Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "Compute Engine migration targets"
feature_slug: "compute-engine-migration-targets"
latest_feature_date: "2021-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices"
keywords:
  - "compute"
  - "engine"
  - "migration"
  - "targets"
  - "supports"
  - "migrating"
  - "vms"
  - "to"
---

# Compute Engine migration targets

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Supports migrating VMs to Google Cloud target projects with configurable instance, disk, and network settings.

## Extended Definition

Supports migrating VMs to Google Cloud target projects with configurable instance, disk, and network settings.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)

## Supporting Pages

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root`
- Final score: 233
- Re-rank relevance: N/A

Evidence snippets:
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes: The replication data for the VM stored on Google Cloud The Compute Engine configuration information The monitoring history All other data associated with migrating a VM The VM from the list of onboarded VMs on the Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.
- When instantiating a Compute Engine instance for either the test-clone or cut-over phase, Migrate to Virtual Machines uses the target details settings at the time of the operation. (Optional) Step 4: Test a clone of a migrating VM In the test-clone phase, Migrate to Virtual Machines deploys a clone of your migrated VM to a Compute Engine instance in your testing environment.
- For example, you can add additional licenses using this URL format: https://www.googleapis.com/compute/beta/projects/windows-sql-cloud/global/licenses/sql-server-2012-enterprise Sole tenancy Node affinity labels Compute Engine supports the deployment of migrated workloads to sole-tenant nodes .
- Step 6: Finalize a migration The replication data used to create a Compute Engine VM is retained after cut-over to allow you to resume replication from the last replication snapshot.

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root-2`
- Final score: 233
- Re-rank relevance: N/A

Evidence snippets:
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes: The replication data for the VM stored on Google Cloud The Compute Engine configuration information The monitoring history All other data associated with migrating a VM The VM from the list of onboarded VMs on the Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.
- When instantiating a Compute Engine instance for either the test-clone or cut-over phase, Migrate to Virtual Machines uses the target details settings at the time of the operation. (Optional) Step 4: Test a clone of a migrating VM In the test-clone phase, Migrate to Virtual Machines deploys a clone of your migrated VM to a Compute Engine instance in your testing environment.
- For example, you can add additional licenses using this URL format: https://www.googleapis.com/compute/beta/projects/windows-sql-cloud/global/licenses/sql-server-2012-enterprise Sole tenancy Node affinity labels Compute Engine supports the deployment of migrated workloads to sole-tenant nodes .
- Step 6: Finalize a migration The replication data used to create a Compute Engine VM is retained after cut-over to allow you to resume replication from the last replication snapshot.

### Migration journey with Migrate to Virtual Machines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)
- Source ID: `site-docs-reference`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document is useful if you're planning to migrate VMs from a supported source environment to Compute Engine with Migrate to Virtual Machines.
- In this phase, you migrate the VMs from the source environment to Compute Engine.
- These source environments can include the following: A VMware vSphere environment A Microsoft Azure VM environment An Amazon Elastic Compute Cloud (Amazon EC2) environment Migrate to Virtual Machines lets you streamline your VM migration to Google Cloud.
- When you migrate the VMs in a group, Migrate to Virtual Machines performs all the operations of the VM migration lifecycle on each VM in the group or, optionally, on a subset of the VMs in the group.

### Migrate to Virtual Machines best practices \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The best practices described in this document cover the following areas: Assessing your source environment Building your foundation Migrating your VMs Troubleshooting migration issues Assessment best practices This section describes best practices to address common issues that might arise during the migration assessment phase .
- If there's no VMware host in the network, we recommend one of the following options to migrate your VMs to a source environment that Migrate to Virtual Machines supports: Migrate VMware VMs with VMware HCX to Google Cloud VMware Engine .
- Adjust the migration plan while you gain experience After establishing a migration plan, and starting to implement that plan, you gain experience about migrating apps and VMs, Google Cloud, and Migrate to Virtual Machines.
- For example, after analyzing the migration plan, you might determine values for the following: The expected migration duration The expected number of VMs to migrate for each time unit The total migration cost The migration cost per VM The available network throughput The compatibility of the tools you're using for backup and disaster recovery with the target environment Consider all deployment environments for your applications when you analyze the migration plan.

