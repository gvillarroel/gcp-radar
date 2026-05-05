# Migration jobs to externally provisioned destinations

Product: Cloud Database Migration Service
Feature slug: `migration-jobs-to-externally-provisioned-destinations`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

You can now migrate MySQL and PostgreSQL databases to Cloud SQL instances or AlloyDB clusters that were created outside Database Migration Service.

## Lifecycle

- Latest feature date: 2023-12-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- constraint (evidence: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs), [https://docs.cloud.google.com/database-migration/docs/custom-constraints](https://docs.cloud.google.com/database-migration/docs/custom-constraints), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/stop_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/stop_migration_job), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job))
- encrypt (evidence: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs), [https://docs.cloud.google.com/database-migration/docs/custom-constraints](https://docs.cloud.google.com/database-migration/docs/custom-constraints), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/stop_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/stop_migration_job), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job))
- key (evidence: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs), [https://docs.cloud.google.com/database-migration/docs/custom-constraints](https://docs.cloud.google.com/database-migration/docs/custom-constraints), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/stop_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/stop_migration_job), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job))
- policy (evidence: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs), [https://docs.cloud.google.com/database-migration/docs/custom-constraints](https://docs.cloud.google.com/database-migration/docs/custom-constraints), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/stop_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/stop_migration_job), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job))
- private (evidence: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs), [https://docs.cloud.google.com/database-migration/docs/custom-constraints](https://docs.cloud.google.com/database-migration/docs/custom-constraints), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/stop_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/stop_migration_job), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job))
- token (evidence: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs), [https://docs.cloud.google.com/database-migration/docs/custom-constraints](https://docs.cloud.google.com/database-migration/docs/custom-constraints), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/stop_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/stop_migration_job), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job))

## Official Evidence

- [https://docs.cloud.google.com/database-migration/docs/custom-constraints](https://docs.cloud.google.com/database-migration/docs/custom-constraints)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/stop_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/stop_migration_job)
