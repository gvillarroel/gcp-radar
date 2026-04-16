---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.771Z"
product_name: "Managed Cloud Service Mesh"
product_slug: "managed-cloud-service-mesh"
feature_name: "Cloud Service Mesh service routing APIs"
feature_slug: "cloud-service-mesh-service-routing-apis"
latest_feature_date: "2025-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/prepare-service-routing-envoy-proxyless"
  - "https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh"
  - "https://docs.cloud.google.com/service-mesh/v1.20/docs/automate-tls"
  - "https://docs.cloud.google.com/service-mesh/v1.20/docs/security/egress-gateway-gke-tutorial"
keywords:
  - "mesh"
  - "routing"
  - "apis"
  - "enables"
  - "traffic"
  - "between"
  - "run"
  - "kubernetes"
---

# Cloud Service Mesh service routing APIs

Product: Managed Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Enables traffic routing between Cloud Run, Google Kubernetes Engine, and Google Compute Engine services using Cloud Service Mesh service routing APIs; Enables traffic routing between Cloud Run, Google Kubernetes Engine, and Google Compute Engine services using Cloud Service Mesh service routing APIs.

## Extended Definition

Enables traffic routing between Cloud Run, Google Kubernetes Engine, and Google Compute Engine services using Cloud Service Mesh service routing APIs; Enables traffic routing between Cloud Run, Google Kubernetes Engine, and Google Compute Engine services using Cloud Service Mesh service routing APIs.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/prepare-service-routing-envoy-proxyless](https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/prepare-service-routing-envoy-proxyless)
- [https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh](https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh)
- [https://docs.cloud.google.com/service-mesh/v1.20/docs/automate-tls](https://docs.cloud.google.com/service-mesh/v1.20/docs/automate-tls)
- [https://docs.cloud.google.com/service-mesh/v1.20/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/v1.20/docs/security/egress-gateway-gke-tutorial)

## Supporting Pages

### "Prepare to set up on service routing APIs with Envoy and proxyless workloads\

- URL: [https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/prepare-service-routing-envoy-proxyless](https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/prepare-service-routing-envoy-proxyless)
- Source ID: `site-docs-reference`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On the Network Services API page, click Enable . gcloud Run the following command: gcloud services enable osconfig.googleapis.com \ trafficdirector.googleapis.com \ compute.googleapis.com \ networkservices.googleapis.com xDS version The service routing APIs require you to use xDS v3.
- Continue the setup process After you complete the prerequisites described in this document, continue with one of these documents if you are configuring Cloud Service Mesh with the service routing APIs: Set up proxyless gRPC services with a Mesh resource Set up Envoy proxies with HTTP services Set up an ingress gateway Set up TCP services with a TCPRoute resource Set up cross-project references with Mesh and Route resources Set up Gateway TLS routing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To apply the role to the service account, click Save . gcloud Run the following command: gcloud projects add-iam-policy-binding PROJECT \ --member serviceAccount: SERVICE ACCOUNT EMAIL \ --role=roles/trafficdirector.client Replace the following: PROJECT : enter gcloud config get-value project SERVICE ACCOUNT EMAIL : the email associated with the service account Enable the required APIs Enable the following required APIs. osconfig.googleapis.com trafficdirector.googleapis.com compute.googleapis.com networkservices.googleapis.com To enable the required APIs, use the following instructions.
- Before you read this guide, familiarize yourself with the following documents, which provide an overview of using Cloud Service Mesh with the service routing APIs and Gateway APIs: Cloud Service Mesh overview Cloud Service Mesh service routing APIs overview Prerequisites Prepare your environment by completing the following tasks: Set up projects to suit your business needs.

### "Install Cloud Service Mesh for Kubernetes workloads off Google Cloud \_\

- URL: [https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh](https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh)
- Source ID: `site-docs-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that for Kubernetes workloads on Google Cloud, we recommend provisioning a managed control plane For instructions to prepare an offline installation of Cloud Service Mesh, see Prepare an offline installation of Cloud Service Mesh You will need to specify the --offline and --output dir options when running asmcli install .
- This page explains how to install unmanaged, in-cluster Cloud Service Mesh for Kubernetes workloads off Google Cloud: Run asmcli to do a new installation of Cloud Service Mesh 1.26.8-asm.3.
- Install Cloud Service Mesh for Kubernetes workloads off Google Cloud Note: This guide only supports Cloud Service Mesh with Istio APIs and does not support Google Cloud APIs.
- Private Set the current context to your user cluster: kubectl config use-context CLUSTER NAME Save the following YAML to a file called istio-operator-internal-lb.yaml : apiVersion: install.istio.io/v1alpha1 kind: IstioOperator spec: components: ingressGateways: - enabled: true k8s: serviceAnnotations: service.beta.kubernetes.io/aws-load-balancer-internal: "true" name: istio-ingressgateway Run asmcli install : ./asmcli install \ --fleet id FLEET PROJECT ID \ --kubeconfig KUBECONFIG FILE \ --output dir DIR PATH \ --platform multicloud \ --enable all \ --ca citadel \ --ca cert FILE PATH \ --ca key FILE PATH \ --root cert FILE PATH \ --cert chain FILE PATH --custom overlay istio-operator-internal-lb.yaml \ --option stackdriver --fleet id The project ID of the fleet host project . --kubeconfig The full path to the kubeconfig file .

### "Automate TLS certificate management for Cloud Service Mesh ingress gateway\

- URL: [https://docs.cloud.google.com/service-mesh/v1.20/docs/automate-tls](https://docs.cloud.google.com/service-mesh/v1.20/docs/automate-tls)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you run into other problems with this tutorial, we recommend that you review these documents: CA Service frequently asked questions Troubleshooting Cloud Service Mesh step-by-step Resolving managed Cloud Service Mesh issues Istio operations common problems GKE troubleshooting Troubleshooting Kubernetes clusters Clean up To avoid incurring continuing charges to your Google Cloud account for the resources used in this tutorial, you can either delete the project or delete the individual resources.
- Create an operator manifest for the ingress gateway: cat << EOF > ingressgateway - operator . yaml apiVersion : install . istio . io / v1alpha1 kind : IstioOperator metadata : name : ingressgateway - operator annotations : config . kubernetes . io / local - config : "true" spec : profile : empty revision : asm - managed components : ingressGateways : - name : istio - ingressgateway namespace : GATEWAY NAMESPACE enabled : true k8s : overlays : - apiVersion : apps / v1 kind : Deployment name : istio - ingressgateway patches : - path : spec . template . metadata . annotations value : inject . istio . io / templates : gateway - path : spec . template . metadata . labels . sidecar \ . istio \ . io / inject value : "true" - path : spec . template . spec . containers [ name : istio - proxy ] value : name : istio - proxy image : auto service : loadBalancerIP : $ LOAD BALANCER IP serviceAnnotations : networking . gke . io / load - balancer - type : Internal networking . gke . io / internal - load - balancer - allow - global - access : "true" EOF Note the following about the operator manifest : The revision field specifies the managed Cloud Service Mesh release channel to use for the data plane.
- Install the CA Service issuer controller in your GKE cluster: kubectl apply --filename ca-service-issuer.yaml Add the Workload Identity Federation for GKE annotation iam.gke.io/gcp-service-account to the Kubernetes service account used by the CA Service issuer controller pods: kubectl annotate serviceaccount ksa - google - cas - issuer --namespace cert-manager \ "iam.gke.io/gcp-service-account= CAS ISSUER GSA @ PROJECT ID .iam.gserviceaccount.com" This annotation informs GKE that the Kubernetes service account can impersonate the Google service account to access Google APIs.
- Grant cluster administrator permissions to your user account: kubectl create clusterrolebinding cluster-admin-binding \ --clusterrole cluster-admin \ --user $(gcloud config get-value core/account) You need the permissions provided by the Kubernetes cluster-admin ClusterRole to create the role-based access control (RBAC) rules for Cloud Service Mesh, and to install the cert-manager tool.

### "Using Cloud Service Mesh egress gateways on GKE clusters: Tutorial \_|\_\

- URL: [https://docs.cloud.google.com/service-mesh/v1.20/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/v1.20/docs/security/egress-gateway-gke-tutorial)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Allow workloads and proxies deployed in the team-x namespace to connect to istiod and the egress gateway: cat <<EOF kubectl apply -f - apiVersion : networking.k8s.io/v1 kind : NetworkPolicy metadata : name : allow-egress-to-control-plane namespace : team-x spec : podSelector : {} policyTypes : - Egress egress : - to : - namespaceSelector : matchLabels : "kubernetes.io/metadata.name" : istio-system podSelector : matchLabels : istio : istiod - namespaceSelector : matchLabels : "kubernetes.io/metadata.name" : istio-egress podSelector : matchLabels : istio : egressgateway EOF Allow workloads and proxies to query DNS: cat <<EOF kubectl apply -f - apiVersion : networking.k8s.io/v1 kind : NetworkPolicy metadata : name : allow-egress-to-dns namespace : team-x spec : podSelector : {} policyTypes : - Egress egress : - to : - namespaceSelector : matchLabels : "kubernetes.io/metadata.name" : kube-system ports : - port : 53 protocol : UDP - port : 53 protocol : TCP EOF Allow workloads and proxies to connect to the IPs that serve Google APIs and services, including Cloud Service Mesh certificate authority: cat <<EOF kubectl apply -f - apiVersion : networking.k8s.io/v1 kind : NetworkPolicy metadata : name : allow-egress-to-google-apis namespace : team-x spec : podSelector : {} policyTypes : - Egress egress : - to : - ipBlock : cidr : 199.36.153.4/30 - ipBlock : cidr : 199.36.153.8/30 EOF Allow workloads and proxies to connect to the GKE metadata server: cat <<EOF kubectl apply -f - apiVersion : networking.k8s.io/v1 kind : NetworkPolicy metadata : name : allow-egress-to-metadata-server namespace : team-x spec : podSelector : {} policyTypes : - Egress egress : - to : # For GKE data plane v2 - ipBlock : cidr : 169.254.169.254/32 - to : # For GKE data plane v1 - ipBlock : cidr : 127.0.0.1/32 # Prior to 1.21.0-gke.1000 - ipBlock : cidr : 169.254.169.252/32 # 1.21.0-gke.1000 and later ports : - protocol : TCP port : 987 - protocol : TCP port : 988 EOF Optional: Allow workloads and proxies in the team-x namespace to make connections to each other: cat <<EOF kubectl apply -f - apiVersion : networking.k8s.io/v1 kind : NetworkPolicy metadata : name : allow-egress-to-same-namespace namespace : team-x spec : podSelector : {} ingress : - from : - podSelector : {} egress : - to : - podSelector : {} EOF Optional: Allow workloads and proxies in the team-x namespace to make connections to workloads deployed by a different team: cat <<EOF kubectl apply -f - apiVersion : networking.k8s.io/v1 kind : NetworkPolicy metadata : name : allow-egress-to-team-y namespace : team-x spec : podSelector : {} policyTypes : - Egress egress : - to : - namespaceSelector : matchLabels : "kubernetes.io/metadata.name" : team-y EOF Connections between sidecar proxies persist.
- Create a Sidecar resource for the team-y namespace: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : Sidecar metadata : name : default namespace : team-y spec : outboundTrafficPolicy : mode : REGISTRY ONLY egress : - hosts : - 'istio-egress/ ' - 'team-y/ ' EOF Deploy the test application to the team-y namespace: kubectl -n team-y create -f ./test.yaml Register a second external host and export it to the team-x and the team-y namespace: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : ServiceEntry metadata : name : httpbin-org-ext namespace : istio-egress labels : Show this service and its telemetry in the Cloud Service Mesh page of the Google Cloud console service.istio.io/canonical-name : httpbin.org spec : hosts : - httpbin.org ports : - number : 80 name : http protocol : HTTP - number : 443 name : tls protocol : TLS resolution : DNS location : MESH EXTERNAL exportTo : - 'istio-egress' - 'team-x' - 'team-y' EOF Create a virtual service to route traffic to httpbin.org through the egress gateway: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : VirtualService metadata : name : httpbin-org-through-egress-gateway namespace : istio-egress spec : hosts : - httpbin.org gateways : - istio-egress/egress-gateway - mesh http : - match : - gateways : - mesh port : 80 route : - destination : host : istio-egressgateway.istio-egress.svc.cluster.local subset : target-egress-gateway-mTLS port : number : 80 weight : 100 - match : - gateways : - istio-egress/egress-gateway port : 80 route : - destination : host : httpbin.org port : number : 80 weight : 100 exportTo : - 'istio-egress' - 'team-x' - 'team-y' EOF Run istioctl analyze to check for configuration errors: ${ ISTIOCTL } analyze -n istio-egress --revision REVISION You see: ✔ No validation issues found when analyzing namespace: istio-egress.
- Create a service entry for the GKE metadata server: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : ServiceEntry metadata : name : metadata-google-internal namespace : istio-egress labels : Show this service and its telemetry in the Cloud Service Mesh page of the Google Cloud console service.istio.io/canonical-name : metadata.google.internal spec : hosts : - metadata.google.internal ports : - number : 80 name : http protocol : HTTP - number : 443 name : tls protocol : TLS resolution : DNS location : MESH EXTERNAL exportTo : - 'istio-egress' - 'team-x' EOF Also create a service entry for private.googleapis.com and storage.googleapis.com: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : ServiceEntry metadata : name : private-googleapis-com namespace : istio-egress labels : Show this service and its telemetry in the Cloud Service Mesh page of the Google Cloud console service.istio.io/canonical-name : googleapis.com spec : hosts : - private.googleapis.com - storage.googleapis.com ports : - number : 80 name : http protocol : HTTP - number : 443 name : tls protocol : TLS resolution : DNS location : MESH EXTERNAL exportTo : - 'istio-egress' - 'team-x' EOF Verify that the Kubernetes service account is correctly configured to act as the Google service account: kubectl -n team-x exec -it $( kubectl -n team-x get pod -l app = test \ -o jsonpath ={ .items..metadata.name } ) -c test -- gcloud auth list You see the Google service account listed as the active and only identity.
- Later steps in this tutorial explain how to configure different egress routing rules for each namespace. kubectl create namespace team-x kubectl create namespace team-y Label the namespaces so that they can be selected by Kubernetes network policies: kubectl label namespace team-x team = x kubectl label namespace team-y team = y For Cloud Service Mesh to automatically inject proxy sidecars, you set the control plane revision label on the workload namespaces: kubectl label ns team-x istio.io/rev = REVISION kubectl label ns team-y istio.io/rev = REVISION Create a YAML file to use for making test deployments: cat << 'EOF' > ./test.yaml apiVersion : v1 kind : ServiceAccount metadata : name : test --- apiVersion : v1 kind : Service metadata : name : test labels : app : test spec : ports : - port : 80 name : http selector : app : test --- apiVersion : apps/v1 kind : Deployment metadata : name : test spec : replicas : 1 selector : matchLabels : app : test template : metadata : labels : app : test spec : serviceAccountName : test containers : - name : test image : gcr.io/google.com/cloudsdktool/cloud-sdk:slim command : [ "/bin/sleep" , "infinity" ] imagePullPolicy : IfNotPresent EOF Deploy the test application to the team-x namespace: kubectl -n team-x create -f ./test.yaml Verify that the test application is deployed to a node in the default pool and that a proxy sidecar container is injected.

