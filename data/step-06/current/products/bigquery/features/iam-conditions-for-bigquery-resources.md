---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.448Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "IAM conditions for BigQuery resources"
feature_slug: "iam-conditions-for-bigquery-resources"
latest_feature_date: "2024-05-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/mcp/control-mcp-use-iam"
  - "https://docs.cloud.google.com/mcp/control-mcp-use-organization"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
keywords:
  - "iam"
  - "conditions"
  - "bigquery"
  - "resources"
  - "supports"
  - "control"
  - "access"
---

# IAM conditions for BigQuery resources

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports IAM conditions to control access to BigQuery resources; BigQuery supports IAM conditions to control access to BigQuery resources.

## Extended Definition

BigQuery supports IAM conditions to control access to BigQuery resources; BigQuery supports IAM conditions to control access to BigQuery resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)
- [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)

## Supporting Pages

### "Control MCP use with Identity and Access Management \_|\_ Google Cloud MCP\

- URL: [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization)
- Source ID: `site-docs-reference-required-13`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deny policy attributes The following attributes can be used in your Identity and Access Management deny policies: tool.isReadOnly : a resource attribute that indicates whether the invoked tool only reads data. request.auth.oauth.client id : the OAuth client ID. resource.service : the name of service—for example, bigquery.googleapis.com .
- Home Documentation Developer tools Google Cloud MCP servers Guides Send feedback Control MCP use with Identity and Access Management Stay organized with collections Save and categorize content based on your preferences.
- Example IAM policies The following sections give examples of Identity and Access Management deny policies that can be used to control MCP use.
- Tools that create, modify, or delete resources aren't permitted. { "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "mcp.googleapis.com/tools.call" ], "denialCondition" : { "title" : "Deny read-write tools" , "expression" : "api.getAttribute('mcp.googleapis.com/tool.isReadOnly', false) == false" , } } } ] } After the policy is applied to a Google Cloud project, when an MCP client makes a tool call to a tool that isn't annotated as read-only , the request fails and an HTTP client error is returned.

### "Control MCP use with Identity and Access Management \_|\_ Google Cloud MCP\

- URL: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)
- Source ID: `site-docs-reference-required-13`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deny policy attributes The following attributes can be used in your Identity and Access Management deny policies: tool.isReadOnly : a resource attribute that indicates whether the invoked tool only reads data. request.auth.oauth.client id : the OAuth client ID. resource.service : the name of service—for example, bigquery.googleapis.com .
- Home Documentation Developer tools Google Cloud MCP servers Guides Send feedback Control MCP use with Identity and Access Management Stay organized with collections Save and categorize content based on your preferences.
- Example IAM policies The following sections give examples of Identity and Access Management deny policies that can be used to control MCP use.
- Tools that create, modify, or delete resources aren't permitted. { "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "mcp.googleapis.com/tools.call" ], "denialCondition" : { "title" : "Deny read-write tools" , "expression" : "api.getAttribute('mcp.googleapis.com/tool.isReadOnly', false) == false" , } } } ] } After the policy is applied to a Google Cloud project, when an MCP client makes a tool call to a tool that isn't annotated as read-only , the request fails and an HTTP client error is returned.

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- See the BigQuery client library documentation for more details on update dataset: https://cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.client.Client#google cloud bigquery client Client update dataset try : Update just the access entries property of the dataset. dataset = client . update dataset ( dataset , [ "access entries" ], ) Notify user that the API call was successful. full dataset id = f " { dataset . project } . { dataset . dataset id } " print ( f "Revoked dataset access for ' { entity id } ' to ' dataset ' { full dataset id } .'" ) except PreconditionFailed : # A read-modify-write error. print ( f "Dataset ' { dataset . dataset id } ' was modified remotely before this update. " "Fetch the latest version and retry." ) Work with table and view access controls Views are treated as table resources in BigQuery.
- This permission also requires bigquery.jobs.create to run a query job that references the routine, and you also need permission to access any resources that the routine references, such as tables or views. bigquery.routines.list Dataset List routines in the dataset and show metadata for routines. bigquery.routines.update Routine Update routine definitions and metadata. bigquery.routines.getIamPolicy Routine Get access controls for the routine. bigquery.routines.setIamPolicy Routine Set access controls for the routine.
- Caution: When you apply the JSON file that contains the access controls, the existing access controls are overwritten. bq update --source PATH TO FILE PROJECT ID : DATASET To verify your access control changes, use the bq show command again without writing the information to a file: bq show --format = prettyjson PROJECT ID : DATASET Terraform Use the google bigquery dataset iam resources to update access to a dataset.
- Control access to resources with IAM This document describes how to view, grant, and revoke access controls for BigQuery datasets and for the resources within datasets: tables, views, and routines.

