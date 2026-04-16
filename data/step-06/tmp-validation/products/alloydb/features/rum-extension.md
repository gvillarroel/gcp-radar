---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.067Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "RUM extension"
feature_slug: "rum-extension"
latest_feature_date: "2026-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/full-text-search-overview"
  - "https://docs.cloud.google.com/alloydb/docs/ai/create-rum-index"
  - "https://docs.cloud.google.com/alloydb/docs/reference/extensions"
keywords:
  - "relevance"
  - "phrase"
  - "enables"
  - "searches"
  - "ranking"
  - "faster"
  - "extension"
---

# RUM extension

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The RUM extension enables faster phrase searches and relevance ranking for complex full-text search workloads by storing positional information in the index.

## Extended Definition

The RUM extension enables faster phrase searches and relevance ranking for complex full-text search workloads by storing positional information in the index.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/full-text-search-overview](https://docs.cloud.google.com/alloydb/docs/ai/full-text-search-overview)
- [https://docs.cloud.google.com/alloydb/docs/ai/create-rum-index](https://docs.cloud.google.com/alloydb/docs/ai/create-rum-index)
- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)

## Supporting Pages

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- RUM indexes improve upon standard GIN indexes by storing positional information directly in the index, letting you perform faster phrase searches and relevance ranking without accessing the table data. sslinfo Provides information about the SSL certificate that the current client provided when it connected to the instance. tablefunc Provides various functions that return tables (multiple rows). tcn Provides a trigger function that notifies listeners of changes to the content of database tables. tds fdw Provides a foreign data wrapper ( fdw ) for accessing databases that use the Tabular Data Stream (TDS) protocol, such as Microsoft SQL Server or Sybase. temporal tables Provides support for temporal tables.
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flag alloydb.enable pg cron to the value on in the AlloyDB instance where you want to use the extension. pg freespacemap Examines the free space map (FSM). pg hint plan Enables you to improve PostgreSQL execution plans using hints, which are simple descriptions in SQL comments.
- However, you can manually install Orafce to an existing AlloyDB Omni installation. pageinspect Inspects the contents of database pages at a low level. pg background Lets you run arbitrary commands in a background worker. pg bigm Provides full text search capability in PostgreSQL using 2-gram (bigram) indexes for faster full text searches.
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flag alloydb.enable anon to the value on in the AlloyDB instance where you want to use the extension. auto explain Enables automatic logging of execution plans of slow statements, for troubleshooting and more.

### "Full-text search overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/full-text-search-overview](https://docs.cloud.google.com/alloydb/docs/ai/full-text-search-overview)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- RUM improves standard GIN indexes by storing positional information directly in the index, letting you perform faster phrase searches and relevance ranking without accessing the table data.
- The choice of index depends on the balance between search speed, index build time, update speed, and the specific search functionalities required, such as phrase searching or relevance ranking.
- For example, in an ecommerce application, you could first use full-text search with RUM to find products containing specific keywords like "running shoes" and use vector search to find results based on semantic similarity to a user's more detailed query, such as "comfortable footwear for long-distance training." The database then fuses the ranked results from both search components into a single, unified list using the Reciprocal Rank Fusion (RRF) algorithm to produce a final ranking.
- PostgreSQL uses two primary data types and a match operator to manage FTS: tsvector : Represents a document in a searchable format—as a sorted list of distinct lexemes. tsquery : Represents search terms, including boolean operators that let you combine lexemes. @@ : Checks if a tsvector matches a tsquery , allowing for linguistically-aware searches.

### "Create and manage RUM index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/create-rum-index](https://docs.cloud.google.com/alloydb/docs/ai/create-rum-index)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- N/A Index for basic full-text search Use the rum tsvector ops operator class for standard text search that requires fast ranking and phrase search capabilities.
- Operator Class Main Use Case Limitations rum tsvector ops Standard full-text search with ranking and phrase search.
- It provides examples for common use cases, including ranking, phrase searching, and sorting by timestamp.
- The <=> operator computes the relevance score, or distance, between the document and the query directly from the index, enabling fast sorting: SELECT title , content FROM documents WHERE search vector @@ to tsquery ( 'english' , 'search <-> engine' ) ORDER BY search vector < = > to tsquery ( 'english' , 'search <-> engine' ); Populate documents table with more data: INSERT INTO documents ( title , content ) VALUES ( 'Title1' , 'English is my primary language.' ); INSERT INTO documents ( title , content ) VALUES ( 'Title2' , 'Google has a great engineering culture' ); Run a prefix search query.

