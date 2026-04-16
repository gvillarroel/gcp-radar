---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:33.473Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "App Engine WebSockets and session affinity support"
feature_slug: "app-engine-websockets-and-session-affinity-support"
latest_feature_date: "2019-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/flexible/cloud-profiler"
keywords:
  - "app"
  - "engine"
  - "websockets"
  - "session"
  - "affinity"
  - "added"
  - "maintain"
  - "persistent"
---

# App Engine WebSockets and session affinity support

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine added support for using WebSockets and session affinity to maintain persistent connections.

## Extended Definition

App Engine added support for using WebSockets and session affinity to maintain persistent connections.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/flexible/cloud-profiler](https://docs.cloud.google.com/appengine/docs/flexible/cloud-profiler)

## Supporting Pages

### "Creating persistent connections with WebSockets \_|\_ App Engine flexible\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity)
- Source ID: `site-docs-reference-2`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable session affinity for your App Engine version, add the following entry to your app.yaml file: network: session affinity: true Once the version is deployed with the updated app.yaml, new requests will start serving from the same instance as long as that instance is available.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Creating persistent connections with WebSockets Stay organized with collections Save and categorize content based on your preferences.
- Go Java Node.js PHP Python Ruby .NET Custom You can use WebSockets to create a persistent connection from a client (such as a mobile device or a computer) to an App Engine instance.
- Important: App Engine applications must always be tolerant of session affinity interruptions, particularly because all App Engine instances are periodically restarted.

### "How requests are handled \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When deploying to Google App Engine, a webserver process such as Gunicorn will serve the app. app . run ( host = "127.0.0.1" , port = 8080 , debug = True ) Quotas and limits App Engine automatically allocates resources to your application as traffic increases.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How requests are handled Stay organized with collections Save and categorize content based on your preferences.
- However, this is bound by the following restrictions: App Engine reserves automatic scaling capacity for applications with low latency, where the application responds to requests in less than one second.
- OK Go Java Node.js PHP Python Ruby .NET Custom This document describes how your App Engine application receives requests and sends responses.

### "Understand performance with Cloud Profiler \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/cloud-profiler](https://docs.cloud.google.com/appengine/docs/flexible/cloud-profiler)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Understand performance with Cloud Profiler Stay organized with collections Save and categorize content based on your preferences.

