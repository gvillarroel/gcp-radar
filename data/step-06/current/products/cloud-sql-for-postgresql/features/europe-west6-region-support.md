---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.444Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "europe-west6 region support"
feature_slug: "europe-west6-region-support"
latest_feature_date: "2019-03-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users"
keywords:
  - "europe"
  - "west6"
  - "region"
  - "sql"
  - "for"
  - "postgresql"
  - "added"
  - "the"
---

# europe-west6 region support

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL added support for the europe-west6 region in Zurich, Switzerland.

## Extended Definition

Cloud SQL for PostgreSQL added support for the europe-west6 region in Zurich, Switzerland.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- January 25, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: asia-northeast2 (Osaka) asia-south2 (Delhi) europe-north1 (Finland) europe-southwest1 (Madrid) us-east5 (Columbus) us-south1 (Dallas) December 18, 2023 Feature Cloud SQL Enterprise Plus edition now supports the following regions: europe-west8 (Milan) europe-west12 (Turin) us-west4 (Las Vegas) December 14, 2023 Feature You can now use Database Migration Service to migrate data to an existing Cloud SQL instance that was created using Terraform or other Infrastructure-As-Code (IaC) Tools.
- Eight additional PostgreSQL extensions are now available: pageinspect pgfincore pg freespacemap pg repack pg visibility PL/Proxy postgres fdw postgresql-hll For information about these newly-added extensions, see PostgreSQL extensions .
- Feature Added information about checking the LC COLLATE value for your databases before performing a major version upgrade of the databases for your Cloud SQL for PostgreSQL instance.
- September 28, 2023 Feature The following pg wait sampling and rdkit flags are generally available: pg wait sampling flags cloudsql.enable pg wait sampling: enable the pg wait sampling extension for Cloud SQL for PostgreSQL instances. pg wait sampling.history size: set the size of the in-memory ring buffer for history sampling, in terms of the number of samples. pg wait sampling.history period: set the time interval for history sampling, in milliseconds. pg wait sampling.profile period: set the time interval for profile sampling for wait events, in milliseconds. pg wait sampling.profile pid: specify whether the wait profile that accumulates samples for each process and waits event is collected for each process or for all processes. pg wait sampling.profile queries: specify whether the wait profile is collected for each query or for all queries. rdkit flags rdkit.tanimoto threshold: set the threshold value for the Tanimoto similarity operator. rdkit.dice threshold: set the threshold value for the Dice similarity operator. rdkit.do chiral sss: specify whether stereochemistry is used in substructure matching. rdkit.do enhanced stereo sss: specify whether enhanced stereo is used in substructure matching. rdkit.sss fp size: set the size of the fingerprint used for substructure screening, in bits. rdkit.morgan fp size: set the size of morgan fingerprints, in bits. rdkit.featmorgan fp size: set the size of featmorgan fingerprints, in bits. rdkit.layered fp size: set the size of layered fingerprints, in bits. rdkit.rdkit fp size: set the size of rdkit fingerprints, in bits. rdkit.hashed torsion fp size: set the size of topological torsion bit vector fingerprints, in bits. rdkit.hashed atompair fp size: set the size of atom pair bit vector fingerprints, in bits. rdkit.reaction sss fp size: set the size of the structural chemical reaction fingerprint, in bits. rdkit.reaction difference fp size: set the size of the difference chemical reaction fingerprint, in bits. rdkit.reaction sss fp type: specify the type of structural chemical reaction fingerprint. rdkit.reaction difference fp type: specify the type of difference chemical reaction fingerprint. rdkit.ignore reaction agents: specify whether agents of a chemical reaction are taken into account. rdkit.agent FP bit ratio: specify the weight of the impact of agents contained in a chemical reaction fingerprint. rdkit.move unmmapped reactants to agents: specify whether unmapped reactant agents of a chemical reaction are taken into account. rdkit.threshold unmapped reactant atoms: set the ratio of allowed unmapped reactant atoms. rdkit.init reaction: specify whether the reaction is ready for use. rdkit.difference FP weight agents: specify the weight factor for agents compared to reactants and products in reaction difference fingerprints. rdkit.difference FP weight nonagents: specify the weight factor for reactants and products compared to agents in reaction difference fingerprints. rdkit.avalon fp size: set the size of avalon fingerprints, in bits.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Engine : """Initializes a Unix socket connection pool for a Cloud SQL instance of Postgres.""" Note: Saving credentials in environment variables is convenient, but not secure - consider a more secure solution such as Cloud Secret Manager (https://cloud.google.com/secret-manager) to help keep secrets safe. db user = os . environ [ "DB USER" ] # e.g. 'my-database-user' db pass = os . environ [ "DB PASS" ] # e.g. 'my-database-password' db name = os . environ [ "DB NAME" ] # e.g. 'my-database' unix socket path = os . environ [ "INSTANCE UNIX SOCKET" ] # e.g. '/cloudsql/project:region:instance' pool = sqlalchemy . create engine ( Equivalent URL: postgresql+pg8000://<db user>:<db pass>@/<db name> ?unix sock=<INSTANCE UNIX SOCKET>/.s.PGSQL.5432 Note: Some drivers require the unix sock query parameter to use a different key.
- URL . create ( drivername = "postgresql+pg8000" , username = db user , password = db pass , database = db name , query = { "unix sock" : f " { unix socket path } /.s.PGSQL.5432" }, ), ... ) return pool Java To see this snippet in the context of a web application, view the README on GitHub . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class ConnectorConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String INSTANCE CONNECTION NAME = System . getenv ( "INSTANCE CONNECTION NAME" ); private static final String INSTANCE UNIX SOCKET = System . getenv ( "INSTANCE UNIX SOCKET" ); private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.
- Note: CLOUD SQL CONNECTION NAME should be represented as <MY-PROJECT>:<INSTANCE-REGION>:<INSTANCE-NAME> Using the argument ipTypes=PRIVATE will force the SocketFactory to connect with an instance's associated private IP See the JDBC socket factory version requirements for the pom.xml file . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class TcpConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); private static final String INSTANCE HOST = System . getenv ( "INSTANCE HOST" ); private static final String DB PORT = System . getenv ( "DB PORT" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.
- HikariConfig config = new HikariConfig (); // The following URL is equivalent to setting the config options below: // jdbc:postgresql:///<DB NAME>?cloudSqlInstance=<INSTANCE CONNECTION NAME> & // socketFactory=com.google.cloud.sql.postgres.SocketFactory&user=<DB USER>&password=<DB PASS> // See the link below for more info on building a JDBC URL for the Cloud SQL JDBC Socket Factory // https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory#creating-the-jdbc-url // Configure which instance and what database user to connect with. config . setJdbcUrl ( String . format ( "jdbc:postgresql:///%s" , DB NAME )); config . setUsername ( DB USER ); // e.g. "root", postgres" config . setPassword ( DB PASS ); // e.g. "my-password" config . addDataSourceProperty ( "socketFactory" , "com.google.cloud.sql.postgres.SocketFactory" ); config . addDataSourceProperty ( "cloudSqlInstance" , INSTANCE CONNECTION NAME ); // Unix sockets are not natively supported in Java, so it is necessary to use the Cloud SQL // Java Connector to connect.

