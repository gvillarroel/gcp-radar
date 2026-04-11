---
title: "Cloud SQL for SQL Server features \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/sqlserver/features
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/sqlserver
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/sqlserver/features
  title: "Cloud SQL for SQL Server features \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
SQL Server
Guides
Send feedback
Cloud SQL for SQL Server features
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes the major features and capabilities of
Cloud SQL for SQL Server. Cloud SQL is also available for MySQL and
PostgreSQL .
Note: For information about the supported versions of database engines, see
Database versions and version policies .
SQL Server feature support for Cloud SQL
Fully managed SQL Server databases in the cloud.
Custom machine types with up to 624 GB of RAM and 96 CPUs.
Up to 64 TB of storage available, with the ability to automatically increase
storage size as needed.
Create and manage instances in the
Google Cloud console .
Instances available in the Americas, Europe, Asia or Australia. See all
locations where you can create Cloud SQL
instances .
Database Migration Service for SQL Server .
Customer data encrypted on Google's internal networks and in database
tables, temporary files, and backups.
Column- and cell-level encryption for user databases.
Support for secure external connections with the Cloud SQL Auth Proxy or with the
SSL/TLS protocol.
Import databases using BAK and SQL files.
Export databases using BAK files.
Automated backups, on-demand backups, and point-in-time recovery.
Instance cloning.
Integration with Stackdriver logging and monitoring.
SQL Server Agent enabled to facilitate replication and other jobs.
Data replication between multiple regions.
Set a default collation for databases, when creating an instance.
High availability through a regional persistent disk.
Integration with customer-managed Active Directory (CMAD), including
Windows Authentication.
Integration with Managed Service for Microsoft Active Directory, including
Windows Authentication.
Integration with Microsoft Entra ID.
Change Data Capture (CDC).
Intelligent query processing.
Accelerated database recovery.
Enhanced data classification.
UTF-8 character encoding support.
Enhanced monitoring.
Dynamic Data Masking (DDM).
Linked Servers.
SQL Server Audit.
SQL Server Publisher.
SQL Server Subscriber.
SQL Server Integration Services (SSIS) that runs on a separate host and
connects to Cloud SQL. You can't host SSIS packages on or execute them from Cloud SQL.
SQL Server Reporting Services (SSRS) that runs on a separate host and
connects to Cloud SQL. You can't host SSRS packages on or execute them from Cloud SQL.
The bulk copy program (bcp) utility. To learn more about downloading and
installing the bcp utility,
see the Microsoft documentation .
BACPAC file imports and exports by using SqlPackage. To learn more about downloading and
installing SqlPackage,
see the Microsoft documentation .
Bulk insert for importing data. This feature is supported only on SQL Server 2022.
You can use a stored procedure for performing bulk insert.
For more information, see Use bulk insert for importing data .
Transparent Data Encryption (TDE). For information, see About TDE .
Always Encrypted without secure enclaves.
Extended Events (XEvents).
Custom time zone support at instance creation and post instance creation.
Temporal tables. For more information, see Temporal tables .
Support for read pools
Storage shrink. For more information, see About storage shrink .
SQL Server features unavailable for Cloud SQL
The following features are unavailable in Cloud SQL and Google Cloud doesn't
support them:
General SQL Server features unavailable for Cloud SQL
SQL Server Analysis Services (SSAS)
SP_Configure settings. For more information about this feature, see
Configure database flags .
Stretch database
Backing up to Microsoft Azure Blob Storage
Buffer pool extension
The OPENROWSET feature
Data Quality Services
Database Log Shipping
Database Mail
Dedicated Administrator Connection (DAC)
Distribution Transaction Coordinator (MSDTC)
File tables
FILESTREAM support
Installing a server that requires a full server installation with specific
authentication mechanisms such as Azure DevOps Server.
Maintenance Plans
Performance Data Collector
Policy-Based Management
PolyBase
Machine Learning and R Services
Resource Governor
Server-level triggers
Service Broker endpoints
T-SQL endpoints (all operations using CREATE ENDPOINT are unavailable)
WCF Data Services
The sysadmin role and system stored procedures that require it
Hybrid buffer pool
Memory-optimized tempdb metadata
In-memory OLTP support for database snapshots
Registering external languages
Row-level security
Object storage backup and restore
Persistent Memory (PMEM)
Real-time operational analytics
Integrated acceleration and offloading
Hybrid buffer pool with direct write
Multi-write replication
Link to Azure SQL Managed instance
Contained availability group
Always Encrypted with secure enclaves
Azure Active Directory authentication
Support for PFX certificates and other cryptographic improvements
MS-TDS 8.0 protocol and TLS 1.3
Note: Cloud SQL is a managed
service so it restricts access to certain system procedures and tables that
require advanced privileges; you can't create or have access to users with
superuser permissions.
Other SQL Server operations unavailable for Cloud SQL
ADMINISTER BULK OPERATIONS
ALTER ANY CREDENTIAL
ALTER ANY EVENT NOTIFICATION
ALTER ANY EVENT SESSION
ALTER RESOURCES
ALTER SETTINGS
AUTHENTICATE SERVER
CONTROL_SERVER
CREATE DDL EVENT NOTIFICATION
CREATE ENDPOINT
CREATE TRACE EVENT NOTIFICATION
EXTERNAL ACCESS ASSEMBLY
RESTORE
SHUTDOWN
CLR ASSEMBLIES
Supported syntax for
Cloud SQL for SQL Server
Cloud SQL supports the Transact-SQL
syntax .
Supported languages for
Cloud SQL for SQL Server
You can use Cloud SQL with App Engine applications running in the
flexible environment that are written in:
C#
Go
Java
Node.js
PHP
Python
Ruby
How you can connect to
Cloud SQL for SQL Server
instances
You can connect to a Cloud SQL instance from:
SQL Server Management Studio
(SSMS) .
A client. Learn more .
The sqlcmd
utility .
Connecting to Cloud SQL with Private Google access isn't supported.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
