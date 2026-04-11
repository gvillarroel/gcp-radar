---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T22:04:50.087Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Auto-scaling target throughput utilization control"
feature_slug: "auto-scaling-target-throughput-utilization-control"
latest_feature_date: "2018-05-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/config/appref"
keywords:
  - "automaticScaling.targetThroughputUtilization"
  - "target throughput utilization"
  - "concurrent request target"
  - "target throughput"
  - "throughput target"
  - "targetThroughputUtilization"
---

# Auto-scaling target throughput utilization control

Product: App Engine standard environment Node.js
Coverage: LOW

## Step 02 Summary

A new target throughput utilization setting allows App Engine automatic scaling to optimize scaling based on concurrent request load.

## Extended Definition

A new target throughput utilization setting allows App Engine automatic scaling to optimize scaling based on concurrent request load.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/config/appref](https://docs.cloud.google.com/appengine/docs/standard/nodejs/config/appref)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/config/appref](https://docs.cloud.google.com/appengine/docs/standard/nodejs/config/appref)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When the number of concurrent requests reaches a value equal to max concurrent requests times target throughput utilization , the scheduler tries to start a new instance. max concurrent requests Optional.
- App Engine calculates the number of instances necessary to serve your current application traffic based on scaling settings such as target cpu utilization and target throughput utilization .
- When the number of concurrent requests reaches a value equal to max concurrent requests times target throughput utilization , the scheduler tries to start a new instance.
- For example, a value of 0.7 means that new instances will be started after CPU usage reaches 70 percent. target throughput utilization Optional.

