---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.737Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "Supported Kubernetes versions for Anthos clusters on AWS"
feature_slug: "supported-kubernetes-versions-for-anthos-clusters-on-aws"
latest_feature_date: "2022-07-07"
deprecation_date: "2022-07-07"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cluster-autoscaler"
  - "https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster"
  - "https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster"
keywords:
  - "versions"
  - "removed"
  - "kubernetes"
---

# Supported Kubernetes versions for Anthos clusters on AWS

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Kubernetes 1.20 support was removed for Anthos clusters on AWS, and creation or maintenance of Kubernetes 1.19 clusters is no longer supported; Creation and maintenance of Kubernetes 1.18 clusters is no longer supported for Anthos clusters on AWS; deprecated on 2022-07-07.

## Extended Definition

Kubernetes 1.20 support was removed for Anthos clusters on AWS, and creation or maintenance of Kubernetes 1.19 clusters is no longer supported; Creation and maintenance of Kubernetes 1.18 clusters is no longer supported for Anthos clusters on AWS; deprecated on 2022-07-07.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster)
- [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster)

## Supporting Pages

### About cluster autoscaler \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cluster-autoscaler)
- Source ID: `site-iam-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Scale up from zero nodes Starting with the following GKE on AWS versions, the cluster autoscaler supports scaling up node pools from zero nodes: Version 1.29 and later Versions of 1.28 from 1.28.8-gke.800 and later Versions of 1.27 from 1.27.12-gke.800 and later If you're using an earlier version, you need to upgrade your cluster to one of these versions to use this feature.
- Official Kubernetes Cluster Autoscaler documentation Operating criteria The cluster autoscaler makes the following assumptions when resizing a node pool: All replicated Pod objects can be restarted on some other node, possibly causing a brief disruption.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE on AWS Guides Send feedback About cluster autoscaler Stay organized with collections Save and categorize content based on your preferences.
- To enable this feature for existing clusters, update your cluster to a supported version, and then perform a rolling update of your node pools by updating their Kubernetes version.

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh v1.21\

- URL: [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available versions Cloud Service Mesh latest Cloud Service Mesh 1.26 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.23 archive Cloud Service Mesh 1.22 archive Cloud Service Mesh 1.21 archive Cloud Service Mesh 1.20 archive Anthos Service Mesh 1.19 archive Home Documentation Networking Cloud Service Mesh v1.21 Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Ingress Gateway with class: istio HttpRoute using parentRef Mesh traffic Configuring Istio CRDs using the targetRef field including AuthorizationPolicy, RequestAuthentication, Telemetry and WasmPlugin Warning: Microsoft AKS attached and GKE on Azure clusters require an additional step to use the Kubernetes Gateway API.
- For information on configuring load balancers, see the following: Setting up your load balancer for Google Distributed Cloud (software only) for VMware GKE on AWS: Creating a load balancer Expose an ingress gateway using an external load balancer Kubernetes Gateway API (preview) In Cloud Service Mesh v1.20 the Kubernetes Gateway API is available as a public preview.
- If you are using Microsoft AKS attached clusters or GKE on Azure clusters, you must set the following annotation for the gateway resource to configure health checks over TCP: service.beta.kubernetes.io/port 80 health-probe protocol : tcp Otherwise, HTTP traffic won't be accepted.

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh v1.22\

- URL: [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster)
- Source ID: `site-docs-reference-2`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available versions Cloud Service Mesh latest Cloud Service Mesh 1.26 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.23 archive Cloud Service Mesh 1.22 archive Cloud Service Mesh 1.21 archive Cloud Service Mesh 1.20 archive Anthos Service Mesh 1.19 archive Home Documentation Networking Cloud Service Mesh v1.22 Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Ingress Gateway with class: istio HttpRoute using parentRef Mesh traffic Configuring Istio CRDs using the targetRef field including AuthorizationPolicy, RequestAuthentication, Telemetry and WasmPlugin Warning: Microsoft AKS attached and GKE on Azure clusters require an additional step to use the Kubernetes Gateway API.
- For information on configuring load balancers, see the following: Setting up your load balancer for Google Distributed Cloud (software only) for VMware GKE on AWS: Creating a load balancer Expose an ingress gateway using an external load balancer Kubernetes Gateway API (preview) In Cloud Service Mesh v1.20 the Kubernetes Gateway API is available as a public preview.
- If you are using Microsoft AKS attached clusters or GKE on Azure clusters, you must set the following annotation for the gateway resource to configure health checks over TCP: service.beta.kubernetes.io/port 80 health-probe protocol : tcp Otherwise, HTTP traffic won't be accepted.

