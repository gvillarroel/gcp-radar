# Cloud Spanner MySQL migration to Spanner

Product: Spanner
Feature slug: `cloud-spanner-mysql-migration-to-spanner`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Spanner added documentation for migrating data from MySQL to Spanner.

## Lifecycle

- Latest feature date: 2019-02-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- allow (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- audit (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- auth (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- certificate (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- credential (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- encrypt (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- iam (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- key (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- kms (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- logging (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- permission (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- policy (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- role (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- token (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog)
- [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs)
- [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration)
