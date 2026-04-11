---
title: "Database Migration Service for heterogeneous SQL Server to Cloud SQL for PostgreSQL\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/database-migration/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview
  title: "Database Migration Service for heterogeneous SQL Server to Cloud SQL for\
    \ PostgreSQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Database Migration Service
SQL Server to Cloud SQL for PostgreSQL
Guides
Send feedback
Database Migration Service for heterogeneous SQL Server to Cloud SQL for PostgreSQL
Stay organized with collections
Save and categorize content based on your preferences.
With Database Migration Service, you can convert your SQL Server database schema,
tables, and code objects to PostgreSQL syntax, and then migrate
data from your SQL Server databases to Cloud SQL for PostgreSQL.
Database Migration Service offers support for multiple different SQL Server
sources, including Amazon RDS, Microsoft Azure SQL Managed Instance, and self-managed SQL Server
instances.
This page provides an overview of the key Database Migration Service features
for heterogeneous SQL Server to Cloud SQL for PostgreSQL migrations:
Supported source and destination lists all SQL Server
versions supported by Database Migration Service.
Code and schema conversion describes how Database Migration Service
can help you convert your schemas, tables, and other objects from
SQL Server syntax to PostgreSQL syntax.
Continuous migrations data flow provides an end-to-end overview
of how your data moves in Google Cloud during the migration process.
Monitoring
gives an introduction for logs and metrics that can
help you observe the progress and health of your migration job.
Migration security looks at encryption features offered by
Database Migration Service.
Failback migration describes the failback replication feature,
where you can keep replicating data back to the original source database
after migrating to Cloud SQL for PostgreSQL.
Supported source and destination databases
The following table lists all supported SQL Server source and destination databases:
Source databases
Destination databases
Amazon RDS for SQL Server
Cloud SQL for PostgreSQL 12, 13, 14, 15, 16, 17.
Microsoft Azure SQL Managed Instance
Microsoft Azure SQL Database tier S3 and above
Cloud SQL for SQL Server
Self-managed SQL Server versions:
Enterprise 2008 and later, Standard 2016 SP1 and later, Developer 2008 and later
(on premises or on any cloud VM that you fully control)
Unsupported source databases
Database Migration Service doesn't support migrating from the following SQL Server versions:
SQL Server Standard edition versions from 2008 to 2014
SQL Server Express
SQL Server Web
Code and schema conversion
Database Migration Service conversion workspaces provide an interactive editor experience
where you can convert your schemas, tables, and other objects from
SQL Server syntax to PostgreSQL syntax.
Interactive conversion workspaces also provide support for Gemini
assisted workflows with code explainability and conversion issue fixing.
To learn more, see
Conversion workspaces .
Migration data flow
For heterogeneous SQL Server migrations to PostgreSQL,
Database Migration Service supports continuous and one-time migration flows.
With continuous migrations, your data is first loaded from a full dump, and then
continuously updated based on data change information surfaced from change tables.
One-time migrations only involve the full dump phase.
Figure 1. Continuous data movement during
Database Migration Service for SQL Server heterogeneous migrations. (click to enlarge)
At a high level, your data moves through the migration phases as follows:
One-time migrations
You use Database Migration Service conversion workspace to convert your schemas,
tables, and other objects from SQL Server syntax to PostgreSQL syntax.
SQL Server databases can often have several thousand objects
whose schema you need to convert. With Database Migration Service, you can divide your
work into multiple phases. Database Migration Service can connect to your source
databases and pull the required schema information when needed.
When you finish translating all your entities to PostgreSQL syntax,
you apply the schema to the databases in the destination instance.
The goal of this stage is to prepare your destination databases so that
Database Migration Service can later move the data from source tables to their
correct equivalents in Cloud SQL for PostgreSQL.
Once your schema is applied, you can begin the data migration.
The full dump phase is the only part of the one-time migration
process. During this phase, Database Migration Service connects to your source
instance, reads the contents of the tables you selected for migration,
and then loads the data to the Cloud SQL for PostgreSQL destination instance.
In this phase, Database Migration Service captures actual contents of your database.
For one-time migrations, we recommend that you disable writes on the
source database during the full dump phase. This way you can avoid
avoid losing data created after the migration process starts.
When the full dump phase is over, you can promote the destination
database and switch your application to use the new destination database.
Continuous migrations
You use Database Migration Service conversion workspace to convert your schemas,
tables, and other objects from SQL Server syntax to PostgreSQL syntax.
SQL Server databases can often have several thousand objects
whose schema you need to convert. With Database Migration Service, you can divide your
work into multiple phases. Database Migration Service can connect to your source
databases and pull the required schema information when needed.
When you finish translating all your entities to PostgreSQL syntax,
you apply the schema to the databases in the destination instance.
The goal of this stage is to prepare your destination databases so that
Database Migration Service can later replicate the data from source tables to their
correct equivalents in Cloud SQL for PostgreSQL.
Once your schema is applied, you can begin the data migration.
The full dump phase is the first part of the migration process.
During this phase, Database Migration Service connects to your source
instance, reads the contents of the tables you selected for migration,
and then loads the data to the Cloud SQL for PostgreSQL destination instance.
In this phase, Database Migration Service captures actual contents of your database.
For continuous migrations, when the full dump phase is over,
Database Migration Service switches to the change data capture (CDC) phase .
During CDC, Database Migration Service keeps monitoring your source databases
for changes, and then continuously replicates them on the destination
cluster.
In this phase, Database Migration Service doesn't copy actual data from your
source tables: instead, it reads information extracted from dedicated
change tables to replicate changes in the destination. For more
information about this mechanism, see
Change Data Capture . You can stop the ongoing replication
and promote the migration job when you want to switch your application
so that it uses the Cloud SQL for PostgreSQL destination instance as the
production database.
For a detailed, step-by-step
migration guide, see
SQL Server to Cloud SQL for PostgreSQL migration guide .
Monitoring
Figure 2. Sample observability diagram in Database Migration Service.
(click to enlarge)
Database Migration Service provides extensive logging and observability capabilities
to help you monitor the migration progress. These features include real-time
diagnostics for replication delay and CDC progress,
as well as detailed logs for Cloud SQL for PostgreSQL destination instance health
and migration job state.
For more details, see
Migration job metrics .
Migration security
Database Migration Service provides multiple encryption mechanisms you can use
for additional security during the migration process. These mechanisms include:
SSL/TLS certificates for encrypting the network connections between
Database Migration Service and source databases. For more details, see
Encryption overview .
Encryption certificates for securing data movement during full dump and CDC
phases. For more details, see
CMEK for migration jobs .
Failback migrations
Failback migrations (sometimes referred to as reverse replication ), allow you
to push CDC updates back to your original SQL Server source from the
destination Cloud SQL for PostgreSQL cluster after you complete the migration.
This feature keeps your original source database alive and up to date in case
you need to switch your application back to the SQL Server database.
For more information, see
Failback migrations .
What's next
To learn more about SQL Server data type and feature support in
Database Migration Service, see
Known limitations .
To get a complete, step-by-step migration walkthrough, see
SQL Server to Cloud SQL for PostgreSQL migration guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
