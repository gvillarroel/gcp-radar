---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.200Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE control plane authority"
feature_slug: "gke-control-plane-authority"
latest_feature_date: "2024-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks"
keywords:
  - "controls"
  - "authority"
  - "visibility"
  - "security"
  - "control"
  - "plane"
  - "adds"
---

# GKE control plane authority

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE control plane authority adds visibility, security controls, and customization for the GKE control plane.

## Extended Definition

GKE control plane authority adds visibility, security controls, and customization for the GKE control plane.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks)

## Supporting Pages

### "About GKE control plane authority \_|\_ GKE security \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-control-plane-authority)
- Source ID: `site-iam-reference`
- Final score: 300
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- These capabilities are ideal if you have requirements like the following: You operate in a highly regulated industry like finance, healthcare, or government with specific compliance requirements You handle sensitive data that has strict security and encryption requirements You want enhanced visibility over GKE to improve your confidence when running critical workloads You have to meet specific compliance or auditing requirements related to data encryption, software integrity, or logging You have highly-sensitive workloads that process critical data, and you want visibility into the encryption of and access to that data You want to enforce custom security policies that meet specific organizational or regulatory requirements You want an enhanced level of transparency and visibility into your GKE environments, especially related to actions that Google Cloud takes in the control plane Benefits of GKE control plane authority GKE control plane authority capabilities are ideal in highly regulated environments that have strict security policies or strict audit requirements.
- About GKE control plane authority features In GKE, Google Cloud fully manages the security configuration of the control plane, including encryption of storage at rest , and configuring the keys and certificate authorities (CAs) that sign and verify credentials in your clusters.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE security Send feedback About GKE control plane authority Stay organized with collections Save and categorize content based on your preferences.
- You don't need to use GKE control plane authority to use the following resources: Control plane VM image integrity : GKE adds detailed logs for node VM creation and boot events to Cloud Logging.

### Control plane security \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security)
- Source ID: `site-iam-reference`
- Final score: 264
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Additionally, if your organization has strict compliance or policy requirements related to the control plane, GKE control plane authority is a set of features that provides you with enhanced visibility and control over specific aspects of the control plane, including the following: Run your own CAs and keys for identity issuance using Cloud KMS and CA Service.
- GKE includes built-in security features, such as a security-hardened OS, robust architecture and isolation, secure control plane access, security for the etcd- or Spanner-based cluster state database, certificate authority and cluster trust, and vulnerability and patch management.
- This document assumes that you know about the following: GKE cluster architecture This document is for security specialists who want to understand how Google manages GKE control plane components and the security measures in place to effectively assess risk and ensure the security of your GKE deployments.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE security Send feedback Control plane security Stay organized with collections Save and categorize content based on your preferences.

### "Encrypt etcd and control plane boot disks \_|\_ GKE security \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/encrypt-etcd-control-plane-disks)
- Source ID: `site-iam-reference`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Usage with other GKE control plane authority features GKE control plane authority provides the following features related to self-managed keys that you must enable at the same time when you create a cluster: Encrypt control plane components (this page) Run your own certificate authorities (CAs) and keys You can only enable these features when you create a new GKE cluster.
- You must create your cluster in one of the following regions: asia-east1 asia-northeast1 asia-southeast1 europe-west1 europe-west4 us-central1 us-central2 us-east1 us-east4 us-east5 us-south1 us-west1 us-west3 us-west4 Note: Separately from GKE control plane authority, you can use Confidential mode for Hyperdisk Balanced for your node disks .
- This page describes one part of a set of optional control plane features in GKE that lets you perform tasks like verifying your control plane security posture or configuring encryption and credential signing in the control plane using keys that you manage.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE security Send feedback Encrypt etcd and control plane boot disks Stay organized with collections Save and categorize content based on your preferences.

