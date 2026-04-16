---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:29.455Z"
product_name: "Anthos Attached Clusters"
product_slug: "anthos-attached-clusters"
feature_name: "Cluster status logging and monitoring via Cloud Logging UI"
feature_slug: "cluster-status-logging-and-monitoring-via-cloud-logging-ui"
latest_feature_date: "2022-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/install-cloud-logging"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/install-cloud-logging"
keywords:
  - "monitoring"
  - "logging"
  - "status"
  - "added"
  - "cluster"
---

# Cluster status logging and monitoring via Cloud Logging UI

Product: Anthos Attached Clusters
Coverage: MEDIUM

## Step 02 Summary

Added logging and monitoring for attached cluster status with full log inspection in the Google Cloud Logging interface.

## Extended Definition

Added logging and monitoring for attached cluster status with full log inspection in the Google Cloud Logging interface.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/install-cloud-logging](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/install-cloud-logging)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/install-cloud-logging](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/install-cloud-logging)

## Supporting Pages

### "Supported Kubernetes cluster versions \_|\_ GKE attached clusters \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information see: Customize system components on AKS clusters Customize system components on EKS clusters Customize system components on CNCF conformant clusters Security Fixes Fixed CVE-2023-4039 Fixed CVE-2024-13176 Fixed CVE-2024-26462 Fixed CVE-2025-0395 Fixed CVE-2025-1390 Fixed CVE-2025-24528 Fixed CVE-2025-31115 Fixed CVE-2025-4207 1.30.0-gke.6 Security Fixes Fixed CVE-2020-13529 Fixed CVE-2021-33560 Fixed CVE-2022-4899 Fixed CVE-2023-5678 Fixed CVE-2024-0727 Fixed CVE-2024-12133 Fixed CVE-2024-12243 Fixed CVE-2024-2511 Fixed CVE-2024-4741 Fixed CVE-2024-5535 Fixed CVE-2024-9143 Fixed CVE-2025-1094 1.30.0-gke.5 Security Fixes Fixed CVE-2024-10976 Fixed CVE-2024-10977 Fixed CVE-2024-10978 Fixed CVE-2024-10979 1.30.0-gke.4 Breaking Change: GKE attached clusters validate that the following required services are enabled when creating or updating attached clusters: cloudresourcemanager.googleapis.com , monitoring.googleapis.com .
- Security Fixes: Fixed CVE-2023-47108 Fixed CVE-2024-28834 Fixed CVE-2024-28835 Fixed CVE-2024-9143 Fixed GHSA-87m9-rv8p-rgmg Fixed GHSA-mh55-gqvf-xfwm 1.30.0-gke.2 Security Fixes: Fixed CVE-2023-47108 Fixed CVE-2024-7348 1.30.0-gke.1 Security Fixes: Fixed CVE-2024-0553 Fixed CVE-2024-0567 Fixed CVE-2024-37370 Fixed CVE-2024-37371 Kubernetes 1.29 1.29.0-gke.9 Security Fixes Fixed CVE-2020-13529 Fixed CVE-2021-33560 Fixed CVE-2022-4899 Fixed CVE-2023-5678 Fixed CVE-2024-0727 Fixed CVE-2024-12133 Fixed CVE-2024-12243 Fixed CVE-2024-2511 Fixed CVE-2024-4741 Fixed CVE-2024-5535 Fixed CVE-2024-9143 Fixed CVE-2025-1094 1.29.0-gke.8 Security Fixes Fixed CVE-2024-10976 Fixed CVE-2024-10977 Fixed CVE-2024-10978 Fixed CVE-2024-10979 1.29.0-gke.7 Breaking Change: GKE attached clusters validate that the following required services are enabled when creating or updating attached clusters: cloudresourcemanager.googleapis.com , monitoring.googleapis.com .
- 1.30.0-gke.3 Breaking Change: GKE attached clusters validate that the following required services are enabled when creating or updating attached clusters: gkeconnect.googleapis.com , gkehub.googleapis.com , kubernetesmetadata.googleapis.com , logging.googleapis.com .
- 1.29.0-gke.6 Breaking Change: GKE attached clusters validate that the following required services are enabled when creating or updating attached clusters: gkeconnect.googleapis.com , gkehub.googleapis.com , kubernetesmetadata.googleapis.com , logging.googleapis.com .

### "Install Cloud Logging on AKS attached clusters \_|\_ GKE attached clusters\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/install-cloud-logging](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/install-cloud-logging)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable workload logging when attaching a cluster, follow the instructions to attach your AKS cluster , and include the optional --logging flag in the gcloud container attached clusters register command : gcloud container attached clusters register CLUSTER NAME ... --logging= LOGGING FLAG To enable workload logging on a cluster that's already attached, follow the instructions to update your AKS cluster , and include the optional --logging flag in the gcloud container attached clusters update command : gcloud container attached clusters update CLUSTER NAME ... --logging= LOGGING FLAG Replace LOGGING FLAG with a flag indicating what kind of logging you want to enable: NONE : disable logging.
- Example 1: Get the logs of the gke-connect-agent container for an Google Cloud cluster CLUSTER NAME : resource.type = "k8s container" resource.labels.cluster name = "attachedClusters/ CLUSTER NAME " resource.labels.container name = "gke-connect-agent" What's next Cloud Logging overview Using the Logs Explorer Building queries for Cloud Logging Create logs-based metrics Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Access your logs There are several ways to access your GKE attached clusters logs in Cloud Logging: Logs Explorer – You can see your logs directly from the Logs Explorer by using the logging filters to select the Kubernetes resources, such as cluster, node, namespace, pod, or container logs.
- What data is collected You can configure GKE attached clusters to capture any or all of the following information: Logs for workloads Enable logging If you don't specify a logging mode when you attach your cluster, GKE attached clusters enables system logging by default.

### "Install Cloud Logging on EKS attached clusters \_|\_ GKE attached clusters\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/install-cloud-logging](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/install-cloud-logging)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable workload logging when attaching a cluster, follow the instructions to attach your EKS cluster , and include the optional --logging flag in the gcloud container attached clusters register command : gcloud container attached clusters register CLUSTER NAME ... --logging= LOGGING FLAG To enable workload logging on a cluster that's already attached, follow the instructions to update your EKS cluster , and include the optional --logging flag in the gcloud container attached clusters update command : gcloud container attached clusters update CLUSTER NAME ... --logging= LOGGING FLAG Replace LOGGING FLAG with a flag indicating what kind of logging you want to enable: NONE : disable logging.
- Example 1: Get the logs of the gke-connect-agent container for an Google Cloud cluster CLUSTER NAME : resource.type = "k8s container" resource.labels.cluster name = "attachedClusters/ CLUSTER NAME " resource.labels.container name = "gke-connect-agent" What's next Cloud Logging overview Using the Logs Explorer Building queries for Cloud Logging Create logs-based metrics Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Access your logs There are several ways to access your GKE attached clusters logs in Cloud Logging: Logs Explorer – You can see your logs directly from the Logs Explorer by using the logging filters to select the Kubernetes resources, such as cluster, node, namespace, pod, or container logs.
- What data is collected You can configure GKE attached clusters to capture any or all of the following information: Logs for workloads Enable logging If you don't specify a logging mode when you attach your cluster, GKE attached clusters enables system logging by default.

