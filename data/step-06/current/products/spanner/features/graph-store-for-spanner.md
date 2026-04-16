---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.196Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Graph store for Spanner"
feature_slug: "graph-store-for-spanner"
latest_feature_date: "2025-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/graph/iso-standards"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient"
keywords:
  - "retrieving"
  - "langchain"
  - "store"
  - "integration"
  - "supports"
  - "graph"
---

# Graph store for Spanner

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner Graph now supports a LangChain graph-store integration for retrieving and storing nodes and edges in a graph database.

## Extended Definition

Spanner Graph now supports a LangChain graph-store integration for retrieving and storing nodes and edges in a graph database.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/graph/iso-standards](https://docs.cloud.google.com/spanner/docs/graph/iso-standards)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)

## Supporting Pages

### Spanner Graph and ISO standards \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/graph/iso-standards](https://docs.cloud.google.com/spanner/docs/graph/iso-standards)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Spanner Graph is based on two ISO standards: ISO/IEC 9075-16:2023 - Information technology — Database languages SQL Property Graph Queries (SQL/PGQ) , Edition 1, 2023 ISO/IEC 39075:2024 - Information technology — Database languages — GQL , Edition 1, 2024 The following tables describe the high-level relationship between SQL/PGQ, GQL, and how Spanner Graph supports these standards.
- The page describes how Spanner Graph supports the ISO international standard query language for graph databases.
- Supports using CREATE PROPERTY GRAPH with open types and closed types.
- Spanner Graph supports additional features in the ISO standards.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Returns empty if the default leader is not set: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . option name = 'default leader' Return information about each index in the user's schema: SELECT t . table schema , t . table name , t . index name , t . parent table name FROM information schema . indexes AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . index type != 'PRIMARY KEY' ORDER BY t . table catalog , t . table schema , t . table name , t . index name Returns all the columns that use options other than the default: SELECT t . table schema , t . table name , t . column name , t . option type , t . option value , t . option name FROM information schema . column options AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) Returns the current optimizer related database options: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . schema name = '' AND s . option name IN ( 'optimizer version' , 'optimizer statistics package' ) Returns all available statistics packages: SELECT FROM information schema . spanner statistics ; Return all sequences: SELECT FROM information schema . sequences ; Return all sequence options for the sequence named "MySequence" SELECT FROM information schema . sequence options WHERE name = "MySequence" ; Return the names of all property graphs and their definitions: SELECT property graph name , property graph metadata json FROM information schema . property graphs Return the names of all property graphs together with their labels and properties: SELECT property graph name , property graph metadata json . labels , property graph metadata json . propertyDeclarations FROM information schema . property graphs What's next Learn about available Introspection tools to help you investigate database issues.
- GraphElementTable name string The name of the graph element table. kind string Either NODE or EDGE . baseCatalogName string The name of the catalog containing the base table. baseSchemaName string The name of the schema containing the base table. baseTableName string The name of the input table from which elements are created. keyColumns array<string> The column names that constitute the element key. labelNames array<string> The label names attached to this element table. propertyDefinitions array<object> A list of GraphPropertyDefinition objects. dynamicLabelExpr string The name of the column that contains the DYNAMIC LABEL definition. dynamicPropertyExpr string The name of the column that contains the DYNAMIC PROPERTIES definition. sourceNodeTable object A GraphNodeTableReference object.
- An empty string if unnamed. name string The name of the property graph. nodeTables array<object> A list of GraphElementTable objects for nodes. edgeTables array<object> A list of GraphElementTable objects for edges. labels array<object> A list of GraphElementLabel objects. propertyDeclarations array<object> A list of GraphPropertyDeclaration objects.
- GraphNodeTableReference nodeTableName string The name of the graph element table. edgeTableColumns array<string> The name of the columns that are associated with the source and destination keys for the edges. nodeTableColumns array<string> The name of the columns that are associated with the source and destination keys for the nodes.

### "Class DatabaseAdminAsyncClient (3.63.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- RestoreDatabaseRequest ( backup="backup value", parent="parent value", database id="database id value", ) Make the request operation = client. restore database (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.spanner admin database v1.types.RestoreDatabaseRequest , dict]] The request object.
- If none is provided, then the first transport in the registry is used. instance partition path instance partition path ( project : str , instance : str , instance partition : str ) - > str Returns a fully-qualified instance partition string. instance path instance path ( project : str , instance : str ) - > str Returns a fully-qualified instance string. internal update graph operation internal update graph operation ( request : typing .
- InternalUpdateGraphOperationRequest ( database="database value", operation id="operation id value", vm identity token="vm identity token value", ) Make the request response = await client. internal update graph operation (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.spanner admin database v1.types.InternalUpdateGraphOperationRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 async def sample internal update graph operation(): Create a client client = spanner admin database v1.

