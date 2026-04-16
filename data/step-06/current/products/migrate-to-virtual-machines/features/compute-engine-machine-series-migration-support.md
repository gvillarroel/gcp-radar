---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.990Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "Compute Engine machine series migration support"
feature_slug: "compute-engine-machine-series-migration-support"
latest_feature_date: "2023-12-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
keywords:
  - "compute"
  - "engine"
  - "machine"
  - "series"
  - "migration"
  - "migrates"
  - "vm"
  - "instances"
---

# Compute Engine machine series migration support

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Migrates VM instances to Compute Engine 1st, 2nd, and 3rd generation machine series.

## Extended Definition

Migrates VM instances to Compute Engine 1st, 2nd, and 3rd generation machine series.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)

## Supporting Pages

### "Import machine images \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Role Permissions required Description Cloud VM Migration Service Account roles/vmmigration.serviceAgent Grant this permission to the Compute Engine service account to encrypt data of the machine image created during the import process.
- Role Permissions required Description Cloud VM Migration Service Account roles/vmmigration.serviceAgent Grant this permission to the Compute Engine service account to encrypt data of the machine image created during the import process.
- For more information, see gcloud migration vms machine-image-imports REST API To import a machine image to Compute Engine using the REST API, use the following steps.
- You can't create machine images from source VMs with any of the following: Attached disks greater than 200 TB A4, A3, C3D, H3, or Z3 machine types Machine image import process To import a machine image to Compute Engine machine image using Migrate to Virtual Machines, use the following steps: Prepare a machine image file for import Choose a target project Import a machine image to Compute Engine Prepare a machine file for import To import a machine image to a Compute Engine image, you must first prepare the machine image file for import.

### "Import machine images \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- Source ID: `site-docs-root-2`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Role Permissions required Description Cloud VM Migration Service Account roles/vmmigration.serviceAgent Grant this permission to the Compute Engine service account to encrypt data of the machine image created during the import process.
- Role Permissions required Description Cloud VM Migration Service Account roles/vmmigration.serviceAgent Grant this permission to the Compute Engine service account to encrypt data of the machine image created during the import process.
- For more information, see gcloud migration vms machine-image-imports REST API To import a machine image to Compute Engine using the REST API, use the following steps.
- You can't create machine images from source VMs with any of the following: Attached disks greater than 200 TB A4, A3, C3D, H3, or Z3 machine types Machine image import process To import a machine image to Compute Engine machine image using Migrate to Virtual Machines, use the following steps: Prepare a machine image file for import Choose a target project Import a machine image to Compute Engine Prepare a machine file for import To import a machine image to a Compute Engine image, you must first prepare the machine image file for import.

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes: The replication data for the VM stored on Google Cloud The Compute Engine configuration information The monitoring history All other data associated with migrating a VM The VM from the list of onboarded VMs on the Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.
- When instantiating a Compute Engine instance for either the test-clone or cut-over phase, Migrate to Virtual Machines uses the target details settings at the time of the operation. (Optional) Step 4: Test a clone of a migrating VM In the test-clone phase, Migrate to Virtual Machines deploys a clone of your migrated VM to a Compute Engine instance in your testing environment.
- To manage the running Compute Engine instance, go to the VM instances page in the Google Cloud console for your project: Go to VM instances page From the Google Cloud console manage the Compute Engine instance to: Start, stop, and delete the instance.
- Or, go directly to the VM instances page in the Google Cloud console: Go to VM instances page From the Google Cloud console manage the Compute Engine instance to: Start, stop, and delete the instance.

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root-2`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes: The replication data for the VM stored on Google Cloud The Compute Engine configuration information The monitoring history All other data associated with migrating a VM The VM from the list of onboarded VMs on the Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.
- When instantiating a Compute Engine instance for either the test-clone or cut-over phase, Migrate to Virtual Machines uses the target details settings at the time of the operation. (Optional) Step 4: Test a clone of a migrating VM In the test-clone phase, Migrate to Virtual Machines deploys a clone of your migrated VM to a Compute Engine instance in your testing environment.
- To manage the running Compute Engine instance, go to the VM instances page in the Google Cloud console for your project: Go to VM instances page From the Google Cloud console manage the Compute Engine instance to: Start, stop, and delete the instance.
- Or, go directly to the VM instances page in the Google Cloud console: Go to VM instances page From the Google Cloud console manage the Compute Engine instance to: Start, stop, and delete the instance.

