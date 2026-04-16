---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:29.448Z"
product_name: "Anthos Attached Clusters"
product_slug: "anthos-attached-clusters"
feature_name: "Simplified IAM requirements for attached cluster system components"
feature_slug: "simplified-iam-requirements-for-attached-cluster-system-components"
latest_feature_date: "2023-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster"
keywords:
  - "requirements"
  - "components"
  - "system"
  - "simplified"
  - "cluster"
---

# Simplified IAM requirements for attached cluster system components

Product: Anthos Attached Clusters
Coverage: MEDIUM

## Step 02 Summary

Anthos Attached Clusters no longer requires manual Google IAM bindings for key system components such as gke-telemetry-agent, Google Managed Service for Prometheus collectors, and the Binary Authorization agent.

## Extended Definition

Anthos Attached Clusters no longer requires manual Google IAM bindings for key system components such as gke-telemetry-agent, Google Managed Service for Prometheus collectors, and the Binary Authorization agent.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster)

## Supporting Pages

### "Supported Kubernetes cluster versions \_|\_ GKE attached clusters \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information see: Customize system components on AKS clusters Customize system components on EKS clusters Customize system components on CNCF conformant clusters Security Fixes Fixed CVE-2023-4039 Fixed CVE-2024-13176 Fixed CVE-2024-26462 Fixed CVE-2025-0395 Fixed CVE-2025-1390 Fixed CVE-2025-24528 Fixed CVE-2025-31115 Fixed CVE-2025-4207 1.30.0-gke.6 Security Fixes Fixed CVE-2020-13529 Fixed CVE-2021-33560 Fixed CVE-2022-4899 Fixed CVE-2023-5678 Fixed CVE-2024-0727 Fixed CVE-2024-12133 Fixed CVE-2024-12243 Fixed CVE-2024-2511 Fixed CVE-2024-4741 Fixed CVE-2024-5535 Fixed CVE-2024-9143 Fixed CVE-2025-1094 1.30.0-gke.5 Security Fixes Fixed CVE-2024-10976 Fixed CVE-2024-10977 Fixed CVE-2024-10978 Fixed CVE-2024-10979 1.30.0-gke.4 Breaking Change: GKE attached clusters validate that the following required services are enabled when creating or updating attached clusters: cloudresourcemanager.googleapis.com , monitoring.googleapis.com .
- For more information see: Customize system components on AKS clusters Customize system components on EKS clusters Customize system components on CNCF conformant clusters Security Fixes Fixed CVE-2023-4039 Fixed CVE-2024-13176 Fixed CVE-2024-26462 Fixed CVE-2025-0395 Fixed CVE-2025-1390 Fixed CVE-2025-24528 Fixed CVE-2025-31115 Fixed CVE-2025-4207 1.31.0-gke.3 Security Fixes Fixed CVE-2020-13529 Fixed CVE-2021-33560 Fixed CVE-2022-4899 Fixed CVE-2023-5678 Fixed CVE-2024-0727 Fixed CVE-2024-12133 Fixed CVE-2024-12243 Fixed CVE-2024-2511 Fixed CVE-2024-4741 Fixed CVE-2024-5535 Fixed CVE-2024-9143 Fixed CVE-2025-1094 1.31.0-gke.2 Security Fixes Fixed CVE-2024-10976 Fixed CVE-2024-10977 Fixed CVE-2024-10978 Fixed CVE-2024-10979 1.31.0-gke.1 Breaking Change: GKE attached clusters validate that the following required services are enabled when creating or updating attached clusters: anthos.googleapis.com .
- Security Fixes Fixed CVE-2019-18276 Fixed CVE-2020-1751 Fixed CVE-2023-39318 Fixed CVE-2023-39319 Fixed CVE-2023-39323 Fixed CVE-2023-39325 Fixed CVE-2023-39326 Fixed CVE-2023-3978 Fixed CVE-2023-40577 Fixed CVE-2023-44487 Fixed CVE-2023-45142 Fixed CVE-2023-45285 Fixed CVE-2023-45288 Fixed CVE-2023-45918 Fixed CVE-2023-48795 Fixed CVE-2024-24557 Fixed CVE-2024-24786 Fixed CVE-2024-24789 Fixed CVE-2024-24790 Fixed CVE-2024-29018 Fixed CVE-2024-33599 Fixed CVE-2024-33600 Fixed CVE-2024-33601 Fixed CVE-2024-33602 Fixed CVE-2024-41110 Fixed CVE-2024-6104 Fixed GHSA-jq35-85cj-fj4p Fixed GHSA-m425-mq94-257g Kubernetes 1.30 1.30.0-gke.7 Feature: You can now customize Kubernetes labels and tolerations for Google-owned system components on your attached clusters.
- For more information see: Customize system components on AKS clusters Customize system components on EKS clusters Customize system components on CNCF conformant clusters Security Fixes Fixed CVE-2023-4039 Fixed CVE-2024-13176 Fixed CVE-2024-26462 Fixed CVE-2025-0395 Fixed CVE-2025-1390 Fixed CVE-2025-24528 Fixed CVE-2025-31115 Fixed CVE-2025-4207 Kubernetes 1.31 1.31.0-gke.5 Security Fixes Fixed CVE-2025-32988 Fixed CVE-2025-32989 Fixed CVE-2025-32990 Fixed CVE-2025-3576 Fixed CVE-2025-4802 Fixed CVE-2025-6395 Fixed CVE-2025-8713 Fixed CVE-2025-8714 Fixed CVE-2025-8715 1.31.0-gke.4 Feature: You can now customize Kubernetes labels and tolerations for Google-owned system components on your attached clusters.

