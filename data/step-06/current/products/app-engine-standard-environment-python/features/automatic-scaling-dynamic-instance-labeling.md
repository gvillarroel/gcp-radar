---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.784Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Automatic scaling dynamic instance labeling"
feature_slug: "automatic-scaling-dynamic-instance-labeling"
latest_feature_date: "2018-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref"
keywords:
  - "scheduler"
  - "labeling"
  - "dynamic"
  - "labels"
  - "instance"
  - "automatic"
  - "scaling"
---

# Automatic scaling dynamic instance labeling

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

The automatic scaling scheduler labels all auto-scaled instances as Dynamic instead of using Resident instances.

## Extended Definition

The automatic scaling scheduler labels all auto-scaled instances as Dynamic instead of using Resident instances.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref](https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.
- Scaling types App Engine supports the following scaling types , which controls how and when instances are created: Automatic (default) Basic Manual You specify the scaling type in your app's app.yaml .
- Automatic scaling settings Description Target CPU utilization Sets the CPU utilization ratio threshold to specify the CPU usage threshold at which more instances will be started to handle traffic.
- You can specify thresholds for each of these metrics, as well as a minimum number instances to keep running at all times by configuring the automatic scaling element.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference-3`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.
- Scaling types App Engine supports the following scaling types , which controls how and when instances are created: Automatic (default) Basic Manual You specify the scaling type in your app's app.yaml .
- Automatic scaling settings Description Target CPU utilization Sets the CPU utilization ratio threshold to specify the CPU usage threshold at which more instances will be started to handle traffic.
- You can specify thresholds for each of these metrics, as well as a minimum number instances to keep running at all times by configuring the automatic scaling element.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref](https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- The number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance (Default: 10, Maximum: 1000).
- Example automatic scaling : target cpu utilization : 0.65 min instances : 5 max instances : 100 min pending latency : 30ms max pending latency : automatic max concurrent requests : 50 basic scaling Applications that use an instance class of B1 or higher must specify either this element or manual scaling .
- The following values are available depending on your service's scaling : Automatic scaling F1 , F2 , F4 , F4 1G Default: F1 Optionally use the automatic scaling element to change default settings for automatic scaling, such as minimum and maximum number of instances, latency, and concurrent connections.
- Specify this element to change default settings for automatic scaling, such as setting minimum and maximum levels for number of instances, latency, and concurrent connections for a service.

