---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:22.258Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Oracle multi-tenant (CDB/PDB) architecture support"
feature_slug: "oracle-multi-tenant-cdb-pdb-architecture-support"
latest_feature_date: "2023-04-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/use-database-migration-service-mcp"
  - "https://docs.cloud.google.com/database-migration/docs/overview"
keywords:
  - "oracle"
  - "multi"
  - "tenant"
  - "cdb"
  - "pdb"
  - "architecture"
  - "database"
  - "migration"
---

# Oracle multi-tenant (CDB/PDB) architecture support

Product: Cloud Database Migration Service
Coverage: MEDIUM

## Step 02 Summary

Cloud Database Migration Service added support for Oracle multi-tenant (CDB/PDB) architectures and migration of pluggable databases.

## Extended Definition

Cloud Database Migration Service added support for Oracle multi-tenant (CDB/PDB) architectures and migration of pluggable databases.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/use-database-migration-service-mcp](https://docs.cloud.google.com/database-migration/docs/use-database-migration-service-mcp)
- [https://docs.cloud.google.com/database-migration/docs/overview](https://docs.cloud.google.com/database-migration/docs/overview)

## Supporting Pages

### "Oracle to AlloyDB for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- Database Migration Service offers support for multiple different Oracle offerings, including Bare Metal Solution, Oracle Real Application Clusters (RAC), and self-managed instances.
- Continuous data movement during a Database Migration Service heterogeneous migration from Oracle to AlloyDB for PostgreSQL. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from Oracle syntax to PostgreSQL syntax.
- Supported source and destination databases Database Migration Service supports the following Oracle databases as migration sources: Amazon RDS for Oracle Self-hosted deployments, including: Oracle Single Instance Database Deployment Oracle Exadata Oracle Active Data Guard Oracle Real Application Clusters (RAC) Full support also depends on your source Oracle version.
- Home Documentation Databases Database Migration Service Oracle to AlloyDB for PostgreSQL Guides Send feedback Oracle to AlloyDB for PostgreSQL migration overview Stay organized with collections Save and categorize content based on your preferences.

### "Oracle to Cloud SQL for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- Database Migration Service offers support for multiple different Oracle offerings, including Bare Metal Solution, Oracle Real Application Clusters (RAC), and self-managed instances.
- Continuous data movement during a Database Migration Service heterogeneous migration from Oracle to Cloud SQL for PostgreSQL. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from Oracle syntax to PostgreSQL syntax.
- Supported source and destination databases Database Migration Service supports the following Oracle databases as migration sources: Amazon RDS for Oracle Self-hosted deployments, including: Oracle Single Instance Database Deployment Oracle Exadata Oracle Active Data Guard Oracle Real Application Clusters (RAC) Full support also depends on your source Oracle version.
- This page provides an overview of the key Database Migration Service features for heterogeneous Oracle to Cloud SQL for PostgreSQL migrations: Supported source and destination lists all Oracle versions supported by Database Migration Service.

### "Use the Database Migration Service remote MCP server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-migration/docs/use-database-migration-service-mcp](https://docs.cloud.google.com/database-migration/docs/use-database-migration-service-mcp)
- Source ID: `site-docs-root-2`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to to use the Database Migration Service remote MCP server: Make MCP tool calls: mcp.tools.call Database Migration Service resources: datamigration.migrationjobs.create datamigration.migrationjobs.delete datamigration.migrationjobs.get datamigration.migrationjobs.list datamigration.migrationjobs.resume datamigration.migrationjobs.start datamigration.migrationjobs.stop datamigration.operations.get You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to to use the Database Migration Service remote MCP server, ask your administrator to grant you the following IAM roles on your Google Cloud project: Make MCP tool calls: MCP Tool User ( roles/mcp.toolUser ) Database Migration Service resources: Database Migration Service Admin ( roles/datamigration.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- For the Database Migration Service MCP server, enter the following as required: Server name : Database Migration Service MCP server Server URL or Endpoint : datamigration.googleapis.com/mcp Transport : HTTP Authentication details : Depending on how you want to authenticate, you can enter your Google Cloud credentials, your OAuth Client ID and secret, or an agent identity and credentials.
- Database Migration Service has the following MCP tool OAuth scopes: Scope URI for gcloud CLI Description https://www.googleapis.com/auth/cloud-platform Allows access to all Google Cloud resources, including Database Migration Service. https://www.googleapis.com/auth/cloud-datamigration Allows viewing and managing data in Database Migration Service.

### Database Migration Service overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/database-migration/docs/overview](https://docs.cloud.google.com/database-migration/docs/overview)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Multi-cloud continuous replication Much like the read replicas across regions, if data exists in another cloud provider, a migration job can continuously replicate the database into Google Cloud for multi-cloud read-availability.
- Heterogeneous migrations Unlike homogeneous migrations, in heterogeneous migrations, such as Oracle to Cloud SQL for PostgreSQL, the database technology of the source and destination are different.
- The serverless architecture of Database Migration Service takes an initial snapshot of the source database to capture the current state of the data.
- The following diagram shows the key features of Database Migration Service in the context of Google Cloud architecture: Figure 1.

