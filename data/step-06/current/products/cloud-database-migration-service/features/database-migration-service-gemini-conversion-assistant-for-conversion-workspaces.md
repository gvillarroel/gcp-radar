---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:22.245Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Database Migration Service Gemini conversion assistant for conversion workspaces"
feature_slug: "database-migration-service-gemini-conversion-assistant-for-conversion-workspaces"
latest_feature_date: "2024-07-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/convert-sql-with-dms"
  - "https://docs.cloud.google.com/database-migration/docs/reference/rest"
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview"
keywords:
  - "database"
  - "migration"
  - "gemini"
  - "conversion"
  - "assistant"
  - "for"
  - "workspaces"
  - "the"
---

# Database Migration Service Gemini conversion assistant for conversion workspaces

Product: Cloud Database Migration Service
Coverage: MEDIUM

## Step 02 Summary

The Gemini conversion assistant is now available in preview for conversion workspaces in Database Migration Service.

## Extended Definition

The Gemini conversion assistant is now available in preview for conversion workspaces in Database Migration Service.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/convert-sql-with-dms](https://docs.cloud.google.com/database-migration/docs/convert-sql-with-dms)
- [https://docs.cloud.google.com/database-migration/docs/reference/rest](https://docs.cloud.google.com/database-migration/docs/reference/rest)
- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview)

## Supporting Pages

### Convert SQL with Database Migration Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/database-migration/docs/convert-sql-with-dms](https://docs.cloud.google.com/database-migration/docs/convert-sql-with-dms)
- Source ID: `site-docs-root-2`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Gemini suggestions fix issues dialog. (click to enlarge) Supported scenarios See the following pages for more information about Database Migration Service conversion workspaces and Gemini-powered conversion: Oracle to Cloud SQL for PostgreSQL About conversion workspaces Convert Oracle code and schema to Cloud SQL for PostgreSQL with Gemini assistance Oracle to AlloyDB for PostgreSQL About conversion workspaces Convert Oracle code and schema to Cloud SQL for PostgreSQL with Gemini assistance SQL Server to Cloud SQL for PostgreSQL About conversion workspaces Convert SQL Server code and schema to Cloud SQL for PostgreSQL with Gemini assistance SQL Server to AlloyDB for PostgreSQL About conversion workspaces Convert SQL Server code and schema to AlloyDB for PostgreSQL with Gemini assistance Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Use the following complimentary approaches for a complete end-to-end Gemini-powered code object conversion experience: Auto-conversion Gemini-powered conversion engine can automatically enhance the deterministic conversion patterns used by Database Migration Service.
- Conversion workspaces Use conversion workspaces to expedite and improve the migration process for heterogeneous databases.
- Conversion workspace overview screen, where you can monitor the progress of your conversion, view issues and inspect the resulting PostgreSQL code. (click to enlarge) Accelerate code and schema conversion with Gemini Gemini-powered conversion features in Database Migration Service help you apply the power of AI to reduce the time and complexity of your migrations.

### "Database Migration API \_|\_ Database Migration Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/rest](https://docs.cloud.google.com/database-migration/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.locations.conversionWorkspaces Methods apply POST /v1/{name}:apply Applies draft tree onto a specific destination database. commit POST /v1/{name}:commit Marks all the data in the conversion workspace as committed. convert POST /v1/{name}:convert Creates a draft tree schema for the destination database. create POST /v1/{parent}/conversionWorkspaces Creates a new conversion workspace in a given project and location. delete DELETE /v1/{name} Deletes a single conversion workspace. describeConversionWorkspaceRevisions GET /v1/{conversionWorkspace}:describeConversionWorkspaceRevisions Retrieves a list of committed revisions of a specific conversion workspace. describeDatabaseEntities GET /v1/{conversionWorkspace}:describeDatabaseEntities Describes the database entities tree for a specific conversion workspace and a specific tree type. get GET /v1/{name} Gets details of a single conversion workspace. getIamPolicy GET /v1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent}/conversionWorkspaces Lists conversion workspaces in a given project and location. patch PATCH /v1/{conversionWorkspace.name} Updates the parameters of a single conversion workspace. rollback POST /v1/{name}:rollback Rolls back a conversion workspace to the last committed snapshot. searchBackgroundJobs GET /v1/{conversionWorkspace}:searchBackgroundJobs Searches/lists the background jobs for a specific conversion workspace. seed POST /v1/{name}:seed Imports a snapshot of the source database into the conversion workspace. setIamPolicy POST /v1/{resource}:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1.projects.locations.migrationJobs Methods create POST /v1/{parent}/migrationJobs Creates a new migration job in a given project and location. delete DELETE /v1/{name} Deletes a single migration job. demoteDestination POST /v1/{name}:demoteDestination Demotes the destination database to become a read replica of the source. fetchSourceObjects GET /v1/{name}:fetchSourceObjects Retrieves objects from the source database that can be selected for data migration. generateSshScript POST /v1/{migrationJob}:generateSshScript Generate a SSH configuration script to configure the reverse SSH connectivity. generateTcpProxyScript POST /v1/{migrationJob}:generateTcpProxyScript Generate a TCP Proxy configuration script to configure a cloud-hosted VM running a TCP Proxy. get GET /v1/{name} Gets details of a single migration job. getIamPolicy GET /v1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent}/migrationJobs Lists migration jobs in a given project and location. patch PATCH /v1/{migrationJob.name} Updates the parameters of a single migration job. promote POST /v1/{name}:promote Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database. restart POST /v1/{name}:restart Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch. resume POST /v1/{name}:resume Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase). setIamPolicy POST /v1/{resource}:setIamPolicy Sets the access control policy on the specified resource. start POST /v1/{name}:start Start an already created migration job. stop POST /v1/{name}:stop Stops a running migration job. testIamPermissions POST /v1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. verify POST /v1/{name}:verify Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
- REST Resource: v1alpha2.projects.locations.migrationJobs Methods create POST /v1alpha2/{parent}/migrationJobs Creates a new migration job in a given project and location. delete DELETE /v1alpha2/{name} Deletes a single migration job. generateSshScript POST /v1alpha2/{name}:generateSshScript Generate a SSH configuration script to configure the reverse SSH connectivity. get GET /v1alpha2/{name} Gets details of a single migration job. getIamPolicy GET /v1alpha2/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1alpha2/{parent}/migrationJobs Lists migration jobs in a given project and location. patch PATCH /v1alpha2/{migrationJob.name} Updates the parameters of a single migration job. promote POST /v1alpha2/{name}:promote Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database. restart POST /v1alpha2/{name}:restart Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch. resume POST /v1alpha2/{name}:resume Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase). setIamPolicy POST /v1alpha2/{resource}:setIamPolicy Sets the access control policy on the specified resource. start POST /v1alpha2/{name}:start Start an already created migration job. stop POST /v1alpha2/{name}:stop Stops a running migration job. testIamPermissions POST /v1alpha2/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. verify POST /v1alpha2/{name}:verify Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
- REST Resource: v1beta1.projects.locations.migrationJobs Methods create POST /v1beta1/{parent}/migrationJobs Creates a new migration job in a given project and location. delete DELETE /v1beta1/{name} Deletes a single migration job. generateSshScript POST /v1beta1/{migrationJob}:generateSshScript Generate a SSH configuration script to configure the reverse SSH connectivity. get GET /v1beta1/{name} Gets details of a single migration job. getIamPolicy GET /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1beta1/{parent}/migrationJobs Lists migration jobs in a given project and location. patch PATCH /v1beta1/{migrationJob.name} Updates the parameters of a single migration job. promote POST /v1beta1/{name}:promote Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database. restart POST /v1beta1/{name}:restart Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch. resume POST /v1beta1/{name}:resume Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase). setIamPolicy POST /v1beta1/{resource}:setIamPolicy Sets the access control policy on the specified resource. start POST /v1beta1/{name}:start Start an already created migration job. stop POST /v1beta1/{name}:stop Stops a running migration job. testIamPermissions POST /v1beta1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. verify POST /v1beta1/{name}:verify Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.

