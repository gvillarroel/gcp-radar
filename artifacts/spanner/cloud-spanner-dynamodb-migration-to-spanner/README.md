# Cloud Spanner DynamoDB migration to Spanner

Product: Spanner
Feature slug: `cloud-spanner-dynamodb-migration-to-spanner`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Spanner added documentation for migrating data from DynamoDB to Spanner.

## Lifecycle

- Latest feature date: 2019-02-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs))
- allow (evidence: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs))
- audit (evidence: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs))
- auth (evidence: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs))
- certificate (evidence: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs))
- credential (evidence: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs))
- encrypt (evidence: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs))
- iam (evidence: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs))
- key (evidence: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs))
- kms (evidence: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs))
- logging (evidence: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs))
- permission (evidence: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs))
- policy (evidence: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs))
- role (evidence: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs))
- token (evidence: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs))

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog)
- [https://docs.cloud.google.com/spanner/docs](https://docs.cloud.google.com/spanner/docs)
- [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration)
