---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.420Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "pg_similarity extension"
feature_slug: "pg-similarity-extension"
latest_feature_date: "2021-06-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/ai-overview"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
keywords:
  - "pg"
  - "similarity"
  - "extension"
  - "sql"
  - "for"
  - "postgresql"
  - "supports"
  - "the"
---

# pg_similarity extension

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports the pg_similarity extension for similarity queries.

## Extended Definition

Cloud SQL for PostgreSQL supports the pg_similarity extension for similarity queries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/ai-overview](https://docs.cloud.google.com/sql/docs/postgres/ai-overview)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- Feature Cloud SQL for PostgreSQL now supports the pg similarity extension, which provides support for similarity queries in PostgreSQL.
- September 28, 2023 Feature The following pg wait sampling and rdkit flags are generally available: pg wait sampling flags cloudsql.enable pg wait sampling: enable the pg wait sampling extension for Cloud SQL for PostgreSQL instances. pg wait sampling.history size: set the size of the in-memory ring buffer for history sampling, in terms of the number of samples. pg wait sampling.history period: set the time interval for history sampling, in milliseconds. pg wait sampling.profile period: set the time interval for profile sampling for wait events, in milliseconds. pg wait sampling.profile pid: specify whether the wait profile that accumulates samples for each process and waits event is collected for each process or for all processes. pg wait sampling.profile queries: specify whether the wait profile is collected for each query or for all queries. rdkit flags rdkit.tanimoto threshold: set the threshold value for the Tanimoto similarity operator. rdkit.dice threshold: set the threshold value for the Dice similarity operator. rdkit.do chiral sss: specify whether stereochemistry is used in substructure matching. rdkit.do enhanced stereo sss: specify whether enhanced stereo is used in substructure matching. rdkit.sss fp size: set the size of the fingerprint used for substructure screening, in bits. rdkit.morgan fp size: set the size of morgan fingerprints, in bits. rdkit.featmorgan fp size: set the size of featmorgan fingerprints, in bits. rdkit.layered fp size: set the size of layered fingerprints, in bits. rdkit.rdkit fp size: set the size of rdkit fingerprints, in bits. rdkit.hashed torsion fp size: set the size of topological torsion bit vector fingerprints, in bits. rdkit.hashed atompair fp size: set the size of atom pair bit vector fingerprints, in bits. rdkit.reaction sss fp size: set the size of the structural chemical reaction fingerprint, in bits. rdkit.reaction difference fp size: set the size of the difference chemical reaction fingerprint, in bits. rdkit.reaction sss fp type: specify the type of structural chemical reaction fingerprint. rdkit.reaction difference fp type: specify the type of difference chemical reaction fingerprint. rdkit.ignore reaction agents: specify whether agents of a chemical reaction are taken into account. rdkit.agent FP bit ratio: specify the weight of the impact of agents contained in a chemical reaction fingerprint. rdkit.move unmmapped reactants to agents: specify whether unmapped reactant agents of a chemical reaction are taken into account. rdkit.threshold unmapped reactant atoms: set the ratio of allowed unmapped reactant atoms. rdkit.init reaction: specify whether the reaction is ready for use. rdkit.difference FP weight agents: specify the weight factor for agents compared to reactants and products in reaction difference fingerprints. rdkit.difference FP weight nonagents: specify the weight factor for reactants and products compared to agents in reaction difference fingerprints. rdkit.avalon fp size: set the size of avalon fingerprints, in bits.
- January 17, 2025 Feature Cloud SQL for PostgreSQL version 17 adds support for the following extensions and plugins: Extensions and plugins ip4r oracle fdw orafce pg background pg bigm pgfincore pg hint plan pg partman pg proctab pgrouting pg similarity pgtap pgtt pg wait sampling PL/Proxy plv8 postgresql anonymizer postgresql hll prefix temporal tables Cloud SQL for PostgreSQL version 17 doesn't support: rdkit pg squeeze To use these extensions and plugins in your PostgreSQL 17 instance, update your instance to the POSTGRES 17 2.R20241011.00 11 maintenance version.
- Extensions Cloud SQL for PostgreSQL version 17 doesn't support these extensions: ip4r oracle fdw orafce pg background pg bigm pgfincore pg hint plan pg partman pg proctab pgrouting pg similarity pg squeeze pgtap pgtt pg wait sampling PL/Proxy plv8 postgresql anonymizer postgresql hll prefix rdkit temporal tables To start using PostgreSQL 17, see Create instances .

### "Build generative AI applications using Cloud SQL \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/ai-overview](https://docs.cloud.google.com/sql/docs/postgres/ai-overview)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use the app to build a basic chatbot API that: Integrates GKE or Cloud Run with Cloud SQL, Vertex AI, and pgvector Demonstrates connectivity to Cloud SQL using Private Service Connect in a Virtual Private Cloud (VPC) Uses Terraform to configure your infrastructure Uses Python with asyncpg and FastAPI Supports setting up Cloud SQL and an app that runs on either GKE or Cloud Run in separate Google Cloud projects The solution contains the following contents: Terraform templates to set up your infrastructure with best practices for security A sample app for an LLM-powered Chatbot that you can deploy to GKE or Cloud Run What's next Integrate Cloud SQL with Vertex AI Work with vector embeddings Invoke online predictions from Cloud SQL instances Understand an example of an embedding workflow Build LLM-powered applications using LangChain Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Store, index, and query vector embeddings with pgvector You can store, index, and query vector embeddings in Cloud SQL by using the pgvector PostgreSQL extension.
- Cloud SQL for PostgreSQL supports pgvector and integrates with both Vertex AI and LangChain.
- Cloud SQL provides the following metrics in the Metrics Explorer in Cloud Monitoring: Metric Description Metric label Data cache used The data cache usage (in bytes) database/data cache/bytes used Data cache quota The maximum data cache size (in bytes) database/data cache/quota Data cache hit count The total number of data cache hit read operations for an instance database/postgresql/data cache/hit count Data cache miss count The total number of data cache miss read operations for an instance database/postgresql/data cache/miss count Data cache hit ratio The ratio of data cache hit read operations to data cache miss read operations for an instance database/postgresql/data cache/hit ratio System Insights : provide system metrics such as CPU utilization, disk utilization, and throughput to help you monitor the health of instances and troubleshoot issues that affect the performance of your generative AI applications.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- URL . create ( drivername = "postgresql+pg8000" , username = db user , password = db pass , database = db name , query = { "unix sock" : f " { unix socket path } /.s.PGSQL.5432" }, ), ... ) return pool Java To see this snippet in the context of a web application, view the README on GitHub . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class ConnectorConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String INSTANCE CONNECTION NAME = System . getenv ( "INSTANCE CONNECTION NAME" ); private static final String INSTANCE UNIX SOCKET = System . getenv ( "INSTANCE UNIX SOCKET" ); private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.
- Engine : """Initializes a Unix socket connection pool for a Cloud SQL instance of Postgres.""" Note: Saving credentials in environment variables is convenient, but not secure - consider a more secure solution such as Cloud Secret Manager (https://cloud.google.com/secret-manager) to help keep secrets safe. db user = os . environ [ "DB USER" ] # e.g. 'my-database-user' db pass = os . environ [ "DB PASS" ] # e.g. 'my-database-password' db name = os . environ [ "DB NAME" ] # e.g. 'my-database' unix socket path = os . environ [ "INSTANCE UNIX SOCKET" ] # e.g. '/cloudsql/project:region:instance' pool = sqlalchemy . create engine ( Equivalent URL: postgresql+pg8000://<db user>:<db pass>@/<db name> ?unix sock=<INSTANCE UNIX SOCKET>/.s.PGSQL.5432 Note: Some drivers require the unix sock query parameter to use a different key.
- Note: Saving credentials in environment variables is convenient, but not secure - consider a more secure solution such as Cloud Secret Manager (https://cloud.google.com/secret-manager) to help keep secrets safe. username : < %= ENV["DB USER"] %> # e.g. "my-database-user" password: <%= ENV [ "DB PASS" ] % > # e.g. "my-database-password" database : < %= ENV.fetch("DB NAME") { "vote development" } % > host: <%= ENV . fetch ( "INSTANCE HOST" ) { "127.0.0.1" } % > # '172.17.0.1' if deployed to GAE Flex port : < %= ENV . fetch ( "DB PORT" ) { 5432 } % > PHP To see this snippet in the context of a web application, view the README on GitHub . namespace Google\Cloud\Samples\CloudSQL\Postgres; use PDO; use PDOException; use RuntimeException; use TypeError; class DatabaseTcp { public static function initTcpDatabaseConnection(): PDO { try { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. $username = getenv('DB USER'); // e.g. 'your db user' $password = getenv('DB PASS'); // e.g. 'your db password' $dbName = getenv('DB NAME'); // e.g. 'your db name' $instanceHost = getenv('INSTANCE HOST'); // e.g. '127.0.0.1' ('172.17.0.1' for GAE Flex) // Connect using TCP $dsn = sprintf('pgsql:dbname=%s;host=%s', $dbName, $instanceHost); // Connect to the database $conn = new PDO( $dsn, $username, $password, ... ); } catch (TypeError $e) { throw new RuntimeException( sprintf( 'Invalid or missing configuration!
- HikariConfig config = new HikariConfig (); // The following URL is equivalent to setting the config options below: // jdbc:postgresql:///<DB NAME>?cloudSqlInstance=<INSTANCE CONNECTION NAME> & // socketFactory=com.google.cloud.sql.postgres.SocketFactory&user=<DB USER>&password=<DB PASS> // See the link below for more info on building a JDBC URL for the Cloud SQL JDBC Socket Factory // https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory#creating-the-jdbc-url // Configure which instance and what database user to connect with. config . setJdbcUrl ( String . format ( "jdbc:postgresql:///%s" , DB NAME )); config . setUsername ( DB USER ); // e.g. "root", postgres" config . setPassword ( DB PASS ); // e.g. "my-password" config . addDataSourceProperty ( "socketFactory" , "com.google.cloud.sql.postgres.SocketFactory" ); config . addDataSourceProperty ( "cloudSqlInstance" , INSTANCE CONNECTION NAME ); // Unix sockets are not natively supported in Java, so it is necessary to use the Cloud SQL // Java Connector to connect.

