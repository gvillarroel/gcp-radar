---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.167Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Enterprise Search advanced autocomplete document data model"
feature_slug: "enterprise-search-advanced-autocomplete-document-data-model"
latest_feature_date: "2023-04-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
keywords:
  - "enterprise"
  - "search"
  - "advanced"
  - "autocomplete"
  - "document"
  - "model"
  - "introduces"
  - "experimental"
---

# Enterprise Search advanced autocomplete document data model

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Introduces an experimental advanced autocomplete document data model that uses large language models to generate high-quality autocomplete suggestions.

## Extended Definition

Introduces an experimental advanced autocomplete document data model that uses large language models to generate high-quality autocomplete suggestions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)

## Supporting Pages

### Configure autocomplete \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See Update a schema for structured data . † : Web-crawled content can only be used as a data source if the experimental advanced document data model for autocomplete is enabled.
- Example command and result curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -H "X-Goog-User-Project: my-project-123" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/dataStores/my-data-store/completionSuggestions:purge" { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/operations/purge-customer-imported suggestions-3197526711414652502", "metadata": { "@type": "type.googleapis.com/google.cloud.discoveryengine.v1.PurgeCompletionSuggestionsMetadata", "createTime": "2024-06-27T17:07:09.551726728Z", "updateTime": "2024-06-27T17:07:09.551726728Z" }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.discoveryengine.v1.PurgeCompletionSuggestionsResponse", "purgeSucceeded": true } } Advanced document data model Experimental This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- To use autocomplete with search apps that are connected to multiple data stores (blended search) or have documents with access control or to boost specific languages within autocomplete, see Configure advanced autocomplete .
- Suggestions can be generated from web-crawled data from public sites with the experimental advanced document data model .

