# Presto UI in Component Gateway

Product: Dataproc
Feature slug: `presto-ui-in-component-gateway`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Component Gateway can expose the Presto UI when the Presto optional component is enabled.

## Lifecycle

- Latest feature date: 2019-12-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig))
- allow (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig))
- auth (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig))
- certificate (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig))
- credential (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig))
- encrypt (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig))
- iam (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig))
- key (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig))
- kms (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig))
- logging (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig))
- policy (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig))

## Official Evidence

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog)
