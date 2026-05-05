# Job history persistence to Cloud Storage

Product: Dataproc
Feature slug: `job-history-persistence-to-cloud-storage`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataproc supports persisting MapReduce and Spark history files to the Dataproc temp bucket through a cluster property.

## Lifecycle

- Latest feature date: 2020-03-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/dataproc/docs/quickstarts/submit-sparks-job-template](https://docs.cloud.google.com/dataproc/docs/quickstarts/submit-sparks-job-template)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
