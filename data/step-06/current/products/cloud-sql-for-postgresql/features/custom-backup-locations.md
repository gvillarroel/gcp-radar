---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.826Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Custom backup locations"
feature_slug: "custom-backup-locations"
latest_feature_date: "2019-05-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options"
  - "https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups"
keywords:
  - "locations"
  - "choose"
  - "custom"
  - "backup"
  - "lets"
---

# Custom backup locations

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for PostgreSQL lets you choose the region where backups are stored to keep backup data in a single region.

## Extended Definition

Cloud SQL for PostgreSQL lets you choose the region where backups are stored to keep backup data in a single region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options)
- [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups)

## Supporting Pages

### "Choose your backup option \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options)
- Source ID: `site-iam-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom backup locations Cloud SQL lets you select a custom location for your backup data.
- For more information about setting and view backup locations for an instance, see Set a custom location for backups and View backup locations .
- Custom locations that you choose when you don't want to use the default location.
- Default backup locations If you don't specify a storage location, then your backups are stored in the multi-region that is geographically closest to the location of your Cloud SQL instance.

### "Data residency overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about backup locations, see Custom backup locations .
- Cloud SQL also lets you add another layer of encryption to data using customer-managed encryption keys (CMEK) .
- To learn more about how Google Cloud protects customer data throughout its lifecycle, and how Google Cloud provides customers with transparency and control over their data, see Trusting your data with Google Cloud .
- Access Approval lets you require Google employees to get your explicit approval before they access your data or configurations on Google Cloud (for exclusions, see Access Approval exclusions ).

### "Cloud SQL backups overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- The scheduled cadence depends on the backup option you choose for your instance and the cadence you define in the backup configuration for the selected backup option.
- The integrity check is done as an offline process by restoring a sampling of customer initiated backups or recovery backups .
- MySQL PostgreSQL SQL Server Cloud SQL lets you back up your instances on-demand, or automatically using a backup schedule.
- For more information about backup retention related to your instance's backup option, see Choose your backup option .

