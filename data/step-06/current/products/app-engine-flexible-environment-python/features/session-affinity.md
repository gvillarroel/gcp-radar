---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:40:42.098Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "Session affinity"
feature_slug: "session-affinity"
latest_feature_date: "2019-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled"
keywords:
  - "session"
  - "affinity"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "supports"
  - "keep"
---

# Session affinity

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment supports session affinity to keep related requests on the same instance.

## Extended Definition

App Engine flexible environment supports session affinity to keep related requests on the same instance.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)

## Supporting Pages

### "Creating persistent connections with WebSockets \_|\_ App Engine flexible\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity)
- Source ID: `site-docs-reference-2`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Clone the sample app Copy the sample apps to your local machine, and navigate to the websockets directory: git clone https://github.com/GoogleCloudPlatform/python-docs-samples cd python-docs-samples/appengine/flexible/websockets/ Run the sample locally To run locally, you need to use Gunicorn with the flask socket worker: $ gunicorn -b 127 .0.0.1:8080 -k flask sockets.worker main:app Deploy and run the sample on App Engine To deploy your application to the App Engine flexible environment, run the following command from the directory where your app.yaml is located: gcloud app deploy You can then direct your browser to https:// PROJECT ID .
- To enable session affinity for your App Engine version, add the following entry to your app.yaml file: network: session affinity: true Once the version is deployed with the updated app.yaml, new requests will start serving from the same instance as long as that instance is available.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Creating persistent connections with WebSockets Stay organized with collections Save and categorize content based on your preferences.
- Important: App Engine applications must always be tolerant of session affinity interruptions, particularly because all App Engine instances are periodically restarted.

### "How requests are handled \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How requests are handled Stay organized with collections Save and categorize content based on your preferences.
- Unsupported HTTP requests The following features are not supported by App Engine flexible environment: HTTP/2 traffic to the backend service.
- When deploying to Google App Engine, a webserver process such as Gunicorn will serve the app. app . run ( host = "127.0.0.1" , port = 8080 , debug = True ) Quotas and limits App Engine automatically allocates resources to your application as traffic increases.
- However, this is bound by the following restrictions: App Engine reserves automatic scaling capacity for applications with low latency, where the application responds to requests in less than one second.

### "How requests are routed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Inconsistent metrics when App Engine flexible environment uses Cloud Load Balancing The App Engine flexible environment dashboard displays all metrics only for requests routed through a flexible environment managed backend.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How requests are routed Stay organized with collections Save and categorize content based on your preferences.
- If you use App Engine flexible environment with Cloud Load Balancing, then certain metrics in the App Engine metrics table are reported as metrics from the loadbalancing table instead.
- CUSTOM DOMAIN Note: In the flexible environment, targeting an instance is not supported.

