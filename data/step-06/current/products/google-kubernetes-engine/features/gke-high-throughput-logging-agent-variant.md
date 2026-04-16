---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.831Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE high-throughput Logging agent variant"
feature_slug: "gke-high-throughput-logging-agent-variant"
latest_feature_date: "2022-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/adjust-log-throughput"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "gke"
  - "high"
  - "throughput"
  - "logging"
  - "agent"
  - "variant"
  - "standard"
  - "clusters"
---

# GKE high-throughput Logging agent variant

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Standard clusters can deploy an alternative Logging agent variant that increases per-node log throughput.

## Extended Definition

GKE Standard clusters can deploy an alternative Logging agent variant that increases per-node log throughput.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/adjust-log-throughput](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/adjust-log-throughput)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "Adjust log throughput \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/adjust-log-throughput](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/adjust-log-throughput)
- Source ID: `site-docs-reference-2`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To manage the node pools explicitly, you must specify your cluster without a default node pool. resource "google container cluster" "with example logging variants" { provider = google name = " CLUSTER NAME " location = " COMPUTE LOCATION " initial node count = 1 remove default node pool = true # We want to manage our node pools separately. } To specify a node pool that uses the high-throughput agent, use the node config field to specify the Logging agent variant as MAX THROUGHPUT and an appropriate machine type: resource "google container node pool" "with example logging variant" { provider = google name = "example-node-pool-with-htl" cluster = google container cluster.with example logging variants.name location = " COMPUTE LOCATION " node config { logging variant = "MAX THROUGHPUT" Use a machine type with enough CPU to accommodate the high-throughput agent, such as e2-standard-8. machine type = "e2-standard-8" } node count = 1 } To specify a node pool that uses the default agent, use the node config field to specify the Logging agent variant as DEFAULT : resource "google container node pool" "with default logging variant" { provider = google name = "example-node-pool-with-default-logging" cluster = google container cluster.with example logging variants.name location = " COMPUTE LOCATION " node config { logging variant = "DEFAULT" } node count = 1 } Disable high-throughput logging If you no longer want to use the high-throughput Logging agent, deploy the default Logging agent to the cluster or node pool.
- If you change the logging agent for an existing cluster, the existing node pools are unaffected and the change only applies to new node pools added to the cluster. gcloud CLI To enable high-throughput logging on all nodes in a new cluster: gcloud container clusters create CLUSTER NAME \ --location = COMPUTE LOCATION \ --logging-variant = MAX THROUGHPUT \ --machine-type = MACHINE TYPE Replace the following: CLUSTER NAME : the name of the new cluster.
- To confirm if high-throughput logging is already set for an existing cluster, use the gcloud container cluster describe command: gcloud container clusters describe CLUSTER NAME \ --location = COMPUTE LOCATION \ --format = "value(nodePoolDefaults[].loggingConfig.variantConfig.variant)" Replace the following: CLUSTER NAME : the name of the cluster.
- To create a new node pool that uses the high-throughput Logging agent, use the gcloud container node-pools create command: gcloud container node-pools create NODEPOOL NAME \ --cluster = CLUSTER NAME \ --location = COMPUTE LOCATION \ --logging-variant = MAX THROUGHPUT Replace the following: NODEPOOL NAME : the name of the new node pool.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- Unique id for the cluster. loggingConfig object ( LoggingConfig ) Logging configuration for the cluster. monitoringConfig object ( MonitoringConfig ) Monitoring configuration for the cluster. nodePoolAutoConfig object ( NodePoolAutoConfig ) Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. podAutoscaling object ( PodAutoscaling ) The config for pod autoscaling. etag string This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. fleet object ( Fleet ) Fleet information for the cluster. securityPostureConfig object ( SecurityPostureConfig ) Optional.
- ResourceLabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string NodePoolLoggingConfig JSON representation { "variantConfig" : { object ( LoggingVariantConfig ) } } Fields variantConfig object ( LoggingVariantConfig ) Logging variant configuration.
- If unspecified, the defaults are used: For clusters before v1.12, if master auth is unspecified, username will be set to "admin", a random password will be generated, and a client certificate will be issued. loggingService string The logging service the cluster should use to write logs.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- Unique id for the cluster. loggingConfig object ( LoggingConfig ) Logging configuration for the cluster. monitoringConfig object ( MonitoringConfig ) Monitoring configuration for the cluster. nodePoolAutoConfig object ( NodePoolAutoConfig ) Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. podAutoscaling object ( PodAutoscaling ) The config for pod autoscaling. etag string This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. fleet object ( Fleet ) Fleet information for the cluster. securityPostureConfig object ( SecurityPostureConfig ) Optional.
- ResourceLabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string NodePoolLoggingConfig JSON representation { "variantConfig" : { object ( LoggingVariantConfig ) } } Fields variantConfig object ( LoggingVariantConfig ) Logging variant configuration.
- If unspecified, the defaults are used: For clusters before v1.12, if master auth is unspecified, username will be set to "admin", a random password will be generated, and a client certificate will be issued. loggingService string The logging service the cluster should use to write logs.

