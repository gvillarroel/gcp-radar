---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.269Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Faceted Search"
feature_slug: "faceted-search"
latest_feature_date: "2015-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager"
keywords:
  - "faceted"
  - "results"
  - "refine"
  - "facet"
  - "search"
  - "applications"
  - "based"
  - "lets"
---

# Faceted Search

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Faceted Search lets applications refine search results using facet-based filtering.

## Extended Definition

Faceted Search lets applications refine search results using facet-based filtering.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)

## Supporting Pages

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)
- Source ID: `site-docs-reference-4`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- OK ); } Results<ScoredDocument> results = index . search ( Query . newBuilder (). build ( query )); List<ScoredDocument> matched = new ArrayList<ScoredDocument> ( results . getNumberReturned ()); for ( ScoredDocument result : results ) { matched . add ( result ); } return matched ; } See Also: com.google.appengine.api.search.SearchServiceFactory com.google.appengine.api.search.checkers com.google.appengine.api.search.query com.google.appengine.api.taskqueue Provides a mechanism to perform work initiated by a user request, outside of that request.
- Finally, index is searched and matching documents, or their snippets are returned to the user. public List<ScoredDocument> indexAndSearch ( String query , Document ... documents ) { SearchService searchService = SearchServiceFactory . getSearchService (); Index index = searchService . getIndex ( IndexSpec . newBuilder (). setIndexName ( "indexName" )); for ( Document document : documents ) { PutResponse response = index . put ( document ); assert response . getResults (). get ( 0 ). getCode (). equals ( StatusCode .
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback appengine-apis overview (5.0.0) Stay organized with collections Save and categorize content based on your preferences. com.google.appengine.api Provides facilities for server lifecycle management, threading and namespaces/multitenancy.
- Entities may be associated in a tree structure; the com.google.appengine.api.datastore.Query in the snippet above searches only for Task entities associated with a specific UserInfo entity, and then filters those for Tasks due before today.

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference-4`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- The appengine-web.xml file can define environment variables that are set when the application is running. <env-variables> <env-var name="DEFAULT ENCODING" value="UTF-8" /> </env-variables> To avoid conflicts with your local environment, the development server does not set environment variables based on this file, and requires that the local environment have these variables already set to matching values. export DEFAULT ENCODING = "UTF-8" dev appserver war When deployed to App Engine, the environment is created with these variables already set.
- For example: <staging> <delete-jsps>false</delete-jsps> </staging> Staging option defaults The defaults for staging options are different depending on whether you use Google Cloud SDK-based tooling, such as the gcloud CLI, or the Google Cloud SDK-based Maven , Gradle , or IntelliJ plugins.
- With warmup requests enabled, the App Engine infrastructure issues GET requests to / ah/warmup , initializing <load-on-startup> servlets, ServletContextListeners , and custom warmup servlets, which allow you to initialize your application's code as it requires.
- App Engine Java applications use a configuration file, named appengine-web.xml , to specify information about your app and to identify which files in the app's WAR file are static files (like images) and which are resource files used by the application.

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- Source ID: `site-docs-reference-4`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- OK ); } Results<ScoredDocument> results = index . search ( Query . newBuilder (). build ( query )); List<ScoredDocument> matched = new ArrayList<ScoredDocument> ( results . getNumberReturned ()); for ( ScoredDocument result : results ) { matched . add ( result ); } return matched ; } See Also: com.google.appengine.api.search.SearchServiceFactory com.google.appengine.api.search.checkers com.google.appengine.api.search.query com.google.appengine.api.taskqueue Provides a mechanism to perform work initiated by a user request, outside of that request.
- Finally, index is searched and matching documents, or their snippets are returned to the user. public List<ScoredDocument> indexAndSearch ( String query , Document ... documents ) { SearchService searchService = SearchServiceFactory . getSearchService (); Index index = searchService . getIndex ( IndexSpec . newBuilder (). setIndexName ( "indexName" )); for ( Document document : documents ) { PutResponse response = index . put ( document ); assert response . getResults (). get ( 0 ). getCode (). equals ( StatusCode .
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback appengine-apis overview (5.0.0) Stay organized with collections Save and categorize content based on your preferences. com.google.appengine.api Provides facilities for server lifecycle management, threading and namespaces/multitenancy.
- Entities may be associated in a tree structure; the com.google.appengine.api.datastore.Query in the snippet above searches only for Task entities associated with a specific UserInfo entity, and then filters those for Tasks due before today.

