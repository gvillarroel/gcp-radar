---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.425Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "GROUP BY and SELECT DISTINCT support for ARRAY and STRUCT"
feature_slug: "group-by-and-select-distinct-support-for-array-and-struct"
latest_feature_date: "2024-08-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation"
  - "https://docs.cloud.google.com/mcp/control-mcp-use-iam"
  - "https://docs.cloud.google.com/mcp/control-mcp-use-organization"
keywords:
  - "group"
  - "select"
  - "distinct"
  - "array"
  - "struct"
  - "bigquery"
  - "supports"
  - "clause"
---

# GROUP BY and SELECT DISTINCT support for ARRAY and STRUCT

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports using the GROUP BY clause and the SELECT DISTINCT clause with ARRAY and STRUCT data types.

## Extended Definition

BigQuery supports using the GROUP BY clause and the SELECT DISTINCT clause with ARRAY and STRUCT data types.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation)
- [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)
- [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization)

## Supporting Pages

### "Campaign Manager report transformation \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation)
- Source ID: `site-api-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Campaign Manager file BigQuery table BigQuery view Data Transfer files impression p impression campaign manager id impression campaign manager id click p click campaign manager id click campaign manager id activity p activity campaign manager id activity campaign manager id rich media p rich media campaign manager id rich media campaign manager id Match Tables activity cats p match table activity cats campaign manager id match table activity cats campaign manager id activity types p match table activity types campaign manager id match table activity types campaign manager id ads p match table ads campaign manager id match table ads campaign manager id ad placement assignments p match table ad placement assignments campaign manager id match table ad placement assignments campaign manager id advertisers p match table advertisers campaign manager id match table advertisers campaign manager id assets p match table assets campaign manager id match table assets campaign manager id browsers p match table browsers campaign manager id match table browsers campaign manager id campaigns p match table campaigns campaign manager id match table campaigns campaign manager id cities p match table cities campaign manager id match table cities campaign manager id creatives p match table creatives campaign manager id match table creatives campaign manager id creative ad assignments p match table creative ad assignments campaign manager id match table creative ad assignments campaign manager id custom creative fields p match table custom creative fields campaign manager id match table custom creative fields campaign manager id paid search p match table paid search campaign manager id match table paid search campaign manager id designated market areas p match table designated market areas campaign manager id match table designated market areas campaign manager id keyword value p match table keyword value campaign manager id match table keyword value campaign manager id null user ID reason categories Unsupported Unsupported rich media standard event and event type IDs Unsupported Unsupported custom rich media p match table custom rich media campaign manager id match table custom rich media campaign manager id operating systems p match table operating systems campaign manager id match table operating systems campaign manager id placements p match table placements campaign manager id match table placements campaign manager id placement cost p match table placement cost campaign manager id match table placement cost campaign manager id sites p match table sites campaign manager id match table sites campaign manager id states p match table states campaign manager id match table states campaign manager id custom floodlight variables p match table custom floodlight variables campaign manager id match table custom floodlight variables campaign manager id landing page url p match table landing page url campaign manager id match table landing page url campaign manager id Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Campaign Manager report transformation When your Campaign Manager (formerly known as DoubleClick Campaign Manager) data transfer files are transferred to BigQuery, the files are transformed into the following BigQuery tables and views.
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- When you view the tables and views in BigQuery, the value for campaign manager id is your Campaign Manager Network, Advertiser, or Floodlight ID.

### "Control MCP use with Identity and Access Management \_|\_ Google Cloud MCP\

- URL: [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization)
- Source ID: `site-docs-reference-required-13`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deny MCP use by service The following IAM deny policy prevents use of MCP tools from a specific service for all users. { "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "mcp.googleapis.com/tools.call" ], "denialCondition" : { "title" : "Deny all MCP tool use from this service" , "expression" : "resource.service == ' SERVICE NAME '" } } } ] } Replace SERVICE NAME with the service name—for example, bigquery.googleapis.com .
- Deny policy attributes The following attributes can be used in your Identity and Access Management deny policies: tool.isReadOnly : a resource attribute that indicates whether the invoked tool only reads data. request.auth.oauth.client id : the OAuth client ID. resource.service : the name of service—for example, bigquery.googleapis.com .

### "Control MCP use with Identity and Access Management \_|\_ Google Cloud MCP\

- URL: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)
- Source ID: `site-docs-reference-required-13`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deny MCP use by service The following IAM deny policy prevents use of MCP tools from a specific service for all users. { "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "mcp.googleapis.com/tools.call" ], "denialCondition" : { "title" : "Deny all MCP tool use from this service" , "expression" : "resource.service == ' SERVICE NAME '" } } } ] } Replace SERVICE NAME with the service name—for example, bigquery.googleapis.com .
- Deny policy attributes The following attributes can be used in your Identity and Access Management deny policies: tool.isReadOnly : a resource attribute that indicates whether the invoked tool only reads data. request.auth.oauth.client id : the OAuth client ID. resource.service : the name of service—for example, bigquery.googleapis.com .

