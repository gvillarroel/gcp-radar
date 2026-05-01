# Balanced persistent disk support

Product: Dataproc
Feature slug: `balanced-persistent-disk-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataproc supports the pd-balanced persistent disk type for cluster storage.

## Lifecycle

- Latest feature date: 2021-01-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- confidential
- encrypt
- identity
- key
- kms
- private
- security

## Official Evidence

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest](https://docs.cloud.google.com/python/docs/reference/dataproc/latest)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
