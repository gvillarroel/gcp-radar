---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.775Z"
product_name: "Managed Cloud Service Mesh"
product_slug: "managed-cloud-service-mesh"
feature_name: "Managed Cloud Service Mesh asmcli onboarding path"
feature_slug: "managed-cloud-service-mesh-asmcli-onboarding-path"
latest_feature_date: "2024-08-22"
deprecation_date: "2024-08-22"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh"
  - "https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh"
  - "https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh"
  - "https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/provision-control-plane"
keywords:
  - "managed"
  - "mesh"
  - "asmcli"
  - "onboarding"
  - "path"
  - "the"
  - "is"
  - "used"
---

# Managed Cloud Service Mesh asmcli onboarding path

Product: Managed Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

The asmcli onboarding path is used to onboard Managed Cloud Service Mesh on Google Cloud clusters; The asmcli onboarding path is used to onboard Managed Cloud Service Mesh on Google Cloud clusters; deprecated on 2024-08-22.

## Extended Definition

The asmcli onboarding path is used to onboard Managed Cloud Service Mesh on Google Cloud clusters; The asmcli onboarding path is used to onboard Managed Cloud Service Mesh on Google Cloud clusters; deprecated on 2024-08-22.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh](https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh)
- [https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh](https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh)
- [https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh](https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh)
- [https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/provision-control-plane)

## Supporting Pages

### "Migrating from Istio on GKE to Cloud Service Mesh \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh](https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh)
- Source ID: `site-docs-root`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check the sidecar Envoy proxy version from any one of the Pods from any Deployment in the namespace to confirm that you now have Cloud Service Mesh Envoy proxies deployed: export POD NAME= NAME OF ANY POD IN NAMESPACE kubectl --context=${CLUSTER 1 CTX} get pods ${POD NAME} -n ${NAMESPACE} -o json jq '.status.containerStatuses[].image' The output is similar to the following: "gcr.io/gke-release/asm/proxyv2:1.11.5-asm.3" "appContainerImage" Verify and test your applications after restarting. kubectl --context=${CLUSTER 1 CTX} -n istio-system get service istio-ingressgateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}' (Optional) If you want Google to manage upgrades of the proxies, enable the Google-managed data plane View migration status Run the following command to view the status of the migration: kubectl get cm/asm-addon-migration-state -n istio-system -ojsonpath={.data} The output indicates whether the migrations is complete, pending, or failed: {"migrationStatus":"SUCCESS"} {"migrationStatus":"PENDING"} {"migrationStatus":"MIGRATION CONFIG ERROR"} {"migrationStatus":"CONTROLPLANE PROVISION ERROR"} If migrationStatus outputs SUCCESS , the control plane has successfully upgraded to Cloud Service Mesh.
- Download the latest version of the script that installs Cloud Service Mesh to the current working directory, and make the script executable: curl https://storage.googleapis.com/csm-artifacts/asm/asmcli > asmcli chmod +x asmcli To configure the GKE cluster, run the installation script to install Cloud Service Mesh with the Google-managed control plane of regular channel: ./asmcli install \ -p ${ PROJECT ID } \ -l ${ CLUSTER 1 LOCATION } \ -n ${ CLUSTER 1 } \ --fleet id ${ FLEET PROJECT ID } \ --managed \ --verbose \ --output dir ${ CLUSTER 1 } \ --enable-all \ --channel regular This step can take a few minutes to complete.
- Deploy Online Boutique to the GKE cluster: kpt pkg get \ https://github.com/GoogleCloudPlatform/microservices-demo.git/release \ online-boutique kubectl --context= ${ CLUSTER 1 CTX } create namespace online-boutique kubectl --context= ${ CLUSTER 1 CTX } label namespace online-boutique istio-injection=enabled kubectl --context= ${ CLUSTER 1 CTX } -n online-boutique apply -f online-boutique Wait until all Deployments are ready: kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment adservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment checkoutservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment currencyservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment emailservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment frontend kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment paymentservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment productcatalogservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment shippingservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment cartservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment loadgenerator kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment recommendationservice Ensure that there are two containers per Pod—the application container and the Istio sidecar proxy that Istio on GKE automatically injects into the Pod: kubectl --context= ${ CLUSTER 1 CTX } -n online-boutique get pods The output is similar to the following: NAME READY STATUS RESTARTS AGE adservice-7cbc9bd9-t92k4 2/2 Running 0 3m21s cartservice-d7db78c66-5qfmt 2/2 Running 1 3m23s checkoutservice-784bfc794f-j8rl5 2/2 Running 0 3m26s currencyservice-5898885559-lkwg4 2/2 Running 0 3m23s emailservice-6bd8b47657-llvgv 2/2 Running 0 3m27s frontend-764c5c755f-9wf97 2/2 Running 0 3m25s loadgenerator-84cbcd768c-5pdbr 2/2 Running 3 3m23s paymentservice-6c676df669-s779c 2/2 Running 0 3m25s productcatalogservice-7fcf4f8cc-hvf5x 2/2 Running 0 3m24s recommendationservice-79f5f4bbf5-6st24 2/2 Running 0 3m26s redis-cart-74594bd569-pfhkz 2/2 Running 0 3m22s shippingservice-b5879cdbf-5z7m5 2/2 Running 0 3m22s You can also check the sidecar Envoy proxy version from any one of the Pods to confirm that you have Istio on GKE v1.4 Envoy proxies deployed: export FRONTEND POD =$ ( kubectl get pod - n online - boutique - l app = frontend -- context =$ { CLUSTER 1 CTX } - o jsonpath = '{.items[0].metadata.name}' ) kubectl -- context =$ { CLUSTER 1 CTX } get pods $ { FRONTEND POD } - n online - boutique - o json jq '.status.containerStatuses[].image' The output is similar to the following: "gke.gcr.io/istio/proxyv2:1.4.10-gke.8" "gcr.io/google-samples/microservices-demo/frontend:v0.3.4" Access the application by navigating to the IP address of the istio-ingressgateway Service IP address: kubectl -- context =$ { CLUSTER 1 CTX } - n istio - system get service istio - ingressgateway - o jsonpath = '{.status.loadBalancer.ingress[0].ip}' Frequently asked questions This section describes frequently asked questions and related answers about migrating from Istio on GKE to Cloud Service Mesh.
- Continue? [Y/n] Y Running: kubectl get cm -n istio-system istio-asm-managed -oyaml Running: kubectl -n istio-system apply -f - secret/meshca-root created Running: kubectl get cm istio -n istio-system -o yaml Running: kubectl get cm istio -n istio-system -o yaml Running: kubectl replace -f - configmap/istio replaced Running: kubectl get deploy istio-pilot -n istio-system -o yaml Running: kubectl patch deploy istio-pilot -n istio-system -p={"spec":{"template":{"spec":{"containers":[{ "name":"discovery", "image":"gcr.io/gke-release/istio/pilot:1.4.10-gke.12", "env":[{"name":"PILOT SKIP VALIDATE TRUST DOMAIN","value":"true"}] }]}}}} deployment.apps/istio-pilot patched Running: kubectl get deploy istio-citadel -n istio-system -o yaml Running: kubectl patch deploy istio-citadel -n istio-system -p={"spec":{"template":{"spec":{ "containers":[{ "name":"citadel", "args": ["--append-dns-names=true", "--grpc-port=8060", "--citadel-storage-namespace=istio-system", "--custom-dns-names=istio-pilot-service-account.istio-system:istio-pilot.istio-system", "--monitoring-port=15014", "--self-signed-ca=true", "--workload-cert-ttl=2160h", "--root-cert=/var/run/root-certs/meshca-root.pem"], "volumeMounts": [{"mountPath": "/var/run/root-certs", "name": "meshca-root", "readOnly": true}] }], "volumes": [{"name": "meshca-root", "secret":{"secretName": "meshca-root"}}] }}}} deployment.apps/istio-citadel patched OK Waiting for root certificate to distribute to all pods.

