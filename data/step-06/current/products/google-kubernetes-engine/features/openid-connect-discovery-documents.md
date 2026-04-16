---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.963Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "OpenID Connect discovery documents"
feature_slug: "openid-connect-discovery-documents"
latest_feature_date: "2020-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "openid"
  - "connect"
  - "discovery"
  - "documents"
  - "published"
  - "gke"
  - "clusters"
  - "so"
---

# OpenID Connect discovery documents

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

OpenID Connect discovery documents are published for GKE clusters so other software can understand issued service account tokens.

## Extended Definition

OpenID Connect discovery documents are published for GKE clusters so other software can understand issued service account tokens.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### Harden your cluster's security \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Best practices Restrict access to cluster API discovery Place teams and environments in separate namespaces or clusters Use the principle of least privilege in access policies Use Workload Identity Federation for GKE to access Google Cloud APIs Use groups to manage access Restrict anonymous access to cluster endpoints Restrict access to cluster API discovery Recommended : restrict access to your control plane and nodes from the internet to prevent unintended access to cluster API discovery endpoints.
- For more information, see the following documents: Shared VPC overview Configure clusters with Shared VPC Use separate networks to isolate environments Recommended : use separate Shared VPC networks for staging, test, and production environments.
- By default, Kubernetes creates clusters with a permissive set of default API discovery roles .
- For cluster that were originally created on an earlier GKE version, enable the admission controller: gcloud container clusters update CLUSTER NAME \ --location = LOCATION \ --no-enable-service-externalips To enforce this recommendation in your organization, use the constraints/container.managed.denyServiceExternalIPs managed Organization Policy constraint .

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- For instructions, refer to the following hardening guides: GKE Standard GKE on VMware Google Distributed Cloud Virtual for Bare Metal Update 2022-03-15: GKE on AWS Update 2022-03-15: GKE on Azure Low GCP-2022-008 Published: 2022-02-23 Updated: 2022-04-28 Reference: CVE-2022-23606 , CVE-2022-21655 , CVE-2021-43826 , CVE-2021-43825 , CVE-2021-43824 , CVE-2022-21654 , CVE-2022-21657 , CVE-2022-21656 GKE Description Severity The Envoy project recently discovered a set of vulnerabilities, CVE-2022-23606 , CVE-2022-21655 , CVE-2021-43826 , CVE-2021-43825 , CVE-2021-43824 , CVE-2022-21654 , CVE-2022-21657 , and CVE-2022-21656 which may impact GKE clusters using Anthos Service Mesh , Istio-on-GKE , or custom Istio deployments.
- The following sample manifest describes a BackendConfig resource that uses the v1 API: apiVersion: cloud.google.com/v1 kind: BackendConfig metadata: name: my-backend-config spec: securityPolicy: name: "ca-how-to-security-policy" If you have CI/CD systems or tools which regularly update BackendConfig resources, ensure that you are using the cloud.google.com/v1 API group in those systems Low GCP-2021-022 Published: 2021-09-23 GKE clusters on Description Severity A vulnerability has been discovered in the GKE Enterprise Identity Service (AIS) LDAP module of GKE on VMware versions 1.8 and 1.8.1 where a seed key used in generating keys is predictable.
- For users of GKE on VMware 1.8, upgrade your clusters to the following version: 1.8.2 High GCP-2021-021 Published: 2021-09-22 Reference: CVE-2020-8561 GKE Description Severity A security vulnerability, CVE-2020-8561 , has been discovered in Kubernetes where certain webhooks can be made to redirect kube-apiserver requests to private networks of that API server.
- Upgrade your admin clusters and user clusters to one of the following versions: 1.8.3 1.7.4 High GCP-2021-017 Published: 2021-09-01 Updated: 2021-09-23 Reference: CVE-2021-33909 CVE-2021-33910 GKE Description Severity 2021-09-23 update: Containers running inside of GKE Sandbox are unaffected by this vulnerability for attacks originating inside the container.

### "Kubernetes Engine API \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1beta1.projects.locations.clusters.well-known Methods getOpenid-configuration GET /v1beta1/{parent=projects/ /locations/ /clusters/ }/.well-known/openid-configuration Gets the OIDC discovery document for the cluster.
- REST Resource: v1.projects.locations.clusters.well-known Methods getOpenid-configuration GET /v1/{parent=projects/ /locations/ /clusters/ }/.well-known/openid-configuration Gets the OIDC discovery document for the cluster.
- This service provides the following discovery documents: https://container.googleapis.com/$discovery/rest?version=v1 https://container.googleapis.com/$discovery/rest?version=v1beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- One service may provide multiple discovery documents.

