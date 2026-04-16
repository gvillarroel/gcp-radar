---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.244Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner GoogleSQL STRING function"
feature_slug: "spanner-googlesql-string-function"
latest_feature_date: "2024-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/spanner/docs/ml-tutorial"
keywords:
  - "converts"
  - "string"
  - "generally"
  - "available"
  - "googlesql"
  - "json"
---

# Spanner GoogleSQL STRING function

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

The Spanner GoogleSQL STRING JSON function is now generally available and converts a JSON string to a SQL STRING.

## Extended Definition

The Spanner GoogleSQL STRING JSON function is now generally available and converts a JSON string to a SQL STRING.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/ml-tutorial](https://docs.cloud.google.com/spanner/docs/ml-tutorial)

## Supporting Pages

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- The following columns in the SPANNER SYS statistics tables: Transaction statistics : TOTAL LATENCY DISTRIBUTION and OPERATIONS BY TABLE Query statistics : LATENCY DISTRIBUTION Lock Statistics : SAMPLE LOCK REQUESTS We recommend using the following JSON-compatible string representation columns instead: Transaction statistics : TOTAL LATENCY DISTRIBUTION JSON STRING and OPERATIONS BY TABLE JSON STRING Query statistics : LATENCY DISTRIBUTION JSON STRING Lock Statistics : SAMPLE LOCK REQUESTS JSON STRING TABLESAMPLE We recommend that you apply a custom function F , which converts a row to TEXT or BYTEA .
- In the following example, we use CONCAT as our function F : -- Given the following schema CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, first name VARCHAR(1024), last name VARCHAR(1024), singer info BYTEA ); -- Create a hash for each row (using all columns) WITH hashed rows AS ( SELECT , ABS(MOD(spanner.farm fingerprint( CONCAT( singer id::text, first name, last name, singer info::text ) ), 100)) AS hash value FROM singers ) -- Sample data SELECT FROM hashed rows WHERE hash value < 10 -- sample roughly 10% LIMIT 10; / Optional: LIMIT to a max of 10 rows to be returned / VALUE IN UNNEST(ARRAY(...)) Use the equality operator with the ANY function, as shown in the following example: SELECT value = any(array[...]) GoogleSQL dialect function differences GoogleSQL function PostgreSQL dialect recommendation ACOSH Use the formula of the function explicitly, as shown in the following example: SELECT LN(x + SQRT(x x - 1)); APPROX COSINE DISTANCE No recommendation available.
- FROM BASE32 FROM BASE64 FROM HEX GENERATE ARRAY GENERATE DATE ARRAY NET.HOST Use a regular expression and the substring function, as shown in the following example: / Use modified regular expression from https://tools.ietf.org/html/rfc3986#appendix-A. / SELECT Substring('http://www.google.com/test' FROM '^(?:[^:/?#]+:)?(?://)?([^/?#] )?[^?#] (?:\\?[^#] )?(?:#. )?') NET.IP FROM STRING No recommendation available.
- SELECT to json(table) FROM table We recommend explicitly mapping each column with the jsonb build object function: WITH singers AS ( SELECT 1::int8 AS id, 'Singer First Name'::text AS first name ) SELECT jsonb build object('id', id, 'first name', first name) FROM singers; ORDER BY … COLLATE … No recommendation available.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Returns empty if the default leader is not set: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . option name = 'default leader' Return information about each index in the user's schema: SELECT t . table schema , t . table name , t . index name , t . parent table name FROM information schema . indexes AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . index type != 'PRIMARY KEY' ORDER BY t . table catalog , t . table schema , t . table name , t . index name Returns all the columns that use options other than the default: SELECT t . table schema , t . table name , t . column name , t . option type , t . option value , t . option name FROM information schema . column options AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) Returns the current optimizer related database options: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . schema name = '' AND s . option name IN ( 'optimizer version' , 'optimizer statistics package' ) Returns all available statistics packages: SELECT FROM information schema . spanner statistics ; Return all sequences: SELECT FROM information schema . sequences ; Return all sequence options for the sequence named "MySequence" SELECT FROM information schema . sequence options WHERE name = "MySequence" ; Return the names of all property graphs and their definitions: SELECT property graph name , property graph metadata json FROM information schema . property graphs Return the names of all property graphs together with their labels and properties: SELECT property graph name , property graph metadata json . labels , property graph metadata json . propertyDeclarations FROM information schema . property graphs What's next Learn about available Introspection tools to help you investigate database issues.
- The PROPERTY GRAPH METADATA JSON column contains a PropertyGraph JSON object defined as the following: JSON object name Field name JSON type Description PropertyGraph catalog string The name of the catalog.
- GraphElementTable name string The name of the graph element table. kind string Either NODE or EDGE . baseCatalogName string The name of the catalog containing the base table. baseSchemaName string The name of the schema containing the base table. baseTableName string The name of the input table from which elements are created. keyColumns array<string> The column names that constitute the element key. labelNames array<string> The label names attached to this element table. propertyDefinitions array<object> A list of GraphPropertyDefinition objects. dynamicLabelExpr string The name of the column that contains the DYNAMIC LABEL definition. dynamicPropertyExpr string The name of the column that contains the DYNAMIC PROPERTIES definition. sourceNodeTable object A GraphNodeTableReference object.
- An empty string if unnamed. name string The name of the property graph. nodeTables array<object> A list of GraphElementTable objects for nodes. edgeTables array<object> A list of GraphElementTable objects for edges. labels array<object> A list of GraphElementLabel objects. propertyDeclarations array<object> A list of GraphPropertyDeclaration objects.

