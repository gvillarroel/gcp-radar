---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.885Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Automatic scaling target throughput utilization setting"
feature_slug: "automatic-scaling-target-throughput-utilization-setting"
latest_feature_date: "2018-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "automatic"
  - "scaling"
  - "target"
  - "throughput"
  - "utilization"
  - "setting"
  - "now"
  - "supports"
---

# Automatic scaling target throughput utilization setting

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Automatic scaling now supports a target throughput utilization setting for concurrent-request-based scaling behavior.

## Extended Definition

Automatic scaling now supports a target throughput utilization setting for concurrent-request-based scaling behavior.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- App Engine calculates the number of instances necessary to serve your current application traffic based on scaling settings such as target cpu utilization and target throughput utilization .
- Example automatic scaling : target cpu utilization : 0.65 min instances : 5 max instances : 100 min pending latency : 30ms max pending latency : automatic max concurrent requests : 50 basic scaling Applications that use an instance class of B1 or higher must specify either this element or manual scaling .
- The following values are available depending on your service's scaling : Automatic scaling F1 , F2 , F4 , F4 1G Default: F1 Optionally use the automatic scaling element to change default settings for automatic scaling, such as minimum and maximum number of instances, latency, and concurrent connections.
- When the number of concurrent requests reaches a value equal to max concurrent requests times target throughput utilization , the scheduler tries to start a new instance. max concurrent requests Optional.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- App Engine calculates the number of instances necessary to serve your current application traffic based on scaling settings such as target cpu utilization and target throughput utilization .
- Example automatic scaling : target cpu utilization : 0.65 min instances : 5 max instances : 100 min pending latency : 30ms max pending latency : automatic max concurrent requests : 50 basic scaling Applications that use an instance class of B1 or higher must specify either this element or manual scaling .
- The following values are available depending on your service's scaling : Automatic scaling F1 , F2 , F4 , F4 1G Default: F1 Optionally use the automatic scaling element to change default settings for automatic scaling, such as minimum and maximum number of instances, latency, and concurrent connections.
- When the number of concurrent requests reaches a value equal to max concurrent requests times target throughput utilization , the scheduler tries to start a new instance. max concurrent requests Optional.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Update a connector You can update and monitor the following attributes of your connector by using the Google Cloud console, Google Cloud CLI, or the API: Machine (instance) type Minimum and maximum number of instances Recent throughput, number of instances, and CPU utilization Update machine type Caution: Changing machine type can cause some long-running connections to drop.
- The name of the new subnet begins with the "aet-" prefix. (Optional) To set scaling options for additional control over the connector, click Show Scaling Settings to display the scaling form.
- To display charts for the connector's throughput, number of instances, and CPU utilization metrics over time by using the Google Cloud console: Go to the Serverless VPC Access overview page.
- To learn about available machine types, see the documentation on Throughput and scaling . gcloud In the Google Cloud console, activate Cloud Shell.

