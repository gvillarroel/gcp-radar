---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.760Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Opportunistic bursting and lower Pod minimums"
feature_slug: "opportunistic-bursting-and-lower-pod-minimums"
latest_feature_date: "2024-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads"
keywords:
  - "opportunistic"
  - "bursting"
  - "lower"
  - "pod"
  - "minimums"
  - "gke"
  - "autopilot"
  - "can"
---

# Opportunistic bursting and lower Pod minimums

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Autopilot can use opportunistic bursting and lower Pod minimums on supported clusters.

## Extended Definition

GKE Autopilot can use opportunistic bursting and lower Pod minimums on supported clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads)

## Supporting Pages

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot clusters collect the following types of logs and metrics automatically, adhering to Google's best practices for telemetry collection: Logs for Cloud Logging System logs Workload logs Admin Activity audit logs Data Access audit logs Metrics for Cloud Monitoring System metrics Workload metrics (from Google Cloud Managed Service for Prometheus) No additional configuration is required to enable logging and monitoring.
- For an interactive guide in the Google Cloud console for deploying and exposing an app in an Autopilot cluster, click Guide me : Guide me The following table shows some common requirements and provides recommendations for what you should do: Use case Resources Control individual node properties when scaling a cluster Create a custom ComputeClass and request it in your workload manifest.
- Pricing Autopilot pricing uses different models depending on the type of hardware that your Pods use, as follows: General-purpose Autopilot Pods : the following types of Pods use a Pod-based billing model and are categorized as general-purpose Pods : Pods that run on the container-optimized compute platform in Autopilot clusters or Standard clusters.
- The container-optimized compute platform provides the following benefits: Compute capacity matches workloads : Autopilot dynamically adjusts the compute capacity for the container-optimized compute platform based on factors like the number of Pods and resource consumption.

### Deploy GPU workloads in Autopilot \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot enforces specific CPU and memory minimums, maximums, and defaults based on the GPU type and quantity.
- GPU use cases in Autopilot You can allocate GPUs to containers in Autopilot Pods to facilitate workloads such as the following: Machine learning (ML) inference ML training Rendering Supported GPU quantities When you request GPUs in your Pod specification, you must use the following quantities based on the GPU type: GPU quantities NVIDIA B200 (180GB) nvidia-b200 8 NVIDIA H200 (141GB) nvidia-h200-141gb 8 NVIDIA H100 Mega (80GB) nvidia-h100-mega-80gb 8 NVIDIA H100 (80GB) nvidia-h100-80gb 1, 2, 4, 8 NVIDIA A100 (80GB) nvidia-a100-80gb 1, 2, 4, 8 NVIDIA A100 (40GB) nvidia-tesla-a100 1, 2, 4, 8, 16 NVIDIA RTX PRO 6000 nvidia-rtx-pro-6000 1, 2, 4, 8 NVIDIA L4 nvidia-l4 1, 2, 4, 8 NVIDIA T4 nvidia-tesla-t4 1, 2, 4 Note: Autopilot supports the smaller machine shapes of 1, 2, and 4 GPUs for NVIDIA H100 (80GB) GPUs on version 1.31.4-gke.1072000 or later.
- Ensure that you have a GKE Autopilot cluster running one of the following versions to use the following GPUs or features: NVIDIA B200 (180 GB) GPUs: 1.32.2-gke.1422000 or later NVIDIA H200 (141GB) GPUs: 1.31.4-gke.1183000 or later NVIDIA H100 Mega (80GB) GPUs: 1.28.9-gke.1250000 or later, and 1.29.4-gke.1542000 or later NVIDIA H100 (80GB) GPUs: 1.28.6-gke.1369000 or later, and 1.29.1-gke.1575000 or later NVIDIA RTX PRO 6000 GPUs: 1.34.1-gke.1829001 or later (except for G4 machine types that have less than one GPU, see the limitations ) Multiple GPU Pods per VM: 1.29.2-gke.1355000 or later Other GPUs: all supported versions Note: For GKE Sandbox GPU clusters, see GPU model support for gVisor compatibility.
- Accelerator compatibility with GKE capabilities The following table shows the compatible GKE capabilities for each method of selecting accelerators in GKE Autopilot: Accelerator compute class selected Compatibility with GKE capabilities Spot Pods Compute flexible committed use discounts (CUDs) for the Autopilot premium Compute Engine CUDs for the node hardware Compute Engine capacity reservations GKE Sandbox Spot Pods Autopilot committed use discounts (CUDs) for regular Pods Caution: Autopilot committed use discounts (CUDs) are no longer available for purchase.

