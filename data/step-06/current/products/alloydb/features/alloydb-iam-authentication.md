---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.890Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB IAM authentication"
feature_slug: "alloydb-iam-authentication"
latest_feature_date: "2023-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/user-grant-access"
  - "https://docs.cloud.google.com/alloydb/docs/reference/iam-roles-permissions"
  - "https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/create_instance"
keywords:
  - "authorize IAM principals"
  - "service accounts as database users"
  - "IAM DB authentication"
  - "database user authentication"
  - "AlloyDB IAM auth"
  - "IAM authentication"
  - "IAM database users"
  - "IAM users"
---

# AlloyDB IAM authentication

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB introduced IAM authentication preview support, allowing IAM users or service accounts to be authorized as database users.

## Extended Definition

AlloyDB introduced IAM authentication preview support, allowing IAM users or service accounts to be authorized as database users.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/user-grant-access](https://docs.cloud.google.com/alloydb/docs/user-grant-access)
- [https://docs.cloud.google.com/alloydb/docs/reference/iam-roles-permissions](https://docs.cloud.google.com/alloydb/docs/reference/iam-roles-permissions)
- [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/create_instance)

## Supporting Pages

### "Grant access to other users \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/user-grant-access](https://docs.cloud.google.com/alloydb/docs/user-grant-access)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: N/A

### "IAM roles and permissions for AlloyDB \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/iam-roles-permissions](https://docs.cloud.google.com/alloydb/docs/reference/iam-roles-permissions)
- Source ID: `site-api-reference`
- Final score: 60
- Re-rank relevance: N/A

### "Optimize database performance by comparing performance snapshots \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- Source ID: `site-docs-reference-2`
- Final score: 60
- Re-rank relevance: N/A

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/create_instance)
- Source ID: `site-api-reference`
- Final score: 57
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateInstanceRequest JSON representation { "parent" : string , "instanceId" : string , "type" : string , // Union field cpu count can be only one of the following: "cpuCount" : integer // End of list of possible types for union field cpu count . // Union field machine type can be only one of the following: "machineType" : string // End of list of possible types for union field machine type . // Union field readpool node count can be only one of the following: "readpoolNodeCount" : integer // End of list of possible types for union field readpool node count . // Union field db iam authentication can be only one of the following: "dbIamAuthentication" : boolean // End of list of possible types for union field db iam authentication . } Fields parent string Required.
- Union field db iam authentication . db iam authentication can be only one of the following: dbIamAuthentication boolean Optional.
- Sets the "alloydb.iam authentication" db flag to "on"/"off".
- Enables DB IAM authentication for this instance.

