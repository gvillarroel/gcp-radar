---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.288Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner console copy backup operation monitoring"
feature_slug: "cloud-spanner-console-copy-backup-operation-monitoring"
latest_feature_date: "2023-02-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backup/manage-backups"
  - "https://docs.cloud.google.com/spanner/docs/backup"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CopyBackupMetadata"
keywords:
  - "operation"
  - "shows"
  - "copy"
  - "monitoring"
  - "backup"
  - "console"
---

# Cloud Spanner console copy backup operation monitoring

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner now shows the status and progress of copy backup long-running operations in the Google Cloud console for seven days after initiation.

## Extended Definition

Cloud Spanner now shows the status and progress of copy backup long-running operations in the Google Cloud console for seven days after initiation.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups)
- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CopyBackupMetadata](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CopyBackupMetadata)

## Supporting Pages

### Manage backups \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Node.js / TODO(developer): Uncomment these variables before running the sample. / // const instanceId = 'my-instance'; // const backupId = 'my-backup', // const sourceBackupPath = 'projects/my-project-id/instances/my-source-instance/backups/my-source-backup', // const projectId = 'my-project-id'; // Imports the Google Cloud Spanner client library const { Spanner } = require ( ' @google-cloud/spanner ' ); const { PreciseDate } = require ( ' @google-cloud/precise-date ' ); // Creates a client const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner Database Admin Client object const databaseAdminClient = spanner . getDatabaseAdminClient (); async function spannerCopyBackup () { // Expire copy backup 14 days in the future const expireTime = Spanner . timestamp ( Date . now () + 1000 60 60 24 14 , ). toStruct (); // Copy the source backup try { console . log ( Creating copy of the source backup ${ sourceBackupPath } . ); const [ operation ] = await databaseAdminClient . copyBackup ({ parent : databaseAdminClient . instancePath ( projectId , instanceId ), sourceBackup : sourceBackupPath , backupId : backupId , expireTime : expireTime , }); console . log ( Waiting for backup copy ${ databaseAdminClient . backupPath ( projectId , instanceId , backupId , ) } to complete... , ); await operation . promise (); // Verify the copy backup is ready const [ copyBackup ] = await databaseAdminClient . getBackup ({ name : databaseAdminClient . backupPath ( projectId , instanceId , backupId ), }); if ( copyBackup . state === 'READY' ) { console . log ( Backup copy ${ copyBackup . name } of size + ${ copyBackup . sizeBytes } bytes was created at + ${ new PreciseDate ( copyBackup . createTime ). toISOString () } + 'with version time ' + ${ new PreciseDate ( copyBackup . versionTime ). toISOString () } , ); } else { console . error ( 'ERROR: Copy of backup is not ready.' ); } } catch ( err ) { console . error ( 'ERROR:' , err ); } } spannerCopyBackup (); Note: The old client library interface code samples for Node.js are archived in GitHub .
- Ruby To list all the create backup operations: project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" require "google/cloud/spanner" require "google/cloud/spanner/admin/database" database admin client = Google :: Cloud :: Spanner :: Admin :: Database . database admin instance path = database admin client . instance path project : project id , instance : instance id jobs = database admin client . list backup operations parent : instance path , filter : "metadata.@type:type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata" jobs . each do job if job . error? puts job . error else puts "Backup #{ job . results . name } on database #{ database id } is #{ job . metadata . progress . progress percent } % complete" end end To list all the copy backup operations: project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" backup id = "You Spanner backup ID" require "google/cloud/spanner" require "google/cloud/spanner/admin/database" database admin client = Google :: Cloud :: Spanner :: Admin :: Database . database admin instance path = database admin client . instance path project : project id , instance : instance id filter = "(metadata.@type:type.googleapis.com/google.spanner.admin.database.v1.CopyBackupMetadata) AND (metadata.source backup: #{ backup id } )" jobs = database admin client . list backup operations parent : instance path , filter : filter jobs . each do job if job . error? puts job . error else puts "Backup #{ job . results . name } on source backup #{ backup id } is #{ job . metadata . progress . progress percent } % complete" end end Cancel a backup operation Console The Google Cloud console doesn't support canceling a backup operation.
- Ruby project id = "Your Google Cloud project ID" instance id = "The ID of the destination instance that will contain the backup copy" backup id = "The ID of the backup copy" source backup = "The source backup to be copied" require "google/cloud/spanner" require "google/cloud/spanner/admin/database" database admin client = Google :: Cloud :: Spanner :: Admin :: Database . database admin instance path = database admin client . instance path project : project id , instance : instance id backup path = database admin client . backup path project : project id , instance : instance id , backup : backup id source backup = database admin client . backup path project : project id , instance : instance id , backup : source backup id expire time = Time . now + ( 14 24 3600 ) # 14 days from now job = database admin client . copy backup parent : instance path , backup id : backup id , source backup : source backup , expire time : expire time puts "Copy backup operation in progress" job . wait until done! backup = database admin client . get backup name : backup path puts "Backup #{ backup id } of size #{ backup . size bytes } bytes was copied at #{ backup . create time } from #{ source backup } for version #{ backup . version time } " Check the operation progress Console In the Google Cloud console, go to the Spanner Instances page.
- CreateBackupMetadata . decode ( backupOperation . metadata . value , ); console . log ( Backup ${ metadata . name } on database ${ metadata . database } is + ${ metadata . progress . progressPercent } % complete. , ); }); } catch ( err ) { console . error ( 'ERROR:' , err ); } // List copy backup operations try { console . log ( '(metadata.@type:type.googleapis.com/google.spanner.admin.database.v1.CopyBackupMetadata) ' + AND (metadata.source backup: ${ backupId } ) , ); const [ backupOperations ] = await databaseAdminClient . listBackupOperations ({ parent : databaseAdminClient . instancePath ( projectId , instanceId ), filter : '(metadata.@type:type.googleapis.com/google.spanner.admin.database.v1.CopyBackupMetadata) ' + AND (metadata.source backup: ${ backupId } ) , }); console . log ( 'Copy Backup Operations:' ); backupOperations . forEach ( backupOperation = > { const metadata = protos . google . spanner . admin . database . v1 .

