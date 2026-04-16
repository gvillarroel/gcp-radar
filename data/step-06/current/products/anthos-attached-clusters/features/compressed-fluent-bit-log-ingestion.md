---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:29.450Z"
product_name: "Anthos Attached Clusters"
product_slug: "anthos-attached-clusters"
feature_name: "Compressed Fluent Bit log ingestion"
feature_slug: "compressed-fluent-bit-log-ingestion"
latest_feature_date: "2023-09-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/cluster-prerequisites"
keywords:
  - "compression"
  - "compressed"
  - "ingestion"
  - "fluent"
  - "gzip"
  - "enabled"
---

# Compressed Fluent Bit log ingestion

Product: Anthos Attached Clusters
Coverage: MEDIUM

## Step 02 Summary

Enabled gzip compression for Fluent Bit log ingestion into Cloud Logging for both control plane and workload logs.

## Extended Definition

Enabled gzip compression for Fluent Bit log ingestion into Cloud Logging for both control plane and workload logs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/cluster-prerequisites](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/cluster-prerequisites)

## Supporting Pages

### "Supported Kubernetes cluster versions \_|\_ GKE attached clusters \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- For more information see: Customize system components on AKS clusters Customize system components on EKS clusters Customize system components on CNCF conformant clusters Security Fixes Fixed CVE-2023-4039 Fixed CVE-2024-13176 Fixed CVE-2024-26462 Fixed CVE-2025-0395 Fixed CVE-2025-1390 Fixed CVE-2025-24528 Fixed CVE-2025-31115 Fixed CVE-2025-4207 1.30.0-gke.6 Security Fixes Fixed CVE-2020-13529 Fixed CVE-2021-33560 Fixed CVE-2022-4899 Fixed CVE-2023-5678 Fixed CVE-2024-0727 Fixed CVE-2024-12133 Fixed CVE-2024-12243 Fixed CVE-2024-2511 Fixed CVE-2024-4741 Fixed CVE-2024-5535 Fixed CVE-2024-9143 Fixed CVE-2025-1094 1.30.0-gke.5 Security Fixes Fixed CVE-2024-10976 Fixed CVE-2024-10977 Fixed CVE-2024-10978 Fixed CVE-2024-10979 1.30.0-gke.4 Breaking Change: GKE attached clusters validate that the following required services are enabled when creating or updating attached clusters: cloudresourcemanager.googleapis.com , monitoring.googleapis.com .
- Security Fixes: Fixed CVE-2023-47108 Fixed CVE-2024-28834 Fixed CVE-2024-28835 Fixed CVE-2024-9143 Fixed GHSA-87m9-rv8p-rgmg Fixed GHSA-mh55-gqvf-xfwm 1.30.0-gke.2 Security Fixes: Fixed CVE-2023-47108 Fixed CVE-2024-7348 1.30.0-gke.1 Security Fixes: Fixed CVE-2024-0553 Fixed CVE-2024-0567 Fixed CVE-2024-37370 Fixed CVE-2024-37371 Kubernetes 1.29 1.29.0-gke.9 Security Fixes Fixed CVE-2020-13529 Fixed CVE-2021-33560 Fixed CVE-2022-4899 Fixed CVE-2023-5678 Fixed CVE-2024-0727 Fixed CVE-2024-12133 Fixed CVE-2024-12243 Fixed CVE-2024-2511 Fixed CVE-2024-4741 Fixed CVE-2024-5535 Fixed CVE-2024-9143 Fixed CVE-2025-1094 1.29.0-gke.8 Security Fixes Fixed CVE-2024-10976 Fixed CVE-2024-10977 Fixed CVE-2024-10978 Fixed CVE-2024-10979 1.29.0-gke.7 Breaking Change: GKE attached clusters validate that the following required services are enabled when creating or updating attached clusters: cloudresourcemanager.googleapis.com , monitoring.googleapis.com .
- For more information see: Customize system components on AKS clusters Customize system components on EKS clusters Customize system components on CNCF conformant clusters Security Fixes Fixed CVE-2023-4039 Fixed CVE-2024-13176 Fixed CVE-2024-26462 Fixed CVE-2025-0395 Fixed CVE-2025-1390 Fixed CVE-2025-24528 Fixed CVE-2025-31115 Fixed CVE-2025-4207 1.31.0-gke.3 Security Fixes Fixed CVE-2020-13529 Fixed CVE-2021-33560 Fixed CVE-2022-4899 Fixed CVE-2023-5678 Fixed CVE-2024-0727 Fixed CVE-2024-12133 Fixed CVE-2024-12243 Fixed CVE-2024-2511 Fixed CVE-2024-4741 Fixed CVE-2024-5535 Fixed CVE-2024-9143 Fixed CVE-2025-1094 1.31.0-gke.2 Security Fixes Fixed CVE-2024-10976 Fixed CVE-2024-10977 Fixed CVE-2024-10978 Fixed CVE-2024-10979 1.31.0-gke.1 Breaking Change: GKE attached clusters validate that the following required services are enabled when creating or updating attached clusters: anthos.googleapis.com .
- Security Fixes Fixed CVE-2025-12817 Fixed CVE-2025-12818 Fixed CVE-2025-9230 Fixed CVE-2025-9232 1.33.0-gke.1 Security Fixes Fixed CVE-2025-32988 Fixed CVE-2025-32989 Fixed CVE-2025-32990 Fixed CVE-2025-3576 Fixed CVE-2025-4802 Fixed CVE-2025-6395 Fixed CVE-2025-8713 Fixed CVE-2025-8714 Fixed CVE-2025-8715 Kubernetes 1.32 1.32.0-gke.3 Breaking Change: GKE attached clusters no longer validate that the anthos.googleapis.com service is enabled when creating or updating a cluster.

### "Attach your CNCF conformant cluster \_|\_ GKE attached clusters \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Prerequisites for your AKS attached cluster \_|\_ GKE attached clusters\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/cluster-prerequisites](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/cluster-prerequisites)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

