---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.339Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "squeeze.worker_role flag"
feature_slug: "squeeze-worker-role-flag"
latest_feature_date: "2024-02-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
keywords:
  - "squeeze"
  - "worker"
  - "role"
  - "flag"
  - "the"
  - "specifies"
  - "used"
  - "by"
---

# squeeze.worker_role flag

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

The squeeze.worker_role flag specifies the role used by the pg_squeeze background worker.

## Extended Definition

The squeeze.worker_role flag specifies the role used by the pg_squeeze background worker.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Flags cloudsql.enable pg squeeze : enables the pg squeeze extension for Cloud SQL for PostgreSQL squeeze.max xlock time : sets the time (in milliseconds) that the extension uses to finalize the processing for modifying a table squeeze.worker autostart : starts a background worker automatically squeeze.worker role : specifies the role for the background worker The rollout of the following minor versions, extension versions, and plugin versions is underway : Minor versions 11.21 is upgraded to 11.22.
- February 08, 2022 Feature Cloud SQL supports the max parallel maintenance workers , max parallel workers , max parallel workers per gather , and max pred locks per transaction flags: max parallel maintenance workers sets the maximum number of parallel workers that can be started by a single utility command. max parallel workers sets the maximum number of workers that the system can support for parallel operations. max parallel workers per gather sets the maximum number of workers that can be started by a single Gather or Gather Merge node. max pred locks per transaction controls the average number of object locks allocated for each transaction.
- You can use this to track the last time that a row in a database table is modified. pg background (version 1.2): lets you run arbitrary commands in a background worker. pg squeeze (version 1.5): removes unused space from a table and lets you use an index to sort records or rows (tuples) of the table. tcn (version 1.0): provides a trigger function that notifies listeners of changes to the content of database tables.
- September 28, 2023 Feature The following pg wait sampling and rdkit flags are generally available: pg wait sampling flags cloudsql.enable pg wait sampling: enable the pg wait sampling extension for Cloud SQL for PostgreSQL instances. pg wait sampling.history size: set the size of the in-memory ring buffer for history sampling, in terms of the number of samples. pg wait sampling.history period: set the time interval for history sampling, in milliseconds. pg wait sampling.profile period: set the time interval for profile sampling for wait events, in milliseconds. pg wait sampling.profile pid: specify whether the wait profile that accumulates samples for each process and waits event is collected for each process or for all processes. pg wait sampling.profile queries: specify whether the wait profile is collected for each query or for all queries. rdkit flags rdkit.tanimoto threshold: set the threshold value for the Tanimoto similarity operator. rdkit.dice threshold: set the threshold value for the Dice similarity operator. rdkit.do chiral sss: specify whether stereochemistry is used in substructure matching. rdkit.do enhanced stereo sss: specify whether enhanced stereo is used in substructure matching. rdkit.sss fp size: set the size of the fingerprint used for substructure screening, in bits. rdkit.morgan fp size: set the size of morgan fingerprints, in bits. rdkit.featmorgan fp size: set the size of featmorgan fingerprints, in bits. rdkit.layered fp size: set the size of layered fingerprints, in bits. rdkit.rdkit fp size: set the size of rdkit fingerprints, in bits. rdkit.hashed torsion fp size: set the size of topological torsion bit vector fingerprints, in bits. rdkit.hashed atompair fp size: set the size of atom pair bit vector fingerprints, in bits. rdkit.reaction sss fp size: set the size of the structural chemical reaction fingerprint, in bits. rdkit.reaction difference fp size: set the size of the difference chemical reaction fingerprint, in bits. rdkit.reaction sss fp type: specify the type of structural chemical reaction fingerprint. rdkit.reaction difference fp type: specify the type of difference chemical reaction fingerprint. rdkit.ignore reaction agents: specify whether agents of a chemical reaction are taken into account. rdkit.agent FP bit ratio: specify the weight of the impact of agents contained in a chemical reaction fingerprint. rdkit.move unmmapped reactants to agents: specify whether unmapped reactant agents of a chemical reaction are taken into account. rdkit.threshold unmapped reactant atoms: set the ratio of allowed unmapped reactant atoms. rdkit.init reaction: specify whether the reaction is ready for use. rdkit.difference FP weight agents: specify the weight factor for agents compared to reactants and products in reaction difference fingerprints. rdkit.difference FP weight nonagents: specify the weight factor for reactants and products compared to agents in reaction difference fingerprints. rdkit.avalon fp size: set the size of avalon fingerprints, in bits.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Flags cloudsql.enable pg squeeze : enables the pg squeeze extension for Cloud SQL for PostgreSQL squeeze.max xlock time : sets the time (in milliseconds) that the extension uses to finalize the processing for modifying a table squeeze.worker autostart : starts a background worker automatically squeeze.worker role : specifies the role for the background worker The rollout of the following minor versions, extension versions, and plugin versions is underway : Minor versions 11.21 is upgraded to 11.22.
- February 08, 2022 Cloud SQL for PostgreSQL Feature Cloud SQL supports the max parallel maintenance workers , max parallel workers , max parallel workers per gather , and max pred locks per transaction flags: max parallel maintenance workers sets the maximum number of parallel workers that can be started by a single utility command. max parallel workers sets the maximum number of workers that the system can support for parallel operations. max parallel workers per gather sets the maximum number of workers that can be started by a single Gather or Gather Merge node. max pred locks per transaction controls the average number of object locks allocated for each transaction.
- You can use this to track the last time that a row in a database table is modified. pg background (version 1.2): lets you run arbitrary commands in a background worker. pg squeeze (version 1.5): removes unused space from a table and lets you use an index to sort records or rows (tuples) of the table. tcn (version 1.0): provides a trigger function that notifies listeners of changes to the content of database tables.
- September 28, 2023 Cloud SQL for PostgreSQL Feature The following pg wait sampling and rdkit flags are generally available: pg wait sampling flags cloudsql.enable pg wait sampling: enable the pg wait sampling extension for Cloud SQL for PostgreSQL instances. pg wait sampling.history size: set the size of the in-memory ring buffer for history sampling, in terms of the number of samples. pg wait sampling.history period: set the time interval for history sampling, in milliseconds. pg wait sampling.profile period: set the time interval for profile sampling for wait events, in milliseconds. pg wait sampling.profile pid: specify whether the wait profile that accumulates samples for each process and waits event is collected for each process or for all processes. pg wait sampling.profile queries: specify whether the wait profile is collected for each query or for all queries. rdkit flags rdkit.tanimoto threshold: set the threshold value for the Tanimoto similarity operator. rdkit.dice threshold: set the threshold value for the Dice similarity operator. rdkit.do chiral sss: specify whether stereochemistry is used in substructure matching. rdkit.do enhanced stereo sss: specify whether enhanced stereo is used in substructure matching. rdkit.sss fp size: set the size of the fingerprint used for substructure screening, in bits. rdkit.morgan fp size: set the size of morgan fingerprints, in bits. rdkit.featmorgan fp size: set the size of featmorgan fingerprints, in bits. rdkit.layered fp size: set the size of layered fingerprints, in bits. rdkit.rdkit fp size: set the size of rdkit fingerprints, in bits. rdkit.hashed torsion fp size: set the size of topological torsion bit vector fingerprints, in bits. rdkit.hashed atompair fp size: set the size of atom pair bit vector fingerprints, in bits. rdkit.reaction sss fp size: set the size of the structural chemical reaction fingerprint, in bits. rdkit.reaction difference fp size: set the size of the difference chemical reaction fingerprint, in bits. rdkit.reaction sss fp type: specify the type of structural chemical reaction fingerprint. rdkit.reaction difference fp type: specify the type of difference chemical reaction fingerprint. rdkit.ignore reaction agents: specify whether agents of a chemical reaction are taken into account. rdkit.agent FP bit ratio: specify the weight of the impact of agents contained in a chemical reaction fingerprint. rdkit.move unmmapped reactants to agents: specify whether unmapped reactant agents of a chemical reaction are taken into account. rdkit.threshold unmapped reactant atoms: set the ratio of allowed unmapped reactant atoms. rdkit.init reaction: specify whether the reaction is ready for use. rdkit.difference FP weight agents: specify the weight factor for agents compared to reactants and products in reaction difference fingerprints. rdkit.difference FP weight nonagents: specify the weight factor for reactants and products compared to agents in reaction difference fingerprints. rdkit.avalon fp size: set the size of avalon fingerprints, in bits.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- However, because the Cloud SQL Auth Proxy always connects from a hostname that cannot be accessed except by the Cloud SQL Auth Proxy, you can create a user account that can be used only by the Cloud SQL Auth Proxy.
- The Cloud SQL Auth Proxy checks for each of the following items, in the following order, using the first one it finds to attempt to authenticate: Credentials supplied by the credentials-file flag.
- Pooling = true ; // Specify additional properties here. return connectionString ; } } } Ruby To see this snippet in the context of a web application, view the README on GitHub . tcp : & tcp adapter : mysql2 Configure additional properties here Note: Saving credentials in environment variables is convenient, but not secure - consider a more secure solution such as Cloud Secret Manager (https://cloud.google.com/secret-manager) to help keep secrets safe. username : < %= ENV["DB USER"] %> # e.g. "my-database-user" password: <%= ENV [ "DB PASS" ] % > # e.g. "my-database-password" database : < %= ENV.fetch("DB NAME") { "vote development" } % > host: "<%= ENV . fetch ( "INSTANCE HOST" ) { "127.0.0.1" } %>" # '172.17.0.1' if deployed to GAE Flex port: <%= ENV.fetch(" DB PORT ") { 3306 }% > PHP To see this snippet in the context of a web application, view the README on GitHub . namespace Google\Cloud\Samples\CloudSQL\MySQL; use PDO; use PDOException; use RuntimeException; use TypeError; class DatabaseTcp { public static function initTcpDatabaseConnection(): PDO { try { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. $username = getenv('DB USER'); // e.g. 'your db user' $password = getenv('DB PASS'); // e.g. 'your db password' $dbName = getenv('DB NAME'); // e.g. 'your db name' $instanceHost = getenv('INSTANCE HOST'); // e.g. '127.0.0.1' ('172.17.0.1' for GAE Flex) // Connect using TCP $dsn = sprintf('mysql:dbname=%s;host=%s', $dbName, $instanceHost); // Connect to the database $conn = new PDO( $dsn, $username, $password, ... ); } catch (TypeError $e) { throw new RuntimeException( sprintf( 'Invalid or missing configuration!
- URL . create ( drivername = "mysql+pymysql" , username = db user , password = db pass , database = db name , query = { "unix socket" : unix socket path }, ), ... ) return pool Java To see this snippet in the context of a web application, view the README on GitHub . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class ConnectorConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String INSTANCE CONNECTION NAME = System . getenv ( "INSTANCE CONNECTION NAME" ); private static final String INSTANCE UNIX SOCKET = System . getenv ( "INSTANCE UNIX SOCKET" ); private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.

