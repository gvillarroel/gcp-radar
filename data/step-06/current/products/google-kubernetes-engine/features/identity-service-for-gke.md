---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.852Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Identity Service for GKE"
feature_slug: "identity-service-for-gke"
latest_feature_date: "2022-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview"
keywords:
  - "identity"
  - "gke"
  - "lets"
  - "you"
  - "authenticate"
  - "clusters"
  - "external"
  - "providers"
---

# Identity Service for GKE

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Identity Service for GKE lets you authenticate to clusters with external identity providers that use OpenID Connect; Provides OIDC-based authentication for GKE clusters.

## Extended Definition

Identity Service for GKE lets you authenticate to clusters with external identity providers that use OpenID Connect; Provides OIDC-based authentication for GKE clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- The following sample manifest describes a BackendConfig resource that uses the v1 API: apiVersion: cloud.google.com/v1 kind: BackendConfig metadata: name: my-backend-config spec: securityPolicy: name: "ca-how-to-security-policy" If you have CI/CD systems or tools which regularly update BackendConfig resources, ensure that you are using the cloud.google.com/v1 API group in those systems Low GCP-2021-022 Published: 2021-09-23 GKE clusters on Description Severity A vulnerability has been discovered in the GKE Enterprise Identity Service (AIS) LDAP module of GKE on VMware versions 1.8 and 1.8.1 where a seed key used in generating keys is predictable.
- Medium GKE clusters on Description Severity Updated: 2021-12-22 The command for GKE in the following section should use gcloud beta instead of the gcloud command. gcloud beta container clusters update –no-enable-service-externalips Updated: 2021-12-15 For GKE, the following mitigation is now available: Starting in GKE version 1.21, services with ExternalIPs are blocked by a DenyServiceExternalIPs admission controller that is enabled by default for new clusters.
- Medium GKE clusters on Description Severity Updated: 2021-12-22 The command for GKE in the following section should use gcloud beta instead of the gcloud command. gcloud beta container clusters update –no-enable-service-externalips Updated: 2021-12-15 For GKE, the following mitigation is now available: Starting in GKE version 1.21, services with ExternalIPs are blocked by a DenyServiceExternalIPs admission controller that is enabled by default for new clusters.
- GKE Description Severity Updated: 2021-12-22 The command for GKE in the following section should use gcloud beta instead of the gcloud command. gcloud beta container clusters update –no-enable-service-externalips Updated: 2021-12-15 For GKE, the following mitigation is now available: Starting in GKE version 1.21, services with ExternalIPs are blocked by a DenyServiceExternalIPs admission controller that is enabled by default for new clusters.

### "About Workload Identity Federation for GKE \_|\_ GKE security \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity)
- Source ID: `site-iam-reference`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- All Pods in a specific cluster principalSet://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog/kubernetes.cluster/https://container.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /clusters/ CLUSTER NAME Replace the following: PROJECT NUMBER : your numerical project number.
- Identity sameness If the metadata in your principal identifier is the same for workloads in multiple clusters that share a workload identity pool because they belong to the same Google Cloud project, IAM identifies those workloads as the same.
- Workload Identity Federation for GKE lets you use IAM policies to grant Kubernetes workloads in your GKE cluster access to specific Google Cloud APIs without needing manual configuration or less secure methods like service account key files.
- Autopilot Standard This document describes Workload Identity Federation for GKE, including how it works, how enabling it affects your GKE clusters, and how to grant roles to Kubernetes entities in Identity and Access Management policies.

### GKE security overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- By contrast, Google Cloud service accounts are part of a Google Cloud project, and can easily be granted permissions both within clusters and to Google Cloud project clusters themselves, as well as to any Google Cloud resource using Identity and Access Management (IAM) .
- Node service account In Standard clusters, your Pods can also authenticate to Google Cloud using the credentials of the service account used by the node's Compute Engine virtual machine (VM).
- For example, multi-tenant clusters such as software-as-a-service (SaaS) providers often execute unknown code submitted by their users.
- In Standard clusters, Pods have access to instance metadata unless you manually enable Workload Identity Federation for GKE.

