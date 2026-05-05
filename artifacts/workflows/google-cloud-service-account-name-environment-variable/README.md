# GOOGLE_CLOUD_SERVICE_ACCOUNT_NAME environment variable

Product: Workflows
Feature slug: `google-cloud-service-account-name-environment-variable`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The GOOGLE_CLOUD_SERVICE_ACCOUNT_NAME built-in environment variable exposes the service account name for a workflow execution.

## Lifecycle

- Latest feature date: 2021-10-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/workflows/docs/reference/environment-variables](https://docs.cloud.google.com/workflows/docs/reference/environment-variables), [https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsAsyncClient), [https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsClient](https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsClient))
- credential (evidence: [https://docs.cloud.google.com/workflows/docs/reference/environment-variables](https://docs.cloud.google.com/workflows/docs/reference/environment-variables), [https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsAsyncClient), [https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsClient](https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsClient))
- key (evidence: [https://docs.cloud.google.com/workflows/docs/reference/environment-variables](https://docs.cloud.google.com/workflows/docs/reference/environment-variables), [https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsAsyncClient), [https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsClient](https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsClient))

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsClient](https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsClient)
- [https://docs.cloud.google.com/workflows/docs/reference/environment-variables](https://docs.cloud.google.com/workflows/docs/reference/environment-variables)
