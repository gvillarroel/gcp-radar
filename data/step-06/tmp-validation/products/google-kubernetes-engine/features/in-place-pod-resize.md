---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.143Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "In-place Pod Resize"
feature_slug: "in-place-pod-resize"
latest_feature_date: "2025-12-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "resize"
  - "change"
  - "place"
  - "memory"
  - "lets"
---

# In-place Pod Resize

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

In-place Pod Resize lets you change Pod CPU and memory requests and limits without restarting Pods or containers; In-Place Pod Resize now supports decreasing memory limits with best-effort OOM protection and improved deferred resize retries.

## Extended Definition

In-place Pod Resize lets you change Pod CPU and memory requests and limits without restarting Pods or containers; In-Place Pod Resize now supports decreasing memory limits with best-effort OOM protection and improved deferred resize retries.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### ComputeClass \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- Source ID: `site-api-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- It is not a working example. apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : my-class spec : activeMigration : optimizeRulePriority : false autoscalingPolicy : consolidationDelayMinutes : 1 consolidationThreshold : 0 gpuConsolidationThreshold : 0 description : "Short description of the ComputeClass." nodePoolAutoCreation : enabled : false nodePoolConfig : imageType : ubuntu containerd ipType : public serviceAccount : example-service-account@example-project. iam.gserviceaccount.com autoRepair : true autoUpgrade : true nodeLabels : example-label-key : example-label-value confidentialNodeType : SEV taints : - effect : NoSchedule key : example-key value : example-value imageStreaming : enabled : true gvnic : enabled : true resourceManagerTags : - key : example-project/example-tag-key value : example-tag-value loggingConfig : loggingVariantConfig : variant : DEFAULT priorityDefaults : nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 256 transparentHugepageEnabled : TRANSPARENT HUGEPAGE ENABLED ALWAYS kubeletConfig : cpuCfsQuota : true location : zones : [ 'us-central1-a' , 'us-central1-b' ] priorities : - machineFamily : n4 maxRunDurationSeconds : 360 minCores : 16 minCpuPlatform : "Intel Emerald Rapids" minMemoryGb : 64 placement : policyName : my-resource-policy reservations : affinity : Specific specific : - name : n4-shared-reservation project : reservation-project zones : [ 'us-central1-a' ] reservationBlock : name : reservation-block-name reservationSubBlock : name : reservation-sub-block-name spot : true storage : bootDiskSize : 100 bootDiskKMSKey : projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 secondaryBootDisks : - diskImageName : pytorch-mnist project : k8s-staging-jobset mode : CONTAINER IMAGE CACHE nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 512 - machineType : n4-standard-32 nodeLabels : example-priority-label-key : example-priority-label-value location : zones : [ 'us-central1-c' ] locationPolicy : ANY spot : true reservations : affinity : AnyBestEffort storage : bootDiskSize : 100 bootDiskType : hyperdisk-balanced localSSDCount : 1 taints : - effect : NoSchedule key : example-priority-key value : example-priority-value nodeSystemConfig : linuxNodeConfig : swapConfig : enabled : true bootDiskProfile : swapSizeGib : 10 - machineType : n4-standard-32 location : zoneTypes : [ 'STANDARD' , 'AI' ] - nodepools : [ 'example-first-nodepool-name' , 'example-second-nodepool-name' ] - podFamily : general-purpose - gpu : count : 1 driverVersion : default type : nvidia-l4 - tpu : count : 8 topology : "2x4" type : tpu-v5-lite-podslice - flexStart : enabled : true nodeRecycling : leadTimeSeconds : 1200 capacityCheckWaitTimeSeconds : 3600 whenUnsatisfiable : ScaleUpAnyway status : conditions : - lastTransitionTime : 2024-10-10T00:00:00Z message : example-message observedGeneration : 1 reason : example-reason status : "True" type : example-type ComputeClass specification metadata : name : string spec : activeMigration : object( activeMigration ) autoscalingPolicy : object( autoscalingPolicy ) nodePoolAutoCreation : object( nodePoolAutoCreation ) nodePoolGroup : object( nodePoolGroup ) nodePoolConfig : object( nodePoolConfig ) autopilot : object( autopilot ) priorities : [ object( priorities ) ] priorityDefaults : object( priorityDefaults ) whenUnsatisfiable : string Fields metadata required object A field that identifies the ComputeClass. metadata.name optional string The name of the ComputeClass. spec required object The ComputeClass specification, which defines how the ComputeClass works. spec.activeMigration optional object ( activeMigration ) A specification that lets you choose whether GKE automatically replaces existing nodes that are lower in a ComputeClass priority list with new nodes that are higher in that priority list. spec.autoscalingPolicy optional object ( autoscalingPolicy ) A specification that lets you fine-tune the timing and thresholds that cause GKE to remove underused nodes and consolidate workloads on other nodes. spec.nodePoolAutoCreation optional object( nodePoolAutoCreation ) A specification that lets you choose whether GKE can create and delete node pools in Standard mode clusters based on the ComputeClass priority rules.
- When the machineType field is specified, the resulting set of zones includes only those zones where the specified machine type is available. priorities priorities : - capacityCheckWaitTimeSeconds : integer flexStart : object( flexStart ) gpu : object( gpu ) location : object( location ) machineFamily : string machineType : string maxRunDurationSeconds : integer minCores : integer minCpuPlatform : string minMemoryGb : integer nodeLabels : map nodepools : [] string nodeSystemConfig : object( nodeSystemConfig ) machineType : string location : object( location ) maxPodsPerNode : integer placement : object ( placement ) priorityScore : integer reservations : object( reservations ) spot : boolean storage : object( storage ) taints : [ object ( taints ) ] tpu : object( tpu ) Fields capacityCheckWaitTimeSeconds optional integer Requires GKE version 1.33.1-gke.1788000 or later Duration, in seconds, for which GKE attempts to provision the priority before falling back to lower priorities.
- If you specify this field, the minimum value is 1 . secondaryBootDisks[] optional []object( secondaryBootDisks ) Requires GKE version 1.31.2-gke.1105000 or later The configuration of secondary boot disks that are used to preload nodes with data, such as ML models or container images. sysctls sysctls : kernel.keys.maxbytes : integer kernel.keys.maxkeys : integer kernel.shmmni : integer kernel.shmmax : integer kernel.shmall : integer net.core.netdev max backlog : integer net.core.rmem default : integer net.core.rmem max : integer net.core.wmem default : integer net.core.wmem max : integer net.core.optmem max : integer net.core.somaxconn : integer net.ipv4.neigh.default.gc thresh1 : integer net.ipv4.neigh.default.gc thresh2 : integer net.ipv4.neigh.default.gc thresh3 : integer net.ipv4.tcp max orphans : integer net.ipv4.tcp rmem : string net.ipv4.tcp wmem : string net.ipv4.tcp tw reuse : integer net.core.busy poll : integer net.core.busy read : integer net.ipv6.conf.all.disable ipv6 : boolean net.ipv6.conf.default.disable ipv6 : boolean net.netfilter.nf conntrack max : integer net.netfilter.nf conntrack buckets : integer net.netfilter.nf conntrack tcp timeout close wait : integer net.netfilter.nf conntrack tcp timeout time wait : integer net.netfilter.nf conntrack tcp timeout established : integer net.netfilter.nf conntrack acct : boolean vm.max map count : integer vm.dirty background ratio : integer vm.dirty expire centisecs : integer vm.dirty ratio : integer vm.dirty writeback centisecs : integer vm.overcommit memory : integer vm.overcommit ratio : integer vm.vfs cache pressure : integer vm.min free kbytes : integer vm.swappiness : integer vm.watermark scale factor : integer fs.aio-max-nr : integer fs.file-max : integer fs.inotify.max user instances : integer fs.inotify.max user watches : integer fs.nr open : integer Fields kernel.keys.maxbytes optional integer Requires GKE version 1.35.3-gke.1234000 or later The maximum number of bytes that a nonroot user can hold in the payload section of all their keys.
- For more information about logging configuration, see Adjust log throughput . nodeRecycling nodeRecycling : leadTimeSeconds : integer Fields leadTimeSeconds required integer The amount of time, in seconds, before a node reaches the end of its run that GKE should start provisioning a replacement node. nodeSystemConfig nodeSystemConfig : kubeletConfig : object( kubeletConfig ) linuxNodeConfig : object( linuxNodeConfig ) Fields kubeletConfig optional object ( kubeletConfig ) The kubelet configuration for the node. linuxNodeConfig optional object ( linuxNodeConfig ) The Linux kernel configuration for the node. placement placement : policyName : string Fields policyName required string The resource policy name to be used in custom compact placement policies .

