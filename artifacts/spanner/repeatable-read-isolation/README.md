# Repeatable read isolation

Product: Spanner
Feature slug: `repeatable-read-isolation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner adds repeatable read isolation support to reduce latency and transaction abort rates in read-heavy workloads with fewer writes.

## Lifecycle

- Latest feature date: 2025-10-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- certificate
- credential
- encrypt
- iam
- key
- kms
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BatchReadOnlyTransaction](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BatchReadOnlyTransaction)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog)
- [https://docs.cloud.google.com/spanner/docs/concurrency-control](https://docs.cloud.google.com/spanner/docs/concurrency-control)
