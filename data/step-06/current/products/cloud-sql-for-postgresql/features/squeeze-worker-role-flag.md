---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.774Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "squeeze.worker_role flag"
feature_slug: "squeeze-worker-role-flag"
latest_feature_date: "2024-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/flags"
  - "https://docs.cloud.google.com/sql/docs/postgres/quotas"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
keywords:
  - "specifies"
  - "background"
  - "worker"
  - "squeeze"
  - "role"
  - "used"
  - "flag"
---

# squeeze.worker_role flag

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The squeeze.worker_role flag specifies the role used by the pg_squeeze background worker.

## Extended Definition

The squeeze.worker_role flag specifies the role used by the pg_squeeze background worker.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags)
- [https://docs.cloud.google.com/sql/docs/postgres/quotas](https://docs.cloud.google.com/sql/docs/postgres/quotas)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)

## Supporting Pages

### Configure database flags | Cloud SQL for PostgreSQL | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags)
- Source ID: `feature-recovery-direct-http`
- Final score: 332
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 2147483647 No squeeze.worker_autostart string Yes squeeze.worker_role string Yes ssl_max_protocol_version enumeration Postgres 14: Sets the maximum SSL/TLS protocol version to use.
- For more information about the background writer , see the PostgreSQL documentation. session_replication_role PostgreSQL has the session_replication_role flag, which is designed to be used for logical replication and lets you disable constraint triggers in individual sessions.
- Two flags associated with the bgwriter flag are bgwriter_delay and bgwriter_lru_maxpages . bgwriter_delay specifies the delay between activity rounds for the background writer in milliseconds (ms), and bgwriter_lru_maxpages specifies how many buffers will be written by the background writer.
- Configure database flags | Cloud SQL for PostgreSQL | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Cloud SQL PostgreSQL Start free Overview Guides Reference Samples Resources Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Cloud SQL editions overview Cloud SQL for PostgreSQL features Key terms Get started Free trial instances Free trial instance overview Create a free trial instance Quickstart: Create and query a database in the Cloud Console Create an instance in a private network and then import a database Connect from a Cloud Service Quickstart: Connect from Cloud Shell Quickstart: Connect from Cloud Run Quickstart: Connect from Google Kubernetes Engine Quickstart: Connect from App Engine standard environment Quickstart: Connect from App Engine flexible environment Quickstart: Connect from Compute Engine Quickstart: Connect using private IP Quickstart: Connect using the Cloud SQL Auth proxy Quickstart: Connect from your local computer Plan and prepare Overview Choose a Cloud SQL edition Choose a machine series Choose a storage option Region availability Data cache overview Create and manage Instances Create instances Edit instances Clone instances Start, stop, and restart instances Label instances Delete instances Prevent deletion of an instance Supported instance settings View instance information Configure database flags Configure PostgreSQL extensions Manage instance locations Manage connectivity tests Manage capacity About storage shrink Shrink instance storage capacity Manage maintenance updates Maintenance updates on instances View and set maintenance windows Perform self-service maintenance Upgrade Upgrade an instance to Cloud SQL Enterprise Plus edition Upgrade an instance by using in-place upgrade Upgrade an instance by using IP allowlists Upgrade an instance by using VPC peering Upgrade an instance to the new network architecture Upgrade the database major version Upgrade the database major version in-place Upgrade the database major version by migrating data Use best practices General best practices Operational guidelines Manage memory usage Databases Create and manage databases Execute SQL statements using the Cloud SQL Data API Users About PostgreSQL users Cloud SQL built-in database authentication Create and manage users Cloud SQL Studio Manage your data using Cloud SQL Studio Write SQL with Gemini assistance Manage your resources using Knowledge Catalog Secure and control access Overview About access control Data privacy strategies Data residency overview Use Secret Manager to handle secrets in Cloud SQL Organization policies Cloud SQL organization policies Add predefined organization policies Add custom organization policies Identity and Access Management (IAM) IAM authentication Roles and permissions Use IAM Conditions Configure instances for IAM database authentication Manage users with IAM database authentication Log in using IAM database authentication Fine-grained access control with tags Access control with Google Cloud tags Attach and manage tags on Cloud SQL instances Use encryption About client-side encryption About customer-managed encryption keys (CMEK) Use customer-managed encryption keys (CMEK) Configure VPC Service Controls Use Cloud SQL brute-force protection Connect Choose how to connect to Cloud SQL Authorize with authorized networks Connect to an instance using public IP Configure public IP Connect to an instance using private IP Learn about using private IP Configure private IP Configure private services access Connect to an instance using a write endpoint Private Service Connect overview Connect to an instance using Private Service Connect Configure both private services access and Private Service Connect Connect to your instance across Multiple VPCs Connect using SSL/TLS certificates Authorize with SSL/TLS certificates Configure SSL/TLS certificates Manage SSL/TLS certificates Use a customer-managed certificate authority (CA) Set up a custom DNS name Connect using Cloud SQL Language Connectors Cloud SQL Language Connectors overview Connect using the Cloud SQL Language Connectors Connect using the Cloud SQL Auth Proxy About the Cloud SQL Auth Proxy Connect using the Cloud SQL Auth Proxy Connect using Cloud SQL Proxy Operator Use Managed Connection Pooling Managed Connection Pooling overview Configure Managed Connection Pooling Connect from applications Connect using a psql client Connect from Cloud Run Connect from Cloud Functions Connect from App Engine (Standard) Connect from App Engine (Flexible) Connect from Compute Engine Connect from Kubernetes Engine Connect from Cloud Build Manage database connections Connect to an instance from outside its VPC Replicate About replication in Cloud SQL Create and manage replicas Create read replicas Manage read replicas Promote replicas for regional migration or disaster recovery Replication lag Create and manage read pools About read pools Create a read pool Read pool autoscaling Set up logical replication and decoding Configure external replicas Replicate from an external server About replicating from an external server Configure Cloud SQL and the external server for replication Use a managed import to set up replication from external databases About data migration in Cloud SQL Availability and disaster recovery (DR) Availability in Cloud SQL About high availability (HA) Enable and disable high availability (HA) on an instance About disaster recovery (DR) Use advanced disaster recovery (DR) Back up and restore Back up an instance Cloud SQL backups overview Choose your backup option Manage standard backups Manage enhanced backups Manage backups for deleted instances Restore an instance Overview Restore an instance using a backup Configure point-in-time recovery Perform point-in-time recovery Import and export Best practices for importing and exporting data Export and import using pg_dump, pg_dumpall, and pg_restore Export and import using SQL dump files Export and import using CSV files Export and import files in parallel Cancel the import and export of data Check the status of import and export operations Develop Build generative AI applications using Cloud SQL Overview Integrate Cloud SQL with Vertex AI Invoke online predictions Understand an example of an embedding workflow Build LLM-powered applications using LangChain Build LLM-powered applications using LlamaIndex Interact with custom models using model endpoint management Overview Register a model Generate embeddings Invoke predictions Model endpoint management reference Vector search Generate and manage vector embeddings Use Cloud SQL for PostgreSQL with agents Use the Cloud SQL remote MCP server Best practices for securing agent interactions with MCP Use saved queries Overview Create and manage saved queries Vector assist Overview Use Vector assist Vector assist reference Query database in natural language with QueryData Use context sets Context sets overview Build context sets using Gemini CLI Manage context sets in Cloud SQL Studio Query your agentic application data QueryData overview Test QueryData in Cloud SQL Studio Integrate QueryData with an application Monitor and optimize About database observability Monitor and troubleshoot with AI assistance Audit Audit logs Auditing for PostgreSQL using pgAudit Query performance Use query insights Use index advisor Monitor active queries System performance Monitor instances View instance logs Use system insights Find and fix Index inconsistencies Foreign key violations Apply recommendations Disable public IP Enable database auditing Enforce SSL/TLS encryption Improve instance reliability by enabling high availability Improve performance with AlloyDB for PostgreSQL Improve performance with Enterprise Plus Monitor disk availability Optimize high CPU usage Optimize high memory usage Optimize queries with high memory usage Prevent data loss by enabling automated backups Prevent data loss by increasing backup retention Prevent transaction ID wraparound Reduce idle Cloud SQL instances Reduce overprovisioned Cloud SQL instances Reduce underprovisioned Cloud SQL instances Remove authorized networks Remove broad public IP ranges Rotate server certificates Set instance password policies Set user password policies Use Looker with Cloud SQL Troubleshoot Troubleshoot slow queries with AI assistance Troubleshoot high database load with AI assistance Known issues Troubleshoot Error messages Debug connection issues Diagnose issues Overcome transaction ID (TXID) wraparound protection Issues updating storage capacity AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback Configure database flags Stay organized with collections Save and categorize content based on your preferences.

### Quotas and limits \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/quotas](https://docs.cloud.google.com/sql/docs/postgres/quotas)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- This request header specifies a user project to be used for quota accounting on the request.
- Permissions to check and increase your quotas To check and increase your quotas, you need the following permissions: serviceusage.quotas.get : check your quotas serviceusage.quotas.update : increase your quotas By default, these permissions are included in the basic IAM roles of Editor and Owner and in the predefined Quota Administrator role.
- You can find the connection limits for your instance by connecting to your database and running this command: SELECT FROM pg settings WHERE name = 'max connections'; Note: To determine the maximum value that you can set for this flag, you must first calculate the number of backend connections that are already in use.
- SqlFlagsService.List SqlTiersService.List 180 Limits There are restrictions on some Cloud SQL resources that are not replenished periodically and not shown on the Quotas page in the Google Cloud console.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- When setting INSTANCE UNIX SOCKET, the connector will // call an external package that will enable Unix socket connections. // Note: For Java users, the Cloud SQL Java Connector can provide authenticated connections // which is usually preferable to using the Cloud SQL Proxy with Unix sockets. // See https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory for details. if ( INSTANCE UNIX SOCKET != null ) { config . addDataSourceProperty ( "unixSocketPath" , INSTANCE UNIX SOCKET ); } // cloudSqlRefreshStrategy set to "lazy" is used to perform a // refresh when needed, rather than on a scheduled interval. // This is recommended for serverless environments to // avoid background refreshes from throttling CPU. config . addDataSourceProperty ( "cloudSqlRefreshStrategy" , "lazy" ); // ...
- URL . create ( drivername = "mysql+pymysql" , username = db user , password = db pass , database = db name , query = { "unix socket" : unix socket path }, ), ... ) return pool Java To see this snippet in the context of a web application, view the README on GitHub . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class ConnectorConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String INSTANCE CONNECTION NAME = System . getenv ( "INSTANCE CONNECTION NAME" ); private static final String INSTANCE UNIX SOCKET = System . getenv ( "INSTANCE UNIX SOCKET" ); private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.
- Note: INSTANCE CONNECTION NAME should be represented as <MY-PROJECT>:<INSTANCE-REGION>:<INSTANCE-NAME> Using the argument ipTypes=PRIVATE will force the SocketFactory to connect with an instance's associated private IP See the JDBC socket factory version requirements for the pom.xml file . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class TcpConnectionPoolFactory extends ConnectionPoolFactory { // Saving credentials in environment variables is convenient, but not secure - consider a more // secure solution such as https://cloud.google.com/secret-manager/ to help keep secrets safe. private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); private static final String INSTANCE HOST = System . getenv ( "INSTANCE HOST" ); private static final String DB PORT = System . getenv ( "DB PORT" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.
- Click the Select a role field and select one of the following roles: Cloud SQL > Cloud SQL Client Cloud SQL > Cloud SQL Editor Cloud SQL > Cloud SQL Admin Note: To create a service account with the required permissions, you must have resourcemanager.projects.setIamPolicy permission.