### "Class CopyBackupMetadata (3.63.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CopyBackupMetadata](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CopyBackupMetadata)
- Source ID: `site-python-reference`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Version latest keyboard arrow down 3.63.0 (latest) 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.1 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.1 3.39.0 3.38.0 3.37.0 3.36.0 3.35.1 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.0 3.23.0 3.22.2 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.1 3.14.1 3.13.0 3.12.1 3.11.1 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.1.1 2.0.0 1.19.3 1.18.0 1.17.1 1.16.0 1.15.1 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 CopyBackupMetadata ( mapping = None , , ignore unknown fields = False , kwargs ) Metadata type for the operation returned by CopyBackup][google.spanner.admin.database.v1.DatabaseAdmin.CopyBackup] .
- Values are of the form projects/ . progress google.cloud.spanner admin database v1.types.OperationProgress The progress of the CopyBackup][google.spanner.admin.database.v1.DatabaseAdmin.CopyBackup] operation. cancel time google.protobuf.timestamp pb2.Timestamp The time at which cancellation of CopyBackup operation was received.
- Attributes Name Description name str The name of the backup being created through the copy operation.
- Home Documentation Developer tools Python Client libraries Send feedback Class CopyBackupMetadata (3.63.0) Stay organized with collections Save and categorize content based on your preferences.

### Backups overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Spanner doesn't duplicate previously copied backups within the chain during subsequent copy operations.
- The following table shows possible storage costs for these backup schedules: Day Full schedule backup size Incremental schedule backup size 1 100 GB 100 GB 2 110 GB 10 GB 3 120 GB 10 GB 4 130 GB 10 GB 5 140 GB 10 GB Over 5 days, the full backup schedule uses 600 GB of storage, while the incremental backup schedule uses about 140 GB of storage.
- The total retention duration for the full backup is at most the lower of the following values: retention duration + 28 days retention duration + ( creation interval 14) Backup copy : When you copy an incremental backup, Spanner also copies all the older backups in the chain required to restore the copied backup.
- This size represents the billable size of the backup. freeableSizeBytes : shows the number of bytes that are released if you delete the backup. oldestVersionTime : shows the versionTime of the oldest full backup in the chain, even if that backup has expired.

