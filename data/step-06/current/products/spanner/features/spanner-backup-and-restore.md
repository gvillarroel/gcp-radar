---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.338Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Backup and Restore"
feature_slug: "spanner-backup-and-restore"
latest_feature_date: "2020-04-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backup"
  - "https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview"
  - "https://docs.cloud.google.com/spanner/docs/backup/restore-backups"
keywords:
  - "demand"
  - "restore"
  - "became"
  - "backup"
  - "enabling"
  - "generally"
  - "available"
---

# Spanner Backup and Restore

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner Backup and Restore became generally available, enabling on-demand database backups and restores.

## Extended Definition

Cloud Spanner Backup and Restore became generally available, enabling on-demand database backups and restores.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- [https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview](https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview)
- [https://docs.cloud.google.com/spanner/docs/backup/restore-backups](https://docs.cloud.google.com/spanner/docs/backup/restore-backups)

## Supporting Pages

### Backups overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The total retention duration for the full backup is at most the lower of the following values: retention duration + 28 days retention duration + ( creation interval 14) Backup copy : When you copy an incremental backup, Spanner also copies all the older backups in the chain required to restore the copied backup.
- If you need to restore the backup in a different region or project for compliance or business continuity reasons, you can copy the backup to an instance in a separate region or project.
- Additionally, you can restore a copied backup in the same instance as the copied backup to support cross-region and cross-project backup and restore use cases.
- If you want to delete the instance, we recommend restoring the backup, then exporting the restored database , before deleting the backup and the instance.

### Restore overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview](https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To restore a CMEK-enabled backup, both the key and key version must be available to Spanner.
- You can use restore from a backup in the following ways: In the Google Cloud console Using the Google Cloud CLI Using the client libraries Using the REST or RPC APIs How database restoration from a backup works When you restore a Spanner database, you must specify a source backup and a new target database.
- If you need to restore from a backup in a different region or project for compliance or business continuity reasons, you can copy the backup to an instance in a separate region or project, then restore from the copied backup.
- Note the following caveats regarding the CREATING state: If you are restoring to a different instance, the restore operation belongs to the instance containing the restored database, not the instance containing the backup.

### Restore from a backup \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/restore-backups](https://docs.cloud.google.com/spanner/docs/backup/restore-backups)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Node.js // Imports the Google Cloud client library and precise date library const { Spanner } = require ( ' @google-cloud/spanner ' ); const { PreciseDate } = require ( ' @google-cloud/precise-date ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // const backupId = 'my-backup'; // Creates a client const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner Database Admin Client object const databaseAdminClient = spanner . getDatabaseAdminClient (); // Restore the database console . log ( Restoring database ${ databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ) } from backup ${ backupId } . , ); const [ restoreOperation ] = await databaseAdminClient . restoreDatabase ({ parent : databaseAdminClient . instancePath ( projectId , instanceId ), databaseId : databaseId , backup : databaseAdminClient . backupPath ( projectId , instanceId , backupId ), }); // Wait for restore to complete console . log ( 'Waiting for database restore to complete...' ); await restoreOperation . promise (); console . log ( 'Database restored from backup.' ); const [ metadata ] = await databaseAdminClient . getDatabase ({ name : databaseAdminClient . databasePath ( projectId , instanceId , databaseId ), }); console . log ( Database ${ metadata . restoreInfo . backupInfo . sourceDatabase } was restored + to ${ databaseId } from backup ${ metadata . restoreInfo . backupInfo . backup } + 'with version time ' + ${ new PreciseDate ( metadata . restoreInfo . backupInfo . versionTime , ). toISOString () } . , ); Note: The old client library interface code samples for Node.js are archived in GitHub .
- Ruby project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID of where to restore" backup id = "Your Spanner backup ID" require "google/cloud/spanner" require "google/cloud/spanner/admin/database" database admin client = Google :: Cloud :: Spanner :: Admin :: Database . database admin instance path = database admin client . instance path project : project id , instance : instance id db path = database admin client . database path project : project id , instance : instance id , database : database id backup path = database admin client . backup path project : project id , instance : instance id , backup : backup id job = database admin client . restore database parent : instance path , database id : database id , backup : backup path puts "Waiting for restore backup operation to complete" job . wait until done! database = database admin client . get database name : db path restore info = database . restore info puts "Database #{ restore info . backup info . source database } was restored to #{ database id } from backup #{ restore info . backup info . backup } with version time #{ restore info . backup info . version time } " Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example: @param string $projectId The Google Cloud project ID. @param string $instanceId The Spanner instance ID. @param string $databaseId The Spanner database ID. @param string $backupId The Spanner backup ID. / function restore backup( string $projectId, string $instanceId, string $databaseId, string $backupId ): void { $databaseAdminClient = new DatabaseAdminClient(); $backupName = DatabaseAdminClient::backupName($projectId, $instanceId, $backupId); $instanceName = DatabaseAdminClient::instanceName($projectId, $instanceId); $request = new RestoreDatabaseRequest([ 'parent' => $instanceName, 'database id' => $databaseId, 'backup' => $backupName ]); $operationResponse = $databaseAdminClient->restoreDatabase($request); $operationResponse->pollUntilComplete(); $database = $operationResponse->operationSucceeded() ? $operationResponse->getResult() : null; $restoreInfo = $database->getRestoreInfo(); $backupInfo = $restoreInfo->getBackupInfo(); $sourceDatabase = $backupInfo->getSourceDatabase(); $sourceBackup = $backupInfo->getBackup(); $versionTime = $backupInfo->getVersionTime()->getSeconds(); printf( 'Database %s restored from backup %s with version time %s' .
- Client () database admin api = spanner client . database admin api Start restoring an existing backup to a new database. request = RestoreDatabaseRequest ( parent = database admin api . instance path ( spanner client . project , instance id ), database id = new database id , backup = database admin api . backup path ( spanner client . project , instance id , backup id ), ) operation = database admin api . restore database ( request ) Wait for restore operation to complete. db = operation . result ( 1600 ) Newly created database has restore information. restore info = db . restore info print ( "Database {} restored to {} from backup {} with version time {} ." . format ( restore info . backup info . source database , new database id , restore info . backup info . backup , restore info . backup info . version time , ) ) Note: The old client library interface code samples for Python are archived in GitHub .

