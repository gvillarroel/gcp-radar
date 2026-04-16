---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.457Z"
product_name: "Managed Anthos Service Mesh"
product_slug: "managed-anthos-service-mesh"
feature_name: "Istio injection label alias"
feature_slug: "istio-injection-label-alias"
latest_feature_date: "2022-05-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/authz"
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls"
  - "https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial"
keywords:
  - "istio"
  - "injection"
  - "label"
  - "alias"
  - "managed"
  - "anthos"
  - "mesh"
  - "supports"
---

# Istio injection label alias

Product: Managed Anthos Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Managed Anthos Service Mesh supports using the "istio-injection" label as an alias for existing injection labels; Managed Anthos Service Mesh supports using the "istio-injection" label as an alias for existing injection labels.

## Extended Definition

Managed Anthos Service Mesh supports using the "istio-injection" label as an alias for existing injection labels; Managed Anthos Service Mesh supports using the "istio-injection" label as an alias for existing injection labels.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls](https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls)
- [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)

## Supporting Pages

### "Migrate in-cluster to managed control plane on a new cluster \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create the namespace: kubectl \ --context cluster-with-csm \ create namespace onlineboutique Use the istio.io/rev=asm-managed label to add the onlineboutique namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-csm \ label namespace onlineboutique 'istio.io/rev=asm-managed' Deploy Online Boutique's 12 services, including the load generator that imitates user traffic: kubectl \ --context cluster-with-csm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/kubernetes-manifests.yaml kubectl \ --context cluster-with-csm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/virtual-service.yaml Get the external IP address of the Cloud Service Mesh ingress gateway: kubectl \ --context cluster-with-csm \ --namespace asm-ingress \ get service --output jsonpath = '{.items[0].status.loadBalancer.ingress[0].ip}' Copy the external IP address of the asm-ingressgateway Service, and access it through your web browser.
- Create the namespace: kubectl \ --context cluster-with-csm \ create namespace asm-ingress Use the istio.io/rev=asm-managed label to add the asm-ingress namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-csm \ label namespace asm-ingress 'istio.io/rev=asm-managed' Deploy the Cloud Service Mesh ingress gateway : kubectl \ --context cluster-with-csm \ --namespace = asm-ingress \ apply -f anthos-service-mesh-samples/docs/shared/asm-ingress-gateway/asm-gateway-deployment-svc.yaml kubectl \ --context cluster-with-csm \ --namespace = asm-ingress \ apply -f anthos-service-mesh-samples/docs/shared/asm-ingress-gateway/gateway.yaml The output is similar to: namespace/asm-ingress configured serviceaccount/asm-ingressgateway configured service/asm-ingressgateway configured deployment.apps/asm-ingressgateway configured gateway.networking.istio.io/asm-ingressgateway configured Note: You can browse the resources in the official Cloud Service Mesh samples GitHub repository .
- Create the namespace: kubectl \ --context cluster-with-in-cluster-asm \ create namespace onlineboutique Use the istio.io/rev=asm-1285-9 label to add the onlineboutique namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-in-cluster-asm \ label --overwrite namespace onlineboutique istio.io/rev=asm-1285-9 The output is similar to: namespace/onlineboutique labeled Deploy Online Boutique's 12 services, including the load generator that imitates user traffic: kubectl \ --context cluster-with-in-cluster-asm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/kubernetes-manifests.yaml kubectl \ --context cluster-with-in-cluster-asm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/virtual-service.yaml Get the external IP address of the Cloud Service Mesh ingress gateway: kubectl \ --context cluster-with-in-cluster-asm \ --namespace asm-ingress \ get service --output jsonpath = '{.items[0].status.loadBalancer.ingress[0].ip}' Copy the external IP address of the ingress gateway, and access it through your web browser.
- Create the namespace: kubectl \ --context cluster-with-in-cluster-asm \ create namespace asm-ingress Use the istio.io/rev=asm-1285-9 label to add the asm-ingress namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-in-cluster-asm \ label --overwrite namespace asm-ingress istio.io/rev=asm-1285-9 The output is similar to: namespace/asm-ingress labeled Note: You may need to modify the istio.io/rev=asm-1285-9 label to match your in-cluster Cloud Service Mesh version.

