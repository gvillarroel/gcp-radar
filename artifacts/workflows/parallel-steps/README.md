# Parallel steps

Product: Workflows
Feature slug: `parallel-steps`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Workflows supports parallel steps to run branches concurrently within a workflow.

## Lifecycle

- Latest feature date: 2022-10-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-workflow-executions/latest/com.google.cloud.workflows.executions.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-workflow-executions/latest/com.google.cloud.workflows.executions.v1), [https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/create_job](https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/create_job), [https://docs.cloud.google.com/workflows/docs/samples/workflows-functions-randomgen](https://docs.cloud.google.com/workflows/docs/samples/workflows-functions-randomgen))
- auth (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-workflow-executions/latest/com.google.cloud.workflows.executions.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-workflow-executions/latest/com.google.cloud.workflows.executions.v1), [https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/create_job](https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/create_job), [https://docs.cloud.google.com/workflows/docs/samples/workflows-functions-randomgen](https://docs.cloud.google.com/workflows/docs/samples/workflows-functions-randomgen))
- permission (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-workflow-executions/latest/com.google.cloud.workflows.executions.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-workflow-executions/latest/com.google.cloud.workflows.executions.v1), [https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/create_job](https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/create_job), [https://docs.cloud.google.com/workflows/docs/samples/workflows-functions-randomgen](https://docs.cloud.google.com/workflows/docs/samples/workflows-functions-randomgen))

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-workflow-executions/latest/com.google.cloud.workflows.executions.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-workflow-executions/latest/com.google.cloud.workflows.executions.v1)
- [https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/create_job](https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/create_job)
- [https://docs.cloud.google.com/workflows/docs/samples/workflows-functions-randomgen](https://docs.cloud.google.com/workflows/docs/samples/workflows-functions-randomgen)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
