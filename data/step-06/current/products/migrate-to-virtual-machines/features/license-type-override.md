---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.996Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "License type override"
feature_slug: "license-type-override"
latest_feature_date: "2021-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import"
keywords:
  - "license"
  - "type"
  - "override"
  - "supports"
  - "explicitly"
  - "setting"
  - "the"
  - "target"
---

# License type override

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Supports explicitly setting the target VM license type to PAYG or BYOL.

## Extended Definition

Supports explicitly setting the target VM license type to PAYG or BYOL.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)

## Supporting Pages

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- If your operating system supports multiple license types, you can override the default license type to explicitly specify a license type of PAYG or BYOL.
- Set VM target details : Configure settings for the migrated VM, such as the project, instance type, memory, network, and more. (Optional) Test-clone : Create a clone of the source VM from the replication data and test it on Google Cloud.
- Additional licenses Migrate to Virtual Machines supports up to 10 additional licenses (using valid URL format) that you can add in the Additional configuration section of the Target details dialog.
- When instantiating a Compute Engine instance for either the test-clone or cut-over phase, Migrate to Virtual Machines uses the target details settings at the time of the operation. (Optional) Step 4: Test a clone of a migrating VM In the test-clone phase, Migrate to Virtual Machines deploys a clone of your migrated VM to a Compute Engine instance in your testing environment.

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root-2`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- If your operating system supports multiple license types, you can override the default license type to explicitly specify a license type of PAYG or BYOL.
- Set VM target details : Configure settings for the migrated VM, such as the project, instance type, memory, network, and more. (Optional) Test-clone : Create a clone of the source VM from the replication data and test it on Google Cloud.
- Additional licenses Migrate to Virtual Machines supports up to 10 additional licenses (using valid URL format) that you can add in the Additional configuration section of the Target details dialog.
- When instantiating a Compute Engine instance for either the test-clone or cut-over phase, Migrate to Virtual Machines uses the target details settings at the time of the operation. (Optional) Step 4: Test a clone of a migrating VM In the test-clone phase, Migrate to Virtual Machines deploys a clone of your migrated VM to a Compute Engine instance in your testing environment.

### "Import machine images \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- If your operating system supports multiple license types, you can override the default license type to explicitly specify a license type of PAYG or BYOL.
- If your operating system supports multiple license types, you can override the default license type to explicitly specify a license type of PAYG or BYOL.
- Attempting to set an unsupported license type causes an error when you attempt to import the machine image. machineImageTargetDefaults.osAdaptationParameters.network interfaces Migrate to Virtual Machines lets you optionally create a machine images with multiple network interfaces (NICs).
- For more information, see Adapt VM instances to run on Google Cloud . machineImageTargetDefaults.osAdaptationParameters.licenseType The license type you want to use for your machine image.

### "Import machine images \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- Source ID: `site-docs-root-2`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- If your operating system supports multiple license types, you can override the default license type to explicitly specify a license type of PAYG or BYOL.
- If your operating system supports multiple license types, you can override the default license type to explicitly specify a license type of PAYG or BYOL.
- Attempting to set an unsupported license type causes an error when you attempt to import the machine image. machineImageTargetDefaults.osAdaptationParameters.network interfaces Migrate to Virtual Machines lets you optionally create a machine images with multiple network interfaces (NICs).
- For more information, see Adapt VM instances to run on Google Cloud . machineImageTargetDefaults.osAdaptationParameters.licenseType The license type you want to use for your machine image.

