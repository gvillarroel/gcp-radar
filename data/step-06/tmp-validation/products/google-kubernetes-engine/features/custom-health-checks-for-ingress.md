---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.408Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Custom health checks for Ingress"
feature_slug: "custom-health-checks-for-ingress"
latest_feature_date: "2020-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster"
keywords:
  - "checks"
  - "health"
  - "generally"
  - "across"
  - "available"
  - "ingress"
  - "custom"
---

# Custom health checks for Ingress

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Custom health checks for Ingress are generally available across all Ingress types, with parameters specified in a Kubernetes BackendConfig.

## Extended Definition

Custom health checks for Ingress are generally available across all Ingress types, with parameters specified in a Kubernetes BackendConfig.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Ingress-nginx custom snippets allows retrieval of ingress-nginx service account tokens and secrets across all namespaces.
- Ingress-nginx custom snippets allows retrieval of ingress-nginx service account tokens and secrets across all namespaces.
- Ingress-nginx custom snippets allows retrieval of ingress-nginx service account tokens and secrets across all namespaces.
- Ingress-nginx custom snippets allows retrieval of ingress-nginx service account tokens and secrets across all namespaces.

### "Set up an external Application Load Balancer with Ingress \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Remarks By default, Ingress performs a periodic health check by making a GET request on the / path to determine the health of the application, and expects a HTTP 200 response.
- It might take a few minutes to update the existing Ingress resource, re-configure the load balancer, and propagate the load balancing rules across the globe.
- In comparison, Google Cloud health checks perform an internal check against the Pod IPs, determining availability at the instance level.
- If you want to check a different path or to expect a different response code, you can use a custom health check path .

### Harden your cluster's security \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
- Source ID: `site-docs-reference-2`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the following documents: Deploy an enterprise developer platform on Google Cloud Best practices for enterprise multi-tenancy Use tags to group Google Cloud resources Recommended : use tags to organize GKE resources for conditional policy enforcement and improved accountability across your teams.
- Best practices Enforce policies across the Google Cloud resource hierarchy Enforce policies during workload admission Enforce policies across the Google Cloud resource hierarchy Recommended : to enforce security practices in your organization, folder, or project, use Organization Policy Service .
- To implement and enforce the best practices in this document across your organization, consider the following services: Security Command Center : automatically check whether your clusters implement many of these best practices and check for other common misconfigurations.
- If you don't enable these network isolation features, treat all API discovery information (especially the schema of CustomResources, APIService definitions, and discovery information hosted by extension API servers) as publicly disclosed.

