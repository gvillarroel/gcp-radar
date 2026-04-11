---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.815Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Dataflow cost monitoring"
feature_slug: "dataflow-cost-monitoring"
latest_feature_date: "2023-04-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/estimated-cost"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3"
  - "https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard"
keywords:
  - "dataflow"
  - "cost"
  - "monitoring"
  - "provides"
  - "visibility"
  - "into"
  - "job"
  - "costs"
---

# Dataflow cost monitoring

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow cost monitoring provides visibility into Dataflow job costs.

## Extended Definition

Dataflow cost monitoring provides visibility into Dataflow job costs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/estimated-cost](https://docs.cloud.google.com/dataflow/docs/guides/estimated-cost)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)
- [https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard](https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard)

## Supporting Pages

### Dataflow estimated cost \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/estimated-cost](https://docs.cloud.google.com/dataflow/docs/guides/estimated-cost)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Dataflow cost monitoring approximates the TPU accelerator costs using the vCPU and memory costs, even though TPU workers don't incur vCPU and memory charges.
- Estimated costs are calculated by multiplying the resource usage metrics as shown in Cloud Monitoring by the price of those resources in the job region .
- Limitations Dataflow cost monitoring does not support Dataflow Prime jobs and does not reflect additional GPU accelerator cost.
- You can use monitoring alerts to get notifications when your job costs cross a specified threshold.

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- November 05, 2020 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: us-west2 (Los Angeles) southamerica-east1 (São Paulo) europe-west6 (Zurich) asia-south1 (Mumbai) Change Pub/Sub I/O metrics in the Dataflow and Cloud Monitoring UIs may be unavailable for Dataflow jobs using Streaming Engine .
- Change Monitoring changes: Added JOB STATE CANCELLED as a possible state value for Cloud Dataflow jobs in the Monitoring UI and command-line interface.
- December 05, 2023 Feature The Dataflow web-based monitoring interface now includes a dashboard that monitors your Dataflow jobs at the project level.
- Change Improvements to the monitoring UI: The job details page now provides more job information including job duration, and job type.

### "Package com.google.dataflow.v1beta3 (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)
- Source ID: `site-java-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Pubsub Location Identifies a pubsub location to use for transferring data into or out of a streaming Dataflow job. com. google. dataflow. v1beta3.
- Builder Identifies a pubsub location to use for transferring data into or out of a streaming Dataflow job. com. google. dataflow. v1beta3.
- MessagesV1 Beta3 Grpc The Dataflow Messages API is used for monitoring the progress of Dataflow jobs. com. google. dataflow. v1beta3.
- Async Service The Dataflow Messages API is used for monitoring the progress of Dataflow jobs. com. google. dataflow. v1beta3.

### Customize the Dataflow monitoring dashboard \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard](https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Dataflow job metrics can give you a baseline for cost optimization, but the actual costs might differ.
- Map metric names to PromQL strings To use Monitoring metrics in PromQL queries, you must map the metric name to a PromQL string, as follows: Metric name PromQL string job/total vcpu time dataflow googleapis com:job total vcpu time job/total memory usage time dataflow googleapis com:job total memory usage time job/total streaming data processed dataflow googleapis com:job total streaming data processed job/total pd usage time dataflow googleapis com:job total pd usage time For more information, see Mapping Cloud Monitoring metrics to PromQL .
- Formula: ((Standard PD time)[Bucket 1m] / Seconds per hour) Standard PD price sum( max over time( dataflow googleapis com:job total pd usage time{storage type="HDD"}[1m] ) / 3600 STANDARD PD PRICE ) by (job id) Formula: ((SSD PD time)[Bucket 1m] / Seconds per hour) SSD PD price sum( max over time( dataflow googleapis com:job total pd usage time{storage type="SSD"}[1m] ) / 3600 SSD PD PRICE ) by (job id) Summing the previous values gives the estimated cost per job.
- Choose metrics The following metrics are needed to estimate the cost of a job, given the assumptions listed the previous section: Resource Relevant metric CPU (vCPU per hour) job/total vcpu time Memory (GB per hour) job/total memory usage time Data processed during shuffle (GB) job/total streaming data processed Persistent Disk usage (GB per hour, Standard and SSD) job/total pd usage time For more information, see Dataflow pricing .

