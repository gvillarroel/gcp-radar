---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.773Z"
product_name: "Managed Cloud Service Mesh"
product_slug: "managed-cloud-service-mesh"
feature_name: "DNS Proxy"
feature_slug: "dns-proxy"
latest_feature_date: "2025-06-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/v1.20/docs/automate-tls"
  - "https://docs.cloud.google.com/service-mesh/v1.20/docs/gateways"
  - "https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/prepare-service-routing-envoy-proxyless"
  - "https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh"
keywords:
  - "dns"
  - "proxy"
  - "makes"
  - "the"
  - "available"
  - "in"
  - "rapid"
  - "release"
---

# DNS Proxy

Product: Managed Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Makes the DNS Proxy feature available in the Rapid release channel for supported sidecar versions; Makes the DNS Proxy feature available in the Rapid release channel for supported sidecar versions.

## Extended Definition

Makes the DNS Proxy feature available in the Rapid release channel for supported sidecar versions; Makes the DNS Proxy feature available in the Rapid release channel for supported sidecar versions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/v1.20/docs/automate-tls](https://docs.cloud.google.com/service-mesh/v1.20/docs/automate-tls)
- [https://docs.cloud.google.com/service-mesh/v1.20/docs/gateways](https://docs.cloud.google.com/service-mesh/v1.20/docs/gateways)
- [https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/prepare-service-routing-envoy-proxyless](https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/prepare-service-routing-envoy-proxyless)
- [https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh](https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh)

## Supporting Pages

### "Automate TLS certificate management for Cloud Service Mesh ingress gateway\

- URL: [https://docs.cloud.google.com/service-mesh/v1.20/docs/automate-tls](https://docs.cloud.google.com/service-mesh/v1.20/docs/automate-tls)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create an operator manifest for the ingress gateway: cat << EOF > ingressgateway - operator . yaml apiVersion : install . istio . io / v1alpha1 kind : IstioOperator metadata : name : ingressgateway - operator annotations : config . kubernetes . io / local - config : "true" spec : profile : empty revision : asm - managed components : ingressGateways : - name : istio - ingressgateway namespace : GATEWAY NAMESPACE enabled : true k8s : overlays : - apiVersion : apps / v1 kind : Deployment name : istio - ingressgateway patches : - path : spec . template . metadata . annotations value : inject . istio . io / templates : gateway - path : spec . template . metadata . labels . sidecar \ . istio \ . io / inject value : "true" - path : spec . template . spec . containers [ name : istio - proxy ] value : name : istio - proxy image : auto service : loadBalancerIP : $ LOAD BALANCER IP serviceAnnotations : networking . gke . io / load - balancer - type : Internal networking . gke . io / internal - load - balancer - allow - global - access : "true" EOF Note the following about the operator manifest : The revision field specifies the managed Cloud Service Mesh release channel to use for the data plane.
- Install the ca-certificates and coreutils packages, and the curl , openssl , and jq command-line tools: sudo apt-get update --yes sudo apt-get install --yes ca-certificates coreutils curl jq openssl Create a key pair for the client TLS certificate: openssl genrsa -out private-key.pem 2048 openssl rsa -in private-key.pem -pubout -out public-key.pem Query the metadata server to get the email address of the Google service account identity attached to the VM instance: GSA EMAIL=$(curl --silent --header "Metadata-Flavor: Google" http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/email) Create a JSON file that you use as the request body when requesting a client TLS certificate from the Certificate Authority Service API : cat << EOF > request.json { "config": { "publicKey": { "format": "PEM", "key": "$(base64 --wrap 0 public-key.pem)" }, "subjectConfig": { "subject": { "commonName": "$(hostname --short)", "organization": "Example Organization" }, "subjectAltName": { "dnsNames": [ "$(hostname --fqdn)" ], "emailAddresses": [ "$GSA EMAIL" ] } }, "x509Config": { "caOptions": { "isCa": false }, "keyUsage": { "baseKeyUsage": { "digitalSignature": true, "keyEncipherment": true }, "extendedKeyUsage": { "clientAuth": true } } } }, "lifetime": "86400s" } EOF To learn more about the fields in the config section, see the CertificateConfig type in the CA Service API documentation.
- 5.3 curl -- location -- output ca - service - issuer . yaml "https://github.com/jetstack/google-cas-issuer/releases/download/${CAS ISSUER VERSION}/google-cas-issuer-${CAS ISSUER VERSION}.yaml" Create an IAM policy binding to allow the ksa-google-cas-issuer Kubernetes service account in the cert-manager namespace to impersonate the Google service account (GSA) using Workload Identity Federation for GKE : gcloud iam service - accounts add - iam - policy - binding \ CAS ISSUER GSA @ PROJECT ID . iam.gserviceaccount.com \ -- member "serviceAccount: PROJECT ID .svc.id.goog[cert-manager/ksa-google-cas-issuer]" \ -- role roles / iam . workloadIdentityUser The CA Service issuer controller pods use the ksa-google-cas-issuer Kubernetes service account.
- Create a Certificate resource for the domain name hello.example.com using the certificate issuer: cat << EOF > certificate.yaml apiVersion: cert-manager.io/v1 kind: Certificate metadata: name: hello-example-com-certificate namespace: GATEWAY NAMESPACE spec: secretName: hello-example-com-credential commonName: hello.example.com dnsNames: - hello.example.com duration: 24h renewBefore: 8h issuerRef: group: cas-issuer.jetstack.io kind: GoogleCASIssuer name: gateway-cas-issuer EOF kubectl apply --filename certificate.yaml The Certificate namespace must match the ingress gateway namespace.

### "Installing and upgrading gateways \_|\_ Cloud Service Mesh v1.20 \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/v1.20/docs/gateways](https://docs.cloud.google.com/service-mesh/v1.20/docs/gateways)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Managed Use the following command to locate the available release channels: kubectl -n istio-system get controlplanerevision The output is similar to the following: NAME AGE asm-managed 6d7h asm-managed-rapid 6d7h In the output, the value under the NAME column is the revision label that corresponds to the available release channel for the Cloud Service Mesh version.
- If you labeled the namespace for injection, set the istio.io/rev label on the namespace to the new revision value: kubectl label namespace GATEWAY NAMESPACE \ istio-injection- istio.io/rev= REVISION \ --overwrite If you enabled injection only for the gateway pod, set the istio.io/rev label on the Deployment to the new revision value like the following Kubernetes YAML file: cat <<EOF > gateway-deployment.yaml apiVersion: apps/v1 kind: Deployment metadata: name: istio-ingressgateway namespace: GATEWAY NAMESPACE spec: selector: matchLabels: istio: ingressgateway template: metadata: annotations: This is required to tell Anthos Service Mesh to inject the gateway with the required configuration. inject.istio.io/templates: gateway labels: istio: ingressgateway istio.io/rev: REVISION spec: containers: - name: istio-proxy image: auto # The image will automatically update each time the pod starts.
- For example, if you want to roll out a new revision, canary, create a copy of your gateway Deployment with the istio.io/rev= REVISION label set to the new revision and a new name, for example istio-ingressgateway-canary : apiVersion : apps/v1 kind : Deployment metadata : name : istio-ingressgateway-canary namespace : GATEWAY NAMESPACE spec : selector : matchLabels : istio : ingressgateway template : metadata : annotations : inject.istio.io/templates : gateway labels : istio : ingressgateway istio.io/rev : REVISION # Set to the control plane revision you want to deploy spec : containers : - name : istio-proxy image : auto Note: If the image does not automatically update with the actual Cloud Service Mesh proxy image, then the container will not be found and an error will occur.
- EOF kubectl apply -f gateway-deployment.yaml Note: If the image does not automatically update with the actual Cloud Service Mesh proxy image, then the container will not be found and an error will occur.

### "Prepare to set up on service routing APIs with Envoy and proxyless workloads\

- URL: [https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/prepare-service-routing-envoy-proxyless](https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/prepare-service-routing-envoy-proxyless)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Continue the setup process After you complete the prerequisites described in this document, continue with one of these documents if you are configuring Cloud Service Mesh with the service routing APIs: Set up proxyless gRPC services with a Mesh resource Set up Envoy proxies with HTTP services Set up an ingress gateway Set up TCP services with a TCPRoute resource Set up cross-project references with Mesh and Route resources Set up Gateway TLS routing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Prepare to set up on service routing APIs with Envoy and proxyless workloads This document provides information on the prerequisite tasks for setting up Cloud Service Mesh using the service routing APIs with Envoy proxies or with proxyless gRPC as the dataplane.
- Overall process with proxyless gRPC Follow this overall procedure for setting up proxyless gRPC applications in a service mesh: Update your gRPC clients to the latest version of gRPC, with the most recent patch.
- Set gRPC name resolver to use xds Set or change your gRPC applications to use the xds name resolution scheme in the target URI, rather than DNS or any other resolver scheme.

### "Migrating from Istio on GKE to Cloud Service Mesh \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh](https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deploy Online Boutique to the GKE cluster: kpt pkg get \ https://github.com/GoogleCloudPlatform/microservices-demo.git/release \ online-boutique kubectl --context= ${ CLUSTER 1 CTX } create namespace online-boutique kubectl --context= ${ CLUSTER 1 CTX } label namespace online-boutique istio-injection=enabled kubectl --context= ${ CLUSTER 1 CTX } -n online-boutique apply -f online-boutique Wait until all Deployments are ready: kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment adservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment checkoutservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment currencyservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment emailservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment frontend kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment paymentservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment productcatalogservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment shippingservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment cartservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment loadgenerator kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment recommendationservice Ensure that there are two containers per Pod—the application container and the Istio sidecar proxy that Istio on GKE automatically injects into the Pod: kubectl --context= ${ CLUSTER 1 CTX } -n online-boutique get pods The output is similar to the following: NAME READY STATUS RESTARTS AGE adservice-7cbc9bd9-t92k4 2/2 Running 0 3m21s cartservice-d7db78c66-5qfmt 2/2 Running 1 3m23s checkoutservice-784bfc794f-j8rl5 2/2 Running 0 3m26s currencyservice-5898885559-lkwg4 2/2 Running 0 3m23s emailservice-6bd8b47657-llvgv 2/2 Running 0 3m27s frontend-764c5c755f-9wf97 2/2 Running 0 3m25s loadgenerator-84cbcd768c-5pdbr 2/2 Running 3 3m23s paymentservice-6c676df669-s779c 2/2 Running 0 3m25s productcatalogservice-7fcf4f8cc-hvf5x 2/2 Running 0 3m24s recommendationservice-79f5f4bbf5-6st24 2/2 Running 0 3m26s redis-cart-74594bd569-pfhkz 2/2 Running 0 3m22s shippingservice-b5879cdbf-5z7m5 2/2 Running 0 3m22s You can also check the sidecar Envoy proxy version from any one of the Pods to confirm that you have Istio on GKE v1.4 Envoy proxies deployed: export FRONTEND POD =$ ( kubectl get pod - n online - boutique - l app = frontend -- context =$ { CLUSTER 1 CTX } - o jsonpath = '{.items[0].metadata.name}' ) kubectl -- context =$ { CLUSTER 1 CTX } get pods $ { FRONTEND POD } - n online - boutique - o json jq '.status.containerStatuses[].image' The output is similar to the following: "gke.gcr.io/istio/proxyv2:1.4.10-gke.8" "gcr.io/google-samples/microservices-demo/frontend:v0.3.4" Access the application by navigating to the IP address of the istio-ingressgateway Service IP address: kubectl -- context =$ { CLUSTER 1 CTX } - n istio - system get service istio - ingressgateway - o jsonpath = '{.status.loadBalancer.ingress[0].ip}' Frequently asked questions This section describes frequently asked questions and related answers about migrating from Istio on GKE to Cloud Service Mesh.
- Check the sidecar Envoy proxy version from any one of the Pods from any Deployment in the namespace to confirm that you now have Cloud Service Mesh Envoy proxies deployed: export POD NAME= NAME OF ANY POD IN NAMESPACE kubectl --context=${CLUSTER 1 CTX} get pods ${POD NAME} -n ${NAMESPACE} -o json jq '.status.containerStatuses[].image' The output is similar to the following: "gcr.io/gke-release/asm/proxyv2:1.11.5-asm.3" "appContainerImage" Verify and test your applications after restarting. kubectl --context=${CLUSTER 1 CTX} -n istio-system get service istio-ingressgateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}' (Optional) If you want Google to manage upgrades of the proxies, enable the Google-managed data plane View migration status Run the following command to view the status of the migration: kubectl get cm/asm-addon-migration-state -n istio-system -ojsonpath={.data} The output indicates whether the migrations is complete, pending, or failed: {"migrationStatus":"SUCCESS"} {"migrationStatus":"PENDING"} {"migrationStatus":"MIGRATION CONFIG ERROR"} {"migrationStatus":"CONTROLPLANE PROVISION ERROR"} If migrationStatus outputs SUCCESS , the control plane has successfully upgraded to Cloud Service Mesh.
- Continue? [Y/n] Y Running: kubectl get cm -n istio-system istio-asm-managed -oyaml Running: kubectl -n istio-system apply -f - secret/meshca-root created Running: kubectl get cm istio -n istio-system -o yaml Running: kubectl get cm istio -n istio-system -o yaml Running: kubectl replace -f - configmap/istio replaced Running: kubectl get deploy istio-pilot -n istio-system -o yaml Running: kubectl patch deploy istio-pilot -n istio-system -p={"spec":{"template":{"spec":{"containers":[{ "name":"discovery", "image":"gcr.io/gke-release/istio/pilot:1.4.10-gke.12", "env":[{"name":"PILOT SKIP VALIDATE TRUST DOMAIN","value":"true"}] }]}}}} deployment.apps/istio-pilot patched Running: kubectl get deploy istio-citadel -n istio-system -o yaml Running: kubectl patch deploy istio-citadel -n istio-system -p={"spec":{"template":{"spec":{ "containers":[{ "name":"citadel", "args": ["--append-dns-names=true", "--grpc-port=8060", "--citadel-storage-namespace=istio-system", "--custom-dns-names=istio-pilot-service-account.istio-system:istio-pilot.istio-system", "--monitoring-port=15014", "--self-signed-ca=true", "--workload-cert-ttl=2160h", "--root-cert=/var/run/root-certs/meshca-root.pem"], "volumeMounts": [{"mountPath": "/var/run/root-certs", "name": "meshca-root", "readOnly": true}] }], "volumes": [{"name": "meshca-root", "secret":{"secretName": "meshca-root"}}] }}}} deployment.apps/istio-citadel patched OK Waiting for root certificate to distribute to all pods.
- Running: kubectl delete Secret istio-ca-secret -n istio-system --ignore-not-found secret "istio-ca-secret" deleted Running: kubectl delete -n istio-system jobs -lk8s-app=istio,app=security job.batch "istio-security-post-install-1.4.10-gke.8" deleted Ensure that Istio on GKE Deployments and Services have been successfully removed from the cluster: kubectl --context= ${ CLUSTER 1 CTX } -n istio-system get deployments,services The output is similar to the following: NAME READY UP-TO-DATE AVAILABLE AGE deployment.apps/asm-ingressgateway 1/1 1 1 10m NAME TYPE CLUSTER-IP EXTERNAL-IP AGE PORT(S) service/istio-ingressgateway LoadBalancer 10.64.5.208 34.139.100.237 95m 15020:31959/TCP,80:30971/TCP,443:31688/TCP,31400:31664/TCP,15029:32493/TCP,15030:31722/TCP,15031:30198/TCP,15032:31910/TCP,15443:31222/TCP You only see the Cloud Service Mesh ingress gateway Service and Deployment.

