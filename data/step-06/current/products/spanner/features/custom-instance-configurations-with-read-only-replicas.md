---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.291Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Custom instance configurations with read-only replicas"
feature_slug: "custom-instance-configurations-with-read-only-replicas"
latest_feature_date: "2022-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/cmek"
  - "https://docs.cloud.google.com/spanner/docs/compute-capacity"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BatchReadOnlyTransaction"
keywords:
  - "replicas"
  - "configurations"
  - "custom"
  - "instance"
  - "allows"
  - "only"
  - "read"
---

# Custom instance configurations with read-only replicas

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner allows you to create custom instance configurations and add optional read-only replicas to improve read scalability and support low-latency stale reads.

## Extended Definition

Spanner allows you to create custom instance configurations and add optional read-only replicas to improve read scalability and support low-latency stale reads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BatchReadOnlyTransaction](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BatchReadOnlyTransaction)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you're using multiple regional keys to protect a Spanner database, only those replicas that are protected by a key residing in the unavailable regional Cloud KMS are affected by the unavailability.
- Multiple regional keys support: you can create multiple regional (single-region) Cloud KMS keys to protect a database in a Spanner custom, dual-region, or multi-region instance configuration .
- If you're using multiple Cloud EKM keys to protect your Spanner database, only those replicas that are protected by the unavailable key are affected by the unavailability.
- Applications don't need to specify keys or encryption configurations when reading or writing data.

### "Interface BatchReadOnlyTransaction (6.111.1) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BatchReadOnlyTransaction](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BatchReadOnlyTransaction)
- Source ID: `site-java-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Regardless of ordering in keys , rows are returned in their natural key order. columns Iterable < String > the columns to read options ReadOption [] the options to configure the read, supported values are Options#prefetchChunks() final BatchReadOnlyTransaction txn = batchClient . batchReadOnlyTransaction ( TimestampBound . strong ()); List<Partition> partitions = txn . partitionRead ( PartitionOptions . getDefaultInstance (), "Singers" , KeySet . all (), Arrays . asList ( "SingerId" , "FirstName" , "LastName" )); for ( final Partition p : partitions ) { try ( ResultSet results = txn . execute ( p )) { while ( results . next ()) { long singerId = results . getLong ( 0 ); String firstName = results . getString ( 1 ); String lastName = results . getString ( 2 ); System . out . println ( "[" + singerId + "] " + firstName + " " + lastName ); } } } <!--SNIPPET partition read--> Returns Type Description List < Partition > Exceptions Type Description SpannerException partitionReadUsingIndex(PartitionOptions partitionOptions, String table, String index, KeySet keys, Iterable<String> columns, Options.ReadOption[] options) public abstract List<Partition> partitionReadUsingIndex ( PartitionOptions partitionOptions , String table , String index , KeySet keys , Iterable<String> columns , Options .
- Parameters Name Description partitionOptions PartitionOptions configuration for size and count of partitions returned statement Statement the query statement to execute options QueryOption [] the options to configure the query final BatchReadOnlyTransaction txn = batchClient . batchReadOnlyTransaction ( TimestampBound . strong ()); List<Partition> partitions = txn . partitionQuery ( PartitionOptions . getDefaultInstance (), Statement . of ( "SELECT SingerId, FirstName, LastName FROM Singers" )); for ( final Partition p : partitions ) { try ( ResultSet results = txn . execute ( p )) { while ( results . next ()) { long singerId = results . getLong ( 0 ); String firstName = results . getString ( 1 ); String lastName = results . getString ( 2 ); System . out . println ( "[" + singerId + "] " + firstName + " " + lastName ); } } } <!--SNIPPET partition query--> Returns Type Description List < Partition > Exceptions Type Description SpannerException partitionRead(PartitionOptions partitionOptions, String table, KeySet keys, Iterable<String> columns, Options.ReadOption[] options) public abstract List<Partition> partitionRead ( PartitionOptions partitionOptions , String table , KeySet keys , Iterable<String> columns , Options .
- Regardless of ordering in keys , rows are returned in the natural key order of the index. columns Iterable < String > the columns to read options ReadOption [] the options to configure the read final BatchReadOnlyTransaction txn = batchClient . batchReadOnlyTransaction ( TimestampBound . strong ()); List<Partition> partitions = txn . partitionReadUsingIndex ( PartitionOptions . getDefaultInstance (), "Singers" , "SingerId" , KeySet . all (), Arrays . asList ( "SingerId" , "FirstName" , "LastName" )); for ( Partition p : partitions ) { try ( ResultSet results = txn . execute ( p )) { while ( results . next ()) { long singerId = results . getLong ( 0 ); String firstName = results . getString ( 1 ); String lastName = results . getString ( 2 ); System . out . println ( "[" + singerId + "] " + firstName + " " + lastName ); } } } <!--SNIPPET partition read using index--> Returns Type Description List < Partition > Exceptions Type Description SpannerException Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The row metadata may be absent if no rows are returned. final BatchReadOnlyTransaction txn = batchClient . batchReadOnlyTransaction ( TimestampBound . strong ()); List<Partition> partitions = txn . partitionQuery ( PartitionOptions . getDefaultInstance (), Statement . of ( "SELECT SingerId, FirstName, LastName FROM Singers" )); for ( final Partition p : partitions ) { try ( ResultSet results = txn . execute ( p )) { while ( results . next ()) { long singerId = results . getLong ( 0 ); String firstName = results . getString ( 1 ); String lastName = results . getString ( 2 ); System . out . println ( "[" + singerId + "] " + firstName + " " + lastName ); } } } Parameter Name Description partition Partition Returns Type Description ResultSet Exceptions Type Description SpannerException getBatchTransactionId() public abstract BatchTransactionId getBatchTransactionId () Returns a BatchTransactionId to be re-used across several machines/processes.

### "Compute capacity, nodes and processing units \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When autoscaling is enabled on an instance, you can configure and autoscale your read-only replicas independently to set different compute capacities for each replica.
- For information about data replicas in instance configurations, see Regional, dual-region, and multi-region configurations .
- Compute capacity and instance configurations As described in Regional, dual-region, and multi-region configurations , Spanner distributes an instance across zones of one or more regions to provide high performance and high availability.
- This diagram depicts two instances that have regional configurations: Instance-A shows an instance of 1000 PUs (1 node) with its compute capacity distribution consuming server resources in each of the three zones.

