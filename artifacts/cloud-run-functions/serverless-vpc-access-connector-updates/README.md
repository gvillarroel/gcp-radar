# Serverless VPC Access connector updates

Product: Cloud Run functions
Feature slug: `serverless-vpc-access-connector-updates`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports updating Serverless VPC Access connectors, including instance type and scaling limits.

## Lifecycle

- Latest feature date: 2024-01-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/LogType](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/LogType))
- allow (evidence: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/LogType](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/LogType))
- auth (evidence: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/LogType](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/LogType))
- authorization (evidence: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/LogType](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/LogType))
- iam (evidence: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/LogType](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/LogType))
- identity (evidence: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/LogType](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/LogType))
- token (evidence: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/LogType](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/LogType))

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse)
- [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/LogType](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/LogType)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
