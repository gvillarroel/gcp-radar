---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.209Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Incremental backups"
feature_slug: "incremental-backups"
latest_feature_date: "2024-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backup"
  - "https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview"
  - "https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules"
keywords:
  - "scheduled"
  - "incremental"
  - "backups"
  - "allowing"
  - "supports"
  - "users"
---

# Incremental backups

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports scheduled incremental backups, allowing users to define backup frequency and retention while storing only changes since the previous backup.

## Extended Definition

Spanner now supports scheduled incremental backups, allowing users to define backup frequency and retention while storing only changes since the previous backup.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)
- [https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules](https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules)

## Supporting Pages

### Backups overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- The total retention duration for the full backup is at most the lower of the following values: retention duration + 28 days retention duration + ( creation interval 14) Backup copy : When you copy an incremental backup, Spanner also copies all the older backups in the chain required to restore the copied backup.
- Storage costs for full and incremental backups Each Spanner backup has the following fields that offer information about storage consumption: exclusiveSizeBytes : shows the number of bytes required by the backup.
- This means that if a newer incremental backup exists, the data of all older backups in the chain cannot be deleted from the system and the freeableSizeBytes field for all older backups in the same chain is zero.
- Here are some factors that can help you make a decision about using incremental backups: Restoration : Restoring an incremental backup might take longer than restoring a full backup that contains the same data.

### Disaster recovery overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Set up a backup schedule that creates full backups or incremental backups at a frequency that meets your requirements.
- You can only create incremental backups by using a backup schedule.
- What's next Failure scenarios and resiliency with Spanner Backups overview Create backups Create and manage backup schedules PITR overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following table describes similarities and differences between using back up and restore versus using import and export: Back up and restore Import and export Data consistency Both backups and exported databases are transactionally and externally consistent.

