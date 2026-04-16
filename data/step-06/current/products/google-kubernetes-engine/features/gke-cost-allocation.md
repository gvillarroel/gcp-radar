---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.820Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Cost Allocation"
feature_slug: "gke-cost-allocation"
latest_feature_date: "2022-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart"
keywords:
  - "gke"
  - "cost"
  - "allocation"
  - "shows"
  - "cluster"
  - "breakdowns"
  - "namespace"
  - "pod"
---

# GKE Cost Allocation

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Cost Allocation shows cluster cost breakdowns by namespace and pod labels for CPU and memory usage.

## Extended Definition

GKE Cost Allocation shows cluster cost breakdowns by namespace and pod labels for CPU and memory usage.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)

## Supporting Pages

### "Best practices for running batch workloads on GKE \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke)
- Source ID: `site-docs-reference-required-4`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Set GKE cost allocation Use GKE cost allocation get insights about cluster resource requests for each tenant on a namespace basis.
- The management of GKE resources might follow criteria such as tenant isolation, quotas and limit ranges , or cost allocation.
- Autopilot Standard This page introduces the best practices for building and optimizing batch processing platforms with Google Kubernetes Engine (GKE), including best practices for: Architecture Job management Multi-tenancy Security Queueing Storage Performance Cost efficiency Monitoring GKE provides a powerful framework for orchestrating batch workloads such as data processing, training machine learning models , running scientific simulations , and other high performance computing workloads .
- Choose the machine type for your nodes GKE supports the following Compute Engine VMs series: Cost-optimized, such as E2 Balanced, such as N2, N2D, or N1 Scale-out optimized, such as Tau T2D, or Tau T2A Memory-optimized, such as M2 or M1 Compute-optimized, such as C2 or C2D Accelerator-optimized, such as A4 featuring NVIDIA B200 GPUs Each machine series is associated with one or more CPU platforms, such as Arm processors and x86 processors from Intel and AMD.

### "Reducing costs by scaling down GKE clusters during off-peak hours \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours)
- Source ID: `site-docs-reference-required-5`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Generate load to the example application In Cloud Shell, deploy the load generator: kubectl apply -f ./k8s/load-generator The following listing shows the load-generator script: command: [ "/bin/sh" , "-c" ] args: & #45; while true; do RESP = $( wget -q -O- http://php-apache.default.svc.cluster.local ) ; echo " $( date +%H ) = $RESP " ; sleep $( date +%H awk '{ print "s("$0"/3 a(1)) 0.5+0.5" }' bc -l ) ; done ; This script runs in your cluster until you delete the load-generator deployment.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Documentation Guides Send feedback Reducing costs by scaling down GKE clusters during off-peak hours Stay organized with collections Save and categorize content based on your preferences.
- This document shows how to scale GKE clusters up in the morning and down at night, but you can use a similar approach to increase and decrease capacity for any known events, such as peak scale events, ad campaigns, or weekend traffic.
- Scaling down a cluster if you have committed use discounts This tutorial explains how to reduce costs by scaling down your GKE clusters to the minimum during off-peak hours.

### "Analyze model serving performance and costs with GKE Inference Quickstart\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- For example: gcloud container ai profiles list \ --model = openai/gpt-oss-20b \ --pricing-model = on-demand \ --target-ttft-milliseconds = 300 The output shows supported profiles with performance metrics like throughput, latency, and cost per million tokens at the inflection point.
- Using Inference Quickstart Inference Quickstart lets you analyze the performance and cost-efficiency of your inference workloads, and make data-driven decisions about resource allocation and model deployment strategies.
- The following is an example of a command to enable observability features: gcloud container clusters update $CLUSTER NAME \ --project = $PROJECT ID \ --location = $LOCATION \ --enable-managed-prometheus \ --logging = SYSTEM,WORKLOAD \ --monitoring = SYSTEM,DEPLOYMENT,HPA,POD,DCGM \ --auto-monitoring-scope = ALL For more information, see Monitor your inference workloads . (HPA only) Deploy a metrics adapter : A metrics adapter, such as the Custom Metrics Stackdriver Adapter , is necessary if HPA resources were generated in the deployment manifests.
- It looks similar to the following: Instance Type Accelerator Cost/M Input Tokens Cost/M Output Tokens Output Tokens/s NTPOT(ms) TTFT(ms) Model Server Model Server Version Model a3-highgpu-1g nvidia-h100-80gb 0.009 0.035 13335 67 297 vllm gptoss openai/gpt-oss-20b The values represent the performance observed at the point where throughput stops increasing and latency starts dramatically increasing (that is, the inflection or saturation point) for a given profile with this accelerator type.

