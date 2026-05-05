# Max instances

Product: Cloud Run functions
Feature slug: `max-instances`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Max instances lets a function limit how far it can scale in response to incoming traffic.

## Lifecycle

- Latest feature date: 2019-03-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- iam (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse))
- key (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse))
- kms (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse))
- permission (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse))
- policy (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse))
- secret (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse))
- token (evidence: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse), [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse))

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse)
- [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
