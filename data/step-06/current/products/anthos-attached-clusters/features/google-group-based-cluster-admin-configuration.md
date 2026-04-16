---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:29.450Z"
product_name: "Anthos Attached Clusters"
product_slug: "anthos-attached-clusters"
feature_name: "Google group-based cluster-admin configuration"
feature_slug: "google-group-based-cluster-admin-configuration"
latest_feature_date: "2023-09-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/unsupported-versions"
keywords:
  - "configuration"
  - "admin"
  - "authorization"
  - "groups"
  - "group"
  - "based"
  - "added"
  - "cluster"
---

# Google group-based cluster-admin configuration

Product: Anthos Attached Clusters
Coverage: MEDIUM

## Step 02 Summary

Added the authorization.admin_groups field so administrators can assign cluster-admin access to Google groups through the management plane.

## Extended Definition

Added the authorization.admin_groups field so administrators can assign cluster-admin access to Google groups through the management plane.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/unsupported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/unsupported-versions)

## Supporting Pages

### Unsupported Kubernetes cluster versions | GKE attached clusters | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/unsupported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/unsupported-versions)
- Source ID: `feature-recovery-http`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- 1.27.0-gke.1 Feature: Added the authorization.admin_groups field.
- This allows users to specify google groups as cluster-admins through the management plane.
- 1.27.0-gke.5 Bug Fix: Fixed an intermittent authorization failure when using Google Groups.
- 1.26.0-gke.8 Bug Fix: Fixed an intermittent authorization failure when using Google Groups.

### "Connect to your AKS cluster \_|\_ GKE attached clusters \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/connect-to-cluster)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following manifest grants the Google Group cluster-admin-team the role of cluster administrator: apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRoleBinding metadata : name : gateway-cluster-admin-group subjects : - kind : Group name : cluster-admin-team@example.com roleRef : kind : ClusterRole name : cluster-admin apiGroup : rbac.authorization.k8s.io Save the manifest to a file and apply it to the cluster by running the following command: kubectl apply -kubeconfig = KUBECONFIG PATH -f FILENAME Replace the following: KUBECONFIG PATH : the path to your kubeconfig file.
- When running the gcloud CLI command to register or update a cluster, specify the admin-users and/or admin-groups parameters as follows: gcloud container attached clusters [ register update ] CLUSTER NAME \ --admin-users = principal://iam.googleapis.com/locations/global/workforcePools/ WORKFORCE POOL ID /subject SUBJECT VALUE \ --admin-groups = principalSet://iam.googleapis.com/locations/global/workforcePools/ WORKFORCE POOL ID /group/ GROUP ID Replace the following: CLUSTER NAME : the name of your cluster.
- Using Google Groups to grant cluster access is more efficient than creating separate authorizations for individual users.
- Groups For groups, you need to assign the gkemulticloud.admin role: gcloud projects add-iam-policy-binding PROJECT ID \ --role = "roles/gkemulticloud.admin" \ --member = "principalSet://iam.googleapis.com/locations/global/workforcePools/ WORKFORCE POOL ID /group/ GROUP ID " Replace the following: PROJECT ID : the ID of your Google Cloud project.

### "Connect to your CNCF conformant cluster \_|\_ GKE attached clusters \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following manifest grants the Google Group cluster-admin-team the role of cluster administrator: apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRoleBinding metadata : name : gateway-cluster-admin-group subjects : - kind : Group name : cluster-admin-team@example.com roleRef : kind : ClusterRole name : cluster-admin apiGroup : rbac.authorization.k8s.io Save the manifest to a file and apply it to the cluster by running the following command: kubectl apply -kubeconfig = KUBECONFIG PATH -f FILENAME Replace the following: KUBECONFIG PATH : the path to your kubeconfig file.
- When running the gcloud CLI command to register or update a cluster, specify the admin-users and/or admin-groups parameters as follows: gcloud container attached clusters [ register update ] CLUSTER NAME \ --admin-users = principal://iam.googleapis.com/locations/global/workforcePools/ WORKFORCE POOL ID /subject SUBJECT VALUE \ --admin-groups = principalSet://iam.googleapis.com/locations/global/workforcePools/ WORKFORCE POOL ID /group/ GROUP ID Replace the following: CLUSTER NAME : the name of your cluster.
- Using Google Groups to grant cluster access is more efficient than creating separate authorizations for individual users.
- Groups For groups, you need to assign the gkemulticloud.admin role: gcloud projects add-iam-policy-binding PROJECT ID \ --role = "roles/gkemulticloud.admin" \ --member = "principalSet://iam.googleapis.com/locations/global/workforcePools/ WORKFORCE POOL ID /group/ GROUP ID " Replace the following: PROJECT ID : the ID of your Google Cloud project.

