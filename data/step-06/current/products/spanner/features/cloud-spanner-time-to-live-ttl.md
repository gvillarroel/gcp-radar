---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.313Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner Time to Live (TTL)"
feature_slug: "cloud-spanner-time-to-live-ttl"
latest_feature_date: "2021-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-streams"
  - "https://docs.cloud.google.com/spanner/docs/backup"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
keywords:
  - "automatically"
  - "introduces"
  - "live"
  - "generally"
  - "available"
  - "time"
---

# Cloud Spanner Time to Live (TTL)

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Introduces generally available TTL support in Spanner to automatically remove data based on user-defined retention policies.

## Extended Definition

Introduces generally available TTL support in Spanner to automatically remove data based on user-defined retention policies.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)

## Supporting Pages

### Backups overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Backups are highly available, encrypted, and can be retained for up to a year from the time they are created.
- This size represents the billable size of the backup. freeableSizeBytes : shows the number of bytes that are released if you delete the backup. oldestVersionTime : shows the versionTime of the oldest full backup in the chain, even if that backup has expired.
- A backup's storage can be smaller than the database's storage because the backup contains only one version of the data, whereas the live database can contain multiple versions of data due to ongoing operations.
- Performance when copying a backup The time it takes to copy a backup depends on factors such as the size of the source backup and the destination region chosen for the copied backup.

### Change streams overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- These changes can come from: DML statements Mutations Cascading deletes on interleaved child tables Deletes resulting from time to live rules Change streams can watch data changes only in user-created columns and tables.
- Exclude time-to-live based deletes In Spanner, time-to-live (TTL) lets you set policies to periodically delete data from Spanner tables.
- You can filter one or more of these table modifications from your change stream's scope using the following available filter options: exclude insert : exclude all INSERT table modifications exclude update : exclude all UPDATE table modifications exclude delete : exclude all DELETE table modifications The default value for these filters is false .
- After you configure the connector with details about a particular change stream, it automatically outputs new data change records into a single, unbounded PCollection data set, ready for further processing by subsequent transforms in the Dataflow pipeline.

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Evaluate Spanner needs for production When you move from development to testing, and then into production, it's important that you reevaluate your Spanner needs to insure your game can handle live player traffic.
- In the following diagram, adding an IndexPartition column to the schema after the launch resolves the hotspot issue, and players are evenly distributed across the available Spanner splits.
- All queries against the old schema are returned (although they might return less quickly than usual), and queries against the new schema are returned as they become available.
- Schema changes are common with the release of new game features in live service games, and isolation of tenants at a database level can simplify schema updates.

