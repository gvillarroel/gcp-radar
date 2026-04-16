---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.759Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Cloud Service Mesh on GKE on Azure"
feature_slug: "cloud-service-mesh-on-gke-on-azure"
latest_feature_date: "2025-09-25"
deprecation_date: "2027-03-17"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane"
  - "https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial"
  - "https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run"
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment"
keywords:
  - "mesh"
  - "on"
  - "gke"
  - "azure"
  - "can"
  - "run"
  - "clusters"
  - "deprecated"
---

# Cloud Service Mesh on GKE on Azure

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Cloud Service Mesh can run on GKE on Azure clusters; Cloud Service Mesh can run on GKE on Azure clusters; deprecated on 2027-03-17.

## Extended Definition

Cloud Service Mesh can run on GKE on Azure clusters; Cloud Service Mesh can run on GKE on Azure clusters; deprecated on 2027-03-17.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)
- [https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run](https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment](https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment)

## Supporting Pages

### "Provision a managed Cloud Service Mesh control plane on GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- Source ID: `site-docs-root`
- Final score: 288
- Re-rank relevance: N/A

Evidence snippets:
- Enable automatic management Run the following command to enable automatic management: Note: You can apply this change to multiple clusters at a time by passing a comma-separated list of membership names as the --memberships parameter. gcloud container fleet mesh update \ --management automatic \ --memberships MEMBERSHIP NAME \ --project FLEET PROJECT ID \ --location MEMBERSHIP LOCATION where: MEMBERSHIP NAME is the membership name listed when you verified that your cluster was registered to the fleet.
- Note that if you plan to register multiple clusters, enabling the Cloud Service Mesh fleet feature happens at the fleet-level so you only have to run this command once. gcloud container fleet mesh enable --project FLEET PROJECT ID Register clusters to a fleet Register a GKE cluster using fleet workload identity.
- Cloud Service Mesh can use multiple GKE clusters in a single-project single-network environment or a multi-project single-network environment.
- This operation can take a few minutes to complete. gcloud To configure fleet-level defaults using the Google Cloud CLI, you must establish the following settings: Fleet-level settings Create a mesh.yaml file that only contains the single line management: automatic : echo "management: automatic" > mesh.yaml Enable Cloud Service Mesh for your fleet: gcloud container fleet mesh enable --project FLEET PROJECT ID \ --fleet-default-member-config mesh.yaml If you see the following error, then you need to enable GKE Enterprise .

### "Using Cloud Service Mesh egress gateways on GKE clusters: Tutorial \_|\_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)
- Source ID: `site-docs-reference`
- Final score: 254
- Re-rank relevance: N/A

