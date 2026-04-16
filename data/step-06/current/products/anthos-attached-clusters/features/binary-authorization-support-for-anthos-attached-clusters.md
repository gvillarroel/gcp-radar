---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:29.449Z"
product_name: "Anthos Attached Clusters"
product_slug: "anthos-attached-clusters"
feature_name: "Binary Authorization support for Anthos attached clusters"
feature_slug: "binary-authorization-support-for-anthos-attached-clusters"
latest_feature_date: "2023-09-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster"
keywords:
  - "introduced"
  - "deploy"
  - "time"
  - "authorization"
  - "binary"
---

# Binary Authorization support for Anthos attached clusters

Product: Anthos Attached Clusters
Coverage: MEDIUM

## Step 02 Summary

Introduced Binary Authorization as a deploy-time security control to enforce image signing and signature validation for attached clusters.

## Extended Definition

Introduced Binary Authorization as a deploy-time security control to enforce image signing and signature validation for attached clusters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster)

## Supporting Pages

### "Enable Binary Authorization \_|\_ GKE attached clusters \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Grant the binaryauthorization.policyEvaluator role to the Kubernetes service account associated with the Binary Authorization agent: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT ID .svc.id.goog [ gke-system/binauthz-agent ] \ --role = "roles/binaryauthorization.policyEvaluator" Enable Binary Authorization when registering or updating a cluster.
- To enable Binary Authorization for GKE attached clusters, perform the following steps: Enable the Binary Authorization API in your project: gcloud services enable binaryauthorization.googleapis.com \ --project = PROJECT ID Replace PROJECT ID with the ID of your Google Cloud project.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE attached clusters Guides Send feedback Enable Binary Authorization Stay organized with collections Save and categorize content based on your preferences.
- Note: Starting with Kubernetes version 1.28, manual policy binding to authorize the service account for Binary Authorization is no longer necessary.

### "Enable Binary Authorization \_|\_ GKE attached clusters \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Grant the binaryauthorization.policyEvaluator role to the Kubernetes service account associated with the Binary Authorization agent: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT ID .svc.id.goog [ gke-system/binauthz-agent ] \ --role = "roles/binaryauthorization.policyEvaluator" Enable Binary Authorization when registering or updating a cluster.
- To enable Binary Authorization for GKE attached clusters, perform the following steps: Enable the Binary Authorization API in your project: gcloud services enable binaryauthorization.googleapis.com \ --project = PROJECT ID Replace PROJECT ID with the ID of your Google Cloud project.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE attached clusters Guides Send feedback Enable Binary Authorization Stay organized with collections Save and categorize content based on your preferences.
- Note: Starting with Kubernetes version 1.28, manual policy binding to authorize the service account for Binary Authorization is no longer necessary.

### "Connect to your CNCF conformant cluster \_|\_ GKE attached clusters \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following manifest grants the Google Group cluster-admin-team the role of cluster administrator: apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRoleBinding metadata : name : gateway-cluster-admin-group subjects : - kind : Group name : cluster-admin-team@example.com roleRef : kind : ClusterRole name : cluster-admin apiGroup : rbac.authorization.k8s.io Save the manifest to a file and apply it to the cluster by running the following command: kubectl apply -kubeconfig = KUBECONFIG PATH -f FILENAME Replace the following: KUBECONFIG PATH : the path to your kubeconfig file.
- Using Google Groups to grant cluster access is more efficient than creating separate authorizations for individual users.
- Method #2, however, saves you time because you only need to create RBAC rules for three Google groups.
- For details, see Using RBAC Authorization .

