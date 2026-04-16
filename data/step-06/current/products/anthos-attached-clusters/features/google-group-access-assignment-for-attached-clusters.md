---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:29.453Z"
product_name: "Anthos Attached Clusters"
product_slug: "anthos-attached-clusters"
feature_name: "Google-group access assignment for attached clusters"
feature_slug: "google-group-access-assignment-for-attached-clusters"
latest_feature_date: "2023-05-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/connect-to-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/connect-to-cluster"
keywords:
  - "assignment"
  - "access"
  - "group"
  - "control"
  - "enabled"
  - "cluster"
---

# Google-group access assignment for attached clusters

Product: Anthos Attached Clusters
Coverage: MEDIUM

## Step 02 Summary

Enabled attached cluster access control using Google groups instead of per-user access starting with version 1.26.

## Extended Definition

Enabled attached cluster access control using Google groups instead of per-user access starting with version 1.26.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/connect-to-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/connect-to-cluster)

## Supporting Pages

### "Connect to your CNCF conformant cluster \_|\_ GKE attached clusters \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This step is only necessary if you want to grant users or groups the ability to create or update clusters; it's not required for simply accessing a cluster .
- In other words, you grant a Google group access to a cluster and any users belonging to that Google group have access to the cluster.
- Using Google Groups to grant cluster access is more efficient than creating separate authorizations for individual users.
- For example, the following manifest grants the Google Group cluster-admin-team the role of cluster administrator: apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRoleBinding metadata : name : gateway-cluster-admin-group subjects : - kind : Group name : cluster-admin-team@example.com roleRef : kind : ClusterRole name : cluster-admin apiGroup : rbac.authorization.k8s.io Save the manifest to a file and apply it to the cluster by running the following command: kubectl apply -kubeconfig = KUBECONFIG PATH -f FILENAME Replace the following: KUBECONFIG PATH : the path to your kubeconfig file.

### "Connect to your AKS cluster \_|\_ GKE attached clusters \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/connect-to-cluster)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This step is only necessary if you want to grant users or groups the ability to create or update clusters; it's not required for simply accessing a cluster .
- In other words, you grant a Google group access to a cluster and any users belonging to that Google group have access to the cluster.
- Using Google Groups to grant cluster access is more efficient than creating separate authorizations for individual users.
- For example, the following manifest grants the Google Group cluster-admin-team the role of cluster administrator: apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRoleBinding metadata : name : gateway-cluster-admin-group subjects : - kind : Group name : cluster-admin-team@example.com roleRef : kind : ClusterRole name : cluster-admin apiGroup : rbac.authorization.k8s.io Save the manifest to a file and apply it to the cluster by running the following command: kubectl apply -kubeconfig = KUBECONFIG PATH -f FILENAME Replace the following: KUBECONFIG PATH : the path to your kubeconfig file.

### "Connect to your EKS attached cluster \_|\_ GKE attached clusters \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/connect-to-cluster)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This step is only necessary if you want to grant users or groups the ability to create or update clusters; it's not required for simply accessing a cluster .
- In other words, you grant a Google group access to a cluster and any users belonging to that Google group have access to the cluster.
- Using Google Groups to grant cluster access is more efficient than creating separate authorizations for individual users.
- For example, the following manifest grants the Google Group cluster-admin-team the role of cluster administrator: apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRoleBinding metadata : name : gateway-cluster-admin-group subjects : - kind : Group name : cluster-admin-team@example.com roleRef : kind : ClusterRole name : cluster-admin apiGroup : rbac.authorization.k8s.io Save the manifest to a file and apply it to the cluster by running the following command: kubectl apply -kubeconfig = KUBECONFIG PATH -f FILENAME Replace the following: KUBECONFIG PATH : the path to your kubeconfig file.

