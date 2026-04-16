---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.785Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Password policies for local database users"
feature_slug: "password-policies-for-local-database-users"
latest_feature_date: "2023-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-manage-users"
keywords:
  - "password"
  - "enforce"
  - "local"
  - "policies"
  - "database"
  - "users"
---

# Password policies for local database users

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Password policies for local database users let you enforce password rules on Cloud SQL for PostgreSQL users authenticated locally.

## Extended Definition

Password policies for local database users let you enforce password rules on Cloud SQL for PostgreSQL users authenticated locally.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users)

## Supporting Pages

### "Cloud SQL built-in database authentication \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication)
- Source ID: `site-iam-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MySQL PostgreSQL SQL Server This page describes how built-in authentication works on Cloud SQL instances and how database administrators can set password policies for local database users.
- Cloud SQL uses the following types of authentication for database users: The database's built-in authentication uses a username and a password to authenticate local database users.
- You might create and manage local database users locally within a database to allow specific persons or applications to access a database.
- You can define and enable such enforcement through password policies.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Important: Starting in Cloud SQL for MySQL 8.4, the mysql native password authentication plugin is deprecated and new database users are created with the caching sha2 password plugin.
- Pooling = true ; // Specify additional properties here. return connectionString ; } } } Ruby To see this snippet in the context of a web application, view the README on GitHub . tcp : & tcp adapter : mysql2 Configure additional properties here Note: Saving credentials in environment variables is convenient, but not secure - consider a more secure solution such as Cloud Secret Manager (https://cloud.google.com/secret-manager) to help keep secrets safe. username : < %= ENV["DB USER"] %> # e.g. "my-database-user" password: <%= ENV [ "DB PASS" ] % > # e.g. "my-database-password" database : < %= ENV.fetch("DB NAME") { "vote development" } % > host: "<%= ENV . fetch ( "INSTANCE HOST" ) { "127.0.0.1" } %>" # '172.17.0.1' if deployed to GAE Flex port: <%= ENV.fetch(" DB PORT ") { 3306 }% > PHP To see this snippet in the context of a web application, view the README on GitHub . namespace Google\Cloud\Samples\CloudSQL\MySQL; use PDO; use PDOException; use RuntimeException; use TypeError; class DatabaseTcp { public static function initTcpDatabaseConnection(): PDO { try { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. $username = getenv('DB USER'); // e.g. 'your db user' $password = getenv('DB PASS'); // e.g. 'your db password' $dbName = getenv('DB NAME'); // e.g. 'your db name' $instanceHost = getenv('INSTANCE HOST'); // e.g. '127.0.0.1' ('172.17.0.1' for GAE Flex) // Connect using TCP $dsn = sprintf('mysql:dbname=%s;host=%s', $dbName, $instanceHost); // Connect to the database $conn = new PDO( $dsn, $username, $password, ... ); } catch (TypeError $e) { throw new RuntimeException( sprintf( 'Invalid or missing configuration!
- Note: Saving credentials in environment variables is convenient, but not secure - consider a more secure solution such as Cloud Secret Manager (https://cloud.google.com/secret-manager) to help keep secrets safe. username : < %= ENV["DB USER"] %> # e.g. "my-database-user" password: <%= ENV [ "DB PASS" ] % > # e.g. "my-database-password" database : < %= ENV.fetch("DB NAME") { "vote development" } % > Specify the Unix socket path as host socket: "<%= ENV [ "INSTANCE UNIX SOCKET" ] % > " PHP To see this snippet in the context of a web application, view the README on GitHub . namespace Google\Cloud\Samples\CloudSQL\MySQL; use PDO; use PDOException; use RuntimeException; use TypeError; class DatabaseUnix { public static function initUnixDatabaseConnection(): PDO { try { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. $username = getenv('DB USER'); // e.g. 'your db user' $password = getenv('DB PASS'); // e.g. 'your db password' $dbName = getenv('DB NAME'); // e.g. 'your db name' $instanceUnixSocket = getenv('INSTANCE UNIX SOCKET'); // e.g. '/cloudsql/project:region:instance' // Connect using UNIX sockets $dsn = sprintf( 'mysql:dbname=%s;unix socket=%s', $dbName, $instanceUnixSocket ); // Connect to the database. $conn = new PDO( $dsn, $username, $password, ... ); } catch (TypeError $e) { throw new RuntimeException( sprintf( 'Invalid or missing configuration!
- URL . create ( drivername = "mysql+pymysql" , username = db user , password = db pass , database = db name , query = { "unix socket" : unix socket path }, ), ... ) return pool Java To see this snippet in the context of a web application, view the README on GitHub . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class ConnectorConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String INSTANCE CONNECTION NAME = System . getenv ( "INSTANCE CONNECTION NAME" ); private static final String INSTANCE UNIX SOCKET = System . getenv ( "INSTANCE UNIX SOCKET" ); private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.

### "Create and manage users \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The database role or roles to assign to the user HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users Request JSON body: { "name": " USER ID ", "password": " PASSWORD ", "databaseRoles": [ " ROLE 1 ", " ROLE 2 " ] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- The database role or roles to assign to the user HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /users Request JSON body: { "name": " USER ID ", "password": " PASSWORD ", "databaseRoles": [ " ROLE 1 ", " ROLE 2 " ] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- The database role or roles to assign to the user. gcloud sql users create USER NAME \ --instance = INSTANCE NAME \ --password = PASSWORD \ --database-roles = ROLE 1 , ROLE 2 , ..., ROLE N If you create a PostgreSQL user that uses built-in authentication, then the user is granted the cloudsqlsuperuser role automatically.
- If you set user password policies, and you want to deactivate the password policy for the instance , then you must first remove all user password policies. gcloud To set the user password policy, use the gcloud sql users set-password-policy command.

