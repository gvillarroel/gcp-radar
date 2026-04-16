---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.995Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "VPC Service Controls perimeter support"
feature_slug: "vpc-service-controls-perimeter-support"
latest_feature_date: "2022-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
keywords:
  - "vpc"
  - "controls"
  - "perimeter"
  - "lets"
  - "migrate"
  - "to"
  - "virtual"
  - "machines"
---

# VPC Service Controls perimeter support

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Lets Migrate to Virtual Machines communicate with select services inside a VPC Service Controls perimeter.

## Extended Definition

Lets Migrate to Virtual Machines communicate with select services inside a VPC Service Controls perimeter.

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
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate to Virtual Machines supports importing OVA machine image files in the following disk file formats: Virtual machine disk (VMDK) QEMU copy-on-write (QCOW) QEMU copy-on-write 2 (QCOW2) QEMU enhanced disk format (QED) VPC Virtual disk image (VDI) Virtual hard disk v2 (VHDX) Limitations When you import machine images, the following limitations apply: You can only import machine images to regions that support N2 instance families .
- Attempting to set an unsupported license type causes an error when you attempt to import the machine image. machineImageTargetDefaults.osAdaptationParameters.network interfaces Migrate to Virtual Machines lets you optionally create a machine images with multiple network interfaces (NICs).
- This permission lets Migrate to Virtual Machines access the source image.
- You can't create machine images from source VMs with any of the following: Attached disks greater than 200 TB A4, A3, C3D, H3, or Z3 machine types Machine image import process To import a machine image to Compute Engine machine image using Migrate to Virtual Machines, use the following steps: Prepare a machine image file for import Choose a target project Import a machine image to Compute Engine Prepare a machine file for import To import a machine image to a Compute Engine image, you must first prepare the machine image file for import.

### "Import machine images \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- Source ID: `site-docs-root-2`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate to Virtual Machines supports importing OVA machine image files in the following disk file formats: Virtual machine disk (VMDK) QEMU copy-on-write (QCOW) QEMU copy-on-write 2 (QCOW2) QEMU enhanced disk format (QED) VPC Virtual disk image (VDI) Virtual hard disk v2 (VHDX) Limitations When you import machine images, the following limitations apply: You can only import machine images to regions that support N2 instance families .
- Attempting to set an unsupported license type causes an error when you attempt to import the machine image. machineImageTargetDefaults.osAdaptationParameters.network interfaces Migrate to Virtual Machines lets you optionally create a machine images with multiple network interfaces (NICs).
- This permission lets Migrate to Virtual Machines access the source image.
- You can't create machine images from source VMs with any of the following: Attached disks greater than 200 TB A4, A3, C3D, H3, or Z3 machine types Machine image import process To import a machine image to Compute Engine machine image using Migrate to Virtual Machines, use the following steps: Prepare a machine image file for import Choose a target project Import a machine image to Compute Engine Prepare a machine file for import To import a machine image to a Compute Engine image, you must first prepare the machine image file for import.

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root`
- Final score: 257
- Re-rank relevance: N/A

Evidence snippets:
- Add Network Interface Migrate to Virtual Machines lets you optionally create a Compute Engine instance with multiple network interfaces (NICs).
- When instantiating a Compute Engine instance for either the test-clone or cut-over phase, Migrate to Virtual Machines uses the target details settings at the time of the operation. (Optional) Step 4: Test a clone of a migrating VM In the test-clone phase, Migrate to Virtual Machines deploys a clone of your migrated VM to a Compute Engine instance in your testing environment.
- Initiate replication of a source VM To initiate replication of a source VM, follow these steps: Open the Migrate to Virtual Machines page in the Google Cloud console: Go to the Migrate to Virtual Machines page Select the Migrations tab.
- Create a test-clone of a VM To create a test-clone of a VM using Migrate to Virtual Machines, follow these steps: Verify that you have configured a testing VM target environment as shown in Configuring VM target .

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root-2`
- Final score: 257
- Re-rank relevance: N/A

Evidence snippets:
- Add Network Interface Migrate to Virtual Machines lets you optionally create a Compute Engine instance with multiple network interfaces (NICs).
- When instantiating a Compute Engine instance for either the test-clone or cut-over phase, Migrate to Virtual Machines uses the target details settings at the time of the operation. (Optional) Step 4: Test a clone of a migrating VM In the test-clone phase, Migrate to Virtual Machines deploys a clone of your migrated VM to a Compute Engine instance in your testing environment.
- Initiate replication of a source VM To initiate replication of a source VM, follow these steps: Open the Migrate to Virtual Machines page in the Google Cloud console: Go to the Migrate to Virtual Machines page Select the Migrations tab.
- Create a test-clone of a VM To create a test-clone of a VM using Migrate to Virtual Machines, follow these steps: Verify that you have configured a testing VM target environment as shown in Configuring VM target .

