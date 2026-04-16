---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.772Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE multi-cluster Gateway"
feature_slug: "gke-multi-cluster-gateway"
latest_feature_date: "2023-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/migrate-x86-to-multi-arch-arm"
keywords:
  - "gke"
  - "multi"
  - "cluster"
  - "gateway"
  - "can"
  - "use"
  - "manage"
  - "application"
---

# GKE multi-cluster Gateway

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE can use the Gateway API to manage Application Load Balancers for inbound traffic across a fleet of clusters.

## Extended Definition

GKE can use the Gateway API to manage Application Load Balancers for inbound traffic across a fleet of clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/migrate-x86-to-multi-arch-arm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/migrate-x86-to-multi-arch-arm)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- You can use the following tools to check inbound traffic to your resources running in Google Cloud: VPC Flow Logs for visibility into network throughput and performance Cloud Logging to search and analyze logging data and events from Google Cloud services and applications configured to send logs Firewall Rules Logging to audit, verify, and analyze the effects of your firewall rules Security Command Center for visibility into security findings indicating suspicious network activity Your application logs High GDC (VMware) Description Severity A security issue was discovered that impacts Multi-Cluster Gateway (MCG), a GKE feature that allows customers to load balance traffic across multiple clusters.
- None GKE on AWS Description Severity Note: This section applies to both the current and previous generation of GKE on AWS A security issue was discovered that impacts Multi-Cluster Gateway (MCG), a GKE feature that allows customers to load balance traffic across multiple clusters.
- None GDC (bare metal) Description Severity A security issue was discovered that impacts Multi-Cluster Gateway (MCG), a GKE feature that allows customers to load balance traffic across multiple clusters.
- None GKE on Azure Description Severity A security issue was discovered that impacts Multi-Cluster Gateway (MCG), a GKE feature that allows customers to load balance traffic across multiple clusters.

### About GKE Inference Gateway \_|\_ GKE networking \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway)
- Source ID: `site-docs-reference-2`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Figure: Serving multiple generative AI models on a GKE cluster using GKE Inference Gateway This diagram illustrates how a request to a GenAI service on example.com/completions is handled by GKE Inference Gateway.
- Features and benefits GKE Inference Gateway provides the following key capabilities to efficiently serve generative AI models for generative AI applications on GKE: Supported metrics : KV cache hits : the number of successful lookups in the key-value (KV) cache.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE networking Guides Send feedback About GKE Inference Gateway Stay organized with collections Save and categorize content based on your preferences.
- Autopilot Standard This page explains the key concepts and features of Google Kubernetes Engine (GKE) Inference Gateway, an extension to the GKE Gateway for optimized serving of generative AI applications.

### "Migrate x86 application on GKE to multi-arch with Arm \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/migrate-x86-to-multi-arch-arm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/migrate-x86-to-multi-arch-arm)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deploy the multi-arch container image with 6 replicas: $( cd k8s/overlays/multiarch && kustomize edit set image hello = us-central1-docker.pkg.dev/ $PROJECT ID /docker-repo/multiarch-hello:v0.0.1 ) kubectl apply -k k8s/overlays/multiarch Wait 10 seconds, then confirm that all of the replicas of the application are running: kubectl get pods -l="app=hello" -o wide The output is similar to the following: NAME READY STATUS RESTARTS AGE IP NODE NOMINATED NODE READINESS GATES multiarch-hello-deployment-65bfd784d-5xrrr 1/1 Running 0 95s 10.100.1.5 gke-my-cluster-arm-pool-e172cff7-shwc <none> <none> multiarch-hello-deployment-65bfd784d-7h94b 1/1 Running 0 95s 10.100.1.4 gke-my-cluster-arm-pool-e172cff7-shwc <none> <none> multiarch-hello-deployment-65bfd784d-7qbkz 1/1 Running 0 95s 10.100.1.7 gke-my-cluster-arm-pool-e172cff7-shwc <none> <none> multiarch-hello-deployment-65bfd784d-7wqb6 1/1 Running 0 95s 10.100.1.6 gke-my-cluster-arm-pool-e172cff7-shwc <none> <none> multiarch-hello-deployment-65bfd784d-h2g2k 1/1 Running 0 95s 10.100.0.19 gke-my-cluster-default-pool-32019863-b41t <none> <none> multiarch-hello-deployment-65bfd784d-lc9dc 1/1 Running 0 95s 10.100.0.18 gke-my-cluster-default-pool-32019863-b41t <none> <none> This output includes a NODE column that indicates the Pods are running on both nodes in the Arm node pool and others in the default (x86) node pool.
- Delete your cluster by running gcloud container clusters delete : gcloud container clusters delete $CLUSTER NAME --location $CONTROL PLANE LOCATION Delete the repository: gcloud artifacts repositories delete docker-repo —location = us-central1 --async What's next Arm workloads on GKE Create clusters and node pools with Arm nodes Build multi-architecture images for Arm workloads Prepare an Arm workload for deployment Prepare Autopilot workloads on Arm architecture Best practices for running cost-optimized Kubernetes applications on GKE Explore reference architectures, diagrams, and best practices about Google Cloud.
- Deploy the multi-arch version of your application Before you deploy the multi-arch image, delete the original workloads: kubectl delete deploy x86-hello-deployment arm-hello-deployment Inspect the add multiarch support.yaml kustomize overlay by running cat k8s/overlays/multiarch/add multiarch support.yaml : The output includes the following toleration set: tolerations: - key: kubernetes.io/arch operator: Equal value: arm64 effect: NoSchedule This toleration allows the workload to run on the Arm nodes in your cluster, since the toleration matches the taint set on all Arm nodes.
- This tutorial describes how to migrate an application built for nodes using an x86 (Intel or AMD) processor in a Google Kubernetes Engine (GKE) cluster to a multi-architecture (multi-arch) application that runs on either x86 or Arm nodes.

