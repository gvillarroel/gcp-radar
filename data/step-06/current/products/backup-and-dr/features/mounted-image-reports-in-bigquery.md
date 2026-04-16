---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.929Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Mounted image reports in BigQuery"
feature_slug: "mounted-image-reports-in-bigquery"
latest_feature_date: "2024-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery"
keywords:
  - "mounted"
  - "image"
  - "reports"
  - "view"
  - "added"
---

# Mounted image reports in BigQuery

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Added support to view mounted image reports in BigQuery.

## Extended Definition

Added support to view mounted image reports in BigQuery.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)

## Supporting Pages

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Migrate (Cancel) Migrate (Cancel) Cancels an in-progress migration, disables future migration jobs for the mounted image, and cleans up any partially migrated/copied data.
- Unmount Delete unmount delete Unmounts an image previously mounted to a host and discards all changes made in that mount.
- Unmount unmount Unmounts an image previously mounted to a host, but keeps the image available for later mounting.
- Delete delete Deletes an image that was already unmounted from the host.

### "Mount backup images of Compute Engine instances in the appliance management\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- From the Instance Name drop-down, select the Compute Engine instance where you want the instance backup image to be mounted for accessing the data.
- View key version To determine which key version is in use by a snapshot image, follow these steps: Go to Back up & Recover > Recover .
- Once the mount job is complete, the image becomes active and the data from the backup image is accessible on the mounted instance.
- You can validate this by matching the snapshot by reviewing the snapshot label which should contain the image name.

### "Protect and recover SAP HANA databases in Compute Engine instances \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Discover and protect SAP HANA databases Note: If you are protecting a HANA database that has already been added and that already has LVM backup images, then you must change the capture method from LVM to Persistent Disk.
- Mount a backup for an integrity check This tool runs the SAP HANA persistence checking tool, hdbpersdiag , with the 'check all' option to verify the healthy state of data volumes from the mounted snapshot image.
- Unmount the mounted backup snapshot image To remove or keep the disk after a successful mount: Go to Application > Access page and select the image used for mount.
- Restore SAP HANA databases Before you can restore an SAP HANA database from a backup image, review these license requirements.

