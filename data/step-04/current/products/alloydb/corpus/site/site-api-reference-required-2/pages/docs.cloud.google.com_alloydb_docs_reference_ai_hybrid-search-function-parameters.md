---
title: "Hybrid search function parameters \_|\_ AlloyDB for PostgreSQL \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters
  title: "Hybrid search function parameters \_|\_ AlloyDB for PostgreSQL \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Reference
Send feedback
Hybrid search function parameters
Stay organized with collections
Save and categorize content based on your preferences.
The AlloyDB for PostgreSQL hybrid_search function accepts several parameters to control the search
and fusion process. Understanding these parameters helps you refine search
results to meet your specific needs. This document provides an overview of the
available parameters. To learn how to perform hybrid search using the vector
extension, see Run a hybrid vector similarity search .
Main parameters
Parameter
Type
Description
search_inputs
JSONB[]
Required. An array of JSONB objects, where each object defines a search component.
id_type
anyelement
The data type of the output ID column. Defaults to NULL::TEXT .
include_json_output
BOOLEAN
Includes detailed JSON output in the results. Defaults to FALSE . Setting this to TRUE can impact query performance.
fusion_algorithm
TEXT
The fusion algorithm to use. The only supported value is 'RRF' . Defaults to 'RRF' .
Vector search parameters
Set the data_type field to 'vector' in the search_inputs JSONB object.
Parameter
Type
Description
data_type
TEXT
Required. Must be 'vector' .
table_name
TEXT
Required. The name of the table to search.
key_column
TEXT
Required. The name of the document ID column.
vec_column
TEXT
Required. The name of the vector column.
distance_operator
TEXT
Required. The distance operator to use, for example, ' ' for cosine distance.
query_vector
TEXT
Required. The string representation of the vector to search for.
limit
INTEGER
Required. The maximum number of results to return from this search component.
weight
FLOAT
The contribution of this component to the final RRF score, from 0.0 to 1.0. If you don't provide weights, they are distributed evenly.
filter_condition
TEXT
A SQL WHERE clause to apply to this component's subquery.
Text search parameters
Set the data_type field to 'text' in the search_inputs JSONB object.
Parameter
Type
Description
data_type
TEXT
Required. Must be 'text' .
table_name
TEXT
Required. The name of the table to search.
key_column
TEXT
Required. The name of the document ID column.
text_column
TEXT
Required. The name of the tsvector or text column.
query_text_input
TEXT
Required. The text string for keyword matching.
limit
INTEGER
Required. The maximum number of results to return from this search component.
weight
FLOAT
The contribution of this component to the final RRF score, from 0.0 to 1.0. If you don't provide weights, they are distributed evenly.
ranking_function
TEXT
The full-text search ranking function. For GIN indexes, set to 'ts_rank' .
For RUM indexes, set to ' ' . Defaults to 'ts_rank' .
query_parser
TEXT
The full-text search query parser function. Defaults to 'ai.g_to_tsquery' .
filter_condition
TEXT
A SQL WHERE clause to apply to this component's subquery.
What's next
Learn how to run a hybrid vector similarity search .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
