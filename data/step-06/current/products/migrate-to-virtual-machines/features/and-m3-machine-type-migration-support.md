---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.991Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "and M3 machine type migration support"
feature_slug: "and-m3-machine-type-migration-support"
latest_feature_date: "2023-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks"
keywords:
  - "and"
  - "m3"
  - "machine"
  - "type"
  - "migration"
  - "migrates"
  - "vms"
  - "to"
---

# and M3 machine type migration support

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Migrates VMs to Compute Engine C3, H3, and M3 machine types that support NVMe and gVNIC.

## Extended Definition

Migrates VMs to Compute Engine C3, H3, and M3 machine types that support NVMe and gVNIC.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)

## Supporting Pages

### "Import machine images \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You should see an operation completion response similar to the following sample response. { "done": true, "name": "projects/HOST PROJECT ID/locations/REGION ID/operations/OPERATION ID", "response": { "@type": "type.googleapis.com/google.cloud.vmmigration.v1.ImageImport", "name": "projects/HOST PROJECT ID/locations/us-central1/imageImports/IMPORT NAME", "cloudStorageUri": "SOURCE FILE", "createTime": "2023-10-31T09:04:04.413664947Z", "machineImageTargetDefaults": { "imageName": "IMAGE NAME", "targetProject": "projects/HOST PROJECT ID/locations/global/targetProjects/TARGET PROJECT" }, "recentImageImportJobs": [ { "name": "projects/HOST PROJECT ID/locations/us-central1/imageImports/IMPORT NAME/imageImportJobs/image-import-job", "diskImageTargetDetails": { "imageName": "IMAGE NAME", "targetProject": "projects/HOST PROJECT ID/locations/global/targetProjects/TARGET PROJECT" }, "state": "PENDING" } ] }, "metadata": { "createTime": "2023-10-31T09:04:04.416740716Z", "endTime": "2023-10-31T09:05:36.79987142Z", "target": "projects/HOST PROJECT ID/locations/us-central1/imageImports/IMPORT NAME", "verb": "create", "apiVersion": "v1", "@type": "type.googleapis.com/google.cloud.vmmigration.v1.OperationMetadata" } } Monitor the machine image import job for completion using the following command.
- You should see a response similar to the following sample response. { "name": "projects/HOST PROJECT ID/locations/REGION ID/operations/OPERATION ID", "metadata": { "createTime": "2023-10-31T09:12:26.94928636Z", "target": "projects/HOST PROJECT ID/locations/us-central1/imageImports/IMPORT NAME", "verb": "create", "apiVersion": "v1", "@type": "type.googleapis.com/google.cloud.vmmigration.v1.OperationMetadata" } } Check if the machine image import job is complete by polling the operation using the following command.
- You can't create machine images from source VMs with any of the following: Attached disks greater than 200 TB A4, A3, C3D, H3, or Z3 machine types Machine image import process To import a machine image to Compute Engine machine image using Migrate to Virtual Machines, use the following steps: Prepare a machine image file for import Choose a target project Import a machine image to Compute Engine Prepare a machine file for import To import a machine image to a Compute Engine image, you must first prepare the machine image file for import.
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Import machine images Stay organized with collections Save and categorize content based on your preferences.

### "Import machine images \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- Source ID: `site-docs-root-2`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You should see an operation completion response similar to the following sample response. { "done": true, "name": "projects/HOST PROJECT ID/locations/REGION ID/operations/OPERATION ID", "response": { "@type": "type.googleapis.com/google.cloud.vmmigration.v1.ImageImport", "name": "projects/HOST PROJECT ID/locations/us-central1/imageImports/IMPORT NAME", "cloudStorageUri": "SOURCE FILE", "createTime": "2023-10-31T09:04:04.413664947Z", "machineImageTargetDefaults": { "imageName": "IMAGE NAME", "targetProject": "projects/HOST PROJECT ID/locations/global/targetProjects/TARGET PROJECT" }, "recentImageImportJobs": [ { "name": "projects/HOST PROJECT ID/locations/us-central1/imageImports/IMPORT NAME/imageImportJobs/image-import-job", "diskImageTargetDetails": { "imageName": "IMAGE NAME", "targetProject": "projects/HOST PROJECT ID/locations/global/targetProjects/TARGET PROJECT" }, "state": "PENDING" } ] }, "metadata": { "createTime": "2023-10-31T09:04:04.416740716Z", "endTime": "2023-10-31T09:05:36.79987142Z", "target": "projects/HOST PROJECT ID/locations/us-central1/imageImports/IMPORT NAME", "verb": "create", "apiVersion": "v1", "@type": "type.googleapis.com/google.cloud.vmmigration.v1.OperationMetadata" } } Monitor the machine image import job for completion using the following command.
- You should see a response similar to the following sample response. { "name": "projects/HOST PROJECT ID/locations/REGION ID/operations/OPERATION ID", "metadata": { "createTime": "2023-10-31T09:12:26.94928636Z", "target": "projects/HOST PROJECT ID/locations/us-central1/imageImports/IMPORT NAME", "verb": "create", "apiVersion": "v1", "@type": "type.googleapis.com/google.cloud.vmmigration.v1.OperationMetadata" } } Check if the machine image import job is complete by polling the operation using the following command.
- You can't create machine images from source VMs with any of the following: Attached disks greater than 200 TB A4, A3, C3D, H3, or Z3 machine types Machine image import process To import a machine image to Compute Engine machine image using Migrate to Virtual Machines, use the following steps: Prepare a machine image file for import Choose a target project Import a machine image to Compute Engine Prepare a machine file for import To import a machine image to a Compute Engine image, you must first prepare the machine image file for import.
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Import machine images Stay organized with collections Save and categorize content based on your preferences.

### "Migrate VM disks and attach them to a new VM \_|\_ Migrate to Virtual Machines\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: N/A

Evidence snippets:
- Step 3: Configure the target for a migrated VM disk Migrate to Virtual Machines lets you migrate the disks of a source VM to Persistent Disk volumes on Google Cloud with the following options: Migrate the disks to Persistent Disk volumes Migrate the disks to Persistent Disk volumes and attach them to a new VM instance You must configure the target details such as project, zone, disk type, and more based on the option you choose.
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Migrate VM disks and attach them to a new VM Stay organized with collections Save and categorize content based on your preferences.
- Below the drop-down you see the Source status of the migration source as follows: Active : The source is active and connected to Migrate to Virtual Machines.
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes the following: The replication data for the VM stored on Google Cloud The Persistent Disk configuration information The monitoring history All other data associated with migrating a disk The VM from the list of onboarded VMs on the VM Disk Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.

### "Migrate VM disks and attach them to a new VM \_|\_ Migrate to Virtual Machines\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- Source ID: `site-docs-root-2`
- Final score: 239
- Re-rank relevance: N/A

Evidence snippets:
- Step 3: Configure the target for a migrated VM disk Migrate to Virtual Machines lets you migrate the disks of a source VM to Persistent Disk volumes on Google Cloud with the following options: Migrate the disks to Persistent Disk volumes Migrate the disks to Persistent Disk volumes and attach them to a new VM instance You must configure the target details such as project, zone, disk type, and more based on the option you choose.
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Migrate VM disks and attach them to a new VM Stay organized with collections Save and categorize content based on your preferences.
- Below the drop-down you see the Source status of the migration source as follows: Active : The source is active and connected to Migrate to Virtual Machines.
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes the following: The replication data for the VM stored on Google Cloud The Persistent Disk configuration information The monitoring history All other data associated with migrating a disk The VM from the list of onboarded VMs on the VM Disk Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.

