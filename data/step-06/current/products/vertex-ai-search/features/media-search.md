---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.082Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Media search"
feature_slug: "media-search"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media"
keywords:
  - "media"
  - "search"
  - "preview"
  - "allowlist"
  - "enables"
  - "creating"
  - "applications"
  - "stores"
---

# Media search

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Media search (preview with allowlist) enables creating media search applications on media data stores, connecting them to existing or new media data stores, and filtering search queries using document metadata.

## Extended Definition

Media search (preview with allowlist) enables creating media search applications on media data stores, connecting them to existing or new media data stores, and filtering search queries using document metadata.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media)

## Supporting Pages

### Create media apps \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a media search app To use the Google Cloud console to create a media search app, follow these steps: Console In the Google Cloud console, go to the AI Applications page.
- The processes for creating media recommendations apps and creating media search apps are similar.
- What's next For search apps: Configure search results for structured data For recommendations apps: Get media recommendations Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Create a media recommendations app To use the Google Cloud console to create a media recommendations app, follow these steps: Console In the Google Cloud console, go to the AI Applications page.

### "Introduction to media search and recommendations \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data (documents and user events) are provided for the tutorials so all you need is a Google Cloud project and a billing account to create your first app: Get started with media recommendations Get started with media search Checklists There is a lot of commonality between working with media apps and working with custom apps, but some features apply only to custom apps and other features only to media apps.
- Use the following checklists to guide you through typical workflows specific to media: Media search checklist Media recommendations checklist Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This lets recommendations and search ranking use Google-defined, media-specific fields such as content ratings, aggregated ratings, persons, and production year to help generate results based on media engagement.
- Home Documentation AI and ML Vertex AI Search Send feedback Introduction to media search and recommendations Stay organized with collections Save and categorize content based on your preferences.

### Configure autocomplete \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example command and result curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \$ curl -X PATCH \ -H "X-Goog-User-Project: my-project-123" \t-access-token)" \ https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig?updateMask=queryFrequencyThreshold \ -d '{ "name": "projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "queryFrequencyThreshold": 30 }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "matchingOrder": "exact-prefix", "maxSuggestions": 20, "minPrefixLength": 1, "queryModel": "automatic", "enableMode": "AUTOMATIC", "queryFrequencyThreshold": 30 } Update the CompletionConfig.numUniqueUsersThreshold field: curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ https://discoveryengine.googleapis.com/v1alpha/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /completionConfig?updateMask = numUniqueUsersThreshold \ -d '{ "name": "projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /completionConfig", "numUniqueUsersThreshold": UNIQUE USERS }' Replace UNIQUE USERS with an integer value that represents the minimum number of unique users who must enter a given search query before it can be returned as an autocomplete suggestion.
- DataStoreName ; public class SyncCompleteQuery { public static void main ( String [] args ) throws Exception { syncCompleteQuery (); } public static void syncCompleteQuery () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CompletionServiceClient completionServiceClient = CompletionServiceClient . create ()) { CompleteQueryRequest request = CompleteQueryRequest . newBuilder () . setDataStore ( DataStoreName . ofProjectLocationDataStoreName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" ) . toString ()) . setQuery ( "query107944136" ) . setQueryModel ( "queryModel-184930495" ) . setUserPseudoId ( "userPseudoId-1155274652" ) . setIncludeTailSuggestions ( true ) . build (); CompleteQueryResponse response = completionServiceClient . completeQuery ( request ); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- Example command and result curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: my-project-123" \ https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig?updateMask=numUniqueUsersThreshold \ -d '{ "name": "projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "numUniqueUsersThreshold": 6 }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "matchingOrder": "exact-prefix", "maxSuggestions": 20, "minPrefixLength": 1, "queryModel": "automatic", "enableMode": "AUTOMATIC", "numUniqueUsersThreshold": 6, "queryFrequencyThreshold": 30 } Update completable field annotations in schema To turn on autocomplete for fields in structured data schema, follow these steps: Console In the Google Cloud console, go to the AI Applications page.
- However, if your data stores contain PII or if you use the search history or user events query suggestions models, review the following and take appropriate action: If the types of PII that you want to protect are fairly standard, such as phone numbers and email addresses, begin by extensively testing autocomplete suggestions for your app.

