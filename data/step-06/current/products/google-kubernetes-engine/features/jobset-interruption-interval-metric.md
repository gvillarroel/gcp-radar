---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.705Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "JobSet interruption interval metric"
feature_slug: "jobset-interruption-interval-metric"
latest_feature_date: "2025-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "jobset"
  - "interruption"
  - "interval"
  - "metric"
  - "measures"
  - "distribution"
  - "time"
  - "between"
---

# JobSet interruption interval metric

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

This metric measures the distribution of time between interruptions for supported JobSets running on GPU or TPU nodes.

## Extended Definition

This metric measures the distribution of time between interruptions for supported JobSets running on GPU or TPU nodes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### "Orchestrate Multislice workloads using JobSet and Kueue \_|\_ GKE AI/ML\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue)
- Source ID: `site-docs-reference-required-4`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To view the node pools where each JobSet in a specific cluster has scheduled Pods, run the following PromQL query: avg over time ( kubernetes io : jobset assigned node pools { monitored resource = " k8s entity ", cluster name = " multislice-cluster "}[ ${ interval} ] ) To identify the node pools where a specific Jobset has been scheduled, run the following PromQL query: avg over time ( kubernetes io : jobset assigned node pools { monitored resource = " k8s entity ", cluster name = " multislice-cluster ", entity name = " multislice-. "}[ ${ interval} ] ) To identify the Jobsets that have been scheduled on a specific node pool, run the following PromQL query: avg over time ( kubernetes io : node pool assigned jobsets { monitored resource = " k8s node pool ", cluster name = " multislice-cluster ", node pool name = " multislice-np "}[ ${ interval} ] ) Monitor JobSet uptime, times to recover (TTR), and times between interruptions (TBI) The following metrics are useful for monitoring the availability of a JobSet: kubernetes.io/jobset/uptime : total time the JobSet has been available. kubernetes.io/jobset/times to recover : distribution of recovery period for a JobSet.
- To view uptime for the JobSets that you used in this tutorial, run the following PromQL query: avg over time ( kubernetes io : jobset uptime { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] ) To view the TBI distributions for the JobSets from this tutorial, run the following PromQL query: histogram quantile ( 0.50 , sum over time ( kubernetes io : jobset times between interruptions bucket { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] )) You can extend the interval of the query to a longer time horizon, such as 7 days, and compute the mean time between interruptions (MTBI) over this period: sum ( sum over time ( kubernetes io : jobset times between interruptions sum { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] )) / sum ( sum over time ( kubernetes io : jobset times between interruptions count { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] )) To view the TTR distributions, you can run the following PromQL queries: histogram quantile ( 0.50 , sum over time ( kubernetes io : jobset times to recover bucket { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] )) After you increase the query interval to a longer time horizon, such as 7 days, you can compute the mean time to recover (MTTR) over this period: sum ( sum over time ( kubernetes io : jobset times to recover sum { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] )) / sum ( sum over time ( kubernetes io : jobset times to recover count { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] )) Success: You've successfully run a three Multislice Jax workloads.
- Each sample indicates a single recovery event from a downtime period for the JobSet. kubernetes.io/jobset/times between interruptions : distribution of the interval between the end of the previous interruption and the beginning of the current interruption for a JobSet.
- To view the scheduling goodput for the JobSet that you used in this tutorial, run the following PromQL query: avg over time ( kubernetes io : jobset scheduling goodput { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] ) To view the proxy runtime goodput for the JobSets from this tutorial, run the following PromQL query: avg over time ( kubernetes io : jobset proxy runtime goodput { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] ) Enable Kueue workload priorities and preemption Optionally, you can assign Kueue workloads priorities which determine the order in which enqueued workloads are admitted by Kueue.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- None GCP-2024-056 Published: 2024-09-27 Reference: CVE-2024-47076 , CVE-2024-47175 , CVE-2024-47176 , CVE-2024-47177 GKE Description Severity A vulnerability chain (CVE-2024-47076, CVE-2024-47175, CVE-2024-47176, CVE-2024-47177) that could result in remote code execution was discovered in the CUPS printing system used by some Linux distributions.
- If that isn't possible, an alternative is to set the LoginGraceTime to zero and restart the sshd server: grep "^LoginGraceTime" /etc/ssh/sshd config LoginGraceTime 0 Note that this configuration change might increase the risk of denial of service attacks and may cause issues with legitimate SSH access.
- No action required None GDC (bare metal) Description Severity A vulnerability chain (CVE-2024-47076, CVE-2024-47175, CVE-2024-47176, CVE-2024-47177) that could result in remote code execution was discovered in the CUPS printing system used by some Linux distributions.
- No action required None GDC (VMware) Description Severity A vulnerability chain (CVE-2024-47076, CVE-2024-47175, CVE-2024-47176, CVE-2024-47177) that could result in remote code execution was discovered in the CUPS printing system used by some Linux distributions.

### Run GPUs in GKE Standard node pools \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- JobSet metrics The following metrics apply to both GPU and TPU JobSets that have a single replicated Job: kubernetes.io/jobset/times between interruptions kubernetes.io/jobset/times to recover kubernetes.io/jobset/uptime For more information about these system metrics, see Kubernetes metrics .
- Monitor your GPU node workload performance If your GKE cluster has system metrics enabled, then the following metrics are available in Cloud Monitoring to monitor your GPU workload performance: Duty Cycle ( container/accelerator/duty cycle ): Percentage of time over the past sample period (10 seconds) during which the accelerator was actively processing.
- You can also use the JobSet dashboard in the Google Cloud console to visualize and monitor your GPU workloads: Go to Deployments Node health metrics The following node-level metrics apply to all nodes, including those with GPUs: kubernetes.io/node/status condition : This metric requires GKE version 1.32.1-gke.1357001 or later.
- JobSet and node health metrics for GPU workloads In addition to DCGM metrics, you can use the following metrics to monitor the health and performance of your GPU workloads, especially when running them as JobSets.

