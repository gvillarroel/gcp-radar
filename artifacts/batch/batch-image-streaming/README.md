# Batch Image streaming

Product: Batch
Feature slug: `batch-image-streaming`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Image streaming can be used to reduce Batch job startup latency by avoiding full container image download waits.

## Lifecycle

- Latest feature date: 2023-12-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- certificate
- credential
- encrypt
- iam
- key
- logging
- policy
- secret

## Official Evidence

- [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- [https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog)
