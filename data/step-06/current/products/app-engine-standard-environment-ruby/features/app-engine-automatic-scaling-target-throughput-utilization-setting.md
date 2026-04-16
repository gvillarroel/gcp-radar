---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.402Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "App Engine automatic scaling target throughput utilization setting"
feature_slug: "app-engine-automatic-scaling-target-throughput-utilization-setting"
latest_feature_date: "2018-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
keywords:
  - "app"
  - "engine"
  - "automatic"
  - "scaling"
  - "target"
  - "throughput"
  - "utilization"
  - "setting"
---

# App Engine automatic scaling target throughput utilization setting

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

App Engine automatic scaling introduced a target throughput utilization setting to optimize instance startup based on concurrent requests.

## Extended Definition

App Engine automatic scaling introduced a target throughput utilization setting to optimize instance startup based on concurrent requests.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-root-2`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To configure the egress behavior of your App Engine service: Add the egress setting attribute to the vpc access connector field of your service's app.yaml file: vpc access connector : name : projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME egress setting : EGRESS SETTING Replace: PROJECT ID with your Google Cloud project ID REGION with the region your connector is in CONNECTOR NAME with the name of your connector EGRESS SETTING with one of the following: private-ranges-only Default.
- However, if you create a connector in a service project and the connector targets a Shared VPC network in the host project, you must add firewall rules to allow necessary traffic for the connector's operation from the following ranges: Serverless infrastructure IP range : 35.199.224.0/19 Health check probe IP ranges : 35.191.0.0/16 , 35.191.192.0/18 , and 130.211.0.0/22 These ranges are used by the Google infrastructure underlying Cloud Run, Cloud Run functions, and App Engine standard environment.
- Update a connector You can update and monitor the following attributes of your connector by using the Google Cloud console, Google Cloud CLI, or the API: Machine (instance) type Minimum and maximum number of instances Recent throughput, number of instances, and CPU utilization Update machine type Caution: Changing machine type can cause some long-running connections to drop.
- The name of the new subnet begins with the "aet-" prefix. (Optional) To set scaling options for additional control over the connector, click Show Scaling Settings to display the scaling form.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-root-2`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Automatic scaling settings Description Target CPU utilization Sets the CPU utilization ratio threshold to specify the CPU usage threshold at which more instances will be started to handle traffic.
- Scaling types App Engine supports the following scaling types , which controls how and when instances are created: Automatic (default) Basic Manual You specify the scaling type in your app's app.yaml .
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.
- Note: For new projects you create after March 2025, App Engine sets the automatic scaling maximum instances default for standard environment deployments to 20.

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By default, your app uses automatic scaling, which means App Engine will manage the number of idle instances.
- You can specify thresholds for each of these metrics, as well as a minimum number instances to keep running at all times by configuring the automatic scaling element.
- Automatic scaling Automatic scaling creates instances based on request rate, response latencies, and other application metrics.
- Instance location Instances are automatically located by geographical region according to the project settings .

