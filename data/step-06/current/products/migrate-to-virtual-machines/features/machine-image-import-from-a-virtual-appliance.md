---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.987Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "Machine image import from a virtual appliance"
feature_slug: "machine-image-import-from-a-virtual-appliance"
latest_feature_date: "2024-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import"
keywords:
  - "machine"
  - "image"
  - "import"
  - "from"
  - "virtual"
  - "appliance"
  - "migrate"
  - "to"
---

# Machine image import from a virtual appliance

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Migrate to Virtual Machines can import a machine image from a virtual appliance.

## Extended Definition

Migrate to Virtual Machines can import a machine image from a virtual appliance.

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
- Final score: 390
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes the steps that you can use to import a machine image from a virtual appliance using Migrate to Virtual Machines.
- You can't create machine images from source VMs with any of the following: Attached disks greater than 200 TB A4, A3, C3D, H3, or Z3 machine types Machine image import process To import a machine image to Compute Engine machine image using Migrate to Virtual Machines, use the following steps: Prepare a machine image file for import Choose a target project Import a machine image to Compute Engine Prepare a machine file for import To import a machine image to a Compute Engine image, you must first prepare the machine image file for import.
- POST https://vmmigration.googleapis.com/v1/projects/ HOST PROJECT ID /locations/ REGION ID /imageImports?imageImportId= IMPORT NAME { "cloudStorageUri": " SOURCE FILE ", "machineImageTargetDefaults": { "imageName": " IMAGE NAME ", "targetProject": "projects/ HOST PROJECT ID /locations/global/targetProjects/ TARGET PROJECT ", ... } } Replace the following: HOST PROJECT ID : the name of the host project from which you want to migrate the machine image.
- Migrate to Virtual Machines supports importing OVA machine image files in the following disk file formats: Virtual machine disk (VMDK) QEMU copy-on-write (QCOW) QEMU copy-on-write 2 (QCOW2) QEMU enhanced disk format (QED) VPC Virtual disk image (VDI) Virtual hard disk v2 (VHDX) Limitations When you import machine images, the following limitations apply: You can only import machine images to regions that support N2 instance families .

### "Import machine images \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- Source ID: `site-docs-root-2`
- Final score: 390
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes the steps that you can use to import a machine image from a virtual appliance using Migrate to Virtual Machines.
- You can't create machine images from source VMs with any of the following: Attached disks greater than 200 TB A4, A3, C3D, H3, or Z3 machine types Machine image import process To import a machine image to Compute Engine machine image using Migrate to Virtual Machines, use the following steps: Prepare a machine image file for import Choose a target project Import a machine image to Compute Engine Prepare a machine file for import To import a machine image to a Compute Engine image, you must first prepare the machine image file for import.
- POST https://vmmigration.googleapis.com/v1/projects/ HOST PROJECT ID /locations/ REGION ID /imageImports?imageImportId= IMPORT NAME { "cloudStorageUri": " SOURCE FILE ", "machineImageTargetDefaults": { "imageName": " IMAGE NAME ", "targetProject": "projects/ HOST PROJECT ID /locations/global/targetProjects/ TARGET PROJECT ", ... } } Replace the following: HOST PROJECT ID : the name of the host project from which you want to migrate the machine image.
- Migrate to Virtual Machines supports importing OVA machine image files in the following disk file formats: Virtual machine disk (VMDK) QEMU copy-on-write (QCOW) QEMU copy-on-write 2 (QCOW2) QEMU enhanced disk format (QED) VPC Virtual disk image (VDI) Virtual hard disk v2 (VHDX) Limitations When you import machine images, the following limitations apply: You can only import machine images to regions that support N2 instance families .

