---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.303Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "PostgreSQL 17 extension support"
feature_slug: "postgresql-17-extension-support"
latest_feature_date: "2025-01-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
keywords:
  - "postgresql"
  - "17"
  - "extension"
  - "sql"
  - "for"
  - "adds"
  - "new"
  - "set"
---

# PostgreSQL 17 extension support

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL 17 adds support for a new set of PostgreSQL extensions and plugins.

## Extended Definition

Cloud SQL for PostgreSQL 17 adds support for a new set of PostgreSQL extensions and plugins.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- Extension and plugin versions pg cron is upgraded from 1.4.1 to 1.5. pg partman is upgraded from 4.7.0 to 4.7.3. postgresql-hll is upgraded from 2.16 to 2.17. pg repack is upgraded from 1.4.7 to 1.4.8. wal2json is upgraded from 2.4 to 2.5. pg hint plan is upgraded, as follows: from 1.3.7 to 1.3.8 (for PostgreSQL versions 11-13) from 1.4.0 to 1.4.1 (for PostgreSQL version 14) from 1.4.0 to 1.5.0 (for PostgreSQL version 15) If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window.
- January 17, 2025 Feature Cloud SQL for PostgreSQL version 17 adds support for the following extensions and plugins: Extensions and plugins ip4r oracle fdw orafce pg background pg bigm pgfincore pg hint plan pg partman pg proctab pgrouting pg similarity pgtap pgtt pg wait sampling PL/Proxy plv8 postgresql anonymizer postgresql hll prefix temporal tables Cloud SQL for PostgreSQL version 17 doesn't support: rdkit pg squeeze To use these extensions and plugins in your PostgreSQL 17 instance, update your instance to the POSTGRES 17 2.R20241011.00 11 maintenance version.
- To use these versions of the extensions, update your instance to one of the following: POSTGRES 17 0.R20241011.00 11 (for PostgreSQL instances, version 17) [PostgreSQL version].R20240910.01 31 (for PostgreSQL instances, versions 12 to 16) If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window.
- September 28, 2023 Feature The following pg wait sampling and rdkit flags are generally available: pg wait sampling flags cloudsql.enable pg wait sampling: enable the pg wait sampling extension for Cloud SQL for PostgreSQL instances. pg wait sampling.history size: set the size of the in-memory ring buffer for history sampling, in terms of the number of samples. pg wait sampling.history period: set the time interval for history sampling, in milliseconds. pg wait sampling.profile period: set the time interval for profile sampling for wait events, in milliseconds. pg wait sampling.profile pid: specify whether the wait profile that accumulates samples for each process and waits event is collected for each process or for all processes. pg wait sampling.profile queries: specify whether the wait profile is collected for each query or for all queries. rdkit flags rdkit.tanimoto threshold: set the threshold value for the Tanimoto similarity operator. rdkit.dice threshold: set the threshold value for the Dice similarity operator. rdkit.do chiral sss: specify whether stereochemistry is used in substructure matching. rdkit.do enhanced stereo sss: specify whether enhanced stereo is used in substructure matching. rdkit.sss fp size: set the size of the fingerprint used for substructure screening, in bits. rdkit.morgan fp size: set the size of morgan fingerprints, in bits. rdkit.featmorgan fp size: set the size of featmorgan fingerprints, in bits. rdkit.layered fp size: set the size of layered fingerprints, in bits. rdkit.rdkit fp size: set the size of rdkit fingerprints, in bits. rdkit.hashed torsion fp size: set the size of topological torsion bit vector fingerprints, in bits. rdkit.hashed atompair fp size: set the size of atom pair bit vector fingerprints, in bits. rdkit.reaction sss fp size: set the size of the structural chemical reaction fingerprint, in bits. rdkit.reaction difference fp size: set the size of the difference chemical reaction fingerprint, in bits. rdkit.reaction sss fp type: specify the type of structural chemical reaction fingerprint. rdkit.reaction difference fp type: specify the type of difference chemical reaction fingerprint. rdkit.ignore reaction agents: specify whether agents of a chemical reaction are taken into account. rdkit.agent FP bit ratio: specify the weight of the impact of agents contained in a chemical reaction fingerprint. rdkit.move unmmapped reactants to agents: specify whether unmapped reactant agents of a chemical reaction are taken into account. rdkit.threshold unmapped reactant atoms: set the ratio of allowed unmapped reactant atoms. rdkit.init reaction: specify whether the reaction is ready for use. rdkit.difference FP weight agents: specify the weight factor for agents compared to reactants and products in reaction difference fingerprints. rdkit.difference FP weight nonagents: specify the weight factor for reactants and products compared to agents in reaction difference fingerprints. rdkit.avalon fp size: set the size of avalon fingerprints, in bits.

