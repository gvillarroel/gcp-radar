# AlloyDB

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 190
Unique features: 211

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-04-03 | gcloud beta alloydb connect |  | The gcloud beta alloydb connect command provides a simplified way to connect securely to AlloyDB instances by using the AlloyDB Auth Proxy and psql. |
| 2026-03-31 | Hot standby |  | Hot standby improves AlloyDB high availability by keeping the standby node ready for faster failover and consistent post-failover performance. |
| 2026-03-30 | Conversational analytics |  | Conversational analytics lets users query AlloyDB operational data using natural language through the Conversational Analytics API. |
| 2026-03-25 | ai.hybrid_search() |  | The ai.hybrid_search() function combines results from multiple search types into a single ranked list using Reciprocal Rank Fusion. |
| 2026-03-25 | PostgreSQL 18 compatibility |  | PostgreSQL 18 compatibility lets you create AlloyDB clusters on PostgreSQL 18 and upgrade existing clusters from earlier major versions; PostgreSQL 18 compatibility lets you create AlloyDB clusters with PostgreSQL 18 compatibility. |
| 2026-03-25 | RUM extension |  | The RUM extension enables faster phrase searches and relevance ranking for complex full-text search workloads by storing positional information in the index. |
| 2026-03-20 | Node-level metrics |  | Node-level metrics let you monitor AlloyDB read pool nodes in Google Cloud console and Metrics Explorer for detailed troubleshooting. |
| 2026-03-16 | C4A 2 vCPU machine type support |  | C4A 2 vCPU machine type support adds the c4a-highmem-2-lssd Axion-based instance option for smaller AlloyDB deployments. |
| 2026-03-16 | Enhanced backups |  | Enhanced backups add an enhanced backup tier with project-level backup management and deletion capabilities for AlloyDB clusters; Enhanced backups add an enhanced backup tier with project-level backup management and deletion capabilities for AlloyDB clusters. |
| 2026-03-03 | AI functions |  | AI functions bring LLM-powered filtering, semantic ranking, generation, and forecasting directly into AlloyDB SQL workflows. |
| 2026-03-03 | Array-based AI functions |  | Array-based AI functions enable batch processing of natural language prompts in SQL for higher-performance large-scale AI operations; Array-based AI functions let you make AlloyDB AI function calls in bulk instead of row by row to scale intelligent workflows faster. |
| 2026-03-03 | Auto vector embeddings |  | Auto vector embeddings automate the lifecycle of vector embeddings for large-scale datasets and keep embeddings synchronized with transactional data. |
| 2026-02-23 | Gemini Cloud Assist investigation capabilities |  | Gemini Cloud Assist investigation capabilities help troubleshoot AlloyDB issues such as slow queries with AI assistance. |
| 2026-02-19 | Database Center integration |  | Database Center integration provides prioritized health monitoring and recommended fixes for AlloyDB in the Google Cloud console. |
| 2026-02-17 | AlloyDB remote MCP server |  | The AlloyDB remote MCP server lets LLMs, AI applications, and AI-enabled development platforms interact with AlloyDB clusters. |
| 2026-02-17 | Performance snapshots and reports for read pool nodes |  | Performance snapshots and reports for read pool nodes provide observability into read operations and replica-specific performance issues. |
| 2026-02-05 | Virtual columns for expressions |  | Virtual columns for expressions cache results of frequently used expressions in the columnar engine to improve query performance and reduce CPU usage. |
| 2026-01-20 | Bangkok region support |  | Bangkok region support lets you create AlloyDB cluster instances in the asia-southeast3 region. |
| 2026-01-19 | Z3 machine series support |  | Z3 machine series support adds AlloyDB instances powered by 4th generation Intel x86 processors with Titanium SSD for storage-intensive workloads. |
| 2025-12-18 | Managed connection pooling |  | Managed connection pooling optimizes resource usage to improve AlloyDB workload scalability and reliability; Managed connection pooling improves workload reliability, scalability, and performance by optimizing connection resource usage on AlloyDB instances. |
| 2025-12-18 | SQL Report in performance snapshot reports |  | The SQL Report section in database performance snapshot reports lists the top 50 queries by key execution metrics to help optimize resource-intensive queries. |
| 2025-12-17 | Data agents |  | Data agents let you build conversational agents that interact with AlloyDB data and can be used as tools in applications. |
| 2025-12-17 | Gemini 3.0 Flash support for generative AI functions |  | Gemini 3.0 Flash support lets AlloyDB generative AI functions use the gemini-3-flash-preview model. |
| 2025-12-11 | C4 machine series support |  | C4 machine series support adds AlloyDB instances powered by 6th generation Intel Xeon Granite Rapids processors for extremely demanding workloads. |
| 2025-12-08 | Gemini query error assistance in AlloyDB Studio |  | Gemini query error assistance helps fix query errors in the AlloyDB Studio query editor. |
| 2025-12-05 | Query plan management |  | Query plan management helps ensure query plan stability by monitoring, capturing, and controlling approved execution plans. |
| 2025-11-20 | Horizontal autoscaling for read pool instances |  | Horizontal autoscaling for read pool instances automatically scales AlloyDB read pools to match workload demand. |
| 2025-11-19 | Self-service maintenance |  | Self-service maintenance lets you apply the latest AlloyDB updates to clusters on demand and set deny periods. |
| 2025-11-18 | Gemini 3.0 support for generative AI functions |  | Gemini 3.0 support lets AlloyDB generative AI functions use Gemini 3.0 models such as AI.GENERATE. |
| 2025-11-13 | AlloyDB AI native vector search accelerator |  | AlloyDB AI native vector search accelerator improves vector search performance and management in AlloyDB. |
| 2025-11-13 | Automatic vector data recommendation |  | Automatic vector data recommendation updates google_columnar_engine to recommend data for searches without manually adding vector columns to a table. |
| 2025-11-13 | Vector index creation metrics |  | Vector index creation metrics add visibility into vector index builds through the pg_stat_ann_index_creation view. |
| 2025-11-11 | Dataplex Universal Catalog integration |  | Dataplex Universal Catalog integration lets you discover, search, and manage AlloyDB metadata across clusters, databases, and tables. |
| 2025-11-11 | Parallel SELECT for INSERT INTO ... SELECT |  | Parallel SELECT for INSERT INTO ... SELECT improves performance for partitioned tables and complex queries by parallelizing the SELECT portion of insert-select operations. |
| 2025-11-10 | Auto embedding generation |  | Auto embedding generation creates large-scale embeddings in AlloyDB for semantic search and retrieval-augmented generation workloads. |
| 2025-11-10 | Cloud SQL backup migration with PostgreSQL 17 support |  | Cloud SQL backup migration with PostgreSQL 17 support lets you migrate from Cloud SQL for PostgreSQL to AlloyDB using backups, with operations supported up to 15 TB. |
| 2025-10-27 | Authorized Networks without CIDR restrictions |  | Authorized Networks without CIDR restrictions let AlloyDB Public IP configurations use unrestricted authorized network definitions governed by custom organization policies. |
| 2025-10-23 | Time-series forecasting |  | Time-series forecasting lets AlloyDB predict future trends from historical data by using forecasting models such as TimesFM. |
| 2025-10-06 | tds_fdw extension support |  | Tds_fdw extension support lets AlloyDB access external databases such as Microsoft SQL Server and Sybase through the Tabular Data Stream protocol. |
| 2025-09-30 | Cache-aware costing |  | Cache-aware costing improves query planning for index scans by making the AlloyDB query planner aware of cache effects to reduce I/O costs. |
| 2025-09-24 | Query plan patches |  | Query plan patches let you specify execution plan details for queries in AlloyDB. |
| 2025-09-23 | Gemini CLI extensions for AlloyDB |  | Gemini CLI extensions for AlloyDB provide database provisioning, management, querying, schema exploration, and troubleshooting from the command line. |
| 2025-09-22 | Available memory metric enhancement |  | The available memory metric enhancement makes the AlloyDB metric account for usable memory from the OS page cache for more accurate reporting. |
| 2025-09-22 | PostgreSQL 17 compatibility |  | PostgreSQL 17 compatibility lets you create AlloyDB clusters with PostgreSQL 17 compatibility; PostgreSQL 17 compatibility lets you create AlloyDB clusters with PostgreSQL 17 compatibility. |
| 2025-09-11 | C4A machine series support |  | C4A machine series support adds AlloyDB support for Arm-based Axion processors in predefined configurations across limited regions. |
| 2025-09-04 | AlloyDB AI natural language |  | AlloyDB AI natural language provides secure and accurate responses to end-user natural language questions with templates, autogenerated concept types, and SQL summaries; AlloyDB AI natural language delivers secure and accurate responses to end-user natural language questions. |
| 2025-09-04 | Parameterized secure views |  | Parameterized secure views enhance AlloyDB data security and row access control by providing a secure SQL interface for application developers; Parameterized secure views provide a secure SQL interface that improves data security and row access control for application developers. |
| 2025-09-02 | Custom constraints for AlloyDB organization policies |  | Custom constraints for AlloyDB organization policies let you define organization policy constraints for backups, clusters, and instance fields; AlloyDB supports organization policies that use custom constraints. |
| 2025-08-20 | Saved queries in AlloyDB Studio |  | Saved queries in AlloyDB Studio let you save and manage SQL scripts directly in the Studio interface. |
| 2025-07-14 | Custom instance IP address range |  | Custom instance IP address range lets you create AlloyDB instances with a specific IP address range and override cluster-level IP range allocations. |
| 2025-06-17 | Columnar engine acceleration for filtered KNN vector search |  | The columnar engine can accelerate K-Nearest Neighbor vector similarity searches when combined with highly selective predicate filtering. |
| 2025-06-02 | Automatic Private Service Connect endpoint creation |  | AlloyDB can automatically create Private Service Connect endpoints for authorized projects based on a defined service connection policy. |
| 2025-06-02 | Private Service Connect cluster creation in Google Cloud console |  | AlloyDB clusters with Private Service Connect can be created through the Google Cloud console. |
| 2025-05-29 | Instance lifecycle controls |  | AlloyDB lets you start, stop, and restart primary and read pool instances through the Google Cloud console and Google Cloud CLI. |
| 2025-05-22 | pg_ivm extension support |  | AlloyDB for PostgreSQL supports the pg_ivm extension for incremental view maintenance on materialized views. |
| 2025-05-21 | AlloyDB AI query engine |  | AlloyDB AI query engine lets you combine natural language with SQL by using AI operators such as ai.if, ai.rank, and ai.generate; AlloyDB AI query engine extends model endpoint management with AI operators and support for Vertex AI multimodal and ranking models. |
| 2025-05-08 | IAM authentication in AlloyDB Studio |  | AlloyDB Studio supports IAM authentication as a database authentication method. |
| 2025-05-07 | Cloud SQL backup migration to AlloyDB |  | AlloyDB supports migration from Cloud SQL for PostgreSQL by using a Cloud SQL backup, including Google Cloud CLI support; AlloyDB supports setting up clusters by using a copy of a Cloud SQL for PostgreSQL backup. |
| 2025-05-07 | Deny maintenance period |  | AlloyDB lets you configure a deny maintenance period on clusters running the latest version. |
| 2025-05-07 | Vector embedding ETL pipeline with Dataflow |  | AlloyDB supports building vector embedding ETL pipelines with Dataflow to generate and ingest embeddings from files or real-time sources. |
| 2025-04-25 | Backup plan recommender |  | The Backup plan recommender helps identify opportunities to enable backup plans for AlloyDB resources. |
| 2025-04-25 | Backup retention recommender |  | The Backup retention recommender helps identify opportunities to increase AlloyDB backup retention. |
| 2025-04-25 | Cluster storage quota recommender |  | The Cluster storage quota recommender helps identify opportunities to increase AlloyDB cluster storage quota. |
| 2025-04-25 | Database auditing recommender |  | The Database auditing recommender helps identify opportunities to enable database auditing in AlloyDB. |
| 2025-04-25 | High availability recommender |  | The High availability recommender helps identify opportunities to enable high availability for AlloyDB deployments. |
| 2025-04-25 | Password policy recommender |  | The Password policy recommender helps identify opportunities to enable password policies in AlloyDB. |
| 2025-04-25 | SSL/TLS enforcement recommender |  | The SSL/TLS enforcement recommender helps identify opportunities to enforce SSL or TLS encryption for AlloyDB. |
| 2025-04-25 | Underprovisioned instance recommender |  | The Underprovisioned instance recommender helps identify AlloyDB instances that need more capacity. |
| 2025-04-09 | 1 vCPU instance configuration |  | AlloyDB for PostgreSQL supports a 1 vCPU and 8 GB memory configuration for development and sandbox environments. |
| 2025-04-09 | AI-assisted troubleshooting |  | AI-assisted troubleshooting helps resolve complex AlloyDB database performance issues such as slow queries and high load. |
| 2025-04-09 | C4A Arm VM support |  | AlloyDB supports C4A Arm VMs on Google's custom-built Axiom processors in predefined configurations. |
| 2025-03-19 | In-place major version upgrade |  | AlloyDB supports in-place major version upgrades of clusters to higher supported PostgreSQL versions; AlloyDB supports in-place major version upgrades to PostgreSQL 16 from PostgreSQL 14 or 15. |
| 2025-03-18 | Query recall evaluator |  | The query recall evaluator measures vector query recall for a configuration and helps tune parameters to reach desired recall results. |
| 2025-03-17 | Mandatory tag enforcement with custom organization policies |  | AlloyDB can enforce required tags on cluster and backup resources through custom organization policies. |
| 2025-03-17 | Outbound connectivity for Private Service Connect-enabled clusters |  | Outbound connectivity for Private Service Connect-enabled AlloyDB clusters enables secure outbound connections for operations such as migrations and foreign data wrappers. |
| 2025-03-12 | Cloud KMS Autokey CMEK creation |  | AlloyDB can automatically create customer-managed encryption keys by using Cloud KMS Autokey to protect resources. |
| 2025-02-27 | Cross-region replication with up to five secondary regions |  | AlloyDB cross-region replication supports up to five secondary regions for stronger disaster recovery and geographically distributed workloads. |
| 2025-02-21 | Data import API |  | AlloyDB provides an API to import data into clusters and to cancel or check the status of import operations. |
| 2025-02-14 | Active queries |  | Active queries provides visibility into currently running queries in AlloyDB. |
| 2025-02-14 | Advanced query insights |  | Advanced query insights provides enhanced visibility into AlloyDB query performance and behavior. |
| 2025-02-14 | Index advisor |  | Index advisor recommends database indexes to improve AlloyDB query performance; Index advisor is a fully managed recommendation feature that tracks recurring database queries. |
| 2024-12-20 | Additional monitoring metrics in Cloud Monitoring dashboard |  | AlloyDB exposes additional preview monitoring metrics in Cloud Monitoring for cache performance and node health analysis. |
| 2024-12-18 | Data export API |  | AlloyDB provides an API to export data from clusters and to cancel export operations. |
| 2024-12-12 | AlloyDB System insights |  | AlloyDB System insights provides a unified and customizable database monitoring dashboard with predefined and Google Cloud metrics. |
| 2024-12-05 | Database performance snapshot reports |  | Database performance snapshot reports compare system metrics across two points in time to help optimize database performance. |
| 2024-11-21 | Model endpoint management |  | Model endpoint management lets AlloyDB register and call remote AI model endpoints by using sample templates; Model endpoint management lets AlloyDB and AlloyDB Omni register and call remote AI models. |
| 2024-11-15 | Free trial clusters |  | AlloyDB offers free trial clusters across all available regions. |
| 2024-11-12 | 128 TiB cluster storage capacity |  | AlloyDB supports up to 128 TiB of storage per cluster in all available regions. |
| 2024-10-23 | PostgreSQL 16 compatibility |  | AlloyDB supports PostgreSQL 16 compatibility for new clusters and homogeneous migrations from PostgreSQL; AlloyDB supports preview PostgreSQL 16 compatibility for creating new clusters. |
| 2024-10-10 | Read pool node restart |  | AlloyDB lets you restart one or more specific nodes in a read pool. |
| 2024-10-02 | alloydb_scann extension |  | The alloydb_scann extension supports vector embedding storage, indexing, and tuning for faster vector query performance and recall; AlloyDB Omni uses the alloydb_scann extension as the renamed ScaNN-based nearest-neighbor indexing extension. |
| 2024-09-30 | Outbound public IP connectivity |  | AlloyDB supports outbound public IP connectivity on primary and secondary instances. |
| 2024-09-25 | Free trial cluster migration from Cloud SQL backup |  | AlloyDB free trial clusters can be set up by using a copy of a Cloud SQL for PostgreSQL backup. |
| 2024-09-18 | AlloyDB Omni operator for Google Distributed Cloud connected |  | The AlloyDB Omni operator is available on Google Distributed Cloud connected for Kubernetes-based deployments. |
| 2024-09-17 | Predefined CMEK organization policy |  | AlloyDB supports a predefined organization policy to require customer-managed encryption keys for clusters and backups. |
| 2024-08-29 | BigQuery query federation |  | BigQuery query federation lets BigQuery query data stored in AlloyDB databases. |
| 2024-08-16 | AlloyDB Omni Kubernetes Operator load balancer annotations |  | AlloyDB Omni Kubernetes Operator version 1.1.0 supports configuring a load balancer by using annotations. |
| 2024-08-14 | AlloyDB Omni Kubernetes Operator pod scheduling for balanced node distribution |  | AlloyDB Omni Kubernetes Operator version 1.0.0 and later can schedule matching new database pods to balance node distribution across the cluster. |
| 2024-08-08 | Active queries for read pool instances |  | Active queries monitoring can be used on AlloyDB read pool instances. |
| 2024-08-08 | Enhanced Query Insights for read pool instances |  | Enhanced Query Insights can be used on AlloyDB read pool instances. |
| 2024-08-05 | Configurable auto-failover check threshold |  | High availability configurations can customize how many failed checks occur before auto-failover starts. |
| 2024-08-05 | Cross-data center replication |  | AlloyDB Omni supports cross-data center replication for automated disaster recovery setup. |
| 2024-08-05 | Dedicated backup server |  | AlloyDB Omni supports a dedicated backup server for streamlined backup operations. |
| 2024-08-05 | OpenShift support for AlloyDB Omni Kubernetes Operator |  | The AlloyDB Omni Kubernetes Operator supports Red Hat OpenShift 4.14 and later. |
| 2024-08-05 | Persistent admin password secret |  | AlloyDB Omni no longer deletes the admin password secret after cluster creation when you specify it. |
| 2024-08-05 | Variable read pool node count |  | AlloyDB Omni read pool instances can be configured with a variable number of nodes. |
| 2024-07-31 | Gemini in Databases assistance |  | Gemini in Databases assistance helps monitor and troubleshoot AlloyDB resources across insights and advisor surfaces. |
| 2024-07-22 | Public IP for AlloyDB instances |  | AlloyDB instances can be configured with public IP addresses; AlloyDB instances can be configured with a public IP address and accept connections from authorized external IP addresses. |
| 2024-07-16 | Cross-region backup location |  | AlloyDB lets you store backups in a cross-region backup location. |
| 2024-07-10 | Cloud Billing export queries with tags and resource names |  | AlloyDB supports querying exported Cloud Billing data by using resource-level tags and resource names. |
| 2024-07-09 | Zero-data-loss switchover for cross-region replication |  | Cross-region replication supports switchover with zero data loss for disaster recovery testing and workload migration. |
| 2024-07-01 | AlloyDB free trial clusters |  | AlloyDB free trial clusters provide time-limited access to most AlloyDB features with fixed compute and auto-scaling storage. |
| 2024-06-25 | Arm architecture support for AlloyDB Omni |  | AlloyDB Omni supports Arm-based architectures. |
| 2024-06-25 | Podman support for AlloyDB Omni |  | AlloyDB Omni supports the Podman container tool on Red Hat Enterprise Linux. |
| 2024-06-25 | Simplified installation method for AlloyDB Omni |  | AlloyDB Omni can be installed and managed with common container-management tools such as Docker; AlloyDB Omni can be installed and run with portable open-source tools such as the Docker CLI. |
| 2024-05-22 | BigQuery query federation with AlloyDB |  | BigQuery can query data stored in AlloyDB databases through query federation. |
| 2024-05-10 | PostgreSQL Docker environment variable compatibility for AlloyDB Omni |  | The simplified AlloyDB Omni installation method supports all environment variables supported by the official PostgreSQL Docker image. |
| 2024-05-07 | Private Service Connect |  | Private Service Connect lets clients connect to an AlloyDB instance from multiple VPC networks across groups, projects, or organizations. |
| 2024-05-07 | Sidecar containers for AlloyDB Omni database clusters |  | The AlloyDB Omni Kubernetes Operator can add sidecar containers to a database cluster. |
| 2024-05-06 | Password policies for local database users |  | AlloyDB lets you enforce password policies for local database users. |
| 2024-05-01 | Maintenance event email notifications |  | AlloyDB can send email notifications about upcoming maintenance events. |
| 2024-05-01 | Maintenance windows |  | AlloyDB clusters can be configured with weekly maintenance windows for non-emergency maintenance events. |
| 2024-04-29 | 64 TiB cluster storage capacity |  | AlloyDB supports up to 64 TiB of storage per cluster; AlloyDB supports up to 64 TiB of storage per cluster in selected regions. |
| 2024-04-09 | 4-week query metric retention |  | The Query Insights dashboard retains query metrics for four weeks. |
| 2024-04-09 | Active queries monitoring |  | Active queries monitoring helps monitor and troubleshoot queries currently running in a database. |
| 2024-04-09 | AlloyDB Studio |  | AlloyDB Studio lets authorized users run SQL queries and interact with databases from the Google Cloud console; AlloyDB Studio provides a single interface with an Explorer pane and enhanced query editor to browse, query, and modify databases. |
| 2024-04-09 | Database Center |  | Database Center provides an AI-assisted dashboard with a centralized view across a database fleet. |
| 2024-04-09 | Database insight recommendations |  | Gemini in Databases adds new database insight recommendations for database operations. |
| 2024-04-09 | Enhanced Query Insights |  | Enhanced Query Insights provides assistive diagnostics to detect and troubleshoot database and query performance problems. |
| 2024-04-09 | Natural language querying |  | AlloyDB Omni can query databases by using natural language. |
| 2024-04-09 | postgres_ann extension |  | The postgres_ann extension provides a configurable nearest-neighbor index powered by the ScaNN algorithm. |
| 2024-04-08 | Asynchronous read pool instances |  | AlloyDB Omni supports creating asynchronous read pool instances. |
| 2024-04-08 | Database and system metrics for AlloyDB Omni |  | AlloyDB Omni exposes database and system metrics for monitoring. |
| 2024-04-08 | Logical replication for AlloyDB Omni |  | AlloyDB Omni can enable and configure logical replication. |
| 2024-04-08 | Multiple HA standby replicas |  | High availability AlloyDB Omni clusters can have more than one standby replica. |
| 2024-04-08 | Node placement controls for AlloyDB Omni pods |  | AlloyDB Omni pods can be restricted to run on specific Kubernetes nodes. |
| 2024-04-08 | pg_squeeze extension support |  | AlloyDB Omni includes the pg_squeeze extension. |
| 2024-04-08 | Physical replication across Kubernetes clusters |  | AlloyDB Omni supports physical replication between primary and secondary clusters on separate Kubernetes clusters. |
| 2024-04-08 | Point-in-time recovery for AlloyDB Omni backups |  | AlloyDB Omni backups support point-in-time recovery. |
| 2024-04-08 | Read-only HA standby replicas |  | An AlloyDB Omni HA standby replica can be used as a read-only instance. |
| 2024-04-08 | Stable connection parameters during HA failover |  | High availability AlloyDB Omni clusters can fail over without requiring connection parameter changes. |
| 2024-03-13 | Automatic backup plan copy to secondary clusters |  | Backup plans on a primary cluster are automatically copied when a secondary cluster is created. |
| 2024-03-13 | Continuous backup and recovery on secondary clusters |  | AlloyDB secondary clusters support continuous backup and recovery. |
| 2024-03-13 | Scheduled backups on secondary clusters |  | AlloyDB secondary clusters support scheduled backups. |
| 2024-03-12 | AlloyDB Language Connectors |  | AlloyDB Language Connectors provide mutual TLS, IAM-based authorization, and automatic IAM authentication for connections; AlloyDB Language Connectors are client libraries that provide mutual TLS, IAM-based authorization, and automatic IAM authentication. |
| 2024-03-04 | Key Access Justifications for external CMEK keys |  | AlloyDB supports Key Access Justifications for external CMEK keys so you can view and manage external key access requests. |
| 2024-02-29 | autoinc extension support |  | AlloyDB Omni includes support for the autoinc extension. |
| 2024-02-29 | Automated failover for HA Kubernetes clusters |  | AlloyDB Omni supports automated failover for highly available Kubernetes-based clusters. |
| 2024-02-29 | Configurable TCP port for AlloyDB Omni |  | AlloyDB Omni installations can specify the TCP port used for database connections. |
| 2024-02-29 | insert_username extension support |  | AlloyDB Omni includes support for the insert_username extension. |
| 2024-02-29 | moddatetime extension support |  | AlloyDB Omni includes support for the moddatetime extension. |
| 2024-02-29 | tcn extension support |  | AlloyDB Omni includes support for the tcn extension. |
| 2024-02-28 | Google Cloud tags for AlloyDB resources |  | AlloyDB supports Google Cloud tags on cluster and backup resources for granular IAM control. |
| 2024-02-27 | Automatic IAM Authentication with AlloyDB Language Connectors |  | AlloyDB Language Connectors support Automatic IAM Authentication for cluster connections. |
| 2024-02-20 | 128 vCPU instance configuration |  | AlloyDB instances can be configured with 128 vCPUs and 864 GB of RAM per node. |
| 2024-02-09 | Public IP with AlloyDB Language Connectors |  | AlloyDB Language Connectors support connecting to clusters over public IP. |
| 2024-01-24 | Cloud regions in events timeline |  | AlloyDB events timeline supports Cloud region information. |
| 2024-01-22 | Cross-project restoration |  | AlloyDB can restore a cluster to a new cluster in a different Google Cloud project. |
| 2023-12-18 | Incremental backups |  | AlloyDB automated and continuous backups now use incremental backups to reduce storage use and improve backup speed. |
| 2023-12-15 | AlloyDB instance monitoring |  | AlloyDB instances can be monitored through System Insights, Cloud Monitoring, and cluster overview metrics. |
| 2023-11-28 | Array type support in columnar engine |  | The AlloyDB columnar engine supports columns that use the array data type. |
| 2023-11-15 | AlloyDB-scoped OAuth 2.0 access tokens |  | OAuth 2.0 access tokens can be restricted so they work only for AlloyDB authentication. |
| 2023-11-15 | Automatic IAM database login with AlloyDB Auth Proxy |  | The AlloyDB Auth Proxy can automatically authenticate IAM-based database logins for the proxy's IAM account. |
| 2023-11-08 | oracle_fdw extension support |  | AlloyDB supports the oracle_fdw extension for accessing Oracle databases through a foreign data wrapper. |
| 2023-10-11 | AlloyDB Omni Kubernetes Operator |  | The AlloyDB Omni Kubernetes Operator extends the Kubernetes API to deploy and manage AlloyDB Omni clusters. |
| 2023-09-28 | Read pool instances on secondary clusters |  | AlloyDB secondary clusters support read pool instances. |
| 2023-09-21 | Basic instances |  | AlloyDB basic instances provide a lower-cost single-node primary instance option for non-production use cases. |
| 2023-09-21 | PostgreSQL 15 compatibility |  | AlloyDB clusters can be created with PostgreSQL 15 compatibility. |
| 2023-09-15 | Low-downtime maintenance for HA primary instances |  | Maintenance operations on highly available AlloyDB primary instances now typically complete with less than one second of downtime. |
| 2023-09-13 | Cloud External Key Manager integration |  | AlloyDB can use and manage data encryption keys stored outside Google Cloud through Cloud External Key Manager. |
| 2023-09-08 | Private services access IP range selection |  | AlloyDB lets you specify a private services access IP range when creating a cluster. |
| 2023-08-29 | AlloyDB AI |  | AlloyDB AI is a suite of features for building generative AI applications in AlloyDB and AlloyDB Omni. |
| 2023-08-29 | AlloyDB ML extension embedding function |  | The AlloyDB machine learning extension provides an embedding SQL function that creates vector embeddings from text using ML models. |
| 2023-08-29 | AlloyDB Omni 15 compatibility |  | AlloyDB Omni version 15.2.0 adds compatibility with PostgreSQL server version 15. |
| 2023-08-29 | AlloyDB Omni command-line interface |  | AlloyDB Omni version 15.2.0 introduces a command-line interface for easier installation and maintenance. |
| 2023-08-29 | AlloyDB Omni Technology Preview edition |  | A separate Technology Preview edition of AlloyDB Omni is available for experimenting with AlloyDB AI functionality. |
| 2023-08-29 | pgvector support |  | AlloyDB supports the pgvector extension with performance enhancements for vector queries and vector indexing using scalar quantization; AlloyDB supports the pgvector extension for working with vector data. |
| 2023-08-29 | Vertex AI integration |  | AlloyDB Omni version 15.2.0 adds integration with Vertex AI. |
| 2023-08-22 | Connector enforcement |  | AlloyDB can require applications to connect through AlloyDB connectors such as the Auth Proxy. |
| 2023-08-22 | SSL enforcement mode |  | AlloyDB lets you enforce SSL encryption for all database connections to an instance. |
| 2023-08-16 | 96 vCPU machine type |  | AlloyDB instance machine-type configuration adds an option with 96 vCPUs and 768 GB of RAM per node. |
| 2023-08-16 | Committed use discounts |  | AlloyDB offers committed use discounts on compute resources for one-year and three-year terms. |
| 2023-08-08 | AlloyDB Omni PostgreSQL 15 support |  | AlloyDB Omni version alloydb-omni-0.3.0-preview-postgresql-15.2 introduces PostgreSQL 15 support. |
| 2023-07-28 | Cloud Asset Inventory support |  | AlloyDB integrates with Cloud Asset Inventory. |
| 2023-07-18 | Data Residency support |  | AlloyDB supports Data Residency controls. |
| 2023-07-18 | Resource location policies |  | AlloyDB supports resource location policies to constrain where new in-scope resources can be created. |
| 2023-06-30 | Fault injection |  | Fault injection lets you simulate an outage on a cluster's primary instance to test high availability failover. |
| 2023-06-30 | Vectorized join |  | Vectorized join is a columnar engine capability that improves qualifying join performance through vectorized processing. |
| 2023-06-27 | bytea |  | The AlloyDB columnar engine supports boolean, bytea, enum, and uuid column data types. |
| 2023-06-27 | Columnar engine boolean |  | The AlloyDB columnar engine supports boolean, bytea, enum, and uuid column data types. |
| 2023-06-27 | enum |  | The AlloyDB columnar engine supports boolean, bytea, enum, and uuid column data types. |
| 2023-06-27 | IAM authentication |  | IAM authentication lets IAM users and service accounts log into AlloyDB instances as database users. |
| 2023-06-21 | Cross-region replication |  | AlloyDB cross-region replication replicates cluster data and resources to another region for disaster recovery; AlloyDB cross-region replication makes primary cluster data and resources available in other regions for disaster recovery. |
| 2023-06-12 | Quota increase requests |  | AlloyDB quotas can be increased by submitting a request through the Quotas page. |
| 2023-06-12 | Storage quota management |  | AlloyDB lets you manage cluster storage quotas through the Quotas page. |
| 2023-06-01 | Continuous backup and recovery |  | Continuous backup and recovery lets you restore cluster data from any point within a configurable recovery window; Continuous backup and recovery lets you recover cluster data from any moment within a configurable window. |
| 2023-05-17 | FORCE_APPLY update policy |  | The FORCE_APPLY update policy lets AlloyDB apply database flag changes and updates faster to an instance. |
| 2023-05-12 | Admin API user management |  | The AlloyDB Admin API includes user-management methods for managing cluster user roles with gcloud. |
| 2023-05-11 | 32 TiB cluster storage limit |  | AlloyDB increases the storage limit per cluster to 32 TiB. |
| 2023-05-10 | Columnar engine json and jsonb support |  | The AlloyDB columnar engine supports json and jsonb column data types. |
| 2023-05-05 | AlloyDB Omni 2 GB memory requirement |  | AlloyDB Omni version alloydb-omni-0.2.0-preview-postgresql-14.4 reduces the memory requirement to 2 GB of RAM. |
| 2023-04-24 | Read pool node health metrics |  | AlloyDB provides metrics for monitoring individual read pool node health and troubleshooting read pool queries. |
| 2023-03-29 | AlloyDB Omni |  | AlloyDB Omni is a downloadable edition of AlloyDB for PostgreSQL that runs a containerized AlloyDB database engine in your own environment. |
| 2023-03-06 | AlloyDB Admin API client libraries |  | Cloud Client Libraries are available for the AlloyDB Admin API in C++, C#, Go, and Java. |
| 2022-12-01 | Clusters page health overview |  | The AlloyDB Clusters page shows summary cards and a resource table for monitoring database fleet health and performance. |
| 2022-09-15 | Database Migration Service support |  | Google Cloud Database Migration Service supports migrations to AlloyDB. |
| 2022-09-15 | Datastream source support |  | AlloyDB databases can be used as source databases for Datastream. |
| 2022-08-25 | Customer-managed encryption keys |  | AlloyDB supports customer-managed encryption keys as an alternative to Google-managed encryption. |
| 2022-08-24 | Primary instance zone visibility |  | AlloyDB lets you view which zones host a primary instance's active and standby VMs. |
| 2022-07-12 | 2 vCPU machine size |  | AlloyDB supports primary and read-pool instance machine sizes as small as 2 vCPUs with 16 GB of RAM. |
| 2022-05-31 | VPC Service Controls support |  | AlloyDB supports VPC Service Controls to help mitigate data exfiltration risk. |

Source file slug: `alloydb.md`

