# Batch CentOS image support

Product: Batch
Feature slug: `batch-centos-image-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Batch CentOS (batch-centos) image family reached end of development and is deprecated; deprecated on 2024-06-30.

## Lifecycle

- Latest feature date: 2024-08-13
- Deprecation date: 2024-06-30
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job), [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog))
- allow (evidence: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job), [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog))
- auth (evidence: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job), [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog))
- certificate (evidence: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job), [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog))
- credential (evidence: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job), [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog))
- encrypt (evidence: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job), [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog))
- iam (evidence: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job), [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog))
- key (evidence: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job), [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog))
- logging (evidence: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job), [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog))
- policy (evidence: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job), [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog))
- private (evidence: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job), [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog))
- secret (evidence: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job), [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs), [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog))

## Official Evidence

- [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job)
- [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog)
