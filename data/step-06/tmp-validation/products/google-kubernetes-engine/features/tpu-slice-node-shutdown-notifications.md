---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.206Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "TPU slice node shutdown notifications"
feature_slug: "tpu-slice-node-shutdown-notifications"
latest_feature_date: "2024-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "sigterm"
  - "shutdown"
  - "notifications"
  - "slice"
  - "sends"
  - "node"
---

# TPU slice node shutdown notifications

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE sends SIGTERM-based imminent shutdown notifications to TPU slice nodes so workloads can terminate gracefully.

## Extended Definition

GKE sends SIGTERM-based imminent shutdown notifications to TPU slice nodes so workloads can terminate gracefully.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "Configure cluster notifications for third-party services \_|\_ Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack)
- Source ID: `site-docs-reference-required-5`
- Final score: 109
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deploy the Cloud Run function You can deploy the Cloud Run function using either the Google Cloud CLI or the Google Cloud console. gcloud To deploy the function, run the following command in the gke slack directory: gcloud functions deploy slackNotifier \ --gen2 \ --trigger-topic = TOPIC NAME \ --runtime = nodejs24 \ --entry-point = slackNotifier \ --region = REGION \ --source = . \ --set-env-vars = "SLACK WEBHOOK= WEBHOOK URL " Replace the following: TOPIC NAME : the name of the Pub/Sub topic you created when enabling cluster notifications .
- If you used a Standard cluster, verify notifications as follows: Upgrade a specific node pool to a new version .
- Write a Cloud Run function that sends Pub/Sub notifications to Slack.
- The output is similar to the following: Deploying function… availableMemoryMb: 256 entryPoint: slackNotifier environmentVariables: SLACK WEBHOOK: https://hooks.slack.com/services/… eventTrigger: eventType: google.pubsub.topic.publish failurePolicy: {} resource: projects/ PROJECT ID /topics/ TOPIC NAME service: pubsub.googleapis.com labels: deployment-tool: cli-gcloud name: projects/ PROJECT ID /locations/us-central1/functions/slackNotifier runtime: nodejs10 serviceAccountEmail: PROJECT ID @appspot.gserviceaccount.com sourceUploadUrl: https://storage.googleapis.com/… status: ACTIVE timeout: 60s updateTime: 'YYYY-MM-DDThh:mm:ssZ' versionId: '1' Console Go to the Cloud Run functions page in the Google Cloud console.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- NodeKubeletConfig JSON representation { "cpuManagerPolicy" : string , "topologyManager" : { object ( TopologyManager ) } , "memoryManager" : { object ( MemoryManager ) } , "cpuCfsQuota" : boolean , "cpuCfsQuotaPeriod" : string , "podPidsLimit" : string , "imageGcLowThresholdPercent" : integer , "imageGcHighThresholdPercent" : integer , "imageMinimumGcAge" : string , "imageMaximumGcAge" : string , "containerLogMaxSize" : string , "containerLogMaxFiles" : integer , "allowedUnsafeSysctls" : [ string ] , "evictionSoft" : { object ( EvictionSignals ) } , "evictionSoftGracePeriod" : { object ( EvictionGracePeriod ) } , "evictionMinimumReclaim" : { object ( EvictionMinimumReclaim ) } , "evictionMaxPodGracePeriodSeconds" : integer , "maxParallelImagePulls" : integer , "crashLoopBackOff" : { object ( CrashLoopBackOffConfig ) } , // Union field insecure kubelet readonly port enabled can be only one of the // following: "insecureKubeletReadonlyPortEnabled" : boolean // End of list of possible types for union field // insecure kubelet readonly port enabled . // Union field single process oom kill can be only one of the following: "singleProcessOomKill" : boolean // End of list of possible types for union field single process oom kill . // Union field shutdown grace period seconds can be only one of the following: "shutdownGracePeriodSeconds" : integer // End of list of possible types for union field // shutdown grace period seconds . // Union field shutdown grace period critical pods seconds can be only one of // the following: "shutdownGracePeriodCriticalPodsSeconds" : integer // End of list of possible types for union field // shutdown grace period critical pods seconds . } Fields cpuManagerPolicy string Control the CPU management policy on the node.
- Union field shutdown grace period critical pods seconds . shutdown grace period critical pods seconds can be only one of the following: shutdownGracePeriodCriticalPodsSeconds integer Optional. shutdown grace period critical pods seconds is the maximum allowed grace period (in seconds) used to terminate critical pods during a node shutdown.
- Union field shutdown grace period seconds . shutdown grace period seconds can be only one of the following: shutdownGracePeriodSeconds integer Optional. shutdown grace period seconds is the maximum allowed grace period (in seconds) the total duration that the node should delay the shutdown during a graceful shutdown.
- This is the total grace period for pod termination for both regular and critical pods. https://kubernetes.io/docs/concepts/cluster-administration/node-shutdown/ If set to 0, node will not enable the graceful node shutdown functionality.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- NodeKubeletConfig JSON representation { "cpuManagerPolicy" : string , "topologyManager" : { object ( TopologyManager ) } , "memoryManager" : { object ( MemoryManager ) } , "cpuCfsQuota" : boolean , "cpuCfsQuotaPeriod" : string , "podPidsLimit" : string , "imageGcLowThresholdPercent" : integer , "imageGcHighThresholdPercent" : integer , "imageMinimumGcAge" : string , "imageMaximumGcAge" : string , "containerLogMaxSize" : string , "containerLogMaxFiles" : integer , "allowedUnsafeSysctls" : [ string ] , "evictionSoft" : { object ( EvictionSignals ) } , "evictionSoftGracePeriod" : { object ( EvictionGracePeriod ) } , "evictionMinimumReclaim" : { object ( EvictionMinimumReclaim ) } , "evictionMaxPodGracePeriodSeconds" : integer , "maxParallelImagePulls" : integer , "crashLoopBackOff" : { object ( CrashLoopBackOffConfig ) } , // Union field insecure kubelet readonly port enabled can be only one of the // following: "insecureKubeletReadonlyPortEnabled" : boolean // End of list of possible types for union field // insecure kubelet readonly port enabled . // Union field single process oom kill can be only one of the following: "singleProcessOomKill" : boolean // End of list of possible types for union field single process oom kill . // Union field shutdown grace period seconds can be only one of the following: "shutdownGracePeriodSeconds" : integer // End of list of possible types for union field // shutdown grace period seconds . // Union field shutdown grace period critical pods seconds can be only one of // the following: "shutdownGracePeriodCriticalPodsSeconds" : integer // End of list of possible types for union field // shutdown grace period critical pods seconds . } Fields cpuManagerPolicy string Control the CPU management policy on the node.
- Union field shutdown grace period critical pods seconds . shutdown grace period critical pods seconds can be only one of the following: shutdownGracePeriodCriticalPodsSeconds integer Optional. shutdown grace period critical pods seconds is the maximum allowed grace period (in seconds) used to terminate critical pods during a node shutdown.
- Union field shutdown grace period seconds . shutdown grace period seconds can be only one of the following: shutdownGracePeriodSeconds integer Optional. shutdown grace period seconds is the maximum allowed grace period (in seconds) the total duration that the node should delay the shutdown during a graceful shutdown.
- This is the total grace period for pod termination for both regular and critical pods. https://kubernetes.io/docs/concepts/cluster-administration/node-shutdown/ If set to 0, node will not enable the graceful node shutdown functionality.

