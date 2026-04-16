---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.202Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner instance edition downgrade"
feature_slug: "spanner-instance-edition-downgrade"
latest_feature_date: "2025-01-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/free-trial-quickstart"
  - "https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview"
  - "https://docs.cloud.google.com/spanner/docs/backup"
keywords:
  - "downgrading"
  - "downgrade"
  - "lower"
  - "edition"
  - "instance"
  - "supports"
---

# Spanner instance edition downgrade

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports downgrading a Spanner instance to a lower edition tier.

## Extended Definition

Spanner now supports downgrading a Spanner instance to a lower edition tier.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- [https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview](https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview)
- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)

## Supporting Pages

### "Create a Spanner free trial instance and sample application \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Note: A Spanner free trial instance supports Standard edition features, and Enterprise edition features, such as KNN vector distance functions , full-text search , and Spanner Graph .
- Click Save to upgrade your free trial instance. gcloud To upgrade your free trial instance to a paid Enterprise edition instance with the same instance configuration, run the following gcloud spanner instances update command: gcloud spanner instances update INSTANCE ID -- instance - type = provisioned Delete the instance Warning: Deleting an instance permanently removes the instance and all its databases.
- You can select one of the following: Upgrade now Automatically upgrade to the full version of the Enterprise edition after my trial expires Remind me later The Summary section provides a description of compute and storage costs for the upgraded paid instance that you selected.
- For example, to create a free trial instance named trial-instance with the display name Trial Instance using the regional instance configuration regional-us-east5 , run the following: gcloud spanner instances create trial - instance -- config = regional - us - east5 \ -- instance - type = free - instance -- description = "Trial Instance" Note: Use the instance ID, not the display name, when referring to an instance in gcloud CLI commands.

### Restore overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview](https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- For example, if a backup is in an instance configured us-west3 and uses the Enterprise edition, it can be restored to any instance in the project that is also configured us-west3 and uses the Enterprise edition.
- The newly restored database must be in the same project as the backup and be in an instance with the same instance configuration and same (or higher-tier) Spanner edition as the backup.
- If you restore a backup in an Enterprise edition instance into a Standard edition instance, the restore might fail if the database uses Enterprise edition features.
- Alternatively, you can restore it to any instance with the same instance configuration and an edition that is the same or higher-tier than the source instance.

### Backups overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you copy your database from the source multi-region instance configuration nam7 to the destination multi-region instance configuration nam-eur-asia3 , the following charges apply: No charge for overlapping us-central1 region No charge for witness us-central2 region Inter-continental data transfer charge apply twice: once for each new continent (Europe and Asia) Data transfer between regions within the same continent charge apply once for us-east1 Data transfer between regions within the same continent charge apply once in Europe Spanner optimizes the copying process to minimize the number of cross-region transfers.
- The total retention duration for the full backup is at most the lower of the following values: retention duration + 28 days retention duration + ( creation interval 14) Backup copy : When you copy an incremental backup, Spanner also copies all the older backups in the chain required to restore the copied backup.
- Each backup resource is organized under the same instance as its source database in the resource hierarchy and has a resource path that uses the following format: projects/ PROJECT ID /instances/ INSTANCE ID /backups/ BACKUP NAME Replace the following: PROJECT ID : the project ID.
- How backup copying works Spanner lets you copy a backup of your Spanner database from one instance to another instance in a different region or project, to provide additional data protection and compliance capabilities.