### Cloud Service Mesh by example: Authorization \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the following command, REVISION LABEL is the value of the istiod revision label that you noted in the previous step. kubectl label namespace asm-ingress \ istio-injection- istio.io/rev = REVISION LABEL --overwrite Deploy the example gateway in the anthos-service-mesh-samples repository: kubectl apply -n asm-ingress \ -f docs/shared/asm-ingress-gateway Expected output: serviceaccount/asm-ingressgateway configured service/asm-ingressgateway configured deployment.apps/asm-ingressgateway configured gateway.networking.istio.io/asm-ingressgateway configured Deploy the Online Boutique sample application If you haven't, set the current context for kubectl to the cluster: gcloud container clusters get-credentials CLUSTER NAME \ --project= PROJECT ID \ --zone= CLUSTER LOCATION Create the namespace for the sample application: kubectl create namespace onlineboutique Label the onlineboutique namespace to automatically inject Envoy proxies: kubectl label namespace onlineboutique \ istio.io/rev- istio-injection=enabled --overwrite Deploy the sample app, the VirtualService for the frontend, and service accounts for the workloads.
- There are various supported setup methods: Fleet API and a managed control plane on Google Cloud asmcli and an unmanaged, in-cluster control plane off Google Cloud Clone the repo: git clone https://github.com/GoogleCloudPlatform/anthos-service-mesh-samples cd anthos-service-mesh-samples Deploy an ingress gateway Set the current context for kubectl to the cluster: Note: Use --region instead of --zone , if the cluster is a regional cluster. gcloud container clusters get-credentials CLUSTER NAME \ --project= PROJECT ID \ --zone= CLUSTER LOCATION Create a namespace for your ingress gateway: kubectl create namespace asm-ingress Enable the namespace for injection.
- Managed (TD) Apply the default injection label to the namespace: kubectl label namespace asm-ingress \ istio.io/rev- istio-injection = enabled --overwrite Managed (Istiod) Recommended: Run the following command to apply the default injection label to the namespace: kubectl label namespace asm-ingress \ istio.io/rev- istio-injection = enabled --overwrite If you are an existing user with the Managed Istiod control plane: We recommend that you use default injection, but revision-based injection is supported.
- Apply the revision label to the namespace: kubectl label namespace asm-ingress \ istio-injection- istio.io/rev = REVISION LABEL --overwrite In-cluster Recommended: Run the following command to apply the default injection label to the namespace: kubectl label namespace asm-ingress \ istio.io/rev- istio-injection = enabled --overwrite We recommend that you use default injection, but revision-based injection is supported: Use the following instructions: Use the following command to locate the revision label on istiod : kubectl get deploy -n istio-system -l app = istiod -o \ jsonpath ={ .items [ ] .metadata.labels. 'istio\.io\/rev' } '{"\n"}' Apply the revision label to the namespace.

