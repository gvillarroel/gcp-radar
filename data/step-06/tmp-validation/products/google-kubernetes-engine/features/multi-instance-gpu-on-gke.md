---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.355Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Multi-Instance GPU on GKE"
feature_slug: "multi-instance-gpu-on-gke"
latest_feature_date: "2021-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
keywords:
  - "partitioned"
  - "instance"
  - "into"
  - "single"
  - "multi"
  - "lets"
---

# Multi-Instance GPU on GKE

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Multi-Instance GPU on GKE lets a single GPU be partitioned into multiple isolated instances for workloads; Multi-Instance GPU on GKE is available in Preview.

## Extended Definition

Multi-Instance GPU on GKE lets a single GPU be partitioned into multiple isolated instances for workloads; Multi-Instance GPU on GKE is available in Preview.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- You can use the following tools to check inbound traffic to your resources running in Google Cloud: VPC Flow Logs for visibility into network throughput and performance Cloud Logging to search and analyze logging data and events from Google Cloud services and applications configured to send logs Firewall Rules Logging to audit, verify, and analyze the effects of your firewall rules Security Command Center for visibility into security findings indicating suspicious network activity Your application logs High GDC (VMware) Description Severity A security issue was discovered that impacts Multi-Cluster Gateway (MCG), a GKE feature that allows customers to load balance traffic across multiple clusters.
- For this specific attack, a user can potentially exploit a race condition by starting multiple pods on a single node simultaneously, all of which share the same volume mount with a symlink.
- For this specific attack, a user can potentially exploit a race condition by starting multiple pods on a single node simultaneously, all of which share the same volume mount with a symlink.
- For this specific attack, a user can potentially exploit a race condition by starting multiple pods on a single node simultaneously, all of which share the same volume mount with a symlink.

### "Deploy a stateful MySQL cluster on GKE \_|\_ Kubernetes Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql)
- Source ID: `site-docs-root-2`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Prepare the primary MySQL InnoDB Cluster To configure a MySQL InnoDB Cluster, follow these steps: In the Cloud Shell terminal, set the group replication configurations for the MySQL instances to be added to your cluster. bash ../scripts/c1-clustersetup.sh POD ORDINAL START = ${ 1 :- 0 } POD ORDINAL END = ${ 2 :- 2 } for i in $( seq ${ POD ORDINAL START } ${ POD ORDINAL END } ) ; do echo "Configuring pod mysql1/dbc1- ${ i } " cat << ' EOF' kubectl -n mysql1 exec -i dbc1- ${ i } -- bash -c 'mysql -uroot -proot --password=${MYSQL ROOT PASSWORD}' INSTALL PLUGIN group replication SONAME 'group replication.so' ; RESET PERSIST IF EXISTS group replication ip allowlist ; RESET PERSIST IF EXISTS binlog transaction dependency tracking ; SET @@PERSIST.group replication ip allowlist = 'mysql.mysql1.svc.cluster.local' ; SET @@PERSIST.binlog transaction dependency tracking = 'WRITESET' ; EOF done The script will remotely connect into each of the three MySQL instances to set and persist the following environment variables: group replication ip allowlist : allows the instance within the cluster to connect to any instance in the group. binlog transaction dependency tracking='WRITESET' : allows parallelized transactions which won't conflict.
- A Deployment is a Kubernetes API object that lets you run multiple replicas of Pods that are distributed among the nodes in a cluster.. apiVersion : apps/v1 kind : Deployment metadata : name : prepare-three-zone-ha labels : app : prepare-three-zone-ha spec : replicas : 3 selector : matchLabels : app : prepare-three-zone-ha template : metadata : labels : app : prepare-three-zone-ha spec : affinity : Tell Kubernetes to avoid scheduling a replica in a zone where there is already a replica with the label "app: prepare-three-zone-ha" podAntiAffinity : requiredDuringSchedulingIgnoredDuringExecution : - labelSelector : matchExpressions : - key : app operator : In values : - prepare-three-zone-ha topologyKey : "topology.kubernetes.io/zone" containers : - name : prepare-three-zone-ha image : busybox:latest command : - "/bin/sh" - "-c" - "while true; do sleep 3600; done" resources : limits : cpu : "500m" ephemeral-storage : "10Mi" memory : "0.5Gi" requests : cpu : "500m" ephemeral-storage : "10Mi" memory : "0.5Gi" kubectl apply -f prepare-for-ha.yaml By default, Autopilot provisions resources in two zones.
- For detailed steps, see Resize a node pool gcloud In Cloud Shell, resize the default node pool to eight instances in each managed instance group. gcloud container clusters resize ${ CLUSTER NAME } \ --node-pool default-pool \ --num-nodes = 8 Console To add nodes to your Standard cluster: Open the gkemulti-west1 Cluster page in the Google Cloud console.
- Figure 2 : Example multi-region ClusterSet architecture which contains one primary cluster and one replica cluster If the MySQL InnoDB Cluster primary instance is no longer available, you can promote a replica cluster in the ClusterSet to primary.

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Group node pools Starting with GKE version 1.32.2-gke.1359000, you can group multiple node pools into a single logical unit called a collection by using the nodePoolGroup field in your ComputeClass specification.
- For more information, see the following: Plan TPUs in GKE Multi-host TPU slice node pools Schedule TPU collections for inference workloads Node pool configuration The nodePoolConfig field in your ComputeClass specification lets you apply configuration that is reflected in all nodes within the node pools created using that class.
- When you use ComputeClasses, update your workloads to remove the following labels from node selectors and configure the corresponding field in the ComputeClasses that you create: Node label ComputeClass field cloud.google.com/machine-family priorities.machineFamily cloud.google.com/machine-type priorities.machineType cloud.google.com/gke-spot priorities.spot cloud.google.com/gke-accelerator priorities.gpu.type cloud.google.com/gke-gpu-driver-version priorities.gpu.driverVersion cloud.google.com/reservation-name priorities.reservations.specific.name cloud.google.com/reservation-project priorities.reservations.specific.project cloud.google.com/reservation-affinity priorities.reservations.affinity cloud.google.com/gke-ephemeral-storage-local-ssd priorities.storage.localSSDCount cloud.google.com/gke-boot-disk priorities.storage.bootDiskType cloud.google.com/gke-boot-disk-size priorities.storage.bootDiskSize cloud.google.com/gke-node-pool-group-name nodePoolGroup.name cloud.google.com/gke-workload-type nodePoolConfig.workloadType node.kubernetes.io/instance-type priorities.machineType Limitations The name of your ComputeClass can't begin with gke or autopilot .
- If the prioritized instance types aren't available, GKE then falls back to any matching reservations in the specification: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : accelerator-reservations spec : nodePoolAutoCreation : enabled : true priorities : - machineType : a3-highgpu-1g storage : localSSDCount : 2 gpu : type : nvidia-h100-80gb count : 1 reservations : specific : - name : a3-shared-reservation project : reservation-project affinity : Specific - machineType : a3-highgpu-1g storage : localSSDCount : 2 gpu : type : nvidia-h100-80gb count : 1 reservations : affinity : AnyBestEffort whenUnsatisfiable : DoNotScaleUp If you deploy a Pod that uses the accelerator-reservations ComputeClass, GKE first attempts to use the a3-shared-reservation reservation when creating new a3-highgpu-1g instances to run the Pod.

