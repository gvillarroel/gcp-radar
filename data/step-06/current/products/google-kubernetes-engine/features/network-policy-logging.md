---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.935Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Network policy logging"
feature_slug: "network-policy-logging"
latest_feature_date: "2021-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview"
keywords:
  - "network"
  - "policy"
  - "logging"
  - "generally"
  - "available"
  - "requires"
  - "dataplane"
  - "v2"
---

# Network policy logging

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Network Policy Logging is generally available and requires Dataplane V2; Network policy logging records network policy enforcement events for GKE clusters that use Dataplane V2.

## Extended Definition

Network Policy Logging is generally available and requires Dataplane V2; Network policy logging records network policy enforcement events for GKE clusters that use Dataplane V2.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview)

## Supporting Pages

### GKE Dataplane V2 \_|\_ GKE networking \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2)
- Source ID: `site-docs-reference-2`
- Final score: 193
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Operations When you create a cluster with GKE Dataplane V2, network policy logging is built-in.
- Network policy enforcement without GKE Dataplane V2 See Using network policy enforcement for instructions to enable network policy enforcement in clusters that don't use GKE Dataplane V2.
- This lets GKE Dataplane V2 process network packets in the kernel more efficiently and report annotated actions back to user space for logging.
- GKE Dataplane V2 and NetworkPolicy GKE Dataplane V2 is implemented using Cilium .

### Explore GKE networking documentation and use cases \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Challenge: Use a modern, secure dataplane, and provision clusters with the new dataplane Scenarios: The enterprise requires high performance and built-in policy enforcement to support demanding workloads and a zero-trust security posture.
- Solution: use GKE Dataplane V2, which is eBPF-based and provides high performance and built-in network policy enforcement.
- Solution: enable network policy logging to record allowed and denied connections.
- For more information, see Use network policy logging .

### Explore GKE networking documentation and use cases \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases)
- Source ID: `site-iam-reference`
- Final score: 183
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Challenge: Use a modern, secure dataplane, and provision clusters with the new dataplane Scenarios: The enterprise requires high performance and built-in policy enforcement to support demanding workloads and a zero-trust security posture.
- Solution: use GKE Dataplane V2, which is eBPF-based and provides high performance and built-in network policy enforcement.
- Solution: enable network policy logging to record allowed and denied connections.
- For more information, see Use network policy logging .

