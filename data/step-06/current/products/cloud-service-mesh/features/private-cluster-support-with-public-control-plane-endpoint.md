---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.812Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Private cluster support with public control plane endpoint"
feature_slug: "private-cluster-support-with-public-control-plane-endpoint"
latest_feature_date: "2021-06-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane"
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview"
keywords:
  - "private"
  - "cluster"
  - "with"
  - "public"
  - "control"
  - "plane"
  - "endpoint"
  - "allows"
---

# Private cluster support with public control plane endpoint

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Private cluster support with a public control plane endpoint allows private clusters to use the Google-managed control plane; Private cluster support with a public control plane endpoint allows private clusters to use the Google-managed control plane.

## Extended Definition

Private cluster support with a public control plane endpoint allows private clusters to use the Google-managed control plane; Private cluster support with a public control plane endpoint allows private clusters to use the Google-managed control plane.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview](https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview)

## Supporting Pages

### "Provision a managed Cloud Service Mesh control plane on GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: N/A

Evidence snippets:
- Before proceeding through the following sections, run the following command for each of your clusters to configure kubectl to point to the cluster. gcloud container clusters get-credentials CLUSTER NAME \ --location CLUSTER LOCATION \ --project CLUSTER PROJECT ID Note that an ingress gateway isn't automatically deployed with the control plane.
- Note: For more information on endpoint discovery, refer to Endpoint discovery with multiple control planes .
- Verify the control plane has been provisioned After a few minutes, verify that the control plane status is ACTIVE : gcloud container fleet mesh describe --project FLEET PROJECT ID The output is similar to: ... membershipSpecs : projects / 746296320118 / locations / us - central1 / memberships / demo - cluster - 1 : mesh : management : MANAGEMENT AUTOMATIC membershipStates : projects / 746296320118 / locations / us - central1 / memberships / demo - cluster - 1 : servicemesh : controlPlaneManagement : details : - code : REVISION READY details : ' Ready : asm - managed ' state : ACTIVE implementation : ISTIOD TRAFFIC DIRECTOR dataPlaneManagement : details : - code : OK details : Service is running . state : ACTIVE state : code : OK description : ' Revision ( s ) ready for use : asm - managed . ' ...
- Managed (TD) Apply the default injection label to the namespace: kubectl label namespace NAMESPACE \ istio.io/rev- istio-injection = enabled --overwrite Managed (Istiod) Recommended: Run the following command to apply the default injection label to the namespace: kubectl label namespace NAMESPACE \ istio.io/rev- istio-injection = enabled --overwrite If you are an existing user with the Managed Istiod control plane: We recommend that you use default injection, but revision-based injection is supported.

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh \_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- Deployment model Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises GKE Enterprise on other public clouds Attached clusters Multi-primary Primary-remote Notes on terminology: A primary cluster is a cluster with a control plane.
- In-cluster control plane supported features This page describes features that are supported in Cloud Service Mesh 1.28.5 with an in-cluster control plane.
- Data plane Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Sidecar Ambient Multi-cluster support For multi-primary deployments of GKE clusters in different projects, all the clusters must be in a shared Virtual Private Cloud (VPC).
- For managed Cloud Service Mesh with an ISTIOD control plane implementation , Google supports the current Cloud Service Mesh versions available in each release channel .

### "Migrate in-cluster to managed control plane on a new cluster \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- Source ID: `site-docs-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- The output is similar to: createTime: '2022-07-06T01:05:39.110120474Z' membershipSpecs: projects/123456789123/locations/global/memberships/cluster-with-csm-membership: mesh: management: MANAGEMENT AUTOMATIC membershipStates: projects/123456789123/locations/global/memberships/cluster-with-csm-membership: servicemesh: controlPlaneManagement: details: - code: REVISION READY details: 'Ready: asm-managed' state: ACTIVE dataPlaneManagement: details: - code: OK details: Service is running. state: ACTIVE state: code: OK description: 'Revision(s) ready for use: asm-managed.' updateTime: '2022-07-06T01:19:24.243993678Z' name: projects/your-project-id/locations/global/features/servicemesh resourceState: state: ACTIVE spec: {} state: state: {} updateTime: '2022-07-06T01:19:27.475885687Z' Deploy Cloud Service Mesh's ingress gateway You will deploy the Cloud Service Mesh's ingress gateway into a separate namespace called asm-ingress .
- To achieve this, you deploy two Istio resources to the cluster with in-cluster Cloud Service Mesh: a ServiceEntry to tell in-cluster Cloud Service Mesh about the managed Cloud Service Mesh cluster's Online Boutique endpoint a VirtualService to tell the in-cluster Cloud Service Mesh ingress gateway to split the traffic 50-50.
- Migrate in-cluster to managed control plane on a new cluster This tutorial shows you how to migrate an application from a Google Kubernetes Engine (GKE) cluster using in-cluster Cloud Service Mesh to a new cluster using managed Cloud Service Mesh — Google's fully managed, Istio-compliant service mesh.
- Canary control plane versus canary cluster There are two commonly used strategies for migrations from in-cluster Cloud Service Mesh to managed Cloud Service Mesh: Canary cluster migration : In this strategy, you create a new cluster and then provision managed Cloud Service Mesh on it.

### "Managed control plane for continuing customers \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview](https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview)
- Source ID: `site-docs-root-2`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- In older managed control plane (dedicated control plane) model, each Istiod must communicate with every other cluster in the mesh to determine the endpoints available in every other cluster.
- With the new global control plane, the endpoints of the mesh are sent directly from each cluster to the control plane from across all clusters in the mesh.
- With the global control plane, the endpoints are propagated directly to the global control plane.
- Control plane for new meshes Starting on July 1, 2024, most existing users of the managed istiod control plane implementation began to receive the updated managed control plane with Google's globally available implementation - the Traffic Director (TD) control plane, in new fleets.

