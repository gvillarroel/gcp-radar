---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.395Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Node auto-provisioning default machine type"
feature_slug: "node-auto-provisioning-default-machine-type"
latest_feature_date: "2021-02-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest"
keywords:
  - "provisioning"
  - "uses"
  - "machine"
  - "default"
  - "type"
  - "auto"
  - "node"
---

# Node auto-provisioning default machine type

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Node auto-provisioning uses E2 as the default machine type.

## Extended Definition

Node auto-provisioning uses E2 as the default machine type.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest)

## Supporting Pages

### "About node pool auto-creation \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- Source ID: `site-docs-reference-2`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you didn't set a default machine type for node auto-provisioning, GKE uses the cluster's default machine type.
- If the Pod specification or ComputeClass don't specify a machine type, GKE checks whether you set a default machine type for node auto-provisioning in the cluster.
- The following example configuration file enables node auto-repair and auto-upgrade for any new auto-created node pools: management : autoRepair : true autoUpgrade : true The following example configuration file sets the cluster-wide resource limits for node auto-provisioning and configures multiple default settings: resourceLimits : - resourceType : 'cpu' minimum : 4 maximum : 10 - resourceType : 'memory' maximum : 64 - resourceType : 'nvidia-tesla-t4' maximum : 4 management : autoRepair : true autoUpgrade : true shieldedInstanceConfig : enableSecureBoot : true enableIntegrityMonitoring : true diskSizeGb : 100 This configuration file sets the following default values: Enables node auto-repair and auto-upgrade for any new auto-created node pools.
- The following example ComputeClass manifest enables node pool auto-creation for any Pod that uses the ComputeClass: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : example-computeclass spec : priorities : - machineFamily : n4 - machineFamily : c4 whenUnsatisfiable : ScaleUpAnyway nodePoolAutoCreation : enabled : true Cluster-level enablement with node auto-provisioning To enable node pool auto-creation for the entire cluster, you enable the node auto-provisioning feature for the cluster by using the Kubernetes Engine API.

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about the supported fields and values for ComputeClasses, see the ComputeClass CustomResourceDefinition . apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : COMPUTE CLASS spec : nodePoolConfig : confidentialNodeType : CONFIDENTIAL COMPUTE TECHNOLOGY nodePoolAutoCreation : enabled : true activeMigration : optimizeRulePriority : true priorityDefaults : location : zones : [ ' ZONE1 ' , ' ZONE2 ' ] priorities : - machineFamily : MACHINE SERIES - machineType : MACHINE TYPE whenUnsatisfiable : DoNotScaleUp Replace the following: COMPUTE CLASS : a name for your new compute class.
- The output is similar to the following: Name: gke-cluster-1-default-pool-affsf335r-asdf Roles: <none> Labels: cloud.google.com/gke-boot-disk=pd-balanced cloud.google.com/gke-container-runtime=containerd cloud.google.com/gke-confidential-nodes-instance-type= CONFIDENTIAL COMPUTE SELECTOR cloud.google.com/gke-nodepool=default-pool cloud.google.com/gke-os-distribution=cos cloud.google.com/machine-family=e2 lines omitted for clarity In this output, the cloud.google.com/gke-confidential-nodes-instance-type node label indicates that the node is a confidential node.
- To create a Standard mode cluster that uses Confidential GKE Nodes, select one of the following options: gcloud When creating a new cluster, specify the --confidential-node-type option in the gcloud CLI: gcloud container clusters create CLUSTER NAME \ --location = LOCATION \ --machine-type = MACHINE TYPE \ --node-locations = ZONE1,ZONE2,... \ --confidential-node-type = CONFIDENTIAL COMPUTE TECHNOLOGY Replace the following: CLUSTER NAME : the name of your cluster.
- The supported technologies at the node pool level depend on whether the node pool uses node auto-provisioning, as follows: Manually created node pools : AMD SEV AMD SEV-SNP Intel TDX Auto-provisioned node pools : AMD SEV AMD SEV-SNP Confidential mode for Hyperdisk Balanced You can also enable Confidential mode for Hyperdisk Balanced on your boot disk storage, which encrypts your data on additional hardware-backed enclaves.

