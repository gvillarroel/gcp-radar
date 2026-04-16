---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:03.283Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "WebSockets support"
feature_slug: "websockets-support"
latest_feature_date: "2019-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled"
keywords:
  - "websockets"
  - "app"
  - "engine"
  - "supports"
  - "persistent"
  - "connections"
  - "instances"
---

# WebSockets support

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine supports WebSockets for persistent connections to instances.

## Extended Definition

App Engine supports WebSockets for persistent connections to instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)

## Supporting Pages

### "Creating persistent connections with WebSockets \_|\_ App Engine flexible\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity)
- Source ID: `site-docs-reference-2`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Creating persistent connections with WebSockets Stay organized with collections Save and categorize content based on your preferences.
- Go Java Node.js PHP Python Ruby .NET Custom You can use WebSockets to create a persistent connection from a client (such as a mobile device or a computer) to an App Engine instance.
- Clone the sample app Copy the sample apps to your local machine, and navigate to the websockets directory: git clone https://github.com/GoogleCloudPlatform/java-docs-samples cd java-docs-samples/flexible/java-17/websocket-jetty/ Run the sample locally To run the sample application on your local computer: Start the local Eclipse Jetty web server using the Jetty Maven plugin: mvn jetty:run-exploded In your web browser, enter the following address: http://localhost:8080 Deploy and run the sample on App Engine To deploy your application to the App Engine flexible environment, run the following command from the websocket-jetty directory: mvn package appengine:deploy -Dapp.deploy.projectId= PROJECT ID Replace PROJECT ID with the ID of your Google Cloud project.
- Important: App Engine applications must always be tolerant of session affinity interruptions, particularly because all App Engine instances are periodically restarted.

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- Stop a version Each version in App Engine runs within one or more instances, depending on how much traffic you configured it to handle.
- By default, your app uses automatic scaling, which means App Engine will manage the number of idle instances.
- Instances are the computing units that App Engine uses to automatically scale your application .

### "How requests are handled \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- App Engine runs multiple instances of your application, and each instance has its own web server for handling requests.
- App Engine might scale up additional instances due to high CPU load, even if there are no active requests.
- When deploying to Google App Engine, a webserver process such as Gunicorn will serve the app. app . run ( host = "127.0.0.1" , port = 8080 , debug = True ) Quotas and limits App Engine automatically allocates resources to your application as traffic increases.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How requests are handled Stay organized with collections Save and categorize content based on your preferences.

