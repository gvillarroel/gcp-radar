---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.093Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Autocomplete denylist import"
feature_slug: "autocomplete-denylist-import"
latest_feature_date: "2023-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results"
keywords:
  - "autocomplete"
  - "denylist"
  - "import"
  - "vertex"
  - "ai"
  - "search"
  - "introduced"
  - "preview"
---

# Autocomplete denylist import

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Search introduced preview capability to import autocomplete denylists for supported accounts via allowlist access.

## Extended Definition

Vertex AI Search introduced preview capability to import autocomplete denylists for supported accounts via allowlist access.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)

## Supporting Pages

### Configure autocomplete \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Even if set to true, if there are suggestions that match the full query, those are returned and no tail suggestions are returned. / // const includeTailSuggestions = true // Imports the Discoveryengine library const { CompletionServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1 ; // Instantiates a client const discoveryengineClient = new CompletionServiceClient (); async function callCompleteQuery () { // Construct request const request = { dataStore , query , }; // Run request const response = await discoveryengineClient . completeQuery ( request ); console . log ( response ); } callCompleteQuery (); Python For more information, see the Vertex AI Search Python API reference documentation .
- Autocomplete features Vertex AI Search supports the following autocomplete features to show the most helpful predictions during search: Feature Description Example or more information Correct typos Correct word spellings that are typos.
- If there is an email address jeffersonloveshiking@gmail.com in the data store, Vertex AI Search won't return the email address as an autocomplete suggestion if the user types jef in the search bar.
- Home Documentation AI and ML Vertex AI Search Send feedback Configure autocomplete Stay organized with collections Save and categorize content based on your preferences.

### Configure advanced autocomplete \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before reading this page, become familiar with Vertex AI Search's basic autocomplete.
- This page describes Vertex AI Search's advanced autocomplete feature.
- Key features of advanced autocomplete The key features of advanced autocomplete that distinguish it from the basic autocomplete are as follows: Blended search: Advanced autocomplete can be used with blended search apps , those are custom search apps that are connected to more than one data store.
- Access control: Advanced autocomplete respects access controls. (Access controls are also referred to as ACLs, access control lists.) Advanced autocomplete only suggests search queries that are related to documents that the searcher has access to.

### Get search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- Source ID: `site-iam-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:search" \ -d '{ "servingConfig": "projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search", "query": " QUERY ", "pageSize": " PAGE SIZE ", "offset": " OFFSET ", "orderBy": " ORDER BY ", "params": {"user country code": " USER COUNTRY CODE ", "searchType": " SEARCH TYPE "}, "filter": " FILTER ", "boostSpec": " BOOST SPEC ", "contentSearchSpec": { "searchResultMode": " RESULT MODE " }, "userPseudoId": " USER PSEUDO ID ", "dataStoreSpecs": [{" DATA STORE SPEC "}] }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:search" \ -d '{ "query": " QUERY ", "userPseudoId": " USER PSEUDO ID ", "pageSize": " PAGE SIZE ", "offset": " OFFSET ", "orderBy": " ORDER BY ", "filter": " FILTER ", "boostSpec": " BOOST SPEC ", "facetSpec": " FACET SPEC ", "queryExpansionSpec": " QUERY EXPANSION SPEC ", "spellCorrectionSpec": " SPELL CORRECTION SPEC ", "contentSearchSpec": " CONTENT SEARCH SPEC ", "dataStoreSpecs": [{" DATA STORE SPEC "}], }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- Run the following curl command to get search results: Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:searchLite?key= API KEY " \ -d '{ "servingConfig": "projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search", "query": " QUERY ", "userPseudoId": " USER PSEUDO ID " }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- For more information, see Set up authentication for a local development environment . from google.api core.client options import ClientOptions from google.cloud import discoveryengine v1 as discoveryengine TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR LOCATION" # Values: "global", "us", "eu" engine id = "YOUR APP ID" api key = "YOUR API KEY" search query = "YOUR SEARCH QUERY" def search lite sample ( project id : str , location : str , engine id : str , api key : str , search query : str , ) - > discoveryengine . services . search service . pagers .

