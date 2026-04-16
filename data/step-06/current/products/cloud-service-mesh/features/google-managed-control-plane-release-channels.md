---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.807Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Google-managed control plane release channels"
feature_slug: "google-managed-control-plane-release-channels"
latest_feature_date: "2021-06-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane"
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-managed"
  - "https://docs.cloud.google.com/service-mesh/docs/security-bulletins"
  - "https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview"
keywords:
  - "managed"
  - "control"
  - "plane"
  - "release"
  - "channels"
  - "let"
  - "users"
  - "choose"
---

# Google-managed control plane release channels

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Google-managed control plane release channels let users choose a managed upgrade cadence that balances stability and feature availability; Google-managed control plane release channels let users choose a managed upgrade cadence that balances stability and feature availability.

## Extended Definition

Google-managed control plane release channels let users choose a managed upgrade cadence that balances stability and feature availability; Google-managed control plane release channels let users choose a managed upgrade cadence that balances stability and feature availability.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- [https://docs.cloud.google.com/service-mesh/docs/security-bulletins](https://docs.cloud.google.com/service-mesh/docs/security-bulletins)
- [https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview](https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview)

## Supporting Pages

### "Provision a managed Cloud Service Mesh control plane on GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- Use the following instructions: Run the following command to locate the available release channels: kubectl -n istio-system get controlplanerevision The output is similar to the following: NAME AGE asm-managed-rapid 6d7h NOTE: If two control plane revisions appear in the list above, remove one.
- Use the following instructions: Run the following command to locate the available release channels: kubectl -n istio-system get controlplanerevision The output is similar to the following: NAME AGE asm-managed-rapid 6d7h NOTE: If two control plane revisions appear in the list above, remove one.
- Delete old control plane After you install and confirm that all namespaces use the Google-managed control plane, you can delete the old control plane. kubectl delete Service,Deployment,HorizontalPodAutoscaler,PodDisruptionBudget istiod -n istio-system --ignore-not-found=true If you used istioctl kube-inject instead of automatic injection, or if you installed additional gateways, check the metrics for the control plane, and verify that the number of connected endpoints is zero.
- Verify the control plane has been provisioned After a few minutes, verify that the control plane status is ACTIVE : gcloud container fleet mesh describe --project FLEET PROJECT ID The output is similar to: ... membershipSpecs : projects / 746296320118 / locations / us - central1 / memberships / demo - cluster - 1 : mesh : management : MANAGEMENT AUTOMATIC membershipStates : projects / 746296320118 / locations / us - central1 / memberships / demo - cluster - 1 : servicemesh : controlPlaneManagement : details : - code : REVISION READY details : ' Ready : asm - managed ' state : ACTIVE implementation : ISTIOD TRAFFIC DIRECTOR dataPlaneManagement : details : - code : OK details : Service is running . state : ACTIVE state : code : OK description : ' Revision ( s ) ready for use : asm - managed . ' ...

### "Supported features using Istio APIs (managed control plane) \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Users whose existing usage is not compatible with the TRAFFIC DIRECTOR implementation without changes will continue to receive the ISTIOD implementation until September 8, 2024. (These users received a Service Announcement.) If any GKE on Google Cloud cluster in your fleet contains an in-cluster Cloud Service Mesh control plane when you provision managed Cloud Service Mesh, you will receive the ISTIOD control plane implementation.
- Service entry Feature Managed (TD) Managed (istiod) ServiceEntry v1beta1 † † The TRAFFIC DIRECTOR control plane implementation does not support following fields and values in fields: workloadSelector field endpoints[].network field endpoints[].locality field endpoints[].weight field endpoints[].serviceAccount field DNS ROUND ROBIN value in resolution field MESH INTERNAL value in location field Unix domain socket address in endpoints[].address field subjectAltNames field Two or more endpoints[] entries if resolution field has DNS value Destination rule Feature Managed (TD) Managed (istiod) DestinationRule v1beta1 † † The TRAFFIC DIRECTOR control plane implementation does not support following fields. trafficPolicy.loadBalancer.localityLbSetting field trafficPolicy.tunnel field trafficPolicy.tls.credentialName field trafficPolicy.portLevelSettings[].tls.credentialName field Additionally, the TRAFFIC DIRECTOR control plane implementation requires that the destination rule defining subsets is in the same namespace and cluster with the Kubernetes service or ServiceEntry.
- Environments Feature Managed (TD) Managed (istiod) GKE versions currently available in release channels , in one of the supported regions GKE versions currently available in release channels , in one of the supported regions , GKE Autopilot clusters Environments outside of Google Cloud (GKE Enterprise on-premises, GKE Enterprise on other public clouds, Amazon EKS, Microsoft AKS, or other Kubernetes clusters) Scale Refer to the Scalability Limits page Platform environment Feature Managed (TD) Managed (istiod) Single network Multi-network Single-project Multi-project with Shared VPC Multi-cluster deployment Feature Managed (TD) Managed (istiod) Multi-primary Primary-remote Multi-cluster endpoint discovery with declarative API Multi-cluster endpoint discovery with remote secrets Multi-cluster endpoint discovery with declarative API and a simple topology Notes on terminology A multi-primary configuration means that the configuration must be replicated in all clusters.
- Managed control plane supported features Install, upgrade, and rollback Feature Managed (TD) Managed (istiod) Installation on GKE clusters using fleet feature API Upgrades from ASM 1.9 versions that use Mesh CA Direct (skip-level) upgrades from Cloud Service Mesh versions prior to 1.9 (see notes for indirect upgrades) Direct (skip-level) upgrades from Istio OSS (see notes for indirect upgrades) Direct (skip-level) upgrades from Istio-on-GKE add-on (see notes for indirect upgrades) Enabling optional features Note: Indirect migrations and upgrades are supported, meaning that you can follow the standard Cloud Service Mesh upgrade paths through each version until you reach Cloud Service Mesh 1.28 with an in-cluster control plane, then you can migrate to the managed control plane.

### Security bulletins \_|\_ Cloud Service Mesh \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/security-bulletins](https://docs.cloud.google.com/service-mesh/docs/security-bulletins)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- These versions support configuring the Envoy proxies in the system with more normalization options: 1.9.5-asm.2 1.8.6-asm.3 1.7.8-asm.8 Note: The rollout of the Cloud Service Mesh Managed Control Plane (available only in 1.9.x versions) will complete in the next few days.
- Mitigation Update your clusters to the latest Cloud Service Mesh versions: 1.9.5-asm.2 1.8.6-asm.3 1.7.8-asm.8 Note: The rollout of the Cloud Service Mesh Managed Control Plane (available only in 1.9.x versions) will complete in the next few days.
- Check if your clusters are impacted Your cluster is impacted if it uses an in-cluster Cloud Service Mesh patch version earlier than: 1.27.4-asm.1 1.26.7-asm.1 1.25.6-asm.1 This CVE does not affect Cloud Service Mesh with a managed control plane.
- Check if your clusters are impacted Your cluster is impacted if it uses an in-cluster Cloud Service Mesh patch version earlier than: 1.27.4-asm.1 1.26.7-asm.1 1.25.6-asm.1 This CVE does not affect Cloud Service Mesh with a managed control plane.

### "Managed control plane for continuing customers \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview](https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Control plane for new meshes Starting on July 1, 2024, most existing users of the managed istiod control plane implementation began to receive the updated managed control plane with Google's globally available implementation - the Traffic Director (TD) control plane, in new fleets.
- Users whose existing usage of managed Cloud Service Mesh with the istiod control plane implementation was not compatible with the Traffic Director implementation without changes continued to get the istiod implementation until September 8, 2024.
- If you onboard a new fleet to managed Cloud Service Mesh, and this fleet is not in a Google Cloud Organization or it is in a new Google Cloud Organization, then you will get the new managed control plane with the TD implementation from the Cloud Service Mesh launch date.
- If you use the managed control plane, with some exceptions your existing fleets will be migrated to the new control plane, referred to in the Cloud Service Mesh as managed control plane (Traffic Director, or TD, implementation).

