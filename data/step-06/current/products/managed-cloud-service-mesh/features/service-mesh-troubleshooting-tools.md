---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.773Z"
product_name: "Managed Cloud Service Mesh"
product_slug: "managed-cloud-service-mesh"
feature_name: "Service mesh troubleshooting tools"
feature_slug: "service-mesh-troubleshooting-tools"
latest_feature_date: "2025-04-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-dependent-tools"
  - "https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh"
  - "https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh"
  - "https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh"
keywords:
  - "mesh"
  - "troubleshooting"
  - "tools"
  - "provides"
  - "detailed"
  - "istio"
  - "error"
  - "codes"
---

# Service mesh troubleshooting tools

Product: Managed Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Provides detailed Istio error codes and mesh state checks to help identify and resolve configuration problems; Provides detailed Istio error codes and mesh state checks to help identify and resolve configuration problems.

## Extended Definition

Provides detailed Istio error codes and mesh state checks to help identify and resolve configuration problems; Provides detailed Istio error codes and mesh state checks to help identify and resolve configuration problems.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-dependent-tools](https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-dependent-tools)
- [https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh](https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh)
- [https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh](https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh)
- [https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh](https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh)

## Supporting Pages

### "Install dependent tools and verify cluster \_|\_ Cloud Service Mesh v1.26\

- URL: [https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-dependent-tools](https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-dependent-tools)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Install dependent tools and verify cluster Note: This guide only supports Cloud Service Mesh with Istio APIs and does not support Google Cloud APIs.
- On success, asmcli outputs the following: asmcli: Setting up necessary files... asmcli: Using asm kubeconfig as the kubeconfig... asmcli: Checking installation tool dependencies... asmcli: Fetching/writing GCP credentials to kubeconfig file... asmcli: Verifying connectivity (10s)... asmcli: kubeconfig set to asm kubeconfig asmcli: using context gke example-project-12345 us-central1 cluster-2 asmcli: Getting account information... asmcli: Downloading ASM.. asmcli: Downloading ASM kpt package... fetching package "/asm" from "https://github.com/GoogleCloudPlatform/anthos-service-mesh-packages" to "asm" asmcli: Checking required APIs... asmcli: Checking for project example-project-12345... asmcli: Reading labels for us-central1/cluster-2... asmcli: Checking for istio-system namespace... asmcli: Confirming node pool requirements for example-project-12345/us-central1/cluster-2... asmcli: Checking Istio installations... asmcli: [WARNING]: There is no way to validate that the meshconfig API has been initialized. asmcli: [WARNING]: This needs to happen once per GCP project.
- With this option, asmcli doesn't make any changes to your project or cluster, and it doesn't install Cloud Service Mesh. asmcli validates that: Your environment has the required tools .
- Make sure you use the version of istioctl distributed with the new Cloud Service Mesh version. istioctl experimental precheck What's next?

### "Resolving managed Cloud Service Mesh issues \_|\_ Cloud Service Mesh v1.21\

