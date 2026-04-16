---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.811Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "wal_buffers flag"
feature_slug: "wal-buffers-flag"
latest_feature_date: "2021-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/flags"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics"
keywords:
  - "buffering"
  - "amount"
  - "buffers"
  - "memory"
  - "used"
  - "sets"
  - "flag"
---

# wal_buffers flag

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The wal_buffers flag sets the amount of memory used for buffering write-ahead log data.

## Extended Definition

The wal_buffers flag sets the amount of memory used for buffering write-ahead log data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)

## Supporting Pages

### Configure database flags | Cloud SQL for PostgreSQL | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags)
- Source ID: `feature-recovery-direct-http`
- Final score: 259
- Re-rank relevance: N/A

Evidence snippets:
- Configure database flags | Cloud SQL for PostgreSQL | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Cloud SQL PostgreSQL Start free Overview Guides Reference Samples Resources Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Cloud SQL editions overview Cloud SQL for PostgreSQL features Key terms Get started Free trial instances Free trial instance overview Create a free trial instance Quickstart: Create and query a database in the Cloud Console Create an instance in a private network and then import a database Connect from a Cloud Service Quickstart: Connect from Cloud Shell Quickstart: Connect from Cloud Run Quickstart: Connect from Google Kubernetes Engine Quickstart: Connect from App Engine standard environment Quickstart: Connect from App Engine flexible environment Quickstart: Connect from Compute Engine Quickstart: Connect using private IP Quickstart: Connect using the Cloud SQL Auth proxy Quickstart: Connect from your local computer Plan and prepare Overview Choose a Cloud SQL edition Choose a machine series Choose a storage option Region availability Data cache overview Create and manage Instances Create instances Edit instances Clone instances Start, stop, and restart instances Label instances Delete instances Prevent deletion of an instance Supported instance settings View instance information Configure database flags Configure PostgreSQL extensions Manage instance locations Manage connectivity tests Manage capacity About storage shrink Shrink instance storage capacity Manage maintenance updates Maintenance updates on instances View and set maintenance windows Perform self-service maintenance Upgrade Upgrade an instance to Cloud SQL Enterprise Plus edition Upgrade an instance by using in-place upgrade Upgrade an instance by using IP allowlists Upgrade an instance by using VPC peering Upgrade an instance to the new network architecture Upgrade the database major version Upgrade the database major version in-place Upgrade the database major version by migrating data Use best practices General best practices Operational guidelines Manage memory usage Databases Create and manage databases Execute SQL statements using the Cloud SQL Data API Users About PostgreSQL users Cloud SQL built-in database authentication Create and manage users Cloud SQL Studio Manage your data using Cloud SQL Studio Write SQL with Gemini assistance Manage your resources using Knowledge Catalog Secure and control access Overview About access control Data privacy strategies Data residency overview Use Secret Manager to handle secrets in Cloud SQL Organization policies Cloud SQL organization policies Add predefined organization policies Add custom organization policies Identity and Access Management (IAM) IAM authentication Roles and permissions Use IAM Conditions Configure instances for IAM database authentication Manage users with IAM database authentication Log in using IAM database authentication Fine-grained access control with tags Access control with Google Cloud tags Attach and manage tags on Cloud SQL instances Use encryption About client-side encryption About customer-managed encryption keys (CMEK) Use customer-managed encryption keys (CMEK) Configure VPC Service Controls Use Cloud SQL brute-force protection Connect Choose how to connect to Cloud SQL Authorize with authorized networks Connect to an instance using public IP Configure public IP Connect to an instance using private IP Learn about using private IP Configure private IP Configure private services access Connect to an instance using a write endpoint Private Service Connect overview Connect to an instance using Private Service Connect Configure both private services access and Private Service Connect Connect to your instance across Multiple VPCs Connect using SSL/TLS certificates Authorize with SSL/TLS certificates Configure SSL/TLS certificates Manage SSL/TLS certificates Use a customer-managed certificate authority (CA) Set up a custom DNS name Connect using Cloud SQL Language Connectors Cloud SQL Language Connectors overview Connect using the Cloud SQL Language Connectors Connect using the Cloud SQL Auth Proxy About the Cloud SQL Auth Proxy Connect using the Cloud SQL Auth Proxy Connect using Cloud SQL Proxy Operator Use Managed Connection Pooling Managed Connection Pooling overview Configure Managed Connection Pooling Connect from applications Connect using a psql client Connect from Cloud Run Connect from Cloud Functions Connect from App Engine (Standard) Connect from App Engine (Flexible) Connect from Compute Engine Connect from Kubernetes Engine Connect from Cloud Build Manage database connections Connect to an instance from outside its VPC Replicate About replication in Cloud SQL Create and manage replicas Create read replicas Manage read replicas Promote replicas for regional migration or disaster recovery Replication lag Create and manage read pools About read pools Create a read pool Read pool autoscaling Set up logical replication and decoding Configure external replicas Replicate from an external server About replicating from an external server Configure Cloud SQL and the external server for replication Use a managed import to set up replication from external databases About data migration in Cloud SQL Availability and disaster recovery (DR) Availability in Cloud SQL About high availability (HA) Enable and disable high availability (HA) on an instance About disaster recovery (DR) Use advanced disaster recovery (DR) Back up and restore Back up an instance Cloud SQL backups overview Choose your backup option Manage standard backups Manage enhanced backups Manage backups for deleted instances Restore an instance Overview Restore an instance using a backup Configure point-in-time recovery Perform point-in-time recovery Import and export Best practices for importing and exporting data Export and import using pg_dump, pg_dumpall, and pg_restore Export and import using SQL dump files Export and import using CSV files Export and import files in parallel Cancel the import and export of data Check the status of import and export operations Develop Build generative AI applications using Cloud SQL Overview Integrate Cloud SQL with Vertex AI Invoke online predictions Understand an example of an embedding workflow Build LLM-powered applications using LangChain Build LLM-powered applications using LlamaIndex Interact with custom models using model endpoint management Overview Register a model Generate embeddings Invoke predictions Model endpoint management reference Vector search Generate and manage vector embeddings Use Cloud SQL for PostgreSQL with agents Use the Cloud SQL remote MCP server Best practices for securing agent interactions with MCP Use saved queries Overview Create and manage saved queries Vector assist Overview Use Vector assist Vector assist reference Query database in natural language with QueryData Use context sets Context sets overview Build context sets using Gemini CLI Manage context sets in Cloud SQL Studio Query your agentic application data QueryData overview Test QueryData in Cloud SQL Studio Integrate QueryData with an application Monitor and optimize About database observability Monitor and troubleshoot with AI assistance Audit Audit logs Auditing for PostgreSQL using pgAudit Query performance Use query insights Use index advisor Monitor active queries System performance Monitor instances View instance logs Use system insights Find and fix Index inconsistencies Foreign key violations Apply recommendations Disable public IP Enable database auditing Enforce SSL/TLS encryption Improve instance reliability by enabling high availability Improve performance with AlloyDB for PostgreSQL Improve performance with Enterprise Plus Monitor disk availability Optimize high CPU usage Optimize high memory usage Optimize queries with high memory usage Prevent data loss by enabling automated backups Prevent data loss by increasing backup retention Prevent transaction ID wraparound Reduce idle Cloud SQL instances Reduce overprovisioned Cloud SQL instances Reduce underprovisioned Cloud SQL instances Remove authorized networks Remove broad public IP ranges Rotate server certificates Set instance password policies Set user password policies Use Looker with Cloud SQL Troubleshoot Troubleshoot slow queries with AI assistance Troubleshoot high database load with AI assistance Known issues Troubleshoot Error messages Debug connection issues Diagnose issues Overcome transaction ID (TXID) wraparound protection Issues updating storage capacity AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback Configure database flags Stay organized with collections Save and categorize content based on your preferences.
- Memory (GB) on largest instance Default value tiny (~0.5) 25 small (~1.7) 50 from 3.75 to 100 from 6 to 200 from 7.5 to 400 from 15 to 500 from 30 to 600 from 60 to 800 >=120 1,000 Note: To determine the maximum value that you can set for this flag, you must first calculate the number of backend connections that are already in use.
- Two flags associated with the bgwriter flag are bgwriter_delay and bgwriter_lru_maxpages . bgwriter_delay specifies the delay between activity rounds for the background writer in milliseconds (ms), and bgwriter_lru_maxpages specifies how many buffers will be written by the background writer.
- Yes max_connections integer 14 ... varies (see note) The default value depends on the amount of memory of the largest instance in the chain of primaries (this instance; and, if it's a read replica, its primary, its primary's primary, etc. all the way up to the root of the replication tree).

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Or, alternatively, you can use the --tier flag if you choose db-f1-micro or db-g1-small as the machine type: gcloud sql instances create INSTANCE NAME \ --tier = API TIER STRING \ --region = REGION There are restrictions on the values for vCPUs and memory size: vCPUs must be either 1 or an even number between 2 and 96.
- If you used the --allocated-ip-range-name flag while creating the Cloud SQL instance, you may only expand the specified IP range.
- For Shared core, each machine type is classified by the number of CPUs (cores) and amount of memory for your instance.
- When you select this option, you need to select the number of cores and amount of memory for your instance.