### "Install Cloud Service Mesh for Kubernetes workloads off Google Cloud \_\

- URL: [https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh](https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh)
- Source ID: `site-docs-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set the current context to your user cluster: kubectl config use-context CLUSTER NAME Run asmcli install : HUB REGISTRATION EXTRA FLAGS=--has-private-issuer ./asmcli install \ --fleet id FLEET PROJECT ID \ --kubeconfig KUBECONFIG FILE \ --output dir DIR PATH \ --platform multicloud \ --enable all \ --option attached-cluster \ --network id default \ --ca mesh ca HUB REGISTRATION EXTRA FLAGS=--has-private-issuer Allows registration with GKE Hub.
- Note that for Kubernetes workloads on Google Cloud, we recommend provisioning a managed control plane For instructions to prepare an offline installation of Cloud Service Mesh, see Prepare an offline installation of Cloud Service Mesh You will need to specify the --offline and --output dir options when running asmcli install .
- Private Set the current context to your user cluster: kubectl config use-context CLUSTER NAME Save the following YAML to a file called istio-operator-internal-lb.yaml : apiVersion: install.istio.io/v1alpha1 kind: IstioOperator spec: components: ingressGateways: - enabled: true k8s: serviceAnnotations: service.beta.kubernetes.io/aws-load-balancer-internal: "true" name: istio-ingressgateway Run asmcli install : ./asmcli install \ --fleet id FLEET PROJECT ID \ --kubeconfig KUBECONFIG FILE \ --output dir DIR PATH \ --platform multicloud \ --enable all \ --ca citadel \ --ca cert FILE PATH \ --ca key FILE PATH \ --root cert FILE PATH \ --cert chain FILE PATH --custom overlay istio-operator-internal-lb.yaml \ --option stackdriver --fleet id The project ID of the fleet host project . --kubeconfig The full path to the kubeconfig file .
- Private Set the current context to your user cluster: kubectl config use-context CLUSTER NAME Save the following YAML to a file called istio-operator-internal-lb.yaml : apiVersion: install.istio.io/v1alpha1 kind: IstioOperator spec: components: ingressGateways: - enabled: true k8s: serviceAnnotations: service.beta.kubernetes.io/aws-load-balancer-internal: "true" name: istio-ingressgateway Run asmcli install : ./asmcli install \ --fleet id FLEET PROJECT ID \ --kubeconfig KUBECONFIG FILE \ --output dir DIR PATH \ --platform multicloud \ --enable all \ --ca citadel \ --ca cert FILE PATH \ --ca key FILE PATH \ --root cert FILE PATH \ --cert chain FILE PATH --custom overlay istio-operator-internal-lb.yaml \ --option stackdriver --fleet id The project ID of the fleet host project . --kubeconfig The full path to the kubeconfig file .

### "Resolving managed Cloud Service Mesh issues \_|\_ Cloud Service Mesh v1.21\

- URL: [https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh](https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh)
- Source ID: `site-iam-reference`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this scenario, managed Cloud Service Mesh provisioning will fail and Cloud Logging will display the following error message: Connect Gateway API has not been used in project [ PROJECT NUMBER ] before or it is disabled.
- Follow the instructions to enable managed Cloud Service Mesh via the fleet API , or enable the managed data plane after provisioning managed Cloud Service Mesh with asmcli .
- NodePool Workload Identity Federation for GKE is disabled The following command displays the state of managed Cloud Service Mesh: gcloud container fleet mesh describe You may see the NODEPOOL WORKLOAD IDENTITY FEDERATION REQUIRED error code in the Conditions field of your membership: membershipStates: projects/test-project/locations/us-central1/memberships/my-membership: servicemesh: conditions: - code: NODEPOOL WORKLOAD IDENTITY FEDERATION REQUIRED details: One or more node pools have workload identity federation disabled. documentationLink: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity severity: ERROR controlPlaneManagement: details: - code: REVISION FAILED PRECONDITION details: Required in -cluster components are not ready.
- Filter this message using the following query: resource.type="istio control plane" resource.labels.project id=[ PROJECT ID ] resource.labels.location=[ REGION ] severity=ERROR jsonPayload.message= "Connect Gateway API has not been used in project" In the meantime, sidecar injection and deploying any Cloud Service Mesh related Kubernetes custom resources will also fail and Cloud Logging will display the following warning message: Error creating: Internal error occurred: failed calling webhook "rev.namespace.sidecar-injector.istio.io": failed to call webhook: an error on the server ("unknown") has prevented the request from succeeding.

### "Provision a managed Cloud Service Mesh control plane on GKE \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/provision-control-plane)
- Source ID: `site-docs-reference`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To disable the managed data plane at the cluster level and revert back to managing the sidecar proxies yourself, change the annotation: kubectl annotate --overwrite controlplanerevision -n istio-system \ mesh.cloud.google.com/proxy='{"managed":"false"}' To disable the managed data plane for a namespace: kubectl annotate --overwrite namespace NAMESPACE \ mesh.cloud.google.com/proxy='{"managed":"false"}' To disable the managed data plane for a pod: kubectl annotate --overwrite pod POD NAME \ mesh.cloud.google.com/proxy='{"managed":"false"}' Enable maintenance windows for the managed data plane If you have a GKE maintenance window configured, active upgrades will commence at the start of the next available maintenance window and continue without pause until all managed pods have been updated (usually 12 hours).
- Verify the control plane has been provisioned After a few minutes, verify that the control plane status is ACTIVE : gcloud container fleet mesh describe --project FLEET PROJECT ID The output is similar to: ... membershipSpecs : projects / 746296320118 / locations / us - central1 / memberships / demo - cluster - 1 : mesh : management : MANAGEMENT AUTOMATIC membershipStates : projects / 746296320118 / locations / us - central1 / memberships / demo - cluster - 1 : servicemesh : controlPlaneManagement : details : - code : REVISION READY details : ' Ready : asm - managed ' state : ACTIVE implementation : ISTIOD TRAFFIC DIRECTOR dataPlaneManagement : details : - code : OK details : Service is running . state : ACTIVE state : code : OK description : ' Revision ( s ) ready for use : asm - managed . ' ...
- Grant service accounts in the fleet project permission to access the cluster project: gcloud projects add-iam-policy-binding " CLUSTER PROJECT ID " \ --member "serviceAccount:service- FLEET PROJECT NUMBER @gcp-sa-servicemesh.iam.gserviceaccount.com" \ --role roles/anthosservicemesh.serviceAgent Enable the Mesh API on the cluster's project: gcloud services enable mesh.googleapis.com \ --project = CLUSTER PROJECT ID Configure Certificate Authority Service (Optional) If your service mesh deployment requires Certificate Authority Service (CA Service), then follow Configure Certificate Authority Service for managed Cloud Service Mesh to enable it for your fleet.
- Delete old control plane After you install and confirm that all namespaces use the Google-managed control plane, you can delete the old control plane. kubectl delete Service,Deployment,HorizontalPodAutoscaler,PodDisruptionBudget istiod -n istio-system --ignore-not-found=true If you used istioctl kube-inject instead of automatic injection, or if you installed additional gateways, check the metrics for the control plane, and verify that the number of connected endpoints is zero.

