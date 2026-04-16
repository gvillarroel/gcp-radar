---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.302Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Automatic scaling min instances setting"
feature_slug: "automatic-scaling-min-instances-setting"
latest_feature_date: "2018-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "keep"
  - "minimum"
  - "instances"
  - "setting"
  - "automatic"
  - "scaling"
  - "supports"
---

# Automatic scaling min instances setting

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Automatic scaling supports a min instances setting to keep a minimum number of instances running.

## Extended Definition

Automatic scaling supports a min instances setting to keep a minimum number of instances running.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can specify thresholds for each of these metrics, as well as a minimum number instances to keep running at all times by configuring the automatic scaling element.
- Scaling types App Engine supports the following scaling types , which controls how and when instances are created: Automatic (default) Basic Manual You specify the scaling type in your app's app.yaml .
- Automatic scaling settings Description Target CPU utilization Sets the CPU utilization ratio threshold to specify the CPU usage threshold at which more instances will be started to handle traffic.
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 171
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following values are available depending on your service's scaling : Automatic scaling F1 , F2 , F4 , F4 1G Default: F1 Optionally use the automatic scaling element to change default settings for automatic scaling, such as minimum and maximum number of instances, latency, and concurrent connections.
- Specify this element to change default settings for automatic scaling, such as setting minimum and maximum levels for number of instances, latency, and concurrent connections for a service.
- Example automatic scaling : target cpu utilization : 0.65 min instances : 5 max instances : 100 min pending latency : 30ms max pending latency : automatic max concurrent requests : 50 basic scaling Applications that use an instance class of B1 or higher must specify either this element or manual scaling .
- Keep the following in mind: A low minimum helps keep your running costs down during idle periods, but means that fewer instances might be immediately available to respond to a sudden load spike.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To keep either the minimum or maximum number of instances at their current value, specify their current value.
- To increase the minimum or maximum number of instances for the connector, run the following command in your terminal: gcloud beta compute networks vpc-access connectors update CONNECTOR NAME --region = REGION --min-instances = MIN INSTANCES --max-instances = MAX INSTANCES Replace the following: CONNECTOR NAME : the name of your connector REGION : the name of your connector's region MIN INSTANCES : your preferred minimum number of instances.
- Update a connector You can update and monitor the following attributes of your connector by using the Google Cloud console, Google Cloud CLI, or the API: Machine (instance) type Minimum and maximum number of instances Recent throughput, number of instances, and CPU utilization Update machine type Caution: Changing machine type can cause some long-running connections to drop.
- The name of the new subnet begins with the "aet-" prefix. (Optional) To set scaling options for additional control over the connector, click Show Scaling Settings to display the scaling form.

