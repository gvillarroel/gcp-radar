---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.150Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "BigQuery non-incremental materialized views over Spanner"
feature_slug: "bigquery-non-incremental-materialized-views-over-spanner"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview"
  - "https://docs.cloud.google.com/spanner/docs/backup"
  - "https://docs.cloud.google.com/spanner/docs/change-streams"
keywords:
  - "materialized"
  - "incremental"
  - "views"
  - "over"
---

# BigQuery non-incremental materialized views over Spanner

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports creating BigQuery non-incremental materialized views over Spanner data to improve query performance by periodically caching results.

## Extended Definition

Spanner now supports creating BigQuery non-incremental materialized views over Spanner data to improve query performance by periodically caching results.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)
- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)

## Supporting Pages

### Disaster recovery overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- What's next Failure scenarios and resiliency with Spanner Backups overview Create backups Create and manage backup schedules PITR overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Disaster recovery techniques Spanner offers disaster recovery techniques to protect your data against the following disasters: Zonal failure : Spanner regional configuration provides automatic protection against zonal failures, ensuring that if one zone within a region fails, your application remains operational.
- Optimize costs for your disaster recovery strategy You can optimize Spanner disaster recovery costs in the following ways: Multi-region configurations : Use multi-region configurations only for applications that require 99.999% availability.
- Test your disaster recovery strategy Consider testing and validating the following components of your disaster recovery plan: Simulate the most likely events that can cause data loss for your organization.

### Backups overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- The following table shows possible storage costs for these backup schedules: Day Full schedule backup size Incremental schedule backup size 1 100 GB 100 GB 2 110 GB 10 GB 3 120 GB 10 GB 4 130 GB 10 GB 5 140 GB 10 GB Over 5 days, the full backup schedule uses 600 GB of storage, while the incremental backup schedule uses about 140 GB of storage.
- Delete a backup When you delete a backup in an incremental backup chain, you can't recover storage if there are newer backups present in the chain.
- For example, if you copy your database from the source multi-region instance configuration nam7 to the destination multi-region instance configuration nam-eur-asia3 , the following charges apply: No charge for overlapping us-central1 region No charge for witness us-central2 region Inter-continental data transfer charge apply twice: once for each new continent (Europe and Asia) Data transfer between regions within the same continent charge apply once for us-east1 Data transfer between regions within the same continent charge apply once in Europe Spanner optimizes the copying process to minimize the number of cross-region transfers.
- The total retention duration for the full backup is at most the lower of the following values: retention duration + 28 days retention duration + ( creation interval 14) Backup copy : When you copy an incremental backup, Spanner also copies all the older backups in the chain required to restore the copied backup.

### Change streams overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- Source ID: `site-docs-root`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Spanner Guides Send feedback Change streams overview Stay organized with collections Save and categorize content based on your preferences.
- You can optionally configure a change stream with the following: Specify the data retention period to override the default, one-day retention period.
- For a more detailed overview of how change streams and Dataflow work together, see Build change streams connections with Dataflow .
- They don't watch indexes, views, other change streams, or system tables such as the information schema or statistics tables.

