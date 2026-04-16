---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.232Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner ARRAY VECTOR LENGTH parameter"
feature_slug: "spanner-array-vector-length-parameter"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/vector-search-tutorial"
  - "https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql"
keywords:
  - "parameter"
  - "length"
  - "allow"
  - "vector"
  - "array"
  - "type"
  - "added"
---

# Spanner ARRAY VECTOR LENGTH parameter

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added a VECTOR LENGTH parameter to the ARRAY type to allow fixed-size arrays for vector search.

## Extended Definition

Spanner added a VECTOR LENGTH parameter to the ARRAY type to allow fixed-size arrays for vector search.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)

## Supporting Pages

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- For arrays, the value ARRAY. character maximum length BIGINT The declared maximum length for character and bit string data types.
- Tables created with a PRIMARY KEY clause have a pseudo-index entry generated with the name PRIMARY KEY , which allows the fields of the primary key to be identified. index type character varying The type of the index.
- Includes the subtype if an ARRAY is returned. spanner determinism character varying The user specified determinism of the function ( DETERMINISTIC , NOT DETERMINISTIC STABLE , or NOT DETERMINISTIC VOLATILE ).
- This column has a NULL value for other constraint types. parameters This row-filtered view defines the arguments for each user defined and change stream read function.

### "Get started using Spanner for generative AI applications \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- In a new tab in Spanner Studio , copy and paste the following DDL statement to re-create the productDescriptionEmbedding column: ALTER TABLE products DROP COLUMN productDescriptionEmbedding ; ALTER TABLE products ADD COLUMN productDescriptionEmbedding ARRAY<FLOAT32> ( vector length = > VECTOR LENGTH VALUE ); Replace VECTOR LENGTH VALUE with the maximum output dimensions of the embedding model you've chosen.
- CREATE TABLE products ( categoryId INT64 NOT NULL , productId INT64 NOT NULL , productName STRING ( MAX ) NOT NULL , productDescription STRING ( MAX ) NOT NULL , productDescriptionEmbedding ARRAY<FLOAT32> , createTime TIMESTAMP NOT NULL OPTIONS ( allow commit timestamp = true ), inventoryCount INT64 NOT NULL , priceInCents INT64 , ) PRIMARY KEY ( categoryId , productId ); Don't make any changes in Show encryption options .
- Copy and paste the following DDL statement to create the vector index: CREATE VECTOR INDEX ProductDescriptionEmbeddingIndex ON products ( productDescriptionEmbedding ) WHERE productDescriptionEmbedding IS NOT NULL OPTIONS ( distance type = 'COSINE' ); Click Run .
- Note: In a production environment, instead of dropping the original embedding column first, we recommend that you add a new column with the new vector length definition.

### "Commit timestamps in PostgreSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- In addition this update expects the LastUpdateTime column added by applying the DDL statement "ALTER TABLE Albums ADD COLUMN LastUpdateTime TIMESTAMP OPTIONS (allow commit timestamp=true)" Example: @param string $instanceId The Spanner instance ID. @param string $databaseId The Spanner database ID. / function update data with timestamp column(string $instanceId, string $databaseId): void { $spanner = new SpannerClient(); $instance = $spanner->instance($instanceId); $database = $instance->database($databaseId); $operation = $database->transaction(['singleUse' => true]) ->updateBatch('Albums', [ ['SingerId' => 1, 'AlbumId' => 1, 'MarketingBudget' => 1000000, 'LastUpdateTime' => $spanner->commitTimestamp()], ['SingerId' => 2, 'AlbumId' => 2, 'MarketingBudget' => 750000, 'LastUpdateTime' => $spanner->commitTimestamp()], ]) ->commit(); print('Updated data.' .
- You can add the column by running the add column sample or by running this DDL statement against your database: ALTER TABLE Albums ADD COLUMN MarketingBudget INT64 In addition this update expects the LastUpdateTime column added by applying this DDL statement against your database: ALTER TABLE Albums ADD COLUMN LastUpdateTime TIMESTAMP OPTIONS(allow commit timestamp=true) """ spanner client = spanner .
- CreateInsertCommand ( "Performances" , new SpannerParameterCollection { { "SingerId" , SpannerDbType .
- CreateUpdateCommand ( "Albums" , new SpannerParameterCollection { { "SingerId" , SpannerDbType .

