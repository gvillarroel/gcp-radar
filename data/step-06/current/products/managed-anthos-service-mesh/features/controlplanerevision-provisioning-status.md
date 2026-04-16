---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.458Z"
product_name: "Managed Anthos Service Mesh"
product_slug: "managed-anthos-service-mesh"
feature_name: "ControlPlaneRevision provisioning status"
feature_slug: "controlplanerevision-provisioning-status"
latest_feature_date: "2022-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-managed"
  - "https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed"
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls"
keywords:
  - "controlplanerevision"
  - "provisioning"
  - "status"
  - "managed"
  - "anthos"
  - "mesh"
  - "control"
  - "plane"
---

# ControlPlaneRevision provisioning status

Product: Managed Anthos Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Managed Anthos Service Mesh control plane provisioning status is displayed in the ControlPlaneRevision API; Managed Anthos Service Mesh control plane provisioning status is displayed in the ControlPlaneRevision API.

## Extended Definition

Managed Anthos Service Mesh control plane provisioning status is displayed in the ControlPlaneRevision API; Managed Anthos Service Mesh control plane provisioning status is displayed in the ControlPlaneRevision API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls](https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls)

## Supporting Pages

### "Migrate in-cluster to managed control plane on a new cluster \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- Source ID: `site-docs-reference`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create the namespace: kubectl \ --context cluster-with-csm \ create namespace onlineboutique Use the istio.io/rev=asm-managed label to add the onlineboutique namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-csm \ label namespace onlineboutique 'istio.io/rev=asm-managed' Deploy Online Boutique's 12 services, including the load generator that imitates user traffic: kubectl \ --context cluster-with-csm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/kubernetes-manifests.yaml kubectl \ --context cluster-with-csm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/virtual-service.yaml Get the external IP address of the Cloud Service Mesh ingress gateway: kubectl \ --context cluster-with-csm \ --namespace asm-ingress \ get service --output jsonpath = '{.items[0].status.loadBalancer.ingress[0].ip}' Copy the external IP address of the asm-ingressgateway Service, and access it through your web browser.
- The output is similar to: createTime: '2022-07-06T01:05:39.110120474Z' membershipSpecs: projects/123456789123/locations/global/memberships/cluster-with-csm-membership: mesh: management: MANAGEMENT AUTOMATIC membershipStates: projects/123456789123/locations/global/memberships/cluster-with-csm-membership: servicemesh: controlPlaneManagement: details: - code: REVISION READY details: 'Ready: asm-managed' state: ACTIVE dataPlaneManagement: details: - code: OK details: Service is running. state: ACTIVE state: code: OK description: 'Revision(s) ready for use: asm-managed.' updateTime: '2022-07-06T01:19:24.243993678Z' name: projects/your-project-id/locations/global/features/servicemesh resourceState: state: ACTIVE spec: {} state: state: {} updateTime: '2022-07-06T01:19:27.475885687Z' Deploy Cloud Service Mesh's ingress gateway You will deploy the Cloud Service Mesh's ingress gateway into a separate namespace called asm-ingress .
- Migrate in-cluster to managed control plane on a new cluster This tutorial shows you how to migrate an application from a Google Kubernetes Engine (GKE) cluster using in-cluster Cloud Service Mesh to a new cluster using managed Cloud Service Mesh — Google's fully managed, Istio-compliant service mesh.
- Canary control plane versus canary cluster There are two commonly used strategies for migrations from in-cluster Cloud Service Mesh to managed Cloud Service Mesh: Canary cluster migration : In this strategy, you create a new cluster and then provision managed Cloud Service Mesh on it.

