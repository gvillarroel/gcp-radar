---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:44:03.335Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "URL Fetch API certificate validation by default"
feature_slug: "url-fetch-api-certificate-validation-by-default"
latest_feature_date: "2025-06-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search"
keywords:
  - "target host certificate check"
  - "certificate check by default"
  - "default certificate verification"
  - "URLFetch certificate validation"
  - "certificate validation by default"
  - "URL Fetch API"
  - "URL Fetch"
  - "urlfetch"
---

# URL Fetch API certificate validation by default

Product: App Engine standard environment Java
Coverage: LOW

## Step 02 Summary

New App Engine deployments now validate the certificate of target hosts by default when using the URL Fetch API.

## Extended Definition

New App Engine deployments now validate the certificate of target hosts by default when using the URL Fetch API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)

## Supporting Pages

### "App Engine standard environment for Java gen2 release notes \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- June 30, 2025 Feature For new deployments, the URL Fetch API validates the certificate of the host it contacts by default.
- Feature Remote API can now be accessed using OAuth2 credentials using https://developers.google.com/identity/protocols/application-default-credentials Feature Java runtime notes Java's URLFetch API gains a property to specify default fetch deadline. appengine.api.urlfetch.defaultDeadline is a floating point number in seconds that can be used to specify a default URLFetch timeout for Java in appengine-web.xml.
- Fixed Fixed Issue 63123716: Url fetching with Google Java HTTP Client not working on dev-server August 01, 2017 Feature App Engine is now available in the europe-west3 region (Frankfurt, Germany).
- Feature The error returned by URL Fetch for a request to a port outside of the permitted ranges (80-90, 440-450, 1024-65535) will now always return INVALID URL as documented.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource Default limit Cron job 250 cron jobs URL Fetch URL Fetch API calls The total number of times the application accessed the URL fetch service to perform an HTTP or HTTPS request.
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This includes: data received by the application in secure requests and non-secure requests uploads to the Blobstore data received in response to HTTP requests by the URL fetch service Secure outgoing bandwidth The amount of data sent by the application over a secure connection in response to requests.
- This includes: data served in response to both secure requests and non-secure requests by application servers, static file servers, or the Blobstore data sent in email messages data in outgoing HTTP requests sent by the URL fetch service.

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See Also: The URL Fetch Java API in the Google App Engine Developer's Guide ., com.google.appengine.api.urlfetch.URLFetchService com.google.appengine.api.users Provides facilities to check if a user has authenticated, retrieve their email address, and check if they are an administrator for this application.
- See Also: com.google.appengine.api.taskqueue.Queue , The Task Queue Java API in the Google App Engine Developer's Guide . com.google.appengine.api.urlfetch Provides a service to make HTTP/S requests of other servers on the internet.
- As is typical for App Engine services, the URLFetchServiceFactory returns a URLFetchService , which is used to actually make requests of the service.
- The java.net.URLConnection class can also be used to do this, and in App Engine is implemented by using URL Fetch.

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See Also: The URL Fetch Java API in the Google App Engine Developer's Guide ., com.google.appengine.api.urlfetch.URLFetchService com.google.appengine.api.users Provides facilities to check if a user has authenticated, retrieve their email address, and check if they are an administrator for this application.
- See Also: com.google.appengine.api.taskqueue.Queue , The Task Queue Java API in the Google App Engine Developer's Guide . com.google.appengine.api.urlfetch Provides a service to make HTTP/S requests of other servers on the internet.
- As is typical for App Engine services, the URLFetchServiceFactory returns a URLFetchService , which is used to actually make requests of the service.
- The java.net.URLConnection class can also be used to do this, and in App Engine is implemented by using URL Fetch.

