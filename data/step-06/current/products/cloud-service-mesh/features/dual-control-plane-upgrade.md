---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.855Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Dual control plane upgrade"
feature_slug: "dual-control-plane-upgrade"
latest_feature_date: "2020-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane"
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-managed"
  - "https://docs.cloud.google.com/service-mesh/docs/security-bulletins"
keywords:
  - "dual"
  - "control"
  - "plane"
  - "upgrade"
  - "anthos"
  - "mesh"
  - "supports"
  - "upgrading"
---

# Dual control plane upgrade

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Anthos Service Mesh supports upgrading from ASM 1.5 to ASM 1.6 without downtime by using a dual control plane upgrade; Anthos Service Mesh supports upgrading from ASM 1.5 to ASM 1.6 without downtime by using a dual control plane upgrade.

## Extended Definition

Anthos Service Mesh supports upgrading from ASM 1.5 to ASM 1.6 without downtime by using a dual control plane upgrade; Anthos Service Mesh supports upgrading from ASM 1.5 to ASM 1.6 without downtime by using a dual control plane upgrade.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- [https://docs.cloud.google.com/service-mesh/docs/security-bulletins](https://docs.cloud.google.com/service-mesh/docs/security-bulletins)

## Supporting Pages

### "Provision a managed Cloud Service Mesh control plane on GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- Role name Role ID Grant location Description Anthos Service Mesh Service Agent roles/anthosservicemesh.serviceAgent Fleet project Mesh Managed Control Plane Service Agent (legacy) roles/meshcontrolplane.serviceAgent Fleet project This is a legacy role that was part of older installations of Cloud Service Mesh.
- Provision a managed Cloud Service Mesh control plane on GKE Note: This guide only supports Cloud Service Mesh with Istio APIs and does not support Google Cloud APIs.
- Verify the control plane has been provisioned After a few minutes, verify that the control plane status is ACTIVE : gcloud container fleet mesh describe --project FLEET PROJECT ID The output is similar to: ... membershipSpecs : projects / 746296320118 / locations / us - central1 / memberships / demo - cluster - 1 : mesh : management : MANAGEMENT AUTOMATIC membershipStates : projects / 746296320118 / locations / us - central1 / memberships / demo - cluster - 1 : servicemesh : controlPlaneManagement : details : - code : REVISION READY details : ' Ready : asm - managed ' state : ACTIVE implementation : ISTIOD TRAFFIC DIRECTOR dataPlaneManagement : details : - code : OK details : Service is running . state : ACTIVE state : code : OK description : ' Revision ( s ) ready for use : asm - managed . ' ...
- To disable the managed data plane for a namespace: kubectl annotate --overwrite namespace NAMESPACE \ mesh.cloud.google.com/proxy='{"managed":"false"}' To disable the managed data plane for a pod: kubectl annotate --overwrite pod POD NAME \ mesh.cloud.google.com/proxy='{"managed":"false"}' Enable maintenance windows for the managed data plane If you have a GKE maintenance window configured, active upgrades will commence at the start of the next available maintenance window and continue without pause until all managed pods have been updated (usually 12 hours).

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh \_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- For managed Cloud Service Mesh with an ISTIOD control plane implementation , Google supports the current Cloud Service Mesh versions available in each release channel .
- For managed Cloud Service Mesh with a TRAFFIC DIRECTOR control plane implementation , Google always supports this control plane.
- In-cluster control plane supported features This page describes features that are supported in Cloud Service Mesh 1.28.5 with an in-cluster control plane.
- To see the supported features for Cloud Service Mesh 1.28.5 with a managed control plane instead, see Managed control plane .

### "Supported features using Istio APIs (managed control plane) \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Managed control plane supported features Install, upgrade, and rollback Feature Managed (TD) Managed (istiod) Installation on GKE clusters using fleet feature API Upgrades from ASM 1.9 versions that use Mesh CA Direct (skip-level) upgrades from Cloud Service Mesh versions prior to 1.9 (see notes for indirect upgrades) Direct (skip-level) upgrades from Istio OSS (see notes for indirect upgrades) Direct (skip-level) upgrades from Istio-on-GKE add-on (see notes for indirect upgrades) Enabling optional features Note: Indirect migrations and upgrades are supported, meaning that you can follow the standard Cloud Service Mesh upgrade paths through each version until you reach Cloud Service Mesh 1.28 with an in-cluster control plane, then you can migrate to the managed control plane.
- Telemetry Metrics Feature Managed (TD) Managed (istiod) Cloud Monitoring (HTTP in-proxy metrics) Cloud Monitoring (TCP in-proxy metrics) Prometheus metrics export to Grafana (Envoy metrics only) Prometheus metrics export to Kiali Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard Istio Telemetry API † Custom adapters/backends, in or out of process Arbitrary telemetry and logging backends † The TRAFFIC DIRECTOR control plane supports a subset of Istio telemetry API used to configure access logs and trace .
- Base Images Feature Managed (TD) Managed (istiod) Distroless proxy image † † Cloud Service Mesh with a managed (TD) control plane only supports the distroless image type.
- Service entry Feature Managed (TD) Managed (istiod) ServiceEntry v1beta1 † † The TRAFFIC DIRECTOR control plane implementation does not support following fields and values in fields: workloadSelector field endpoints[].network field endpoints[].locality field endpoints[].weight field endpoints[].serviceAccount field DNS ROUND ROBIN value in resolution field MESH INTERNAL value in location field Unix domain socket address in endpoints[].address field subjectAltNames field Two or more endpoints[] entries if resolution field has DNS value Destination rule Feature Managed (TD) Managed (istiod) DestinationRule v1beta1 † † The TRAFFIC DIRECTOR control plane implementation does not support following fields. trafficPolicy.loadBalancer.localityLbSetting field trafficPolicy.tunnel field trafficPolicy.tls.credentialName field trafficPolicy.portLevelSettings[].tls.credentialName field Additionally, the TRAFFIC DIRECTOR control plane implementation requires that the destination rule defining subsets is in the same namespace and cluster with the Kubernetes service or ServiceEntry.

### Security bulletins \_|\_ Cloud Service Mesh \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/security-bulletins](https://docs.cloud.google.com/service-mesh/docs/security-bulletins)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Mitigation If you are running standalone Cloud Service Mesh , upgrade your cluster to one of the following patched versions: If you're using Anthos Service Mesh 1.14, upgrade to v1.14.4-asm.2 If you're using Anthos Service Mesh 1.13, upgrade to v1.13.8-asm.4 If you're using Anthos Service Mesh 1.12, upgrade to v1.12.9-asm.3 If you are running managed Cloud Service Mesh , your system will be automatically updated within the next few days.
- If you are running in-cluster Cloud Service Mesh, you must upgrade your cluster to one of the following patched versions: 1.20.3-asm.4 1.19.7-asm.3 1.18.7-asm.4 1.17.8-asm.20 If you're using Anthos Service Mesh v1.17 or earlier, your release has reached end of life and is no longer supported.
- If you are running in-cluster Cloud Service Mesh, you must upgrade your cluster to one of the following patched versions: 1.20.3-asm.4 1.19.7-asm.3 1.18.7-asm.4 1.17.8-asm.20 If you're using Anthos Service Mesh v1.17 or earlier, your release has reached end of life and is no longer supported.
- If you are running in-cluster Cloud Service Mesh, you must upgrade your cluster to one of the following patched versions: 1.20.3-asm.4 1.19.7-asm.3 1.18.7-asm.4 1.17.8-asm.20 If you're using Anthos Service Mesh v1.17 or earlier, your release has reached end of life and is no longer supported.

