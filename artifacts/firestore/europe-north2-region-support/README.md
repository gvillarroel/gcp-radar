# europe-north2 region support

Product: Firestore
Feature slug: `europe-north2-region-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Firestore supports the europe-north2 Stockholm region.

## Lifecycle

- Latest feature date: 2025-03-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_database](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_database), [https://docs.cloud.google.com/firestore/docs/reference/rest](https://docs.cloud.google.com/firestore/docs/reference/rest), [https://docs.cloud.google.com/firestore/docs/locations](https://docs.cloud.google.com/firestore/docs/locations))
- key (evidence: [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_database](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_database), [https://docs.cloud.google.com/firestore/docs/reference/rest](https://docs.cloud.google.com/firestore/docs/reference/rest), [https://docs.cloud.google.com/firestore/docs/locations](https://docs.cloud.google.com/firestore/docs/locations))
- kms (evidence: [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_database](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_database), [https://docs.cloud.google.com/firestore/docs/reference/rest](https://docs.cloud.google.com/firestore/docs/reference/rest), [https://docs.cloud.google.com/firestore/docs/locations](https://docs.cloud.google.com/firestore/docs/locations))
- private (evidence: [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_database](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_database), [https://docs.cloud.google.com/firestore/docs/reference/rest](https://docs.cloud.google.com/firestore/docs/reference/rest), [https://docs.cloud.google.com/firestore/docs/locations](https://docs.cloud.google.com/firestore/docs/locations))

## Official Evidence

- [https://docs.cloud.google.com/firestore/docs/locations](https://docs.cloud.google.com/firestore/docs/locations)
- [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_database](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_database)
- [https://docs.cloud.google.com/firestore/docs/reference/rest](https://docs.cloud.google.com/firestore/docs/reference/rest)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
