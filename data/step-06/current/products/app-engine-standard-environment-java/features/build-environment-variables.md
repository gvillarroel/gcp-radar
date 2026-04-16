---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.219Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Build environment variables"
feature_slug: "build-environment-variables"
latest_feature_date: "2022-11-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager"
keywords:
  - "variables"
  - "build"
  - "supports"
---

# Build environment variables

Product: App Engine standard environment Java
Coverage: LOW

## Step 02 Summary

App Engine standard environment Java supports build environment variables; App Engine standard environment Java supports build environment variables.

## Extended Definition

App Engine standard environment Java supports build environment variables; App Engine standard environment Java supports build environment variables.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)

## Supporting Pages

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- Source ID: `site-docs-reference-4`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- OK ); } Results<ScoredDocument> results = index . search ( Query . newBuilder (). build ( query )); List<ScoredDocument> matched = new ArrayList<ScoredDocument> ( results . getNumberReturned ()); for ( ScoredDocument result : results ) { matched . add ( result ); } return matched ; } See Also: com.google.appengine.api.search.SearchServiceFactory com.google.appengine.api.search.checkers com.google.appengine.api.search.query com.google.appengine.api.taskqueue Provides a mechanism to perform work initiated by a user request, outside of that request.
- Finally, index is searched and matching documents, or their snippets are returned to the user. public List<ScoredDocument> indexAndSearch ( String query , Document ... documents ) { SearchService searchService = SearchServiceFactory . getSearchService (); Index index = searchService . getIndex ( IndexSpec . newBuilder (). setIndexName ( "indexName" )); for ( Document document : documents ) { PutResponse response = index . put ( document ); assert response . getResults (). get ( 0 ). getCode (). equals ( StatusCode .

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)
- Source ID: `site-docs-reference-4`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- OK ); } Results<ScoredDocument> results = index . search ( Query . newBuilder (). build ( query )); List<ScoredDocument> matched = new ArrayList<ScoredDocument> ( results . getNumberReturned ()); for ( ScoredDocument result : results ) { matched . add ( result ); } return matched ; } See Also: com.google.appengine.api.search.SearchServiceFactory com.google.appengine.api.search.checkers com.google.appengine.api.search.query com.google.appengine.api.taskqueue Provides a mechanism to perform work initiated by a user request, outside of that request.
- Finally, index is searched and matching documents, or their snippets are returned to the user. public List<ScoredDocument> indexAndSearch ( String query , Document ... documents ) { SearchService searchService = SearchServiceFactory . getSearchService (); Index index = searchService . getIndex ( IndexSpec . newBuilder (). setIndexName ( "indexName" )); for ( Document document : documents ) { PutResponse response = index . put ( document ); assert response . getResults (). get ( 0 ). getCode (). equals ( StatusCode .

### "Build a Java app on App Engine \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app)
- Source ID: `site-docs-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Java app on App Engine Stay organized with collections Save and categorize content based on your preferences.
- Getting started Learn how to build a simple web app and deploy it on App Engine: Create a Google Cloud project Learn how to create a Google Cloud project to hold your App Engine app's resources.
- After you build your app, you can use the other tutorials to learn how to integrate with other Google Cloud services and add more features to your app.
- Each task includes steps that build up to a simple web app.

