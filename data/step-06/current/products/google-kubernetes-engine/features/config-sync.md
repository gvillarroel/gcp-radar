---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.909Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Config Sync"
feature_slug: "config-sync"
latest_feature_date: "2021-07-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-developer-workflow"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads"
keywords:
  - "config"
  - "sync"
  - "synchronizes"
  - "kubernetes"
  - "configuration"
  - "gke"
  - "clusters"
  - "source"
---

# Config Sync

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Synchronizes Kubernetes configuration to GKE clusters from source control or configuration files; GKE can manage Kubernetes deployments using configuration files stored in a Git repository.

## Extended Definition

Synchronizes Kubernetes configuration to GKE clusters from source control or configuration files; GKE can manage Kubernetes deployments using configuration files stored in a Git repository.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-developer-workflow](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-developer-workflow)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads)

## Supporting Pages

### "Modern CI/CD with GKE: A software delivery framework \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide)
- Source ID: `site-docs-reference-required-5`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Some common configuration items that you can manage centrally include the following: Kubernetes namespaces Quotas Role-based access controls (RBAC) Network policies You should consistently enforce these types of configurations throughout your clusters so that application teams don't misuse or abuse the infrastructure.
- Policy Because developers can extend the base configurations that operators create, you need a way to constrain the resources created in the clusters that make up the platform.
- You can use Config Sync to store and apply common configurations across your fleet of clusters.
- Examples of the artifacts that you can store in application repositories include the following: Application source code A Dockerfile that describes how to build and run the application The CI/CD pipeline definition Extensions or modifications to the application configuration bases created by operators Infrastructure as code repositories Infrastructure as code repositories store the code to build out the infrastructure required to run the applications.

### "Modern CI/CD with GKE: Apply the developer workflow \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-developer-workflow](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-developer-workflow)
- Source ID: `site-docs-reference-required-5`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This repository hosts the source code and steps to build containers in Dockerfile , kustomize configs that describe needed configurations of the application and skaffold.yaml that defines the deployment steps to be used by Cloud Deploy for CD.
- Config Sync syncs the changes that arrive on prod branch of the repository acm-gke-infrastructure-repo with the production GKE clusters that results in landing zone creation for the application on production GKE clusters.
- This document is part of a series: Modern CI/CD with GKE: A software delivery framework Modern CI/CD with GKE: Build a CI/CD system (reference architecture) Modern CI/CD with GKE: Apply the developer workflow (this document) In this tutorial, you use tools such as Skaffold , kustomize , Artifact Registry , Config Sync , Cloud Build and Cloud Deploy to develop, build and deploy your application.
- Config Sync syncs the changes that arrive on staging branch of the repository acm-gke-infrastructure-repo with the staging GKE cluster that results in landing zone creation for the application on the staging GKE cluster.

### "About privileged workload admission in Autopilot mode \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads)
- Source ID: `site-docs-reference-2`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table describes the configuration that's needed in organization policies or clusters to support certain objectives: Objective Organization policy configuration Cluster configuration Allow all GKE-approved WorkloadAllowlists Do the following: Set the allowAnyGKEPath parameter to the default value of True .
- This parameter supports the following values: True : cluster admins can configure clusters without modifying the allowlist configuration, with one or more allowlist paths that start with gke:// , or with an empty string to disable all allowlists for the cluster.
- All Autopilot and Standard clusters in the organization, folder, or project are affected. allowPaths : a list of approved allowlist sources that cluster admins can specify values from when they configure a cluster.
- Allowlist installation To install an allowlist from an approved source in your cluster, you use a Kubernetes custom resource named the AllowlistSynchronizer.

