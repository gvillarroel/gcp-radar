---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:52:30.804Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "App Engine target throughput utilization automatic scaling setting"
feature_slug: "app-engine-target-throughput-utilization-automatic-scaling-setting"
latest_feature_date: "2018-05-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
keywords:
  - "target_throughput_utilization setting"
  - "target_throughput_utilization"
  - "target throughput utilization"
  - "app.yaml scaling settings"
  - "concurrent request load"
  - "throughput utilization"
  - "instance scaling target"
  - "automatic scaling"
---

# App Engine target throughput utilization automatic scaling setting

Product: App Engine standard environment Go
Coverage: LOW

## Step 02 Summary

A target throughput utilization setting was added to scale App Engine instances based on concurrent request load.

## Extended Definition

A target throughput utilization setting was added to scale App Engine instances based on concurrent request load.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Target throughput utilization Sets the throughput threshold for the number of concurrent requests after which more instances will be started to handle traffic.
- Automatic scaling settings Description Target CPU utilization Sets the CPU utilization ratio threshold to specify the CPU usage threshold at which more instances will be started to handle traffic.
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.
- This table compares the performance features of the three scaling types: Feature Automatic scaling Basic scaling Manual scaling Request timeout 10 minutes for HTTP requests and task queue tasks.

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Default: F1 is assigned if you don't specify an instance class along with the automatic scaling element. basic scaling When using basic scaling, the B1, B2, B4, B4 1G, and B8 instance classes are available.
- The following instance classes are available when specifying different scaling options: automatic scaling When using automatic scaling, the F1, F2, F4, and F4 1G instance classes are available.
- The number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance (Default: 10, Maximum: 80).
- The automatic scaling element sets minimum and maximum levels for number of instances, latency, and concurrent connections for a module.