### Cloud SQL metrics \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- The lazy writer is a system process that flushes out batches of dirty, aged buffers (buffers that contain changes that must be written back to disk before the buffer can be reused for a different page) and makes them available to user processes.
- After sampling, data is not visible for up to 165 seconds. database/sqlserver/memory/lazy write count GA (project) Lazy writes DELTA , INT64 , 1 cloudsql database Total number of buffers written by the buffer manager's lazy writer.
- After sampling, data is not visible for up to 165 seconds. state : Database state, for example, 'ONLINE' or 'SUSPECT'. recovery model : Database recovery model, one of [FULL, BULK LOGGED, SIMPLE]. is cdc enabled : (BOOL) Indicates whether CDC is enabled. is published : (BOOL) Indicates whether a database is published. auto close : (BOOL) Indicates whether auto-close is enabled on a database. database/sqlserver/memory/buffer cache hit ratio GA (project) Buffer cache hit ratio GAUGE , DOUBLE , % cloudsql database Current percentage of pages found in the buffer cache without having to read from disk.
- After sampling, data is not visible for up to 165 seconds. event type : Kind of Mysql event, one of [innodb hash0hash,innodb memory,innodb row0sel,sql table,sql thd main,sql dd,sql string,mysys iocache] database/mysql/memory/global GA (project) Global memory allocated GAUGE , DOUBLE , By cloudsql database The total allocated memory, reported by performance schema.

