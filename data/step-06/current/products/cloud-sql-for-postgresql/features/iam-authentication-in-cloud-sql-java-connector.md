---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.815Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "IAM authentication in Cloud SQL Java Connector"
feature_slug: "iam-authentication-in-cloud-sql-java-connector"
latest_feature_date: "2021-06-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-overview"
keywords:
  - "java"
  - "connector"
  - "authentication"
  - "connections"
  - "supports"
---

# IAM authentication in Cloud SQL Java Connector

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The Cloud SQL Java Connector supports IAM authentication for PostgreSQL connections.

## Extended Definition

The Cloud SQL Java Connector supports IAM authentication for PostgreSQL connections.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-overview](https://docs.cloud.google.com/sql/docs/postgres/connect-overview)

## Supporting Pages

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When setting INSTANCE UNIX SOCKET, the connector will // call an external package that will enable Unix socket connections. // Note: For Java users, the Cloud SQL Java Connector can provide authenticated connections // which is usually preferable to using the Cloud SQL Proxy with Unix sockets. // See https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory for details. if ( INSTANCE UNIX SOCKET != null ) { config . addDataSourceProperty ( "unixSocketPath" , INSTANCE UNIX SOCKET ); } // cloudSqlRefreshStrategy set to "lazy" is used to perform a // refresh when needed, rather than on a scheduled interval. // This is recommended for serverless environments to // avoid background refreshes from throttling CPU. config . addDataSourceProperty ( "cloudSqlRefreshStrategy" , "lazy" ); // ...
- URL . create ( drivername = "postgresql+pg8000" , username = db user , password = db pass , database = db name , query = { "unix sock" : f " { unix socket path } /.s.PGSQL.5432" }, ), ... ) return pool Java To see this snippet in the context of a web application, view the README on GitHub . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class ConnectorConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String INSTANCE CONNECTION NAME = System . getenv ( "INSTANCE CONNECTION NAME" ); private static final String INSTANCE UNIX SOCKET = System . getenv ( "INSTANCE UNIX SOCKET" ); private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.
- HikariConfig config = new HikariConfig (); // The following URL is equivalent to setting the config options below: // jdbc:postgresql:///<DB NAME>?cloudSqlInstance=<INSTANCE CONNECTION NAME> & // socketFactory=com.google.cloud.sql.postgres.SocketFactory&user=<DB USER>&password=<DB PASS> // See the link below for more info on building a JDBC URL for the Cloud SQL JDBC Socket Factory // https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory#creating-the-jdbc-url // Configure which instance and what database user to connect with. config . setJdbcUrl ( String . format ( "jdbc:postgresql:///%s" , DB NAME )); config . setUsername ( DB USER ); // e.g. "root", postgres" config . setPassword ( DB PASS ); // e.g. "my-password" config . addDataSourceProperty ( "socketFactory" , "com.google.cloud.sql.postgres.SocketFactory" ); config . addDataSourceProperty ( "cloudSqlInstance" , INSTANCE CONNECTION NAME ); // Unix sockets are not natively supported in Java, so it is necessary to use the Cloud SQL // Java Connector to connect.
- Error: googleapi: Error 429 : Quota exceeded for quota metric 'Queries' and limit 'Queries per minute per user' of service 'sqladmin.googleapis.com' for consumer ' project number: $PROJECT ID ., rateLimitExceeded Once an application connects to the proxy, the proxy reports the following error: failed to refresh the ephemeral certificate for $INSTANCE CONNECTION NAME : googleapi: Error 429 : Quota exceeded for quota metric 'Queries' and limit 'Queries per minute per user' of service 'sqladmin.googleapis.com' for consumer ' project number: $PROJECT ID ., rateLimitExceeded Solution: Either identify the source of the quota problem, for example, an application is misusing the connector and unnecessarily creating new connections, or contact support to request an increase to the Cloud SQL Admin API quota.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- When setting INSTANCE UNIX SOCKET, the connector will // call an external package that will enable Unix socket connections. // Note: For Java users, the Cloud SQL Java Connector can provide authenticated connections // which is usually preferable to using the Cloud SQL Proxy with Unix sockets. // See https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory for details. if ( INSTANCE UNIX SOCKET != null ) { config . addDataSourceProperty ( "unixSocketPath" , INSTANCE UNIX SOCKET ); } // cloudSqlRefreshStrategy set to "lazy" is used to perform a // refresh when needed, rather than on a scheduled interval. // This is recommended for serverless environments to // avoid background refreshes from throttling CPU. config . addDataSourceProperty ( "cloudSqlRefreshStrategy" , "lazy" ); // ...
- URL . create ( drivername = "mysql+pymysql" , username = db user , password = db pass , database = db name , query = { "unix socket" : unix socket path }, ), ... ) return pool Java To see this snippet in the context of a web application, view the README on GitHub . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class ConnectorConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String INSTANCE CONNECTION NAME = System . getenv ( "INSTANCE CONNECTION NAME" ); private static final String INSTANCE UNIX SOCKET = System . getenv ( "INSTANCE UNIX SOCKET" ); private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.
- HikariConfig config = new HikariConfig (); // The following URL is equivalent to setting the config options below: // jdbc:mysql:///<DB NAME>?cloudSqlInstance=<INSTANCE CONNECTION NAME> & // socketFactory=com.google.cloud.sql.mysql.SocketFactory&user=<DB USER>&password=<DB PASS> // See the link below for more info on building a JDBC URL for the Cloud SQL JDBC Socket Factory // https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory#creating-the-jdbc-url // Configure which instance and what database user to connect with. config . setJdbcUrl ( String . format ( "jdbc:mysql:///%s" , DB NAME )); config . setUsername ( DB USER ); // e.g. "root", "mysql" config . setPassword ( DB PASS ); // e.g. "my-password" config . addDataSourceProperty ( "socketFactory" , "com.google.cloud.sql.mysql.SocketFactory" ); config . addDataSourceProperty ( "cloudSqlInstance" , INSTANCE CONNECTION NAME ); // Unix sockets are not natively supported in Java, so it is necessary to use the Cloud SQL // Java Connector to connect.
- Error: googleapi: Error 429 : Quota exceeded for quota metric 'Queries' and limit 'Queries per minute per user' of service 'sqladmin.googleapis.com' for consumer ' project number: $PROJECT ID ., rateLimitExceeded Once an application connects to the proxy, the proxy reports the following error: failed to refresh the ephemeral certificate for $INSTANCE CONNECTION NAME : googleapi: Error 429 : Quota exceeded for quota metric 'Queries' and limit 'Queries per minute per user' of service 'sqladmin.googleapis.com' for consumer ' project number: $PROJECT ID ., rateLimitExceeded Solution: Either identify the source of the quota problem, for example, an application is misusing the connector and unnecessarily creating new connections, or contact support to request an increase to the Cloud SQL Admin API quota.

