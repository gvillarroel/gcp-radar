---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:43:43.857Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "Default gzip response compression on App Engine flexible environment"
feature_slug: "default-gzip-response-compression-on-app-engine-flexible-environment"
latest_feature_date: "2017-10-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/runtime"
keywords:
  - "redeploy to enable gzip"
  - "automatic HTTP compression"
  - "default gzip compression"
  - "response compression"
  - "gzip responses"
  - "response gzip"
  - "App Engine flexible responses"
  - "gzip"
---

# Default gzip response compression on App Engine flexible environment

Product: App Engine flexible environment Java
Coverage: LOW

## Step 02 Summary

App Engine flexible environment apps now serve all responses with gzip compression by default after redeploy.

## Extended Definition

App Engine flexible environment apps now serve all responses with gzip compression by default after redeploy.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/java/runtime](https://docs.cloud.google.com/appengine/docs/flexible/java/runtime)

## Supporting Pages

### "The Java runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/runtime](https://docs.cloud.google.com/appengine/docs/flexible/java/runtime)
- Source ID: `site-docs-root-2`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To activate this module, set the environment variable, JETTY MODULES ENABLE=gzip , in the app.yaml file: env variables : JETTY MODULES ENABLE : 'gzip' Using Quickstart Jetty can speed up the start time of your application by pre-scanning its content and generating configuration files.
- Enabling gzip compression The gzip handler is bundled with Jetty but not activated by default.