### Configure advanced autocomplete \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access control: Advanced autocomplete respects access controls. (Access controls are also referred to as ACLs, access control lists.) Advanced autocomplete only suggests search queries that are related to documents that the searcher has access to.
- Key features of advanced autocomplete The key features of advanced autocomplete that distinguish it from the basic autocomplete are as follows: Blended search: Advanced autocomplete can be used with blended search apps , those are custom search apps that are connected to more than one data store.
- This page describes Vertex AI Search's advanced autocomplete feature.
- Example command and result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/engines/my-app/completionConfig:completeQuery" \ -d '{ "query": "hol", "suggestionTypes": ["RECENT SEARCH"], "userPseudoId": "test user" }' { "recentSearchSuggestions": [ { "suggestion": "holiday readiness", "recentSearchTime": "2025-05-19T18:27:07.261698Z" }, { "suggestion": "holiday freeze", "recentSearchTime": "2025-05-19T18:25:45.744021Z" }, { "suggestion": "holiday", "recentSearchTime": "2025-05-19T18:20:08.916884Z" } ] } Note: If you specify suggestionTypes as RECENT SEARCH , then any boostSpec , queryModel , or includeTailSuggestions parameters in your curl command are ignored.

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- They can replicate data from Spanner into BigQuery and perform analytics against local data, or they can use federated queries to retrieve data from Spanner on-demand.\n", "steps": [ { "state": "SUCCEEDED", "description": "Rephrase the query and search.", "actions": [ { "searchAction": { "query": "Compare bigquery with spanner database?" }, "observation": { "searchResults": [ { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/ecc0e7547253f4ca3ff3328ce89995af", "uri": "https://cloud.google.com/blog/topics/developers-practitioners/how-spanner-and-bigquery-work-together-handle-transactional-and-analytical-workloads", "title": "How Spanner and BigQuery work together to handle transactional and analytical workloads Google Cloud Blog", "snippetInfo": [ { "snippet": "Using Cloud \u003cb\u003eSpanner\u003c/b\u003e and \u003cb\u003eBigQuery\u003c/b\u003e also allows customers to build their \u003cb\u003edata\u003c/b\u003e clouds using Google Cloud, a unified, open approach to \u003cb\u003edata\u003c/b\u003e-driven transformation ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/d7e238f73608a860e00b752ef80e2941", "uri": "https://cloud.google.com/blog/products/databases/cloud-spanner-gets-stronger-with-bigquery-federated-queries", "title": "Cloud Spanner gets stronger with BigQuery-federated queries Google Cloud Blog", "snippetInfo": [ { "snippet": "As enterprises compete for market share, their need for real-time insights has given rise to increased demand for transactional \u003cb\u003edatabases\u003c/b\u003e to support \u003cb\u003edata\u003c/b\u003e ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/e10a5a3c267dc61579e7c00fefe656eb", "uri": "https://cloud.google.com/blog/topics/developers-practitioners/replicating-cloud-spanner-bigquery-scale", "title": "Replicating from Cloud Spanner to BigQuery at scale Google Cloud Blog", "snippetInfo": [ { "snippet": "... \u003cb\u003eSpanner data\u003c/b\u003e into \u003cb\u003eBigQuery\u003c/b\u003e for analytics.
- Users can leverage federated queries to read data from Spanner and write to a native BigQuery table. \n" , "steps" : [ { "state" : "SUCCEEDED" , "description" : "Rephrase the query and search." , "actions" : [ { "searchAction" : { "query" : "Compare bigquery with spanner database?" } , "observation" : { "searchResults" : [ { "document" : "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/ecc0e7547253f4ca3ff3328ce89995af" , "uri" : "https://cloud.google.com/blog/topics/developers-practitioners/how-spanner-and-bigquery-work-together-handle-transactional-and-analytical-workloads" , "title" : "How Spanner and BigQuery work together to handle transactional and analytical workloads Google Cloud Blog" , "snippetInfo" : [ { "snippet" : "Using Cloud \u003cb\u003eSpanner\u003c/b\u003e and \u003cb\u003eBigQuery\u003c/b\u003e also allows customers to build their \u003cb\u003edata\u003c/b\u003e clouds using Google Cloud, a unified, open approach to \u003cb\u003edata\u003c/b\u003e-driven transformation ..." , "snippetStatus" : "SUCCESS" } ] } , { "document" : "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/d7e238f73608a860e00b752ef80e2941" , "uri" : "https://cloud.google.com/blog/products/databases/cloud-spanner-gets-stronger-with-bigquery-federated-queries" , "title" : "Cloud Spanner gets stronger with BigQuery-federated queries Google Cloud Blog" , "snippetInfo" : [ { "snippet" : "As enterprises compete for market share, their need for real-time insights has given rise to increased demand for transactional \u003cb\u003edatabases\u003c/b\u003e to support \u003cb\u003edata\u003c/b\u003e ..." , "snippetStatus" : "SUCCESS" } ] } , { "document" : "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/e10a5a3c267dc61579e7c00fefe656eb" , "uri" : "https://cloud.google.com/blog/topics/developers-practitioners/replicating-cloud-spanner-bigquery-scale" , "title" : "Replicating from Cloud Spanner to BigQuery at scale Google Cloud Blog" , "snippetInfo" : [ { "snippet" : "... \u003cb\u003eSpanner data\u003c/b\u003e into \u003cb\u003eBigQuery\u003c/b\u003e for analytics.
- BigQuery is really good at working with lots of data, even billions of pieces of information. \n", "steps ": [ { "state": "SUCCEEDED", "description": "Rephrase the query and search.", "actions": [ { "searchAction": { "query": "What is BigQuery?" }, "observation": { "searchResults": [ { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/2d032dc582689e8c0ecea7fc7bfa3189", "uri": "https://cloud.google.com/bigquery", "title": "BigQuery enterprise data warehouse Google Cloud", "snippetInfo": [ { "snippet": "\u003cb\u003eBigQuery\u003c/b\u003e is a fully managed, AI-ready data analytics platform that helps you maximize value from your data and is designed to be multi-engine, multi-format, ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/4474f4a5a18ecd611dedfe323dfe55d9", "uri": "https://cloud.google.com/bigquery/docs/introduction", "title": "BigQuery overview Google Cloud", "snippetInfo": [ { "snippet": "\u003cb\u003eBigQuery\u003c/b\u003e is a fully managed, AI-ready data platform that helps you manage and analyze your data with built-in features like machine learning, search, ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/c840fdef90d86328f13bbedbdbf0ac10", "uri": "https://cloud.google.com/bigquery/docs/query-overview", "title": "Overview of BigQuery analytics Google Cloud", "snippetInfo": [ { "snippet": "\u003cb\u003eBigQuery\u003c/b\u003e lets you save queries and share queries with others.
- Specifically, it provides a 99.99% availability SLA with near-zero downtime maintenance, optimized hardware and software configurations, intelligent data caching for read-intensive transactional workloads, a configurable data cache option, 35 days of log retention and advanced disaster recovery capabilities like orchestrated failover and switchback. ", "relevanceScore": 0.7, "documentMetadata": { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/931f2c8e19ed54a407857f1cad3b5aaa", "uri": "https://cloud.google.com/sql", "title": "Cloud SQL for MySQL, PostgreSQL, and SQL Server Google Cloud" } } }, { "chunkInfo": { "content": "PostgreSQL versus SQL PostgreSQL is an open-source, object-relational database (ORDBMS) designed for enterprise-level performance and is valued for its reliability and robust features.

