---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.794Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "AKS installation and upgrade support"
feature_slug: "aks-installation-and-upgrade-support"
latest_feature_date: "2021-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane"
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-managed"
keywords:
  - "aks"
  - "installation"
  - "and"
  - "upgrade"
  - "mesh"
  - "supports"
  - "on"
  - "microsoft"
---

# AKS installation and upgrade support

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Cloud Service Mesh supports installation and upgrade on Microsoft Azure Kubernetes Service clusters; Cloud Service Mesh supports installation and upgrade on Microsoft Azure Kubernetes Service clusters.

## Extended Definition

Cloud Service Mesh supports installation and upgrade on Microsoft Azure Kubernetes Service clusters; Cloud Service Mesh supports installation and upgrade on Microsoft Azure Kubernetes Service clusters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)

## Supporting Pages

### "Provision a managed Cloud Service Mesh control plane on GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- To disable the managed data plane for a namespace: kubectl annotate --overwrite namespace NAMESPACE \ mesh.cloud.google.com/proxy='{"managed":"false"}' To disable the managed data plane for a pod: kubectl annotate --overwrite pod POD NAME \ mesh.cloud.google.com/proxy='{"managed":"false"}' Enable maintenance windows for the managed data plane If you have a GKE maintenance window configured, active upgrades will commence at the start of the next available maintenance window and continue without pause until all managed pods have been updated (usually 12 hours).
- You can opt out of maintenance window notifications by editing your user preferences: https://console.cloud.google.com/user-preferences/communication?project=${project id} Configure endpoint discovery (only for multi-cluster installations) If your mesh has only one cluster, skip these multi-cluster steps and proceed to Deploy applications or Migrate applications .
- Provision a managed Cloud Service Mesh control plane on GKE Note: This guide only supports Cloud Service Mesh with Istio APIs and does not support Google Cloud APIs.
- Enabling managed Cloud Service Mesh as a default configuration for your fleet and registering clusters to the fleet during cluster creation only supports Mesh CA .

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh \_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Ingress Gateway with class: istio HttpRoute using parentRef Mesh traffic Configuring Istio CRDs using the targetRef field including AuthorizationPolicy, RequestAuthentication, Telemetry and WasmPlugin Warning: Microsoft AKS attached and GKE on Azure clusters require an additional step to use the Kubernetes Gateway API.
- Cloud Service Mesh is supported on the following cluster types: Amazon EKS clusters Microsoft AKS clusters In the following tables: – indicates the feature is enabled by default. – indicates the feature is supported for the platform and can be enabled, as described in Enabling optional features or the feature guide linked in the feature table.
- Network Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises GKE on AWS GKE on Azure Attached clusters Single network Multi-network Notes: For attached clusters, only multi-cluster meshes spanning a single platform (Microsoft AKS, Amazon EKS) are supported at this time.
- For self-installed in-cluster Cloud Service Mesh , Google supports the current and previous two (n-2) minor versions of Cloud Service Mesh.

### "Enable optional features on an in-cluster control plane \_|\_ Cloud Service\

- URL: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- YAML for optional features The following sections provide the YAML to enable optional and supported features. mTLS STRICT mode The global.mtls.enabled configuration was removed from the IstioOperator CR to avoid issues with upgrades and to provide a more flexible installation.
- You can override the default configuration and enable an optional feature by including an overlay file when you install (or upgrade) Cloud Service Mesh.
- For example: apiVersion: install . istio . io / v1alpha1 kind: IstioOperator spec: hub: { private registry url } The following is a list of images for Cloud Service Mesh that you need to mirror to the custom container registry: Install-cni - gke.gcr.io/asm/install-cni:1.28.5-asm.9 Managed Data Plane - gke.gcr.io/asm/mdp:1.28.5-asm.9 Pilot - gke.gcr.io/asm/pilot:1.28.5-asm.9 Proxyv2 - gke.gcr.io/asm/proxyv2:1.28.5-asm.9 Note: If you use a Canonical Service , then you also need to mirror the custom container registries gcr.io/kubebuilder/kube-rbac-proxy:v0.13.1 and gke.gcr.io/asm/canonical-service-controller:1.10.3-asm.16 .
- Only Stackdriver --- apiVersion : install.istio.io/v1alpha1 kind : IstioOperator spec : values : telemetry : enabled : true v2 : enabled : true prometheus : enabled : false stackdriver : enabled : true Stackdriver and Prometheus --- apiVersion : install.istio.io/v1alpha1 kind : IstioOperator spec : values : telemetry : enabled : true v2 : enabled : true prometheus : enabled : true stackdriver : enabled : true Enable an internal load balancer We recommend that you install an injected gateway as described in Install and upgrade gateways to set up an internal load balancer on GKE.

### "Supported features using Istio APIs (managed control plane) \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- Managed control plane supported features Install, upgrade, and rollback Feature Managed (TD) Managed (istiod) Installation on GKE clusters using fleet feature API Upgrades from ASM 1.9 versions that use Mesh CA Direct (skip-level) upgrades from Cloud Service Mesh versions prior to 1.9 (see notes for indirect upgrades) Direct (skip-level) upgrades from Istio OSS (see notes for indirect upgrades) Direct (skip-level) upgrades from Istio-on-GKE add-on (see notes for indirect upgrades) Enabling optional features Note: Indirect migrations and upgrades are supported, meaning that you can follow the standard Cloud Service Mesh upgrade paths through each version until you reach Cloud Service Mesh 1.28 with an in-cluster control plane, then you can migrate to the managed control plane.
- Environments Feature Managed (TD) Managed (istiod) GKE versions currently available in release channels , in one of the supported regions GKE versions currently available in release channels , in one of the supported regions , GKE Autopilot clusters Environments outside of Google Cloud (GKE Enterprise on-premises, GKE Enterprise on other public clouds, Amazon EKS, Microsoft AKS, or other Kubernetes clusters) Scale Refer to the Scalability Limits page Platform environment Feature Managed (TD) Managed (istiod) Single network Multi-network Single-project Multi-project with Shared VPC Multi-cluster deployment Feature Managed (TD) Managed (istiod) Multi-primary Primary-remote Multi-cluster endpoint discovery with declarative API Multi-cluster endpoint discovery with remote secrets Multi-cluster endpoint discovery with declarative API and a simple topology Notes on terminology A multi-primary configuration means that the configuration must be replicated in all clusters.
- Telemetry Metrics Feature Managed (TD) Managed (istiod) Cloud Monitoring (HTTP in-proxy metrics) Cloud Monitoring (TCP in-proxy metrics) Prometheus metrics export to Grafana (Envoy metrics only) Prometheus metrics export to Kiali Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard Istio Telemetry API † Custom adapters/backends, in or out of process Arbitrary telemetry and logging backends † The TRAFFIC DIRECTOR control plane supports a subset of Istio telemetry API used to configure access logs and trace .
- Migrations and upgrades are supported only from in-cluster Cloud Service Mesh versions that are in the Supported versions table and using Mesh CA or Certificate Authority Service.

