---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.433Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "PL/Proxy extension"
feature_slug: "pl-proxy-extension"
latest_feature_date: "2020-05-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
keywords:
  - "pl"
  - "proxy"
  - "extension"
  - "sql"
  - "for"
  - "postgresql"
  - "supports"
  - "the"
---

# PL/Proxy extension

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports the PL/Proxy extension for partitioning and proxying function calls.

## Extended Definition

Cloud SQL for PostgreSQL supports the PL/Proxy extension for partitioning and proxying function calls.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)

## Supporting Pages

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- URL . create ( drivername = "postgresql+pg8000" , username = db user , password = db pass , database = db name , query = { "unix sock" : f " { unix socket path } /.s.PGSQL.5432" }, ), ... ) return pool Java To see this snippet in the context of a web application, view the README on GitHub . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class ConnectorConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String INSTANCE CONNECTION NAME = System . getenv ( "INSTANCE CONNECTION NAME" ); private static final String INSTANCE UNIX SOCKET = System . getenv ( "INSTANCE UNIX SOCKET" ); private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.
- HikariConfig config = new HikariConfig (); // The following URL is equivalent to setting the config options below: // jdbc:postgresql:///<DB NAME>?cloudSqlInstance=<INSTANCE CONNECTION NAME> & // socketFactory=com.google.cloud.sql.postgres.SocketFactory&user=<DB USER>&password=<DB PASS> // See the link below for more info on building a JDBC URL for the Cloud SQL JDBC Socket Factory // https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory#creating-the-jdbc-url // Configure which instance and what database user to connect with. config . setJdbcUrl ( String . format ( "jdbc:postgresql:///%s" , DB NAME )); config . setUsername ( DB USER ); // e.g. "root", postgres" config . setPassword ( DB PASS ); // e.g. "my-password" config . addDataSourceProperty ( "socketFactory" , "com.google.cloud.sql.postgres.SocketFactory" ); config . addDataSourceProperty ( "cloudSqlInstance" , INSTANCE CONNECTION NAME ); // Unix sockets are not natively supported in Java, so it is necessary to use the Cloud SQL // Java Connector to connect.
- TCP sockets docker run -d \ -v PATH TO KEY FILE :/path/to/service-account-key.json \ -p 127 .0.0.1:5432:5432 \ gcr.io/cloud-sql-connectors/cloud-sql-proxy:2.21.1 \ --address 0 .0.0.0 \ --credentials-file /path/to/service-account-key.json \ INSTANCE CONNECTION NAME Unix sockets docker run -d \ -v / PATH TO HOST TARGET :/ PATH TO GUEST TARGET \ -v PATH TO KEY FILE :/path/to/service-account-key.json \ gcr.io/cloud-sql-connectors/cloud-sql-proxy:2.21.1 --unix-socket /cloudsql \ --credentials-file /path/to/service-account-key.json/PATH TO KEY FILE \ INSTANCE CONNECTION NAME If you are using a container optimized image, use a writeable directory in place of /cloudsql , for example: v /mnt/stateful partition/cloudsql:/cloudsql If you are using the credentials provided by your Compute Engine instance, do not include the credential file parameter and the -v PATH TO KEY FILE :/path/to/service-account-key.json line.
- Error: googleapi: Error 429 : Quota exceeded for quota metric 'Queries' and limit 'Queries per minute per user' of service 'sqladmin.googleapis.com' for consumer ' project number: $PROJECT ID ., rateLimitExceeded Once an application connects to the proxy, the proxy reports the following error: failed to refresh the ephemeral certificate for $INSTANCE CONNECTION NAME : googleapi: Error 429 : Quota exceeded for quota metric 'Queries' and limit 'Queries per minute per user' of service 'sqladmin.googleapis.com' for consumer ' project number: $PROJECT ID ., rateLimitExceeded Solution: Either identify the source of the quota problem, for example, an application is misusing the connector and unnecessarily creating new connections, or contact support to request an increase to the Cloud SQL Admin API quota.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- January 17, 2025 Feature Cloud SQL for PostgreSQL version 17 adds support for the following extensions and plugins: Extensions and plugins ip4r oracle fdw orafce pg background pg bigm pgfincore pg hint plan pg partman pg proctab pgrouting pg similarity pgtap pgtt pg wait sampling PL/Proxy plv8 postgresql anonymizer postgresql hll prefix temporal tables Cloud SQL for PostgreSQL version 17 doesn't support: rdkit pg squeeze To use these extensions and plugins in your PostgreSQL 17 instance, update your instance to the POSTGRES 17 2.R20241011.00 11 maintenance version.
- The minor versions for various extensions have also been upgraded: 9.6 10 11 12 13 address standardizer not avail 2.4.9 2.5.5 3.0.2 3.0.2 hll 2.14 2.14 2.14 2.14 2.14 pg repack 1.4.6 1.4.6 1.4.6 1.4.6 1.4.6 pgaudit 1.1.3 1.2.3 1.3.2 1.4.1 no change pglogical 2.3.3 2.3.3 2.3.3 2.3.3 2.3.3 pl/proxy 2.10.0 2.10.0 2.10.0 2.10.0 2.10.0 postgis 2.3.11 2.4.9 2.5.5 3.0.2 3.0.2 May 19, 2021 Feature Cloud SQL supports the preview version of the out-of-disk recommender .
- Extensions Cloud SQL for PostgreSQL version 17 doesn't support these extensions: ip4r oracle fdw orafce pg background pg bigm pgfincore pg hint plan pg partman pg proctab pgrouting pg similarity pg squeeze pgtap pgtt pg wait sampling PL/Proxy plv8 postgresql anonymizer postgresql hll prefix rdkit temporal tables To start using PostgreSQL 17, see Create instances .
- Eight additional PostgreSQL extensions are now available: pageinspect pgfincore pg freespacemap pg repack pg visibility PL/Proxy postgres fdw postgresql-hll For information about these newly-added extensions, see PostgreSQL extensions .

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- TCP sockets docker run -d \ -v PATH TO KEY FILE :/path/to/service-account-key.json \ -p 127 .0.0.1:3306:3306 \ gcr.io/cloud-sql-connectors/cloud-sql-proxy:2.21.1 \ --address 0 .0.0.0 \ --credentials-file /path/to/service-account-key.json \ INSTANCE CONNECTION NAME Unix sockets docker run -d \ -v / PATH TO HOST TARGET :/ PATH TO GUEST TARGET \ -v PATH TO KEY FILE :/path/to/service-account-key.json \ gcr.io/cloud-sql-connectors/cloud-sql-proxy:2.21.1 --unix-socket /cloudsql \ --credentials-file /path/to/service-account-key.json/PATH TO KEY FILE \ INSTANCE CONNECTION NAME If you are using a container optimized image, use a writeable directory in place of /cloudsql , for example: v /mnt/stateful partition/cloudsql:/cloudsql If you are using the credentials provided by your Compute Engine instance, do not include the credential file parameter and the -v PATH TO KEY FILE :/path/to/service-account-key.json line.
- Error: googleapi: Error 429 : Quota exceeded for quota metric 'Queries' and limit 'Queries per minute per user' of service 'sqladmin.googleapis.com' for consumer ' project number: $PROJECT ID ., rateLimitExceeded Once an application connects to the proxy, the proxy reports the following error: failed to refresh the ephemeral certificate for $INSTANCE CONNECTION NAME : googleapi: Error 429 : Quota exceeded for quota metric 'Queries' and limit 'Queries per minute per user' of service 'sqladmin.googleapis.com' for consumer ' project number: $PROJECT ID ., rateLimitExceeded Solution: Either identify the source of the quota problem, for example, an application is misusing the connector and unnecessarily creating new connections, or contact support to request an increase to the Cloud SQL Admin API quota.
- When setting INSTANCE UNIX SOCKET, the connector will // call an external package that will enable Unix socket connections. // Note: For Java users, the Cloud SQL Java Connector can provide authenticated connections // which is usually preferable to using the Cloud SQL Proxy with Unix sockets. // See https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory for details. if ( INSTANCE UNIX SOCKET != null ) { config . addDataSourceProperty ( "unixSocketPath" , INSTANCE UNIX SOCKET ); } // cloudSqlRefreshStrategy set to "lazy" is used to perform a // refresh when needed, rather than on a scheduled interval. // This is recommended for serverless environments to // avoid background refreshes from throttling CPU. config . addDataSourceProperty ( "cloudSqlRefreshStrategy" , "lazy" ); // ...
- The Cloud SQL Auth Proxy: Works with both public and private IP endpoints Validates connections using credentials for a user or service account Wraps the connection in a SSL/TLS layer that's authorized for a Cloud SQL instance Some Google Cloud services and applications use the Cloud SQL Auth Proxy to provide connections for public IP paths with encryption and authorization, including: App Engine standard environment App Engine flexible environment Cloud Run Applications running in Google Kubernetes Engine can connect using the Cloud SQL Auth Proxy .

