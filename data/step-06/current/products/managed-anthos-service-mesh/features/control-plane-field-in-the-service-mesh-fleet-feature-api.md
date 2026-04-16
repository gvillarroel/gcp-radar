---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.454Z"
product_name: "Managed Anthos Service Mesh"
product_slug: "managed-anthos-service-mesh"
feature_name: "control_plane field in the service mesh fleet feature API"
feature_slug: "control-plane-field-in-the-service-mesh-fleet-feature-api"
latest_feature_date: "2023-03-28"
deprecation_date: "2023-03-28"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-managed"
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed"
  - "https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility"
keywords:
  - "control"
  - "plane"
  - "field"
  - "in"
  - "the"
  - "mesh"
  - "fleet"
  - "api"
---

# control_plane field in the service mesh fleet feature API

Product: Managed Anthos Service Mesh
Coverage: MEDIUM

## Step 02 Summary

The control_plane field in the service mesh fleet feature API is deprecated in favor of the management field; The control_plane field in the service mesh fleet feature API is deprecated in favor of the management field; deprecated on 2023-03-28.

## Extended Definition

The control_plane field in the service mesh fleet feature API is deprecated in favor of the management field; The control_plane field in the service mesh fleet feature API is deprecated in favor of the management field; deprecated on 2023-03-28.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed)
- [https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility](https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility)

## Supporting Pages

### "Supported features using Istio APIs (managed control plane) \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- Source ID: `site-docs-reference`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Managed control plane supported features Install, upgrade, and rollback Feature Managed (TD) Managed (istiod) Installation on GKE clusters using fleet feature API Upgrades from ASM 1.9 versions that use Mesh CA Direct (skip-level) upgrades from Cloud Service Mesh versions prior to 1.9 (see notes for indirect upgrades) Direct (skip-level) upgrades from Istio OSS (see notes for indirect upgrades) Direct (skip-level) upgrades from Istio-on-GKE add-on (see notes for indirect upgrades) Enabling optional features Note: Indirect migrations and upgrades are supported, meaning that you can follow the standard Cloud Service Mesh upgrade paths through each version until you reach Cloud Service Mesh 1.28 with an in-cluster control plane, then you can migrate to the managed control plane.
- Service entry Feature Managed (TD) Managed (istiod) ServiceEntry v1beta1 † † The TRAFFIC DIRECTOR control plane implementation does not support following fields and values in fields: workloadSelector field endpoints[].network field endpoints[].locality field endpoints[].weight field endpoints[].serviceAccount field DNS ROUND ROBIN value in resolution field MESH INTERNAL value in location field Unix domain socket address in endpoints[].address field subjectAltNames field Two or more endpoints[] entries if resolution field has DNS value Destination rule Feature Managed (TD) Managed (istiod) DestinationRule v1beta1 † † The TRAFFIC DIRECTOR control plane implementation does not support following fields. trafficPolicy.loadBalancer.localityLbSetting field trafficPolicy.tunnel field trafficPolicy.tls.credentialName field trafficPolicy.portLevelSettings[].tls.credentialName field Additionally, the TRAFFIC DIRECTOR control plane implementation requires that the destination rule defining subsets is in the same namespace and cluster with the Kubernetes service or ServiceEntry.
- Telemetry Metrics Feature Managed (TD) Managed (istiod) Cloud Monitoring (HTTP in-proxy metrics) Cloud Monitoring (TCP in-proxy metrics) Prometheus metrics export to Grafana (Envoy metrics only) Prometheus metrics export to Kiali Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard Istio Telemetry API † Custom adapters/backends, in or out of process Arbitrary telemetry and logging backends † The TRAFFIC DIRECTOR control plane supports a subset of Istio telemetry API used to configure access logs and trace .
- Users whose existing usage is not compatible with the TRAFFIC DIRECTOR implementation without changes will continue to receive the ISTIOD implementation until September 8, 2024. (These users received a Service Announcement.) If any GKE on Google Cloud cluster in your fleet contains an in-cluster Cloud Service Mesh control plane when you provision managed Cloud Service Mesh, you will receive the ISTIOD control plane implementation.

