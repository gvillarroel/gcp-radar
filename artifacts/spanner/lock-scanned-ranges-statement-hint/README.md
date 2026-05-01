# LOCK_SCANNED_RANGES statement hint

Product: Spanner
Feature slug: `lock-scanned-ranges-statement-hint`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Spanner added support for the LOCK_SCANNED_RANGES statement hint, which lets a transaction request an exclusive lock on scanned key ranges.

## Lifecycle

- Latest feature date: 2020-12-07
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

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog)
- [https://docs.cloud.google.com/spanner/docs/concurrency-control](https://docs.cloud.google.com/spanner/docs/concurrency-control)
