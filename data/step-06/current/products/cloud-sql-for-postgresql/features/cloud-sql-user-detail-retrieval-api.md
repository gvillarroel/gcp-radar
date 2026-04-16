---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.792Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cloud SQL user detail retrieval API"
feature_slug: "cloud-sql-user-detail-retrieval-api"
latest_feature_date: "2023-02-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-manage-users"
  - "https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption"
keywords:
  - "retrieving"
  - "retrieval"
  - "detail"
  - "details"
  - "user"
  - "database"
  - "supports"
---

# Cloud SQL user detail retrieval API

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports retrieving details for a database user through the API or gcloud.

## Extended Definition

Cloud SQL supports retrieving details for a database user through the API or gcloud.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users)
- [https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption](https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption)

## Supporting Pages

### "Manage users with IAM database authentication \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- Source ID: `site-iam-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: PGPASSWORD=not-a-password psql --host=... --username=... --dbname=... psql: error: could not connect to server: FATAL: Cloud SQL IAM user authentication failed for user "..." FATAL: pg hba.conf rejects connection for host "...", user "...", database "...", SSL off You can review the PostgreSQL error logs for more details about the error.
- If it indicates the access token (OAuth 2.0) you sent as a password was invalid, you can use the gcloud auth application-default print-access-token gcloud command to find details of the token, as follows: curl -H "Content-Type: application/x-www-form-urlencoded" \ -d "access token= $( gcloud auth application-default print-access-token ) " \ https://www.googleapis.com/oauth2/v1/tokeninfo Verify that the token is for the intended IAM user or service account and has not expired.
- If the details indicate a lack of permission, then verify the IAM user or service account is granted the cloudsql.instances.login permission using the predefined Cloud SQL Instance User role or custom role in the IAM policy of the instance's project.
- If you used IAM database authentication, check the details of the error message.