### "Optimize GKE resource utilization for mixed AI/ML training and inference\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads)
- Source ID: `site-docs-reference-required-4`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Default priority apiVersion : scheduling.k8s.io/v1 kind : PriorityClass metadata : name : default-priority-nonpreempting value : 10 preemptionPolicy : Never globalDefault : true description : "This priority class will not cause other pods to be preempted." Low priority apiVersion : scheduling.k8s.io/v1 kind : PriorityClass metadata : name : low-priority-preempting value : 20 preemptionPolicy : PreemptLowerPriority globalDefault : false description : "This priority class will cause pods with lower priority to be preempted." High priority apiVersion : scheduling.k8s.io/v1 kind : PriorityClass metadata : name : high-priority-preempting value : 30 preemptionPolicy : PreemptLowerPriority globalDefault : false description : "This high priority class will cause other pods to be preempted." Create the Kueue and Kubernetes objects by running these commands to apply the corresponding manifests. cd ${ EXAMPLE HOME } /workloads kubectl apply --filename = flavors.yaml kubectl apply --filename = default-priorityclass.yaml kubectl apply --filename = high-priorityclass.yaml kubectl apply --filename = low-priorityclass.yaml kubectl apply --filename = cluster-queue.yaml kubectl apply --filename = local-queue.yaml --namespace = llm Deploy the TGI inference server In this section, you deploy the TGI container to serve the Gemma 2 model.
- The preemption field in the ClusterQueue configuration references the PriorityClasses to determine which Pods can be preempted when resources are scarce. apiVersion : kueue.x-k8s.io/v1beta1 kind : ClusterQueue metadata : name : "cluster-queue" spec : namespaceSelector : {} # match all. preemption : reclaimWithinCohort : LowerPriority withinClusterQueue : LowerPriority resourceGroups : - coveredResources : [ "cpu" , "memory" , "nvidia.com/gpu" , "ephemeral-storage" ] flavors : - name : default-flavor resources : - name : "cpu" nominalQuota : 72 - name : "memory" nominalQuota : 288Gi - name : "nvidia.com/gpu" nominalQuota : 6 - name : "ephemeral-storage" nominalQuota : 200Gi LocalQueue This manifest creates a Kueue LocalQueue named lq in the llm namespace. apiVersion : kueue.x-k8s.io/v1beta1 kind : LocalQueue metadata : namespace : llm # LocalQueue under llm namespace name : lq spec : clusterQueue : cluster-queue # Point to the ClusterQueue View the default-priorityclass.yaml , low-priorityclass.yaml , and high-priorityclass.yaml files.
- Create an Autopilot cluster: gcloud container clusters create-auto ${ CLUSTER NAME } \ --project = ${ PROJECT ID } \ --location = ${ REGION } \ --release-channel = rapid Create the Cloud Storage bucket for the fine-tuning job: gcloud storage buckets create gs:// ${ MODEL BUCKET } \ --location ${ REGION } \ --uniform-bucket-level-access To grant access to the Cloud Storage bucket, run this command: gcloud storage buckets add-iam-policy-binding "gs:// $MODEL BUCKET " \ --role = roles/storage.objectAdmin \ --member = principal://iam.googleapis.com/projects/ $PROJECT NUMBER /locations/global/workloadIdentityPools/ $PROJECT ID .svc.id.goog/subject/ns/llm/sa/default \ --condition = None To get authentication credentials for the cluster, run this command: gcloud container clusters get-credentials llm-cluster \ --location = $REGION \ --project = $PROJECT ID Create a namespace for your Deployments.
- Autopilot Set the default environment variables in Cloud Shell: export HF TOKEN = HF TOKEN export REGION = REGION export CLUSTER NAME = "llm-cluster" export PROJECT NUMBER = $( gcloud projects list \ --filter = " $( gcloud config get-value project ) " \ --format = "value(PROJECT NUMBER)" ) export MODEL BUCKET = "model-bucket- $PROJECT ID " Replace the following values: HF TOKEN : the Hugging Face token you generated earlier.

