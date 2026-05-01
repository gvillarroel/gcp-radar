# Execution backlogging

Product: Workflows
Feature slug: `execution-backlogging`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Execution backlogging automatically runs queued executions when concurrency quota becomes available.

## Lifecycle

- Latest feature date: 2024-09-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- logging
- token

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsClient](https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsClient)
- [https://docs.cloud.google.com/workflows/docs/tutorials/buffer-workflows-executions](https://docs.cloud.google.com/workflows/docs/tutorials/buffer-workflows-executions)
