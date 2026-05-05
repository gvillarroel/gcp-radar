# Commit timestamps query optimization

Product: Spanner
Feature slug: `commit-timestamps-query-optimization`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner added a query optimization that uses commit timestamps to reduce I/O when retrieving data written after a specified time.

## Lifecycle

- Latest feature date: 2022-06-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp), [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- allow (evidence: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp), [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- audit (evidence: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp), [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- auth (evidence: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp), [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- credential (evidence: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp), [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- encrypt (evidence: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp), [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- iam (evidence: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp), [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- key (evidence: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp), [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- kms (evidence: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp), [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- logging (evidence: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp), [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- permission (evidence: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp), [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- policy (evidence: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp), [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- role (evidence: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp), [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- token (evidence: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp), [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog)
- [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp)
- [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)
