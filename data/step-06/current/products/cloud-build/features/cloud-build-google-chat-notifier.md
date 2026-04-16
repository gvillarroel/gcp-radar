---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.867Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build Google Chat notifier"
feature_slug: "cloud-build-google-chat-notifier"
latest_feature_date: "2022-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build.Status"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager"
keywords:
  - "chat"
  - "send"
  - "notifications"
  - "status"
  - "notifier"
  - "through"
---

# Cloud Build Google Chat notifier

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build can send build status notifications to Google Chat through a dedicated notifier.

## Extended Definition

Cloud Build can send build status notifications to Google Chat through a dedicated notifier.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build.Status](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build.Status)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)

## Supporting Pages

### Class Status (3.35.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build.Status](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build.Status)
- Source ID: `site-python-reference`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class Status (3.35.0) Stay organized with collections Save and categorize content based on your preferences.
- Version latest keyboard arrow down 3.35.0 (latest) 3.34.0 3.33.0 3.32.0 3.31.3 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.2 3.23.3 3.22.0 3.21.0 3.20.1 3.19.0 3.18.0 3.17.1 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.1 3.10.0 3.9.3 3.8.3 3.7.1 3.6.0 3.5.2 3.4.0 3.3.2 3.2.1 3.1.1 3.0.2 2.0.2 1.1.2 1.0.0 0.1.0 Status ( value ) Possible status of a build or build step.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Enums Name Description STATUS UNKNOWN Status of the build is unknown.

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- Source ID: `site-docs-reference-2`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- LESS THAN , today ); for ( Entity taskEntity : datastore . prepare ( query ). asIterable ()) { if ( "done" . equals ( taskEntity . getProperty ( "status" ))) { datastore . delete ( taskEntity ); } else { taskEntity . setProperty ( "status" , "overdue" ); datastore . put ( taskEntity ); } } This illustrates several basic points: The actual datastore itself is accessed through a com.google.appengine.api.datastore.DatastoreService object, produced from a com.google.appengine.api.datastore.DatastoreServiceFactory .
- Finally, index is searched and matching documents, or their snippets are returned to the user. public List<ScoredDocument> indexAndSearch ( String query , Document ... documents ) { SearchService searchService = SearchServiceFactory . getSearchService (); Index index = searchService . getIndex ( IndexSpec . newBuilder (). setIndexName ( "indexName" )); for ( Document document : documents ) { PutResponse response = index . put ( document ); assert response . getResults (). get ( 0 ). getCode (). equals ( StatusCode .
- This package includes the utility ( ServiceProvider for inserting the appropriate "service" entries into a jar file. com.google.appengine.tools.compilation com.google.apphosting.api Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback appengine-apis overview (5.0.0) Stay organized with collections Save and categorize content based on your preferences. com.google.appengine.api Provides facilities for server lifecycle management, threading and namespaces/multitenancy.

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)
- Source ID: `site-docs-reference-2`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- LESS THAN , today ); for ( Entity taskEntity : datastore . prepare ( query ). asIterable ()) { if ( "done" . equals ( taskEntity . getProperty ( "status" ))) { datastore . delete ( taskEntity ); } else { taskEntity . setProperty ( "status" , "overdue" ); datastore . put ( taskEntity ); } } This illustrates several basic points: The actual datastore itself is accessed through a com.google.appengine.api.datastore.DatastoreService object, produced from a com.google.appengine.api.datastore.DatastoreServiceFactory .
- Finally, index is searched and matching documents, or their snippets are returned to the user. public List<ScoredDocument> indexAndSearch ( String query , Document ... documents ) { SearchService searchService = SearchServiceFactory . getSearchService (); Index index = searchService . getIndex ( IndexSpec . newBuilder (). setIndexName ( "indexName" )); for ( Document document : documents ) { PutResponse response = index . put ( document ); assert response . getResults (). get ( 0 ). getCode (). equals ( StatusCode .
- This package includes the utility ( ServiceProvider for inserting the appropriate "service" entries into a jar file. com.google.appengine.tools.compilation com.google.apphosting.api Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback appengine-apis overview (5.0.0) Stay organized with collections Save and categorize content based on your preferences. com.google.appengine.api Provides facilities for server lifecycle management, threading and namespaces/multitenancy.

