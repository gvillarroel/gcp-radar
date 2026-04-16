---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.307Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Avro table export to Cloud Storage"
feature_slug: "spanner-avro-table-export-to-cloud-storage"
latest_feature_date: "2022-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview"
  - "https://docs.cloud.google.com/spanner/docs/cmek"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
keywords:
  - "avro"
  - "exporting"
  - "subset"
  - "storage"
  - "export"
  - "allows"
  - "table"
---

# Spanner Avro table export to Cloud Storage

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner allows exporting a subset of database tables as Avro files to Google Cloud Storage.

## Extended Definition

Spanner allows exporting a subset of database tables as Avro files to Google Cloud Storage.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)
- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)

## Supporting Pages

### Disaster recovery overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Exported databases reside in Cloud Storage and the data can be migrated to any system that supports CSV or Avro.
- Export and import : You can export Spanner databases to Cloud Storage in either CSV or Avro format.
- The following table describes similarities and differences between using back up and restore versus using import and export: Back up and restore Import and export Data consistency Both backups and exported databases are transactionally and externally consistent.
- Choose between backing up or exporting your database Compare backing up your databases to exporting your databases before deciding which one to use.

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Filter instance id = INSTANCE ID is key revoked = FALSE Across time series Time series group by database Across time series Time series aggregation sum Rolling window 10 m Rolling window function mean Configure alert trigger Field Value Condition type Threshold Alert trigger Any time series violates Threshold position Above threshold Threshold 0 Retest window 1 hr Configure alert trigger Field Value Multi-condition trigger All conditions are met After you create the alert, if Spanner detects that a subset of CMEK has been disabled, an incident summary item appears under the Incidents table on the alert's Policy details page.
- The following types of data are protected by Google default encryption at rest and not by the CMEK key: A subset of row keys that mark range boundaries Debugging data including core dumps and operational logs Data in transit or in memory Database metadata In Spanner, there are three layers of encryption.
- To select the resource, metric, and filters, expand the Select a metric menu and then use the values in the New condition table: Optional: To limit the menu to relevant entries, enter the resource or metric name in the filter bar.
- Note: After you enable CMEK in your Spanner database, you can't change its encryption configuration unless you back up and restore the database, or export then import the database back to Spanner.

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- If your game allows players to have separate saved progress for multiple characters, like many large persistent massively multiplayer games, then this table typically contains a row for each character instead.
- CREATE TABLE Player ( PlayerID STRING ( 36 ) NOT NULL , Attribute INT64 NOT NULL ) PRIMARY KEY ( PlayerID ) CREATE INDEX idx attribute ON Player ( Attribute ) And the index was queried to find up to ten players with Attribute=23 , like this: SELECT PlayerID FROM Player @ { force index = idx attribute } WHERE Attribute = 23 LIMIT 10 According to the documentation on optimizing schema design , Spanner stores index data in the same way as tables, with one row per index entry.
- Similar to other relational databases, an inventory table in Spanner has a primary key that is a globally unique identifier for the item, as illustrated in the following table. itemID type playerID 7c14887e-8d45 1 6f1ede3b-25e2 8ca83609-bb93 40 6f1ede3b-25e2 33fedada-3400 1 5fa0aa7d-16da e4714487-075e 23 5fa0aa7d-16da d4fbfb92-a8bd 14 5fa0aa7d-16da 31b7067b-42ec 3 26a38c2c-123a In the example inventory table, itemID and playerID are truncated for readability.
- The updated command for creating the table and index looks like this: CREATE TABLE Player ( PlayerID STRING ( 36 ) NOT NULL , IndexPartition INT64 NOT NULL Attribute INT64 NOT NULL ) PRIMARY KEY ( PlayerID ) CREATE INDEX idx attribute ON Player ( IndexPartition , Attribute ) The IndexPartition value needs to have a limited range for efficient querying, but it should also have range that is at least double the number of splits for efficient distribution.

