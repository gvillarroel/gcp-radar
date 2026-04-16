---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.989Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "ARM64 migration support"
feature_slug: "arm64-migration-support"
latest_feature_date: "2024-03-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import"
keywords:
  - "arm64"
  - "migration"
  - "migrates"
  - "arm"
  - "virtual"
  - "machine"
  - "instances"
  - "from"
---

# ARM64 migration support

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Migrates ARM virtual machine instances from AWS and Azure to ARM VM instances on Compute Engine.

## Extended Definition

Migrates ARM virtual machine instances from AWS and Azure to ARM VM instances on Compute Engine.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import)

## Supporting Pages

### "Import machine images \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- You can't create machine images from source VMs with any of the following: Attached disks greater than 200 TB A4, A3, C3D, H3, or Z3 machine types Machine image import process To import a machine image to Compute Engine machine image using Migrate to Virtual Machines, use the following steps: Prepare a machine image file for import Choose a target project Import a machine image to Compute Engine Prepare a machine file for import To import a machine image to a Compute Engine image, you must first prepare the machine image file for import.
- POST https://vmmigration.googleapis.com/v1/projects/ HOST PROJECT ID /locations/ REGION ID /imageImports?imageImportId= IMPORT NAME { "cloudStorageUri": " SOURCE FILE ", "machineImageTargetDefaults": { "imageName": " IMAGE NAME ", "targetProject": "projects/ HOST PROJECT ID /locations/global/targetProjects/ TARGET PROJECT ", ... } } Replace the following: HOST PROJECT ID : the name of the host project from which you want to migrate the machine image.
- Role Permissions required Description Storage Object Viewer roles/storage.objectViewer Grant the default Migrate to Virtual Machines service account in the host project ( service- HOST PROJECT NUMBER @gcp-sa-vmmigration.iam.gserviceaccount.com ) the roles/storage.objectViewer role on the bucket where the image you want to import resides.
- Generalization is a process that removes this information so that you can create multiple instances from the same machine image. machineImageTargetDefaults.encryption The Google-owned and Google-managed encryption key that you want to use to encrypt your data during the import process.

### "Import machine images \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- You can't create machine images from source VMs with any of the following: Attached disks greater than 200 TB A4, A3, C3D, H3, or Z3 machine types Machine image import process To import a machine image to Compute Engine machine image using Migrate to Virtual Machines, use the following steps: Prepare a machine image file for import Choose a target project Import a machine image to Compute Engine Prepare a machine file for import To import a machine image to a Compute Engine image, you must first prepare the machine image file for import.
- POST https://vmmigration.googleapis.com/v1/projects/ HOST PROJECT ID /locations/ REGION ID /imageImports?imageImportId= IMPORT NAME { "cloudStorageUri": " SOURCE FILE ", "machineImageTargetDefaults": { "imageName": " IMAGE NAME ", "targetProject": "projects/ HOST PROJECT ID /locations/global/targetProjects/ TARGET PROJECT ", ... } } Replace the following: HOST PROJECT ID : the name of the host project from which you want to migrate the machine image.
- Role Permissions required Description Storage Object Viewer roles/storage.objectViewer Grant the default Migrate to Virtual Machines service account in the host project ( service- HOST PROJECT NUMBER @gcp-sa-vmmigration.iam.gserviceaccount.com ) the roles/storage.objectViewer role on the bucket where the image you want to import resides.
- Generalization is a process that removes this information so that you can create multiple instances from the same machine image. machineImageTargetDefaults.encryption The Google-owned and Google-managed encryption key that you want to use to encrypt your data during the import process.

### "Import virtual disk images \_|\_ Migrate to Virtual Machines \_|\_ Google\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- POST https://vmmigration.googleapis.com/v1/projects/ HOST PROJECT ID /locations/ REGION ID /imageImports?imageImportId= IMPORT NAME { "cloudStorageUri": " SOURCE FILE ", "diskImageTargetDefaults": { "imageName": " IMAGE NAME ", "targetProject": "projects/ HOST PROJECT ID /locations/global/targetProjects/ TARGET PROJECT ", ... } } Replace the following: HOST PROJECT ID : the name of the host project from which you want to migrate the virtual disk image.
- Role Permissions required Description Storage Object Viewer roles/storage.objectViewer Grant the default Migrate to Virtual Machines service account in the host project ( service- HOST PROJECT NUMBER @gcp-sa-vmmigration.iam.gserviceaccount.com ) the roles/storage.objectViewer role on the bucket where the image you want to import resides.
- VM Migration Service Account roles/vmmigration.serviceAgent Grant the default Migrate to Virtual Machines service account in the host project ( service- HOST PROJECT NUMBER @gcp-sa-vmmigration.iam.gserviceaccount.com ) the roles/vmmigration.serviceAgent role on the target project.
- For example, if service-1234567890@gcp-sa-vmmigration.iam.gserviceaccount.com is the Migrate to Virtual Machines service account in the host project, you must grant this service account the roles/vmmigration.serviceAgent role to be able to create the image in the target project.

### "Import virtual disk images \_|\_ Migrate to Virtual Machines \_|\_ Google\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- POST https://vmmigration.googleapis.com/v1/projects/ HOST PROJECT ID /locations/ REGION ID /imageImports?imageImportId= IMPORT NAME { "cloudStorageUri": " SOURCE FILE ", "diskImageTargetDefaults": { "imageName": " IMAGE NAME ", "targetProject": "projects/ HOST PROJECT ID /locations/global/targetProjects/ TARGET PROJECT ", ... } } Replace the following: HOST PROJECT ID : the name of the host project from which you want to migrate the virtual disk image.
- Role Permissions required Description Storage Object Viewer roles/storage.objectViewer Grant the default Migrate to Virtual Machines service account in the host project ( service- HOST PROJECT NUMBER @gcp-sa-vmmigration.iam.gserviceaccount.com ) the roles/storage.objectViewer role on the bucket where the image you want to import resides.
- VM Migration Service Account roles/vmmigration.serviceAgent Grant the default Migrate to Virtual Machines service account in the host project ( service- HOST PROJECT NUMBER @gcp-sa-vmmigration.iam.gserviceaccount.com ) the roles/vmmigration.serviceAgent role on the target project.
- For example, if service-1234567890@gcp-sa-vmmigration.iam.gserviceaccount.com is the Migrate to Virtual Machines service account in the host project, you must grant this service account the roles/vmmigration.serviceAgent role to be able to create the image in the target project.

