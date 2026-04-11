---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.692Z"
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
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached"
keywords:
  - "deploy-time security control"
  - "attach cluster image signing"
  - "container image attestation"
  - "image policy enforcement"
  - "signature validation"
  - "binary auth"
  - "Binary Authorization"
  - "Binauthz"
---

# Binary Authorization support for Anthos attached clusters

Product: Anthos Attached Clusters
Coverage: MEDIUM

## Step 02 Summary

Introduced Binary Authorization as a deploy-time security control to enforce image signing and signature validation for attached clusters.

## Extended Definition

Binary Authorization support for GKE attached clusters allows you to enable Binary Authorization when registering or updating an attached cluster (including EKS and AKS). Google Cloud docs specify that enabling it requires enabling the Binary Authorization API and granting the `roles/binaryauthorization.policyEvaluator` role to the `gke-system/binauthz-agent` Kubernetes service account, with manual policy binding no longer required from Kubernetes 1.28 onward.

## Evidence Summary

The cited pages confirm how to enable Binary Authorization for attached clusters, including required API and IAM role setup and a version-specific note that manual policy binding is not needed starting with Kubernetes 1.28.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached)

## Supporting Pages

### "Enable Binary Authorization \_|\_ GKE attached clusters \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: STRONG
- Re-rank rationale: The page is dedicated to enabling Binary Authorization for attached clusters and provides the required API, IAM permissions, and attach/update command flags to enforce policy evaluation.

Evidence snippets:
- Grant the binaryauthorization.policyEvaluator role to the Kubernetes service account associated with the Binary Authorization agent: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT ID .svc.id.goog [ gke-system/binauthz-agent ] \ --role = "roles/binaryauthorization.policyEvaluator" Enable Binary Authorization when registering or updating a cluster.
- To enable Binary Authorization for GKE attached clusters, perform the following steps: Enable the Binary Authorization API in your project: gcloud services enable binaryauthorization.googleapis.com \ --project = PROJECT ID Replace PROJECT ID with the ID of your Google Cloud project.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE attached clusters Guides Send feedback Enable Binary Authorization Stay organized with collections Save and categorize content based on your preferences.
- Note: Starting with Kubernetes version 1.28, manual policy binding to authorize the service account for Binary Authorization is no longer necessary.

### "Enable Binary Authorization \_|\_ GKE attached clusters \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: STRONG
- Re-rank rationale: The page is a step-by-step guide to enabling Binary Authorization on attached clusters, including API enablement, IAM role binding, and required registration/update flags.

Evidence snippets:
- Grant the binaryauthorization.policyEvaluator role to the Kubernetes service account associated with the Binary Authorization agent: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT ID .svc.id.goog [ gke-system/binauthz-agent ] \ --role = "roles/binaryauthorization.policyEvaluator" Enable Binary Authorization when registering or updating a cluster.
- To enable Binary Authorization for GKE attached clusters, perform the following steps: Enable the Binary Authorization API in your project: gcloud services enable binaryauthorization.googleapis.com \ --project = PROJECT ID Replace PROJECT ID with the ID of your Google Cloud project.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE attached clusters Guides Send feedback Enable Binary Authorization Stay organized with collections Save and categorize content based on your preferences.
- Note: Starting with Kubernetes version 1.28, manual policy binding to authorize the service account for Binary Authorization is no longer necessary.

### GKE attached clusters documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. info EKS clusters (AWS) Attach your EKS cluster Connect to your EKS cluster Install Config Management Install Cloud Service Mesh Install logging for EKS attached clusters Install monitoring for EKS attached clusters Enable Binary Authorization for EKS attached clusters Get support info AKS clusters (Azure) Attach your AKS cluster Connect to your AKS cluster Install Config Management Install Cloud Service Mesh Install logging for AKS attached clusters Install monitoring for AKS attached clusters Enable Binary Authorization for AKS attached clusters Get support info Other cluster distributions Attach other Kubernetes clusters Connect to your cluster Install Config Management Install Cloud Service Mesh Install logging for attached clusters Install monitoring for attached clusters Get support Impact of temporary disconnection from Google Cloud Pricing Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

