---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.157Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Dynamic Resource Allocation (DRA) APIs"
feature_slug: "dynamic-resource-allocation-dra-apis"
latest_feature_date: "2025-09-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads"
keywords:
  - "allocation"
  - "dynamic"
  - "resource"
  - "generally"
  - "available"
  - "apis"
---

# Dynamic Resource Allocation (DRA) APIs

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Dynamic Resource Allocation APIs are now generally available for Kubernetes workloads that need structured resource allocation.

## Extended Definition

Dynamic Resource Allocation APIs are now generally available for Kubernetes workloads that need structured resource allocation.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads)

## Supporting Pages

### "About dynamic resource allocation in GKE \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation)
- Source ID: `site-docs-reference-2`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Comparison of ResourceClaims and ResourceClaimTemplates Manually-created ResourceClaims Automatically-created ResourceClaims Managed by you Managed by Kubernetes Provides access to the same devices from multiple Pods Provides access to devices from a single Pod Exists in the cluster independently of Pods Bound to the lifecycle of the corresponding Pod Ideal for multiple workloads that need to share a specific device Ideal for multiple workloads that need independent device access Comparison of DRA with manual device allocation DRA makes allocating attached devices a similar experience to dynamically provisioning PersistentVolumes.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Guides Send feedback About dynamic resource allocation in GKE Stay organized with collections Save and categorize content based on your preferences.
- You can use dynamic resource allocation (DRA) to allocate GPUs to your Google Kubernetes Engine (GKE) workloads.
- Comparison of DRA and manual device allocation DRA Manual allocation Flexible device selection using CEL expressions Specific node selection using selectors and resource requests Scheduling decisions made by Kubernetes Scheduling decisions made by the operator using node selectors Device filtering is separate from workload creation Device filtering has to be done in the workload manifest Centralized device filtering and needs-based classes, managed by platform administrators Isolated device filtering by application operators App operators don't need to know node capacity, node label information, or the attached device models for each node App operators must know which nodes have specific models and quantities of certain devices attached.

### "Allocate network resources by using GKE managed DRANET \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra)
- Source ID: `site-docs-reference-2`
- Final score: 185
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It functions as a node-level agent to make network interfaces discoverable and allocatable to Pods through the Kubernetes Dynamic Resource Allocation (DRA) APIs .
- The following example requests two RDMA network devices: apiVersion : resource.k8s.io/v1 kind : ResourceClaimTemplate metadata : name : two-mrdma spec : spec : devices : requests : - name : req-mrdma exactly : deviceClassName : mrdma.google.com allocationMode : ExactCount count : 2 What's next Learn more about Dynamic Resource Allocation .
- Before reading this document, ensure that you are familiar with the following: Dynamic Resource Allocation About dynamic resource allocation in GKE Kubernetes concepts GKE networking GKE Networking fundamentals How GKE managed DRANET works GKE managed DRANET is implemented through a networking-dra-driver DaemonSet.
- Save the manifest as all-netdev-template.yaml : apiVersion : resource.k8s.io/v1 kind : ResourceClaimTemplate metadata : name : all-netdev spec : spec : devices : requests : - name : req-netdev exactly : deviceClassName : netdev.google.com allocationMode : All Apply the manifest: kubectl apply -f all-netdev-template.yaml Deploy your workload and reference the ResourceClaimTemplate .

