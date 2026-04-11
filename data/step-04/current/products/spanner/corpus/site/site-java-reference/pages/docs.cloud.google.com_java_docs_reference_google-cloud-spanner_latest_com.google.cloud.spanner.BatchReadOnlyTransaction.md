---
title: "Interface BatchReadOnlyTransaction (6.111.1) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BatchReadOnlyTransaction
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BatchReadOnlyTransaction
  title: "Interface BatchReadOnlyTransaction (6.111.1) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Interface BatchReadOnlyTransaction (6.111.1)
Stay organized with collections
Save and categorize content based on your preferences.
6.111.1 (latest)
6.111.0
6.108.0
6.107.0
6.103.0
6.102.1
6.101.1
6.100.0
6.99.0
6.98.1
6.97.1
6.96.1
6.95.1
6.94.0
6.93.0
6.89.0
6.88.0
6.87.0
6.86.0
6.85.0
6.83.0
6.82.0
6.80.1
6.79.0
6.77.0
6.74.1
6.72.0
6.71.0
6.69.0
6.68.0
6.66.0
6.65.1
6.62.0
6.60.0
6.58.0
6.57.0
6.56.0
6.55.0
6.54.0
6.53.0
6.52.1
6.51.0
6.50.1
6.49.0
6.25.1
6.24.0
6.23.4
6.22.0
6.21.2
6.20.0
6.19.1
6.18.0
6.17.4
6.14.1
public interface BatchReadOnlyTransaction extends ReadOnlyTransaction
BatchReadOnlyTransaction can be configured to read at timestamps in the past and allows
for exporting arbitrarily large amounts of data from Cloud Spanner databases. This is a read only
transaction which additionally allows to partition a read or query request. Read/query request
can then be executed independently over each partition while observing the same snapshot of the
database. BatchReadOnlyTransaction can also be shared across multiple processes/machines by
passing around the BatchTransactionId and then recreating the transaction using BatchClient#batchReadOnlyTransaction(BatchTransactionId) .
Unlike locking read-write transactions, BatchReadOnlyTransaction never abort. They can fail if
the chosen read timestamp is garbage collected; however any read or query activity within an hour
on the transaction avoids garbage collection and most applications do not need to worry about
this in practice.
To execute a BatchReadOnlyTransaction, specify a TimestampBound , which tells Cloud
Spanner how to choose a read timestamp.
Implements
ReadOnlyTransaction
Methods
cleanup()
public default void cleanup ()
Closes the session as part of the cleanup. It is the responsibility of the caller to make a
call to this method once the transaction completes execution across all the channels (which is
understandably hard to identify). It is okay if the caller does not call the method because the
backend will anyways clean up the unused session.
execute(Partition partition)
public abstract ResultSet execute ( Partition partition )
Execute the partition to return ResultSet . The result returned could be zero or more
rows. The row metadata may be absent if no rows are returned.
final BatchReadOnlyTransaction txn =
batchClient . batchReadOnlyTransaction ( TimestampBound . strong ());
List<Partition> partitions = txn . partitionQuery ( PartitionOptions . getDefaultInstance (),
Statement . of ( "SELECT SingerId, FirstName, LastName FROM Singers" ));
for ( final Partition p : partitions ) {
try ( ResultSet results = txn . execute ( p )) {
while ( results . next ()) {
long singerId = results . getLong ( 0 );
String firstName = results . getString ( 1 );
String lastName = results . getString ( 2 );
System . out . println ( "[" + singerId + "] " + firstName + " " + lastName );
}
}
}
Parameter
Name
Description
partition
Partition
Returns
Type
Description
ResultSet
Exceptions
Type
Description
SpannerException
getBatchTransactionId()
public abstract BatchTransactionId getBatchTransactionId ()
Returns a BatchTransactionId to be re-used across several machines/processes. This
BatchTransactionId guarantees the subsequent read/query to be executed at the same timestamp.
Returns
Type
Description
BatchTransactionId
partitionQuery(PartitionOptions partitionOptions, Statement statement, Options.QueryOption[] options)
public abstract List<Partition> partitionQuery ( PartitionOptions partitionOptions , Statement statement , Options . QueryOption [] options )
Returns a list of Partition to execute a query against the database.
These partitions can be executed across multiple processes, even across different machines.
The partition size and count can be configured using PartitionOptions . Though it may
not necessarily be honored depending on the query and options in the request.
Parameters
Name
Description
partitionOptions
PartitionOptions configuration for size and count of partitions returned
statement
Statement the query statement to execute
options
QueryOption [] the options to configure the query
final BatchReadOnlyTransaction txn =
batchClient . batchReadOnlyTransaction ( TimestampBound . strong ());
List<Partition> partitions = txn . partitionQuery ( PartitionOptions . getDefaultInstance (),
Statement . of ( "SELECT SingerId, FirstName, LastName FROM Singers" ));
for ( final Partition p : partitions ) {
try ( ResultSet results = txn . execute ( p )) {
while ( results . next ()) {
long singerId = results . getLong ( 0 );
String firstName = results . getString ( 1 );
String lastName = results . getString ( 2 );
System . out . println ( "[" + singerId + "] " + firstName + " " + lastName );
}
}
}
<!--SNIPPET partition_query-->
Returns
Type
Description
List < Partition >
Exceptions
Type
Description
SpannerException
partitionRead(PartitionOptions partitionOptions, String table, KeySet keys, Iterable<String> columns, Options.ReadOption[] options)
public abstract List<Partition> partitionRead ( PartitionOptions partitionOptions , String table , KeySet keys , Iterable<String> columns , Options . ReadOption [] options )
Returns a list of Partition to read zero or more rows from a database.
These partitions can be executed across multiple processes, even across different machines.
The partition size and count hints can be configured using PartitionOptions .
Parameters
Name
Description
partitionOptions
PartitionOptions configuration for size and count of partitions returned
table
String the name of the table to read
keys
KeySet the keys and ranges of rows to read. Regardless of ordering in keys , rows
are returned in their natural key order.
columns
Iterable < String > the columns to read
options
ReadOption [] the options to configure the read, supported values are Options#prefetchChunks()
final BatchReadOnlyTransaction txn =
batchClient . batchReadOnlyTransaction ( TimestampBound . strong ());
List<Partition> partitions =
txn . partitionRead (
PartitionOptions . getDefaultInstance (),
"Singers" ,
KeySet . all (),
Arrays . asList ( "SingerId" , "FirstName" , "LastName" ));
for ( final Partition p : partitions ) {
try ( ResultSet results = txn . execute ( p )) {
while ( results . next ()) {
long singerId = results . getLong ( 0 );
String firstName = results . getString ( 1 );
String lastName = results . getString ( 2 );
System . out . println ( "[" + singerId + "] " + firstName + " " + lastName );
}
}
}
<!--SNIPPET partition_read-->
Returns
Type
Description
List < Partition >
Exceptions
Type
Description
SpannerException
partitionReadUsingIndex(PartitionOptions partitionOptions, String table, String index, KeySet keys, Iterable<String> columns, Options.ReadOption[] options)
public abstract List<Partition> partitionReadUsingIndex ( PartitionOptions partitionOptions , String table , String index , KeySet keys , Iterable<String> columns , Options . ReadOption [] options )
Returns a list of Partition to read zero or more rows from a database using an index.
These partitions can be executed across multiple processes, even across different machines.
The partition size and count can be configured using PartitionOptions . Though it may
not necessarily be honored depending on the parameters in the request.
Parameters
Name
Description
partitionOptions
PartitionOptions configuration for size and count of partitions returned
table
String the name of the table to read
index
String the name of the index on table to use
keys
KeySet the keys and ranges of index rows to read. Regardless of ordering in keys ,
rows are returned in the natural key order of the index.
columns
Iterable < String > the columns to read
options
ReadOption [] the options to configure the read
final BatchReadOnlyTransaction txn =
batchClient . batchReadOnlyTransaction ( TimestampBound . strong ());
List<Partition> partitions =
txn . partitionReadUsingIndex (
PartitionOptions . getDefaultInstance (),
"Singers" ,
"SingerId" ,
KeySet . all (),
Arrays . asList ( "SingerId" , "FirstName" , "LastName" ));
for ( Partition p : partitions ) {
try ( ResultSet results = txn . execute ( p )) {
while ( results . next ()) {
long singerId = results . getLong ( 0 );
String firstName = results . getString ( 1 );
String lastName = results . getString ( 2 );
System . out . println ( "[" + singerId + "] " + firstName + " " + lastName );
}
}
}
<!--SNIPPET partition_read_using_index-->
Returns
Type
Description
List < Partition >
Exceptions
Type
Description
SpannerException
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
