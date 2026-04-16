---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.210Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Full-text search"
feature_slug: "full-text-search"
latest_feature_date: "2024-10-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/free-trial-quickstart"
  - "https://docs.cloud.google.com/spanner/docs/vector-search-tutorial"
  - "https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli"
keywords:
  - "became"
  - "generally"
  - "available"
  - "search"
  - "full"
  - "text"
---

# Full-text search

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner full-text search became generally available.

## Extended Definition

Spanner full-text search became generally available.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli)

## Supporting Pages

### "Get started using Spanner for generative AI applications \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- PREDICT ( MODEL EmbeddingsModel , ( SELECT "I'd like to buy a starter bike for my 3 year old child" AS content )) )) AS distance FROM products WHERE inventoryCount > 0 ORDER BY distance LIMIT 5 ; Click Run to return the products that best match your search text.
- The following example demonstrates how to register a Vertex AI text embedding model , which is then used to perform similarity search to find similar products in a database.
- Spanner vector search is available only in the Enterprise edition or Enterprise Plus edition.
- Spanner vector search isn't available in the PostgreSQL dialect.

### Build context sets using Gemini CLI \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about the context set file and facets, see Context sets overview Generate value search queries If you want to generate value searches that specify how the system should search for and match specific values within a concept type, then you can use the /generate targeted value searches command.
- To build an agent context file, perform the following high-level steps: Prepare your environment Generate targeted templates Generate targeted facets Generate targeted value searches Optional.
- These files contain templates, facets, and value searches that provide context for generating SQL queries from natural language.
- To update the DB Context Enrichment extension, run the following command: gemini extensions update mcp-db-context-enrichment To update the DB Context Enrichment extension or to replace the GEMINI API KEY , run the following command: gemini extensions config mcp-db-context-enrichment GEMINI API KEY Replace GEMINI API KEY with your Gemini API key.

### "Create a Spanner free trial instance and sample application \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Note: A Spanner free trial instance supports Standard edition features, and Enterprise edition features, such as KNN vector distance functions , full-text search , and Spanner Graph .
- For a full list of all available instance configurations, see Regional, dual-region, and multi-region configurations .
- Run the gcloud spanner samples run command to download the sample application and start the backend gRPC service and workload generator for the given sample application: gcloud spanner samples run APPNAME --instance-id INSTANCE ID For more information and a list of other available commands for the sample application, see the gcloud CLI documentation .
- You can select one of the following: Upgrade now Automatically upgrade to the full version of the Enterprise edition after my trial expires Remind me later The Summary section provides a description of compute and storage costs for the upgraded paid instance that you selected.

