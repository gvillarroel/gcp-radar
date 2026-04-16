---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:29.454Z"
product_name: "Anthos Attached Clusters"
product_slug: "anthos-attached-clusters"
feature_name: "AKS and EKS version support expansion"
feature_slug: "aks-and-eks-version-support-expansion"
latest_feature_date: "2022-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/connect-to-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster"
keywords:
  - "expansion"
  - "expanded"
  - "version"
  - "kubernetes"
  - "cluster"
---

# AKS and EKS version support expansion

Product: Anthos Attached Clusters
Coverage: MEDIUM

## Step 02 Summary

Expanded supported attached cluster Kubernetes versions for AKS and EKS to include versions 1.21 through 1.25.

## Extended Definition

Expanded supported attached cluster Kubernetes versions for AKS and EKS to include versions 1.21 through 1.25.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/connect-to-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster)

## Supporting Pages

### "Supported Kubernetes cluster versions \_|\_ GKE attached clusters \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE attached clusters Reference Send feedback Supported Kubernetes cluster versions Stay organized with collections Save and categorize content based on your preferences.
- GKE attached clusters supports the following Kubernetes versions: Kubernetes 1.34 1.34.0-gke.1 Breaking Change: GKE attached clusters no longer validate that the anthos.googleapis.com service is enabled when creating or updating a cluster.
- Each GKE attached clusters release comes with Kubernetes version notes.
- Security Fixes: Fixed CVE-2023-47108 Fixed CVE-2024-28834 Fixed CVE-2024-28835 Fixed CVE-2024-9143 Fixed GHSA-87m9-rv8p-rgmg Fixed GHSA-mh55-gqvf-xfwm 1.30.0-gke.2 Security Fixes: Fixed CVE-2023-47108 Fixed CVE-2024-7348 1.30.0-gke.1 Security Fixes: Fixed CVE-2024-0553 Fixed CVE-2024-0567 Fixed CVE-2024-37370 Fixed CVE-2024-37371 Kubernetes 1.29 1.29.0-gke.9 Security Fixes Fixed CVE-2020-13529 Fixed CVE-2021-33560 Fixed CVE-2022-4899 Fixed CVE-2023-5678 Fixed CVE-2024-0727 Fixed CVE-2024-12133 Fixed CVE-2024-12243 Fixed CVE-2024-2511 Fixed CVE-2024-4741 Fixed CVE-2024-5535 Fixed CVE-2024-9143 Fixed CVE-2025-1094 1.29.0-gke.8 Security Fixes Fixed CVE-2024-10976 Fixed CVE-2024-10977 Fixed CVE-2024-10978 Fixed CVE-2024-10979 1.29.0-gke.7 Breaking Change: GKE attached clusters validate that the following required services are enabled when creating or updating attached clusters: cloudresourcemanager.googleapis.com , monitoring.googleapis.com .

### "Attach your CNCF conformant cluster \_|\_ GKE attached clusters \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GOOGLE CLOUD REGION : the Google Cloud region to administer your cluster PROJECT NUMBER : the fleet host project where the cluster will be registered PLATFORM VERSION : the GKE attached clusters version to use for the cluster ISSUER URL : the issuer URL retrieved earlier KUBECONFIG CONTEXT : context in the kubeconfig for accessing your cluster, as extracted earlier KUBECONFIG PATH : path to your kubeconfig Authorize Cloud Logging / Cloud Monitoring Note: Starting with Kubernetes version 1.28, manual policy binding to authorize the gke-system/gke-telemetry-agent service account for log and metric collection is no longer necessary.
- When attaching or updating your cluster, you must choose a platform version whose minor version is the same as or one level below the Kubernetes version of your cluster.
- Platform version numbering These documents refer to the GKE attached clusters version as the platform version, to distinguish it from the Kubernetes version.
- For example, you can attach a cluster running Kubernetes v1.22. with GKE attached clusters platform version 1.21. or 1.22. .

### "Connect to your AKS cluster \_|\_ GKE attached clusters \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/connect-to-cluster)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following manifest grants the Google Group cluster-admin-team the role of cluster administrator: apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRoleBinding metadata : name : gateway-cluster-admin-group subjects : - kind : Group name : cluster-admin-team@example.com roleRef : kind : ClusterRole name : cluster-admin apiGroup : rbac.authorization.k8s.io Save the manifest to a file and apply it to the cluster by running the following command: kubectl apply -kubeconfig = KUBECONFIG PATH -f FILENAME Replace the following: KUBECONFIG PATH : the path to your kubeconfig file.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE attached clusters Guides Send feedback Connect to your AKS cluster Stay organized with collections Save and categorize content based on your preferences.
- Obtain a Kubernetes kubeconfig configuration file with the following command: gcloud container fleet memberships get-credentials CLUSTER NAME Replace CLUSTER NAME with the name of the cluster whose connection credentials you want.
- Before you begin method #3 To use method #3 of connecting to your attached cluster, ensure that you have the following prerequisites: Ensure that you have the latest version of Google Cloud CLI.

