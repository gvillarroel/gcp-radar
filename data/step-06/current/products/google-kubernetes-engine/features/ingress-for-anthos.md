---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.981Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Ingress for Anthos"
feature_slug: "ingress-for-anthos"
latest_feature_date: "2020-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview"
keywords:
  - "ingress"
  - "anthos"
  - "provides"
  - "shared"
  - "internet"
  - "facing"
  - "across"
  - "multiple"
---

# Ingress for Anthos

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Ingress for Anthos provides shared internet-facing Ingress across multiple GKE clusters and Google Cloud regions.

## Extended Definition

Ingress for Anthos provides shared internet-facing Ingress across multiple GKE clusters and Google Cloud regions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- You can use the following tools to check inbound traffic to your resources running in Google Cloud: VPC Flow Logs for visibility into network throughput and performance Cloud Logging to search and analyze logging data and events from Google Cloud services and applications configured to send logs Firewall Rules Logging to audit, verify, and analyze the effects of your firewall rules Security Command Center for visibility into security findings indicating suspicious network activity Your application logs High GDC (VMware) Description Severity A security issue was discovered that impacts Multi-Cluster Gateway (MCG), a GKE feature that allows customers to load balance traffic across multiple clusters.
- Check if your GKE clusters are using ingress-nginx by using one of the following commands: Check an individual cluster: kubectl get pods --all-namespaces --selector app.kubernetes.io/name = ingress-nginx Check multiple clusters at once using a Cloud Asset Inventory resource search query : gcloud asset search-all-resources \ --scope = 'organizations/ ORGANIZATION ID ' \ --asset-types = 'k8s.io/Pod' \ --query = 'labels."app.kubernetes.io/name"="ingress-nginx"' Replace ORGANIZATION ID with your organization resource ID.
- None GKE on AWS Description Severity Note: This section applies to both the current and previous generation of GKE on AWS A security issue was discovered that impacts Multi-Cluster Gateway (MCG), a GKE feature that allows customers to load balance traffic across multiple clusters.
- If you have configured your Anthos on Bare Metal Kubernetes clusters to have direct access to the Internet or other untrusted networks, we recommend working with your firewall administrator to block or limit that access.

### Explore GKE networking documentation and use cases \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Use case: Achieve high availability across multiple clusters In this use case, you're an SRE running workloads for an ecommerce company in multiple GKE clusters across different regions to improve reliability.
- A ClusterIP service provides a stable virtual IP address and DNS name, load-balanced across Pods.
- Challenge: Expose a service privately to consumers Scenario: a backend service, like a database or API, needs to be accessible to consumers in other VPC networks without exposing it to the public internet or dealing with VPC peering complexities.
- GKE's implementation of Gateway API provides a powerful and standardized way to manage this kind of north-south traffic, supporting advanced features like path-based routing, header matching, and traffic splitting.

### Explore GKE networking documentation and use cases \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Use case: Achieve high availability across multiple clusters In this use case, you're an SRE running workloads for an ecommerce company in multiple GKE clusters across different regions to improve reliability.
- A ClusterIP service provides a stable virtual IP address and DNS name, load-balanced across Pods.
- Challenge: Expose a service privately to consumers Scenario: a backend service, like a database or API, needs to be accessible to consumers in other VPC networks without exposing it to the public internet or dealing with VPC peering complexities.
- GKE's implementation of Gateway API provides a powerful and standardized way to manage this kind of north-south traffic, supporting advanced features like path-based routing, header matching, and traffic splitting.

