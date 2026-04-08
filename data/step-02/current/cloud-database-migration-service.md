# Cloud Database Migration Service

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 63
Unique features: 63

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-30 | Selective database migration for homogeneous MySQL jobs |  | Database Migration Service added the ability for homogeneous MySQL migrations to migrate individually selected source databases within a migration job. |
| 2026-02-27 | Additional conversion directives for Oracle/SQL Server to PostgreSQL migrations |  | Heterogeneous migrations now support RENAME, MOVE, CASE_HANDLING, and GENERATE_MISSING_PK directives to control Oracle and SQL Server object conversion to PostgreSQL. |
| 2025-11-18 | One-time migration mode for heterogeneous migrations |  | Database Migration Service added one-time migration support across all heterogeneous migration scenarios. |
| 2025-11-18 | PostgreSQL 18 source support for homogeneous PostgreSQL-to-Cloud SQL migrations |  | Homogeneous PostgreSQL migrations to Cloud SQL for PostgreSQL now support PostgreSQL version 18. |
| 2025-11-05 | MySQL 8.0.43 support for homogeneous MySQL-to-Cloud SQL migrations |  | Database Migration Service added support for MySQL version 8.0.43 in homogeneous MySQL migrations to Cloud SQL for MySQL. |
| 2025-10-30 | Private Service Connect source connectivity for heterogeneous migrations |  | Heterogeneous Oracle and SQL Server migration scenarios now support Private Service Connect interfaces for source network connectivity. |
| 2025-09-05 | Table-level observability for heterogeneous Oracle and SQL Server migrations |  | Migration job observability now includes per-table progress monitoring in addition to aggregate database-level metrics for heterogeneous Oracle and SQL Server migrations. |
| 2025-08-18 | PostgreSQL 17 source support for homogeneous PostgreSQL-to-AlloyDB migrations |  | Homogeneous PostgreSQL migrations to AlloyDB for PostgreSQL now support PostgreSQL version 17. |
| 2025-08-14 | Private Service Connect network connectivity for homogeneous migrations |  | Homogeneous migrations to Cloud SQL for MySQL, Cloud SQL for PostgreSQL, and AlloyDB for PostgreSQL now support Private Service Connect interfaces for network connectivity. |
| 2025-06-16 | Conversion workspace dashboards and issue grouping improvements |  | Heterogeneous Oracle and SQL Server migrations now include improved conversion overview dashboards and better grouping of conversion issues. |
| 2025-05-22 | MySQL 8.0.42 minor version support for homogeneous MySQL migrations |  | Database Migration Service now supports MySQL minor version 8.0.42 for homogeneous MySQL migrations. |
| 2025-05-08 | Enhanced concurrency configuration for heterogeneous SQL Server migration jobs |  | Heterogeneous SQL Server migration jobs now support additional concurrency controls, including full dump configuration and maximum concurrent connection settings. |
| 2025-04-24 | Heterogeneous PostgreSQL version support for Cloud SQL and AlloyDB migrations |  | Database Migration Service now supports PostgreSQL 16 and 17 for heterogeneous migrations from Oracle and SQL Server to Cloud SQL for PostgreSQL, with PostgreSQL 16 also available for migrations to AlloyDB for PostgreSQL. |
| 2025-04-09 | Gemini-powered auto-conversion preview for heterogeneous migrations |  | Gemini-powered auto-conversion is now available in Preview for all heterogeneous migration scenarios to speed database code and schema conversion. |
| 2025-03-14 | Support for MySQL 8.0.41 in homogeneous MySQL migrations |  | Database Migration Service now supports MySQL minor version 8.0.41 for homogeneous MySQL migrations. |
| 2025-02-26 | Per-database migration for homogeneous Cloud SQL for PostgreSQL |  | The service now allows specific databases to be migrated individually in homogeneous Cloud SQL for PostgreSQL migrations with separate metrics, status, and error views. |
| 2025-02-14 | Per-database migration for homogeneous AlloyDB for PostgreSQL |  | Homogeneous AlloyDB for PostgreSQL migrations now support migrating specific databases individually with per-database metrics, status, and error visibility. |
| 2025-02-14 | Per-database operations for homogeneous Cloud SQL for SQL Server migrations |  | For homogeneous Cloud SQL for SQL Server migrations, users can now promote, restart, and view additional metrics at the individual database level. |
| 2025-01-13 | Microsoft Azure source support for homogeneous Cloud SQL migrations |  | Database Migration Service now supports Microsoft Azure as a source for homogeneous MySQL and PostgreSQL migrations to Cloud SQL. |
| 2025-01-09 | Public IP allowlist connectivity for AlloyDB for PostgreSQL migrations |  | Public IP allowlist network connectivity is now supported for both homogeneous and heterogeneous migrations to AlloyDB for PostgreSQL. |
| 2024-12-24 | Support for PostgreSQL 17 in homogeneous Cloud SQL for PostgreSQL migrations |  | Database Migration Service now supports PostgreSQL version 17 for homogeneous migrations to Cloud SQL for PostgreSQL. |
| 2024-12-12 | Support for MySQL 8.0.40 in homogeneous MySQL migrations |  | Database Migration Service now supports MySQL minor version 8.0.40 for homogeneous MySQL migrations. |
| 2024-11-18 | Source/destination role selection for migration connection profiles |  | Connection profiles can now be explicitly selected as source or destination and display configuration options tailored to that role. |
| 2024-11-07 | Support for MySQL 8.0.39 in homogeneous MySQL migrations |  | Database Migration Service now supports MySQL minor version 8.0.39 for homogeneous MySQL migrations. |
| 2024-10-21 | Database Migration Service heterogeneous Oracle migration concurrency settings |  | Database Migration Service now provides additional concurrency settings for heterogeneous Oracle migration jobs, including full dump and maximum concurrent connection options. |
| 2024-10-10 | Database Migration Service homogeneous MySQL to Cloud SQL for MySQL 8.4 support |  | Homogeneous MySQL-to-Cloud SQL for MySQL migrations now support MySQL version 8.4 in Database Migration Service. |
| 2024-09-24 | Database Migration Service homogeneous PostgreSQL to AlloyDB for PostgreSQL 16 support |  | Homogeneous PostgreSQL migrations to AlloyDB for PostgreSQL now support PostgreSQL version 16 in Database Migration Service. |
| 2024-08-30 | Database Migration Service homogeneous SQL Server migration differential backup support |  | Database Migration Service for homogeneous migrations to Cloud SQL for SQL Server now supports differential backup files. |
| 2024-08-13 | Database Migration Service MySQL minor version migration support to 8.0.37 |  | Database Migration Service now supports migrations to Cloud SQL for MySQL minor version 8.0.37. |
| 2024-07-29 | Database Migration Service Percona XtraBackup physical backup migrations for MySQL |  | Database Migration Service now generally offers support for homogeneous MySQL migrations to Cloud SQL for MySQL using Percona XtraBackup physical backup files. |
| 2024-07-25 | Database Migration Service Gemini conversion assistant for conversion workspaces |  | The Gemini conversion assistant is now available in preview for conversion workspaces in Database Migration Service. |
| 2024-07-03 | Database Migration Service heterogeneous Oracle to AlloyDB Private Service Connect support |  | Heterogeneous Oracle migrations to AlloyDB for PostgreSQL now support network connectivity via Private Service Connect for supported AlloyDB clusters. |
| 2024-06-17 | Database Migration Service Promote action on migration job details page for Oracle |  | Database Migration Service now allows users to finalize heterogeneous Oracle migrations by using the Promote action directly on the migration job details page. |
| 2024-06-10 | Database Migration Service homogeneous PostgreSQL to Cloud SQL for PostgreSQL 16 support |  | Homogeneous PostgreSQL migrations to Cloud SQL for PostgreSQL now support PostgreSQL version 16 in Database Migration Service. |
| 2024-06-06 | Database Migration Service heterogeneous Oracle migration observability logging |  | Database Migration Service for heterogeneous Oracle migrations now includes additional logging information to improve health and progress monitoring. |
| 2024-06-06 | Database Migration Service skip foreign keys and triggers for Oracle migrations |  | Heterogeneous Oracle migrations in Database Migration Service now can skip foreign keys and triggers without requiring them to be dropped from the destination. |
| 2024-05-22 | MySQL 8.0.36 target version support |  | Cloud Database Migration Service now supports migrations to MySQL minor version 8.0.36. |
| 2024-04-19 | Read-replica destination support for homogeneous Cloud SQL migrations |  | Database Migration Service now supports homogeneous MySQL and PostgreSQL migrations to existing destination Cloud SQL instances that have read replicas enabled. |
| 2024-04-05 | Percona XtraBackup physical-file migration for MySQL |  | Cloud Database Migration Service now supports using Percona XtraBackup physical backup files for homogeneous MySQL-to-Cloud SQL for MySQL migrations. |
| 2024-03-29 | High-performance parallel migration for large PostgreSQL-to-AlloyDB transfers |  | Cloud Database Migration Service now supports faster migrations of large PostgreSQL databases to AlloyDB for PostgreSQL using high-performance parallelism settings. |
| 2024-03-27 | High-performance parallel migration for large PostgreSQL-to-Cloud SQL transfers |  | Cloud Database Migration Service now supports faster migrations of large PostgreSQL databases to Cloud SQL for PostgreSQL using high-performance parallelism settings. |
| 2024-03-27 | Running-with-errors status for heterogeneous Oracle migration jobs |  | Cloud Database Migration Service now exposes a Running with errors migration job status for heterogeneous Oracle-to-PostgreSQL migrations. |
| 2024-01-11 | Support for up to 30 MB row size in Oracle to PostgreSQL migrations |  | Cloud Database Migration Service now supports row sizes up to 30 MB for Oracle-to-Cloud SQL for PostgreSQL and Oracle-to-AlloyDB for PostgreSQL migrations. |
| 2024-01-07 | MySQL 8.0.35 target version support |  | Cloud Database Migration Service now supports migrations to MySQL minor version 8.0.35. |
| 2023-12-14 | Migration jobs to externally provisioned destinations |  | You can now migrate MySQL and PostgreSQL databases to Cloud SQL instances or AlloyDB clusters that were created outside Database Migration Service. |
| 2023-12-13 | PostgreSQL 15 target support for AlloyDB migrations |  | Database Migration Service now supports selecting PostgreSQL version 15 when migrating to AlloyDB for PostgreSQL. |
| 2023-12-11 | General MySQL minor version migration support |  | Database Migration Service now supports MySQL minor versions for migrations to Cloud SQL for MySQL. |
| 2023-11-10 | Cloud SQL for PostgreSQL data cache creation in migration jobs |  | Cloud Database Migration Service now supports enabling data cache during migration job creation for Cloud SQL for PostgreSQL Enterprise Plus instances. |
| 2023-09-18 | Cloud Database Migration Service CMEK support with Cloud External Key Manager |  | Cloud Database Migration Service supports customer-managed encryption keys (CMEK) using externally managed keys from Cloud External Key Manager. |
| 2023-08-30 | Oracle-to-Cloud SQL for PostgreSQL integrated code and schema conversion preview |  | Cloud Database Migration Service introduced preview support for integrated code and schema conversion with conversion workspaces and an inline editor for Oracle to Cloud SQL for PostgreSQL migrations. |
| 2023-07-27 | High-performance dump option for large MySQL-to-Cloud SQL for MySQL migrations |  | Cloud Database Migration Service added faster migration support for large MySQL databases to Cloud SQL for MySQL via a high-performance dump option. |
| 2023-05-02 | Faster PostgreSQL-to-Cloud SQL for PostgreSQL migration performance |  | Cloud Database Migration Service improved migration performance from PostgreSQL source databases to Cloud SQL for PostgreSQL, including data and constraints such as primary keys, foreign keys, and indexes. |
| 2023-04-17 | Oracle multi-tenant (CDB/PDB) architecture support |  | Cloud Database Migration Service added support for Oracle multi-tenant (CDB/PDB) architectures and migration of pluggable databases. |
| 2023-04-06 | Cascading read replica setup for Cloud SQL migration targets |  | Cloud Database Migration Service enables setting up cascading read replicas after migration to Cloud SQL for MySQL or Cloud SQL for PostgreSQL destinations. |
| 2023-01-19 | Oracle-to-Cloud SQL for PostgreSQL migration support in Public Preview |  | Cloud Database Migration Service added Public Preview support for migrating Oracle workloads to Cloud SQL for PostgreSQL. |
| 2022-12-13 | High availability migration instances for MySQL and PostgreSQL |  | Cloud Database Migration Service added high availability (HA) instance support for MySQL and PostgreSQL database migrations. |
| 2022-09-15 | PostgreSQL-to-AlloyDB for PostgreSQL migration support |  | Cloud Database Migration Service added support for migrating PostgreSQL workloads to AlloyDB for PostgreSQL. |
| 2022-06-24 | Migration of PostgreSQL tables without primary keys |  | Cloud Database Migration Service introduced support for initial snapshot and INSERT CDC migration of PostgreSQL tables that lack primary keys. |
| 2022-04-04 | Oracle-to-Cloud SQL for PostgreSQL migration support |  | Cloud Database Migration Service added support for migrating Oracle workloads into Cloud SQL for PostgreSQL. |
| 2022-03-16 | Cloud SQL for PostgreSQL version 14 migration support |  | Cloud Database Migration Service added support for Cloud SQL for PostgreSQL version 14 migrations. |
| 2022-03-10 | Cloud SQL for MySQL dump flag customization in Database Migration Service |  | Database Migration Service added support for adding dump flags to customize data dumps in Cloud SQL for MySQL migration jobs. |
| 2021-12-16 | Customer-managed encryption key (CMEK) support for Cloud SQL instances created by Database Migration Service |  | Database Migration Service added support for creating Cloud SQL for MySQL, Cloud SQL for PostgreSQL, and Cloud SQL for SQL Server instances with customer-managed encryption keys (CMEK) enabled. |
| 2021-07-29 | Cloud SQL for PostgreSQL as a source in Database Migration Service |  | Database Migration Service added support for using Cloud SQL for PostgreSQL as a source in PostgreSQL migrations. |

Source file slug: `cloud-database-migration-service.md`

