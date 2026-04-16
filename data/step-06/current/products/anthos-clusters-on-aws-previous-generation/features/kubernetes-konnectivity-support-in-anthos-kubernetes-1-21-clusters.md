---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.741Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "Kubernetes Konnectivity support in Anthos Kubernetes 1.21 clusters"
feature_slug: "kubernetes-konnectivity-support-in-anthos-kubernetes-1-21-clusters"
latest_feature_date: "2021-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster"
  - "https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/authentication"
keywords:
  - "konnectivity"
  - "control"
  - "tool"
  - "kubernetes"
---

# Kubernetes Konnectivity support in Anthos Kubernetes 1.21 clusters

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Anthos Kubernetes 1.21 clusters now support the Kubernetes Konnectivity tool for control plane and node communication.

## Extended Definition

Anthos Kubernetes 1.21 clusters now support the Kubernetes Konnectivity tool for control plane and node communication.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster)
- [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/authentication](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/authentication)

## Supporting Pages

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh v1.21\

- URL: [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Ingress Gateway with class: istio HttpRoute using parentRef Mesh traffic Configuring Istio CRDs using the targetRef field including AuthorizationPolicy, RequestAuthentication, Telemetry and WasmPlugin Warning: Microsoft AKS attached and GKE on Azure clusters require an additional step to use the Kubernetes Gateway API.
- For information on configuring load balancers, see the following: Setting up your load balancer for Google Distributed Cloud (software only) for VMware GKE on AWS: Creating a load balancer Expose an ingress gateway using an external load balancer Kubernetes Gateway API (preview) In Cloud Service Mesh v1.20 the Kubernetes Gateway API is available as a public preview.
- Compatible – indicates the feature or third-party tool will integrate or work with Cloud Service Mesh, but is not fully supported by Google Cloud Support and a feature guide is not available. – indicates either the feature isn't available or it isn't supported in Cloud Service Mesh 1.21.5.
- If you are using Microsoft AKS attached clusters or GKE on Azure clusters, you must set the following annotation for the gateway resource to configure health checks over TCP: service.beta.kubernetes.io/port 80 health-probe protocol : tcp Otherwise, HTTP traffic won't be accepted.

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh v1.22\

- URL: [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Ingress Gateway with class: istio HttpRoute using parentRef Mesh traffic Configuring Istio CRDs using the targetRef field including AuthorizationPolicy, RequestAuthentication, Telemetry and WasmPlugin Warning: Microsoft AKS attached and GKE on Azure clusters require an additional step to use the Kubernetes Gateway API.
- For information on configuring load balancers, see the following: Setting up your load balancer for Google Distributed Cloud (software only) for VMware GKE on AWS: Creating a load balancer Expose an ingress gateway using an external load balancer Kubernetes Gateway API (preview) In Cloud Service Mesh v1.20 the Kubernetes Gateway API is available as a public preview.
- Compatible – indicates the feature or third-party tool will integrate or work with Cloud Service Mesh, but is not fully supported by Google Cloud Support and a feature guide is not available. – indicates either the feature isn't available or it isn't supported in Cloud Service Mesh 1.22.8.
- If you are using Microsoft AKS attached clusters or GKE on Azure clusters, you must set the following annotation for the gateway resource to configure health checks over TCP: service.beta.kubernetes.io/port 80 health-probe protocol : tcp Otherwise, HTTP traffic won't be accepted.

### Authentication overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/authentication](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/authentication)
- Source ID: `site-iam-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The kubectl tool connects to the Kubernetes API on your cluster's control plane.
- Kubernetes API authentication You can use the kubectl command-line tool to perform cluster operations such as deploying a workload and configuring a load balancer.
- To manage access control on the Kubernetes API, you use role-based access control (RBAC).
- Kubernetes API access control The Kubernetes API lets you manage Kubernetes objects .

