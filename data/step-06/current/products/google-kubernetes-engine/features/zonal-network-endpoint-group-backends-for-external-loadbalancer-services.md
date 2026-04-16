---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.706Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Zonal Network Endpoint Group backends for external LoadBalancer Services"
feature_slug: "zonal-network-endpoint-group-backends-for-external-loadbalancer-services"
latest_feature_date: "2025-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview"
keywords:
  - "zonal"
  - "network"
  - "endpoint"
  - "group"
  - "backends"
  - "external"
  - "loadbalancer"
  - "backend"
---

# Zonal Network Endpoint Group backends for external LoadBalancer Services

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

New backend service-based external LoadBalancer Services use zonal Network Endpoint Group backends by default.

## Extended Definition

New backend service-based external LoadBalancer Services use zonal Network Endpoint Group backends by default.

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
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- The following sample manifest describes a BackendConfig resource that uses the v1 API: apiVersion: cloud.google.com/v1 kind: BackendConfig metadata: name: my-backend-config spec: securityPolicy: name: "ca-how-to-security-policy" If you have CI/CD systems or tools which regularly update BackendConfig resources, ensure that you are using the cloud.google.com/v1 API group in those systems Low GCP-2021-022 Published: 2021-09-23 GKE clusters on Description Severity A vulnerability has been discovered in the GKE Enterprise Identity Service (AIS) LDAP module of GKE on VMware versions 1.8 and 1.8.1 where a seed key used in generating keys is predictable.
- To review your Azure configuration to check whether there are any public IP addresses configured on your GKE on Azure cluster, run the following command: az network public-ip list -g CLUSTER RESOURCE GROUP NAME -o tsv Disallow SSH to the cluster nodes Even though GKE on Azure doesn't allow traffic on port 22 on any node by default, customers can update NetworkSecurityGroup rules to node pools, enabling inbound SSH traffic from the public internet.
- For example: Only allow the creation of Services with no ExternalIP or an ExternalIP of 203.0.113.1: apiVersion: constraints.gatekeeper.sh/v1beta1 kind: K8sExternalIPs metadata: name: external-ips spec: match: kinds: - apiGroups: [""] kinds: ["Service"] parameters: allowedIPs: - "203.0.113.1" Or install an admission controller to prevent the use of ExternalIPs.
- For example: Only allow the creation of Services with no ExternalIP or an ExternalIP of 203.0.113.1: apiVersion: constraints.gatekeeper.sh/v1beta1 kind: K8sExternalIPs metadata: name: external-ips spec: match: kinds: - apiGroups: [""] kinds: ["Service"] parameters: allowedIPs: - "203.0.113.1" Or install an admission controller to prevent the use of ExternalIPs.

### Explore GKE networking documentation and use cases \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Challenge: Expose a service privately to consumers Scenario: a backend service, like a database or API, needs to be accessible to consumers in other VPC networks without exposing it to the public internet or dealing with VPC peering complexities.
- Challenge: Route traffic to different types of applications Scenario: you need to make sure that other services and users can reach different types of applications, such as private backends and public HTTP(S) applications.
- Solution: use GKE multi-cluster Services (MCS) to create a global DNS name and route traffic automatically to healthy backends.
- GKE provisions a regional external passthrough Network Load Balancer with a public IP address.

### Explore GKE networking documentation and use cases \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases)
- Source ID: `site-iam-reference`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Challenge: Expose a service privately to consumers Scenario: a backend service, like a database or API, needs to be accessible to consumers in other VPC networks without exposing it to the public internet or dealing with VPC peering complexities.
- Challenge: Route traffic to different types of applications Scenario: you need to make sure that other services and users can reach different types of applications, such as private backends and public HTTP(S) applications.
- Solution: use GKE multi-cluster Services (MCS) to create a global DNS name and route traffic automatically to healthy backends.
- GKE provisions a regional external passthrough Network Load Balancer with a public IP address.

