---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.165Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Data Boost concurrent requests milli-operations per second per region quota"
feature_slug: "spanner-data-boost-concurrent-requests-milli-operations-per-second-per-region-quota"
latest_feature_date: "2025-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backup/manage-backups"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat"
keywords:
  - "milli"
  - "second"
  - "boost"
  - "concurrent"
  - "requests"
  - "operations"
---

# Spanner Data Boost concurrent requests milli-operations per second per region quota

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner Data Boost introduces a concurrent requests quota in milli-operations per second per region, with requests split at 1/1000 granularity for finer sharing of Data Boost resources.

## Extended Definition

Spanner Data Boost introduces a concurrent requests quota in milli-operations per second per region, with requests split at 1/1000 granularity for finer sharing of Data Boost resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)

## Supporting Pages

### Manage backups \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example: @param string $projectId The Google Cloud project ID. @param string $destInstanceId The Spanner instance ID where the copy backup will reside. @param string $destBackupId The Spanner backup ID of the new backup to be created. @param string $sourceInstanceId The Spanner instance ID of the source backup. @param string $sourceBackupId The Spanner backup ID of the source. / function copy backup( string $projectId, string $destInstanceId, string $destBackupId, string $sourceInstanceId, string $sourceBackupId ): void { $databaseAdminClient = new DatabaseAdminClient(); $destInstanceFullName = DatabaseAdminClient::instanceName($projectId, $destInstanceId); $expireTime = new Timestamp(); $expireTime->setSeconds((new \DateTime('+8 hours'))->getTimestamp()); $sourceBackupFullName = DatabaseAdminClient::backupName($projectId, $sourceInstanceId, $sourceBackupId); $request = new CopyBackupRequest([ 'source backup' => $sourceBackupFullName, 'parent' => $destInstanceFullName, 'backup id' => $destBackupId, 'expire time' => $expireTime ]); $operationResponse = $databaseAdminClient->copyBackup($request); $operationResponse->pollUntilComplete(); if ($operationResponse->operationSucceeded()) { $destBackupInfo = $operationResponse->getResult(); printf( 'Backup %s of size %d bytes was copied at %d from the source backup %s' .
- Example: @param string $projectId The Google Cloud project ID. @param string $instanceId The Spanner instance ID. @param string $databaseId The Spanner database ID. / function cancel backup(string $projectId, string $instanceId, string $databaseId): void { $databaseAdminClient = new DatabaseAdminClient(); $databaseFullName = DatabaseAdminClient::databaseName($projectId, $instanceId, $databaseId); $instanceFullName = DatabaseAdminClient::instanceName($projectId, $instanceId); $expireTime = new Timestamp(); $expireTime->setSeconds((new \DateTime('+14 days'))->getTimestamp()); $backupId = uniqid('backup-' . $databaseId . '-cancel'); $request = new CreateBackupRequest([ 'parent' => $instanceFullName, 'backup id' => $backupId, 'backup' => new Backup([ 'database' => $databaseFullName, 'expire time' => $expireTime ]) ]); $operation = $databaseAdminClient->createBackup($request); $operation->cancel(); // Cancel operations are always successful regardless of whether the operation is // still in progress or is complete. printf('Cancel backup operation complete.' .
- MILLISECONDS )); System . out . println ( String . format ( "All backups that expire before %s:" , expireTime )); listBackupsRequest = ListBackupsRequest . newBuilder (). setParent ( instanceName . toString ()) . setFilter ( String . format ( "expire time < \"%s\"" , expireTime )). build (); for ( Backup backup : dbAdminClient . listBackups ( listBackupsRequest ). iterateAll ()) { System . out . println ( backup ); } // List all backups with size greater than a certain number of bytes. listBackupsRequest = ListBackupsRequest . newBuilder (). setParent ( instanceName . toString ()) . setFilter ( "size bytes > 100" ). build (); System . out . println ( "All backups with size greater than 100 bytes:" ); for ( Backup backup : dbAdminClient . listBackups ( listBackupsRequest ). iterateAll ()) { System . out . println ( backup ); } // List all backups with a create time after a certain timestamp and that are also ready. com . google . cloud .
- ListBackupsRequest ( parent = database admin api . instance path ( spanner client . project , instance id ), filter = "size bytes > 100" , ) operations = database admin api . list backups ( request ) for backup in operations : print ( backup . name ) List backups that were created after a timestamp that are also ready. create time = datetime . utcnow () . replace ( microsecond = 0 ) - timedelta ( days = 1 ) print ( 'All backups created after " {} - {} - {} T {} : {} : {} Z" and are READY:' . format ( create time . timetuple () ) ) request = backup pb .

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Timestamps must use the following format: YYYY - [M]M - [D]D T [[H]H:[M]M:[S]S[.DDDDDD]][timezone] The supported time units for setting MAX STALENESS and EXACT STALENESS values are: s : seconds ms : milliseconds us : microseconds ns : nanoseconds You can modify the value of this property only while there is no active transaction.
- The supported time units are: s : seconds ms : milliseconds us : microseconds ns : nanoseconds The default is NULL , which means no timeout value is set.
- Example: Execute (Click to expand) This example executes two queries with the Spanner JDBC driver using Data Boost SET AUTO PARTITION MODE = true SET DATA BOOST ENABLED = true SELECT FirstName , LastName FROM Singers SELECT SingerId , Title FROM Albums For a full example, see AutoPartitionModeExample.
- Ensure that DATA BOOST ENABLED is set to true to execute the query with Data Boost : SET DATA BOOST ENABLED = true RUN PARTITIONED QUERY SELECT FirstName , LastName FROM Singers The Spanner JDBC driver internally partitions the query and executes partitions in parallel.

### "JDBC session management commands (PostgreSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Timestamps must use the following format: YYYY - [M]M - [D]D T [[H]H:[M]M:[S]S[.DDDDDD]][timezone] The supported time units for setting MAX STALENESS and EXACT STALENESS values are: s : seconds ms : milliseconds us : microseconds ns : nanoseconds You can modify the value of this property only while there is no active transaction.
- The supported time units are: s : seconds ms : milliseconds us : microseconds ns : nanoseconds The default is 0, which means no timeout.
- Example: Read-only staleness (Click to expand) The following example shows how to execute queries using a custom staleness value with the Spanner JDBC driver. -- Set the read-only staleness to MAX STALENESS 10 seconds.
- ROLLBACK ; Data Boost and partitioned query statements The partitionQuery API divides a query into smaller pieces, or partitions, and uses multiple machines to fetch the partitions in parallel.

