---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.798Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Task Queue Content-Length header for empty payloads"
feature_slug: "task-queue-content-length-header-for-empty-payloads"
latest_feature_date: "2015-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref"
keywords:
  - "content"
  - "length"
  - "header"
  - "payloads"
  - "empty"
  - "push"
  - "queue"
  - "task"
---

# Task Queue Content-Length header for empty payloads

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Push queue requests for Task Queue tasks without payloads now include a Content-Length header set to 0.

## Extended Definition

Push queue requests for Task Queue tasks without payloads now include a Content-Length header set to 0.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref](https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref)

## Supporting Pages

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following response headers that you can set in app.yaml influence how and when the Google Front End caches content: Cache-Control should be set to public for the Google Front End to cache content; it may also be cached by the Google Front End unless you specify a Cache-Control private or no-store directive.
- App Engine pending queue prioritization During periods of heavy traffic, App Engine might place requests in a pending queue while waiting for an available instance with the following prioritization: App Engine prioritizes other queued requests over pending queued requests from Task queue .
- When a service receives standard HTTP traffic at high volume while also serving Task queue or Cloud Tasks traffic at much lower volume, there is a disproportionate impact on the latency of the Task queue or the Cloud Tasks traffic.
- All subsequent requests for this URL that contain the Accept-Encoding: gzip header will receive the gzipped data from the cache until the cache becomes invalidated (due to the content changing after the cache expires).

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference-3`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following response headers that you can set in app.yaml influence how and when the Google Front End caches content: Cache-Control should be set to public for the Google Front End to cache content; it may also be cached by the Google Front End unless you specify a Cache-Control private or no-store directive.
- App Engine pending queue prioritization During periods of heavy traffic, App Engine might place requests in a pending queue while waiting for an available instance with the following prioritization: App Engine prioritizes other queued requests over pending queued requests from Task queue .
- When a service receives standard HTTP traffic at high volume while also serving Task queue or Cloud Tasks traffic at much lower volume, there is a disproportionate impact on the latency of the Task queue or the Cloud Tasks traffic.
- All subsequent requests for this URL that contain the Accept-Encoding: gzip header will receive the gzipped data from the cache until the cache becomes invalidated (due to the content changing after the cache expires).

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref](https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- For example, cron scheduled tasks satisfy the admin restriction, because App Engine sets an HTTP header X-Appengine-Cron: true on the respective requests.
- For information about which response headers influence caching, see Caching static content .
- A high maximum means users might wait longer for their requests to be served (if there are pending requests and no idle instances to serve them), but your application will cost less to run. min pending latency An optional element you can set to specify the minimum amount of time that App Engine should allow a request to wait in the pending queue before starting a new instance to handle it.
- Note that the scheduler might spawn a new instance before the actual maximum number of requests is reached. max pending latency The maximum amount of time that App Engine should allow a request to wait in the pending queue before starting additional instances to handle requests so that pending latency is reduced.

