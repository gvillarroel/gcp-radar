---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.780Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Multi-network support for Pods"
feature_slug: "multi-network-support-for-pods"
latest_feature_date: "2023-08-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke"
keywords:
  - "multi"
  - "network"
  - "pods"
  - "gke"
  - "can"
  - "create"
  - "nodes"
  - "workloads"
---

# Multi-network support for Pods

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE can create nodes and workloads with multiple network interfaces, including high-performance interfaces directly attached to Pods.

## Extended Definition

GKE can create nodes and workloads with multiple network interfaces, including high-performance interfaces directly attached to Pods.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra)
- [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke)

## Supporting Pages

### "Orchestrate Multislice workloads using JobSet and Kueue \_|\_ GKE AI/ML\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue)
- Source ID: `site-docs-reference-required-4`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Update your ClusterQueue to have a preemption policy: apiVersion : kueue.x-k8s.io/v1beta1 kind : ResourceFlavor metadata : name : "vlp-24" spec : nodeLabels : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 --- apiVersion : kueue.x-k8s.io/v1beta1 kind : ClusterQueue metadata : name : "cluster-queue" spec : namespaceSelector : {} resourceGroups : - coveredResources : [ "google.com/tpu" ] flavors : - name : "vlp-24" resources : - name : "google.com/tpu" nominalQuota : 24 preemption : reclaimWithinCohort : Any withinClusterQueue : LowerPriority --- apiVersion : kueue.x-k8s.io/v1beta1 kind : LocalQueue metadata : namespace : default name : multislice-queue spec : clusterQueue : cluster-queue Create a PriorityClass for each distinct priority level you want to assign to workloads: apiVersion : scheduling.k8s.io/v1 kind : PriorityClass metadata : name : low-priority value : 100 globalDefault : false description : "This low priority class should be used for some Pods only." Assign the priorityClassName to your JobSet: Autopilot apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : low-priority labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 1 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 priorityClassName : low-priority containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 command : - bash - -c - sleep 60 resources : limits : google.com/tpu : 4 # Number of TPU chips per worker Standard apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : low-priority labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 1 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : hostNetwork : true dnsPolicy : ClusterFirstWithHostNet nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 priorityClassName : low-priority containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 securityContext : privileged : true command : - bash - -c - sleep 60 resources : limits : google.com/tpu : 4 # Number of TPU chips per worker GKE includes a preemption policy, which defines how Kueue assigns the available resources.
- Install the JobSet API in your cluster: VERSION = v0.8.1 kubectl apply --server-side -f https://github.com/kubernetes-sigs/jobset/releases/download/ $VERSION /manifests.yaml Create the following jobsets-multislice.yaml manifest: Autopilot apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-1slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 1 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 command : - bash - -c - pip install "jax[tpu]" -f https://storage.googleapis.com/jax-releases/libtpu releases.html python -c 'import jax; print("Global device count:", jax.device count())' resources : limits : google.com/tpu : 4 --- apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-2slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 2 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 command : - bash - -c - pip install "jax[tpu]" -f https://storage.googleapis.com/jax-releases/libtpu releases.html python -c 'import jax; print("Global device count:", jax.device count())' sleep 60 resources : limits : google.com/tpu : 4 --- apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-3slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 3 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 command : - bash - -c - sleep 60 resources : limits : google.com/tpu : 4 Standard apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-1slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 1 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : hostNetwork : true dnsPolicy : ClusterFirstWithHostNet nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 securityContext : privileged : true command : - bash - -c - pip install "jax[tpu]" -f https://storage.googleapis.com/jax-releases/libtpu releases.html python -c 'import jax; print("Global device count:", jax.device count())' resources : limits : google.com/tpu : 4 --- apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-2slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 2 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : hostNetwork : true dnsPolicy : ClusterFirstWithHostNet nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 securityContext : privileged : true command : - bash - -c - pip install "jax[tpu]" -f https://storage.googleapis.com/jax-releases/libtpu releases.html python -c 'import jax; print("Global device count:", jax.device count())' sleep 60 resources : limits : google.com/tpu : 4 --- apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-3slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 3 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : hostNetwork : true dnsPolicy : ClusterFirstWithHostNet nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 securityContext : privileged : true command : - bash - -c - sleep 60 resources : limits : google.com/tpu : 4 Apply the jobsets-multislice.yaml manifest: kubectl apply -f jobsets-multislice.yaml GKE creates the Jobs with the following resource requests: The multislice-1slice JobSet creates one Job that requires one TPU slice in total.
- Create the Kueue resources Create the following kueue.yaml manifest: apiVersion : kueue.x-k8s.io/v1beta1 kind : ResourceFlavor metadata : name : "vlp-24" spec : nodeLabels : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 --- apiVersion : kueue.x-k8s.io/v1beta1 kind : ClusterQueue metadata : name : "cluster-queue" spec : namespaceSelector : {} queueingStrategy : BestEffortFIFO resourceGroups : - coveredResources : [ "google.com/tpu" ] flavors : - name : "vlp-24" resources : - name : "google.com/tpu" nominalQuota : 24 --- apiVersion : kueue.x-k8s.io/v1beta1 kind : LocalQueue metadata : namespace : default name : multislice-queue spec : clusterQueue : cluster-queue Apply the kueue.yaml manifest: kubectl apply -f kueue.yaml GKE creates the following Kueue resources: ResourceFlavor : an abstraction of the resources in a cluster.
- Monitor which Pods are running kubectl get pods The output is similar to the following: NAME READY STATUS RESTARTS AGE multislice-1slice-slice-0-0-pf2ll 1/1 Running 0 1s multislice-1slice-slice-0-1-55g62 1/1 Running 0 1s multislice-2slice-slice-0-0-f4hf7 1/1 Running 0 3s multislice-2slice-slice-0-1-c8kv7 1/1 Running 0 3s multislice-2slice-slice-1-0-7h46t 1/1 Running 0 3s multislice-2slice-slice-1-1-lj9hb 1/1 Running 0 3s multislice-3slice-slice-0-0-wzq9t 0/1 Completed 0 2m31s multislice-3slice-slice-0-1-zf4dp 0/1 Completed 0 2m30s multislice-3slice-slice-1-0-hbfn5 0/1 Completed 0 2m31s multislice-3slice-slice-1-1-45fgl 0/1 Completed 0 2m30s multislice-3slice-slice-2-0-wjbp4 0/1 Completed 0 2m30s multislice-3slice-slice-2-1-lwnvs 0/1 Completed 0 2m30s See that GKE scheduled, created, and ran the Pods for multislice-3slice first.

