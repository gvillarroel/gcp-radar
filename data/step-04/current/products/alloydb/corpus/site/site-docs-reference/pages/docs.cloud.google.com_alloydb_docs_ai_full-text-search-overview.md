---
title: "Full-text search overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/alloydb/docs/ai/full-text-search-overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/ai/full-text-search-overview
  title: "Full-text search overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
Full-text search overview
Stay organized with collections
Save and categorize content based on your preferences.
Full-text search (FTS) lets you identify natural-language documents that satisfy
a query. This approach is more effective than standard string matching because
it accounts for linguistic nuances, such as ignoring common words like "the" and
matching different forms of a word, such as "run", "running", or "ran".
AlloyDB for PostgreSQL supports all full-text search features and capabilities. Apart from
support for GIN and GiST indexes, AlloyDB also provides the RUM extension for
high-performance full-text search. PostgreSQL 17 or lower supports this
extension.
Core concepts of full-text search
To effectively implement full-text search (FTS), you should understand how
PostgreSQL processes and searches text. The unit of search, a document , is
typically a text column or a combination of columns from a row. The index build
process parses this document to associate words (or lexemes , the base form of
a word) with the row.
This process involves a preprocessing pipeline that transforms raw text into a
searchable format by:
Breaking text into tokens.
Removing common stop words.
Normalizing words to their root form; for example, "run" is the lexeme for
"run," "runs," "running," and "ran."
Using full-text search also requires that you learn about specialized data types,
operators, and various indexing strategies, including built-in PostgreSQL
indexes and the high-performance RUM
indexes.
PostgreSQL uses two primary data types and a match operator to manage FTS:
tsvector : Represents a document in a searchable format—as a sorted list of
distinct lexemes.
tsquery : Represents search terms, including boolean operators that let you
combine lexemes.
@@ : Checks if a tsvector matches a tsquery , allowing for
linguistically-aware searches.
AlloyDB supports all index types for full-text search that built-in PostgreSQL
supports. The choice of index depends on the balance between search speed, index
build time, update speed, and the specific search functionalities required, such
as phrase searching or relevance ranking.
AlloyDB also supports the RUM extension for complex full-text search operations.
RUM improves standard GIN indexes by storing positional information directly in
the index, letting you perform faster phrase searches and relevance ranking
without accessing the table data.
For more information about how to create and use RUM indexes in AlloyDB, see
Create and manage a RUM index .
Combine full-text and semantic search
The most powerful search implementations often combine full-text search using
RUM indexes and vector search. Use hybrid search to merge the strengths of
semantic understanding and exact keyword matching, merging the distinct result
sets for a comprehensive ranking.
For example, in an ecommerce application, you could first use full-text search
with RUM to find products containing specific keywords like "running shoes" and
use vector search to find results based on semantic similarity to a user's more
detailed query, such as "comfortable footwear for long-distance training." The
database then fuses the ranked results from both search components into a
single, unified list using the Reciprocal Rank Fusion (RRF) algorithm to produce
a final ranking.
For more information about using this hybrid approach, see Run a
hybrid vector similarity
search .
What's next
Learn how to Create and manage a RUM
index .
Learn how to Run a hybrid vector similarity
search .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
