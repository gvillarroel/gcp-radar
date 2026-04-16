---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.809Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "CNI support for Google-managed control plane"
feature_slug: "cni-support-for-google-managed-control-plane"
latest_feature_date: "2021-06-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane"
  - "https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview"
  - "https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed"
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-managed"
keywords:
  - "cni"
  - "for"
  - "managed"
  - "control"
  - "plane"
  - "enables"
  - "anthos"
  - "mesh"
---

# CNI support for Google-managed control plane

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

CNI support for Google-managed control plane enables Anthos Service Mesh deployments that use the Container Network Interface; CNI support for Google-managed control plane enables Anthos Service Mesh deployments that use the Container Network Interface.

## Extended Definition

CNI support for Google-managed control plane enables Anthos Service Mesh deployments that use the Container Network Interface; CNI support for Google-managed control plane enables Anthos Service Mesh deployments that use the Container Network Interface.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview](https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview)
- [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)

## Supporting Pages

### "Provision a managed Cloud Service Mesh control plane on GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- Source ID: `site-docs-root`
- Final score: 313
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verify the control plane has been provisioned After a few minutes, verify that the control plane status is ACTIVE : gcloud container fleet mesh describe --project FLEET PROJECT ID The output is similar to: ... membershipSpecs : projects / 746296320118 / locations / us - central1 / memberships / demo - cluster - 1 : mesh : management : MANAGEMENT AUTOMATIC membershipStates : projects / 746296320118 / locations / us - central1 / memberships / demo - cluster - 1 : servicemesh : controlPlaneManagement : details : - code : REVISION READY details : ' Ready : asm - managed ' state : ACTIVE implementation : ISTIOD TRAFFIC DIRECTOR dataPlaneManagement : details : - code : OK details : Service is running . state : ACTIVE state : code : OK description : ' Revision ( s ) ready for use : asm - managed . ' ...
- Role name Role ID Grant location Description Anthos Service Mesh Service Agent roles/anthosservicemesh.serviceAgent Fleet project Mesh Managed Control Plane Service Agent (legacy) roles/meshcontrolplane.serviceAgent Fleet project This is a legacy role that was part of older installations of Cloud Service Mesh.
- Find all the control plane revisions: kubectl get controlplanerevisions -n istio-system Change the annotation: kubectl annotate --overwrite controlplanerevision CONTROL PLANE REVISION NAME -n istio-system mesh.cloud.google.com/proxy = '{"managed":"false"}' Repeat this step for each control plane revision.
- Grant service accounts in the fleet project permission to access the cluster project: gcloud projects add-iam-policy-binding " CLUSTER PROJECT ID " \ --member "serviceAccount:service- FLEET PROJECT NUMBER @gcp-sa-servicemesh.iam.gserviceaccount.com" \ --role roles/anthosservicemesh.serviceAgent Enable the Mesh API on the cluster's project: gcloud services enable mesh.googleapis.com \ --project = CLUSTER PROJECT ID Configure Certificate Authority Service (Optional) If your service mesh deployment requires Certificate Authority Service (CA Service), then follow Configure Certificate Authority Service for managed Cloud Service Mesh to enable it for your fleet.

### "Managed control plane for continuing customers \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview](https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview)
- Source ID: `site-docs-root-2`
- Final score: 296
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are an Anthos Service Mesh user, the next steps for the control plane in your existing deployment depend on whether you use the managed control plane or the in-cluster control plane.
- Managed control plane for continuing customers This document is for you if you're a continuing Anthos Service Mesh customer using the managed control plane or in-cluster control plane.
- Control plane for new meshes Starting on July 1, 2024, most existing users of the managed istiod control plane implementation began to receive the updated managed control plane with Google's globally available implementation - the Traffic Director (TD) control plane, in new fleets.
- Anthos Service Mesh offered two control planes: a managed control plane and an in-cluster control plane.

### "Enable optional features on managed control plane \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed)
- Source ID: `site-docs-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure the minimum TLS version for your workloads If you directly onboarded to Cloud Service Mesh with a managed TRAFFIC DIRECTOR control plane implementation , then you cannot change this setting.
- If you are using an IstioOperator based configuration today, the Distroless proxy image If you directly onboarded to Cloud Service Mesh with a managed TRAFFIC DIRECTOR control plane implementation , then only the distroless image type is supported.
- End user authentication You can configure managed Cloud Service Mesh user authentication for browser-based end-user authentication and access control to your deployed workloads.
- When you provision managed Cloud Service Mesh, supported features differ based on the control plane implementation, and certain features are only available via allowlist.

### "Supported features using Istio APIs (managed control plane) \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Managed control plane supported features Install, upgrade, and rollback Feature Managed (TD) Managed (istiod) Installation on GKE clusters using fleet feature API Upgrades from ASM 1.9 versions that use Mesh CA Direct (skip-level) upgrades from Cloud Service Mesh versions prior to 1.9 (see notes for indirect upgrades) Direct (skip-level) upgrades from Istio OSS (see notes for indirect upgrades) Direct (skip-level) upgrades from Istio-on-GKE add-on (see notes for indirect upgrades) Enabling optional features Note: Indirect migrations and upgrades are supported, meaning that you can follow the standard Cloud Service Mesh upgrade paths through each version until you reach Cloud Service Mesh 1.28 with an in-cluster control plane, then you can migrate to the managed control plane.
- Telemetry Metrics Feature Managed (TD) Managed (istiod) Cloud Monitoring (HTTP in-proxy metrics) Cloud Monitoring (TCP in-proxy metrics) Prometheus metrics export to Grafana (Envoy metrics only) Prometheus metrics export to Kiali Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard Istio Telemetry API † Custom adapters/backends, in or out of process Arbitrary telemetry and logging backends † The TRAFFIC DIRECTOR control plane supports a subset of Istio telemetry API used to configure access logs and trace .
- Supported features using Istio APIs (managed control plane) This page describes the supported features and limitations for Cloud Service Mesh using TRAFFIC DIRECTOR or ISTIOD as the control plane and the differences between each implementation.
- Service entry Feature Managed (TD) Managed (istiod) ServiceEntry v1beta1 † † The TRAFFIC DIRECTOR control plane implementation does not support following fields and values in fields: workloadSelector field endpoints[].network field endpoints[].locality field endpoints[].weight field endpoints[].serviceAccount field DNS ROUND ROBIN value in resolution field MESH INTERNAL value in location field Unix domain socket address in endpoints[].address field subjectAltNames field Two or more endpoints[] entries if resolution field has DNS value Destination rule Feature Managed (TD) Managed (istiod) DestinationRule v1beta1 † † The TRAFFIC DIRECTOR control plane implementation does not support following fields. trafficPolicy.loadBalancer.localityLbSetting field trafficPolicy.tunnel field trafficPolicy.tls.credentialName field trafficPolicy.portLevelSettings[].tls.credentialName field Additionally, the TRAFFIC DIRECTOR control plane implementation requires that the destination rule defining subsets is in the same namespace and cluster with the Kubernetes service or ServiceEntry.

