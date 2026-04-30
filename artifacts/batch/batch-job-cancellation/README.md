# Batch job cancellation

Product: Batch
Feature slug: `batch-job-cancellation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Batch now supports general availability of job cancellation for running jobs; Canceling jobs became available in Preview for Batch.

## Lifecycle

- Latest feature date: 2025-03-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- key
- kms
- logging
- policy

## Official Evidence

- [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- [https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceAsyncClient)
