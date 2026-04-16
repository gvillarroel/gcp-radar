---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.806Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Cloud DNS for GKE upstream nameserver support"
feature_slug: "cloud-dns-for-gke-upstream-nameserver-support"
latest_feature_date: "2023-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/quickstarts/ray-gpu-cluster"
keywords:
  - "dns"
  - "gke"
  - "upstream"
  - "nameserver"
  - "now"
  - "supports"
  - "nameservers"
---

# Cloud DNS for GKE upstream nameserver support

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Cloud DNS for GKE now supports upstream nameservers.

## Extended Definition

Cloud DNS for GKE now supports upstream nameservers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/quickstarts/ray-gpu-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/quickstarts/ray-gpu-cluster)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- CVE-2021-43826 (CVSS score 6.1, Medium): Use-after-free when tunneling TCP over HTTP, if downstream disconnects during upstream connection establishment.
- CVE-2021-43826 (CVSS score 6.1, Medium): Use-after-free when tunneling TCP over HTTP, if downstream disconnects during upstream connection establishment.
- Since the v1 BackendConfig supports all the same fields as v1beta1 and makes no breaking changes, the API field can be updated transparently.
- CVE-2023-27491: Attackers can send specifically crafted HTTP/2 or HTTP/3 requests to trigger parsing errors on HTTP/1 upstream service.

### "Quickstart: Deploy GPU-accelerated Ray for AI workloads on GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/quickstarts/ray-gpu-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/quickstarts/ray-gpu-cluster)
- Source ID: `site-docs-reference-required-4`
- Final score: 48
- Re-rank relevance: N/A

### Backup for GKE documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

