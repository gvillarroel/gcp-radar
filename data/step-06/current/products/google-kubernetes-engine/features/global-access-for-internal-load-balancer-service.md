---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.960Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Global access for internal load balancer Service"
feature_slug: "global-access-for-internal-load-balancer-service"
latest_feature_date: "2020-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer"
keywords:
  - "global"
  - "access"
  - "internal"
  - "load"
  - "balancer"
  - "allows"
  - "clients"
  - "region"
---

# Global access for internal load balancer Service

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Global access allows clients from any region to reach an internal load balancer Service.

## Extended Definition

Global access allows clients from any region to reach an internal load balancer Service.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- Union field global access . global access can be only one of the following: globalAccess boolean Controls whether the control plane's private endpoint is accessible from sources in other regions.
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- IPEndpointsConfig JSON representation { "authorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "publicEndpoint" : string , "privateEndpoint" : string , "privateEndpointSubnetwork" : string , // Union field enabled can be only one of the following: "enabled" : boolean // End of list of possible types for union field enabled . // Union field enable public endpoint can be only one of the following: "enablePublicEndpoint" : boolean // End of list of possible types for union field enable public endpoint . // Union field global access can be only one of the following: "globalAccess" : boolean // End of list of possible types for union field global access . } Fields authorizedNetworksConfig object ( MasterAuthorizedNetworksConfig ) Configuration of authorized networks.
- PrivateClusterConfig JSON representation { "enablePrivateNodes" : boolean , "enablePrivateEndpoint" : boolean , "masterIpv4CidrBlock" : string , "privateEndpoint" : string , "publicEndpoint" : string , "peeringName" : string , "masterGlobalAccessConfig" : { object ( PrivateClusterMasterGlobalAccessConfig ) } , "privateEndpointSubnetwork" : string } Fields enablePrivateNodes (deprecated) boolean This item is deprecated!

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- Union field global access . global access can be only one of the following: globalAccess boolean Controls whether the control plane's private endpoint is accessible from sources in other regions.
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- IPEndpointsConfig JSON representation { "authorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "publicEndpoint" : string , "privateEndpoint" : string , "privateEndpointSubnetwork" : string , // Union field enabled can be only one of the following: "enabled" : boolean // End of list of possible types for union field enabled . // Union field enable public endpoint can be only one of the following: "enablePublicEndpoint" : boolean // End of list of possible types for union field enable public endpoint . // Union field global access can be only one of the following: "globalAccess" : boolean // End of list of possible types for union field global access . } Fields authorizedNetworksConfig object ( MasterAuthorizedNetworksConfig ) Configuration of authorized networks.
- PrivateClusterConfig JSON representation { "enablePrivateNodes" : boolean , "enablePrivateEndpoint" : boolean , "masterIpv4CidrBlock" : string , "privateEndpoint" : string , "publicEndpoint" : string , "peeringName" : string , "masterGlobalAccessConfig" : { object ( PrivateClusterMasterGlobalAccessConfig ) } , "privateEndpointSubnetwork" : string } Fields enablePrivateNodes (deprecated) boolean This item is deprecated!

### "Set up an external Application Load Balancer with Ingress \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Inspect the Ingress resource to find an event with an error message similar to the following: Error during GC: error running load balancer garbage collection routine: googleapi: Error 400: The url map resource 'projects/ project-id /global/urlMaps/k8s2-um-tlw9rhgp-default-my-ingress-9ifnni82' is already being used by 'projects/ project-id /global/targetHttpsProxies/k8s2-um-tlw9rhgp-default-my82-target-proxy', resourceInUseByAnotherResource In the preceding error message, k8s2-um-tlw9rhgp-default-my82-target-proxy is a manually created target https proxy that is still referencing the URL map k8s2-um-tlw9rhgp-default-my-ingress-9ifnni82 which was created and managed by an Ingress controller.
- Background Google Kubernetes Engine (GKE) offers integrated support for two types of Cloud Load Balancing for a publicly accessible application: Ingress External passthrough Network Load Balancer In this tutorial, you use Ingresses .
- You can install kubectl using gcloud : gcloud components install kubectl Clone the sample code from GitHub: git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples cd kubernetes-engine-samples/networking/load-balancing Set defaults for the gcloud command-line tool To save time typing your project ID and Compute Engine zone options in the gcloud command-line tool, you can set the defaults: gcloud config set project project-id gcloud config set compute/zone compute-zone Create a GKE cluster Create a GKE Autopilot cluster: gcloud container clusters create-auto loadbalancedcluster Deploying a web application The following manifest describes a Deployment that runs the sample web application container image on an HTTP server on port 8080: apiVersion : apps/v1 kind : Deployment metadata : name : web namespace : default spec : selector : matchLabels : run : web template : metadata : labels : run : web spec : containers : - image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 imagePullPolicy : IfNotPresent name : web ports : - containerPort : 8080 protocol : TCP Apply the resource to the cluster: kubectl apply -f web-deployment.yaml Exposing your Deployment inside your cluster The following manifest describes a Service that makes the web deployment accessible within your container cluster: apiVersion : v1 kind : Service metadata : name : web namespace : default spec : ports : - port : 8080 protocol : TCP targetPort : 8080 selector : run : web type : NodePort Apply the resource to the cluster: kubectl apply -f web-service.yaml When you create a Service of type NodePort with this command, GKE makes your Service available on a randomly selected high port number (e.g.
- Follow the installation instructions to install Config Connector on your cluster. apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeAddress metadata : name : web-static-ip spec : location : global To deploy this manifest, download it to your machine as compute-address.yaml, and run: kubectl apply -f compute-address.yaml The basic-ingress-static.yaml manifest adds an annotation on Ingress to use the static IP resource named web-static-ip : apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : basic-ingress annotations : kubernetes.io/ingress.global-static-ip-name : "web-static-ip" spec : defaultBackend : service : name : web port : number : 8080 View the manifest: cat basic-ingress-static.yaml Apply the resource to the cluster: kubectl apply -f basic-ingress-static.yaml Check the external IP address: kubectl get ingress basic-ingress Wait until the IP address of your application changes to use the reserved IP address of the web-static-ip resource.

