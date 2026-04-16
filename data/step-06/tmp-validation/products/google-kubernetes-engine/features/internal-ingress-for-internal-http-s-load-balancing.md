---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.407Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Internal Ingress for Internal HTTP(S) Load Balancing"
feature_slug: "internal-ingress-for-internal-http-s-load-balancing"
latest_feature_date: "2020-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "balancing"
  - "makes"
  - "internal"
  - "generally"
  - "available"
  - "http"
  - "ingress"
  - "load"
---

# Internal Ingress for Internal HTTP(S) Load Balancing

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Makes Internal Ingress for Internal HTTP(S) Load Balancing generally available.

## Extended Definition

Makes Internal Ingress for Internal HTTP(S) Load Balancing generally available.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "Set up an external Application Load Balancer with Ingress \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can install kubectl using gcloud : gcloud components install kubectl Clone the sample code from GitHub: git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples cd kubernetes-engine-samples/networking/load-balancing Set defaults for the gcloud command-line tool To save time typing your project ID and Compute Engine zone options in the gcloud command-line tool, you can set the defaults: gcloud config set project project-id gcloud config set compute/zone compute-zone Create a GKE cluster Create a GKE Autopilot cluster: gcloud container clusters create-auto loadbalancedcluster Deploying a web application The following manifest describes a Deployment that runs the sample web application container image on an HTTP server on port 8080: apiVersion : apps/v1 kind : Deployment metadata : name : web namespace : default spec : selector : matchLabels : run : web template : metadata : labels : run : web spec : containers : - image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 imagePullPolicy : IfNotPresent name : web ports : - containerPort : 8080 protocol : TCP Apply the resource to the cluster: kubectl apply -f web-deployment.yaml Exposing your Deployment inside your cluster The following manifest describes a Service that makes the web deployment accessible within your container cluster: apiVersion : v1 kind : Service metadata : name : web namespace : default spec : ports : - port : 8080 protocol : TCP targetPort : 8080 selector : run : web type : NodePort Apply the resource to the cluster: kubectl apply -f web-service.yaml When you create a Service of type NodePort with this command, GKE makes your Service available on a randomly selected high port number (e.g.
- The following manifest describes a Deployment with version 2.0 of the same web application: apiVersion : apps/v1 kind : Deployment metadata : name : web2 namespace : default spec : selector : matchLabels : run : web2 template : metadata : labels : run : web2 spec : containers : - image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:2.0 imagePullPolicy : IfNotPresent name : web2 ports : - containerPort : 8080 protocol : TCP Apply the resource to the cluster: kubectl apply -f web-deployment-v2.yaml The following manifest describes a Service that exposes web2 internally to the cluster on a NodePort Service called web2 : apiVersion : v1 kind : Service metadata : name : web2 namespace : default spec : ports : - port : 8080 protocol : TCP targetPort : 8080 selector : run : web2 type : NodePort Apply the resource to the cluster: kubectl apply -f web-service-v2.yaml The following manifest describes an Ingress resource that: routes the requests with path starting with /v2/ to the web2 Service routes all other requests to the web Service apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : fanout-ingress spec : rules : - http : paths : - path : / pathType : ImplementationSpecific backend : service : name : web port : number : 8080 - path : /v2/ pathType : ImplementationSpecific backend : service : name : web2 port : number : 8080 Apply the resource to the cluster: kubectl create -f fanout-ingress.yaml After the Ingress is deployed, run kubectl get ingress fanout-ingress to find out the public IP address of the cluster.
- Inspect the Ingress resource to find an event with an error message similar to the following: Error during GC: error running load balancer garbage collection routine: googleapi: Error 400: The url map resource 'projects/ project-id /global/urlMaps/k8s2-um-tlw9rhgp-default-my-ingress-9ifnni82' is already being used by 'projects/ project-id /global/targetHttpsProxies/k8s2-um-tlw9rhgp-default-my82-target-proxy', resourceInUseByAnotherResource In the preceding error message, k8s2-um-tlw9rhgp-default-my82-target-proxy is a manually created target https proxy that is still referencing the URL map k8s2-um-tlw9rhgp-default-my-ingress-9ifnni82 which was created and managed by an Ingress controller.
- Delete the Ingress: This step deallocates the ephemeral external IP address and the load balancing resources associated with your application: kubectl delete ingress basic-ingress If you followed the optional step to create an Ingress to route requests by path, then delete the Ingress: kubectl delete ingress fanout-ingress Delete the static IP address: Complete this step only if you followed the optional step to create a static IP address.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- The rules created in error have been automatically modified with the appropriate source ranges (130.211.0.0/22, 35.191.0.0/16) to allow the ingress traffic coming from Google Cloud health check infrastructure, and, optionally, your proxy-only subnet ranges for Internal Gateways.
- This security bulletin will be updated when the GKE on VMware versions are available for download.
- This security bulletin will be updated when the GKE on VMware versions are available for download.
- This security bulletin will be updated when the GKE on VMware versions are available for download.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- HttpLoadBalancing JSON representation { "disabled" : boolean } Fields disabled boolean Whether the HTTP Load Balancing controller is enabled in the cluster.
- See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals EvictionMinimumReclaim JSON representation { "memoryAvailable" : string , "nodefsAvailable" : string , "nodefsInodesFree" : string , "imagefsAvailable" : string , "imagefsInodesFree" : string , "pidAvailable" : string } Fields memoryAvailable string Optional.
- See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals EvictionGracePeriod JSON representation { "memoryAvailable" : string , "nodefsAvailable" : string , "nodefsInodesFree" : string , "imagefsAvailable" : string , "imagefsInodesFree" : string , "pidAvailable" : string } Fields memoryAvailable string Optional.

