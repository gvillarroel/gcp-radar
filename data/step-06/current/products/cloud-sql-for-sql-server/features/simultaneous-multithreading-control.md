---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.693Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Simultaneous multithreading control"
feature_slug: "simultaneous-multithreading-control"
latest_feature_date: "2023-05-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "simultaneous"
  - "multithreading"
  - "control"
  - "sql"
  - "lets"
  - "you"
  - "disable"
  - "when"
---

# Simultaneous multithreading control

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL lets you disable simultaneous multithreading when creating or editing instances and read replicas.

## Extended Definition

Cloud SQL lets you disable simultaneous multithreading when creating or editing instances and read replicas.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 32 vCPUs, 3.75 GB to 208 GB SQL Server 2017 Standard, SQL Server 2019 Standard, SQL Server 2022 Standard, and SQL Server 2025 Standard Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 48 vCPUs, 3.75 GB to 312 GB SQL Server 2017 Enterprise, SQL Server 2019 Enterprise, SQL Server 2022 Enterprise, and SQL Server 2025 Enterprise Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 2 to 96 vCPUs, 3.75 GB to 624 GB Performance-optimized (Cloud SQL Enterprise Plus only) 2 vCPUs, 16 GB 4 vCPUs, 32 GB 8 vCPUs, 64 GB 16 vCPUs, 128 GB 32 vCPUs, 256 GB 48 vCPUs, 384 GB 64 vCPUs, 512 GB 80 vCPUs, 640 GB 96 vCPUs, 768 GB 128 vCPUs, 864 GB Memory-optimized (Cloud SQL Enterprise Plus only) 4 vCPUs, 128 GB 8 vCPUs, 256 GB 16 vCPUs, 512 GB Simultaneous multithreading Simultaneous multithreading (SMT) on Cloud SQL for SQL Server lets you run two virtual CPUs (vCPUs) as independent, separate threads on one physical core.
- Choose between Cloud SQL Enterprise Plus edition and Cloud SQL Enterprise edition When creating a Cloud SQL for SQL Server instance, you choose the machine configuration from several different machine families, depending on the Cloud SQL edition.
- When selecting the number of CPUs and amount of memory, there are some restrictions on the configuration that you choose: The number of vCPUs that you can configure for your instance is based on your SQL server version.
- Maintenance schedule Maintenance window --maintenance-window-day , --maintenance-window-hour Determines a one-hour window when Cloud SQL can perform disruptive maintenance on your instance.

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- May 02, 2023 Feature You can now disable simultaneous multithreading (SMT) while creating or editing instances and read replicas.
- You want to gain more control over when maintenance is applied Feature Cloud SQL now supports maintenance changelogs.
- The functions include (and are not limited to) the following: cdc.fn cdc get all changes <capture instance> Sys.fn cdc get max lsn To turn on this feature for a database, run this command: exec msdb .[ dbo ].[ gcloudsql cdc enable db ] 'demo' To turn off this feature for a database, run this command: exec msdb.[dbo].[gcloudsql cdc disable db] 'demo' Feature Cloud SQL for SQL Server enables you to perform common operations on a tempdb database .
- Specifically, the user has the CONTROL permission on the tempdb database, and can do many operations, including (and not limited to) the following: ALTER DATABASE [ tempdb ] ADD FILE ALTER DATABASE [ tempdb ] REMOVE March 29, 2021 Feature You can integrate Cloud SQL for SQL Server with Managed Service for Microsoft Active Directory.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Cloud SQL for MySQL Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.
- Cloud SQL for SQL Server Feature You can now disable simultaneous multithreading (SMT) while creating or editing instances and read replicas.
- February 13, 2025 Cloud SQL for MySQL Feature Cloud SQL for MySQL lets you recreate a lagging replica when replication falls behind a predefined length of time.
- Feature Cloud SQL now supports near-zero downtime when you enable or disable data cache for Cloud SQL Enterprise Plus edition primary instances.