### "Optimize GKE resource utilization for mixed AI/ML training and inference\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads)
- Source ID: `site-docs-reference-required-4`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The fine-tuning Job takes around 10 minutes before it starts saving the first checkpoint. kubectl logs --namespace = llm --follow --selector = app = finetune-job The output for the first saved checkpoint looks similar to the following: {"name": "finetune", "thread": 133763559483200, "threadName": "MainThread", "processName": "MainProcess", "process": 33, "message": "Fine tuning started", "timestamp": 1731002351.0016131, "level": "INFO", "runtime": 451579.89835739136} … {"name": "accelerate.utils.fsdp utils", "thread": 136658669348672, "threadName": "MainThread", "processName": "MainProcess", "process": 32, "message": "Saving model to /model-data/model-gemma2/experiment/checkpoint-10/pytorch model fsdp 0", "timestamp": 1731002386.1763802, "level": "INFO", "runtime": 486753.8924217224} Test Kueue preemption and dynamic allocation on your mixed workload In this section, you simulate a scenario where the inference server's load increases, requiring it to scale up.
- Kueue achieves this by defining resource requirements ("flavors"), prioritizing workloads through queues (with serving tasks prioritized over training), and dynamically allocating resources based on demand and priority.
- Manage resource allocation between training and serving tasks using Kueue.
- This ConfigMap customizes Kueue to exclude management of Pods in the kube-system and kueue-system namespaces. apiVersion : v1 kind : ConfigMap metadata : name : kueue-manager-config data : controller manager config.yaml : apiVersion: config.kueue.x-k8s.io/v1beta1 kind: Configuration health: healthProbeBindAddress: :8081 metrics: bindAddress: :8080 enableClusterQueueResources: true webhook: port: 9443 leaderElection: leaderElect: true resourceName: c1f6bfd2.kueue.x-k8s.io controller: groupKindConcurrency: Job.batch: 5 Pod: 5 Workload.kueue.x-k8s.io: 5 LocalQueue.kueue.x-k8s.io: 1 ClusterQueue.kueue.x-k8s.io: 1 ResourceFlavor.kueue.x-k8s.io: 1 clientConnection: qps: 50 burst: 100 #pprofBindAddress: :8083 #waitForPodsReady: enable: false timeout: 5m blockAdmission: false requeuingStrategy: timestamp: Eviction backoffLimitCount: null # null indicates infinite requeuing backoffBaseSeconds: 60 backoffMaxSeconds: 3600 #manageJobsWithoutQueueName: true managedJobsNamespaceSelector: matchExpressions: - key: kubernetes.io/metadata.name operator: NotIn values: [ kube-system, kueue-system ] #internalCertManagement: enable: false webhookServiceName: "" webhookSecretName: "" integrations: frameworks: - "batch/job" - "kubeflow.org/mpijob" - "ray.io/rayjob" - "ray.io/raycluster" - "jobset.x-k8s.io/jobset" - "kubeflow.org/paddlejob" - "kubeflow.org/pytorchjob" - "kubeflow.org/tfjob" - "kubeflow.org/xgboostjob" - "kubeflow.org/jaxjob" - "workload.codeflare.dev/appwrapper" - "pod" - "deployment" # requires enabling pod integration - "statefulset" # requires enabling pod integration - "leaderworkerset.x-k8s.io/leaderworkerset" # requires enabling pod integration externalFrameworks: - "Foo.v1.example.com" #fairSharing: enable: true preemptionStrategies: [LessThanOrEqualToFinalShare, LessThanInitialShare] #admissionFairSharing: usageHalfLifeTime: "168h" # 7 days usageSamplingInterval: "5m" resourceWeights: # optional, defaults to 1 for all resources if not specified cpu: 0 # if you want to completely ignore cpu usage memory: 0 # ignore completely memory usage example.com/gpu: 100 # and you care only about GPUs usage #resources: excludeResourcePrefixes: [] transformations: - input: nvidia.com/mig-4g.5gb strategy: Replace Retain outputs: example.com/accelerator-memory: 5Gi example.com/accelerator-gpc: 4 #objectRetentionPolicies: workloads: afterFinished: null # null indicates infinite retention, 0s means no retention at all afterDeactivatedByKueue: null # null indicates infinite retention, 0s means no retention at all In Cloud Shell, run the following command to install Kueue: cd ${ EXAMPLE HOME } kubectl kustomize kueue kubectl apply --server-side --filename = - Wait until the Kueue Pods are ready: watch kubectl --namespace = kueue-system get pods The output should look similar to the following: NAME READY STATUS RESTARTS AGE kueue-controller-manager-bdc956fc4-vhcmx 1/1 Running 0 3m15s In the /workloads directory, view the flavors.yaml , cluster-queue.yaml , and local-queue.yaml files.

