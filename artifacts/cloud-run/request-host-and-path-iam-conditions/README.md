# Request host and path IAM Conditions

Product: Cloud Run
Feature slug: `request-host-and-path-iam-conditions`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports using request host and request path attributes in IAM Conditions for service invocation access control.

## Lifecycle

- Latest feature date: 2025-06-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- iam
- key
- logging
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-java](https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-java)
- [https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/GetIamPolicyRequest](https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/GetIamPolicyRequest)
- [https://docs.cloud.google.com/run/docs/securing/managing-access](https://docs.cloud.google.com/run/docs/securing/managing-access)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
