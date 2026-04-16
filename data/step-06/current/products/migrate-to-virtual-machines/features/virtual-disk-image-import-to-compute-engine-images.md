---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.988Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "Virtual disk image import to Compute Engine images"
feature_slug: "virtual-disk-image-import-to-compute-engine-images"
latest_feature_date: "2024-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import"
keywords:
  - "virtual"
  - "disk"
  - "image"
  - "import"
  - "to"
  - "compute"
  - "engine"
  - "images"
---

# Virtual disk image import to Compute Engine images

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Imports a virtual disk image into a Compute Engine image for use in creating VM instances or persistent disks; Imports a virtual disk image into a Compute Engine image for use in creating VM instances or persistent disks.

## Extended Definition

Imports a virtual disk image into a Compute Engine image for use in creating VM instances or persistent disks; Imports a virtual disk image into a Compute Engine image for use in creating VM instances or persistent disks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)

## Supporting Pages

### "Import virtual disk images \_|\_ Migrate to Virtual Machines \_|\_ Google\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import)
- Source ID: `site-docs-root`
- Final score: 364
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you have virtual disk images in your environment with software and configurations that you need, you can save time by importing these virtual disk images to Compute Engine, and using the resulting image to create virtual machine instances or persistent disks.
- Ghislain, Belgium europe-west1 London, England europe-west2 Frankfurt, Germany europe-west3 Eemshaven, Netherlands europe-west4 Paris, France europe-west9 Damman, Saudi Arabia me-central2 Tel Aviv, Israel me-west1 Montréal, Québec northamerica-northeast1 Queretaro, Mexico northamerica-south1 São Paulo, Brazil southamerica-east1 Iowa, North America us-central1 South Carolina, North America us-east1 Virginia, North America us-east4 Columbus, North America us-east5 Dallas, North America us-south1 Oregon, North America us-west1 California, North America us-west2 Utah, North America us-west3 Nevada, North America us-west4 Image import process To import a virtual disk image to a Compute Engine image using Migrate to Virtual Machines, use the following steps: Prepare a virtual disk image file for import Choose a target project Import a virtual disk image to Compute Engine Prepare a virtual disk file for import To import a virtual disk image to a Compute Engine image, you must first prepare the virtual disk image file for import.
- Select Import . gcloud To import a virtual disk image to Compute Engine using the Google Cloud CLI, use the following request. gcloud compute migration image-imports create IMAGE NAME \ --source-file= SOURCE FILE \ --location= REGION ID \ --target-project=projects/ HOST PROJECT ID /locations/global/targetProjects/ TARGET PROJECT Replace the following: IMAGE NAME : the name of the image that you want to create.
- Add the virtual disk image file to Cloud Storage To import a virtual disk image to a Compute Engine image, you must first add the virtual disk image file to Cloud Storage.

### "Import virtual disk images \_|\_ Migrate to Virtual Machines \_|\_ Google\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import)
- Source ID: `site-docs-root-2`
- Final score: 364
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you have virtual disk images in your environment with software and configurations that you need, you can save time by importing these virtual disk images to Compute Engine, and using the resulting image to create virtual machine instances or persistent disks.
- Ghislain, Belgium europe-west1 London, England europe-west2 Frankfurt, Germany europe-west3 Eemshaven, Netherlands europe-west4 Paris, France europe-west9 Damman, Saudi Arabia me-central2 Tel Aviv, Israel me-west1 Montréal, Québec northamerica-northeast1 Queretaro, Mexico northamerica-south1 São Paulo, Brazil southamerica-east1 Iowa, North America us-central1 South Carolina, North America us-east1 Virginia, North America us-east4 Columbus, North America us-east5 Dallas, North America us-south1 Oregon, North America us-west1 California, North America us-west2 Utah, North America us-west3 Nevada, North America us-west4 Image import process To import a virtual disk image to a Compute Engine image using Migrate to Virtual Machines, use the following steps: Prepare a virtual disk image file for import Choose a target project Import a virtual disk image to Compute Engine Prepare a virtual disk file for import To import a virtual disk image to a Compute Engine image, you must first prepare the virtual disk image file for import.
- Select Import . gcloud To import a virtual disk image to Compute Engine using the Google Cloud CLI, use the following request. gcloud compute migration image-imports create IMAGE NAME \ --source-file= SOURCE FILE \ --location= REGION ID \ --target-project=projects/ HOST PROJECT ID /locations/global/targetProjects/ TARGET PROJECT Replace the following: IMAGE NAME : the name of the image that you want to create.
- Add the virtual disk image file to Cloud Storage To import a virtual disk image to a Compute Engine image, you must first add the virtual disk image file to Cloud Storage.

