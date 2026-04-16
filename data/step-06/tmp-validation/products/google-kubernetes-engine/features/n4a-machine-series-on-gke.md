---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.141Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "N4A machine series on GKE"
feature_slug: "n4a-machine-series-on-gke"
latest_feature_date: "2026-01-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
keywords:
  - "both"
  - "series"
  - "autopilot"
  - "available"
  - "machine"
  - "clusters"
---

# N4A machine series on GKE

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The N4A machine series is available for GKE clusters in both Autopilot and Standard modes.

## Extended Definition

The N4A machine series is available for GKE clusters in both Autopilot and Standard modes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)

## Supporting Pages

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot workloads that select specific hardware : Pods that select specific hardware, such as Compute Engine machine series or hardware accelerators, use a node-based billing model .
- Manage and monitor your Autopilot clusters In Autopilot, GKE automatically manages cluster upgrades and maintenance for both the control plane and worker nodes.
- Network policy enforcement is available with GKE Dataplane V2, which is enabled by default in Autopilot clusters.
- Autopilot clusters collect the following types of logs and metrics automatically, adhering to Google's best practices for telemetry collection: Logs for Cloud Logging System logs Workload logs Admin Activity audit logs Data Access audit logs Metrics for Cloud Monitoring System metrics Workload metrics (from Google Cloud Managed Service for Prometheus) No additional configuration is required to enable logging and monitoring.

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- GKE takes one of the following actions: In Autopilot clusters, GKE places the Pod on a new or existing node, regardless of the node machine configuration.
- In Standard clusters that use node pool auto-creation, GKE might create a new node pool that uses the default E2 machine series to place the Pod.
- For example, if the N4 machine series isn't available, you can fall back to C3 machines.
- When you use ComputeClasses, update your workloads to remove the following labels from node selectors and configure the corresponding field in the ComputeClasses that you create: Node label ComputeClass field cloud.google.com/machine-family priorities.machineFamily cloud.google.com/machine-type priorities.machineType cloud.google.com/gke-spot priorities.spot cloud.google.com/gke-accelerator priorities.gpu.type cloud.google.com/gke-gpu-driver-version priorities.gpu.driverVersion cloud.google.com/reservation-name priorities.reservations.specific.name cloud.google.com/reservation-project priorities.reservations.specific.project cloud.google.com/reservation-affinity priorities.reservations.affinity cloud.google.com/gke-ephemeral-storage-local-ssd priorities.storage.localSSDCount cloud.google.com/gke-boot-disk priorities.storage.bootDiskType cloud.google.com/gke-boot-disk-size priorities.storage.bootDiskSize cloud.google.com/gke-node-pool-group-name nodePoolGroup.name cloud.google.com/gke-workload-type nodePoolConfig.workloadType node.kubernetes.io/instance-type priorities.machineType Limitations The name of your ComputeClass can't begin with gke or autopilot .

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Cluster-level In Autopilot clusters, both of the following costs apply: Balanced compute class pricing, because the default machine series in the cluster changes to N2D.
- Pricing The following pricing applies, depending on how you configure Confidential GKE Nodes: Confidential GKE Nodes pricing Workload-level In Autopilot workloads, both of the following costs apply: Autopilot node-based billing for the Compute Engine machine series that the Pods run on.
- When you enable Confidential GKE Nodes, the default machine series in the Autopilot cluster changes to N2D.
- For more information about the supported fields and values for ComputeClasses, see the ComputeClass CustomResourceDefinition . apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : COMPUTE CLASS spec : nodePoolConfig : confidentialNodeType : CONFIDENTIAL COMPUTE TECHNOLOGY nodePoolAutoCreation : enabled : true activeMigration : optimizeRulePriority : true priorityDefaults : location : zones : [ ' ZONE1 ' , ' ZONE2 ' ] priorities : - machineFamily : MACHINE SERIES - machineType : MACHINE TYPE whenUnsatisfiable : DoNotScaleUp Replace the following: COMPUTE CLASS : a name for your new compute class.

