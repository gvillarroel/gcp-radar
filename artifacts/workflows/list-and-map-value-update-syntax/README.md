# List and map value update syntax

Product: Workflows
Feature slug: `list-and-map-value-update-syntax`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Workflows supports syntax for updating list values and map values.

## Lifecycle

- Latest feature date: 2021-06-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview), [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list), [https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run](https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run))
- authorization (evidence: [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview), [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list), [https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run](https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run))
- iam (evidence: [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview), [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list), [https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run](https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run))
- key (evidence: [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview), [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list), [https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run](https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run))
- permission (evidence: [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview), [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list), [https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run](https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run))
- role (evidence: [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview), [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list), [https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run](https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run))
- token (evidence: [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview), [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list), [https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run](https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run))

## Official Evidence

- [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list)
- [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview)
- [https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run](https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
