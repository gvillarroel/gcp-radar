---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:54.994Z"
product_name: "Migrate to Virtual Machines"
product_slug: "migrate-to-virtual-machines"
feature_name: "Estimated cut-over time field"
feature_slug: "estimated-cut-over-time-field"
latest_feature_date: "2023-06-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
  - "https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms"
keywords:
  - "estimated"
  - "cut"
  - "over"
  - "time"
  - "field"
  - "provides"
  - "an"
  - "estimate"
---

# Estimated cut-over time field

Product: Migrate to Virtual Machines
Coverage: MEDIUM

## Step 02 Summary

Provides an estimate of how long a VM cut-over job will take after cut-over is triggered; Provides an estimate of how long a VM cut-over job will take after cut-over is triggered.

## Extended Definition

Provides an estimate of how long a VM cut-over job will take after cut-over is triggered; Provides an estimate of how long a VM cut-over job will take after cut-over is triggered.

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
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- The Estimated cut-over time column shows an estimate of the time it takes to complete a cut-over job for a VM after you initiate a cut-over.
- The cut-over phase includes a short VM downtime and should take place during a scheduled maintenance window.
- Step 5: Create a cut-over In the cut-over phase, you transfer control to your migrated disk, or the new VM you created with the migrated Persistent Disk volumes attached to it, in your target environment on Google Cloud.
- Roll back from the cut-over To rollback from cut-over, follow these steps: Cut-over stops the original source VM in your migration source, so you must start it and redirect traffic back to the source VM.

### "Migrate VM disks and attach them to a new VM \_|\_ Migrate to Virtual Machines\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- Source ID: `site-docs-root-2`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- The Estimated cut-over time column shows an estimate of the time it takes to complete a cut-over job for a VM after you initiate a cut-over.
- The cut-over phase includes a short VM downtime and should take place during a scheduled maintenance window.
- Step 5: Create a cut-over In the cut-over phase, you transfer control to your migrated disk, or the new VM you created with the migrated Persistent Disk volumes attached to it, in your target environment on Google Cloud.
- Roll back from the cut-over To rollback from cut-over, follow these steps: Cut-over stops the original source VM in your migration source, so you must start it and redirect traffic back to the source VM.

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- The Estimated cut-over time column shows an estimate of the time it takes to complete a cut-over job for a VM after you initiate a cut-over.
- When instantiating a Compute Engine instance for either the test-clone or cut-over phase, Migrate to Virtual Machines uses the target details settings at the time of the operation. (Optional) Step 4: Test a clone of a migrating VM In the test-clone phase, Migrate to Virtual Machines deploys a clone of your migrated VM to a Compute Engine instance in your testing environment.
- When instantiating a Compute Engine instance for either the test-clone or cut-over phase, Migrate to Virtual Machines uses the target details settings at the time of the operation.
- The cut-over phase includes a short VM downtime and should take place during a scheduled maintenance window.

### "Migrate individual VMs \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms)
- Source ID: `site-docs-root-2`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- The Estimated cut-over time column shows an estimate of the time it takes to complete a cut-over job for a VM after you initiate a cut-over.
- When instantiating a Compute Engine instance for either the test-clone or cut-over phase, Migrate to Virtual Machines uses the target details settings at the time of the operation. (Optional) Step 4: Test a clone of a migrating VM In the test-clone phase, Migrate to Virtual Machines deploys a clone of your migrated VM to a Compute Engine instance in your testing environment.
- When instantiating a Compute Engine instance for either the test-clone or cut-over phase, Migrate to Virtual Machines uses the target details settings at the time of the operation.
- The cut-over phase includes a short VM downtime and should take place during a scheduled maintenance window.