### "Manage users with IAM database authentication \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- Source ID: `site-iam-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Terraform To add IAM user and service accounts on an instance with IAM database authentication enabled, use a Terraform resource . resource "google sql database instance" "default" { name = "postgres-db-auth-instance-name-test" region = "us-west4" database version = "POSTGRES 14" settings { tier = "db-custom-2-7680" database flags { name = "cloudsql.iam authentication" value = "on" } } } Specify the email address of the IAM user to add to the instance This resource does not create a new IAM user account; this account must already exist resource "google sql user" "iam user" { name = "test-user@example.com" instance = google sql database instance.default.name type = "CLOUD IAM USER" } Specify the email address of the IAM service account to add to the instance This resource does not create a new IAM service account; this service account must already exist Create a new IAM service account resource "google service account" "default" { account id = "cloud-sql-postgres-sa" display name = "Cloud SQL for Postgres Service Account" } resource "google sql user" "iam service account user" { Note: for PostgreSQL only, Google Cloud requires that you omit the ".gserviceaccount.com" suffix from the service account email due to length limits on database usernames. name = trimsuffix(google service account.default.email, ".gserviceaccount.com") instance = google sql database instance.default.name type = "CLOUD IAM SERVICE ACCOUNT" } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Note that this policy change does not take effect until you set the updated policy . { "role" : "roles/cloudsql.instanceUser" , "members" : [ "user:example-user@example.com" "serviceAccount:service1@sql.iam.gserviceaccount.com" "group:example-group@example.com" ] } { "role" : "roles/cloudsql.client" , "members" : [ "user:example-user@example.com" "serviceAccount:service1@sql.iam.gserviceaccount.com" ] } Add an individual IAM user or service account to a Cloud SQL instance You must create a new user account for each individual IAM user or service account that you are adding to the Cloud SQL instance in order to access databases.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-07T22:44:16.656Z", "startTime": "2025-10-07T22:44:16.686Z", "endTime": "2025-10-07T22:44:20.437Z", "operationType": "CREATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID for the instance you are adding the user to USERNAME : the email address for the user USER TYPE : the Cloud SQL user type, which can be one of the following IAM user types: CLOUD IAM USER CLOUD IAM SERVICE ACCOUNT CLOUD IAM GROUP ROLE 1 , ROLE 2 ..., ROLE N : the database role or roles to assign to the IAM user, service account, or group REVOKE EXISTING ROLES : set to true to revoke the user's existing roles, set to false to keep the user's existing roles HTTP method and URL: PUT https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users Request JSON body: { "name": " USERNAME ", "type": " USER TYPE ", "databaseRoles": [ " ROLE 1 ", " ROLE 2 " ], "revokeExistingRoles": REVOKE EXISTING ROLES } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-07T22:44:16.656Z", "startTime": "2025-10-07T22:44:16.686Z", "endTime": "2025-10-07T22:44:20.437Z", "operationType": "CREATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID for the instance you are adding the user to USERNAME : the email address for the user USER TYPE : the Cloud SQL user type, which is one of the following IAM user types: CLOUD IAM USER CLOUD IAM SERVICE ACCOUNT CLOUD IAM GROUP ROLE 1 , ROLE 2 ..., ROLE N : the database role or roles to assign to the IAM user, service account, or group HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users Request JSON body: { "name": " USERNAME ", "type": "CLOUD IAM USER", "databaseRoles": [ " ROLE 1 ", " ROLE 2 " ] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Note: Saving credentials in environment variables is convenient, but not secure - consider a more secure solution such as Cloud Secret Manager (https://cloud.google.com/secret-manager) to help keep secrets safe. username : < %= ENV["DB USER"] %> # e.g. "my-database-user" password: <%= ENV [ "DB PASS" ] % > # e.g. "my-database-password" database : < %= ENV.fetch("DB NAME") { "vote development" } % > host: <%= ENV . fetch ( "INSTANCE HOST" ) { "127.0.0.1" } % > # '172.17.0.1' if deployed to GAE Flex port : < %= ENV . fetch ( "DB PORT" ) { 5432 } % > PHP To see this snippet in the context of a web application, view the README on GitHub . namespace Google\Cloud\Samples\CloudSQL\Postgres; use PDO; use PDOException; use RuntimeException; use TypeError; class DatabaseTcp { public static function initTcpDatabaseConnection(): PDO { try { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. $username = getenv('DB USER'); // e.g. 'your db user' $password = getenv('DB PASS'); // e.g. 'your db password' $dbName = getenv('DB NAME'); // e.g. 'your db name' $instanceHost = getenv('INSTANCE HOST'); // e.g. '127.0.0.1' ('172.17.0.1' for GAE Flex) // Connect using TCP $dsn = sprintf('pgsql:dbname=%s;host=%s', $dbName, $instanceHost); // Connect to the database $conn = new PDO( $dsn, $username, $password, ... ); } catch (TypeError $e) { throw new RuntimeException( sprintf( 'Invalid or missing configuration!
- HikariConfig config = new HikariConfig (); // The following URL is equivalent to setting the config options below: // jdbc:postgresql:///<DB NAME>?cloudSqlInstance=<INSTANCE CONNECTION NAME> & // socketFactory=com.google.cloud.sql.postgres.SocketFactory&user=<DB USER>&password=<DB PASS> // See the link below for more info on building a JDBC URL for the Cloud SQL JDBC Socket Factory // https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory#creating-the-jdbc-url // Configure which instance and what database user to connect with. config . setJdbcUrl ( String . format ( "jdbc:postgresql:///%s" , DB NAME )); config . setUsername ( DB USER ); // e.g. "root", postgres" config . setPassword ( DB PASS ); // e.g. "my-password" config . addDataSourceProperty ( "socketFactory" , "com.google.cloud.sql.postgres.SocketFactory" ); config . addDataSourceProperty ( "cloudSqlInstance" , INSTANCE CONNECTION NAME ); // Unix sockets are not natively supported in Java, so it is necessary to use the Cloud SQL // Java Connector to connect.
- HikariConfig config = new HikariConfig (); // The following URL is equivalent to setting the config options below: // jdbc:postgresql://<INSTANCE HOST>:<DB PORT>/<DB NAME>?user=<DB USER>&password=<DB PASS> // See the link below for more info on building a JDBC URL for the Cloud SQL JDBC Socket Factory // https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory#creating-the-jdbc-url // Configure which instance and what database user to connect with. config . setJdbcUrl ( String . format ( "jdbc:postgresql://%s:%s/%s" , INSTANCE HOST , DB PORT , DB NAME )); config . setUsername ( DB USER ); // e.g. "root", "postgres" config . setPassword ( DB PASS ); // e.g. "my-password" // ...
- Make sure you have set ' . '$username, $password, $dbName, ' . 'and $instanceUnixSocket (for UNIX socket mode). ' . 'The PHP error was %s', $e->getMessage() ), (int) $e->getCode(), $e ); } catch (PDOException $e) { throw new RuntimeException( sprintf( 'Could not connect to the Cloud SQL Database.