Evidence snippets:
- Download credentials so that you can connect to the cluster with kubectl: gcloud container clusters get-credentials cluster1 Verify that the gateway nodes have the correct taint: kubectl get nodes -l cloud.google.com/gke-nodepool = gateway -o yaml \ -o = custom-columns = 'name:metadata.name,taints:spec.taints[?(@.key=="dedicated")]' The output is similar to the following: name taints gke-cluster1-gateway-9d65b410-cffs map[effect:NoSchedule key:dedicated value:gateway] Installing and setting up Cloud Service Mesh Follow one of the installation guides for Cloud Service Mesh: Managed Cloud Service Mesh In-cluster Cloud Service Mesh Once you have installed Cloud Service Mesh, stop and return to this tutorial without installing ingress or egress gateways.
- Objectives Set up the infrastructure for running Cloud Service Mesh: Custom VPC network and private subnet Cloud NAT for internet access Private GKE cluster with an extra node pool for egress gateway pods Restrictive egress VPC firewall rules ; only gateway nodes can reach external hosts Private Google Access for connecting to Container Registry and Google APIs Install Cloud Service Mesh.
- Create a Sidecar resource for the team-y namespace: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : Sidecar metadata : name : default namespace : team-y spec : outboundTrafficPolicy : mode : REGISTRY ONLY egress : - hosts : - 'istio-egress/ ' - 'team-y/ ' EOF Deploy the test application to the team-y namespace: kubectl -n team-y create -f ./test.yaml Register a second external host and export it to the team-x and the team-y namespace: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : ServiceEntry metadata : name : httpbin-org-ext namespace : istio-egress labels : Show this service and its telemetry in the Cloud Service Mesh page of the Google Cloud console service.istio.io/canonical-name : httpbin.org spec : hosts : - httpbin.org ports : - number : 80 name : http protocol : HTTP - number : 443 name : tls protocol : TLS resolution : DNS location : MESH EXTERNAL exportTo : - 'istio-egress' - 'team-x' - 'team-y' EOF Create a virtual service to route traffic to httpbin.org through the egress gateway: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : VirtualService metadata : name : httpbin-org-through-egress-gateway namespace : istio-egress spec : hosts : - httpbin.org gateways : - istio-egress/egress-gateway - mesh http : - match : - gateways : - mesh port : 80 route : - destination : host : istio-egressgateway.istio-egress.svc.cluster.local subset : target-egress-gateway-mTLS port : number : 80 weight : 100 - match : - gateways : - istio-egress/egress-gateway port : 80 route : - destination : host : httpbin.org port : number : 80 weight : 100 exportTo : - 'istio-egress' - 'team-x' - 'team-y' EOF Run istioctl analyze to check for configuration errors: ${ ISTIOCTL } analyze -n istio-egress --revision REVISION You see: ✔ No validation issues found when analyzing namespace: istio-egress.
- Create a service entry for the GKE metadata server: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : ServiceEntry metadata : name : metadata-google-internal namespace : istio-egress labels : Show this service and its telemetry in the Cloud Service Mesh page of the Google Cloud console service.istio.io/canonical-name : metadata.google.internal spec : hosts : - metadata.google.internal ports : - number : 80 name : http protocol : HTTP - number : 443 name : tls protocol : TLS resolution : DNS location : MESH EXTERNAL exportTo : - 'istio-egress' - 'team-x' EOF Also create a service entry for private.googleapis.com and storage.googleapis.com: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : ServiceEntry metadata : name : private-googleapis-com namespace : istio-egress labels : Show this service and its telemetry in the Cloud Service Mesh page of the Google Cloud console service.istio.io/canonical-name : googleapis.com spec : hosts : - private.googleapis.com - storage.googleapis.com ports : - number : 80 name : http protocol : HTTP - number : 443 name : tls protocol : TLS resolution : DNS location : MESH EXTERNAL exportTo : - 'istio-egress' - 'team-x' EOF Verify that the Kubernetes service account is correctly configured to act as the Google service account: kubectl -n team-x exec -it $( kubectl -n team-x get pod -l app = test \ -o jsonpath ={ .items..metadata.name } ) -c test -- gcloud auth list You see the Google service account listed as the active and only identity.

### Configure Cloud Service Mesh for Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run](https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run)
- Source ID: `site-docs-reference`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Next steps Explore common Cloud Run networking configurations for public and private networking Configure private networking for Cloud Run Set up Envoy proxies with HTTP services Route traffic from Cloud Run Services to Cloud Service Mesh workloads on GKE Route traffic from Cloud Service Mesh workloads to Cloud Run Services Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Access internal services with Cloud Service Mesh Cloud Run lets you restrict incoming network traffic to "internal." If your service has this ingress restriction enabled, traffic that travels from your mesh through the Virtual Private Cloud network can be set as "internal" when you enable an access path to Cloud Run.
- You might also need to give your service account access to Traffic Director by running the following command: gcloud projects add-iam-policy-binding PROJECT ID --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com --role = roles/trafficdirector.client Call service from a mesh client To forward a request to the destination route by using the fortio test app from the previous Create client service section: Fetch the URL of the Cloud Run client service that you created by running the following command: TEST SERVICE URL = $( gcloud run services describe CLIENT SERVICE NAME \ --region = REGION --format = "value(status.url)" \ --project = PROJECT ID ) Replace the following: CLIENT SERVICE NAME : the name of the client Cloud Run service.
- To call from one Cloud Run service to another using Cloud Service Mesh, follow these steps: Set up a Cloud Service Mesh Set up Cloud DNS Create the destination Cloud Run service Create the serverless NEG Create the client Cloud Run service Call the service from the mesh client Set up a Cloud Service Mesh To create a service route using the default URL, save the Mesh specification in a file called mesh.yaml : name: MESH NAME Replace MESH NAME with the mesh resource name.

