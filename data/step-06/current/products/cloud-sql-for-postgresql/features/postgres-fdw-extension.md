---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.433Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "postgres_fdw extension"
feature_slug: "postgres-fdw-extension"
latest_feature_date: "2020-05-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-overview"
keywords:
  - "postgres"
  - "fdw"
  - "extension"
  - "sql"
  - "for"
  - "postgresql"
  - "supports"
  - "the"
---

# postgres_fdw extension

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports the postgres_fdw extension for federated access to remote PostgreSQL tables.

## Extended Definition

Cloud SQL for PostgreSQL supports the postgres_fdw extension for federated access to remote PostgreSQL tables.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-overview](https://docs.cloud.google.com/sql/docs/postgres/connect-overview)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- February 12, 2025 Feature Cloud SQL for PostgreSQL now supports the tds fdw extension.
- January 17, 2025 Feature Cloud SQL for PostgreSQL version 17 adds support for the following extensions and plugins: Extensions and plugins ip4r oracle fdw orafce pg background pg bigm pgfincore pg hint plan pg partman pg proctab pgrouting pg similarity pgtap pgtt pg wait sampling PL/Proxy plv8 postgresql anonymizer postgresql hll prefix temporal tables Cloud SQL for PostgreSQL version 17 doesn't support: rdkit pg squeeze To use these extensions and plugins in your PostgreSQL 17 instance, update your instance to the POSTGRES 17 2.R20241011.00 11 maintenance version.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 05, 2025 Feature The rollout of the following extension versions, plugin versions, and extension support is underway: Extensions and plugins plpgsql check is upgraded from 2.8.1 to 2.8.3 for PostgreSQL versions 14 and later. pg wait sampling is upgraded from 1.1.6 to 1.1.9 for PostgreSQL versions 13 and later. tds fdw is upgraded from 2.0.4 to 2.0.5.
- Extensions Cloud SQL for PostgreSQL version 17 doesn't support these extensions: ip4r oracle fdw orafce pg background pg bigm pgfincore pg hint plan pg partman pg proctab pgrouting pg similarity pg squeeze pgtap pgtt pg wait sampling PL/Proxy plv8 postgresql anonymizer postgresql hll prefix rdkit temporal tables To start using PostgreSQL 17, see Create instances .

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- URL . create ( drivername = "postgresql+pg8000" , username = db user , password = db pass , database = db name , query = { "unix sock" : f " { unix socket path } /.s.PGSQL.5432" }, ), ... ) return pool Java To see this snippet in the context of a web application, view the README on GitHub . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class ConnectorConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String INSTANCE CONNECTION NAME = System . getenv ( "INSTANCE CONNECTION NAME" ); private static final String INSTANCE UNIX SOCKET = System . getenv ( "INSTANCE UNIX SOCKET" ); private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.
- HikariConfig config = new HikariConfig (); // The following URL is equivalent to setting the config options below: // jdbc:postgresql:///<DB NAME>?cloudSqlInstance=<INSTANCE CONNECTION NAME> & // socketFactory=com.google.cloud.sql.postgres.SocketFactory&user=<DB USER>&password=<DB PASS> // See the link below for more info on building a JDBC URL for the Cloud SQL JDBC Socket Factory // https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory#creating-the-jdbc-url // Configure which instance and what database user to connect with. config . setJdbcUrl ( String . format ( "jdbc:postgresql:///%s" , DB NAME )); config . setUsername ( DB USER ); // e.g. "root", postgres" config . setPassword ( DB PASS ); // e.g. "my-password" config . addDataSourceProperty ( "socketFactory" , "com.google.cloud.sql.postgres.SocketFactory" ); config . addDataSourceProperty ( "cloudSqlInstance" , INSTANCE CONNECTION NAME ); // Unix sockets are not natively supported in Java, so it is necessary to use the Cloud SQL // Java Connector to connect.
- Engine : """Initializes a Unix socket connection pool for a Cloud SQL instance of Postgres.""" Note: Saving credentials in environment variables is convenient, but not secure - consider a more secure solution such as Cloud Secret Manager (https://cloud.google.com/secret-manager) to help keep secrets safe. db user = os . environ [ "DB USER" ] # e.g. 'my-database-user' db pass = os . environ [ "DB PASS" ] # e.g. 'my-database-password' db name = os . environ [ "DB NAME" ] # e.g. 'my-database' unix socket path = os . environ [ "INSTANCE UNIX SOCKET" ] # e.g. '/cloudsql/project:region:instance' pool = sqlalchemy . create engine ( Equivalent URL: postgresql+pg8000://<db user>:<db pass>@/<db name> ?unix sock=<INSTANCE UNIX SOCKET>/.s.PGSQL.5432 Note: Some drivers require the unix sock query parameter to use a different key.
- HikariConfig config = new HikariConfig (); // The following URL is equivalent to setting the config options below: // jdbc:postgresql://<INSTANCE HOST>:<DB PORT>/<DB NAME>?user=<DB USER>&password=<DB PASS> // See the link below for more info on building a JDBC URL for the Cloud SQL JDBC Socket Factory // https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory#creating-the-jdbc-url // Configure which instance and what database user to connect with. config . setJdbcUrl ( String . format ( "jdbc:postgresql://%s:%s/%s" , INSTANCE HOST , DB PORT , DB NAME )); config . setUsername ( DB USER ); // e.g. "root", "postgres" config . setPassword ( DB PASS ); // e.g. "my-password" // ...

### "Choose how to connect to Cloud SQL \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-overview](https://docs.cloud.google.com/sql/docs/postgres/connect-overview)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Shell Connecting using the Cloud Shell Cloud Code Connecting using Cloud Code in JetBrains IDE Connect using third-party database administration tools pgAdmin pgAdmin.org for PostgreSQL Toad Edge Toad Edge for PostgreSQL Blendo How to connect Google Cloud SQL PostgreSQL with Blendo Troubleshoot If you're having problems connecting, then check the following pages for help debugging or finding solutions to known issues: Debugging connection issues Known connectivity errors Troubleshooting Cloud SQL Auth Proxy connection Common connection issues What's next Learn how to connect with the Quickstart for Cloud SQL for postgres .
- Remove networking options from an instance Cloud SQL supports the removal of the following networking options from an instance: Public IP from an instance with both private services access and public IP Public IP from an instance with public IP, private services access, and Private Service Connect Private Service Connect from an instance with both Private Service Connect and private services access Private Service Connect from an instance with Private Service Connect, private services access, and public IP Enable networking options for an instance You can enable Cloud SQL supports enabling the following connection options for instances: Private services access on an instance with public IP only Private Service Connect on an instance with private services access only Private Service Connect on an instance with both private services access and public IP Public IP on an instance with private services access only Limitations You can't create an instance with both a public IP address and Private Service Connect.
- Supported by using the Private Service Connect endpoint. pglogical , PL/Proxy , dblink , and postgres fdw extensions Supported.
- MySQL PostgreSQL SQL Server This page provides an overview of the ways in which you can connect to your Cloud SQL instance.

