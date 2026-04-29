# Resource location policies

Product: AlloyDB
Feature slug: `resource-location-policies`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

AlloyDB supports resource location policies to constrain where new in-scope resources can be created.

## Lifecycle

- Latest feature date: 2023-07-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- armor
- audit
- auth
- authorization
- iam
- identity
- key
- logging
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp](https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp)
- [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
