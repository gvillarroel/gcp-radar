---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.313Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "PostgreSQL 17 support"
feature_slug: "postgresql-17-support"
latest_feature_date: "2024-10-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "postgresql"
  - "17"
  - "sql"
  - "for"
  - "now"
  - "generally"
  - "supports"
  - "new"
---

# PostgreSQL 17 support

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL now generally supports PostgreSQL 17 for new instances.

## Extended Definition

Cloud SQL for PostgreSQL now generally supports PostgreSQL 17 for new instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- August 18, 2023 Feature Cloud SQL Enterprise Plus edition now supports four new regions: europe-central2 (Warsaw) europe-west9 (Paris) southamerica-east1 (San Paulo) us-west1 (Oregon) August 17, 2023 Feature You can now re-encrypt an existing Cloud SQL CMEK-enabled primary instance or replica with a new primary key version.
- The fix to the silent data corruption when using the CREATE INDEX CONCURRENTLY or REINDEX CONCURRENTLY SQL commands in PostgreSQL 14 ( BUG #17485 ) is now available in the self-service maintenance release POSTGRES 14 2.R20220331.02 012 for PostgreSQL 14.2.
- April 09, 2025 Feature Cloud SQL Enterprise Plus edition now supports a new machine series called the C4A machine series, which provides optimized price-performance and delivers predictable high performance for high demand Cloud SQL workloads.
- July 29, 2021 Feature Cloud SQL for PostgreSQL now supports the following flags: tcp keepalives count tcp keepalives idle tcp keepalives interval For more information about these flags, see the Cloud SQL for PostgreSQL flags documentation.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Note: Saving credentials in environment variables is convenient, but not secure - consider a more secure solution such as Cloud Secret Manager (https://cloud.google.com/secret-manager) to help keep secrets safe. username : < %= ENV["DB USER"] %> # e.g. "my-database-user" password: <%= ENV [ "DB PASS" ] % > # e.g. "my-database-password" database : < %= ENV.fetch("DB NAME") { "vote development" } % > host: <%= ENV . fetch ( "INSTANCE HOST" ) { "127.0.0.1" } % > # '172.17.0.1' if deployed to GAE Flex port : < %= ENV . fetch ( "DB PORT" ) { 5432 } % > PHP To see this snippet in the context of a web application, view the README on GitHub . namespace Google\Cloud\Samples\CloudSQL\Postgres; use PDO; use PDOException; use RuntimeException; use TypeError; class DatabaseTcp { public static function initTcpDatabaseConnection(): PDO { try { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. $username = getenv('DB USER'); // e.g. 'your db user' $password = getenv('DB PASS'); // e.g. 'your db password' $dbName = getenv('DB NAME'); // e.g. 'your db name' $instanceHost = getenv('INSTANCE HOST'); // e.g. '127.0.0.1' ('172.17.0.1' for GAE Flex) // Connect using TCP $dsn = sprintf('pgsql:dbname=%s;host=%s', $dbName, $instanceHost); // Connect to the database $conn = new PDO( $dsn, $username, $password, ... ); } catch (TypeError $e) { throw new RuntimeException( sprintf( 'Invalid or missing configuration!
- HikariConfig config = new HikariConfig (); // The following URL is equivalent to setting the config options below: // jdbc:postgresql:///<DB NAME>?cloudSqlInstance=<INSTANCE CONNECTION NAME> & // socketFactory=com.google.cloud.sql.postgres.SocketFactory&user=<DB USER>&password=<DB PASS> // See the link below for more info on building a JDBC URL for the Cloud SQL JDBC Socket Factory // https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory#creating-the-jdbc-url // Configure which instance and what database user to connect with. config . setJdbcUrl ( String . format ( "jdbc:postgresql:///%s" , DB NAME )); config . setUsername ( DB USER ); // e.g. "root", postgres" config . setPassword ( DB PASS ); // e.g. "my-password" config . addDataSourceProperty ( "socketFactory" , "com.google.cloud.sql.postgres.SocketFactory" ); config . addDataSourceProperty ( "cloudSqlInstance" , INSTANCE CONNECTION NAME ); // Unix sockets are not natively supported in Java, so it is necessary to use the Cloud SQL // Java Connector to connect.
- HikariConfig config = new HikariConfig (); // The following URL is equivalent to setting the config options below: // jdbc:postgresql://<INSTANCE HOST>:<DB PORT>/<DB NAME>?user=<DB USER>&password=<DB PASS> // See the link below for more info on building a JDBC URL for the Cloud SQL JDBC Socket Factory // https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory#creating-the-jdbc-url // Configure which instance and what database user to connect with. config . setJdbcUrl ( String . format ( "jdbc:postgresql://%s:%s/%s" , INSTANCE HOST , DB PORT , DB NAME )); config . setUsername ( DB USER ); // e.g. "root", "postgres" config . setPassword ( DB PASS ); // e.g. "my-password" // ...
- URL . create ( drivername = "postgresql+pg8000" , username = db user , password = db pass , database = db name , query = { "unix sock" : f " { unix socket path } /.s.PGSQL.5432" }, ), ... ) return pool Java To see this snippet in the context of a web application, view the README on GitHub . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class ConnectorConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String INSTANCE CONNECTION NAME = System . getenv ( "INSTANCE CONNECTION NAME" ); private static final String INSTANCE UNIX SOCKET = System . getenv ( "INSTANCE UNIX SOCKET" ); private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Cloud SQL for PostgreSQL Feature Cloud SQL Enterprise Plus edition now supports four new regions: europe-central2 (Warsaw) europe-west9 (Paris) southamerica-east1 (San Paulo) us-west1 (Oregon) August 17, 2023 Cloud SQL for MySQL Feature You can now re-encrypt an existing Cloud SQL CMEK-enabled primary instance or replica with a new primary key version.
- Cloud SQL for PostgreSQL Feature Cloud SQL Enterprise Plus edition now supports a new machine series called the C4A machine series, which provides optimized price-performance and delivers predictable high performance for high demand Cloud SQL workloads.
- October 17, 2025 Cloud SQL for MySQL Feature Cloud SQL Enterprise edition now supports a new machine series called the N4 machine series.
- Cloud SQL for PostgreSQL Feature Cloud SQL Enterprise edition now supports a new machine series called the N4 machine series.

