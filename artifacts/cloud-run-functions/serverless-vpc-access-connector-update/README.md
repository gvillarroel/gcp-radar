# Serverless VPC Access connector update

Product: Cloud Run functions
Feature slug: `serverless-vpc-access-connector-update`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports updating a Serverless VPC Access connector, including machine type and instance count settings.

## Lifecycle

- Latest feature date: 2022-12-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- credential
- iam
- identity
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