### Generate ML predictions using SQL \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/ml-tutorial](https://docs.cloud.google.com/spanner/docs/ml-tutorial)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GoogleSQL Register the gemini-pro model CREATE MODEL GeminiPro INPUT ( prompt STRING ( MAX )) OUTPUT ( content STRING ( MAX )) REMOTE OPTIONS ( endpoint = '//aiplatform.googleapis.com/projects/ PROJECT /locations/ LOCATION /publishers/google/models/gemini-pro' , default batch size = 1 ); Replace the following: PROJECT : the project ID LOCATION : the region where you are using Vertex AI Run the model SELECT content FROM ML .
- PREDICT ( MODEL GeminiPro , ( SELECT "Is 7 a prime number?" AS prompt ), STRUCT ( 256 AS maxOutputTokens , 0.2 AS temperature , 40 as topK , 0.95 AS topP ) ); Expected output The expected out is as follows: + --------------------+ content + --------------------+ "Yes" + --------------------+ PostgreSQL Run the model select spanner . ml predict row ( '{ "endpoint": "projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-pro", "default batch size": 1 }' :: jsonb , '{ "instances":[{"prompt": "Is 7 a prime number?"}], "parameters":{"maxOutputTokens":256, "topK": 40, "topP":0.96, "temperature":0.2} }' ); Expected output The expected out is the following: +--------------------+ content +--------------------+ "Yes" +--------------------+ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following is an example schema from Classification and regression Overview CREATE MODEL MyClassificationModel INPUT ( length FLOAT64 , material STRING ( MAX ), tag array ARRAY<STRING ( MAX ) > ) OUTPUT ( scores ARRAY<FLOAT64> , classes ARRAY<STRING ( MAX ) > ) REMOTE OPTIONS ( endpoint = '//aiplatform.googleapis.com/projects/ PROJECT /locations/ LOCATION /endpoints/ ENDPOINT ID ' ) Replace the following: PROJECT ID : the ID of your Google Cloud project LOCATION : the ID of the Google Cloud region that the model is located in—for example, us-central1 ENDPOINT ID : the ID of the ML model you want to use—for example, gemini-pro For more information about models, see Model API reference for Generative AI .
- SELECT spanner . ml predict row ( 'projects/ PROJECT ID /locations/ REGION ID /endpoints/ ENDPOINT ID ' :: text , '{ "instances": [ INSTANCES ], "parameters": { PARAMETERS } }' :: jsonb ); `` Replace the following : PROJECT ID : the ID of the Google Cloud project that the model is located in REGION ID : the ID of the Google Cloud region the model is located in—for example, us-central1 ENDPOINT ID : the ID of the model endpoint INSTANCES : the inputs to the prediction call, in JSON format PARAMETERS : optional parameters to the prediction call, in JSON format This query produces a JSON response.

