---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.329Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner multi-region instance configuration"
feature_slug: "spanner-multi-region-instance-configuration"
latest_feature_date: "2020-10-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-streams/manage"
  - "https://docs.cloud.google.com/spanner/docs/backup"
  - "https://docs.cloud.google.com/spanner/docs/cmek"
keywords:
  - "nam9"
  - "configuration"
  - "introduced"
  - "named"
  - "instance"
  - "multi"
  - "region"
---

# Spanner multi-region instance configuration

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner introduced the multi-region instance configuration named nam9, covering North Virginia, Iowa, South Carolina, and Oregon in North America; Spanner introduced the asia1 multi-region instance configuration for deployments in Tokyo/Osaka.

## Extended Definition

Spanner introduced the multi-region instance configuration named nam9, covering North Virginia, Iowa, South Carolina, and Oregon in North America; Spanner introduced the asia1 multi-region instance configuration for deployments in Tokyo/Osaka.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)

## Supporting Pages

### Backups overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you copy your database from the source multi-region instance configuration nam7 to the destination multi-region instance configuration nam-eur-asia3 , the following charges apply: No charge for overlapping us-central1 region No charge for witness us-central2 region Inter-continental data transfer charge apply twice: once for each new continent (Europe and Asia) Data transfer between regions within the same continent charge apply once for us-east1 Data transfer between regions within the same continent charge apply once in Europe Spanner optimizes the copying process to minimize the number of cross-region transfers.
- For multi-region instances, all read-write and read-only zones in all regions must complete their backup replicas before the backup is marked as restorable.
- For dual-region and multi-regional instances , the backup is stored in all zones that contain either a read-write or read-only replica.
- You can make multiple, concurrent copies of the source backup to instances in different regions without any performance implications.

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if your Spanner database is in the multi-region instance configuration nam3 , with instance partitions located in europe-west1 and europe-west2 , then you must create Cloud KMS keys in the following regions: us-east4 (part of nam3 ) us-east1 (part of nam3 ) us-central1 (part of nam3 ) europe-west1 (location of instance partition) europe-west2 (location of instance partition) For more information, see Secure a database with CMEK .
- Multiple regional keys support: you can create multiple regional (single-region) Cloud KMS keys to protect a database in a Spanner custom, dual-region, or multi-region instance configuration .
- When using geo-partitioning, you must use a regional Cloud KMS key for each instance replica locatoin, including those in the instance partition configuration.
- Filter instance id = INSTANCE ID is key revoked = FALSE Across time series Time series group by database Across time series Time series aggregation sum Rolling window 10 m Rolling window function mean Configure alert trigger Field Value Condition type Threshold Alert trigger Any time series violates Threshold position Above threshold Threshold 0 Retest window 1 hr Configure alert trigger Field Value Multi-condition trigger All conditions are met After you create the alert, if Spanner detects that a subset of CMEK has been disabled, an incident summary item appears under the Incidents table on the alert's Policy details page.

### Create and manage change streams \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Use different regions to load-balance When using change streams in a multi-region instance configuration , consider running their processing pipelines in a different region than the default leader region.
- Modify what a change stream watches This example adds the entire Songs table to the NamesAndAlbums change stream configured earlier: ALTER CHANGE STREAM NamesAndAlbums SET FOR Singers ( FirstName , LastName ), Albums , Songs ; Spanner replaces the named change stream's behavior with the new configuration upon the completion of the long-running operation that updates the change stream's definition within the database's schema.
- GoogleSQL To create a change stream that can exclude records from specified write transactions, run the following: CREATE CHANGE STREAM CHANGE STREAM NAME FOR ALL OPTIONS ( allow txn exclusion = true ) Replace the following: CHANGE STREAM NAME : the name of the new change stream The following example creates a change stream named NewChangeStream that can exclude records from specified write transactions: CREATE CHANGE STREAM NewChangeStream FOR ALL OPTIONS ( allow txn exclusion = true ) PostgreSQL To create a change stream that can exclude records from specified write transactions, run the following: CREATE CHANGE STREAM CHANGE STREAM NAME FOR ALL WITH ( allow txn exclusion = true ) Replace the following: CHANGE STREAM NAME : the name of the new change stream The following example creates a change stream named NewChangeStream that can exclude records from specified write transactions,: CREATE CHANGE STREAM NewChangeStream FOR ALL WITH ( allow txn exclusion = true ) To enable or disable the transaction-level records exclusion from an existing change stream, see Modify transaction-level records exclusion .
- TransactionOptions { ExcludeTxnFromChangeStreams : true }) if err != nil { return err } return nil } Java static void readWriteTxnExcludedFromChangeStreams ( DatabaseClient client ) { // Exclude the transaction from allowed tracking change streams with alloww txn exclusion=true. // This exclusion will be applied to all the individual operations inside this transaction. client . readWriteTransaction ( Options . excludeTxnFromChangeStreams ()) . run ( transaction - > { transaction . executeUpdate ( Statement . of ( "INSERT Singers (SingerId, FirstName, LastName)\n" + "VALUES (1341, 'Virginia', 'Watson')" )); System . out . println ( "New singer inserted." ); transaction . executeUpdate ( Statement . of ( "UPDATE Singers SET FirstName = 'Hi' WHERE SingerId = 111" )); System . out . println ( "Singer first name updated." ); return null ; }); } Modify a change stream To modify a change stream's configuration, use an ALTER CHANGE STREAM DDL statement.

