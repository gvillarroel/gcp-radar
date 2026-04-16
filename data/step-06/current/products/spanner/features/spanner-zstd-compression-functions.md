---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.160Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner ZSTD compression functions"
feature_slug: "spanner-zstd-compression-functions"
latest_feature_date: "2026-01-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
keywords:
  - "compression"
  - "decompress"
  - "compress"
  - "zstd"
  - "functions"
  - "string"
  - "added"
---

# Spanner ZSTD compression functions

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added support for ZSTD compression functions to compress and decompress STRING and BYTES values using the Zstandard algorithm.

## Extended Definition

Spanner added support for ZSTD compression functions to compress and decompress STRING and BYTES values using the Zstandard algorithm.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function](https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)

## Supporting Pages

### Spanner remote functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function](https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Supported types Remote functions support the following data types as argument or return types: ARRAY (of any of the following supported types) BOOLEAN BYTES DATE JSON INTEGER NUMERIC STRING TIMESTAMP Limitations You cannot create table-valued remote functions.
- In case of overflow, it returns the error as part of the response. """ import functions framework from flask import jsonify Max INT64 value encoded as a number in JSON by TO JSON STRING.
- MAX LOSSLESS = 9007199254740992 @functions framework . http def batch add ( request ): try : return value = [] request json = request . get json () calls = request json [ 'calls' ] for call in calls : return value . append ( sum ([ int ( x ) if isinstance ( x , str ) else x for x in call if x is not None ])) replies = [ str ( x ) if x > MAX LOSSLESS or x < - MAX LOSSLESS else x for x in return value ] return json = jsonify ( { "replies" : replies } ) return return json except Exception as e : return jsonify ( { "errorMessage" : str ( e ) } ), 400 Assuming that the function is deployed in the project PROJECT ID in region us-east1 as the function name remote add , it can be accessed using the endpoint https://us-east1- PROJECT ID .cloudfunctions.net/remote add .
- Note // that the order of the values within replies field matches the calls field from // the request. { "replies" : [ 3 , // 1 + 2 = 3 7 // 3 + 4 = 7 ] } An example of a failed response: { // The error message returned by your Cloud Run functions to indicate an error. // In this sample, the error message states that an overflow occurred when summing two numbers. "errorMessage" : "Overflow detected when calculating sum of two numbers." } HTTPS response code Your endpoint returns a 200 HTTPS code for a successful response.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- GraphElementTable name string The name of the graph element table. kind string Either NODE or EDGE . baseCatalogName string The name of the catalog containing the base table. baseSchemaName string The name of the schema containing the base table. baseTableName string The name of the input table from which elements are created. keyColumns array<string> The column names that constitute the element key. labelNames array<string> The label names attached to this element table. propertyDefinitions array<object> A list of GraphPropertyDefinition objects. dynamicLabelExpr string The name of the column that contains the DYNAMIC LABEL definition. dynamicPropertyExpr string The name of the column that contains the DYNAMIC PROPERTIES definition. sourceNodeTable object A GraphNodeTableReference object.
- An empty string if unnamed. name string The name of the property graph. nodeTables array<object> A list of GraphElementTable objects for nodes. edgeTables array<object> A list of GraphElementTable objects for edges. labels array<object> A list of GraphElementLabel objects. propertyDeclarations array<object> A list of GraphPropertyDeclaration objects.
- GraphNodeTableReference nodeTableName string The name of the graph element table. edgeTableColumns array<string> The name of the columns that are associated with the source and destination keys for the edges. nodeTableColumns array<string> The name of the columns that are associated with the source and destination keys for the nodes.
- All other principals can see only parameters for change stream read functions on which the EXECUTE fine-grained access control privilege is granted to the current database role, to roles of which the current database role is a member, or to public .

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- This column is never null. table name character varying The name of the table column name character varying The name of the column ordinal position BIGINT The ordinal position of the column in the table, starting with a value of 1 column default character varying A string representation of the open source PostgreSQL expression of the default value of the column, for example, '9'::bigint . is nullable character varying A string that indicates whether the column is nullable.
- The string is either ALWAYS for a generated column or NEVER for a non-generated column. generation expression character varying A string representing the SQL expression of a generated column, or NULL if the column is not a generated column. is updatable character varying Not used.
- All other principals can see only parameters for user defined and change stream read functions on which the EXECUTE fine-grained access control privilege is granted to the current database role, to roles of which the current database role is a member, or to public .
- A row in this table requires the existence of its parent table row. row deletion policy expression character varying An string that contains the expression text that defines the ROW DELETION POLICY . table synonyms This table lists synonym information for the table.

