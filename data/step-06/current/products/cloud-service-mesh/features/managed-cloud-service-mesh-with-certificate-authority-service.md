---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.797Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Managed Cloud Service Mesh with Certificate Authority Service"
feature_slug: "managed-cloud-service-mesh-with-certificate-authority-service"
latest_feature_date: "2021-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane"
  - "https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc"
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-managed"
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster"
keywords:
  - "managed"
  - "mesh"
  - "with"
  - "certificate"
  - "authority"
  - "supports"
---

# Managed Cloud Service Mesh with Certificate Authority Service

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Managed Cloud Service Mesh supports Certificate Authority Service; Managed Cloud Service Mesh supports Certificate Authority Service.

## Extended Definition

Managed Cloud Service Mesh supports Certificate Authority Service; Managed Cloud Service Mesh supports Certificate Authority Service.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc](https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)

## Supporting Pages

### "Provision a managed Cloud Service Mesh control plane on GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Note: You can still enable optional features without using the IstioOperator API, see Enabling optional features on managed Cloud Service Mesh . - Using Certificate Authority Service (CA Service) requires configuring Cloud Service Mesh per cluster , and is not supported when using the fleet-default configuration in GKE Enterprise.
- Grant service accounts in the fleet project permission to access the cluster project: gcloud projects add-iam-policy-binding " CLUSTER PROJECT ID " \ --member "serviceAccount:service- FLEET PROJECT NUMBER @gcp-sa-servicemesh.iam.gserviceaccount.com" \ --role roles/anthosservicemesh.serviceAgent Enable the Mesh API on the cluster's project: gcloud services enable mesh.googleapis.com \ --project = CLUSTER PROJECT ID Configure Certificate Authority Service (Optional) If your service mesh deployment requires Certificate Authority Service (CA Service), then follow Configure Certificate Authority Service for managed Cloud Service Mesh to enable it for your fleet.
- Provision a managed Cloud Service Mesh control plane on GKE Note: This guide only supports Cloud Service Mesh with Istio APIs and does not support Google Cloud APIs.
- No meshca.googleapis.com Related to Cloud Service Mesh certificate authority used by managed Cloud Service Mesh.

### "VPC Service Controls for Cloud Service Mesh (Managed) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc](https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc)
- Source ID: `site-docs-root-2`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VPC Service Controls for Cloud Service Mesh (Managed) Note: This guide only supports Cloud Service Mesh with Istio APIs and does not support Google Cloud APIs.
- Repeat steps c - f, to add: Cloud Service Mesh Certificate Authority API GKE Hub API Cloud IAM API Cloud Monitoring API Cloud Trace API Cloud Monitoring API Google Cloud Resource Manager API Google Compute Engine API Google Container Registry API Artifact Registry API Google Cloud Storage API Cloud Logging API Security Token Service API Click Save . gcloud To update the list of restricted services, use the update command and specify the services to add as a comma-delimited list: gcloud access-context-manager perimeters update PERIMETER NAME \ --add-restricted-services = meshconfig.googleapis.com,meshca.googleapis.com,gkehub.googleapis.com,iam.googleapis.com,monitoring.googleapis.com,cloudtrace.googleapis.com,monitoring.googleapis.com,cloudresourcemanager.googleapis.com,compute.googleapis.com,containerregistry.googleapis.com,artifactregistry.googleapis.com,storage.googleapis.com,logging.googleapis.com,sts.googleapis.com \ --policy = POLICY NAME Where: PERIMETER NAME is the name of the service perimeter that you want to update.
- To check whether your control plane supports VPC Service Controls GA, check the mesh feature state of your membership for the VPCSC GA SUPPORTED condition. gcloud container fleet mesh describe --project FLEET PROJECT ID The output is similar to: ( ... ) membershipStates: projects/FLEET PROJECT NUMBER/locations/MEMBERSHIP LOCATION/memberships/MEMBERSHIP ID: servicemesh: conditions: - code: VPCSC GA SUPPORTED details: This control plane supports VPC Service Controls GA. documentationLink: http://cloud.google.com/service-mesh/docs/managed/VPC Service Controls severity: INFO ( ... ) If you have an existing control plane that does not report the VPCSC GA SUPPORTED condition and want to rely on VPC Service Controls, contact support.
- Cloud Service Mesh (Managed) supports VPC Service Controls as a generally available (GA) feature for new control planes.

### "Supported features using Istio APIs (managed control plane) \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Certificate authority (CA) support Feature Managed (TD) Managed (istiod) Cloud Service Mesh certificate authority Certificate Authority Service Istio CA Integration with custom CAs Security features In addition to supporting Istio security features, Cloud Service Mesh provides even more capabilities to help you secure your applications.
- Base Images Feature Managed (TD) Managed (istiod) Distroless proxy image † † Cloud Service Mesh with a managed (TD) control plane only supports the distroless image type.
- Service entry Feature Managed (TD) Managed (istiod) ServiceEntry v1beta1 † † The TRAFFIC DIRECTOR control plane implementation does not support following fields and values in fields: workloadSelector field endpoints[].network field endpoints[].locality field endpoints[].weight field endpoints[].serviceAccount field DNS ROUND ROBIN value in resolution field MESH INTERNAL value in location field Unix domain socket address in endpoints[].address field subjectAltNames field Two or more endpoints[] entries if resolution field has DNS value Destination rule Feature Managed (TD) Managed (istiod) DestinationRule v1beta1 † † The TRAFFIC DIRECTOR control plane implementation does not support following fields. trafficPolicy.loadBalancer.localityLbSetting field trafficPolicy.tunnel field trafficPolicy.tls.credentialName field trafficPolicy.portLevelSettings[].tls.credentialName field Additionally, the TRAFFIC DIRECTOR control plane implementation requires that the destination rule defining subsets is in the same namespace and cluster with the Kubernetes service or ServiceEntry.
- Managed control plane supported features Install, upgrade, and rollback Feature Managed (TD) Managed (istiod) Installation on GKE clusters using fleet feature API Upgrades from ASM 1.9 versions that use Mesh CA Direct (skip-level) upgrades from Cloud Service Mesh versions prior to 1.9 (see notes for indirect upgrades) Direct (skip-level) upgrades from Istio OSS (see notes for indirect upgrades) Direct (skip-level) upgrades from Istio-on-GKE add-on (see notes for indirect upgrades) Enabling optional features Note: Indirect migrations and upgrades are supported, meaning that you can follow the standard Cloud Service Mesh upgrade paths through each version until you reach Cloud Service Mesh 1.28 with an in-cluster control plane, then you can migrate to the managed control plane.

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh \_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- For managed Cloud Service Mesh with an ISTIOD control plane implementation , Google supports the current Cloud Service Mesh versions available in each release channel .
- For managed Cloud Service Mesh with a TRAFFIC DIRECTOR control plane implementation , Google always supports this control plane.
- Certificate authority (CA) support Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises Other GKE Enterprise clusters Cloud Service Mesh certificate authority Certificate Authority Service Istio CA (previously known as Citadel) Plug in your own CA certificates Supported by CA service and Istio CA Supported by CA service and Istio CA Supported by Istio CA Cloud Service Mesh security features In addition to supporting Istio security features, Cloud Service Mesh provides even more capabilities to help you secure your applications.
- To see the supported features for Cloud Service Mesh 1.28.5 with a managed control plane instead, see Managed control plane .

