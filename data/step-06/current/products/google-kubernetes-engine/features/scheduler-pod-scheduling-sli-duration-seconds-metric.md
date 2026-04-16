---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.748Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "scheduler_pod_scheduling_sli_duration_seconds metric"
feature_slug: "scheduler-pod-scheduling-sli-duration-seconds-metric"
latest_feature_date: "2024-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "scheduler"
  - "pod"
  - "scheduling"
  - "sli"
  - "duration"
  - "seconds"
  - "metric"
  - "replacement"
---

# scheduler_pod_scheduling_sli_duration_seconds metric

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

This replacement control plane metric is exported in the GKE control plane metrics package.

## Extended Definition

This replacement control plane metric is exported in the GKE control plane metrics package.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "Collect and view control plane metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 169
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- 1.30 and replaced by scheduler pod scheduling sli duration seconds .] E2e latency for a pod being scheduled which may include multiple scheduling attempts. attempts scheduler pod scheduling sli duration seconds BETA scheduler pod scheduling sli duration seconds/histogram Cumulative , Distribution , 1 prometheus target 1.30+ E2e latency for a pod being scheduled, from the time the pod enters the scheduling queue, and might involve multiple scheduling attempts. attempts scheduler preemption attempts total GA scheduler preemption attempts total/counter Cumulative , Double , 1 prometheus target 1.22.13+ Total preemption attempts in the cluster till now scheduler preemption victims GA scheduler preemption victims/histogram Cumulative , Distribution , 1 prometheus target 1.22.13+ Number of selected preemption victims scheduler scheduling attempt duration seconds GA scheduler scheduling attempt duration seconds/histogram Cumulative , Distribution , 1 prometheus target 1.23.6+ Scheduling attempt latency in seconds (scheduling algorithm + binding). profile result scheduler schedule attempts total GA scheduler schedule attempts total/counter Cumulative , Double , 1 prometheus target 1.22.13+ Number of attempts to schedule pods, by the result. 'unschedulable' means a pod could not be scheduled, while 'error' means an internal scheduler problem. profile result This following sections provide additional information about the API server metrics. scheduler pending pods You can use the scheduler pending pods metric to monitor the load on your scheduler.
- The following PromQL query retrieves 95th percentile values but can be adjusted: sum by (instance) (histogram quantile(0.95, rate( scheduler scheduling attempt duration seconds bucket{cluster=" CLUSTER NAME "}[5m]))) Resource issues The scheduler metrics can also help you assess whether you have sufficient resources.
- For more information, see Scheduler latency and Resource issues . scheduler scheduling attempt duration seconds This metric measures the duration of a single scheduling attempt within the scheduler itself and is broken down by the result: scheduled, unschedulable, or error.
- Use the scheduler scheduling attempt duration seconds metric to monitor the latency of scheduling attempts.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Union field shutdown grace period seconds . shutdown grace period seconds can be only one of the following: shutdownGracePeriodSeconds integer Optional. shutdown grace period seconds is the maximum allowed grace period (in seconds) the total duration that the node should delay the shutdown during a graceful shutdown.
- Duration JSON representation { "seconds" : string , "nanos" : integer } Fields seconds string ( int64 format) Signed seconds of the span of time.
- For durations of one second or more, a non-zero value for the nanos field must be of the same sign as the seconds field.
- The maximum duration the backoff delay can accrue to for container restarts, minimum 1 second, maximum 300 seconds.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Union field shutdown grace period seconds . shutdown grace period seconds can be only one of the following: shutdownGracePeriodSeconds integer Optional. shutdown grace period seconds is the maximum allowed grace period (in seconds) the total duration that the node should delay the shutdown during a graceful shutdown.
- Duration JSON representation { "seconds" : string , "nanos" : integer } Fields seconds string ( int64 format) Signed seconds of the span of time.
- For durations of one second or more, a non-zero value for the nanos field must be of the same sign as the seconds field.
- The maximum duration the backoff delay can accrue to for container restarts, minimum 1 second, maximum 300 seconds.

