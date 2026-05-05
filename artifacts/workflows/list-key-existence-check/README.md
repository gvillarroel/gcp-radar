# List key existence check

Product: Workflows
Feature slug: `list-key-existence-check`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Workflows supports checking whether a key exists in a list.

## Lifecycle

- Latest feature date: 2022-02-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview), [https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore](https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore), [https://docs.cloud.google.com/workflows/docs/create-workflow-terraform](https://docs.cloud.google.com/workflows/docs/create-workflow-terraform))
- auth (evidence: [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview), [https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore](https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore), [https://docs.cloud.google.com/workflows/docs/create-workflow-terraform](https://docs.cloud.google.com/workflows/docs/create-workflow-terraform))
- key (evidence: [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview), [https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore](https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore), [https://docs.cloud.google.com/workflows/docs/create-workflow-terraform](https://docs.cloud.google.com/workflows/docs/create-workflow-terraform))
- permission (evidence: [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview), [https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore](https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore), [https://docs.cloud.google.com/workflows/docs/create-workflow-terraform](https://docs.cloud.google.com/workflows/docs/create-workflow-terraform))
- secret (evidence: [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview), [https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore](https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore), [https://docs.cloud.google.com/workflows/docs/create-workflow-terraform](https://docs.cloud.google.com/workflows/docs/create-workflow-terraform))

## Official Evidence

- [https://docs.cloud.google.com/workflows/docs/create-workflow-terraform](https://docs.cloud.google.com/workflows/docs/create-workflow-terraform)
- [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview)
- [https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore](https://docs.cloud.google.com/workflows/docs/tutorials/callbacks-firestore)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
