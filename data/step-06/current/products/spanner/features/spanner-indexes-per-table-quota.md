---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.280Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner indexes per table quota"
feature_slug: "spanner-indexes-per-table-quota"
latest_feature_date: "2023-04-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backfill-embeddings"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
keywords:
  - "quota"
  - "increased"
  - "maximum"
  - "number"
  - "indexes"
  - "table"
---

# Spanner indexes per table quota

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Increased the maximum number of indexes allowed per table in Spanner from 32 to 128.

## Extended Definition

Increased the maximum number of indexes allowed per table in Spanner from 32 to 128.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)

## Supporting Pages

### "Generate vector embeddings for textual data in bulk using partitioned DML\

- URL: [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , DATA COLUMN NAME ))) ) / @ remote udf max rows per rpc= MAX ROWS / - > 'predictions' - > 0 - > 'embeddings' - > 'values' ), EMBEDDING VERSION COLUMN = MODEL VERSION WHERE FILTER CONDITION ; Replace the following: TABLE NAME : the name of the table with the textual data EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings DATA COLUMN NAME : the name of the column with the textual data PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI embedding model MODEL VERSION : the version of the Vertex AI embedding model MAX ROWS : the maximum number of rows per RPC EMBEDDING VERSION COLUMN : the column that manages the version of the text embedding model used to backfill your embeddings FILTER CONDITION : a partitionable filter condition that you want to apply An example backfill query for the products table: GoogleSQL UPDATE products SET products . desc embed = ( SELECT embeddings . values FROM SAFE .
- EMBEDDING VERSION COLUMN = MODEL VERSION WHERE FILTER CONDITION ; Replace the following: TABLE NAME : the name of the table with the textual data EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings DATA COLUMN NAME : the name of the column with the textual data MODEL NAME : the name of the Vertex AI embedding model MAX ROWS : the maximum number of rows per RPC EMBEDDING VERSION COLUMN : the column that manages the version of the embedding model used to backfill your embeddings MODEL VERSION : the version of the text embedding model FILTER CONDITION : a partitionable filter condition that you want to apply Using SAFE.ML.PREDICT returns NULL for failed requests.
- PREDICT ( MODEL embedding model , ( SELECT products . value AS CONTENT ) ) @{ remote udf max rows per rpc = 200 } ), products . desc embed model version = MODEL VERSION WHERE products . desc embed IS NULL ; Size of text in the data column The Vertex AI embedding model has limits on the maximum number of tokens for each text input.
- GoogleSQL ALTER TABLE Products ADD COLUMN desc embed model version INT64 ; PostgreSQL ALTER TABLE Products ADD COLUMN desc embed model version INT8 ; Increase the quota for Vertex AI You might need to increase the Vertex AI API quota for the region which uses the text embedding model.

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- As of the writing of this document, the maximum number of tables per database in Spanner is 2560, which is more than enough for most games.
- The updated command for creating the table and index looks like this: CREATE TABLE Player ( PlayerID STRING ( 36 ) NOT NULL , IndexPartition INT64 NOT NULL Attribute INT64 NOT NULL ) PRIMARY KEY ( PlayerID ) CREATE INDEX idx attribute ON Player ( IndexPartition , Attribute ) The IndexPartition value needs to have a limited range for efficient querying, but it should also have range that is at least double the number of splits for efficient distribution.
- In the following example, there is a table for long-term player high-score records: CREATE TABLE Ranking ( PlayerID STRING ( 36 ) NOT NULL , GameMode INT64 NOT NULL , Score INT64 NOT NULL ) PRIMARY KEY ( PlayerID , GameMode ) This table contains the player ID (UUIDv4), a number representing a game mode, stage, or season, and the player's score.
- CREATE TABLE Player ( PlayerID STRING ( 36 ) NOT NULL , Attribute INT64 NOT NULL ) PRIMARY KEY ( PlayerID ) CREATE INDEX idx attribute ON Player ( Attribute ) And the index was queried to find up to ten players with Attribute=23 , like this: SELECT PlayerID FROM Player @ { force index = idx attribute } WHERE Attribute = 23 LIMIT 10 According to the documentation on optimizing schema design , Spanner stores index data in the same way as tables, with one row per index entry.

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- The values include PRIMARY KEY , LOCAL , or GLOBAL . parent table name character varying Secondary indexes can be interleaved in a parent table, as discussed in Creating a secondary index .
- Some tables that are available with Spanner but not open source PostgreSQL, such as database options , index columns , indexes , and spanner statistics are available.
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.
- Column name Type Description table catalog character varying The database name. table schema character varying The name of the schema that contains the table that contains the column that is used by the constraint. table name character varying The name of the table that contains the column that is used by the constraint. column name character varying The name of the column that is used by the constraint. constraint catalog character varying The database name. constraint schema character varying The name of the constraint's schema. constraint name character varying The name of the constraint. constraint table usage This view contains one row for each table used by a constraint.

