---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.263Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner batch write"
feature_slug: "spanner-batch-write"
latest_feature_date: "2023-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/batch-write"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
keywords:
  - "mutations"
  - "committing"
  - "multiple"
  - "batch"
  - "write"
  - "preview"
  - "allows"
---

# Spanner batch write

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner batch write (Preview) allows committing multiple mutations non-atomically in a single low-latency request.

## Extended Definition

Spanner batch write (Preview) allows committing multiple mutations non-atomically in a single low-latency request.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/batch-write](https://docs.cloud.google.com/spanner/docs/batch-write)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)

## Supporting Pages

### Modify data using batch write \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/batch-write](https://docs.cloud.google.com/spanner/docs/batch-write)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example: @param string $projectId The Google Cloud project ID. @param string $instanceId The Spanner instance ID. @param string $databaseId The Spanner database ID. / function batch write(string $projectId, string $instanceId, string $databaseId): void { $spanner = new SpannerClient(['projectId' => $projectId]); $database = $spanner->instance($instanceId)->database($databaseId); // Create Mutation Groups // All mutations within a single group are applied atomically. // Mutations across groups are applied non-atomically. // Group 1: Single mutation $mutationGroup1 = $database->mutationGroup(); $mutationGroup1->insertOrUpdate('Singers', [ 'SingerId' => 16, 'FirstName' => 'Scarlet', 'LastName' => 'Terry' ]); // Group 2: Multiple mutations $mutationGroup2 = $database->mutationGroup(); $mutationGroup2->insertOrUpdateBatch('Singers', [ ['SingerId' => 17, 'FirstName' => 'Marc'], ['SingerId' => 18, 'FirstName' => 'Catalina', 'LastName' => 'Smith'] ]); $mutationGroup2->insertOrUpdateBatch('Albums', [ ['SingerId' => 17, 'AlbumId' => 1, 'AlbumTitle' => 'Total Junk'], ['SingerId' => 18, 'AlbumId' => 2, 'AlbumTitle' => 'Go, Go, Go'] ]); // Call batchWrite on the high-level Database client. // Equivalent to batchWriteAtLeastOnce in other languages. $responses = $database->batchWrite([$mutationGroup1, $mutationGroup2], [ 'requestOptions' => ['transactionTag' => 'batch-write-tag'] ]); // Check the response code of each response to determine whether the mutation group(s) were applied successfully. // $responses is a Generator yielding V1\BatchWriteResponse items. // Check the response code of each response to determine whether the mutation group(s) were applied successfully. // $responses is a Generator yielding response arrays. foreach ($responses as $response) { $status = $response['status']; $indexes = implode(', ', $response['indexes']); if ($status['code'] === 0) { $timestamp = $response['commitTimestamp'] ?? 'Unknown'; printf('Mutation group indexes [%s] have been applied with commit timestamp %s' .
- Spanner doesn't need to wait for all mutations to be applied before sending a response, which means that batch write allows for partial failure.
- All mutations in a group are applied atomically. @param project id [String] The ID of the Google Cloud project. @param instance id [String] The ID of the spanner instance. @param database id [String] The ID of the database. def spanner batch write project id :, instance id :, database id : spanner = Google :: Cloud :: Spanner . new project : project id client = spanner . client instance id , database id results = client . batch write do b First mutation group b . mutation group do mg mg . upsert "Singers" , [ { SingerId : 16 , FirstName : "Scarlet" , LastName : "Terry" } ] end Second mutation group b . mutation group do mg mg . upsert "Singers" , [ { SingerId : 17 , FirstName : "Marc" }, { SingerId : 18 , FirstName : "Catalina" , LastName : "Smith" } ] mg . upsert "Albums" , [ { SingerId : 17 , AlbumId : 1 , AlbumTitle : "Total Junk" }, { SingerId : 18 , AlbumId : 2 , AlbumTitle : "Go, Go, Go" } ] end end results . each do response if response . ok? puts "Mutation group indexes applied: #{ response . indexes } " else puts "Mutation group failed to apply: #{ response . indexes } " puts "Error: #{ response . status . message } " end end end What's next Learn more about Spanner transactions .
- Client () instance = spanner client . instance ( instance id ) database = instance . database ( database id ) with database . mutation groups () as groups : group1 = groups . group () group1 . insert or update ( table = "Singers" , columns = ( "SingerId" , "FirstName" , "LastName" ), values = [ ( 16 , "Scarlet" , "Terry" ), ], ) group2 = groups . group () group2 . insert or update ( table = "Singers" , columns = ( "SingerId" , "FirstName" , "LastName" ), values = [ ( 17 , "Marc" , "" ), ( 18 , "Catalina" , "Smith" ), ], ) group2 . insert or update ( table = "Albums" , columns = ( "SingerId" , "AlbumId" , "AlbumTitle" ), values = [ ( 17 , 1 , "Total Junk" ), ( 18 , 2 , "Go, Go, Go" ), ], ) for response in groups . batch write (): if response . status . code == OK : print ( "Mutation group indexes {} have been applied with commit timestamp {} " . format ( response . indexes , response . commit timestamp ) ) else : print ( "Mutation group indexes {} could not be applied with error {} " . format ( response . indexes , response . status ) ) Ruby require "google/cloud/spanner" This is a snippet for showcasing how to apply a batch of mutations groups.

### "Package com.google.cloud.spanner (6.111.1) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner)
- Source ID: `site-java-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Batch Read Only Transaction BatchReadOnlyTransaction can be configured to read at timestamps in the past and allows for exporting arbitrarily large amounts of data from Cloud Spanner databases.
- Write Builder Builder for Op#INSERT , Op#INSERT OR UPDATE , Op#UPDATE , and Op#REPLACE mutations. com. google. cloud. spanner.
- Partition Options Defines the configuration for the number and size of partitions returned from BatchReadOnlyTransaction#partitionRead , BatchReadOnlyTransaction#partitionReadUsingIndex and BatchReadOnlyTransaction#partitionQuery Note: these options may not be honored based on the other parameters in the request. com. google. cloud. spanner.
- Dml Batch Update Count Verification Failed Exception Exception thrown by a Connection when an automatic DML batch detects that one or more of the update counts that it returned during the buffering of DML statements does not match with the actual update counts that were returned after execution. com. google. cloud. spanner.

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- BEGIN ; SET TRANSACTION READ WRITE ; INSERT INTO T ( id , col a , col b ) VALUES ( 1 , 100 , 1 ); COMMIT ; Batch statements The following statements manage batches of DDL statements and send those batches to Spanner.
- Performing a ROLLBACK of a read-write transaction clears any buffered mutations, rolls back the transaction on Spanner, and releases any locks the transaction held.
- Committing a read-write transaction makes all updates of this transaction visible to other transactions and releases all of the transaction's locks on Spanner.
- Executing multiple DDL statements as one batch is typically faster than running the statements separately.

