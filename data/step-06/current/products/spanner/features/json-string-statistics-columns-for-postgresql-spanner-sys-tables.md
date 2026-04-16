---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.156Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "JSON string statistics columns for PostgreSQL SPANNER_SYS tables"
feature_slug: "json-string-statistics-columns-for-postgresql-spanner-sys-tables"
latest_feature_date: "2026-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "statistics"
  - "postgresql"
  - "string"
  - "columns"
  - "tables"
  - "json"
---

# JSON string statistics columns for PostgreSQL SPANNER_SYS tables

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner adds JSON-string versions of selected transaction, query, and lock statistics columns for PostgreSQL-dialect databases in SPANNER_SYS tables.

## Extended Definition

Spanner adds JSON-string versions of selected transaction, query, and lock statistics columns for PostgreSQL-dialect databases in SPANNER_SYS tables.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following columns in the SPANNER SYS statistics tables: Transaction statistics : TOTAL LATENCY DISTRIBUTION and OPERATIONS BY TABLE Query statistics : LATENCY DISTRIBUTION Lock Statistics : SAMPLE LOCK REQUESTS We recommend using the following JSON-compatible string representation columns instead: Transaction statistics : TOTAL LATENCY DISTRIBUTION JSON STRING and OPERATIONS BY TABLE JSON STRING Query statistics : LATENCY DISTRIBUTION JSON STRING Lock Statistics : SAMPLE LOCK REQUESTS JSON STRING TABLESAMPLE We recommend that you apply a custom function F , which converts a row to TEXT or BYTEA .
- In the following example, we use CONCAT as our function F : -- Given the following schema CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, first name VARCHAR(1024), last name VARCHAR(1024), singer info BYTEA ); -- Create a hash for each row (using all columns) WITH hashed rows AS ( SELECT , ABS(MOD(spanner.farm fingerprint( CONCAT( singer id::text, first name, last name, singer info::text ) ), 100)) AS hash value FROM singers ) -- Sample data SELECT FROM hashed rows WHERE hash value < 10 -- sample roughly 10% LIMIT 10; / Optional: LIMIT to a max of 10 rows to be returned / VALUE IN UNNEST(ARRAY(...)) Use the equality operator with the ANY function, as shown in the following example: SELECT value = any(array[...]) GoogleSQL dialect function differences GoogleSQL function PostgreSQL dialect recommendation ACOSH Use the formula of the function explicitly, as shown in the following example: SELECT LN(x + SQRT(x x - 1)); APPROX COSINE DISTANCE No recommendation available.
- TO BASE64 TO CODE POINTS TO HEX VAR SAMP Use the formula of the function explicitly (unbiased variance), as shown in the following: -- Use formula directly (unbiased) WITH numbers AS ( SELECT 1 AS x UNION ALL SELECT 2 UNION ALL SELECT 3 ), mean AS ( SELECT Avg(x)::float8 AS mean FROM numbers ) SELECT Sum(Power(numbers.x - mean.mean, 2)) / (Count(x) - 1) AS variance FROM numbers CROSS JOIN mean VARIANCE Use the formula of the function explicitly (unbiased variance), as shown in the following example: -- Use formula directly (unbiased VARIANCE like VAR SAMP) WITH numbers AS ( SELECT 1 AS x UNION ALL SELECT 2 UNION ALL SELECT 3 ), mean AS ( SELECT AVG(x)::float8 AS mean FROM numbers ) SELECT SUM(POWER(numbers.x - mean.mean, 2)) / (COUNT(x) - 1) AS variance FROM numbers CROSS JOIN mean What's next Learn more about Spanner's PostgreSQL language support .
- Use a subquery with the ORDER BY or LIMIT clauses, as shown in the following example: SELECT FROM ( (expression) UNION ALL SELECT NULL, … -- as many columns as you have ) AS rows ORDER BY 1 NULLS LAST LIMIT 1; ARRAY CONCAT AGG You can use ARRAY AGG and UNNEST as shown in the following example: WITH albums AS ( SELECT ARRAY['Song A', NULL, 'Song B'] AS songs UNION ALL SELECT NULL UNION ALL SELECT ARRAY[]::TEXT[] ) SELECT ARRAY AGG(song) FROM albums, UNNEST(songs) song; ARRAY FIRST Use the array subscript operator, as shown in the following example: SELECT array expression[1]; Note that this will return NULL for empty arrays.

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Some tables that are available with Spanner but not open source PostgreSQL, such as database options , index columns , indexes , and spanner statistics are available.
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.
- In accordance with the SQL standard, the string is either YES or NO , rather than a Boolean value. change streams This row-filtered view lists all of a database's change streams, and notes which ones track the entire database versus specific tables or columns.
- Differences from information schema for PostgreSQL The tables in the information schema for PostgreSQL-dialect databases include columns from the tables in the information schema for open source PostgreSQL and in some cases also include columns from Spanner.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns empty if the default leader is not set: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . option name = 'default leader' Return information about each index in the user's schema: SELECT t . table schema , t . table name , t . index name , t . parent table name FROM information schema . indexes AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . index type != 'PRIMARY KEY' ORDER BY t . table catalog , t . table schema , t . table name , t . index name Returns all the columns that use options other than the default: SELECT t . table schema , t . table name , t . column name , t . option type , t . option value , t . option name FROM information schema . column options AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) Returns the current optimizer related database options: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . schema name = '' AND s . option name IN ( 'optimizer version' , 'optimizer statistics package' ) Returns all available statistics packages: SELECT FROM information schema . spanner statistics ; Return all sequences: SELECT FROM information schema . sequences ; Return all sequence options for the sequence named "MySequence" SELECT FROM information schema . sequence options WHERE name = "MySequence" ; Return the names of all property graphs and their definitions: SELECT property graph name , property graph metadata json FROM information schema . property graphs Return the names of all property graphs together with their labels and properties: SELECT property graph name , property graph metadata json . labels , property graph metadata json . propertyDeclarations FROM information schema . property graphs What's next Learn about available Introspection tools to help you investigate database issues.
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables in the INFORMATION SCHEMA: SELECT t . table name FROM information schema . tables AS t WHERE t . table schema = "SPANNER SYS" Return information about the columns in the user table MyTable in default schema: SELECT t . column name , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table catalog = '' AND t . table schema = '' AND t . table name = 'MyTable' ORDER BY t . table catalog , t . table schema , t . table name , t . ordinal position Return information on what the default leader region for the database is.
- GraphElementTable name string The name of the graph element table. kind string Either NODE or EDGE . baseCatalogName string The name of the catalog containing the base table. baseSchemaName string The name of the schema containing the base table. baseTableName string The name of the input table from which elements are created. keyColumns array<string> The column names that constitute the element key. labelNames array<string> The label names attached to this element table. propertyDefinitions array<object> A list of GraphPropertyDefinition objects. dynamicLabelExpr string The name of the column that contains the DYNAMIC LABEL definition. dynamicPropertyExpr string The name of the column that contains the DYNAMIC PROPERTIES definition. sourceNodeTable object A GraphNodeTableReference object.
- An empty string if unnamed. name string The name of the property graph. nodeTables array<object> A list of GraphElementTable objects for nodes. edgeTables array<object> A list of GraphElementTable objects for edges. labels array<object> A list of GraphElementLabel objects. propertyDeclarations array<object> A list of GraphPropertyDeclaration objects.

