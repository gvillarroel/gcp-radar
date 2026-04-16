---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.926Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "URLFetch large payload exception handling"
feature_slug: "urlfetch-large-payload-exception-handling"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
keywords:
  - "urlfetch"
  - "large"
  - "payload"
  - "exception"
  - "handling"
  - "requests"
  - "oversized"
  - "payloads"
---

# URLFetch large payload exception handling

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

URLFetch requests with oversized payloads now use RequestPayloadTooLargeException.

## Extended Definition

URLFetch requests with oversized payloads now use RequestPayloadTooLargeException.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)

## Supporting Pages

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See Also: com.google.appengine.api.taskqueue.Queue , The Task Queue Java API in the Google App Engine Developer's Guide . com.google.appengine.api.urlfetch Provides a service to make HTTP/S requests of other servers on the internet.
- As is typical for App Engine services, the URLFetchServiceFactory returns a URLFetchService , which is used to actually make requests of the service.
- See Also: The URL Fetch Java API in the Google App Engine Developer's Guide ., com.google.appengine.api.urlfetch.URLFetchService com.google.appengine.api.users Provides facilities to check if a user has authenticated, retrieve their email address, and check if they are an administrator for this application.
- See Also: com.google.appengine.api.blobstore.BlobstoreService , The Blobstore Java API in the Google App Engine Developer's Guide . com.google.appengine.api.blobstore.jakarta Provides management and persistent storage of large, immutable byte arrays.

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Because App Engine keeps idle instances in reserve, it is unlikely that requests will enter the pending queue except in exceptionally high load spikes.
- To use this setting, you must enable billing for your app, or you will get exceptions, which are documented in Issue requests .
- You are charged for instances, whether or not they are handling requests.
- The following example demonstrates how to designate all png files as static files (except those in the data/ directory and all of its subdirectories): < static - files > < include path = "/ .png" / > < exclude path = "/data/ .png" / > < / static - files > You can also set HTTP headers to use when responding to requests to these static resources. < static - files > < include path = "/my static-files" > < http - header name = "Access-Control-Allow-Origin" value = "http://example.org" / > < / include > < / static - files > Note: If the path string doesn't start with a slash, then the HTTP headers, if any, work on App Engine but do not work on the Development Server.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Task Queue When a task executes, its associated requests count toward the application request quotas These limits apply to all task queues: Resource Daily limit Maximum rate Task Queue management calls (using the Google Cloud console) 10,000 n/a Resource Default limit Maximum number of queues (includes both push and pull queues but not the default queue) 100 queues.
- This includes: data received by the application in secure requests and non-secure requests uploads to the Blobstore data received in response to HTTP requests by the URL fetch service Secure outgoing bandwidth The amount of data sent by the application over a secure connection in response to requests.
- If you're expecting extremely high traffic levels, or for some reason your app requires particularly high quotas (for example, because of a significant product launch or large load tests), we recommend that you sign up for a support package .

