# /node/server/healthy metric

Product: Memorystore for Valkey
Feature slug: `node-server-healthy-metric`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The /node/server/healthy metric is generally available for Memorystore for Valkey; The /node/server/healthy metric shows whether a Memorystore for Valkey instance node is available and functioning correctly.

## Lifecycle

- Latest feature date: 2025-11-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances), [https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence), [https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices](https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance))
- auth (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances), [https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence), [https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices](https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance))
- authorization (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances), [https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence), [https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices](https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance))
- certificate (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances), [https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence), [https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices](https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance))
- encrypt (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances), [https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence), [https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices](https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance))
- iam (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances), [https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence), [https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices](https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance))
- key (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances), [https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence), [https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices](https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance))
- kms (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances), [https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence), [https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices](https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance))
- policy (evidence: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances), [https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence), [https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices](https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices), [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance))

## Official Evidence

- [https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence)
- [https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices](https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices)
- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance)
- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances)
