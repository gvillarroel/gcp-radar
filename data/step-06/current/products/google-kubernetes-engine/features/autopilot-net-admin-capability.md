---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.795Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Autopilot NET_ADMIN capability"
feature_slug: "autopilot-net-admin-capability"
latest_feature_date: "2023-06-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
keywords:
  - "autopilot"
  - "net"
  - "admin"
  - "capability"
  - "gke"
  - "clusters"
  - "can"
  - "optionally"
---

# Autopilot NET_ADMIN capability

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Autopilot clusters can optionally enable the NET_ADMIN Linux capability for service meshes and other approved use cases.

## Extended Definition

GKE Autopilot clusters can optionally enable the NET_ADMIN Linux capability for service meshes and other approved use cases.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)

## Supporting Pages

### GKE Autopilot security measures \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Autopilot drops the CAP NET ADMIN Linux capability for all containers.
- Harden clusters and workloads If you have specialized isolation or hardening requirements beyond the pre-configured Autopilot measures, consider the following resources: Use case Resources Restrict public access to your cluster endpoint Configure the network isolation of your Autopilot clusters and disable the external endpoint of the cluster control plane.
- Authenticate applications to Google Cloud APIs and services Autopilot clusters let you use Workload Identity Federation for GKE to securely authenticate your workloads to Google Cloud APIs by configuring Kubernetes service accounts to act as IAM service accounts.
- You can optionally apply all of these configurations in your Standard cluster by enabling every Autopilot policy for that cluster , which forces all of the workloads in the Standard cluster to use Autopilot mode.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot clusters in the default configuration aren't impacted , but might be vulnerable if you explicitly set the seccomp Unconfined profile or allow the CAP NET ADMIN capability.
- GKE Autopilot clusters in the default configuration are not impacted, but might be vulnerable if you explicitly set the seccomp Unconfined profile or allow CAP NET ADMIN Clusters using GKE Sandbox aren't impacted.
- GKE Autopilot clusters in the default configuration are not impacted, but might be vulnerable if you explicitly set the seccomp Unconfined profile or allow CAP NET ADMIN Clusters using GKE Sandbox aren't impacted.
- GKE Autopilot clusters in the default configuration are not impacted, but might be vulnerable if you explicitly set the seccomp Unconfined profile or allow CAP NET ADMIN Clusters using GKE Sandbox aren't impacted.

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot Standard Cluster administrators and application operators can get the benefits of Google Kubernetes Engine (GKE) Autopilot, like pricing and pre-configured settings, in Standard mode clusters.
- For more information about the implications of running an Autopilot workload in your Standard clusters, including differences that you might notice when you deploy those workloads, see About Autopilot mode workloads in GKE Standard .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Guides Send feedback Run workloads in Autopilot mode in Standard clusters Stay organized with collections Save and categorize content based on your preferences.
- Modify clusters to meet Autopilot requirements You can use the Google Cloud console to check whether your Standard cluster meets all of the requirements to run workloads in Autopilot mode.

