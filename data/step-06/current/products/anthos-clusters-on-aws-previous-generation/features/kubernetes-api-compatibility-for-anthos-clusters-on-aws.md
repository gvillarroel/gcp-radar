---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.736Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "Kubernetes API compatibility for Anthos clusters on AWS"
feature_slug: "kubernetes-api-compatibility-for-anthos-clusters-on-aws"
latest_feature_date: "2022-12-13"
deprecation_date: "2022-12-13"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/getting-support"
  - "https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/enterprise/clusters/docs/dataplane-v2"
keywords:
  - "compatibility"
  - "marked"
  - "kubernetes"
  - "version"
---

# Kubernetes API compatibility for Anthos clusters on AWS

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Kubernetes version 1.25 in Anthos clusters on AWS is marked as deprecated due to deprecated APIs; deprecated on 2022-12-13.

## Extended Definition

Kubernetes version 1.25 in Anthos clusters on AWS is marked as deprecated due to deprecated APIs; deprecated on 2022-12-13.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/getting-support](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/getting-support)
- [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/enterprise/clusters/docs/dataplane-v2](https://docs.cloud.google.com/kubernetes-engine/enterprise/clusters/docs/dataplane-v2)

## Supporting Pages

### Get support \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/getting-support](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/getting-support)
- Source ID: `site-docs-root-2`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For the list of the Kubernetes versions that GKE on AWS supports, see Kubernetes version notes .
- For the list of the Kubernetes versions that GKE on AWS supports, see Kubernetes version notes .
- Google's responsibilities Maintain and distribute the GKE on AWS software package including Kubernetes, base images, the AWS integration features, the Ingress controller, the Connect agent, and the anthos-gke command line tool.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE on AWS Resources Send feedback Get support Stay organized with collections Save and categorize content based on your preferences.

### "Dataplane version support \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/enterprise/clusters/docs/dataplane-v2](https://docs.cloud.google.com/kubernetes-engine/enterprise/clusters/docs/dataplane-v2)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Send feedback Dataplane version support Stay organized with collections Save and categorize content based on your preferences.
- Dataplane V2 is an opinionated dataplane for Google Kubernetes Engine (GKE) clusters that is optimized for Kubernetes networking.
- Cluster environment Dataplane V2 Dataplane V1 GKE on Google Cloud Available in GKE version 1.20.6 and later.
- Enabled by default for Autopilot clusters from version 1.23.

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh v1.21\

- URL: [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Release version Release date End-of-life date 1.19 October 31, 2023 Unsupported (July 31, 2024) 1.18 August 3, 2023 Unsupported (June 4, 2024) 1.17 April 4, 2023 Unsupported (February 8, 2024) 1.16 February 21, 2023 Unsupported (December 11, 2023) 1.15 October 25, 2022 Unsupported (August 4, 2023) 1.14 July 20, 2022 Unsupported (April 20, 2023) 1.13 March 30, 2022 Unsupported (February 8, 2023) 1.12 December 9, 2021 Unsupported (October 25, 2022) 1.11 October 6, 2021 Unsupported (July 20, 2022) 1.10 June 24, 2021 Unsupported (March 30, 2022) 1.9 March 4, 2021 Unsupported (December 14, 2021) 1.8 December 15, 2020 Unsupported (December 14, 2021) 1.7 November 3, 2020 Unsupported (December 14, 2021) 1.6 June 30, 2020 Unsupported (March 30, 2021) 1.5 May 20, 2020 Unsupported (February 17, 2021) 1.4 December 20, 2019 Unsupported (September 18, 2020) For more information about our support policies, refer to Getting support .
- Proxy request logging Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises Other GKE Enterprise clusters Traffic logs Access logs Tracing Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises Other GKE Enterprise clusters Cloud Trace Jaeger tracing (allows use of customer-managed Jaeger) Compatible Compatible Compatible Zipkin tracing (allows use of customer-managed Zipkin) Compatible Compatible Compatible Note: You can configure third-party telemetry products (such as Jaeger, Zipkin, and Grafana), but we cannot guarantee future compatibility and Cloud Support cannot provide help managing them.
- Available versions Cloud Service Mesh latest Cloud Service Mesh 1.26 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.23 archive Cloud Service Mesh 1.22 archive Cloud Service Mesh 1.21 archive Cloud Service Mesh 1.20 archive Anthos Service Mesh 1.19 archive Home Documentation Networking Cloud Service Mesh v1.21 Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Ingress Gateway with class: istio HttpRoute using parentRef Mesh traffic Configuring Istio CRDs using the targetRef field including AuthorizationPolicy, RequestAuthentication, Telemetry and WasmPlugin Warning: Microsoft AKS attached and GKE on Azure clusters require an additional step to use the Kubernetes Gateway API.

