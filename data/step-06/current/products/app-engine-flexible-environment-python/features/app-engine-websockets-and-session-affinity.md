---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:17.314Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "App Engine WebSockets and session affinity"
feature_slug: "app-engine-websockets-and-session-affinity"
latest_feature_date: "2019-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity"
  - "https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled"
keywords:
  - "app"
  - "engine"
  - "websockets"
  - "session"
  - "affinity"
  - "added"
  - "enable"
  - "persistent"
---

# App Engine WebSockets and session affinity

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine added support for WebSockets and session affinity to enable persistent connections to instances.

## Extended Definition

App Engine added support for WebSockets and session affinity to enable persistent connections to instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity)
- [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)

## Supporting Pages

### "Creating persistent connections with WebSockets \_|\_ App Engine flexible\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable session affinity for your App Engine version, add the following entry to your app.yaml file: network: session affinity: true Once the version is deployed with the updated app.yaml, new requests will start serving from the same instance as long as that instance is available.
- To allow App Engine to send requests by the same user to the same instance, you can enable session affinity.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Creating persistent connections with WebSockets Stay organized with collections Save and categorize content based on your preferences.
- Enabling and disabling session affinity Important: To take advantage of session affinity, cookies must be enabled for all clients that are accessing your application, such as end-user web browsers and API clients.

### "Debugging an instance \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance)
- Source ID: `site-docs-reference-2`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In order to debug an instance, your role must contain the appengine.instances.enableDebug permission.
- Disable debugging for your instance to allow it to resume normal operation. gcloud To connect to an instance using gcloud: With the instance enabled for debugging , invoke the command: gcloud beta app instances --project PROJECT-ID ssh INSTANCE-NAME --service SERVICE --version VERSION At this point you are in the instance host, which has several containers running.
- To enable and disable debug mode in gcloud : Use the gcloud app instances enable-debug command to debug the VMs for a particular instance and version, as follows: gcloud app --project PROJECT-ID instances enable-debug Replace PROJECT-ID with your own project ID, and follow the prompts to specify the instance version to debug.
- To connect to an instance in the console: Visit the Google Cloud console instances page for your project: Go to the instances page Click SSH in the far right of the row containing the instance you want to access: This puts the instance into debug mode, and opens an SSH session for the instance in a terminal window.

### "How requests are handled \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- Source ID: `site-docs-reference-2`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When deploying to Google App Engine, a webserver process such as Gunicorn will serve the app. app . run ( host = "127.0.0.1" , port = 8080 , debug = True ) Quotas and limits App Engine automatically allocates resources to your application as traffic increases.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How requests are handled Stay organized with collections Save and categorize content based on your preferences.
- However, this is bound by the following restrictions: App Engine reserves automatic scaling capacity for applications with low latency, where the application responds to requests in less than one second.
- OK Go Java Node.js PHP Python Ruby .NET Custom This document describes how your App Engine application receives requests and sends responses.

