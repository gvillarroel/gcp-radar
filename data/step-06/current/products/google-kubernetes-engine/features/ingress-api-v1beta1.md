---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.878Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Ingress API v1beta1"
feature_slug: "ingress-api-v1beta1"
latest_feature_date: "2021-10-01"
deprecation_date: "2021-10-01"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack"
keywords:
  - "ingress"
  - "v1beta1"
  - "kubernetes"
  - "exposing"
  - "http"
  - "https"
  - "deprecated"
  - "2021"
---

# Ingress API v1beta1

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Ingress is the Kubernetes API for exposing HTTP and HTTPS services; deprecated on 2021-10-01.

## Extended Definition

Ingress is the Kubernetes API for exposing HTTP and HTTPS services; deprecated on 2021-10-01.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack)

## Supporting Pages

### "Set up an external Application Load Balancer with Ingress \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- You can install kubectl using gcloud : gcloud components install kubectl Clone the sample code from GitHub: git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples cd kubernetes-engine-samples/networking/load-balancing Set defaults for the gcloud command-line tool To save time typing your project ID and Compute Engine zone options in the gcloud command-line tool, you can set the defaults: gcloud config set project project-id gcloud config set compute/zone compute-zone Create a GKE cluster Create a GKE Autopilot cluster: gcloud container clusters create-auto loadbalancedcluster Deploying a web application The following manifest describes a Deployment that runs the sample web application container image on an HTTP server on port 8080: apiVersion : apps/v1 kind : Deployment metadata : name : web namespace : default spec : selector : matchLabels : run : web template : metadata : labels : run : web spec : containers : - image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 imagePullPolicy : IfNotPresent name : web ports : - containerPort : 8080 protocol : TCP Apply the resource to the cluster: kubectl apply -f web-deployment.yaml Exposing your Deployment inside your cluster The following manifest describes a Service that makes the web deployment accessible within your container cluster: apiVersion : v1 kind : Service metadata : name : web namespace : default spec : ports : - port : 8080 protocol : TCP targetPort : 8080 selector : run : web type : NodePort Apply the resource to the cluster: kubectl apply -f web-service.yaml When you create a Service of type NodePort with this command, GKE makes your Service available on a randomly selected high port number (e.g.
- Follow the installation instructions to install Config Connector on your cluster. apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeAddress metadata : name : web-static-ip spec : location : global To deploy this manifest, download it to your machine as compute-address.yaml, and run: kubectl apply -f compute-address.yaml The basic-ingress-static.yaml manifest adds an annotation on Ingress to use the static IP resource named web-static-ip : apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : basic-ingress annotations : kubernetes.io/ingress.global-static-ip-name : "web-static-ip" spec : defaultBackend : service : name : web port : number : 8080 View the manifest: cat basic-ingress-static.yaml Apply the resource to the cluster: kubectl apply -f basic-ingress-static.yaml Check the external IP address: kubectl get ingress basic-ingress Wait until the IP address of your application changes to use the reserved IP address of the web-static-ip resource.
- Inspect the Ingress resource to find an event with an error message similar to the following: Error during GC: error running load balancer garbage collection routine: googleapi: Error 400: The url map resource 'projects/ project-id /global/urlMaps/k8s2-um-tlw9rhgp-default-my-ingress-9ifnni82' is already being used by 'projects/ project-id /global/targetHttpsProxies/k8s2-um-tlw9rhgp-default-my82-target-proxy', resourceInUseByAnotherResource In the preceding error message, k8s2-um-tlw9rhgp-default-my82-target-proxy is a manually created target https proxy that is still referencing the URL map k8s2-um-tlw9rhgp-default-my-ingress-9ifnni82 which was created and managed by an Ingress controller.
- Creating an Ingress resource Ingress is a Kubernetes resource that encapsulates a collection of rules and configuration for routing external HTTP(S) traffic to internal services.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- CVE-2021-4154 CVE-2021-22600 CVE-2022-0185 High GCP-2021-024 Published: 2021-10-21 Reference: CVE-2021-25742 GKE Description Severity A security issue was discovered in the Kubernetes ingress-nginx controller, CVE-2021-25742 .
- None GKE clusters on Description Severity A security issue was discovered in the Kubernetes ingress-nginx controller, CVE-2021-25742 .
- None GKE clusters on Description Severity A security issue was discovered in the Kubernetes ingress-nginx controller, CVE-2021-25742 .
- None GKE clusters on Description Severity A security issue was discovered in the Kubernetes ingress-nginx controller, CVE-2021-25742 .