### "Allocate network resources by using GKE managed DRANET \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra)
- Source ID: `site-docs-reference-2`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable GKE managed DRANET driver on a GPU node pool To enable the GKE DRANET driver on a GPU node pool that supports RDMA, add the cloud.google.com/gke-networking-dra-driver=true label when you create the node pool. gcloud beta container node-pools create NODE POOL NAME \ --region = REGION \ --cluster = CLUSTER NAME \ --node-locations = NODE LOCATIONS \ --accelerator type = ACCELERATOR TYPE ,count = ACCELERATOR COUNT ,gpu-driver-version = DRIVER VERSION \ --machine-type = MACHINE TYPE \ --num-nodes = NUM NODES \ --reservation-affinity = specific \ --reservation = projects/ RESERVATION PROJECT /reservations/ RESERVATION NAME /reservationBlocks/ RESERVATION BLOCK \ --accelerator-network-profile = auto \ --node-labels = cloud.google.com/gke-networking-dra-driver = true Replace the following: NODE POOL NAME : the name of your new node pool.
- Verify networking DeviceClasses Verify that the DeviceClass resources for networking exist in your cluster. kubectl get deviceclass netdev.google.com The output is similar to the following: NAME AGE netdev.google.com 2d22h Enable GKE managed DRANET driver on a TPU slice node pool To enable the GKE DRANET driver when creating a TPU slice node pool, add the cloud.google.com/gke-networking-dra-driver=true label. gcloud beta container node-pools create NODE POOL NAME \ --location = LOCATION \ --cluster = CLUSTER NAME \ --node-locations = NODE LOCATIONS \ --machine-type = MACHINE TYPE \ --tpu-topology = TPU TOPOLOGY \ --num-nodes = NUM NODES \ --accelerator-network-profile = auto \ --node-labels = cloud.google.com/gke-networking-dra-driver = true Replace the following: NODE POOL NAME : The name of your new node pool.
- Similar to several other GKE system workloads, the DRANET driver's Pods only run on nodes where they are relevant (such as nodes with GPUs, TPUs, and other specialized hardware).
- Create a ComputeClass manifest that enables the DRANET driver and sets the accelerator network profile to auto : apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : dranet-compute-class spec : nodePoolAutoCreation : enabled : true nodePoolConfig : dra : networking : enabled : true priorities : - machineType : MACHINE TYPE gpu : count : GPU COUNT type : GPU TYPE acceleratorNetworkProfile : auto Replace the following: MACHINE TYPE : the machine type for the node pool, such as a3-ultragpu-8g .

### "Best practices for running batch workloads on GKE \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke)
- Source ID: `site-docs-reference-required-4`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Optimize your workloads networking and latency GKE supports compact placement policy for node pools which specifies that these nodes (and thus the workloads running on them) should be placed in closer physical proximity to each other within a zone.
- Pods are groups of single or multiple containers, with shared storage and network resources.
- Autopilot Standard This page introduces the best practices for building and optimizing batch processing platforms with Google Kubernetes Engine (GKE), including best practices for: Architecture Job management Multi-tenancy Security Queueing Storage Performance Cost efficiency Monitoring GKE provides a powerful framework for orchestrating batch workloads such as data processing, training machine learning models , running scientific simulations , and other high performance computing workloads .
- With Autopilot clusters, you don't need to worry about provisioning nodes or managing node pools because node pools are automatically provisioned through node auto-provisioning, and are automatically scaled to meet the requirements of your workloads.

