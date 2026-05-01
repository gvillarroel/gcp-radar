# Array-contains queries

Product: Firestore
Feature slug: `array-contains-queries`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Firestore supports queries that match documents containing a specific array value.

## Lifecycle

- Latest feature date: 2018-08-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow

## Official Evidence

- [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/add_document](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/add_document)
- [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index)
- [https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ArrayValue](https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ArrayValue)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
