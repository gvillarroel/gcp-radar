---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.883Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Schema editing for structured data imports in Vertex AI Search data stores"
feature_slug: "schema-editing-for-structured-data-imports-in-vertex-ai-search-data-stores"
latest_feature_date: "2024-07-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/bring-embeddings"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls"
keywords:
  - "schema"
  - "editing"
  - "for"
  - "structured"
  - "imports"
  - "in"
  - "vertex"
  - "ai"
---

# Schema editing for structured data imports in Vertex AI Search data stores

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Allows users to review and edit a schema before importing structured data from BigQuery or Cloud Storage into a Vertex AI Search data store.

## Extended Definition

Allows users to review and edit a schema before importing structured data from BigQuery or Cloud Storage into a Vertex AI Search data store.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/bring-embeddings](https://docs.cloud.google.com/generative-ai-app-builder/docs/bring-embeddings)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls)

## Supporting Pages

### "Use structured data for advanced website indexing \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata)
- Source ID: `site-api-reference`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Such tags can be used with advanced indexing when you add custom structured data attributes to the data store schema . <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Your web page title</title> <!-- Robots instructions for crawlers and for Vertex AI Search. --> <meta name="robots" content="index,follow"> <!-- Vertex AI Search can use custom datetime fields to filter, boost, and order. --> <meta name="lastModified" content="2024-09-06"> <!-- Vertex AI Search can filter by category or tags. --> <meta name="category" content="archived"> <meta name="tags" content="legacy,interesting,faq"> <!-- Vertex AI Search can index these common HTML tags. --> <meta name="description" content="A description of your web page's content."> <meta name="author" content="Your name or organization"> <meta name="keywords" content="relevant,keywords,separated,by,commas"> <link rel="canonical" href="https://www.yourwebsite.com/this-page"> <meta property="og:title" content="Your Webpage Title"> <meta property="og:description" content="A description of your webpage's content."> <meta property="og:image" content="https://www.yourwebsite.com/image.jpg"> <meta property="og:url" content="https://www.yourwebsite.com/this-page"> <meta property="og:type" content="website"> <meta name="twitter:card" content="summary large image"> <meta name="twitter:title" content="Your customized Webpage Title"> <meta name="twitter:description" content="A description of your webpage's content."> <meta name="twitter:image" content="https://www.yourwebsite.com/image.jpg"> </head> <body> ... </body> </html> Example use case for PageMaps Suppose you have several web pages that contain food recipes.
- Home Documentation AI and ML Vertex AI Search Send feedback Use structured data for advanced website indexing Stay organized with collections Save and categorize content based on your preferences.
- The following is an example of a schema update for a website: { "type" : "object" , "properties" : { " CUSTOM ATTRIBUTE " : { "type" : "array" , "items" : { "type" : " DATA TYPE " , "searchable" : true , "retrievable" : true , "indexable" : true , "siteSearchMetatagName" : " METATAG NAME " , "siteSearchStructuredDataSources" : [ " STRUCTURED DATA SOURCE 1 " , " STRUCTURED DATA SOURCE 2 " ] } }, " IDENTIFIER FOR SCHEMA ORG FIELD " : { "type" : "array" , "items" : { "type" : " DATA TYPE SCHEMA ORG FIELD " , "searchable" : true , "retrievable" : true , "indexable" : true , "siteSearchSchemaOrgPaths" : [ " root.
- Add custom structured data attributes to the data store schema To add custom structured data attributes to the data store schema: Add meta tags, PageMap data, and schema.org data to the pages in your website that you want to enrich with structured data indexing: For meta tags: Each meta tag must have its name attribute set to the field you want to index and its content attribute to a string of one or more comma-separated values.

### "Vertex AI APIs for building search and RAG experiences \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- Source ID: `site-api-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- The Document AI Layout Parser transforms documents in various formats into structured representations, making content like paragraphs, tables, lists, and structural elements like headings, page headers, and footers accessible, and creating context-aware chunks that facilitate information retrieval in a range of generative AI and discovery apps.
- Vertex AI Search works as an out-of-the-box semantic & keyword search engine for RAG with the ability to process a variety of document types and with connectors to a variety of source systems including BigQuery and many third party systems.
- Retrieval Choose the best retrieval method for your needs: Vertex AI Search: Vertex AI Search is a Google Search-quality information retrieval engine that can be a component of any generative AI application that uses your enterprise data.
- Home Documentation AI and ML Vertex AI Search Send feedback Vertex AI APIs for building search and RAG experiences Stay organized with collections Save and categorize content based on your preferences.

### Use custom embeddings \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/bring-embeddings](https://docs.cloud.google.com/generative-ai-app-builder/docs/bring-embeddings)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- However, if you've created your own embeddings for your data, you might prefer to use them instead of those generated by Vertex AI Search, especially if your custom embeddings contain additional context that can enrich your search retrieval and ranking.
- If you've already created your own custom vector embeddings for your data, you can upload them to Vertex AI Search and use them when querying with Vertex AI Search.
- If you aren't familiar with creating embeddings, Google recommends letting Vertex AI Search create and use embeddings for you.
- Caution: For most use cases, Google recommends using the embeddings that are automatically provided by Vertex AI Search.

### "Configure serving controls for search \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls)
- Source ID: `site-api-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Serving control types The following types of serving controls are available: Control Description Available for Boost control Changes the returned order of results Search apps with data stores that support a schema, such as data stores that contain structured data, websites with structured data (advanced website indexing), unstructured data with metadata, or media data Filter control Removes entries from returned results Search apps with data stores that support a schema, such as data stores that contain structured data, websites (advanced website indexing), unstructured data with metadata, or media data Synonyms control Associates queries with each other Search apps with website (advanced website indexing), structured, unstructured, or media data stores Redirect control Redirects to a specified URI All search apps Promote control Promotes a specified link for a query All search apps About conditions When creating a control, you can optionally define a condition that determines when the control is applied.
- Home Documentation AI and ML Vertex AI Search Send feedback Configure serving controls for search Stay organized with collections Save and categorize content based on your preferences.
- For example, suppose that you create a promote control with the following configuration in a data store with basic website search: { "conditions": [ { "queryTerms": [ { "value": "artificial intelligence", "fullMatch": true } ] } ]" ... promoteAction": { "dataStore": "https://discoveryengine.googleapis.com/v1alpha/projects/123456/locations/us/collections/default collection/dataStores/basic-website-data-store" \ "searchLinkPromotion": { "title": "What is AI?", "uri": "https://cloud.google.com/learn/what-is-artificial-intelligence", "description": "Explain what is AI" "enabled": true } } } Then, you send the following search request: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1alpha/projects/123456/locations/us/collections/default collection/engines/basic-website-app/servingConfigs/default search:search" \ -d '{ "query": "artificial intelligence" }' You should receive a JSON response similar to the following truncated response.
- Create and attach promote serving controls A promote serving control lets you display a link as a promoted result and is available for the following types of search data stores: Website data stores with basic website search: For these data stores, you don't need to attach a promote control to the serving config of the app.