### Attach your AKS cluster \_|\_ GKE attached clusters \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GOOGLE CLOUD REGION : the Google Cloud region to administer your cluster PROJECT NUMBER : the Fleet host project where the cluster will be registered PLATFORM VERSION : the GKE attached clusters version to use for the cluster ISSUER URL : the issuer URL retrieved earlier KUBECONFIG CONTEXT : context in the kubeconfig for accessing your cluster, as extracted earlier KUBECONFIG PATH : path to your kubeconfig Note: If attaching your cluster fails, the system automatically rolls back any changes made to Google Cloud resources related to the cluster, such as workload identity pool.
- To authorize the Kubernetes workload identity gke-system/gke-telemetry-agent to write logs to Google Cloud Logging, and metrics to Google Cloud Monitoring, run this command: gcloud projects add-iam-policy-binding GOOGLE PROJECT ID \ --member = "serviceAccount: GOOGLE PROJECT ID .svc.id.goog[gke-system/gke-telemetry-agent]" \ --role = roles/gkemulticloud.telemetryWriter Replace GOOGLE PROJECT ID with the cluster's Google Cloud project ID.
- In order for GKE attached clusters to create and upload system logs and metrics to Google Cloud, it must be authorized.
- Prerequisites Ensure that your cluster meets the cluster requirements .

### Attach your EKS cluster \_|\_ GKE attached clusters \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GOOGLE CLOUD REGION : the Google Cloud region to administer your cluster PLATFORM VERSION : the GKE attached clusters version to use for the cluster PROJECT NUMBER : the fleet host project where the cluster will be registered ISSUER URL : the issuer URL retrieved earlier KUBECONFIG CONTEXT : context in the kubeconfig for accessing the EKS cluster, as extracted earlier KUBECONFIG PATH : path to your kubeconfig Note: If attaching your cluster fails, the system automatically rolls back any changes made to Google Cloud resources related to the cluster, such as workload identity pool.
- To authorize the Kubernetes workload identity gke-system/gke-telemetry-agent to write logs to Google Cloud Logging, and metrics to Google Cloud Monitoring, run this command: gcloud projects add-iam-policy-binding GOOGLE PROJECT ID \ --member = "serviceAccount: GOOGLE PROJECT ID .svc.id.goog[gke-system/gke-telemetry-agent]" \ --role = roles/gkemulticloud.telemetryWriter Replace GOOGLE PROJECT ID with the cluster's Google Cloud project ID.
- In order for GKE attached clusters to create and upload system logs and metrics to Google Cloud, it must be authorized.
- Prerequisites Ensure that your cluster meets the cluster requirements .

