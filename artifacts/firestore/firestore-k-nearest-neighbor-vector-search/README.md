# Firestore K-nearest neighbor vector search

Product: Firestore
Feature slug: `firestore-k-nearest-neighbor-vector-search`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Firestore supports K-nearest neighbor (KNN) vector search.

## Lifecycle

- Latest feature date: 2024-04-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index), [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query.AsyncQuery](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query.AsyncQuery), [https://docs.cloud.google.com/python/docs/reference/firestore/latest/changelog](https://docs.cloud.google.com/python/docs/reference/firestore/latest/changelog))
- allow (evidence: [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index), [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query.AsyncQuery](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query.AsyncQuery), [https://docs.cloud.google.com/python/docs/reference/firestore/latest/changelog](https://docs.cloud.google.com/python/docs/reference/firestore/latest/changelog))
- auth (evidence: [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index), [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query.AsyncQuery](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query.AsyncQuery), [https://docs.cloud.google.com/python/docs/reference/firestore/latest/changelog](https://docs.cloud.google.com/python/docs/reference/firestore/latest/changelog))
- certificate (evidence: [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index), [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query.AsyncQuery](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query.AsyncQuery), [https://docs.cloud.google.com/python/docs/reference/firestore/latest/changelog](https://docs.cloud.google.com/python/docs/reference/firestore/latest/changelog))
- credential (evidence: [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index), [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query.AsyncQuery](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query.AsyncQuery), [https://docs.cloud.google.com/python/docs/reference/firestore/latest/changelog](https://docs.cloud.google.com/python/docs/reference/firestore/latest/changelog))
- iam (evidence: [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index), [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query.AsyncQuery](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query.AsyncQuery), [https://docs.cloud.google.com/python/docs/reference/firestore/latest/changelog](https://docs.cloud.google.com/python/docs/reference/firestore/latest/changelog))
- key (evidence: [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index), [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query.AsyncQuery](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query.AsyncQuery), [https://docs.cloud.google.com/python/docs/reference/firestore/latest/changelog](https://docs.cloud.google.com/python/docs/reference/firestore/latest/changelog))
- policy (evidence: [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index), [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query.AsyncQuery](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query.AsyncQuery), [https://docs.cloud.google.com/python/docs/reference/firestore/latest/changelog](https://docs.cloud.google.com/python/docs/reference/firestore/latest/changelog))
- token (evidence: [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index), [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query.AsyncQuery](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query.AsyncQuery), [https://docs.cloud.google.com/python/docs/reference/firestore/latest/changelog](https://docs.cloud.google.com/python/docs/reference/firestore/latest/changelog))

## Official Evidence

- [https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index](https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index)
- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/changelog](https://docs.cloud.google.com/python/docs/reference/firestore/latest/changelog)
- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query.AsyncQuery](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query.AsyncQuery)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
