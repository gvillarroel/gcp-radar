---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.675Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "G4 VM"
feature_slug: "g4-vm"
latest_feature_date: "2025-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "g4"
  - "vm"
  - "vms"
  - "can"
  - "used"
  - "gke"
  - "autopilot"
  - "starting"
---

# G4 VM

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

G4 VMs can be used with GKE Autopilot starting in version 1.34.1-gke.1829001 or later; G4 VMs are generally available on GKE with NVIDIA RTX PRO 6000 Blackwell Server Edition GPUs and the AMD EPYC Turin CPU platform.

## Extended Definition

G4 VMs can be used with GKE Autopilot starting in version 1.34.1-gke.1829001 or later; G4 VMs are generally available on GKE with NVIDIA RTX PRO 6000 Blackwell Server Edition GPUs and the AMD EPYC Turin CPU platform.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### "About quicker workload startup with fast-starting nodes \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Fast-starting nodes are used in GKE with Autopilot mode on a best-effort basis when workloads use compatible configurations.
- Customer-managed encryption keys (CMEK) Spot VMs Placement policies Multi-network support Autopilot GPU workloads Requesting compatible GPUs in Autopilot mode results in up to four times faster node startup time and up to two times faster Pod scheduling time than similar requests in GKE Standard mode, because the Autopilot GPU workloads can use fast-starting nodes.
- Use one of the following compute resources which are described in the respective tables in the Configuration requirements for eligible compute resources section: Autopilot container-optimized compute platform G2 machine series A2 machine series Limitations The following features aren't compatible with fast-starting GKE nodes.
- Autopilot container-optimized compute platform See the following requirements for GKE to provision fast-starting nodes with the Autopilot container-optimized compute platform.

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Request a placement policy Starting with GKE version 1.33.2-gke.1335000, in GKE Autopilot clusters, you can use compact placement with a custom placement policy or workload policy.
- When you use ComputeClasses, update your workloads to remove the following labels from node selectors and configure the corresponding field in the ComputeClasses that you create: Node label ComputeClass field cloud.google.com/machine-family priorities.machineFamily cloud.google.com/machine-type priorities.machineType cloud.google.com/gke-spot priorities.spot cloud.google.com/gke-accelerator priorities.gpu.type cloud.google.com/gke-gpu-driver-version priorities.gpu.driverVersion cloud.google.com/reservation-name priorities.reservations.specific.name cloud.google.com/reservation-project priorities.reservations.specific.project cloud.google.com/reservation-affinity priorities.reservations.affinity cloud.google.com/gke-ephemeral-storage-local-ssd priorities.storage.localSSDCount cloud.google.com/gke-boot-disk priorities.storage.bootDiskType cloud.google.com/gke-boot-disk-size priorities.storage.bootDiskSize cloud.google.com/gke-node-pool-group-name nodePoolGroup.name cloud.google.com/gke-workload-type nodePoolConfig.workloadType node.kubernetes.io/instance-type priorities.machineType Limitations The name of your ComputeClass can't begin with gke or autopilot .
- Consider the following example: apiVersion: cloud.google.com/v1 kind: ComputeClass metadata: name: my-class spec: priorities: - machineFamily: n4 - machineFamily: c4 autoscalingPolicy: consolidationDelayMinutes: 5 consolidationThreshold: 70 In this configuration, GKE removes unused nodes after five minutes, and nodes only become candidates for consolidation if both their CPU and memory utilization is less than 70%.
- For example, the following ComputeClass specification prioritizes N4 nodes over C4 nodes: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : my-class spec : priorities : - machineFamily : n4 - machineFamily : c4 activeMigration : optimizeRulePriority : true If N4 nodes were unavailable when you deployed a Pod with this ComputeClass, GKE would have used C4 nodes as a fallback option.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- PolicyKit is generally used only on Linux desktop systems to allow non-root users to perform actions such as rebooting the system, installing packages, restarting services etc, as governed by a policy.
- PolicyKit is generally used only on Linux desktop systems to allow non-root users to perform actions such as rebooting the system, installing packages, restarting services etc, as governed by a policy.
- PolicyKit is generally used only on Linux desktop systems to allow non-root users to perform actions such as rebooting the system, installing packages, restarting services etc, as governed by a policy.
- The ability to schedule pods in this way is expected on GKE Standard, but not on GKE Autopilot, as it bypassed the host-access restrictions used to enable the SLA described previously.

