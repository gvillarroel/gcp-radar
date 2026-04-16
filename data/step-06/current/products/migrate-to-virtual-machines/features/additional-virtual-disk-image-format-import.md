---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.988Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "Additional virtual disk image format import"
feature_slug: "additional-virtual-disk-image-format-import"
latest_feature_date: "2024-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import"
keywords:
  - "additional"
  - "virtual"
  - "disk"
  - "image"
  - "format"
  - "import"
  - "supports"
  - "importing"
---

# Additional virtual disk image format import

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Supports importing virtual disk image files in additional formats such as QCOW, QCOW2, QED, VDI, VHDX, VHD, VMDK, and compressed raw images.

## Extended Definition

Supports importing virtual disk image files in additional formats such as QCOW, QCOW2, QED, VDI, VHDX, VHD, VMDK, and compressed raw images.

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
- Final score: 314
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- QEMU copy-on-write (QCOW) QEMU copy-on-write 2 (QCOW2) QEMU enhanced disk format (QED) VPC Virtual disk image (VDI) Virtual hard disk v2 (VHDX) Virtual hard disk (VHD) In addition to these formats, you can also import raw images from a RAW file ( .raw ), or from a compressed tar file ( .tar.gz ).
- If you have virtual disk images in your environment with software and configurations that you need, you can save time by importing these virtual disk images to Compute Engine, and using the resulting image to create virtual machine instances or persistent disks.
- Supported formats You can import virtual disk image files in the following formats using Migrate to Virtual Machines: A single virtual machine disk (VMDK) - Recommended option, VMDK files are imported faster Note: Only monolithic VMDK files are supported.
- See Labeling resources . diskImageTargetDefaults.additionalLicenses string[] You can add up to 10 additional licenses to the VM instance created from the imported image using a valid URL format.

### "Import virtual disk images \_|\_ Migrate to Virtual Machines \_|\_ Google\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/image_import)
- Source ID: `site-docs-root-2`
- Final score: 314
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- QEMU copy-on-write (QCOW) QEMU copy-on-write 2 (QCOW2) QEMU enhanced disk format (QED) VPC Virtual disk image (VDI) Virtual hard disk v2 (VHDX) Virtual hard disk (VHD) In addition to these formats, you can also import raw images from a RAW file ( .raw ), or from a compressed tar file ( .tar.gz ).
- If you have virtual disk images in your environment with software and configurations that you need, you can save time by importing these virtual disk images to Compute Engine, and using the resulting image to create virtual machine instances or persistent disks.
- Supported formats You can import virtual disk image files in the following formats using Migrate to Virtual Machines: A single virtual machine disk (VMDK) - Recommended option, VMDK files are imported faster Note: Only monolithic VMDK files are supported.
- See Labeling resources . diskImageTargetDefaults.additionalLicenses string[] You can add up to 10 additional licenses to the VM instance created from the imported image using a valid URL format.

### "Import machine images \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- Source ID: `site-docs-root`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate to Virtual Machines supports importing OVA machine image files in the following disk file formats: Virtual machine disk (VMDK) QEMU copy-on-write (QCOW) QEMU copy-on-write 2 (QCOW2) QEMU enhanced disk format (QED) VPC Virtual disk image (VDI) Virtual hard disk v2 (VHDX) Limitations When you import machine images, the following limitations apply: You can only import machine images to regions that support N2 instance families .
- Note: Migrate to Virtual Machines only supports importing VMDK disk files in the OVF format.
- Supported file formats You can import machine image files in the following formats using Migrate to Virtual Machines: Open Virtualization Format (OVF): One OVF file and virtual machine disk (VMDK) files in the same bucket.
- You can't create machine images from source VMs with any of the following: Attached disks greater than 200 TB A4, A3, C3D, H3, or Z3 machine types Machine image import process To import a machine image to Compute Engine machine image using Migrate to Virtual Machines, use the following steps: Prepare a machine image file for import Choose a target project Import a machine image to Compute Engine Prepare a machine file for import To import a machine image to a Compute Engine image, you must first prepare the machine image file for import.

### "Import machine images \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- Source ID: `site-docs-root-2`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate to Virtual Machines supports importing OVA machine image files in the following disk file formats: Virtual machine disk (VMDK) QEMU copy-on-write (QCOW) QEMU copy-on-write 2 (QCOW2) QEMU enhanced disk format (QED) VPC Virtual disk image (VDI) Virtual hard disk v2 (VHDX) Limitations When you import machine images, the following limitations apply: You can only import machine images to regions that support N2 instance families .
- Note: Migrate to Virtual Machines only supports importing VMDK disk files in the OVF format.
- Supported file formats You can import machine image files in the following formats using Migrate to Virtual Machines: Open Virtualization Format (OVF): One OVF file and virtual machine disk (VMDK) files in the same bucket.
- You can't create machine images from source VMs with any of the following: Attached disks greater than 200 TB A4, A3, C3D, H3, or Z3 machine types Machine image import process To import a machine image to Compute Engine machine image using Migrate to Virtual Machines, use the following steps: Prepare a machine image file for import Choose a target project Import a machine image to Compute Engine Prepare a machine file for import To import a machine image to a Compute Engine image, you must first prepare the machine image file for import.

