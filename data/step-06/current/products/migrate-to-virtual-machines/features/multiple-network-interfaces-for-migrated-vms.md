---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.996Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "Multiple network interfaces for migrated VMs"
feature_slug: "multiple-network-interfaces-for-migrated-vms"
latest_feature_date: "2021-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import"
keywords:
  - "multiple"
  - "network"
  - "interfaces"
  - "for"
  - "migrated"
  - "vms"
  - "supports"
  - "configuring"
---

# Multiple network interfaces for migrated VMs

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Supports configuring multiple network interfaces on migrated virtual machines.

## Extended Definition

Supports configuring multiple network interfaces on migrated virtual machines.

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
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- Before you add additional network interfaces, be aware of the following considerations: Attaching multiple network interfaces to the same VPC network is supported only if the additional network interfaces are attached to the same VPC network as the nic0 interface.
- For more information, see Multiple network interfaces and Creating instances with multiple network interfaces .
- For example, you can add additional licenses using this URL format: https://www.googleapis.com/compute/beta/projects/windows-sql-cloud/global/licenses/sql-server-2012-enterprise Sole tenancy Node affinity labels Compute Engine supports the deployment of migrated workloads to sole-tenant nodes .
- Set VM target details : Configure settings for the migrated VM, such as the project, instance type, memory, network, and more. (Optional) Test-clone : Create a clone of the source VM from the replication data and test it on Google Cloud.

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root-2`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- Before you add additional network interfaces, be aware of the following considerations: Attaching multiple network interfaces to the same VPC network is supported only if the additional network interfaces are attached to the same VPC network as the nic0 interface.
- For more information, see Multiple network interfaces and Creating instances with multiple network interfaces .
- For example, you can add additional licenses using this URL format: https://www.googleapis.com/compute/beta/projects/windows-sql-cloud/global/licenses/sql-server-2012-enterprise Sole tenancy Node affinity labels Compute Engine supports the deployment of migrated workloads to sole-tenant nodes .
- Set VM target details : Configure settings for the migrated VM, such as the project, instance type, memory, network, and more. (Optional) Test-clone : Create a clone of the source VM from the replication data and test it on Google Cloud.

### "Import machine images \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Creating instances with multiple network interfaces . machineImageTargetDefaults.osAdaptationParameters.generalize Set this flag to true if you want to generalize the machine image.
- Before you add additional network interfaces, be aware of the following considerations: Attaching multiple network interfaces to the same VPC network is not supported.
- Attempting to set an unsupported license type causes an error when you attempt to import the machine image. machineImageTargetDefaults.osAdaptationParameters.network interfaces Migrate to Virtual Machines lets you optionally create a machine images with multiple network interfaces (NICs).
- Licenses License type Compute Engine supports pay as you go (PAYG) licenses and bring your own licenses (BYOL) for your deployed VMs.

### "Import machine images \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/machine-image-import)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Creating instances with multiple network interfaces . machineImageTargetDefaults.osAdaptationParameters.generalize Set this flag to true if you want to generalize the machine image.
- Before you add additional network interfaces, be aware of the following considerations: Attaching multiple network interfaces to the same VPC network is not supported.
- Attempting to set an unsupported license type causes an error when you attempt to import the machine image. machineImageTargetDefaults.osAdaptationParameters.network interfaces Migrate to Virtual Machines lets you optionally create a machine images with multiple network interfaces (NICs).
- Licenses License type Compute Engine supports pay as you go (PAYG) licenses and bring your own licenses (BYOL) for your deployed VMs.