### "Migrate in-cluster to managed control plane on a new cluster \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- Source ID: `site-docs-reference`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The output is similar to: createTime: '2022-07-06T01:05:39.110120474Z' membershipSpecs: projects/123456789123/locations/global/memberships/cluster-with-csm-membership: mesh: management: MANAGEMENT AUTOMATIC membershipStates: projects/123456789123/locations/global/memberships/cluster-with-csm-membership: servicemesh: controlPlaneManagement: details: - code: REVISION READY details: 'Ready: asm-managed' state: ACTIVE dataPlaneManagement: details: - code: OK details: Service is running. state: ACTIVE state: code: OK description: 'Revision(s) ready for use: asm-managed.' updateTime: '2022-07-06T01:19:24.243993678Z' name: projects/your-project-id/locations/global/features/servicemesh resourceState: state: ACTIVE spec: {} state: state: {} updateTime: '2022-07-06T01:19:27.475885687Z' Deploy Cloud Service Mesh's ingress gateway You will deploy the Cloud Service Mesh's ingress gateway into a separate namespace called asm-ingress .
- Canary control plane versus canary cluster There are two commonly used strategies for migrations from in-cluster Cloud Service Mesh to managed Cloud Service Mesh: Canary cluster migration : In this strategy, you create a new cluster and then provision managed Cloud Service Mesh on it.
- Canary control plane migration : In this strategy, you provision managed Cloud Service Mesh on the same cluster in which in-cluster Cloud Service Mesh is installed.
- Rename the cluster context so that the cluster is easier to work with: kubectl config rename-context \ gke PROJECT ID us-central1-a cluster-with-in-cluster-asm \ cluster-with-in-cluster-asm Check that the cluster context has been renamed: kubectl config get-contexts --output = "name" Download the version that installs Cloud Service Mesh 1.28.5 to the current working directory: curl https://storage.googleapis.com/csm-artifacts/asm/asmcli 1.28 > asmcli You will be asked to type "y" and then press Enter.

### "Enable optional features on managed control plane \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An image type change requires each pod to restart and get re-injected to take effect. apiVersion : v1 kind : ConfigMap metadata : name : istio- release-channel namespace : istio-system data : mesh : - defaultConfig: image: imageType: distroless You may override the imageType by using the following pod annotation. sidecar.istio.io/proxyImageType : debug After changing the image type of a deployment using the annotation, the deployment should be restarted. kubectl rollout restart deployment -n NAMESPACE DEPLOYMENT NAME Because it does not require a debug base image, most types of proxy debugging should use gcloud beta container fleet mesh debug proxy-status / proxy-config ( details ).
- If you are using an IstioOperator based configuration today, the Distroless proxy image If you directly onboarded to Cloud Service Mesh with a managed TRAFFIC DIRECTOR control plane implementation , then only the distroless image type is supported.
- If your fleet originally used the ISTIOD control plane implementation and was migrated to the TRAFFIC DIRECTOR implementation, your image type was left unchanged during migration, and you can change the image type to distroless yourself.
- Configure the minimum TLS version for your workloads If you directly onboarded to Cloud Service Mesh with a managed TRAFFIC DIRECTOR control plane implementation , then you cannot change this setting.

### "Data plane extensibility with EnvoyFilter \_|\_ Cloud Service Mesh \_|\_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility](https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility)
- Source ID: `site-docs-reference`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported API Fields The EnvoyFilter API is supported with the TRAFFIC DIRECTOR control plane implementation only with limited support as follows: targetRefs : Not supported configPatches[].applyTo : only HTTP FILTER is supported configPatches[].patch.operation : only INSERT FIRST and INSERT BEFORE when used with the route filter are supported. configPatches[].patch.value.type url : refer to Supported Extensions configPatches[].patch.filterClass : Not supported configPatches[].match.proxy : Not supported configPatches[].match.routeConfiguration : Not supported configPatches[].match.cluster : Not supported The following fields are supported for the INSERT BEFORE operation only: configPatches[].match.listener : only filter is supported. configPatches[].match.listener.filter.name : only envoy.filters.network.http connection manager is supported. configPatches[].match.listener.filter.subFilter.name : only envoy.filters.http.router is supported.
- Data plane extensibility with EnvoyFilter You can use the EnvoyFilter API to extend data plane capabilities in Cloud Service Mesh that are otherwise not achievable by using other Istio APIs.
- For an exhaustive list of supported features in the EnvoyFilter API, refer to Supported features using Istio APIs (managed control plane) .
- The API definition and their semantics can be found at the official Envoy documentation . type.googleapis.com/envoy.extensions.filters.http.local ratelimit.v3.LocalRateLimit Field Rapid Regular Stable stat prefix status token bucket filter enabled filter enforced response headers to add request headers to add when not enforced local rate limit per downstream connection enable x ratelimit headers type.googleapis.com/envoy.extensions.filters.http.grpc web.v3.GrpcWeb Field Rapid Regular Stable (No fields) Sample Usage In this tutorial, you'll learn how to use Envoy's built-in local rate limiting to dynamically limit the traffic to a service using the EnvoyFilter API.