### "Supported features using Istio APIs (managed control plane) \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- Source ID: `site-docs-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Service entry Feature Managed (TD) Managed (istiod) ServiceEntry v1beta1 † † The TRAFFIC DIRECTOR control plane implementation does not support following fields and values in fields: workloadSelector field endpoints[].network field endpoints[].locality field endpoints[].weight field endpoints[].serviceAccount field DNS ROUND ROBIN value in resolution field MESH INTERNAL value in location field Unix domain socket address in endpoints[].address field subjectAltNames field Two or more endpoints[] entries if resolution field has DNS value Destination rule Feature Managed (TD) Managed (istiod) DestinationRule v1beta1 † † The TRAFFIC DIRECTOR control plane implementation does not support following fields. trafficPolicy.loadBalancer.localityLbSetting field trafficPolicy.tunnel field trafficPolicy.tls.credentialName field trafficPolicy.portLevelSettings[].tls.credentialName field Additionally, the TRAFFIC DIRECTOR control plane implementation requires that the destination rule defining subsets is in the same namespace and cluster with the Kubernetes service or ServiceEntry.
- Managed control plane supported features Install, upgrade, and rollback Feature Managed (TD) Managed (istiod) Installation on GKE clusters using fleet feature API Upgrades from ASM 1.9 versions that use Mesh CA Direct (skip-level) upgrades from Cloud Service Mesh versions prior to 1.9 (see notes for indirect upgrades) Direct (skip-level) upgrades from Istio OSS (see notes for indirect upgrades) Direct (skip-level) upgrades from Istio-on-GKE add-on (see notes for indirect upgrades) Enabling optional features Note: Indirect migrations and upgrades are supported, meaning that you can follow the standard Cloud Service Mesh upgrade paths through each version until you reach Cloud Service Mesh 1.28 with an in-cluster control plane, then you can migrate to the managed control plane.
- Telemetry Metrics Feature Managed (TD) Managed (istiod) Cloud Monitoring (HTTP in-proxy metrics) Cloud Monitoring (TCP in-proxy metrics) Prometheus metrics export to Grafana (Envoy metrics only) Prometheus metrics export to Kiali Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard Istio Telemetry API † Custom adapters/backends, in or out of process Arbitrary telemetry and logging backends † The TRAFFIC DIRECTOR control plane supports a subset of Istio telemetry API used to configure access logs and trace .
- Users whose existing usage is not compatible with the TRAFFIC DIRECTOR implementation without changes will continue to receive the ISTIOD implementation until September 8, 2024. (These users received a Service Announcement.) If any GKE on Google Cloud cluster in your fleet contains an in-cluster Cloud Service Mesh control plane when you provision managed Cloud Service Mesh, you will receive the ISTIOD control plane implementation.

### "Enable optional features on managed control plane \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are using an IstioOperator based configuration today, the Distroless proxy image If you directly onboarded to Cloud Service Mesh with a managed TRAFFIC DIRECTOR control plane implementation , then only the distroless image type is supported.
- Configure the minimum TLS version for your workloads If you directly onboarded to Cloud Service Mesh with a managed TRAFFIC DIRECTOR control plane implementation , then you cannot change this setting.
- When you provision managed Cloud Service Mesh, supported features differ based on the control plane implementation, and certain features are only available via allowlist.
- Enable optional features on managed control plane Note: This guide only supports Cloud Service Mesh with Istio APIs and does not support Google Cloud APIs.

### Cloud Service Mesh by example: mTLS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls](https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There are various supported setup methods: Fleet API and a managed control plane on Google Cloud asmcli and an unmanaged, in-cluster control plane off Google Cloud Clone the repository: git clone https://github.com/GoogleCloudPlatform/anthos-service-mesh-samples cd anthos-service-mesh-samples Deploy an ingress gateway Set the current context for kubectl to the cluster: Note: Use --region instead of --zone , if the cluster is a regional cluster. gcloud container clusters get-credentials CLUSTER NAME \ --project= PROJECT ID \ --zone= CLUSTER LOCATION Create a namespace for your ingress gateway: kubectl create namespace asm-ingress Enable the namespace for injection.
- Use the following instructions: Run the following command to locate the available release channels: kubectl -n istio-system get controlplanerevision The output is similar to the following: NAME AGE asm-managed-rapid 6d7h Note: If two control plane revisions appear in the earlier list, remove one.
- Managed (TD) Apply the default injection label to the namespace: kubectl label namespace asm-ingress \ istio.io/rev- istio-injection = enabled --overwrite Managed (Istiod) Recommended: Run the following command to apply the default injection label to the namespace: kubectl label namespace asm-ingress \ istio.io/rev- istio-injection = enabled --overwrite If you are an existing user with the Managed Istiod control plane: We recommend that you use default injection, but revision-based injection is supported.
- Apply the revision label to the namespace: kubectl label namespace asm-ingress \ istio-injection- istio.io/rev = REVISION LABEL --overwrite Deploy the example gateway in the anthos-service-mesh-samples repository: kubectl apply -n asm-ingress \ -f docs/shared/asm-ingress-gateway Expected output: serviceaccount/asm-ingressgateway configured service/asm-ingressgateway configured deployment.apps/asm-ingressgateway configured gateway.networking.istio.io/asm-ingressgateway configured Deploy the Online Boutique sample application If you haven't, set the current context for kubectl to the cluster: gcloud container clusters get-credentials CLUSTER NAME \ --project= PROJECT ID \ --zone= CLUSTER LOCATION Create the namespace for the sample application: kubectl create namespace onlineboutique Label the onlineboutique namespace to automatically inject Envoy proxies.

