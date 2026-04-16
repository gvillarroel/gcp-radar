---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.662Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "SCTP support on GKE Dataplane V2"
feature_slug: "sctp-support-on-gke-dataplane-v2"
latest_feature_date: "2026-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview"
keywords:
  - "sctp"
  - "gke"
  - "dataplane"
  - "v2"
  - "supports"
  - "traffic"
  - "pod"
  - "communication"
---

# SCTP support on GKE Dataplane V2

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Dataplane V2 supports SCTP traffic for Pod-to-Pod and Pod-to-Service communication on Standard clusters.

## Extended Definition

GKE Dataplane V2 supports SCTP traffic for Pod-to-Pod and Pod-to-Service communication on Standard clusters.

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
- Final score: 127
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GKE Dataplane V2 technical specifications GKE Dataplane V2 supports clusters with the following specifications: Specification GKE Google Distributed Cloud Edge Google Distributed Cloud Hosted Number of nodes per cluster 7,500 500 500 Number of Pods per cluster 200,000 15,000 27,500 Number of Pods behind one Service 10,000 1,000 1,000 Number of Cluster IP Services 10,000 1,000 1,000 Number of LoadBalancer Services per cluster 750 500 1,000 GKE Dataplane V2 maintains a Service map to keep track of which Services refer to which Pods as their backends.
- Deploy workloads with SCTP You can deploy workloads that use the Stream Control Transmission Protocol (SCTP) on clusters that are enabled with GKE Dataplane V2.
- This is because Pods aren't allowed to directly access the Service's IP address and traffic must go through Dataplane V2's routing mechanisms.
- This happens because Retina's eBPF programs can disrupt how GKE Dataplane V2 routes traffic.

### Explore GKE networking documentation and use cases \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Observe your traffic using GKE Dataplane V2 observability .
- For more information, see Observe your traffic using GKE Dataplane V2 observability .
- Challenge: Use a modern, secure dataplane, and provision clusters with the new dataplane Scenarios: The enterprise requires high performance and built-in policy enforcement to support demanding workloads and a zero-trust security posture.
- Challenge: Prevent IP address exhaustion Scenario: your application's complexity and usage are expected to grow, so you need to design a network that can scale to handle the increased traffic and support Pod, service, and node growth.

### Explore GKE networking documentation and use cases \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases)
- Source ID: `site-iam-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Observe your traffic using GKE Dataplane V2 observability .
- For more information, see Observe your traffic using GKE Dataplane V2 observability .
- Challenge: Use a modern, secure dataplane, and provision clusters with the new dataplane Scenarios: The enterprise requires high performance and built-in policy enforcement to support demanding workloads and a zero-trust security posture.
- Challenge: Prevent IP address exhaustion Scenario: your application's complexity and usage are expected to grow, so you need to design a network that can scale to handle the increased traffic and support Pod, service, and node growth.

