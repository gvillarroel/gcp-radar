---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.944Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cloud SQL Auth proxy v2 environment variable configuration"
feature_slug: "cloud-sql-auth-proxy-v2-environment-variable-configuration"
latest_feature_date: "2023-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users"
  - "https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-functions"
keywords:
  - "sql"
  - "auth"
  - "proxy"
  - "v2"
  - "environment"
  - "variable"
  - "configuration"
  - "supports"
---

# Cloud SQL Auth proxy v2 environment variable configuration

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL Auth proxy v2 supports configuration through environment variables.

## Extended Definition

Cloud SQL Auth proxy v2 supports configuration through environment variables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions)

## Supporting Pages

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)
- Source ID: `site-docs-reference-3`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud SQL Auth Proxy version support Supports all versions of the Cloud SQL Auth Proxy, v1 and later.
- Service connection limitations If your instance uses the shared CA ( GOOGLE MANAGED CAS CA ) or customer-managed CA ( CUSTOMER MANAGED CAS CA ) option for its serverCaMode configuration, then the instance can't support connections from the following Google Cloud services: App Engine standard environment App Engine flexible environment Cloud Run services that run in a first generation execution environment What's next Configure SSL/TLS on your Cloud SQL instance.
- For connections that use Cloud SQL Auth Proxy or Cloud SQL Language Connectors, the connections are automatically encrypted with SSL/TLS along with client and server identity verification without requiring you to download a server CA certificate and client certificate.
- Connect using SSL/TLS When connecting to a Cloud SQL instance from clients, you can use SSL/TLS for direct connections as well as for connections that use Cloud SQL Auth Proxy or Cloud SQL Language Connectors .

### "Manage users with IAM database authentication \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users)
- Source ID: `site-docs-reference-3`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You only need to run this command once per project, and you can run it in any directory. export GOOGLE CLOUD PROJECT= PROJECT ID Environment variables are overridden if you set explicit values in the Terraform configuration file.
- You only need to run this command once per project, and you can run it in any directory. export GOOGLE CLOUD PROJECT= PROJECT ID Environment variables are overridden if you set explicit values in the Terraform configuration file.
- You only need to run this command once per project, and you can run it in any directory. export GOOGLE CLOUD PROJECT= PROJECT ID Environment variables are overridden if you set explicit values in the Terraform configuration file.
- You only need to run this command once per project, and you can run it in any directory. export GOOGLE CLOUD PROJECT= PROJECT ID Environment variables are overridden if you set explicit values in the Terraform configuration file.

### "Connect from Cloud Run functions \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions)
- Source ID: `site-docs-reference-3`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- URL . create ( drivername = "mysql+pymysql" , username = db user , password = db pass , database = db name , query = { "unix socket" : unix socket path }, ), ... ) return pool Java To see this snippet in the context of a web application, view the README on GitHub . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class ConnectorConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String INSTANCE CONNECTION NAME = System . getenv ( "INSTANCE CONNECTION NAME" ); private static final String INSTANCE UNIX SOCKET = System . getenv ( "INSTANCE UNIX SOCKET" ); private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.
- Note: INSTANCE CONNECTION NAME should be represented as <MY-PROJECT>:<INSTANCE-REGION>:<INSTANCE-NAME> Using the argument ipTypes=PRIVATE will force the SocketFactory to connect with an instance's associated private IP See the JDBC socket factory version requirements for the pom.xml file . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class TcpConnectionPoolFactory extends ConnectionPoolFactory { // Saving credentials in environment variables is convenient, but not secure - consider a more // secure solution such as https://cloud.google.com/secret-manager/ to help keep secrets safe. private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); private static final String INSTANCE HOST = System . getenv ( "INSTANCE HOST" ); private static final String DB PORT = System . getenv ( "DB PORT" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.
- Errorf ( "sql.Open: %w" , err ) } // ... return dbPool , nil } PHP To see this snippet in the context of a web application, view the README on GitHub . namespace Google\Cloud\Samples\CloudSQL\MySQL; use PDO; use PDOException; use RuntimeException; use TypeError; class DatabaseUnix { public static function initUnixDatabaseConnection(): PDO { try { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. $username = getenv('DB USER'); // e.g. 'your db user' $password = getenv('DB PASS'); // e.g. 'your db password' $dbName = getenv('DB NAME'); // e.g. 'your db name' $instanceUnixSocket = getenv('INSTANCE UNIX SOCKET'); // e.g. '/cloudsql/project:region:instance' // Connect using UNIX sockets $dsn = sprintf( 'mysql:dbname=%s;unix socket=%s', $dbName, $instanceUnixSocket ); // Connect to the database. $conn = new PDO( $dsn, $username, $password, ... ); } catch (TypeError $e) { throw new RuntimeException( sprintf( 'Invalid or missing configuration!
- Note: INSTANCE CONNECTION NAME should be represented as <MY-PROJECT>:<INSTANCE-REGION>:<INSTANCE-NAME> See the JDBC socket factory version requirements for the pom.xml file here . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class ConnectorConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String INSTANCE CONNECTION NAME = System . getenv ( "INSTANCE CONNECTION NAME" ); private static final String INSTANCE UNIX SOCKET = System . getenv ( "INSTANCE UNIX SOCKET" ); private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.

