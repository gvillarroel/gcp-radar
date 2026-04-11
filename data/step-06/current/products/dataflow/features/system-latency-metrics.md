---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.857Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "System latency metrics"
feature_slug: "system-latency-metrics"
latest_feature_date: "2019-02-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard"
  - "https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
keywords:
  - "system"
  - "latency"
  - "metrics"
  - "the"
  - "dataflow"
  - "monitoring"
  - "interface"
  - "shows"
---

# System latency metrics

Product: Dataflow
Coverage: LOW

## Step 02 Summary

The Dataflow monitoring interface shows system latency metrics for pipelines.

## Extended Definition

The Dataflow monitoring interface shows system latency metrics for pipelines.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard](https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard)
- [https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics](https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)

## Supporting Pages

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- February 25, 2019 Feature You can now view system latency and data freshness metrics for your pipeline in the Cloud Dataflow monitoring interface.
- April 26, 2018 Feature You can now view side input metrics for your pipeline from the Cloud Dataflow monitoring interface.
- The following new metrics are available: Average message processing time per DoFn ( job/dofn latency average ) Maximum message processing time per DoFn ( job/dofn latency max ) Minimum message processing time per DoFn ( job/dofn latency min ) Number of messages processed per DoFn ( job/dofn latency num messages ) Oldest active message processing time per DoFn ( job/oldest active message age ) Total message processing time per DoFn ( job/dofn latency total ) For more information about Dataflow metrics, see Google Cloud metrics .
- Feature Added new autoscaling metrics : Autoscaling rationale chart : explains the factors driving autoscaling decisions Worker CPU utilization chart : shows current user worker CPU utilization and customer autoscaling hint value Timer backlog per stage : shows an estimate of time needed to materialize the output for windows whose timer has expired Parallel processing : the number of keys available for parallel processing March 11, 2024 Feature You can now use committed use discounts (CUDs) with Dataflow streaming jobs.

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

### Monitor Dataflow autoscaling \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics](https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about Dataflow monitoring and metrics, see Use the Dataflow monitoring interface .
- Access autoscaling monitoring charts You can access the Dataflow monitoring interface by using the Google Cloud console .
- You can view autoscaling monitoring charts for streaming jobs within the Dataflow monitoring interface.
- You can view autoscaling metrics in the Autoscaling tab of the Dataflow interface.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Exceptions in user code, for example, your DoFn instances, are reported in the Dataflow monitoring interface .
- To view hot keys in the Dataflow monitoring interface, see Troubleshoot stragglers in batch jobs .
- A fatal error has been detected by the Java Runtime Environment The following error occurs during worker startup: A fatal error has been detected by the Java Runtime Environment This error occurs if the pipeline is using Java Native Interface (JNI) to run non-Java code and that code or the JNI bindings contain an error. googclient deliveryattempt attribute key error Your Dataflow job fails with one of the following errors: The request contains an attribute key that is not valid (key=googclient deliveryattempt).
- Bad request When you run a Dataflow job, Cloud Monitoring logs display a series of warnings similar to the following: Unable to update setup work item STEP ID error: generic::invalid argument: Http(400) Bad Request Update range task returned 'invalid argument'.