### Cloud Service Mesh by example: canary deployments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment](https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment)
- Source ID: `site-docs-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The command depends on whether you provisioned Cloud Service Mesh on a GKE cluster or a Kubernetes cluster outside GKE: GKE on Google Cloud gcloud container clusters get-credentials CLUSTER NAME \ --project= PROJECT ID \ --zone= CLUSTER LOCATION GKE outside Google Cloud kubectl config use-context CLUSTER NAME Create the namespace for the sample application and the ingress gateway: kubectl create namespace onlineboutique Label the onlineboutique namespace to automatically inject Envoy proxies.
- In Cloud Shell, delete the project: gcloud projects delete PROJECT ID Delete the resources If you want to prevent additional charges, delete the cluster: gcloud container clusters delete CLUSTER NAME \ --project= PROJECT ID \ --zone= CLUSTER LOCATION If you registered your cluster with fleet using gcloud container fleet memberships (rather than --enable-fleet or --fleet-project during cluster creation) then remove the stale membership: gcloud container fleet memberships delete MEMBERSHIP \ --project= PROJECT ID If you want to keep your cluster configured for Cloud Service Mesh but remove the Online Boutique sample: Delete the application namespaces: kubectl delete -f namespace onlineboutique Expected output: namespace "onlineboutique" deleted Delete the service entries: kubectl delete -f https://raw.githubusercontent.com/GoogleCloudPlatform/microservices-demo/main/istio-manifests/frontend.yaml -n onlineboutique kubectl delete -f https://raw.githubusercontent.com/GoogleCloudPlatform/microservices-demo/main/istio-manifests/frontend-gateway.yaml -n onlineboutique Expected output: serviceentry.networking.istio.io "allow-egress-googleapis" deleted serviceentry.networking.istio.io "allow-egress-google-metadata" deleted What's next For a general guide on configuring PeerAuthentication policies, see Configuring transport security .
- For this tutorial, you deploy Online Boutique , a microservice demo app. kubectl apply \ -n onlineboutique \ -f https://raw.githubusercontent.com/GoogleCloudPlatform/anthos-service-mesh-samples/main/docs/shared/online-boutique/kubernetes-manifests.yaml Add a label version=v1 to the productcatalog deployment by running the following command: kubectl patch deployments/productcatalogservice -p '{"spec":{"template":{"metadata":{"labels":{"version":"v1"}}}}}' \ -n onlineboutique View the services that you deployed: kubectl get pods -n onlineboutique Expected output: NAME READY STATUS RESTARTS AGE adservice-85598d856b-m84m6 2/2 Running 0 2m7s cartservice-c77f6b866-m67vd 2/2 Running 0 2m8s checkoutservice-654c47f4b6-hqtqr 2/2 Running 0 2m10s currencyservice-59bc889674-jhk8z 2/2 Running 0 2m8s emailservice-5b9fff7cb8-8nqwz 2/2 Running 0 2m10s frontend-77b88cc7cb-mr4rp 2/2 Running 0 2m9s loadgenerator-6958f5bc8b-55q7w 2/2 Running 0 2m8s paymentservice-68dd9755bb-2jmb7 2/2 Running 0 2m9s productcatalogservice-84f95c95ff-c5kl6 2/2 Running 0 114s recommendationservice-64dc9dfbc8-xfs2t 2/2 Running 0 2m9s redis-cart-5b569cd47-cc2qd 2/2 Running 0 2m7s shippingservice-5488d5b6cb-lfhtt 2/2 Running 0 2m7s A 2/2 in the READY column indicates that a pod is up and running with an Envoy proxy successfully injected.
- View the Destination Rule created. kubectl get destinationrules -n onlineboutique Expected output: NAME HOST AGE productcatalogservice productcatalogservice 2m View the VirtualService created. kubectl get virtualservices -n onlineboutique Expected outcome: NAME GATEWAYS HOSTS AGE productcatalogservice ["productcatalogservice"] 2m Visit the application in your browser using the external IP address of your ingress gateway: kubectl get services -n GATEWAY NAMESPACE This next section tours the Cloud Service Mesh UI and show how you can view your metrics.

