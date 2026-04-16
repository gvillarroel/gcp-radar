---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:55.000Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "Test clone"
feature_slug: "test-clone"
latest_feature_date: "2021-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started"
keywords:
  - "test"
  - "clone"
  - "supports"
  - "creating"
  - "of"
  - "migrating"
  - "vm"
  - "in"
---

# Test clone

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Supports creating a test clone of a migrating VM in Google Cloud without disrupting the source VM.

## Extended Definition

Supports creating a test clone of a migrating VM in Google Cloud without disrupting the source VM.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)

## Supporting Pages

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When instantiating a Compute Engine instance for either the test-clone or cut-over phase, Migrate to Virtual Machines uses the target details settings at the time of the operation. (Optional) Step 4: Test a clone of a migrating VM In the test-clone phase, Migrate to Virtual Machines deploys a clone of your migrated VM to a Compute Engine instance in your testing environment.
- Then, as you refine your migration, you create new test-clones because of: Modifications you make to your source VM to support migration Modifications you make to the target details of the migrated VM New replication data from the source VM Any other changes you make over the duration of your testing cycle Remember that a test-clone is a snapshot of the source VM created from the current replication data and target details.
- Set VM target details : Configure settings for the migrated VM, such as the project, instance type, memory, network, and more. (Optional) Test-clone : Create a clone of the source VM from the replication data and test it on Google Cloud.
- Create a test-clone of a VM To create a test-clone of a VM using Migrate to Virtual Machines, follow these steps: Verify that you have configured a testing VM target environment as shown in Configuring VM target .

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root-2`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When instantiating a Compute Engine instance for either the test-clone or cut-over phase, Migrate to Virtual Machines uses the target details settings at the time of the operation. (Optional) Step 4: Test a clone of a migrating VM In the test-clone phase, Migrate to Virtual Machines deploys a clone of your migrated VM to a Compute Engine instance in your testing environment.
- Then, as you refine your migration, you create new test-clones because of: Modifications you make to your source VM to support migration Modifications you make to the target details of the migrated VM New replication data from the source VM Any other changes you make over the duration of your testing cycle Remember that a test-clone is a snapshot of the source VM created from the current replication data and target details.
- Set VM target details : Configure settings for the migrated VM, such as the project, instance type, memory, network, and more. (Optional) Test-clone : Create a clone of the source VM from the replication data and test it on Google Cloud.
- Create a test-clone of a VM To create a test-clone of a VM using Migrate to Virtual Machines, follow these steps: Verify that you have configured a testing VM target environment as shown in Configuring VM target .

### Migrate to Virtual Machines best practices \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)
- Source ID: `site-docs-reference`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you start the replication phase , you verify your VMs by creating test clones in a sandbox environment.
- If there's no VMware host in the network, we recommend one of the following options to migrate your VMs to a source environment that Migrate to Virtual Machines supports: Migrate VMware VMs with VMware HCX to Google Cloud VMware Engine .
- You can repeat the test clones creation process multiple times to evaluate how your VMs work in the cloud as you apply changes to the source environment.
- For example, after analyzing the migration plan, you might determine values for the following: The expected migration duration The expected number of VMs to migrate for each time unit The total migration cost The migration cost per VM The available network throughput The compatibility of the tools you're using for backup and disaster recovery with the target environment Consider all deployment environments for your applications when you analyze the migration plan.

### Migration journey with Migrate to Virtual Machines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)
- Source ID: `site-docs-reference`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you might create test clones of one or two VMs in a large group to evaluate if the clones can function properly on Google Cloud.
- We recommend that you use test clones to validate if your VMs function properly in Google Cloud before migrating them.
- As part of the VM migration lifecycle, Migrate to Virtual Machines lets you run a test clone of a VM in Google Cloud.
- For more information about migrating groups of VMs with Migrate to Virtual Machines, see Migrating VM groups with Migrate to Virtual Machines .

