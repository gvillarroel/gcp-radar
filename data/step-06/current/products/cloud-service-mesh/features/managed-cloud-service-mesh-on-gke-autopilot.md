---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.797Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Managed Cloud Service Mesh on GKE Autopilot"
feature_slug: "managed-cloud-service-mesh-on-gke-autopilot"
latest_feature_date: "2021-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane"
  - "https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed"
  - "https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc"
  - "https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview"
keywords:
  - "managed"
  - "mesh"
  - "on"
  - "gke"
  - "autopilot"
  - "supports"
---

# Managed Cloud Service Mesh on GKE Autopilot

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Managed Cloud Service Mesh supports GKE Autopilot; Managed Cloud Service Mesh supports GKE Autopilot.

## Extended Definition

Managed Cloud Service Mesh supports GKE Autopilot; Managed Cloud Service Mesh supports GKE Autopilot.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed)
- [https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc](https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc)
- [https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview](https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview)

## Supporting Pages

### "Provision a managed Cloud Service Mesh control plane on GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- Source ID: `site-docs-root`
- Final score: 303
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Provision a managed Cloud Service Mesh control plane on GKE Note: This guide only supports Cloud Service Mesh with Istio APIs and does not support Google Cloud APIs.
- To disable the managed data plane for a namespace: kubectl annotate --overwrite namespace NAMESPACE \ mesh.cloud.google.com/proxy='{"managed":"false"}' To disable the managed data plane for a pod: kubectl annotate --overwrite pod POD NAME \ mesh.cloud.google.com/proxy='{"managed":"false"}' Enable maintenance windows for the managed data plane If you have a GKE maintenance window configured, active upgrades will commence at the start of the next available maintenance window and continue without pause until all managed pods have been updated (usually 12 hours).
- Note: You can still enable optional features without using the IstioOperator API, see Enabling optional features on managed Cloud Service Mesh . - Using Certificate Authority Service (CA Service) requires configuring Cloud Service Mesh per cluster , and is not supported when using the fleet-default configuration in GKE Enterprise.
- Configure for your fleet You must have Google Kubernetes Engine (GKE) Enterprise edition enabled to enable managed Cloud Service Mesh as a default configuration for your fleet.

### "Enable optional features on managed control plane \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable optional features on managed control plane Note: This guide only supports Cloud Service Mesh with Istio APIs and does not support Google Cloud APIs.
- The following configuration configures the outboundTrafficPolicy to REGISTRY ONLY : apiVersion : v1 kind : ConfigMap metadata : name : istio- release-channel namespace : istio-system data : mesh : - outboundTrafficPolicy: mode: REGISTRY ONLY where release-channel is your release channel ( asm-managed , asm-managed-stable , or asm-managed-rapid ).
- If you are using an IstioOperator based configuration today, the Distroless proxy image If you directly onboarded to Cloud Service Mesh with a managed TRAFFIC DIRECTOR control plane implementation , then only the distroless image type is supported.
- Configure the minimum TLS version for your workloads If you directly onboarded to Cloud Service Mesh with a managed TRAFFIC DIRECTOR control plane implementation , then you cannot change this setting.

### "VPC Service Controls for Cloud Service Mesh (Managed) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc](https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To check whether your control plane supports VPC Service Controls GA, check the mesh feature state of your membership for the VPCSC GA SUPPORTED condition. gcloud container fleet mesh describe --project FLEET PROJECT ID The output is similar to: ( ... ) membershipStates: projects/FLEET PROJECT NUMBER/locations/MEMBERSHIP LOCATION/memberships/MEMBERSHIP ID: servicemesh: conditions: - code: VPCSC GA SUPPORTED details: This control plane supports VPC Service Controls GA. documentationLink: http://cloud.google.com/service-mesh/docs/managed/VPC Service Controls severity: INFO ( ... ) If you have an existing control plane that does not report the VPCSC GA SUPPORTED condition and want to rely on VPC Service Controls, contact support.
- VPC Service Controls for Cloud Service Mesh (Managed) Note: This guide only supports Cloud Service Mesh with Istio APIs and does not support Google Cloud APIs.
- Cloud Service Mesh (Managed) supports VPC Service Controls as a generally available (GA) feature for new control planes.
- Repeat steps c - f, to add: Cloud Service Mesh Certificate Authority API GKE Hub API Cloud IAM API Cloud Monitoring API Cloud Trace API Cloud Monitoring API Google Cloud Resource Manager API Google Compute Engine API Google Container Registry API Artifact Registry API Google Cloud Storage API Cloud Logging API Security Token Service API Click Save . gcloud To update the list of restricted services, use the update command and specify the services to add as a comma-delimited list: gcloud access-context-manager perimeters update PERIMETER NAME \ --add-restricted-services = meshconfig.googleapis.com,meshca.googleapis.com,gkehub.googleapis.com,iam.googleapis.com,monitoring.googleapis.com,cloudtrace.googleapis.com,monitoring.googleapis.com,cloudresourcemanager.googleapis.com,compute.googleapis.com,containerregistry.googleapis.com,artifactregistry.googleapis.com,storage.googleapis.com,logging.googleapis.com,sts.googleapis.com \ --policy = POLICY NAME Where: PERIMETER NAME is the name of the service perimeter that you want to update.

### "Managed control plane for continuing customers \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview](https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview)
- Source ID: `site-docs-root-2`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Control plane for new meshes Starting on July 1, 2024, most existing users of the managed istiod control plane implementation began to receive the updated managed control plane with Google's globally available implementation - the Traffic Director (TD) control plane, in new fleets.
- If you onboard a new fleet to managed Cloud Service Mesh, and this fleet is not in a Google Cloud Organization or it is in a new Google Cloud Organization, then you will get the new managed control plane with the TD implementation from the Cloud Service Mesh launch date.
- Users whose existing usage of managed Cloud Service Mesh with the istiod control plane implementation was not compatible with the Traffic Director implementation without changes continued to get the istiod implementation until September 8, 2024.
- If you use the managed control plane, with some exceptions your existing fleets will be migrated to the new control plane, referred to in the Cloud Service Mesh as managed control plane (Traffic Director, or TD, implementation).

