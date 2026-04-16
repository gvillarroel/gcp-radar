---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.807Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "pg_proctab extension"
feature_slug: "pg-proctab-extension"
latest_feature_date: "2021-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
keywords:
  - "operating"
  - "proctab"
  - "exposes"
  - "process"
  - "system"
  - "table"
  - "extension"
---

# pg_proctab extension

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The pg_proctab extension exposes operating system process table data for use with pg_top and reporting.

## Extended Definition

The pg_proctab extension exposes operating system process table data for use with pg_top and reporting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)

## Supporting Pages

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- The system can create many temporary tables at one time, depending on the queries and the load.
- Run the following commands: GRANT pg signal backend TO USERNAME ; Find the process ID of the blocked or stuck process: SELECT pid, username, state, query FROM pg stat activity ; Stop a running or idle process using these commands: SELECT pg cancel backend ( pid ) FROM pg stat activity WHERE username = ' USERNAME ' ; SELECT pg terminate backend ( pid ) FROM pg stat activity WHERE username = ' USERNAME ' ; Instance is nearing 100% consumption of transaction IDs.
- From a terminal, connect to your database: gcloud sql connect INSTANCE NAME Run this command to create the extension: CREATE EXTENSION pgaudit ; Exit the database, and from a terminal run the following command: gcloud sql instances patch INSTANCE NAME \ --database-flags = cloudsql.enable pgaudit = on,pgaudit.log = all Manage instances Issue Troubleshooting You want to find out what queries are running now.
- If you're restoring from a database that already has unlogged tables, then you can dump the database to a file, and reload the data after modifying the dumped file to ALTER TABLE to SET LOGGED on those tables.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- You do not have to use /cloudsql as the directory for the Cloud SQL Auth Proxy sockets. (That directory name was chosen to minimize differences with App Engine connection strings.) If you change the directory name, however, keep the overall length to a minimum; it is incorporated in a longer string that has a length limit imposed by the operating system.
- Other OS For other operating systems not included here, you can compile the Cloud SQL Auth Proxy from source .
- URL . create ( drivername = "mysql+pymysql" , username = db user , password = db pass , database = db name , query = { "unix socket" : unix socket path }, ), ... ) return pool Java To see this snippet in the context of a web application, view the README on GitHub . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class ConnectorConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String INSTANCE CONNECTION NAME = System . getenv ( "INSTANCE CONNECTION NAME" ); private static final String INSTANCE UNIX SOCKET = System . getenv ( "INSTANCE UNIX SOCKET" ); private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.
- Note: INSTANCE CONNECTION NAME should be represented as <MY-PROJECT>:<INSTANCE-REGION>:<INSTANCE-NAME> Using the argument ipTypes=PRIVATE will force the SocketFactory to connect with an instance's associated private IP See the JDBC socket factory version requirements for the pom.xml file . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class TcpConnectionPoolFactory extends ConnectionPoolFactory { // Saving credentials in environment variables is convenient, but not secure - consider a more // secure solution such as https://cloud.google.com/secret-manager/ to help keep secrets safe. private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); private static final String INSTANCE HOST = System . getenv ( "INSTANCE HOST" ); private static final String DB PORT = System . getenv ( "DB PORT" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- You do not have to use /cloudsql as the directory for the Cloud SQL Auth Proxy sockets. (That directory name was chosen to minimize differences with App Engine connection strings.) If you change the directory name, however, keep the overall length to a minimum; it is incorporated in a longer string that has a length limit imposed by the operating system.
- Other OS For other operating systems not included here, you can compile the Cloud SQL Auth Proxy from source .
- URL . create ( drivername = "postgresql+pg8000" , username = db user , password = db pass , database = db name , query = { "unix sock" : f " { unix socket path } /.s.PGSQL.5432" }, ), ... ) return pool Java To see this snippet in the context of a web application, view the README on GitHub . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class ConnectorConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String INSTANCE CONNECTION NAME = System . getenv ( "INSTANCE CONNECTION NAME" ); private static final String INSTANCE UNIX SOCKET = System . getenv ( "INSTANCE UNIX SOCKET" ); private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.
- Note: CLOUD SQL CONNECTION NAME should be represented as <MY-PROJECT>:<INSTANCE-REGION>:<INSTANCE-NAME> Using the argument ipTypes=PRIVATE will force the SocketFactory to connect with an instance's associated private IP See the JDBC socket factory version requirements for the pom.xml file . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class TcpConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); private static final String INSTANCE HOST = System . getenv ( "INSTANCE HOST" ); private static final String DB PORT = System . getenv ( "DB PORT" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.

