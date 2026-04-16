---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.363Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "IAM custom roles for Spanner"
feature_slug: "iam-custom-roles-for-spanner"
latest_feature_date: "2018-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/cmek"
  - "https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules"
  - "https://docs.cloud.google.com/spanner/docs/configure-fgac"
keywords:
  - "announced"
  - "roles"
  - "availability"
  - "custom"
---

# IAM custom roles for Spanner

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

General availability was announced for custom IAM roles in Cloud Spanner.

## Extended Definition

General availability was announced for custom IAM roles in Cloud Spanner.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules](https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules)
- [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Spanner is able to access the key on your behalf after you grant the Cloud KMS CryptoKey Encrypter/Decrypter ( roles/cloudkms.cryptoKeyEncrypterDecrypter ) role to a Google-managed Spanner service account .
- If you're using multiple regional keys to protect a Spanner database, only those replicas that are protected by a key residing in the unavailable regional Cloud KMS are affected by the unavailability.
- Home Documentation Databases Spanner Guides Send feedback Customer-managed encryption keys (CMEK) overview Stay organized with collections Save and categorize content based on your preferences.
- Multiple regional keys support: you can create multiple regional (single-region) Cloud KMS keys to protect a database in a Spanner custom, dual-region, or multi-region instance configuration .

### Create and manage backup schedules \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules](https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://spanner.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /databases/ DATABASE ID /backupSchedules" Select-Object -Expand Content You should receive a JSON response similar to the following: { "backupSchedules": [ { "name": "projects/PROJECT ID/instances/INSTANCE ID/databases/DATABASE ID/backupSchedules/SCHEDULE ID", "retentionDuration": "172800s", "encryptionConfig": { "encryptionType": "USE DATABASE ENCRYPTION" }, "spec": { "cronSpec": { "text": "0 /12 ", "timeZone": "UTC", "creationWindow": "14400s" } }, "fullBackupSpec": {}, "updateTime": "2024-09-09T07:21:43.946180Z" }, { "name": "projects/PROJECT ID/instances/INSTANCE ID/databases/DATABASE ID/backupSchedules/SCHEDULE ID", "retentionDuration": "2592000s", "encryptionConfig": { "encryptionType": "CUSTOMER MANAGED ENCRYPTION", "kmsKeyName": "projects/PROJECT ID/locations/us-central1/keyRings/cmek-demo/cryptoKeys/test-key" }, "spec": { "cronSpec": { "text": "30 12 ", "timeZone": "UTC", "creationWindow": "14400s" } }, "fullBackupSpec": {}, "updateTime": "2024-09-17T18:27:53.868741Z" } ] } Client libraries C# using Google.Cloud.Spanner.Admin.Database.V1 ; using Google.Cloud.Spanner.Common.V1 ; using System ; using System.Collections.Generic ; public class ListBackupSchedulesSample { public IEnumerable<BackupSchedule> ListBackupSchedules ( string projectId , string instanceId , string databaseId ) { DatabaseAdminClient client = DatabaseAdminClient .
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner backup-schedules set-iam-policy SCHEDULE ID \ --project = PROJECT ID \ --instance = INSTANCE ID \ --database = DATABASE ID \ policy.json Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner backup-schedules set-iam-policy SCHEDULE ID --project = PROJECT ID --instance = INSTANCE ID --database = DATABASE ID policy.json Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner backup-schedules set-iam-policy SCHEDULE ID ^ --project = PROJECT ID ^ --instance = INSTANCE ID ^ --database = DATABASE ID ^ policy.json You should receive a response similar to the following: Updated IAM policy for backupSchedule [ SCHEDULE ID ]. bindings: - members: - user:test@google.com role: roles/editor etag: BwYi82k-fho= version: 1 The following is an example policy.json file that you can use along with this Google Cloud CLI command: { "version": 1, "etag": "BwYi8ypICC0=", "bindings": [ { "role": "roles/editor", "members": [ "user:test@gmail.com" ] } ] } REST v1 Before using any of the request data, make the following replacements: PROJECT ID : the project ID.
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner backup-schedules get-iam-policy SCHEDULE ID \ --project = PROJECT ID \ --instance = INSTANCE ID \ --database = DATABASE ID Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner backup-schedules get-iam-policy SCHEDULE ID --project = PROJECT ID --instance = INSTANCE ID --database = DATABASE ID Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud spanner backup-schedules get-iam-policy SCHEDULE ID ^ --project = PROJECT ID ^ --instance = INSTANCE ID ^ --database = DATABASE ID You should receive a response similar to the following: bindings: - members: - user:test@gmail.com role: roles/editor etag: BwYi82k-fho= version: 1 REST v1 Before using any of the request data, make the following replacements: INSTANCE ID : the instance ID.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://spanner.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /databases/ DATABASE ID /backupSchedules/ SCHEDULE ID :setIamPolicy?alt=json" Select-Object -Expand Content You should receive a JSON response similar to the following: { { "version": 1, "etag": "etag", "bindings": [ { "role": "roles/non-primitive", "members": [ "user:test@gmail.com" ] } ] } } Get IAM access control policy gcloud Before using any of the command data below, make the following replacements: SCHEDULE ID : the backup schedule ID.

### Configure fine-grained access control \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Node.js / TODO(developer): Uncomment these variables before running the sample. / // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // const projectId = 'my-project-id'; // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); // creates a client const spanner = new Spanner ({ projectId : projectId , }); const databaseAdminClient = spanner . getDatabaseAdminClient (); async function addAndDropNewDatabaseRole () { // Creates a new user defined role and grant permissions try { const request = [ 'CREATE ROLE parent' , 'GRANT SELECT ON TABLE Singers TO ROLE parent' , 'CREATE ROLE child' , 'GRANT ROLE parent TO ROLE child' , ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Created roles child and parent and granted privileges' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } // Revoke permissions and drop child role. // A role can't be dropped until all its permissions are revoked. try { const request = [ 'REVOKE ROLE parent FROM ROLE child' , 'DROP ROLE child' ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Revoked privileges and dropped role child' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the spanner client when finished. // The databaseAdminClient does not require explicit closure.
- Node.js / TODO(developer): Uncomment these variables before running the sample. / // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // const projectId = 'my-project-id'; // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); // creates a client const spanner = new Spanner ({ projectId : projectId , }); const databaseAdminClient = spanner . getDatabaseAdminClient (); async function addAndDropNewDatabaseRole () { // Creates a new user defined role and grant permissions try { const request = [ 'CREATE ROLE parent' , 'GRANT SELECT ON TABLE Singers TO ROLE parent' , 'CREATE ROLE child' , 'GRANT ROLE parent TO ROLE child' , ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Created roles child and parent and granted privileges' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } // Revoke permissions and drop child role. // A role can't be dropped until all its permissions are revoked. try { const request = [ 'REVOKE ROLE parent FROM ROLE child' , 'DROP ROLE child' ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Revoked privileges and dropped role child' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the spanner client when finished. // The databaseAdminClient does not require explicit closure.
- Ruby require "google/cloud/spanner" def spanner add and drop database role project id :, instance id :, database id : project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" admin client = Google :: Cloud :: Spanner :: Admin :: Database :: V1 :: DatabaseAdmin :: Client . new role parent = "new parent" role child = "new child" db path = admin client . database path project : project id , instance : instance id , database : database id job = admin client . update database ddl database : db path , statements : [ "CREATE ROLE #{ role parent } " , "GRANT SELECT ON TABLE Singers TO ROLE #{ role parent } " , "CREATE ROLE #{ role child } " , "GRANT ROLE #{ role parent } TO ROLE #{ role child } " ] job . wait until done! puts "Created roles #{ role parent } and #{ role child } and granted privileges" job = admin client . update database ddl database : db path , statements : [ "REVOKE ROLE #{ role parent } FROM ROLE #{ role child } " , "DROP ROLE #{ role child } " ] job . wait until done! puts "Revoked privileges and dropped role #{ role child } " end More information About fine-grained access control Fine-grained access control for change streams Fine-grained access control privileges GoogleSQL DDL reference Make schema updates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To run these commands, you must have the Cloud Asset API enabled on your project, and you must have the cloudasset.assets.searchAllIamPolicies IAM permission. gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles=roles/spanner.databaseRoleUser AND policy:"resource.name" AND policy:/ ROLE NAME AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' \ --flatten = policy.bindings [] .members [] \ --format = 'table(policy.bindings.members)' Output is similar to the following: MEMBERS 222larabrown@gmail.com View the IAM conditions for a principal To view a list of IAM conditions that were specified when granting the role Cloud Spanner Database Role User to a principal, run the following command: gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles=roles/spanner.databaseRoleUser AND policy:resource.name AND policy:" PRINCIPAL IDENTIFIER " AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' \ --flatten = policy.bindings [] \ --format = 'table(policy.bindings.condition.expression)' where PRINCIPAL IDENTIFIER is: { user: user-account-name serviceAccount: service-account-name } PRINCIPAL IDENTIFIER examples: user:222larabrown@gmail.com serviceAccount:cs-fgac-sa-1@cloud-spanner-demo.google.com.iam.gserviceaccount.com The following sample output shows two condition expressions.

