---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.765Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "In-cluster Anthos Service Mesh 1.17"
feature_slug: "in-cluster-anthos-service-mesh-1-17"
latest_feature_date: "2024-02-08"
deprecation_date: "2024-02-08"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/security-bulletins"
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial"
keywords:
  - "in"
  - "cluster"
  - "anthos"
  - "mesh"
  - "17"
  - "version"
  - "is"
  - "supported"
---

# In-cluster Anthos Service Mesh 1.17

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

In-cluster Anthos Service Mesh version 1.17 is a supported service mesh version; In-cluster Anthos Service Mesh version 1.17 is a supported service mesh version; deprecated on 2024-02-08.

## Extended Definition

In-cluster Anthos Service Mesh version 1.17 is a supported service mesh version; In-cluster Anthos Service Mesh version 1.17 is a supported service mesh version; deprecated on 2024-02-08.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/security-bulletins](https://docs.cloud.google.com/service-mesh/docs/security-bulletins)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)

## Supporting Pages

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh \_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- Source ID: `site-docs-root`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Certificate authority (CA) support Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises Other GKE Enterprise clusters Cloud Service Mesh certificate authority Certificate Authority Service Istio CA (previously known as Citadel) Plug in your own CA certificates Supported by CA service and Istio CA Supported by CA service and Istio CA Supported by Istio CA Cloud Service Mesh security features In addition to supporting Istio security features, Cloud Service Mesh provides even more capabilities to help you secure your applications.
- Cloud Service Mesh is supported on the following cluster types: Amazon EKS clusters Microsoft AKS clusters In the following tables: – indicates the feature is enabled by default. – indicates the feature is supported for the platform and can be enabled, as described in Enabling optional features or the feature guide linked in the feature table.
- Network Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises GKE on AWS GKE on Azure Attached clusters Single network Multi-network Notes: For attached clusters, only multi-cluster meshes spanning a single platform (Microsoft AKS, Amazon EKS) are supported at this time.
- User interface Feature GKE clusters on Google Cloud Google Distributed Cloud Other GKE Enterprise clusters Cloud Service Mesh dashboards in the Google Cloud console Cloud Monitoring Cloud Logging Cloud Trace Note: On-premises clusters require GKE Enterprise version 1.11 or later.

### Security bulletins \_|\_ Cloud Service Mesh \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/security-bulletins](https://docs.cloud.google.com/service-mesh/docs/security-bulletins)
- Source ID: `site-docs-root`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are running in-cluster Cloud Service Mesh, you must upgrade your cluster to one of the following patched versions: 1.20.3-asm.4 1.19.7-asm.3 1.18.7-asm.4 1.17.8-asm.20 If you're using Anthos Service Mesh v1.17 or earlier, your release has reached end of life and is no longer supported.
- If you are running in-cluster Cloud Service Mesh, you must upgrade your cluster to one of the following patched versions: 1.20.3-asm.4 1.19.7-asm.3 1.18.7-asm.4 1.17.8-asm.20 If you're using Anthos Service Mesh v1.17 or earlier, your release has reached end of life and is no longer supported.
- If you are running in-cluster Cloud Service Mesh, you must upgrade your cluster to one of the following patched versions: 1.20.3-asm.4 1.19.7-asm.3 1.18.7-asm.4 1.17.8-asm.20 If you're using Anthos Service Mesh v1.17 or earlier, your release has reached end of life and is no longer supported.
- If you are running in-cluster Cloud Service Mesh, you must upgrade your cluster to one of the following patched versions: 1.20.3-asm.4 1.19.7-asm.3 1.18.7-asm.4 1.17.8-asm.20 If you're using Anthos Service Mesh v1.17 or earlier, your release has reached end of life and is no longer supported.

### "Migrate in-cluster to managed control plane on a new cluster \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- Source ID: `site-docs-reference`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can see the version suffixed in the name of your istiod-asm- Service by running kubectl get service --context=cluster-with-in-cluster-asm --namespace=istio-system Deploy the Cloud Service Mesh ingress gateway : kubectl \ --context cluster-with-in-cluster-asm \ --namespace = asm-ingress \ apply -f anthos-service-mesh-samples/docs/shared/asm-ingress-gateway/asm-gateway-deployment-svc.yaml kubectl \ --context cluster-with-in-cluster-asm \ --namespace = asm-ingress \ apply -f anthos-service-mesh-samples/docs/shared/asm-ingress-gateway/gateway.yaml The output is similar to: serviceaccount/asm-ingressgateway created service/asm-ingressgateway created deployment.apps/asm-ingressgateway created gateway.networking.istio.io/asm-ingressgateway created Note: You can browse the resources in the official Cloud Service Mesh samples GitHub repository .
- Create the namespace: kubectl \ --context cluster-with-in-cluster-asm \ create namespace onlineboutique Use the istio.io/rev=asm-1285-9 label to add the onlineboutique namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-in-cluster-asm \ label --overwrite namespace onlineboutique istio.io/rev=asm-1285-9 The output is similar to: namespace/onlineboutique labeled Deploy Online Boutique's 12 services, including the load generator that imitates user traffic: kubectl \ --context cluster-with-in-cluster-asm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/kubernetes-manifests.yaml kubectl \ --context cluster-with-in-cluster-asm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/virtual-service.yaml Get the external IP address of the Cloud Service Mesh ingress gateway: kubectl \ --context cluster-with-in-cluster-asm \ --namespace asm-ingress \ get service --output jsonpath = '{.items[0].status.loadBalancer.ingress[0].ip}' Copy the external IP address of the ingress gateway, and access it through your web browser.
- Create the namespace: kubectl \ --context cluster-with-csm \ create namespace onlineboutique Use the istio.io/rev=asm-managed label to add the onlineboutique namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-csm \ label namespace onlineboutique 'istio.io/rev=asm-managed' Deploy Online Boutique's 12 services, including the load generator that imitates user traffic: kubectl \ --context cluster-with-csm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/kubernetes-manifests.yaml kubectl \ --context cluster-with-csm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/virtual-service.yaml Get the external IP address of the Cloud Service Mesh ingress gateway: kubectl \ --context cluster-with-csm \ --namespace asm-ingress \ get service --output jsonpath = '{.items[0].status.loadBalancer.ingress[0].ip}' Copy the external IP address of the asm-ingressgateway Service, and access it through your web browser.
- Set the IP address of the managed Cloud Service Mesh cluster's ingress gateway inside the ServiceEntry resource: sed -i "s/1.2.3.4/ ${ INGRESS IP OF CLUSTER WITH MANAGED ASM } /" anthos-service-mesh-samples/docs/migrate-to-managed-asm/service-entry.yaml Deploy the ServiceEntry to the cluster with in-cluster Cloud Service Mesh: kubectl \ --context cluster-with-in-cluster-asm \ --namespace onlineboutique \ apply -f anthos-service-mesh-samples/docs/migrate-to-managed-asm/service-entry.yaml Deploy the VirtualService to the cluster with in-cluster Cloud Service Mesh: kubectl \ --context cluster-with-in-cluster-asm \ --namespace onlineboutique \ apply -f anthos-service-mesh-samples/docs/migrate-to-managed-asm/virtual-service-in-cluster-asm.yaml Visit the IP address of the ingress gateway of the cluster with in-cluster Cloud Service Mesh, in your web browser: kubectl \ --context cluster-with-in-cluster-asm \ --namespace asm-ingress \ get service Refresh the Online Boutique homepage multiple times, and check the footer of the page each time.

### "Using Cloud Service Mesh egress gateways on GKE clusters: Tutorial \_|\_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)
- Source ID: `site-docs-reference`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google recommends that the cluster be subscribed to the "regular" release channel to ensure that nodes are running a Kubernetes version that is supported by Cloud Service Mesh.
- Connections on port 80 still use mTLS: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1alpha3 kind : DestinationRule metadata : name : target-egress-gateway namespace : istio-egress spec : host : istio-egressgateway.istio-egress.svc.cluster.local subsets : - name : target-egress-gateway-mTLS trafficPolicy : portLevelSettings : - port : number : 80 tls : mode : ISTIO MUTUAL - name : target-egress-gateway-TLS-passthrough EOF Update the virtual service for example.com so that TLS traffic on port 443 is passed through the gateway: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1alpha3 kind : VirtualService metadata : name : example-com-through-egress-gateway namespace : istio-egress spec : hosts : - example.com gateways : - mesh - istio-egress/egress-gateway http : - match : - gateways : - mesh port : 80 route : - destination : host : istio-egressgateway.istio-egress.svc.cluster.local subset : target-egress-gateway-mTLS port : number : 80 - match : - gateways : - istio-egress/egress-gateway port : 80 route : - destination : host : example.com port : number : 443 subset : example-com-originate-TLS weight : 100 tls : - match : - gateways : - mesh port : 443 sniHosts : - example.com route : - destination : host : istio-egressgateway.istio-egress.svc.cluster.local subset : target-egress-gateway-TLS-passthrough port : number : 443 - match : - gateways : - istio-egress/egress-gateway port : 443 sniHosts : - example.com route : - destination : host : example.com port : number : 443 weight : 100 exportTo : - 'istio-egress' - 'team-x' EOF Update the virtual service for httpbin.org so that TLS traffic on port 443 is passed through the gateway: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : VirtualService metadata : name : httpbin-org-through-egress-gateway namespace : istio-egress spec : hosts : - httpbin.org gateways : - istio-egress/egress-gateway - mesh http : - match : - gateways : - mesh port : 80 route : - destination : host : istio-egressgateway.istio-egress.svc.cluster.local subset : target-egress-gateway-mTLS port : number : 80 weight : 100 - match : - gateways : - istio-egress/egress-gateway port : 80 route : - destination : host : httpbin.org port : number : 80 weight : 100 tls : - match : - gateways : - mesh port : 443 sniHosts : - httpbin.org route : - destination : host : istio-egressgateway.istio-egress.svc.cluster.local subset : target-egress-gateway-TLS-passthrough port : number : 443 - match : - gateways : - istio-egress/egress-gateway port : 443 sniHosts : - httpbin.org route : - destination : host : httpbin.org port : number : 443 weight : 100 exportTo : - 'istio-egress' - 'team-x' - 'team-y' EOF Add an authorization policy that accepts any kind of traffic sent to port 443 of the egress gateway service.
- Create a Sidecar resource for the team-y namespace: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : Sidecar metadata : name : default namespace : team-y spec : outboundTrafficPolicy : mode : REGISTRY ONLY egress : - hosts : - 'istio-egress/ ' - 'team-y/ ' EOF Deploy the test application to the team-y namespace: kubectl -n team-y create -f ./test.yaml Register a second external host and export it to the team-x and the team-y namespace: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : ServiceEntry metadata : name : httpbin-org-ext namespace : istio-egress labels : Show this service and its telemetry in the Cloud Service Mesh page of the Google Cloud console service.istio.io/canonical-name : httpbin.org spec : hosts : - httpbin.org ports : - number : 80 name : http protocol : HTTP - number : 443 name : tls protocol : TLS resolution : DNS location : MESH EXTERNAL exportTo : - 'istio-egress' - 'team-x' - 'team-y' EOF Create a virtual service to route traffic to httpbin.org through the egress gateway: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : VirtualService metadata : name : httpbin-org-through-egress-gateway namespace : istio-egress spec : hosts : - httpbin.org gateways : - istio-egress/egress-gateway - mesh http : - match : - gateways : - mesh port : 80 route : - destination : host : istio-egressgateway.istio-egress.svc.cluster.local subset : target-egress-gateway-mTLS port : number : 80 weight : 100 - match : - gateways : - istio-egress/egress-gateway port : 80 route : - destination : host : httpbin.org port : number : 80 weight : 100 exportTo : - 'istio-egress' - 'team-x' - 'team-y' EOF Run istioctl analyze to check for configuration errors: ${ ISTIOCTL } analyze -n istio-egress --revision REVISION You see: ✔ No validation issues found when analyzing namespace: istio-egress.
- The DestinationRule specifies that the gateway originate a TLS connection to example.com. cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : DestinationRule metadata : name : example-com-originate-tls namespace : istio-egress spec : host : example.com subsets : - name : example-com-originate-TLS trafficPolicy : portLevelSettings : - port : number : 443 tls : mode : SIMPLE sni : example.com EOF Update the virtual service for example.com so that requests to port 80 on the gateway are upgraded to TLS on port 443 when they are sent to the destination host: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1alpha3 kind : VirtualService metadata : name : example-com-through-egress-gateway namespace : istio-egress spec : hosts : - example.com gateways : - mesh - istio-egress/egress-gateway http : - match : - gateways : - mesh port : 80 route : - destination : host : istio-egressgateway.istio-egress.svc.cluster.local subset : target-egress-gateway-mTLS port : number : 80 - match : - gateways : - istio-egress/egress-gateway port : 80 route : - destination : host : example.com port : number : 443 subset : example-com-originate-TLS weight : 100 EOF Make several requests to example.com from the test app in the team-x namespace: for i in { 1 ..4 } do kubectl -n team-x exec -it $( kubectl -n team-x get pod -l app = test \ -o jsonpath ={ .items..metadata.name } ) -c test -- curl -I http://example.com done As before, the requests succeed with 200 OK responses.