### "Create and manage users \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#usersList", "items": [ { "kind": "sql#user", "etag": "--redacted--", "name": "sqlserver", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { "kind": "sql#user", "etag": "--redacted--", "name": " user-id-1 ", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { "kind": "sql#user", "etag": "--redacted--", "name": " user-id-2 ", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { ... }, { ... } ] } If a user password policy was set, the items section of the response includes a passwordPolicy section.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#usersList", "items": [ { "kind": "sql#user", "etag": "--redacted--", "name": "sqlserver", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { "kind": "sql#user", "etag": "--redacted--", "name": " user-id-1 ", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { "kind": "sql#user", "etag": "--redacted--", "name": " user-id-2 ", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { ... }, { ... } ] } If a user password policy was set, the items section of the response includes a passwordPolicy section.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-20T22:44:16.656Z", "startTime": "2025-10-20T22:44:16.686Z", "endTime": "2025-10-20T22:44:20.437Z", "operationType": "UPDATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Replace database roles for an existing user If you want to replace or remove database roles from the user, you must revoke all of their existing roles while specifying new database roles, if any.
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID INSTANCE ID : the desired instance ID USER ID : the ID of the user ROLE 1 , ROLE 2 , ..., ROLE N : the database role or roles to assign to the user HTTP method and URL: PUT https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users Request JSON body: { "name": " USER ID ", "type": "BUILT-IN", "databaseRoles": [ " ROLE 1 ", " ROLE 2 " ] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "About client-side encryption \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption](https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption)
- Source ID: `site-iam-reference`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more // info on creating a KMS key and getting its path, see // https://cloud.google.com/kms/docs/quickstart String tableName = "votes123" ; // Initialize database connection pool and create table if it does not exist // See CloudSqlConnectionPool.java for setup details DataSource pool = CloudSqlConnectionPool . createConnectionPool ( dbUser , dbPass , dbName , instanceConnectionName ); CloudSqlConnectionPool . createTable ( pool , tableName ); // Initialize envelope AEAD // See CloudKmsEnvelopeAead.java for setup details Aead envAead = CloudKmsEnvelopeAead . get ( kmsUri ); // Insert row into table to test // See EncryptAndInsert.java for setup details EncryptAndInsertData . encryptAndInsertData ( pool , envAead , tableName , "SPACES" , "hello@example.com" ); queryAndDecryptData ( pool , envAead , tableName ); } public static void queryAndDecryptData ( DataSource pool , Aead envAead , String tableName ) throws GeneralSecurityException , SQLException { try ( Connection conn = pool . getConnection ()) { String stmt = String . format ( "SELECT team, time cast, voter email FROM %s ORDER BY time cast DESC LIMIT 5" , tableName ); try ( PreparedStatement voteStmt = conn . prepareStatement ( stmt ); ) { ResultSet voteResults = voteStmt . executeQuery (); System . out . println ( "Team\tTime Cast\tEmail" ); while ( voteResults . next ()) { String team = voteResults . getString ( 1 ); Timestamp timeCast = voteResults . getTimestamp ( 2 ); // Postgres pads CHAR fields with spaces.
- For more // info on creating a KMS key and getting its path, see // https://cloud.google.com/kms/docs/quickstart String team = "TABS" ; String tableName = "votes" ; String email = "hello@example.com" ; // Initialize database connection pool and create table if it does not exist // See CloudSqlConnectionPool.java for setup details DataSource pool = CloudSqlConnectionPool . createConnectionPool ( dbUser , dbPass , dbName , instanceConnectionName ); CloudSqlConnectionPool . createTable ( pool , tableName ); // Initialize envelope AEAD // See CloudKmsEnvelopeAead.java for setup details Aead envAead = CloudKmsEnvelopeAead . get ( kmsUri ); encryptAndInsertData ( pool , envAead , tableName , team , email ); } public static void encryptAndInsertData ( DataSource pool , Aead envAead , String tableName , String team , String email ) throws GeneralSecurityException , SQLException { try ( Connection conn = pool . getConnection ()) { String stmt = String . format ( "INSERT INTO %s (team, time cast, voter email) VALUES (?, ?, ?);" , tableName ); try ( PreparedStatement voteStmt = conn . prepareStatement ( stmt ); ) { voteStmt . setString ( 1 , team ); voteStmt . setTimestamp ( 2 , new Timestamp ( new Date (). getTime ())); // Use the envelope AEAD primitive to encrypt the email, using the team name as // associated data.
- Create a connection pool and create a new table in the database Java import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import java.security.GeneralSecurityException ; import java.sql.Connection ; import java.sql.PreparedStatement ; import java.sql.SQLException ; import javax.sql.DataSource ; public class CloudSqlConnectionPool { public static DataSource createConnectionPool ( String dbUser , String dbPass , String dbName , String instanceConnectionName ) throws GeneralSecurityException { HikariConfig config = new HikariConfig (); config . setJdbcUrl ( String . format ( "jdbc:postgresql:///%s" , dbName )); config . setUsername ( dbUser ); // e.g. "root", "postgres" config . setPassword ( dbPass ); // e.g. "my-password" config . addDataSourceProperty ( "socketFactory" , "com.google.cloud.sql.postgres.SocketFactory" ); config . addDataSourceProperty ( "cloudSqlInstance" , instanceConnectionName ); DataSource pool = new HikariDataSource ( config ); return pool ; } public static void createTable ( DataSource pool , String tableName ) throws SQLException { // Safely attempt to create the table schema. try ( Connection conn = pool . getConnection ()) { String stmt = String . format ( "CREATE TABLE IF NOT EXISTS %s ( " + "vote id SERIAL NOT NULL, time cast timestamp NOT NULL, team CHAR(6) NOT NULL," + "voter email BYTEA, PRIMARY KEY (vote id) );" , tableName ); try ( PreparedStatement createTableStatement = conn . prepareStatement ( stmt );) { createTableStatement . execute (); } } } } Python import sqlalchemy def init tcp connection engine ( db user : str , db pass : str , db name : str , db host : str ) - > sqlalchemy . engine . base .
- Engine : """Starts a connection to the database and creates voting table if it doesn't exist.""" if db host : db = init tcp connection engine ( db user , db pass , db name , db host ) else : db = init unix connection engine ( db user , db pass , db name , instance connection name , db socket dir ) Create tables (if they don't already exist) with db . connect () as conn : conn . execute ( f "CREATE TABLE IF NOT EXISTS { table name } " "( vote id SERIAL NOT NULL, time cast timestamp NOT NULL, " "team VARCHAR(6) NOT NULL, voter email BYTEA, " "PRIMARY KEY (vote id) );" ) print ( f "Created table { table name } in db { db name } " ) return db Initialize an envelope AEAD primitive with Tink Java import com.google.crypto.tink.Aead ; import com.google.crypto.tink.KmsClient ; import com.google.crypto.tink.aead.AeadConfig ; import com.google.crypto.tink.aead.AeadKeyTemplates ; import com.google.crypto.tink.aead.KmsEnvelopeAead ; import com.google.crypto.tink.integration.gcpkms.GcpKmsClient ; import java.security.GeneralSecurityException ; public class CloudKmsEnvelopeAead { public static Aead get ( String kmsUri ) throws GeneralSecurityException { AeadConfig . register (); // Create a new KMS Client KmsClient client = new GcpKmsClient (). withDefaultCredentials (); // Create an AEAD primitive using the Cloud KMS key Aead gcpAead = client . getAead ( kmsUri ); // Create an envelope AEAD primitive. // This key should only be used for client-side encryption to ensure authenticity and integrity // of data. return new KmsEnvelopeAead ( AeadKeyTemplates .

