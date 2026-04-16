---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.805Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "istioctl install for Cloud Service Mesh"
feature_slug: "istioctl-install-for-cloud-service-mesh"
latest_feature_date: "2021-10-06"
deprecation_date: "2021-10-06"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/downloading-istioctl"
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies"
  - "https://docs.cloud.google.com/service-mesh/docs/gateway/prepare-gateway"
  - "https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial"
keywords:
  - "istioctl"
  - "install"
  - "for"
  - "mesh"
  - "the"
  - "workflow"
  - "installs"
  - "and"
---

# istioctl install for Cloud Service Mesh

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

The istioctl install workflow installs and upgrades Cloud Service Mesh; The istioctl install workflow installs and upgrades Cloud Service Mesh; deprecated on 2021-10-06.

## Extended Definition

The istioctl install workflow installs and upgrades Cloud Service Mesh; The istioctl install workflow installs and upgrades Cloud Service Mesh; deprecated on 2021-10-06.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/downloading-istioctl](https://docs.cloud.google.com/service-mesh/docs/downloading-istioctl)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies)
- [https://docs.cloud.google.com/service-mesh/docs/gateway/prepare-gateway](https://docs.cloud.google.com/service-mesh/docs/gateway/prepare-gateway)
- [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)

## Supporting Pages

### "Downloading the troubleshooting tool \_|\_ Cloud Service Mesh \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/downloading-istioctl](https://docs.cloud.google.com/service-mesh/docs/downloading-istioctl)
- Source ID: `site-docs-reference`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to extract the contents to the current working directory: tar xzf istio-1.28.5-asm.9-linux-amd64.tar.gz The command creates an installation directory in your current working directory named istio-1.28.5-asm.9 that contains: - Sample applications in the samples directory . - The istioctl command - line tool that you use to install Cloud Service Mesh is in the < code>bin < / code > directory . - The Cloud Service Mesh configuration profiles are in the manifests/profiles directory .
- For example, to extract the contents to the current working directory: tar xzf istio-1.28.5-asm.9-osx.tar.gz The command creates an installation directory in your current working directory named istio-1.28.5-asm.9 that contains: - Sample applications in the samples directory . - The istioctl command - line tool that you use to install Cloud Service Mesh is in the < code>bin < / code > directory . - The Cloud Service Mesh configuration profiles are in the manifests/profiles directory .
- For example, to extract the contents to the current working directory: tar xzf istio-1.28.5-asm.9-win.zip The command creates an installation directory in your current working directory named istio-1.28.5-asm.9 that contains: - Sample applications in the samples directory . - The istioctl command - line tool that you use to install Cloud Service Mesh is in the < code>bin < / code > directory . - The Cloud Service Mesh configuration profiles are in the manifests/profiles directory .
- To debug and review your Cloud Service Mesh deployment you need to install the istioctl component for Google Cloud CLI.

### "Configuring audit policies for your services \_|\_ Cloud Service Mesh \_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Follow the steps in Install dependent tools and validate cluster to: Install required tools Download asmcli Grant cluster admin permissions Validate your project and cluster Prepare gateway configuration Cloud Service Mesh gives you the option to deploy and manage gateways as part of your service mesh.
- Turn on RBAC debug logging with the following command: kubectl exec POD NAME -n NAMESPACE -c istio-proxy -- pilot-agent request POST 'logging?rbac=debug' Send some requests, and then check logs for the Pod with the kubectl logs command: kubectl logs POD NAME -n NAMESPACE -c istio-proxy What's next Learn about security in Cloud Service Mesh Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When you run asmcli install , include the following option: --option audit-authorizationpolicy For example: ./asmcli install \ --project id PROJECT ID \ --cluster name CLUSTER NAME \ --cluster location CLUSTER LOCATION \ --ca mesh ca \ --output dir DIR PATH \ --enable all \ --option audit-authorizationpolicy Be sure to specify any other overlay files that you need to configure Cloud Service Mesh.
- When you run asmcli install , include the following option: --option audit-authorizationpolicy For example: ./asmcli install \ --project id PROJECT ID \ --cluster name CLUSTER NAME \ --cluster location CLUSTER LOCATION \ --ca mesh ca \ --output dir DIR PATH \ --enable all \ --option audit-authorizationpolicy Be sure to specify any other overlay files that you need to configure Cloud Service Mesh.

### "Prepare to setup the Gateway API for Cloud Service Mesh \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/gateway/prepare-gateway](https://docs.cloud.google.com/service-mesh/docs/gateway/prepare-gateway)
- Source ID: `site-docs-root-2`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Install custom resource definitions Generate a kubeconfig entry for your cluster: gcloud container clusters get-credentials CLUSTER NAME --location LOCATION --project PROJECT ID where: CLUSTER NAME is the name of your cluster LOCATION is the location of your cluster PROJECT ID is the project ID of your cluster Install the GRPCRoute custom resource definition (CRD): curl https://raw.githubusercontent.com/kubernetes-sigs/gateway-api/v1.1.0/config/crd/standard/gateway.networking.k8s.io grpcroutes.yaml \ kubectl apply -f - The output is similar to: customresourcedefinition.apiextensions.k8s.io/grpcroutes.gateway.networking.k8s.io created What's next Set up an Envoy sidecar service mesh on GKE Set up a proxyless gRPC service mesh on GKE Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Update your mesh: gcloud alpha container fleet mesh update --project FLEET PROJECT ID \ --fleet-default-member-config mesh.yaml Create a cluster and register them to your fleet in one step to use the default configuration: gcloud container clusters create CLUSTER NAME \ --project PROJECT ID \ --fleet-project FLEET PROJECT ID \ --location = LOCATION \ Enable Workload Identity Federation for GKE and run the GKE Metadata Server on your node.
- Prepare to setup the Gateway API for Cloud Service Mesh This page describes how to install the required custom resource definitions for the gateway into your cluster.
- Use the gcloud container fleet mesh describe --project FLEET PROJECT ID command to see what you have configured for your fleet.

### "Using Cloud Service Mesh egress gateways on GKE clusters: Tutorial \_|\_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)
- Source ID: `site-docs-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Create a Sidecar resource for the team-y namespace: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : Sidecar metadata : name : default namespace : team-y spec : outboundTrafficPolicy : mode : REGISTRY ONLY egress : - hosts : - 'istio-egress/ ' - 'team-y/ ' EOF Deploy the test application to the team-y namespace: kubectl -n team-y create -f ./test.yaml Register a second external host and export it to the team-x and the team-y namespace: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : ServiceEntry metadata : name : httpbin-org-ext namespace : istio-egress labels : Show this service and its telemetry in the Cloud Service Mesh page of the Google Cloud console service.istio.io/canonical-name : httpbin.org spec : hosts : - httpbin.org ports : - number : 80 name : http protocol : HTTP - number : 443 name : tls protocol : TLS resolution : DNS location : MESH EXTERNAL exportTo : - 'istio-egress' - 'team-x' - 'team-y' EOF Create a virtual service to route traffic to httpbin.org through the egress gateway: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : VirtualService metadata : name : httpbin-org-through-egress-gateway namespace : istio-egress spec : hosts : - httpbin.org gateways : - istio-egress/egress-gateway - mesh http : - match : - gateways : - mesh port : 80 route : - destination : host : istio-egressgateway.istio-egress.svc.cluster.local subset : target-egress-gateway-mTLS port : number : 80 weight : 100 - match : - gateways : - istio-egress/egress-gateway port : 80 route : - destination : host : httpbin.org port : number : 80 weight : 100 exportTo : - 'istio-egress' - 'team-x' - 'team-y' EOF Run istioctl analyze to check for configuration errors: ${ ISTIOCTL } analyze -n istio-egress --revision REVISION You see: ✔ No validation issues found when analyzing namespace: istio-egress.
- In the following command, REVISION LABEL is the value of the istiod revision label that you noted in the previous step. kubectl label namespace istio-egress \ istio-injection- istio.io/rev = REVISION LABEL --overwrite Create an operator manifest for the egress gateway: cat << EOF > egressgateway-operator.yaml apiVersion: install.istio.io/v1alpha1 kind: IstioOperator metadata: name: egressgateway-operator annotations: config.kubernetes.io/local-config: "true" spec: profile: empty revision: REVISION components: egressGateways: - name: istio-egressgateway namespace: istio-egress enabled: true values: gateways: istio-egressgateway: injectionTemplate: gateway tolerations: - key: "dedicated" operator: "Equal" value: "gateway" nodeSelector: cloud.google.com/gke-nodepool: "gateway" EOF Download the istioctl tool.
- Download credentials so that you can connect to the cluster with kubectl: gcloud container clusters get-credentials cluster1 Verify that the gateway nodes have the correct taint: kubectl get nodes -l cloud.google.com/gke-nodepool = gateway -o yaml \ -o = custom-columns = 'name:metadata.name,taints:spec.taints[?(@.key=="dedicated")]' The output is similar to the following: name taints gke-cluster1-gateway-9d65b410-cffs map[effect:NoSchedule key:dedicated value:gateway] Installing and setting up Cloud Service Mesh Follow one of the installation guides for Cloud Service Mesh: Managed Cloud Service Mesh In-cluster Cloud Service Mesh Once you have installed Cloud Service Mesh, stop and return to this tutorial without installing ingress or egress gateways.
- Objectives Set up the infrastructure for running Cloud Service Mesh: Custom VPC network and private subnet Cloud NAT for internet access Private GKE cluster with an extra node pool for egress gateway pods Restrictive egress VPC firewall rules ; only gateway nodes can reach external hosts Private Google Access for connecting to Container Registry and Google APIs Install Cloud Service Mesh.

