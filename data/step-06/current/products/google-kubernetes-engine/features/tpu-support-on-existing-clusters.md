---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.974Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "TPU support on existing clusters"
feature_slug: "tpu-support-on-existing-clusters"
latest_feature_date: "2020-03-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port"
keywords:
  - "tpu"
  - "existing"
  - "clusters"
  - "gke"
  - "can"
  - "enable"
  - "instead"
  - "requiring"
---

# TPU support on existing clusters

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE can enable Cloud TPU support on existing clusters instead of requiring new clusters and workload migration.

## Extended Definition

GKE can enable Cloud TPU support on existing clusters instead of requiring new clusters and workload migration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Unique id for the cluster. loggingConfig object ( LoggingConfig ) Logging configuration for the cluster. monitoringConfig object ( MonitoringConfig ) Monitoring configuration for the cluster. nodePoolAutoConfig object ( NodePoolAutoConfig ) Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. podAutoscaling object ( PodAutoscaling ) The config for pod autoscaling. etag string This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. fleet object ( Fleet ) Fleet information for the cluster. securityPostureConfig object ( SecurityPostureConfig ) Optional.
- For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption gcfsConfig object ( GcfsConfig ) Google Container File System (image streaming) configs. advancedMachineFeatures object ( AdvancedMachineFeatures ) Advanced features for the Compute Engine VM. gvnic object ( VirtualNIC ) Enable or disable gvnic in the node pool. spot boolean Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag. confidentialNodes object ( ConfidentialNodes ) Confidential nodes config.
- Union field autopilot compatibility auditing enabled . autopilot compatibility auditing enabled can be only one of the following: autopilotCompatibilityAuditingEnabled boolean If true, enables the GCW Auditor that audits workloads on standard clusters.
- Deprecated: Use [ControlPlaneEndpointsConfig.IPEndpointsConfig.enable global access][] instead. privateEndpointSubnetwork (deprecated) string This item is deprecated!

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- To update an existing custom ComputeClass to use Autopilot mode, follow these steps: In a text editor, update the manifest file for your existing ComputeClass to add the spec.autopilot field: spec : autopilot : enabled : true Replace the existing ComputeClass resource in the Kubernetes API with the updated specification: kubectl replace --force -f PATH TO UPDATED MANIFEST Replace PATH TO UPDATED MANIFEST with the path to your updated manifest file.
- Verify that the ComputeClass exists: kubectl get computeclasses The output is similar to the following: NAME AGE n4-class 3s Enable Autopilot for an existing custom ComputeClass Best Practice : To migrate your workloads to Autopilot mode in stages, or to immediately start node creation, create a new Autopilot ComputeClass and recreate specific workloads to select the new ComputeClass.
- After you enable Autopilot for an existing ComputeClass, GKE uses Autopilot to run new Pods that select the ComputeClass.
- Modify an existing cluster In the Google Cloud console, go to the Kubernetes clusters page.

### "Disable the kubelet read-only port in GKE clusters \_|\_ GKE security \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port)
- Source ID: `site-iam-reference`
- Final score: 131
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To deny creation or update operations when the insecure kubelet read-only port is enabled, see these examples: The following custom constraint denies cluster creation or update operations if the insecure kubelet read-only port is enabled: name : organizations/ ORGANIZATION ID /customConstraints/custom.disableClusterInsecureKubeletReadOnlyPort resourceTypes : - container.googleapis.com/Cluster methodTypes : - CREATE - UPDATE condition : "resource.NodeKubeletConfig.insecureKubeletReadonlyPortEnabled == true resource.AutoprovisioningNodePoolDefaults.insecureKubeletReadonlyPortEnabled == true resource.NodePoolAutoConfig.NodeKubeletConfig.insecureKubeletReadonlyPortEnabled == true" actionType : DENY displayName : Disable insecure kubelet read-only port description : All new and existing clusters must disable the insecure kubelet read-only port.
- Caution: This command starts a rolling update of all the nodes in your cluster, which might cause disruptions in running workloads. gcloud container clusters update CLUSTER NAME \ --location = LOCATION \ --no-autoprovisioning-enable-insecure-kubelet-readonly-port Replace the following: CLUSTER NAME : the name of your existing cluster.
- GKE doesn't update existing node pools automatically. gcloud container clusters update CLUSTER NAME \ --location = LOCATION \ --no-enable-insecure-kubelet-readonly-port Replace the following: CLUSTER NAME : the name of your existing Standard cluster.
- Disable the insecure read-only port on existing Standard clusters To disable the insecure kubelet read-only port on an existing Standard cluster, use the --no-enable-insecure-kubelet-readonly-port flag like in the following command.

