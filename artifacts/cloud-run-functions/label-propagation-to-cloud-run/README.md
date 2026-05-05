# Label propagation to Cloud Run

Product: Cloud Run functions
Feature slug: `label-propagation-to-cloud-run`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Labels set on Cloud Run functions propagate to Cloud Run when functions are deployed there.

## Lifecycle

- Latest feature date: 2025-05-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek))
- encrypt (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek))
- iam (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek))
- key (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek))
- kms (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek))
- permission (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek))
- policy (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek))
- private (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek))
- role (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek))
- secret (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek))
- security (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek))
- token (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek))

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek)
