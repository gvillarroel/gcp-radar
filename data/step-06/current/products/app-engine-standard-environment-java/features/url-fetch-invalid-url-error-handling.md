---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.263Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "URL Fetch invalid URL error handling"
feature_slug: "url-fetch-invalid-url-error-handling"
latest_feature_date: "2016-05-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager"
keywords:
  - "invalid"
  - "ports"
  - "returns"
  - "handling"
  - "fetch"
  - "error"
  - "requests"
---

# URL Fetch invalid URL error handling

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

URL Fetch returns INVALID_URL for requests to ports outside the permitted ranges.

## Extended Definition

URL Fetch returns INVALID_URL for requests to ports outside the permitted ranges.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)

## Supporting Pages

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- All subsequent requests for this URL that contain the Accept-Encoding: gzip header will receive the gzipped data from the cache until the cache becomes invalidated (due to the content changing after the cache expires).
- The Google Cloud console Quota Details page also reports Secure Requests , Secure Incoming Bandwidth , and Secure Outgoing Bandwidth as separate values for informational purposes.
- All subsequent requests for this URL that don't contain the Accept-Encoding header receive uncompressed data from the cache until the cache becomes invalidated.
- Handling request timeouts App Engine is optimized for applications with short-lived requests, typically those that take a few hundred milliseconds.

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- Source ID: `site-docs-reference-4`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- As is typical for App Engine services, the URLFetchServiceFactory returns a URLFetchService , which is used to actually make requests of the service.
- See Also: com.google.appengine.api.taskqueue.Queue , The Task Queue Java API in the Google App Engine Developer's Guide . com.google.appengine.api.urlfetch Provides a service to make HTTP/S requests of other servers on the internet.
- More explicit error handling can be installed via MemcacheService#setErrorHandler(ErrorHandler) .
- See Also: The URL Fetch Java API in the Google App Engine Developer's Guide ., com.google.appengine.api.urlfetch.URLFetchService com.google.appengine.api.users Provides facilities to check if a user has authenticated, retrieve their email address, and check if they are an administrator for this application.

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)
- Source ID: `site-docs-reference-4`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- As is typical for App Engine services, the URLFetchServiceFactory returns a URLFetchService , which is used to actually make requests of the service.
- See Also: com.google.appengine.api.taskqueue.Queue , The Task Queue Java API in the Google App Engine Developer's Guide . com.google.appengine.api.urlfetch Provides a service to make HTTP/S requests of other servers on the internet.
- More explicit error handling can be installed via MemcacheService#setErrorHandler(ErrorHandler) .
- See Also: The URL Fetch Java API in the Google App Engine Developer's Guide ., com.google.appengine.api.urlfetch.URLFetchService com.google.appengine.api.users Provides facilities to check if a user has authenticated, retrieve their email address, and check if they are an administrator for this application.

