# Extended task timeout for jobs

Product: Cloud Run
Feature slug: `extended-task-timeout-for-jobs`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Run jobs support task timeouts up to 168 hours.

## Lifecycle

- Latest feature date: 2024-11-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- iam
- key
- permission
- policy

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.pagers.ListJobsAsyncPager](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.pagers.ListJobsAsyncPager)
