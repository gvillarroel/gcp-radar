---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.343Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Server-side Apply"
feature_slug: "server-side-apply"
latest_feature_date: "2021-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/apache-kafka-strimzi"
keywords:
  - "merge"
  - "side"
  - "clients"
  - "declaratively"
  - "fully"
  - "apply"
  - "server"
  - "lets"
---

# Server-side Apply

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Server-side Apply lets clients declaratively merge fully specified object intent while tracking field ownership.

## Extended Definition

Server-side Apply lets clients declaratively merge fully specified object intent while tracking field ownership.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/apache-kafka-strimzi](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/apache-kafka-strimzi)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- For security purposes, even if you have node auto-upgrades enabled, we recommend that you manually upgrade your node pools to one of the following GKE versions: Container-Optimized OS: 1.21.14-gke.7100 and later Ubuntu: 1.21.14-gke.9400 and later 1.22.15-gke.2400 and later 1.23.13-gke.800 and later 1.24.7-gke.800 and later 1.25.3-gke.700 and later A recent feature of release channels lets you apply a patch without having to unsubscribe from a channel.
- Even if you have node auto-upgrade enabled, we recommend that you manually upgrade your cluster and Windows Server node pools to one of the following GKE versions or later: 1.24.17-gke.6100 1.25.15-gke.2000 1.26.10-gke.2000 1.27.7-gke.2000 1.28.3-gke.1600 You can apply patch versions from newer release channels if your cluster runs the same minor version in its own release channel.
- For security purposes, even if you have node auto-upgrades enabled, we recommend that you manually upgrade your node pools to one of the following GKE versions: 1.22.15-gke.2300 and later 1.23.13-gke.700 and later 1.24.7-gke.700 and later A recent feature of release channels lets you apply a patch without having to unsubscribe from a channel.
- Medium GCP-2020-007 Published: 2020-06-01 Reference: CVE-2020-8555 GKE Description Severity Server Side Request Forgery (SSRF) vulnerability, CVE-2020-8555 , was recently discovered in Kubernetes, allowing certain authorized users to leak up to 500 bytes of sensitive information from the control plane host network.

### "Deploy Apache Kafka to GKE using Strimzi \_|\_ Kubernetes Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/apache-kafka-strimzi](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/apache-kafka-strimzi)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deployment architecture A Kafka cluster consists of one or more servers, known as brokers , which collaborate to manage incoming data streams and facilitate publish-subscribe messaging for Kafka clients, referred to as consumers .
- A Service named my-cluster-kafka-bootstrap , which serves as the bootstrap server for Kafka clients connecting from within the Kubernetes cluster.
- Communication inside the cluster secured by self-signed certificates: separate Certificate Authorities (CAs) for cluster and clients (mTLS).
- A Service named my-cluster-zookeeper-client that lets Kafka brokers connect to ZooKeeper nodes as clients.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Unique id for the cluster. loggingConfig object ( LoggingConfig ) Logging configuration for the cluster. monitoringConfig object ( MonitoringConfig ) Monitoring configuration for the cluster. nodePoolAutoConfig object ( NodePoolAutoConfig ) Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. podAutoscaling object ( PodAutoscaling ) The config for pod autoscaling. etag string This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. fleet object ( Fleet ) Fleet information for the cluster. securityPostureConfig object ( SecurityPostureConfig ) Optional.
- ResourceManagerTags JSON representation { "tags" : { string : string , ... } } Fields tags map (key: string, value: string) TagKeyValue must be in one of the following formats ([KEY]=[VALUE]) 1. tagKeys/{tag key id}=tagValues/{tag value id} 2. {org id}/{tag key name}={tag value name} 3. {project id}/{tag key name}={tag value name} TagsEntry JSON representation { "key" : string , "value" : string } Fields key string value string SecondaryBootDisk JSON representation { "mode" : enum ( Mode ) , "diskImage" : string } Fields mode enum ( Mode ) Disk mode (container image cache, etc.) diskImage string Fully-qualified resource ID for an existing disk image.
- Update info contains relevant information during a node pool update. etag string This checksum is computed by the server based on the value of node pool fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. queuedProvisioning object ( QueuedProvisioning ) Specifies the configuration of queued provisioning. bestEffortProvisioning object ( BestEffortProvisioning ) Enable best effort provisioning for nodes nodeDrainConfig object ( NodeDrainConfig ) Specifies the node drain configuration for this node pool.
- BestEffortProvisioning JSON representation { "enabled" : boolean , "minProvisionNodes" : integer } Fields enabled boolean When this is enabled, cluster/node pool creations will ignore non-fatal errors like stockout to best provision as many nodes as possible right now and eventually bring up all target number of nodes minProvisionNodes integer Minimum number of nodes to be provisioned to be considered as succeeded, and the rest of nodes will be provisioned gradually and eventually when stockout issue has been resolved.

