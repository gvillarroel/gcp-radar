---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.398Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Multidimensional Pod autoscaling"
feature_slug: "multidimensional-pod-autoscaling"
latest_feature_date: "2021-01-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "multidimensional"
  - "horizontal"
  - "scaling"
  - "autoscaling"
  - "allows"
  - "based"
---

# Multidimensional Pod autoscaling

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Allows horizontal scaling based on CPU and vertical scaling based on memory at the same time.

## Extended Definition

Allows horizontal scaling based on CPU and vertical scaling based on memory at the same time.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "Optimize Pod autoscaling based on metrics \_|\_ Kubernetes Engine \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics)
- Source ID: `site-docs-reference-required-5`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Pub/Sub apiVersion : autoscaling/v2 kind : HorizontalPodAutoscaler metadata : name : pubsub spec : minReplicas : 1 maxReplicas : 5 metrics : - external : metric : name : pubsub.googleapis.com subscription num undelivered messages selector : matchLabels : resource.labels.subscription id : echo-read target : type : AverageValue averageValue : 2 type : External scaleTargetRef : apiVersion : apps/v1 kind : Deployment name : pubsub Custom Metric apiVersion : autoscaling/v2 kind : HorizontalPodAutoscaler metadata : name : custom-metrics-gmp-hpa namespace : default spec : scaleTargetRef : apiVersion : apps/v1 kind : Deployment name : custom-metrics-gmp minReplicas : 1 maxReplicas : 5 metrics : - type : Pods pods : metric : name : prometheus.googleapis.com custom prometheus gauge target : type : AverageValue averageValue : 20 Deploy the HorizontalPodAutoscaler to your cluster: Pub/Sub kubectl apply -f deployment/pubsub-hpa.yaml Custom Metric kubectl apply -f custom-metrics-gmp-hpa.yaml Generating load For some metrics, you might need to generate load to watch the autoscaling: Pub/Sub Publish 200 messages to the Pub/Sub topic: for i in { 1 ..200 } ; do gcloud pubsub topics publish echo --message = "Autoscaling # ${ i } " ; done Custom Metric Not Applicable: The code used in this sample exports a constant value of 40 for the custom metric.
- Pub/Sub Clean up the Pub/Sub subscription and topic: gcloud pubsub subscriptions delete echo-read gcloud pubsub topics delete echo Delete your GKE cluster: gcloud container clusters delete metrics-autoscaling Custom Metric Delete your GKE cluster: gcloud container clusters delete metrics-autoscaling What's next Learn more about horizontal Pod autoscaling .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Documentation Guides Send feedback Optimize Pod autoscaling based on metrics Stay organized with collections Save and categorize content based on your preferences.
- In this tutorial, you can set up autoscaling based on one of the following metrics: Pub/Sub Pub/Sub backlog Scale based on an external metric reporting the number of unacknowledged messages remaining in a Pub/Sub subscription .

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- Unique id for the cluster. loggingConfig object ( LoggingConfig ) Logging configuration for the cluster. monitoringConfig object ( MonitoringConfig ) Monitoring configuration for the cluster. nodePoolAutoConfig object ( NodePoolAutoConfig ) Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. podAutoscaling object ( PodAutoscaling ) The config for pod autoscaling. etag string This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. fleet object ( Fleet ) Fleet information for the cluster. securityPostureConfig object ( SecurityPostureConfig ) Optional.
- PodAutoscaling JSON representation { // Union field hpa profile can be only one of the following: "hpaProfile" : enum ( HPAProfile ) // End of list of possible types for union field hpa profile . } Fields Union field hpa profile . hpa profile can be only one of the following: hpaProfile enum ( HPAProfile ) Selected Horizontal Pod Autoscaling profile.
- HorizontalPodAutoscaling JSON representation { "disabled" : boolean } Fields disabled boolean Whether the Horizontal Pod Autoscaling feature is enabled in the cluster.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- Unique id for the cluster. loggingConfig object ( LoggingConfig ) Logging configuration for the cluster. monitoringConfig object ( MonitoringConfig ) Monitoring configuration for the cluster. nodePoolAutoConfig object ( NodePoolAutoConfig ) Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. podAutoscaling object ( PodAutoscaling ) The config for pod autoscaling. etag string This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. fleet object ( Fleet ) Fleet information for the cluster. securityPostureConfig object ( SecurityPostureConfig ) Optional.
- PodAutoscaling JSON representation { // Union field hpa profile can be only one of the following: "hpaProfile" : enum ( HPAProfile ) // End of list of possible types for union field hpa profile . } Fields Union field hpa profile . hpa profile can be only one of the following: hpaProfile enum ( HPAProfile ) Selected Horizontal Pod Autoscaling profile.
- HorizontalPodAutoscaling JSON representation { "disabled" : boolean } Fields disabled boolean Whether the Horizontal Pod Autoscaling feature is enabled in the cluster.

