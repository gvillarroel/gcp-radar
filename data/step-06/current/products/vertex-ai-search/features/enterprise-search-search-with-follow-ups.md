---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.966Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Enterprise Search search with follow-ups"
feature_slug: "enterprise-search-search-with-follow-ups"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-engine-es"
keywords:
  - "enterprise"
  - "search"
  - "with"
  - "follow"
  - "ups"
  - "formerly"
  - "called"
  - "multi"
---

# Enterprise Search search with follow-ups

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Search with follow-ups (formerly called multi-turn search) is now Generally Available in Enterprise Search for websites with advanced indexing enabled and unstructured data.

## Extended Definition

Search with follow-ups (formerly called multi-turn search) is now Generally Available in Enterprise Search for websites with advanced indexing enabled and unstructured data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-engine-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-engine-es)

## Supporting Pages

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-api-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Ultimately, the best database for a particular use case will depend on the specific requirements of the application. \n", "steps": [ { "state": "SUCCEEDED", "description": "Rephrase the query and search.", "actions": [ { "searchAction": { "query": " What is the performance of BigQuery? " }, "observation": { "searchResults": [ { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/9ab3ef91bcfde1fcd091efe9df7c699c", "uri": "https://cloud.google.com/bigquery/docs/best-practices-performance-overview", "title": "Introduction to optimizing query performance BigQuery Google Cloud", "snippetInfo": [ { "snippet": "After a query begins execution, \u003cb\u003eBigQuery\u003c/b\u003e calculates how many slots each query stage uses based on the stage size and complexity and the number of slots ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/4e545c5cb69b06b251265114d9099cb4", "uri": "https://cloud.google.com/bigquery/docs/query-insights", "title": "Get query performance insights BigQuery Google Cloud", "snippetInfo": [ { "snippet": "This document describes how to use the query execution graph to diagnose query \u003cb\u003eperformance\u003c/b\u003e issues, and to see query \u003cb\u003eperformance\u003c/b\u003e insights. \u003cb\u003eBigQuery\u003c/b\u003e offers ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/d34672d877eefe596f9c7d1a3d7076b1", "uri": "https://cloud.google.com/bigquery/docs/best-practices-performance-compute", "title": "Optimize query computation BigQuery Google Cloud", "snippetInfo": [ { "snippet": "After addressing the query \u003cb\u003eperformance\u003c/b\u003e insights, you can further optimize your query by performing the following tasks: Reduce data that is to be processed ...", "snippetStatus": "SUCCESS" } ] }, ... { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/75ce2f05833683e60ddc21a11ce0466f", "uri": "https://cloud.google.com/blog/products/data-analytics/troubleshoot-and-optimize-your-bigquery-analytics-queries-with-query-execution-graph/", "title": "Troubleshoot and optimize your BigQuery analytics queries with query execution graph Google Cloud Blog", "snippetInfo": [ { "snippet": "Since query \u003cb\u003eperformance\u003c/b\u003e is multi-faceted, \u003cb\u003eperformance\u003c/b\u003e insights might only provide a partial picture of the overall query \u003cb\u003eperformance\u003c/b\u003e.
- BigQuery is really good at working with lots of data, even billions of pieces of information. \n", "steps ": [ { "state": "SUCCEEDED", "description": "Rephrase the query and search.", "actions": [ { "searchAction": { "query": "What is BigQuery?" }, "observation": { "searchResults": [ { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/2d032dc582689e8c0ecea7fc7bfa3189", "uri": "https://cloud.google.com/bigquery", "title": "BigQuery enterprise data warehouse Google Cloud", "snippetInfo": [ { "snippet": "\u003cb\u003eBigQuery\u003c/b\u003e is a fully managed, AI-ready data analytics platform that helps you maximize value from your data and is designed to be multi-engine, multi-format, ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/4474f4a5a18ecd611dedfe323dfe55d9", "uri": "https://cloud.google.com/bigquery/docs/introduction", "title": "BigQuery overview Google Cloud", "snippetInfo": [ { "snippet": "\u003cb\u003eBigQuery\u003c/b\u003e is a fully managed, AI-ready data platform that helps you manage and analyze your data with built-in features like machine learning, search, ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/c840fdef90d86328f13bbedbdbf0ac10", "uri": "https://cloud.google.com/bigquery/docs/query-overview", "title": "Overview of BigQuery analytics Google Cloud", "snippetInfo": [ { "snippet": "\u003cb\u003eBigQuery\u003c/b\u003e lets you save queries and share queries with others.
- All the answer and follow-ups features described in the preceding sections, such as citations, filters, SafeSearch, ignoring certain types of queries, and using a preamble to customize answers can be applied along with follow-ups.
- Home Documentation AI and ML Vertex AI Search Send feedback Get answers and follow-ups Stay organized with collections Save and categorize content based on your preferences.

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- CreateDataStoreMetadata ( operation . metadata ) Handle the response print ( response ) print ( metadata ) return operation . operation . name Import websites from google.api core.client options import ClientOptions from google.cloud import discoveryengine v1 as discoveryengine # TODO(developer): Uncomment these variables before running the sample. # project id = "YOUR PROJECT ID" # location = "YOUR LOCATION" # Values: "global" # data store id = "YOUR DATA STORE ID" # NOTE: Do not include http or https protocol in the URI pattern # uri pattern = "cloud.google.com/generative-ai-app-builder/docs/ " # For more information, refer to: # https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store client options = ( ClientOptions(api endpoint=f"{location}-discoveryengine.googleapis.com") if location != "global" else None ) # Create a client client = discoveryengine.SiteSearchEngineServiceClient( client options=client options ) # The full resource name of the data store # e.g. projects/{project}/locations/{location}/dataStores/{data store id} site search engine = client.site search engine path( project=project id, location=location, data store=data store id ) # Target Site to index target site = discoveryengine.TargetSite( provided uri pattern=uri pattern, # Options: INCLUDE, EXCLUDE type =discoveryengine.TargetSite.Type.INCLUDE, exact match=False, ) # Make the request operation = client.create target site( parent=site search engine, target site=target site, ) print(f"Waiting for operation to complete: {operation.operation.name}") response = operation.result() # After the operation is complete, # get information from operation metadata metadata = discoveryengine.CreateTargetSiteMetadata(operation.metadata) # Handle the response print(response) print(metadata) Next steps To attach your website data store to an app, create an app with Enterprise features enabled and select your data store following the steps in Create a search app .
- Advanced website indexing provides additional features such as search summarization, search with follow-ups, and extractive answers.
- This must conform to the JSON schema that you provided in the previous step—for example: { "title" : "test title" , "categories" : [ "cat 1" , "cat 2" ], "uri" : "test uri" } Update with a JSON document. curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents/ DOCUMENT ID " \ -d '{ "jsonData": " JSON DOCUMENT STRING " }' Update with a JSON object. curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents/ DOCUMENT ID " \ -d '{ "structData": JSON DOCUMENT OBJECT }' Next steps To attach your data store to an app, create an app and select your data store following the steps in Create a search app .
- This page describes how to create a data store and ingest data for custom search apps in Vertex AI Search. go to the section for the source you plan to use: Create a data store using website content Import from BigQuery Import from Cloud Storage Sync from Google Drive Sync from Gmail (Public preview) Sync from Google Sites (Public preview) Sync from Google Calendar (Public preview) Sync from Google Groups (Public preview) Import from Cloud SQL Import from Spanner (Public preview) Import from Firestore Import from Bigtable (Public Preview) Import from AlloyDB for PostgreSQL (Public Preview) Upload structured JSON data with the API Create a data store using Terraform To sync data from a third-party data source instead, see Connect a third-party data source .

### Get search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Select Search with follow-ups to enable conversation search with generative summaries and follow-up questions.
- Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:search" \ -d '{ "servingConfig": "projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search", "query": " QUERY ", "pageSize": " PAGE SIZE ", "offset": " OFFSET ", "orderBy": " ORDER BY ", "params": {"user country code": " USER COUNTRY CODE ", "searchType": " SEARCH TYPE "}, "filter": " FILTER ", "boostSpec": " BOOST SPEC ", "contentSearchSpec": { "searchResultMode": " RESULT MODE " }, "userPseudoId": " USER PSEUDO ID ", "dataStoreSpecs": [{" DATA STORE SPEC "}] }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:search" \ -d '{ "query": " QUERY ", "userPseudoId": " USER PSEUDO ID ", "pageSize": " PAGE SIZE ", "offset": " OFFSET ", "orderBy": " ORDER BY ", "filter": " FILTER ", "boostSpec": " BOOST SPEC ", "facetSpec": " FACET SPEC ", "queryExpansionSpec": " QUERY EXPANSION SPEC ", "spellCorrectionSpec": " SPELL CORRECTION SPEC ", "contentSearchSpec": " CONTENT SEARCH SPEC ", "dataStoreSpecs": [{" DATA STORE SPEC "}], }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- Run the following curl command to get search results: Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:searchLite?key= API KEY " \ -d '{ "servingConfig": "projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search", "query": " QUERY ", "userPseudoId": " USER PSEUDO ID " }' Replace the following: PROJECT ID : the ID of your Google Cloud project.

### Create a search app \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-engine-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-engine-es)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Activating the Generative Responses option is required to get features such as search summaries or search with follow-ups .
- Generative responses include search summaries and search with follow-ups .
- Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines?engineId= APP ID " \ -d '{ "displayName": " APP DISPLAY NAME ", "dataStoreIds": [" DATA STORE ID "], "solutionType": "SOLUTION TYPE SEARCH", "industryVertical": "GENERIC", "searchEngineConfig": { "searchTier": " SEARCH TIER ", "searchAddOns": [" SEARCH ADD ON "] } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- Note: The industry vertical GENERIC is used to create custom search apps that contain structured, unstructured, website data stores, or multiple data stores (blended search).

