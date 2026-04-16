---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.401Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "App Engine automatic scaling instance classification behavior"
feature_slug: "app-engine-automatic-scaling-instance-classification-behavior"
latest_feature_date: "2018-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build"
keywords:
  - "app"
  - "engine"
  - "automatic"
  - "scaling"
  - "instance"
  - "classification"
  - "behavior"
  - "no"
---

# App Engine automatic scaling instance classification behavior

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

App Engine automatic scaling no longer exposes Resident vs Dynamic instances, labeling all scheduled instances as Dynamic.

## Extended Definition

App Engine automatic scaling no longer exposes Resident vs Dynamic instances, labeling all scheduled instances as Dynamic.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)

## Supporting Pages

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By default, your app uses automatic scaling, which means App Engine will manage the number of idle instances.
- You can specify thresholds for each of these metrics, as well as a minimum number instances to keep running at all times by configuring the automatic scaling element.
- Automatic scaling Automatic scaling creates instances based on request rate, response latencies, and other application metrics.
- Instances are the computing units that App Engine uses to automatically scale your application .

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-root-2`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Scaling types App Engine supports the following scaling types , which controls how and when instances are created: Automatic (default) Basic Manual You specify the scaling type in your app's app.yaml .
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.
- Note: For new projects you create after March 2025, App Engine sets the automatic scaling maximum instances default for standard environment deployments to 20.
- By default, your app uses automatic scaling, which means App Engine will manage the number of idle instances.

### "Build custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In rare cases, outages can prevent App Engine from providing 30 seconds of shutdown time, which means the STOP and KILL signals might not be sent before an instance terminates.
- Logging When a request is sent to your application running in App Engine, the request and response details are logged automatically.
- For example, Cloud SDK-based Java tools such as the Maven, Gradle, Eclipse, and IntelliJ plugins require the Dockerfile to be in src/main/docker/Dockerfile and the app.yaml file to be in src/main/appengine/app.yaml .
- If your application uses Cloud Build for compiling Docker images, the cloudbuild network hosts the Application Default Credentials enabling the associated Google Cloud services to automatically find your credentials.

