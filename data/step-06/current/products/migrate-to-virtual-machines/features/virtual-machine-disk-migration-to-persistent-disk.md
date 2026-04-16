---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.989Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "Virtual machine disk migration to Persistent Disk"
feature_slug: "virtual-machine-disk-migration-to-persistent-disk"
latest_feature_date: "2024-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import"
keywords:
  - "virtual"
  - "machine"
  - "disk"
  - "migration"
  - "to"
  - "persistent"
  - "migrates"
  - "vm"
---

# Virtual machine disk migration to Persistent Disk

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Migrates VM disks to Persistent Disk volumes that can be attached during or after the migration process; Migrates VM disks to Persistent Disk volumes that can be attached to a new VM or an existing VM.

## Extended Definition

Migrates VM disks to Persistent Disk volumes that can be attached during or after the migration process; Migrates VM disks to Persistent Disk volumes that can be attached to a new VM or an existing VM.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import)

## Supporting Pages

### "Migrate VM disks and attach them to a new VM \_|\_ Migrate to Virtual Machines\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- Source ID: `site-docs-root`
- Final score: 339
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Step 3: Configure the target for a migrated VM disk Migrate to Virtual Machines lets you migrate the disks of a source VM to Persistent Disk volumes on Google Cloud with the following options: Migrate the disks to Persistent Disk volumes Migrate the disks to Persistent Disk volumes and attach them to a new VM instance You must configure the target details such as project, zone, disk type, and more based on the option you choose.
- Initiate replication of a source VM To initiate replication of a source VM, follow these steps: Open the Migrate to Virtual Machines page in the Google Cloud console: Go to the Migrate to Virtual Machines page Select the VM Disk Migrations tab.
- If you have created a new VM instance and attached the migrated Persistent Disk volumes to it, Migrate to Virtual Machines deploys a clone of the VM instance to a Compute Engine instance in your target environment to test it.
- To switch from disk migration to VM migration, follow these steps: Open the Migrate to Virtual Machines page in the Google Cloud console: Go to the Migrate to Virtual Machines page Select the VM Disk Migrations tab.

### "Migrate VM disks and attach them to a new VM \_|\_ Migrate to Virtual Machines\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- Source ID: `site-docs-root-2`
- Final score: 339
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Step 3: Configure the target for a migrated VM disk Migrate to Virtual Machines lets you migrate the disks of a source VM to Persistent Disk volumes on Google Cloud with the following options: Migrate the disks to Persistent Disk volumes Migrate the disks to Persistent Disk volumes and attach them to a new VM instance You must configure the target details such as project, zone, disk type, and more based on the option you choose.
- Initiate replication of a source VM To initiate replication of a source VM, follow these steps: Open the Migrate to Virtual Machines page in the Google Cloud console: Go to the Migrate to Virtual Machines page Select the VM Disk Migrations tab.
- If you have created a new VM instance and attached the migrated Persistent Disk volumes to it, Migrate to Virtual Machines deploys a clone of the VM instance to a Compute Engine instance in your target environment to test it.
- To switch from disk migration to VM migration, follow these steps: Open the Migrate to Virtual Machines page in the Google Cloud console: Go to the Migrate to Virtual Machines page Select the VM Disk Migrations tab.

### "Import virtual disk images \_|\_ Migrate to Virtual Machines \_|\_ Google\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import)
- Source ID: `site-docs-root`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST https://vmmigration.googleapis.com/v1/projects/ HOST PROJECT ID /locations/ REGION ID /imageImports?imageImportId= IMPORT NAME { "cloudStorageUri": " SOURCE FILE ", "diskImageTargetDefaults": { "imageName": " IMAGE NAME ", "targetProject": "projects/ HOST PROJECT ID /locations/global/targetProjects/ TARGET PROJECT ", ... } } Replace the following: HOST PROJECT ID : the name of the host project from which you want to migrate the virtual disk image.
- Role Permissions required Description Storage Object Viewer roles/storage.objectViewer Grant the default Migrate to Virtual Machines service account in the host project ( service- HOST PROJECT NUMBER @gcp-sa-vmmigration.iam.gserviceaccount.com ) the roles/storage.objectViewer role on the bucket where the image you want to import resides.
- VM Migration Service Account roles/vmmigration.serviceAgent Grant the default Migrate to Virtual Machines service account in the host project ( service- HOST PROJECT NUMBER @gcp-sa-vmmigration.iam.gserviceaccount.com ) the roles/vmmigration.serviceAgent role on the target project.
- For example, if service-1234567890@gcp-sa-vmmigration.iam.gserviceaccount.com is the Migrate to Virtual Machines service account in the host project, you must grant this service account the roles/vmmigration.serviceAgent role to be able to create the image in the target project.

### "Import virtual disk images \_|\_ Migrate to Virtual Machines \_|\_ Google\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import)
- Source ID: `site-docs-root-2`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST https://vmmigration.googleapis.com/v1/projects/ HOST PROJECT ID /locations/ REGION ID /imageImports?imageImportId= IMPORT NAME { "cloudStorageUri": " SOURCE FILE ", "diskImageTargetDefaults": { "imageName": " IMAGE NAME ", "targetProject": "projects/ HOST PROJECT ID /locations/global/targetProjects/ TARGET PROJECT ", ... } } Replace the following: HOST PROJECT ID : the name of the host project from which you want to migrate the virtual disk image.
- Role Permissions required Description Storage Object Viewer roles/storage.objectViewer Grant the default Migrate to Virtual Machines service account in the host project ( service- HOST PROJECT NUMBER @gcp-sa-vmmigration.iam.gserviceaccount.com ) the roles/storage.objectViewer role on the bucket where the image you want to import resides.
- VM Migration Service Account roles/vmmigration.serviceAgent Grant the default Migrate to Virtual Machines service account in the host project ( service- HOST PROJECT NUMBER @gcp-sa-vmmigration.iam.gserviceaccount.com ) the roles/vmmigration.serviceAgent role on the target project.
- For example, if service-1234567890@gcp-sa-vmmigration.iam.gserviceaccount.com is the Migrate to Virtual Machines service account in the host project, you must grant this service account the roles/vmmigration.serviceAgent role to be able to create the image in the target project.

