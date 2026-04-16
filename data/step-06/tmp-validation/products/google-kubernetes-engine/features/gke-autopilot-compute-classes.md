---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.296Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Autopilot compute classes"
feature_slug: "gke-autopilot-compute-classes"
latest_feature_date: "2022-07-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
keywords:
  - "specialized"
  - "hardware"
  - "classes"
  - "workloads"
  - "autopilot"
  - "compute"
---

# GKE Autopilot compute classes

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Autopilot compute classes let workloads with specialized hardware requirements run on matching compute classes.

## Extended Definition

GKE Autopilot compute classes let workloads with specialized hardware requirements run on matching compute classes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)

## Supporting Pages

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- When you use ComputeClasses, update your workloads to remove the following labels from node selectors and configure the corresponding field in the ComputeClasses that you create: Node label ComputeClass field cloud.google.com/machine-family priorities.machineFamily cloud.google.com/machine-type priorities.machineType cloud.google.com/gke-spot priorities.spot cloud.google.com/gke-accelerator priorities.gpu.type cloud.google.com/gke-gpu-driver-version priorities.gpu.driverVersion cloud.google.com/reservation-name priorities.reservations.specific.name cloud.google.com/reservation-project priorities.reservations.specific.project cloud.google.com/reservation-affinity priorities.reservations.affinity cloud.google.com/gke-ephemeral-storage-local-ssd priorities.storage.localSSDCount cloud.google.com/gke-boot-disk priorities.storage.bootDiskType cloud.google.com/gke-boot-disk-size priorities.storage.bootDiskSize cloud.google.com/gke-node-pool-group-name nodePoolGroup.name cloud.google.com/gke-workload-type nodePoolConfig.workloadType node.kubernetes.io/instance-type priorities.machineType Limitations The name of your ComputeClass can't begin with gke or autopilot .
- After you deploy a TPU custom ComputeClass to your cluster, select that custom ComputeClass in your workload: Autopilot workloads : see the "Provision TPUs by using custom ComputeClasses" section in Deploy TPU workloads on GKE Autopilot Standard workloads : see the "Provision TPUs by using custom ComputeClasses" section in Deploy TPU workloads on GKE Standard .
- Default custom ComputeClasses : Set a custom ComputeClass as the default for an entire cluster or for specific Kubernetes namespaces, so that workloads run on optimized hardware even if they don't request a specific ComputeClass.
- The following example defines a ComputeClass for a multi-host TPU collection optimized for high-availability inference workloads. apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : multi-host-inference spec : nodePoolGroup : name : my-inference-collection nodePoolConfig : workloadType : HIGH AVAILABILITY nodePoolAutoCreation : enabled : true priorities : - tpu : type : tpu-v6e-slice topology : 2x4 For more information, see the following pages: About TPUs in GKE Plan TPUs in GKE Request ComputeClasses in workloads To use a custom ComputeClass, your Pod must explicitly request that ComputeClass by using a nodeSelector in the Pod specification.

### Deploy GPU workloads in Autopilot \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- Source ID: `site-docs-reference-2`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You're billed for the Compute Engine hardware that runs your GPU workloads, plus an Autopilot premium for node management and scalability.
- Read about how Autopilot compute classes are optimized for specialized use cases .
- Accelerator compatibility with GKE capabilities The following table shows the compatible GKE capabilities for each method of selecting accelerators in GKE Autopilot: Accelerator compute class selected Compatibility with GKE capabilities Spot Pods Compute flexible committed use discounts (CUDs) for the Autopilot premium Compute Engine CUDs for the node hardware Compute Engine capacity reservations GKE Sandbox Spot Pods Autopilot committed use discounts (CUDs) for regular Pods Caution: Autopilot committed use discounts (CUDs) are no longer available for purchase.
- Request specific machine types using custom ComputeClasses In some cases, you might need to run your GPU workload on a specific machine type, for example if the machine type that you want is not a default machine type for Autopilot clusters.

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The type of Autopilot ComputeClass that you use depends on whether your workloads need specific hardware, as follows: General-purpose workloads : use one of the built-in Autopilot ComputeClasses, which place Pods on the container-optimized compute platform .
- Verify that the ComputeClass exists: kubectl get computeclasses The output is similar to the following: NAME AGE n4-class 3s Enable Autopilot for an existing custom ComputeClass Best Practice : To migrate your workloads to Autopilot mode in stages, or to immediately start node creation, create a new Autopilot ComputeClass and recreate specific workloads to select the new ComputeClass.
- This ComputeClass can be any of the following: One of the following built-in Autopilot ComputeClasses , which place general-purpose workloads on the Autopilot container-optimized compute platform: autopilot autopilot-spot A ComputeClass that you create, such as the n4-class ComputeClass that's described in the Configure a custom Autopilot ComputeClass section.
- This value can be any of the following: One of the following built-in Autopilot ComputeClasses , which place general-purpose workloads on the Autopilot container-optimized compute platform: autopilot autopilot-spot A ComputeClass that you create, such as the n4-class ComputeClass that's described in the Configure a custom Autopilot ComputeClass section.

