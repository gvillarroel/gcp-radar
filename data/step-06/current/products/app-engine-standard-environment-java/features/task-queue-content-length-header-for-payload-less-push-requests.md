---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.919Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Task Queue Content-Length header for payload-less push requests"
feature_slug: "task-queue-content-length-header-for-payload-less-push-requests"
latest_feature_date: "2015-12-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref"
keywords:
  - "task"
  - "queue"
  - "content"
  - "length"
  - "header"
  - "payload"
  - "less"
  - "push"
---

# Task Queue Content-Length header for payload-less push requests

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Push Queue requests for tasks without payloads now include a `Content-Length: 0` header.

## Extended Definition

Push Queue requests for tasks without payloads now include a `Content-Length: 0` header.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- It's possible to reduce request latency by configuring your application to asynchronously write HTTP session data to the Datastore: <async-session-persistence enabled="true" /> With async session persistence turned on, App Engine will submit a Task Queue task to write session data to the Datastore before writing the data to memcache.
- If your application interacts with Datastore or Task Queues operations, set up monitoring to monitor performance and behavior impacts after enabling this feature. <system-properties> <property name="appengine.use.httpconnector" value="true"/> </system-properties> Optional.
- A low minimum means requests must spend less time in the pending queue when all existing instances are active.
- By default the task will be submitted to the default queue.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference-2`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following response headers that you can set in app.yaml influence how and when the Google Front End caches content: Cache-Control should be set to public for the Google Front End to cache content; it may also be cached by the Google Front End unless you specify a Cache-Control private or no-store directive.
- App Engine pending queue prioritization During periods of heavy traffic, App Engine might place requests in a pending queue while waiting for an available instance with the following prioritization: App Engine prioritizes other queued requests over pending queued requests from Task queue .
- When a service receives standard HTTP traffic at high volume while also serving Task queue or Cloud Tasks traffic at much lower volume, there is a disproportionate impact on the latency of the Task queue or the Cloud Tasks traffic.
- All subsequent requests for this URL that contain the Accept-Encoding: gzip header will receive the gzipped data from the cache until the cache becomes invalidated (due to the content changing after the cache expires).

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- A high maximum means users might wait longer for their requests to be served (if there are pending requests and no idle instances to serve them), but your application will cost less to run. min pending latency An optional element you can set to specify the minimum amount of time that App Engine should allow a request to wait in the pending queue before starting a new instance to handle it.
- However, if mygame attempts to make a JavaScript XMLHttpRequest to myassets , it will not succeed unless the handler for myassets returns an Access-Control-Allow-Origin: response header containing the value http://mygame.uc.r.appspot.com .
- For example, cron scheduled tasks satisfy the admin restriction, because App Engine sets an HTTP header X-Appengine-Cron: true on the respective requests.
- If pending requests are in the queue: Less than the min pending latency you specify, App Engine will not create new instances.

