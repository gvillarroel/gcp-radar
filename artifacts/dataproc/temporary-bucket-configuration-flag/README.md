# Temporary bucket configuration flag

Product: Dataproc
Feature slug: `temporary-bucket-configuration-flag`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Dataproc gcloud commands support a --temp-bucket flag to configure the Cloud Storage bucket used for ephemeral cluster and job data.

## Lifecycle

- Latest feature date: 2020-07-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- credential
- iam
- key
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
