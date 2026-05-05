# User-specified concurrency and vCPU

Product: Cloud Run functions
Feature slug: `user-specified-concurrency-and-vcpu`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions 2nd gen supports optional user-specified concurrency and vCPU settings.

## Lifecycle

- Latest feature date: 2023-01-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy))
- allow (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy))
- audit (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy))
- iam (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy))
- key (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy))
- kms (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy))
- logging (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy))
- permission (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy))
- policy (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy))
- private (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy))
- role (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy))
- secret (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy))
- security (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy))
- token (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy))

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
