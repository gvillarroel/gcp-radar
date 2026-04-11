---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:01.329Z"
product_name: "Cluster Toolkit"
product_slug: "cluster-toolkit"
feature_name: "NUMA-aware scheduling for G4 on GKE"
feature_slug: "numa-aware-scheduling-for-g4-on-gke"
latest_feature_date: "2025-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint"
keywords:
  - "numa"
  - "aware"
  - "scheduling"
  - "for"
  - "g4"
  - "on"
  - "gke"
  - "cluster"
---

# NUMA-aware scheduling for G4 on GKE

Product: Cluster Toolkit
Coverage: MEDIUM

## Step 02 Summary

Cluster Toolkit adds NUMA-aware scheduling in GKE clusters for G4 machines.

## Extended Definition

Cluster Toolkit adds NUMA-aware scheduling in GKE clusters for G4 machines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment](https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment)
- [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint)

## Supporting Pages

### Deploy an A3 Mega GKE cluster for ML training | Cluster Toolkit | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Deploy an A3 Mega GKE cluster for ML training Cluster Toolkit Google Cloud Documentation Source URL: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster This document outlines the deployment steps for provisioning an A3 Mega (a3-megagpu-8g) Google Kubernetes Engine (GKE) cluster that is ideal for running large-scale artificial intelligence (AI) and machine learning (ML) training workloads.

### Set up Cluster Toolkit | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment](https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set up Cluster Toolkit Google Cloud Documentation Source URL: https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment Before you can deploy your cluster, you need to configure your Google Cloud project.
- The following sections show you how to set a default project, enable the required service accounts and roles, grant credentials to Terraform, and enable OS Login for virtual machine (VM) access.
- Cluster Toolkit requires that the default Compute Engine service account is enabled in your project and the Compute Instance Admin (v1) role (roles/compute.instanceAdmin.v1) and the Service Account User (roles/iam.serviceAccountUser) role are granted to the service account.

### Cluster blueprint | Cluster Toolkit | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Cluster blueprint Cluster Toolkit Google Cloud Documentation Source URL: https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint The required quotas are based on your custom configuration.
- Minimum quotas are documented on GitHub for the provided example blueprints.
- Review Cluster deployment overview.

