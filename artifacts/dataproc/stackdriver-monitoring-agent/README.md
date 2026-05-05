# Stackdriver monitoring agent

Product: Dataproc
Feature slug: `stackdriver-monitoring-agent`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Stackdriver monitoring agent is installed by default on Dataproc clusters and can be enabled or disabled through cluster properties.

## Lifecycle

- Latest feature date: 2016-12-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- logging (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images))
- token (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images))

## Official Evidence

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
