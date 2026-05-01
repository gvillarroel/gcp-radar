# Jupyter local persistent disk notebook storage

Product: Dataproc
Feature slug: `jupyter-local-persistent-disk-notebook-storage`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Jupyter on Dataproc supports notebooks stored on VM persistent disk alongside Cloud Storage-backed notebooks.

## Lifecycle

- Latest feature date: 2020-07-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- encrypt
- iam
- key
- kms
- logging
- permission
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc)
- [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
