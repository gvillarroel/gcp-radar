---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.321Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "NUMERIC input support for SQL mathematical functions"
feature_slug: "numeric-input-support-for-sql-mathematical-functions"
latest_feature_date: "2021-06-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "mathematical"
  - "numeric"
  - "input"
  - "functions"
  - "allows"
---

# NUMERIC input support for SQL mathematical functions

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner SQL now allows EXP, LN, LOG, LOG10, and SQRT to accept NUMERIC input directly without casting to FLOAT64.

## Extended Definition

Spanner SQL now allows EXP, LN, LOG, LOG10, and SQRT to accept NUMERIC input directly without casting to FLOAT64.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function](https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### Spanner remote functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function](https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported types Remote functions support the following data types as argument or return types: ARRAY (of any of the following supported types) BOOLEAN BYTES DATE JSON INTEGER NUMERIC STRING TIMESTAMP Limitations You cannot create table-valued remote functions.
- Hosting functions in this manner allows complex business logic to be split out into separate remote functions.
- MAX LOSSLESS = 9007199254740992 @functions framework . http def batch add ( request ): try : return value = [] request json = request . get json () calls = request json [ 'calls' ] for call in calls : return value . append ( sum ([ int ( x ) if isinstance ( x , str ) else x for x in call if x is not None ])) replies = [ str ( x ) if x > MAX LOSSLESS or x < - MAX LOSSLESS else x for x in return value ] return json = jsonify ( { "replies" : replies } ) return return json except Exception as e : return jsonify ( { "errorMessage" : str ( e ) } ), 400 Assuming that the function is deployed in the project PROJECT ID in region us-east1 as the function name remote add , it can be accessed using the endpoint https://us-east1- PROJECT ID .cloudfunctions.net/remote add .
- Note // that the order of the values within replies field matches the calls field from // the request. { "replies" : [ 3 , // 1 + 2 = 3 7 // 3 + 4 = 7 ] } An example of a failed response: { // The error message returned by your Cloud Run functions to indicate an error. // In this sample, the error message states that an overflow occurred when summing two numbers. "errorMessage" : "Overflow detected when calculating sum of two numbers." } HTTPS response code Your endpoint returns a 200 HTTPS code for a successful response.

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Only two values are supported: 2 for double precision float8 , and bigint 10 for numeric For all other data types the value is NULL . numeric scale BIGINT Contains the scale of the numeric column type, which is the number of precision base units after the radix point.
- All other principals can see only parameters for user defined and change stream read functions on which the EXECUTE fine-grained access control privilege is granted to the current database role, to roles of which the current database role is a member, or to public .
- For arrays, the value ARRAY . option value character varying The value of the option. routine privileges This row-filtered view lists all fine-grained access control privileges granted on all change stream read functions to any database role, including public .
- All other principals can see only user defined and change stream read functions on which the EXECUTE fine-grained access control privilege is granted to the current database role, to roles of which the current database role is a member, or to public .

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- GraphElementTable name string The name of the graph element table. kind string Either NODE or EDGE . baseCatalogName string The name of the catalog containing the base table. baseSchemaName string The name of the schema containing the base table. baseTableName string The name of the input table from which elements are created. keyColumns array<string> The column names that constitute the element key. labelNames array<string> The label names attached to this element table. propertyDefinitions array<object> A list of GraphPropertyDefinition objects. dynamicLabelExpr string The name of the column that contains the DYNAMIC LABEL definition. dynamicPropertyExpr string The name of the column that contains the DYNAMIC PROPERTIES definition. sourceNodeTable object A GraphNodeTableReference object.
- All other principals can see only parameters for change stream read functions on which the EXECUTE fine-grained access control privilege is granted to the current database role, to roles of which the current database role is a member, or to public .
- All other principals can see only options for change stream read functions on which the EXECUTE fine-grained access control privilege is granted to the current database role, to roles of which the current database role is a member, or to public .
- All other principals can see only change stream read functions on which the EXECUTE fine-grained access control privilege is granted to the current database role, to roles of which the current database role is a member, or to public .

