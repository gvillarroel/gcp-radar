---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.416Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "URLFetch payload size error handling"
feature_slug: "urlfetch-payload-size-error-handling"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
keywords:
  - "urlfetch"
  - "payload"
  - "size"
  - "error"
  - "handling"
  - "now"
  - "raises"
  - "requestpayloadtoolargeexception"
---

# URLFetch payload size error handling

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

URLFetch now raises RequestPayloadTooLargeException when request payloads exceed allowed limits.

## Extended Definition

URLFetch now raises RequestPayloadTooLargeException when request payloads exceed allowed limits.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)

## Supporting Pages

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-root-2`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- The following limits apply specifically to the use of request handlers: Limit Amount Request size 32 megabytes Response size 32 megabytes Request timeout Depends on the type of scaling your app uses Maximum total number of files (app files and static files) 10,000 total 1,000 per directory Maximum size of an application file 32 megabytes Maximum size of a static file 32 megabytes Maximum total size of all application and static files First 1 gigabyte is free $ 0.026 per gigabyte per month after first 1 gigabyte Pending request timeout 10 seconds Maximum size of a single request header field 8 kilobytes for second-generation runtimes in the standard environment.
- Response headers that exceed this limit will return HTTP 502 errors, with logs showing upstream sent too big header while reading response header from upstream .
- If a script handler generates a response larger than this limit, the server sends back an empty response with a 500 Internal Server Error status code.
- Handling request timeouts App Engine is optimized for applications with short-lived requests, typically those that take a few hundred milliseconds.

### "How requests are handled \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- Source ID: `site-docs-root`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Response headers that exceed this limit will return HTTP 502 errors, with logs showing upstream sent too big header while reading response header from upstream .
- Handling asynchronous background work Background work is any work that your app performs for a request after you have delivered your HTTP response.
- App Engine runs multiple instances of your application, and each instance has its own web server for handling requests.
- Handling requests Your application is responsible for starting a webserver and handling requests.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-root-2`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Some instance shutdown log messages you might see include: [ start ] Quitting on terminated signal [ INFO ] Handling signal : term [ INFO ] Worker exiting ( pid : 21 ) [ INFO ] Worker exiting ( pid : 24 ) [ INFO ] Shutting down : Master [ start ] Start program failed : termination triggered by nginx exit These log messages do not indicate any error condition but are indications of the normal instance shut down process.
- If your app doesn't return a request within this time limit, App Engine interrupts the request handler and emits an error for your code to handle.
- If your app doesn't return a request within this time limit, App Engine interrupts the request handler and emits an error for your code to handle.
- As with basic scaling, an instance that is manually stopped has 30 seconds to finish handling requests before it is forcibly terminated.

