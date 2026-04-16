---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.457Z"
product_name: "Managed Anthos Service Mesh"
product_slug: "managed-anthos-service-mesh"
feature_name: "Fleet feature API managed control plane management"
feature_slug: "fleet-feature-api-managed-control-plane-management"
latest_feature_date: "2022-02-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-managed"
  - "https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed"
  - "https://docs.cloud.google.com/service-mesh/docs/check-control-plane-implementation"
keywords:
  - "fleet"
  - "api"
  - "managed"
  - "control"
  - "plane"
  - "management"
  - "anthos"
  - "mesh"
---

# Fleet feature API managed control plane management

Product: Managed Anthos Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Managed Anthos Service Mesh can be set up with automatic control plane management by using the fleet feature API; Managed Anthos Service Mesh can be set up with automatic control plane management by using the fleet feature API.

## Extended Definition

Managed Anthos Service Mesh can be set up with automatic control plane management by using the fleet feature API; Managed Anthos Service Mesh can be set up with automatic control plane management by using the fleet feature API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed)
- [https://docs.cloud.google.com/service-mesh/docs/check-control-plane-implementation](https://docs.cloud.google.com/service-mesh/docs/check-control-plane-implementation)

## Supporting Pages

### "Migrate in-cluster to managed control plane on a new cluster \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- Source ID: `site-docs-reference`
- Final score: 295
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The output is similar to: createTime: '2022-07-06T01:05:39.110120474Z' membershipSpecs: projects/123456789123/locations/global/memberships/cluster-with-csm-membership: mesh: management: MANAGEMENT AUTOMATIC membershipStates: projects/123456789123/locations/global/memberships/cluster-with-csm-membership: servicemesh: controlPlaneManagement: details: - code: REVISION READY details: 'Ready: asm-managed' state: ACTIVE dataPlaneManagement: details: - code: OK details: Service is running. state: ACTIVE state: code: OK description: 'Revision(s) ready for use: asm-managed.' updateTime: '2022-07-06T01:19:24.243993678Z' name: projects/your-project-id/locations/global/features/servicemesh resourceState: state: ACTIVE spec: {} state: state: {} updateTime: '2022-07-06T01:19:27.475885687Z' Deploy Cloud Service Mesh's ingress gateway You will deploy the Cloud Service Mesh's ingress gateway into a separate namespace called asm-ingress .
- Migrate in-cluster to managed control plane on a new cluster This tutorial shows you how to migrate an application from a Google Kubernetes Engine (GKE) cluster using in-cluster Cloud Service Mesh to a new cluster using managed Cloud Service Mesh — Google's fully managed, Istio-compliant service mesh.
- Canary control plane versus canary cluster There are two commonly used strategies for migrations from in-cluster Cloud Service Mesh to managed Cloud Service Mesh: Canary cluster migration : In this strategy, you create a new cluster and then provision managed Cloud Service Mesh on it.
- Enable managed Cloud Service Mesh on the cluster: gcloud container fleet mesh update \ --management automatic \ --memberships cluster-with-csm-membership \ --project PROJECT ID The output is similar to: Waiting for Feature Service Mesh to be updated...done.

### "Supported features using Istio APIs (managed control plane) \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- Source ID: `site-docs-reference`
- Final score: 295
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Managed control plane supported features Install, upgrade, and rollback Feature Managed (TD) Managed (istiod) Installation on GKE clusters using fleet feature API Upgrades from ASM 1.9 versions that use Mesh CA Direct (skip-level) upgrades from Cloud Service Mesh versions prior to 1.9 (see notes for indirect upgrades) Direct (skip-level) upgrades from Istio OSS (see notes for indirect upgrades) Direct (skip-level) upgrades from Istio-on-GKE add-on (see notes for indirect upgrades) Enabling optional features Note: Indirect migrations and upgrades are supported, meaning that you can follow the standard Cloud Service Mesh upgrade paths through each version until you reach Cloud Service Mesh 1.28 with an in-cluster control plane, then you can migrate to the managed control plane.
- Telemetry Metrics Feature Managed (TD) Managed (istiod) Cloud Monitoring (HTTP in-proxy metrics) Cloud Monitoring (TCP in-proxy metrics) Prometheus metrics export to Grafana (Envoy metrics only) Prometheus metrics export to Kiali Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard Istio Telemetry API † Custom adapters/backends, in or out of process Arbitrary telemetry and logging backends † The TRAFFIC DIRECTOR control plane supports a subset of Istio telemetry API used to configure access logs and trace .
- Users whose existing usage is not compatible with the TRAFFIC DIRECTOR implementation without changes will continue to receive the ISTIOD implementation until September 8, 2024. (These users received a Service Announcement.) If any GKE on Google Cloud cluster in your fleet contains an in-cluster Cloud Service Mesh control plane when you provision managed Cloud Service Mesh, you will receive the ISTIOD control plane implementation.
- New fleets that onboard to managed Cloud Service Mesh receive the TRAFFIC DIRECTOR control plane implementation, with certain exceptions: If you are an existing managed Cloud Service Mesh user, you receive the ISTIOD control plane implementation when you onboard a new fleet in the same Google Cloud Organization to managed Cloud Service Mesh, until at least June 30, 2024.

### "Enable optional features on managed control plane \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed)
- Source ID: `site-docs-root`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable optional features on managed control plane Note: This guide only supports Cloud Service Mesh with Istio APIs and does not support Google Cloud APIs.
- If you are using an IstioOperator based configuration today, the Distroless proxy image If you directly onboarded to Cloud Service Mesh with a managed TRAFFIC DIRECTOR control plane implementation , then only the distroless image type is supported.
- Configure the minimum TLS version for your workloads If you directly onboarded to Cloud Service Mesh with a managed TRAFFIC DIRECTOR control plane implementation , then you cannot change this setting.
- When you provision managed Cloud Service Mesh, supported features differ based on the control plane implementation, and certain features are only available via allowlist.

### "Check control plane implementation \_|\_ Cloud Service Mesh \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/check-control-plane-implementation](https://docs.cloud.google.com/service-mesh/docs/check-control-plane-implementation)
- Source ID: `site-docs-reference`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check control plane implementation Run the following command to identify your cluster's control plane implementation: gcloud container fleet mesh describe --project FLEET PROJECT ID The output is similar to the following: ... membershipSpecs: projects/746296320118/locations/us-central1/memberships/demo-cluster-1: mesh: management: MANAGEMENT AUTOMATIC membershipStates: projects/746296320118/locations/us-central1/memberships/demo-cluster-1: servicemesh: controlPlaneManagement: details: - code: REVISION READY details: 'Ready: asm-managed' state: ACTIVE implementation: TRAFFIC DIRECTOR ...
- If you don't see controlPlaneManagement.state: ACTIVE this means you don't have a managed control plane.
- ISTIOD : managed instance of istiod serves as the Cloud Service Mesh control plane.
- The possible values of the implementation are: TRAFFIC DIRECTOR : The core infrastructure of Google Cloud serves as the Cloud Service Mesh control plane.

