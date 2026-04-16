---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.758Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Cloud TPU support on GKE Autopilot"
feature_slug: "cloud-tpu-support-on-gke-autopilot"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue"
keywords:
  - "tpu"
  - "gke"
  - "autopilot"
  - "workloads"
  - "clusters"
  - "versions"
---

# Cloud TPU support on GKE Autopilot

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Cloud TPU workloads are supported in GKE Autopilot clusters on supported versions.

## Extended Definition

Cloud TPU workloads are supported in GKE Autopilot clusters on supported versions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue)

## Supporting Pages

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the implications of running an Autopilot workload in your Standard clusters, including differences that you might notice when you deploy those workloads, see About Autopilot mode workloads in GKE Standard .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Guides Send feedback Run workloads in Autopilot mode in Standard clusters Stay organized with collections Save and categorize content based on your preferences.
- Modify clusters to meet Autopilot requirements You can use the Google Cloud console to check whether your Standard cluster meets all of the requirements to run workloads in Autopilot mode.
- Verify that the ComputeClass exists: kubectl get computeclasses The output is similar to the following: NAME AGE n4-class 3s Enable Autopilot for an existing custom ComputeClass Best Practice : To migrate your workloads to Autopilot mode in stages, or to immediately start node creation, create a new Autopilot ComputeClass and recreate specific workloads to select the new ComputeClass.

### Deploy GPU workloads in Autopilot \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- Source ID: `site-docs-reference-2`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Ensure that you have a GKE Autopilot cluster running one of the following versions to use the following GPUs or features: NVIDIA B200 (180 GB) GPUs: 1.32.2-gke.1422000 or later NVIDIA H200 (141GB) GPUs: 1.31.4-gke.1183000 or later NVIDIA H100 Mega (80GB) GPUs: 1.28.9-gke.1250000 or later, and 1.29.4-gke.1542000 or later NVIDIA H100 (80GB) GPUs: 1.28.6-gke.1369000 or later, and 1.29.1-gke.1575000 or later NVIDIA RTX PRO 6000 GPUs: 1.34.1-gke.1829001 or later (except for G4 machine types that have less than one GPU, see the limitations ) Multiple GPU Pods per VM: 1.29.2-gke.1355000 or later Other GPUs: all supported versions Note: For GKE Sandbox GPU clusters, see GPU model support for gVisor compatibility.
- GPU use cases in Autopilot You can allocate GPUs to containers in Autopilot Pods to facilitate workloads such as the following: Machine learning (ML) inference ML training Rendering Supported GPU quantities When you request GPUs in your Pod specification, you must use the following quantities based on the GPU type: GPU quantities NVIDIA B200 (180GB) nvidia-b200 8 NVIDIA H200 (141GB) nvidia-h200-141gb 8 NVIDIA H100 Mega (80GB) nvidia-h100-mega-80gb 8 NVIDIA H100 (80GB) nvidia-h100-80gb 1, 2, 4, 8 NVIDIA A100 (80GB) nvidia-a100-80gb 1, 2, 4, 8 NVIDIA A100 (40GB) nvidia-tesla-a100 1, 2, 4, 8, 16 NVIDIA RTX PRO 6000 nvidia-rtx-pro-6000 1, 2, 4, 8 NVIDIA L4 nvidia-l4 1, 2, 4, 8 NVIDIA T4 nvidia-tesla-t4 1, 2, 4 Note: Autopilot supports the smaller machine shapes of 1, 2, and 4 GPUs for NVIDIA H100 (80GB) GPUs on version 1.31.4-gke.1072000 or later.
- Request specific machine types using custom ComputeClasses In some cases, you might need to run your GPU workload on a specific machine type, for example if the machine type that you want is not a default machine type for Autopilot clusters.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE AI/ML Guides Send feedback Deploy GPU workloads in Autopilot Stay organized with collections Save and categorize content based on your preferences.

### "Orchestrate Multislice workloads using JobSet and Kueue \_|\_ GKE AI/ML\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue)
- Source ID: `site-docs-reference-required-4`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Update your ClusterQueue to have a preemption policy: apiVersion : kueue.x-k8s.io/v1beta1 kind : ResourceFlavor metadata : name : "vlp-24" spec : nodeLabels : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 --- apiVersion : kueue.x-k8s.io/v1beta1 kind : ClusterQueue metadata : name : "cluster-queue" spec : namespaceSelector : {} resourceGroups : - coveredResources : [ "google.com/tpu" ] flavors : - name : "vlp-24" resources : - name : "google.com/tpu" nominalQuota : 24 preemption : reclaimWithinCohort : Any withinClusterQueue : LowerPriority --- apiVersion : kueue.x-k8s.io/v1beta1 kind : LocalQueue metadata : namespace : default name : multislice-queue spec : clusterQueue : cluster-queue Create a PriorityClass for each distinct priority level you want to assign to workloads: apiVersion : scheduling.k8s.io/v1 kind : PriorityClass metadata : name : low-priority value : 100 globalDefault : false description : "This low priority class should be used for some Pods only." Assign the priorityClassName to your JobSet: Autopilot apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : low-priority labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 1 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 priorityClassName : low-priority containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 command : - bash - -c - sleep 60 resources : limits : google.com/tpu : 4 # Number of TPU chips per worker Standard apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : low-priority labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 1 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : hostNetwork : true dnsPolicy : ClusterFirstWithHostNet nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 priorityClassName : low-priority containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 securityContext : privileged : true command : - bash - -c - sleep 60 resources : limits : google.com/tpu : 4 # Number of TPU chips per worker GKE includes a preemption policy, which defines how Kueue assigns the available resources.
- Create a GKE cluster In Cloud Shell, create a GKE cluster: Autopilot gcloud container clusters create-auto multislice-cluster \ --location = CONTROL PLANE LOCATION \ --cluster-version 1 .29.2-gke.1521000 \ --release-channel rapid In this command: The --location flag specifies the Compute Engine region of the control plane of the cluster.
- Autopilot Standard This tutorial demonstrates how to orchestrate multiple multislice workloads on Google Kubernetes Engine (GKE) for improved resource utilization.
- For existing clusters that are upgraded to supported versions, customers need to manually enable the JobSet metrics package.

