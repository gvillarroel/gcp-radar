---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:40:42.101Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "Per-second instance billing"
feature_slug: "per-second-instance-billing"
latest_feature_date: "2017-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
keywords:
  - "per"
  - "second"
  - "instance"
  - "billing"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
---

# Per-second instance billing

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment bills instance usage in per-second increments with a one-minute minimum.

## Extended Definition

App Engine flexible environment bills instance usage in per-second increments with a one-minute minimum.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)

## Supporting Pages

### "How requests are handled \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How requests are handled Stay organized with collections Save and categorize content based on your preferences.
- Unsupported HTTP requests The following features are not supported by App Engine flexible environment: HTTP/2 traffic to the backend service.
- However, this is bound by the following restrictions: App Engine reserves automatic scaling capacity for applications with low latency, where the application responds to requests in less than one second.
- App Engine runs multiple instances of your application, and each instance has its own web server for handling requests.

### "Debugging an instance \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Debugging an instance Stay organized with collections Save and categorize content based on your preferences.
- In order to debug an instance, your role must contain the appengine.instances.enableDebug permission.
- Note: This guide is applicable to all runtimes in the flexible environment except for .NET.
- Understanding common containers In addition to the container running your application code, your instance may also have the following containers: Container and Source Code Description cloud-sql Ensures secure connections to your Cloud SQL instance. fluentd logger Logging agent. nginx proxy Proxies requests to the application. opentelemetry-collector Receives, processes, and exports telemetry data. stackdriver-monitoring-agent Collects, stores, and monitors system information.

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- NTP with App Engine flexible environment The App Engine flexible environment has network time protocol (NTP) services which use Google NTP servers.
- Health checking App Engine sends periodic health check requests to confirm that an instance is running, and to check that an instance is fully started and ready to accept incoming requests.
- App Engine continues to send health check requests and restarts the instance if an unhealthy instance continues to fail to respond to a predetermined number of consecutive health checks.

