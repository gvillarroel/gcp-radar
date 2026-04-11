---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.860Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Side input metrics"
feature_slug: "side-input-metrics"
latest_feature_date: "2018-04-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3"
  - "https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard"
keywords:
  - "side"
  - "input"
  - "metrics"
  - "the"
  - "dataflow"
  - "monitoring"
  - "interface"
  - "shows"
---

# Side input metrics

Product: Dataflow
Coverage: LOW

## Step 02 Summary

The Dataflow monitoring interface shows side input metrics for pipelines.

## Extended Definition

The Dataflow monitoring interface shows side input metrics for pipelines.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)
- [https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard](https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard)

## Supporting Pages

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- April 26, 2018 Feature You can now view side input metrics for your pipeline from the Cloud Dataflow monitoring interface.
- February 25, 2019 Feature You can now view system latency and data freshness metrics for your pipeline in the Cloud Dataflow monitoring interface.
- Feature Added new autoscaling metrics : Autoscaling rationale chart : explains the factors driving autoscaling decisions Worker CPU utilization chart : shows current user worker CPU utilization and customer autoscaling hint value Timer backlog per stage : shows an estimate of time needed to materialize the output for windows whose timer has expired Parallel processing : the number of keys available for parallel processing March 11, 2024 Feature You can now use committed use discounts (CUDs) with Dataflow streaming jobs.
- November 05, 2020 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: us-west2 (Los Angeles) southamerica-east1 (São Paulo) europe-west6 (Zurich) asia-south1 (Mumbai) Change Pub/Sub I/O metrics in the Dataflow and Cloud Monitoring UIs may be unavailable for Dataflow jobs using Streaming Engine .

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Exceptions in user code, for example, your DoFn instances, are reported in the Dataflow monitoring interface .
- To view hot keys in the Dataflow monitoring interface, see Troubleshoot stragglers in batch jobs .
- A fatal error has been detected by the Java Runtime Environment The following error occurs during worker startup: A fatal error has been detected by the Java Runtime Environment This error occurs if the pipeline is using Java Native Interface (JNI) to run non-Java code and that code or the JNI bindings contain an error. googclient deliveryattempt attribute key error Your Dataflow job fails with one of the following errors: The request contains an attribute key that is not valid (key=googclient deliveryattempt).
- Bad request When you run a Dataflow job, Cloud Monitoring logs display a series of warnings similar to the following: Unable to update setup work item STEP ID error: generic::invalid argument: Http(400) Bad Request Update range task returned 'invalid argument'.

### "Package com.google.dataflow.v1beta3 (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)
- Source ID: `site-java-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Streaming Side Input Location Identifies the location of a streaming side input. com. google. dataflow. v1beta3.
- Builder Identifies the location of a streaming side input. com. google. dataflow. v1beta3.
- This data is provided by the Dataflow service for ease of visualizing the pipeline and interpreting Dataflow provided metrics. com. google. dataflow. v1beta3.
- This data is provided by the Dataflow service for ease of visualizing the pipeline and interpreting Dataflow provided metrics. com. google. dataflow. v1beta3.

### Customize the Dataflow monitoring dashboard \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard](https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This page shows how to customize the Dataflow project monitoring dashboard , by adding a graph that queries Cloud Monitoring metrics.
- Map metric names to PromQL strings To use Monitoring metrics in PromQL queries, you must map the metric name to a PromQL string, as follows: Metric name PromQL string job/total vcpu time dataflow googleapis com:job total vcpu time job/total memory usage time dataflow googleapis com:job total memory usage time job/total streaming data processed dataflow googleapis com:job total streaming data processed job/total pd usage time dataflow googleapis com:job total pd usage time For more information, see Mapping Cloud Monitoring metrics to PromQL .
- To get the top 25 jobs, use a top K filter: topk(25, Sum the individual values. ) Write the complete query The following shows the complete query: topk(25, sum( max over time( dataflow googleapis com:job total vcpu time[1m]) / 3600 CPU PRICE ) by (job id) + sum( max over time( dataflow googleapis com:job total memory usage time[1m]) / 3600 MEMORY PRICE ) by (job id) + sum( max over time( dataflow googleapis com:job total streaming data processed[1m]) / 1000000000 SHUFFLE PRICE ) by (job id) + sum( max over time( dataflow googleapis com:job total pd usage time{storage type="HDD"}[1m]) / 3600 STANDARD PD PRICE ) by (job id) + sum( max over time( dataflow googleapis com:job total pd usage time{storage type="SSD"}[1m]) / 3600 SSD PD PRICE ) by (job id) ) Replace the following variables with values from the Dataflow pricing page for your region.
- CPU PRICE : CPU price, per vCPU per hour MEMORY PRICE : Memory price, per GB per hour SHUFFLE PRICE : Shuffle price, per GB STANDARD PD PRICE : Standard Persistent Disk price, per GB per hour SSD PD PRICE : SSD Persistent Disk price, per GB per hour Edit the dashboard If you didn't previously create a custom dashboard for Dataflow in this project, create one as follows: In the Google Cloud console, go to the Dataflow Monitoring page.