### Create and manage backup schedules \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules](https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GOOGLE DEFAULT ENCRYPTION ) . build (); final BackupSchedule backupSchedule = BackupSchedule . newBuilder () . setIncrementalBackupSpec ( IncrementalBackupSpec . newBuilder (). build ()) . setRetentionDuration ( Duration . newBuilder (). setSeconds ( 3600 24 ). build ()) . setSpec ( BackupScheduleSpec . newBuilder () . setCronSpec ( CrontabSpec . newBuilder (). setText ( "30 12 " ). build ()) . build ()) . setEncryptionConfig ( encryptionConfig ) . build (); try ( DatabaseAdminClient databaseAdminClient = DatabaseAdminClient . create ()) { DatabaseName databaseName = DatabaseName . of ( projectId , instanceId , databaseId ); final BackupSchedule createdBackupSchedule = databaseAdminClient . createBackupSchedule ( CreateBackupScheduleRequest . newBuilder () . setParent ( databaseName . toString ()) . setBackupScheduleId ( backupScheduleId ) . setBackupSchedule ( backupSchedule ) . build ()); System . out . println ( String . format ( "Created incremental backup schedule: %s\n%s" , createdBackupSchedule . getName (), createdBackupSchedule . toString ())); } } } Node.js To create a full backup schedule, see the following sample code: // Import the Google Cloud client library for Spanner. const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance-id'; // const databaseId = 'my-database-id'; // const scheduleId = 'my-schedule-id'; // Create a Spanner database admin client. const spanner = new Spanner ({ projectId }); const client = spanner . getDatabaseAdminClient (); try { // Create a schedule to create full backups daily at 12:30 AM, using the // database's encryption config, and retained for 24 hours. const [ response ] = await client . createBackupSchedule ({ parent : client . databasePath ( projectId , instanceId , databaseId ), backupScheduleId : scheduleId , backupSchedule : { spec : { cronSpec : { text : '30 12 ' , }, }, retentionDuration : { seconds : 86400 , }, encryptionConfig : { encryptionType : ' USE DATABASE ENCRYPTION ' , }, fullBackupSpec : {}, }, }); console . log ( 'Created full backup schedule:' , response ); } catch ( err ) { console . error ( 'ERROR:' , err ); } To create an incremental backup schedule, see the following sample code: // Import the Google Cloud client library for Spanner. const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance-id'; // const databaseId = 'my-database-id'; // const scheduleId = 'my-schedule-id'; // Create a Spanner database admin client. const spanner = new Spanner ({ projectId }); const client = spanner . getDatabaseAdminClient (); try { // Create a schedule to create incremental backups daily at 12:30 AM, // using Google-managed encryption, and retained for 24 hours. const [ response ] = await client . createBackupSchedule ({ parent : client . databasePath ( projectId , instanceId , databaseId ), backupScheduleId : scheduleId , backupSchedule : { spec : { cronSpec : { text : '30 12 ' , }, }, retentionDuration : { seconds : 86400 , }, encryptionConfig : { encryptionType : 'GOOGLE DEFAULT ENCRYPTION' , }, incrementalBackupSpec : {}, }, }); console . log ( 'Created incremental backup schedule:' , response ); } catch ( err ) { console . error ( 'ERROR:' , err ); } PHP To create a full backup schedule, see the following sample code: use Google\Cloud\Spanner\Admin\Database\V1\Client\DatabaseAdminClient; use Google\Cloud\Spanner\Admin\Database\V1\CreateBackupScheduleRequest; use Google\Cloud\Spanner\Admin\Database\V1\CreateBackupEncryptionConfig; use Google\Cloud\Spanner\Admin\Database\V1\CreateBackupEncryptionConfig\EncryptionType; use Google\Cloud\Spanner\Admin\Database\V1\BackupSchedule; use Google\Cloud\Spanner\Admin\Database\V1\FullBackupSpec; use Google\Cloud\Spanner\Admin\Database\V1\BackupScheduleSpec; use Google\Cloud\Spanner\Admin\Database\V1\CrontabSpec; use Google\Protobuf\Duration; / Create a backup schedule.
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner backup-schedules describe SCHEDULE ID \ --project = PROJECT ID \ --instance = INSTANCE ID \ --database = DATABASE ID Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner backup-schedules describe SCHEDULE ID --project = PROJECT ID --instance = INSTANCE ID --database = DATABASE ID Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner backup-schedules describe SCHEDULE ID ^ --project = PROJECT ID ^ --instance = INSTANCE ID ^ --database = DATABASE ID You should receive a response similar to the following: { encryptionConfig: encryptionType: USE DATABASE ENCRYPTION incrementalBackupSpec: {} name: projects/my-project/instances/my-instance/databases/my-database/backupSchedules/my-schedule retentionDuration: 2592000s spec: cronSpec: creationWindow: 14400s text: 0 /4 timeZone: UTC updateTime: '2024-09-13T10:24:18.754839Z' } REST v1 Before using any of the request data, make the following replacements: PROJECT ID : the project ID.
- CreateBackupSchedule ( request ); if ( ! created backup schedule ) { throw std :: move ( created backup schedule ). status (); } std :: cout << "Backup schedule " << created backup schedule - > name () << " created at " << google :: cloud :: spanner :: MakeTimestamp ( created backup schedule - > update time ()); } To create an incremental backup schedule, see the following sample code: void CreateIncrementalBackupSchedule ( google :: cloud :: spanner admin :: DatabaseAdminClient client , std :: string const & project id , std :: string const & instance id , std :: string const & database id , std :: string const & backup schedule id ) { google :: spanner :: admin :: database :: v1 :: BackupSchedule backup schedule ; backup schedule . mutable incremental backup spec () = {}; backup schedule . mutable spec () - > mutable cron spec () - > set text ( "30 12 " ); backup schedule . mutable retention duration () - > set seconds ( 3600 24 ); google :: spanner :: admin :: database :: v1 :: CreateBackupEncryptionConfig encryption config ; encryption config . set encryption type ( google :: spanner :: admin :: database :: v1 :: CreateBackupEncryptionConfig :: GOOGLE DEFAULT ENCRYPTION ); backup schedule . mutable encryption config () = std :: move ( encryption config ); google :: cloud :: spanner :: Database db ( project id , instance id , database id ); google :: spanner :: admin :: database :: v1 :: CreateBackupScheduleRequest request ; request . set parent ( db .
- WriteLine ( $"Created incremental backup schedule: {response}" ); return response ; } } C++ To create a full backup schedule, see the following sample code: void CreateFullBackupSchedule ( google :: cloud :: spanner admin :: DatabaseAdminClient client , std :: string const & project id , std :: string const & instance id , std :: string const & database id , std :: string const & backup schedule id ) { google :: spanner :: admin :: database :: v1 :: BackupSchedule backup schedule ; backup schedule . mutable full backup spec () = {}; backup schedule . mutable spec () - > mutable cron spec () - > set text ( "30 12 " ); backup schedule . mutable retention duration () - > set seconds ( 3600 24 ); google :: spanner :: admin :: database :: v1 :: CreateBackupEncryptionConfig encryption config ; encryption config . set encryption type ( google :: spanner :: admin :: database :: v1 :: CreateBackupEncryptionConfig :: USE DATABASE ENCRYPTION ); backup schedule . mutable encryption config () = std :: move ( encryption config ); google :: cloud :: spanner :: Database db ( project id , instance id , database id ); google :: spanner :: admin :: database :: v1 :: CreateBackupScheduleRequest request ; request . set parent ( db .

