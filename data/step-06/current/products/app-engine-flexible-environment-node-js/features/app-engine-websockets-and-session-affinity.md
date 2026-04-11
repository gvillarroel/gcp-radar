---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:05:36.396Z"
product_name: "App Engine flexible environment Node.js"
product_slug: "app-engine-flexible-environment-node-js"
feature_name: "App Engine WebSockets and session affinity"
feature_slug: "app-engine-websockets-and-session-affinity"
latest_feature_date: "2019-01-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/nodejs/using-websockets-and-session-affinity"
keywords:
  - "persistent instance connections"
  - "session affinity"
  - "sticky sessions"
  - "session pinning"
  - "sticky session"
  - "App Engine instance affinity"
  - "App Engine WebSockets"
  - "WebSockets support"
---

# App Engine WebSockets and session affinity

Product: App Engine flexible environment Node.js
Coverage: LOW

## Step 02 Summary

App Engine now supports WebSockets with session affinity to enable persistent instance connections.

## Extended Definition

App Engine now supports WebSockets with session affinity to enable persistent instance connections.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/using-websockets-and-session-affinity)

## Supporting Pages

### "Creating persistent connections with WebSockets \_|\_ App Engine flexible\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/using-websockets-and-session-affinity)
- Source ID: `site-docs-reference-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- To turn off session affinity, remove the entry from your app.yaml file , or set the value to false: network: session affinity: false Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To enable session affinity for your App Engine version, add the following entry to your app.yaml file: network: session affinity: true Once the version is deployed with the updated app.yaml, new requests will start serving from the same instance as long as that instance is available.
- Enabling and disabling session affinity Important: To take advantage of session affinity, cookies must be enabled for all clients that are accessing your application, such as end-user web browsers and API clients.
- Because session affinity isn't guaranteed, you should only use it to take advantage of the ability of socket.io and other libraries to fall back on HTTP long polling in cases where the connection is broken.

