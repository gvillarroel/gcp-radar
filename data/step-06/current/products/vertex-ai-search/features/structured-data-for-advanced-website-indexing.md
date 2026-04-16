---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.996Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Structured data for advanced website indexing"
feature_slug: "structured-data-for-advanced-website-indexing"
latest_feature_date: "2024-06-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations"
keywords:
  - "structured"
  - "advanced"
  - "website"
  - "indexing"
  - "enables"
  - "vertex"
  - "ai"
  - "search"
---

# Structured data for advanced website indexing

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Enables Vertex AI Search advanced website indexing stores to use structured data such as schema.org markup to enrich indexing results; Enables advanced website indexing data stores to use structured data such as Google-inferred page dates, meta tags, and PageMap content to enrich indexed content.

## Extended Definition

Enables Vertex AI Search advanced website indexing stores to use structured data such as schema.org markup to enrich indexing results; Enables advanced website indexing data stores to use structured data such as Google-inferred page dates, meta tags, and PageMap content to enrich indexed content.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)

## Supporting Pages

### "Use structured data for advanced website indexing \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata)
- Source ID: `site-docs-reference`
- Final score: 402
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If advanced website indexing is enabled in your data store, you can use the following types of structured data to enrich your indexing: Predefined, Google-inferred page dates Custom structured data attributes Metadata using meta tags PageMaps Schema.org data This page introduces both these types of structured data for your web pages and describes how to add custom structured attributes to your data store schema.
- Add custom structured data attributes to the data store schema To add custom structured data attributes to the data store schema: Add meta tags, PageMap data, and schema.org data to the pages in your website that you want to enrich with structured data indexing: For meta tags: Each meta tag must have its name attribute set to the field you want to index and its content attribute to a string of one or more comma-separated values.
- STRUCTURED DATA SOURCE N : an array consisting of one or both of the following structured data sources where the CUSTOM ATTRIBUTE attribute can be found: If the custom attribute can be found as a meta tag, specify METATAGS If the custom attribute can be found as a PageMap attribute, specify PAGEMAP If the custom attribute can be found as a schema.org data, specify SCHEMA ORG If the siteSearchStructuredDataSources field is absent or left empty, the values from all three data sources are merged in an array.
- Example use case for schema.org data Suppose you have a review website and its web pages are annotated with schema.org data in JSON-LD format within the HTML script tag.

### About apps and data stores \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A website contains unstructured data, but you can add structured data in the form of meta tags, PageMap attributes, and schema.org data to your web pages.
- This data includes text, images tagged with metadata, and other structured data such as meta tags, PageMap attributes, and schema.org data.
- Advanced website indexing : Provides advanced search capabilities over an index that's generated based on either of the following: The Vertex AI Search app owners can control which web pages are indexed by submitting sitemaps and maintaining them.
- The Vertex AI Search app owners can perform an initial indexing that mirrors the Google Search index and then expand the index's coverage by recrawling the websites whenever necessary, keeping it fresh.

### "Create a custom recommendations data store \_|\_ Vertex AI Search \_|\_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- JSON SCHEMA OBJECT : your JSON schema as a JSON object—for example: { "$schema" : "https://json-schema.org/draft/2020-12/schema" , "type" : "object" , "properties" : { "title" : { "type" : "string" , "keyPropertyMapping" : "title" }, "categories" : { "type" : "array" , "items" : { "type" : "string" , "keyPropertyMapping" : "category" } }, "uri" : { "type" : "string" , "keyPropertyMapping" : "uri" } } } Import structured data that conforms to the defined schema.
- If the data store is not configured as site search (GENERIC vertical and PUBLIC WEBSITE content config), this flag will be ignored. / // const createAdvancedSiteSearch = true / A boolean flag indicating whether to skip the default schema creation for the data store.
- If the data store is not configured as site search (GENERIC vertical and PUBLIC WEBSITE content config), this flag will be ignored. / // const createAdvancedSiteSearch = true / A boolean flag indicating whether to skip the default schema creation for the data store.
- You can put the JSON string of the document in a consistent format directly in each line, and Vertex AI Search automatically generates the IDs for each document imported. content : Upload unstructured documents (PDF, HTML, DOC, TXT, PPTX).

