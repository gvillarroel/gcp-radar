# Spanner PostgreSQL dialect set operations

Product: Spanner
Feature slug: `spanner-postgresql-dialect-set-operations`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner PostgreSQL dialect queries now support set operations such as UNION and INTERSECT, including use with ORDER BY, LIMIT, OFFSET, and in subqueries.

## Lifecycle

- Latest feature date: 2023-05-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- key
- role

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
