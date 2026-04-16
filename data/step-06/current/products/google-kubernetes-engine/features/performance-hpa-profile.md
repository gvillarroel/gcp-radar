---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.706Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Performance HPA profile"
feature_slug: "performance-hpa-profile"
latest_feature_date: "2025-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart"
keywords:
  - "performance"
  - "hpa"
  - "profile"
  - "autopilot"
  - "clusters"
  - "automatically"
  - "use"
  - "speed"
---

# Performance HPA profile

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Autopilot clusters automatically use the Performance HPA Profile to speed up CPU and memory autoscaling; The Performance HPA profile is available in preview and speeds up HPA reaction time and recalculation for up to 1,000 HPA objects.

## Extended Definition

Autopilot clusters automatically use the Performance HPA Profile to speed up CPU and memory autoscaling; The Performance HPA profile is available in preview and speeds up HPA reaction time and recalculation for up to 1,000 HPA objects.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- ClusterAutoscaling JSON representation { "enableNodeAutoprovisioning" : boolean , "resourceLimits" : [ { object ( ResourceLimit ) } ] , "autoscalingProfile" : enum ( AutoscalingProfile ) , "autoprovisioningNodePoolDefaults" : { object ( AutoprovisioningNodePoolDefaults ) } , "autoprovisioningLocations" : [ string ] , "defaultComputeClassConfig" : { object ( DefaultComputeClassConfig ) } , "autopilotGeneralProfile" : enum ( AutopilotGeneralProfile ) } Fields enableNodeAutoprovisioning boolean Enables automatic node pool creation and deletion. resourceLimits[] object ( ResourceLimit ) Contains global constraints regarding minimum and maximum amount of resources in the cluster. autoscalingProfile enum ( AutoscalingProfile ) Defines autoscaling behaviour. autoprovisioningNodePoolDefaults object ( AutoprovisioningNodePoolDefaults ) AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP. autoprovisioningLocations[] string The list of Google Compute Engine zones in which the NodePool's nodes can be created by NAP. defaultComputeClassConfig object ( DefaultComputeClassConfig ) Default compute class is a configuration for default compute class. autopilotGeneralProfile enum ( AutopilotGeneralProfile ) Autopilot general profile for the cluster, which defines the configuration for the cluster.
- Amount of 1G hugepages SwapConfig JSON representation { // Union field enabled can be only one of the following: "enabled" : boolean // End of list of possible types for union field enabled . // Union field encryption config can be only one of the following: "encryptionConfig" : { object ( EncryptionConfig ) } // End of list of possible types for union field encryption config . // Union field performance profile can be only one of the following: "bootDiskProfile" : { object ( BootDiskProfile ) } , "ephemeralLocalSsdProfile" : { object ( EphemeralLocalSsdProfile ) } , "dedicatedLocalSsdProfile" : { object ( DedicatedLocalSsdProfile ) } // End of list of possible types for union field performance profile . } Fields Union field enabled . enabled can be only one of the following: enabled boolean Optional.
- Unique id for the cluster. loggingConfig object ( LoggingConfig ) Logging configuration for the cluster. monitoringConfig object ( MonitoringConfig ) Monitoring configuration for the cluster. nodePoolAutoConfig object ( NodePoolAutoConfig ) Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. podAutoscaling object ( PodAutoscaling ) The config for pod autoscaling. etag string This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. fleet object ( Fleet ) Fleet information for the cluster. securityPostureConfig object ( SecurityPostureConfig ) Optional.
- If omitted, defaults to the 'boot disk profile'. performance profile can be only one of the following: bootDiskProfile object ( BootDiskProfile ) Swap on the node's boot disk. ephemeralLocalSsdProfile object ( EphemeralLocalSsdProfile ) Swap on the local SSD shared with pod ephemeral storage. dedicatedLocalSsdProfile object ( DedicatedLocalSsdProfile ) Provisions a new, separate local NVMe SSD exclusively for swap.

### "Analyze model serving performance and costs with GKE Inference Quickstart\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It looks similar to the following: Instance Type Accelerator Cost/M Input Tokens Cost/M Output Tokens Output Tokens/s NTPOT(ms) TTFT(ms) Model Server Model Server Version Model a3-highgpu-1g nvidia-h100-80gb 0.009 0.035 13335 67 297 vllm gptoss openai/gpt-oss-20b The values represent the performance observed at the point where throughput stops increasing and latency starts dramatically increasing (that is, the inflection or saturation point) for a given profile with this accelerator type.
- For example: gcloud container ai profiles list \ --model = openai/gpt-oss-20b \ --pricing-model = on-demand \ --target-ttft-milliseconds = 300 The output shows supported profiles with performance metrics like throughput, latency, and cost per million tokens at the inflection point.
- Use this command to get the most up-to-date list of supported models, as we routinely update them. gcloud container ai profiles models list Profiles Use the list command to explore generated profiles and filter them based on your performance and cost requirements.
- The high-level steps to use Inference Quickstart are as follows: Analyze performance and cost : explore available configurations and filter them based on your performance and cost requirements, by using the gcloud container ai profiles list command.

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot clusters collect the following types of logs and metrics automatically, adhering to Google's best practices for telemetry collection: Logs for Cloud Logging System logs Workload logs Admin Activity audit logs Data Access audit logs Metrics for Cloud Monitoring System metrics Workload metrics (from Google Cloud Managed Service for Prometheus) No additional configuration is required to enable logging and monitoring.
- If you want to avoid extra IP address consumption, you can turn off proactive capacity provisioning by using the --autopilot-general-profile=no-performance flag.
- Manage and monitor your Autopilot clusters In Autopilot, GKE automatically manages cluster upgrades and maintenance for both the control plane and worker nodes.
- Pricing Autopilot pricing uses different models depending on the type of hardware that your Pods use, as follows: General-purpose Autopilot Pods : the following types of Pods use a Pod-based billing model and are categorized as general-purpose Pods : Pods that run on the container-optimized compute platform in Autopilot clusters or Standard clusters.

