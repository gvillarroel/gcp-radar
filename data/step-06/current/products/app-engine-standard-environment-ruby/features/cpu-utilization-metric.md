---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.405Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "CPU Utilization metric"
feature_slug: "cpu-utilization-metric"
latest_feature_date: "2021-03-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
keywords:
  - "reports"
  - "average"
  - "metric"
  - "across"
  - "usage"
  - "utilization"
---

# CPU Utilization metric

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

The CPU Utilization metric reports average CPU usage across all active App Engine standard environment instances.

## Extended Definition

The CPU Utilization metric reports average CPU usage across all active App Engine standard environment instances.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- To display charts for the connector's throughput, number of instances, and CPU utilization metrics over time by using the Google Cloud console: Go to the Serverless VPC Access overview page.
- In the CPU Utilization chart, hold the pointer over the chart to view the connector's recent CPU usage.
- The chart displays the CPU usage distributed across instances for the 50th, 95th, and 99th percentiles.
- Find the current attribute values To find the current attribute values for your connector, run the following in your terminal: gcloud compute networks vpc-access connectors describe CONNECTOR NAME --region = REGION --project = PROJECT Replace the following: CONNECTOR NAME : the name of your connector REGION : the name of your connector's region PROJECT : the name of your Google Cloud project Monitor connector usage Monitoring usage over time can help you determine when to adjust a connector's settings.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc)
- Source ID: `site-docs-reference-4`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- To display charts for the connector's throughput, number of instances, and CPU utilization metrics over time by using the Google Cloud console: Go to the Serverless VPC Access overview page.
- In the CPU Utilization chart, hold the pointer over the chart to view the connector's recent CPU usage.
- The chart displays the CPU usage distributed across instances for the 50th, 95th, and 99th percentiles.
- Find the current attribute values To find the current attribute values for your connector, run the following in your terminal: gcloud compute networks vpc-access connectors describe CONNECTOR NAME --region = REGION --project = PROJECT Replace the following: CONNECTOR NAME : the name of your connector REGION : the name of your connector's region PROJECT : the name of your Google Cloud project Monitor connector usage Monitoring usage over time can help you determine when to adjust a connector's settings.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Automatic scaling settings Description Target CPU utilization Sets the CPU utilization ratio threshold to specify the CPU usage threshold at which more instances will be started to handle traffic.
- You can specify thresholds for each of these metrics, as well as a minimum number instances to keep running at all times by configuring the automatic scaling element.
- Target throughput utilization Sets the throughput threshold for the number of concurrent requests after which more instances will be started to handle traffic.
- Automatic scaling Automatic scaling creates instances based on request rate, response latencies, and other application metrics.

