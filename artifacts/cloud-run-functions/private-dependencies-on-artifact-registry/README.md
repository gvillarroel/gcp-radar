# Private dependencies on Artifact Registry

Product: Cloud Run functions
Feature slug: `private-dependencies-on-artifact-registry`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports low-configuration access to private dependencies on Artifact Registry for Node.js and Python.

## Lifecycle

- Latest feature date: 2022-02-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- iam
- logging
- policy
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy)
- [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
