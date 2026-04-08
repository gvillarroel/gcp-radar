# Cloud SQL for SQL Server

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 184
Unique features: 176

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-04-02 | Read pools |  | Read pools provide a single load-balanced read endpoint in front of up to seven read pool nodes for scaling read workloads. |
| 2026-03-17 | Cross-project point-in-time recovery |  | Cross-project point-in-time recovery lets you restore a Cloud SQL instance to a different project than the source instance or backup vault project. |
| 2026-03-17 | Multi-region backup vaults |  | Multi-region backup vaults store enhanced backup data in multi-region locations for higher availability and regional outage protection. |
| 2026-03-13 | Automatic server certificate rotation |  | Automatic server certificate rotation rotates server certificates automatically for instances that use Certificate Authority Service. |
| 2026-02-23 | Gemini Cloud Assist investigation capabilities |  | Gemini Cloud Assist investigation capabilities help troubleshoot Cloud SQL issues with AI-assisted investigation workflows. |
| 2026-02-18 | Organization policy control for MCP services | 2026-03-17 | Organization policy control for MCP services lets administrators restrict MCP use with the gcp.managed.allowedMCPServices constraint; deprecated on 2026-03-17. |
| 2026-02-09 | Cloud SQL remote MCP server |  | The Cloud SQL remote MCP server lets LLMs, AI applications, and AI-enabled development platforms interact with Cloud SQL instances. |
| 2026-02-02 | Server CA mode update |  | Server CA mode update lets you change an existing instance from per-instance CA to shared CA or customer-managed CA. |
| 2025-12-16 | Enhanced backups |  | Enhanced backups centralize backup management in a backup management project using Backup and DR with enforced retention and granular scheduling. |
| 2025-12-16 | Point-in-time recovery after instance deletion |  | Point-in-time recovery after instance deletion lets you recover an instance even after it has been deleted. |
| 2025-12-11 | Microsoft Entra ID integration |  | Microsoft Entra ID integration provides centralized identity and access management for databases using an existing Entra ID tenant. |
| 2025-10-29 | Customer-managed Active Directory integration |  | Customer-managed Active Directory integration lets instances join a CMAD domain for authentication and authorization with Windows Authentication. |
| 2025-10-17 | N4 machine series support |  | N4 machine series support adds a balanced price-to-performance machine family with Hyperdisk Balanced storage and custom machine types. |
| 2025-10-06 | Advanced disaster recovery for PSC-enabled Enterprise Plus instances |  | Advanced disaster recovery adds cross-region disaster recovery replicas, failover, and zero-data-loss switchover for PSC-enabled Enterprise Plus instances. |
| 2025-09-29 | Gemini query error fixing in Cloud SQL Studio |  | Gemini query error fixing in Cloud SQL Studio helps repair SQL query errors with AI assistance. |
| 2025-09-23 | Gemini CLI extension for Cloud SQL for SQL Server |  | The Gemini CLI extension lets you provision, manage, and query Cloud SQL for SQL Server databases from the command line. |
| 2025-09-23 | Retained PITR logs after instance deletion |  | Retained PITR logs after instance deletion preserve recovery logs for a defined period so deleted instances can be restored to a specific point in time. |
| 2025-09-08 | Automatic Private Service Connect endpoint creation |  | Automatic Private Service Connect endpoint creation provisions a PSC endpoint automatically for accessing Cloud SQL instances through a VPC network; Cloud SQL can automatically create a Private Service Connect endpoint for instance access through a VPC network. |
| 2025-09-03 | Final backup settings |  | Final backup settings let you take a backup at instance deletion, define its retention period, and enforce settings with organization policy. |
| 2025-08-29 | MAXDOP database flag |  | The MAXDOP database flag limits the maximum number of threads used to run a single query in a parallel plan. |
| 2025-08-21 | Saved queries in Cloud SQL Studio |  | Saved queries in Cloud SQL Studio let you store and manage SQL queries within the studio interface. |
| 2025-08-15 | Deny maintenance period for outdated maintenance versions | 2025-08-15 | Deny maintenance period configuration lets you block maintenance during a specified period for an instance; deprecated on 2025-08-15. |
| 2025-08-15 | IPv6 endpoints for Private Service Connect |  | IPv6 endpoints for Private Service Connect let you create IPv6 PSC connections to Cloud SQL instances. |
| 2025-08-15 | Private Service Connect backends |  | Private Service Connect backends provide an alternative to PSC endpoints for accessing Cloud SQL instances. |
| 2025-08-13 | Private Service Connect outbound connectivity |  | Private Service Connect outbound connectivity lets PSC-enabled Cloud SQL instances make outbound connections to your network through a PSC interface. |
| 2025-08-07 | Near-zero downtime maintenance and machine tier upgrades |  | Near-zero downtime maintenance and machine tier upgrades reduce disruption for eligible Cloud SQL Enterprise Plus instances during maintenance and tier changes. |
| 2025-07-31 | Backup service selection |  | Backup service selection lets you choose between enhanced backups and standard backups and switch between them as needed. |
| 2025-07-08 | Active Directory support for write endpoints |  | Active Directory support for write endpoints enables AD-based access for Cloud SQL write endpoints across forests. |
| 2025-05-28 | Maximum server memory recommender |  | The maximum server memory recommender helps optimize SQL Server memory allocation by recommending appropriate max server memory settings. |
| 2025-05-22 | Combined private services access and Private Service Connect |  | Combined private services access and Private Service Connect lets an instance use both connectivity models at the same time; Combined private services access and Private Service Connect lets an instance be created or updated to use both connectivity models. |
| 2025-05-14 | TLS connections to Active Directory endpoints without server certificate trust |  | This capability enables TLS connections to Active Directory endpoints without requiring trusted server certificates or IP-address-based access. |
| 2025-05-05 | AI-assisted troubleshooting |  | AI-assisted troubleshooting provides guided diagnosis of complex database performance issues such as slow queries and high load. |
| 2025-05-02 | Custom subject alternative name configuration |  | Custom subject alternative name configuration lets you assign custom DNS names to instances by configuring certificate SAN values; Custom subject alternative name configuration lets you add, modify, and remove custom DNS names for instances using Customer Managed CAS CA. |
| 2025-05-01 | Customer-managed CA mode |  | Customer-managed CA mode lets you use your own Certificate Authority Service CA hierarchy for Cloud SQL server certificates; Customer-managed CA mode lets you configure a Certificate Authority Service CA pool and CA as the server certificate authority for an instance. |
| 2025-05-01 | Shared CA mode |  | Shared CA mode lets instances use a Google-managed shared certificate authority hierarchy for server certificates. |
| 2025-04-24 | Private Service Connect endpoint propagation |  | Private Service Connect endpoint propagation uses Network Connectivity Center to propagate Cloud SQL PSC endpoints across VPC networks; Private Service Connect endpoint propagation uses Network Connectivity Center to make Cloud SQL PSC endpoints transitively accessible across spoke VPC networks. |
| 2025-04-09 | Query insights |  | Query insights provides query performance visibility, including top query details, plans, and statistical execution charts; Query insights provides dashboards for detecting query problems and monitoring query performance in Cloud SQL databases. |
| 2025-04-07 | Enterprise Plus recommender |  | The Enterprise Plus recommender identifies SQL Server instances that may gain performance improvements by upgrading to Enterprise Plus edition. |
| 2025-03-28 | SQL Server 2022 Standard default version |  | SQL Server 2022 Standard becomes the default version when creating a Cloud SQL for SQL Server instance. |
| 2025-03-24 | Retained backups after instance deletion |  | Retained backups after instance deletion preserve on-demand and automatic backups created before the instance was deleted. |
| 2025-03-24 | Transaction log export |  | Transaction log export lets you export PITR transaction logs for Cloud SQL for SQL Server instances to Cloud Storage. |
| 2025-03-17 | Transparent data encryption |  | Transparent data encryption automatically encrypts data written to storage and decrypts it when read for Cloud SQL for SQL Server instances. |
| 2025-03-14 | Point-in-time recovery for unavailable instances |  | Point-in-time recovery for unavailable instances lets you restore a Cloud SQL for SQL Server instance even when it is not available. |
| 2025-03-04 | Enterprise edition support in europe-north2 |  | Enterprise edition support in europe-north2 adds Cloud SQL Enterprise availability in the Stockholm region. |
| 2025-02-20 | Final backup before instance deletion |  | Final backup before instance deletion lets you create a last backup that can be used to restore data to a new instance after deletion. |
| 2025-01-17 | tempdb file size control |  | Tempdb file size control lets you manage the file size of the SQL Server tempdb database. |
| 2024-12-20 | Active queries |  | Active queries lets you monitor currently running queries in the Query insights dashboard. |
| 2024-12-20 | Index advisor |  | Index advisor provides recommendations to improve query performance through indexing guidance. |
| 2024-12-20 | Query insights for Enterprise Plus |  | Query insights for Enterprise Plus adds 30 days of metrics retention, granular query plan details, and a higher query length limit. |
| 2024-12-20 | System insights |  | System insights provides console dashboards for monitoring instance resource metrics and analyzing system performance. |
| 2024-12-05 | Enterprise Plus regional expansion |  | Enterprise Plus regional expansion adds support in africa-south1, asia-east2, and europe-west10. |
| 2024-11-18 | northamerica-south1 region availability |  | Cloud SQL for SQL Server instances are available in the northamerica-south1 (Mexico) region. |
| 2024-11-14 | BackupRun custom organization policies |  | Cloud SQL supports custom organization policies for the BackupRun resource. |
| 2024-11-14 | Instances resource custom organization policy fields |  | Cloud SQL exposes additional Instances resource fields for creating custom organization policies. |
| 2024-11-04 | Backup size visibility |  | Cloud SQL lets you view the size of an instance backup. |
| 2024-10-25 | Backup maxChargeableBytes field |  | Cloud SQL exposes the maxChargeableBytes value in backupRuns.GET API and gcloud backup describe responses. |
| 2024-10-21 | Read replicas with private services access and connector enforcement |  | Cloud SQL supports creating read replicas for instances that use private services access and connector enforcement. |
| 2024-10-09 | Automatic max server memory configuration |  | Cloud SQL automatically configures the SQL Server max server memory flag based on instance size. |
| 2024-10-09 | PITR transaction log export |  | Cloud SQL can export point-in-time recovery transaction logs stored in Cloud Storage. |
| 2024-10-03 | Server certificate authority mode configuration |  | Cloud SQL lets you choose the server certificate authority mode when creating an instance. |
| 2024-10-01 | Instance time zone update |  | Cloud SQL lets you update the time zone of a SQL Server instance after creation by using gcloud sql instances patch. |
| 2024-09-13 | Extended PITR transaction log retention |  | Cloud SQL Enterprise Plus supports retaining point-in-time recovery transaction logs for 1 to 35 days. |
| 2024-09-12 | Cloud SQL Studio User IAM role |  | Cloud SQL provides a dedicated Cloud SQL Studio User IAM role for granting access to Cloud SQL Studio. |
| 2024-09-03 | Clone preferred zone selection |  | Cloud SQL lets you specify preferred zones when cloning zonal or regional instances. |
| 2024-08-01 | Cloud SQL Enterprise edition |  | Cloud SQL offers the Enterprise edition for SQL Server with existing instances mapped to this edition by default. |
| 2024-08-01 | Cloud SQL Enterprise Plus edition |  | Cloud SQL offers the Enterprise Plus edition for SQL Server with enhanced performance, availability, and disaster recovery capabilities. |
| 2024-07-19 | Extended Events |  | Cloud SQL supports SQL Server Extended Events for monitoring and troubleshooting database performance. |
| 2024-07-18 | Cloud SQL instance custom organization policies |  | Cloud SQL supports custom organization policies for instances. |
| 2024-07-16 | Cloud SQL Studio |  | Cloud SQL Studio provides browser-based SQL data management for authorized users; Cloud SQL Studio lets authorized users run SQL queries and manage data from the Google Cloud console. |
| 2024-07-16 | Dataplex Catalog integration |  | Cloud SQL integrates with Dataplex Catalog for searching and managing Cloud SQL resources. |
| 2024-06-20 | Available database versions for upgrade API |  | Cloud SQL lets you retrieve the list of database versions available for upgrading a SQL Server instance. |
| 2024-06-10 | Week 5 maintenance notifications |  | Cloud SQL lets you choose to receive maintenance notifications five weeks before a scheduled maintenance update. |
| 2024-05-31 | PITR transaction logs in Cloud Storage |  | Cloud SQL stores point-in-time recovery transaction logs in Cloud Storage. |
| 2024-04-09 | Database Center |  | Database Center provides an AI-assisted dashboard for a centralized view of database fleets. |
| 2024-04-09 | Database Insight recommendations |  | Gemini in Databases adds new database insight recommendations to help optimize database operations. |
| 2024-04-02 | SSL mode |  | Cloud SQL supports SSL mode for specifying connection encryption requirements instead of the legacy require_ssl setting. |
| 2024-03-25 | Private Service Connect |  | Cloud SQL supports Private Service Connect for connecting SQL Server instances from multiple VPC networks; Cloud SQL supports Private Service Connect for connecting SQL Server instances from multiple VPC networks. |
| 2024-03-25 | Private Service Connect availability type selection |  | Cloud SQL lets you choose REGIONAL or ZONAL availability for Private Service Connect-enabled instances; Cloud SQL lets you choose REGIONAL or ZONAL availability for Private Service Connect-enabled instances. |
| 2024-03-25 | Private Service Connect cross-region read replicas |  | Cloud SQL supports cross-region read replicas for Private Service Connect-enabled instances. |
| 2024-03-13 | SQL Server Reporting Services |  | Cloud SQL supports SQL Server Reporting Services for creating reports on instances. |
| 2024-03-05 | New network architecture upgrade |  | Cloud SQL lets you upgrade instances to the new network architecture to gain additional capabilities. |
| 2024-02-09 | Automatic read replica maintenance during self-service maintenance |  | Cloud SQL automatically updates read replicas when self-service maintenance is performed on the primary instance. |
| 2024-01-31 | africa-south1 region availability |  | Cloud SQL for SQL Server instances are available in the africa-south1 (Johannesburg) region. |
| 2023-11-15 | Bulk insert support |  | Cloud SQL supports SQL Server bulk insert for importing data on SQL Server 2022 instances. |
| 2023-10-17 | Transaction log backup import |  | Cloud SQL supports importing transaction log backups to help reduce migration downtime. |
| 2023-10-09 | cross db ownership chaining flag | 2023-10-09 | The cross db ownership chaining database flag is a SQL Server compatibility setting for cross-database ownership chaining; deprecated on 2023-10-09. |
| 2023-09-26 | enable-high-availability recommender |  | Cloud SQL provides an enable-high-availability recommender that suggests improving instance reliability through data redundancy. |
| 2023-09-19 | me-central2 region availability |  | Cloud SQL for SQL Server instances are available in the me-central2 (Dammam) region. |
| 2023-08-22 | europe-west10 region availability |  | Cloud SQL for SQL Server instances are available in the europe-west10 (Berlin) region. |
| 2023-08-17 | CMEK re-encryption with new primary key version |  | Cloud SQL lets you re-encrypt an existing CMEK-enabled primary instance or replica with a new primary key version. |
| 2023-08-03 | Cloud SQL Node.js Language Connector |  | Cloud SQL provides a Node.js Language Connector for database connectivity. |
| 2023-08-03 | Multiple API rate quota categories |  | Cloud SQL supports multiple categories of API rate quotas enforced per minute, project, region, and user. |
| 2023-07-18 | Default maintenance windows |  | Cloud SQL supports default maintenance windows for instances without a user-specified maintenance window. |
| 2023-07-06 | Non-RFC 1918 IP address range support |  | Cloud SQL supports creating and connecting to instances and replicas in non-RFC 1918 IP address ranges. |
| 2023-06-26 | SQL Server 2022 |  | Cloud SQL supports SQL Server 2022 for SQL Server instances. |
| 2023-06-07 | Differential backup import and export |  | Cloud SQL supports importing and exporting differential database backups. |
| 2023-05-16 | Cloud SQL Proxy Operator |  | Cloud SQL Proxy Operator provides Kubernetes-based management of Cloud SQL Proxy connectivity; The Cloud SQL Proxy Operator automates connecting workloads in a GKE cluster to Cloud SQL databases. |
| 2023-05-15 | PITR with read replicas |  | Cloud SQL supports using point-in-time recovery and read replicas on the same primary instance. |
| 2023-05-02 | Simultaneous multithreading control |  | Cloud SQL lets you disable simultaneous multithreading when creating or editing instances and read replicas. |
| 2023-03-30 | bcp utility support |  | Cloud SQL supports the SQL Server bcp utility for importing and exporting data. |
| 2023-03-30 | me-central1 region availability |  | Cloud SQL for SQL Server instances are available in the me-central1 (Doha) region. |
| 2023-03-30 | SqlPackage utility support |  | Cloud SQL supports the SQL Server SqlPackage utility for importing and exporting data. |
| 2023-03-28 | Expanded Cloud SQL metrics |  | Cloud SQL exposes 38 new metrics to improve observability for SQL Server instances. |
| 2023-03-28 | Read replica maintenance inheritance |  | Cloud SQL read replicas follow the primary instance maintenance settings and are maintained before the primary instance; Read replicas inherit maintenance settings from the primary instance, including window, rescheduling, and deny periods, and are maintained before the primary. |
| 2023-03-27 | Cloud SQL Active Directory Diagnosis tool |  | A troubleshooting tool helps diagnose connection issues for AD-enabled Cloud SQL for SQL Server instances using an on-premises Active Directory domain. |
| 2023-03-27 | Linked Servers |  | Linked Servers support lets Cloud SQL for SQL Server integrate data from multiple sources and distribute queries across multiple servers. |
| 2023-03-23 | Regional availability in europe-west12 |  | Cloud SQL for SQL Server instances can be deployed in the europe-west12 (Turin) region. |
| 2023-02-28 | Get user details API |  | Cloud SQL lets you retrieve details for a Cloud SQL user on a database instance by using the API or gcloud. |
| 2023-02-08 | Cloud SQL Auth Proxy v2 |  | Cloud SQL Auth Proxy v2 improves secure connectivity to Cloud SQL instances with better performance, stability, telemetry, and expanded configuration and integration features. |
| 2023-02-02 | Underprovisioned instance recommender |  | The Underprovisioned instance recommender identifies CPU and memory bottlenecks and recommends resizing instances to better fit workloads. |
| 2023-01-18 | Automated backup audit logs |  | Audit logs for automated backups let users verify backup completion status and create log-based alerts. |
| 2023-01-18 | Point-in-time recovery |  | Point-in-time recovery restores a Cloud SQL for SQL Server instance to a specific earlier moment. |
| 2023-01-10 | Striped import and export |  | Striped import and export reduce the time needed for BAK file operations and related workflows. |
| 2022-10-07 | Permanent instance time zone |  | Cloud SQL for SQL Server lets you set a permanent time zone when creating an instance. |
| 2022-10-04 | Terraform support for self-service maintenance |  | Terraform can be used to manage self-service maintenance for Cloud SQL instances. |
| 2022-09-21 | Immediate instance name reuse |  | Cloud SQL allows an instance name to be reused immediately after the instance is deleted. |
| 2022-09-13 | Regional availability in me-west1 |  | Cloud SQL for SQL Server instances can be deployed in the me-west1 (Tel Aviv) region. |
| 2022-08-15 | Instance deletion protection |  | Instance deletion protection prevents accidental removal of Cloud SQL instances. |
| 2022-07-11 | In-place major version upgrade |  | In-place major version upgrade lets Cloud SQL for SQL Server upgrade the database major version without migration to a new instance; In-place major version upgrade lets Cloud SQL for SQL Server upgrade an instance's major version or edition without moving to a new instance. |
| 2022-06-21 | SQL Server Audit |  | SQL Server Audit support tracks and logs server-level and database-level events in Cloud SQL. |
| 2022-06-21 | Transactional replication to external subscribers |  | Cloud SQL for SQL Server can publish to internal or external subscribers by using transactional replication. |
| 2022-06-10 | Faster machine type changes |  | Faster machine type changes reduce connectivity interruption during machine type updates to less than 60 seconds. |
| 2022-06-07 | Regional availability in us-south1 |  | Cloud SQL for SQL Server instances can be deployed in the us-south1 (Dallas) region. |
| 2022-05-24 | Regional availability in us-east5 |  | Cloud SQL for SQL Server instances can be deployed in the us-east5 (Columbus) region. |
| 2022-05-04 | Regional availability in europe-west9 |  | Cloud SQL for SQL Server instances can be deployed in the europe-west9 (Paris) region. |
| 2022-04-28 | Idle database instance recommender |  | The Idle database instance recommender identifies idle database instances and recommends shutting them down to save costs; The Idle database instance recommender identifies idle database instances and recommends shutting them down to save costs. |
| 2022-04-28 | Overprovisioned database instance recommender |  | The Overprovisioned database instance recommender identifies oversized instances and recommends rightsizing them to reduce costs; The Overprovisioned database instance recommender identifies oversized instances and recommends rightsizing them to reduce costs. |
| 2022-04-25 | Maintenance changelogs |  | Maintenance changelogs provide details about updates in new maintenance versions, including minor version upgrades and security patches. |
| 2022-04-25 | Self-service maintenance |  | Self-service maintenance lets users apply maintenance updates to an instance outside the normal scheduled maintenance flow. |
| 2022-04-20 | Regional availability in europe-west8 |  | Cloud SQL for SQL Server instances can be deployed in the europe-west8 (Milan) region. |
| 2022-04-12 | CMEK organization policy constraints |  | CMEK organization policy constraints let organizations enforce Cloud SQL use of customer-managed encryption keys and restrict allowed key projects. |
| 2022-02-23 | Allocated IP range selection for clones and replicas |  | Cloud SQL lets you select an allocated private IP range for clones and replicas created from a primary instance that uses private IP. |
| 2022-02-17 | Google Cloud tags for instances |  | Google Cloud tags can be attached to Cloud SQL instances to support fine-grained access control. |
| 2022-02-08 | Cross-region replication |  | Cross-region replication creates and maintains database replicas in other regions for scale, migration, and redundancy scenarios. |
| 2022-02-07 | SQL Server 2019 default version |  | SQL Server 2019 becomes the default database version for Cloud SQL for SQL Server. |
| 2022-01-31 | Key Access Justifications |  | Key Access Justifications for Cloud EKM lets users view the reason for each key access request and automatically approve or deny requests based on that justification. |
| 2021-12-16 | Database minor version visibility |  | Cloud SQL displays the database minor version in instance information. |
| 2021-12-13 | Cross-project Managed Service for Microsoft Active Directory integration |  | Cloud SQL for SQL Server can integrate with a Managed Service for Microsoft Active Directory domain located in a different project. |
| 2021-11-16 | Regional availability in southamerica-west1 |  | Cloud SQL for SQL Server instances can be deployed in the southamerica-west1 (Santiago) region. |
| 2021-10-08 | Access Approval |  | Access Approval requires explicit customer approval before Google Support can access a database for support purposes. |
| 2021-09-28 | Automatic stop on low storage |  | Cloud SQL automatically stops a database instance when it is nearly out of storage capacity to prevent data loss. |
| 2021-09-10 | out-of-disk recommender |  | The Out-of-disk recommender proactively generates recommendations to reduce the risk of downtime caused by instances running out of disk space; Cloud SQL provides recommendations to help prevent downtime when an instance is trending toward its storage limit. |
| 2021-08-21 | IAM Conditions support |  | IAM Conditions support enables conditional, attribute-based access control for Cloud SQL resources, including instances. |
| 2021-08-09 | Cloud SQL Admin API v1 |  | Cloud SQL Admin API v1 is the generally available API version and remains compatible with v1beta4. |
| 2021-08-03 | Regional availability in northamerica-northeast2 |  | Cloud SQL for SQL Server instances can be deployed in the northamerica-northeast2 (Toronto) region. |
| 2021-06-29 | asia-south2 region support |  | Cloud SQL for SQL Server instances can be deployed in the asia-south2 (Delhi) region. |
| 2021-06-28 | Managed Service for Microsoft Active Directory integration |  | Cloud SQL for SQL Server can join a managed Active Directory domain to support Windows Authentication and trusted integration with on-premises AD domains; Cloud SQL for SQL Server can join a managed Active Directory domain to support Windows Authentication and trusted integration with on-premises AD domains. |
| 2021-06-24 | SQL Server 2019 support |  | Cloud SQL for SQL Server supports SQL Server 2019 database instances. |
| 2021-06-23 | 64 TB storage capacity |  | Cloud SQL instances support storage sizes up to 64 TB. |
| 2021-06-21 | australia-southeast2 region support |  | Cloud SQL for SQL Server instances can be deployed in the australia-southeast2 (Melbourne) region. |
| 2021-06-21 | cross-region replicas |  | Cloud SQL for SQL Server supports creating replicas in other regions. |
| 2021-06-21 | replication |  | Cloud SQL for SQL Server supports replication to scale read usage and maintain data copies. |
| 2021-06-07 | faster maintenance |  | Cloud SQL maintenance operations reduce average connectivity interruption to under 120 seconds. |
| 2021-04-06 | change data capture |  | Cloud SQL for SQL Server supports change data capture operations on supported SQL Server 2017 editions. |
| 2021-04-06 | tempdb management |  | Cloud SQL for SQL Server lets the sqlserver user perform common tempdb file management operations. |
| 2021-03-24 | europe-central2 region support |  | Cloud SQL for SQL Server instances can be deployed in the europe-central2 (Warsaw) region. |
| 2021-02-10 | Cloud SQL Admin API v1beta4 |  | Cloud SQL provides the generally available Admin API v1beta4 for instance management. |
| 2021-01-13 | database/memory/total_usage metric |  | Cloud SQL exposes a Monitoring metric for total database memory usage including buffer cache. |
| 2020-11-19 | automated backup retention settings |  | Cloud SQL for SQL Server lets you configure automated backup retention from 1 to 365 days. |
| 2020-10-12 | deny maintenance periods |  | Cloud SQL lets you block automatic maintenance during specified date ranges. |
| 2020-09-21 | default database collation |  | Cloud SQL for SQL Server lets you set the default collation for databases in an instance. |
| 2020-08-31 | instance cloning |  | Cloud SQL for SQL Server supports cloning an instance to create an independent copy. |
| 2020-06-23 | committed use discounts |  | Cloud SQL offers committed use discounts for regional database instance usage over 1- or 3-year terms. |
| 2020-06-08 | asia-southeast2 region support |  | Cloud SQL for SQL Server instances can be deployed in the asia-southeast2 (Jakarta) region. |
| 2020-04-20 | us-west4 region support |  | Cloud SQL for SQL Server instances can be deployed in the us-west4 (Las Vegas) region. |
| 2020-03-24 | 96-core machine types |  | Cloud SQL for SQL Server supports machine types with up to 96 CPU cores. |
| 2020-03-16 | cross-region private IP access |  | Cloud SQL instances using private IP can be accessed from other regions. |
| 2020-02-24 | us-west3 region support |  | Cloud SQL for SQL Server instances can be deployed in the us-west3 (Salt Lake City) region. |
| 2020-02-19 | Cloud SQL for SQL Server |  | Cloud SQL for SQL Server is generally available as a managed SQL Server database service; Cloud SQL for SQL Server is available in beta as a managed SQL Server database service. |
| 2020-01-24 | asia-northeast3 region support |  | Cloud SQL for SQL Server instances can be deployed in the asia-northeast3 (Seoul) region. |
| 2019-12-17 | VPC Service Controls |  | Cloud SQL supports VPC Service Controls to protect the Admin API and host project with a service perimeter. |
| 2019-12-13 | Cloud VPN connectivity |  | Cloud SQL supports connecting instances through Cloud VPN. |
| 2019-12-13 | connection organization policies |  | Cloud SQL lets organizations define policies that control access to and from Cloud SQL instances. |
| 2019-12-10 | maintenance notifications |  | Cloud SQL provides notifications for upcoming maintenance events on instances. |
| 2019-11-25 | Access Transparency |  | Cloud SQL supports Access Transparency logs for actions taken by Google staff when accessing customer data. |
| 2019-11-19 | customer-managed encryption keys |  | Cloud SQL supports customer-managed encryption keys for instance encryption. |

Source file slug: `cloud-sql-for-sql-server.md`

