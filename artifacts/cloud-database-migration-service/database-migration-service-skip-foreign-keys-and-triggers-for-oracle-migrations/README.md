# Database Migration Service skip foreign keys and triggers for Oracle migrations

Product: Cloud Database Migration Service
Feature slug: `database-migration-service-skip-foreign-keys-and-triggers-for-oracle-migrations`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Heterogeneous Oracle migrations in Database Migration Service now can skip foreign keys and triggers without requiring them to be dropped from the destination.

## Lifecycle

- Latest feature date: 2024-06-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs), [https://docs.cloud.google.com/database-migration/docs/security-and-encryption](https://docs.cloud.google.com/database-migration/docs/security-and-encryption), [https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest](https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest))
- allow (evidence: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs), [https://docs.cloud.google.com/database-migration/docs/security-and-encryption](https://docs.cloud.google.com/database-migration/docs/security-and-encryption), [https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest](https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest))
- auth (evidence: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs), [https://docs.cloud.google.com/database-migration/docs/security-and-encryption](https://docs.cloud.google.com/database-migration/docs/security-and-encryption), [https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest](https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest))
- encrypt (evidence: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs), [https://docs.cloud.google.com/database-migration/docs/security-and-encryption](https://docs.cloud.google.com/database-migration/docs/security-and-encryption), [https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest](https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest))
- iam (evidence: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs), [https://docs.cloud.google.com/database-migration/docs/security-and-encryption](https://docs.cloud.google.com/database-migration/docs/security-and-encryption), [https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest](https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest))
- key (evidence: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs), [https://docs.cloud.google.com/database-migration/docs/security-and-encryption](https://docs.cloud.google.com/database-migration/docs/security-and-encryption), [https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest](https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest))
- security (evidence: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job), [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs), [https://docs.cloud.google.com/database-migration/docs/security-and-encryption](https://docs.cloud.google.com/database-migration/docs/security-and-encryption), [https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest](https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest))

## Official Evidence

- [https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest](https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
- [https://docs.cloud.google.com/database-migration/docs/security-and-encryption](https://docs.cloud.google.com/database-migration/docs/security-and-encryption)
