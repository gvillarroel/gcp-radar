# .env file environment variable configuration

Product: Cloud Run
Feature slug: `env-file-environment-variable-configuration`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports setting multiple environment variables from a .env file; Cloud Run supports setting multiple environment variables from a .env file for services, jobs, and worker pools.

## Lifecycle

- Latest feature date: 2025-09-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.pagers.ListJobsAsyncPager](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.pagers.ListJobsAsyncPager)
- [https://docs.cloud.google.com/run/docs/quickstarts/jobs/create-execute](https://docs.cloud.google.com/run/docs/quickstarts/jobs/create-execute)
- [https://docs.cloud.google.com/run/docs/quickstarts/workerpools/deploy-workerpool](https://docs.cloud.google.com/run/docs/quickstarts/workerpools/deploy-workerpool)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
