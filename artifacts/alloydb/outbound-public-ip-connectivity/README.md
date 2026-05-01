# Outbound public IP connectivity

Product: AlloyDB
Feature slug: `outbound-public-ip-connectivity`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

AlloyDB supports outbound public IP connectivity on primary and secondary instances.

## Lifecycle

- Latest feature date: 2024-09-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- policy
- private

## Official Evidence

- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances)
- [https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization](https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