### "Import virtual disk images \_|\_ Migrate to Virtual Machines \_|\_ Google\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import)
- Source ID: `site-docs-root`
- Final score: 367
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ghislain, Belgium europe-west1 London, England europe-west2 Frankfurt, Germany europe-west3 Eemshaven, Netherlands europe-west4 Paris, France europe-west9 Damman, Saudi Arabia me-central2 Tel Aviv, Israel me-west1 Montréal, Québec northamerica-northeast1 Queretaro, Mexico northamerica-south1 São Paulo, Brazil southamerica-east1 Iowa, North America us-central1 South Carolina, North America us-east1 Virginia, North America us-east4 Columbus, North America us-east5 Dallas, North America us-south1 Oregon, North America us-west1 California, North America us-west2 Utah, North America us-west3 Nevada, North America us-west4 Image import process To import a virtual disk image to a Compute Engine image using Migrate to Virtual Machines, use the following steps: Prepare a virtual disk image file for import Choose a target project Import a virtual disk image to Compute Engine Prepare a virtual disk file for import To import a virtual disk image to a Compute Engine image, you must first prepare the virtual disk image file for import.
- POST https://vmmigration.googleapis.com/v1/projects/ HOST PROJECT ID /locations/ REGION ID /imageImports?imageImportId= IMPORT NAME { "cloudStorageUri": " SOURCE FILE ", "diskImageTargetDefaults": { "imageName": " IMAGE NAME ", "targetProject": "projects/ HOST PROJECT ID /locations/global/targetProjects/ TARGET PROJECT ", ... } } Replace the following: HOST PROJECT ID : the name of the host project from which you want to migrate the virtual disk image.
- Role Permissions required Description Storage Object Viewer roles/storage.objectViewer Grant the default Migrate to Virtual Machines service account in the host project ( service- HOST PROJECT NUMBER @gcp-sa-vmmigration.iam.gserviceaccount.com ) the roles/storage.objectViewer role on the bucket where the image you want to import resides.
- Supported formats You can import virtual disk image files in the following formats using Migrate to Virtual Machines: A single virtual machine disk (VMDK) - Recommended option, VMDK files are imported faster Note: Only monolithic VMDK files are supported.

### "Import virtual disk images \_|\_ Migrate to Virtual Machines \_|\_ Google\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import)
- Source ID: `site-docs-root-2`
- Final score: 367
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ghislain, Belgium europe-west1 London, England europe-west2 Frankfurt, Germany europe-west3 Eemshaven, Netherlands europe-west4 Paris, France europe-west9 Damman, Saudi Arabia me-central2 Tel Aviv, Israel me-west1 Montréal, Québec northamerica-northeast1 Queretaro, Mexico northamerica-south1 São Paulo, Brazil southamerica-east1 Iowa, North America us-central1 South Carolina, North America us-east1 Virginia, North America us-east4 Columbus, North America us-east5 Dallas, North America us-south1 Oregon, North America us-west1 California, North America us-west2 Utah, North America us-west3 Nevada, North America us-west4 Image import process To import a virtual disk image to a Compute Engine image using Migrate to Virtual Machines, use the following steps: Prepare a virtual disk image file for import Choose a target project Import a virtual disk image to Compute Engine Prepare a virtual disk file for import To import a virtual disk image to a Compute Engine image, you must first prepare the virtual disk image file for import.
- POST https://vmmigration.googleapis.com/v1/projects/ HOST PROJECT ID /locations/ REGION ID /imageImports?imageImportId= IMPORT NAME { "cloudStorageUri": " SOURCE FILE ", "diskImageTargetDefaults": { "imageName": " IMAGE NAME ", "targetProject": "projects/ HOST PROJECT ID /locations/global/targetProjects/ TARGET PROJECT ", ... } } Replace the following: HOST PROJECT ID : the name of the host project from which you want to migrate the virtual disk image.
- Role Permissions required Description Storage Object Viewer roles/storage.objectViewer Grant the default Migrate to Virtual Machines service account in the host project ( service- HOST PROJECT NUMBER @gcp-sa-vmmigration.iam.gserviceaccount.com ) the roles/storage.objectViewer role on the bucket where the image you want to import resides.
- Supported formats You can import virtual disk image files in the following formats using Migrate to Virtual Machines: A single virtual machine disk (VMDK) - Recommended option, VMDK files are imported faster Note: Only monolithic VMDK files are supported.

