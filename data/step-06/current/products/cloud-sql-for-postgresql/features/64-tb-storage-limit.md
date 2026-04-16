---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.813Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "64 TB storage limit"
feature_slug: "64-tb-storage-limit"
latest_feature_date: "2021-06-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore"
  - "https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview"
keywords:
  - "sizes"
  - "limit"
  - "storage"
  - "supports"
---

# 64 TB storage limit

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports storage sizes up to 64 TB.

## Extended Definition

Cloud SQL for PostgreSQL supports storage sizes up to 64 TB.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore)
- [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview)

## Supporting Pages

### About storage shrink \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink)
- Source ID: `site-iam-reference`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your instance requires limited downtime, rather than using storage shrink capabilities, we recommend migrating your data to a new, smaller instance using Database Migration Service .
- If a primary instance and its associated read replica use different database versions, and a storage shrink operation is applied to the replica, then the recreated replica updates to the primary database version to make sure the replica restart is successful.
- What's next Use storage shrink Cloud SQL storage options Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- MySQL PostgreSQL SQL Server If the storage capacity of a Cloud SQL instance is larger than your application needs, then you can manually reduce, or shrink, your storage capacity to a smaller size.

### "Data residency overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- VPC Service Controls help you enforce data residency by letting you restrict the use of Cloud SQL APIs to import and export data using either the Cloud SQL Admin API or the Cloud Storage API.
- Google Cloud services, including Cloud SQL, address some of these issues by letting you do the following: Set the storage location of your data.
- For data residency, you can limit the physical location of a new resource with the resource locations constraint .

### "Restore an instance overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore)
- Source ID: `site-iam-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- PITR limitations The following limitations are associated with your instance having PITR enabled and the size of your transaction logs on disk causing an issue for your instance: You can deactivate PITR and re-enable it to ensure that Cloud SQL stores logs in Cloud Storage in the same region as the instance.
- For PITR write-ahead logs that are stored on disk , that are being switched to Cloud Storage, or that are already switched to Cloud Storage, Cloud SQL retains the logs for the minimum value set for one of the following configurations: The transactionLogRetentionDays backup configuration setting The expire logs days or the binlog expire logs seconds flag Cloud SQL doesn't set any values for these flags if the write-ahead logs are stored on disk, are being switched to Cloud Storage, or have already been switched to Cloud Storage.
- If you upgrade a Cloud SQL Enterprise edition instance after January 9, 2023 that stores transaction logs for PITR on disk to Cloud SQL Enterprise Plus edition, then the upgrade process switches the storage location of the transaction logs used for PITR to Cloud Storage for you.
- Although an instance stores the write-ahead logs used for PITR in Cloud Storage, the instance also keeps a smaller number of duplicate write-ahead logs on disk to allow for replication of the logs to Cloud Storage.

