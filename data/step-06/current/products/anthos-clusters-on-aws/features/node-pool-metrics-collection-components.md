---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.362Z"
product_name: "Anthos clusters on AWS"
product_slug: "anthos-clusters-on-aws"
feature_name: "Node pool metrics collection components"
feature_slug: "node-pool-metrics-collection-components"
latest_feature_date: "2023-09-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/service-discovery-dns"
keywords:
  - "konnectivity-agent"
  - "cilium-operator"
  - "cilium-agent"
  - "gke-metrics-agent"
  - "node-pool telemetry"
  - "fluentbit-gke"
  - "coredns"
  - "metrics components"
---

# Node pool metrics collection components

Product: Anthos clusters on AWS
Coverage: LOW

## Step 02 Summary

Anthos clusters on AWS now collect node-pool metrics for additional components including gke-metrics-agent, cilium-agent, cilium-operator, coredns, fluentbit-gke, kubelet, and konnectivity-agent.

## Extended Definition

This feature is described as node-pool telemetry collection for additional Anthos on AWS components, but the provided source only directly confirms one relevant component. In the cited GKE on AWS documentation, CoreDNS is confirmed to run in-cluster as a Deployment in the kube-system namespace and to serve DNS for the cluster. There is no explicit evidence in the provided excerpt that the full set of components (gke-metrics-agent, cilium-agent, cilium-operator, fluentbit-gke, kubelet, or konnectivity-agent) are part of metric collection.

## Evidence Summary

The cited page supports only the CoreDNS deployment and DNS-role details for GKE on AWS, which partially overlaps with the named component list but does not verify the broader node-pool metrics-collection scope.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/service-discovery-dns](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/service-discovery-dns)

## Supporting Pages

### Service discovery and DNS overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/service-discovery-dns](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/service-discovery-dns)
- Source ID: `site-iam-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- If the cache can't resolve the DNS request, the cache forwards the request to either: CoreDNS for an internal name— for example foo.bar.svc.cluster.local The Amazon DNS server , for an external name— for example example.net What's next Read about AWS DNS support for your VPC .
- The CoreDNS deployment has a Service that groups the CoreDNS Pods and gives them a single IP address.
- CoreDNS runs as a redundant, scaled Deployment in the kube-system namespace.
- CoreDNS GKE on AWS uses CoreDNS to resolve DNS names within clusters.

