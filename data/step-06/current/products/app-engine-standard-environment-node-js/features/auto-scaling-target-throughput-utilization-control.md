---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:56:05.586Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Auto-scaling target throughput utilization control"
feature_slug: "auto-scaling-target-throughput-utilization-control"
latest_feature_date: "2018-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
keywords:
  - "auto"
  - "scaling"
  - "target"
  - "throughput"
  - "utilization"
  - "control"
  - "setting"
  - "allows"
---

# Auto-scaling target throughput utilization control

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

A new target throughput utilization setting allows App Engine automatic scaling to optimize scaling based on concurrent request load.

## Extended Definition

A new target throughput utilization setting allows App Engine automatic scaling to optimize scaling based on concurrent request load.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The name of the new subnet begins with the "aet-" prefix. (Optional) To set scaling options for additional control over the connector, click Show Scaling Settings to display the scaling form.
- Update a connector You can update and monitor the following attributes of your connector by using the Google Cloud console, Google Cloud CLI, or the API: Machine (instance) type Minimum and maximum number of instances Recent throughput, number of instances, and CPU utilization Update machine type Caution: Changing machine type can cause some long-running connections to drop.
- To display charts for the connector's throughput, number of instances, and CPU utilization metrics over time by using the Google Cloud console: Go to the Serverless VPC Access overview page.
- To learn about available machine types, see the documentation on Throughput and scaling . gcloud In the Google Cloud console, activate Cloud Shell.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Automatic scaling settings Description Target CPU utilization Sets the CPU utilization ratio threshold to specify the CPU usage threshold at which more instances will be started to handle traffic.
- Scaling types App Engine supports the following scaling types , which controls how and when instances are created: Automatic (default) Basic Manual You specify the scaling type in your app's app.yaml .
- Target throughput utilization Sets the throughput threshold for the number of concurrent requests after which more instances will be started to handle traffic.
- You can configure the settings for automatic scaling to achieve a trade-off between the performance you want and the cost you can incur.

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Setting up access control Stay organized with collections Save and categorize content based on your preferences.
- In App Engine, there are a few separate use cases for setting up access control: Granting team members access to your Google Cloud project so they can set up services and deploy apps.
- This page provides an overview of setting up access control in each use case.
- If you don't assign an app-level default service account, Google Cloud uses the auto-created App Engine default service account ( PROJECT ID @appspot.gserviceaccount.com ).

