---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.793Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Locality Load Balancing"
feature_slug: "locality-load-balancing"
latest_feature_date: "2021-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/service-routing/features"
  - "https://docs.cloud.google.com/service-mesh/docs/onboarding/prepare-service-routing-envoy-proxyless"
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-managed"
keywords:
  - "locality"
  - "load"
  - "balancing"
  - "mesh"
  - "supports"
  - "aware"
---

# Locality Load Balancing

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Cloud Service Mesh supports locality-aware load balancing; Cloud Service Mesh supports locality-aware load balancing.

## Extended Definition

Cloud Service Mesh supports locality-aware load balancing; Cloud Service Mesh supports locality-aware load balancing.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/service-routing/features](https://docs.cloud.google.com/service-mesh/docs/service-routing/features)
- [https://docs.cloud.google.com/service-mesh/docs/onboarding/prepare-service-routing-envoy-proxyless](https://docs.cloud.google.com/service-mesh/docs/onboarding/prepare-service-routing-envoy-proxyless)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)

## Supporting Pages

### "Cloud Service Mesh with Google Cloud APIs supported features \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/service-routing/features](https://docs.cloud.google.com/service-mesh/docs/service-routing/features)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Feature Supported Automated deployment of sidecar proxies for Compute Engine VMs ✔ Automated injection of sidecar proxies for GKE Pods ✔ Service discovery based on hostname ✔ Instance autoscaling based on CPU utilization ✔ Instance autoscaling based on traffic load/serving capacity (Compute Engine VMs in managed instance groups, or MIGs, only) ✔ Instance autohealing based on configurable health checks ✔ Automatic endpoint registration for Compute Engine VMs ✔ Automatic endpoint registration for GKE container instances/Pods ✔ API to programmatically add or remove endpoints ✔ Endpoints for your data plane traffic Microservices use the data plane to reach services in your mesh and outside of your mesh.
- Feature Supported with Envoy proxy configured to handle HTTP(s), TCP, or gRPC traffic Supported with proxyless gRPC Backend (instance group or network endpoint group) selection based on region (prefer nearest region with healthy backend capacity) ✔ ✔ Backend selection using rate-based (requests per second) balancing mode. ✔ Not supported with TCP (non-HTTP(S)) traffic. ✔ Backend selection based on utilization-based balancing mode (VMs in Compute Engine instance groups only) ✔ ✔ Configurable maximum capacity per backend (Compute Engine and GKE only) ✔ ✔ Backend selection based on configurable load-balancing policies.
- Retries ✔ ✔ Except per retry timeout Redirects ✔ URI rewrites ✔ Request/response header transformations ✔ Traffic splitting ✔ ✔ Traffic mirroring ✔ Outlier detection ✔ ✔ Circuit breaking ✔ ✔ Only maxRequests Max stream duration ✔ ✔ Load balancing You can configure advanced load-balancing methods and algorithms to load balance at the service, backend group (instance groups or network endpoint groups), and individual backend or endpoint levels.
- Use a single built-in policy ; choose from the following options: Round robin Least request Ring hash Random Original destination Maglev Use a single built-in policy ; choose from the following options: Round robin Least request Ring hash Use a custom policy Define a list of preferred policies Service resiliency Cloud Service Mesh supports capabilities that help you improve the resiliency of your services.

### "Prepare to set up on service routing APIs with Envoy and proxyless workloads\

- URL: [https://docs.cloud.google.com/service-mesh/docs/onboarding/prepare-service-routing-envoy-proxyless](https://docs.cloud.google.com/service-mesh/docs/onboarding/prepare-service-routing-envoy-proxyless)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure Cloud Service Mesh and Cloud Load Balancing resources.
- Prepare to set up on service routing APIs with Envoy and proxyless workloads This document provides information on the prerequisite tasks for setting up Cloud Service Mesh using the service routing APIs with Envoy proxies or with proxyless gRPC as the dataplane.
- TRAFFICDIRECTOR MESH NAME If the field is empty or not specified, then the value is set to default . locality The Google Cloud zone in which the gRPC client is running.
- Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Create networks, subnets, meshes, gateways, and load balancer components.

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh \_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Load balancing policies Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Round robin Least connections Random Passthrough Consistent hash Locality For more information on load balancing policies, see Destination Rules .
- For information on configuring load balancers, see the following: Setting up your load balancer for Google Distributed Cloud (software only) for VMware GKE on AWS: Creating a load balancer Expose an ingress gateway using an external load balancer Kubernetes Gateway API (preview) In Cloud Service Mesh v1.20 the Kubernetes Gateway API is available as a public preview.
- For managed Cloud Service Mesh with an ISTIOD control plane implementation , Google supports the current Cloud Service Mesh versions available in each release channel .
- For self-installed in-cluster Cloud Service Mesh , Google supports the current and previous two (n-2) minor versions of Cloud Service Mesh.

### "Supported features using Istio APIs (managed control plane) \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Envoy deployments Feature Managed (TD) Managed (istiod) Sidecars Ingress gateway Egress directly out from sidecars Egress using egress gateways CRD support Feature Managed (TD) Managed (istiod) Sidecar resource Service entry resource Percentage, fault injection, path matching, redirects, retries, rewriting, timeout, retry, mirroring, header manipulation, and CORS routing rules WasmPlugin API Istio Operator Load balancer for the Istio ingress gateway Feature Managed (TD) Managed (istiod) Third-party external load balancer Google Cloud Internal load balancer Service mesh cloud gateway Feature Managed (TD) Managed (istiod) Service mesh cloud gateway Kubernetes Gateway API Feature Managed (TD) Managed (istiod) Kubernetes Gateway API Load balancing policies Feature Managed (TD) Managed (istiod) Round robin Least connections Random Passthrough Consistent hash Locality GCPTrafficDistributionPolicy GCPBackendPolicy Load balancing modes Feature Managed (TD) Managed (istiod) RATE UTILIZATION CUSTOM METRICS IN-FLIGHT (Preview) For more information about balancing modes, see the Backend services overview .
- Service entry Feature Managed (TD) Managed (istiod) ServiceEntry v1beta1 † † The TRAFFIC DIRECTOR control plane implementation does not support following fields and values in fields: workloadSelector field endpoints[].network field endpoints[].locality field endpoints[].weight field endpoints[].serviceAccount field DNS ROUND ROBIN value in resolution field MESH INTERNAL value in location field Unix domain socket address in endpoints[].address field subjectAltNames field Two or more endpoints[] entries if resolution field has DNS value Destination rule Feature Managed (TD) Managed (istiod) DestinationRule v1beta1 † † The TRAFFIC DIRECTOR control plane implementation does not support following fields. trafficPolicy.loadBalancer.localityLbSetting field trafficPolicy.tunnel field trafficPolicy.tls.credentialName field trafficPolicy.portLevelSettings[].tls.credentialName field Additionally, the TRAFFIC DIRECTOR control plane implementation requires that the destination rule defining subsets is in the same namespace and cluster with the Kubernetes service or ServiceEntry.
- EnvoyFilter Feature Managed (TD) Managed (istiod) EnvoyFilter v1alpha3 † † Refer to Dataplane Extensibility page for supported fields and configurable extensions MeshConfig Feature Managed (TD) Managed (istiod) DiscoverySelectors clusterLocal LocalityLB § ExtensionProviders § CACert ImageType - distroless § OutboundTrafficPolicy § defaultProviders.accessLogging defaultProviders.tracing defaultConfig.tracing.stackdriver § accessLogFile § ProxyConfig Feature Managed (TD) Managed (istiod) HTTP/1.0 support (ISTIO META NETWORK) Image selection (distroless or base image) † Kubernetes native sidecar (ENABLE NATIVE SIDECARS) † Distroless image is used for the injection.
- Telemetry Metrics Feature Managed (TD) Managed (istiod) Cloud Monitoring (HTTP in-proxy metrics) Cloud Monitoring (TCP in-proxy metrics) Prometheus metrics export to Grafana (Envoy metrics only) Prometheus metrics export to Kiali Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard Istio Telemetry API † Custom adapters/backends, in or out of process Arbitrary telemetry and logging backends † The TRAFFIC DIRECTOR control plane supports a subset of Istio telemetry API used to configure access logs and trace .

