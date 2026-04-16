---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.806Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Google-managed data plane"
feature_slug: "google-managed-data-plane"
latest_feature_date: "2021-08-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane"
  - "https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview"
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-managed"
  - "https://docs.cloud.google.com/service-mesh/docs/security-bulletins"
keywords:
  - "managed"
  - "plane"
  - "automatically"
  - "upgrades"
  - "proxies"
  - "in"
  - "anthos"
  - "mesh"
---

# Google-managed data plane

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Google-managed data plane automatically upgrades data plane proxies in managed Anthos Service Mesh; Google-managed data plane automatically upgrades data plane proxies in managed Anthos Service Mesh.

## Extended Definition

Google-managed data plane automatically upgrades data plane proxies in managed Anthos Service Mesh; Google-managed data plane automatically upgrades data plane proxies in managed Anthos Service Mesh.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview](https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- [https://docs.cloud.google.com/service-mesh/docs/security-bulletins](https://docs.cloud.google.com/service-mesh/docs/security-bulletins)

## Supporting Pages

### "Provision a managed Cloud Service Mesh control plane on GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- Source ID: `site-docs-root`
- Final score: 290
- Re-rank relevance: N/A

Evidence snippets:
- To disable the managed data plane for a namespace: kubectl annotate --overwrite namespace NAMESPACE \ mesh.cloud.google.com/proxy='{"managed":"false"}' To disable the managed data plane for a pod: kubectl annotate --overwrite pod POD NAME \ mesh.cloud.google.com/proxy='{"managed":"false"}' Enable maintenance windows for the managed data plane If you have a GKE maintenance window configured, active upgrades will commence at the start of the next available maintenance window and continue without pause until all managed pods have been updated (usually 12 hours).
- Replace the example value with the revision label of your previous control plane. kubectl label namespace NAMESPACE istio-injection- istio.io/rev=asm-191-1 --overwrite Restart the Pods to trigger re-injection so the proxies have the previous version: kubectl rollout restart deployment -n NAMESPACE The managed control plane will automatically scale to zero and not use any resource when not in use.
- Role name Role ID Grant location Description Anthos Service Mesh Service Agent roles/anthosservicemesh.serviceAgent Fleet project Mesh Managed Control Plane Service Agent (legacy) roles/meshcontrolplane.serviceAgent Fleet project This is a legacy role that was part of older installations of Cloud Service Mesh.
- With the managed data plane feature enabled, the sidecar proxies and injected gateways are actively and automatically updated in conjunction with the managed control plane by restarting workloads to re-inject new versions of the proxy.

### "Managed control plane for continuing customers \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview](https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are an Anthos Service Mesh user, the next steps for the control plane in your existing deployment depend on whether you use the managed control plane or the in-cluster control plane.
- Managed control plane for continuing customers This document is for you if you're a continuing Anthos Service Mesh customer using the managed control plane or in-cluster control plane.
- Anthos Service Mesh offered two control planes: a managed control plane and an in-cluster control plane.
- The managed control plane used in Anthos Service Mesh is dedicated to a single cluster.

### "Supported features using Istio APIs (managed control plane) \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Managed control plane supported features Install, upgrade, and rollback Feature Managed (TD) Managed (istiod) Installation on GKE clusters using fleet feature API Upgrades from ASM 1.9 versions that use Mesh CA Direct (skip-level) upgrades from Cloud Service Mesh versions prior to 1.9 (see notes for indirect upgrades) Direct (skip-level) upgrades from Istio OSS (see notes for indirect upgrades) Direct (skip-level) upgrades from Istio-on-GKE add-on (see notes for indirect upgrades) Enabling optional features Note: Indirect migrations and upgrades are supported, meaning that you can follow the standard Cloud Service Mesh upgrade paths through each version until you reach Cloud Service Mesh 1.28 with an in-cluster control plane, then you can migrate to the managed control plane.
- Service entry Feature Managed (TD) Managed (istiod) ServiceEntry v1beta1 † † The TRAFFIC DIRECTOR control plane implementation does not support following fields and values in fields: workloadSelector field endpoints[].network field endpoints[].locality field endpoints[].weight field endpoints[].serviceAccount field DNS ROUND ROBIN value in resolution field MESH INTERNAL value in location field Unix domain socket address in endpoints[].address field subjectAltNames field Two or more endpoints[] entries if resolution field has DNS value Destination rule Feature Managed (TD) Managed (istiod) DestinationRule v1beta1 † † The TRAFFIC DIRECTOR control plane implementation does not support following fields. trafficPolicy.loadBalancer.localityLbSetting field trafficPolicy.tunnel field trafficPolicy.tls.credentialName field trafficPolicy.portLevelSettings[].tls.credentialName field Additionally, the TRAFFIC DIRECTOR control plane implementation requires that the destination rule defining subsets is in the same namespace and cluster with the Kubernetes service or ServiceEntry.
- EnvoyFilter Feature Managed (TD) Managed (istiod) EnvoyFilter v1alpha3 † † Refer to Dataplane Extensibility page for supported fields and configurable extensions MeshConfig Feature Managed (TD) Managed (istiod) DiscoverySelectors clusterLocal LocalityLB § ExtensionProviders § CACert ImageType - distroless § OutboundTrafficPolicy § defaultProviders.accessLogging defaultProviders.tracing defaultConfig.tracing.stackdriver § accessLogFile § ProxyConfig Feature Managed (TD) Managed (istiod) HTTP/1.0 support (ISTIO META NETWORK) Image selection (distroless or base image) † Kubernetes native sidecar (ENABLE NATIVE SIDECARS) † Distroless image is used for the injection.
- Telemetry Metrics Feature Managed (TD) Managed (istiod) Cloud Monitoring (HTTP in-proxy metrics) Cloud Monitoring (TCP in-proxy metrics) Prometheus metrics export to Grafana (Envoy metrics only) Prometheus metrics export to Kiali Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard Istio Telemetry API † Custom adapters/backends, in or out of process Arbitrary telemetry and logging backends † The TRAFFIC DIRECTOR control plane supports a subset of Istio telemetry API used to configure access logs and trace .

### Security bulletins \_|\_ Cloud Service Mesh \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/security-bulletins](https://docs.cloud.google.com/service-mesh/docs/security-bulletins)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Mitigation If you are running standalone Cloud Service Mesh , upgrade your cluster to one of the following patched versions: If you're using Anthos Service Mesh 1.14, upgrade to v1.14.4-asm.2 If you're using Anthos Service Mesh 1.13, upgrade to v1.13.8-asm.4 If you're using Anthos Service Mesh 1.12, upgrade to v1.12.9-asm.3 If you are running managed Cloud Service Mesh , your system will be automatically updated within the next few days.
- These versions support configuring the Envoy proxies in the system with more normalization options: 1.9.5-asm.2 1.8.6-asm.3 1.7.8-asm.8 Note: The rollout of the Cloud Service Mesh Managed Control Plane (available only in 1.9.x versions) will complete in the next few days.
- Check if your clusters are impacted Your cluster is impacted if it uses Cloud Service Mesh patch versions earlier than 1.17.4 1.16.6 1.15.7 Mitigation Upgrade your cluster to one of the following patched versions: 1.17.5-asm.0 1.16.7-asm.0 1.15.7-asm.23 If you are running managed Cloud Service Mesh , your system will be automatically updated within the next few days.
- Check if your clusters are impacted Your cluster is impacted if it uses Cloud Service Mesh patch versions earlier than 1.17.4 1.16.6 1.15.7 Mitigation Upgrade your cluster to one of the following patched versions: 1.17.5-asm.0 1.16.7-asm.0 1.15.7-asm.23 If you are running managed Cloud Service Mesh , your system will be automatically updated within the next few days.

