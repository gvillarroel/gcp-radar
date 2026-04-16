---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.809Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Google-managed control plane"
feature_slug: "google-managed-control-plane"
latest_feature_date: "2021-06-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane"
  - "https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview"
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed"
keywords:
  - "managed"
  - "control"
  - "plane"
  - "lets"
  - "anthos"
  - "mesh"
  - "use"
  - "operated"
---

# Google-managed control plane

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Google-managed control plane lets Anthos Service Mesh use a Google-operated control plane instead of managing Istiod in-cluster; Google-managed control plane lets Anthos Service Mesh use a Google-operated control plane instead of managing Istiod in-cluster.

## Extended Definition

Google-managed control plane lets Anthos Service Mesh use a Google-operated control plane instead of managing Istiod in-cluster; Google-managed control plane lets Anthos Service Mesh use a Google-operated control plane instead of managing Istiod in-cluster.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview](https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed)

## Supporting Pages

### "Provision a managed Cloud Service Mesh control plane on GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- Source ID: `site-docs-root`
- Final score: 310
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verify the control plane has been provisioned After a few minutes, verify that the control plane status is ACTIVE : gcloud container fleet mesh describe --project FLEET PROJECT ID The output is similar to: ... membershipSpecs : projects / 746296320118 / locations / us - central1 / memberships / demo - cluster - 1 : mesh : management : MANAGEMENT AUTOMATIC membershipStates : projects / 746296320118 / locations / us - central1 / memberships / demo - cluster - 1 : servicemesh : controlPlaneManagement : details : - code : REVISION READY details : ' Ready : asm - managed ' state : ACTIVE implementation : ISTIOD TRAFFIC DIRECTOR dataPlaneManagement : details : - code : OK details : Service is running . state : ACTIVE state : code : OK description : ' Revision ( s ) ready for use : asm - managed . ' ...
- Role name Role ID Grant location Description Anthos Service Mesh Service Agent roles/anthosservicemesh.serviceAgent Fleet project Mesh Managed Control Plane Service Agent (legacy) roles/meshcontrolplane.serviceAgent Fleet project This is a legacy role that was part of older installations of Cloud Service Mesh.
- Yes Warning: Disabling connectgateway.googleapis.com , trafficdirector.googleapis.com , networkservices.googleapis.com , and/or networksecurity.googleapis.com causes managed Cloud Service Mesh control plane to stop working.
- To disable the managed data plane for a namespace: kubectl annotate --overwrite namespace NAMESPACE \ mesh.cloud.google.com/proxy='{"managed":"false"}' To disable the managed data plane for a pod: kubectl annotate --overwrite pod POD NAME \ mesh.cloud.google.com/proxy='{"managed":"false"}' Enable maintenance windows for the managed data plane If you have a GKE maintenance window configured, active upgrades will commence at the start of the next available maintenance window and continue without pause until all managed pods have been updated (usually 12 hours).

### "Managed control plane for continuing customers \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview](https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview)
- Source ID: `site-docs-root-2`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are an Anthos Service Mesh user, the next steps for the control plane in your existing deployment depend on whether you use the managed control plane or the in-cluster control plane.
- The managed control plane used in Anthos Service Mesh is dedicated to a single cluster.
- Control plane for new meshes Starting on July 1, 2024, most existing users of the managed istiod control plane implementation began to receive the updated managed control plane with Google's globally available implementation - the Traffic Director (TD) control plane, in new fleets.
- Users whose existing usage of managed Cloud Service Mesh with the istiod control plane implementation was not compatible with the Traffic Director implementation without changes continued to get the istiod implementation until September 8, 2024.

### "Migrate in-cluster to managed control plane on a new cluster \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- Source ID: `site-docs-reference`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- The output is similar to: createTime: '2022-07-06T01:05:39.110120474Z' membershipSpecs: projects/123456789123/locations/global/memberships/cluster-with-csm-membership: mesh: management: MANAGEMENT AUTOMATIC membershipStates: projects/123456789123/locations/global/memberships/cluster-with-csm-membership: servicemesh: controlPlaneManagement: details: - code: REVISION READY details: 'Ready: asm-managed' state: ACTIVE dataPlaneManagement: details: - code: OK details: Service is running. state: ACTIVE state: code: OK description: 'Revision(s) ready for use: asm-managed.' updateTime: '2022-07-06T01:19:24.243993678Z' name: projects/your-project-id/locations/global/features/servicemesh resourceState: state: ACTIVE spec: {} state: state: {} updateTime: '2022-07-06T01:19:27.475885687Z' Deploy Cloud Service Mesh's ingress gateway You will deploy the Cloud Service Mesh's ingress gateway into a separate namespace called asm-ingress .
- Canary control plane versus canary cluster There are two commonly used strategies for migrations from in-cluster Cloud Service Mesh to managed Cloud Service Mesh: Canary cluster migration : In this strategy, you create a new cluster and then provision managed Cloud Service Mesh on it.
- Create the namespace: kubectl \ --context cluster-with-csm \ create namespace onlineboutique Use the istio.io/rev=asm-managed label to add the onlineboutique namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-csm \ label namespace onlineboutique 'istio.io/rev=asm-managed' Deploy Online Boutique's 12 services, including the load generator that imitates user traffic: kubectl \ --context cluster-with-csm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/kubernetes-manifests.yaml kubectl \ --context cluster-with-csm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/virtual-service.yaml Get the external IP address of the Cloud Service Mesh ingress gateway: kubectl \ --context cluster-with-csm \ --namespace asm-ingress \ get service --output jsonpath = '{.items[0].status.loadBalancer.ingress[0].ip}' Copy the external IP address of the asm-ingressgateway Service, and access it through your web browser.
- Create the namespace: kubectl \ --context cluster-with-csm \ create namespace asm-ingress Use the istio.io/rev=asm-managed label to add the asm-ingress namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-csm \ label namespace asm-ingress 'istio.io/rev=asm-managed' Deploy the Cloud Service Mesh ingress gateway : kubectl \ --context cluster-with-csm \ --namespace = asm-ingress \ apply -f anthos-service-mesh-samples/docs/shared/asm-ingress-gateway/asm-gateway-deployment-svc.yaml kubectl \ --context cluster-with-csm \ --namespace = asm-ingress \ apply -f anthos-service-mesh-samples/docs/shared/asm-ingress-gateway/gateway.yaml The output is similar to: namespace/asm-ingress configured serviceaccount/asm-ingressgateway configured service/asm-ingressgateway configured deployment.apps/asm-ingressgateway configured gateway.networking.istio.io/asm-ingressgateway configured Note: You can browse the resources in the official Cloud Service Mesh samples GitHub repository .

### "Enable optional features on managed control plane \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed)
- Source ID: `site-docs-reference`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are using an IstioOperator based configuration today, the Distroless proxy image If you directly onboarded to Cloud Service Mesh with a managed TRAFFIC DIRECTOR control plane implementation , then only the distroless image type is supported.
- Configure the minimum TLS version for your workloads If you directly onboarded to Cloud Service Mesh with a managed TRAFFIC DIRECTOR control plane implementation , then you cannot change this setting.
- End user authentication You can configure managed Cloud Service Mesh user authentication for browser-based end-user authentication and access control to your deployed workloads.
- When you provision managed Cloud Service Mesh, supported features differ based on the control plane implementation, and certain features are only available via allowlist.

