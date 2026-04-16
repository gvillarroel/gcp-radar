---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.943Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Autopilot mode"
feature_slug: "gke-autopilot-mode"
latest_feature_date: "2021-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/train-model-gpus-autopilot"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
keywords:
  - "gke"
  - "autopilot"
  - "mode"
  - "reduces"
  - "operational"
  - "cost"
  - "optimizes"
  - "clusters"
---

# GKE Autopilot mode

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Autopilot is a GKE mode that reduces operational cost and optimizes clusters for production workloads.

## Extended Definition

Autopilot is a GKE mode that reduces operational cost and optimizes clusters for production workloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/train-model-gpus-autopilot](https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/train-model-gpus-autopilot)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)

## Supporting Pages

### "Quickstart: Train a model with GPUs on GKE Autopilot mode \_|\_ GKE AI/ML\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/train-model-gpus-autopilot](https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/train-model-gpus-autopilot)
- Source ID: `site-docs-reference-required-4`
- Final score: 199
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This document is intended for GKE administrators who have existing Autopilot mode clusters and want to run GPU workloads for the first time.
- Train a model with GPUs on GKE Autopilot mode Autopilot This quickstart shows you how to deploy a training model with GPUs in Google Kubernetes Engine (GKE) and store the predictions in Cloud Storage.
- Create a Kubernetes ServiceAccount in your cluster In Cloud Shell, do the following: Connect to your cluster: gcloud container clusters get-credentials gke-gpu-cluster \ --location = us-central1 Create a Kubernetes namespace: kubectl create namespace gke-gpu-namespace Create a Kubernetes ServiceAccount in the namespace: kubectl create serviceaccount gpu-k8s-sa --namespace = gke-gpu-namespace Create an IAM allow policy on the bucket Grant the Storage Object Admin ( roles/storage.objectAdmin ) role on the bucket to the Kubernetes ServiceAccount: gcloud storage buckets add-iam-policy-binding gs:// PROJECT ID -gke-gpu-bucket \ --member = principal://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog/subject/ns/gke-gpu-namespace/sa/gpu-k8s-sa \ --role = roles/storage.objectAdmin \ --condition = None Replace PROJECT NUMBER with your Google Cloud project number.
- Wait until the Job has the Completed status: kubectl wait -n gke-gpu-namespace --for = condition = Complete job/mnist-batch-prediction-job --timeout = 180s The output is similar to the following: job.batch/mnist-batch-prediction-job condition met Check the logs from the TensorFlow container: kubectl logs -f jobs/mnist-batch-prediction-job -c tensorflow -n gke-gpu-namespace The output is the prediction for each image and the model's confidence in the prediction, similar to the following: Found 10 files belonging to 1 classes.

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 189
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Pricing Autopilot pricing uses different models depending on the type of hardware that your Pods use, as follows: General-purpose Autopilot Pods : the following types of Pods use a Pod-based billing model and are categorized as general-purpose Pods : Pods that run on the container-optimized compute platform in Autopilot clusters or Standard clusters.
- Admins, Architects and Operators can use this information to make informed decisions when evaluating how GKE Autopilot mode aligns with the operational requirements of their containerized workloads.
- Reduced operational complexity : Autopilot reduces platform administration overhead by removing the need to continuously monitor nodes, scaling, and scheduling operations.
- This page describes the benefits of Autopilot mode and provides information about planning clusters, deploying workloads, and configuring networking and security.

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the implications of running an Autopilot workload in your Standard clusters, including differences that you might notice when you deploy those workloads, see About Autopilot mode workloads in GKE Standard .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Guides Send feedback Run workloads in Autopilot mode in Standard clusters Stay organized with collections Save and categorize content based on your preferences.
- Autopilot Standard Cluster administrators and application operators can get the benefits of Google Kubernetes Engine (GKE) Autopilot, like pricing and pre-configured settings, in Standard mode clusters.
- Modify clusters to meet Autopilot requirements You can use the Google Cloud console to check whether your Standard cluster meets all of the requirements to run workloads in Autopilot mode.