### "Run a large-scale workload with flex-start with queued provisioning \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest)
- Source ID: `site-docs-reference-required-4`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a node pool Create a node pool that has flex-start with queued provisioning enabled by using the gcloud CLI: gcloud container node-pools create NODEPOOL NAME \ --cluster = CLUSTER NAME \ --location = LOCATION \ --enable-queued-provisioning \ --accelerator type = GPU TYPE ,count = AMOUNT ,gpu-driver-version = DRIVER VERSION \ --machine-type = MACHINE TYPE \ --flex-start \ --enable-autoscaling \ --num-nodes = 0 \ --total-max-nodes TOTAL MAX NODES \ --location-policy = ANY \ --reservation-affinity = none \ --no-enable-autorepair Replace the following: NODEPOOL NAME : The name you choose for the node pool.
- Deploy the manifest using the following command: kubectl create -f ./dws and reservation.yaml The output is similar to the following: resourceflavor.kueue.x-k8s.io/reservation created resourceflavor.kueue.x-k8s.io/dws created clusterqueue.kueue.x-k8s.io/cluster-queue created localqueue.kueue.x-k8s.io/user-queue created admissioncheck.kueue.x-k8s.io/dws-prov created provisioningrequestconfig.kueue.x-k8s.io/dws-config created Run your Job Contrary to the preceding setup, this manifest does not include the nodeSelector field because it's filled by Kueue, depending on the free capacity in the ClusterQueue . apiVersion : batch/v1 kind : Job metadata : generateName : sample-job- namespace : default labels : kueue.x-k8s.io/queue-name : user-queue annotations : provreq.kueue.x-k8s.io/maxRunDurationSeconds : "600" spec : parallelism : 1 completions : 1 suspend : true template : spec : tolerations : - key : "nvidia.com/gpu" operator : "Exists" effect : "NoSchedule" containers : - name : dummy-job image : gcr.io/k8s-staging-perf-tests/sleep:v0.0.3 args : [ "120s" ] resources : requests : cpu : "100m" memory : "100Mi" nvidia.com/gpu : 1 limits : cpu : "100m" memory : "100Mi" nvidia.com/gpu : 1 restartPolicy : Never Run your Job: kubectl create -f ./job-without-node-selector.yaml The output is similar to the following: job.batch/sample-job-v8xwm created To identify which node pool your Job uses, you need to find out what ResourceFlavor your Job uses .
- Run your Job In the following manifest, the sample Job uses flex-start with queued provisioning: apiVersion : batch/v1 kind : Job metadata : name : sample-job namespace : default labels : kueue.x-k8s.io/queue-name : dws-local-queue annotations : provreq.kueue.x-k8s.io/maxRunDurationSeconds : "600" spec : parallelism : 1 completions : 1 suspend : true template : spec : nodeSelector : cloud.google.com/gke-nodepool : NODEPOOL NAME tolerations : - key : "nvidia.com/gpu" operator : "Exists" effect : "NoSchedule" containers : - name : dummy-job image : gcr.io/k8s-staging-perf-tests/sleep:v0.0.3 args : [ "120s" ] resources : requests : cpu : "100m" memory : "100Mi" nvidia.com/gpu : 1 limits : cpu : "100m" memory : "100Mi" nvidia.com/gpu : 1 restartPolicy : Never This manifest includes the following fields that are relevant for the flex-start with queued provisioning configuration: The kueue.x-k8s.io/queue-name: dws-local-queue label tells GKE that Kueue is responsible for orchestrating that Job.
- Node auto-provisioning apiVersion : v1 kind : PodTemplate metadata : name : POD TEMPLATE NAME namespace : NAMESPACE NAME labels : cloud.google.com/apply-warden-policies : "true" template : spec : nodeSelector : cloud.google.com/gke-accelerator : GPU TYPE cloud.google.com/gke-flex-start : "true" tolerations : - key : "nvidia.com/gpu" operator : "Exists" effect : "NoSchedule" containers : - name : pi image : perl command : [ "/bin/sh" ] resources : limits : cpu : "700m" nvidia.com/gpu : 1 requests : cpu : "700m" nvidia.com/gpu : 1 restartPolicy : Never --- apiVersion : autoscaling.x-k8s.io/ API VERSION kind : ProvisioningRequest metadata : name : PROVISIONING REQUEST NAME namespace : NAMESPACE NAME spec : provisioningClassName : queued-provisioning.gke.io parameters : maxRunDurationSeconds : " MAX RUN DURATION SECONDS " podSets : - count : COUNT podTemplateRef : name : POD TEMPLATE NAME Replace the following: API VERSION : The version of the API, either v1 or v1beta1 .