### Cloud Service Mesh by example: mTLS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls](https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Apply the revision label to the namespace: kubectl label namespace asm-ingress \ istio-injection- istio.io/rev = REVISION LABEL --overwrite Deploy the example gateway in the anthos-service-mesh-samples repository: kubectl apply -n asm-ingress \ -f docs/shared/asm-ingress-gateway Expected output: serviceaccount/asm-ingressgateway configured service/asm-ingressgateway configured deployment.apps/asm-ingressgateway configured gateway.networking.istio.io/asm-ingressgateway configured Deploy the Online Boutique sample application If you haven't, set the current context for kubectl to the cluster: gcloud container clusters get-credentials CLUSTER NAME \ --project= PROJECT ID \ --zone= CLUSTER LOCATION Create the namespace for the sample application: kubectl create namespace onlineboutique Label the onlineboutique namespace to automatically inject Envoy proxies.
- There are various supported setup methods: Fleet API and a managed control plane on Google Cloud asmcli and an unmanaged, in-cluster control plane off Google Cloud Clone the repository: git clone https://github.com/GoogleCloudPlatform/anthos-service-mesh-samples cd anthos-service-mesh-samples Deploy an ingress gateway Set the current context for kubectl to the cluster: Note: Use --region instead of --zone , if the cluster is a regional cluster. gcloud container clusters get-credentials CLUSTER NAME \ --project= PROJECT ID \ --zone= CLUSTER LOCATION Create a namespace for your ingress gateway: kubectl create namespace asm-ingress Enable the namespace for injection.
- Managed (TD) Apply the default injection label to the namespace: kubectl label namespace asm-ingress \ istio.io/rev- istio-injection = enabled --overwrite Managed (Istiod) Recommended: Run the following command to apply the default injection label to the namespace: kubectl label namespace asm-ingress \ istio.io/rev- istio-injection = enabled --overwrite If you are an existing user with the Managed Istiod control plane: We recommend that you use default injection, but revision-based injection is supported.
- Note: This guide only supports Cloud Service Mesh with Istio APIs and does not support Google Cloud APIs.

