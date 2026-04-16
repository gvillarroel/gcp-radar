---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.207Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Ray Operator on GKE"
feature_slug: "ray-operator-on-gke"
latest_feature_date: "2024-10-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/concepts/overview"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/quickstarts/ray-gpu-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra"
keywords:
  - "applications"
  - "managing"
  - "operator"
  - "scaling"
  - "lets"
---

# Ray Operator on GKE

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Ray Operator on GKE is a GKE add-on for managing and scaling Ray applications; This GKE add-on lets you manage and scale Ray applications.

## Extended Definition

Ray Operator on GKE is a GKE add-on for managing and scaling Ray applications; This GKE add-on lets you manage and scale Ray applications.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/concepts/overview](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/concepts/overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/quickstarts/ray-gpu-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/quickstarts/ray-gpu-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra](https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra)

## Supporting Pages

### "About Ray on Google Kubernetes Engine (GKE) \_|\_ GKE AI/ML \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/concepts/overview](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/concepts/overview)
- Source ID: `site-docs-reference-required-4`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot Standard This page provides an overview of the Ray Operator and relevant custom resources to deploy and manage Ray clusters and applications on Google Kubernetes Engine (GKE).
- RayService custom resource The RayService custom resource lets you configure Ray Serve applications , such as applications for model serving and inference.
- The Ray Operator on GKE is based on KubeRay , which provides declarative Kubernetes APIs specifically designed for managing Ray clusters.
- Ray is an open-source unified compute framework for scaling AI/ML and Python applications.

### "Quickstart: Deploy GPU-accelerated Ray for AI workloads on GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/quickstarts/ray-gpu-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/quickstarts/ray-gpu-cluster)
- Source ID: `site-docs-reference-required-4`
- Final score: 139
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the terminal, run the following gcloud container clusters create command: gcloud container clusters create my-ray-enabled-cluster \ --addons = RayOperator \ --enable-ray-cluster-monitoring \ --enable-ray-cluster-logging \ --location = us-central1 \ --enable-autoprovisioning \ --max-cpu = 10 \ --max-memory = 64 This Google Cloud CLI command creates an Standard cluster named my-ray-enabled-cluster , with these settings: --addons=RayOperator : installs the Ray Operator on the cluster, which simplifies managing Ray clusters within Kubernetes. --enable-ray-cluster-monitoring : sets up integration with Cloud Monitoring for Ray cluster metrics. --enable-ray-cluster-logging : configures integration with Cloud Logging to collect logs from your Ray cluster. --location=us-central1 : specifies the geographical region where the GKE cluster will be created.
- In the terminal, run the following gcloud container clusters create-auto command: gcloud container clusters create-auto my-ray-enabled-cluster \ --enable-ray-operator \ --enable-ray-cluster-monitoring \ --enable-ray-cluster-logging \ --location = us-central1 This Google Cloud CLI command creates an Autopilot cluster named my-ray-enabled-cluster , with these settings: --enable-ray-operator : installs the Ray Operator on the cluster, which simplifies managing Ray clusters within Kubernetes. --enable-ray-cluster-monitoring : sets up integration with Cloud Monitoring for Ray cluster metrics. --enable-ray-cluster-logging : configures integration with Cloud Logging to collect logs from your Ray cluster. --location=us-central1 : specifies the geographical region where the GKE cluster will be created.
- This automatic provisioning and scaling of resources in Autopilot clusters simplifies resource management, and lets you focus on your models instead of infrastructure.
- Using Ray on GKE, facilitated by KubeRay , lets you scale Python and AI applications.

### AI/ML orchestration on GKE documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra](https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra)
- Source ID: `site-docs-reference-required-5`
- Final score: 125
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Performance Scaling PD Code sample Code Samples Google Kubernetes Engine (GKE) Samples View sample applications used in official GKE product tutorials.
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. info Manage AI infrastructure and accelerators Concept About accelerator consumption options for AI/ML workloads in GKE Concept About GPUs in GKE Concept About TPUs in GKE Best practice Optimize GPU obtainability with flex-start provisioning mode Best practice Run cost-optimized Kubernetes applications on GKE Best practice Design storage for AI and ML workloads in Google Cloud Quickstart Deploy GPU-accelerated Ray for AI workloads on GKE Video Introduction to Cloud TPUs for machine learning Video Build large-scale machine learning on Cloud TPUs with GKE info Train AI models at scale Quickstart Train a model with GPUs on GKE Standard mode Tutorial Train a model with GPUs on GKE Autopilot mode Tutorial Train a model with PyTorch, Ray, and GKE on GPUs Tutorial Train an LLM using JAX, Ray Train, and TPU Trillium on GKE Quickstart Train Llama2 with Megatron-LM on A3 Mega virtual machines How-to Train large-scale machine learning models on GKE with multi-tier checkpointing Tutorial Optimize GKE resource utilization for mixed AI/ML training and inference workloads info Serve AI models for Inference Best practice Reference architecture for AI/ML inference on GKE Concept About model inference on GKE How-to Analyze model serving performance and costs with GKE Inference Quickstart Quickstart Serve open LLMs on GKE with a pre-configured architecture using Terraform Tutorial Serve LLMs like Deepseek-R1 671B or Llama 3.1 405B on GKE Tutorial Serve Gemma using GPUs on GKE with vLLM Tutorial Serve an LLM using TPU Trillium on GKE with vLLM Tutorial Discover more tutorials for model inference on GKE Related resources Training and tutorials Use cases Code samples Explore self-paced training, use cases, reference architectures, and code samples with examples of how to use and connect Google Cloud services.
- Tutorial AI/ML Inference Ray TPUs Training Training and tutorials Configure autoscaling for LLM workloads on GPUs with GKE Learn how to set up your autoscaling infrastructure by using the GKE Horizontal Pod Autoscaler (HPA) to deploy the Gemma LLM with the Hugging Face Text Generation Interface (TGI) serving framework.
- Tutorial AI/ML Inference GPUs Training Training and tutorials Deploy a Ray Serve application with a Stable Diffusion model on GKE with TPUs Learn how to deploy and serve a Stable Diffusion model on GKE using TPUs, Ray Serve, and the Ray Operator add-on.

