---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.460Z"
product_name: "Managed Anthos Service Mesh"
product_slug: "managed-anthos-service-mesh"
feature_name: "Locality load balancing"
feature_slug: "locality-load-balancing"
latest_feature_date: "2021-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-managed"
  - "https://docs.cloud.google.com/service-mesh/docs/downloading-istioctl"
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/overview"
keywords:
  - "locality"
  - "load"
  - "balancing"
  - "managed"
  - "anthos"
  - "mesh"
  - "supports"
  - "in"
---

# Locality load balancing

Product: Managed Anthos Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Managed Anthos Service Mesh supports locality load balancing in the regular and rapid channels; Managed Anthos Service Mesh supports locality load balancing in the regular and rapid channels.

## Extended Definition

Managed Anthos Service Mesh supports locality load balancing in the regular and rapid channels; Managed Anthos Service Mesh supports locality load balancing in the regular and rapid channels.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- [https://docs.cloud.google.com/service-mesh/docs/downloading-istioctl](https://docs.cloud.google.com/service-mesh/docs/downloading-istioctl)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/overview](https://docs.cloud.google.com/service-mesh/docs/overview)

## Supporting Pages

### "Supported features using Istio APIs (managed control plane) \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- Source ID: `site-docs-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Envoy deployments Feature Managed (TD) Managed (istiod) Sidecars Ingress gateway Egress directly out from sidecars Egress using egress gateways CRD support Feature Managed (TD) Managed (istiod) Sidecar resource Service entry resource Percentage, fault injection, path matching, redirects, retries, rewriting, timeout, retry, mirroring, header manipulation, and CORS routing rules WasmPlugin API Istio Operator Load balancer for the Istio ingress gateway Feature Managed (TD) Managed (istiod) Third-party external load balancer Google Cloud Internal load balancer Service mesh cloud gateway Feature Managed (TD) Managed (istiod) Service mesh cloud gateway Kubernetes Gateway API Feature Managed (TD) Managed (istiod) Kubernetes Gateway API Load balancing policies Feature Managed (TD) Managed (istiod) Round robin Least connections Random Passthrough Consistent hash Locality GCPTrafficDistributionPolicy GCPBackendPolicy Load balancing modes Feature Managed (TD) Managed (istiod) RATE UTILIZATION CUSTOM METRICS IN-FLIGHT (Preview) For more information about balancing modes, see the Backend services overview .
- Service entry Feature Managed (TD) Managed (istiod) ServiceEntry v1beta1 † † The TRAFFIC DIRECTOR control plane implementation does not support following fields and values in fields: workloadSelector field endpoints[].network field endpoints[].locality field endpoints[].weight field endpoints[].serviceAccount field DNS ROUND ROBIN value in resolution field MESH INTERNAL value in location field Unix domain socket address in endpoints[].address field subjectAltNames field Two or more endpoints[] entries if resolution field has DNS value Destination rule Feature Managed (TD) Managed (istiod) DestinationRule v1beta1 † † The TRAFFIC DIRECTOR control plane implementation does not support following fields. trafficPolicy.loadBalancer.localityLbSetting field trafficPolicy.tunnel field trafficPolicy.tls.credentialName field trafficPolicy.portLevelSettings[].tls.credentialName field Additionally, the TRAFFIC DIRECTOR control plane implementation requires that the destination rule defining subsets is in the same namespace and cluster with the Kubernetes service or ServiceEntry.
- EnvoyFilter Feature Managed (TD) Managed (istiod) EnvoyFilter v1alpha3 † † Refer to Dataplane Extensibility page for supported fields and configurable extensions MeshConfig Feature Managed (TD) Managed (istiod) DiscoverySelectors clusterLocal LocalityLB § ExtensionProviders § CACert ImageType - distroless § OutboundTrafficPolicy § defaultProviders.accessLogging defaultProviders.tracing defaultConfig.tracing.stackdriver § accessLogFile § ProxyConfig Feature Managed (TD) Managed (istiod) HTTP/1.0 support (ISTIO META NETWORK) Image selection (distroless or base image) † Kubernetes native sidecar (ENABLE NATIVE SIDECARS) † Distroless image is used for the injection.
- Telemetry Metrics Feature Managed (TD) Managed (istiod) Cloud Monitoring (HTTP in-proxy metrics) Cloud Monitoring (TCP in-proxy metrics) Prometheus metrics export to Grafana (Envoy metrics only) Prometheus metrics export to Kiali Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard Istio Telemetry API † Custom adapters/backends, in or out of process Arbitrary telemetry and logging backends † The TRAFFIC DIRECTOR control plane supports a subset of Istio telemetry API used to configure access logs and trace .

### "Downloading the troubleshooting tool \_|\_ Cloud Service Mesh \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/downloading-istioctl](https://docs.cloud.google.com/service-mesh/docs/downloading-istioctl)
- Source ID: `site-docs-root`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Download istioctl Managed control plane Update Google Cloud CLI: gcloud components update Download the embedded Cloud Service Mesh troubleshooting tool: gcloud components install istioctl If you receive error message You cannot perform this action because the Google Cloud CLI component manager is disabled for this installation , you have previously installed Google Cloud CLI through Debian/Ubuntu .
- Use the following commands instead: Update Google Cloud CLI sudo apt-get update Download the embedded Cloud Service Mesh troubleshooting tool: sudo apt-get install google-cloud-sdk-istioctl In-cluster control plane Linux Download the Cloud Service Mesh installation file to your current working directory: curl -LO https://storage.googleapis.com/gke-release/asm/istio-1.28.5-asm.9-linux-amd64.tar.gz Download the signature file and use openssl to verify the signature: curl -LO https://storage.googleapis.com/gke-release/asm/istio-1.28.5-asm.9-linux-amd64.tar.gz.1.sig openssl dgst -verify /dev/stdin -signature istio-1.28.5-asm.9-linux-amd64.tar.gz.1.sig istio-1.28.5-asm.9-linux-amd64.tar.gz The expected output is: Verified OK .
- Ensure that you're in the Cloud Service Mesh installation's root directory. cd istio-1.28.5-asm.9 Mac OS Download the Cloud Service Mesh installation file to your current working directory: curl -LO https://storage.googleapis.com/gke-release/asm/istio-1.28.5-asm.9-osx.tar.gz Download the signature file and use openssl to verify the signature: curl -LO https://storage.googleapis.com/gke-release/asm/istio-1.28.5-asm.9-osx.tar.gz.1.sig openssl dgst -sha256 -verify /dev/stdin -signature istio-1.28.5-asm.9-osx.tar.gz.1.sig istio-1.28.5-asm.9-osx.tar.gz The expected output is: Verified OK .
- Ensure that you're in the Cloud Service Mesh installation's root directory. cd istio-1.28.5-asm.9 Windows Download the Cloud Service Mesh installation file to your current working directory: curl -LO https://storage.googleapis.com/gke-release/asm/istio-1.28.5-asm.9-win.zip Download the signature file and use openssl to verify the signature: curl -LO https://storage.googleapis.com/gke-release/asm/istio-1.28.5-asm.9-win.zip.1.sig openssl dgst -verify - -signature istio-1.28.5-asm.9-win.zip.1.sig istio-1.28.5-asm.9-win.zip The expected output is: Verified OK .

### "Migrate in-cluster to managed control plane on a new cluster \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- Create the namespace: kubectl \ --context cluster-with-csm \ create namespace onlineboutique Use the istio.io/rev=asm-managed label to add the onlineboutique namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-csm \ label namespace onlineboutique 'istio.io/rev=asm-managed' Deploy Online Boutique's 12 services, including the load generator that imitates user traffic: kubectl \ --context cluster-with-csm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/kubernetes-manifests.yaml kubectl \ --context cluster-with-csm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/virtual-service.yaml Get the external IP address of the Cloud Service Mesh ingress gateway: kubectl \ --context cluster-with-csm \ --namespace asm-ingress \ get service --output jsonpath = '{.items[0].status.loadBalancer.ingress[0].ip}' Copy the external IP address of the asm-ingressgateway Service, and access it through your web browser.
- Create the namespace: kubectl \ --context cluster-with-in-cluster-asm \ create namespace onlineboutique Use the istio.io/rev=asm-1285-9 label to add the onlineboutique namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-in-cluster-asm \ label --overwrite namespace onlineboutique istio.io/rev=asm-1285-9 The output is similar to: namespace/onlineboutique labeled Deploy Online Boutique's 12 services, including the load generator that imitates user traffic: kubectl \ --context cluster-with-in-cluster-asm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/kubernetes-manifests.yaml kubectl \ --context cluster-with-in-cluster-asm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/virtual-service.yaml Get the external IP address of the Cloud Service Mesh ingress gateway: kubectl \ --context cluster-with-in-cluster-asm \ --namespace asm-ingress \ get service --output jsonpath = '{.items[0].status.loadBalancer.ingress[0].ip}' Copy the external IP address of the ingress gateway, and access it through your web browser.
- Set the IP address of the managed Cloud Service Mesh cluster's ingress gateway inside the ServiceEntry resource: sed -i "s/1.2.3.4/ ${ INGRESS IP OF CLUSTER WITH MANAGED ASM } /" anthos-service-mesh-samples/docs/migrate-to-managed-asm/service-entry.yaml Deploy the ServiceEntry to the cluster with in-cluster Cloud Service Mesh: kubectl \ --context cluster-with-in-cluster-asm \ --namespace onlineboutique \ apply -f anthos-service-mesh-samples/docs/migrate-to-managed-asm/service-entry.yaml Deploy the VirtualService to the cluster with in-cluster Cloud Service Mesh: kubectl \ --context cluster-with-in-cluster-asm \ --namespace onlineboutique \ apply -f anthos-service-mesh-samples/docs/migrate-to-managed-asm/virtual-service-in-cluster-asm.yaml Visit the IP address of the ingress gateway of the cluster with in-cluster Cloud Service Mesh, in your web browser: kubectl \ --context cluster-with-in-cluster-asm \ --namespace asm-ingress \ get service Refresh the Online Boutique homepage multiple times, and check the footer of the page each time.
- Create the namespace: kubectl \ --context cluster-with-csm \ create namespace asm-ingress Use the istio.io/rev=asm-managed label to add the asm-ingress namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-csm \ label namespace asm-ingress 'istio.io/rev=asm-managed' Deploy the Cloud Service Mesh ingress gateway : kubectl \ --context cluster-with-csm \ --namespace = asm-ingress \ apply -f anthos-service-mesh-samples/docs/shared/asm-ingress-gateway/asm-gateway-deployment-svc.yaml kubectl \ --context cluster-with-csm \ --namespace = asm-ingress \ apply -f anthos-service-mesh-samples/docs/shared/asm-ingress-gateway/gateway.yaml The output is similar to: namespace/asm-ingress configured serviceaccount/asm-ingressgateway configured service/asm-ingressgateway configured deployment.apps/asm-ingressgateway configured gateway.networking.istio.io/asm-ingressgateway configured Note: You can browse the resources in the official Cloud Service Mesh samples GitHub repository .

### Cloud Service Mesh overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/overview](https://docs.cloud.google.com/service-mesh/docs/overview)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deployment options You have the following deployment options in Cloud Service Mesh: On Google Cloud Managed Cloud Service Mesh - managed control and data plane for GKE (recommended) Managed Cloud Service Mesh - managed control and data plane for Compute Engine with VMs (recommended) In-cluster control plane for GKE with Istio APIs (Discouraged) Off Google Cloud In-cluster control plane for Kubernetes with Istio APIs Managed Cloud Service Mesh Managed Cloud Service Mesh consists of the managed control plane for all infrastructures and the managed data plane for GKE.
- A service mesh is an architecture that enables managed, observable, and secure communication among your services, making it easier for you to create robust enterprise applications made up of many microservices on your chosen infrastructure.
- Control plane migration If you are a continuing Anthos Service Mesh customer and you use the Istio APIs, your clusters will start migrating to the Traffic Director control plane.
- Control plane implementation for new users If you are planning an off-Google Cloud configuration, you are choosing Cloud Service Mesh's in-cluster, unmanaged control plane.

