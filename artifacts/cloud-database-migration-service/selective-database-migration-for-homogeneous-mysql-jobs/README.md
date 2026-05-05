# Selective database migration for homogeneous MySQL jobs

Product: Cloud Database Migration Service
Feature slug: `selective-database-migration-for-homogeneous-mysql-jobs`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Database Migration Service added the ability for homogeneous MySQL migrations to migrate individually selected source databases within a migration job.

## Lifecycle

- Latest feature date: 2026-03-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- constraint (evidence: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job), [https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations](https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations), [https://docs.cloud.google.com/database-migration/docs/manage-jobs](https://docs.cloud.google.com/database-migration/docs/manage-jobs))
- encrypt (evidence: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job), [https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations](https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations), [https://docs.cloud.google.com/database-migration/docs/manage-jobs](https://docs.cloud.google.com/database-migration/docs/manage-jobs))
- key (evidence: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job), [https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations](https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations), [https://docs.cloud.google.com/database-migration/docs/manage-jobs](https://docs.cloud.google.com/database-migration/docs/manage-jobs))
- policy (evidence: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job), [https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations](https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations), [https://docs.cloud.google.com/database-migration/docs/manage-jobs](https://docs.cloud.google.com/database-migration/docs/manage-jobs))

## Official Evidence

- [https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations](https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations)
- [https://docs.cloud.google.com/database-migration/docs/manage-jobs](https://docs.cloud.google.com/database-migration/docs/manage-jobs)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
