---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.989Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "Customer-managed encryption keys for migrations"
feature_slug: "customer-managed-encryption-keys-for-migrations"
latest_feature_date: "2024-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "for"
  - "migrations"
  - "uses"
  - "to"
---

# Customer-managed encryption keys for migrations

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Uses customer-managed encryption keys to protect migration data and migrated VM data during clone and cut-over operations; Uses customer-managed encryption keys to protect migration data and migrated VM data during clone and cut-over operations.

## Extended Definition

Uses customer-managed encryption keys to protect migration data and migrated VM data during clone and cut-over operations; Uses customer-managed encryption keys to protect migration data and migrated VM data during clone and cut-over operations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)

## Supporting Pages

### "Migrate VM disks and attach them to a new VM \_|\_ Migrate to Virtual Machines\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can use customer-managed encryption keys (CMEK) to encrypt and decrypt your data at rest.
- By default, Google Cloud automatically encrypts data when it is at rest using encryption keys managed by Google.
- Customer managed encryption key The key you want to use to protect your data in Google Cloud.
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes the following: The replication data for the VM stored on Google Cloud The Persistent Disk configuration information The monitoring history All other data associated with migrating a disk The VM from the list of onboarded VMs on the VM Disk Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.

### "Migrate VM disks and attach them to a new VM \_|\_ Migrate to Virtual Machines\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can use customer-managed encryption keys (CMEK) to encrypt and decrypt your data at rest.
- By default, Google Cloud automatically encrypts data when it is at rest using encryption keys managed by Google.
- Customer managed encryption key The key you want to use to protect your data in Google Cloud.
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes the following: The replication data for the VM stored on Google Cloud The Persistent Disk configuration information The monitoring history All other data associated with migrating a disk The VM from the list of onboarded VMs on the VM Disk Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can use customer-managed encryption keys (CMEK) to encrypt and decrypt your data at rest.
- By default, Google Cloud automatically encrypts data when it is at rest using encryption keys managed by Google.
- Customer managed encryption key The key you want to use to protect your data in Google Cloud.
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes: The replication data for the VM stored on Google Cloud The Compute Engine configuration information The monitoring history All other data associated with migrating a VM The VM from the list of onboarded VMs on the Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can use customer-managed encryption keys (CMEK) to encrypt and decrypt your data at rest.
- By default, Google Cloud automatically encrypts data when it is at rest using encryption keys managed by Google.
- Customer managed encryption key The key you want to use to protect your data in Google Cloud.
- The only allowed operations on a migration in the Finalized state are: Delete the migration Add to or remove from a group Delete a migration Deleting a migration removes: The replication data for the VM stored on Google Cloud The Compute Engine configuration information The monitoring history All other data associated with migrating a VM The VM from the list of onboarded VMs on the Migrations tab The VM from its group, if the VM is a member of a group However, deleting a migration does not remove the source VM from the list of available VMs for the migration source displayed on the Sources tab.

