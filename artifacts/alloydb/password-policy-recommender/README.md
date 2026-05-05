# Password policy recommender

Product: AlloyDB
Feature slug: `password-policy-recommender`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Password policy recommender helps identify opportunities to enable password policies in AlloyDB.

## Lifecycle

- Latest feature date: 2025-04-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- auth (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- encrypt (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- iam (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- identity (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- key (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- permission (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- policy (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- role (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- secret (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- security (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))

## Official Evidence

- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags)
