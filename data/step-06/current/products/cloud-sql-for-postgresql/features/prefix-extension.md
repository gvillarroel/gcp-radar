---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.426Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "prefix extension"
feature_slug: "prefix-extension"
latest_feature_date: "2020-12-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-manage-users"
keywords:
  - "prefix"
  - "extension"
  - "sql"
  - "for"
  - "postgresql"
  - "supports"
  - "the"
  - "range"
---

# prefix extension

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports the prefix extension for prefix range data types and operations.

## Extended Definition

Cloud SQL for PostgreSQL supports the prefix extension for prefix range data types and operations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- January 17, 2025 Feature Cloud SQL for PostgreSQL version 17 adds support for the following extensions and plugins: Extensions and plugins ip4r oracle fdw orafce pg background pg bigm pgfincore pg hint plan pg partman pg proctab pgrouting pg similarity pgtap pgtt pg wait sampling PL/Proxy plv8 postgresql anonymizer postgresql hll prefix temporal tables Cloud SQL for PostgreSQL version 17 doesn't support: rdkit pg squeeze To use these extensions and plugins in your PostgreSQL 17 instance, update your instance to the POSTGRES 17 2.R20241011.00 11 maintenance version.
- Extensions Cloud SQL for PostgreSQL version 17 doesn't support these extensions: ip4r oracle fdw orafce pg background pg bigm pgfincore pg hint plan pg partman pg proctab pgrouting pg similarity pg squeeze pgtap pgtt pg wait sampling PL/Proxy plv8 postgresql anonymizer postgresql hll prefix rdkit temporal tables To start using PostgreSQL 17, see Create instances .
- Feature Cloud SQL for PostgreSQL now supports the pg similarity extension, which provides support for similarity queries in PostgreSQL.
- February 12, 2025 Feature Cloud SQL for PostgreSQL now supports the tds fdw extension.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- URL . create ( drivername = "postgresql+pg8000" , username = db user , password = db pass , database = db name , query = { "unix sock" : f " { unix socket path } /.s.PGSQL.5432" }, ), ... ) return pool Java To see this snippet in the context of a web application, view the README on GitHub . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class ConnectorConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String INSTANCE CONNECTION NAME = System . getenv ( "INSTANCE CONNECTION NAME" ); private static final String INSTANCE UNIX SOCKET = System . getenv ( "INSTANCE UNIX SOCKET" ); private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.
- HikariConfig config = new HikariConfig (); // The following URL is equivalent to setting the config options below: // jdbc:postgresql:///<DB NAME>?cloudSqlInstance=<INSTANCE CONNECTION NAME> & // socketFactory=com.google.cloud.sql.postgres.SocketFactory&user=<DB USER>&password=<DB PASS> // See the link below for more info on building a JDBC URL for the Cloud SQL JDBC Socket Factory // https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory#creating-the-jdbc-url // Configure which instance and what database user to connect with. config . setJdbcUrl ( String . format ( "jdbc:postgresql:///%s" , DB NAME )); config . setUsername ( DB USER ); // e.g. "root", postgres" config . setPassword ( DB PASS ); // e.g. "my-password" config . addDataSourceProperty ( "socketFactory" , "com.google.cloud.sql.postgres.SocketFactory" ); config . addDataSourceProperty ( "cloudSqlInstance" , INSTANCE CONNECTION NAME ); // Unix sockets are not natively supported in Java, so it is necessary to use the Cloud SQL // Java Connector to connect.
- Engine : """Initializes a Unix socket connection pool for a Cloud SQL instance of Postgres.""" Note: Saving credentials in environment variables is convenient, but not secure - consider a more secure solution such as Cloud Secret Manager (https://cloud.google.com/secret-manager) to help keep secrets safe. db user = os . environ [ "DB USER" ] # e.g. 'my-database-user' db pass = os . environ [ "DB PASS" ] # e.g. 'my-database-password' db name = os . environ [ "DB NAME" ] # e.g. 'my-database' unix socket path = os . environ [ "INSTANCE UNIX SOCKET" ] # e.g. '/cloudsql/project:region:instance' pool = sqlalchemy . create engine ( Equivalent URL: postgresql+pg8000://<db user>:<db pass>@/<db name> ?unix sock=<INSTANCE UNIX SOCKET>/.s.PGSQL.5432 Note: Some drivers require the unix sock query parameter to use a different key.
- HikariConfig config = new HikariConfig (); // The following URL is equivalent to setting the config options below: // jdbc:postgresql://<INSTANCE HOST>:<DB PORT>/<DB NAME>?user=<DB USER>&password=<DB PASS> // See the link below for more info on building a JDBC URL for the Cloud SQL JDBC Socket Factory // https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory#creating-the-jdbc-url // Configure which instance and what database user to connect with. config . setJdbcUrl ( String . format ( "jdbc:postgresql://%s:%s/%s" , INSTANCE HOST , DB PORT , DB NAME )); config . setUsername ( DB USER ); // e.g. "root", "postgres" config . setPassword ( DB PASS ); // e.g. "my-password" // ...

### "Create and manage users \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method DELETE -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users?host=&name= USERNAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2020-02-07T22:38:41.217Z", "startTime": "2020-02-07T22:38:41.217Z", "endTime": "2020-02-07T22:38:44.801Z", "operationType": "DELETE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } psql Client At the psql prompt, delete the user: DROP ROLE USER NAME ; For more information about the DROP ROLE statement, see the PostgreSQL documentation .
- You can't assign any of the predefined system roles listed in Cloud SQL system roles and users to existing PostgreSQL users, except for the cloudsqlsuperuser . gcloud To assign roles to a user, use the gcloud sql users assign-roles command. gcloud sql users assign-roles USER NAME \ --instance = INSTANCE NAME \ --type = BUILT IN \ --database-roles = ROLE 1 , ROLE 2 , ..., ROLE N Replace the following: USER NAME : the username.
- ALTER USER USER NAME WITH PASSWORD PASSWORD ; NOTE: When using EXTENSION pg stat statements , SQL statements from all users are visible to users with the cloudsqlsuperuser ROLE (in PostgreSQL version 10 and higher).
- NOTE: When using EXTENSION pg stat statements , SQL statements from all users are visible to users with the cloudsqlsuperuser ROLE (in PostgreSQL version 10 and higher).

