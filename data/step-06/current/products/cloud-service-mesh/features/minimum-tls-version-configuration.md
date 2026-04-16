---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.774Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Minimum TLS version configuration"
feature_slug: "minimum-tls-version-configuration"
latest_feature_date: "2022-07-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed"
  - "https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial"
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls"
  - "https://docs.cloud.google.com/service-mesh/docs/security-bulletins"
keywords:
  - "minimum"
  - "tls"
  - "version"
  - "configuration"
  - "mesh"
  - "lets"
  - "you"
  - "configure"
---

# Minimum TLS version configuration

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Cloud Service Mesh lets you configure the minimum TLS version for Istio workloads; Cloud Service Mesh lets you configure the minimum TLS version for Istio workloads.

## Extended Definition

Cloud Service Mesh lets you configure the minimum TLS version for Istio workloads; Cloud Service Mesh lets you configure the minimum TLS version for Istio workloads.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed)
- [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls](https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls)
- [https://docs.cloud.google.com/service-mesh/docs/security-bulletins](https://docs.cloud.google.com/service-mesh/docs/security-bulletins)

## Supporting Pages

### "Enable optional features on managed control plane \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed)
- Source ID: `site-docs-reference`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure the minimum TLS version for your workloads If you directly onboarded to Cloud Service Mesh with a managed TRAFFIC DIRECTOR control plane implementation , then you cannot change this setting.
- The following configuration configures the outboundTrafficPolicy to REGISTRY ONLY : apiVersion : v1 kind : ConfigMap metadata : name : istio- release-channel namespace : istio-system data : mesh : - outboundTrafficPolicy: mode: REGISTRY ONLY where release-channel is your release channel ( asm-managed , asm-managed-stable , or asm-managed-rapid ).
- For more information on setting the minimum TLS version and checking the TLS configuration of your workloads, see Istio Workload Minimum TLS Version Configuration .
- The following example shows a ConfigMap setting the minimum TLS version for workloads to 1.3: apiVersion : v1 kind : ConfigMap metadata : name : istio- release-channel namespace : istio-system data : mesh : - meshMTLS: minProtocolVersion: TLSV1 3 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Using Cloud Service Mesh egress gateways on GKE clusters: Tutorial \_|\_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Create a Sidecar resource for the team-y namespace: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : Sidecar metadata : name : default namespace : team-y spec : outboundTrafficPolicy : mode : REGISTRY ONLY egress : - hosts : - 'istio-egress/ ' - 'team-y/ ' EOF Deploy the test application to the team-y namespace: kubectl -n team-y create -f ./test.yaml Register a second external host and export it to the team-x and the team-y namespace: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : ServiceEntry metadata : name : httpbin-org-ext namespace : istio-egress labels : Show this service and its telemetry in the Cloud Service Mesh page of the Google Cloud console service.istio.io/canonical-name : httpbin.org spec : hosts : - httpbin.org ports : - number : 80 name : http protocol : HTTP - number : 443 name : tls protocol : TLS resolution : DNS location : MESH EXTERNAL exportTo : - 'istio-egress' - 'team-x' - 'team-y' EOF Create a virtual service to route traffic to httpbin.org through the egress gateway: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : VirtualService metadata : name : httpbin-org-through-egress-gateway namespace : istio-egress spec : hosts : - httpbin.org gateways : - istio-egress/egress-gateway - mesh http : - match : - gateways : - mesh port : 80 route : - destination : host : istio-egressgateway.istio-egress.svc.cluster.local subset : target-egress-gateway-mTLS port : number : 80 weight : 100 - match : - gateways : - istio-egress/egress-gateway port : 80 route : - destination : host : httpbin.org port : number : 80 weight : 100 exportTo : - 'istio-egress' - 'team-x' - 'team-y' EOF Run istioctl analyze to check for configuration errors: ${ ISTIOCTL } analyze -n istio-egress --revision REVISION You see: ✔ No validation issues found when analyzing namespace: istio-egress.
- Create a service entry for the GKE metadata server: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : ServiceEntry metadata : name : metadata-google-internal namespace : istio-egress labels : Show this service and its telemetry in the Cloud Service Mesh page of the Google Cloud console service.istio.io/canonical-name : metadata.google.internal spec : hosts : - metadata.google.internal ports : - number : 80 name : http protocol : HTTP - number : 443 name : tls protocol : TLS resolution : DNS location : MESH EXTERNAL exportTo : - 'istio-egress' - 'team-x' EOF Also create a service entry for private.googleapis.com and storage.googleapis.com: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : ServiceEntry metadata : name : private-googleapis-com namespace : istio-egress labels : Show this service and its telemetry in the Cloud Service Mesh page of the Google Cloud console service.istio.io/canonical-name : googleapis.com spec : hosts : - private.googleapis.com - storage.googleapis.com ports : - number : 80 name : http protocol : HTTP - number : 443 name : tls protocol : TLS resolution : DNS location : MESH EXTERNAL exportTo : - 'istio-egress' - 'team-x' EOF Verify that the Kubernetes service account is correctly configured to act as the Google service account: kubectl -n team-x exec -it $( kubectl -n team-x get pod -l app = test \ -o jsonpath ={ .items..metadata.name } ) -c test -- gcloud auth list You see the Google service account listed as the active and only identity.
- Apply a default PeerAuthentication policy for the mesh in the istio-system namespace: cat <<EOF kubectl apply -f - apiVersion : "security.istio.io/v1beta1" kind : "PeerAuthentication" metadata : name : "default" namespace : "istio-system" spec : mtls : mode : STRICT EOF You can override this configuration by creating PeerAuthentication resources in specific namespaces.
- Later steps in this tutorial explain how to configure different egress routing rules for each namespace. kubectl create namespace team-x kubectl create namespace team-y Label the namespaces so that they can be selected by Kubernetes network policies: kubectl label namespace team-x team = x kubectl label namespace team-y team = y For Cloud Service Mesh to automatically inject proxy sidecars, you set the control plane revision label on the workload namespaces: kubectl label ns team-x istio.io/rev- istio-injection = enabled --overwrite kubectl label ns team-y istio.io/rev- istio-injection = enabled --overwrite Create a YAML file to use for making test deployments: cat << 'EOF' > ./test.yaml apiVersion : v1 kind : ServiceAccount metadata : name : test --- apiVersion : v1 kind : Service metadata : name : test labels : app : test spec : ports : - port : 80 name : http selector : app : test --- apiVersion : apps/v1 kind : Deployment metadata : name : test spec : replicas : 1 selector : matchLabels : app : test template : metadata : labels : app : test spec : serviceAccountName : test containers : - name : test image : gcr.io/google.com/cloudsdktool/cloud-sdk:slim command : [ "/bin/sleep" , "infinity" ] imagePullPolicy : IfNotPresent EOF Deploy the test application to the team-x namespace: kubectl -n team-x create -f ./test.yaml Verify that the test application is deployed to a node in the default pool and that a proxy sidecar container is injected.

### Cloud Service Mesh by example: mTLS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls](https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Apply the authentication policy to configure all Online Boutique services to only accept mTLS: for ns in ad cart checkout currency email frontend loadgenerator \ payment product - catalog recommendation shipping ; do kubectl apply - n $ ns - f mtls - namespace . yaml done Expected output: peerauthentication.security.istio.io/namespace-policy created peerauthentication.security.istio.io/namespace-policy created peerauthentication.security.istio.io/namespace-policy created peerauthentication.security.istio.io/namespace-policy created peerauthentication.security.istio.io/namespace-policy created peerauthentication.security.istio.io/namespace-policy created peerauthentication.security.istio.io/namespace-policy created peerauthentication.security.istio.io/namespace-policy created peerauthentication.security.istio.io/namespace-policy created peerauthentication.security.istio.io/namespace-policy created peerauthentication.security.istio.io/namespace-policy created Go to the tab in your browser that accesses the Online Boutique using the external IP address of the frontend-external service: http : // FRONTEND EXTERNAL IP / Refresh the page.
- Apply the revision label to the namespace: kubectl label namespace asm-ingress \ istio-injection- istio.io/rev = REVISION LABEL --overwrite Deploy the example gateway in the anthos-service-mesh-samples repository: kubectl apply -n asm-ingress \ -f docs/shared/asm-ingress-gateway Expected output: serviceaccount/asm-ingressgateway configured service/asm-ingressgateway configured deployment.apps/asm-ingressgateway configured gateway.networking.istio.io/asm-ingressgateway configured Deploy the Online Boutique sample application If you haven't, set the current context for kubectl to the cluster: gcloud container clusters get-credentials CLUSTER NAME \ --project= PROJECT ID \ --zone= CLUSTER LOCATION Create the namespace for the sample application: kubectl create namespace onlineboutique Label the onlineboutique namespace to automatically inject Envoy proxies.
- Notice how the following policy uses labels and selectors to target the specific frontend deployment. cat <<EOF kubectl apply -n frontend -f - apiVersion: "security.istio.io/v1beta1" kind: "PeerAuthentication" metadata: name: "frontend" namespace: "frontend" spec: selector: matchLabels: app: frontend mtls: mode: STRICT EOF Expected output: peerauthentication.security.istio.io/frontend created Configure a matching destination rule. cat <<EOF kubectl apply -n frontend -f - apiVersion: "networking.istio.io/v1alpha3" kind: "DestinationRule" metadata: name: "frontend" spec: host: "frontend.demo.svc.cluster.local" trafficPolicy: tls: mode: ISTIO MUTUAL EOF Expected output: destinationrule.networking.istio.io/frontend created Access the Online Boutique using the external IP address of the frontend-external service, and refresh the page.
- Delete the authentication policy: kubectl delete peerauthentication -n frontend frontend Expected output: peerauthentication.security.istio.io "frontend" deleted Delete the destination rule: kubectl delete destinationrule -n frontend frontend Expected output: destinationrule.networking.istio.io "frontend" deleted Enforcing mesh-wide mTLS To prevent all your services in the mesh from accepting plaintext traffic, set a mesh-wide PeerAuthentication policy with the mTLS mode set to STRICT .

### Security bulletins \_|\_ Cloud Service Mesh \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/security-bulletins](https://docs.cloud.google.com/service-mesh/docs/security-bulletins)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- To opt-out, you can configure your installation as follows: apiVersion: install.istio.io/v1alpha1 kind: IstioOperator metadata: name: opt-out-fragment-cve-fix namespace: istio-system spec: meshConfig: defaultConfig: proxyMetadata: HTTP STRIP FRAGMENT FROM PATH UNSAFE IF DISABLED: "false" Note: Opting out of this behavior makes your cluster vulnerable to this CVE.
- Mitigation Upgrade your cluster to the following patch version: 1.10.4-asm.6 High CVE-2021-32780 GCP-2021-012 Published: 2021-06-24 Description Severity Notes The Istio secure Gateway or workloads using the DestinationRule can load TLS private keys and certificates from Kubernetes secrets via the credentialName configuration.
- Check if your clusters are impacted Your cluster is impacted if it uses an in-cluster Cloud Service Mesh patch version earlier than: 1.27.4-asm.1 1.26.7-asm.1 1.25.6-asm.1 Your cluster is impacted if it uses a managed Cloud Service Mesh version earlier than: 1.21.6-asm.7 1.20.8-asm.59 1.19.10-asm.54 Mitigation For in-cluster Cloud Service Mesh, upgrade your cluster to one of the following patched versions: 1.27.4-asm.1 1.26.7-asm.1 1.25.6-asm.1 If you're using Cloud Service Mesh v1.24 or earlier, your release has reached end of life and is no longer supported.
- Mitigation If you are running standalone Cloud Service Mesh , upgrade your cluster to one of the following patched versions: If you're using Anthos Service Mesh 1.14, upgrade to v1.14.4-asm.2 If you're using Anthos Service Mesh 1.13, upgrade to v1.13.8-asm.4 If you're using Anthos Service Mesh 1.12, upgrade to v1.12.9-asm.3 If you are running managed Cloud Service Mesh , your system will be automatically updated within the next few days.