### "Import machine images \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- Source ID: `site-docs-root`
- Final score: 336
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can't create machine images from source VMs with any of the following: Attached disks greater than 200 TB A4, A3, C3D, H3, or Z3 machine types Machine image import process To import a machine image to Compute Engine machine image using Migrate to Virtual Machines, use the following steps: Prepare a machine image file for import Choose a target project Import a machine image to Compute Engine Prepare a machine file for import To import a machine image to a Compute Engine image, you must first prepare the machine image file for import.
- You should see a job completion response similar to the following sample response. { "createTime":"2023-10-31T09:12:27.053788394Z", "createdResources":[ "https://www.googleapis.com/compute/v1/projects/USER PROJECT/global/images/IMAGE NAME" ], "diskImageTargetDetails": { "imageName":"IMAGE NAME", "targetProject":"projects/HOST PROJECT ID/locations/global/targetProjects/TARGET PROJECT" }, "endTime":"2023-10-31T09:16:50.224865783Z", "name":"projects/HOST PROJECT ID/locations/us-central1/imageImports/IMPORT NAME/imageImportJobs/image-import-job", "state":"SUCCEEDED" } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Migrate to Virtual Machines supports importing OVA machine image files in the following disk file formats: Virtual machine disk (VMDK) QEMU copy-on-write (QCOW) QEMU copy-on-write 2 (QCOW2) QEMU enhanced disk format (QED) VPC Virtual disk image (VDI) Virtual hard disk v2 (VHDX) Limitations When you import machine images, the following limitations apply: You can only import machine images to regions that support N2 instance families .
- A machine image lets you store the configuration, metadata, permissions, and data from one or more disks for a virtual machine (VM) instance running on Compute Engine.

### "Import machine images \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- Source ID: `site-docs-root-2`
- Final score: 336
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can't create machine images from source VMs with any of the following: Attached disks greater than 200 TB A4, A3, C3D, H3, or Z3 machine types Machine image import process To import a machine image to Compute Engine machine image using Migrate to Virtual Machines, use the following steps: Prepare a machine image file for import Choose a target project Import a machine image to Compute Engine Prepare a machine file for import To import a machine image to a Compute Engine image, you must first prepare the machine image file for import.
- You should see a job completion response similar to the following sample response. { "createTime":"2023-10-31T09:12:27.053788394Z", "createdResources":[ "https://www.googleapis.com/compute/v1/projects/USER PROJECT/global/images/IMAGE NAME" ], "diskImageTargetDetails": { "imageName":"IMAGE NAME", "targetProject":"projects/HOST PROJECT ID/locations/global/targetProjects/TARGET PROJECT" }, "endTime":"2023-10-31T09:16:50.224865783Z", "name":"projects/HOST PROJECT ID/locations/us-central1/imageImports/IMPORT NAME/imageImportJobs/image-import-job", "state":"SUCCEEDED" } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Migrate to Virtual Machines supports importing OVA machine image files in the following disk file formats: Virtual machine disk (VMDK) QEMU copy-on-write (QCOW) QEMU copy-on-write 2 (QCOW2) QEMU enhanced disk format (QED) VPC Virtual disk image (VDI) Virtual hard disk v2 (VHDX) Limitations When you import machine images, the following limitations apply: You can only import machine images to regions that support N2 instance families .
- A machine image lets you store the configuration, metadata, permissions, and data from one or more disks for a virtual machine (VM) instance running on Compute Engine.

