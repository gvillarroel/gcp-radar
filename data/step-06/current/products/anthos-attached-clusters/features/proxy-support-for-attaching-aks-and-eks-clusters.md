---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:29.451Z"
product_name: "Anthos Attached Clusters"
product_slug: "anthos-attached-clusters"
feature_name: "Proxy support for attaching AKS and EKS clusters"
feature_slug: "proxy-support-for-attaching-aks-and-eks-clusters"
latest_feature_date: "2023-09-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/connect-to-cluster"
keywords:
  - "proxy"
  - "when"
  - "attaching"
  - "added"
---

# Proxy support for attaching AKS and EKS clusters

Product: Anthos Attached Clusters
Coverage: MEDIUM

## Step 02 Summary

Added support for using a proxy when attaching AKS and EKS clusters to Anthos Attached Clusters.

## Extended Definition

Added support for using a proxy when attaching AKS and EKS clusters to Anthos Attached Clusters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/connect-to-cluster)

## Supporting Pages

### "Supported Kubernetes cluster versions \_|\_ GKE attached clusters \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Added a mechanism to detect and automatically restart the agent when this occurs.
- Added a mechanism to detect and automatically restart the agent when this occurs.
- For more information see: Customize system components on AKS clusters Customize system components on EKS clusters Customize system components on CNCF conformant clusters Security Fixes Fixed CVE-2023-4039 Fixed CVE-2024-13176 Fixed CVE-2024-26462 Fixed CVE-2025-0395 Fixed CVE-2025-1390 Fixed CVE-2025-24528 Fixed CVE-2025-31115 Fixed CVE-2025-4207 1.30.0-gke.6 Security Fixes Fixed CVE-2020-13529 Fixed CVE-2021-33560 Fixed CVE-2022-4899 Fixed CVE-2023-5678 Fixed CVE-2024-0727 Fixed CVE-2024-12133 Fixed CVE-2024-12243 Fixed CVE-2024-2511 Fixed CVE-2024-4741 Fixed CVE-2024-5535 Fixed CVE-2024-9143 Fixed CVE-2025-1094 1.30.0-gke.5 Security Fixes Fixed CVE-2024-10976 Fixed CVE-2024-10977 Fixed CVE-2024-10978 Fixed CVE-2024-10979 1.30.0-gke.4 Breaking Change: GKE attached clusters validate that the following required services are enabled when creating or updating attached clusters: cloudresourcemanager.googleapis.com , monitoring.googleapis.com .
- Security Fixes: Fixed CVE-2023-47108 Fixed CVE-2024-28834 Fixed CVE-2024-28835 Fixed CVE-2024-9143 Fixed GHSA-87m9-rv8p-rgmg Fixed GHSA-mh55-gqvf-xfwm 1.30.0-gke.2 Security Fixes: Fixed CVE-2023-47108 Fixed CVE-2024-7348 1.30.0-gke.1 Security Fixes: Fixed CVE-2024-0553 Fixed CVE-2024-0567 Fixed CVE-2024-37370 Fixed CVE-2024-37371 Kubernetes 1.29 1.29.0-gke.9 Security Fixes Fixed CVE-2020-13529 Fixed CVE-2021-33560 Fixed CVE-2022-4899 Fixed CVE-2023-5678 Fixed CVE-2024-0727 Fixed CVE-2024-12133 Fixed CVE-2024-12243 Fixed CVE-2024-2511 Fixed CVE-2024-4741 Fixed CVE-2024-5535 Fixed CVE-2024-9143 Fixed CVE-2025-1094 1.29.0-gke.8 Security Fixes Fixed CVE-2024-10976 Fixed CVE-2024-10977 Fixed CVE-2024-10978 Fixed CVE-2024-10979 1.29.0-gke.7 Breaking Change: GKE attached clusters validate that the following required services are enabled when creating or updating attached clusters: cloudresourcemanager.googleapis.com , monitoring.googleapis.com .

### "Attach your CNCF conformant cluster \_|\_ GKE attached clusters \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster)
- Source ID: `site-docs-root`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When attaching your cluster, you must specify the following: A supported Google Cloud administrative region A platform version The administrative region is a Google Cloud region to administer your attached cluster from.
- When attaching or updating your cluster, you must choose a platform version whose minor version is the same as or one level below the Kubernetes version of your cluster.
- Note: If you're attaching an Amazon EKS or Azure AKS cluster, see Attach your EKS cluster or Attach your AKS cluster .

### "Connect to your AKS cluster \_|\_ GKE attached clusters \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/connect-to-cluster)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Method #3: give access to external identities when attaching or updating a cluster Method #3 grants access to external identities when you attach or update a cluster.
- When running the gcloud CLI command to register or update a cluster, specify the admin-users and/or admin-groups parameters as follows: gcloud container attached clusters [ register update ] CLUSTER NAME \ --admin-users = principal://iam.googleapis.com/locations/global/workforcePools/ WORKFORCE POOL ID /subject SUBJECT VALUE \ --admin-groups = principalSet://iam.googleapis.com/locations/global/workforcePools/ WORKFORCE POOL ID /group/ GROUP ID Replace the following: CLUSTER NAME : the name of your cluster.
- Set up and apply RBAC rules either automatically or manually: Automatic method : If, when you attached your cluster, you specified Google users in the --admin-users field of the gcloud container attached clusters register command, these users were automatically granted administrator privileges on the cluster.
- When you assign a role to an entity (user, group, or service account), you're giving that entity all the permissions that the role contains.

