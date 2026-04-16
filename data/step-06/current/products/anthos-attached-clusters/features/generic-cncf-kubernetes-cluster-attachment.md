---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:29.449Z"
product_name: "Anthos Attached Clusters"
product_slug: "anthos-attached-clusters"
feature_name: "Generic CNCF Kubernetes cluster attachment"
feature_slug: "generic-cncf-kubernetes-cluster-attachment"
latest_feature_date: "2023-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions"
keywords:
  - "conformant"
  - "generic"
  - "cncf"
  - "attachment"
  - "kubernetes"
  - "attaching"
  - "added"
  - "cluster"
---

# Generic CNCF Kubernetes cluster attachment

Product: Anthos Attached Clusters
Coverage: MEDIUM

## Step 02 Summary

Added support for attaching CNCF-conformant Kubernetes clusters by setting the distribution type to "generic.".

## Extended Definition

Added support for attaching CNCF-conformant Kubernetes clusters by setting the distribution type to "generic.".

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions)

## Supporting Pages

### "Attach your CNCF conformant cluster \_|\_ GKE attached clusters \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE attached clusters Guides Send feedback Attach your CNCF conformant cluster Stay organized with collections Save and categorize content based on your preferences.
- This includes the ability to attach any CNCF conformant Kubernetes cluster.
- To attach your CNCF conformant cluster to Google Cloud Fleet management , run the following commands: Ensure that your kubeconfig file has an entry for the cluster you'd like to attach.
- Supported Kubernetes Clusters You can add any conformant Kubernetes cluster with x86 nodes to your fleet, and then view it within the Google Cloud console alongside your GKE clusters.

### "Connect to your CNCF conformant cluster \_|\_ GKE attached clusters \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE attached clusters Guides Send feedback Connect to your CNCF conformant cluster Stay organized with collections Save and categorize content based on your preferences.
- This document describes three methods of connecting to your CNCF conformant attached cluster: Method #1 connects to your cluster as a Google user .
- To attach an CNCF conformant cluster, follow the steps in Attach your CNCF conformant cluster .
- To update an CNCF conformant cluster, follow the steps in Update your CNCF conformant cluster .

### "Supported Kubernetes cluster versions \_|\_ GKE attached clusters \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information see: Customize system components on AKS clusters Customize system components on EKS clusters Customize system components on CNCF conformant clusters Security Fixes Fixed CVE-2023-4039 Fixed CVE-2024-13176 Fixed CVE-2024-26462 Fixed CVE-2025-0395 Fixed CVE-2025-1390 Fixed CVE-2025-24528 Fixed CVE-2025-31115 Fixed CVE-2025-4207 Kubernetes 1.31 1.31.0-gke.5 Security Fixes Fixed CVE-2025-32988 Fixed CVE-2025-32989 Fixed CVE-2025-32990 Fixed CVE-2025-3576 Fixed CVE-2025-4802 Fixed CVE-2025-6395 Fixed CVE-2025-8713 Fixed CVE-2025-8714 Fixed CVE-2025-8715 1.31.0-gke.4 Feature: You can now customize Kubernetes labels and tolerations for Google-owned system components on your attached clusters.
- For more information see: Customize system components on AKS clusters Customize system components on EKS clusters Customize system components on CNCF conformant clusters Security Fixes Fixed CVE-2023-4039 Fixed CVE-2024-13176 Fixed CVE-2024-26462 Fixed CVE-2025-0395 Fixed CVE-2025-1390 Fixed CVE-2025-24528 Fixed CVE-2025-31115 Fixed CVE-2025-4207 1.30.0-gke.6 Security Fixes Fixed CVE-2020-13529 Fixed CVE-2021-33560 Fixed CVE-2022-4899 Fixed CVE-2023-5678 Fixed CVE-2024-0727 Fixed CVE-2024-12133 Fixed CVE-2024-12243 Fixed CVE-2024-2511 Fixed CVE-2024-4741 Fixed CVE-2024-5535 Fixed CVE-2024-9143 Fixed CVE-2025-1094 1.30.0-gke.5 Security Fixes Fixed CVE-2024-10976 Fixed CVE-2024-10977 Fixed CVE-2024-10978 Fixed CVE-2024-10979 1.30.0-gke.4 Breaking Change: GKE attached clusters validate that the following required services are enabled when creating or updating attached clusters: cloudresourcemanager.googleapis.com , monitoring.googleapis.com .
- For more information see: Customize system components on AKS clusters Customize system components on EKS clusters Customize system components on CNCF conformant clusters Security Fixes Fixed CVE-2023-4039 Fixed CVE-2024-13176 Fixed CVE-2024-26462 Fixed CVE-2025-0395 Fixed CVE-2025-1390 Fixed CVE-2025-24528 Fixed CVE-2025-31115 Fixed CVE-2025-4207 1.31.0-gke.3 Security Fixes Fixed CVE-2020-13529 Fixed CVE-2021-33560 Fixed CVE-2022-4899 Fixed CVE-2023-5678 Fixed CVE-2024-0727 Fixed CVE-2024-12133 Fixed CVE-2024-12243 Fixed CVE-2024-2511 Fixed CVE-2024-4741 Fixed CVE-2024-5535 Fixed CVE-2024-9143 Fixed CVE-2025-1094 1.31.0-gke.2 Security Fixes Fixed CVE-2024-10976 Fixed CVE-2024-10977 Fixed CVE-2024-10978 Fixed CVE-2024-10979 1.31.0-gke.1 Breaking Change: GKE attached clusters validate that the following required services are enabled when creating or updating attached clusters: anthos.googleapis.com .
- Security Fixes: Fixed CVE-2023-47108 Fixed CVE-2024-28834 Fixed CVE-2024-28835 Fixed CVE-2024-9143 Fixed GHSA-87m9-rv8p-rgmg Fixed GHSA-mh55-gqvf-xfwm 1.30.0-gke.2 Security Fixes: Fixed CVE-2023-47108 Fixed CVE-2024-7348 1.30.0-gke.1 Security Fixes: Fixed CVE-2024-0553 Fixed CVE-2024-0567 Fixed CVE-2024-37370 Fixed CVE-2024-37371 Kubernetes 1.29 1.29.0-gke.9 Security Fixes Fixed CVE-2020-13529 Fixed CVE-2021-33560 Fixed CVE-2022-4899 Fixed CVE-2023-5678 Fixed CVE-2024-0727 Fixed CVE-2024-12133 Fixed CVE-2024-12243 Fixed CVE-2024-2511 Fixed CVE-2024-4741 Fixed CVE-2024-5535 Fixed CVE-2024-9143 Fixed CVE-2025-1094 1.29.0-gke.8 Security Fixes Fixed CVE-2024-10976 Fixed CVE-2024-10977 Fixed CVE-2024-10978 Fixed CVE-2024-10979 1.29.0-gke.7 Breaking Change: GKE attached clusters validate that the following required services are enabled when creating or updating attached clusters: cloudresourcemanager.googleapis.com , monitoring.googleapis.com .

