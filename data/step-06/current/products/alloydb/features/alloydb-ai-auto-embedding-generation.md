---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.572Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB AI auto embedding generation"
feature_slug: "alloydb-ai-auto-embedding-generation"
latest_feature_date: "2025-11-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases"
keywords:
  - "large-scale embedding generation"
  - "automatic embedding generation"
  - "embedding generation"
  - "AlloyDB AI auto embedding"
  - "RAG"
  - "semantic search"
  - "auto embeddings"
---

# AlloyDB AI auto embedding generation

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB AI introduces preview automatic large-scale embedding generation for semantic search and RAG use cases.

## Extended Definition

AlloyDB AI introduces preview automatic large-scale embedding generation for semantic search and RAG use cases.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases](https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases)

## Supporting Pages

### "Generate and manage auto vector embeddings for large tables \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- Source ID: `site-docs-root-2`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This solution is particularly useful for facilitating semantic search and Retrieval Augmented Generation (RAG) on text content, including the following: Creating initial vector embedding for a new table Generating embeddings after a large data import Refreshing embeddings after significant data changes Maintaining embeddings incrementally Understand auto vector embeddings Auto vector embeddings in AlloyDB provide a scalable way to automate the generation and maintenance of vector embeddings for your data.
- This is particularly useful for applications that rely on up-to-date embeddings for semantic search, Retrieval Augmented Generation (RAG), and other AI-powered features.
- The ai.embedding prepare partition procedure ensures the schema is compatible with any parent table in the hierarchy: -- Prepare a sub-partition for a non-root parent table CALL ai . embedding prepare partition ( parent table = > 'documents eu' , -- An existing partition child table = > 'documents eu germany' ); -- Attach the new sub-partition ALTER TABLE documents eu ATTACH PARTITION documents eu germany FOR VALUES IN ( 'germany' ); -- Refresh embeddings for the new sub-partition CALL ai . refresh embeddings ( table name = > 'documents eu germany' , embedding column = > 'content embeddings' ); Monitor embedding generation progress You can monitor the real-time status of active initialize embeddings and refresh embeddings calls by querying the ai.embedding progress view .
- To let a user manage auto embedding generation, grant INSERT , UPDATE , and DELETE permissions on the google ml.embed gen progress and google ml.embed gen settings tables: GRANT INSERT , UPDATE , DELETE ON google ml . embed gen progress TO ' USER NAME ' ; Replace the following: USER NAME : the name of the user for whom the permissions are granted.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, you can perform incremental table refreshes or migration up to 130x faster than traditional row-by-row processing using bulk mode, improving efficiency for semantic search and Retrieval Augmented Generation (RAG).
- You can now generate large-scale embeddings to leverage in semantic search and Retrieval Augmented Generation (RAG) on text content.
- For more information, see the following pages: Enable backup plans Enable database auditing Enable high availability Enable password policy Enforce SSL/TLS encryption Increase backup retention Increase cluster storage quota Optimize underprovisioned instances April 09, 2025 Feature AlloyDB now supports managed connection pooling in Preview .
- December 14, 2023 Feature AlloyDB now supports up to 64TiB storage per cluster in the following regions: us-west1 us-central1 us-east1 us-east4 europe-west1 asia-east1 asia-southwest1 December 11, 2023 Announcement Terraform support for AlloyDB is now generally available (GA) .

### "Build generative AI applications \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases](https://docs.cloud.google.com/alloydb/docs/ai/alloydb-ai-use-cases)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Codelab: Part 1: Build a Smart Shopping Assistant with AlloyDB and AI Applications Codelab: Part 2: Deploy a Smart Shopping Assistant with AlloyDB and AI Applications Build an LLM and RAG-based chat application using AlloyDB AI and LangChain This codelab guides you through deploying the GenAI Databases Retrieval Service and then shows you how to build a sample interactive application using your newly set up environment.
- Tutorial: Deploying a RAG Application with AlloyDB to Agent Engine Integrate hybrid search and AI functions into your search application This demo illustrates the AI capabilities of Google Cloud AlloyDB, integrating hybrid search including SQL, vector, and full-text search with AI functions, all applied to a sample ecommerce dataset from Cymbal Shops.
- Codelab: Build a Patent Search App with AlloyDB, vector search, and Vertex AI Codelab: Build a Patent Search App with AlloyDB, vector search, and Java Agent Development Kit Generate multimodal Embeddings in AlloyDB This codelab demonstrates how to use AlloyDB AI's capabilities for semantic search using multimodal embeddings.
- Codelab: Building an LLM and RAG-based chat application using AlloyDB AI and LangChain Create a chatbot to answer questions about movies This tutorial shows you how to build a generative AI chatbot that uses Gemini , Vertex AI , and the AlloyDB LangChain integration.