### "Deploy a stateful MySQL cluster on GKE \_|\_ Kubernetes Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql)
- Source ID: `site-docs-root-2`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- A Deployment is a Kubernetes API object that lets you run multiple replicas of Pods that are distributed among the nodes in a cluster.. apiVersion : apps/v1 kind : Deployment metadata : name : prepare-three-zone-ha labels : app : prepare-three-zone-ha spec : replicas : 3 selector : matchLabels : app : prepare-three-zone-ha template : metadata : labels : app : prepare-three-zone-ha spec : affinity : Tell Kubernetes to avoid scheduling a replica in a zone where there is already a replica with the label "app: prepare-three-zone-ha" podAntiAffinity : requiredDuringSchedulingIgnoredDuringExecution : - labelSelector : matchExpressions : - key : app operator : In values : - prepare-three-zone-ha topologyKey : "topology.kubernetes.io/zone" containers : - name : prepare-three-zone-ha image : busybox:latest command : - "/bin/sh" - "-c" - "while true; do sleep 3600; done" resources : limits : cpu : "500m" ephemeral-storage : "10Mi" memory : "0.5Gi" requests : cpu : "500m" ephemeral-storage : "10Mi" memory : "0.5Gi" kubectl apply -f prepare-for-ha.yaml By default, Autopilot provisions resources in two zones.
- If you see PodUnscheduleable errors due to insufficient CPU or memory, wait a few minutes for the control plane to resize to accommodate the large workload.
- Deploy the StatefulSet of MySQL instance Pods. apiVersion : apps/v1 kind : StatefulSet metadata : name : dbc1 labels : app : mysql spec : replicas : 3 selector : matchLabels : app : mysql serviceName : mysql template : metadata : labels : app : mysql spec : topologySpreadConstraints : - maxSkew : 1 topologyKey : "topology.kubernetes.io/zone" whenUnsatisfiable : DoNotSchedule labelSelector : matchLabels : app : mysql affinity : podAntiAffinity : requiredDuringSchedulingIgnoredDuringExecution : - labelSelector : matchExpressions : - key : app operator : In values : - mysql topologyKey : "kubernetes.io/hostname" containers : - name : mysql image : mysql/mysql-server:8.0.28 command : - /bin/bash args : - -c - > - /entrypoint.sh --server-id=$((20 + $(echo $HOSTNAME grep -o '[^-] $') + 1)) --report-host=${HOSTNAME}.mysql.mysql1.svc.cluster.local --binlog-checksum=NONE --enforce-gtid-consistency=ON --gtid-mode=ON --default-authentication-plugin=mysql native password env : - name : MYSQL ROOT PASSWORD valueFrom : secretKeyRef : name : mysql-secret key : password - name : MYSQL ADMIN PASSWORD valueFrom : secretKeyRef : name : mysql-secret key : admin-password - name : MYSQL ROOT HOST value : '%' ports : - name : mysql containerPort : 3306 - name : mysqlx containerPort : 33060 - name : xcom containerPort : 33061 resources : limits : cpu : "500m" ephemeral-storage : "1Gi" memory : "1Gi" requests : cpu : "500m" ephemeral-storage : "1Gi" memory : "1Gi" volumeMounts : - name : mysql mountPath : /var/lib/mysql subPath : mysql readinessProbe : exec : command : - bash - "-c" - mysql -h127.0.0.1 -uroot -p$MYSQL ROOT PASSWORD -e'SELECT 1' initialDelaySeconds : 30 periodSeconds : 2 timeoutSeconds : 1 livenessProbe : exec : command : - bash - "-c" - mysqladmin -uroot -p$MYSQL ROOT PASSWORD ping initialDelaySeconds : 30 periodSeconds : 10 timeoutSeconds : 5 updateStrategy : rollingUpdate : partition : 0 type : RollingUpdate volumeClaimTemplates : - metadata : name : mysql labels : app : mysql spec : storageClassName : fast-storageclass volumeMode : Filesystem accessModes : - ReadWriteOnce resources : requests : storage : 10Gi kubectl apply -n mysql1 -f c1-mysql.yaml This command deploys the StatefulSet consisting of three replicas.
- Verify the router configuration. clusterset = dba.getClusterSet () clusterset.listRouters () The output is similar to the following: { "domainName": "clusterset", "routers": { "mysql-router-7cd8585fbc-74pkm::": { "hostname": "mysql-router-7cd8585fbc-74pkm", "lastCheckIn": "2022-09-22 23:26:26", "roPort": 6447, "roXPort": 6449, "rwPort": 6446, "rwXPort": 6448, "targetCluster": null, "version": "8.0.27" }, "mysql-router-7cd8585fbc-824d4::": { ... }, "mysql-router-7cd8585fbc-v2qxz::": { ... } } } Exit MySQL Shell. \q Run this script to inspect the placement of the MySQL Router Pods. bash ../scripts/inspect pod node.sh mysql1 sort The script shows the node and Cloud Zone placement of the all of the Pods in the mysql1 namespace, where the output is similar to the following: gke-gkemulti-west-5-default-pool-1ac6e8b5-0h9v us-west1-c mysql-router-6654f985f5-df97q gke-gkemulti-west-5-default-pool-1ac6e8b5-ddjx us-west1-c dbc1-1 gke-gkemulti-west-5-default-pool-1f5baa66-bf8t us-west1-a dbc1-2 gke-gkemulti-west-5-default-pool-1f5baa66-kt03 us-west1-a mysql-router-6654f985f5-qlfj9 gke-gkemulti-west-5-default-pool-4bcaca65-2l6s us-west1-b mysql-router-6654f985f5-5967d gke-gkemulti-west-5-default-pool-4bcaca65-jch0 us-west1-b dbc1-0 You can observe that the MySQL Router Pods are distributed equally across the zones; that is, not placed on the same node as a MySQL Pod, or on the same node as another MySQL Router Pod.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- With CVE-2023-31436, an out-of-bounds memory access flaw was found in the Linux kernel's traffic control (QoS) subsystem in how a user triggers the qfq change class function with an incorrect MTU value of the network device used as lmax.
- With CVE-2023-31436, an out-of-bounds memory access flaw was found in the Linux kernel's traffic control (QoS) subsystem in how a user triggers the qfq change class function with an incorrect MTU value of the network device used as lmax.
- With CVE-2023-31436, an out-of-bounds memory access flaw was found in the Linux kernel's traffic control (QoS) subsystem in how a user triggers the qfq change class function with an incorrect MTU value of the network device used as lmax.
- With CVE-2023-31436, an out-of-bounds memory access flaw was found in the Linux kernel's traffic control (QoS) subsystem in how a user triggers the qfq change class function with an incorrect MTU value of the network device used as lmax.

