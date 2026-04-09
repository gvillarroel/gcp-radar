---
title: "AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/release-notes
  title: "AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Resources
Send feedback
AlloyDB for PostgreSQL release notes
Stay organized with collections
Save and categorize content based on your preferences.
Note: To access new AlloyDB features, you must have the latest
AlloyDB system software version. If you have a maintenance
window set for your AlloyDB cluster, you might not have the
latest software version. For more information, see
Maintenance timing and maintenance windows .
This page documents production updates to AlloyDB for PostgreSQL. Check this page for
announcements about new or updated features, bug fixes, known issues, and
deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 06, 2026
Feature
The QueryData tool lets you to query with the data in your database using
conversational language and build data agents. For more information, see
QueryData tool
overview .
This feature is available in
( Preview ).
The preview release increases the accuracy of SQL generation with value search queries which match values and their context within a database. Value search queries trigger automatically. QueryData also adds support for Parameterized secure views (PSVs) to help secure applications that use natural language queries. For more information, see Secure and control access to application data using parameterized secure views .
April 03, 2026
Feature
The gcloud beta alloydb connect
command is now available in
Preview . This command
provides a simplified way to connect securely to AlloyDB
instances by using the AlloyDB Auth Proxy and psql . For more information,
see Connect using gcloud CLI .
April 02, 2026
Change
You can now enable Advanced Query Insights on primary
clusters
which have secondary clusters configured. Advanced Query Insights is not supported on secondary
clusters. If you perform a switchover, you must re-enable Advanced Query
Insights on the new primary cluster.
March 31, 2026
Feature
Hot standby enhances the AlloyDB high availability (HA) architecture to improve
failover times and to ensure consistent performance after failover. AlloyDB
continuously replicates transactions to the standby node to keep caches warm
and to ensure that the node is ready to take over quickly during a failover.
This feature is generally available ( GA ) in PostgreSQL 18 and is automatically
enabled for all new instances. For more information, see the
AlloyDB high availability overview .
March 30, 2026
Feature
AlloyDB now offers conversational analytics, which lets users query their
operational data using natural language. This feature is powered by the
Conversational Analytics API ,
which can help you translate complex human dialog into precise database queries
to provide actionable insights. This feature is in
Preview .
For more information, see Conversational analytics for AlloyDB overview .
March 25, 2026
Feature
Database server compatibility with PostgreSQL version 18 is now generally
available ( GA ):
You can create AlloyDB clusters
with PostgreSQL 18 compatibility.
You can upgrade existing
AlloyDB clusters running PostgreSQL major versions 14, 15, 16, or 17 to
PostgreSQL major version 18 with one click.
You can use Database Migration Service to
migrate databases to AlloyDB .
Feature
The following AlloyDB AI features are available in Preview :
You can now use the ai.hybrid_search() function, which fuses results from
each search type into a single list using the Reciprocal Rank Fusion (RRF)
algorithm. For more information, see Run hybrid vector similarity search .
AlloyDB supports the rum extension for complex full-text search
operations. The rum extension extends standard GIN indexes by storing
positional information directly in the index. This enables faster phrase
searches and relevance ranking without needing to access the table data. For
more information, see Create and manage a RUM index .
Change
When no major version is specified, AlloyDB for PostgreSQL now defaults to
PostgreSQL major version 17
for new clusters.
March 20, 2026
Feature
AlloyDB lets you monitor node-level metrics in Google Cloud console
and Metrics Explorer to provide detailed troubleshooting guidance for read
pools and to identify nodes causing performance regressions. For more
information, see System insights metrics reference .
March 16, 2026
Feature
AlloyDB now supports the 2 vCPU C4A machine type ( c4a-highmem-2-lssd ),
which is powered by Google Axion, Google's custom Arm-based processor.
This expansion provides a smaller entry point and more flexibility for
scaling your production workloads using Axion-based instances. For more information,
see Choose an AlloyDB machine type .
Feature
AlloyDB enhanced backups are generally available
( GA ).
You can now select the Enhanced tier during cluster creation, manage your
project-level backups with tiered tabs, and delete an enhanced backup. For more
information, see
Manage enhanced backups .
March 05, 2026
Feature
AlloyDB enhanced backups are generally available
( GA ).
You can now select the Enhanced tier during cluster creation, manage your
project-level backups with tiered tabs, and delete an enhanced backup. For more
information, see
Manage enhanced backups .
March 03, 2026
Feature
The following AlloyDB AI features are now generally available ( GA ):
Auto vector embeddings provide a scalable, automated solution for managing the lifecycle of vector embeddings for large-scale datasets, eliminating the need for manual reindexing or custom scripts. This feature keeps embeddings in sync with transactional data and now supports incremental refresh in manual mode, ensuring that embeddings are only generated for new or updated rows. Additionally, you can perform incremental table refreshes or migration up to 130x faster than traditional row-by-row processing using bulk mode, improving efficiency for semantic search and Retrieval Augmented Generation (RAG).
AI functions integrate LLMs like Gemini to bring 'world knowledge' to your AlloyDB data and incorporate advanced semantic search and ranking capabilities directly into your SQL workflows. This feature includes out-of-the-box functions for filtering ( ai.if ), semantic ranking ( ai.rank ), generation ( ai.generate ), and forecasting ( ai.forecast ).
Experience higher performance in AlloyDB AI by utilizing array-based AI functions. You can perform batch processing of natural language prompts directly within your SQL queries, significantly improving efficiency for large-scale AI operations. For more information, see Perform intelligent SQL queries using AI functions .
February 23, 2026
Feature
Gemini Cloud Assist investigation capabilities are now supported in
AlloyDB ( Preview ).
For more information, see
Troubleshoot slow queries with AI assistance .
February 19, 2026
Feature
AlloyDB now integrates with Database Center to provide prioritized health
monitoring in the Google Cloud console. This integration highlights critical
and high-priority risks, offering one-click navigation to recommended fixes and
system insights for quick resolution. For more information, see
Monitor the health of your AlloyDB clusters and instances .
February 17, 2026
Feature
AlloyDB performance snapshot and reports now support read pool instance nodes, providing deeper observability into read operations and replica-specific performance issues.
Announcement
New best practices are available for securing generative AI agents using Model
Context Protocol (MCP) with Google Cloud databases. This guide covers key
security measures like least privilege, native database controls, and secure
agent design to help you build safer AI applications. For more information, see
Best practices for securing agent interactions with Model Context Protocol .
Feature
You can now make AI function calls in bulk rather than row-by-row, which lets you
scale your intelligent workflows faster with new support for array-based
processing. For more information, see
Perform intelligent SQL queries using AI functions .
This feature is in Preview .
Feature
You can now use the AlloyDB remote MCP server .
The AlloyDB remote MCP server lets you interact easily with AlloyDB clusters
from LLMs, AI applications, and AI-enabled development platforms.
This feature is in Preview .
February 09, 2026
Fixed
We are announcing the release of support for the AlloyDB language connectors and
Auth Proxy with Auto IAM Authentication
and managed connection pooling. This feature and the fix for the issue from
below is available starting with maintenance version 20260107.02_05. Clusters
with a maintenance window that may not have received this release can use
self-service maintenance
to perform a maintenance update.
February 05, 2026
Feature
Virtual columns for
expressions
is a feature of the columnar engine in
Preview that
significantly improves query performance and reduces CPU consumption. It caches
the results of frequently used expressions, which is especially beneficial for
analytical workloads on large datasets. This feature is supported for PostgreSQL
version 16 and higher.
January 27, 2026
Feature
Database server compatibility with PostgreSQL version 18 is now available for
preview ( Preview ).
You can
create AlloyDB clusters
with PostgreSQL 18 compatibility.
January 21, 2026
Issue
Automatic IAM authentication is unavailable when you use managed connection
pooling with the AlloyDB Auth Proxy and Language Connectors. To sign into your
database without a password, use manual IAM authentication. For more
information, see Connect using an IAM account
January 20, 2026
Feature
You can
create AlloyDB cluster instances
in Bangkok, Thailand ( asia-southeast3 ). For more information, see
AlloyDB locations and
AlloyDB for PostgreSQL pricing .
January 19, 2026
Feature
AlloyDB now supports the Z3 machine series, which are powered by 4th generation Intel x86 processors (Sapphire Rapids) with Titanium SSD. These instances offer machine sizes, with up to 88 vCPU and 704 GiB RAM, that let you run storage-intensive workloads with large working datasets. For more information, see Choose an AlloyDB machine type . This feature is generally available (GA).
January 15, 2026
Fixed
Memory usage estimation is more accurate for high-dimensional vector indexes. This
fix prevents out of memory (OOM) errors by enforcing defined memory constraints
throughout the index build process. You might need to increase your
maintenance_work_mem settings to align with the real usage estimates.
December 24, 2025
Change
The extension vector , which includes pgvector functions and operators, is updated to version 0.8.1.
December 18, 2025
Feature
Managed connection pooling is now generally available ( GA ). This feature optimizes resource usage to improve workload scalability and reliability. It is compatible with the AlloyDB Auth Proxy and Language Connectors. For more information, see Configure managed connection pooling .
Feature
AlloyDB database performance snapshot reports now include a SQL Report section, which lists the top 50 queries by total elapsed time, read I/O, and standard deviation of elapsed time. This helps you identify and optimize resource-intensive queries.
December 17, 2025
Feature
You can build data agents that interact with the data in your
database using conversational language. Use these data agents as tools to
empower your applications. For more information, see Data agents overview . This feature is available in Preview , and access to it requires a sign-up .
Feature
You can now use Gemini 3.0 Flash
( Preview )
when you call generative AI functions in AlloyDB, such as AI.GENERATE . Use the
model name gemini-3-flash-preview . For more information, see
Use Gemini 3.0 models .
December 11, 2025
Feature
AlloyDB now supports the C4 machine series, which are powered by 6th generation Intel Xeon Granite Rapids processors. These instances offer massive machine sizes, with up to 288 vCPU and 2232 GiB RAM, that let you run extremely demanding workloads. For more information,
see Choose an AlloyDB machine type . This feature is generally available (GA).
December 08, 2025
Feature
You can now use Gemini to fix query errors in the AlloyDB Studio query editor . This feature is available in Preview .
December 05, 2025
Feature
Query plan management ( Preview ) ensures query plan stability, and protects your
database performance against the risk of query plan regression due to changes
in the database or the optimizer's behavior. AlloyDB continuously monitors,
captures, and logs potential query execution plans, giving you the granular
control to force the optimizer to choose from approved plans, and prevent
unintended regressions. For more information, see Manage query plans .
November 20, 2025
Feature
AlloyDB now supports horizontal autoscaling for read pool instances . This feature is available in Preview .
November 19, 2025
Feature
You can now perform self-service maintenance
if you need to apply the latest AlloyDB updates to your clusters as soon as
possible.
Updating to the latest version can unlock AlloyDB features, apply patches,
and let you set deny periods.
Change
The upper limit of the query plans captured per minute is enhanced to 200. For more information, see Improve query performance using advanced query insights features for AlloyDB .
November 18, 2025
Feature
You can now use Gemini 3.0 when you call generative AI functions in AlloyDB, such as AI.GENERATE . For more information, see Use Gemini 3.0 models .
November 13, 2025
Feature
AlloyDB AI native vector search accelerator is now generally available ( GA ). It includes the following features and improvements:
The google_columnar_engine extension is updated to automatically recommend data for searches, so you don't need to manually add vector columns to the table. For more information, see Perform a vector search .
The alloydb_scann extension is updated with new metrics for vector index creation. You can now use the pg_stat_ann_index_creation view to see the number of rows present in a table at the time of index creation.
November 11, 2025
Feature
Improve query performance for partitioned tables and complex queries using
parallel execution for the SELECT portion of an INSERT INTO ... SELECT
query. For more information,
see Improve select insert performance with parallel select .
Feature
You can now use Dataplex Universal Catalog to discover, search, and manage your
AlloyDB resources, including clusters, databases, and tables. This integration
(in Preview ) provides
a unified view of your metadata, enabling better data
governance and easier analysis. For more information, see
Manage your AlloyDB resources using Dataplex Universal Catalog .
November 10, 2025
Feature
AlloyDB now supports PostgreSQL 17 for migrating from Cloud SQL for PostgreSQL
to AlloyDB for PostgreSQL using your Cloud SQL for PostgreSQL backup. The size
limit for these operations is now 15TB. For more information, see
Migrate from Cloud SQL for PostgreSQL to AlloyDB .
Feature
AlloyDB AI introduces auto embedding generation in Preview . You can now generate large-scale embeddings to leverage in semantic search and Retrieval Augmented Generation (RAG) on text content.
October 31, 2025
Announcement
The alloydb_scann extension version 0.1.3 is updated to include the following vector search improvements, which are now Generally Available ( GA ):
The columnar engine now automatically includes vector columns in searches, so you don't need to add them to the table manually.
For more information, see Perform a vector search .
You can use the pg_stat_ann_index_creation view for metrics about the number of rows at index creation. For more information, see Vector index metrics .
October 30, 2025
Feature
AlloyDB offers enhanced backups
( Preview )
that integrate a cluster's backup operations with the Google Cloud
Backup and DR Service .
This integration provides vaulted backups data with retention lock enforcement,
and it uses the Backup and DR Service control plane for centralized policy
management and advanced scheduling for AlloyDB clusters. For more information,
see Manage enhanced backups .
October 27, 2025
Feature
AlloyDB supports configuring Authorized Networks for Public IP without any
CIDR-range restrictions. Use custom organization policies to limit the size
and number of Authorized Networks. See Supported custom constraints and
operations
for examples.
October 23, 2025
Feature
You can now perform time-series forecasting in AlloyDB to predict future trends based on your historical data. This feature supports various forecasting models, including TimesFM, and is available in Preview .
October 06, 2025
Feature
AlloyDB supports the tds_fdw extension, which provides a foreign data wrapper
for accessing databases—such as Microsoft SQL Server and Sybase—that
use the Tabular Data Stream (TDS) protocol. For more information, see Supported database extensions . This feature is
generally available (GA).
September 30, 2025
Feature
You can enable alloydb.enable_cache_aware_costing to turn on
cache awareness for AlloyDB for PostgreSQL's query planner. This improves index
scan query plans for query performance and reduces IO costs. This feature
is in Preview .
September 29, 2025
Announcement
The alloydb_scann extension version 0.1.3 is updated to include the following vector search improvements in ( Preview ):
You can now automatically create ScaNN indexes that are optimized for search performance or for a balance between index build times and search performance with the auto index feature.
AlloyDB AI's adaptive filtering for filtered vector searches now dynamically switches between pre-filtering and inline filtering. This enhancement further optimizes query performance by allowing the query optimizer to dynamically choose the most efficient filtering strategy. For more information, see Activate adaptive filtering in AlloyDB AI .
AlloyDB AI now integrates ScaNN indexes with the columnar engine . You can now accelerate your vector similarity search by loading ScaNN indexes into the columnar engine .
The alloydb_scann extension now provides a satisfy limit feature that improves query recall for vector searches. If a search returns fewer results than specified in the LIMIT clause, the scan continues until the LIMIT is met or a configured upper bound is reached. To enable this feature, set the scann.satisfy_limit flag to relaxed order . You can also use the scann.max_pct_leaves_to_search flag to configure the upper bound for the search.
You can enable vector search index recommendations for Scalable Nearest Neighbors (ScaNN) indexes using the AlloyDB index advisor. For more information, see Use the AlloyDB index advisor with query insights or View the index advisor's index recommendations .
You can configure automatic index maintenance using the following flags:
scann.max_background_workers flag to control the number of background workers and increase throughput across multiple indexes.
scann.maintenance_background_naptime_s flag to control the minimum delay between maintenance runs.
September 24, 2025
Feature
You can create and manage query plan patches . Query plan patches let you specify the details of the execution plan of your queries. This feature is generally available (GA) .
September 23, 2025
Feature
You can now provision, manage, and query your databases using the dedicated Gemini CLI extensions for AlloyDB . The extensions provide full lifecycle control of your database - from provisioning instances to exploring schemas and troubleshooting issues. This feature is available in beta.
September 22, 2025
Feature
Database server compatibility with PostgreSQL version 17 is now generally available ( GA ). You can create AlloyDB clusters with PostgreSQL 17 compatibility.
Feature
The available memory metric now accurately reflects the memory available to
AlloyDB by taking into consideration usable memory from the OS page cache. This
improvement can lead to a lower value of the metric, which you might notice
when you update your version to PG 17 or later. This feature is generally
available ( GA )
and is available for AlloyDB for PostgreSQL version 17 and later. For more information,
see System insights metrics reference .
September 11, 2025
Feature
AlloyDB supports
C4A Arm VMs
on Google's custom-built Axion processors. C4A VMs are available as predefined
configurations from 1, 4, 8, 16, 32, 48, 64, and 72 vCPUs, up to 576 GB of DDR5
memory. C4A machines are available in
limited regions .
For more information, see
Considerations when using the C4A Axion-based machine series .
This feature is generally available (GA).
September 04, 2025
Feature
Parameterized secure views in AlloyDB for PostgreSQL enhance data security and row access control while using SQL, providing a new secure interface for application developers. Access to this Preview feature no longer requires a signup.
Feature
AlloyDB AI natural language
delivers secure and accurate responses for
application end user natural language questions. Natural language offers
fragment-based templates, autogenerated concept types, and SQL summaries.
Access to this Preview
feature no longer requires a signup.
September 02, 2025
Feature
You can create organization policies with custom constraints for AlloyDB backups and clusters, and a custom constraint with any field for an AlloyDB instance. This feature is generally available ( GA ).
August 20, 2025
Feature
You can save and manage your SQL scripts in AlloyDB Studio. This feature is in Preview . For more information, see Saved queries overview .
July 29, 2025
Feature
Database server compatibility with PostgreSQL version 17 is now available in
Preview .
You can create AlloyDB clusters
with PostgreSQL 17 compatibility.
July 14, 2025
Feature
You can now create an AlloyDB instance with a specific IP address range using the Google Cloud CLI, Terraform, or REST API. You can also override IP address range allocations configured during cluster creation. For more information, see Create an instance with a specific IP address range . This feature is generally available GA .
June 17, 2025
Feature
You can use the columnar engine to improve the performance of vector similarity
searches, specifically K-Nearest Neighbor (KNN) searches, when combined with
highly-selective predicate filtering. For more information, see
Accelerate your filtered vector search . This feature is in
Preview .
June 02, 2025
Feature
You can let AlloyDB automatically create Private Service Connect endpoints
for authorized projects when you create Private Service Connect-enabled
instances, based on your defined service connection policy. This feature is generally available ( GA ).
Feature
You can create AlloyDB clusters with Private Services Connect through the Google Cloud console.
May 29, 2025
Feature
You can now
start, stop, and restart your primary and read pool AlloyDB instances
using the Google Cloud console and the Google Cloud CLI. This feature is
generally available
( GA ).
May 22, 2025
Feature
AlloyDB for PostgreSQL supports the
pg_ivm extension ,
which provides incremental view maintenance for materialized views.
May 21, 2025
Feature
AlloyDB AI query engine
( Preview ) lets you combine natural language with
SQL using operators like ai.if , ai.rank , and ai.generate .
You can generate embeddings on images, videos, and text using multimodal embedding models, and
you can use Google DeepMind's latest text embedding model into model endpoint
management.
May 14, 2025
Change
The default major version of PostgreSQL compatibility for new AlloyDB clusters is now PostgreSQL 16.
May 10, 2025
Change
Due to a change to report replay_lsn more accurately during parallel replay, metrics might show a slightly higher replication lag .
May 08, 2025
Feature
AlloyDB supports IAM authentication in AlloyDB Studio. For more information, see Choose a database authentication method .
May 07, 2025
Feature
You can migrate from Cloud SQL for PostgreSQL to AlloyDB for PostgreSQL using your Cloud SQL for PostgreSQL backup ( GA ). The Google Cloud CLI is also supported. For more information, see Migrate from Cloud SQL for PostgreSQL to AlloyDB .
Feature
AlloyDB lets you configure a deny maintenance period on clusters running the latest version. The feature is generally available ( GA ).
Feature
You can now build a vector embedding Extract, Transform, Load (ETL) pipeline that lets you generate and ingest embeddings from files or real time sources to AlloyDB using Google Cloud Dataflow. For more information, see Build realtime vector embedding pipeline for AlloyDB with Dataflow .
April 25, 2025
Feature
8 AlloyDB recommenders are now generally available ( GA ). For more information, see the following pages:
Enable backup plans
Enable database auditing
Enable high availability
Enable password policy
Enforce SSL/TLS encryption
Increase backup retention
Increase cluster storage quota
Optimize underprovisioned instances
April 09, 2025
Feature
AlloyDB now supports managed connection pooling in Preview . You can use managed connection pooling on your instances to improve the reliability, scalability, and performance of your workloads by optimizing resource utilization. For more information, see Configure managed connection pooling .
Feature
AlloyDB for PostgreSQL supports a 1 virtual central processing unit (vCPU) configuration with 8GB of memory, which is suitable for development and sandbox environments. For information about 1 vCPU supported regions and limitations, see Considerations when using 1 vCPU . This feature is in Preview .
Feature
AlloyDB supports C4A Arm VMs on Google's custom-built Axiom processors. C4A VMs are available as predefined configurations from 1, 4, 8, 16, 32, 48, 64, and 72 vCPUs, up to 576 GB of DDR5 memory. C4A machines are available in limited regions. This feature is in Preview . For more information, see Considerations when using the 1 vCPU machine type .
Feature
AlloyDB supports AI-assisted troubleshooting that helps you resolve complex database performance issues like slow queries and high load . AI-assisted troubleshooting is available in Preview .
Feature
AlloyDB for PostgreSQL supports parameterized secure views, which provide a secure interface for application developers by improving data security and row access control while using SQL. This feature is in ( Preview ). For more information, see Parameterized secure views overview .
Announcement
The alloydb_scann extension is updated to include the following vector search improvements. These features are generally available ( GA ):
Inline filtering enables the execution of vector search and filter evaluation through the combined use of vector and secondary indexes. For more information, see "Inline filtering" in the documentation for AlloyDB PostgreSQL and AlloyDB Omni 15.7.1 and 16.3.0 .
You can let AlloyDB automatically create multiple parallel workers during index creation when the dataset grows, leading to faster build times. For more information, see "Build indexes in parallel" in the documentation for AlloyDB PostgreSQL and AlloyDB Omni 15.7.1 and 16.3.0 .
A distribution histogram is available in the pg_stat_ann_indexes view, which helps you understand the distribution of vectors between partitions of your ScaNN index. For more information, including recommendations about tuning the distributionpercentile metric, see "Tuning metrics" in the documentation for AlloyDB PostgreSQL , and AlloyDB Omni 15.7.1 and 16.3.0 .
You can use a query recall evaluator to find the recall for a vector query for a given configuration, and to tune your parameters to achieve the desired vector query recall results for different vector indexes. For more information, see "Measure vector query recall" in the documentation for AlloyDB PostgreSQL , and AlloyDB Omni 15.7.1 and 16.3.0 .
Announcement
The alloydb_scann extension is updated to include the following vector search improvements in ( Preview ):
You can enable auto-maintenance for your ScaNN index and let incrementally manage the index such that when your dataset grows, AlloyDB splits large outlier partitions, and tries to provide better QPS and search results. For more information, see "Maintain indexes automatically" in the documentation for AlloyDB PostgreSQL and AlloyDB Omni 15.7.1 and 16.3.0 .
Adaptive filtering for ScaNN significantly improves the speed of filtered vector searches. Adaptive filtering automatically selects the most efficient filtering method at runtime. For more information, see "Filtered vector search" and "Adaptive filtering" in the documentation for AlloyDB for PostgreSQL and AlloyDB Omni 15.7.1 and 16.3.0 .
You can enable index auto maintenance and adaptive inline filtering together using the scann.enable_preview_features Grand Unified Configuration (GUC) parameters. For more information, see "AlloyDB flags" for AlloyDB for PostgreSQL and AlloyDB Omni 15.7.1 and 16.3.0 .
Feature
AlloyDB AI query engine that builds on model endpoint management , and adds support for AI operators and Vertex AI multimodal and ranking models is available in ( Preview ). You can combine natural language phrases with SQL queries, like ai.if() for filters and joins, ai.rank() for ordering using ranking models, and ai.generate() for generating summaries of your data, and generate multimodal embeddings.
Feature
AlloyDB AI natural language ( Preview ) delivers secure and accurate responses for application end user natural language questions. For more information, see AlloyDB AI natural language overview .
April 02, 2025
Issue
When the ScaNN index creation updates the reltuples statistics of a heap table, performance might be degraded for queries involving that table. For information to mitigate the issue, see "Analyze your indexed table" in the documentation for AlloyDB for PostgreSQL and AlloyDB Omni .
March 31, 2025
Change
If your cluster is encrypted with a customer-managed encryption key (CMEK), and no specific CMEK key is configured for continuous or automated backups, then backups will be created with the cluster CMEK. For more information, see About CMEK and Configure backup plans .
March 19, 2025
Feature
Performing an in-place major version upgrade of your AlloyDB cluster is generally available ( GA ). You can upgrade your AlloyDB cluster to any higher supported PostgreSQL version. For information about supported PostgreSQL versions, see Database version policies .
March 18, 2025
Feature
You can use a query recall evaluator ( Preview ) to find the recall for a vector query for a given configuration, and to tune your parameters to achieve the desired vector query recall results. For more information, see Measure vector query recall .
March 17, 2025
Feature
You can enforce specific tags on AlloyDB cluster and backup resources using custom organization policies. If a mandatory tag is missing or does not have a value set, AlloyDB resource creation fails. This feature is available in Preview.
Feature
Outbound connectivity for Private Service Connect-enabled AlloyDB clusters is generally available ( GA ). Enabling outbound connectivity allows secure connection between your project and an AlloyDB instance during outbound operations such as migrations or foreign data wrappers (FDW).
March 12, 2025
Feature
You can automatically create CMEKs using Cloud KMS Autokey to protect your AlloyDB resources. This feature is generally available ( GA ).
March 04, 2025
Feature
AlloyDB for PostgreSQL is available in the following region: europe-north2 (Stockholm). For more information, see AlloyDB Locations.
February 27, 2025
Feature
AlloyDB's cross-region replication supports up to five secondary regions. You can use additional secondary regions to further harden disaster recovery response, or to serve geographically distributed workloads. For more information, see Cross-region replication overview and Work with cross-region replication .
February 25, 2025
Announcement
The alloydb_scann extension is updated to include the following vector search improvements in Preview :
AlloyDB for PostgreSQL introduces inline filtering for vector search. With inline filtering, SQL filter evaluation is performed at the same time as vector search. This feature mitigates potential issues from existing pre and post-filter evaluation mechanisms. For more information about scann.enable_inline_filtering , see ScaNN index reference .
A distribution histogram is available in the pg_stat_ann_indexes view, which helps you understand the distribution of vectors between partitions and num_leaves of your ScaNN index. For more information, including recommendations about tuning the distributionpercentile metric, see Tuning metrics .
February 21, 2025
Feature
You can use an API to import data to AlloyDB for PostgreSQL clusters. This feature is generally available (GA). You can also cancel the import of data and check the status of the import . For more information, see Import a CSV file and Import a SQL file .
Feature
You can perform an in-place major version upgrade of your AlloyDB cluster
to PostgreSQL version 16 from PostgreSQL version 14 or 15. This feature is
available in Preview .
February 14, 2025
Feature
Support for advanced query insights , index advisor , and active queries is now generally available ( GA ) in AlloyDB for PostgreSQL.
Issue
You cannot enable advanced query insights on clusters with secondary instances. See Limitations for more information.
February 13, 2025
Change
The extension vector , which includes pgvector functions and operators, is updated to version 0.8.0.
February 03, 2025
Announcement
The AlloyDB Omni Kubernetes operator version 1.3.0 is generally available ( GA ). Version 1.3.0 includes the following new features and changes:
The Kubernetes operator 1.3.0 supports connection pooling ( Preview ).
You can put the database in maintenance mode to make a maintenance update or repair a pod.
You can create replication slots and users for logical replication via the Operator API from your database instance to subscribed applications.
This release of the Kubernetes operator adds support for kube-state-metrics so that you can use Prometheus or a Prometheus-compatible scraper to consume and display custom resource metrics like DBCluster Backup, and DBInstance. For more information, see Monitor AlloyDB Omni Kubernetes operator custom resources .
When you create a new database cluster, this version of the Kubernetes operator creates read-only (RO) and read-write (RW) load balancers concurrently, which reduces the time that it takes for the database cluster to be ready for connections and queries.
Configurable log rotation has a default retention time of seven days, and each archived file is individually compressed using Gzip. For more information, see Configure AlloyDB Omni log rotation .
Various bug fixes and performance improvements.
December 20, 2024
Feature
AlloyDB lets you monitor the following additional monitoring metrics through the Cloud Monitoring dashboard. These metrics are available in Preview .
The instance/postgres/ultrafastcache_hitrate and node/postgres/ultrafastcache_hitrate metrics help in identifying any performance issue due to caching on instances or individual nodes.
The node/postgres/backends_by_state , node/postgres/backends , node/postgres/wait_count ,
and node/postgres/wait_time metrics help in tracking node health.
December 18, 2024
Feature
You can use an API to export data from AlloyDB clusters. This feature is generally available (GA). You can also cancel the export of data . For more information, see Export a CSV file and Export a SQL file .
December 12, 2024
Feature
AlloyDB System insights offers a unified, customizable database monitoring dashboard that includes predefined metrics and other Google Cloud metrics. This feature is generally available (GA). For more information, see Create a custom dashboard .
December 09, 2024
Change
The Perform a vector search tutorial describes how to set up and perform a vector search in AlloyDB for PostgreSQL. You can learn how to perform K-nearest neighbor (KNN) and approximate nearest-neighbor (ANN) with a ScaNN vector index.
December 05, 2024
Feature
The AlloyDB database performance snapshot reports feature is generally available (GA).This feature lets you improve your database performance by using a report that compares snapshots of system metrics between two different points in time. For more information, see Optimize database performance by comparing performance snapshots .
November 21, 2024
Feature
You can set up AlloyDB clusters using a copy of your Cloud SQL for PostgreSQL backup. This feature is in Preview . For more information, see Migrate from Cloud SQL for PostgreSQL to AlloyDB .
Feature
Model endpoint management is generally available ( GA ) for both AlloyDB and AlloyDB Omni. You can use sample templates to register model endpoints. For more information, see Register and call remote AI models in AlloyDB or Register and call remote AI models in AlloyDB Omni .
November 18, 2024
Change
AlloyDB for PostgreSQL is now available in the following region: northamerica-south1 (Mexico). For more information, see AlloyDB Locations .
November 15, 2024
Feature
AlloyDB free trial clusters are now available in all regions. For more information, see the AlloyDB free trial clusters overview .
Change
The extension vector , which includes pgvector functions and operators, is updated to version 0.7.4.
November 12, 2024
Issue
If you are dropping an AlloyDB database that is larger than 64 TiB, then any write operations on other AlloyDB databases are paused until the drop operation is completed.
Feature
AlloyDB now supports up to 128 TiB storage per cluster in all regions where AlloyDB is available.
November 08, 2024
Change
The extension pg_ivm version 1.9 has been added to extensions supported by AlloyDB Omni .
The following extensions are updated:
google_ml_integration from 1.3 to 1.4.2
pg_partman from 4.7.4 to 5.0.1
pglogical from 2.4.4 to 2.4.5
pgtt from 3.0.0 to 4.0.0
vector is updated from 0.7.0 to 0.7.4
Note: pg_partman contains breaking changes when upgrading from version 4.x to 5.x. Refer to the upgrade notes before upgrading. Alternatively, you may still install and use prior versions of pg_partman by explicitly stating the version when installing, for example, CREATE EXTENSION pg_partman WITH VERSION '4.7.4'; .
Breaking
In AlloyDB Omni versions 15.5.5 and earlier, parameterized view features were available in the alloydb_ai_nl extension. Starting in version 15.7.0, parameterized view features are available in the parameterized_views extension, which you must create before you use parameterized views. Also starting in version 15.7.0, the related function, google_exec_param_query , has been renamed to execute_parameterized_query and is available in the parameterized_views extension. For more information, see Query your database using natural language .
Announcement
AlloyDB Omni version 15.7.0 is generally available ( GA ). Version 15.7.0 includes the following features and changes:
AlloyDB Omni supports PostgreSQL version 15.7 .
The alloydb_scann extension—previously named postgres_scann —is generally available ( GA ). For more information about storing vector embeddings, creating indexes, and tuning indexes to achieve faster query performance and better recall, see Work with vectors .
Support for Red Hat Enterprise Linux (RHEL) 8 is generally available ( GA ).
The AlloyDB Omni columnar engine is available in Preview on ARM.
Disk cache and columnar storage cache are available to improve AlloyDB Omni performance by accelerating data access for AlloyDB Omni in a container and on a Kubernetes cluster.
Security fixes for CVE-2023-50387 and CVE-2024-7348 have been implemented.
The AlloyDB Omni Reference documentation is available. This includes metrics , database flags , model endpoint management reference , and extensions documentation for AlloyDB Omni 15.7.0.
AlloyDB Omni supports the pg_ivm extension, which provides incremental view maintenance for materialized views.
Various bug fixes and performance improvements.
The AlloyDB Omni Kubernetes operator version 1.2.0 is generally available ( GA ). Version 1.2.0 includes the following new features:
The healthcheckPeriodSeconds parameter lets you specify the number of seconds to wait between health checks. For more information, see Adjust automatic failover trigger settings .
The following metrics help you monitor the performance of your database container. Each of these metrics is of type gauge . For more information, see Database container-level metrics .
alloydb_omni_memory_limit_byte shows the memory limit of a database container.
alloydb_omni_instance_postgresql_replication_state shows the state of each replica that's connected to the AlloyDB Omni primary node.
alloydb_omni_memory_used_byte shows the memory used by the database container in bytes.
An issue that caused a brief interruption to all database clusters when the following is true is fixed:
You're upgrading the AlloyDB Omni Kubernetes operator version 1.1.1 to a newer version.
You're using the AlloyDB Omni database version 15.5.5 or later.
AlloyDB AI is not enabled .
High availability is supported on a secondary database cluster after it's promoted. For more information, see Promote a secondary database cluster and Manage high availability in Kubernetes .
You can enable or disable model endpoint management through Kubernetes manifests. For more information, see Install AlloyDB Omni with AlloyDB AI .
You can configure when logs rotate using thresholds that are based on the size of the log files, the time since the log file last rotated, or both. For more information, see Configure AlloyDB Omni log rotation .
You can create a snapshot of the memory heap of AlloyDB Omni Kubernetes operator to help you analyze and debug its memory performance. For more information, see Analyze AlloyDB Omni Kubernetes operator memory heap usage .
November 07, 2024
Breaking
Since the google_ml_integration.enable_model_support flag is enabled by default, if you are using the google_ml_integration extension version 1.3, your ability to query Vertex AI models using the embedding() function might be impacted. Querying registered models using the google_ml.embedding() function remains unaffected.
To resolve the issue with using the embedding() function , upgrade the google_ml_integration extension version 1.3 to the latest version, 1.4.2. For more information, see how to upgrade the extension .
October 28, 2024
Feature
AlloyDB for PostgreSQL now supports in-place major version upgrade in Preview . You can upgrade your cluster that is compatible with PostgreSQL version 14 to 15. For more information, see Upgrade a database in-place major version .
October 23, 2024
Feature
Database server compatibility with PostgreSQL version 16 is generally available (GA). You can create AlloyDB clusters using PostgreSQL 16 . Database Migration Service also supports homogeneous migrations from PostgreSQL to AlloyDB for PostgreSQL version 16 .
October 10, 2024
Feature
AlloyDB lets you restart one or more nodes of a read pool. For more information, see Restart specific nodes of a read pool .
October 09, 2024
Announcement
AlloyDB for PostgreSQL minor versions are upgraded to 15.7 and 14.12. For more information, see AlloyDB and AlloyDB Omni version policies .
October 02, 2024
Announcement
AlloyDB Omni is in Limited Availability on the Aiven Platform . Aiven provides managed AlloyDB Omni as a service on multiple public clouds. For more information, see Store your data on any major cloud .
Feature
The alloydb_scann extension (previously named postgres_scann ) is generally available ( GA ) for the AlloyDB service in Google Cloud. For more information about storing vector embeddings, creating indexes, and tuning indexes to achieve faster query performance and better recall, see Work with vectors .
September 30, 2024
Feature
AlloyDB outbound public IP connectivity on primary and secondary instances is generally available ( GA ).
September 25, 2024
Feature
You can now set up AlloyDB free trial clusters using a copy of your Cloud SQL for PostgreSQL backup. For more information, see Migrate from Cloud SQL for PostgreSQL to AlloyDB .
September 18, 2024
Feature
The AlloyDB Omni operator is now available in Preview on Google Distributed Cloud (GDC) connected . For more information, see Install AlloyDB Omni on Kubernetes.
September 17, 2024
Feature
You can now add the predefined CMEK organization policy for your AlloyDB clusters and backups. This feature is generally available (GA) .
September 16, 2024
Breaking
The postgres_ann extension has been renamed to alloydb_scann . Before you upgrade to AlloyDB Omni Kubernetes operator version 1.1.1, you must drop any indexes created using the earlier postgres_ann version, then upgrade AlloyDB Omni, and then create the indexes again using the alloydb_scann extension.
Fixed
AlloyDB Omni Kubernetes operator version 1.1.1 is now available. This patch fixes the following issues:
Fixed a regression for the AlloyDB Vertex AI integration.
Fixed a bug in which upgrading from version 1.0.0 to version 1.1.0 failed when using injected sidecars.
Fixed a bug in which backups weren't reestablished correctly across failovers when using the Commvault sidecar with high availability (HA) configurations.
Fixed a bug that caused a status to be incorrectly set by the load balancer, resulting in erroneous reports that the database cluster wasn't ready.
Issue
Upgrading to version 1.1.1 of the AlloyDB Omni Kubernetes operator might result in a brief interruption to all database clusters. No data loss is expected.
Feature
Added a tutorial that shows you how to set up a connection from an application running in a Google Kubernetes Engine autopilot cluster to an AlloyDB instance.
September 04, 2024
Change
AlloyDB for PostgreSQL is now available in africa-south1 (Johannesburg) and in me-central2 (Damman). For more information, see AlloyDB locations .
September 03, 2024
Change
The extension pgvector is updated to version 0.7.2.
August 29, 2024
Feature
Query federation between BigQuery and AlloyDB is now generally available (GA). This feature lets you use BigQuery to query data stored in AlloyDB databases.
Feature
Database server compatibility with PostgreSQL version 16 is now available in Preview . You can create AlloyDB clusters with PostgreSQL 16 compatibility.
August 22, 2024
Feature
AlloyDB Omni now offers in-depth documentation that describes how to install and use AlloyDB Omni in virtual machine (VM) environments. The information in these documents is in addition to the AlloyDB Omni documentation that describes how to install and use AlloyDB Omni in VM and Kubernetes environments. For more information, see Get started with AlloyDB Omni on VMs .
Change
The extension temporal_tables version 1.2.2 has been added to extensions supported by AlloyDB .
The following extensions are updated:
Updated pg_partman to version 4.7.4.
Updated pgtt to version 3.0.0.
August 16, 2024
Feature
The AlloyDB Omni Kubernetes Operator version 1.1.0 lets you configure a load balancer using annotations .
August 14, 2024
Feature
The AlloyDB Omni Kubernetes Operator version 1.0.0 and later lets you schedule matching new database Pods to nodes to balance node distribution across the AlloyDB Omni cluster and help optimize performance.
August 08, 2024
Feature
Enhanced Query Insights and active queries are now available in Preview for read pool instances.
August 05, 2024
Feature
AlloyDB Omni version 15.5.5 is now generally available ( GA ). This version includes the following features and changes:
The AlloyDB Omni Kubernetes Operator version 1.1.0 is generally available ( GA ) and it includes the following new features:
Cross-data center replication to support automated setup of disaster recovery.
Support for the Red Hat OpenShift container platform version 4.14 and later in Preview .
Variable number of nodes per read pool instance.
Customizable count for the number of failed checks before auto-failover kicks in for a High Availability (HA) configuration.
Version 1.1.0 of the Operator is supported on AlloyDB Omni version 15.5.5 and later.
A dedicated backup server for streamlined backup operations.
When you create a database cluster, the admin password secret is no longer deleted after you specify it.
The postgres_ann extension is renamed to alloydb_scann . Before you upgrade AlloyDB Omni, you must drop any indexes created using the older postgres_ann version, then upgrade AlloyDB Omni, and then create the indexes again using the alloydb_scann extension.
Various bug fixes.
July 31, 2024
Feature
Gemini in Databases assistance in AlloyDB for PostgreSQL is now available in Preview for standard and enhanced query insights, system insights, index advisor, and active queries. You can use Gemini assistance to help you monitor and troubleshoot your AlloyDB resources. For more information, see Monitor and troubleshoot with Gemini assistance .
July 22, 2024
Feature
Support for public IP addresses with AlloyDB instances and creating organization policies with custom constraints is now generally available ( GA ).
July 16, 2024
Feature
Cross-region backup location is now generally available ( GA ).
July 10, 2024
Feature
Support for querying exported Cloud Billing data using resource-level tags and resource names is now generally available ( GA ).
July 09, 2024
Change
The extension pgvector is updated to version 0.7.0.
Feature
Performing a switchover with zero data loss in cross-region replication setups, to test disaster recovery (DR) or to perform workload migration, is now generally available ( GA ).
July 01, 2024
Feature
The AlloyDB free trial clusters are now generally available ( GA ). These clusters let you test the majority of AlloyDB features for up to 30 days through a 8 vCPU basic primary instance along with an optional 8 vCPU read pool instance, and automatically scale storage up to 1TB.
June 25, 2024
Feature
AlloyDB Omni version 15.5.4 is generally available ( GA ). This version includes the following features and changes:
The simplified installation method for AlloyDB Omni is now generally available ( GA ). You can install and manage your AlloyDB Omni installation using common container-management tools such as Docker. For information on upgrading an existing AlloyDB Omni installation, see Migrate from an earlier version of AlloyDB Omni to the latest version .
AlloyDB Omni supports the Podman container tool on Red Hat Enterprise Linux (RHEL).
Support for Arm-based architectures is now available in Preview .
Various bug fixes and performance improvements.
June 14, 2024
Change
The maintenance downtime for a basic instance has been improved to match that of an HA primary instance , ensuring both instance types experience minimal downtime of less than a second.
May 22, 2024
Feature
Query federation between BigQuery and AlloyDB is now available in Preview . This feature lets you use BigQuery to query data stored in AlloyDB databases.
May 10, 2024
Feature
Version 15.5.3 of the simplified installation method for AlloyDB Omni is now available in Preview . Updates include the following:
Support for all of the environment variables that are supported by the official PostgreSQL Docker image .
Various bug fixes and performance improvements.
Feature
Model endpoint management is now available in Preview for both AlloyDB and AlloyDB Omni. For more information, see Register and call remote AI models in AlloyDB or Register and call remote AI models in AlloyDB Omni .
May 07, 2024
Feature
AlloyDB Omni version 15.5.1 and later lets you add sidecar containers to your database cluster when you use the AlloyDB Omni Kubernetes Operator.
Feature
Private Service Connect is now generally available ( GA ). Private Service Connect lets you connect to an AlloyDB for PostgreSQL instance from multiple VPC networks belonging to different groups, teams, projects, or organizations.
May 06, 2024
Feature
You can now set password policies for local database users .
May 01, 2024
Feature
You can now set maintenance windows for your AlloyDB clusters . If you do, then AlloyDB schedules non-emergency maintenance events to begin only during the weekly period that you specify. You can also opt in to receive email notifications of upcoming maintenance events.
April 29, 2024
Feature
AlloyDB now supports up to 64 TiB storage per cluster in all locations. For more information about available locations, see AlloyDB locations .
April 12, 2024
Fixed
AlloyDB Omni version 15.5.2 is now available. This version fixes the issue causing AlloyDB Omni running in Kubernetes to run out of memory and crash under some heavy workloads. To apply this fix to a database cluster running in Kubernetes, update its DBCluster manifest definition so that its databaseVersion value is "15.5.2" .
April 09, 2024
Feature
The following Gemini in Databases features are now available in Public Preview:
Database Center : an AI-assisted dashboard that gives you one centralized view across your entire database fleet.
AlloyDB Studio (GA) : lets authorized users interact directly with the SQL database and run SQL queries from the Google Cloud console to access and manipulate data.
Monitor active queries : monitor and troubleshoot the queries that are active in your database.
Index advisor: a fully managed index advisor that tracks the queries your database handles regularly.
Enhanced Query Insights : an assistive query performance diagnostics platform that lets you detect, troubleshoot, and prevent database and query performance problems in near real-time.
4-week query metric retention in the Query Insights dashboard .
5 new database insight recommendations.
To learn how to enable and activate Gemini in Databases, see Set up Gemini in Databases .
Feature
AlloyDB Omni version 15.5.1 has the following AlloyDB AI features available in Preview:
Model endpoint management lets you maintain a per-project registry of AI model endpoints from a variety of sources and providers.
The postgres_ann extension provides a configurable and highly efficient nearest-neighbor index powered by the ScaNN algorithm.
You can query your database using natural language. This Technology Preview includes parameterized secure views, which let you narrowly define the scope of data that natural-language queries have access to.
April 08, 2024
Feature
You can preview a simplified installation method for AlloyDB Omni . This lets you install and run AlloyDB Omni on your environment using portable open-source tools, such as the docker command-line interface.
Feature
AlloyDB Omni version 15.5.1 is now available. This version includes the following features and changes:
The AlloyDB Omni Kubernetes Operator version 1.0.0 is Generally Available ( GA ). The operator includes the following new features:
Backups now support point-in-time recovery (PITR).
You can create asynchronous read pool instances .
High availability (HA) database clusters can have more than one standby replica
HA database clusters don't require any change in connection parameters when failing over.
You can use an HA standby replica as a read-only instance .
You can enable and configure logical replication .
You can set up physical replication between a primary and secondary database cluster running on two separate Kubernetes clusters.
You can restrict AlloyDB Omni pods to run on specific nodes in your Kubernetes cluster.
A number of database and system metrics are available.
The pg_squeeze extension version 1.0 is included.
Various bug fixes and performance improvements.
Issue
The following issue was fixed on April 12, 2024 .
Some heavy workloads might cause AlloyDB Omni running in Kubernetes to run out of memory and crash.
To mitigate this issue, make sure that transparent huge pages are enabled on your Kubernetes nodes:
Follow the instructions on Configuring Transparent Huge Pages .
On every node that you enable transparent huge pages on, run the following command:
echo within_size > /sys/kernel/mm/transparent_hugepage/shmem_enabled
April 05, 2024
Change
The extension pgvector is updated to version 0.6.0.
Change
The following extensions are added to the extensions supported by AlloyDB .
autoinc
insert_username
moddatetime
pg_background
pg_squeeze
tcn
April 02, 2024
Feature
AlloyDB Studio is now generally available ( GA ). AlloyDB Studio includes an Explorer pane that integrates with an enhanced query editor, letting you browse, query, and modify your AlloyDB databases with this single interface. For more information, see Manage your data using AlloyDB Studio .
March 29, 2024
Fixed
Fixed the issue causing AlloyDB clusters created using the Google Cloud CLI, the AlloyDB Admin API, or Terraform to have PostgreSQL 14 compatibility by default, instead of PostgreSQL 15 compatibility.
March 25, 2024
Issue
The following issue was fixed on March 29, 2024 .
AlloyDB clusters created using the Google Cloud CLI, the AlloyDB Admin API, or Terraform have PostgreSQL 14 compatibility by default, instead of PostgreSQL 15 compatibility.
To mitigate this issue, take either one of the following steps:
Specify PostgreSQL version 15 when creating a cluster, instead of relying on the default value.
Use the Google Cloud console to create the cluster.
March 20, 2024
Change
Updated the default major version of PostgreSQL compatibility for new AlloyDB clusters to PostgreSQL 15.
March 19, 2024
Change
The Quotas documentation is updated to include additional guidance on setting the maximum number of concurrent connections for your database instance size.
March 15, 2024
Change
The Back up and restore AlloyDB Omni documentation is updated to include pgBackRest, an open-source solution included with the AlloyDB Omni Docker container.
March 13, 2024
Feature
AlloyDB now supports continuous backup and recovery, and scheduled backups on secondary clusters. When you create a secondary cluster, any backup plans on the primary cluster are automatically copied to the new secondary cluster. For more information, see About cross-region replication .
March 12, 2024
Feature
AlloyDB Language Connectors are now generally available ( GA ). These language connectors are libraries that provide automated mutual TLS connections, IAM-based authorization, and Automated IAM Authentication when connecting to an AlloyDB instance. For more information about language connectors, see AlloyDB Language Connectors overview .
March 04, 2024
Feature
You can now use Key Access Justifications when working with external CMEK keys . This lets you view and manage external key access requests.
February 29, 2024
Announcement
AlloyDB AI is now generally available ( GA ).
Breaking
The return value of the embedding() function of google_ml_integration has changed.
The embedding() function now returns an array of REAL values, and not a VECTOR value. This allows you to install and use the extension without the requirement of installing pgvector as well.
If you wrote application code that uses embedding() during the Preview of AlloyDB AI, then you might need to update it to add explicit casting from the REAL[] data type to the VECTOR data type. For more information, see Work with vector embeddings .
Feature
AlloyDB Omni version 15.5.0 is now available. This version includes the following features and changes:
When installing AlloyDB Omni using its command-line tool , you can now specify the TCP port that the instance accepts connections on.
Automated failover for highly available (HA) Kubernetes-based clusters is available in Preview.
The following extensions are updated:
Updated pg_cron to version 1.6.
Updated pg_repack to version 1.5.0.
Updated pgfincore to version 1.3.1.
Updated pglogical to version 2.4.4.
Updated pgvector to version 0.5.1.
The following extensions are now included:
Added autoinc version 1.0.
Added insert_username version 1.0.
Added moddatetime version 1.0.
Added tcn version 1.0.
Updated core PostgreSQL compatibility to version 15.5.
Applied security fix CVE-2024-0985 from PostgreSQL.
Various bug fixes and performance improvements.
Change
A revised quickstart helps you install and run AlloyDB Omni on a Debian or Ubuntu system using a handful of commands.
February 28, 2024
Feature
AlloyDB now supports the use of Google Cloud tags on cluster and backup resources. Tags are key-value pairs you can apply to your resources for granular IAM permissions. To learn more, see Organize resources using tags . To use tags now, see Attach and manage tags on AlloyDB resources .
February 27, 2024
Feature
You can now use Automatic IAM Authentication with the AlloyDB Language Connectors ( Preview ) to connect to your cluster. For more information, see Connect using the AlloyDB Language Connectors .
February 20, 2024
Feature
You can now configure instances to use 128 vCPUs and 864 GB of RAM per node.
February 09, 2024
Feature
You can now use public IP with the AlloyDB Language Connectors ( Preview ) to connect to your cluster. For more information, see Connect using the AlloyDB Language Connectors .
February 06, 2024
Change
AlloyDB for PostgreSQL is now available in europe-west10 (Berlin). For more information, see AlloyDB locations .
January 29, 2024
Feature
AlloyDB Public IP is now available in Preview . You can configure an AlloyDB instance to have a public IP address and accept connections from authorized external IP addresses.
Fixed
Fixed the issue causing failed connections to certain AlloyDB instances when using Auth Proxy version 1.5.0.
January 25, 2024
Feature
AlloyDB Language Connectors are now available in Preview . These language connectors are libraries that provide automated mutual TLS connections, IAM-based authorization, and Automated IAM Authentication when connecting to an AlloyDB instance. For more information about language connectors, see AlloyDB Language Connectors overview .
January 24, 2024
Feature
AlloyDB support for Cloud regions in the events timeline is now Generally available .
January 22, 2024
Feature
AlloyDB now supports cross-project restoration. You can restore an AlloyDB cluster to a new cluster in a different Google Cloud Project.
January 19, 2024
Announcement
AlloyDB database server compatibility with PostgreSQL version 15 is now generally available ( GA ). You can create or upgrade a cluster with PostgreSQL 15 compatibility.
December 20, 2023
Feature
AlloyDB Omni version 15.4.0 is now available. This version includes the following changes:
pgvector is updated to version 0.5.0
PostgreSQL is updated to version 15.4
Feature
The AlloyDB Omni Kubernetes Operator version 0.3.0 is now available in Preview , and includes bug fixes and improvements to the operator. For more information about upgrading AlloyDB using the Kubernetes operator, see Upgrade AlloyDB Omni .
December 18, 2023
Feature
Automated and continuous backups are now incremental backups. This allows AlloyDB to protect your data using smaller files rather than full backups, reducing your storage costs, and improving the backup speed.
December 15, 2023
Feature
AlloyDB for PostgreSQL now lets you monitor your AlloyDB instances using the AlloyDB System Insights dashboard or by using the Cloud Monitoring dashboard . You can also view metrics on the AlloyDB cluster Overview page .
December 14, 2023
Feature
AlloyDB now supports up to 64TiB storage per cluster in the following regions:
us-west1
us-central1
us-east1
us-east4
europe-west1
asia-east1
asia-southwest1
December 11, 2023
Announcement
Terraform support for AlloyDB is now generally available (GA) .
November 28, 2023
Feature
The AlloyDB columnar engine now supports columns with the array data type.
November 22, 2023
Issue
The following issue was fixed on January 29, 2024 .
Version 1.5.0 of the AlloyDB Auth Proxy client might fail to connect to AlloyDB instances created before mid-November, 2023.
To mitigate this issue, take either one of the following steps:
Use version 1.4.1 of the AlloyDB Auth Proxy client. You can download this version by following the instructions on Download the Auth Proxy client , replacing 1.5.0 or latest in the commands with 1.4.1 .
Update any database flag on the affected instance. We recommend using the Google Cloud console to set and then clear a flag that doesn't require the instance to restart, such as autovacuum . For a full list of flags, see Supported database flags .
November 15, 2023
Announcement
IAM authentication for AlloyDB is generally available ( GA ).
Feature
You can now restrict an OAuth 2.0 access token so that it works only for AlloyDB authentication.
Feature
You can now configure the AlloyDB Auth Proxy to automatically authenticate IAM-based database logins . This works only with the IAM account that you use to run the proxy client.
Fixed
AlloyDB Omni version 15.2.2 is available. This version resolves the previous version's issue with incremental backups , and contains various other bug fixes and improvements. For more information about upgrading AlloyDB Omni, see Upgrade AlloyDB Omni .
Feature
The AlloyDB Omni Kubernetes Operator version 0.2.0 is available in Preview . This update adds support for AlloyDB Omni version 15.2.2, and includes various bug fixes and improvements. For more information about upgrading AlloyDB using the Kubernetes operator, see Upgrade AlloyDB Omni .
November 08, 2023
Change
The extension pgvector is updated to version 0.5.0.
Feature
The extension oracle_fdw is added to the extensions supported by AlloyDB . The extension provides a foreign data wrapper for accessing Oracle databases.
October 11, 2023
Announcement
AlloyDB Omni is now generally available (GA) .
Feature
The AlloyDB Omni Kubernetes Operator is now available in Preview . This extension to the Kubernetes API lets you deploy and manage AlloyDB Omni on a Kubernetes cluster.
Issue
In AlloyDB Omni version 15.2.1 and earlier, after a failover, when you promote a standby instance, incremental backups from the newly promoted instance might conflict with the existing backup files, and the backups might fail.
As a workaround, move the conflicting files into a separate directory.
September 28, 2023
Feature
AlloyDB secondary clusters now support read pool instances.
September 21, 2023
Feature
AlloyDB now offers basic instances , which are primary instances containing only one node, in one zone. Basic instances provide a lower-cost alternative to highly available instances, and are appropriate for use in non-production environments that don't require high availability.
Feature
Database server compatibility with PostgreSQL version 15 is now available in Preview . You can create a cluster with PostgreSQL 15 compatibility .
September 15, 2023
Feature
Maintenance operations on highly available primary instances now occur with less than one second of downtime for most workloads.
Change
AlloyDB for PostgreSQL is now available in the following regions:
europe-west12 (Turin)
me-central1 (Doha)
For more information, see AlloyDB Locations .
September 13, 2023
Feature
AlloyDB now lets you use and manage data-encryption keys residing outside of Google Cloud using Cloud External Key Manager.
September 08, 2023
Feature
When creating an AlloyDB cluster, you can now specify an IP range for private services access . This is optional; if you do not specify an IP range, then AlloyDB selects one for you.
September 06, 2023
Change
Updated the PostgreSQL-compatible server running on AlloyDB instances to version 14.7.
Change
The following extensions are updated:
Updated pg_hint_plan to version 1.4.1.
Updated pg_repack to version 1.4.8.
Updated pg_partman to version 4.7.3.
Updated postgresql-hll to version 2.17.
Updated pg_cron to version 1.5.
Updated pg_hint_plan to version 1.4.1.
Updated pg_repack to version 1.4.8.
Updated pg_partman to version 4.7.3.
Updated postgresql-hll to version 2.17.
Updated pg_cron to version 1.5.
Change
Updated the following extensions related to the PostGIS extension to version 3.2.3:
postgis
postgis_raster
postgis_sfcgal
postgis_tiger_geocoder
postgis_topology
address_standardizer
address_standardizer_data_us
August 29, 2023
Feature
AlloyDB AI, a suite of features for building generative AI applications , is now available with both AlloyDB and AlloyDB Omni. These features include the following:
The AlloyDB machine learning (ML) extension introduces an embedding SQL function . It lets you create vector embeddings from text using ML models. You can store these embeddings as vector data, and apply them as input to pgvector functions.
AlloyDB support for the pgvector extension brings performance enhancements for vector queries that run up to ten times faster than standard PostgreSQL, including an optimization that lets you create indexes of stored vector data using scalar quantization .
Feature
AlloyDB Omni version 15.2.0 is available in Preview . This version includes the following:
Compatibility with PostgreSQL server version 15
A command-line interface for easier installation and maintenance of AlloyDB Omni
Integration with Vertex AI
Guides for data protection using Barman and pglogical
Various bug fixes and query performance improvements
Feature
A separate Technology Preview edition of AlloyDB Omni is available. It lets you experiment with AlloyDB AI functionality using two included machine learning models trained on Google News text.
Issue
In AlloyDB Omni version 15.2.0 , using the COPY function with the FREEZE option is disabled, due to a potential performance issue when loading large datasets.
August 22, 2023
Feature
You can now configure SSL enforcement mode to ensure that all database connections to an instance use SSL encryption.
Feature
You can now improve connection security by enforcing applications to connect to AlloyDB instances through AlloyDB connectors , such as the Auth Proxy.
August 16, 2023
Feature
AlloyDB now offers committed use discounts (CUDs) that provide 25% or 52% discount on AlloyDB's compute resources in exchange for your commitment, and you can continuously use them for one- or three-year terms, respectively.
Feature
Instance machine-type configuration has added an option for 96 vCPUs and 768 GB of RAM per node.
August 08, 2023
Feature
AlloyDB Omni version alloydb-omni-0.3.0-preview-postgresql-15.2 is available. This version introduces PostgreSQL 15, and applies various bug fixes and query performance improvements.
July 28, 2023
Feature
Cloud Asset Inventory support for AlloyDB is generally available ( GA ).
July 18, 2023
Feature
AlloyDB now supports setting up resource locations policies that can be used to constrain the location of new in-scope resources .
Feature
AlloyDB support for Data Residency is generally available ( GA ).
July 05, 2023
Feature
The extension pgvector has been added to the extensions supported by AlloyDB . For more information, see Announcing vector support in PostgreSQL services to power AI-enabled applications .
June 30, 2023
Feature
Vectorized join is available in Preview . Part of the AlloyDB columnar engine, vectorized join can improve the performance of joins by applying vectorized processing to qualifying queries.
Feature
Fault injection lets you test the resilience of a cluster's primary instance by simulating a sudden outage of its active node. This triggers the AlloyDB high availability feature that automatically promotes the instance's standby node to become the new active node.
June 27, 2023
Feature
The columnar engine now supports columns with the following data types:
boolean
bytea
enum
uuid
Feature
IAM authentication for AlloyDB is available in Preview . You can add a role to Identity and Access Management (IAM) user or service accounts that lets them log into AlloyDB instances as database users.
June 21, 2023
Feature
AlloyDB cross-region replication is generally available ( GA ).
June 20, 2023
Change
The extension anon has been added to extensions supported by AlloyDB .
June 16, 2023
Change
AlloyDB for PostgreSQL is now available in europe-west9 (Paris) . For more information, see AlloyDB Locations .
June 12, 2023
Feature
You can increase your quotas by submitting a request in the Quotas page.
Feature
You can now manage the storage quota for clusters through the Quotas page.
June 05, 2023
Change
AlloyDB for PostgreSQL is now available in the following regions:
us-east5 (Columbus)
us-south1 (Dallas)
For more information, see AlloyDB Locations .
June 01, 2023
Feature
Continuous backup and recovery is generally available ( GA ).
May 17, 2023
Feature
The AlloyDB FORCE_APPLY update policy is available in Preview. Use this policy to modify database flags and apply updates faster (within 1-2 minutes) to an instance.
May 12, 2023
Feature
The AlloyDB admin API now includes user-management methods . These let you use the gcloud command-line tool to manage the user roles of your AlloyDB clusters, in addition to the PostgreSQL functions already supported.
May 11, 2023
Feature
The storage per cluster limit has increased to 32 TiB.
May 10, 2023
Feature
The columnar engine now supports columns with json and jsonb data types.
May 09, 2023
Change
AlloyDB for PostgreSQL is now available in the following regions:
asia-south2 (Delhi)
europe-southwest1 (Madrid)
europe-west4 (Netherlands)
europe-west8 (Milan)
me-west1 (Tel Aviv)
northamerica-northeast1 (Montreal)
northamerica-northeast2 (Toronto)
southamerica-east1 (Brazil)
southamerica-west1 (Santiago)
For more information, see AlloyDB Locations .
May 08, 2023
Change
The extensions pgtt and rdkit have been added to AlloyDB's supported extensions .
Feature
The AlloyDB index advisor is now generally available ( GA ).
May 05, 2023
Feature
AlloyDB Omni version alloydb-omni-0.2.0-preview-postgresql-14.4 is available. This version reduces the memory requirement of AlloyDB Omni to 2 GB of RAM, and applies various bug fixes and query performance improvements.
April 24, 2023
Feature
Three metrics tracking node health are available in Preview. These can help you monitor the activity of individual read pool nodes, and investigate and troubleshoot issues with read pool queries.
April 06, 2023
Change
AlloyDB for PostgreSQL is available in us-west2 (Los Angeles) . For more information, see AlloyDB locations .
March 29, 2023
Feature
AlloyDB Omni is available in Preview . AlloyDB Omni is a downloadable edition of AlloyDB for PostgreSQL that lets you run a containerized AlloyDB database engine in your own computing environment.
March 06, 2023
Feature
Cloud Client libraries for the AlloyDB Admin API are in Preview. Supported languages include C++, C#, Go, and Java.
February 27, 2023
Change
AlloyDB for PostgreSQL is available in the following regions:
asia-east1 (Taiwan)
asia-east2 (Hong Kong)
asia-northeast2 (Osaka)
asia-northeast3 (Seoul)
asia-south1 (Mumbai)
asia-southeast2 (Jakarta)
australia-southeast1 (Sydney)
australia-southeast2 (Melbourne)
europe-central2 (Warsaw)
europe-north1 (Finland)
europe-west2 (London)
europe-west6 (Zurich)
us-east1 (South Carolina)
us-east4 (Northern Virginia)
us-west1 (Oregon)
us-west3 (Salt Lake City)
For more information, see AlloyDB Locations .
February 16, 2023
Feature
Continuous backup and recovery is in Preview. This feature protects your clusters from data-loss events by letting you recover their data from any moment within a configurable window.
December 13, 2022
Announcement
AlloyDB for PostgreSQL is generally available (GA) .
December 12, 2022
Feature
The AlloyDB index advisor helps you optimize your databases by observing the queries your databases handle, and then recommending new indexes based on these observations.
December 08, 2022
Feature
AlloyDB cross-region replication replicates your primary cluster's data and resources. It makes the data and resources available in different regions, allowing disaster recovery in the event of an outage in the primary region.
December 01, 2022
Feature
The AlloyDB Clusters page of the Google Cloud console displays summary cards and a resource table that provide an overview on the overall health of your databases. This helps you monitor the real-time performance of your database fleet.
September 15, 2022
Feature
Datastream, Google Cloud's change data capture (CDC) and replication service, supports PostgreSQL for source databases . This means that you can use an AlloyDB database as a Datastream source.
Feature
Google Cloud Database Migration Service has added support for AlloyDB . This service can make it easier to migrate your existing PostgreSQL data and workloads to an AlloyDB cluster.
August 25, 2022
Feature
AlloyDB supports customer-managed encryption keys (CMEK) , an alternative to its default Google-managed encryption. CMEK is especially useful for AlloyDB users who need to manage their own data encryption keys in order to satisfy specific compliance or regulatory requirements.
August 24, 2022
Feature
You can view which zones host a primary instance's active or standby VMs.
July 12, 2022
Feature
When creating a primary or read-pool instance, or scaling either one, you can choose a machine size as small as 2 vCPUs with 16 GB of RAM.
June 28, 2022
Change
AlloyDB's Frequently asked questions page addresses common questions received by the AlloyDB support team during the product's public preview.
May 31, 2022
Feature
VPC Service Controls, a Cloud-wide feature that helps mitigate the risk of data exfiltration, is available with AlloyDB .
May 11, 2022
Announcement
AlloyDB for PostgreSQL is available in Preview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
