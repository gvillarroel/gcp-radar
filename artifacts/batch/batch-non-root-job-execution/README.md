# Batch non-root job execution

Product: Batch
Feature slug: `batch-non-root-job-execution`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

You can run Batch jobs as a non-root user to satisfy workload and security requirements.

## Lifecycle

- Latest feature date: 2024-02-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog), [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job))
- allow (evidence: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog), [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job))
- auth (evidence: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog), [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job))
- certificate (evidence: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog), [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job))
- credential (evidence: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog), [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job))
- encrypt (evidence: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog), [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job))
- iam (evidence: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog), [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job))
- key (evidence: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog), [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job))
- logging (evidence: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog), [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job))
- policy (evidence: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog), [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job))
- secret (evidence: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog), [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job))
- security (evidence: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog), [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job))

## Official Evidence

- [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog)
