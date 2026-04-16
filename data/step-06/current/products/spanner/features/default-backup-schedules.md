---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.204Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Default backup schedules"
feature_slug: "default-backup-schedules"
latest_feature_date: "2024-11-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backup"
  - "https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListBackupSchedulesAsyncPager"
keywords:
  - "schedules"
  - "enabled"
  - "automatically"
  - "backup"
  - "default"
  - "supports"
---

# Default backup schedules

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports default backup schedules that are automatically enabled for new instances and create full backups every 24 hours with 7-day retention for each new database, with options to enable, disable, edit, or delete schedules.

## Extended Definition

Spanner now supports default backup schedules that are automatically enabled for new instances and create full backups every 24 hours with 7-day retention for each new database, with options to enable, disable, edit, or delete schedules.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- [https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules](https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListBackupSchedulesAsyncPager](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListBackupSchedulesAsyncPager)

## Supporting Pages

### Backups overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Default backup schedules are automatically enabled for all new instances.
- Default backup schedules When you create a new Spanner instance, you can specify if you want Spanner to create a default backup schedule for every new database in the instance.
- You can enable or disable default backup schedules in an instance when creating the instance or by editing the instance later.
- For instructions on enabling or disabling default backup schedules, see Edit the default backup schedule type .

### Create and manage backup schedules \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules](https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GOOGLE DEFAULT ENCRYPTION ) . build (); final BackupSchedule backupSchedule = BackupSchedule . newBuilder () . setIncrementalBackupSpec ( IncrementalBackupSpec . newBuilder (). build ()) . setRetentionDuration ( Duration . newBuilder (). setSeconds ( 3600 24 ). build ()) . setSpec ( BackupScheduleSpec . newBuilder () . setCronSpec ( CrontabSpec . newBuilder (). setText ( "30 12 " ). build ()) . build ()) . setEncryptionConfig ( encryptionConfig ) . build (); try ( DatabaseAdminClient databaseAdminClient = DatabaseAdminClient . create ()) { DatabaseName databaseName = DatabaseName . of ( projectId , instanceId , databaseId ); final BackupSchedule createdBackupSchedule = databaseAdminClient . createBackupSchedule ( CreateBackupScheduleRequest . newBuilder () . setParent ( databaseName . toString ()) . setBackupScheduleId ( backupScheduleId ) . setBackupSchedule ( backupSchedule ) . build ()); System . out . println ( String . format ( "Created incremental backup schedule: %s\n%s" , createdBackupSchedule . getName (), createdBackupSchedule . toString ())); } } } Node.js To create a full backup schedule, see the following sample code: // Import the Google Cloud client library for Spanner. const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance-id'; // const databaseId = 'my-database-id'; // const scheduleId = 'my-schedule-id'; // Create a Spanner database admin client. const spanner = new Spanner ({ projectId }); const client = spanner . getDatabaseAdminClient (); try { // Create a schedule to create full backups daily at 12:30 AM, using the // database's encryption config, and retained for 24 hours. const [ response ] = await client . createBackupSchedule ({ parent : client . databasePath ( projectId , instanceId , databaseId ), backupScheduleId : scheduleId , backupSchedule : { spec : { cronSpec : { text : '30 12 ' , }, }, retentionDuration : { seconds : 86400 , }, encryptionConfig : { encryptionType : ' USE DATABASE ENCRYPTION ' , }, fullBackupSpec : {}, }, }); console . log ( 'Created full backup schedule:' , response ); } catch ( err ) { console . error ( 'ERROR:' , err ); } To create an incremental backup schedule, see the following sample code: // Import the Google Cloud client library for Spanner. const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance-id'; // const databaseId = 'my-database-id'; // const scheduleId = 'my-schedule-id'; // Create a Spanner database admin client. const spanner = new Spanner ({ projectId }); const client = spanner . getDatabaseAdminClient (); try { // Create a schedule to create incremental backups daily at 12:30 AM, // using Google-managed encryption, and retained for 24 hours. const [ response ] = await client . createBackupSchedule ({ parent : client . databasePath ( projectId , instanceId , databaseId ), backupScheduleId : scheduleId , backupSchedule : { spec : { cronSpec : { text : '30 12 ' , }, }, retentionDuration : { seconds : 86400 , }, encryptionConfig : { encryptionType : 'GOOGLE DEFAULT ENCRYPTION' , }, incrementalBackupSpec : {}, }, }); console . log ( 'Created incremental backup schedule:' , response ); } catch ( err ) { console . error ( 'ERROR:' , err ); } PHP To create a full backup schedule, see the following sample code: use Google\Cloud\Spanner\Admin\Database\V1\Client\DatabaseAdminClient; use Google\Cloud\Spanner\Admin\Database\V1\CreateBackupScheduleRequest; use Google\Cloud\Spanner\Admin\Database\V1\CreateBackupEncryptionConfig; use Google\Cloud\Spanner\Admin\Database\V1\CreateBackupEncryptionConfig\EncryptionType; use Google\Cloud\Spanner\Admin\Database\V1\BackupSchedule; use Google\Cloud\Spanner\Admin\Database\V1\FullBackupSpec; use Google\Cloud\Spanner\Admin\Database\V1\BackupScheduleSpec; use Google\Cloud\Spanner\Admin\Database\V1\CrontabSpec; use Google\Protobuf\Duration; / Create a backup schedule.
- HTTP method and URL: PATCH https://spanner.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /databases/ DATABASE ID /backupSchedules/ SCHEDULE ID ?updateMask=retention duration,encryption config,spec.cron spec.text Request JSON body: { "retentionDuration": " RETENTION DURATION ", "spec": { "cronSpec": { "text": "0 2 " } "encryptionConfig": { "encryptionType": " ENCRYPTION TYPE " }, }, } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://spanner.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /databases/ DATABASE ID /backupSchedules?backup schedule id= SCHEDULE ID Request JSON body: { "retentionDuration": " RETENTION DURATION ", "spec": { "cronSpec": { "text": "0 2 " } }, "encryptionConfig": { "encryptionType": " ENCRYPTION TYPE " }, " BACKUP TYPE ": {} } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://spanner.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /databases/ DATABASE ID /backupSchedules/ SCHEDULE ID :setIamPolicy?alt=json Request JSON body: { "policy": { "version": 1, "etag": "BwYi8ypICC0=", "bindings": [ { "role": "roles/editor", "members": [ "user:test@gmail.com" ] } ] } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Class ListBackupSchedulesAsyncPager (3.63.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListBackupSchedulesAsyncPager](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListBackupSchedulesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 143
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.spanner admin database v1.types.ListBackupSchedulesRequest The initial request object. response google.cloud.spanner admin database v1.types.ListBackupSchedulesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Version latest keyboard arrow down 3.63.0 (latest) 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.1 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.1 3.39.0 3.38.0 3.37.0 3.36.0 3.35.1 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.0 3.23.0 3.22.2 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.1 3.14.1 3.13.0 3.12.1 3.11.1 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.1.1 2.0.0 1.19.3 1.18.0 1.17.1 1.16.0 1.15.1 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 ListBackupSchedulesAsyncPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListBackupSchedulesAsyncPager (3.63.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional ListBackupSchedules requests and continue to iterate through the backup schedules field on the corresponding responses.

