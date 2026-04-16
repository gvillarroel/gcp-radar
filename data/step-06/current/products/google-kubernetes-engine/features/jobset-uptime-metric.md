---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.705Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "JobSet uptime metric"
feature_slug: "jobset-uptime-metric"
latest_feature_date: "2025-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus"
keywords:
  - "jobset"
  - "uptime"
  - "metric"
  - "measures"
  - "total"
  - "time"
  - "jobsets"
  - "have"
---

# JobSet uptime metric

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

This metric measures the total time that supported JobSets have been available.

## Extended Definition

This metric measures the total time that supported JobSets have been available.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)

## Supporting Pages

### "Orchestrate Multislice workloads using JobSet and Kueue \_|\_ GKE AI/ML\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue)
- Source ID: `site-docs-reference-required-4`
- Final score: 193
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To view the node pools where each JobSet in a specific cluster has scheduled Pods, run the following PromQL query: avg over time ( kubernetes io : jobset assigned node pools { monitored resource = " k8s entity ", cluster name = " multislice-cluster "}[ ${ interval} ] ) To identify the node pools where a specific Jobset has been scheduled, run the following PromQL query: avg over time ( kubernetes io : jobset assigned node pools { monitored resource = " k8s entity ", cluster name = " multislice-cluster ", entity name = " multislice-. "}[ ${ interval} ] ) To identify the Jobsets that have been scheduled on a specific node pool, run the following PromQL query: avg over time ( kubernetes io : node pool assigned jobsets { monitored resource = " k8s node pool ", cluster name = " multislice-cluster ", node pool name = " multislice-np "}[ ${ interval} ] ) Monitor JobSet uptime, times to recover (TTR), and times between interruptions (TBI) The following metrics are useful for monitoring the availability of a JobSet: kubernetes.io/jobset/uptime : total time the JobSet has been available. kubernetes.io/jobset/times to recover : distribution of recovery period for a JobSet.
- To view uptime for the JobSets that you used in this tutorial, run the following PromQL query: avg over time ( kubernetes io : jobset uptime { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] ) To view the TBI distributions for the JobSets from this tutorial, run the following PromQL query: histogram quantile ( 0.50 , sum over time ( kubernetes io : jobset times between interruptions bucket { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] )) You can extend the interval of the query to a longer time horizon, such as 7 days, and compute the mean time between interruptions (MTBI) over this period: sum ( sum over time ( kubernetes io : jobset times between interruptions sum { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] )) / sum ( sum over time ( kubernetes io : jobset times between interruptions count { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] )) To view the TTR distributions, you can run the following PromQL queries: histogram quantile ( 0.50 , sum over time ( kubernetes io : jobset times to recover bucket { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] )) After you increase the query interval to a longer time horizon, such as 7 days, you can compute the mean time to recover (MTTR) over this period: sum ( sum over time ( kubernetes io : jobset times to recover sum { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] )) / sum ( sum over time ( kubernetes io : jobset times to recover count { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] )) Success: You've successfully run a three Multislice Jax workloads.
- For this tutorial, check the JobSet completion with this PromQL query: kube jobset succeeded replicas { cluster = " multislice-cluster ", jobset name = " mulitslice-. "} Monitor JobSet scheduling To monitor the scheduling of a JobSet, use the following metrics: kubernetes.io/jobset/assigned node pools : GKE node pools where a Kubernetes JobSet has scheduled Pods. kubernetes.io/node pool/assigned jobsets : Kubernetes JobSets that have scheduled Pods on a GKE node pool. kubernetes.io/jobset/assigned nodes : GKE nodes where a Kubernetes JobSet has scheduled Pods. kubernetes.io/node/assigned jobsets : Kubernetes JobSets that have scheduled Pods on a GKE node.
- These metrics apply to JobSets that have exactly one GPU or TPU replicated job.

### Run GPUs in GKE Standard node pools \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- JobSet metrics The following metrics apply to both GPU and TPU JobSets that have a single replicated Job: kubernetes.io/jobset/times between interruptions kubernetes.io/jobset/times to recover kubernetes.io/jobset/uptime For more information about these system metrics, see Kubernetes metrics .
- JobSet and node health metrics for GPU workloads In addition to DCGM metrics, you can use the following metrics to monitor the health and performance of your GPU workloads, especially when running them as JobSets.
- Kube-state-metrics for JobSets The kube-state-metrics for JobSets can be used with GPUs.
- Monitor your GPU node workload performance If your GKE cluster has system metrics enabled, then the following metrics are available in Cloud Monitoring to monitor your GPU workload performance: Duty Cycle ( container/accelerator/duty cycle ): Percentage of time over the past sample period (10 seconds) during which the accelerator was actively processing.

### Deploy GPU workloads in Autopilot \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- Source ID: `site-docs-reference-2`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- JobSet metrics The following metrics apply to both GPU and TPU JobSets that have a single replicated Job: kubernetes.io/jobset/times between interruptions kubernetes.io/jobset/times to recover kubernetes.io/jobset/uptime For more information about these system metrics, see Kubernetes metrics .
- JobSet and node health metrics for GPU workloads In addition to DCGM metrics, you can use the following metrics to monitor the health and performance of your GPU workloads, especially when running them as JobSets.
- Kube-state-metrics for JobSets The kube-state-metrics for JobSets can be used with GPUs.
- Monitor your GPU node workload performance If your GKE cluster has system metrics enabled, then the following metrics are available in Cloud Monitoring to monitor your GPU workload performance: Duty Cycle ( container/accelerator/duty cycle ): Percentage of time over the past sample period (10 seconds) during which the accelerator was actively processing.

