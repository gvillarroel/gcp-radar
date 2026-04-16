---
title: "AI functions overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing
knowledge_key: corpus
source_id: site-docs-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing
  title: "AI functions overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
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
AI functions overview
Stay organized with collections
Save and categorize content based on your preferences.
Run powerful AI models registered through model endpoint management directly
within your database using SQL operators. The AlloyDB AI functions
( Preview )
integrates with Vertex AI to bring intelligent filtering, semantic
ranking, and text generation to your operational data in real time.
Note: This experimental launch is a Pre-GA offering.
AI-Powered SQL filtering and ranking
Use simple SQL functions for powerful AI tasks. The google_ml_integration extension provides operators like ai.if() ( Preview ) for intelligent filtering and ai.rank() ( Preview ) for semantic reranking.
In-database text generation
Perform transformations for rows in your database. Using the ai.generate() ( Preview ) operator, you can ask a foundation model to summarize a product review, or to transform data directly in your query.
Embedding and prediction functions
Use SQL functions like google_ml.embedding() to generate vector embeddings or google_ml.predict_row( to invoke predictions from any registered model, all within your database.
How the AI functions works
When you embed an AI operator like ai.if() , ai.rank() , or ai.generate() into your SQL query, the AI functions ( Preview ) detects it. This engine, available using the google_ml_integration extension, orchestrates the entire process. It securely packages the relevant row data and calls a pre-registered ML model from providers, such as Gemini, OpenAI, or Anthropic. The ML model evaluates the data and returns a prediction—like true/false for a filter or a score for ranking. The AI functions seamlessly integrates this prediction back into your query's execution, returning a standard SQL result set. You get AI-powered insights without ever moving your data.
Learn more
Explore developer resources to build your own natural language query
applications with AlloyDB AI.
Video
AlloyDB AI vector search and AI operators
Empower small IT teams to harness generative AI with Google Cloud databases.
Codelab
AlloyDB AI operators and reranking
Deploy AlloyDB AI with AI operators. Use them for tasks such as
semantic search, joins, and result ranking.
Blog
Model endpoint management
Build richer generative AI experiences using model endpoint management.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
