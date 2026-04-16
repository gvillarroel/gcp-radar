---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.459Z"
product_name: "Managed Anthos Service Mesh"
product_slug: "managed-anthos-service-mesh"
feature_name: "Consistent hash load balancing"
feature_slug: "consistent-hash-load-balancing"
latest_feature_date: "2021-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-managed"
  - "https://docs.cloud.google.com/service-mesh/docs/overview"
  - "https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed"
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls"
keywords:
  - "consistent"
  - "hash"
  - "load"
  - "balancing"
  - "managed"
  - "anthos"
  - "mesh"
  - "supports"
---

# Consistent hash load balancing

Product: Managed Anthos Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Managed Anthos Service Mesh supports consistent hash load balancing in the regular and rapid channels; Managed Anthos Service Mesh supports consistent hash load balancing in the regular and rapid channels.

## Extended Definition

Managed Anthos Service Mesh supports consistent hash load balancing in the regular and rapid channels; Managed Anthos Service Mesh supports consistent hash load balancing in the regular and rapid channels.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- [https://docs.cloud.google.com/service-mesh/docs/overview](https://docs.cloud.google.com/service-mesh/docs/overview)
- [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls](https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls)

## Supporting Pages

### "Supported features using Istio APIs (managed control plane) \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Envoy deployments Feature Managed (TD) Managed (istiod) Sidecars Ingress gateway Egress directly out from sidecars Egress using egress gateways CRD support Feature Managed (TD) Managed (istiod) Sidecar resource Service entry resource Percentage, fault injection, path matching, redirects, retries, rewriting, timeout, retry, mirroring, header manipulation, and CORS routing rules WasmPlugin API Istio Operator Load balancer for the Istio ingress gateway Feature Managed (TD) Managed (istiod) Third-party external load balancer Google Cloud Internal load balancer Service mesh cloud gateway Feature Managed (TD) Managed (istiod) Service mesh cloud gateway Kubernetes Gateway API Feature Managed (TD) Managed (istiod) Kubernetes Gateway API Load balancing policies Feature Managed (TD) Managed (istiod) Round robin Least connections Random Passthrough Consistent hash Locality GCPTrafficDistributionPolicy GCPBackendPolicy Load balancing modes Feature Managed (TD) Managed (istiod) RATE UTILIZATION CUSTOM METRICS IN-FLIGHT (Preview) For more information about balancing modes, see the Backend services overview .
- Service entry Feature Managed (TD) Managed (istiod) ServiceEntry v1beta1 † † The TRAFFIC DIRECTOR control plane implementation does not support following fields and values in fields: workloadSelector field endpoints[].network field endpoints[].locality field endpoints[].weight field endpoints[].serviceAccount field DNS ROUND ROBIN value in resolution field MESH INTERNAL value in location field Unix domain socket address in endpoints[].address field subjectAltNames field Two or more endpoints[] entries if resolution field has DNS value Destination rule Feature Managed (TD) Managed (istiod) DestinationRule v1beta1 † † The TRAFFIC DIRECTOR control plane implementation does not support following fields. trafficPolicy.loadBalancer.localityLbSetting field trafficPolicy.tunnel field trafficPolicy.tls.credentialName field trafficPolicy.portLevelSettings[].tls.credentialName field Additionally, the TRAFFIC DIRECTOR control plane implementation requires that the destination rule defining subsets is in the same namespace and cluster with the Kubernetes service or ServiceEntry.
- Telemetry Metrics Feature Managed (TD) Managed (istiod) Cloud Monitoring (HTTP in-proxy metrics) Cloud Monitoring (TCP in-proxy metrics) Prometheus metrics export to Grafana (Envoy metrics only) Prometheus metrics export to Kiali Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard Istio Telemetry API † Custom adapters/backends, in or out of process Arbitrary telemetry and logging backends † The TRAFFIC DIRECTOR control plane supports a subset of Istio telemetry API used to configure access logs and trace .
- Base Images Feature Managed (TD) Managed (istiod) Distroless proxy image † † Cloud Service Mesh with a managed (TD) control plane only supports the distroless image type.

### Cloud Service Mesh overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/overview](https://docs.cloud.google.com/service-mesh/docs/overview)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Off Google Cloud: With Distributed Cloud or GKE multicloud, Cloud Service Mesh supports the Istio APIs for Kubernetes workloads.
- Deployment options You have the following deployment options in Cloud Service Mesh: On Google Cloud Managed Cloud Service Mesh - managed control and data plane for GKE (recommended) Managed Cloud Service Mesh - managed control and data plane for Compute Engine with VMs (recommended) In-cluster control plane for GKE with Istio APIs (Discouraged) Off Google Cloud In-cluster control plane for Kubernetes with Istio APIs Managed Cloud Service Mesh Managed Cloud Service Mesh consists of the managed control plane for all infrastructures and the managed data plane for GKE.
- Service meshes manage the common requirements of running a service, such as monitoring, networking, and security, with consistent, powerful tools, making it easier for service developers and operators to focus on creating and managing great applications for their users.
- A service mesh is an architecture that enables managed, observable, and secure communication among your services, making it easier for you to create robust enterprise applications made up of many microservices on your chosen infrastructure.

### "Enable optional features on managed control plane \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Configure the minimum TLS version for your workloads If you directly onboarded to Cloud Service Mesh with a managed TRAFFIC DIRECTOR control plane implementation , then you cannot change this setting.
- End user authentication You can configure managed Cloud Service Mesh user authentication for browser-based end-user authentication and access control to your deployed workloads.
- Enable optional features on managed control plane Note: This guide only supports Cloud Service Mesh with Istio APIs and does not support Google Cloud APIs.
- The following example shows a ConfigMap setting the minimum TLS version for workloads to 1.3: apiVersion : v1 kind : ConfigMap metadata : name : istio- release-channel namespace : istio-system data : mesh : - meshMTLS: minProtocolVersion: TLSV1 3 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Cloud Service Mesh by example: mTLS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls](https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There are various supported setup methods: Fleet API and a managed control plane on Google Cloud asmcli and an unmanaged, in-cluster control plane off Google Cloud Clone the repository: git clone https://github.com/GoogleCloudPlatform/anthos-service-mesh-samples cd anthos-service-mesh-samples Deploy an ingress gateway Set the current context for kubectl to the cluster: Note: Use --region instead of --zone , if the cluster is a regional cluster. gcloud container clusters get-credentials CLUSTER NAME \ --project= PROJECT ID \ --zone= CLUSTER LOCATION Create a namespace for your ingress gateway: kubectl create namespace asm-ingress Enable the namespace for injection.
- Find and delete authentication policies For a list of all the PeerAuthentication policies in the service mesh: kubectl get peerauthentication --all-namespaces The output is similar to the following: NAMESPACE NAME MODE AGE ad namespace-policy STRICT 17m cart namespace-policy STRICT 17m checkout namespace-policy STRICT 17m currency namespace-policy STRICT 17m email namespace-policy STRICT 17m frontend namespace-policy STRICT 17m loadgenerator namespace-policy STRICT 17m payment namespace-policy STRICT 17m product-catalog namespace-policy STRICT 17m recommendation namespace-policy STRICT 17m shipping namespace-policy STRICT 17m Delete the authentication policy from all of the Online Boutique namespaces: for ns in ad cart checkout currency email frontend loadgenerator payment \ product - catalog recommendation shipping ; do kubectl delete peerauthentication - n $ ns namespace - policy done ; Expected output: peerauthentication.security.istio.io "namespace-policy" deleted peerauthentication.security.istio.io "namespace-policy" deleted peerauthentication.security.istio.io "namespace-policy" deleted peerauthentication.security.istio.io "namespace-policy" deleted peerauthentication.security.istio.io "namespace-policy" deleted peerauthentication.security.istio.io "namespace-policy" deleted peerauthentication.security.istio.io "namespace-policy" deleted peerauthentication.security.istio.io "namespace-policy" deleted peerauthentication.security.istio.io "namespace-policy" deleted peerauthentication.security.istio.io "namespace-policy" deleted peerauthentication.security.istio.io "namespace-policy" deleted Access the Online Boutique using the external IP address of the frontend-external service, and refresh the page.
- Apply the revision label to the namespace: kubectl label namespace asm-ingress \ istio-injection- istio.io/rev = REVISION LABEL --overwrite Deploy the example gateway in the anthos-service-mesh-samples repository: kubectl apply -n asm-ingress \ -f docs/shared/asm-ingress-gateway Expected output: serviceaccount/asm-ingressgateway configured service/asm-ingressgateway configured deployment.apps/asm-ingressgateway configured gateway.networking.istio.io/asm-ingressgateway configured Deploy the Online Boutique sample application If you haven't, set the current context for kubectl to the cluster: gcloud container clusters get-credentials CLUSTER NAME \ --project= PROJECT ID \ --zone= CLUSTER LOCATION Create the namespace for the sample application: kubectl create namespace onlineboutique Label the onlineboutique namespace to automatically inject Envoy proxies.
- Cloud Service Mesh gives you the flexibility to apply an authentication policy to the entire service mesh, to a namespace, or to an individual workload.

