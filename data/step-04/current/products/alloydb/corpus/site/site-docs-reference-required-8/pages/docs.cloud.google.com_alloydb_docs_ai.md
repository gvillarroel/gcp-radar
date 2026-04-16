---
title: "Build generative AI applications using AlloyDB AI \_|\_ AlloyDB for PostgreSQL\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/ai
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/ai
  title: "Build generative AI applications using AlloyDB AI \_|\_ AlloyDB for PostgreSQL\
    \ \_|\_ Google Cloud Documentation"
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
Build generative AI applications using AlloyDB AI
Stay organized with collections
Save and categorize content based on your preferences.
As a PostgreSQL-compatible database, AlloyDB integrates
seamlessly with the tools and frameworks supported by PostgreSQL, in addition to
other services from the Google Cloud environment.
AlloyDB AI provides a suite of AI and ML features that enable you to build
generative AI applications. These features allow you to build
applications with capabilities like vector search for semantic similarity,
natural language queries, and integration with machine learning models by providers, such as Google, OpenAI, and Anthropic.
To simplify the process of building AI applications, AlloyDB provides the following extensions:
vector extension: the standard pgvector PostgreSQL
extension is customized for AlloyDB, and referred to as vector .
It supports storing generated embeddings in a vector column. The extension also
adds support for scalar quantization features to create IVF indexes. You can
also create an IVFFlat index or HSNW index that are available with stock
pgvector .
alloydb_scann extension: the alloydb_scann extension implements a highly efficient
nearest-neighbor index powered by the ScaNN
algorithm .
You can use the alloydb_scann extension with PostgreSQL 14, 15, 16, and 17.
google_columnar_engine extension: ScaNN index can be loaded into the columnar engine for further accelerating the vector search.
google_ml_integration extension: the google_ml_integration extension
provides AI functions for generating embeddings,
semantic ranking, and implementing AI-based filters, joins and text
generation/summarization. This extension also provides functions to register
metadata for AI models. The registered metadata is then used to invoke predictions from these
models.
alloydb_ai_nl extension: the alloydb_ai_nl extension enables developers
to build applications that accurately and securely answer end user natural
language questions about data in the AlloyDB database. This makes the data
accessible to users who might not be proficient in writing SQL.
The following are some use cases that these extensions enable:
Vector search : use AlloyDB to store vector embeddings and perform highly efficient similarity searches. You can generate a highly efficient nearest-neighbor index powered by the ScaNN algorithm.
Perform intelligent SQL queries using AlloyDB AI functions : use AI directly within your SQL queries. This allows you to re-rank search results for higher relevance, integrate natural language into your SQL queries, and generate multimodal embeddings for vector search.
Call models using model endpoints : register AI models as model endpoints and call the endpoints from within AlloyDB to generate embeddings, invoke predictions, or perform similarity searches.
Generate embeddings and invoke predictions : use Vertex AI text embedding models or registered model endpoints to generate text or multimodal embeddings.
Generate SQL statements from natural language : add natural language capabilities to your application, and interact with AlloyDB by asking questions in natural language. The natural language questions are then processed by AlloyDB AI to automatically generate an accurate SQL query that retrieve the answer.
What's next
Perform vector search tutorial
Integrate AlloyDB with Vertex AI .
Create indexes and query vectors .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