### "Using Cloud Service Mesh egress gateways on GKE clusters: Tutorial \_|\_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Later steps in this tutorial explain how to configure different egress routing rules for each namespace. kubectl create namespace team-x kubectl create namespace team-y Label the namespaces so that they can be selected by Kubernetes network policies: kubectl label namespace team-x team = x kubectl label namespace team-y team = y For Cloud Service Mesh to automatically inject proxy sidecars, you set the control plane revision label on the workload namespaces: kubectl label ns team-x istio.io/rev- istio-injection = enabled --overwrite kubectl label ns team-y istio.io/rev- istio-injection = enabled --overwrite Create a YAML file to use for making test deployments: cat << 'EOF' > ./test.yaml apiVersion : v1 kind : ServiceAccount metadata : name : test --- apiVersion : v1 kind : Service metadata : name : test labels : app : test spec : ports : - port : 80 name : http selector : app : test --- apiVersion : apps/v1 kind : Deployment metadata : name : test spec : replicas : 1 selector : matchLabels : app : test template : metadata : labels : app : test spec : serviceAccountName : test containers : - name : test image : gcr.io/google.com/cloudsdktool/cloud-sdk:slim command : [ "/bin/sleep" , "infinity" ] imagePullPolicy : IfNotPresent EOF Deploy the test application to the team-x namespace: kubectl -n team-x create -f ./test.yaml Verify that the test application is deployed to a node in the default pool and that a proxy sidecar container is injected.
- Managed (TD) Apply the default injection label to the namespace: kubectl label namespace istio-egress \ istio.io/rev- istio-injection = enabled --overwrite Managed (Istiod) Recommended: Run the following command to apply the default injection label to the namespace: kubectl label namespace istio-egress \ istio.io/rev- istio-injection = enabled --overwrite If you are an existing user with the Managed Istiod control plane: We recommend that you use default injection, but revision-based injection is supported.
- Allow workloads and proxies deployed in the team-x namespace to connect to istiod and the egress gateway: cat <<EOF kubectl apply -f - apiVersion : networking.k8s.io/v1 kind : NetworkPolicy metadata : name : allow-egress-to-control-plane namespace : team-x spec : podSelector : {} policyTypes : - Egress egress : - to : - namespaceSelector : matchLabels : "kubernetes.io/metadata.name" : istio-system podSelector : matchLabels : istio : istiod - namespaceSelector : matchLabels : "kubernetes.io/metadata.name" : istio-egress podSelector : matchLabels : istio : egressgateway EOF Allow workloads and proxies to query DNS: cat <<EOF kubectl apply -f - apiVersion : networking.k8s.io/v1 kind : NetworkPolicy metadata : name : allow-egress-to-dns namespace : team-x spec : podSelector : {} policyTypes : - Egress egress : - to : - namespaceSelector : matchLabels : "kubernetes.io/metadata.name" : kube-system ports : - port : 53 protocol : UDP - port : 53 protocol : TCP EOF Allow workloads and proxies to connect to the IPs that serve Google APIs and services, including Cloud Service Mesh certificate authority: cat <<EOF kubectl apply -f - apiVersion : networking.k8s.io/v1 kind : NetworkPolicy metadata : name : allow-egress-to-google-apis namespace : team-x spec : podSelector : {} policyTypes : - Egress egress : - to : - ipBlock : cidr : 199.36.153.4/30 - ipBlock : cidr : 199.36.153.8/30 EOF Allow workloads and proxies to connect to the GKE metadata server: cat <<EOF kubectl apply -f - apiVersion : networking.k8s.io/v1 kind : NetworkPolicy metadata : name : allow-egress-to-metadata-server namespace : team-x spec : podSelector : {} policyTypes : - Egress egress : - to : # For GKE data plane v2 - ipBlock : cidr : 169.254.169.254/32 - to : # For GKE data plane v1 - ipBlock : cidr : 127.0.0.1/32 # Prior to 1.21.0-gke.1000 - ipBlock : cidr : 169.254.169.252/32 # 1.21.0-gke.1000 and later ports : - protocol : TCP port : 987 - protocol : TCP port : 988 EOF Optional: Allow workloads and proxies in the team-x namespace to make connections to each other: cat <<EOF kubectl apply -f - apiVersion : networking.k8s.io/v1 kind : NetworkPolicy metadata : name : allow-egress-to-same-namespace namespace : team-x spec : podSelector : {} ingress : - from : - podSelector : {} egress : - to : - podSelector : {} EOF Optional: Allow workloads and proxies in the team-x namespace to make connections to workloads deployed by a different team: cat <<EOF kubectl apply -f - apiVersion : networking.k8s.io/v1 kind : NetworkPolicy metadata : name : allow-egress-to-team-y namespace : team-x spec : podSelector : {} policyTypes : - Egress egress : - to : - namespaceSelector : matchLabels : "kubernetes.io/metadata.name" : team-y EOF Connections between sidecar proxies persist.
- Create a Sidecar resource for the team-y namespace: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : Sidecar metadata : name : default namespace : team-y spec : outboundTrafficPolicy : mode : REGISTRY ONLY egress : - hosts : - 'istio-egress/ ' - 'team-y/ ' EOF Deploy the test application to the team-y namespace: kubectl -n team-y create -f ./test.yaml Register a second external host and export it to the team-x and the team-y namespace: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : ServiceEntry metadata : name : httpbin-org-ext namespace : istio-egress labels : Show this service and its telemetry in the Cloud Service Mesh page of the Google Cloud console service.istio.io/canonical-name : httpbin.org spec : hosts : - httpbin.org ports : - number : 80 name : http protocol : HTTP - number : 443 name : tls protocol : TLS resolution : DNS location : MESH EXTERNAL exportTo : - 'istio-egress' - 'team-x' - 'team-y' EOF Create a virtual service to route traffic to httpbin.org through the egress gateway: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : VirtualService metadata : name : httpbin-org-through-egress-gateway namespace : istio-egress spec : hosts : - httpbin.org gateways : - istio-egress/egress-gateway - mesh http : - match : - gateways : - mesh port : 80 route : - destination : host : istio-egressgateway.istio-egress.svc.cluster.local subset : target-egress-gateway-mTLS port : number : 80 weight : 100 - match : - gateways : - istio-egress/egress-gateway port : 80 route : - destination : host : httpbin.org port : number : 80 weight : 100 exportTo : - 'istio-egress' - 'team-x' - 'team-y' EOF Run istioctl analyze to check for configuration errors: ${ ISTIOCTL } analyze -n istio-egress --revision REVISION You see: ✔ No validation issues found when analyzing namespace: istio-egress.

