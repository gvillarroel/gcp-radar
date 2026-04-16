---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.901Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Cost Optimization tab"
feature_slug: "cost-optimization-tab"
latest_feature_date: "2021-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
keywords:
  - "cost"
  - "optimization"
  - "tab"
  - "shows"
  - "cpu"
  - "memory"
  - "usage"
  - "requests"
---

# Cost Optimization tab

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The Cost Optimization tab shows CPU and memory usage, requests, allocation, and limits for clusters and workloads.

## Extended Definition

The Cost Optimization tab shows CPU and memory usage, requests, allocation, and limits for clusters and workloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)

## Supporting Pages

### "Reducing costs by scaling down GKE clusters during off-peak hours \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours)
- Source ID: `site-docs-reference-required-5`
- Final score: 147
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Clone the kubernetes-engine-samples GitHub repository: git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples/ cd kubernetes-engine-samples/cost-optimization/gke-scheduled-autoscaler The code in this example is structured into the following folders: Root: Contains the code that's used by the CronJobs to export custom metrics to Cloud Monitoring. k8s/ : Contains a deployment example that has a Kubernetes HPA. k8s/scheduled-autoscaler/ : Contains the CronJobs that export a custom metric and an updated version of the HPA to read from a custom metric. k8s/load-generator/ : Contains a Kubernetes Deployment that has an application to simulate hourly usage.
- Costs In this document, you use the following billable components of Google Cloud: Cloud Monitoring Artifact Registry Google Kubernetes Engine To generate a cost estimate based on your projected usage, use the pricing calculator .
- Find design recommendations and best practices to optimize the cost of Google Cloud workloads in Google Cloud Well-Architected Framework: Cost optimization .
- What's next Learn more about GKE cost optimization in Best practices for running cost-optimized Kubernetes applications on GKE .

### "Right-size your GKE workloads at scale \_|\_ Kubernetes Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale)
- Source ID: `site-docs-reference-required-5`
- Final score: 143
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Set the default environment variables: gcloud config set project $PROJECT ID gcloud config set compute/region $REGION gcloud config set compute/zone $ZONE Clone the code repository. git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples Change to the working directory. cd kubernetes-engine-samples/cost-optimization/gke-vpa-recommendations (Optional) Set up the sample application This is an optional section to deploy a sample application.
- CPU and memory workload recommendations : recommendations for how much CPU and memory should be allocated to the workload to ensure that it runs smoothly, based on VPA recommendations for Deployments and on actual usage and target utilizations for non-Deployment objects.
- The following table describes the implications of under-provisioning and over-provisioning CPU and memory: Resource Provisioning status Risk Explanation CPU Over Cost Increases the cost of your workloads by reserving unnecessary resources.
- Memory requested and limit container recommendation Memory recommendations use the maximum VPA recommendation for Deployments objects only and the maximum memory usage with a target utilization of 80% to ensure the workloads reliability.

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following manifest requests the cost-optimized ComputeClass: apiVersion : apps/v1 kind : Deployment metadata : name : custom-workload spec : replicas : 2 selector : matchLabels : app : custom-workload template : metadata : labels : app : custom-workload spec : nodeSelector : cloud.google.com/compute-class : cost-optimized containers : - name : test image : registry.k8s.io/pause resources : requests : cpu : 1.5 memory : "4Gi" Node selectors for system node labels GKE adds system labels to nodes to identify nodes by criteria like the machine type, attached hardware accelerators, or the boot disk type.
- The following example shows a priority rule that uses machineFamily : priorities: - machineFamily: n4 spot: true minCores: 16 minMemoryGb: 64 storage: bootDiskType: hyperdisk-balanced bootDiskSize: 100 bootDiskKMSKey: projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 secondaryBootDisks: - diskImageName: pytorch-mnist project: k8s-staging-jobset machineType configurations The machineType field accepts a Compute Engine predefined machine type, like n4-standard-32 , or a custom machine type string , like n4-custom-8-20480 .
- ComputeClasses can target specific optimizations, like provisioning high-performance nodes or prioritizing cost-optimized configurations for cheaper running costs.
- Cost optimization : Prioritize cost-efficient node types like Spot VMs to reduce your cluster expenses.

