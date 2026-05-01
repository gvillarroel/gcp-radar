# MapReduce job history always-scan-user-dir

Product: Dataproc
Feature slug: `mapreduce-job-history-always-scan-user-dir`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataproc supports a cluster property that makes the MapReduce job history server always scan the user directory for history files.

## Lifecycle

- Latest feature date: 2020-03-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkSqlJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkSqlJob)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
