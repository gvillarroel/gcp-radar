---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:29.454Z"
product_name: "Anthos Attached Clusters"
product_slug: "anthos-attached-clusters"
feature_name: "Kubernetes resource metadata export for attached clusters"
feature_slug: "kubernetes-resource-metadata-export-for-attached-clusters"
latest_feature_date: "2023-05-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/cluster-prerequisites"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster"
keywords:
  - "resource"
  - "metadata"
  - "sending"
  - "export"
  - "kubernetes"
  - "enabled"
---

# Kubernetes resource metadata export for attached clusters

Product: Anthos Attached Clusters
Coverage: MEDIUM

## Step 02 Summary

Enabled sending Kubernetes resource metadata to Google Cloud to improve console visibility and cluster metrics when Config Monitoring for Ops API is enabled.

## Extended Definition

Enabled sending Kubernetes resource metadata to Google Cloud to improve console visibility and cluster metrics when Config Monitoring for Ops API is enabled.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/cluster-prerequisites](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/cluster-prerequisites)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster)

## Supporting Pages

### "Supported Kubernetes cluster versions \_|\_ GKE attached clusters \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Security Fixes: Fixed CVE-2023-47108 Fixed CVE-2024-28834 Fixed CVE-2024-28835 Fixed CVE-2024-9143 Fixed GHSA-87m9-rv8p-rgmg Fixed GHSA-mh55-gqvf-xfwm 1.30.0-gke.2 Security Fixes: Fixed CVE-2023-47108 Fixed CVE-2024-7348 1.30.0-gke.1 Security Fixes: Fixed CVE-2024-0553 Fixed CVE-2024-0567 Fixed CVE-2024-37370 Fixed CVE-2024-37371 Kubernetes 1.29 1.29.0-gke.9 Security Fixes Fixed CVE-2020-13529 Fixed CVE-2021-33560 Fixed CVE-2022-4899 Fixed CVE-2023-5678 Fixed CVE-2024-0727 Fixed CVE-2024-12133 Fixed CVE-2024-12243 Fixed CVE-2024-2511 Fixed CVE-2024-4741 Fixed CVE-2024-5535 Fixed CVE-2024-9143 Fixed CVE-2025-1094 1.29.0-gke.8 Security Fixes Fixed CVE-2024-10976 Fixed CVE-2024-10977 Fixed CVE-2024-10978 Fixed CVE-2024-10979 1.29.0-gke.7 Breaking Change: GKE attached clusters validate that the following required services are enabled when creating or updating attached clusters: cloudresourcemanager.googleapis.com , monitoring.googleapis.com .
- 1.30.0-gke.3 Breaking Change: GKE attached clusters validate that the following required services are enabled when creating or updating attached clusters: gkeconnect.googleapis.com , gkehub.googleapis.com , kubernetesmetadata.googleapis.com , logging.googleapis.com .
- 1.29.0-gke.6 Breaking Change: GKE attached clusters validate that the following required services are enabled when creating or updating attached clusters: gkeconnect.googleapis.com , gkehub.googleapis.com , kubernetesmetadata.googleapis.com , logging.googleapis.com .
- You also need to enable the Kubernetes Metadata API, which can be enabled in the Google Cloud console .

### "Prerequisites for your AKS attached cluster \_|\_ GKE attached clusters\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/cluster-prerequisites](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/cluster-prerequisites)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set your active Google Cloud project and authenticate your account with the following commands. export PROJECT ID = <your project id> gcloud auth login gcloud config set project $PROJECT ID gcloud auth application-default login Enable the GKE attached clusters API and its required services with the following commands: gcloud services enable gkemulticloud.googleapis.com gcloud services enable gkeconnect.googleapis.com gcloud services enable connectgateway.googleapis.com gcloud services enable cloudresourcemanager.googleapis.com gcloud services enable anthos.googleapis.com gcloud services enable logging.googleapis.com gcloud services enable monitoring.googleapis.com gcloud services enable opsconfigmonitoring.googleapis.com gcloud services enable kubernetesmetadata.googleapis.com Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Logging and monitoring To use logging and monitoring features, your cluster also needs to be able to access the following URLs: logging.googleapis.com monitoring.googleapis.com opsconfigmonitoring.googleapis.com kubernetesmetadata.googleapis.com Google Cloud requirements Before attaching your cluster to the Google Cloud management service, you must install the gcloud CLI, including the Google Cloud CLI command, and grant access to your Google Cloud account to the Google Cloud management service so it can manage your attached cluster resources.
- If your cluster was registered to the fleet using a Google Cloud region, you need to allowlist REGION -gkemulticloud.googleapis.com (for example, us-central1-gkemulticloud.googleapis.com ). oauth2.googleapis.com Authenticate through OAuth token exchange for account access. securetoken.googleapis.com Retrieve refresh tokens for workload identity authorization. storage.googleapis.com Manage object storage and buckets, such as Artifact Registry objects. sts.googleapis.com Exchange Google or third-party credentials for a short-lived access token to Google Cloud resources. www.googleapis.com Authenticate service tokens from incoming Google Cloud service requests.
- Address Purpose .gcr.io Pull images from the Artifact Registry. gkeconnect.googleapis.com Establish the channel used to receive requests from Google Cloud and issue responses. gkemulticloud.googleapis.com Exchange Google or third-party credentials for a short-lived access token to Google Cloud resources.

### "Connect to your CNCF conformant cluster \_|\_ GKE attached clusters \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following manifest grants the Google Group cluster-admin-team the role of cluster administrator: apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRoleBinding metadata : name : gateway-cluster-admin-group subjects : - kind : Group name : cluster-admin-team@example.com roleRef : kind : ClusterRole name : cluster-admin apiGroup : rbac.authorization.k8s.io Save the manifest to a file and apply it to the cluster by running the following command: kubectl apply -kubeconfig = KUBECONFIG PATH -f FILENAME Replace the following: KUBECONFIG PATH : the path to your kubeconfig file.
- Method #1: connect to your attached cluster as a Google user To connect to an attached cluster as a Google user, follow these steps: Enable the connectgateway and cloudresourcemanager APIs with the following command: gcloud services enable --project = PROJECT ID \ connectgateway.googleapis.com \ cloudresourcemanager.googleapis.com Replace PROJECT ID with the ID of your Google Cloud project.
- To authorize Google groups to connect to an attached cluster, follow these steps: Enable the connectgateway and cloudresourcemanager APIs with the following command: gcloud services enable --project = PROJECT ID \ connectgateway.googleapis.com \ cloudresourcemanager.googleapis.com Replace PROJECT ID with the ID of your Google Cloud project.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE attached clusters Guides Send feedback Connect to your CNCF conformant cluster Stay organized with collections Save and categorize content based on your preferences.

