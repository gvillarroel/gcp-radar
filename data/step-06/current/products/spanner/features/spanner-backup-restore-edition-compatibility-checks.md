---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.156Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner backup restore edition compatibility checks"
feature_slug: "spanner-backup-restore-edition-compatibility-checks"
latest_feature_date: "2026-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview"
  - "https://docs.cloud.google.com/spanner/docs/backup/restore-backups"
  - "https://docs.cloud.google.com/spanner/docs/backup"
keywords:
  - "verifies"
  - "checks"
  - "during"
  - "compatibility"
  - "restore"
  - "edition"
  - "backup"
---

# Spanner backup restore edition compatibility checks

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner verifies edition compatibility during restore so databases using higher-tier features are restored only to same-or-higher tier instances.

## Extended Definition

Spanner verifies edition compatibility during restore so databases using higher-tier features are restored only to same-or-higher tier instances.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview](https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview)
- [https://docs.cloud.google.com/spanner/docs/backup/restore-backups](https://docs.cloud.google.com/spanner/docs/backup/restore-backups)
- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)

## Supporting Pages

### Restore overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview](https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if a backup is in an instance configured us-west3 and uses the Enterprise edition, it can be restored to any instance in the project that is also configured us-west3 and uses the Enterprise edition.
- The newly restored database must be in the same project as the backup and be in an instance with the same instance configuration and same (or higher-tier) Spanner edition as the backup.
- If you restore a backup in an Enterprise edition instance into a Standard edition instance, the restore might fail if the database uses Enterprise edition features.
- You can restore the backup to the destination instance if it uses the same or a higher-tier edition as the source backup instance.

### Restore from a backup \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/restore-backups](https://docs.cloud.google.com/spanner/docs/backup/restore-backups)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can restore the backup to the destination instance if it uses the same or a higher-tier edition as the source backup instance.
- Node.js // Imports the Google Cloud client library and precise date library const { Spanner } = require ( ' @google-cloud/spanner ' ); const { PreciseDate } = require ( ' @google-cloud/precise-date ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // const backupId = 'my-backup'; // Creates a client const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner Database Admin Client object const databaseAdminClient = spanner . getDatabaseAdminClient (); // Restore the database console . log ( Restoring database ${ databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ) } from backup ${ backupId } . , ); const [ restoreOperation ] = await databaseAdminClient . restoreDatabase ({ parent : databaseAdminClient . instancePath ( projectId , instanceId ), databaseId : databaseId , backup : databaseAdminClient . backupPath ( projectId , instanceId , backupId ), }); // Wait for restore to complete console . log ( 'Waiting for database restore to complete...' ); await restoreOperation . promise (); console . log ( 'Database restored from backup.' ); const [ metadata ] = await databaseAdminClient . getDatabase ({ name : databaseAdminClient . databasePath ( projectId , instanceId , databaseId ), }); console . log ( Database ${ metadata . restoreInfo . backupInfo . sourceDatabase } was restored + to ${ databaseId } from backup ${ metadata . restoreInfo . backupInfo . backup } + 'with version time ' + ${ new PreciseDate ( metadata . restoreInfo . backupInfo . versionTime , ). toISOString () } . , ); Note: The old client library interface code samples for Node.js are archived in GitHub .
- Ruby project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID of where to restore" backup id = "Your Spanner backup ID" require "google/cloud/spanner" require "google/cloud/spanner/admin/database" database admin client = Google :: Cloud :: Spanner :: Admin :: Database . database admin instance path = database admin client . instance path project : project id , instance : instance id db path = database admin client . database path project : project id , instance : instance id , database : database id backup path = database admin client . backup path project : project id , instance : instance id , backup : backup id job = database admin client . restore database parent : instance path , database id : database id , backup : backup path puts "Waiting for restore backup operation to complete" job . wait until done! database = database admin client . get database name : db path restore info = database . restore info puts "Database #{ restore info . backup info . source database } was restored to #{ database id } from backup #{ restore info . backup info . backup } with version time #{ restore info . backup info . version time } " Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example: @param string $projectId The Google Cloud project ID. @param string $instanceId The Spanner instance ID. @param string $databaseId The Spanner database ID. @param string $backupId The Spanner backup ID. / function restore backup( string $projectId, string $instanceId, string $databaseId, string $backupId ): void { $databaseAdminClient = new DatabaseAdminClient(); $backupName = DatabaseAdminClient::backupName($projectId, $instanceId, $backupId); $instanceName = DatabaseAdminClient::instanceName($projectId, $instanceId); $request = new RestoreDatabaseRequest([ 'parent' => $instanceName, 'database id' => $databaseId, 'backup' => $backupName ]); $operationResponse = $databaseAdminClient->restoreDatabase($request); $operationResponse->pollUntilComplete(); $database = $operationResponse->operationSucceeded() ? $operationResponse->getResult() : null; $restoreInfo = $database->getRestoreInfo(); $backupInfo = $restoreInfo->getBackupInfo(); $sourceDatabase = $backupInfo->getSourceDatabase(); $sourceBackup = $backupInfo->getBackup(); $versionTime = $backupInfo->getVersionTime()->getSeconds(); printf( 'Database %s restored from backup %s with version time %s' .

### Backups overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- The total retention duration for the full backup is at most the lower of the following values: retention duration + 28 days retention duration + ( creation interval 14) Backup copy : When you copy an incremental backup, Spanner also copies all the older backups in the chain required to restore the copied backup.
- If you need to restore the backup in a different region or project for compliance or business continuity reasons, you can copy the backup to an instance in a separate region or project.
- Additionally, you can restore a copied backup in the same instance as the copied backup to support cross-region and cross-project backup and restore use cases.
- If you want to delete the instance, we recommend restoring the backup, then exporting the restored database , before deleting the backup and the instance.

