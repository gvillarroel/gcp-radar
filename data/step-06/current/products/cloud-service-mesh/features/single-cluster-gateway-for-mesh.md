---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.764Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Single Cluster Gateway for Mesh"
feature_slug: "single-cluster-gateway-for-mesh"
latest_feature_date: "2024-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial"
  - "https://docs.cloud.google.com/service-mesh/docs/gateway/prepare-gateway"
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/security-bulletins"
keywords:
  - "single"
  - "cluster"
  - "gateway"
  - "for"
  - "mesh"
  - "provides"
  - "api"
  - "based"
---

# Single Cluster Gateway for Mesh

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Single Cluster Gateway for Mesh provides Gateway API-based ingress for Cloud Service Mesh in a single cluster; Single Cluster Gateway for Mesh provides Gateway API-based ingress for Cloud Service Mesh in a single cluster.

## Extended Definition

Single Cluster Gateway for Mesh provides Gateway API-based ingress for Cloud Service Mesh in a single cluster; Single Cluster Gateway for Mesh provides Gateway API-based ingress for Cloud Service Mesh in a single cluster.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)
- [https://docs.cloud.google.com/service-mesh/docs/gateway/prepare-gateway](https://docs.cloud.google.com/service-mesh/docs/gateway/prepare-gateway)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/security-bulletins](https://docs.cloud.google.com/service-mesh/docs/security-bulletins)

## Supporting Pages

### "Using Cloud Service Mesh egress gateways on GKE clusters: Tutorial \_|\_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)
- Source ID: `site-docs-reference`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use a single shared destination rule for all external hosts. cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : DestinationRule metadata : name : target-egress-gateway namespace : istio-egress spec : host : istio-egressgateway.istio-egress.svc.cluster.local subsets : - name : target-egress-gateway-mTLS trafficPolicy : tls : mode : ISTIO MUTUAL EOF Create a ServiceEntry in the egress namespace to explicitly register example.com in the mesh's service registry for the team-x namespace: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : ServiceEntry metadata : name : example-com-ext namespace : istio-egress labels : Show this service and its telemetry in the Cloud Service Mesh page of the Google Cloud console service.istio.io/canonical-name : example.com spec : hosts : - example.com ports : - number : 80 name : http protocol : HTTP - number : 443 name : tls protocol : TLS resolution : DNS location : MESH EXTERNAL exportTo : - 'team-x' - 'istio-egress' EOF Configuring different egress routing for each namespace The exportTo property controls which namespaces can use the service entry.
- Connections on port 80 still use mTLS: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1alpha3 kind : DestinationRule metadata : name : target-egress-gateway namespace : istio-egress spec : host : istio-egressgateway.istio-egress.svc.cluster.local subsets : - name : target-egress-gateway-mTLS trafficPolicy : portLevelSettings : - port : number : 80 tls : mode : ISTIO MUTUAL - name : target-egress-gateway-TLS-passthrough EOF Update the virtual service for example.com so that TLS traffic on port 443 is passed through the gateway: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1alpha3 kind : VirtualService metadata : name : example-com-through-egress-gateway namespace : istio-egress spec : hosts : - example.com gateways : - mesh - istio-egress/egress-gateway http : - match : - gateways : - mesh port : 80 route : - destination : host : istio-egressgateway.istio-egress.svc.cluster.local subset : target-egress-gateway-mTLS port : number : 80 - match : - gateways : - istio-egress/egress-gateway port : 80 route : - destination : host : example.com port : number : 443 subset : example-com-originate-TLS weight : 100 tls : - match : - gateways : - mesh port : 443 sniHosts : - example.com route : - destination : host : istio-egressgateway.istio-egress.svc.cluster.local subset : target-egress-gateway-TLS-passthrough port : number : 443 - match : - gateways : - istio-egress/egress-gateway port : 443 sniHosts : - example.com route : - destination : host : example.com port : number : 443 weight : 100 exportTo : - 'istio-egress' - 'team-x' EOF Update the virtual service for httpbin.org so that TLS traffic on port 443 is passed through the gateway: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : VirtualService metadata : name : httpbin-org-through-egress-gateway namespace : istio-egress spec : hosts : - httpbin.org gateways : - istio-egress/egress-gateway - mesh http : - match : - gateways : - mesh port : 80 route : - destination : host : istio-egressgateway.istio-egress.svc.cluster.local subset : target-egress-gateway-mTLS port : number : 80 weight : 100 - match : - gateways : - istio-egress/egress-gateway port : 80 route : - destination : host : httpbin.org port : number : 80 weight : 100 tls : - match : - gateways : - mesh port : 443 sniHosts : - httpbin.org route : - destination : host : istio-egressgateway.istio-egress.svc.cluster.local subset : target-egress-gateway-TLS-passthrough port : number : 443 - match : - gateways : - istio-egress/egress-gateway port : 443 sniHosts : - httpbin.org route : - destination : host : httpbin.org port : number : 443 weight : 100 exportTo : - 'istio-egress' - 'team-x' - 'team-y' EOF Add an authorization policy that accepts any kind of traffic sent to port 443 of the egress gateway service.
- Create a Sidecar resource for the team-y namespace: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : Sidecar metadata : name : default namespace : team-y spec : outboundTrafficPolicy : mode : REGISTRY ONLY egress : - hosts : - 'istio-egress/ ' - 'team-y/ ' EOF Deploy the test application to the team-y namespace: kubectl -n team-y create -f ./test.yaml Register a second external host and export it to the team-x and the team-y namespace: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : ServiceEntry metadata : name : httpbin-org-ext namespace : istio-egress labels : Show this service and its telemetry in the Cloud Service Mesh page of the Google Cloud console service.istio.io/canonical-name : httpbin.org spec : hosts : - httpbin.org ports : - number : 80 name : http protocol : HTTP - number : 443 name : tls protocol : TLS resolution : DNS location : MESH EXTERNAL exportTo : - 'istio-egress' - 'team-x' - 'team-y' EOF Create a virtual service to route traffic to httpbin.org through the egress gateway: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : VirtualService metadata : name : httpbin-org-through-egress-gateway namespace : istio-egress spec : hosts : - httpbin.org gateways : - istio-egress/egress-gateway - mesh http : - match : - gateways : - mesh port : 80 route : - destination : host : istio-egressgateway.istio-egress.svc.cluster.local subset : target-egress-gateway-mTLS port : number : 80 weight : 100 - match : - gateways : - istio-egress/egress-gateway port : 80 route : - destination : host : httpbin.org port : number : 80 weight : 100 exportTo : - 'istio-egress' - 'team-x' - 'team-y' EOF Run istioctl analyze to check for configuration errors: ${ ISTIOCTL } analyze -n istio-egress --revision REVISION You see: ✔ No validation issues found when analyzing namespace: istio-egress.
- The DestinationRule specifies that the gateway originate a TLS connection to example.com. cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : DestinationRule metadata : name : example-com-originate-tls namespace : istio-egress spec : host : example.com subsets : - name : example-com-originate-TLS trafficPolicy : portLevelSettings : - port : number : 443 tls : mode : SIMPLE sni : example.com EOF Update the virtual service for example.com so that requests to port 80 on the gateway are upgraded to TLS on port 443 when they are sent to the destination host: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1alpha3 kind : VirtualService metadata : name : example-com-through-egress-gateway namespace : istio-egress spec : hosts : - example.com gateways : - mesh - istio-egress/egress-gateway http : - match : - gateways : - mesh port : 80 route : - destination : host : istio-egressgateway.istio-egress.svc.cluster.local subset : target-egress-gateway-mTLS port : number : 80 - match : - gateways : - istio-egress/egress-gateway port : 80 route : - destination : host : example.com port : number : 443 subset : example-com-originate-TLS weight : 100 EOF Make several requests to example.com from the test app in the team-x namespace: for i in { 1 ..4 } do kubectl -n team-x exec -it $( kubectl -n team-x get pod -l app = test \ -o jsonpath ={ .items..metadata.name } ) -c test -- curl -I http://example.com done As before, the requests succeed with 200 OK responses.

### "Prepare to setup the Gateway API for Cloud Service Mesh \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/gateway/prepare-gateway](https://docs.cloud.google.com/service-mesh/docs/gateway/prepare-gateway)
- Source ID: `site-docs-root-2`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Install custom resource definitions Generate a kubeconfig entry for your cluster: gcloud container clusters get-credentials CLUSTER NAME --location LOCATION --project PROJECT ID where: CLUSTER NAME is the name of your cluster LOCATION is the location of your cluster PROJECT ID is the project ID of your cluster Install the GRPCRoute custom resource definition (CRD): curl https://raw.githubusercontent.com/kubernetes-sigs/gateway-api/v1.1.0/config/crd/standard/gateway.networking.k8s.io grpcroutes.yaml \ kubectl apply -f - The output is similar to: customresourcedefinition.apiextensions.k8s.io/grpcroutes.gateway.networking.k8s.io created What's next Set up an Envoy sidecar service mesh on GKE Set up a proxyless gRPC service mesh on GKE Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Grant the trafficdirector.client role: gcloud projects add-iam-policy-binding PROJECT ID \ --member "group: PROJECT ID .svc.id.goog:/allAuthenticatedUsers/" \ --role "roles/trafficdirector.client" Enable Cloud Service Mesh Enable the mesh feature: gcloud container fleet mesh enable --project PROJECT ID Update the mesh to use the Gateway API: gcloud alpha container fleet mesh update \ --config-api gateway \ --memberships CLUSTER NAME \ --project PROJECT ID Verify the update by describing the status of Cloud Service Mesh resource: gcloud alpha container fleet mesh describe \ --project PROJECT ID Set your fleet new memberships to use the Gateway API by default (optional) Alternatively, you can create fleet-level default settings for new GKE clusters registered to the fleet during cluster creation to be automatically configured with Gateway API.
- Prepare to setup the Gateway API for Cloud Service Mesh This page describes how to install the required custom resource definitions for the gateway into your cluster.
- Enable the APIs Create and register a GKE cluster gcloud Create a GKE cluster: gcloud container clusters create CLUSTER NAME \ --location = LOCATION \ --enable-ip-alias \ --scopes = https://www.googleapis.com/auth/cloud-platform \ --release-channel = regular \ --project = PROJECT ID \ --gateway-api = standard \ --workload-pool = PROJECT ID .svc.id.goog \ --workload-metadata = GKE METADATA where: CLUSTER NAME is the name of your cluster LOCATION is the location of your cluster PROJECT ID is the project ID of your cluster Console Go to the Google Kubernetes Engine page in the Google Cloud console.

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh \_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- Source ID: `site-docs-root`
- Final score: 233
- Re-rank relevance: N/A

Evidence snippets:
- Telemetry Metrics Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises Other GKE Enterprise clusters Cloud Monitoring (HTTP in-proxy metrics) Cloud Monitoring (TCP in-proxy metrics) Istio Telemetry API Custom adapters/backends, in or out of process Arbitrary telemetry and logging backends Prometheus metrics export to customer-installed Prometheus, Grafana, and Kiali dashboards Compatible Compatible Compatible Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard The topology graph in the Google Cloud console no longer uses the Mesh telemetry service as its data source.
- Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Ingress Gateway with class: istio HttpRoute using parentRef Mesh traffic Configuring Istio CRDs using the targetRef field including AuthorizationPolicy, RequestAuthentication, Telemetry and WasmPlugin Warning: Microsoft AKS attached and GKE on Azure clusters require an additional step to use the Kubernetes Gateway API.
- For information on configuring load balancers, see the following: Setting up your load balancer for Google Distributed Cloud (software only) for VMware GKE on AWS: Creating a load balancer Expose an ingress gateway using an external load balancer Kubernetes Gateway API (preview) In Cloud Service Mesh v1.20 the Kubernetes Gateway API is available as a public preview.
- CRD support Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Istio API support (exceptions below) custom Envoy filters Load balancer for the Istio ingress gateway Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Third-party external load balancer Google Cloud Internal load balancer Not supported.

### Security bulletins \_|\_ Cloud Service Mesh \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/security-bulletins](https://docs.cloud.google.com/service-mesh/docs/security-bulletins)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: N/A

Evidence snippets:
- Check if your clusters are impacted Your cluster is impacted if it uses an in-cluster Cloud Service Mesh patch version earlier than: 1.27.4-asm.1 1.26.7-asm.1 1.25.6-asm.1 Your cluster is impacted if it uses a managed Cloud Service Mesh version earlier than: 1.21.6-asm.7 1.20.8-asm.59 1.19.10-asm.54 Mitigation For in-cluster Cloud Service Mesh, upgrade your cluster to one of the following patched versions: 1.27.4-asm.1 1.26.7-asm.1 1.25.6-asm.1 If you're using Cloud Service Mesh v1.24 or earlier, your release has reached end of life and is no longer supported.
- Check if your clusters are impacted Your cluster is impacted if patch versions earlier than: 1.23.4-asm.1 1.22.7-asm.1 1.21.5-asm.17 1.20.8-asm.14 1.19.10-asm.24 Mitigation For in-cluster Cloud Service Mesh, Upgrade your cluster to one of the following patched versions: 1.23.4-asm.1 1.22.7-asm.1 1.21.5-asm.17 If you're using Cloud Service Mesh v1.20 or earlier, your release has reached end of life and is no longer supported.
- Check if your clusters are impacted Your cluster is impacted if patch versions earlier than: 1.23.4-asm.1 1.22.7-asm.1 Mitigation For in-cluster Cloud Service Mesh, Upgrade your cluster to one of the following patched versions: 1.23.4-asm.1 1.22.7-asm.1 If you're using Cloud Service Mesh v1.20 or earlier, your release has reached end of life and is no longer supported.
- To opt-out, you can configure your installation as follows: apiVersion: install.istio.io/v1alpha1 kind: IstioOperator metadata: name: opt-out-fragment-cve-fix namespace: istio-system spec: meshConfig: defaultConfig: proxyMetadata: HTTP STRIP FRAGMENT FROM PATH UNSAFE IF DISABLED: "false" Note: Opting out of this behavior makes your cluster vulnerable to this CVE.

