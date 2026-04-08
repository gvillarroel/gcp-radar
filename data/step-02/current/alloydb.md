# AlloyDB

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 190
Unique features: 228

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-04-03 | gcloud beta alloydb connect command |  | The new gcloud beta AlloyDB connect command provides a simplified, secure way to connect to AlloyDB instances using the AlloyDB Auth Proxy and psql. |
| 2026-03-31 | AlloyDB hot standby |  | Hot standby for AlloyDB high availability improves failover speed by continuously replicating transactions to a standby node so caches remain warm and ready. |
| 2026-03-30 | AlloyDB conversational analytics |  | Conversational analytics for AlloyDB enables natural-language querying of operational data through the Conversational Analytics API. |
| 2026-03-25 | AlloyDB AI hybrid_search function |  | AlloyDB AI now includes the ai.hybrid_search() function, which blends multiple search result types into one ranked list using Reciprocal Rank Fusion. |
| 2026-03-25 | AlloyDB PostgreSQL 18 compatibility |  | AlloyDB now supports PostgreSQL 18 compatibility, allowing creation of PG18-compatible clusters and one-click upgrades from PostgreSQL 14 through 17; AlloyDB now supports creating clusters with PostgreSQL 18 database server compatibility. |
| 2026-03-25 | AlloyDB RUM extension support |  | AlloyDB now supports the rum extension for complex full-text search, adding positional index data to accelerate phrase search and relevance ranking. |
| 2026-03-20 | AlloyDB node-level metrics |  | AlloyDB now exposes node-level metrics in Cloud Console and Metrics Explorer for troubleshooting read pool performance and identifying regression-causing nodes. |
| 2026-03-16 | AlloyDB C4A machine type support |  | AlloyDB now supports the 2 vCPU c4a-highmem-2-lssd Axion machine type for greater scaling flexibility on Arm-based instances. |
| 2026-03-16 | AlloyDB enhanced backups |  | AlloyDB enhanced backups are generally available, adding support for selecting the Enhanced tier, using project-level tiered backup tabs, and deleting enhanced backups; AlloyDB enhanced backups are generally available, adding support for selecting the Enhanced tier, using project-level tiered backup tabs, and deleting enhanced backups. |
| 2026-03-03 | AlloyDB AI SQL functions |  | AlloyDB AI generally adds SQL functions such as ai.if, ai.rank, ai.generate, and ai.forecast for semantic filtering, ranking, generation, and forecasting in SQL. |
| 2026-03-03 | AlloyDB auto vector embeddings |  | Auto vector embeddings for AlloyDB AI is now generally available, providing managed lifecycle handling and incremental refresh of vector embeddings for large datasets. |
| 2026-02-23 | Gemini Cloud Assist investigation in AlloyDB |  | Gemini Cloud Assist investigation capabilities are now supported in AlloyDB to assist with troubleshooting and query investigation. |
| 2026-02-19 | AlloyDB integration with Database Center |  | AlloyDB now integrates with Cloud Database Center to show prioritized health risks and provide one-click guidance to diagnostics and remediation. |
| 2026-02-17 | AlloyDB AI function call array batching |  | AlloyDB now supports bulk AI function calls using array-based processing instead of row-by-row execution. |
| 2026-02-17 | AlloyDB performance snapshot read pool node support |  | AlloyDB performance snapshot and reports now include observability for read pool instance nodes. |
| 2026-02-17 | AlloyDB remote MCP server |  | The AlloyDB remote MCP server enables easy interaction with AlloyDB clusters from LLMs, AI applications, and AI-enabled development platforms. |
| 2026-02-05 | AlloyDB virtual columns for expressions |  | The columnar engine now supports virtual columns for expressions, caching repeated expression results to improve analytic performance. |
| 2026-01-20 | AlloyDB Bangkok region availability |  | AlloyDB cluster instances can now be created in the Bangkok region (asia-southeast3). |
| 2026-01-19 | AlloyDB Z3 machine series support |  | AlloyDB now supports the Z3 machine series for storage-intensive workloads with larger compute and memory capacities. |
| 2025-12-18 | AlloyDB managed connection pooling |  | Managed connection pooling is generally available in AlloyDB to improve workload scalability and reliability; AlloyDB managed connection pooling is available in Preview to improve workload reliability, scalability, and performance. |
| 2025-12-18 | AlloyDB SQL Report in performance snapshot |  | AlloyDB performance snapshot reports now include an SQL Report section listing the top 50 queries by elapsed time and related I/O metrics. |
| 2025-12-17 | AlloyDB data agents |  | AlloyDB now supports building data agents that use conversational language interfaces to interact with database data. |
| 2025-12-17 | Gemini 3.0 Flash for AlloyDB AI functions |  | AlloyDB now supports using the Gemini 3.0 Flash preview model when invoking generative AI functions like AI.GENERATE. |
| 2025-12-11 | AlloyDB C4 machine series support |  | AlloyDB now supports the C4 machine series with larger vCPU and RAM options for very demanding workloads. |
| 2025-12-08 | AlloyDB Studio Gemini query error fixing |  | AlloyDB Studio now supports using Gemini in the query editor to help fix query errors. |
| 2025-12-05 | AlloyDB query plan management |  | AlloyDB query plan management adds plan monitoring, capture, and enforcement so only approved query plans are used to prevent regressions. |
| 2025-11-20 | AlloyDB read pool horizontal autoscaling |  | AlloyDB now supports horizontal autoscaling for read pool instances. |
| 2025-11-19 | AlloyDB self-service maintenance |  | AlloyDB now offers self-service maintenance workflows to apply updates earlier, install patches, and configure deny periods. |
| 2025-11-18 | Gemini 3.0 for AlloyDB generative AI functions |  | AlloyDB now supports calling Gemini 3.0 in generative AI functions such as AI.GENERATE. |
| 2025-11-13 | AlloyDB AI native vector search accelerator |  | AlloyDB AI native vector search accelerator is now generally available. |
| 2025-11-13 | alloydb_scann vector index creation metrics |  | The alloydb_scann extension now provides new vector index creation metrics via the pg_stat_ann_index_creation view. |
| 2025-11-13 | google_columnar_engine auto vector data recommendation |  | The google_columnar_engine extension now automatically recommends data suitable for vector search so manual vector column setup is reduced. |
| 2025-11-11 | Dataplex Universal Catalog integration for AlloyDB |  | AlloyDB now integrates with Dataplex Universal Catalog (preview) to discover, search, and manage AlloyDB clusters, databases, and tables. |
| 2025-11-11 | Parallel SELECT execution for INSERT INTO ... SELECT |  | AlloyDB now supports parallel execution for the SELECT phase of INSERT INTO ... SELECT queries to improve performance on partitioned and complex workloads. |
| 2025-11-10 | AlloyDB AI auto embedding generation |  | AlloyDB AI introduces preview automatic large-scale embedding generation for semantic search and RAG use cases. |
| 2025-11-10 | Cloud SQL for PostgreSQL to AlloyDB PostgreSQL 17 migration |  | AlloyDB now supports migrating from Cloud SQL for PostgreSQL to AlloyDB for PostgreSQL 17 using Cloud SQL backups up to 15 TB. |
| 2025-10-30 | AlloyDB enhanced backups with Backup and DR Service |  | AlloyDB enhanced backups (preview) integrate with Google Cloud Backup and DR Service to support vaulted backups, retention lock, and centralized policy management. |
| 2025-10-27 | AlloyDB Authorized Networks without CIDR restrictions |  | AlloyDB now allows configuring Authorized Networks for Public IP without CIDR-range restrictions, with governance through custom organization policies. |
| 2025-10-23 | AlloyDB time-series forecasting |  | AlloyDB now supports time-series forecasting on historical data, including TimesFM models, to predict future trends. |
| 2025-10-06 | AlloyDB support for tds_fdw |  | AlloyDB now supports the tds_fdw extension to access TDS protocol databases, such as Microsoft SQL Server and Sybase, through foreign data wrappers. |
| 2025-09-30 | Cache-aware query planning in AlloyDB for PostgreSQL |  | AlloyDB for PostgreSQL adds the alloydb.enable_cache_aware_costing setting to enable cache-aware query planning and improve index-scan performance while reducing I/O costs. |
| 2025-09-24 | Query plan patches in AlloyDB |  | AlloyDB now allows users to create and manage query plan patches to specify execution-plan details for their queries. |
| 2025-09-23 | Gemini CLI extensions for AlloyDB |  | AlloyDB introduces dedicated Gemini CLI extensions for provisioning, managing, and querying AlloyDB databases, including schema exploration and troubleshooting. |
| 2025-09-22 | AlloyDB available memory metric with OS page cache |  | AlloyDB's available memory metric now includes usable OS page cache memory, improving accuracy and potentially lowering reported available memory values, especially on PostgreSQL 17+. |
| 2025-09-22 | AlloyDB PostgreSQL 17 compatibility |  | AlloyDB now supports creating clusters with general availability PostgreSQL 17 server compatibility; AlloyDB adds Preview support for creating clusters with PostgreSQL 17 compatibility. |
| 2025-09-11 | AlloyDB support for C4A Axion machine series |  | AlloyDB now supports C4A Arm VMs on Axion processors with predefined machine configurations ranging from 1 to 72 vCPUs. |
| 2025-09-04 | AlloyDB AI natural language |  | AlloyDB AI natural language now provides secure, accurate natural-language answers using fragment-based templates, autogenerated concept types, and SQL summaries; AlloyDB AI natural language is in Preview and provides secure, accurate natural-language responses for end-user queries. |
| 2025-09-04 | Parameterized secure views in AlloyDB for PostgreSQL |  | AlloyDB for PostgreSQL now supports parameterized secure views to improve data security and row-level access control when using SQL; Parameterized secure views in AlloyDB for PostgreSQL provide a secure SQL interface for developers with improved row-level access control and are in Preview. |
| 2025-09-02 | Custom organization constraints for AlloyDB resources |  | You can create organization policies with custom constraints for AlloyDB backups, clusters, and instance fields. |
| 2025-08-20 | Saved SQL scripts in AlloyDB Studio |  | AlloyDB Studio now supports creating and managing saved SQL scripts for users to store reusable SQL in the database environment. |
| 2025-07-14 | Configurable AlloyDB instance IP address range |  | AlloyDB now allows users to create an instance with a specific IP address range and override range allocations during cluster creation. |
| 2025-06-17 | Columnar engine for filtered vector similarity search |  | AlloyDB introduces a columnar engine to improve KNN vector similarity search performance when combined with highly selective predicate filtering. |
| 2025-06-02 | Automatic Private Service Connect endpoint creation for AlloyDB |  | AlloyDB can automatically create Private Service Connect endpoints for authorized projects based on configured service connection policies. |
| 2025-06-02 | Private Service Connect cluster creation in AlloyDB |  | AlloyDB enables creating clusters with Private Service Connect through the Google Cloud console. |
| 2025-05-29 | AlloyDB instance start/stop/restart controls |  | AlloyDB now supports starting, stopping, and restarting primary and read pool instances via the Google Cloud console and Cloud CLI. |
| 2025-05-22 | pg_ivm extension support |  | AlloyDB for PostgreSQL supports the pg_ivm extension to provide incremental view maintenance for materialized views. |
| 2025-05-21 | AlloyDB AI query engine |  | AlloyDB AI query engine introduces AI SQL capabilities including ai.if, ai.rank, and ai.generate with multimodal and text embedding model integration; AlloyDB AI query engine is in Preview and enables SQL with AI operators plus Vertex AI multimodal and ranking models for filtering, joining, ranking, and summarization. |
| 2025-05-08 | IAM authentication in AlloyDB Studio |  | AlloyDB Studio now supports IAM-based authentication for database access. |
| 2025-05-07 | Dataflow vector embedding ETL for AlloyDB |  | AlloyDB supports building a Dataflow-based vector embedding ETL pipeline to generate and ingest embeddings into AlloyDB. |
| 2025-05-07 | Deny maintenance periods for AlloyDB clusters |  | AlloyDB adds the ability to configure deny-maintenance periods on clusters running the latest version. |
| 2025-05-07 | Migration from Cloud SQL for PostgreSQL to AlloyDB |  | AlloyDB supports migration from Cloud SQL for PostgreSQL using Cloud SQL backups and the Google Cloud CLI. |
| 2025-04-25 | AlloyDB backup plans recommender |  | AlloyDB backup plans recommender is generally available. |
| 2025-04-25 | AlloyDB backup retention recommender |  | AlloyDB backup retention recommender is generally available. |
| 2025-04-25 | AlloyDB cluster storage quota recommender |  | AlloyDB cluster storage quota recommender is generally available. |
| 2025-04-25 | AlloyDB database auditing recommender |  | AlloyDB database auditing recommender is generally available. |
| 2025-04-25 | AlloyDB high availability recommender |  | AlloyDB high availability recommender is generally available. |
| 2025-04-25 | AlloyDB password policy recommender |  | AlloyDB password policy recommender is generally available. |
| 2025-04-25 | AlloyDB SSL/TLS encryption enforcement recommender |  | AlloyDB SSL/TLS encryption enforcement recommender is generally available. |
| 2025-04-25 | AlloyDB underprovisioned instances optimizer |  | AlloyDB underprovisioned instances optimization recommender is generally available. |
| 2025-04-09 | AlloyDB AI-assisted troubleshooting |  | AlloyDB AI-assisted troubleshooting helps resolve complex performance issues like slow queries and high load and is available in Preview. |
| 2025-04-09 | AlloyDB for PostgreSQL 1 vCPU machine type |  | AlloyDB for PostgreSQL now supports a 1 vCPU, 8GB configuration suitable for development and sandbox environments, in Preview. |
| 2025-04-09 | AlloyDB support for C4A Arm VMs |  | AlloyDB supports C4A Arm VMs on Google Axiom processors, with predefined configurations from 1 to 72 vCPUs, in Preview. |
| 2025-03-19 | In-place major version upgrade for AlloyDB clusters |  | AlloyDB now supports generally available in-place major version upgrades of clusters to higher supported PostgreSQL versions. |
| 2025-03-18 | AlloyDB query recall evaluator |  | AlloyDB includes a Preview query recall evaluator to measure and tune vector query recall for a given configuration. |
| 2025-03-17 | AlloyDB mandatory tagging with organization policies |  | AlloyDB can enforce mandatory tags on cluster and backup resources via custom organization policies in Preview. |
| 2025-03-17 | AlloyDB outbound connectivity for Private Service Connect clusters |  | AlloyDB now has generally available outbound connectivity for Private Service Connect-enabled clusters to support secure outbound operations such as migrations and FDW. |
| 2025-03-12 | Automatic CMEK creation with Cloud KMS Autokey for AlloyDB |  | AlloyDB now supports automatically creating customer-managed encryption keys for AlloyDB resources using Cloud KMS Autokey. |
| 2025-03-04 | AlloyDB for PostgreSQL availability in europe-north2 |  | AlloyDB for PostgreSQL was added as a supported region in europe-north2 (Stockholm). |
| 2025-02-27 | AlloyDB cross-region replication with up to five secondary regions |  | Cross-region replication in AlloyDB now supports up to five secondary regions for disaster recovery and geographic workload distribution. |
| 2025-02-21 | AlloyDB API-based data import for clusters |  | You can import data into AlloyDB for PostgreSQL clusters through an API, with capabilities to cancel and check the status of imports. |
| 2025-02-21 | In-place major version upgrades to PostgreSQL 16 |  | AlloyDB clusters can now perform in-place major upgrades from PostgreSQL 14 or 15 to PostgreSQL 16. |
| 2025-02-14 | AlloyDB active queries |  | AlloyDB for PostgreSQL now supports active query functionality as a generally available feature. |
| 2025-02-14 | AlloyDB advanced query insights |  | AlloyDB for PostgreSQL now supports advanced query insights as a generally available capability. |
| 2025-02-14 | AlloyDB index advisor |  | AlloyDB for PostgreSQL now includes an index advisor feature that is generally available; The AlloyDB index advisor feature reached general availability. |
| 2024-12-18 | AlloyDB API-based data export from clusters |  | You can export data from AlloyDB clusters via API, including the ability to cancel an export operation. |
| 2024-12-12 | AlloyDB System insights unified monitoring dashboard |  | AlloyDB now includes a unified, customizable System insights monitoring dashboard with predefined and Cloud Monitoring metrics. |
| 2024-12-05 | AlloyDB database performance snapshots |  | AlloyDB now offers database performance snapshot reports that compare system metrics between two points in time. |
| 2024-11-21 | AlloyDB cluster provisioning from Cloud SQL for PostgreSQL backup |  | AlloyDB clusters can be set up using a copy of an existing Cloud SQL for PostgreSQL backup. |
| 2024-11-21 | Model endpoint management in AlloyDB and AlloyDB Omni |  | Model endpoint management is now generally available in AlloyDB and AlloyDB Omni, including registering and calling remote AI models with sample templates. |
| 2024-11-15 | AlloyDB free trial clusters |  | AlloyDB free trial clusters are now available in all AlloyDB regions; AlloyDB free trial clusters are available, offering up to 30 days of usage with primary/read pool instances and automatic storage scaling up to 1 TB. |
| 2024-11-12 | AlloyDB cluster storage capacity |  | AlloyDB now supports up to 128 TiB of storage per cluster in every supported region; AlloyDB now supports up to 64 TiB of storage per cluster across all locations. |
| 2024-10-28 | AlloyDB in-place major version upgrade |  | AlloyDB for PostgreSQL now supports in-place major-version upgrades, including PostgreSQL 14 to PostgreSQL 15. |
| 2024-10-23 | AlloyDB for PostgreSQL 16 compatibility |  | AlloyDB now supports database clusters using PostgreSQL 16 as a generally available compatibility option; AlloyDB now supports AlloyDB clusters with PostgreSQL 16 compatibility in Preview. |
| 2024-10-23 | Homogeneous PostgreSQL migration to AlloyDB for PostgreSQL 16 |  | Database Migration Service can perform homogeneous migrations from PostgreSQL to AlloyDB for PostgreSQL version 16. |
| 2024-10-10 | AlloyDB read pool node restart |  | AlloyDB now supports restarting one or more nodes in a read pool. |
| 2024-10-02 | alloydb_scann vector extension |  | The alloydb_scann (formerly postgres_scann) extension is now generally available in AlloyDB for vector storage and index tuning use cases. |
| 2024-09-30 | AlloyDB outbound public IP connectivity |  | AlloyDB outbound public IP connectivity is generally available on primary and secondary instances. |
| 2024-09-25 | AlloyDB free trial cluster creation from Cloud SQL PostgreSQL backups |  | AlloyDB free trial clusters can be created using a copy of a Cloud SQL for PostgreSQL backup. |
| 2024-09-18 | AlloyDB Omni operator on Google Distributed Cloud connected |  | The AlloyDB Omni operator is available in Preview for Google Distributed Cloud (GDC) Connected deployments. |
| 2024-09-17 | Predefined CMEK organization policy for AlloyDB |  | AlloyDB now supports applying the predefined CMEK organization policy to AlloyDB clusters and backups. |
| 2024-09-16 | GKE Autopilot to AlloyDB connection setup guidance |  | A tutorial was added to show how to connect applications running on Google Kubernetes Engine Autopilot to AlloyDB instances. |
| 2024-08-29 | BigQuery query federation for AlloyDB |  | BigQuery can run queries directly against data stored in AlloyDB databases through query federation. |
| 2024-08-16 | AlloyDB Omni Kubernetes Operator load balancer annotation support |  | The AlloyDB Omni Kubernetes Operator supports configuring load balancers by using Kubernetes annotations. |
| 2024-08-14 | AlloyDB Omni database pod scheduling for balanced node distribution |  | The AlloyDB Omni Kubernetes Operator can schedule new database Pods across nodes to balance cluster distribution and optimize performance. |
| 2024-08-08 | Query Insights and active queries for read pool instances |  | Enhanced Query Insights and active query visibility are available in preview for AlloyDB read pool instances. |
| 2024-08-05 | AlloyDB admin password secret persistence |  | When creating an AlloyDB cluster, the admin password secret is no longer deleted after being specified. |
| 2024-08-05 | AlloyDB Omni dedicated backup server |  | AlloyDB Omni introduces a dedicated backup server to streamline backup operations. |
| 2024-08-05 | AlloyDB Omni support for Red Hat OpenShift |  | AlloyDB Omni adds support for Red Hat OpenShift Container Platform 4.14 and later in preview. |
| 2024-08-05 | Configurable auto-failover threshold in AlloyDB Omni HA |  | AlloyDB Omni HA now lets users set the number of failed health checks that trigger automatic failover. |
| 2024-08-05 | Cross-data center replication for automated disaster recovery |  | Cross-data center replication now supports automated disaster recovery setup in AlloyDB Omni. |
| 2024-08-05 | postgres_ann extension rename to alloydb_scann |  | The PostgreSQL extension named postgres_ann has been renamed to alloydb_scann in AlloyDB Omni. |
| 2024-08-05 | Variable read pool instance node count |  | AlloyDB Omni now allows a variable number of nodes per read pool instance. |
| 2024-07-31 | Gemini in Databases assistance for AlloyDB for PostgreSQL |  | Gemini in Databases assistance is available in preview for standard and enhanced query insights, system insights, index advisor, and active queries in AlloyDB for PostgreSQL. |
| 2024-07-22 | Organization policies with custom constraints in AlloyDB |  | AlloyDB now supports creating organization policies using custom constraints. |
| 2024-07-22 | Public IP support for AlloyDB instances |  | AlloyDB instances now support public IP address configuration. |
| 2024-07-16 | Cross-region backup location support |  | AlloyDB now supports storing backups in cross-region backup locations. |
| 2024-07-10 | Cloud Billing export queries by resource-level tags and names |  | AlloyDB can query exported Cloud Billing data using resource-level tags and resource names. |
| 2024-07-09 | Zero-data-loss switchover in cross-region replication |  | AlloyDB supports zero-data-loss switchover in cross-region replication configurations for disaster recovery testing or migration. |
| 2024-06-25 | AlloyDB Omni Arm architecture support |  | AlloyDB Omni now supports Arm-based architectures. |
| 2024-06-25 | AlloyDB Omni Podman support on RHEL |  | AlloyDB Omni now supports using the Podman container tool on Red Hat Enterprise Linux. |
| 2024-06-25 | AlloyDB Omni simplified installation method |  | The simplified installation method for AlloyDB Omni is generally available for use; The simplified installation method for AlloyDB Omni is available in preview. |
| 2024-05-22 | BigQuery and AlloyDB query federation |  | BigQuery can now query data stored in AlloyDB through query federation. |
| 2024-05-10 | AlloyDB Omni Docker environment variable compatibility |  | The AlloyDB Omni simplified installation method now supports all environment variables from the official PostgreSQL Docker image. |
| 2024-05-10 | Model endpoint management |  | Model endpoint management is available in preview for AlloyDB and AlloyDB Omni; AlloyDB Omni now supports preview model endpoint management, enabling a per-project model endpoint registry. |
| 2024-05-07 | AlloyDB Omni sidecar containers |  | AlloyDB Omni Kubernetes Operator now supports adding sidecar containers to a database cluster. |
| 2024-05-07 | AlloyDB Private Service Connect |  | Private Service Connect is generally available for AlloyDB for PostgreSQL to enable access from multiple VPC networks. |
| 2024-05-06 | AlloyDB local database user password policies |  | Password policies can now be configured for AlloyDB local database users. |
| 2024-05-01 | AlloyDB maintenance event email notifications |  | Users can opt in to receive email notifications for upcoming AlloyDB maintenance events. |
| 2024-05-01 | AlloyDB maintenance windows |  | AlloyDB users can schedule maintenance windows so non-emergency maintenance runs only during selected weekly periods. |
| 2024-04-09 | Active query monitoring |  | AlloyDB now supports monitoring active queries to troubleshoot running database activity. |
| 2024-04-09 | AlloyDB Omni natural language query |  | AlloyDB Omni supports querying the database using natural language. |
| 2024-04-09 | AlloyDB Studio |  | AlloyDB Studio enables authorized users to interact with the database and run SQL queries from the Google Cloud console. |
| 2024-04-09 | Database Center |  | Database Center provides a centralized, AI-assisted dashboard for managing AlloyDB fleet operations. |
| 2024-04-09 | Enhanced Query Insights |  | Enhanced Query Insights provides near real-time diagnostic capabilities for database and query performance issues. |
| 2024-04-09 | Index advisor |  | A fully managed index advisor is available to analyze frequent query patterns and recommend indexes. |
| 2024-04-09 | Parameterized secure views for natural language queries |  | AlloyDB Omni adds parameterized secure views to limit data scope for natural-language queries. |
| 2024-04-09 | postgres_ann extension |  | The postgres_ann extension is available in AlloyDB Omni for scalable nearest-neighbor indexing with the ScaNN algorithm. |
| 2024-04-09 | Query Insights four-week metric retention |  | Query Insights now retains query metrics for four weeks in its dashboard. |
| 2024-04-09 | Query Insights recommendations |  | AlloyDB provides additional database insight recommendations through Query Insights. |
| 2024-04-08 | AlloyDB Omni Kubernetes Operator 1.0.0 GA |  | The AlloyDB Omni Kubernetes Operator version 1.0.0 is generally available. |
| 2024-04-08 | Asynchronous read pool instances in AlloyDB Omni |  | AlloyDB Omni supports creating asynchronous read pool instances. |
| 2024-04-08 | Cross-cluster physical replication in AlloyDB Omni |  | AlloyDB Omni supports physical replication between primary and secondary clusters on separate Kubernetes clusters. |
| 2024-04-08 | Expanded AlloyDB Omni metrics visibility |  | AlloyDB Omni now exposes a broader set of database and system metrics. |
| 2024-04-08 | Failover connection compatibility in AlloyDB Omni HA |  | High-availability failover in AlloyDB Omni no longer requires connection parameter changes. |
| 2024-04-08 | Logical replication configuration in AlloyDB Omni |  | Users can enable and configure logical replication in AlloyDB Omni. |
| 2024-04-08 | Multiple standby replicas for AlloyDB Omni HA clusters |  | AlloyDB Omni high-availability clusters can include more than one standby replica. |
| 2024-04-08 | pg_squeeze extension included in AlloyDB Omni |  | AlloyDB Omni includes the pg_squeeze extension at version 1.0. |
| 2024-04-08 | Pod node affinity controls for AlloyDB Omni |  | AlloyDB Omni can restrict pods to run only on specific Kubernetes nodes. |
| 2024-04-08 | Point-in-time recovery for AlloyDB Omni backups |  | AlloyDB Omni backups now support point-in-time recovery (PITR). |
| 2024-04-08 | Read-only HA standby replicas in AlloyDB Omni |  | AlloyDB Omni allows an HA standby replica to be used as a read-only instance. |
| 2024-04-02 | AlloyDB Studio Explorer pane and enhanced query editor |  | AlloyDB Studio now includes an Explorer pane integrated with an enhanced query editor for browsing, querying, and modifying databases. |
| 2024-04-02 | AlloyDB Studio generally available |  | AlloyDB Studio is now generally available. |
| 2024-03-13 | Continuous backup and recovery in AlloyDB |  | AlloyDB now supports continuous backup and recovery capabilities. |
| 2024-03-13 | Scheduled backups on AlloyDB secondary clusters |  | AlloyDB supports scheduled backups on secondary clusters and automatically copies primary backup plans when a secondary cluster is created. |
| 2024-03-12 | AlloyDB Language Connectors GA |  | AlloyDB Language Connectors are now generally available with automated mTLS and IAM-based authorization, including automated IAM authentication. |
| 2024-03-04 | Key Access Justifications for external CMEK in AlloyDB |  | AlloyDB now supports Key Access Justifications for external CMEK keys to view and manage key access requests. |
| 2024-02-29 | AlloyDB Omni PostgreSQL compatibility level 15.5 |  | AlloyDB Omni updated its core PostgreSQL compatibility to version 15.5. |
| 2024-02-29 | Automated failover for AlloyDB Omni HA Kubernetes clusters |  | AlloyDB Omni now offers automated failover for highly available Kubernetes-based clusters in preview. |
| 2024-02-29 | Configurable TCP port for AlloyDB Omni installation |  | AlloyDB Omni installation via command-line can now specify the instance TCP port. |
| 2024-02-29 | New PostgreSQL extensions in AlloyDB Omni 15.5.0 |  | AlloyDB Omni 15.5.0 added the autoinc, insert_username, moddatetime, and tcn extensions. |
| 2024-02-29 | Updated PostgreSQL extensions in AlloyDB Omni 15.5.0 |  | AlloyDB Omni 15.5.0 updates major extensions including pg_cron, pg_repack, pgfincore, pglogical, and pgvector. |
| 2024-02-28 | Google Cloud tags on AlloyDB resources |  | AlloyDB now supports Google Cloud tags on cluster and backup resources to support granular IAM permissions. |
| 2024-02-27 | Automatic IAM Authentication in AlloyDB Language Connectors |  | AlloyDB now supports Automatic IAM Authentication with AlloyDB Language Connectors in preview. |
| 2024-02-20 | Expanded AlloyDB node capacity |  | AlloyDB instances can now be configured with up to 128 vCPUs and 864 GB RAM per node. |
| 2024-02-09 | Public IP support for AlloyDB Language Connectors |  | AlloyDB Language Connectors in preview now support use of public IP for cluster connections. |
| 2024-01-29 | AlloyDB Public IP availability |  | AlloyDB Public IP is available in preview so instances can accept connections from authorized external IP ranges. |
| 2024-01-25 | AlloyDB Language Connectors preview |  | AlloyDB Language Connectors are now available in preview with automated mTLS, IAM-based authorization, and automated IAM authentication. |
| 2024-01-24 | AlloyDB events timeline region support |  | AlloyDB now generally supports Cloud regions in its events timeline functionality. |
| 2024-01-22 | Cross-project restoration |  | AlloyDB supports restoring a cluster to a new cluster in a different Google Cloud project. |
| 2023-12-20 | AlloyDB Omni 15.4.0 availability |  | AlloyDB Omni version 15.4.0 is now available. |
| 2023-12-20 | AlloyDB Omni Kubernetes Operator v0.3.0 preview |  | The AlloyDB Omni Kubernetes Operator version 0.3.0 is now available in preview with bug fixes and improvements. |
| 2023-12-20 | pgvector 0.5.0 in AlloyDB Omni |  | AlloyDB Omni now includes pgvector updated to version 0.5.0. |
| 2023-12-20 | PostgreSQL 15.4 in AlloyDB Omni |  | AlloyDB Omni now runs PostgreSQL version 15.4. |
| 2023-12-18 | Incremental automated and continuous backups |  | AlloyDB automated and continuous backups now use incremental backups to reduce storage usage and improve backup speed. |
| 2023-12-15 | AlloyDB monitoring dashboards and metrics |  | AlloyDB for PostgreSQL supports monitoring through AlloyDB System Insights, Cloud Monitoring, and the cluster Overview metrics view. |
| 2023-12-14 | 64TiB per-cluster storage support |  | AlloyDB now supports up to 64 TiB of storage per cluster in selected regions. |
| 2023-11-28 | AlloyDB columnar engine array column support |  | The AlloyDB columnar engine now supports columns of the array data type. |
| 2023-11-15 | AlloyDB Auth Proxy IAM-based login automation |  | The AlloyDB Auth Proxy can be configured to automatically authenticate IAM-based database logins. |
| 2023-11-15 | AlloyDB Omni Kubernetes Operator v0.2.0 preview |  | The AlloyDB Omni Kubernetes Operator version 0.2.0 is available in preview and adds support for AlloyDB Omni version 15.2.2 with bug fixes and improvements. |
| 2023-11-15 | OAuth 2.0 access token scoping for AlloyDB |  | AlloyDB now allows restricting an OAuth 2.0 access token to be valid only for AlloyDB authentication. |
| 2023-11-08 | oracle_fdw extension support in AlloyDB |  | The oracle_fdw extension is now supported by AlloyDB to provide foreign data wrapper access to Oracle databases. |
| 2023-10-11 | AlloyDB Omni Kubernetes Operator |  | The AlloyDB Omni Kubernetes Operator enables deploying and managing AlloyDB Omni on Kubernetes clusters. |
| 2023-09-28 | AlloyDB secondary cluster read pool instances |  | AlloyDB now allows secondary clusters to use read pool instances. |
| 2023-09-21 | AlloyDB basic instances |  | AlloyDB basic instances provide single-node, one-zone primary instances as a lower-cost non-HA option. |
| 2023-09-21 | AlloyDB PostgreSQL 15 compatibility |  | AlloyDB supports database clusters with PostgreSQL 15 compatibility. |
| 2023-09-15 | Low-downtime maintenance for HA primary instances |  | Maintenance operations on highly available primary instances now complete with under one second of downtime for most workloads. |
| 2023-09-13 | Cloud External Key Manager support for AlloyDB encryption keys |  | AlloyDB supports using and managing data-encryption keys stored outside Google Cloud via Cloud External Key Manager. |
| 2023-09-08 | Configurable private services access IP range |  | AlloyDB cluster creation now allows optionally specifying a private services access IP range. |
| 2023-08-29 | AlloyDB AI |  | AlloyDB AI is a generative AI feature set available for both AlloyDB and AlloyDB Omni. |
| 2023-08-29 | AlloyDB ML extension embedding function |  | The AlloyDB machine learning extension adds an embedding SQL function for creating vector embeddings from text. |
| 2023-08-29 | AlloyDB Omni 15.2.0 Preview |  | AlloyDB Omni version 15.2.0 is available in preview. |
| 2023-08-29 | AlloyDB Omni command-line interface |  | AlloyDB Omni includes a command-line interface to simplify installation and maintenance. |
| 2023-08-29 | AlloyDB Omni data protection guidance with Barman and pglogical |  | AlloyDB Omni includes guidance for data protection using Barman and pglogical in Vertex AI-integrated workflows. |
| 2023-08-29 | AlloyDB Omni PostgreSQL 15 compatibility |  | AlloyDB Omni 15.2.0 includes compatibility with PostgreSQL server version 15. |
| 2023-08-29 | AlloyDB Omni Technology Preview edition |  | A separate Technology Preview edition of AlloyDB Omni is available for experimenting with AlloyDB AI using included models. |
| 2023-08-29 | AlloyDB pgvector support |  | AlloyDB includes pgvector support with performance improvements for vector queries, including scalar-quantized vector indexes. |
| 2023-08-22 | AlloyDB connector-based connection enforcement |  | AlloyDB supports enforcing database access through AlloyDB connectors, such as the Auth Proxy, to improve connection security. |
| 2023-08-22 | SSL enforcement mode for AlloyDB instances |  | AlloyDB instances can be configured to require SSL for all database connections. |
| 2023-08-16 | AlloyDB committed use discounts for compute |  | AlloyDB offers committed use discounts on compute resources, with 25% discount for one-year commitments and 52% for three-year commitments. |
| 2023-08-16 | AlloyDB high-capacity node machine type |  | AlloyDB instance machine-type configuration now includes an option of 96 vCPUs and 768 GB of RAM per node. |
| 2023-08-08 | AlloyDB Omni PostgreSQL 15.2 preview release |  | AlloyDB Omni introduced version alloydb-omni-0.3.0-preview-postgresql-15.2, which adds PostgreSQL 15 support along with bug fixes and query performance improvements. |
| 2023-07-28 | Cloud Asset Inventory support for AlloyDB |  | Cloud Asset Inventory support for AlloyDB is generally available. |
| 2023-07-18 | AlloyDB data residency |  | AlloyDB support for Data Residency is generally available. |
| 2023-07-18 | AlloyDB resource location policies |  | AlloyDB now supports setting resource location policies to constrain where new in-scope resources can be created. |
| 2023-07-05 | pgvector extension support in AlloyDB |  | AlloyDB has added support for the pgvector PostgreSQL extension. |
| 2023-06-30 | AlloyDB fault injection |  | AlloyDB introduced fault injection to simulate active-node outages and validate automatic standby failover via high availability. |
| 2023-06-30 | AlloyDB vectorized joins |  | AlloyDB made vectorized joins available in preview as part of its columnar engine to improve join performance for qualifying queries. |
| 2023-06-27 | AlloyDB columnar engine data type support |  | The AlloyDB columnar engine added support for boolean, bytea, enum, and uuid column data types. |
| 2023-06-27 | AlloyDB IAM authentication |  | AlloyDB introduced IAM authentication preview support, allowing IAM users or service accounts to be authorized as database users. |
| 2023-06-21 | AlloyDB cross-region replication |  | AlloyDB cross-region replication reached general availability; AlloyDB Cross-Region Replication replicates primary cluster data and resources to other regions for disaster recovery readiness. |
| 2023-06-12 | AlloyDB cluster storage quota management |  | Users can manage AlloyDB cluster storage quotas through the Quotas page. |
| 2023-06-12 | AlloyDB quota increase requests |  | AlloyDB supports submitting quota increase requests through the AlloyDB quotas page. |
| 2023-06-01 | AlloyDB continuous backup and recovery |  | AlloyDB continuous backup and recovery reached general availability; AlloyDB Continuous Backup and Recovery enables point-in-time restoration from any moment within a configurable window to protect clusters from data-loss events. |
| 2023-05-17 | AlloyDB FORCE_APPLY update policy |  | The FORCE_APPLY update policy became available in preview to apply AlloyDB database flag updates faster, typically within 1 to 2 minutes. |
| 2023-05-12 | AlloyDB Admin API user-management methods |  | AlloyDB Admin API added user-management methods so users can manage cluster roles with gcloud in addition to existing PostgreSQL role functions. |
| 2023-05-11 | AlloyDB cluster storage limit increase |  | AlloyDB increased the maximum storage capacity per cluster to 32 TiB. |
| 2023-05-10 | AlloyDB columnar engine JSON and JSONB support |  | The AlloyDB columnar engine added support for columns with json and jsonb data types. |
| 2023-05-05 | AlloyDB Omni 0.2.0-preview-postgresql-14.4 release |  | AlloyDB Omni version 0.2.0-preview-postgresql-14.4 became available with reduced memory requirements plus bug fixes and query performance improvements. |
| 2023-04-24 | AlloyDB read pool node health metrics |  | Three read pool node health metrics were introduced in preview to help monitor and troubleshoot read pool node activity. |
| 2023-03-29 | AlloyDB Omni preview availability |  | AlloyDB Omni became available in preview as a downloadable, containerized AlloyDB PostgreSQL edition. |
| 2023-03-06 | Cloud client libraries for AlloyDB Admin API |  | Cloud client libraries for the AlloyDB Admin API entered preview with support for C++, C#, Go, and Java. |
| 2022-12-01 | AlloyDB Clusters Page Health Dashboard |  | The AlloyDB Clusters page in Google Cloud Console now shows summary cards and a resource table for real-time database fleet monitoring. |
| 2022-09-15 | AlloyDB as Datastream Source |  | Datastream support for AlloyDB enables AlloyDB clusters to be used as PostgreSQL sources for change data capture and replication workflows. |
| 2022-09-15 | Database Migration Service Support for AlloyDB |  | Google Cloud Database Migration Service can migrate existing PostgreSQL data and workloads into AlloyDB clusters. |
| 2022-08-25 | AlloyDB Customer-Managed Encryption Keys (CMEK) |  | AlloyDB supports customer-managed encryption keys, allowing customers to use their own keys to satisfy compliance and regulatory requirements. |
| 2022-08-24 | AlloyDB Primary and Standby VM Zone Visibility |  | Users can view which availability zones host active and standby virtual machines for a primary AlloyDB instance. |
| 2022-07-12 | AlloyDB Small Instance Machine Sizes |  | Primary and read-pool instances can be created or scaled to a minimum machine size of 2 vCPUs and 16 GB of RAM. |
| 2022-05-31 | VPC Service Controls for AlloyDB |  | AlloyDB is available with VPC Service Controls, helping reduce the risk of data exfiltration through perimeter-based protection. |

Source file slug: `alloydb.md`