### "Database Migration Service for heterogeneous SQL Server to AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- Supported source and destination databases The following table lists all supported SQL Server source and destination databases: Source databases Destination databases Amazon RDS for SQL Server AlloyDB for PostgreSQL 14, 15, 16 Microsoft Azure SQL Managed Instance Microsoft Azure SQL Database tier S3 and above Cloud SQL for SQL Server Self-managed SQL Server versions: Enterprise 2008 and later, Standard 2016 SP1 and later, Developer 2008 and later (on premises or on any cloud VM that you fully control) Unsupported source databases Database Migration Service doesn't support migrating from the following SQL Server versions: SQL Server Standard edition versions from 2008 to 2014 SQL Server Express SQL Server Web Code and schema conversion Database Migration Service conversion workspaces provide an interactive editor experience where you can convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- Continuous data movement during Database Migration Service for SQL Server heterogeneous migrations. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- This page provides an overview of the key Database Migration Service features for heterogeneous SQL Server to AlloyDB for PostgreSQL migrations: Supported sources and destinations lists all SQL Server versions supported by Database Migration Service.
- During this phase, Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination cluster.

### "Database Migration Service for heterogeneous SQL Server to Cloud SQL for\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- Microsoft Azure SQL Managed Instance Microsoft Azure SQL Database tier S3 and above Cloud SQL for SQL Server Self-managed SQL Server versions: Enterprise 2008 and later, Standard 2016 SP1 and later, Developer 2008 and later (on premises or on any cloud VM that you fully control) Unsupported source databases Database Migration Service doesn't support migrating from the following SQL Server versions: SQL Server Standard edition versions from 2008 to 2014 SQL Server Express SQL Server Web Code and schema conversion Database Migration Service conversion workspaces provide an interactive editor experience where you can convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- Continuous data movement during Database Migration Service for SQL Server heterogeneous migrations. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- This page provides an overview of the key Database Migration Service features for heterogeneous SQL Server to Cloud SQL for PostgreSQL migrations: Supported source and destination lists all SQL Server versions supported by Database Migration Service.
- During this phase, Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the Cloud SQL for PostgreSQL destination instance.

