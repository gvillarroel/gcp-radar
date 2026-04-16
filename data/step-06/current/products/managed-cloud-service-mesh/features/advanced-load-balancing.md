---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.772Z"
product_name: "Managed Cloud Service Mesh"
product_slug: "managed-cloud-service-mesh"
feature_name: "Advanced load balancing"
feature_slug: "advanced-load-balancing"
latest_feature_date: "2025-07-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh"
  - "https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh"
  - "https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh"
  - "https://docs.cloud.google.com/service-mesh/v1.20/docs/anthos-service-mesh-proxy-injection"
keywords:
  - "advanced"
  - "load"
  - "balancing"
  - "provides"
  - "for"
  - "managed"
  - "mesh"
---

# Advanced load balancing

Product: Managed Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Provides advanced load balancing for managed Cloud Service Mesh; Provides advanced load balancing for managed Cloud Service Mesh.

## Extended Definition

Provides advanced load balancing for managed Cloud Service Mesh; Provides advanced load balancing for managed Cloud Service Mesh.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh](https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh)
- [https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh](https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh)
- [https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh](https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh)
- [https://docs.cloud.google.com/service-mesh/v1.20/docs/anthos-service-mesh-proxy-injection](https://docs.cloud.google.com/service-mesh/v1.20/docs/anthos-service-mesh-proxy-injection)

## Supporting Pages

### "Install Cloud Service Mesh for Kubernetes workloads off Google Cloud \_\

- URL: [https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh](https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mesh Config Admin roles/meshconfig.admin Fleet and cluster project Provides permissions required to initialize managed components of Cloud Service Mesh, such as managed control plane and backend permission that allows workloads to talk to Stackdriver without each being individually authorized (for both managed and in-cluster control planes).
- Note that for Kubernetes workloads on Google Cloud, we recommend provisioning a managed control plane For instructions to prepare an offline installation of Cloud Service Mesh, see Prepare an offline installation of Cloud Service Mesh You will need to specify the --offline and --output dir options when running asmcli install .
- This page explains how to install unmanaged, in-cluster Cloud Service Mesh for Kubernetes workloads off Google Cloud: Run asmcli to do a new installation of Cloud Service Mesh 1.26.8-asm.3.
- If it is meant to only service certificates for Cloud Service Mesh workloads, set up the following issuance policy for the CA pool: policy.yaml baselineValues: keyUsage: baseKeyUsage: digitalSignature: true keyEncipherment: true extendedKeyUsage: serverAuth: true clientAuth: true caOptions: isCa: false identityConstraints: allowSubjectPassthrough: false allowSubjectAltNamesPassthrough: true celExpression: expression: subject alt names.all(san, san.type == URI && san.value.startsWith("spiffe:// PROJECT ID .svc.id.goog/ns/") ) Note: As a best practice for multi-cluster meshes, set one subordinate CA pool per unique cluster region.

### "Resolving managed Cloud Service Mesh issues \_|\_ Cloud Service Mesh v1.21\

- URL: [https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh](https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh)
- Source ID: `site-iam-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- NodePool Workload Identity Federation for GKE is disabled The following command displays the state of managed Cloud Service Mesh: gcloud container fleet mesh describe You may see the NODEPOOL WORKLOAD IDENTITY FEDERATION REQUIRED error code in the Conditions field of your membership: membershipStates: projects/test-project/locations/us-central1/memberships/my-membership: servicemesh: conditions: - code: NODEPOOL WORKLOAD IDENTITY FEDERATION REQUIRED details: One or more node pools have workload identity federation disabled. documentationLink: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity severity: ERROR controlPlaneManagement: details: - code: REVISION FAILED PRECONDITION details: Required in -cluster components are not ready.
- The error can occur if you did not enable Workload Identity on your Kubernetes cluster, which you can do by using the following command: export CLUSTER NAME = ... export PROJECT ID = ... export LOCATION = ... gcloud container clusters update $CLUSTER NAME --zone $LOCATION \ --workload-pool = $PROJECT ID .svc.id.goog Managed data plane state The following command displays the state of the managed data plane : gcloud container fleet mesh describe --project PROJECT ID The following table lists all possible managed data plane states: State Code Description ACTIVE OK The managed data plane is running normally.
- Filter this message using the following query: resource.type="k8s cluster" resource.labels.project id=[ PROJECT ID ] resource.labels.location=[ REGION ] resource.labels.cluster name=[ CLUSTER NAME ] severity=WARNING jsonPayload.message= "Internal error occurred: failed calling webhook" To resolve the issue: Enable the required connectgateway API: gcloud services enable connectgateway.googleapis.com --project =[ PROJECT ID ] Re-install managed Cloud Service Mesh .
- This will be retried within 15 minutes. implementation: TRAFFIC DIRECTOR state: FAILED PRECONDITION This error is shown if the GKE cluster does not have Workload Identity Federation enabled on all node pools of that cluster, since this is a prerequisites for the installation of Cloud Service Mesh.

### "Migrating from Istio on GKE to Cloud Service Mesh \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh](https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Continue? [Y/n] Y Running: kubectl get cm -n istio-system istio-asm-managed -oyaml Running: kubectl -n istio-system apply -f - secret/meshca-root created Running: kubectl get cm istio -n istio-system -o yaml Running: kubectl get cm istio -n istio-system -o yaml Running: kubectl replace -f - configmap/istio replaced Running: kubectl get deploy istio-pilot -n istio-system -o yaml Running: kubectl patch deploy istio-pilot -n istio-system -p={"spec":{"template":{"spec":{"containers":[{ "name":"discovery", "image":"gcr.io/gke-release/istio/pilot:1.4.10-gke.12", "env":[{"name":"PILOT SKIP VALIDATE TRUST DOMAIN","value":"true"}] }]}}}} deployment.apps/istio-pilot patched Running: kubectl get deploy istio-citadel -n istio-system -o yaml Running: kubectl patch deploy istio-citadel -n istio-system -p={"spec":{"template":{"spec":{ "containers":[{ "name":"citadel", "args": ["--append-dns-names=true", "--grpc-port=8060", "--citadel-storage-namespace=istio-system", "--custom-dns-names=istio-pilot-service-account.istio-system:istio-pilot.istio-system", "--monitoring-port=15014", "--self-signed-ca=true", "--workload-cert-ttl=2160h", "--root-cert=/var/run/root-certs/meshca-root.pem"], "volumeMounts": [{"mountPath": "/var/run/root-certs", "name": "meshca-root", "readOnly": true}] }], "volumes": [{"name": "meshca-root", "secret":{"secretName": "meshca-root"}}] }}}} deployment.apps/istio-citadel patched OK Waiting for root certificate to distribute to all pods.
- To enable injection using this revision tag, use 'kubectl label namespace <NAMESPACE> istio.io/rev=default' OK Relabel all the namespaces with the Cloud Service Mesh label, and perform a rolling restart of all workloads to get them on the Google-managed control plane: export NAMESPACE= NAMESPACE NAME \ kubectl --context=${CLUSTER 1 CTX} label namespace ${NAMESPACE} istio.io/rev=asm-managed istio-injection- --overwrite` kubectl --context=${CLUSTER 1 CTX} rollout restart deployment -n ${NAMESPACE} You can ignore the message "istio-injection not found" in the output.
- Deploy Online Boutique to the GKE cluster: kpt pkg get \ https://github.com/GoogleCloudPlatform/microservices-demo.git/release \ online-boutique kubectl --context= ${ CLUSTER 1 CTX } create namespace online-boutique kubectl --context= ${ CLUSTER 1 CTX } label namespace online-boutique istio-injection=enabled kubectl --context= ${ CLUSTER 1 CTX } -n online-boutique apply -f online-boutique Wait until all Deployments are ready: kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment adservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment checkoutservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment currencyservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment emailservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment frontend kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment paymentservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment productcatalogservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment shippingservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment cartservice kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment loadgenerator kubectl -- context =$ { CLUSTER 1 CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment recommendationservice Ensure that there are two containers per Pod—the application container and the Istio sidecar proxy that Istio on GKE automatically injects into the Pod: kubectl --context= ${ CLUSTER 1 CTX } -n online-boutique get pods The output is similar to the following: NAME READY STATUS RESTARTS AGE adservice-7cbc9bd9-t92k4 2/2 Running 0 3m21s cartservice-d7db78c66-5qfmt 2/2 Running 1 3m23s checkoutservice-784bfc794f-j8rl5 2/2 Running 0 3m26s currencyservice-5898885559-lkwg4 2/2 Running 0 3m23s emailservice-6bd8b47657-llvgv 2/2 Running 0 3m27s frontend-764c5c755f-9wf97 2/2 Running 0 3m25s loadgenerator-84cbcd768c-5pdbr 2/2 Running 3 3m23s paymentservice-6c676df669-s779c 2/2 Running 0 3m25s productcatalogservice-7fcf4f8cc-hvf5x 2/2 Running 0 3m24s recommendationservice-79f5f4bbf5-6st24 2/2 Running 0 3m26s redis-cart-74594bd569-pfhkz 2/2 Running 0 3m22s shippingservice-b5879cdbf-5z7m5 2/2 Running 0 3m22s You can also check the sidecar Envoy proxy version from any one of the Pods to confirm that you have Istio on GKE v1.4 Envoy proxies deployed: export FRONTEND POD =$ ( kubectl get pod - n online - boutique - l app = frontend -- context =$ { CLUSTER 1 CTX } - o jsonpath = '{.items[0].metadata.name}' ) kubectl -- context =$ { CLUSTER 1 CTX } get pods $ { FRONTEND POD } - n online - boutique - o json jq '.status.containerStatuses[].image' The output is similar to the following: "gke.gcr.io/istio/proxyv2:1.4.10-gke.8" "gcr.io/google-samples/microservices-demo/frontend:v0.3.4" Access the application by navigating to the IP address of the istio-ingressgateway Service IP address: kubectl -- context =$ { CLUSTER 1 CTX } - n istio - system get service istio - ingressgateway - o jsonpath = '{.status.loadBalancer.ingress[0].ip}' Frequently asked questions This section describes frequently asked questions and related answers about migrating from Istio on GKE to Cloud Service Mesh.
- Check the sidecar Envoy proxy version from any one of the Pods from any Deployment in the namespace to confirm that you now have Cloud Service Mesh Envoy proxies deployed: export POD NAME= NAME OF ANY POD IN NAMESPACE kubectl --context=${CLUSTER 1 CTX} get pods ${POD NAME} -n ${NAMESPACE} -o json jq '.status.containerStatuses[].image' The output is similar to the following: "gcr.io/gke-release/asm/proxyv2:1.11.5-asm.3" "appContainerImage" Verify and test your applications after restarting. kubectl --context=${CLUSTER 1 CTX} -n istio-system get service istio-ingressgateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}' (Optional) If you want Google to manage upgrades of the proxies, enable the Google-managed data plane View migration status Run the following command to view the status of the migration: kubectl get cm/asm-addon-migration-state -n istio-system -ojsonpath={.data} The output indicates whether the migrations is complete, pending, or failed: {"migrationStatus":"SUCCESS"} {"migrationStatus":"PENDING"} {"migrationStatus":"MIGRATION CONFIG ERROR"} {"migrationStatus":"CONTROLPLANE PROVISION ERROR"} If migrationStatus outputs SUCCESS , the control plane has successfully upgraded to Cloud Service Mesh.

### "Inject sidecar proxies with Cloud Service Mesh \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/v1.20/docs/anthos-service-mesh-proxy-injection](https://docs.cloud.google.com/service-mesh/v1.20/docs/anthos-service-mesh-proxy-injection)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you also deployed the optional Google-managed data plane , annotate the demo namespace as follows: kubectl annotate --overwrite namespace YOUR NAMESPACE \ mesh.cloud.google.com/proxy='{"managed":"true"}' Restart Pods to update sidecar proxies Warning: Unless you have a load balancer or router setup for blue-green deployments , make sure you test restarting Pods in a staging environment to verify that your services can handle any potential traffic interruption.
- Managed service mesh Use the following command to locate the available release channels: kubectl -n istio-system get controlplanerevision The output is similar to the following: NAME AGE asm-managed 6d7h In the output, select the value under the NAME column is the REVISION label that corresponds to the available release channel for the Cloud Service Mesh version.
- Automatic sidecar proxy injection (auto-injection) occurs when Cloud Service Mesh detects a namespace label you configure for the workload's Pod.
- If you used a Deployment, restart the Deployment, which restarts all Pods with sidecars: kubectl rollout restart deployment -n YOUR NAMESPACE If you didn't use a Deployment, delete the Pods, and they are automatically recreated with sidecars: kubectl delete pod -n YOUR NAMESPACE --all Check that all the Pods in the namespace have sidecars injected: kubectl get pod -n YOUR NAMESPACE In the following example output from the previous command, notice that the READY column indicates there are two containers for each of your workloads: the primary container and the container for the sidecar proxy.