### "Manage users with IAM database authentication \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- Source ID: `site-iam-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Terraform To add IAM user and service accounts on an instance with IAM database authentication enabled, use a Terraform resource . resource "google sql database instance" "default" { name = "postgres-db-auth-instance-name-test" region = "us-west4" database version = "POSTGRES 14" settings { tier = "db-custom-2-7680" database flags { name = "cloudsql.iam authentication" value = "on" } } } Specify the email address of the IAM user to add to the instance This resource does not create a new IAM user account; this account must already exist resource "google sql user" "iam user" { name = "test-user@example.com" instance = google sql database instance.default.name type = "CLOUD IAM USER" } Specify the email address of the IAM service account to add to the instance This resource does not create a new IAM service account; this service account must already exist Create a new IAM service account resource "google service account" "default" { account id = "cloud-sql-postgres-sa" display name = "Cloud SQL for Postgres Service Account" } resource "google sql user" "iam service account user" { Note: for PostgreSQL only, Google Cloud requires that you omit the ".gserviceaccount.com" suffix from the service account email due to length limits on database usernames. name = trimsuffix(google service account.default.email, ".gserviceaccount.com") instance = google sql database instance.default.name type = "CLOUD IAM SERVICE ACCOUNT" } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- For example, a log might have information similar to the following: { insertId: "..." logName: "projects/.../logs/cloudaudit.googleapis.com%2Fdata access" protoPayload: { @type: "type.googleapis.com/google.cloud.audit.AuditLog" authenticationInfo: { principalEmail: "..." } authorizationInfo: [ 0: { granted: true permission: "cloudsql.instances.login" resource: "instances/..." resourceAttributes: { } } ] methodName: "cloudsql.instances.login" request: { @type: "type.googleapis.com/google.cloud.sql.authorization.v1.InstancesLoginRequest" clientIpAddress: "..." database: "..." databaseSessionId: ... instance: "projects/.../locations/us-central1/instances/..." user: "..." } requestMetadata: { callerIp: "..." destinationAttributes: { } requestAttributes: { auth: { } time: "..." } } resourceName: "instances/..." serviceName: "cloudsql.googleapis.com" status: { } } receiveTimestamp: "..." resource: { labels: { database id: "...:..." project id: "..." region: "us-central" } type: "cloudsql database" } severity: "INFO" timestamp: "..." } Troubleshoot a login failure When an attempt to log in fails, PostgreSQL returns a minimal error message for security reasons.
- Terraform To add IAM user and service accounts on an instance with IAM database authentication enabled, use a Terraform resource . resource "google sql database instance" "default" { name = "postgres-iam-group-auth-instance-name" region = "us-west4" database version = "POSTGRES 16" settings { tier = "db-custom-2-7680" database flags { name = "cloudsql.iam authentication" value = "on" } } } Specify the email address of the Cloud Identity group to add to the instance This resource does not create a Cloud Identity group; the group must already exist resource "google sql user" "iam group" { name = "example-group@example.com" instance = google sql database instance.default.name type = "CLOUD IAM GROUP" } data "google project" "project" { } resource "google project iam binding" "cloud sql user" { project = data.google project.project.project id role = "roles/cloudsql.instanceUser" members = [ "group:example-group@example.com" ] } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Assign database roles while adding an IAM account to an instance To create a custom database role in PostgreSQL, see Database roles . gcloud Create a user account Use the email, such as example-user@example.com , to identify the user. gcloud sql users create USERNAME \ --instance = INSTANCE NAME \ --type = cloud iam user \ --database-roles = ROLE 1 , ROLE 2 Replace the following: USERNAME : the email address for the user.