### "Choose how to connect to Cloud SQL \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-overview](https://docs.cloud.google.com/sql/docs/postgres/connect-overview)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configuration options Cloud SQL Auth Proxy , or Cloud SQL Language Connectors, including Cloud SQL Java connector Cloud SQL Python connector Cloud SQL Go connector Cloud SQL Node.js connector The following Google Cloud services use an embedded Cloud SQL Auth Proxy when you connect to a Cloud SQL instance over public IP address: Cloud Run App Engine flexible environment App Engine standard environment To configure SSL/TLS certificates on the Cloud SQL instance and for your client, do the following: Choose a server CA mode for your instance .
- Tools for connecting to Cloud SQL The following table contains some options for connecting to Cloud SQL: Connection option More information Cloud SQL Auth Proxy About the Cloud SQL Auth Proxy Connecting using the Cloud SQL Auth Proxy Connecting using the Cloud SQL Auth Proxy Docker Image gcloud CLI gcloud sql connect Cloud SQL language connectors Connect using Cloud SQL Connectors for Java, Python and Go.
- Using a direct connection provides the following benefits: Lower latency compared to connections using Cloud SQL connectors.
- Remove networking options from an instance Cloud SQL supports the removal of the following networking options from an instance: Public IP from an instance with both private services access and public IP Public IP from an instance with public IP, private services access, and Private Service Connect Private Service Connect from an instance with both Private Service Connect and private services access Private Service Connect from an instance with Private Service Connect, private services access, and public IP Enable networking options for an instance You can enable Cloud SQL supports enabling the following connection options for instances: Private services access on an instance with public IP only Private Service Connect on an instance with private services access only Private Service Connect on an instance with both private services access and public IP Public IP on an instance with private services access only Limitations You can't create an instance with both a public IP address and Private Service Connect.

