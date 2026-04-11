---
title: "Cloud SQL release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/mysql
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/release-notes
  title: "Cloud SQL release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
Resources
Send feedback
Cloud SQL release notes
Stay organized with collections
Save and categorize content based on your preferences.
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
Cloud SQL for MySQL
Feature
The QueryData tool lets you to query the data in your database using conversational language and build data agents. For more information, see QueryData tool overview . This feature is available in ( Preview ).
The preview release increases the accuracy of SQL generation with value search queries which match values and their context within a database. Value search queries trigger automatically.
Feature
If the storage capacity of a Cloud SQL instance is larger than your application
needs, then you can manually reduce, or shrink, your storage capacity to a smaller
size.
Depending on underlying disk size, storage shrink operations might incur
considerable downtime. If your instance requires limited downtime, rather than
using storage shrink capabilities, we recommend migrating your data to a new,
smaller instance using Database Migration Service.
For more information, see
About storage shrink .
Cloud SQL for PostgreSQL
Feature
If the storage capacity of a Cloud SQL instance is larger than your application
needs, then you can manually reduce, or shrink, your storage capacity to a smaller
size.
Depending on underlying disk size, storage shrink operations might incur
considerable downtime. If your instance requires limited downtime, rather than
using storage shrink capabilities, we recommend migrating your data to a new,
smaller instance using Database Migration Service.
For more information, see
About storage shrink .
Feature
The QueryData tool lets you to query the data in your database using conversational language and build data agents. For more information, see QueryData tool overview . This feature is available in ( Preview ).
The preview release increases the accuracy of SQL generation with value search queries which match values and their context within a database. Value search queries trigger automatically.
Cloud SQL for SQL Server
Feature
If the storage capacity of a Cloud SQL instance is larger than your application
needs, then you can manually reduce, or shrink, your storage capacity to a smaller
size.
Depending on underlying disk size, storage shrink operations might incur
considerable downtime. If your instance requires limited downtime, rather than
using storage shrink capabilities, we recommend migrating your data to a new,
smaller instance using Database Migration Service.
For more information, see
About storage shrink .
Feature
Cloud SQL for SQL Server now supports SQL Server 2025 ( GA ):
SQL Server 2025 Standard
SQL Server 2025 Enterprise
SQL Server 2025 Express
For more information, see Database versions and version policies
and Choose a machine series .
Feature
Cloud SQL for SQL Server integration with Microsoft Entra ID
( GA )
provides centralized identity and access management (IAM) for your databases
using your existing Microsoft Entra ID tenant.
April 02, 2026
Cloud SQL for SQL Server
Feature
Cloud SQL for SQL server read pools are now generally available and provide
operational simplicity and scaling for your read workloads.
Read pools provide a single endpoint in front of up to seven read pool nodes and
automatically load balance traffic.
You can scale your read pool in several ways:
Scale in or out : scale load balancing capacity horizontally by modifying
the number of read pool nodes in the read pool. Each read pool supports between
1 and 7 read pool nodes.
Scale up or down : scale load balancing capacity vertically by modifying the
machine type associated with a read pool node. Once defined, configuration is
uniformly applied across each read pool node in the read pool.
For more information, see About read pools .
March 31, 2026
Cloud SQL for MySQL
Feature
You can now migrate a subset of databases from an external server to a
destination Cloud SQL for MySQL instance.
For more information, see
Configure Cloud SQL and the external server for replication .
March 30, 2026
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now offers conversational analytics, which lets users query
their operational data using natural language. This feature is powered by the
Conversational Analytics API ,
which can help you translate complex human dialog into precise database queries
to provide actionable insights. This feature is in
Preview .
For more information, see Conversational analytics for Cloud SQL for MySQL overview .
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL now offers conversational analytics, which lets users query
their operational data using natural language. This feature is powered by the
Conversational Analytics API ,
which can help you translate complex human dialog into precise database queries
to provide actionable insights. This feature is in
Preview .
For more information, see Conversational analytics for Cloud SQL for PostgreSQL overview .
Breaking
Vector assist ( Preview )
is temporarily disabled for all Cloud SQL for PostgreSQL instances.
March 26, 2026
Cloud SQL for MySQL
Feature
MySQL 8.0.44 is now the default minor version for Cloud SQL for MySQL 8.0.
For more information about minor version support in Cloud SQL for MySQL, see
MySQL 8.0 .
March 20, 2026
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports minor version
8.0.45 .
To upgrade your existing instance to the new minor version, see
Upgrade the database minor version .
March 17, 2026
Cloud SQL for MySQL
Feature
Multi-region backup vaults for Cloud SQL enhanced backups
are generally available (GA).
This feature lets you store your backup data in
multi-region storage locations, providing higher availability and protection
against regional outages.
For more information, see Enhanced backups .
Feature
Cloud SQL supports cross-project PITR operations for instances protected by
backup and DR ( GA ).
This feature lets you restore a Cloud SQL instance to a project other than the
project where either the source instance or the backup vault is located.
For more information, see Perform a cross-project PITR .
Cloud SQL for PostgreSQL
Feature
You can now cancel an in-place major version upgrade operation during the main
upgrade phase, when the upgrade is actually being performed.
For more information, see
Cancel the major version upgrade .
Feature
Multi-region backup vaults for Cloud SQL enhanced backups
are generally available (GA).
This feature lets you store your backup data in
multi-region storage locations, providing higher availability and protection
against regional outages.
For more information, see Enhanced backups .
Feature
Cloud SQL supports cross-project PITR operations for instances protected by
backup and DR ( GA ).
This feature lets you restore a Cloud SQL instance to a project other than the
project where either the source instance or the backup vault is located.
For more information, see Perform a cross-project PITR .
Cloud SQL for SQL Server
Feature
Cloud SQL supports cross-project PITR operations for instances protected by
backup and DR ( GA ).
This feature lets you restore a Cloud SQL instance to a project other than the
project where either the source instance or the backup vault is located.
For more information, see Perform a cross-project PITR .
Change
Point-in-time recovery (PITR) default enablement behavior has changed:
PITR is now enabled by default when you create a
Cloud SQL Enterprise edition
instance in the Google Cloud console.
PITR is enabled by default when you create a Cloud SQL Enterprise Plus edition
instance, regardless of the method used.
For more information, see Configure point-in-time recovery (PITR) .
Feature
Multi-region backup vaults for Cloud SQL enhanced backups
are generally available (GA).
This feature lets you store your backup data in
multi-region storage locations, providing higher availability and protection
against regional outages.
For more information, see Enhanced backups .
March 13, 2026
Cloud SQL for MySQL
Feature
You can now enable automatic server certificate rotation for your Cloud SQL instance.
This feature is specifically designed for instances utilizing the Certificate
Authority Service (CAS). Automatic server certificate rotation helps you maintain high security standards while removing the operational burden of manual rotation.
For more information about enabling automatic server certificate rotation for
your instance, see Enable automatic server certificate rotation .
Cloud SQL for PostgreSQL
Feature
You can now enable automatic server certificate rotation for your Cloud SQL instance.
This feature is specifically designed for instances utilizing the Certificate
Authority Service (CAS). Automatic server certificate rotation helps you maintain high security standards while removing the operational burden of manual rotation.
For more information about enabling automatic server certificate rotation for
your instance, see Enable automatic server certificate rotation .
Cloud SQL for SQL Server
Feature
You can now enable automatic server certificate rotation for your Cloud SQL instance.
This feature is specifically designed for instances utilizing the Certificate
Authority Service (CAS). Automatic server certificate rotation helps you maintain high security standards while removing the operational burden of manual rotation.
For more information about enabling automatic server certificate rotation for
your instance, see Enable automatic server certificate rotation .
March 09, 2026
Cloud SQL for MySQL
Feature
You can now execute SQL statements using the Cloud SQL Data API for
administrative queries.
Cloud SQL for PostgreSQL
Feature
You can now execute SQL statements using the Cloud SQL Data API for
administrative queries.
March 02, 2026
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL 8.4.7 is upgraded to MySQL 8.4.8. For more information,
see the MySQL 8.4.8 Release Notes .
February 24, 2026
Cloud SQL for MySQL
Feature
It now takes less time to create a Cloud SQL instance when point-in-time
recovery (PITR) is enabled, as it is by default in the Google Cloud console.
During instance creation, PITR now initially uses an
instant snapshot
instead of a
standard backup .
and then later converts the snapshot to a standard backup in the background to support
restore operations .
Cloud SQL for PostgreSQL
Feature
It now takes less time to create a Cloud SQL instance when point-in-time
recovery (PITR) is enabled, as it is by default in the Google Cloud console.
During instance creation, PITR now initially uses an
instant snapshot
instead of a
standard backup .
and then later converts the snapshot to a standard backup in the background to support
restore operations .
February 23, 2026
Cloud SQL for MySQL
Feature
Gemini Cloud Assist investigation capabilities are now supported in
Cloud SQL for MySQL ( Preview ).
For more information, see
Troubleshoot slow queries with AI assistance .
Cloud SQL for PostgreSQL
Feature
Gemini Cloud Assist investigation capabilities are now supported in
Cloud SQL for PostgreSQL ( Preview ).
For more information, see
Troubleshoot slow queries with AI assistance .
Cloud SQL for SQL Server
Feature
Gemini Cloud Assist investigation capabilities are now supported in
Cloud SQL for SQL Server ( Preview ).
For more information, see
Troubleshoot slow queries with AI assistance .
February 19, 2026
Cloud SQL for PostgreSQL
Feature
Cloud SQL now provides brute-force detection and protection for your Cloud SQL
instances. This helps protect your instances from brute-force access attempts
by identifying the source and mitigating the risk caused by these attempts.
For more information, see
Use brute-force protection .
February 18, 2026
Cloud SQL for MySQL
Change
After March 17, 2026, when you enable the Cloud SQL Admin API
( sqladmin.googleapis.com ), the Cloud SQL remote MCP server is
enabled automatically.
The Cloud SQL remote MCP server is in Preview .
Deprecated
Control of MCP use with organization policies is deprecated.
After March 17, 2026, organization policies that use the
gcp.managed.allowedMCPServices constraint won't work,
and you can control MCP use with IAM deny policies.
For more information about controlling MCP use, see
Control MCP use with IAM .
Cloud SQL for PostgreSQL
Change
After March 17, 2026, when you enable the Cloud SQL Admin API
( sqladmin.googleapis.com )`, the Cloud SQL remote MCP server is
enabled automatically.
The Cloud SQL remote MCP server is in Preview .
Deprecated
Control of MCP use with organization policies is deprecated.
After March 17, 2026, organization policies that use the
gcp.managed.allowedMCPServices constraint won't work,
and you can control MCP use with IAM deny policies.
For more information about controlling MCP use, see
Control MCP use with IAM .
Cloud SQL for SQL Server
Change
After March 17, 2026, when you enable the Cloud SQL Admin API
( sqladmin.googleapis.com ), the Cloud SQL remote MCP server is
enabled automatically.
The Cloud SQL remote MCP server is in Preview .
Deprecated
Control of MCP use with organization policies is deprecated.
After March 17, 2026, organization policies that use the
gcp.managed.allowedMCPServices constraint won't work,
and you can control MCP use with IAM deny policies.
For more information about controlling MCP use, see
Control MCP use with IAM .
February 17, 2026
Cloud SQL for MySQL
Announcement
New best practices are available for securing generative AI agents using
Model Context Protocol (MCP) with Google Cloud databases. This guide covers
key security measures like least privilege, native database controls, and
secure agent design to help you build safer AI applications.
For more information, see Best practices for securing agent interactions with Model Context Protocol .
Cloud SQL for PostgreSQL
Announcement
New best practices are available for securing generative AI agents using
Model Context Protocol (MCP) with Google Cloud databases. This guide covers
key security measures like least privilege, native database controls, and
secure agent design to help you build safer AI applications.
For more information, see Best practices for securing agent interactions with Model Context Protocol .
Cloud SQL for SQL Server
Announcement
New best practices are available for securing generative AI agents using
Model Context Protocol (MCP) with Google Cloud databases. This guide covers
key security measures like least privilege, native database controls, and
secure agent design to help you build safer AI applications.
For more information, see Best practices for securing agent interactions with Model Context Protocol .
February 10, 2026
Cloud SQL for MySQL
Feature
Model endpoint management
for Cloud SQL for MySQL and the
integration of Cloud SQL for MySQL with Vertex AI are now generally available
( GA ).
By integrating your Cloud SQL for MySQL instance with Vertex AI, you can
invoke online predictions and generate vector embeddings from models hosted
in Vertex AI directly from your Cloud SQL instance.
With model endpoint management, you can build generative AI applications by
integrating your databases with models from third-party providers like OpenAI
using your own API keys. Model endpoint management lets you register and
manage model endpoints for your MySQL instance, making your interactions
with a wider range of ML models seamless.
February 09, 2026
Cloud SQL for MySQL
Feature
You can now use the Cloud SQL remote MCP server .
The Cloud SQL remote MCP server lets you interact easily with Cloud SQL
instances from LLMs, AI applications, and AI-enabled development platforms.
This feature is in Preview .
Cloud SQL for PostgreSQL
Feature
You can now use the Cloud SQL remote MCP server .
The Cloud SQL remote MCP server lets you interact easily with Cloud SQL
instances from LLMs, AI applications, and AI-enabled development platforms.
This feature is in Preview .
Cloud SQL for SQL Server
Feature
You can now use the Cloud SQL remote MCP server .
The Cloud SQL remote MCP server lets you interact easily with Cloud SQL
instances from LLMs, AI applications, and AI-enabled development platforms.
This feature is in Preview .
February 02, 2026
Cloud SQL for MySQL
Feature
You can now update the server certificate authority (CA) mode of an existing
Cloud SQL instance. You can update existing instances that use the per-instance
CA option ( GOOGLE_MANAGED_INTERNAL_CA ) to use the shared CA option
( GOOGLE_MANAGED_CAS_CA ) or the customer-managed CA option ( CUSTOMER_MANAGED_CAS_CA ).
For more information about the different server CA mode options, see
Certificate authority (CA) hierarchies .
Cloud SQL for PostgreSQL
Feature
You can now update the server certificate authority (CA) mode of an existing
Cloud SQL instance. You can update existing instances that use the per-instance
CA option ( GOOGLE_MANAGED_INTERNAL_CA ) to use the shared CA option
( GOOGLE_MANAGED_CAS_CA ) or the customer-managed CA option ( CUSTOMER_MANAGED_CAS_CA ).
For more information about the different server CA mode options, see
Certificate authority (CA) hierarchies .
Cloud SQL for SQL Server
Feature
You can now update the server certificate authority (CA) mode of an existing
Cloud SQL instance. You can update existing instances that use the per-instance
CA option ( GOOGLE_MANAGED_INTERNAL_CA ) to use the shared CA option
( GOOGLE_MANAGED_CAS_CA ) or the customer-managed CA option ( CUSTOMER_MANAGED_CAS_CA ).
For more information about the different server CA mode options, see
Certificate authority (CA) hierarchies .
January 26, 2026
Cloud SQL for MySQL
Feature
You can now assign database roles to built-in database users and IAM database
users when you create or update users. For more information about assigning
roles, see built-in database authentication
or IAM database authentication .
Cloud SQL for PostgreSQL
Feature
You can now assign database roles to built-in database users and IAM database
users when you create or update users. For more information about assigning
roles, see built-in database authentication
or IAM database authentication .
January 23, 2026
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports performance capture to help you diagnose
transient performance issues with your MySQL database. Performance capture
lets you specify configurable thresholds for additional monitoring. If a
threshold is reached, then performance capture takes snapshots of the database
state, including in-flight transactions, InnoDB status, and, in the case of
replication lag, detailed replication status. Performance capture outputs the
snapshots in a log format so you can review the state of the instance when
the problem occurred.
For more information, see Cloud SQL performance capture overview .
Performance capture is in Preview .
January 21, 2026
Cloud SQL for MySQL
Change
Cloud SQL for MySQL 8.0.43 is now the default minor version
of Cloud SQL for MySQL 8.0.
If you have automatic minor version upgrade enabled for your instance,
then your instance is upgraded to the default minor version automatically during
its regularly scheduled maintenance update.
For more information about automatic minor version upgrade, see
Upgrade the database minor version of MySQL 8.0 .
January 15, 2026
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports fast clone operations within the same zone ( GA ).
For more information, see Clone an instance .
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL now supports fast clone operations within the same zone ( GA ).
For more information, see Clone an instance .
December 17, 2025
Cloud SQL for MySQL
Feature
You can build data agents that interact with the data in your
database using conversational language. Use these data agents as tools to
empower your applications. For more information, see Data agents overview . This feature is available in Preview , and access to it requires a sign-up .
Cloud SQL for PostgreSQL
Feature
You can build data agents that interact with the data in your
database using conversational language. Use these data agents as tools to
empower your applications. For more information, see Data agents overview . This feature is available in Preview , and access to it requires a sign-up .
December 16, 2025
Cloud SQL for MySQL
Feature
Cloud SQL enhanced backups are now generally available ( GA ).
With enhanced backups, backups are managed and stored in a centralized
backup management project that leverages the
Backup and DR service , and
provides enforced retention, granular scheduling, and longer retention.
Enhanced backups now also support
point-in-time-recovery (PITR) after instance deletion .
For more information about the available options and their limitations, see
Backup options .
For more information about enhanced backups pricing, see
Backup and DR pricing .
Cloud SQL for PostgreSQL
Feature
Cloud SQL enhanced backups are now generally available ( GA ).
With enhanced backups, backups are managed and stored in a centralized
backup management project that leverages the
Backup and DR service , and
provides enforced retention, granular scheduling, and longer retention.
Enhanced backups now also support
point-in-time-recovery (PITR) after instance deletion .
For more information about the available options and their limitations, see
Backup options .
For more information about enhanced backups pricing, see
Backup and DR pricing .
Cloud SQL for SQL Server
Feature
Cloud SQL enhanced backups are now generally available ( GA ).
With enhanced backups, backups are managed and stored in a centralized
backup management project that leverages the
Backup and DR service , and
provides enforced retention, granular scheduling, and longer retention.
Enhanced backups now also support
point-in-time-recovery (PITR) after instance deletion .
For more information about the available options and their limitations, see
Backup options .
For more information about enhanced backups pricing, see
Backup and DR pricing .
December 11, 2025
Cloud SQL for SQL Server
Feature
Cloud SQL for SQL Server integration with Microsoft Entra ID
( Preview )
provides centralized identity and access management (IAM) for your databases
using your existing Microsoft Entra ID tenant.
November 21, 2025
Cloud SQL for MySQL
Feature
To help prevent out-of-memory (OOM) events, you can enable managed buffer pool
for Cloud SQL for MySQL 8.0 and later instances. When you enable managed buffer
pool, Cloud SQL reduces the value of the
innodb_buffer_pool_size configuration and frees up memory when memory usage
is high, and the instance is in danger of an OOM event.
After memory usage stabilizes at a lower value, MySQL increases the
value of innodb_buffer_pool_size incrementally to its original value.
To enable managed buffer pool, your Cloud SQL instance must use a
maintenance version of [$MYSQL_VERSION].R20251004.01_07
or later. You can't enable managed buffer pool for instances that use a
shared core or for instances that are running MySQL 5.6 or MySQL 5.7.
For more information, see Enable managed buffer pool .
Support for managed buffer pool is in Preview .
November 20, 2025
Cloud SQL for PostgreSQL
Feature
PostgreSQL version 18 is now
generally available
for Cloud SQL for PostgreSQL.
You can now use Database Migration Service
with Cloud SQL for PostgreSQL when using PostgreSQL version 18.
To upgrade your instance to PostgreSQL 18, see
Upgrade the database major version in-place .
The following extensions are also now available for PostgreSQL 18:
pg_hint_plan
pgrouting
anonymizer
pg_wait_sampling
tds_fdw
plpgsql_check
For more information about these extensions, see
Configure PostgreSQL extensions .
November 19, 2025
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL now supports Vector assist ( Preview ).
Vector assist is a Cloud SQL for PostgreSQL extension that simplifies the
deployment and management of your Cloud SQL vector workloads. It helps you set
up production-ready vector search capabilities, such as embedding generation,
query optimization, and index creation.
For more information about vector assist, how it works, and its limitations,
see Vector assist overview .
Feature
The rollout of the following minor version and extension upgrades is complete:
Minor versions
13.22 is upgraded to 13.23.
14.19 is upgraded to 14.20.
15.14 is upgraded to 15.15.
16.10 is upgraded to 16.11.
17.6 is upgraded to 17.7.
18 is upgraded to 18.1.
Extensions
Pgvector is upgraded from 0.8.0 to 0.8.1.
To use these versions of the extensions and plugins, update your instance to
[PostgreSQL version].R20251004.01_19 .
If you use a maintenance window, then the updates to the minor, extension, and
plugin versions happen according to the timeframe that you set in the window.
Otherwise, the updates occur within the next few weeks.
For more information on checking your maintenance version, see
Self-service maintenance .
To find your maintenance window or to manage maintenance updates, see
Find and set maintenance windows .
November 18, 2025
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL 8.4.6 is upgraded to MySQL 8.4.7.
For more information, see the MySQL 8.4.7 Release Notes .
November 17, 2025
Cloud SQL for MySQL
Feature
Cloud SQL now offers a free trial instance for both existing and new Google
Cloud customers. A free trial instance lets you test advanced Cloud SQL
capabilities and features for up to 30 days without any financial commitment.
For information about a free trial instance, and its inclusions and conditions,
see Free trial instance overview .
Cloud SQL for PostgreSQL
Feature
Cloud SQL now offers a free trial instance for both existing and new Google
Cloud customers. A free trial instance lets you test advanced Cloud SQL
capabilities and features for up to 30 days without any financial commitment.
For information about a free trial instance, and its inclusions and conditions,
see Free trial instance overview .
November 14, 2025
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports read pool autoscaling
(GA) , which helps you
more easily manage your application's workload needs.
This feature automates read pool scale in and scale out operations based on one
or both of the following conditions:
Allowed CPU usage of the read pool
Allowed number of client connections to the read pool
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL now supports read pool autoscaling
(GA) , which helps you
more easily manage your application's workload needs.
This feature automates read pool scale in and scale out operations based on one
or both of the following conditions:
Allowed CPU usage of the read pool
Allowed number of client connections to the read pool
November 13, 2025
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now lets you have more control over the number of results
that are returned when you perform an ANN vector search with filters.
You can use iterative filtering when the selective filters of the
WHERE clause in your ANN search query produce fewer results
than the number of results specified in your LIMIT clause.
To enable iterative filtering for your ANN search query, set the
cloudsql_vector_iterative_filtering flag to ON .
You can set the flag at a session or global level.
To enable and use iterative filtering for your ANN search query, you must have
[MYSQL_$VERSION].R20251004.01_07
or later installed on your MySQL instance.
For more information, see Search approximate nearest neighbors (ANN) .
November 12, 2025
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports minor version
8.0.44 .
To upgrade your existing
instance to the new version, see
Upgrade the database minor version .
November 10, 2025
Cloud SQL for MySQL
Feature
Cloud SQL now provides brute-force detection and protection for your Cloud SQL
instances. This helps protect your instances from brute-force access attempts
by identifying the source and mitigating the risk caused by these attempts.
For more information, see
Use brute-force protection .
November 05, 2025
Cloud SQL for PostgreSQL
Feature
The rollout of the following extension versions, plugin versions, and
extension support is underway:
Extensions and plugins
plpgsql_check is upgraded from 2.8.1 to 2.8.3 for PostgreSQL versions
14 and later.
pg_wait_sampling is upgraded from 1.1.6 to 1.1.9 for PostgreSQL versions
13 and later.
tds_fdw is upgraded from 2.0.4 to 2.0.5.
The following extensions are available for PostgreSQL 18:
anon
pg_hint_plan
pg_wait_sampling
plpgsql_check
tds_fdw
To use these versions of the extensions and plugins, update your instance to
[PostgreSQL version].R20251004.01_14 .
If you use a maintenance window, then the updates to the minor, extension, and
plugin versions happen according to the timeframe that you set in the window.
Otherwise, the updates occur within the next few weeks.
For more information on checking your maintenance version, see
Self-service maintenance . To find
your maintenance window or to manage maintenance updates, see
Find and set maintenance windows .
November 04, 2025
Cloud SQL for MySQL
Feature
Cloud SQL now supports the
automatic minor version upgrade
for Cloud SQL for MySQL 8.0.35 or later instances.
If your Cloud SQL for MySQL instance is running MySQL 8.0.35 or later, but
you didn't select a specific minor version when you created the instance ( databaseVersion=MYSQL_8_0 ),
then your MySQL instance is upgraded automatically to the default minor version
of Cloud SQL for MySQL 8.0 during its regular scheduled maintenance update .
All eligible Cloud SQL for MySQL instances receive the first automatic
minor version upgrade during the rollout of MYSQL_8_0_[ N ].R20251004.01_07 .
October 29, 2025
Cloud SQL for SQL Server
Feature
You can integrate Cloud SQL for SQL Server with customer-managed Active Directory (CMAD).
CMAD provides capabilities such as authentication and authorization. Joining an
instance to a CMAD domain lets you sign in using Windows Authentication with an
AD-based identity.
Customer-managed Active Directory (CMAD)
is generally available (GA).
October 28, 2025
Cloud SQL for MySQL
Feature
Cloud SQL has enhanced the optimized writes feature, which includes
an improved crash recovery algorithm to reduce crash recovery time and utilizes
unused disk I/O throughput adaptively to accelerate buffer pool warm-up.
The optimized writes feature provides a set of write performance improvements
that adjust MySQL configurations dynamically based on workload demand and
underlying infrastructure.
By default these improvements are enabled for all new
Cloud SQL Enterprise Plus edition instances that you create or that you upgrade
to from Cloud SQL Enterprise edition.
For more information about optimized writes, see
Configure database flags .
October 27, 2025
Cloud SQL for PostgreSQL
Feature
The rollout of the following extension versions and plugin versions is underway:
Extensions and plugins
pg_squeeze is upgraded from 1.8 to 1.9 for PostgreSQL version
13 and later.
pg_cron is upgraded from 1.6.4 to 1.6.7 for PostgreSQL version
10 and later.
postgis is upgraded from 3.5.2 to 3.6.0 for PostgreSQL version
13 and later.
rdkit is upgraded from 4.6.1 to 4.7.0.
To use these versions of the extensions and plugins, update your instance to
[PostgreSQL version].R20251004.01_07 .
If you use a maintenance window, then the updates to the minor, extension, and
plugin versions happen according to the timeframe that you set in the window.
Otherwise, the updates occur within the next few weeks.
For more information on checking your maintenance version, see
Self-service maintenance . To find
your maintenance window or to manage maintenance updates, see
Find and set maintenance windows .
October 23, 2025
Cloud SQL for PostgreSQL
Feature
Cloud SQL now proactively detects and works to cancel high memory usage
connections to prevent out-of-memory (OOM) failures. For more information,
see Cancelled queries due to high memory usage .
October 17, 2025
Cloud SQL for MySQL
Feature
Cloud SQL Enterprise edition now supports a new machine series called the N4 machine series. This machine series provides balanced price-to-performance and uses the Hyperdisk Balanced storage. You can create custom machine types for the N4 machine series with up to 80 vCPUs and up to 640 GB memory. The N4 machine series is generally available (GA).
For more information about the N4 machine series and its availability, see Machine series overview .
Feature
The C4A machine series is now generally available (GA).
The C4A machine series is supported for Cloud SQL Enterprise Plus edition instances, and provides optimized price-performance and delivers predictable high performance for high demand Cloud SQL workloads. It uses the Hyperdisk Balanced storage.
For more information about the C4A machine series and its availability, see Machine series overview .
Cloud SQL for PostgreSQL
Feature
Cloud SQL Enterprise edition now supports a new machine series called the N4 machine series. This machine series provides balanced price-to-performance and uses the Hyperdisk Balanced storage. You can create custom machine types for the N4 machine series with up to 80 vCPUs and up to 640 GB memory. The N4 machine series is generally available (GA).
For more information about the N4 machine series and its availability, see Machine series overview .
Feature
The C4A machine series is now generally available (GA).
The C4A machine series is supported for Cloud SQL Enterprise Plus edition instances, and provides optimized price-performance and delivers predictable high performance for high demand Cloud SQL workloads. It uses the Hyperdisk Balanced storage.
For more information about the C4A machine series and its availability, see Machine series overview .
Cloud SQL for SQL Server
Feature
Cloud SQL Enterprise edition now supports a new machine series called the N4 machine series. This machine series provides balanced price-to-performance and uses the Hyperdisk Balanced storage. You can create custom machine types for the N4 machine series with up to 80 vCPUs and up to 640 GB memory. The N4 machine series is generally available (GA).
For more information about the N4 machine series and its availability, see Machine series overview .
October 06, 2025
Cloud SQL for PostgreSQL
Feature
You can now assess the upgrade readiness of your Cloud SQL for PostgreSQL instances before a major version upgrade by running a precheck. This precheck either confirms your instance can be upgraded, or lists issues and their solutions that need to be fixed prior to upgrading. For more information, see Assess upgrade readiness for your instance .
Cloud SQL for SQL Server
Feature
You can now use advanced disaster recovery (DR) for your Private Service Connect (PSC) enabled Cloud SQL Enterprise Plus edition instances. With advanced DR, you can:
Designate a cross-region disaster recovery (DR) replica
Perform a cross-region replica failover for disaster recovery
Restore your original deployment by using zero-data loss switchover
You can also use switchover to simulate disaster recovery without data loss. For more information, see Use advanced disaster recovery (DR) . This feature is generally available (GA).
October 03, 2025
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL now supports PostgreSQL version 18 in Preview .
PostgreSQL 18 is a newly supported version. We strongly recommend that you review the changes in the release and validate the readiness of your instance thoroughly prior to upgrading your instance to this version.
The following information applies to flags and extensions for PostgreSQL 18:
Flags
The following new flags are available for PostgreSQL 18 only:
autovacuum_vacuum_max_threshold
autovacuum_worker_slots
enable_distinct_reordering
enable_self_join_elimitation
io_max_concurrency
io_method
io_workers
log_lock_failures
max_active_replecation_origins
track_cost_delay_timing
vacuum_max_eager_freeze_failure_rate
vacuum_truncate
For more information, see Configure database flags .
Extensions
The following extensions aren't available for PostgreSQL 18:
pgRouting
plpgsql_check
pg_hint_plan
pgrouting
anonymizer
pg_wait_sampling
tds_fdw
For more information, see Configure PostgreSQL extensions .
To create a new instance using PostgreSQL 18, see Create instances .
September 29, 2025
Cloud SQL for MySQL
Feature
You can now use Gemini's capabilities to fix errors in a query within Cloud SQL Studio ( Preview ).
Cloud SQL for PostgreSQL
Feature
You can now use Gemini's capabilities to fix errors in a query within Cloud SQL Studio ( Preview ).
Cloud SQL for SQL Server
Feature
You can now use Gemini's capabilities to fix errors in a query within Cloud SQL Studio ( Preview ).
September 25, 2025
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports minor version 8.0.43. To upgrade your existing instance to the new version, see Upgrade the database minor version .
Cloud SQL for PostgreSQL
Feature
Cloud SQL Managed Connection Pooling is now generally available ( GA ). Managed Connection Pooling lets you scale your workloads by optimizing resource utilization for Cloud SQL instances using pooling. You can now also use IAM authentication to secure connections when using Managed Connection Pooling.
For more information, see Managed Connection Pooling overview .
September 24, 2025
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL 8.4.5 is upgraded to MySQL 8.4.6. For more information, see the MySQL 8.4.6 Release Notes .
September 23, 2025
Cloud SQL for MySQL
Feature
You can now provision, manage and query your databases using the dedicated Gemini CLI extension for Cloud SQL for MySQL. The extension provides full lifecycle control of your database—from provisioning instances, to exploring schemas and troubleshooting issues—from your command-line interface.
For more information, see Use Cloud SQL for MySQL with MCP, Gemini CLI, and other agents .
Feature
You can now retain point-in-time recovery (PITR) logs for an instance after its deletion for a specified retention period. These logs can be used to restore the deleted instance to a specific point in time. For more information, see Restore a deleted instance using PITR .
Cloud SQL for PostgreSQL
Feature
You can now provision, manage and query your databases using the dedicated Gemini CLI extension for Cloud SQL for PostgreSQL. The extension provides full lifecycle control of your database—from provisioning instances, to exploring schemas and troubleshooting issues—from your command-line interface.
For more information, see Use Cloud SQL for PostgreSQL with MCP, Gemini CLI, and other agents .
Feature
You can now retain point-in-time recovery (PITR) logs for an instance after its deletion for a specified retention period. These logs can be used to restore the deleted instance to a specific point in time. For more information, see Restore a deleted instance using PITR .
Cloud SQL for SQL Server
Feature
You can now provision, manage and query your databases using the dedicated Gemini CLI extension for Cloud SQL for SQL Server. The extension provides full lifecycle control of your database—from provisioning instances, to exploring schemas and troubleshooting issues—from your command-line interface.
For more information, see Use Cloud SQL for SQL Server with MCP, Gemini CLI, and other agents .
Feature
You can now retain point-in-time recovery (PITR) logs for an instance after its deletion for a specified retention period. These logs can be used to restore the deleted instance to a specific point in time. For more information, see Restore a deleted instance using PITR .
September 17, 2025
Cloud SQL for PostgreSQL
Feature
The rollout of the following minor version upgrades is complete:
Minor versions
13.21 is upgraded to 13.22.
14.18 is upgraded to 14.19.
15.13 is upgraded to 15.14.
16.9 is upgraded to 16.10.
17.5 is upgraded to 17.6.
Cloud SQL for PostgreSQL adds support for the following extensions:
Extensions
plpgsql_check 2.8 is available for PostgreSQL version 14 and later.
roaringbitmap 0.5 is available for PostgreSQL version 12 and later.
To use these minor versions and the new extensions, update your instance to [PostgreSQL version].R20250727.00_23 .
If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window. Otherwise, the updates occur within the next few weeks.
For more information on checking your maintenance version, see Self-service maintenance . To find your maintenance window or to manage maintenance updates, see Find and set maintenance windows .
September 12, 2025
Cloud SQL for PostgreSQL
Feature
If a specific active query is blocked or running much longer than expected, it can block other dependent queries. Cloud SQL for PostgreSQL offers an optional feature that lets you terminate specific long-running or blocked active queries.
For more information, see Blocked active queries (Preview) .
September 09, 2025
Cloud SQL for PostgreSQL
Feature
The rollout of the following extension versions is complete:
Extensions and plugins
pg_ivm is upgraded from 1.9 to 1.11.
pg_background is upgraded from 1.2 to 1.3.
google_ml_integration is upgraded from 1.4.2 to 1.4.3.
To use these versions of the extensions, update your instance to [ PostgreSQL version].R20250727.00_14 .
If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window. Otherwise, the updates occur within the next few weeks.
For more information on checking your maintenance version, see Self-service maintenance . To find your maintenance window or to manage maintenance updates, see Find and set maintenance windows .
September 08, 2025
Cloud SQL for MySQL
Feature
Cloud SQL read pools are now generally available and provide operational simplicity and scaling for your read workloads.
Read pools provide a single endpoint in front of up to 20 read pool nodes and automatically load balance traffic.
You can scale your read pool in several ways:
Scale in or out : scale load balancing capacity horizontally by modifying the number of read pool nodes in the read pool. Each read pool supports up to 20 read pool nodes.
Scale up or down : scale load balancing capacity vertically by modifying the machine type associated with a read pool node. Once defined, configuration is uniformly applied across each read pool node in the read pool.
For more information, see
About read pools .
Feature
You can have Cloud SQL create a Private Service Connect endpoint automatically. You can use this endpoint to access Cloud SQL instances through a VPC network. For more information, see Create a Private Service Connect endpoint automatically .
This feature is now generally available ( GA ).
Cloud SQL for PostgreSQL
Feature
Cloud SQL read pools are now generally available and provide operational simplicity and scaling for your read workloads.
Read pools provide a single endpoint in front of up to 20 read pool nodes and automatically load balance traffic.
You can scale your read pool in several ways:
Scale in or out : scale load balancing capacity horizontally by modifying the number of read pool nodes in the read pool. Each read pool supports up to 20 read pool nodes.
Scale up or down : scale load balancing capacity vertically by modifying the machine type associated with a read pool node. Once defined, configuration is uniformly applied across each read pool node in the read pool.
For more information, see
About read pools .
Feature
You can have Cloud SQL create a Private Service Connect endpoint automatically. You can use this endpoint to access Cloud SQL instances through a VPC network. For more information, see Create a Private Service Connect endpoint automatically .
This feature is now generally available ( GA ).
Cloud SQL for SQL Server
Feature
You can have Cloud SQL create a Private Service Connect endpoint automatically. You can use this endpoint to access Cloud SQL instances through a VPC network. For more information, see Create a Private Service Connect endpoint automatically .
This feature is now generally available ( GA ).
September 04, 2025
Cloud SQL for MySQL
Change
The release note on August 13, 2025 regarding Private Service Connect (PSC) outbound connectivity has been updated.
PSC outbound connectivity is required for homogeneous migrations to PSC-enabled Cloud SQL instances using Database Migration Service . For more information, see PSC outbound connections .
Cloud SQL for PostgreSQL
Change
The release note on August 13, 2025 regarding Private Service Connect (PSC) outbound connectivity has been updated.
PSC outbound connectivity is required for homogeneous migrations to PSC-enabled Cloud SQL instances using Database Migration Service . For more information, see PSC outbound connections .
September 03, 2025
Cloud SQL for MySQL
Feature
Cloud SQL Managed Connection Pooling is now generally available ( GA ). Managed Connection Pooling lets you scale your workloads by optimizing resource utilization for Cloud SQL instances using pooling.
For more information, see Managed Connection Pooling overview .
Feature
You can now enable your instance to take a final backup at instance deletion and define its retention period by setting the final backup instance setting .
You can also create a custom organization policy to define final backup instance settings.
For more information, see Final backup .
Cloud SQL for PostgreSQL
Feature
You can now enable your instance to take a final backup at instance deletion and define its retention period by setting the final backup instance setting .
You can also create a custom organization policy to define final backup instance settings.
For more information, see Final backup .
Cloud SQL for SQL Server
Feature
You can now enable your instance to take a final backup at instance deletion and define its retention period by setting the final backup instance setting .
You can also create a custom organization policy to define final backup instance settings.
For more information, see Final backup .
August 29, 2025
Cloud SQL for SQL Server
Feature
Max degree of parallelism (MAXDOP) is a Microsoft database flag available for use in Cloud SQL for SQL Server. This flag lets you limit the maximum number of threads used when running a single query in a parallel plan.
August 21, 2025
Cloud SQL for MySQL
Feature
You can save and manage SQL queries in Cloud SQL Studio. This feature is in Preview . For more information, see Saved queries overview .
Cloud SQL for PostgreSQL
Feature
You can save and manage SQL queries in Cloud SQL Studio. This feature is in Preview . For more information, see Saved queries overview .
Cloud SQL for SQL Server
Feature
You can save and manage SQL queries in Cloud SQL Studio. This feature is in Preview . For more information, see Saved queries overview .
August 15, 2025
Cloud SQL for MySQL
Feature
Now you can use Private Service Connect backends , as an alternative to Private Service Connect endpoints, to access Cloud SQL instances.
Feature
Now you can create an IPv6 endpoint for Private Service Connect (PSC) connections. For more information, see Connect to an instance using Private Service Connect .
Deprecated
You can no longer set a deny maintenance period for instances that are running a maintenance version older than 12 months. To update your instance, perform self-service maintenance or wait until the next maintenance window to update your instance automatically. For more information about maintenance, see Maintenance updates on Cloud SQL instances .
Cloud SQL for PostgreSQL
Feature
Now you can use Private Service Connect backends , as an alternative to Private Service Connect endpoints, to access Cloud SQL instances.
Feature
Now you can create an IPv6 endpoint for Private Service Connect (PSC) connections. For more information, see Connect to an instance using Private Service Connect .
Deprecated
You can no longer set a deny maintenance period for instances that are running a maintenance version older than 12 months. To update your instance, perform self-service maintenance or wait until the next maintenance window to update your instance automatically. For more information about maintenance, see Maintenance updates on Cloud SQL instances .
Cloud SQL for SQL Server
Feature
Now you can create an IPv6 endpoint for Private Service Connect (PSC) connections. For more information, see Connect to an instance using Private Service Connect .
Feature
Now you can use Private Service Connect backends , as an alternative to Private Service Connect endpoints, to access Cloud SQL instances.
Deprecated
You can no longer set a deny maintenance period for instances that are running a maintenance version older than 12 months. To update your instance, perform self-service maintenance or wait until the next maintenance window to update your instance automatically. For more information about maintenance, see Maintenance updates on Cloud SQL instances .
August 13, 2025
Cloud SQL for MySQL
Feature
Cloud SQL now supports Private Service Connect (PSC) outbound connectivity. With PSC outbound connectivity, you can attach a PSC interface to your existing Cloud SQL PSC-enabled instances to allow your instances to make outbound connections to your network. This is required for homogeneous migrations to PSC-enabled Cloud SQL instances using Database Migration Service . For more information, see PSC outbound connections .
Cloud SQL for PostgreSQL
Feature
Cloud SQL now supports Private Service Connect (PSC) outbound connectivity. With PSC outbound connectivity, you can attach a PSC interface to your existing Cloud SQL PSC-enabled instances to allow your instances to make outbound connections to your network. This is required for homogeneous migrations to PSC-enabled Cloud SQL instances using Database Migration Service . For more information, see PSC outbound connections .
Cloud SQL for SQL Server
Feature
Cloud SQL now supports Private Service Connect (PSC) outbound connectivity. With PSC outbound connectivity, you can attach a PSC interface to your existing Cloud SQL PSC-enabled instances to allow your instances to make outbound connections to your network. For more information, see PSC outbound connections .
August 07, 2025
Cloud SQL for MySQL
Change
Cloud SQL for Enterprise Plus edition supports quality enhancements for AI-assisted troubleshooting . With AI-assisted troubleshooting, you can resolve complex database performance issues like slow queries and high load for your instances in a guided manner. To use AI-assisted troubleshooting, you need Gemini Cloud Assist and query insights for Enterprise Plus edition.
Cloud SQL for PostgreSQL
Change
Cloud SQL for Enterprise Plus edition supports quality enhancements for AI-assisted troubleshooting . With AI-assisted troubleshooting, you can resolve complex database performance issues like slow queries and high load for your instances in a guided manner. To use AI-assisted troubleshooting, you need Gemini Cloud Assist and query insights for Enterprise Plus edition.
Cloud SQL for SQL Server
Feature
Cloud SQL now offers planned maintenance and machine tier upgrades for your Cloud SQL Enterprise plus instances with near-zero downtime for eligible instances.
For more information, see Maintenance updates on Cloud SQL instances .
August 04, 2025
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports model endpoint management to help you build your generative AI applications. With model endpoint management, you can register and call remote AI model providers or access the Vertex AI integration. This feature is in Preview and available in Cloud SQL for MySQL version 8.0.36 and later, which includes Cloud SQL for MySQL version 8.4.
To use model endpoint management, update your instance to [ MySQL version ].R20250531.01_14 or later, and make sure that you've enabled the integration with Vertex AI on your instance. You can perform self-service maintenance or wait until the next maintenance window to update the maintenance version of your instance automatically.
Cloud SQL for PostgreSQL
Issue
PostgreSQL has identified a bug in PostgreSQL's May 8, 2025 release that is causing logical replication to halt. Cloud SQL for PostgreSQL released [PostgreSQL version].R20250302.00_19 on May 22, 2025 , which is impacted by this bug.
If you use logical replication with your Cloud SQL for PostgreSQL instances, then we recommend that you don't update your instances to this version or any self-service maintenance version released after May 22, 2025, due to this PostgreSQL bug. We also recommend not performing a major version upgrade on your instances, since it adopts the latest self-service maintenance version.
We expect a fix for this issue in the next automatically-scheduled maintenance. For more information about this bug, see Logical replication 'invalid memory alloc request size 1585837200' after upgrading to 17.5 .
July 31, 2025
Cloud SQL for MySQL
Feature
Cloud SQL now offers two options of backup services to manage your instance's backups:
Enhanced backups ( Preview ): backups are managed and stored in a centralized backup management project that leverages the Backup and DR service , and provides enforced retention, granular scheduling, and longer retention.
Standard backups (existing option): backups are created, managed, and stored in the same project as your Cloud SQL instances.
You can choose between these options based on your instance's requirements and needs. Although instances can't use both backup options at the same time, Cloud SQL gives you the ability to switch between these backup options as necessary.
For more information about the available options and their limitations, see Backup options .
Cloud SQL for PostgreSQL
Feature
Cloud SQL now offers two options of backup services to manage your instance's backups:
Enhanced backups ( Preview ): backups are managed and stored in a centralized backup management project that leverages the Backup and DR service , and provides enforced retention, granular scheduling, and longer retention.
Standard backups (existing option): backups are created, managed, and stored in the same project as your Cloud SQL instances.
You can choose between these options based on your instance's requirements and needs. Although instances can't use both backup options at the same time, Cloud SQL gives you the ability to switch between these backup options as necessary.
For more information about the available options and their limitations, see Backup options .
Cloud SQL for SQL Server
Feature
Cloud SQL now offers two options of backup services to manage your instance's backups:
Enhanced backups ( Preview ): backups are managed and stored in a centralized backup management project that leverages the Backup and DR service , and provides enforced retention, granular scheduling, and longer retention.
Standard backups (existing option): backups are created, managed, and stored in the same project as your Cloud SQL instances.
You can choose between these options based on your instance's requirements and needs. Although instances can't use both backup options at the same time, Cloud SQL gives you the ability to switch between these backup options as necessary.
For more information about the available options and their limitations, see Backup options .
July 08, 2025
Cloud SQL for SQL Server
Feature
Cloud SQL for SQL Server now offers Active Directory support for write endpoints. For more information, see Write endpoints across forests .
July 02, 2025
Cloud SQL for MySQL
Feature
The write endpoint feature for Cloud SQL Enterprise Plus edition instances is now generally available (GA). This endpoint is a global domain name service (DNS) name and resolves to the IP address of the current primary Cloud SQL instance that's enabled with private services access.
By using a write endpoint, you can avoid having to make application connection changes after performing a switchover or replica failover operation to test or mitigate a region failure.
For more information, see Connect to an instance using a write endpoint .
Cloud SQL for PostgreSQL
Feature
The write endpoint feature for Cloud SQL Enterprise Plus edition instances is now generally available (GA). This endpoint is a global domain name service (DNS) name and resolves to the IP address of the current primary Cloud SQL instance that's enabled with private services access.
By using a write endpoint, you can avoid having to make application connection changes after performing a switchover or replica failover operation to test or mitigate a region failure.
For more information, see Connect to an instance using a write endpoint .
June 24, 2025
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL 8.4.4 is upgraded to MySQL 8.4.5. For more information, see the MySQL 8.4.5 Release Notes .
June 17, 2025
Cloud SQL for MySQL
Change
You no longer have to upgrade your instance to MySQL 8.0.37 before you upgrade to Cloud SQL for MySQL 8.4. You can upgrade to Cloud SQL for MySQL 8.4 from any minor version of Cloud SQL for MySQL 8.0. For more information about upgrading the major version of a Cloud SQL instance, see Upgrade the database major version-place .
May 28, 2025
Cloud SQL for SQL Server
Feature
Cloud SQL for SQL Server now offers the maximum server memory recommender.
Database instances running with an allocation of memory that's either too low or too high might experience performance issues.
The max server memory (mb) flag limits the amount of memory that Cloud SQL can allocate for its internal pools. You can manually set a value for this flag, or omit the flag and let Cloud SQL manage memory limits for you automatically.
For more information, see Optimize maximum server memory usage .
May 23, 2025
Cloud SQL for SQL Server
Change
Cloud SQL for SQL Server now extends query insights and index advisor support to read replicas.
May 22, 2025
Cloud SQL for MySQL
Feature
You can now create an instance with both private services access and Private Service Connect enabled. You can also enable Private Service Connect on an existing private services access instance. This feature is now generally available ( GA ).
For more information, see Configure both private services access and Private Service Connect .
Cloud SQL for PostgreSQL
Feature
The rollout of the following minor versions, extension versions, and plugin versions is complete:
Minor versions
13.20 is upgraded to 13.21.
14.17 is upgraded to 14.18.
15.12 is upgraded to 15.13.
16.8 is upgraded to 16.9.
17.4 is upgraded to 17.5.
Extensions and plugins
pg_squeeze is upgraded from 1.5 to 1.8 for all PostgreSQL versions 12 and above.
To use these versions of the extensions, update your instance to [PostgreSQL version].R20250302.00_19 .
If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window. Otherwise, the updates occur within the next few weeks.
For more information on checking your maintenance version, see Self-service maintenance . To find your maintenance window or to manage maintenance updates, see Find and set maintenance windows .
Feature
You can now create an instance with both private services access and Private Service Connect enabled. You can also enable Private Service Connect on an existing private services access instance. This feature is now generally available ( GA ).
For more information, see Configure both private services access and Private Service Connect .
Cloud SQL for SQL Server
Feature
You can now create an instance with both private services access and Private Service Connect enabled. You can also enable Private Service Connect on an existing private services access instance. This feature is now generally available ( GA ).
For more information, see Configure both private services access and Private Service Connect .
May 15, 2025
Cloud SQL for MySQL
Feature
You can now use advanced disaster recovery (DR) for your Private Service Connect (PSC) enabled Cloud SQL Enterprise Plus edition instances. With advanced DR, you can:
Designate a cross-region disaster recovery (DR) replica
Perform a cross-region replica failover for disaster recovery
Restore your original deployment by using zero-data loss switchover
You can also use switchover to simulate disaster recovery without data loss. For more information, see Use advanced disaster recovery (DR) . This feature is generally available (GA).
Feature
Cloud SQL for MySQL now supports minor version 8.0.42. To upgrade your existing instance to the new version, see Upgrade the database minor version .
Cloud SQL for PostgreSQL
Feature
You can now use advanced disaster recovery (DR) for your Private Service Connect (PSC) enabled Cloud SQL Enterprise Plus edition instances. With advanced DR, you can:
Designate a cross-region disaster recovery (DR) replica
Perform a cross-region replica failover for disaster recovery
Restore your original deployment by using zero-data loss switchover
You can also use switchover to simulate disaster recovery without data loss. For more information, see Use advanced disaster recovery (DR) . This feature is generally available (GA).
May 14, 2025
Cloud SQL for SQL Server
Feature
Cloud SQL for SQL Server now supports TLS connections to Active Directory endpoints without requiring server certificate trust or the use of IP addresses. Existing server certificates will need to be rotated to use this feature.
May 08, 2025
Cloud SQL for MySQL
Change
If you create an instance using the Google Cloud Console, then the per-instance CA ( GOOGLE_MANAGED_INTERNAL_CA ) option is now the default server certificate authority (CA) mode for your Cloud SQL instance.
For users of the Cloud SQL Auth Proxy :
If the Cloud SQL instance to which you're connecting is using shared certificate authority (CA) for its serverCaMode setting, then on the client side, you must use Cloud SQL Auth Proxy version 2.13.0 or later.
If the Cloud SQL instance to which you're connecting is using customer-managed CA for its serverCaMode setting, then on the client side, you must use Cloud SQL Auth Proxy version 2.14.3 or later.
Cloud SQL for PostgreSQL
Change
If you create an instance using the Google Cloud Console, then the per-instance CA ( GOOGLE_MANAGED_INTERNAL_CA ) option is now the default server certificate authority (CA) mode for your Cloud SQL instance.
For users of the Cloud SQL Auth Proxy :
If the Cloud SQL instance to which you're connecting is using shared certificate authority (CA) for its serverCaMode setting, then on the client side, you must use Cloud SQL Auth Proxy version 2.13.0 or later.
If the Cloud SQL instance to which you're connecting is using customer-managed CA for its serverCaMode setting, then on the client side, you must use Cloud SQL Auth Proxy version 2.14.3 or later.
Cloud SQL for SQL Server
Change
If you create an instance using the Google Cloud Console, then the per-instance CA ( GOOGLE_MANAGED_INTERNAL_CA ) option is now the default server certificate authority (CA) mode for your Cloud SQL instance.
For users of the Cloud SQL Auth Proxy :
If the Cloud SQL instance to which you're connecting is using shared certificate authority (CA) for its serverCaMode setting, then on the client side, you must use Cloud SQL Auth Proxy version 2.13.0 or later.
If the Cloud SQL instance to which you're connecting is using customer-managed CA for its serverCaMode setting, then on the client side, you must use Cloud SQL Auth Proxy version 2.14.3 or later.
May 07, 2025
Cloud SQL for PostgreSQL
Feature
You can migrate to AlloyDB for PostgreSQL using your Cloud SQL for PostgreSQL backup ( GA ). The Google Cloud CLI is also supported. For more information, see Migrate from Cloud SQL for PostgreSQL to AlloyDB .
May 05, 2025
Cloud SQL for SQL Server
Feature
Cloud SQL for Enterprise Plus edition supports AI-assisted troubleshooting . With AI-assisted troubleshooting, you can resolve complex database performance issues like slow queries and high load for your instances in a guided manner. To use AI-assisted troubleshooting, you need Gemini Cloud Assist and query insights for Enterprise Plus edition . AI-assisted troubleshooting is available in Preview .
May 02, 2025
Cloud SQL for MySQL
Feature
You can now set up custom DNS names by configuring the custom subject alternative name (SAN) for your instance. After you set up DNS name resolution, you can connect to your Cloud SQL instance using the custom DNS name instead of using an IP address. This feature is available only for instances that are configured with the customer-managed certificate authority (CA) ( CUSTOMER_MANAGED_CAS_CA ) option as its server CA mode.
Custom SAN configuration for instances is generally available (GA).
Cloud SQL for PostgreSQL
Feature
You can now set up custom DNS names by configuring the custom subject alternative name (SAN) for your instance. After you set up DNS name resolution, you can connect to your Cloud SQL instance using the custom DNS name instead of using an IP address. This feature is available only for instances that are configured with the customer-managed certificate authority (CA) ( CUSTOMER_MANAGED_CAS_CA ) option as its server CA mode.
Custom SAN configuration for instances is generally available (GA).
Cloud SQL for SQL Server
Feature
You can now set up custom DNS names by configuring the custom subject alternative name (SAN) for your instance. After you set up DNS name resolution, you can connect to your Cloud SQL instance using the custom DNS name instead of using an IP address. This feature is available only for instances that are configured with the customer-managed certificate authority (CA) ( CUSTOMER_MANAGED_CAS_CA ) option as its server CA mode.
Custom SAN configuration for instances is generally available (GA).
May 01, 2025
Cloud SQL for MySQL
Feature
Cloud SQL gives you the flexibility to choose between three CA hierarchy options when you create a Cloud SQL instance .
You can choose between the per-instance CA ( GOOGLE_MANAGED_INTERNAL_CA ), the shared CA ( GOOGLE_MANAGED_CAS_CA ), or the customer-managed CA ( CUSTOMER_MANAGED_CAS_CA ) options as the server certificate authority (CA) mode for your instance. If you create an instance using the Google Cloud Console, then the shared CA option, ( GOOGLE_MANAGED_CAS_CA ), is the default configuration. If you create an instance using gcloud, the Cloud SQL Admin REST API, or Terraform, then the per-instance CA option ( GOOGLE_MANAGED_INTERNAL_CA ) is the default configuration.
The shared CA and customer-managed CA options are now generally available (GA).
Cloud SQL for PostgreSQL
Feature
Cloud SQL gives you the flexibility to choose between three CA hierarchy options when you create a Cloud SQL instance .
You can choose between the per-instance CA ( GOOGLE_MANAGED_INTERNAL_CA ), the shared CA ( GOOGLE_MANAGED_CAS_CA ), or the customer-managed CA ( CUSTOMER_MANAGED_CAS_CA ) options as the server certificate authority (CA) mode for your instance. If you create an instance using the Google Cloud Console, then the shared CA option, ( GOOGLE_MANAGED_CAS_CA ), is the default configuration. If you create an instance using gcloud, the Cloud SQL Admin REST API, or Terraform, then the per-instance CA option ( GOOGLE_MANAGED_INTERNAL_CA ) is the default configuration.
The shared CA and customer-managed CA options are now generally available (GA).
Cloud SQL for SQL Server
Feature
Cloud SQL gives you the flexibility to choose between three CA hierarchy options when you create a Cloud SQL instance .
You can choose between the per-instance CA ( GOOGLE_MANAGED_INTERNAL_CA ), the shared CA ( GOOGLE_MANAGED_CAS_CA ), or the customer-managed CA ( CUSTOMER_MANAGED_CAS_CA ) options as the server certificate authority (CA) mode for your instance. If you create an instance using the Google Cloud Console, then the shared CA option, ( GOOGLE_MANAGED_CAS_CA ), is the default configuration. If you create an instance using gcloud, the Cloud SQL Admin REST API, or Terraform, then the per-instance CA option ( GOOGLE_MANAGED_INTERNAL_CA ) is the default configuration.
The shared CA and customer-managed CA options are now generally available (GA).
April 30, 2025
Cloud SQL for PostgreSQL
Feature
The rollout of the following extension versions and plugin versions is complete:
Extensions and plugins
pg_partman is upgraded from 5.0.1 to 5.2.4 (for PostgreSQL versions 14 and later).
To use this version of the extension, update your instance to [PostgreSQL version].R20250302.00_10 .
If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window. Otherwise, the updates occur within the next few weeks.
For more information on checking your maintenance version, see Self-service maintenance . To find your maintenance window or to manage maintenance updates, see Find and set maintenance windows .
April 24, 2025
Cloud SQL for MySQL
Feature
Private Service Connect endpoint propagation is now generally available (GA). You can use the Network Connectivity Center hub to propagate the Private Service Connect endpoints of your Cloud SQL instances in a VPC network.
Cloud SQL for PostgreSQL
Feature
Private Service Connect endpoint propagation is now generally available (GA). You can use the Network Connectivity Center hub to propagate the Private Service Connect endpoints of your Cloud SQL instances in a VPC network.
Cloud SQL for SQL Server
Feature
Private Service Connect endpoint propagation is now generally available (GA). You can use the Network Connectivity Center hub to propagate the Private Service Connect endpoints of your Cloud SQL instances in a VPC network.
April 18, 2025
Cloud SQL for MySQL
Change
Cloud SQL for MySQL 8.0.40 is now the default minor version. To upgrade your existing instance to the new version, see Upgrade the database minor version .
April 09, 2025
Cloud SQL for MySQL
Feature
Cloud SQL Enterprise Plus edition now supports a new machine series called the C4A machine series, which provides optimized price-performance and delivers predictable high performance for high demand Cloud SQL workloads. C4A uses a new type of storage called Hyperdisk Balanced , and offers up to 72 vCPUs and up to 576 GB memory. The C4A machine series is available in Preview .
For more information about the C4A machine series and its availability, see Machine series overview .
Feature
Cloud SQL for Enterprise Plus edition supports AI-assisted troubleshooting . With AI-assisted troubleshooting, you can resolve complex database performance issues like slow queries and high load for your instances in a guided manner. To use AI-assisted troubleshooting, you need Gemini Cloud Assist and query insights for Enterprise Plus edition . AI-assisted troubleshooting is available in Preview .
Feature
Query insights for Cloud SQL Enterprise Plus edition is now generally available (GA) for your Cloud SQL Enterprise Plus edition for MySQL instances. Query insights for Cloud SQL Enterprise Plus edition offers fine-grained metrics such as wait events and granular query plan samples for faster root-cause analysis and intelligent index recommendations.
For more information, see Use query insights to improve query performance .
Cloud SQL for PostgreSQL
Feature
Cloud SQL Enterprise Plus edition now supports a new machine series called the C4A machine series, which provides optimized price-performance and delivers predictable high performance for high demand Cloud SQL workloads. C4A uses a new type of storage called Hyperdisk Balanced , and offers up to 72 vCPUs and up to 576 GB memory. The C4A machine series is available in Preview .
For more information about the C4A machine series and its availability, see Machine series overview .
Feature
Cloud SQL for Enterprise Plus edition supports AI-assisted troubleshooting . With AI-assisted troubleshooting, you can resolve complex database performance issues like slow queries and high load for your instances in a guided manner. To use AI-assisted troubleshooting, you need Gemini Cloud Assist and query insights for Enterprise Plus edition . AI-assisted troubleshooting is available in Preview .
Feature
Query insights for Cloud SQL Enterprise Plus edition is now generally available (GA) for your Cloud SQL Enterprise Plus edition for PostgreSQL instances. Query insights for Cloud SQL Enterprise Plus edition offers fine-grained metrics such as wait events and granular query plan samples for faster root-cause analysis and intelligent index recommendations.
For more information, see Use query insights to improve query performance .
Cloud SQL for SQL Server
Feature
Query insights for Cloud SQL Enterprise edition and Cloud SQL Enterprise Plus edition is now generally available (GA) for Cloud SQL for SQL Server. You can also now view the query details, query plans, and statistical query execution charts for your top queries.
For more information, see Use query insights to improve query performance .
April 08, 2025
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL 8.4.3 is upgraded to MySQL 8.4.4. For more information, see the MySQL 8.4.4 Release Notes .
April 07, 2025
Cloud SQL for SQL Server
Feature
Cloud SQL now supports the Enterprise Plus recommender . Based on your application workloads and resource utilization, the recommender helps you optimize performance by identifying SQL Server instances that might see performance improvements when upgraded to Cloud SQL Enterprise Plus edition.
April 04, 2025
Cloud SQL for PostgreSQL
Feature
The rollout of the following extension versions and plugin versions is complete:
Extensions and plugins
PostGIS is upgraded from 3.4.4 to 3.5.2.
To use these versions of the extensions, update your instance to [PostgreSQL version]. R20250302.00_04 .
If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window. Otherwise, the updates occur within the next few weeks.
For more information on checking your maintenance version, see Self-service maintenance . To find your maintenance window or to manage maintenance updates, see Find and set maintenance windows .
April 03, 2025
Cloud SQL for MySQL
Feature
You can now integrate Cloud SQL for MySQL and Vertex AI (in Preview ). This allows you to invoke predictions and generate vector embeddings using models hosted in Vertex AI. To use this integration, update your instance to [MySQL version].R20250304.00_01 .
For more information, see Integrate Cloud SQL with Vertex AI .
March 31, 2025
Cloud SQL for MySQL
Feature
Cloud SQL now supports Managed Connection Pooling (MCP) in Preview , which lets you scale your workloads by optimizing resource utilization for your Cloud SQL instances using pooling. To use Managed Connection Pooling, update your instance to [MySQL version].R20250302.00_04 .
For more information, see Managed Connection Pooling overview .
Cloud SQL for PostgreSQL
Feature
Cloud SQL now supports Managed Connection Pooling (MCP) in Preview , which lets you scale your workloads by optimizing resource utilization for your Cloud SQL instances using pooling. To use Managed Connection Pooling, update your instance to [PostgreSQL version].R20250302.00_04 .
For more information, see Managed Connection Pooling overview .
March 28, 2025
Cloud SQL for SQL Server
Feature
When you create a Cloud SQL for SQL Server instance, version SQL Server 2022 Standard is now the default .
March 25, 2025
Cloud SQL for MySQL
Feature
Cloud SQL read pools provide operational simplicity and scaling for your large read workloads.
Read pools provide a single endpoint in front of up to 20 read pool nodes and automatically load balance traffic.
You can scale your read pool in several ways:
Scale in or out : scale load balancing capacity horizontally by modifying the number of read pool nodes in the read pool. Each read pool supports up to 20 read pool nodes.
Scale up or down : scale load balancing capacity vertically by modifying the machine type associated with a read pool node. Once defined, configuration is uniformly applied across each read pool node in the read pool.
For more information, see About read pools .
Cloud SQL for PostgreSQL
Feature
Cloud SQL read pools provide operational simplicity and scaling for your large read workloads.
Read pools provide a single endpoint in front of up to 20 read pool nodes and automatically load balance traffic.
You can scale your read pool in several ways:
Scale in or out : scale load balancing capacity horizontally by modifying the number of read pool nodes in the read pool. Each read pool supports up to 20 read pool nodes.
Scale up or down : scale load balancing capacity vertically by modifying the machine type associated with a read pool node. Once defined, configuration is uniformly applied across each read pool node in the read pool.
For more information, see About read pools .
March 24, 2025
Cloud SQL for MySQL
Feature
Cloud SQL now lets you retain existing backups after an instance is deleted. These consist of on-demand and automatic backups created when the instance was live. For more information, see Retained backups .
Cloud SQL for PostgreSQL
Feature
Cloud SQL now lets you retain existing backups after an instance is deleted. These consist of on-demand and automatic backups created when the instance was live. For more information, see Retained backups .
Cloud SQL for SQL Server
Feature
You can export the transaction logs for all Cloud SQL for SQL Server instances that have point-in-time recovery (PITR) enabled and their logs stored in Cloud Storage .
Feature
Cloud SQL now lets you retain existing backups after an instance is deleted. These consist of on-demand and automatic backups created when the instance was live. For more information, see Retained backups .
March 18, 2025
Cloud SQL for MySQL
Feature
You can now use PITR to restore a Cloud SQL for MySQL instance that isn't available .
March 17, 2025
Cloud SQL for SQL Server
Feature
Cloud SQL for SQL Server supports transparent data encryption (TDE) to encrypt data stored in your Cloud SQL for SQL Server instances.
TDE automatically encrypts data before it is written to storage, and automatically decrypts data when the data is read from storage.
TDE provides another layer of encryption in addition to Google's default offering of encryption for data at rest and Google's optional offering of customer-managed encryption keys (CMEK). TDE helps you meet regulatory compliance requirements and supports import or export operations of TDE encrypted backups. For more information, see About transparent data encryption .
March 14, 2025
Cloud SQL for SQL Server
Feature
You can use PITR to restore a Cloud SQL for SQL Server instance that isn't available .
March 10, 2025
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL introduces a set of improvements that adjust MySQL configurations dynamically based on workload demands and underlying infrastructure to optimize write performance and reduce latency. By default these improvements are enabled for all new Cloud SQL Enterprise Plus edition instances that you create or that you upgrade to from Cloud SQL Enterprise edition. Existing Cloud SQL Enterprise Plus instances that are updated with maintenance version [MySQL_version].R20250304.00_01 will also enable these improvements automatically.
For more information about these improvements, see Configure database flags .
March 04, 2025
Cloud SQL for MySQL
Feature
Cloud SQL Enterprise edition now supports the europe-north2 (Stockholm) region.
Feature
Cloud SQL for MySQL now supports minor version 8.0.41. To upgrade your existing instance to the new version, see Upgrade the database minor version .
Cloud SQL for PostgreSQL
Feature
Cloud SQL Enterprise edition now supports the europe-north2 (Stockholm) region.
Cloud SQL for SQL Server
Feature
Cloud SQL Enterprise edition now supports the europe-north2 (Stockholm) region.
March 03, 2025
Cloud SQL for PostgreSQL
Feature
The rollout of the following minor versions, extension versions, and plugin versions is complete:
Minor versions
12.21 is upgraded to 12.22.
13.18 is upgraded to 13.20.
14.15 is upgraded to 14.17.
15.10 is upgraded to 15.12
16.6 is upgraded to 16.8.
17.2 is upgraded to 17.4.
Extensions and plugins
PostGIS is upgraded from 3.4.3 to 3.4.4.
To use these versions of the extensions, update your instance to [PostgreSQL version].R20250112.01_14 .
If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window. Otherwise, the updates occur within the next few weeks.
For more information on checking your maintenance version, see Self-service maintenance . To find your maintenance window or to manage maintenance updates, see Find and set maintenance windows .
February 26, 2025
Cloud SQL for MySQL
Feature
You can now include replicas when you perform an in-place major version upgrade using gcloud or the Cloud SQL Admin API. For more information, see Upgrade the database major version in-place .
Cloud SQL for PostgreSQL
Feature
You can now include replicas when you perform an in-place major version upgrade using gcloud or the Cloud SQL Admin API. For more information, see Upgrade the database major version in-place .
February 25, 2025
Cloud SQL for PostgreSQL
Feature
You can now export or import all user databases in an instance using a directory-formatted, parallel export or import operation.
February 20, 2025
Cloud SQL for MySQL
Feature
You can now create a final backup of your data before you delete a Cloud SQL instance. You can use the final backup to restore your data to a new instance. This way, you can recover your data after you delete the instance. For more information, see About Cloud SQL backups .
Cloud SQL for PostgreSQL
Feature
You can now create a final backup of your data before you delete a Cloud SQL instance. You can use the final backup to restore your data to a new instance. This way, you can recover your data after you delete the instance. For more information, see About Cloud SQL backups .
Cloud SQL for SQL Server
Feature
You can now create a final backup of your data before you delete a Cloud SQL instance. You can use the final backup to restore your data to a new instance. This way, you can recover your data after you delete the instance. For more information, see About Cloud SQL backups .
February 14, 2025
Cloud SQL for SQL Server
Change
Point in time recovery (PITR) is available by default for all Cloud SQL Enterprise Plus edition for SQL Server instances.
February 13, 2025
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL lets you recreate a lagging replica when replication falls behind a predefined length of time. For more information, see Recreate lagging replica . This feature is in Preview.
February 12, 2025
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL now supports the tds_fdw extension. This extension provides a foreign data wrapper ( fdw ) for accessing databases that use the Tabular Data Stream (TDS) protocol, such as Microsoft SQL Server or Sybase. Cloud SQL for PostgreSQL supports tds_fdw version 2.0.4.
For more information about using this extension, see Configure PostgreSQL extensions .
You can now perform pg_replication_origin_* functions as a database user with the cloudsqlsuperuser role. For more information about cloudsqlsuperuser , see About PostgreSQL users and roles .
The rollout of the following extension version is underway:
rdkit is upgraded from 4.3.0 to 4.6.1
If you use a maintenance window, then the updates to the extension version happen according to the timeframe that you set in the window. Otherwise, the updates occur within the next few weeks.
The new maintenance version is [PostgreSQL version].R20250112.01_03 . To learn how to check your maintenance version, see Self-service maintenance . To find your maintenance window or to manage maintenance updates, see Find and set maintenance windows .
February 11, 2025
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL vector search is now generally available. After you store vector embeddings in a table, you can perform K-nearest neighbor (KNN) searches against your vector dataset. You can also add a vector search index to perform approximate nearest neighbor (ANN) searches.
For more information, see Vector search .
Feature
You can now use a custom DNS name to connect to your Cloud SQL instances by adding a custom subject alternative name (SAN) to your Cloud SQL instances. This feature is available for instances that are configured with Customer Managed CAS CA.. For more information, see Create instances .
You can also add, modify, and remove a custom SAN for existing Cloud SQL instances. For more information, see Edit instances .
This feature is available in Preview .
Cloud SQL for PostgreSQL
Feature
You can now use a custom DNS name to connect to your Cloud SQL instances by adding a custom subject alternative name (SAN) to your Cloud SQL instances. This feature is available for instances that are configured with Customer Managed CAS CA.. For more information, see Create instances .
You can also add, modify, and remove a custom SAN for existing Cloud SQL instances. For more information, see Edit instances .
This feature is available in Preview .
Cloud SQL for SQL Server
Feature
You can now use a custom DNS name to connect to your Cloud SQL instances by adding a custom subject alternative name (SAN) to your Cloud SQL instances. This feature is available for instances that are configured with Customer Managed CAS CA.. For more information, see Create instances .
You can also add, modify, and remove a custom SAN for existing Cloud SQL instances. For more information, see Edit instances .
This feature is available in Preview .
February 05, 2025
Cloud SQL for MySQL
Feature
You can now configure customer-managed CA ( CUSTOMER_MANAGED_CAS_CA ) as the server certificate authority (CA) mode when you create a Cloud SQL instance. With customer-managed CA mode, you set up your own CA pool and CA in Certificate Authority Service . This option lets you establish your own CA hierarchy and manage the rotation of CA certificates for your Cloud SQL instances to help you meet your regulatory compliance needs.
To use the customer-managed CA option in Cloud SQL, see Use a customer-managed certificate authority (CA) . For more information about server CA mode options, see Certificate authority (CA) hierarchies . The customer-managed CA feature is in Preview .
Cloud SQL for PostgreSQL
Feature
You can now migrate a subset of databases from an external server to a destination Cloud SQL instance. For more information, see Configure Cloud SQL and the external server for replication .
Feature
You can now configure customer-managed CA ( CUSTOMER_MANAGED_CAS_CA ) as the server certificate authority (CA) mode when you create a Cloud SQL instance. With customer-managed CA mode, you set up your own CA pool and CA in Certificate Authority Service . This option lets you establish your own CA hierarchy and manage the rotation of CA certificates for your Cloud SQL instances to help you meet your regulatory compliance needs.
To use the customer-managed CA option in Cloud SQL, see Use a customer-managed certificate authority (CA) . For more information about server CA mode options, see Certificate authority (CA) hierarchies . The customer-managed CA feature is in Preview .
Cloud SQL for SQL Server
Feature
You can now configure customer-managed CA ( CUSTOMER_MANAGED_CAS_CA ) as the server certificate authority (CA) mode when you create a Cloud SQL instance. With customer-managed CA mode, you set up your own CA pool and CA in Certificate Authority Service . This option lets you establish your own CA hierarchy and manage the rotation of CA certificates for your Cloud SQL instances to help you meet your regulatory compliance needs.
To use the customer-managed CA option in Cloud SQL, see Use a customer-managed certificate authority (CA) . For more information about server CA mode options, see Certificate authority (CA) hierarchies . The customer-managed CA feature is in Preview .
February 01, 2025
Cloud SQL for MySQL
Announcement
All Cloud SQL for MySQL 5.6 and 5.7 instances are running community end-of-life (EOL) major versions and are now enrolled in Cloud SQL extended support.
IMPORTANT : Extended support is a paid service and is an addition to the current cost of your instance. Charges for extended support are waived from February 1, 2025 through April 30, 2025. Starting on May 1, 2025, all instances enrolled in extended support will be charged. To learn more about the benefits of extended support and pricing, see Extended support for Cloud SQL .
Cloud SQL for PostgreSQL
Announcement
All Cloud SQL for PostgreSQL 9.6, 10, 11, and 12 instances are running community end-of-life (EOL) major versions and are now enrolled in Cloud SQL extended support.
IMPORTANT : Extended support is a paid service and is an addition to the current cost of your instance. Charges for extended support are waived from February 1, 2025 through April 30, 2025. Starting on May 1, 2025, all instances enrolled in extended support will be charged. To learn more about the benefits of extended support and pricing, see Extended support for Cloud SQL .
January 27, 2025
Cloud SQL for SQL Server
Change
Transaction logs associated with point-in-time-recovery (PITR) operations for all Cloud SQL for SQL Server instances are now stored in Cloud Storage. On May 31, 2024, Google Cloud launched support for PITR transaction log storage in Cloud Storage. Since then, Google Cloud has run a transparent migration of these transaction logs to Cloud Storage for all instances created prior to the launch date. This migration is now complete.
Note: If your Cloud SQL for SQL Server instance is on the old network architecture, the transaction logs for PITR may still remain on disk until migrated to the new network architecture. To verify the storage of your instance's transaction logs for PITR, see Check the storage location of transaction logs used for PITR .
January 17, 2025
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL version 17 adds support for the following extensions and plugins:
Extensions and plugins
ip4r
oracle_fdw
orafce
pg_background
pg_bigm
pgfincore
pg_hint_plan
pg_partman
pg_proctab
pgrouting
pg_similarity
pgtap
pgtt
pg_wait_sampling
PL/Proxy
plv8
postgresql_anonymizer
postgresql_hll
prefix
temporal_tables
Cloud SQL for PostgreSQL version 17 doesn't support:
rdkit
pg_squeeze
To use these extensions and plugins in your PostgreSQL 17 instance, update your instance to the POSTGRES_17_2.R20241011.00_11 maintenance version.
To learn how to check your maintenance version, see Self service maintenance . To find your maintenance window or to manage maintenance updates, see Find and set maintenance windows .
To start using PostgreSQL 17, see Create instances .
Cloud SQL for SQL Server
Feature
Control the file size of the tempdb database. For more information, see Manage a tempdb database .
January 14, 2025
Cloud SQL for MySQL
Feature
You can now migrate data from Microsoft Azure to Cloud SQL. For more information, see Configure Cloud SQL and the external server for replication .
Cloud SQL for PostgreSQL
Feature
You can now migrate data from Microsoft Azure to Cloud SQL. For more information, see Configure Cloud SQL and the external server for replication .
January 13, 2025
Cloud SQL for MySQL
Deprecated
As of January 13, 2025, the legacy configuration for high availability (HA) is deprecated for all Cloud SQL for MySQL instances. You can no longer create instances with the legacy HA configuration, and you can no longer enable the legacy HA configuration on existing instances. In addition, after January 13, 2025, legacy HA instances are no longer covered by the Cloud SQL SLA .
We recommend that you update your remaining legacy HA instances as soon as possible to the current HA configuration. You can do so by following the instructions in Update an instance from legacy to current high availability .
Starting on May 1, 2025, Cloud SQL will begin updating any instances that use the legacy high availability configuration to use the current regional persistent disk-based high availability configuration automatically.
December 23, 2024
Cloud SQL for PostgreSQL
Feature
The rollout of the following minor versions, extension versions, and plugin versions is complete :
Minor versions
12.20 is upgraded to 12.21. This version restores functionality of the ALTER {ROLE|DATABASE} SET role command that's present in PostgreSQL version 12.22. For more information, see the PostgreSQL 12.22 release notes .
13.16 is upgraded to 13.18.
14.13 is upgraded to 14.15.
15.8 is upgraded to 15.10.
16.4 is upgraded to 16.6.
17.0 is upgraded to 17.2.
Extension and plugin versions
orafce is upgraded from 4.7 to 4.73 (for PostgreSQL instances, versions 11-16).
pgAudit is upgraded from 17beta to 17.1 (for PostgreSQL instances, version 17).
To use these versions of the extensions, update your instance to one of the following:
POSTGRES_17_0.R20241011.00_11 (for PostgreSQL instances, version 17)
[PostgreSQL version].R20240910.01_31 (for PostgreSQL instances, versions 12 to 16)
If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window. Otherwise, the updates occur within the next few weeks.
For more information on checking your maintenance version, see Self-service maintenance . To find your maintenance window or to manage maintenance updates, see Find and set maintenance windows .
December 20, 2024
Cloud SQL for MySQL
Feature
You can now enable query insights for Cloud SQL Enterprise Plus edition. When you enable query insights for Enterprise Plus, you can access additional features in query insights such as 30 days of metrics retention, granular query plan details, and a higher query length limit.
For more information, see Use query insights to improve query performance . Query insights for Cloud SQL Cloud SQL Enterprise Plus edition is in Preview .
Cloud SQL for PostgreSQL
Feature
You can now enable query insights for Cloud SQL Enterprise Plus edition. When you enable query insights for Enterprise Plus, you can access additional features in query insights such as 30 days of metrics retention, granular query plan details, and a higher query length limit.
For more information, see Use query insights to improve query performance . Query insights for Cloud SQL Cloud SQL Enterprise Plus edition is in Preview .
Cloud SQL for SQL Server
Feature
You can use the following observability dashboards in Cloud SQL for SQL Server to monitor, analyze, and diagnose issues with your instances, databases, and queries:
System insights
Query insights
Both of these dashboards are available to you in the Google Cloud Console.
The System insights dashboard displays the metrics for the resources that your instance is using and can help you analyze the performance of your instance. For more information, see Use system insights to improve system performance . System insights is generally available (GA).
The Query insights dashboard helps you detect problems with queries in your Cloud SQL databases. The dashboard also provides you with the ability to monitor active queries and view index advisor recommendations. For more information, see Use query insights to improve query performance . Query insights for Cloud SQL for SQL Server is in Preview .
You can enable query insights for Cloud SQL Enterprise Plus edition . When you enable query insights for Enterprise Plus, you can access additional features in query insights such as 30 days of metrics retention, granular query plan details, and a higher query length limit. The query insights for Cloud SQL Enterprise Plus edition, index advisor, and active queries features are also in Preview .
December 18, 2024
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL 8.4.0 is upgraded to MySQL 8.4.3. For more information, see the MySQL 8.4.3 Release Notes , the MySQL 8.4.2 Release Notes , and the MySQL 8.4.1 Release Notes .
December 10, 2024
Cloud SQL for MySQL
Change
Cloud SQL now offers notifications for maintenance that's either started or completed. See the Overview of maintenance on Cloud SQL instances . To find out how to sign up for notifications and check your instances for upcoming maintenance, see Find and set maintenance windows .
Cloud SQL for PostgreSQL
Change
Cloud SQL now offers notifications for maintenance that's either started or completed. See the Overview of maintenance on Cloud SQL instances. To find out how to sign up for notifications and check your instances for upcoming maintenance, see Find and set maintenance windows .
Cloud SQL for SQL Server
Change
Cloud SQL now offers notifications for maintenance that's either started or completed. See the Overview of maintenance on Cloud SQL instances. To find out how to sign up for notifications and check your instances for upcoming maintenance, see Find and set maintenance windows .
December 05, 2024
Cloud SQL for MySQL
Feature
Cloud SQL Enterprise Plus edition now supports the following regions:
africa-south1 (Johannesburg)
asia-east2 (Hong Kong)
europe-west10 (Berlin)
Cloud SQL for PostgreSQL
Feature
Cloud SQL Enterprise Plus edition now supports the following regions:
africa-south1 (Johannesburg)
asia-east2 (Hong Kong)
europe-west10 (Berlin)
Cloud SQL for SQL Server
Feature
Cloud SQL Enterprise Plus edition now supports the following regions:
africa-south1 (Johannesburg)
asia-east2 (Hong Kong)
europe-west10 (Berlin)
December 04, 2024
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports minor version 8.0.40. To upgrade your existing instance to the new version, see Upgrade the database minor version .
December 03, 2024
Cloud SQL for MySQL
Feature
You can now use the Network Connectivity Center hub to propagate Private Service Connect endpoints of Cloud SQL instances in a VPC network. All endpoints in this network become accessible transitively to other spoke VPC networks through the hub. This feature is available in Preview .
Cloud SQL for PostgreSQL
Feature
You can now use the Network Connectivity Center hub to propagate Private Service Connect endpoints of Cloud SQL instances in a VPC network. All endpoints in this network become accessible transitively to other spoke VPC networks through the hub. This feature is available in Preview .
Cloud SQL for SQL Server
Feature
You can now use the Network Connectivity Center hub to propagate Private Service Connect endpoints of Cloud SQL instances in a VPC network. All endpoints in this network become accessible transitively to other spoke VPC networks through the hub. This feature is available in Preview .
November 27, 2024
Cloud SQL for MySQL
Feature
You can now create instances with both private services access and Private Service Connect enabled for them. You can also enable Private Service Connect for existing private services access instances. This feature is available in Preview . For more information, see Configure both private services access and Private Service Connect .
Cloud SQL for PostgreSQL
Feature
You can now create instances with both private services access and Private Service Connect enabled for them. You can also enable Private Service Connect for existing private services access instances. This feature is available in Preview . For more information, see Configure both private services access and Private Service Connect .
Cloud SQL for SQL Server
Feature
You can now create instances with both private services access and Private Service Connect enabled for them. You can also enable Private Service Connect for existing private services access instances. This feature is available in Preview . For more information, see Configure both private services access and Private Service Connect .
November 21, 2024
Cloud SQL for PostgreSQL
Feature
You can now set up AlloyDB clusters using a copy of your Cloud SQL for PostgreSQL backup. This feature is in Preview . For more information, see Migrate from Cloud SQL for PostgreSQL to AlloyDB .
November 20, 2024
Cloud SQL for MySQL
Feature
You can now authenticate to Cloud SQL Studio by using IAM database authentication .
For more information about authentication in Cloud SQL Studio, see Manage your data using Cloud SQL Studio .
Cloud SQL for PostgreSQL
Feature
You can now authenticate to Cloud SQL Studio by using IAM database authentication .
For more information about authentication in Cloud SQL Studio, see Manage your data using Cloud SQL Studio .
November 19, 2024
Cloud SQL for MySQL
Feature
For Cloud SQL Enterprise Plus edition instances, advanced disaster recovery (DR) is now generally available (GA) . For more information, see Advanced disaster recovery (DR) and Use advanced disaster recovery (DR) .
Feature
The write endpoint feature is now available in Preview . This endpoint is a global domain name service (DNS) name. This name resolves to the IP address of the current primary Cloud SQL instance that's enabled with private services access.
By using a write endpoint, you can avoid having to make application connection changes after performing a switchover or replica failover operation to test or mitigate a regional failure. For more information, see Configure private IP .
Cloud SQL for PostgreSQL
Feature
The write endpoint feature is now available in Preview . This endpoint is a global domain name service (DNS) name. This name resolves to the IP address of the current primary Cloud SQL instance that's enabled with private services access.
By using a write endpoint, you can avoid having to make application connection changes after performing a switchover or replica failover operation to test or mitigate a regional failure. For more information, see Configure private IP .
Feature
For Cloud SQL Enterprise Plus edition instances, you can now use advanced disaster recovery (DR) to simplify recovery and fallback processes after you perform a cross-regional failover. With advanced DR, you can:
Designate a cross-region disaster recovery (DR) replica
Perform a cross-region replica failover for disaster recovery
Restore your original deployment by using zero-data loss switchover
You can also use switchover to simulate disaster recovery without data loss. You can use advanced DR on Cloud SQL for PostgreSQL version 12, 13, 14, 15, or 16.
For more information, see Advanced disaster recovery (DR) and Use advanced disaster recovery (DR) . This feature is generally available (GA).
November 18, 2024
Cloud SQL for MySQL
Feature
Cloud SQL now supports near-zero downtime for infrequent scale downs (once every three hours) of the compute size (vCPU, memory) of your Cloud SQL Enterprise Plus edition primary instance.
For more information, see Availability in Cloud SQL .
Feature
Cloud SQL now supports near-zero downtime when you enable or disable data cache for Cloud SQL Enterprise Plus edition primary instances. For more information, see Availability in Cloud SQL .
Feature
Support for the northamerica-south1 (Mexico) region.
Cloud SQL for PostgreSQL
Feature
The pgvector extension is now upgraded from version 0.7.4 to version 0.8.0. Use this extension to store and search for vector embeddings in PostgreSQL databases. For more information, see Configure PostgreSQL extensions .
To use this version of the extension, update your instance to one of the following:
POSTGRES_17_0.R20241011.00_03 (for PostgreSQL instances, version 17)
[PostgreSQL version].R20240910.01_17 (for PostgreSQL instances, versions 13 to 16)
For more information, see Self-service maintenance .
Feature
Cloud SQL now supports near-zero downtime for infrequent scale downs (once every three hours) of the compute size (vCPU, memory) of your Cloud SQL Enterprise Plus edition primary instance.
For more information, see Availability in Cloud SQL .
Feature
Cloud SQL now supports near-zero downtime when you enable or disable data cache for Cloud SQL Enterprise Plus edition primary instances. For more information, see Availability in Cloud SQL .
Feature
Support for the northamerica-south1 (Mexico) region.
Cloud SQL for SQL Server
Feature
Support for the northamerica-south1 (Mexico) region.
November 15, 2024
Cloud SQL for PostgreSQL
Feature
You can now register an AI model endpoint, generate vector embeddings, and invoke predictions by using model endpoint management in Cloud SQL. For more information, see Register and call remote AI models in Cloud SQL overview .
November 14, 2024
Cloud SQL for MySQL
Feature
You can now create custom organization policies for the BackupRun resource in Cloud SQL instances. In addition, more fields in the Instances resource are available to create custom organization policies. For more information, see Add custom organization policies .
Cloud SQL for PostgreSQL
Feature
You can now create custom organization policies for the BackupRun resource in Cloud SQL instances. In addition, more fields in the Instances resource are available to create custom organization policies. For more information, see Add custom organization policies .
Cloud SQL for SQL Server
Feature
You can now create custom organization policies for the BackupRun resource in Cloud SQL instances. In addition, more fields in the Instances resource are available to create custom organization policies. For more information, see Add custom organization policies .
November 12, 2024
Cloud SQL for MySQL
Feature
You can now have Cloud SQL create a Private Service Connect endpoint automatically instead of creating the endpoint manually after the instance is created. You use this endpoint to access a Cloud SQL instance through a VPC network. For more information, see Connect to an instance using Private Service Connect . This feature is available in Preview .
Cloud SQL for PostgreSQL
Feature
You can now have Cloud SQL create a Private Service Connect endpoint automatically instead of creating the endpoint manually after the instance is created. You use this endpoint to access a Cloud SQL instance through a VPC network. For more information, see Connect to an instance using Private Service Connect . This feature is available in Preview .
Cloud SQL for SQL Server
Feature
You can now have Cloud SQL create a Private Service Connect endpoint automatically instead of creating the endpoint manually after the instance is created. You use this endpoint to access a Cloud SQL instance through a VPC network. For more information, see Connect to an instance using Private Service Connect . This feature is available in Preview .
November 04, 2024
Cloud SQL for MySQL
Feature
You can now view the size of a backup for a Cloud SQL instance.
Cloud SQL for PostgreSQL
Feature
You can now view the size of a backup for a Cloud SQL instance.
Cloud SQL for SQL Server
Feature
You can now view the size of a backup for a Cloud SQL instance.
October 25, 2024
Cloud SQL for MySQL
Feature
When you run the backupRuns.GET API or the gcloud sql backups describe command, the maxChargeableBytes parameter now appears in the response. This parameter contains the maximum number of bytes that you can be charged for a backup.
Cloud SQL for PostgreSQL
Feature
When you run the backupRuns.GET API or the gcloud sql backups describe command, the maxChargeableBytes parameter now appears in the response. This parameter contains the maximum number of bytes that you can be charged for a backup.
Cloud SQL for SQL Server
Feature
When you run the backupRuns.GET API or the gcloud sql backups describe command, the maxChargeableBytes parameter now appears in the response. This parameter contains the maximum number of bytes that you can be charged for a backup.
October 23, 2024
Cloud SQL for PostgreSQL
Feature
PostgreSQL version 17 is now generally available .
When using the CLI/API to create an instance, if the database version for the instance or replica that you're creating is PostgreSQL 16 and later, then the default Cloud SQL edition is Enterprise Plus.
When using the CLI/API to create an instance, If you either don't specify a database version or you specify a version other than PostgreSQL 16 and later, then the default Cloud SQL edition is Enterprise.
The following information applies to flags and extensions for PostgreSQL 17:
Flags
These flags are deprecated for PostgreSQL 17:
old_snapshot_threshold
trace_recovery_messages
For more information, see Configure database flags .
Extensions
Cloud SQL for PostgreSQL version 17 doesn't support these extensions:
ip4r
oracle_fdw
orafce
pg_background
pg_bigm
pgfincore
pg_hint_plan
pg_partman
pg_proctab
pgrouting
pg_similarity
pg_squeeze
pgtap
pgtt
pg_wait_sampling
PL/Proxy
plv8
postgresql_anonymizer
postgresql_hll
prefix
rdkit
temporal_tables
To start using PostgreSQL 17, see Create instances .
October 21, 2024
Cloud SQL for MySQL
Feature
You can now create a read replica for an instance that has private services access configured for it and connector enforcement enabled for it. For more information, see Connect using Cloud SQL Language Connectors .
Cloud SQL for PostgreSQL
Feature
You can now create a read replica for an instance that has private services access configured for it and connector enforcement enabled for it. For more information, see Connect using Cloud SQL Language Connectors .
Cloud SQL for SQL Server
Feature
You can now create a read replica for an instance that has private services access configured for it and connector enforcement enabled for it. For more information, see Connect using Cloud SQL Language Connectors .
October 16, 2024
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports minor version 8.0.39. To upgrade your existing MySQL 8.0 instance to the new version, see Upgrade the database minor version .
October 09, 2024
Cloud SQL for SQL Server
Feature
You can export the transaction logs for point-in-time recovery (PITR) that Cloud SQL stores in Cloud Storage. This feature is in Preview .
Feature
Cloud SQL configures the max server memory (mb) flag based on the instance size automatically by limiting the amount of memory that SQL Server can allocate for its internal pools. For more information, see Configure database flags .
October 03, 2024
Cloud SQL for MySQL
Feature
You can now configure server certificate authority (CA) mode when you create a Cloud SQL instance. With server CA mode, you have two options:
Per-instance CA : this is the default configuration. With this option, an internal CA dedicated to each Cloud SQL instance signs the
server certificate for that instance.
Shared CA : with this option, the Cloud SQL instance uses a CA hierarchy consisting of a root CA and subordinate server CAs managed by Cloud SQL and hosted on Google Cloud Certificate Authority Service (CA Service). The subordinate server CAs in a region sign the server certificates and are shared across instances in the region. This option can be used only with MySQL 8.0.30 and later.
For more information about each option, see Certificate authority (CA) hierarchies . This feature is in Preview .
Cloud SQL for PostgreSQL
Feature
You can now configure server certificate authority (CA) mode when you create a Cloud SQL instance. With server CA mode, you have two options:
Per-instance CA : this is the default configuration. With this option, an internal CA dedicated to each Cloud SQL instance signs the
server certificate for that instance.
Shared CA : with this option, the Cloud SQL instance uses a CA hierarchy consisting of a root CA and subordinate server CAs managed by Cloud SQL and hosted on Google Cloud Certificate Authority Service (CA Service). The subordinate server CAs in a region sign the server certificates and are shared across instances in the region.
For more information about each option, see Certificate authority (CA) hierarchies . This feature is in Preview .
Feature
The pg_ivm extension, version 1.9, is generally available. This extension enables you to make materialized views up-to-date in which only incremental changes are computed and applied on views rather than recomputing the contents from scratch.
Cloud SQL for PostgreSQL, version 16, now supports the pgRouting extension. This extension extends PostGIS and enhances geospatial processing through network routing and analysis.
For more information on these extensions, see Configure PostgreSQL extensions .
The rollout of the following minor versions, extension versions, and plugin versions is underway :
Minor versions
12.19 is upgraded to 12.20.
13.15 is upgraded to 13.16.
14.12 is upgraded to 14.13.
15.7 is upgraded to 15.8.
16.3 is upgraded to 16.4.
Extension and plugin versions
google_ml_integration is upgraded from 1.2 to 1.4.2.
pgvector is upgraded from 0.7.0 to 0.7.4.
If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window. Otherwise, the updates occur within the next few weeks.
The new maintenance version is [PostgreSQL version].R20240910.01.00_02 . To learn how to check your maintenance version, see Self service maintenance . To find your maintenance window or to manage maintenance updates, see Find and set maintenance windows .
Cloud SQL for SQL Server
Feature
You can now configure server certificate authority (CA) mode when you create a Cloud SQL instance. With server CA mode, you have two options:
Per-instance CA : this is the default configuration. With this option, an internal CA dedicated to each Cloud SQL instance signs the
server certificate for that instance.
Shared CA : with this option, the Cloud SQL instance uses a CA hierarchy consisting of a root CA and subordinate server CAs managed by Cloud SQL and hosted on Google Cloud Certificate Authority Service (CA Service). The subordinate server CAs in a region sign the server certificates and are shared across instances in the region.
For more information about each option, see Certificate authority (CA) hierarchies . This feature is in Preview .
October 01, 2024
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL 8.4 is now generally available. For more information about the differences between MySQL 8.4 and MySQL 8.0, review What Is New in MySQL 8.4 since MySQL 8.0 .
By default, if you specify MySQL 8.4 as the version when you create a Cloud SQL instance (either primary or replica) using the gcloud CLI or the REST API, then the Cloud SQL edition is Enterprise Plus.
If you specify a version other than MySQL 8.4 or don't specify a version, then the default Cloud SQL edition of the instance is Enterprise.
For more information about the implementation of MySQL 8.4 in Cloud SQL, see the following topics:
MySQL 8.4 authentication plugin default
MySQL features unsupported for Cloud SQL
MySQL 8.4 user privileges (cloudsqlsuperuser)
To create a MySQL 8.4 instance in Cloud SQL, see Create instances .
Before you upgrade to MySQL 8.4, you must first upgrade to MySQL 8.0.37 or later. To perform a major version upgrade, see Upgrade the database major version in-place . To perform a minor version upgrade of Cloud SQL for MySQL 8.0, see Upgrade the database minor version .
Cloud SQL for SQL Server
Feature
You can now use the gcloud sql instances patch command to update the time zone of your Cloud SQL for SQL Server instance after you create the instance. Previously, you could only set a custom time zone for a SQL Server instance when you first created the instance. For more information about setting the time zone for a Cloud SQL for SQL Server instance, see About instance settings .
September 25, 2024
Cloud SQL for PostgreSQL
Feature
You can now set up AlloyDB free trial clusters using a copy of your Cloud SQL for PostgreSQL backup. For more information, see Migrate from Cloud SQL for PostgreSQL to AlloyDB .
September 19, 2024
Cloud SQL for PostgreSQL
Feature
You can now use gcloud or the Cloud SQL Admin API to switch the storage location of the transaction logs used for point-in-time recovery on your instance without downtime to Cloud Storage. For more information, see Use point-in-time recovery and Switch transaction log storage to Cloud Storage .
September 16, 2024
Cloud SQL for MySQL
Deprecated
Cloud SQL is discontinuing support for legacy high availability (HA) instance configuration on January 6, 2025. After this date, you can't create Cloud SQL for MySQL instances with the legacy configuration for high availability. You also can't enable the legacy configuration for high availability on existing instances. Until January 6, 2025, legacy HA instances are still covered by the Cloud SQL SLA . We recommend that you upgrade your existing legacy HA instances to regional persistent disk HA instances as soon as possible and create new HA instances using regional persistent disk instead.
Starting on May 1, 2025, Cloud SQL will migrate any remaining instances that use the legacy HA configuration to the current HA configuration automatically.
September 13, 2024
Cloud SQL for SQL Server
Feature
For Cloud SQL Enterprise Plus edition, you can set the number of days of retained transaction logs from 1 to 35. For more information, see Use point-in-time recovery (PITR) .
September 12, 2024
Cloud SQL for MySQL
Feature
Cloud SQL now supports near-zero downtime planned maintenance on standalone Cloud SQL Enterprise Plus edition primary instances. In addition, you can also simulate near-zero downtime for planned maintenance events on standalone Cloud SQL Enterprise Plus edition primary instances.
For more information, see About maintenance on Cloud SQL instances .
Feature
You can now upgrade the minor version of a Cloud SQL for MySQL Enterprise Plus edition instance with near-zero downtime. To upgrade the minor version of your Cloud SQL for MySQL 8.0 instance, see Upgrade the minor version .
Feature
You can now provide access to Cloud SQL Studio by granting a new IAM role, Cloud SQL Studio User ( roles/cloudsql.studioUser ), instead of using the Cloud SQL Admin IAM role.
For more information about using Cloud SQL Studio, see Manage your data using Cloud SQL Studio .
Feature
You can now upgrade your instances to Cloud SQL Enterprise Plus edition with near-zero downtime. To upgrade your instance, see Upgrade an instance to Cloud SQL Enterprise Plus edition using in-place upgrade .
Cloud SQL for PostgreSQL
Feature
You can now upgrade your instances to Cloud SQL Enterprise Plus edition with near-zero downtime. To upgrade your instance, see Upgrade an instance to Cloud SQL Enterprise Plus edition using in-place upgrade .
Feature
You can now provide access to Cloud SQL Studio by granting a new IAM role, Cloud SQL Studio User ( roles/cloudsql.studioUser ), instead of using the Cloud SQL Admin IAM role.
For more information about using Cloud SQL Studio, see Manage your data using Cloud SQL Studio .
Feature
Cloud SQL now supports near-zero downtime planned maintenance on standalone Cloud SQL Enterprise Plus edition primary instances. In addition, you can also simulate near-zero downtime for planned maintenance events on standalone Cloud SQL Enterprise Plus edition primary instances.
For more information, see About maintenance on Cloud SQL instances .
Cloud SQL for SQL Server
Feature
You can now provide access to Cloud SQL Studio by granting a new IAM role, Cloud SQL Studio User ( roles/cloudsql.studioUser ), instead of using the Cloud SQL Admin IAM role.
For more information about using Cloud SQL Studio, see Manage your data using Cloud SQL Studio .
September 03, 2024
Cloud SQL for MySQL
Feature
When you clone your zonal instance, you can now specify a preferred zone for the instance. You can also specify preferred primary and secondary zones for your regional instance. If the zones for your instance go down in the future, then Cloud SQL can assign the preferred zones to the instance, and you don't experience downtime. For more information, see Clone instances .
Cloud SQL for PostgreSQL
Feature
You can now use point-in-time recovery to restore your zonal instance to a preferred primary zone and your regional instance to both a preferred primary zone and a preferred secondary zone. For more information, see Use point-in-time recovery (PITR) .
When you clone your zonal instance, you can now specify a preferred zone for the instance. You can also specify preferred primary and secondary zones for your regional instance. If the zones for your instance go down in the future, then Cloud SQL can assign the preferred zones to the instance, and you don't experience downtime. For more information, see Clone instances .
Cloud SQL for SQL Server
Feature
When you clone your zonal instance, you can now specify a preferred zone for the instance. You can also specify preferred primary and secondary zones for your regional instance. If the zones for your instance go down in the future, then Cloud SQL can assign the preferred zones to the instance, and you don't experience downtime. For more information, see Clone instances .
August 15, 2024
Cloud SQL for MySQL
Announcement
Extended support pricing is now available for Cloud SQL for MySQL. To view pricing details, see Cloud SQL pricing .
For more information about extended support, see Extended support for Cloud SQL .
For more information about extended support timelines, see Database versions and version policies .
Cloud SQL for PostgreSQL
Announcement
Extended support pricing is now available for Cloud SQL for PostgreSQL. To view pricing details, see Cloud SQL pricing .
For more information about extended support, see Extended support for Cloud SQL .
For more information about extended support timelines, see Database versions and version policies .
Change
If your Cloud SQL Enterprise edition instance stores the transaction logs used for point-in-time recovery (PITR) on disk, then when you do an in-place upgrade to Cloud SQL Enterprise Plus edition the storage location for the transaction logs is switched to Cloud Storage. For more information, see Upgrade an instance to Cloud SQL Enterprise Plus edition by using in-place upgrade .
To check where your instance stores the transaction logs used for PITR, see Use point-in-time recovery (PITR) .
August 01, 2024
Cloud SQL for SQL Server
Feature
Cloud SQL for SQL Server now offers two editions of Cloud SQL to support your various business and application needs: Cloud SQL Enterprise Plus edition and Cloud SQL Enterprise edition . Each edition provides different performance and availability characteristics to meet the needs of your applications.
Cloud SQL Enterprise Plus edition has new machines for better performance, higher availability, and advanced disaster recovery. Existing instances become Cloud SQL Enterprise edition for SQL Server instances with no changes to pricing or features. You can upgrade existing instances to the Cloud SQL Enterprise Plus edition in-place using the Google Cloud Console, the gcloud CLI, or the API with minimal downtime.
For more information about Cloud SQL editions, see Introduction to Cloud SQL editions .
July 31, 2024
Cloud SQL for MySQL
Feature
Gemini in Databases assistance in Cloud SQL for MySQL is now available in Preview for query insights, system insights, index advisor, and active queries. You can use Gemini assistance to help you observe and troubleshoot your Cloud SQL resources. For more information, see Observe and troubleshoot with Gemini assistance .
Cloud SQL for PostgreSQL
Feature
Gemini in Databases assistance in Cloud SQL for PostgreSQL is now available in Preview for query insights, system insights, index advisor, and active queries. You can use Gemini assistance to help you observe and troubleshoot your Cloud SQL resources. For more information, see Observe and troubleshoot with Gemini assistance .
July 30, 2024
Cloud SQL for MySQL
Feature
You can now use the gcloud CLI or the Cloud SQL Admin API to switch the storage location of transaction logs used for point-in-time recovery (PITR) on your instance from disk to Cloud Storage. For more information, see Use point-in-time recovery and Switch transaction log storage to Cloud Storage .
July 29, 2024
Cloud SQL for MySQL
Feature
Migrating your external MySQL 5.7 and 8.0 databases into Cloud SQL for MySQL by using Percona XtraBackup physical files is now generally available (GA).
For more information, see Migrate to Cloud SQL from an XtraBackup physical file .
July 26, 2024
Cloud SQL for MySQL
Feature
IAM group authentication is now generally available (GA) for Cloud SQL for MySQL. You can add IAM groups to Cloud SQL instances and manage database access at the group level. To use IAM group authentication, you must have [MySQL version].R20230909.02_00 or later installed on your instance.
Cloud SQL for PostgreSQL
Feature
IAM group authentication is now generally available (GA) for Cloud SQL for PostgreSQL. You can add IAM groups to Cloud SQL instances and manage database access at the group level. To use IAM group authentication, you must have [PostgreSQL version].R20240514.00_04 or later installed on your instance.
Feature
Migrate to AlloyDB insight recommendations are available in Preview .
July 25, 2024
Cloud SQL for MySQL
Change
You can now upgrade the network architecture of a Cloud SQL instance that isn't enabled with high-availability . The previous limitation on upgrading the network architecture of these instances is removed. To check whether your Cloud SQL instance has high availability enabled, see Verify an instance's high availability configuration .
For more information about upgrading your network architecture, see Upgrade an instance to the new network architecture .
Cloud SQL for PostgreSQL
Change
You can now upgrade the network architecture of a Cloud SQL instance that isn't enabled with high-availability . The previous limitation on upgrading the network architecture of these instances is removed. To check whether your Cloud SQL instance has high availability enabled, see Verify an instance's high availability configuration .
For more information about upgrading your network architecture, see Upgrade an instance to the new network architecture .
Cloud SQL for SQL Server
Change
You can now upgrade the network architecture of a Cloud SQL instance that isn't enabled with high-availability . The previous limitation on upgrading the network architecture of these instances is removed. To check whether your Cloud SQL instance has high availability enabled, see Verify an instance's high availability configuration .
For more information about upgrading your network architecture, see Upgrade an instance to the new network architecture .
July 19, 2024
Cloud SQL for SQL Server
Feature
You can now use Extended Events (XEvents) on your Cloud SQL for SQL Server instance to monitor, identify, and troubleshoot the performance of the databases on your instance.
July 18, 2024
Cloud SQL for MySQL
Feature
You can now create custom organization policies for Cloud SQL instances. For more information, see Add custom organization policies .
Cloud SQL for PostgreSQL
Feature
You can now create custom organization policies for Cloud SQL instances. For more information, see Add custom organization policies .
Cloud SQL for SQL Server
Feature
You can now create custom organization policies for Cloud SQL instances. For more information, see Add custom organization policies .
July 17, 2024
Cloud SQL for PostgreSQL
Feature
You can now use the following optional flags when you export and import files into Cloud SQL instances:
--clean : if you export files, then this flag enables you to include the DROP <object> SQL statement that's required to drop (clean) database objects before you import them. If you import files, then this flag enables you to clean database objects before you recreate them.
--if-exists : this flag enables you to include the IF EXISTS SQL statement with each DROP statement that's produced by the clean flag.
If you import files, then these flags apply only if you use the --parallel flag. If you export files, then use these flags only if you're not exporting files in parallel .
July 16, 2024
Cloud SQL for MySQL
Feature
Cloud SQL Studio is now generally available . For more information, see Manage your data using Cloud SQL Studio .
Feature
You can now search for and manage your Cloud SQL resources by using Dataplex Catalog . For more information about the integration of Cloud SQL and Dataplex Catalog, see Manage your Cloud SQL resources using Dataplex Catalog .
Cloud SQL for PostgreSQL
Feature
Cloud SQL Studio is now generally available . For more information, see Manage your data using Cloud SQL Studio .
Feature
You can now search for and manage your Cloud SQL resources by using Dataplex Catalog . For more information about the integration of Cloud SQL and Dataplex Catalog, see Manage your Cloud SQL resources using Dataplex Catalog .
Cloud SQL for SQL Server
Feature
Cloud SQL Studio is now generally available . For more information, see Manage your data using Cloud SQL Studio .
Feature
You can now search for and manage your Cloud SQL resources by using Dataplex Catalog . For more information about the integration of Cloud SQL and Dataplex Catalog, see Manage your Cloud SQL resources using Dataplex Catalog .
July 02, 2024
Cloud SQL for MySQL
Feature
Cloud SQL Enterprise Plus edition now supports the southamerica-west1 (Santiago) region.
Cloud SQL for PostgreSQL
Feature
Cloud SQL Enterprise Plus edition now supports the southamerica-west1 (Santiago) region.
June 24, 2024
Cloud SQL for MySQL
Change
You can now upgrade the network architecture of Cloud SQL for MySQL instances that store transaction logs used for point-in-time recovery (PITR) in Cloud Storage. The previous limitation on upgrade of such instances is removed. To check where your MySQL instance stores its PITR logs, see Check the storage location of transaction logs used for PITR .
For more information about upgrading your network architecture, see Upgrade an instance to the new network architecture .
June 21, 2024
Cloud SQL for PostgreSQL
Feature
You can now use the in-place major version upgrade feature to upgrade your Cloud SQL for PostgreSQL instance to PostgreSQL 16.
June 20, 2024
Cloud SQL for MySQL
Feature
You can now use the gcloud sql instances describe command or the SQL Admin API to retrieve a list of database versions that are available to your MySQL instance for upgrade. For more information, see Plan a major version upgrade and Upgrade the database minor version .
Cloud SQL for PostgreSQL
Feature
You can now use the gcloud sql instances describe command or the SQL Admin API to retrieve a list of database versions that are available to your PostgreSQL instance for upgrade. For more information, see Plan a major version upgrade .
Cloud SQL for SQL Server
Feature
You can now use the gcloud sql instances describe command or the SQL Admin API to retrieve a list of database versions that are available to your SQL Server instance for upgrade. For more information, see Plan a major version upgrade .
June 13, 2024
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports minor version 8.0.37. To upgrade your existing instance to the new version, see Upgrade the database minor version .
June 10, 2024
Cloud SQL for MySQL
Feature
You can now choose to receive a maintenance notification 5 weeks before the maintenance update of your Cloud SQL instance is scheduled to occur. This option is named Week 5 .
In addition, some labels in the Google Cloud Console have been renamed to align with this new option:
Order of update is renamed to Maintenance timing
Earlier is renamed to Week 1
Later is renamed to Week 2
For more information, see Maintenance settings and Find and set maintenance windows .
Cloud SQL for PostgreSQL
Feature
The temporal_tables extension, version 1.2.2 is generally available. This extension provides support for temporal tables. A temporal table records the period of time when a row is valid from a database perspective. For more information, see Configure PostgreSQL extensions .
You can now perform CREATE CAST and DROP CAST statements as a database user with the cloudsqlsuperuser role. For more information, see About PostgreSQL users and roles .
The rollout of the following minor versions, extension versions, and plugin versions is underway :
Minor versions
12.17 is upgraded to 12.19.
13.13 is upgraded to 13.15.
14.10 is upgraded to 14.12.
15.5 is upgraded to 15.7.
Extension and plugin versions
google_ml_integration is upgraded from 1.2 to 1.3.
pg_partman is upgraded from 4.7.4 to 5.0.1 (for PostgreSQL versions 14 and later).
pgvector is upgraded from 0.6.0 to 0.7.0.
Plv8 is upgraded from 3.2.0 to 3.2.2.
PostGIS is upgraded from 3.2.5 to 3.4.0 (for PostgreSQL versions 12 and later).
If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window. Otherwise, the updates occur within the next few weeks.
The new maintenance version is [PostgreSQL version].R20240514.00_04 . To learn how to check your maintenance version, see Self service maintenance . To find your maintenance window or to manage maintenance updates, see Find and set maintenance windows .
Feature
You can now choose to receive a maintenance notification 5 weeks before the maintenance update of your Cloud SQL instance is scheduled to occur. This option is named Week 5 .
In addition, some labels in the Google Cloud Console have been renamed to align with this new option:
Order of update is renamed to Maintenance timing
Earlier is renamed to Week 1
Later is renamed to Week 2
For more information, see Maintenance settings and Find and set maintenance windows .
Cloud SQL for SQL Server
Feature
You can now choose to receive a maintenance notification 5 weeks before the maintenance update of your Cloud SQL instance is scheduled to occur. This option is named Week 5 .
In addition, some labels in the Google Cloud Console have been renamed to align with this new option:
Order of update is renamed to Maintenance timing
Earlier is renamed to Week 1
Later is renamed to Week 2
For more information, see Maintenance settings and Find and set maintenance windows .
June 07, 2024
Cloud SQL for PostgreSQL
Feature
PostgreSQL version 16 is now generally available.
When you use gcloud or the API to create an instance or replica, the following conditions now apply:
If the database version for the instance or replica that you're creating is PostgreSQL 16, then the default Cloud SQL edition is Enterprise Plus.
If you either don't specify a database version or you specify a version other than PostgreSQL 16, then the default Cloud SQL edition is Enterprise.
You can't use the in place major version upgrade feature to upgrade your Cloud SQL for PostgreSQL instance to PostgreSQL 16.
To start using PostgreSQL 16, see Create instances .
May 31, 2024
Cloud SQL for SQL Server
Feature
Cloud SQL for SQL Server now supports storage of point-in-time recovery (PITR) transaction logs in Cloud Storage.
May 29, 2024
Cloud SQL for MySQL
Announcement
Cloud SQL for MySQL major versions that have reached community end-of-life (EOL) will receive extended support starting on February 1, 2025. For more information about extended support, see Extended support for Cloud SQL .
For more information about extended support timelines, see Database versions and version policies .
Cloud SQL for PostgreSQL
Announcement
Cloud SQL for PostgreSQL major versions that have reached community end-of-life (EOL) will receive extended support starting on February 1, 2025. For more information about extended support, see Extended support for Cloud SQL .
For more information about extended support timelines, see Database versions and version policies .
May 23, 2024
Cloud SQL for PostgreSQL
Breaking
Monitoring active queries in Cloud SQL for PostgreSQL, which is part of the Gemini in Databases Preview, is temporarily unavailable. You can still monitor completed queries. For more information about monitoring queries, see Use Query Insights to improve query performance .
April 22, 2024
Cloud SQL for PostgreSQL
Announcement
The pgvector extension is upgraded from version 0.5.1 to version 0.6.0. Use this extension to store and search for vector embeddings in PostgreSQL databases. For more information, see Configure PostgreSQL extensions .
To use this version of the extension, update your instance to [PostgreSQL version].R20240130.00_09 . For more information, see Self-service maintenance .
April 09, 2024
Cloud SQL for MySQL
Feature
The following Gemini in Databases features are now available in Public Preview:
Database Center : an AI-assisted dashboard that gives you one centralized view across your entire database fleet.
Cloud SQL Studio : lets authorized users interact directly with the SQL database and run SQL queries from the Google Cloud console to access and manipulate data.
Monitor active queries : monitor and troubleshoot the queries that are active in your database.
Index advisor : a fully managed index advisor that tracks the queries your database handles regularly.
4-week query metric retention in the Query Insights dashboard .
17 new database insight recommendations.
To learn how to enable and activate Gemini in Databases, see Set up Gemini in Databases .
Feature
Cloud SQL for MySQL now supports the storage of vector embeddings in MySQL 8.0.36 and later databases. To use this feature, update your instance to MySQL 8.0.36.R20240401.03_00 or later.
After you store vector embeddings in your database, you can then perform K-nearest neighbor (KNN) searches on the dataset along with the rest of your data. Cloud SQL for MySQL also supports the creation of vector search indexes for several different index types using approximate nearest neighbor (ANN) search.
For more information, see Working with vector embeddings using Cloud SQL for MySQL . This feature is in Preview .
Cloud SQL for PostgreSQL
Feature
The following Gemini in Databases features are now available in Public Preview:
Database Center : an AI-assisted dashboard that gives you one centralized view across your entire database fleet.
Cloud SQL Studio : lets authorized users interact directly with the SQL database and run SQL queries from the Google Cloud console to access and manipulate data.
Monitor active queries : monitor and troubleshoot the queries that are active in your database.
Index advisor : a fully managed index advisor that tracks the queries your database handles regularly.
4-week query metric retention in the Query Insights dashboard .
15 new database insight recommendations.
To learn how to enable and activate Gemini in Databases, see Set up Gemini in Databases .
Cloud SQL for SQL Server
Feature
The following Gemini in Databases features are now available in Public Preview:
Database Center : an AI-assisted dashboard that gives you one centralized view across your entire database fleet.
Cloud SQL Studio : lets authorized users interact directly with the SQL database and run SQL queries from the Google Cloud console to access and manipulate data.
9 new database insight recommendations.
To learn how to enable and activate Gemini in Databases, see Set up Gemini in Databases .
April 08, 2024
Cloud SQL for MySQL
Feature
Cloud SQL Enterprise Plus edition primary instances with high availability (HA) now require less than one second of downtime for planned maintenance .
Cloud SQL for PostgreSQL
Feature
Cloud SQL Enterprise Plus edition primary instances with high availability (HA) now require less than one second of downtime for planned maintenance .
April 04, 2024
Cloud SQL for MySQL
Feature
For Cloud SQL Enterprise Plus edition , you can now use advanced disaster recovery (DR) to simplify recovery and fallback processes after you perform a cross-regional failover. With advanced DR, you can:
Designate a cross-region disaster recovery (DR) replica
Perform replica failover
Restore your original deployment by using zero data loss switchover
You can also use switchover to simulate disaster recovery without data loss.
For more information, see Advanced disaster recovery (DR) and Use advanced disaster recovery (DR) . This feature is in Preview .
April 03, 2024
Cloud SQL for MySQL
Feature
You can now migrate your external MySQL 5.7 and 8.0 databases into Cloud SQL for MySQL by using Percona XtraBackup physical files. This feature is in Preview .
For more information, see Migrate to Cloud SQL from an XtraBackup physical file .
Cloud SQL for PostgreSQL
Feature
You can now migrate data in the tables of your database in parallel . There's a performance improvement because Cloud SQL can transfer the data with parallel processes within a database. You can set the speed that Cloud SQL transfers this data to min , optimal , or max .
April 02, 2024
Cloud SQL for MySQL
Feature
You can now scale up the compute size (vCPU, memory) of a Cloud SQL Enterprise Plus edition primary instance with near-zero downtime.
Cloud SQL for PostgreSQL
Change
Version 0.6.0 of the pgvector extension that's listed in the March 27 release note isn't available yet. Use version 0.5.1 of this extension.
Feature
You can now scale up the compute size (vCPU, memory) of a Cloud SQL Enterprise Plus edition primary instance with near-zero downtime.
Cloud SQL for SQL Server
Feature
You can now use SSL mode instead of the legacy require_ssl setting to specify the encryption requirements for connections to your Cloud SQL for SQL Server instances. For more information, see Enforce SSL/TLS encryption .
April 01, 2024
Cloud SQL for MySQL
Change
If your Cloud SQL Enterprise edition instance stores the transaction logs used for point-in-time recovery (PITR) on disk, then when you do an in-place upgrade to Cloud SQL Enterprise Plus edition, the storage location for the transaction logs is switched to Cloud Storage. For more information, see Upgrade an instance to Cloud SQL Enterprise Plus edition by using in-place upgrade .
To check where your instance stores the transaction logs used for PITR, see Use point-in-time recovery (PITR)
March 28, 2024
Cloud SQL for MySQL
Feature
You can now simulate a planned maintenance update with near-zero downtime on your Cloud SQL Enterprise Plus primary instance without updating your database. For more information, see About maintenance on Cloud SQL instances .
Cloud SQL for PostgreSQL
Feature
You can now simulate a planned maintenance update with near-zero downtime on your Cloud SQL Enterprise Plus primary instance without updating your database. For more information, see About maintenance on Cloud SQL instances .
March 27, 2024
Cloud SQL for PostgreSQL
Announcement
The pgvector extension is upgraded from version 0.5.1 to version 0.6.0. Use this extension to store and search for vector embeddings in PostgreSQL databases. For more information, see Configure PostgreSQL extensions .
To use this version of the extension, update your instance to [PostgreSQL version].R20240130.00_07 . For more information, see Self-service maintenance .
Announcement
The rollout of the following items in the February 7 release note is now complete :
Extensions
Flags
Minor versions
Extension versions
Plugin versions
March 26, 2024
Cloud SQL for PostgreSQL
Feature
You can now integrate Cloud SQL and Vertex AI. This integration lets you apply large language models (LLMs), which are hosted in Vertex AI, to a Cloud SQL for PostgreSQL database, version 12 and later. For more information, see Integrate Cloud SQL with Vertex AI .
March 25, 2024
Cloud SQL for MySQL
Feature
Private Service Connect now includes support for cross-region read replicas . You can also choose an availability type (REGIONAL or ZONAL) for Private Service Connect-enabled instances. Both features are in GA .
Cloud SQL for PostgreSQL
Feature
Private Service Connect now includes support for cross-region read replicas . You can also choose an availability type (REGIONAL or ZONAL) for Private Service Connect-enabled instances. Both features are in GA .
Cloud SQL for SQL Server
Feature
You can now use Private Service Connect to connect to a Cloud SQL for SQL Server instance. This solution allows you to connect to the instance from multiple VPC networks that belong to different groups, teams, projects, or organizations.
Private Service Connect includes support for cross-region read replicas . You can also choose an availability type (REGIONAL or ZONAL) for Private Service Connect-enabled instances.
All features are in GA .
March 19, 2024
Cloud SQL for MySQL
Feature
Cloud SQL Enterprise Plus edition now supports the me-central2 (Dammam) region.
Cloud SQL for PostgreSQL
Feature
Cloud SQL Enterprise Plus edition now supports the me-central2 (Dammam) region.
March 14, 2024
Cloud SQL for SQL Server
Announcement
A new maintenance version rollout is currently underway for all supported SQL Server versions.
If you have configured a maintenance window for your instance, then the updates will occur according to the timeframe that you set in the window. Otherwise, the updates will occur within the next few weeks. The new maintenance version is [SQL Server version].R20240216.01_RC00.
To learn how to check your maintenance version, see Self-service maintenance . To find your maintenance window or to manage maintenance updates, see Find and set maintenance windows .
March 13, 2024
Cloud SQL for SQL Server
Feature
Cloud SQL now supports SQL Server Reporting Services (SSRS) on your instances. For more information, see Use SSRS for creating reports .
March 05, 2024
Cloud SQL for MySQL
Feature
You can now upgrade network architecture for your HA-enabled instances in a region, even if you have multiple instances in your network and region. For more information, see Upgrade an instance to the new network architecture .
Cloud SQL for PostgreSQL
Feature
You can now upgrade network architecture for your HA-enabled instances in a region, even if you have multiple instances in your network and region. For more information, see Upgrade an instance to the new network architecture .
Cloud SQL for SQL Server
Feature
You can now upgrade your Cloud SQL instances to use the new network architecture to get additional capabilities not available in the old network architecture. For more information, see Upgrade an instance to the new network architecture .
March 04, 2024
Cloud SQL for PostgreSQL
Announcement
The new maintenance version listed in the February 7th entry for PostgreSQL extensions, flags, minor versions, extension versions, and plugin versions is [PostgreSQL version].R20240130.00_05 .
February 20, 2024
Cloud SQL for PostgreSQL
Feature
Cloud SQL Enterprise Plus edition now supports versions 12 and 13 of PostgreSQL. For more information, see Introduction to Cloud SQL editions .
February 13, 2024
Cloud SQL for MySQL
Announcement
A new maintenance version rollout is currently underway for all supported MySQL versions.
If you have configured a maintenance window for your instance, then the updates will occur according to the timeframe that you set in the window. Otherwise, the updates will occur within the next few weeks. The new maintenance version is [MySQL version].R20240207.00_00.
To learn how to check your maintenance version, see Self-service maintenance . To find your maintenance window or to manage maintenance updates, see Find and set maintenance windows .
Change
In the new maintenance version [MySQL version].R20240207.00_00, the default value of the performance_schema flag for all MySQL 8.0 instances with more than 15 GB of RAM will be set to on . Previously, the default of on for MySQL 8.0 only applied to 8.0.26 and later. This change applies to new and existing MySQL 8.0 instances.
For more information about this flag, see supported flags .
February 09, 2024
Cloud SQL for MySQL
Feature
Cloud SQL now automatically updates your read replicas when you perform self-service maintenance on the primary instance. For more information, see Self-service maintenance .
Cloud SQL for PostgreSQL
Feature
Cloud SQL now automatically updates your read replicas when you perform self-service maintenance on the primary instance. For more information, see Self-service maintenance .
Cloud SQL for SQL Server
Feature
Cloud SQL now automatically updates your read replicas when you perform self-service maintenance on the primary instance. For more information, see Self-service maintenance .
February 08, 2024
Cloud SQL for MySQL
Feature
Cloud SQL now supports near-zero downtime planned maintenance on HA-enabled Cloud SQL Enterprise Plus instances with all combinations of public IP connectivity.
Cloud SQL for PostgreSQL
Feature
Cloud SQL now supports near-zero downtime planned maintenance on HA-enabled Cloud SQL Enterprise Plus instances with all combinations of public IP connectivity.
February 07, 2024
Cloud SQL for PostgreSQL
Feature
The rollout of the following extensions and flags is underway :
Extensions
autoinc (version 1.0): provides functions for incrementing fields automatically. This trigger stores the next value of a sequence into an integer field.
bloom (version 1.0): provides a method to access indexes based on bloom filters. These filters are space-efficient data structures that you can use to test whether an element is a member of a set.
insert_username (version 1.0): provides functions for storing the current user's name into a text field. You can use this to track who last modified a row in a database table.
moddatetime (version 1.0): provides functions for storing the current time into a timestamp field. You can use this to track the last time that a row in a database table is modified.
pg_background (version 1.2): lets you run arbitrary commands in a background worker.
pg_squeeze (version 1.5): removes unused space from a table and lets you use an index to sort records or rows (tuples) of the table.
tcn (version 1.0): provides a trigger function that notifies listeners of changes to the content of database tables.
Flags
cloudsql.enable_pg_squeeze : enables the pg_squeeze extension for Cloud SQL for PostgreSQL
squeeze.max_xlock_time : sets the time (in milliseconds) that the extension uses to finalize the processing for modifying a table
squeeze.worker_autostart : starts a background worker automatically
squeeze.worker_role : specifies the role for the background worker
The rollout of the following minor versions, extension versions, and plugin versions is underway :
Minor versions
11.21 is upgraded to 11.22.
12.16 is upgraded to 12.17.
13.12 is upgraded to 13.13.
14.9 is upgraded to 14.10.
15.4 is upgraded to 15.5.
Extension and plugin versions
ipr4 is upgraded from 2.4.1 to 2.4.2.
orafce is upgraded, as follows:
from 3.25.1 to 4.6.1 (for PostgreSQL versions 9.6 and 10)
from 4.6.1 to 4.7.0 (for PostgreSQL versions 11 and later)
pg_cron is upgraded from 1.5.2 to 1.6.0.
pgfincore is upgraded from 1.2.3 to 1.3.1.
pg_partman is upgraded from 4.7.3 to 4.7.4.
pg_repack is upgraded from 1.4.8 to 1.5.0.
pgTAP is upgraded from 1.2.0 to 1.3.0.
pgtt is upgraded from 2.9.0 to 3.0.
pg_wait_sampling is upgraded from 1.1.4 to 1.1.5.
PL/Proxy is upgraded from 2.10.0 to 2.11.0.
plv8 is upgraded from 3.1.4 to 3.2.0.
postgresql_hll is upgraded from 2.17 to 2.18.
If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window. Otherwise, the updates occur within the next few weeks.
The new maintenance version is [PostgreSQL version].R20240130.00_00 . To learn how to check your maintenance version, see Self service maintenance . To find your maintenance window or to manage maintenance updates, see Find and set maintenance windows .
February 06, 2024
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports minor version 8.0.36. To upgrade your existing instance to the new version, see Upgrade the database minor version .
February 01, 2024
Cloud SQL for MySQL
Feature
Private Service Connect now includes support for cross-region read replicas. You can also choose an availability type (REGIONAL or ZONAL) for Private Service Connect-enabled instances. Both features are in Preview .
For more information, see Connect to an instance using Private Service Connect .
Cloud SQL for PostgreSQL
Feature
Private Service Connect now includes support for cross-region read replicas. You can also choose an availability type (REGIONAL or ZONAL) for Private Service Connect-enabled instances. Both features are in Preview .
For more information, see Connect to an instance using Private Service Connect .
Cloud SQL for SQL Server
Feature
You can now use Private Service Connect to connect to a Cloud SQL for SQL Server instance. This solution allows you to connect to the instance from multiple VPC networks that belong to different groups, teams, projects, or organizations.
You can also choose an availability type (REGIONAL or ZONAL) for Private Service Connect-enabled instances.
All features are in Preview . For more information, see Connect to an instance using Private Service Connect .
January 31, 2024
Cloud SQL for MySQL
Feature
Support for africa-south1 (Johannesburg) region.
Cloud SQL for PostgreSQL
Feature
Support for africa-south1 (Johannesburg) region.
Cloud SQL for SQL Server
Feature
Support for africa-south1 (Johannesburg) region.
January 30, 2024
Cloud SQL for MySQL
Feature
You can now use the MySQL Shell dumpInstance and loadDump utilities to export and import data for multiple files in parallel. For more information, see Export and import files in parallel .
Cloud SQL for PostgreSQL
Feature
You can now use the pg_dump and pg_restore utilities to export and import data for multiple files in parallel. For more information, see Export and import files in parallel .
January 25, 2024
Cloud SQL for MySQL
Feature
Cloud SQL Enterprise Plus edition now supports the following regions:
asia-northeast2 (Osaka)
asia-south2 (Delhi)
europe-north1 (Finland)
europe-southwest1 (Madrid)
us-east5 (Columbus)
us-south1 (Dallas)
Cloud SQL for PostgreSQL
Feature
Cloud SQL Enterprise Plus edition now supports the following regions:
asia-northeast2 (Osaka)
asia-south2 (Delhi)
europe-north1 (Finland)
europe-southwest1 (Madrid)
us-east5 (Columbus)
us-south1 (Dallas)
January 12, 2024
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports setting microsecond time periods for the following flag on MySQL 5.7 and MySQL 8.0:
innodb_flush_log_at_timeout
For more information about this flag, see
supported flags .
Note : The data type for the innodb_flush_log_at_timeout flag has changed from an unsigned integer to a double.
December 19, 2023
Cloud SQL for MySQL
Feature
You can now specify the SSL mode of your Cloud SQL for MySQL instances. To use SSL mode, you must use maintenance version [MySQL version].R20230909.02_00 or later. For more information, see Enforce SSL/TLS encryption .
December 18, 2023
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports the following flags for MySQL 8.0:
innodb_buffer_pool_dump_now
innodb_buffer_pool_load_abort
innodb_buffer_pool_load_now
For more information about these flags, see supported flags .
Feature
Cloud SQL Enterprise Plus edition now supports the following regions:
europe-west8 (Milan)
europe-west12 (Turin)
us-west4 (Las Vegas)
Announcement
Cloud SQL for MySQL has completed the upgrade to MySQL 5.7.44.
Cloud SQL for PostgreSQL
Feature
Cloud SQL Enterprise Plus edition now supports the following regions:
europe-west8 (Milan)
europe-west12 (Turin)
us-west4 (Las Vegas)
December 14, 2023
Cloud SQL for MySQL
Feature
You can now use Database Migration Service to migrate data to an existing Cloud SQL instance that was created using Terraform or other Infrastructure-As-Code (IaC) Tools.
Cloud SQL for PostgreSQL
Feature
You can now use Database Migration Service to migrate data to an existing Cloud SQL instance that was created using Terraform or other Infrastructure-As-Code (IaC) Tools.
December 13, 2023
Cloud SQL for MySQL
Feature
You can now use the cloudsql_ignore_innodb_encryption flag to ignore InnoDB table encryption when you migrate instances to Cloud SQL. The flag is supported in MySQL 8.0 for Cloud SQL. For more information, see Supported flags .
Cloud SQL for PostgreSQL
Feature
The following flags are generally available:
autovacuum_vacuum_insert_scale_factor : specify a fraction of the size of a database table to add to the autovacuum_vacuum_insert_threshold flag. Use this flag when you're deciding whether to run a VACUUM .
autovacuum_vacuum_insert_threshold : specify the minimum number of inserted records or rows (tuples) that you need to run a VACUUM in any database table.
effective_io_concurrency : set the number of concurrent disk I/O operations that can run simultaneously.
hash_mem_multiplier : compute the maximum amount of memory that hash-based operations can use.
logical_decoding_work_mem : specify the maximum amount of memory that logical decoding can use before some of the decoded changes are written to a local disk.
maintenance_io_concurrency : set the number of concurrent disk I/O operations that can run simultaneously for maintenance work that's done for client sessions.
vacuum_failsafe_age : specify the maximum age (in transactions) that a database table's pg_class.relfrozenxid field can attain before a VACUUM takes extraordinary measures to avoid a system-wide wraparound failure for transaction IDs.
vacuum_multixact_failsafe_age : specify the maximum age (in multiple transactions) that a database table's pg_class.relminmxid field can attain before a VACUUM takes extraordinary measures to avoid a system-wide wraparound failure for multiple transaction IDs.
December 11, 2023
Cloud SQL for PostgreSQL
Feature
The pgvector extension, version 0.5.1 is generally available. Use this extension to store and search for vector embeddings in PostgreSQL databases. For more information, see Configure PostgreSQL extensions .
December 08, 2023
Cloud SQL for MySQL
Feature
You can now upgrade your Cloud SQL instances to use the new network architecture to get additional capabilities not available in the old network architecture. For more information, see Upgrade an instance to the new network architecture .
Feature
You can now configure Cloud SQL for MySQL instances for IAM group authentication . IAM group authentication requires MySQL 8.0 and R20230909.02_00 or later. This feature is in Preview .
Cloud SQL for PostgreSQL
Feature
You can now upgrade your Cloud SQL instances to use the new network architecture to get additional capabilities not available in the old network architecture. For more information, see Upgrade an instance to the new network architecture .
December 06, 2023
Cloud SQL for MySQL
Feature
The rollout of the following MySQL versions is currently underway:
MySQL 5.7.43 is upgraded to MySQL 5.7.44. For more information, see MySQL 5.7 Release Notes.
If you use a maintenance window, then the updates to the minor versions happen according to the timeframe that you set in the window. Otherwise, the updates occur within the next few weeks. The new maintenance version is [MySQL version].R20231105.01_00. The details of the security fixes applied as part of this release are published in the MySQL maintenance changelog .
To learn how to check your maintenance version, see Self-service maintenance . To find your maintenance window or to manage maintenance updates, see Find and set maintenance windows .
November 17, 2023
Cloud SQL for MySQL
Feature
Cloud SQL now supports migrating data to an instance that already exists. You can create the instance by using Terraform or other Infrastructure-As-Code (IaC) Tools. After creating the instance, use the demote API to migrate data to it. This API demotes an existing standalone instance to be a Cloud SQL read replica for an external database server.
Feature
Cloud SQL for MySQL now supports minor version 8.0.35. To upgrade your existing instance to the new version, see Upgrade the database minor version .
Cloud SQL for PostgreSQL
Feature
Cloud SQL now supports migrating data to an instance that already exists. You can create the instance by using Terraform or other Infrastructure-As-Code (IaC) Tools. After creating the instance, use the demote API to migrate data to it. This API demotes an existing standalone instance to be a Cloud SQL read replica for an external database server.
November 15, 2023
Cloud SQL for SQL Server
Feature
Cloud SQL supports the bulk insert functionality of SQL Server for importing data.
This functionality is supported only on SQL Server 2022.
For more information, see Use bulk insert for importing data .
November 10, 2023
Cloud SQL for MySQL
Feature
You can now upgrade Enterprise edition instances to Enterprise Plus edition in place with minimal disruption. Similarly, you can also switch from Enterprise Plus edition to Enterprise edition in place. For more information, see Upgrade an instance by using in-place upgrade .
Cloud SQL for PostgreSQL
Feature
You can now upgrade Enterprise edition instances to Enterprise Plus edition in place with minimal disruption. Similarly, you can also switch from Enterprise Plus edition to Enterprise edition in place. For more information, see Upgrade an instance by using in-place upgrade .
November 09, 2023
Cloud SQL for PostgreSQL
Feature
Data cache is now available for Cloud SQL for PostgreSQL Enterprise Plus edition instances.
November 06, 2023
Cloud SQL for MySQL
Feature
Cloud SQL Enterprise Plus edition now supports asia-southeast2 (Jakarta).
Cloud SQL for PostgreSQL
Feature
Cloud SQL Enterprise Plus edition now supports asia-southeast2 (Jakarta).
October 30, 2023
Cloud SQL for PostgreSQL
Feature
The rollout of the following items is complete :
The oracle_fdw extension, version 1.2
The minor versions, extension versions, and plugin versions listed in the September 21 release note
October 27, 2023
Cloud SQL for PostgreSQL
Feature
You can now specify the SSL mode of your Cloud SQL instances, which gives you more accurate SSL encryption. To use SSL mode, you must use the maintenance version [PostgreSQL version].R20230530.01_00 or newer. For more information, see Enforce SSL/TLS encryption .
October 17, 2023
Cloud SQL for MySQL
Announcement
Cloud SQL for MySQL has completed the upgrade to MySQL 5.7.43.
Feature
Cloud SQL supports InnoDB page compression for MySQL 5.7 and MySQL 8.0 and later.
Cloud SQL for SQL Server
Feature
You can now import transaction log backups . This can help you reduce downtime when migrating to Cloud SQL using backups.
October 09, 2023
Cloud SQL for SQL Server
Deprecated
The cross db ownership chaining flag is deprecated for all SQL Server versions.
For cross-database access, use the Microsoft tutorial for signing stored procedures with a certificate .
October 02, 2023
Cloud SQL for MySQL
Change
For Cloud SQL Enterprise edition and Cloud SQL Enterprise Plus edition, you can restore backups across instances of different editions .
Cloud SQL for PostgreSQL
Change
For Cloud SQL Enterprise edition and Cloud SQL Enterprise Plus edition, you can restore backups across instances of different editions .
September 28, 2023
Cloud SQL for PostgreSQL
Feature
The following pg_wait_sampling and rdkit flags are generally available:
pg_wait_sampling flags
cloudsql.enable_pg_wait_sampling: enable the pg_wait_sampling extension for Cloud SQL for PostgreSQL instances.
pg_wait_sampling.history_size: set the size of the in-memory ring buffer for history sampling, in terms of the number of samples.
pg_wait_sampling.history_period: set the time interval for history sampling, in milliseconds.
pg_wait_sampling.profile_period: set the time interval for profile sampling for wait events, in milliseconds.
pg_wait_sampling.profile_pid: specify whether the wait profile that accumulates samples for each process and waits event is collected for each process or for all processes.
pg_wait_sampling.profile_queries: specify whether the wait profile is collected for each query or for all queries.
rdkit flags
rdkit.tanimoto_threshold: set the threshold value for the Tanimoto similarity operator.
rdkit.dice_threshold: set the threshold value for the Dice similarity operator.
rdkit.do_chiral_sss: specify whether stereochemistry is used in substructure matching.
rdkit.do_enhanced_stereo_sss: specify whether enhanced stereo is used in substructure matching.
rdkit.sss_fp_size: set the size of the fingerprint used for substructure screening, in bits.
rdkit.morgan_fp_size: set the size of morgan fingerprints, in bits.
rdkit.featmorgan_fp_size: set the size of featmorgan fingerprints, in bits.
rdkit.layered_fp_size: set the size of layered fingerprints, in bits.
rdkit.rdkit_fp_size: set the size of rdkit fingerprints, in bits.
rdkit.hashed_torsion_fp_size: set the size of topological torsion bit vector fingerprints, in bits.
rdkit.hashed_atompair_fp_size: set the size of atom pair bit vector fingerprints, in bits.
rdkit.reaction_sss_fp_size: set the size of the structural chemical reaction fingerprint, in bits.
rdkit.reaction_difference_fp_size: set the size of the difference chemical reaction fingerprint, in bits.
rdkit.reaction_sss_fp_type: specify the type of structural chemical reaction fingerprint.
rdkit.reaction_difference_fp_type: specify the type of difference chemical reaction fingerprint.
rdkit.ignore_reaction_agents: specify whether agents of a chemical reaction are taken into account.
rdkit.agent_FP_bit_ratio: specify the weight of the impact of agents contained in a chemical reaction fingerprint.
rdkit.move_unmmapped_reactants_to_agents: specify whether unmapped reactant agents of a chemical reaction are taken into account.
rdkit.threshold_unmapped_reactant_atoms: set the ratio of allowed unmapped reactant atoms.
rdkit.init_reaction: specify whether the reaction is ready for use.
rdkit.difference_FP_weight_agents: specify the weight factor for agents compared to reactants and products in reaction difference fingerprints.
rdkit.difference_FP_weight_nonagents: specify the weight factor for reactants and products compared to agents in reaction difference fingerprints.
rdkit.avalon_fp_size: set the size of avalon fingerprints, in bits.
September 26, 2023
Cloud SQL for MySQL
Feature
Cloud SQL supports the preview version of the enable-high-availability recommender. This service proactively generates recommendations that help you bring your important instances within SLA by providing data redundancy. This might be helpful during a zonal outage or when an instance runs out of memory. For more information, see Improve instance reliability by enabling high availability .
Cloud SQL for PostgreSQL
Feature
Cloud SQL supports the preview version of the enable-high-availability recommender. This service proactively generates recommendations that help you bring your important instances within SLA by providing data redundancy. This might be helpful during a zonal outage or when an instance runs out of memory. For more information, see Improve instance reliability by enabling high availability .
Cloud SQL for SQL Server
Feature
Cloud SQL supports the preview version of the enable-high-availability recommender. This service proactively generates recommendations that help you bring your important instances within SLA by providing data redundancy. This might be helpful during a zonal outage or when an instance runs out of memory. For more information, see Improve instance reliability by enabling high availability .
September 25, 2023
Cloud SQL for MySQL
Feature
All Cloud SQL for MySQL Enterprise Plus edition instances now support up to 35 days of retained transaction logs for point-in-time recovery .
Feature
The rollout of the following minor version is currently underway:
MySQL 5.7.42 is upgraded to MySQL 5.7.43. For more information, see MySQL 5.7 Release Notes .
If you use a maintenance window, then the updates to the minor versions happen according to the timeframe that you set in the window. Otherwise, the updates occur within the next few weeks.
The new maintenance version is [MySQL version].R20230909.02_00 . The details of the security fixes applied as part of this release will be published in the MySQL maintenance changelog .
To learn how to check your maintenance version, see Self-service maintenance . To find your maintenance window or to manage maintenance updates, see Find and set maintenance windows .
September 21, 2023
Cloud SQL for PostgreSQL
Feature
The rollout of the oracle_fdw extension, version 1.2 is underway . This extension provides a foreign data wrapper for accessing Oracle databases easily and efficiently. For more information, see Configure PostgreSQL extensions .
The rollout of the following minor versions, extension versions, and plugin versions is underway :
Minor versions
11.19 is upgraded to 11.21.
12.14 is upgraded to 12.16.
13.10 is upgraded to 13.12.
14.7 is upgraded to 14.9.
15.2 is upgraded to 15.4.
Extension and plugin versions
orafce is upgraded from 3.24.4 to 3.25.1.
pglogical is upgraded from 2.4.2 to 2.4.3.
pgvector is upgraded from 0.4.2 to 0.5.0.
PostGIS is upgraded from 3.2.3 to 3.2.5.
If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window. Otherwise, the updates occur within the next few weeks.
The new maintenance version is [PostgreSQL version].R20230830.01_00 . To learn how to check your maintenance version, see Self service maintenance. To find your maintenance window or to manage maintenance updates, see Find and set maintenance windows .
September 19, 2023
Cloud SQL for MySQL
Feature
Support for me-central2 (Dammam) region.
Cloud SQL for PostgreSQL
Feature
Support for me-central2 (Dammam) region.
Cloud SQL for SQL Server
Feature
Support for me-central2 (Dammam) region.
August 31, 2023
Cloud SQL for PostgreSQL
Feature
The pgvector extension, version 0.4.2 is generally available. Use this extension to store and search for vector embeddings in PostgreSQL databases.
August 28, 2023
Cloud SQL for PostgreSQL
Feature
You can now set password policies for local database users of Cloud SQL for PostgreSQL instances.
August 22, 2023
Cloud SQL for MySQL
Feature
Support for europe-west10 (Berlin) region.
Cloud SQL for PostgreSQL
Feature
Support for europe-west10 (Berlin) region.
Cloud SQL for SQL Server
Feature
Support for europe-west10 (Berlin) region.
August 21, 2023
Cloud SQL for MySQL
Feature
Private Service Connect is now GA for Cloud SQL for MySQL. This solution allows you to connect to a Cloud SQL instance from multiple VPC networks that belong to different groups, teams, projects, or organizations.
Cloud SQL for PostgreSQL
Feature
Private Service Connect is now GA for Cloud SQL for PostgreSQL. This solution allows you to connect to a Cloud SQL instance from multiple VPC networks that belong to different groups, teams, projects, or organizations.
August 18, 2023
Cloud SQL for MySQL
Feature
Cloud SQL Enterprise Plus edition now supports four new regions:
europe-central2 (Warsaw)
europe-west9 (Paris)
southamerica-east1 (San Paulo)
us-west1 (Oregon)
Feature
Cloud SQL for MySQL now supports minor version 8.0.34. To upgrade your existing instance to the new version, see Upgrade the database minor version .
Cloud SQL for PostgreSQL
Feature
Cloud SQL Enterprise Plus edition now supports four new regions:
europe-central2 (Warsaw)
europe-west9 (Paris)
southamerica-east1 (San Paulo)
us-west1 (Oregon)
August 17, 2023
Cloud SQL for MySQL
Feature
You can now re-encrypt an existing Cloud SQL CMEK-enabled primary instance or replica with a new primary key version.
Feature
You can now retain up to 35 days of retention logs for your Cloud SQL for MySQL Enterprise Plus edition instances when using point-in-time recovery.
Feature
Cloud SQL for MySQL now supports storage of point-in-time recovery logs in Cloud storage .
Cloud SQL for PostgreSQL
Feature
You can now re-encrypt an existing Cloud SQL CMEK-enabled primary instance or replica with a new primary key version.
Cloud SQL for SQL Server
Feature
You can now re-encrypt an existing Cloud SQL CMEK-enabled primary instance or replica with a new primary key version.
August 11, 2023
Cloud SQL for MySQL
Feature
Cloud SQL Enterprise Plus edition now supports the asia-northeast3 (Seoul) region.
Cloud SQL for PostgreSQL
Feature
Cloud SQL Enterprise Plus edition now supports the asia-northeast3 (Seoul) region.
August 10, 2023
Cloud SQL for PostgreSQL
Feature
You can now use point-in-time recovery to recover a Cloud SQL instance that isn't available . If the instance is unavailable, then you can use the API to get the latest recovery time and perform the recovery of the instance to that time.
August 09, 2023
Cloud SQL for MySQL
Feature
You can now upgrade a Cloud SQL for MySQL instance to Cloud SQL Enterprise Plus edition by using IP allowlists and VPC Peering .
Cloud SQL for PostgreSQL
Feature
You can now upgrade a Cloud SQL for PostgreSQL instance to Cloud SQL Enterprise Plus edition by using IP allowlists and VPC Peering .
August 03, 2023
Cloud SQL for MySQL
Feature
Cloud SQL now supports multiple categories of API rate quotas. Rate quotas for each category are imposed per minute, per project, per region, and per user. For more information about rate quotas for each category, see Quotas and limits .
Feature
The Cloud SQL Node.js Language Connector is now available for public preview.
Cloud SQL for PostgreSQL
Feature
Cloud SQL now supports multiple categories of API rate quotas. Rate quotas for each category are imposed per minute, per project, per region, and per user. For more information about rate quotas for each category, see Quotas and limits .
Feature
The Cloud SQL Node.js Language Connector is now available for public preview.
Cloud SQL for SQL Server
Feature
Cloud SQL now supports multiple categories of API rate quotas. Rate quotas for each category are imposed per minute, per project, per region, and per user. For more information about rate quotas for each category, see Quotas and limits .
Feature
The Cloud SQL Node.js Language Connector is now available for public preview.
August 01, 2023
Cloud SQL for MySQL
Feature
You can now migrate large MySQL databases from external sources to Cloud SQL for MySQL faster using Database Migration Service .
July 18, 2023
Cloud SQL for MySQL
Feature
Cloud SQL now supports default maintenance windows for your instances. With this release, an instance without a user-specified maintenance window is maintained outside of the typical business hours for the time zone that the instance is deployed in.
Cloud SQL for PostgreSQL
Feature
Cloud SQL now supports default maintenance windows for your instances. With this release, an instance without a user-specified maintenance window is maintained outside of the typical business hours for the time zone that the instance is deployed in.
Cloud SQL for SQL Server
Feature
Cloud SQL now supports default maintenance windows for your instances. With this release, an instance without a user-specified maintenance window is maintained outside of the typical business hours for the time zone that the instance is deployed in.
July 17, 2023
Cloud SQL for PostgreSQL
Feature
You can now enable query insights for multiple instances at a time.
July 12, 2023
Cloud SQL for MySQL
Feature
Cloud SQL now offers two editions of Cloud SQL to support your various business and application needs: Cloud SQL Enterprise Plus edition and Cloud SQL Enterprise edition . Each edition provides different performance and availability characteristics to meet the needs of your applications.
Cloud SQL Editions are only available for Cloud SQL for MySQL and Cloud SQL for PostgreSQL.
For more information about Cloud SQL editions, see Introduction to Cloud SQL editions .
Cloud SQL for PostgreSQL
Feature
Cloud SQL now offers two editions of Cloud SQL to support your various business and application needs: Cloud SQL Enterprise Plus edition and Cloud SQL Enterprise edition . Each edition provides different performance and availability characteristics to meet the needs of your applications.
Cloud SQL Editions are only available for Cloud SQL for MySQL and Cloud SQL for PostgreSQL.
For more information about Cloud SQL editions, see Introduction to Cloud SQL editions .
July 11, 2023
Cloud SQL for MySQL
Feature
Cloud SQL now supports cancelling the import and export of data into Cloud SQL for MySQL instances.
Feature
MySQL 5.7.40 has been upgraded to 5.7.42. For more information, see MySQL 5.7 release notes .
Cloud SQL for PostgreSQL
Feature
Cloud SQL now supports cancelling the import and export of data into Cloud SQL for PostgreSQL instances.
July 07, 2023
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports up to 500,000 tables for instances that meet the minimum hardware requirements of 32+ cores and 200G+ memory. For more information, see table limit .
July 06, 2023
Cloud SQL for MySQL
Feature
Cloud SQL now supports non-RFC 1918 IP address ranges , including privately used public IP addresses. This enables you to create instances and replicas in a non-RFC 1918 IP address range. Additionally, you can connect to an instance from an application that is running in a non-RFC 1918 IP address range.
Cloud SQL for PostgreSQL
Feature
Cloud SQL now supports non-RFC 1918 IP address ranges , including privately used public IP addresses. This enables you to create instances and replicas in a non-RFC 1918 IP address range. Additionally, you can connect to an instance from an application that is running in a non-RFC 1918 IP address range.
Cloud SQL for SQL Server
Feature
Cloud SQL now supports non-RFC 1918 IP address ranges , including privately used public IP addresses. This enables you to create instances and replicas in a non-RFC 1918 IP address range. Additionally, you can connect to an instance from an application that is running in a non-RFC 1918 IP address range.
June 30, 2023
Cloud SQL for MySQL
Feature
For our preferred partners and allowlisted customers, Private Service Connect is now available. This solution allows you to connect to a Cloud SQL instance from multiple VPC networks that belong to different groups, teams, projects, or organizations. To use Private Service Connect, contact your Technical Account Manager.
Cloud SQL for PostgreSQL
Feature
For our preferred partners and allowlisted customers, Private Service Connect is now available. This solution allows you to connect to a Cloud SQL instance from multiple VPC networks that belong to different groups, teams, projects, or organizations. To use Private Service Connect, contact your Technical Account Manager.
June 26, 2023
Cloud SQL for SQL Server
Feature
Cloud SQL now supports SQL Server 2022. The default version continues to be SQL Server 2019 Standard. For more information, see Database versions and version policies .
June 15, 2023
Cloud SQL for MySQL
Feature
The Cloud SQL System insights dashboard helps you detect and analyze system performance problems.
Cloud SQL for PostgreSQL
Feature
The Cloud SQL System insights dashboard is now generally available and includes more metrics . You can also use the Customize dashboard option to personalize the dashboard and choose the metrics you want to see on it.
June 07, 2023
Cloud SQL for SQL Server
Feature
You can now import and export differential database backups . This can help you import and export data more frequently, reducing migration downtime.
June 02, 2023
Cloud SQL for PostgreSQL
Feature
The rollout of the following minor versions, extension versions, and plugin versions is currently underway:
Minor versions
10.22 is upgraded to 10.23.
11.17 is upgraded to 11.19.
12.12 is upgraded to 12.14.
13.8 is upgraded to 13.10.
14.5 is upgraded to 14.7.
Extension and plugin versions
pg_cron is upgraded from 1.4.1 to 1.5.
pg_partman is upgraded from 4.7.0 to 4.7.3.
postgresql-hll is upgraded from 2.16 to 2.17.
pg_repack is upgraded from 1.4.7 to 1.4.8.
wal2json is upgraded from 2.4 to 2.5.
pg_hint_plan is upgraded, as follows:
from 1.3.7 to 1.3.8 (for PostgreSQL versions 11-13)
from 1.4.0 to 1.4.1 (for PostgreSQL version 14)
from 1.4.0 to 1.5.0 (for PostgreSQL version 15)
If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window. Otherwise, the updates occur within the next few weeks.
The new maintenance version is [PostgreSQL version].R20230530.01_00 . To learn how to check your maintenance version, see Self service maintenance. To find your maintenance window or to manage maintenance updates, see Find and set maintenance windows .
Cloud SQL for SQL Server
Security
A vulnerability was recently discovered in Cloud SQL for SQL Server that allowed customer administrator accounts to create triggers in the tempdb database and use those to gain sysadmin privileges in the instance. The sysadmin privileges would give the attacker access to system databases and partial access to the machine running that SQL Server instance.
Google Cloud resolved the issue by patching the security vulnerability by March 1, 2023. Google Cloud didn't find any compromised customer instances.
For instructions and more details, see the Cloud SQL security bulletin .
May 24, 2023
Cloud SQL for PostgreSQL
Feature
PostgreSQL version 15 is now generally available. To start using PostgreSQL 15, see Create instances .
May 22, 2023
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports minor version 8.0.33. To upgrade your existing instance to the new version, see Upgrade the database minor version .
May 19, 2023
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL has launched two database flags that impact the Cloud SQL SLA : innodb_flush_log_at_trx_commit and sync_binlog . For more information about these flags, see supported flags .
Cloud SQL for PostgreSQL
Feature
The following extensions , views , utilities , and flags are generally available:
Extensions
postgresql_anonymizer: mask or replace personally identifiable information (PII) or sensitive data from a PostgreSQL database.
pgtt: create, manage and use Oracle-style global temporary tables.
rdkit: compare, manipulate, and identify molecular structures.
Views and utilities
pg_authid: access this catalog table that contains hashed passwords and other properties for all database roles.
pg_dumpall: extract all PostgreSQL databases of a cluster into a single script file.
Flags
log_line_prefix: generate a printf-style string at the beginning of each line of a PostgreSQL log file.
The rollout of the following minor versions, extension versions, and plugin versions is currently underway:
Minor versions
10.21 is upgraded to 10.22.
11.16 is upgraded to 11.17.
12.11 is upgraded to 12.12.
13.7 is upgraded to 13.8.
14.4 is upgraded to 14.5.
Extension and plugin versions
plv8 is upgraded from 3.1.2 to 3.1.4.
wal2json is upgraded from 2.3 to 2.4.
pgTAP is upgraded from 1.1.0 to 1.2.0.
PostGIS is upgraded from 3.1.4 to 3.1.7.
pg_partman is upgraded from 4.5.1 to 4.7.0.
pg_wait_sampling is upgraded from 1.1.3 to 1.1.4.
pg_hint_plan is upgraded from 1.3.7 to 1.4.
pglogical is upgraded from 2.4.1 to 2.4.2.
This rollout also introduces the following:
PostGIS GDAL driver support
LZ4 TOAST compression for PostgreSQL versions 14 and later
May 16, 2023
Cloud SQL for MySQL
Feature
The Cloud SQL Proxy Operator is now generally available. To learn more about the Cloud SQL Proxy Operator, see About the Cloud SQL Proxy Operator .
Cloud SQL for PostgreSQL
Feature
The Cloud SQL Proxy Operator is now generally available. To learn more about the Cloud SQL Proxy Operator, see About the Cloud SQL Proxy Operator .
Cloud SQL for SQL Server
Feature
The Cloud SQL Proxy Operator is now generally available. To learn more about the Cloud SQL Proxy Operator, see About the Cloud SQL Proxy Operator .
May 15, 2023
Cloud SQL for SQL Server
Feature
You can now use the point-in-time-recovery (PITR) feature and read replicas on the same primary instance. For more information, see Point-in-time Recovery .
May 02, 2023
Cloud SQL for PostgreSQL
Feature
Fast migration for Cloud SQL is now available. This feature improves the performance of data migrations from an external source to a destination Cloud SQL instance.
Cloud SQL for SQL Server
Feature
You can now disable simultaneous multithreading (SMT) while creating or editing instances and read replicas. This might reduce your SQL Server licensing fees. To understand the impact of disabling SMT on your instance's performance, we recommend that you perform load testing on your instance.
April 19, 2023
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports 40+ new database flags. See supported flags for more information.
April 15, 2023
Cloud SQL for PostgreSQL
Announcement
The changes listed in the March 29th release notes entry for PostgreSQL minor versions, extension versions, and plugin versions have been postponed.
April 06, 2023
Cloud SQL for MySQL
Feature
Cascading Replicas is now generally available when migrating from external servers. You can now configure migrated replicas to have read replicas under them before promoting them to primary replica. To learn more, see External Server Cascading Replicas .
Cloud SQL for PostgreSQL
Feature
Cascading Replicas is now generally available when migrating from external servers. You can now configure migrated replicas to have read replicas under them before promoting them to primary replica. To learn more, see External Server Cascading Replicas .
March 30, 2023
Cloud SQL for MySQL
Feature
Support for me-central1 (Doha) region.
Cloud SQL for PostgreSQL
Feature
Support for me-central1 (Doha) region.
Cloud SQL for SQL Server
Feature
Support for me-central1 (Doha) region.
Feature
Cloud SQL supports the bcp utility of SQL Server for importing and exporting data .
Feature
Cloud SQL supports the SqlPackage utility of SQL Server for importing and exporting data .
March 29, 2023
Cloud SQL for PostgreSQL
Feature
The rollout of the following PostgreSQL minor versions, extension versions, and plugin versions is currently underway:
Minor versions
10.21 is upgraded to 10.22.
11.16 is upgraded to 11.17.
12.11 is upgraded to 12.12.
13.7 is upgraded to 13.8.
14.4 is upgraded to 14.5.
Extension and plugin versions
plv8 is upgraded from 3.1.2 to 3.1.4.
wal2json is upgraded from 2.3 to 2.4.
pgTAP is upgraded from 1.1.0 to 1.2.0.
PostGIS is upgraded from 3.1.4 to 3.1.7.
pg_partman is upgraded from 4.5.1 to 4.7.0.
pg_wait_sampling is upgraded from 1.1.3 to 1.1.4.
pg_hint_plan is upgraded from 1.3.7 to 1.4.
pglogical is upgraded from 2.4.1 to 2.4.2.
If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window. Otherwise, the updates occur within the next few weeks.
The new maintenance version is [PostgreSQL version].R20230316.02_02 . To learn how to check your maintenance version, see Self service maintenance. To find your maintenance window or to manage maintenance updates, see Find and set maintenance windows .
March 28, 2023
Cloud SQL for MySQL
Feature
The changes in the September 15, 2022 Release Notes entry for read replica maintenance are now available. Cloud SQL read replicas follow the maintenance settings for the primary instance, including the maintenance window, rescheduling, and the deny maintenance period. During the maintenance event, Cloud SQL maintains the replicas before maintaining the primary instance. For more information, see How does maintenance affect read replicas?
Cloud SQL for PostgreSQL
Feature
The changes in the September 15, 2022 Release Notes entry for read replica maintenance are now available. Cloud SQL read replicas follow the maintenance settings for the primary instance, including the maintenance window, rescheduling, and the deny maintenance period. During the maintenance event, Cloud SQL maintains the replicas before maintaining the primary instance. For more information, see How does maintenance affect read replicas?
Cloud SQL for SQL Server
Feature
The changes in the September 15, 2022 Release Notes entry for read replica maintenance are now available. Cloud SQL read replicas follow the maintenance settings for the primary instance, including the maintenance window, rescheduling, and the deny maintenance period. During the maintenance event, Cloud SQL maintains the replicas before maintaining the primary instance. For more information, see How does maintenance affect read replicas?
Feature
Cloud SQL now exposes 38 new metrics. These metrics improve observability of Cloud SQL for SQL Server instances, helping you investigate performance issues and resource bottlenecks. You can find these metrics in the Metrics explorer within the Monitoring dashboard.
For more information about these metrics, see Cloud SQL Metrics .
March 27, 2023
Cloud SQL for SQL Server
Feature
Cloud SQL now supports the Linked Servers functionality of SQL Server. You can use this capability to integrate data from multiple sources and distribute queries across multiple servers.
To learn more, see About linked servers .
Feature
The Cloud SQL Active Directory (AD) Diagnosis tool helps you troubleshoot issues that you might face while connecting to AD-enabled Cloud SQL for SQL Server instances, using an on-premises AD domain.
March 23, 2023
Cloud SQL for MySQL
Feature
Support for europe-west12 (Turin) region.
Feature
Cloud SQL for MySQL now supports minor version 8.0.32. To upgrade your existing instance to the new version, see Upgrade the database minor version .
Cloud SQL for PostgreSQL
Feature
Support for europe-west12 (Turin) region.
Cloud SQL for SQL Server
Feature
Support for europe-west12 (Turin) region.
March 21, 2023
Cloud SQL for MySQL
Change
The changes listed in the June 10 Release Notes entry for faster machine type changes were incorrect for Cloud SQL for MySQL, and only applied to Cloud SQL for PostgreSQL and Cloud SQL for SQL Server.
Cloud SQL for PostgreSQL
Feature
Smaller read replicas are now available for Cloud SQL. Read replicas no longer require the same or more CPUs and RAM than their primary instances.
March 14, 2023
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports 106 new database flags. See supported flags for more information.
February 28, 2023
Cloud SQL for MySQL
Feature
Cloud SQL now supports the ability to get details for a Cloud SQL user for a database instance using the API or gcloud. To learn more about the new method, see Cloud SQL Admin API REST Resource .
Cloud SQL for PostgreSQL
Feature
Cloud SQL now supports the ability to get details for a Cloud SQL user for a database instance using the API or gcloud. To learn more about the new method, see Cloud SQL Admin API REST Resource .
Cloud SQL for SQL Server
Feature
Cloud SQL now supports the ability to get details for a Cloud SQL user for a database instance using the API or gcloud. To learn more about the new method, see Cloud SQL Admin API REST Resource .
February 24, 2023
Cloud SQL for MySQL
Feature
The Cloud SQL Proxy Operator is now available in public preview. The Cloud SQL Proxy Operator is an open-source Kubernetes operator that automates connecting workloads in a GKE cluster to Cloud SQL databases. To learn more about the Cloud SQL Proxy Operator, see About the Cloud SQL Proxy Operator .
Cloud SQL for PostgreSQL
Feature
The Cloud SQL Proxy Operator is now available in public preview. The Cloud SQL Proxy Operator is an open-source Kubernetes operator that automates connecting workloads in a GKE cluster to Cloud SQL databases. To learn more about the Cloud SQL Proxy Operator, see About the Cloud SQL Proxy Operator .
Cloud SQL for SQL Server
Feature
The Cloud SQL Proxy Operator is now available in public preview. The Cloud SQL Proxy Operator is an open-source Kubernetes operator that automates connecting workloads in a GKE cluster to Cloud SQL databases. To learn more about the Cloud SQL Proxy Operator, see About the Cloud SQL Proxy Operator .
February 08, 2023
Cloud SQL for MySQL
Feature
The Cloud SQL Auth proxy is a utility for ensuring secure connections to your Cloud SQL instances. The v2 release offers improvements in performance, stability, and telemetry. Among the new features, there's support for:
Metrics and tracing with Cloud Monitoring and Cloud Trace
Support for Prometheus
Service account impersonation
Separate Dialer functionality released as the Cloud SQL Go Connector
Configuration with environment variables
Fully POSIX-compliant flags
We recommend all customers upgrade to v2 and have released a migration guide . For more information, see Cloud SQL Auth proxy .
Cloud SQL for PostgreSQL
Feature
The Cloud SQL Auth proxy is a utility for ensuring secure connections to your Cloud SQL instances. The v2 release offers improvements in performance, stability, and telemetry. Among the new features, there's support for:
Metrics and tracing with Cloud Monitoring and Cloud Trace
Support for Prometheus
Service account impersonation
Separate Dialer functionality released as the Cloud SQL Go Connector
Configuration with environment variables
Fully POSIX-compliant flags
We recommend all customers upgrade to v2 and have released a migration guide . For more information, see Cloud SQL Auth proxy .
Cloud SQL for SQL Server
Feature
The Cloud SQL Auth proxy is a utility for ensuring secure connections to your Cloud SQL instances. The v2 release offers improvements in performance, stability, and telemetry. Among the new features, there's support for:
Metrics and tracing with Cloud Monitoring and Cloud Trace
Support for Prometheus
Service account impersonation
Separate Dialer functionality released as the Cloud SQL Go Connector
Configuration with environment variables
Fully POSIX-compliant flags
We recommend all customers upgrade to v2 and have released a migration guide . For more information, see Cloud SQL Auth proxy .
February 02, 2023
Cloud SQL for MySQL
Feature
Cloud SQL supports the preview version of the Underprovisioned instance recommender . This service helps you avoid bottlenecks from high CPU and memory usage and minimize the likelihood of out-of-memory events. It gives you recommendations to resize your instances to a machine tier that better suits your workload.
Cloud SQL for PostgreSQL
Feature
Cloud SQL supports the preview version of the Underprovisioned instance recommender . This service helps you avoid bottlenecks from high CPU and memory usage and minimize the likelihood of out-of-memory events. It gives you recommendations to resize your instances to a machine tier that better suits your workload.
Cloud SQL for SQL Server
Feature
Cloud SQL supports the preview version of the Underprovisioned instance recommender . This service helps you avoid bottlenecks from high CPU and memory usage and minimize the likelihood of out-of-memory events. It gives you recommendations to resize your instances to a machine tier that better suits your workload.
January 19, 2023
Cloud SQL for MySQL
Deprecated
MySQL 8.0.29 was deprecated on January 19, 2023. You will not be able to create new instances for MySQL 8.0.29, upgrade existing instances to MySQL 8.0.29, or promote an existing MySQL 8.0.29 replica to primary. For more information, see Changes in MySQL 8.0.29 .
If you have a MySQL 8.0.29 instance, it will automatically be upgraded to MySQL 8.0.30 as part of regular maintenance prior to March 31, 2023. You can also upgrade your instance to higher available versions. See Upgrade the database minor version for more information.
January 18, 2023
Cloud SQL for MySQL
Feature
Cloud SQL now supports viewing an audit log for an automated backup of an instance to verify whether the backup is completed successfully. You can also configure a log-based alert so that a user can be notified of the backup's status.
Cloud SQL for PostgreSQL
Feature
Cloud SQL now supports viewing an audit log for an automated backup of an instance to verify whether the backup is completed successfully. You can also configure a log-based alert so that a user can be notified of the backup's status.
Cloud SQL for SQL Server
Feature
Cloud SQL for SQL Server enables you to use point-in-time recovery .
Point-in-time recovery helps you recover an instance to a specific point in time. For example, if an error causes a loss of data, you can recover a database to its state before the error occurred. This feature is generally available .
Feature
Cloud SQL now supports viewing an audit log for an automated backup of an instance to verify whether the backup is completed successfully. You can also configure a log-based alert so that a user can be notified of the backup's status.
January 17, 2023
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports using the lower_case_table_names flag for MySQL 8.0. For more information, see Configure database flags .
January 10, 2023
Cloud SQL for SQL Server
Feature
You can use
striped import and
striped export
to reduce the time needed for BAK file operations and for other purposes. This feature is generally available.
January 09, 2023
Cloud SQL for PostgreSQL
Feature
For new Cloud SQL instances that have point-in-time recovery enabled or for existing instances that enable point-in-time recovery, Cloud SQL for PostgreSQL now stores write-ahead logs in Google Cloud Storage.
Before this release, write-ahead logs, which are used to perform point-in-time recovery, were stored on disk. Now, logs are stored in Google Cloud Storage in the same region as the instances.
All other existing instances that have point-in-time recovery enabled will continue to have their logs stored on disk. The change to storing logs in Google Cloud Storage will be made available at a later time.
December 27, 2022
Cloud SQL for MySQL
Change
The changes listed in the December 20 release notes entry for the lower_case_table_names flag for MySQL 8.0 have been postponed.
December 21, 2022
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports minor version 8.0.31. To upgrade your existing instance to the new version, see Upgrade the database minor version .
December 20, 2022
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports using the lower_case_table_names flag for MySQL 8.0. For more information, see Configure database flags .
December 16, 2022
Cloud SQL for MySQL
Feature
Automatic IAM database authentication for Cloud SQL for MySQL is now available. To get started using automatic IAM database authentication, see Cloud SQL IAM database authentication .
Feature
MySQL 5.7.38 has been upgraded to 5.7.39. For more information, see MySQL 5.7 release notes .
December 15, 2022
Cloud SQL for MySQL
Feature
You can now allow other Google Cloud services, such as BigQuery, to access data in Cloud SQL for MySQL and make queries against this data over a private connection. For more information, see Create instances .
Cloud SQL for PostgreSQL
Feature
You can now allow other Google Cloud services, such as BigQuery, to access data in Cloud SQL for PostgreSQL and make queries against this data over a private connection. For more information, see Create instances .
December 13, 2022
Cloud SQL for PostgreSQL
Feature
The Cloud SQL System insights dashboard now shows additional metrics and an events timeline. You can also use the Auto refresh function to keep the dashboard up to date.
December 01, 2022
Cloud SQL for PostgreSQL
Announcement
The changes listed in the October 19th release notes entry for PostgreSQL minor versions, extension versions, and plugin versions have been postponed.
October 28, 2022
Cloud SQL for MySQL
Change
The changes listed in the September 15 Release Notes entry for read replica maintenance have been postponed.
Cloud SQL for PostgreSQL
Change
The changes listed in the September 15 Release Notes entry for read replica maintenance have been postponed.
Cloud SQL for SQL Server
Change
The changes listed in the September 15 Release Notes entry for read replica maintenance have been postponed.
October 19, 2022
Cloud SQL for PostgreSQL
Feature
The rollout of the following PostgreSQL minor versions, extension versions, and plugin versions is currently underway:
Minor versions
10.21 is upgraded to 10.22.
11.16 is upgraded to 11.17.
12.11 is upgraded to 12.12.
13.7 is upgraded to 13.8.
14.4 is upgraded to 14.5.
Extension and plugin versions
plv8 is upgraded from 3.1.2 to 3.1.4.
wal2json is upgraded from 2.3 to 2.4.
pgTAP is upgraded from 1.1.0 to 1.2.0.
PostGIS is upgraded from 3.1.4 to 3.1.7.
In addition, this rollout introduces the following changes to collation support:
The C.UTF-8 collation is renamed to C.utf8 . The original name is supported as an alias of the new name.
The following collations aren't supported anymore:
as_IN.utf8
az_AZ.utf8
ca_ES.utf8@valencia
eo.utf8
ia
iw_IL
iw_IL.utf8
pap_AN
tt_RU.utf8
tt_RU.utf8@iqtelif
If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window. Otherwise, the updates occur within the next few weeks.
The new maintenance version is [PostgreSQL version].R20221017.01_00 . To learn how to check your maintenance version, see Self service maintenance. To find your maintenance window or to manage maintenance updates, see Find and set maintenance windows .
October 11, 2022
Cloud SQL for MySQL
Feature
Cloud SQL supports the preview version of the following recommenders that help you optimize your instance's performance:
High number of open tables recommender : Optimize the performance of your instance by increasing the size of table open cache for the Cloud SQL instances that have the number of open tables equal to the table open cache and keep opening too many tables concurrently
High number of tables recommender : Optimize the performance of your instance by reducing the number of tables for the Cloud SQL instances whose table count is too high and close to the SLA limit.
Cloud SQL for PostgreSQL
Feature
Cloud SQL supports the preview version of the high transaction ID utilization recommender that helps you avoid potential transaction ID wraparound for Cloud SQL for PostgreSQL instances.
October 07, 2022
Cloud SQL for SQL Server
Feature
When you create an instance , you can set a permanent time zone for the instance. This feature is generally available .
October 05, 2022
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL now supports the log_timezone and TimeZone flags. For more information, see the Configure database flags page.
October 04, 2022
Cloud SQL for MySQL
Feature
Terraform is supported when you use self-service maintenance .
Cloud SQL for PostgreSQL
Feature
Terraform is supported when you use self-service maintenance .
Cloud SQL for SQL Server
Feature
Terraform is supported when you use self-service maintenance .
September 30, 2022
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL supports in-place major version upgrades in GA. You can upgrade your instance's major version to a more recent version. For more information, see Upgrade the database major version in-place .
September 29, 2022
Cloud SQL for MySQL
Announcement
Cloud SQL for MySQL now supports high-availability for self-service migration. Before starting replication, check the outgoing IP addresses of the Cloud SQL instance and make sure that the appropriate IP addresses are allowlisted on the external source. For more information, see Start replication on the Cloud SQL instance .
Feature
Query insights is now generally available. Query insights helps you detect, diagnose, and prevent query performance problems for Cloud SQL databases. It provides self-service, intuitive monitoring, and diagnostic information that goes beyond detection to help you to identify the root cause of performance problems. To learn more, see Use Query insights to improve query performance .
September 21, 2022
Cloud SQL for MySQL
Feature
Cloud SQL allows the re-use of an instance name immediately after the instance is deleted. For more information, see the Cloud SQL for MySQL FAQ .
Cloud SQL for PostgreSQL
Feature
Cloud SQL allows the re-use of an instance name immediately after the instance is deleted. For more information, see the Cloud SQL for PostgreSQL FAQ .
Cloud SQL for SQL Server
Feature
Cloud SQL allows the re-use of an instance name immediately after the instance is deleted. For more information, see the Cloud SQL for SQL Server FAQ .
September 15, 2022
Cloud SQL for MySQL
Feature
Cloud SQL read replicas now follow the maintenance settings for the primary instance, including the maintenance window, rescheduling, and the deny maintenance period. During the maintenance event, Cloud SQL maintains the replicas before maintaining the primary instance. For more information, see How does maintenance affect read replicas?
Cloud SQL for PostgreSQL
Feature
Cloud SQL read replicas now follow the maintenance settings for the primary instance, including the maintenance window, rescheduling, and the deny maintenance period. During the maintenance event, Cloud SQL maintains the replicas before maintaining the primary instance. For more information, see How does maintenance affect read replicas?
Cloud SQL for SQL Server
Feature
Cloud SQL read replicas now follow the maintenance settings for the primary instance, including the maintenance window, rescheduling, and the deny maintenance period. During the maintenance event, Cloud SQL maintains the replicas before maintaining the primary instance. For more information, see How does maintenance affect read replicas?
September 13, 2022
Cloud SQL for MySQL
Feature
Support for me-west1 (Tel Aviv).
Feature
MySQL 5.7.37 has been upgraded to 5.7.38. For more information, see MySQL 5.7 release notes .
Cloud SQL for PostgreSQL
Feature
Support for me-west1 (Tel Aviv).
Cloud SQL for SQL Server
Feature
Support for me-west1 (Tel Aviv).
September 12, 2022
Cloud SQL for MySQL
Feature
Cascading Replicas is now generally available for Cloud SQL. Customers can now configure PostgreSQL and MySQL for Cloud SQL read replicas to have read replicas under them.
Feature
The In-place Major Version Upgrade feature is now generally available for Cloud SQL for MySQL.
Cloud SQL for PostgreSQL
Feature
Cascading Replicas is now generally available for Cloud SQL. Customers can now configure PostgreSQL and MySQL for Cloud SQL read replicas to have read replicas under them.
September 06, 2022
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports minor version 8.0.30. To upgrade your existing instance to the new version, see Upgrade the database minor version .
August 26, 2022
Cloud SQL for PostgreSQL
Feature
The following extensions in Cloud SQL for PostgreSQL are generally available :
pgRouting. Enhances geospatial processing, through network routing and analysis, for PostGIS.
plv8. Provides a procedural language for enabling the use of JavaScript.
amcheck. Enables the use of the pg_amcheck application to check for corruption in PostgreSQL databases.
August 22, 2022
Cloud SQL for SQL Server
Change
Cloud SQL may set a value for the max server memory (mb) flag on instances, based on Microsoft's recommended values . For information about flags supported by Cloud SQL, see Configure database flags .
August 15, 2022
Cloud SQL for MySQL
Feature
By enabling instance deletion protection, you can prevent the accidental removal of Cloud SQL instances. This functionality is generally available.
For more information, see Prevent deletion of an instance .
Cloud SQL for PostgreSQL
Feature
By enabling instance deletion protection, you can prevent the accidental removal of Cloud SQL instances. This functionality is generally available.
For more information, see Prevent deletion of an instance .
Cloud SQL for SQL Server
Feature
By enabling instance deletion protection, you can prevent the accidental removal of Cloud SQL instances. This functionality is generally available.
For more information, see Prevent deletion of an instance .
August 05, 2022
Cloud SQL for PostgreSQL
Feature
The new Cloud SQL System insights dashboard helps you detect and analyze system performance problems.
July 29, 2022
Cloud SQL for PostgreSQL
Change
For PostgreSQL versions 9.6 to 13, the [PostgreSQL version].R20220710.01_00 maintenance version caused a behavior change for configuration parameters: Session-level configuration parameters with dashes ( - ) cannot be set.
After you check your current maintenance version , you can apply a fix by performing a self-service maintenance update to the latest release.
Please use this table to find the name of the maintenance version to apply, and use that version or the latest version available:
PostgreSQL version
Maintenance version
PostgreSQL 9.6
POSTGRES_9_6_24.R20220710.01_02
PostgreSQL 10
POSTGRES_10_21.R20220710.01_02
PostgreSQL 11
POSTGRES_11_16.R20220710.01_02
PostgreSQL 12
POSTGRES_12_11.R20220710.01_02
PostgreSQL 13
POSTGRES_13_7.R20220710.01_02
After you have identified the name of the maintenance version, please upgrade to the target maintenance version , performing the corresponding update of your instances (to the latest maintenance version).
Note that newly created instances automatically use the latest version.
July 25, 2022
Cloud SQL for PostgreSQL
Feature
The following PostgreSQL minor versions and extension versions are now available:
14.3 is upgraded to 14.4.
13.6 is upgraded to 13.7.
12.10 is upgraded to 12.11.
11.15 is upgraded to 11.16.
10.20 is upgraded to 10.21.
If you use maintenance windows, then you might not yet have these versions. In this case, you'll see the new versions after your maintenance update occurs. To find your maintenance window or to manage maintenance updates, see Find and set maintenance windows .
Feature
Added information about checking the LC_COLLATE value for your databases before performing a major version upgrade of the databases for your Cloud SQL for PostgreSQL instance. For more information, refer to the Cloud SQL documentation.
July 14, 2022
Cloud SQL for MySQL
Feature
For enhanced security with built-in authentication, Cloud SQL now lets you set password policies at the instance and user levels.
July 11, 2022
Cloud SQL for MySQL
Feature
You can enable high availability for read replicas. See Disaster recovery for additional information about the use of high-availability replicas in a disaster recovery configuration.
Feature
You can create external server replicas with HA enabled.
Cloud SQL for PostgreSQL
Feature
You can enable high availability for read replicas. See Disaster recovery for additional information about the use of high-availability replicas in a disaster recovery configuration.
Feature
You can create external server replicas with HA enabled.
Cloud SQL for SQL Server
Feature
The database major version upgrade feature of Cloud SQL for SQL Server is generally available. For more information, see Upgrade the database major version in-place .
July 08, 2022
Cloud SQL for PostgreSQL
Feature
The July maintenance changelog is now available. For more information, use the links at Maintenance changelog .
Cloud SQL for SQL Server
Feature
The July maintenance changelog is now available. For more information, use the links at Maintenance changelog .
July 07, 2022
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports setting timezone names as values for the time_zone parameter. Refer to the Cloud SQL documentation for a list of supported timezone names.
June 28, 2022
Cloud SQL for MySQL
Feature
A second June maintenance changelog is now available. For more information, use the links at Maintenance changelog .
Cloud SQL for PostgreSQL
Feature
A second June maintenance changelog is now available. For more information, use the links at Maintenance changelog .
The fix to the silent data corruption when using the CREATE INDEX CONCURRENTLY or REINDEX CONCURRENTLY SQL commands in PostgreSQL 14 ( BUG #17485 ) is now available in the self-service maintenance release POSTGRES_14_2.R20220331.02_012 for PostgreSQL 14.2.
After applying the self service maintenance , you can fix any silent data corruption if it already happens using REINDEX CONCURRENTLY SQL command on the specific indexes, or reindexdb client command for your entire instance.
Cloud SQL for SQL Server
Feature
A second June maintenance changelog is now available. For more information, use the links at Maintenance changelog .
June 27, 2022
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL supports in-place major version upgrades in Preview. You can upgrade your instance's major version to a more recent version. For more information, see Upgrade the database major version in-place .
June 23, 2022
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL now supports replication from an external server .
June 21, 2022
Cloud SQL for SQL Server
Feature
You can enable an instance to publish to a subscriber that is external (or internal) to Cloud SQL. In this scenario, Cloud SQL for SQL Server can act as a publisher to an external subscriber. This functionality, which is generally available, uses transactional replication.
For more information, see Configure external replicas .
Feature
In Cloud SQL, you can use SQL Server Audit capabilities to track and log server-level and database-level events. This functionality is generally available.
For more information, see SQL Server database auditing .
June 14, 2022
Cloud SQL for PostgreSQL
Feature
For enhanced security with built-in authentication, Cloud SQL now lets you set password policies at the instance level.
June 13, 2022
Cloud SQL for PostgreSQL
Feature
The following extensions in Cloud SQL for PostgreSQL are generally available :
pg_bigm. Enables full text search and allows a two-gram (bigram) index for faster full text search.
refint. Enables the checking of foreign key restraints, the referencing table, and the referenced table.
decoderbufs. A logical decoder that delivers output data as Protocol Buffers, adapted for Debezium.
pg_wait_sample . Collects sampling statistics of wait events, providing wait event data for processes on servers.
Additionally, users with the cloudsqlsuperuser role have full access to the pg_largeobject system catalog.
Feature
Cloud SQL enables you to access to the pg_shadow view. You can use the pg_shadow view to work with the properties of roles that are marked as rolcanlogin in the pg_authid catalog.
For more information, see Access to the pg_shadow view .
June 10, 2022
Cloud SQL for MySQL
Feature
Cloud SQL now supports faster machine type changes, with connectivity dropping to less than 60 seconds. For more information, see Impact of changing instance settings .
Feature
MySQL 5.7.36 has been upgraded to 5.7.37.
Cloud SQL for PostgreSQL
Feature
Cloud SQL now supports faster machine type changes, with connectivity dropping to less than 60 seconds. For more information, see Impact of changing instance settings .
Cloud SQL for SQL Server
Feature
Cloud SQL now supports faster machine type changes, with connectivity dropping to less than 60 seconds. For more information, see Impact of changing instance settings .
June 09, 2022
Cloud SQL for MySQL
Feature
The June maintenance changelog is now available. For more information, use the links at Maintenance changelog .
Cloud SQL for PostgreSQL
Feature
The June maintenance changelog is now available. For more information, use the links at Maintenance changelog .
Cloud SQL for SQL Server
Feature
The June maintenance changelog is now available. For more information, use the links at Maintenance changelog .
June 08, 2022
Cloud SQL for MySQL
Feature
An addendum to the May maintenance changelog shows additional security patches. For more information, use the links at Maintenance changelog .
Cloud SQL for PostgreSQL
Feature
An addendum to the May maintenance changelog shows additional security patches. For more information, use the links at Maintenance changelog .
Feature
New maintenance versions are now available through self-service maintenance . See the maintenance changelog to learn more about these new maintenance versions.
Cloud SQL for SQL Server
Feature
An addendum to the May maintenance changelog shows additional security patches. For more information, use the links at Maintenance changelog .
June 07, 2022
Cloud SQL for MySQL
Feature
Support for us-south1 (Dallas).
Cloud SQL for PostgreSQL
Feature
Support for us-south1 (Dallas).
Cloud SQL for SQL Server
Feature
Support for us-south1 (Dallas).
May 26, 2022
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports minor version 8.0.29. To upgrade your existing instance to the new version, see Upgrade the database minor version .
May 24, 2022
Cloud SQL for MySQL
Feature
Support for us-east5 (Columbus).
Cloud SQL for PostgreSQL
Feature
Support for us-east5 (Columbus).
Cloud SQL for SQL Server
Feature
Support for us-east5 (Columbus).
May 13, 2022
Cloud SQL for MySQL
Feature
New maintenance versions are now available through self-service maintenance . See the maintenance changelog to learn more about these new maintenance versions.
Cloud SQL for SQL Server
Feature
New maintenance versions are now available through self-service maintenance . See the maintenance changelog to learn more about these new maintenance versions.
May 04, 2022
Cloud SQL for MySQL
Feature
Support for europe-west9 (Paris).
Cloud SQL for PostgreSQL
Feature
Support for europe-west9 (Paris).
Cloud SQL for SQL Server
Feature
Support for europe-west9 (Paris).
May 02, 2022
Cloud SQL for MySQL
Feature
New maintenance versions are now available through self-service maintenance . See the maintenance changelog to learn more about these new maintenance versions.
Cloud SQL for PostgreSQL
Feature
New maintenance versions are now available through self-service maintenance . See the maintenance changelog to learn more about these new maintenance versions.
Cloud SQL for SQL Server
Feature
New maintenance versions are now available through self-service maintenance . See the maintenance changelog to learn more about these new maintenance versions.
April 29, 2022
Cloud SQL for MySQL
Feature
MySQL 8.0 is now the default major database version for Cloud SQL for MySQL.
April 28, 2022
Cloud SQL for MySQL
Feature
The following Cloud SQL recommenders that help you optimize your database costs are now generally available:
Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
Overprovisioned database instance recommender : Identifies overprovisioned database instances in your project and provides recommendations about the savings that you can make by rightsizing these instances.
Cloud SQL for PostgreSQL
Feature
The following Cloud SQL recommenders that help you optimize your database costs are now generally available:
Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
Overprovisioned database instance recommender : Identifies overprovisioned database instances in your project and provides recommendations about the savings that you can make by rightsizing these instances.
Cloud SQL for SQL Server
Feature
The following Cloud SQL recommenders that help you optimize your database costs are now generally available:
Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
Overprovisioned database instance recommender : Identifies overprovisioned database instances in your project and provides recommendations about the savings that you can make by rightsizing these instances.
April 25, 2022
Cloud SQL for MySQL
Feature
You can now accept a maintenance update on your instance outside of the normal flow of scheduled maintenance.
While Cloud SQL schedules maintenance updates once every few months to ensure you have the latest maintenance version, you might want to use self-service maintenance if:
You need an update sooner than your next scheduled maintenance event.
You want to catch up to the latest maintenance version after skipping your most recent scheduled maintenance event.
You want to gain more control over when maintenance is applied
Feature
Cloud SQL now supports maintenance changelogs. Maintenance changelogs provide information about updates available in new maintenance versions, such as database minor version upgrades and patches for security vulnerabilities. For links to current maintenance changelogs for each major database version, see Cloud SQL maintenance changelogs .
Cloud SQL for PostgreSQL
Feature
You can now accept a maintenance update on your instance outside of the normal flow of scheduled maintenance.
While Cloud SQL schedules maintenance updates once every few months to ensure you have the latest maintenance version, you might want to use self-service maintenance if:
You need an update sooner than your next scheduled maintenance event.
You want to catch up to the latest maintenance version after skipping your most recent scheduled maintenance event.
You want to gain more control over when maintenance is applied
Feature
Cloud SQL now supports maintenance changelogs. Maintenance changelogs provide information about updates available in new maintenance versions, such as database minor version upgrades and patches for security vulnerabilities. For links to current maintenance changelogs for each major database version, see Cloud SQL maintenance changelogs .
Feature
The following PostgreSQL minor versions and extension versions are now available. If you use maintenance windows, you might not yet have these versions. In this case, you will see the new versions after your maintenance update occurs. To find your maintenance window or manage maintenance updates, see Finding and setting maintenance windows .
14.1 is upgraded to 14.2.
13.5 is upgraded to 13.6.
12.9 is upgraded to 12.10.
11.14 is upgraded to 11.15.
10.19 is upgraded to 10.20.
Cloud SQL for SQL Server
Feature
You can now accept a maintenance update on your instance outside of the normal flow of scheduled maintenance.
While Cloud SQL schedules maintenance updates once every few months to ensure you have the latest maintenance version, you might want to use self-service maintenance if:
You need an update sooner than your next scheduled maintenance event.
You want to catch up to the latest maintenance version after skipping your most recent scheduled maintenance event.
You want to gain more control over when maintenance is applied
Feature
Cloud SQL now supports maintenance changelogs. Maintenance changelogs provide information about updates available in new maintenance versions, such as database minor version upgrades and patches for security vulnerabilities. For links to current maintenance changelogs for each major database version, see Cloud SQL maintenance changelogs .
April 20, 2022
Cloud SQL for MySQL
Feature
Support for europe-west8 region (Milan).
Cloud SQL for PostgreSQL
Feature
Support for europe-west8 region (Milan).
Cloud SQL for SQL Server
Feature
Support for europe-west8 region (Milan).
April 12, 2022
Cloud SQL for MySQL
Feature
Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview .
constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK.
constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
You can use both constraints together to enforce the use of CMEK from allowed projects.
To learn more, see Customer-managed encryption keys (CMEK) organization policies . To add CMEK organization policies now, see Add Cloud SQL organization policies .
Cloud SQL for PostgreSQL
Feature
Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview .
constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK.
constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
You can use both constraints together to enforce the use of CMEK from allowed projects.
To learn more, see Customer-managed encryption keys (CMEK) organization policies . To add CMEK organization policies now, see Add Cloud SQL organization policies .
Cloud SQL for SQL Server
Feature
Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview .
constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK.
constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
You can use both constraints together to enforce the use of CMEK from allowed projects.
To learn more, see Customer-managed encryption keys (CMEK) organization policies . To add CMEK organization policies now, see Add Cloud SQL organization policies .
April 11, 2022
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL supports in-place major version upgrades in Preview. You can upgrade your instance's major version to a more recent version. For more information, see Upgrade the database major version in-place .
Cloud SQL for SQL Server
Feature
Cloud SQL for SQL Server supports in-place upgrades in Preview. You can upgrade your instance's major version or edition. For more information, see Upgrade the database major version in-place .
April 01, 2022
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports minor versions 8.0.27 and 8.0.28. To upgrade your existing instance to the new version, see Upgrade the database minor version .
February 28, 2022
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL 8.0.26 is now the default minor version. To upgrade your existing instance to the new version, see Set the MySQL minor version .
February 24, 2022
Cloud SQL for PostgreSQL
Change
Due to a change in a recent maintenance update, the changes listed in the February 4 Release Notes entry have been applied to some instances but postponed for the others. In the Google Cloud Console, you can determine if the maintenance update was applied. Specifically, on the Instance Overview page , review the instance's operations and logs for an occurrence of a maintenance operation since January 27.
February 23, 2022
Cloud SQL for MySQL
Feature
If your primary instance uses a private IP address, you can now select an allocated IP range for clones and replicas created from the instance.
Cloud SQL for PostgreSQL
Feature
If your primary instance uses a private IP address, you can now select an allocated IP range for clones and replicas created from the instance.
Cloud SQL for SQL Server
Feature
If your primary instance uses a private IP address, you can now select an allocated IP range for clones and replicas created from the instance.
February 17, 2022
Cloud SQL for MySQL
Feature
Cloud SQL now supports the use of tags on instances. Tags are key-value pairs you can apply to your resources, such as a project or a Cloud SQL instance, which are used for fine-grained access control. To learn more, see Access control with Google Cloud tags . To use tags now, see Attach and manage tags on Cloud SQL instances .
Cloud SQL for PostgreSQL
Feature
Cloud SQL now supports the use of tags on instances. Tags are key-value pairs you can apply to your resources, such as a project or a Cloud SQL instance, which are used for fine-grained access control. To learn more, see Access control with Google Cloud tags . To use tags now, see Attach and manage tags on Cloud SQL instances .
Cloud SQL for SQL Server
Feature
Cloud SQL now supports the use of tags on instances. Tags are key-value pairs you can apply to your resources, such as a project or a Cloud SQL instance, which are used for fine-grained access control. To learn more, see Access control with Google Cloud tags . To use tags now, see Attach and manage tags on Cloud SQL instances .
February 08, 2022
Cloud SQL for PostgreSQL
Feature
Cloud SQL supports the max_parallel_maintenance_workers , max_parallel_workers ,
max_parallel_workers_per_gather , and max_pred_locks_per_transaction flags:
max_parallel_maintenance_workers sets the maximum number of parallel workers that can be started by a single utility command.
max_parallel_workers sets the maximum number of workers that the system can support for parallel operations.
max_parallel_workers_per_gather sets the maximum number of workers that can be started by a single Gather or Gather Merge node.
max_pred_locks_per_transaction controls the average number of object locks allocated for each transaction.
For more information, see Supported flags .
Cloud SQL for SQL Server
Feature
Cross-region replication is now generally available in Cloud SQL for SQL Server.
You can use replication to scale the use of data in a database without degrading performance. Other reasons include migrating or maintaining data duplicates between regions.
For more information, see Replication in Cloud SQL .
February 07, 2022
Cloud SQL for PostgreSQL
Feature
Cloud SQL supports the wal_receiver_timeout and wal_sender_timeout flags:
The wal_receiver_timeout flag ends replication connections that are inactive for the specified time.
The wal_sender_timeout flag, which is for detection by the ending server, ends replication connections that are inactive for the specified time.
For more information, see Supported flags .
Cloud SQL for SQL Server
Feature
SQL Server 2019 is now the default version. See Database versions and version policies .
February 04, 2022
Cloud SQL for PostgreSQL
Feature
The following PostgreSQL minor versions and extension versions are now available. If you use maintenance windows, you might not yet have these versions. In this case, you will see the new versions after your maintenance update occurs. To find your maintenance window or manage maintenance updates, see Finding and setting maintenance windows .
14.0 is upgraded to 14.1.
13.4 is upgraded to 13.5.
12.8 is upgraded to 12.9.
11.13 is upgraded to 11.14.
10.18 is upgraded to 10.19.
9.6.23 is upgraded to 9.6.24.
Additionally, the following extensions have been upgraded. For more information about these and other extensions, see PostgreSQL extensions .
The pglogical extension is upgraded to 2.4.1.
The pgaudit extension is upgraded as follows:
For PostgreSQL 14, upgraded to 1.6.1.
For PostgreSQL 13, upgraded to 1.5.1.
For PostgreSQL 12, upgraded to 1.4.2.
For PostgreSQL 11, upgraded to 1.3.3.
For PostgreSQL 10, upgraded to 1.2.3.
For PostgreSQL 9.6, upgraded to 1.1.4.
February 01, 2022
Cloud SQL for PostgreSQL
Feature
Query Insights lets you configure the query sampling rate. For information, see Using Query Insights to improve query performance .
January 31, 2022
Cloud SQL for MySQL
Feature
The Key Access Justifications (KAJ) feature is now generally available in Cloud SQL. You can use KAJ as part of Cloud External Key Manager (EKM) . KAJ enables you to view the reason for each Cloud EKM request. Additionally, based on the justification provided, you can automatically approve or deny a request. For related information, see the Overview .
Cloud SQL for PostgreSQL
Feature
The Key Access Justifications (KAJ) feature is now generally available in Cloud SQL. You can use KAJ as part of Cloud External Key Manager (EKM) . KAJ enables you to view the reason for each Cloud EKM request. Additionally, based on the justification provided, you can automatically approve or deny a request. For related information, see the Overview .
Cloud SQL for SQL Server
Feature
The Key Access Justifications (KAJ) feature is now generally available in Cloud SQL. You can use KAJ as part of Cloud External Key Manager (EKM) . KAJ enables you to view the reason for each Cloud EKM request. Additionally, based on the justification provided, you can automatically approve or deny a request. For related information, see the Overview .
December 16, 2021
Cloud SQL for MySQL
Feature
You can now see the database minor version when viewing information about an instance. See Database versions and version policies for a list of the latest supported versions.
Feature
You can now set or upgrade your minor version for Cloud SQL for MySQL 8.0.
Feature
Cloud SQL now supports MySQL 8.0.26. To upgrade your existing instance to the new version, see how to upgrade your minor version .
MySQL 5.7.35 has been upgraded to 5.7.36.
Feature
Cloud SQL for MySQL now supports point-in-time recovery using a timestamp. See Point-in-time recovery .
Feature
Cloud SQL for MySQL now supports database auditing. Database auditing lets you track specific user actions in the database, such as table updates, read queries, user privilege grants, and others. To learn more, see MySQL database auditing .
Cloud SQL for PostgreSQL
Feature
You can now see the database minor version when viewing information about an instance. See Database versions and version policies for a list of the latest supported versions.
Cloud SQL for SQL Server
Feature
You can now see the database minor version when viewing information about an instance. See Database versions and version policies for a list of the latest supported versions.
December 15, 2021
Cloud SQL for PostgreSQL
Feature
PostgreSQL version 14 is now generally available. To start using PostgreSQL 14, see Create instances .
December 13, 2021
Cloud SQL for SQL Server
Feature
A new feature enables more flexibility for integrating Cloud SQL for SQL Server with Managed Service for Microsoft Active Directory. You can integrate your SQL Server instance with a managed AD domain located in a different project .
December 09, 2021
Cloud SQL for MySQL
Feature
Cloud SQL now limits the rate for backup and restore operations on the data disk. For more information, see Backup rate limitations and Restore rate limitations .
Cloud SQL for PostgreSQL
Feature
Cloud SQL now limits the rate for backup and restore operations on the data disk. For more information, see Backup rate limitations and Restore rate limitations .
November 19, 2021
Cloud SQL for PostgreSQL
Feature
The following extensions in Cloud SQL for PostgreSQL are generally available :
auto_explain. Enables you to automatically log execution plans of slow statements, for troubleshooting and more. Provides an automated way to perform the functionality of the EXPLAIN command.
pg_cron. A cron-based job scheduler, this extension enables cron syntax to schedule commands from a database.
pg_hint_plan. Enables you to improve PostgreSQL execution plans using hints, which are simple descriptions in SQL comments.
pg_proctab. Enables you to use pg_top with Cloud SQL for PostgreSQL, and generate reports from the operating system process table.
November 16, 2021
Cloud SQL for MySQL
Feature
Support for southamerica-west1 (Santiago) region.
Cloud SQL for PostgreSQL
Feature
Support for southamerica-west1 (Santiago) region.
Cloud SQL for SQL Server
Feature
Support for southamerica-west1 (Santiago) region.
October 29, 2021
Cloud SQL for PostgreSQL
Feature
The following PostgreSQL minor versions and extension versions are now available. If you use maintenance windows, you might not yet have these versions. In this case, you will see the new versions after your maintenance update occurs. To find your maintenance window or manage maintenance updates, see Finding and setting maintenance windows .
9.6.22 is upgraded to 9.6.23.
10.17 is upgraded to 10.18.
11.12 is upgraded to 11.13.
12.7 is upgraded to 12.8.
13.3 is upgraded to 13.4.
The hll extension is upgraded to 2.16.
The pglogical extension is upgraded to 2.4.0.
The pg_partman extension is upgraded to 4.5.1.
The pg_repack extension is upgraded to 1.4.7.
October 26, 2021
Cloud SQL for PostgreSQL
Feature
Cloud SQL now supports the max_pred_locks_per_page and max_pred_locks_per_relation flags. For information about the Cloud SQL implementation of these flags, see Supported flags .
October 08, 2021
Cloud SQL for MySQL
Feature
Access Approval is now GA for Cloud SQL. Access Approval enables you to require explicit approval before Google Support may access your database for support purposes.To learn about access approval, see Overview of Access Approval . To set up access approval now, see the Access Approval Quickstart .
Cloud SQL for PostgreSQL
Feature
Access Approval is now GA for Cloud SQL. Access Approval enables you to require explicit approval before Google Support may access your database for support purposes.To learn about access approval, see Overview of Access Approval . To set up access approval now, see the Access Approval Quickstart .
Cloud SQL for SQL Server
Feature
Access Approval is now GA for Cloud SQL. Access Approval enables you to require explicit approval before Google Support may access your database for support purposes.To learn about access approval, see Overview of Access Approval . To set up access approval now, see the Access Approval Quickstart .
October 04, 2021
Cloud SQL for MySQL
Feature
Cloud SQL now supports the ability for you to specify IP CIDR ranges from your VPC network for your Cloud SQL instances allowing you to manage your IP address space better. For more information, see Allocated IP address ranges . To start using this feature now, see Configuring private IP for a new instance.
September 28, 2021
Cloud SQL for MySQL
Feature
Cloud SQL supports the preview version of two recommenders that help you optimize your database costs:
Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
Overprovisioned database instance recommender : Identifies overprovisioned database instances in your project and provides recommendations about the savings that you can make by rightsizing these instances.
Feature
When a database instance is nearly out of storage capacity, it's automatically stopped to prevent the loss of information. For more information, see Stopping an instance .
Cloud SQL for PostgreSQL
Feature
Cloud SQL supports the preview version of two recommenders that help you optimize your database costs:
Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
Overprovisioned database instance recommender : Identifies overprovisioned database instances in your project and provides recommendations about the savings that you can make by rightsizing these instances.
Feature
When a database instance is nearly out of storage capacity, it's automatically stopped to prevent the loss of information. For more information, see Stopping an instance .
Cloud SQL for SQL Server
Feature
Cloud SQL supports the preview version of two recommenders that help you optimize your database costs:
Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
Overprovisioned database instance recommender : Identifies overprovisioned database instances in your project and provides recommendations about the savings that you can make by rightsizing these instances.
Feature
When a database instance is nearly out of storage capacity, it's automatically stopped to prevent the loss of information. For more information, see Stopping an instance .
September 14, 2021
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports custom formatting controls for CSVs. For more information on how to select custom characters for field delimiters, quotes, escapes, and other characters in admin exports and imports, see our documentation .
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL has enhanced the support for multiline log entries in postgres.log . Before, when a log entry spanned multiple lines, each line was recorded as a separate entry in Cloud Logging. The lines are now recorded as a single entry in Cloud Logging for ease of query and processing.
Feature
Cloud SQL for PostgreSQL now supports custom formatting controls for CSVs. For more information on how to select custom characters for field delimiters, quotes, escapes, and other characters in admin exports and imports, see our documentation .
September 10, 2021
Cloud SQL for MySQL
Feature
The Cloud SQL out-of-disk recommender is now generally available. This feature proactively generates recommendations that help you reduce the risk of downtime that might be caused by your instances running out of disk space.
Cloud SQL for PostgreSQL
Feature
The Cloud SQL out-of-disk recommender is now generally available. This feature proactively generates recommendations that help you reduce the risk of downtime that might be caused by your instances running out of disk space.
Feature
Cloud SQL for PostgreSQL now supports the min_wal_size flag. For more information about this flag, see the Cloud SQL for PostgreSQL flags documentation.
Cloud SQL for SQL Server
Feature
The Cloud SQL out-of-disk recommender is now generally available. This feature proactively generates recommendations that help you reduce the risk of downtime that might be caused by your instances running out of disk space.
September 08, 2021
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now allows you to specify mysqldump options during migration from external servers. For more information, see Configuring Cloud SQL to replicate from an external server and Using a managed import to set up replication from external databases .
September 02, 2021
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports using a custom import to set up replication from large external databases. To use this replication option, see Configuring Cloud SQL to replicate from an external server and Using a custom import to set up replication from large external databases .
August 30, 2021
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL support for pglogical, native logical replication, and change data capture (CDC) using wal2json and test_decoding is now generally available.
Feature
Cloud SQL for PostgreSQL support for Automatic IAM database authentication is now generally available. See Automatic IAM database authentication .
August 27, 2021
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL now supports the following flags:
huge_pages
shared_buffers
wal_buffers
For more information about these flags, see the Cloud SQL for PostgreSQL flags documentation.
August 21, 2021
Cloud SQL for MySQL
Feature
Cloud SQL now supports IAM Conditions .
You can use IAM Conditions to define and enforce conditional, attribute-based access control for Google Cloud resources, including Cloud SQL instances. See Overview of IAM Conditions for more information.
Cloud SQL for PostgreSQL
Feature
Cloud SQL now supports IAM Conditions .
You can use IAM Conditions to define and enforce conditional, attribute-based access control for Google Cloud resources, including Cloud SQL instances. See Overview of IAM Conditions for more information.
Cloud SQL for SQL Server
Feature
Cloud SQL now supports IAM Conditions .
You can use IAM Conditions to define and enforce conditional, attribute-based access control for Google Cloud resources, including Cloud SQL instances. See Overview of IAM Conditions for more information.
August 17, 2021
Cloud SQL for MySQL
Feature
MySQL 5.7.33 has been upgraded to 5.7.34.
Cloud SQL for PostgreSQL
Feature
Cloud SQL now offers faster maintenance , with connectivity dropping for less than 30 seconds on average.
August 09, 2021
Cloud SQL for MySQL
Feature
The Cloud SQL Admin API v1 is now generally available. It is
and will continue to be compatible with the v1beta4 version. There is no
requirement to migrate from v1beta4 to the v1 Admin API.
Cloud SQL for PostgreSQL
Feature
The Cloud SQL Admin API v1 is now generally available. It is
and will continue to be compatible with the v1beta4 version. There is no
requirement to migrate from v1beta4 to the v1 Admin API.
Cloud SQL for SQL Server
Feature
The Cloud SQL Admin API v1 is now generally available. It is
and will continue to be compatible with the v1beta4 version. There is no
requirement to migrate from v1beta4 to the v1 Admin API.
August 03, 2021
Cloud SQL for MySQL
Feature
Support for northamerica-northeast2-a,b,c (Toronto) region.
Cloud SQL for PostgreSQL
Feature
Support for northamerica-northeast2-a,b,c (Toronto) region.
Cloud SQL for SQL Server
Feature
Support for northamerica-northeast2-a,b,c (Toronto) region.
July 29, 2021
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL now supports the following flags:
tcp_keepalives_count
tcp_keepalives_idle
tcp_keepalives_interval
For more information about these flags, see the Cloud SQL for PostgreSQL flags documentation.
July 26, 2021
Cloud SQL for PostgreSQL
Feature
The following PostgreSQL minor versions and extension versions are now available. If you use maintenance windows, you might not yet have these versions. In this case, you will see the new versions once your maintenance update occurs. To find your maintenance window or manage maintenance updates, see Finding and setting maintenance windows .
9.6.21 is upgraded to 9.6.22.
10.16 is upgraded to 10.17.
11.11 is upgraded to 11.12.
12.6 is upgraded to 12.7.
13.2 is upgraded to 13.3.
pglogical extension is upgraded to 2.3.4.
PostGIS extension is upgraded to 3.0.3 for all PostgreSQL major versions.
July 08, 2021
Cloud SQL for MySQL
Feature
IAM database authentication for Cloud SQL for MySQL is now generally available. To get started using IAM database authentication, see Cloud SQL IAM database authentication .
June 30, 2021
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now offers stored procedures that you can execute on your instances. You can use stored procedures to add or drop secondary indexes on read replicas. See Cloud SQL stored procedures .
June 29, 2021
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports the innodb_flush_log_at_trx_commit flag .
Feature
Support for asia-south2 (Delhi) region.
Cloud SQL for PostgreSQL
Feature
Support for asia-south2 (Delhi) region.
Cloud SQL for SQL Server
Feature
Support for asia-south2 (Delhi) region.
June 28, 2021
Cloud SQL for SQL Server
Feature
Integration of SQL Server with Managed Service for Microsoft Active Directory is generally available .
This provides capabilities for authentication, authorization, and more.
Joining an instance to a managed Active Directory domain enables you to log in to your SQL Server instances using Windows Authentication. Additionally, you can integrate with your on-premises AD domains by establishing a trust with the Managed Service for Microsoft Active Directory.
June 24, 2021
Cloud SQL for SQL Server
Feature
Cloud SQL for SQL Server now supports SQL Server 2019. The default version continues to be SQL Server 2017 Standard.
See Database versions and version policies .
June 23, 2021
Cloud SQL for MySQL
Feature
The following MySQL minor versions have been upgraded:
MySQL 5.6.50 is upgraded to 5.6.51
MySQL 5.7.32 is upgraded to 5.7.33
Feature
Cloud SQL storage limits are now increased to support up to 64 TB. See Cloud SQL storage limits for more information.
Cloud SQL for PostgreSQL
Feature
Cloud SQL storage limits are now increased to support up to 64 TB. See Cloud SQL storage limits for more information.
Cloud SQL for SQL Server
Feature
Cloud SQL storage limits are now increased to support up to 64 TB. See Cloud SQL storage limits for more information.
June 21, 2021
Cloud SQL for MySQL
Feature
Support for australia-southeast2 (Melbourne) region.
Cloud SQL for PostgreSQL
Feature
Support for australia-southeast2 (Melbourne) region.
Cloud SQL for SQL Server
Feature
A preview enables you to use replication in Cloud SQL for SQL Server. Additionally, the preview enables you to make cross-region replicas.
You can use replication to scale the use of data in a database without degrading performance. Other reasons include migrating or maintaining data duplicates between regions.
For more information, see Replication in Cloud SQL .
Feature
Support for australia-southeast2 (Melbourne) region.
June 17, 2021
Cloud SQL for PostgreSQL
Feature
Query Insights is now supported for read replicas.
June 07, 2021
Cloud SQL for MySQL
Feature
Cloud SQL now offers faster maintenance , with connectivity dropping for less than 60 seconds on average.
Cloud SQL for PostgreSQL
Feature
Cloud SQL now offers faster maintenance , with connectivity dropping for less than 60 seconds on average.
Cloud SQL for SQL Server
Feature
Cloud SQL now offers faster maintenance , with connectivity dropping for less than 120 seconds on average.
June 04, 2021
Cloud SQL for PostgreSQL
Feature
Both the Cloud SQL Java Connector and Cloud SQL Python Connector now support IAM Authentication for PostgreSQL.
June 01, 2021
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports the MySQL flags expire_logs_days (for MySQL 5.6 and 5.7) and binlog_expire_logs_seconds (for MySQL 8.0). Note that if you enable point-in-time recovery, the expiration period of your binary logs will be determined by the lesser of your transaction log retention period and the value of these flags.
Cloud SQL for PostgreSQL
Feature
The logical replication and decoding functionality of PostgreSQL is available as a preview. These features enable logical replication workflows and change data capture workflows.
For more information, see Setting up logical replication and decoding .
Feature
Cloud SQL for PostgreSQL now supports the pg_similarity extension, which provides support for similarity queries in PostgreSQL.
Also, the default value for the database flag autovacuum_vacuum_cost_delay is changed to 2 milliseconds in PostgreSQL 9.6, 10 and 11.
The minor versions for various extensions have also been upgraded:
9.6
10
11
12
13
address_standardizer
not avail
2.4.9
2.5.5
3.0.2
3.0.2
hll
2.14
2.14
2.14
2.14
2.14
pg_repack
1.4.6
1.4.6
1.4.6
1.4.6
1.4.6
pgaudit
1.1.3
1.2.3
1.3.2
1.4.1
no change
pglogical
2.3.3
2.3.3
2.3.3
2.3.3
2.3.3
pl/proxy
2.10.0
2.10.0
2.10.0
2.10.0
2.10.0
postgis
2.3.11
2.4.9
2.5.5
3.0.2
3.0.2
May 19, 2021
Cloud SQL for MySQL
Feature
Cloud SQL supports the preview version of the out-of-disk recommender . This feature proactively generates recommendations that help you reduce the risk of downtime that might be caused by your instances running out of disk space. These recommendations can be applied when a Cloud SQL instance is trending towards the storage limit.
Cloud SQL for PostgreSQL
Feature
Cloud SQL supports the preview version of the out-of-disk recommender . This feature proactively generates recommendations that help you reduce the risk of downtime that might be caused by your instances running out of disk space. These recommendations can be applied when a Cloud SQL instance is trending towards the storage limit.
Cloud SQL for SQL Server
Feature
Cloud SQL supports the preview version of the out-of-disk recommender . This feature proactively generates recommendations that help you reduce the risk of downtime that might be caused by your instances running out of disk space. These recommendations can be applied when a Cloud SQL instance is trending towards the storage limit.
April 30, 2021
Cloud SQL for SQL Server
Feature
The following version upgrade applies to Cloud SQL for SQL Server:
SQL Server 2017 is upgraded from 14.0.3257.3 to 14.0.3370.1
If you use maintenance windows, the new version will be available after your maintenance update. For information about maintenance windows, and to manage maintenance updates, see Finding and setting maintenance windows .
April 23, 2021
Cloud SQL for PostgreSQL
Feature
The following PostgreSQL minor versions are now available. If you use maintenance windows, you might not yet have the minor version. In this case, you will see the new minor version once your maintenance update occurs. To find your maintenance window or manage maintenance updates, see Finding and setting maintenance windows .
9.6.20 is upgraded to 9.6.21.
10.15 is upgraded to 10.16.
11.10 is upgraded to 11.11.
12.5 is upgraded to 12.6.
13.1 is upgraded to 13.2.
For more information about the content of these minor versions, please see the PostgreSQL release notes .
April 06, 2021
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL now lets you use IAM database authentication with the Cloud SQL Auth proxy. The Cloud SQL Auth proxy is able to request and refresh OAuth 2.0 access tokens, ensuring that long-lived processes or applications that rely on connection pooling can have stable connections. To learn more, see Using IAM database authentication with the Cloud SQL Auth proxy .
Cloud SQL for SQL Server
Feature
Cloud SQL for SQL Server enables you to perform change data capture (CDC) operations for your Cloud SQL instances. General information about CDC in SQL Server is here .
CDC is available for the following Cloud SQL for SQL Server database versions:
SQL Server 2017 Standard
SQL Server 2017 Enterprise
After connecting to an instance, the sqlserver user can do many CDC operations . The functions include (and are not limited to) the following:
cdc.fn_cdc_get_all_changes_<capture_instance>
Sys.fn_cdc_get_max_lsn
To turn on this feature for a database, run this command:
exec msdb .[ dbo ].[ gcloudsql_cdc_enable_db ] 'demo'
To turn off this feature for a database, run this command:
exec msdb.[dbo].[gcloudsql_cdc_disable_db] 'demo'
Feature
Cloud SQL for SQL Server enables you to perform common operations on a tempdb database .
After you connect to an instance, the sqlserver user can manage the tempdb files. Specifically, the user has the CONTROL permission on the tempdb database, and can do many operations, including (and not limited to) the following:
* ALTER DATABASE [ tempdb ] ADD FILE
* ALTER DATABASE [ tempdb ] REMOVE
March 31, 2021
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL flags are now generally available. See supported PostgreSQL flags for more information.
March 29, 2021
Cloud SQL for SQL Server
Feature
You can integrate Cloud SQL for SQL Server with Managed Service for Microsoft Active Directory.
Authentication, authorization, and more are available . For example, joining an instance to a managed Active Directory domain enables you to log in using Windows Authentication. Additionally, you can integrate with your on-premises AD domains by establishing a trust .
March 24, 2021
Cloud SQL for MySQL
Feature
Support for europe-central2 (Warsaw ) .
Cloud SQL for PostgreSQL
Feature
Support for europe-central2 (Warsaw ) .
Cloud SQL for SQL Server
Feature
Support for europe-central2 (Warsaw ) .
March 19, 2021
Cloud SQL for PostgreSQL
Feature
The following extensions in Cloud SQL for PostgreSQL are generally available :
pg_partman. Enables you to create and manage time-based and serial-based table partition sets.
pgTAP. Provides a unit testing framework for PostgreSQL, written in PL/pgSQL and PL/SQL.
March 12, 2021
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports the innodb_buffer_pool_size flag. To learn more about how to set this flag, see buffer pool size .
March 05, 2021
Cloud SQL for MySQL
Feature
The following MySQL minor versions have been upgraded:
MySQL 5.6.47 is upgraded to 5.6.50
MySQL 5.7.25 is upgraded to 5.7.32
Feature
Cloud SQL for MySQL now supports flexible instance configurations. Compared to our predefined machine types, flexible instance configurations offer you the extra freedom to configure your instance with the specific number of vCPUs and GB of RAM that fits your workload. To set up a new instance with a flexible instance configuration, see our documentation here .
February 24, 2021
Cloud SQL for MySQL
Change
Cloud SQL now offers faster maintenance, with average connectivity loss lasting 90 seconds or less on average. See more about maintenance timelines .
Cloud SQL for PostgreSQL
Change
Cloud SQL now offers faster maintenance, with average connectivity loss lasting 90 seconds or less on average. See more about maintenance timelines .
February 22, 2021
Cloud SQL for PostgreSQL
Feature
The following PostgreSQL minor versions are now available. If you use maintenance windows, you might not yet have the minor version. In this case, you will see the new minor version once your maintenance update occurs. To find your maintenance window or manage maintenance updates, see Finding and setting maintenance windows .
PostgreSQL 9.6.19 is upgraded to 9.6.20.
PostgreSQL 10.14 is upgraded to 10.15.
PostgreSQL 11.9 is upgraded to 11.10.
PostgreSQL 12.4 is upgraded to 12.5.
PostgreSQL 13 is upgraded to 13.1.
February 10, 2021
Cloud SQL for MySQL
Feature
The Cloud SQL Admin API v1beta4 is now generally available. The URL for the Admin API will continue to refer to v1beta4 for backward compatibility. To start using the Cloud SQL Admin API now, see Using the Cloud SQL Admin API .
Cloud SQL for PostgreSQL
Feature
The Cloud SQL Admin API v1beta4 is now generally available. The URL for the Admin API will continue to refer to v1beta4 for backward compatibility. To start using the Cloud SQL Admin API now, see Using the Cloud SQL Admin API .
Cloud SQL for SQL Server
Feature
The Cloud SQL Admin API v1beta4 is now generally available. The URL for the Admin API will continue to refer to v1beta4 for backward compatibility. To start using the Cloud SQL Admin API now, see Using the Cloud SQL Admin API .
January 28, 2021
Cloud SQL for PostgreSQL
Feature
Query Insights is now generally available. Query Insights helps you detect, diagnose, and prevent query performance problems for Cloud SQL databases. It provides self-service, intuitive monitoring, and diagnostic information that goes beyond detection to help you to identify the root cause of performance problems.
To learn more, see Improving query performance .
January 19, 2021
Cloud SQL for PostgreSQL
Feature
Database auditing in Cloud SQL for PostgreSQL is generally available , through the open-source pgAudit extension. Using this extension, you can selectively record and track SQL operations performed against a given database instance.
The pgAudit extension helps you configure many of the logs often required to comply with government, financial, and ISO certifications.
January 13, 2021
Cloud SQL for MySQL
Feature
Cloud SQL now exposes the metric database/memory/total_usage . This metric provides visibility into the database working set (including buffer cache). You can find this metric in the Metrics explorer within the Monitoring dashboard.
For more information about database/memory/total_usage , see Cloud SQL Metrics .
Cloud SQL for PostgreSQL
Feature
Cloud SQL now exposes the metric database/memory/total_usage . This metric provides visibility into the database working set (including buffer cache). You can find this metric in the Metrics explorer within the Monitoring dashboard.
For more information about database/memory/total_usage , see Cloud SQL Metrics .
Cloud SQL for SQL Server
Feature
Cloud SQL now exposes the metric database/memory/total_usage . This metric provides visibility into the database working set (including buffer cache). You can find this metric in the Metrics explorer within the Monitoring dashboard.
For more information about database/memory/total_usage , see Cloud SQL Metrics .
December 21, 2020
Cloud SQL for PostgreSQL
Feature
IAM database authentication for Cloud SQL for PostgreSQL is now generally available. To get started using IAM database authentication, see the Overview of Cloud SQL IAM database authentication .
December 17, 2020
Cloud SQL for MySQL
Feature
In Cloud SQL for MySQL, parallel replication is generally available for improving replication performance.
Cloud SQL for PostgreSQL
Feature
Cloud SQL has expanded support for PostgreSQL extensions. Three additional PostgreSQL extensions are now available:
dblink
ip4r
prefix
For additional information, see PostgreSQL extensions .
Feature
The following PostgreSQL minor versions have been upgraded:
PostgreSQL 9.6.18 is upgraded to 9.6.19.
PostgreSQL 10.13 is upgraded to 10.14.
PostgreSQL 11.8 is upgraded to 11.9.
PostgreSQL 12.3 is upgraded to 12.4.
December 16, 2020
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL now supports the effective_cache_size flag.
November 19, 2020
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports retention settings for automated backups . You can configure retention of your automated backups for shorter or longer periods (1 to 365 days). The default setting remains 7 days.
Feature
Cloud SQL for MySQL now supports retention settings for point-in-time recovery . You have the option of retaining logs, used for point-in-time recovery, for shorter periods (1 to 7 days). The default setting is 7 days.
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL now supports retention settings for point-in-time recovery . You have the option of retaining logs, used for point-in-time recovery, for shorter periods (1 to 7 days). The default setting is 7.
Feature
Cloud SQL for PostgreSQL now supports retention settings for automated backups . You can configure retention of your automated backups for shorter or longer periods (1 to 365 days). The default setting remains 7 days.
Cloud SQL for SQL Server
Feature
Cloud SQL for SQL Server now supports retention settings for automated backups . You can configure retention of your automated backups for shorter or longer periods (1 to 365 days). The default setting remains 7 days.
November 05, 2020
Cloud SQL for PostgreSQL
Feature
PostgreSQL version 13 is now generally available. To start using PostgreSQL 13, see Creating instances .
October 30, 2020
Cloud SQL for MySQL
Feature
In Cloud SQL for MySQL, 80 supported flags that previously were in beta are now generally available.
October 21, 2020
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL supports binary logging on read replicas for MySQL versions 5.7 and 8.0.
October 12, 2020
Cloud SQL for MySQL
Feature
Cloud SQL now offers "deny maintenance periods". With deny maintenance periods , you can prevent automatic maintenance from occurring during a specific time period. For example, the end-of-year holiday season is a time of peak load that requires heightened focus on infrastructure stability for many retail businesses. By setting a deny maintenance period from mid-October to mid-January, these businesses can prevent planned upgrades from Cloud SQL during their busiest time of year.
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL now offers IAM database authentication to help you
better monitor and manage access for users and service accounts to databases. This feature allows users and service accounts to use IAM credentials to log into PostgreSQL instances. To learn more about how IAM database authentication works, see the Overview of Cloud SQL IAM database authentication . To configure an instance, see Configuring instances for IAM database authentication . To create users or service accounts, see Creating and managing users that use IAM database authentication .
Feature
Cloud SQL now offers "deny maintenance periods". With deny maintenance periods , you can prevent automatic maintenance from occurring during a specific time period. For example, the end-of-year holiday season is a time of peak load that requires heightened focus on infrastructure stability for many retail businesses. By setting a deny maintenance period from mid-October to mid-January, these businesses can prevent planned upgrades from Cloud SQL during their busiest time of year.
Feature
Database auditing in Cloud SQL for PostgreSQL is available through the open-source pgAudit extension. Using this extension, you can selectively record and track SQL operations performed against a given database instance.
The pgAudit extension helps you configure many of the logs often required to comply with government, financial, and ISO certifications.
Cloud SQL for SQL Server
Feature
Cloud SQL now offers "deny maintenance periods". With deny maintenance periods , you can prevent automatic maintenance from occurring during a specific time period. For example, the end-of-year holiday season is a time of peak load that requires heightened focus on infrastructure stability for many retail businesses. By setting a deny maintenance period from mid-October to mid-January, these businesses can prevent planned upgrades from Cloud SQL during their busiest time of year.
September 24, 2020
Cloud SQL for MySQL
Feature
MySQL 5.6.42 is upgraded to 5.6.47.
September 21, 2020
Cloud SQL for MySQL
Feature
Cloud SQL has upgraded Replicating from an external server to version 1.1. You can now:
Replicate from sources where GTID is not enabled.
Allow Cloud SQL to copy data directly from an external server to a Cloud SQL replica.
Use new APIs that give you greater control to verify replication requirements, retry after making external server configuration changes, and remove the 30-minute limit for successful connectivity to an external server.
Cloud SQL for SQL Server
Feature
Cloud SQL for SQL Server enables you to set a default collation value for databases in an instance . This collation value is a default for sorting rules, case, and accent sensitivity. You can set this value through the Cloud Console, the gcloud command, and the Cloud SQL Admin API.
September 15, 2020
Cloud SQL for MySQL
Feature
Cloud SQL now offers serverless export. With serverless export , Cloud SQL performs the export from a temporary instance. Offloading the export operation allows databases on the primary instance to continue to serve queries and perform other operations at the usual performance rate.
Cloud SQL for PostgreSQL
Feature
Cloud SQL now offers serverless export. With serverless export , Cloud SQL performs the export from a temporary instance. Offloading the export operation allows databases on the primary instance to continue to serve queries and perform other operations at the usual performance rate.
Feature
The following PostgreSQL minor versions have been upgraded:
PostgreSQL 9.6.16 is upgraded to 9.6.18.
PostgreSQL 10.11 is upgraded to 10.13.
PostgreSQL 11.6 is upgraded to 11.8.
PostgreSQL 12.1 is upgraded to 12.3.
August 31, 2020
Cloud SQL for SQL Server
Feature
Cloud SQL for SQL Server supports cloning using the Cloud Console, the gcloud command, and the Cloud SQL Admin API. When you clone an instance, you create an independent copy of the source instance.
August 25, 2020
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL 8.0 is now generally available. If you have not used MySQL 8.0, familiarize yourself with the What is new in MySQL 8.0 and Changes in MySQL 8.0 .
For information about the implementation of MySQL 8.0 on Cloud SQL, see the following topics:
MySQL 8.0 authentication
Differences between Cloud SQL and standard MySQL functionality
Unsupported Cloud SQL feature in MySQL 8.0 for Cloud SQL
To get started using MySQL 8.0 on Cloud SQL, see Creating instances .
July 09, 2020
Cloud SQL for PostgreSQL
Feature
Cloud SQL now supports point-in-time recovery (PITR) for PostgreSQL . Point-in-time recovery helps you recover an instance to a specific point in time. For example, if an error causes a loss of data, you can recover a database to its state before the error occurred.
June 23, 2020
Cloud SQL for MySQL
Feature
Committed use discounts (CUDs) are now available to purchase for Cloud SQL. CUDs provide discounted prices in exchange for your commitment to use a minimum level of resources for a specified term. With committed use discounts for Cloud SQL, you can earn a deep discount off your cost of use in exchange for committing to continuously use database instances in a particular region for a 1- or 3-year term. See the documentation for more details.
Cloud SQL for PostgreSQL
Feature
Committed use discounts (CUDs) are now available to purchase for Cloud SQL. CUDs provide discounted prices in exchange for your commitment to use a minimum level of resources for a specified term. With committed use discounts for Cloud SQL, you can earn a deep discount off your cost of use in exchange for committing to continuously use database instances in a particular region for a 1- or 3-year term. See the documentation for more details.
Cloud SQL for SQL Server
Feature
Committed use discounts (CUDs) are now available to purchase for Cloud SQL. CUDs provide discounted prices in exchange for your commitment to use a minimum level of resources for a specified term. With committed use discounts for Cloud SQL, you can earn a deep discount off your cost of use in exchange for committing to continuously use database instances in a particular region for a 1- or 3-year term. See the documentation for more details.
June 08, 2020
Cloud SQL for MySQL
Feature
Support for asia-southeast2 region (Jakarta).
Cloud SQL for PostgreSQL
Feature
Support for asia-southeast2 region (Jakarta).
Cloud SQL for SQL Server
Feature
Support for asia-southeast2 region (Jakarta).
May 21, 2020
Cloud SQL for PostgreSQL
Feature
PostgreSQL version 12 is now generally available. To start using PostgreSQL 12, see Creating instances .
May 18, 2020
Cloud SQL for MySQL
Feature
MySQL 5.6 minor version is upgraded to 5.6.42. MySQL 5.7 minor version is upgraded to 5.7.25.
May 15, 2020
Cloud SQL for PostgreSQL
Feature
PostgreSQL 9.6 minor version is upgraded to 9.6.16.
PostgreSQL 10 minor version is upgraded to 10.11.
PostgreSQL 11 minor version is upgraded to 11.6.
PostgreSQL 12 minor version is upgraded to 12.1.
May 11, 2020
Cloud SQL for PostgreSQL
Feature
Cloud SQL has expanded support for PostgreSQL extensions. Eight additional PostgreSQL extensions are now available:
pageinspect
pgfincore
pg_freespacemap
pg_repack
pg_visibility
PL/Proxy
postgres_fdw
postgresql-hll
For information about these newly-added extensions, see PostgreSQL extensions .
May 04, 2020
Cloud SQL for MySQL
Deprecated
As previously announced , Cloud SQL First Generation was deprecated on January 29, 2019. All First Generation instances have been migrated to Second Generation. In the documentation and in the Google Cloud Console, "MySQL Second Generation instances" are now referred to simply as "MySQL instances." For general information about this deprecation, see the existing deprecation notice .
April 20, 2020
Cloud SQL for MySQL
Feature
Support for us-west4 region (Las Vegas).
Cloud SQL for PostgreSQL
Feature
Support for us-west4 region (Las Vegas).
Cloud SQL for SQL Server
Feature
Support for us-west4 region (Las Vegas).
March 27, 2020
Cloud SQL for PostgreSQL
Feature
PostgreSQL version 12 is now Beta. To start using PostgreSQL 12, see Creating instances .
Feature
PostgreSQL version 10 is now generally available. To start using PostgreSQL 10, see Creating instances .
March 24, 2020
Cloud SQL for MySQL
Feature
Cloud SQL now supports 96-core machine types for MySQL, Postgres, and SQL Server instances. For pricing-related information, see the Pricing page .
Cloud SQL for PostgreSQL
Feature
Cloud SQL now supports 96-core machine types for MySQL, Postgres, and SQL Server instances. For pricing-related information, see the Pricing page .
Cloud SQL for SQL Server
Feature
Cloud SQL now supports 96-core machine types for MySQL, Postgres, and SQL Server instances. For pricing-related information, see the Pricing page .
March 16, 2020
Cloud SQL for MySQL
Feature
Cloud SQL now supports read replicas in a different region than that of the primary instance, providing additional protection against regional outages and improving read performance by making replicas available closer to your application. To get started, see Cross-region replicas .
Cloud SQL instances using private IP are now accessible across regions, at the regular cross-region network egress cost.
Cloud SQL for PostgreSQL
Feature
Cloud SQL now supports read replicas in a different region than that of the primary instance, providing additional protection against regional outages and improving read performance by making replicas available closer to your application. To get started, see Cross-region replicas .
Cloud SQL instances using private IP are now accessible across regions, at the regular cross-region network egress cost.
Cloud SQL for SQL Server
Feature
Cloud SQL instances using private IP are now accessible across regions, at the regular cross-region network egress cost.
February 27, 2020
Cloud SQL for MySQL
Feature
MySQL 5.6.42 is now generally available in Cloud SQL. To start using MySQL 5.6.42, see Creating Instances .
February 24, 2020
Cloud SQL for MySQL
Feature
Support for us-west3 region (Salt Lake City).
Cloud SQL for PostgreSQL
Feature
Support for us-west3 region (Salt Lake City).
Cloud SQL for SQL Server
Feature
Support for us-west3 region (Salt Lake City).
February 19, 2020
Cloud SQL for SQL Server
Feature
Cloud SQL for SQL Server now is generally available.
Additionally, Cloud SQL for SQL Server includes new security and
performance enhancements. To create SQL Server instances, see
Creating Instances .
February 06, 2020
Cloud SQL for MySQL
Deprecated
First Generation instances no longer can be created. As previously announced , Cloud SQL First Generation was deprecated on January 29, 2019. To improve performance, availability, and storage capacity, Cloud SQL Second Generation has replaced First Generation. For more information, see the existing deprecation notice and, if necessary, the information about upgrading an instance .
January 30, 2020
Cloud SQL for PostgreSQL
Feature
PostgreSQL version 10 is now Beta. To start using PostgreSQL 10, see
Creating Instances .
January 24, 2020
Cloud SQL for MySQL
Feature
Support for asia-northeast3 region (Seoul).
Cloud SQL for PostgreSQL
Feature
Support for asia-northeast3 region (Seoul).
Cloud SQL for SQL Server
Feature
Support for asia-northeast3 region (Seoul).
December 17, 2019
Cloud SQL for MySQL
Feature
Cloud SQL now supports VPC Service Controls, which let you add a service perimeter around the Cloud SQL Admin API and host project for Cloud SQL instances to reduce the risk of data exfiltration. To learn more about using VPC Service Controls with Cloud SQL, see Configuring VPC Service Controls .
Cloud SQL for PostgreSQL
Feature
Cloud SQL now supports VPC Service Controls, which let you add a service perimeter around the Cloud SQL Admin API and host project for Cloud SQL instances to reduce the risk of data exfiltration. To learn more about using VPC Service Controls with Cloud SQL, see Configuring VPC Service Controls .
Cloud SQL for SQL Server
Feature
Cloud SQL now supports VPC Service Controls, which let you add a service perimeter around the Cloud SQL Admin API and host project for Cloud SQL instances to reduce the risk of data exfiltration. To learn more about using VPC Service Controls with Cloud SQL, see Configuring VPC Service Controls .
December 13, 2019
Cloud SQL for MySQL
Feature
Connection organization policies for Cloud SQL give you the ability to set policies that control access to and from Cloud SQL instances. To learn more about this feature, see Connection organization policies . To use this feature, see Setting organization policies for Cloud SQL .
Feature
You can now use Cloud VPN with Cloud SQL. To get started, see Using a VPN with Cloud SQL .
Cloud SQL for PostgreSQL
Feature
Connection organization policies for Cloud SQL give you the ability to set policies that control access to and from Cloud SQL instances. To learn more about this feature, see Connection organization policies . To use this feature, see Setting organization policies for Cloud SQL .
Feature
You can now use Cloud VPN with Cloud SQL. To get started, see Using a VPN with Cloud SQL .
Cloud SQL for SQL Server
Feature
Connection organization policies for Cloud SQL give you the ability to set policies that control access to and from Cloud SQL instances. To learn more about this feature, see Connection organization policies . To use this feature, see Setting organization policies for Cloud SQL .
Feature
You can now use Cloud VPN with Cloud SQL. To get started, see Using a VPN with Cloud SQL .
December 10, 2019
Cloud SQL for MySQL
Feature
Cloud SQL now offers notifications for upcoming maintenance. See the Overview of maintenance on Cloud SQL instances . To find out how to sign up for notifications and check your instances for upcoming maintenance, see Finding and setting maintenance windows .
Cloud SQL for PostgreSQL
Feature
Cloud SQL now offers notifications for upcoming maintenance. See the Overview of maintenance on Cloud SQL instances . To find out how to sign up for notifications and check your instances for upcoming maintenance, see Finding and setting maintenance windows .
Cloud SQL for SQL Server
Feature
Cloud SQL now offers notifications for upcoming maintenance. See the Overview of maintenance on Cloud SQL instances . To find out how to sign up for notifications and check your instances for upcoming maintenance, see Finding and setting maintenance windows .
November 25, 2019
Cloud SQL for MySQL
Feature
Cloud SQL now supports Access Transparency. As part of Google's long-term commitment to security and transparency, you can use Access Transparency, which provides you with logs of actions that Google staff have taken when accessing your data. To learn more about Access Transparency, see the Overview of Access Transparency .
Cloud SQL for PostgreSQL
Feature
Cloud SQL now supports Access Transparency. As part of Google's long-term commitment to security and transparency, you can use Access Transparency, which provides you with logs of actions that Google staff have taken when accessing your data. To learn more about Access Transparency, see the Overview of Access Transparency .
Cloud SQL for SQL Server
Feature
Cloud SQL now supports Access Transparency. As part of Google's long-term commitment to security and transparency, you can use Access Transparency, which provides you with logs of actions that Google staff have taken when accessing your data. To learn more about Access Transparency, see the Overview of Access Transparency .
November 19, 2019
Cloud SQL for MySQL
Feature
Cloud SQL now supports customer-managed encryption keys (CMEK). With CMEK, you can encrypt Cloud SQL instances using a key you manage. To learn more about CMEK, see the Overview of customer managed encryption keys (CMEK) . To start using CMEK, see Using customer-managed encryption keys (CMEK) .
Cloud SQL for PostgreSQL
Feature
Cloud SQL now supports customer-managed encryption keys (CMEK). With CMEK, you can encrypt Cloud SQL instances using a key you manage. To learn more about CMEK, see the Overview of customer managed encryption keys (CMEK) . To start using CMEK, see Using customer-managed encryption keys (CMEK) .
Cloud SQL for SQL Server
Feature
Cloud SQL now supports customer-managed encryption keys (CMEK). With CMEK, you can encrypt Cloud SQL instances using a key you manage. To learn more about CMEK, see the Overview of customer managed encryption keys (CMEK) . To start using CMEK, see Using customer-managed encryption keys (CMEK) .
October 18, 2019
Cloud SQL for MySQL
Feature
Cloud SQL Second Generation MySQL instances have a new high availability (HA) configuration. The new HA configuration, based on Google's Regional Disks , eliminates replication lag and, combined with automatic failover, provides isolation from many types of infrastructure, hardware, and software failures. Regional disks also ensure that all previously committed database transactions are persisted and available after failover, right up to the time of the failure.
The new high availability configuration is the default. You can continue to use the API to create instances with the legacy high availability configuration (using failover replicas) until the upgrade of existing instances occurs in early 2020. To learn how high availability now works for Second Generation MySQL instances, see the Overview of the high availability configuration . To enable high availability on existing instances, or to create new instances with high availability, see Enabling and disabling high availability on an instance .
October 15, 2019
Cloud SQL for SQL Server
Feature
The beta version of Cloud SQL for SQL Server is available. To begin creating SQL Server instances, see Creating Instances .
September 27, 2019
Cloud SQL for PostgreSQL
Feature
PostgreSQL version 11 is now generally available. PostgreSQL 11 is the default version when creating new instances. To start using PostgreSQL 11, see Creating Instances .
June 25, 2019
Cloud SQL for MySQL
Feature
This release increases the maximum data storage for instances of MySQL (MySQL Second Generation) and PostgreSQL. The maximum data storage is increased from 10,230 GB to 30,720 GB. For Cloud SQL storage limits, see Limits . You can limit your automatic storage increases; see Automatic storage increase limit .
Cloud SQL for PostgreSQL
Feature
This release increases the maximum data storage for instances of MySQL (MySQL Second Generation) and PostgreSQL. The maximum data storage is increased from 10,230 GB to 30,720 GB. For Cloud SQL storage limits, see Limits . You can limit your automatic storage increases; see Automatic storage increase limit .
May 24, 2019
Cloud SQL for MySQL
Feature
Cloud SQL now allows you to specify a location for backups, and to restrict data to a single region. To learn about custom backup locations, see Custom backup locations . To learn how to set a custom location for a backup, see Setting and viewing a custom location for backups .
Cloud SQL for PostgreSQL
Feature
Cloud SQL now allows you to specify a location for backups, and to restrict data to a single region. To learn about custom backup locations, see Custom backup locations . To learn how to set a custom location for a backup, see Setting and viewing a custom location for backups .
April 18, 2019
Cloud SQL for MySQL
Feature
Support for asia-northeast2 region (Osaka, Japan).
Cloud SQL for PostgreSQL
Feature
Support for asia-northeast2 region (Osaka, Japan).
April 09, 2019
Cloud SQL for PostgreSQL
Feature
Cloud SQL now supports PostgreSQL version 11.1 Beta. To start using PostgreSQL 11 Beta, see Creating Instances .
April 03, 2019
Cloud SQL for MySQL
Feature
Support added for 122 MySQL flags and 96 PostgreSQL flags. See Supported PostgreSQL Flags and Supported MySQL Flags .
Cloud SQL for PostgreSQL
Feature
Support added for 122 MySQL flags and 96 PostgreSQL flags. See Supported PostgreSQL Flags and Supported MySQL Flags .
March 11, 2019
Cloud SQL for MySQL
Feature
Support for europe-west6 region (Zürich, Switzerland).
Cloud SQL for PostgreSQL
Feature
Support for europe-west6 region (Zürich, Switzerland).
February 13, 2019
Cloud SQL for PostgreSQL
Change
Cloud SQL for PostgreSQL connection limits are now double when memory is 6 GiB or higher. See the connection limits table for details.
January 29, 2019
Cloud SQL for MySQL
Feature
Cloud SQL Second Generation is replacing First Generation. Support for First Generation instances for MySQL is ending March 25th, 2020.
December 06, 2018
Cloud SQL for MySQL
Feature
GA support for Private IP connectivity .
Cloud SQL for PostgreSQL
Feature
GA support for Private IP connectivity .
November 06, 2018
Cloud SQL for PostgreSQL
Feature
Support for CSV format for PostgreSQL instance imports and exports .
October 01, 2018
Cloud SQL for MySQL
Feature
Upgrade to Second Generation generally available for eligible First Generation MySQL instances.
Feature
Support for asia-east2 region (Hong Kong).
Cloud SQL for PostgreSQL
Feature
Support for asia-east2 region (Hong Kong).
September 01, 2018
Cloud SQL for MySQL
Feature
Beta support for private IP (private services access) connectivity.
Change
Proxy version 1.12 released.
Cloud SQL for PostgreSQL
Feature
Beta support for private IP (private services access) connectivity.
Change
Proxy version 1.12 released.
August 01, 2018
Cloud SQL for PostgreSQL
Change
PostGIS extension includes full support for JSON-C.
July 01, 2018
Cloud SQL for MySQL
Feature
Support for us-west2 region (Los Angeles).
Feature
Support for replication from an external MySQL server to a Cloud SQL Second Generation replica .
Cloud SQL for PostgreSQL
Feature
Support for us-west2 region (Los Angeles).
June 01, 2018
Cloud SQL for MySQL
Feature
Support for europe-north1 region (Finland).
Feature
Support for rotating SSL certificates .
Feature
Support for connecting from Cloud Functions Beta .
Cloud SQL for PostgreSQL
Feature
Support for connecting from Cloud Functions Beta .
Feature
Support for rotating SSL certificates .
Feature
Support for europe-north1 region (Finland).
May 01, 2018
Cloud SQL for MySQL
Feature
Support for asia-southeast1 region (Singapore).
Cloud SQL for PostgreSQL
Feature
Support for asia-southeast1 region (Singapore).
April 01, 2018
Cloud SQL for PostgreSQL
Feature
GA support for Cloud SQL for PostgreSQL .
March 01, 2018
Cloud SQL for MySQL
Feature
Support for europe-west4 region (Netherlands).
Cloud SQL for PostgreSQL
Feature
Support for europe-west4 region (Netherlands).
February 01, 2018
Cloud SQL for MySQL
Change
Maximum concurrent connections to App Engine updated from 12 to 60.
Cloud SQL for PostgreSQL
Change
Maximum concurrent connections to App Engine updated from 12 to 60.
January 01, 2018
Cloud SQL for MySQL
Feature
Support for northamerica-northeast1 region (Montréal).
Change
MySQL 5.6 minor version upgraded to 5.6.36.
Cloud SQL for PostgreSQL
Change
Connection limits for PostgreSQL instances changed. Learn more .
Feature
Support for northamerica-northeast1 region (Montréal).
Change
MySQL 5.6 minor version upgraded to 5.6.36.
November 01, 2017
Cloud SQL for MySQL
Feature
Beta support for the high availability configuration and replication for PostgreSQL instances.
Cloud SQL for PostgreSQL
Feature
Beta support for the high availability configuration and replication for PostgreSQL instances.
October 01, 2017
Cloud SQL for MySQL
Feature
Support for asia-south1 region (Mumbai).
Change
Proxy version 1.11 released.
Cloud SQL for PostgreSQL
Feature
Support for asia-south1 region (Mumbai).
Change
Proxy version 1.11 released.
September 01, 2017
Cloud SQL for MySQL
Feature
Support for 64-core machine types for MySQL instances and 64 cores for PostgreSQL instances.
Feature
Support for southamerica-east1 region (São Paulo).
Cloud SQL for PostgreSQL
Feature
Support for 64-core machine types for MySQL instances and 64 cores for PostgreSQL instances.
Feature
Support for southamerica-east1 region (São Paulo).
August 01, 2017
Cloud SQL for MySQL
Feature
Support for europe-west3 region (Frankfurt).
Cloud SQL for PostgreSQL
Feature
Support for europe-west3 region (Frankfurt).
June 01, 2017
Cloud SQL for MySQL
Feature
Support for labels .
Change
Proxy version 1.10 released.
Feature
Support for europe-west2 region (London).
Feature
Support for australia-southeast1 region (Sydney).
Cloud SQL for PostgreSQL
Feature
Support for the JDBC Socket Library for PostgreSQL .
Feature
Support for the following PostgreSQL extensions : btree-gin , btree-gist , chkpass , citext , cube , dict_int , dict_xsyn , earthdistance , intagg , intarray , isn , ltree , pgstattuple , pg_trgm , tablefunc , tsm_system_rows , tsm_system_time , unaccent , uuid-ossp .
Feature
Support for australia-southeast1 region (Sydney).
Feature
Support for labels .
Change
Proxy version 1.10 released.
Feature
Support for europe-west2 region (London).
May 01, 2017
Cloud SQL for MySQL
Feature
Support for us-east4 region (Northern Virginia).
Feature
GA support for Second Generation and PostgreSQL instances in version 157.0.0 of the gcloud command-line tool. The beta version is no longer required for these instances.
Feature
Support for us-west1 region (Oregon).
Cloud SQL for PostgreSQL
Feature
GA support for Second Generation and PostgreSQL instances in version 157.0.0 of the gcloud command-line tool. The beta version is no longer required for these instances.
Feature
Support for us-west1 region (Oregon).
Feature
Support for us-east4 region (Northern Virginia).
April 01, 2017
Cloud SQL for MySQL
Change
Proxy version 1.09 released.
Cloud SQL for PostgreSQL
Change
Proxy version 1.09 released.
March 01, 2017
Cloud SQL for MySQL
Feature
Support for making MySQL general and slow query log files available through the Stackdriver Log Viewer .
Feature
Support for 32-core machine types for MySQL instances.
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL Beta availability.
To provide feedback on the beta release, go to our Cloud SQL user forum .
February 01, 2017
Cloud SQL for MySQL
Feature
Support for Identity and Access Management (IAM) predefined roles .
December 01, 2016
Cloud SQL for MySQL
Feature
Support for administration of users and databases for Second Generation instances in the Google Cloud Console and the Cloud SQL API.
November 01, 2016
Cloud SQL for MySQL
Feature
Support for Northeastern Asia Pacific region ( asia-northeast1 ).
Change
MySQL 5.7 minor version upgraded to 5.7.14.
August 01, 2016
Cloud SQL for MySQL
Feature
Cloud SQL Second Generation General Availability.
Up to 16 cores and 104 GB RAM .
SSD or HDD storage option with optional automatic storage increase capability .
Optional high availability configuration (recommended for all production instances).
Configurable maintenance window and maintenance timing .
MySQL compatibility:
MySQL 5.6 (5.6.31) and 5.7 (5.7.11)
InnoDB storage engine
GTID support
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
