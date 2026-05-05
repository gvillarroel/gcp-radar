# Same-zone fast clone

Product: Cloud SQL for MySQL
Feature slug: `same-zone-fast-clone`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This feature enables fast clone operations for Cloud SQL for MySQL instances within the same zone.

## Lifecycle

- Latest feature date: 2026-01-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances))
- key (evidence: [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