### Set up Elastic Stack on GKE \_|\_ Kubernetes Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. apiVersion : networking.gke.io/v1beta1 kind : FrontendConfig metadata : name : elastic-stack namespace : elastic-system spec : redirectToHttps : enabled : true responseCodeName : MOVED PERMANENTLY DEFAULT --- apiVersion : networking.gke.io/v1 kind : ManagedCertificate metadata : name : elastic-stack namespace : elastic-system spec : domains : - elk.BASE DOMAIN --- apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : kibana namespace : elastic-system annotations : networking.gke.io/managed-certificates : elastic-stack networking.gke.io/v1beta1.FrontendConfig : elastic-stack kubernetes.io/ingress.global-static-ip-name : elastic-stack kubernetes.io/ingress.class : gce spec : defaultBackend : service : name : kibana-kb-http port : number : 5601 This manifest describes a ManagedCertificate that provisions an SSL certificate to establish the TLS connection.
- Review the following manifest: apiVersion : kibana.k8s.elastic.co/v1 kind : Kibana metadata : name : kibana namespace : elastic-system spec : version : "8.9.0" count : 1 elasticsearchRef : name : elasticsearch namespace : elastic-system http : tls : selfSignedCertificate : disabled : true config : server.publicBaseUrl : https://elk.BASE DOMAIN xpack.reporting.kibanaServer.port : 5601 xpack.reporting.kibanaServer.protocol : http xpack.reporting.kibanaServer.hostname : kibana-kb-http.elastic-system.svc xpack.fleet.agents.elasticsearch.hosts : [ "https://elasticsearch-es-http.elastic-system.svc:9200" ] xpack.fleet.agents.fleet server.hosts : [ "https://fleet-server-agent-http.elastic-system.svc:8220" ] xpack.fleet.packages : - name : system version : latest - name : elastic agent version : latest - name : fleet server version : latest - name : kubernetes version : latest xpack.fleet.agentPolicies : - name : Fleet Server on ECK policy id : eck-fleet-server namespace : default monitoring enabled : - logs - metrics unenroll timeout : 900 package policies : - name : fleet server-1 id : fleet server-1 package : name : fleet server - name : Elastic Agent on ECK policy id : eck-agent namespace : default monitoring enabled : - logs - metrics unenroll timeout : 900 package policies : - package : name : system name : system-1 - package : name : kubernetes name : kubernetes-1 podTemplate : metadata : labels : app.kubernetes.io/name : kibana app.kubernetes.io/version : "8.9.0" app.kubernetes.io/component : "ui" app.kubernetes.io/part-of : "elk" spec : containers : - name : kibana resources : requests : memory : 1Gi cpu : 500m ephemeral-storage : 1Gi limits : memory : 1Gi cpu : 500m ephemeral-storage : 1Gi This manifest describes a Kibana custom resource that configures agent policies for the fleet server and agents.
- Add a Helm chart repository and update it: helm repo add elastic https://helm.elastic.co helm repo update Clone the GitHub repository: git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples.git Change to the working directory: cd kubernetes-engine-samples/observability/elastic-stack-tutorial Create a GKE cluster Create a GKE cluster with control plane metrics collection enabled: gcloud container clusters create-auto elk-stack \ --location = "us-central1" \ --monitoring = "SYSTEM,WORKLOAD,API SERVER,SCHEDULER,CONTROLLER MANAGER" Deploy the ECK operator Elastic Cloud on Kubernetes (ECK) is a platform for deploying and managing the Elastic Stack on Kubernetes clusters.
- Install kube-state-metrics: helm repo add prometheus-community https://prometheus-community.github.io/helm-charts helm repo update helm install kube-state-metrics prometheus-community/kube-state-metrics --namespace elastic-system Get the default Kibana elastic user credentials: kubectl get secret elasticsearch-es-elastic-user -o yaml -n elastic-system -o jsonpath = '{.data.elastic}' base64 -d Open https://elk.

