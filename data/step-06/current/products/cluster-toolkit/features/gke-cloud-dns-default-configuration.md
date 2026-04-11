---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:01.309Z"
product_name: "Cluster Toolkit"
product_slug: "cluster-toolkit"
feature_name: "GKE cloud DNS default configuration"
feature_slug: "gke-cloud-dns-default-configuration"
latest_feature_date: "2026-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment"
keywords:
  - "gke"
  - "dns"
  - "default"
  - "configuration"
  - "the"
  - "cluster"
  - "module"
  - "defaults"
---

# GKE cloud DNS default configuration

Product: Cluster Toolkit
Coverage: MEDIUM

## Step 02 Summary

The gke-cluster module defaults cloud_dns_config to KUBE_DNS with CoreDNS support.

## Extended Definition

The gke-cluster module defaults cloud_dns_config to KUBE_DNS with CoreDNS support.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint)
- [https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment](https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment)

## Supporting Pages

### Deploy an A3 Mega GKE cluster for ML training | Cluster Toolkit | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Deploy an A3 Mega GKE cluster for ML training Cluster Toolkit Google Cloud Documentation Source URL: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster This document outlines the deployment steps for provisioning an A3 Mega (a3-megagpu-8g) Google Kubernetes Engine (GKE) cluster that is ideal for running large-scale artificial intelligence (AI) and machine learning (ML) training workloads.

### Cluster blueprint | Cluster Toolkit | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Cluster blueprint Cluster Toolkit Google Cloud Documentation Source URL: https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint The required quotas are based on your custom configuration.
- Minimum quotas are documented on GitHub for the provided example blueprints.
- Review Cluster deployment overview.

### Set up Cluster Toolkit | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment](https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Cluster Toolkit requires that the default Compute Engine service account is enabled in your project and the Compute Instance Admin (v1) role (roles/compute.instanceAdmin.v1) and the Service Account User (roles/iam.serviceAccountUser) role are granted to the service account.
- The following sections show you how to set a default project, enable the required service accounts and roles, grant credentials to Terraform, and enable OS Login for virtual machine (VM) access.
- To set a default project, run the following command: Replace PROJECT ID with your project ID. ...
- Set up Cluster Toolkit Google Cloud Documentation Source URL: https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment Before you can deploy your cluster, you need to configure your Google Cloud project.

