---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.194Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE insights and recommendations"
feature_slug: "gke-insights-and-recommendations"
latest_feature_date: "2024-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners"
keywords:
  - "need"
  - "recommendations"
  - "help"
  - "identify"
  - "insights"
  - "clusters"
  - "version"
---

# GKE insights and recommendations

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE insights and recommendations help identify clusters that need version upgrades, version-skew fixes, or maintenance windows.

## Extended Definition

GKE insights and recommendations help identify clusters that need version upgrades, version-skew fixes, or maintenance windows.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- [https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners](https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners)

## Supporting Pages

### "Migrate nodes to containerd 2 \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- Source ID: `site-docs-reference-2`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use insights and recommendations or Cloud Logging As explained in the Identify affected clusters section, you can use insights and recommendations to find clusters with Linux nodes that use Docker Schema 1 images if your cluster is running a minimum version or later.
- Version requirements Clusters receive these insights and recommendations if they're running the following versions or later: 1.28.15-gke.1159000 1.29.9-gke.1541000 1.30.5-gke.1355000 1.31.1-gke.1621000 Get insights and recommendations Follow the instructions to view insights and recommendations .
- Identify affected clusters GKE monitors your clusters and uses the Recommender service to deliver guidance through insights and recommendations for identifying Linux nodes in your cluster that use these deprecated features.
- Use insights and recommendations You can use insights and recommendations to find clusters with Linux nodes that use the v1alpha2 API if your cluster is running a minimum version or later.

### "Analyze model serving performance and costs with GKE Inference Quickstart\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Prepare to use the command line interface If you use the gcloud CLI to run Inference Quickstart, you also need to run these additional commands: Enable the gkerecommender.googleapis.com API: gcloud services enable gkerecommender.googleapis.com Set the billing quota project that you use for API calls: gcloud config set billing/quota project PROJECT ID Check that your gcloud CLI version is at least 536.0.1.
- Deep Research 256 4,096 1:16 Enable detailed investigations and studies by analyzing and synthesizing vast amounts of data to find specific information, identify patterns, and uncover insights.
- Enabling these features provides more insights to help you monitor the performance and status of workloads and the underlying infrastructure.
- This helps your model servers to efficiently handle varying loads by scaling up or down as needed.

### "Autopilot partners \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners](https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners)
- Source ID: `site-docs-reference-2`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sysdig Secure DevOps Platform The Sysdig Secure Devops Platform helps you implement container security practices in your GKE Autopilot clusters, including monitoring and securing workloads using the Sysdig agent.
- Datadog Datadog provides visibility into containerized apps running on GKE Autopilot by collecting metrics, logs, and traces, which helps to identify performance issues and provide context for troubleshooting.
- Its eBPF-based sensor for GKE Autopilot clusters provides runtime context for posture management, real-time threat detection, and defense measures, to help ensure security.
- Uptycs Uptycs Container Security Platform helps you implement security best practices for GKE Autopilot clusters through its eBPF runtime sensor-based monitoring solution.

