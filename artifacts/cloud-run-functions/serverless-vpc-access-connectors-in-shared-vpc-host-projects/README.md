# Serverless VPC Access connectors in Shared VPC host projects

Product: Cloud Run functions
Feature slug: `serverless-vpc-access-connectors-in-shared-vpc-host-projects`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports Serverless VPC Access connectors in Shared VPC host projects.

## Lifecycle

- Latest feature date: 2022-03-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- iam
- permission
- policy
- private
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
