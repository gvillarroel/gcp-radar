---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.417Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "64 TB storage limit"
feature_slug: "64-tb-storage-limit"
latest_feature_date: "2021-06-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/quotas"
keywords:
  - "64"
  - "tb"
  - "storage"
  - "limit"
  - "sql"
  - "for"
  - "postgresql"
  - "supports"
---

# 64 TB storage limit

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports storage sizes up to 64 TB.

## Extended Definition

Cloud SQL for PostgreSQL supports storage sizes up to 64 TB.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/quotas](https://docs.cloud.google.com/sql/docs/postgres/quotas)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- June 23, 2021 Feature Cloud SQL storage limits are now increased to support up to 64 TB.
- The following information applies to flags and extensions for PostgreSQL 18: Flags The following new flags are available for PostgreSQL 18 only: autovacuum vacuum max threshold autovacuum worker slots enable distinct reordering enable self join elimitation io max concurrency io method io workers log lock failures max active replecation origins track cost delay timing vacuum max eager freeze failure rate vacuum truncate For more information, see Configure database flags .
- July 29, 2021 Feature Cloud SQL for PostgreSQL now supports the following flags: tcp keepalives count tcp keepalives idle tcp keepalives interval For more information about these flags, see the Cloud SQL for PostgreSQL flags documentation.
- January 09, 2023 Feature For new Cloud SQL instances that have point-in-time recovery enabled or for existing instances that enable point-in-time recovery, Cloud SQL for PostgreSQL now stores write-ahead logs in Google Cloud Storage.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- URL . create ( drivername = "postgresql+pg8000" , username = db user , password = db pass , database = db name , query = { "unix sock" : f " { unix socket path } /.s.PGSQL.5432" }, ), ... ) return pool Java To see this snippet in the context of a web application, view the README on GitHub . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class ConnectorConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String INSTANCE CONNECTION NAME = System . getenv ( "INSTANCE CONNECTION NAME" ); private static final String INSTANCE UNIX SOCKET = System . getenv ( "INSTANCE UNIX SOCKET" ); private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.
- HikariConfig config = new HikariConfig (); // The following URL is equivalent to setting the config options below: // jdbc:postgresql:///<DB NAME>?cloudSqlInstance=<INSTANCE CONNECTION NAME> & // socketFactory=com.google.cloud.sql.postgres.SocketFactory&user=<DB USER>&password=<DB PASS> // See the link below for more info on building a JDBC URL for the Cloud SQL JDBC Socket Factory // https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory#creating-the-jdbc-url // Configure which instance and what database user to connect with. config . setJdbcUrl ( String . format ( "jdbc:postgresql:///%s" , DB NAME )); config . setUsername ( DB USER ); // e.g. "root", postgres" config . setPassword ( DB PASS ); // e.g. "my-password" config . addDataSourceProperty ( "socketFactory" , "com.google.cloud.sql.postgres.SocketFactory" ); config . addDataSourceProperty ( "cloudSqlInstance" , INSTANCE CONNECTION NAME ); // Unix sockets are not natively supported in Java, so it is necessary to use the Cloud SQL // Java Connector to connect.
- Engine : """Initializes a Unix socket connection pool for a Cloud SQL instance of Postgres.""" Note: Saving credentials in environment variables is convenient, but not secure - consider a more secure solution such as Cloud Secret Manager (https://cloud.google.com/secret-manager) to help keep secrets safe. db user = os . environ [ "DB USER" ] # e.g. 'my-database-user' db pass = os . environ [ "DB PASS" ] # e.g. 'my-database-password' db name = os . environ [ "DB NAME" ] # e.g. 'my-database' unix socket path = os . environ [ "INSTANCE UNIX SOCKET" ] # e.g. '/cloudsql/project:region:instance' pool = sqlalchemy . create engine ( Equivalent URL: postgresql+pg8000://<db user>:<db pass>@/<db name> ?unix sock=<INSTANCE UNIX SOCKET>/.s.PGSQL.5432 Note: Some drivers require the unix sock query parameter to use a different key.
- Error: googleapi: Error 429 : Quota exceeded for quota metric 'Queries' and limit 'Queries per minute per user' of service 'sqladmin.googleapis.com' for consumer ' project number: $PROJECT ID ., rateLimitExceeded Once an application connects to the proxy, the proxy reports the following error: failed to refresh the ephemeral certificate for $INSTANCE CONNECTION NAME : googleapi: Error 429 : Quota exceeded for quota metric 'Queries' and limit 'Queries per minute per user' of service 'sqladmin.googleapis.com' for consumer ' project number: $PROJECT ID ., rateLimitExceeded Solution: Either identify the source of the quota problem, for example, an application is misusing the connector and unnecessarily creating new connections, or contact support to request an increase to the Cloud SQL Admin API quota.

### Quotas and limits \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/quotas](https://docs.cloud.google.com/sql/docs/postgres/quotas)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Value Limit Maximum number of saved queries per project (including saved queries for other Google Cloud products) 10,000 Maximum size for each query 1 MiB Cloud SQL storage limits Dedicated core: Up to 64 TB.
- Table limit The maximum table size for Cloud SQL for PostgreSQL is 32 TB.
- Cloud SQL storage limits Dedicated core: Up to 64 TB.
- MySQL PostgreSQL SQL Server This page provides information about the Cloud SQL quotas and limits.

