---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.216Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Graph"
feature_slug: "spanner-graph"
latest_feature_date: "2024-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/graph/iso-standards"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient"
keywords:
  - "purpose"
  - "built"
  - "adding"
  - "introduced"
  - "database"
  - "preview"
  - "graph"
---

# Spanner Graph

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Introduced Spanner Graph in preview, adding purpose-built graph database capabilities to Spanner with a GQL-compatible query interface and interoperability between relational and graph models.

## Extended Definition

Introduced Spanner Graph in preview, adding purpose-built graph database capabilities to Spanner with a GQL-compatible query interface and interoperability between relational and graph models.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/graph/iso-standards](https://docs.cloud.google.com/spanner/docs/graph/iso-standards)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)

## Supporting Pages

### Spanner Graph and ISO standards \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/graph/iso-standards](https://docs.cloud.google.com/spanner/docs/graph/iso-standards)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Spanner Graph is based on two ISO standards: ISO/IEC 9075-16:2023 - Information technology — Database languages SQL Property Graph Queries (SQL/PGQ) , Edition 1, 2023 ISO/IEC 39075:2024 - Information technology — Database languages — GQL , Edition 1, 2024 The following tables describe the high-level relationship between SQL/PGQ, GQL, and how Spanner Graph supports these standards.
- Home Documentation Databases Spanner Reference Send feedback Spanner Graph and ISO standards Stay organized with collections Save and categorize content based on your preferences.
- The page describes how Spanner Graph supports the ISO international standard query language for graph databases.
- Standard SQL/PGQ GQL Spanner Graph Query Graph pattern matching capabilities Shares the core Graph Pattern Matching Language (GPML) functionalities with GQL.

### "Class DatabaseAdminAsyncClient (3.63.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- InternalUpdateGraphOperationRequest ( database="database value", operation id="operation id value", vm identity token="vm identity token value", ) Make the request response = await client. internal update graph operation (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.spanner admin database v1.types.InternalUpdateGraphOperationRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 async def sample internal update graph operation(): Create a client client = spanner admin database v1.
- Returns Type Description google.cloud.spanner admin database v1.types.InternalUpdateGraphOperationResponse Internal response proto, do not use directly. list backup operations list backup operations ( request : typing .
- InternalUpdateGraphOperationRequest , dict , ] ] = None , , database : typing .

### "Class DatabaseAdminClient (3.63.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)
- Source ID: `site-python-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 def sample internal update graph operation(): Create a client client = spanner admin database v1.
- InternalUpdateGraphOperationRequest ( database="database value", operation id="operation id value", vm identity token="vm identity token value", ) Make the request response = client. internal update graph operation (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.spanner admin database v1.types.InternalUpdateGraphOperationRequest , dict] The request object.
- Returns Type Description google.cloud.spanner admin database v1.types.InternalUpdateGraphOperationResponse Internal response proto, do not use directly. list backup operations list backup operations ( request : typing .
- InternalUpdateGraphOperationRequest , dict , ] ] = None , , database : typing .

