---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.350Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "SSL mode"
feature_slug: "ssl-mode"
latest_feature_date: "2023-10-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
keywords:
  - "ssl"
  - "mode"
  - "lets"
  - "you"
  - "specify"
  - "the"
  - "for"
  - "sql"
---

# SSL mode

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

SSL mode lets you specify the SSL mode for Cloud SQL instances to enforce more precise SSL/TLS encryption behavior.

## Extended Definition

SSL mode lets you specify the SSL mode for Cloud SQL instances to enforce more precise SSL/TLS encryption behavior.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)

## Supporting Pages

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Pooling = true ; // Specify additional properties here. return connectionString ; } } } Ruby To see this snippet in the context of a web application, view the README on GitHub . tcp : & tcp adapter : mysql2 Configure additional properties here Note: Saving credentials in environment variables is convenient, but not secure - consider a more secure solution such as Cloud Secret Manager (https://cloud.google.com/secret-manager) to help keep secrets safe. username : < %= ENV["DB USER"] %> # e.g. "my-database-user" password: <%= ENV [ "DB PASS" ] % > # e.g. "my-database-password" database : < %= ENV.fetch("DB NAME") { "vote development" } % > host: "<%= ENV . fetch ( "INSTANCE HOST" ) { "127.0.0.1" } %>" # '172.17.0.1' if deployed to GAE Flex port: <%= ENV.fetch(" DB PORT ") { 3306 }% > PHP To see this snippet in the context of a web application, view the README on GitHub . namespace Google\Cloud\Samples\CloudSQL\MySQL; use PDO; use PDOException; use RuntimeException; use TypeError; class DatabaseTcp { public static function initTcpDatabaseConnection(): PDO { try { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. $username = getenv('DB USER'); // e.g. 'your db user' $password = getenv('DB PASS'); // e.g. 'your db password' $dbName = getenv('DB NAME'); // e.g. 'your db name' $instanceHost = getenv('INSTANCE HOST'); // e.g. '127.0.0.1' ('172.17.0.1' for GAE Flex) // Connect using TCP $dsn = sprintf('mysql:dbname=%s;host=%s', $dbName, $instanceHost); // Connect to the database $conn = new PDO( $dsn, $username, $password, ... ); } catch (TypeError $e) { throw new RuntimeException( sprintf( 'Invalid or missing configuration!
- For example: ./cloud-sql-proxy --unix-socket /cloudsql \ myProject:us-central1:myInstance myProject:us-central1:myInstance2 & mysql -u myUser -S /cloudsql/myProject:us-central1:myInstance2 TCP sockets When you connect using TCP, you specify a port on your machine for the Cloud SQL Auth Proxy to listen on for each Cloud SQL instance.
- Make sure you have set ' . '$username, $password, $dbName, ' . 'and $instanceUnixSocket (for UNIX socket mode). ' . 'The PHP error was %s', $e->getMessage() ), (int) $e->getCode(), $e ); } catch (PDOException $e) { throw new RuntimeException( sprintf( 'Could not connect to the Cloud SQL Database.
- Make sure you have set ' . '$username, $password, $dbName, and $instanceHost (for TCP mode). ' . 'The PHP error was %s', $e->getMessage() ), $e->getCode(), $e ); } catch (PDOException $e) { throw new RuntimeException( sprintf( 'Could not connect to the Cloud SQL Database.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- For example: ./cloud-sql-proxy --unix-socket /cloudsql \ myProject:us-central1:myInstance myProject:us-central1:myInstance2 & psql -U myUser -h /cloudsql/myProject:us-central1:myInstance2 TCP sockets When you connect using TCP, you specify a port on your machine for the Cloud SQL Auth Proxy to listen on for each Cloud SQL instance.
- Make sure you have set ' . '$username, $password, $dbName, ' . 'and $instanceUnixSocket (for UNIX socket mode). ' . 'The PHP error was %s', $e->getMessage() ), (int) $e->getCode(), $e ); } catch (PDOException $e) { throw new RuntimeException( sprintf( 'Could not connect to the Cloud SQL Database.
- Make sure you have set ' . '$username, $password, $dbName, and $instanceHost (for TCP mode). ' . 'The PHP error was %s', $e->getMessage() ), $e->getCode(), $e ); } catch (PDOException $e) { throw new RuntimeException( sprintf( 'Could not connect to the Cloud SQL Database.
- Note: Saving credentials in environment variables is convenient, but not secure - consider a more secure solution such as Cloud Secret Manager (https://cloud.google.com/secret-manager) to help keep secrets safe. username : < %= ENV["DB USER"] %> # e.g. "my-database-user" password: <%= ENV [ "DB PASS" ] % > # e.g. "my-database-password" database : < %= ENV.fetch("DB NAME") { "vote development" } % > host: <%= ENV . fetch ( "INSTANCE HOST" ) { "127.0.0.1" } % > # '172.17.0.1' if deployed to GAE Flex port : < %= ENV . fetch ( "DB PORT" ) { 5432 } % > PHP To see this snippet in the context of a web application, view the README on GitHub . namespace Google\Cloud\Samples\CloudSQL\Postgres; use PDO; use PDOException; use RuntimeException; use TypeError; class DatabaseTcp { public static function initTcpDatabaseConnection(): PDO { try { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. $username = getenv('DB USER'); // e.g. 'your db user' $password = getenv('DB PASS'); // e.g. 'your db password' $dbName = getenv('DB NAME'); // e.g. 'your db name' $instanceHost = getenv('INSTANCE HOST'); // e.g. '127.0.0.1' ('172.17.0.1' for GAE Flex) // Connect using TCP $dsn = sprintf('pgsql:dbname=%s;host=%s', $dbName, $instanceHost); // Connect to the database $conn = new PDO( $dsn, $username, $password, ... ); } catch (TypeError $e) { throw new RuntimeException( sprintf( 'Invalid or missing configuration!

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- October 30, 2023 Feature The rollout of the following items is complete : The oracle fdw extension, version 1.2 The minor versions, extension versions, and plugin versions listed in the September 21 release note October 27, 2023 Feature You can now specify the SSL mode of your Cloud SQL instances, which gives you more accurate SSL encryption.
- For users of the Cloud SQL Auth Proxy : If the Cloud SQL instance to which you're connecting is using shared certificate authority (CA) for its serverCaMode setting, then on the client side, you must use Cloud SQL Auth Proxy version 2.13.0 or later.
- May 08, 2025 Change If you create an instance using the Google Cloud Console, then the per-instance CA ( GOOGLE MANAGED INTERNAL CA ) option is now the default server certificate authority (CA) mode for your Cloud SQL instance.
- If the Cloud SQL instance to which you're connecting is using customer-managed CA for its serverCaMode setting, then on the client side, you must use Cloud SQL Auth Proxy version 2.14.3 or later.

