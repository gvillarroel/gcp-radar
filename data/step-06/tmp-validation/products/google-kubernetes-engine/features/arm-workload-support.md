---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.296Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Arm workload support"
feature_slug: "arm-workload-support"
latest_feature_date: "2022-07-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
keywords:
  - "workloads"
  - "workload"
  - "supports"
  - "standard"
  - "running"
  - "based"
---

# Arm workload support

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE supports running Arm-based workloads on Standard and Autopilot clusters.

## Extended Definition

GKE supports running Arm-based workloads on Standard and Autopilot clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)

## Supporting Pages

### "Best practices for running batch workloads on GKE \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke)
- Source ID: `site-docs-reference-required-4`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Autopilot Standard This page introduces the best practices for building and optimizing batch processing platforms with Google Kubernetes Engine (GKE), including best practices for: Architecture Job management Multi-tenancy Security Queueing Storage Performance Cost efficiency Monitoring GKE provides a powerful framework for orchestrating batch workloads such as data processing, training machine learning models , running scientific simulations , and other high performance computing workloads .
- Optimize your workloads networking and latency GKE supports compact placement policy for node pools which specifies that these nodes (and thus the workloads running on them) should be placed in closer physical proximity to each other within a zone.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Send feedback Best practices for running batch workloads on GKE Stay organized with collections Save and categorize content based on your preferences.
- Enable cluster autoscaler on Standard clusters GKE automatically resizes the number of nodes in a given node pool based on the demands of your workloads.

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the implications of running an Autopilot workload in your Standard clusters, including differences that you might notice when you deploy those workloads, see About Autopilot mode workloads in GKE Standard .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Guides Send feedback Run workloads in Autopilot mode in Standard clusters Stay organized with collections Save and categorize content based on your preferences.
- Modify clusters to meet Autopilot requirements You can use the Google Cloud console to check whether your Standard cluster meets all of the requirements to run workloads in Autopilot mode.
- This method lets you use the Pod-based billing model by default in your cluster or namespace, and is useful when many of your workloads have no special hardware requirements.

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- What's next Learn more about Confidential VM Learn more about Google Cloud encryption at rest Learn more about Google Cloud encryption in transit Learn more about customer-managed encryption keys (CMEK) Learn how to remotely attest that workloads are running on Confidential VM Learn how to run GPUs on Confidential GKE Nodes Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Pricing The following pricing applies, depending on how you configure Confidential GKE Nodes: Confidential GKE Nodes pricing Workload-level In Autopilot workloads, both of the following costs apply: Autopilot node-based billing for the Compute Engine machine series that the Pods run on.
- However, if you enable Confidential GKE Nodes only for specific Standard mode node pools at the node pool level, you should declaratively express that your workloads must run only on node pools with Confidential GKE Nodes.
- Autopilot Standard This page shows you how to enforce encryption of data in-use in your nodes and workloads by using Confidential Google Kubernetes Engine Nodes.

