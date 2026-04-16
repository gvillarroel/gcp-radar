---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.880Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Configurable private services access IP range"
feature_slug: "configurable-private-services-access-ip-range"
latest_feature_date: "2023-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/about-private-services-access"
  - "https://docs.cloud.google.com/alloydb/docs/about-private-service-connect"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "custom private services network range"
  - "private services access IP range"
  - "cluster private networking range"
  - "private services access range"
  - "configurable PSA range"
  - "private services access"
  - "PSA IP range"
---

# Configurable private services access IP range

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB cluster creation now allows optionally specifying a private services access IP range.

## Extended Definition

AlloyDB cluster creation now allows optionally specifying a private services access IP range.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/about-private-services-access](https://docs.cloud.google.com/alloydb/docs/about-private-services-access)
- [https://docs.cloud.google.com/alloydb/docs/about-private-service-connect](https://docs.cloud.google.com/alloydb/docs/about-private-service-connect)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "Private services access overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/about-private-services-access](https://docs.cloud.google.com/alloydb/docs/about-private-services-access)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A VPC network in the same project as your cluster How you configure AlloyDB connectivity using a VPC network that resides in the same Google Cloud project as your AlloyDB cluster depends on whether a private services access configuration already exists in the VPC network.
- IP address range size considerations It's important to choose a private services access address range that is wide enough to accommodate the needs of AlloyDB, as well as any other Google Cloud services that require IP addresses from the same address pool.
- If the VPC network already has an existing private services access configuration, then make sure the configuration has sufficient IP address space for AlloyDB and increase the address space if necessary.
- This page describes how AlloyDB for PostgreSQL uses private services access to establish network connectivity between your AlloyDB instances and the various internal resources that they require to work.

### "Private Service Connect overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/about-private-service-connect](https://docs.cloud.google.com/alloydb/docs/about-private-service-connect)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 66
- Re-rank relevance: N/A

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 66
- Re-rank relevance: N/A

