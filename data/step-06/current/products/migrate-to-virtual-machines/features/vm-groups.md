---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:55.000Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "VM groups"
feature_slug: "vm-groups"
latest_feature_date: "2021-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/rest"
keywords:
  - "vm"
  - "groups"
  - "supports"
  - "grouping"
  - "migration"
  - "operations"
  - "to"
  - "manage"
---

# VM groups

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Supports grouping migration operations to manage large migration sprints.

## Extended Definition

Supports grouping migration operations to manage large migration sprints.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/rest](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/rest)

## Supporting Pages

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes: The replication data for the VM stored on Google Cloud The Compute Engine configuration information The monitoring history All other data associated with migrating a VM The VM from the list of onboarded VMs on the Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.
- You must update the target details before you clone or cut-over operations on your VM in order for the migration to succeed.
- Then, as you refine your migration, you create new test-clones because of: Modifications you make to your source VM to support migration Modifications you make to the target details of the migrated VM New replication data from the source VM Any other changes you make over the duration of your testing cycle Remember that a test-clone is a snapshot of the source VM created from the current replication data and target details.
- To manage the running Compute Engine instance, go to the VM instances page in the Google Cloud console for your project: Go to VM instances page From the Google Cloud console manage the Compute Engine instance to: Start, stop, and delete the instance.

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root-2`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes: The replication data for the VM stored on Google Cloud The Compute Engine configuration information The monitoring history All other data associated with migrating a VM The VM from the list of onboarded VMs on the Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.
- You must update the target details before you clone or cut-over operations on your VM in order for the migration to succeed.
- Then, as you refine your migration, you create new test-clones because of: Modifications you make to your source VM to support migration Modifications you make to the target details of the migrated VM New replication data from the source VM Any other changes you make over the duration of your testing cycle Remember that a test-clone is a snapshot of the source VM created from the current replication data and target details.
- To manage the running Compute Engine instance, go to the VM instances page in the Google Cloud console for your project: Go to VM instances page From the Google Cloud console manage the Compute Engine instance to: Start, stop, and delete the instance.

### Migration journey with Migrate to Virtual Machines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- When you migrate the VMs in a group, Migrate to Virtual Machines performs all the operations of the VM migration lifecycle on each VM in the group or, optionally, on a subset of the VMs in the group.
- Migrate VMs with Migrate to Virtual Machines To migrate VMs with Migrate to Virtual Machines you do the following: Organize your migration with groups .
- To help mitigate the risks of a migration, we recommend that you use groups to logically separate the VMs to migrate.
- These source environments can include the following: A VMware vSphere environment A Microsoft Azure VM environment An Amazon Elastic Compute Cloud (Amazon EC2) environment Migrate to Virtual Machines lets you streamline your VM migration to Google Cloud.

### VM Migration API \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/rest](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/rest)
- Source ID: `site-iam-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.locations REST Resource: v1.projects.locations.groups REST Resource: v1.projects.locations.imageImports REST Resource: v1.projects.locations.imageImports.imageImportJobs REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.sources REST Resource: v1.projects.locations.sources.datacenterConnectors REST Resource: v1.projects.locations.sources.migratingVms REST Resource: v1.projects.locations.sources.migratingVms.cloneJobs REST Resource: v1.projects.locations.sources.migratingVms.cutoverJobs REST Resource: v1.projects.locations.sources.migratingVms.replicationCycles REST Resource: v1.projects.locations.sources.utilizationReports REST Resource: v1.projects.locations.targetProjects Service: vmmigration.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1.projects.locations.groups Methods addGroupMigration POST /v1/{group=projects/ /locations/ /groups/ }:addGroupMigration Adds a MigratingVm to a Group. create POST /v1/{parent=projects/ /locations/ }/groups Creates a new Group in a given project and location. delete DELETE /v1/{name=projects/ /locations/ /groups/ } Deletes a single Group. get GET /v1/{name=projects/ /locations/ /groups/ } Gets details of a single Group. list GET /v1/{parent=projects/ /locations/ }/groups Lists Groups in a given project and location. patch PATCH /v1/{group.name=projects/ /locations/ /groups/ } Updates the parameters of a single Group. removeGroupMigration POST /v1/{group=projects/ /locations/ /groups/ }:removeGroupMigration Removes a MigratingVm from a Group.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://vmmigration.googleapis.com REST Resource: v1.projects.locations Methods get GET /v1/{name=projects/ /locations/ } Gets information about a location. list GET /v1/{name=projects/ }/locations Lists information about the supported locations for this service.
- Home Documentation Migration Migrate to Virtual Machines Reference Send feedback VM Migration API Stay organized with collections Save and categorize content based on your preferences.