- URL: [https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh](https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh)
- Source ID: `site-iam-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resolving managed Cloud Service Mesh issues This document explains common Cloud Service Mesh problems and how to resolve them, such as when a pod is injected with istio.istio-system , the installation tool generates errors such as HTTP 400 status codes and cluster membership errors.
- Filter this message using the following query: resource.type="istio control plane" resource.labels.project id=[ PROJECT ID ] resource.labels.location=[ REGION ] severity=ERROR jsonPayload.message= "Connect Gateway API has not been used in project" In the meantime, sidecar injection and deploying any Cloud Service Mesh related Kubernetes custom resources will also fail and Cloud Logging will display the following warning message: Error creating: Internal error occurred: failed calling webhook "rev.namespace.sidecar-injector.istio.io": failed to call webhook: an error on the server ("unknown") has prevented the request from succeeding.
- NodePool Workload Identity Federation for GKE is disabled The following command displays the state of managed Cloud Service Mesh: gcloud container fleet mesh describe You may see the NODEPOOL WORKLOAD IDENTITY FEDERATION REQUIRED error code in the Conditions field of your membership: membershipStates: projects/test-project/locations/us-central1/memberships/my-membership: servicemesh: conditions: - code: NODEPOOL WORKLOAD IDENTITY FEDERATION REQUIRED details: One or more node pools have workload identity federation disabled. documentationLink: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity severity: ERROR controlPlaneManagement: details: - code: REVISION FAILED PRECONDITION details: Required in -cluster components are not ready.
- The error can occur if you did not enable Workload Identity on your Kubernetes cluster, which you can do by using the following command: export CLUSTER NAME = ... export PROJECT ID = ... export LOCATION = ... gcloud container clusters update $CLUSTER NAME --zone $LOCATION \ --workload-pool = $PROJECT ID .svc.id.goog Managed data plane state The following command displays the state of the managed data plane : gcloud container fleet mesh describe --project PROJECT ID The following table lists all possible managed data plane states: State Code Description ACTIVE OK The managed data plane is running normally.

### "Install Cloud Service Mesh for Kubernetes workloads off Google Cloud \_\

- URL: [https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh](https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a directory for the certificates and keys: mkdir -p certs && \ pushd certs Generate a root certificate and key: make -f ../tools/certs/Makefile.selfsigned.mk root-ca This generates these files: root-cert.pem : the root certificate root-key.pem : the root key root-ca.conf : the configuration for openssl to generate the root certificate root-cert.csr : the CSR for the root certificate Generate an intermediate certificate and key: make -f ../tools/certs/Makefile.selfsigned.mk cluster1-cacerts This generates these files in a directory named cluster1 : ca-cert.pem : the intermediate certificates ca-key.pem : the intermediate key cert-chain.pem : the certificate chain which istiod uses root-cert.pem : the root certificate Note: You can replace cluster1 with a different name.
- DIR PATH /istioctl tag list Apply the default injection labels to the namespace. kubectl label namespace GATEWAY NAMESPACE istio-injection=enabled istio.io/rev- Revision label Use the following command to locate the revision label on istiod : kubectl get deploy -n istio-system -l app=istiod -o \ "jsonpath={.items[ ].metadata.labels['istio\.io/rev']}{'\n'}" The command outputs the revision label that corresponds to the Cloud Service Mesh version, for example: asm-1268-3 Apply the revision label to the namespace.
- Register the cluster to the fleet if it isn't already registered. --option attached-cluster Changes the default signing utility to be istiod. -ca citadel Use Istio CA as the certificate authority. --ca cert The intermediate certificate --ca key The key for the intermediate certificate --root cert The root certificate --cert chain The certificate chain --network id If you are setting up a multi-network mesh, then set the --network id to a unique value for each cluster in the mesh.
- Register the cluster to the fleet if it isn't already registered. --option attached-cluster Changes the default signing utility to be istiod. -ca citadel Use Istio CA as the certificate authority. --ca cert The intermediate certificate --ca key The key for the intermediate certificate --root cert The root certificate --cert chain The certificate chain --network id If you are setting up a multi-network mesh, then set the --network id to a unique value for each cluster in the mesh.

### "Migrating from Istio on GKE to Cloud Service Mesh \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh](https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check the sidecar Envoy proxy version from any one of the Pods from any Deployment in the namespace to confirm that you now have Cloud Service Mesh Envoy proxies deployed: export POD NAME= NAME OF ANY POD IN NAMESPACE kubectl --context=${CLUSTER 1 CTX} get pods ${POD NAME} -n ${NAMESPACE} -o json jq '.status.containerStatuses[].image' The output is similar to the following: "gcr.io/gke-release/asm/proxyv2:1.11.5-asm.3" "appContainerImage" Verify and test your applications after restarting. kubectl --context=${CLUSTER 1 CTX} -n istio-system get service istio-ingressgateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}' (Optional) If you want Google to manage upgrades of the proxies, enable the Google-managed data plane View migration status Run the following command to view the status of the migration: kubectl get cm/asm-addon-migration-state -n istio-system -ojsonpath={.data} The output indicates whether the migrations is complete, pending, or failed: {"migrationStatus":"SUCCESS"} {"migrationStatus":"PENDING"} {"migrationStatus":"MIGRATION CONFIG ERROR"} {"migrationStatus":"CONTROLPLANE PROVISION ERROR"} If migrationStatus outputs SUCCESS , the control plane has successfully upgraded to Cloud Service Mesh.
- Deploy Online Boutique to the GKE cluster: kpt pkg get \ https://github.com/GoogleCloudPlatform/microservices-demo.git/release \ online-boutique kubectl --context= ${ CLUSTER 1 CTX } create namespace online-boutique kubectl --context= ${ CLUSTER 1 CTX } label namespace online-boutique istio-injection=enabled kubectl --context= ${ CLUSTER 1 CTX } -n online-boutique apply -f online-boutique Wait until all Deployments are ready: kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment adservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment checkoutservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment currencyservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment emailservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment frontend kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment paymentservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment productcatalogservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment shippingservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment cartservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment loadgenerator kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment recommendationservice Ensure that there are two containers per Pod—the application container and the Istio sidecar proxy that Istio on GKE automatically injects into the Pod: kubectl --context= ${ CLUSTER 1 CTX } -n online-boutique get pods The output is similar to the following: NAME READY STATUS RESTARTS AGE adservice-7cbc9bd9-t92k4 2/2 Running 0 3m21s cartservice-d7db78c66-5qfmt 2/2 Running 1 3m23s checkoutservice-784bfc794f-j8rl5 2/2 Running 0 3m26s currencyservice-5898885559-lkwg4 2/2 Running 0 3m23s emailservice-6bd8b47657-llvgv 2/2 Running 0 3m27s frontend-764c5c755f-9wf97 2/2 Running 0 3m25s loadgenerator-84cbcd768c-5pdbr 2/2 Running 3 3m23s paymentservice-6c676df669-s779c 2/2 Running 0 3m25s productcatalogservice-7fcf4f8cc-hvf5x 2/2 Running 0 3m24s recommendationservice-79f5f4bbf5-6st24 2/2 Running 0 3m26s redis-cart-74594bd569-pfhkz 2/2 Running 0 3m22s shippingservice-b5879cdbf-5z7m5 2/2 Running 0 3m22s You can also check the sidecar Envoy proxy version from any one of the Pods to confirm that you have Istio on GKE v1.4 Envoy proxies deployed: export FRONTEND POD =$ ( kubectl get pod - n online - boutique - l app = frontend -- context =$ { CLUSTER 1 CTX } - o jsonpath = '{.items[0].metadata.name}' ) kubectl -- context =$ { CLUSTER 1 CTX } get pods $ { FRONTEND POD } - n online - boutique - o json jq '.status.containerStatuses[].image' The output is similar to the following: "gke.gcr.io/istio/proxyv2:1.4.10-gke.8" "gcr.io/google-samples/microservices-demo/frontend:v0.3.4" Access the application by navigating to the IP address of the istio-ingressgateway Service IP address: kubectl -- context =$ { CLUSTER 1 CTX } - n istio - system get service istio - ingressgateway - o jsonpath = '{.status.loadBalancer.ingress[0].ip}' Frequently asked questions This section describes frequently asked questions and related answers about migrating from Istio on GKE to Cloud Service Mesh.
- Continue? [Y/n] Y Running: kubectl get cm -n istio-system istio-asm-managed -oyaml Running: kubectl -n istio-system apply -f - secret/meshca-root created Running: kubectl get cm istio -n istio-system -o yaml Running: kubectl get cm istio -n istio-system -o yaml Running: kubectl replace -f - configmap/istio replaced Running: kubectl get deploy istio-pilot -n istio-system -o yaml Running: kubectl patch deploy istio-pilot -n istio-system -p={"spec":{"template":{"spec":{"containers":[{ "name":"discovery", "image":"gcr.io/gke-release/istio/pilot:1.4.10-gke.12", "env":[{"name":"PILOT SKIP VALIDATE TRUST DOMAIN","value":"true"}] }]}}}} deployment.apps/istio-pilot patched Running: kubectl get deploy istio-citadel -n istio-system -o yaml Running: kubectl patch deploy istio-citadel -n istio-system -p={"spec":{"template":{"spec":{ "containers":[{ "name":"citadel", "args": ["--append-dns-names=true", "--grpc-port=8060", "--citadel-storage-namespace=istio-system", "--custom-dns-names=istio-pilot-service-account.istio-system:istio-pilot.istio-system", "--monitoring-port=15014", "--self-signed-ca=true", "--workload-cert-ttl=2160h", "--root-cert=/var/run/root-certs/meshca-root.pem"], "volumeMounts": [{"mountPath": "/var/run/root-certs", "name": "meshca-root", "readOnly": true}] }], "volumes": [{"name": "meshca-root", "secret":{"secretName": "meshca-root"}}] }}}} deployment.apps/istio-citadel patched OK Waiting for root certificate to distribute to all pods.
- Rollback the mutating webhook changes: ${WORKDIR}/migrate addon -d tmpdir --command rollback-mutatingwebhook Relabel the namespaces to use Istio on GKE sidecar injection instead of Cloud Service Mesh by running the following command: for namespaces with version 1.4 workloads: export NAMESPACE= NAMESPACE NAME kubectl --context=${CLUSTER 1 CTX} label namespace ${NAMESPACE} istio.io/rev- istio-injection=enabled --overwrite for namespaces with version 1.6 workloads: export NAMESPACE= NAMESPACE NAME kubectl --context=${CLUSTER 1 CTX} label namespace ${NAMESPACE} istio.io/rev=istio-1611 --overwrite Perform a rolling restart of all Deployments in the namespace: kubectl --context= ${ CLUSTER 1 CTX } rollout restart deployment -n ${ NAMESPACE } Wait a few minutes and ensure that all Pods are running: kubectl --context= ${ CLUSTER 1 CTX } -n ${ NAMESPACE } get pods The output is similar to the following: NAME READY STATUS RESTARTS AGE deploymentName1-PodName 2/2 Running 0 101s deploymentName2-PodName 2/2 Running 2 100s ...

