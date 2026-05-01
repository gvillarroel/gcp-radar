# Customer-managed encryption keys on Compute Engine

Product: Dataproc
Feature slug: `customer-managed-encryption-keys-on-compute-engine`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Customer-managed encryption keys on Compute Engine let users manage the encryption key for Persistent Disks attached to Dataproc cluster VMs.

## Lifecycle

- Latest feature date: 2018-10-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- encrypt
- key
- kms
- logging
- role

## Official Evidence

- [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
