---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.178Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Workload resource requests and limits insights"
feature_slug: "workload-resource-requests-and-limits-insights"
latest_feature_date: "2025-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart"
keywords:
  - "recommendations"
  - "insights"
  - "limits"
  - "requests"
  - "resource"
  - "workload"
  - "provides"
---

# Workload resource requests and limits insights

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE provides insights and recommendations to identify workloads that lack CPU or memory requests or limits.

## Extended Definition

GKE provides insights and recommendations to identify workloads that lack CPU or memory requests or limits.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)

## Supporting Pages

### "Right-size your GKE workloads at scale \_|\_ Kubernetes Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale)
- Source ID: `site-docs-reference-required-5`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Workload Recommendations : Provides recommendations for workload CPU and memory requests and limits.
- For example, the instructions configure the Horizontal Pod Autoscaler (HPA) for some workloads and changes resource requests and limits.
- It's a best practice to use the same amount of memory for requests and limits because memory is an incompressible resource.
- Verify that the sample application is ready: kubectl get deployment The output is similar to the following: NAME READY UP-TO-DATE AVAILABLE AGE adservice 2/2 2 2 4m54s cartservice 1/1 1 1 4m55s checkoutservice 1/1 1 1 4m56s currencyservice 1/1 1 1 4m55s emailservice 1/1 1 1 4m56s frontend 1/1 1 1 4m55s loadgenerator 1/1 1 1 4m55s paymentservice 1/1 1 1 4m55s productcatalogservice 1/1 1 1 4m55s recommendationservice 1/1 1 1 4m56s redis-cart 1/1 1 1 4m54s shippingservice 1/1 1 1 4m54s Warning: Workloads with HPA enabled may provide incorrect recommendations if they frequently trigger scaling events.

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- For an interactive guide in the Google Cloud console for deploying and exposing an app in an Autopilot cluster, click Guide me : Guide me The following table shows some common requirements and provides recommendations for what you should do: Use case Resources Control individual node properties when scaling a cluster Create a custom ComputeClass and request it in your workload manifest.
- The container-optimized compute platform provides the following benefits: Compute capacity matches workloads : Autopilot dynamically adjusts the compute capacity for the container-optimized compute platform based on factors like the number of Pods and resource consumption.
- Resource management : if you deploy workloads without setting resource values such as CPU and memory, Autopilot automatically sets pre-configured default values and modifies your resource requests at the workload level.
- Let workloads burst beyond their requests if there are available, unused resources in the sum of Pod resource requests on the node.

### "Analyze model serving performance and costs with GKE Inference Quickstart\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Enabling these features provides more insights to help you monitor the performance and status of workloads and the underlying infrastructure.
- View recommendations by use case Inference Quickstart provides recommendations for various use cases that represent common AI/ML workloads.
- The following is an example of a command to enable observability features: gcloud container clusters update $CLUSTER NAME \ --project = $PROJECT ID \ --location = $LOCATION \ --enable-managed-prometheus \ --logging = SYSTEM,WORKLOAD \ --monitoring = SYSTEM,DEPLOYMENT,HPA,POD,DCGM \ --auto-monitoring-scope = ALL For more information, see Monitor your inference workloads . (HPA only) Deploy a metrics adapter : A metrics adapter, such as the Custom Metrics Stackdriver Adapter , is necessary if HPA resources were generated in the deployment manifests.
- Using Inference Quickstart Inference Quickstart lets you analyze the performance and cost-efficiency of your inference workloads, and make data-driven decisions about resource allocation and model deployment strategies.

