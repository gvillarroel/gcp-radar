---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.170Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner CLI"
feature_slug: "spanner-cli"
latest_feature_date: "2025-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/batch-write"
  - "https://docs.cloud.google.com/spanner/docs/psql-commands"
  - "https://docs.cloud.google.com/spanner/docs/backup/manage-backups"
keywords:
  - "interface"
  - "command"
  - "line"
  - "generally"
  - "available"
---

# Spanner CLI

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

The Spanner command-line interface is now generally available and can open interactive sessions or run SQL from shell commands and input files; Provides an interactive Spanner shell integrated into the Google Cloud CLI for running interactive sessions and automating SQL execution from the shell or input files.

## Extended Definition

The Spanner command-line interface is now generally available and can open interactive sessions or run SQL from shell commands and input files; Provides an interactive Spanner shell integrated into the Google Cloud CLI for running interactive sessions and automating SQL execution from the shell or input files.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/batch-write](https://docs.cloud.google.com/spanner/docs/batch-write)
- [https://docs.cloud.google.com/spanner/docs/psql-commands](https://docs.cloud.google.com/spanner/docs/psql-commands)
- [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups)

## Supporting Pages

### psql command-line tool \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/psql-commands](https://docs.cloud.google.com/spanner/docs/psql-commands)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases Spanner Reference Send feedback psql command-line tool Stay organized with collections Save and categorize content based on your preferences. psql is the command-line front end to PostgreSQL.
- Meta-commands The PostgreSQL interface supports the following psql meta-commands categories: Note: Enter the \? command to see the commands under each category.
- This page describes the psql commands that the PostgreSQL interface for Spanner supports.
- Examples DML The following example shows how to submit a batch of INSERT statements. psql - h localhost - p 5432 - c "INSERT INTO users (id, age, firstname) VALUES (1, 25, 'Alex'); \ INSERT INTO users (id, age, firstname) VALUES (2, 31, 'Dana'); \ INSERT INTO users (id, age, firstname) VALUES (3, 54, 'Izumi');" The next example shows how to execute the SQL statements in the file insert contacts.sql . psql - h localhost - c "$(cat contacts insert.sql)" DDL This example submits a batch of ALTER TABLE statements. psql - h localhost - p 5432 test - db - c "ALTER TABLE users ADD col1 integer; \ ALTER TABLE users ADD col2 text; ALTER TABLE users ADD col3 float8;" COPY command for importing data Use the COPY FROM STDIN command to import data from a text or CSV file into a PostgreSQL-dialect database.

### Manage backups \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Node.js // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // const backupId = 'my-backup'; // Creates a client const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner Database Admin Client object const databaseAdminClient = spanner . getDatabaseAdminClient (); try { // Get the parent(instance) of the database const parent = databaseAdminClient . instancePath ( projectId , instanceId ); // List all backups const [ allBackups ] = await databaseAdminClient . listBackups ({ parent : parent , }); console . log ( 'All backups:' ); allBackups . forEach ( backups = > { if ( backups . name ) { const backup = backups . name ; const delimiter = 'projects/' + projectId + '/instances/' + instanceId + '/backups/' ; const result = backup . substring ( delimiter . length ); console . log ( result ); } }); // List backups filtered by backup name const [ backupsByName ] = await databaseAdminClient . listBackups ({ parent : parent , filter : Name: ${ backupId } , }); console . log ( 'Backups matching backup name:' ); backupsByName . forEach ( backup = > { if ( backup . name ) { const backupName = backup . name ; const delimiter = 'projects/' + projectId + '/instances/' + instanceId + '/backups/' ; const result = backupName . substring ( delimiter . length ); console . log ( result ); } }); // List backups expiring within 30 days const expireTime = new Date (); expireTime . setDate ( expireTime . getDate () + 30 ); const [ backupsByExpiry ] = await databaseAdminClient . listBackups ({ parent : parent , filter : expire time < " ${ expireTime . toISOString () } " , }); console . log ( 'Backups expiring within 30 days:' ); backupsByExpiry . forEach ( backup = > { if ( backup . name ) { const backupName = backup . name ; const delimiter = 'projects/' + projectId + '/instances/' + instanceId + '/backups/' ; const result = backupName . substring ( delimiter . length ); console . log ( result ); } }); // List backups filtered by database name const [ backupsByDbName ] = await databaseAdminClient . listBackups ({ parent : parent , filter : Database: ${ databaseId } , }); console . log ( 'Backups matching database name:' ); backupsByDbName . forEach ( backup = > { if ( backup . name ) { const backupName = backup . name ; const delimiter = 'projects/' + projectId + '/instances/' + instanceId + '/backups/' ; const result = backupName . substring ( delimiter . length ); console . log ( result ); } }); // List backups filtered by backup size const [ backupsBySize ] = await databaseAdminClient . listBackups ({ parent : parent , filter : 'size bytes > 100' , }); console . log ( 'Backups filtered by size:' ); backupsBySize . forEach ( backup = > { if ( backup . name ) { const backupName = backup . name ; const delimiter = 'projects/' + projectId + '/instances/' + instanceId + '/backups/' ; const result = backupName . substring ( delimiter . length ); console . log ( result ); } }); // List backups that are ready that were created after a certain time const createTime = new Date (); createTime . setDate ( createTime . getDate () - 1 ); const [ backupsByCreateTime ] = await databaseAdminClient . listBackups ({ parent : parent , filter : (state:READY) AND (create time >= " ${ createTime . toISOString () } ") , }); console . log ( 'Ready backups filtered by create time:' ); backupsByCreateTime . forEach ( backup = > { if ( backup . name ) { const backupName = backup . name ; const delimiter = 'projects/' + projectId + '/instances/' + instanceId + '/backups/' ; const result = backupName . substring ( delimiter . length ); console . log ( result ); } }); // List backups using pagination console . log ( 'Get backups paginated:' ); const [ backups ] = await databaseAdminClient . listBackups ({ parent : parent , pageSize : 3 , }); backups . forEach ( backup = > { if ( backup . name ) { const backupName = backup . name ; const delimiter = 'projects/' + projectId + '/instances/' + instanceId + '/backups/' ; const result = backupName . substring ( delimiter . length ); console . log ( result ); } }); } catch ( err ) { console . error ( 'ERROR:' , err ); } Note: The old client library interface code samples for Node.js are archived in GitHub .
- Node.js // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // const backupId = 'my-backup'; // Creates a client const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner Database Admin Client object const databaseAdminClient = spanner . getDatabaseAdminClient (); // Delete the backup console . log ( Deleting backup ${ backupId } .` ); await databaseAdminClient . deleteBackup ({ name : databaseAdminClient . backupPath ( projectId , instanceId , backupId ), }); console . log ( 'Backup deleted.' ); // Verify backup no longer exists try { await databaseAdminClient . getBackup ({ name : databaseAdminClient . backupPath ( projectId , instanceId , backupId ), }); console . error ( 'Error: backup still exists.' ); } catch ( err ) { console . log ( 'Backup deleted.' ); } Note: The old client library interface code samples for Node.js are archived in GitHub .
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner backups copy \ --source-backup = projects/ SOURCE PROJECT ID /instances/ SOURCE INSTANCE ID /backups/ SOURCE BACKUP NAME \ --destination-backup = projects/ DESTINATION PROJECT ID /instances/ DESTINATION INSTANCE ID /backups/ DESTINATION BACKUP NAME \ --expiration-date = EXPIRATION DATE \ --encryption-type = ENCRYPTION TYPE Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner backups copy --source-backup = projects/ SOURCE PROJECT ID /instances/ SOURCE INSTANCE ID /backups/ SOURCE BACKUP NAME --destination-backup = projects/ DESTINATION PROJECT ID /instances/ DESTINATION INSTANCE ID /backups/ DESTINATION BACKUP NAME --expiration-date = EXPIRATION DATE --encryption-type = ENCRYPTION TYPE Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner backups copy ^ --source-backup = projects/ SOURCE PROJECT ID /instances/ SOURCE INSTANCE ID /backups/ SOURCE BACKUP NAME ^ --destination-backup = projects/ DESTINATION PROJECT ID /instances/ DESTINATION INSTANCE ID /backups/ DESTINATION BACKUP NAME ^ --expiration-date = EXPIRATION DATE ^ --encryption-type = ENCRYPTION TYPE You should receive a response similar to the following: createTime: '2022-03-29T22:06:05.905823Z' database: projects/ SOURCE PROJECT ID /instances/ SOURCE INSTANCE ID /databases/ SOURCE DATABASE ID databaseDialect: GOOGLE STANDARD SQL encryptionInfo: encryptionType: GOOGLE DEFAULT ENCRYPTION expireTime: '2022-03-30T10:49:41Z' maxExpireTime: '2023-03-17T20:46:33.479336Z' name: projects/ DESTINATION PROJECT ID /instances/ DESTINATION INSTANCE ID /backups/ DESTINATION BACKUP NAME sizeBytes: '7957667' state: READY versionTime: '2022-03-16T20:46:33.479336Z' To check the progress of a copy operation, see Check the operation progress .
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner backups copy \ --source-instance = SOURCE INSTANCE ID \ --source-backup = SOURCE BACKUP NAME \ --destination-instance = DESTINATION INSTANCE ID \ --destination-backup = DESTINATION BACKUP NAME \ --expiration-date = EXPIRATION DATE \ --encryption-type = ENCRYPTION TYPE Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner backups copy --source-instance = SOURCE INSTANCE ID --source-backup = SOURCE BACKUP NAME --destination-instance = DESTINATION INSTANCE ID --destination-backup = DESTINATION BACKUP NAME --expiration-date = EXPIRATION DATE --encryption-type = ENCRYPTION TYPE Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner backups copy ^ --source-instance = SOURCE INSTANCE ID ^ --source-backup = SOURCE BACKUP NAME ^ --destination-instance = DESTINATION INSTANCE ID ^ --destination-backup = DESTINATION BACKUP NAME ^ --expiration-date = EXPIRATION DATE ^ --encryption-type = ENCRYPTION TYPE You should receive a response similar to the following: createTime: '2022-03-29T22:06:05.905823Z' database: projects/ PROJECT ID /instances/ SOURCE INSTANCE ID /databases/ SOURCE DATABASE ID databaseDialect: GOOGLE STANDARD SQL encryptionInfo: encryptionType: GOOGLE DEFAULT ENCRYPTION expireTime: '2022-03-30T10:49:41Z' maxExpireTime: '2023-03-17T20:46:33.479336Z' name: projects/ PROJECT ID /instances/ DESTINATION INSTANCE ID /backups/ DESTINATION BACKUP NAME sizeBytes: '7957667' state: READY versionTime: '2022-03-16T20:46:33.479336Z' Copy a backup in a different project If you choose to copy the backup to a different project, you must have another project with its own instance ready for the copied backup.

### Modify data using batch write \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/batch-write](https://docs.cloud.google.com/spanner/docs/batch-write)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- OK VALUE ) { System . out . printf ( "Mutation group indexes %s have been applied with commit timestamp %s" , response . getIndexesList (), response . getCommitTimestamp ()); } else { System . out . printf ( "Mutation group indexes %s could not be applied with error code %s and " + "error message %s" , response . getIndexesList (), Code . forNumber ( response . getStatus (). getCode ()), response . getStatus (). getMessage ()); } } } } } Node // Imports the Google Cloud client library const { Spanner , MutationGroup } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // const projectId = 'my-project-id'; // Creates a client const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner instance and database const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); // Create Mutation Groups / Related mutations should be placed in a group, such as insert mutations for both a parent and a child row.
- WriteLine ( $"Error executing batch write: {ex.Message}" ); throw ; } } } Go import ( "context" "fmt" "io" "cloud.google.com/go/spanner" sppb "cloud.google.com/go/spanner/apiv1/spannerpb" "google.golang.org/grpc/status" ) // batchWrite demonstrates writing mutations to a Spanner database through // BatchWrite API - https://pkg.go.dev/cloud.google.com/go/spanner#Client.BatchWrite func batchWrite ( w io .
- PHP EOL, $indexes, $status['code'], $status['message'] ); } } } // The following 2 lines are only needed to run the samples require once DIR . '/../../testing/sample helpers.php'; \Google\Cloud\Samples\execute sample( FILE , NAMESPACE , $argv); Python def batch write ( instance id , database id ): """Inserts sample data into the given database via BatchWrite API.
- Limitations Spanner batch write has the following limitations: Spanner batch write is not available using the Google Cloud console or Google Cloud CLI.

