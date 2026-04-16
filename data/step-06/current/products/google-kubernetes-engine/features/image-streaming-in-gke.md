---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.859Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Image streaming in GKE"
feature_slug: "image-streaming-in-gke"
latest_feature_date: "2021-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot"
keywords:
  - "image"
  - "streaming"
  - "gke"
  - "reduces"
  - "container"
  - "pull"
  - "time"
  - "improves"
---

# Image streaming in GKE

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Image streaming reduces container image pull time and improves application startup and autoscaling performance.

## Extended Definition

Image streaming reduces container image pull time and improves application startup and autoscaling performance.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot)

## Supporting Pages

### ComputeClass \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- Source ID: `site-api-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- It is not a working example. apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : my-class spec : activeMigration : optimizeRulePriority : false autoscalingPolicy : consolidationDelayMinutes : 1 consolidationThreshold : 0 gpuConsolidationThreshold : 0 description : "Short description of the ComputeClass." nodePoolAutoCreation : enabled : false nodePoolConfig : imageType : ubuntu containerd ipType : public serviceAccount : example-service-account@example-project. iam.gserviceaccount.com autoRepair : true autoUpgrade : true nodeLabels : example-label-key : example-label-value confidentialNodeType : SEV taints : - effect : NoSchedule key : example-key value : example-value imageStreaming : enabled : true gvnic : enabled : true resourceManagerTags : - key : example-project/example-tag-key value : example-tag-value loggingConfig : loggingVariantConfig : variant : DEFAULT priorityDefaults : nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 256 transparentHugepageEnabled : TRANSPARENT HUGEPAGE ENABLED ALWAYS kubeletConfig : cpuCfsQuota : true location : zones : [ 'us-central1-a' , 'us-central1-b' ] priorities : - machineFamily : n4 maxRunDurationSeconds : 360 minCores : 16 minCpuPlatform : "Intel Emerald Rapids" minMemoryGb : 64 placement : policyName : my-resource-policy reservations : affinity : Specific specific : - name : n4-shared-reservation project : reservation-project zones : [ 'us-central1-a' ] reservationBlock : name : reservation-block-name reservationSubBlock : name : reservation-sub-block-name spot : true storage : bootDiskSize : 100 bootDiskKMSKey : projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 secondaryBootDisks : - diskImageName : pytorch-mnist project : k8s-staging-jobset mode : CONTAINER IMAGE CACHE nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 512 - machineType : n4-standard-32 nodeLabels : example-priority-label-key : example-priority-label-value location : zones : [ 'us-central1-c' ] locationPolicy : ANY spot : true reservations : affinity : AnyBestEffort storage : bootDiskSize : 100 bootDiskType : hyperdisk-balanced localSSDCount : 1 taints : - effect : NoSchedule key : example-priority-key value : example-priority-value nodeSystemConfig : linuxNodeConfig : swapConfig : enabled : true bootDiskProfile : swapSizeGib : 10 - machineType : n4-standard-32 location : zoneTypes : [ 'STANDARD' , 'AI' ] - nodepools : [ 'example-first-nodepool-name' , 'example-second-nodepool-name' ] - podFamily : general-purpose - gpu : count : 1 driverVersion : default type : nvidia-l4 - tpu : count : 8 topology : "2x4" type : tpu-v5-lite-podslice - flexStart : enabled : true nodeRecycling : leadTimeSeconds : 1200 capacityCheckWaitTimeSeconds : 3600 whenUnsatisfiable : ScaleUpAnyway status : conditions : - lastTransitionTime : 2024-10-10T00:00:00Z message : example-message observedGeneration : 1 reason : example-reason status : "True" type : example-type ComputeClass specification metadata : name : string spec : activeMigration : object( activeMigration ) autoscalingPolicy : object( autoscalingPolicy ) nodePoolAutoCreation : object( nodePoolAutoCreation ) nodePoolGroup : object( nodePoolGroup ) nodePoolConfig : object( nodePoolConfig ) autopilot : object( autopilot ) priorities : [ object( priorities ) ] priorityDefaults : object( priorityDefaults ) whenUnsatisfiable : string Fields metadata required object A field that identifies the ComputeClass. metadata.name optional string The name of the ComputeClass. spec required object The ComputeClass specification, which defines how the ComputeClass works. spec.activeMigration optional object ( activeMigration ) A specification that lets you choose whether GKE automatically replaces existing nodes that are lower in a ComputeClass priority list with new nodes that are higher in that priority list. spec.autoscalingPolicy optional object ( autoscalingPolicy ) A specification that lets you fine-tune the timing and thresholds that cause GKE to remove underused nodes and consolidate workloads on other nodes. spec.nodePoolAutoCreation optional object( nodePoolAutoCreation ) A specification that lets you choose whether GKE can create and delete node pools in Standard mode clusters based on the ComputeClass priority rules.
- For limitations and requirements, see Linux huge page configuration options . imageStreaming imageStreaming : enabled : boolean Fields enabled required boolean Specifies whether to use image streaming to pull container images. gvnic gvnic : enabled : boolean Fields enabled required boolean Specifies whether Google Virtual NIC (gVNIC) is enabled on the node pool. kubeletConfig kubeletConfig : cpuCfsQuota : boolean cpuCfsQuotaPeriod : string cpuManagerPolicy : string podPidsLimit : integer containerLogMaxSize : string containerLogMaxFiles : integer imageGcLowThresholdPercent : integer imageGcHighThresholdPercent : integer imageMinimumGcAge : string imageMaximumGcAge : string allowedUnsafeSysctls : [] string evictionMaxPodGracePeriodSeconds : integer evictionMinimumReclaim : object( evictionMinimumReclaim ) evictionSoft : object( evictionSoft ) evictionSoftGracePeriod : object( evictionSoftGracePeriod ) maxParallelImagePulls : integer singleProcessOOMKill : boolean Fields cpuCfsQuota optional boolean Enables CPU Completely Fair Scheduler (CFS) quota enforcement for containers that specify CPU limits.
- For more information about image streaming, see Use Image streaming to pull container images . gvnic optional object ( gvnic ) Requires GKE version 1.34.1-gke.3759000 or later Google Virtual NIC settings.
- If you specify this field, the minimum value is 1 . secondaryBootDisks[] optional []object( secondaryBootDisks ) Requires GKE version 1.31.2-gke.1105000 or later The configuration of secondary boot disks that are used to preload nodes with data, such as ML models or container images. sysctls sysctls : kernel.keys.maxbytes : integer kernel.keys.maxkeys : integer kernel.shmmni : integer kernel.shmmax : integer kernel.shmall : integer net.core.netdev max backlog : integer net.core.rmem default : integer net.core.rmem max : integer net.core.wmem default : integer net.core.wmem max : integer net.core.optmem max : integer net.core.somaxconn : integer net.ipv4.neigh.default.gc thresh1 : integer net.ipv4.neigh.default.gc thresh2 : integer net.ipv4.neigh.default.gc thresh3 : integer net.ipv4.tcp max orphans : integer net.ipv4.tcp rmem : string net.ipv4.tcp wmem : string net.ipv4.tcp tw reuse : integer net.core.busy poll : integer net.core.busy read : integer net.ipv6.conf.all.disable ipv6 : boolean net.ipv6.conf.default.disable ipv6 : boolean net.netfilter.nf conntrack max : integer net.netfilter.nf conntrack buckets : integer net.netfilter.nf conntrack tcp timeout close wait : integer net.netfilter.nf conntrack tcp timeout time wait : integer net.netfilter.nf conntrack tcp timeout established : integer net.netfilter.nf conntrack acct : boolean vm.max map count : integer vm.dirty background ratio : integer vm.dirty expire centisecs : integer vm.dirty ratio : integer vm.dirty writeback centisecs : integer vm.overcommit memory : integer vm.overcommit ratio : integer vm.vfs cache pressure : integer vm.min free kbytes : integer vm.swappiness : integer vm.watermark scale factor : integer fs.aio-max-nr : integer fs.file-max : integer fs.inotify.max user instances : integer fs.inotify.max user watches : integer fs.nr open : integer Fields kernel.keys.maxbytes optional integer Requires GKE version 1.35.3-gke.1234000 or later The maximum number of bytes that a nonroot user can hold in the payload section of all their keys.

### "Migrate nodes to containerd 2 \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- Source ID: `site-docs-reference-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Run the following command to check for the DaemonSets: kubectl get daemonsets --all-namespaces -o json \ jq -r ' [ "/", "/etc", "/etc/", "/etc/containerd", "/etc/containerd/", "/etc/containerd/config.toml" ] as $host paths [ "kube-system", "kube-node-lease", "istio-system", "asm-system", "gatekeeper-system", "config-management-system", "config-management-monitoring", "cnrm-system", "hnc-system", "gke-managed-system", "gke-gmp-system", "gmp-system", "gke-managed-cim" ] as $excluded namespaces .items[] select( ([.metadata.namespace] inside($excluded namespaces) not) and ( (any(.spec.template.spec.volumes[]?.hostPath.path; IN($host paths[]))) or ( .spec.template.spec.hostPID == true and any(.spec.template.spec.containers[]; .securityContext?.privileged == true) ) ) ) .metadata.namespace + "/" + .metadata.name ' Migrate from the CRI registry auths or configs.auth properties If your workloads use the auths or configs.auth properties in the containerd config to authenticate to a private registry for pulling container images, you must migrate the workloads using those images to the imagePullSecrets field instead.
- Use the ctr command directly on a node To query a specific node to return all non-deleted images that were pulled as Schema 1, run the following command on a node: ctr --namespace k8s.io images list 'labels."io.containerd.image/converted-docker-schema1"' This command can be useful if, for example, you're troubleshooting a specific node and you don't see log entries in Cloud Logging because it's been more than 30 days since the image was pulled.
- Identify which workloads need to be migrated to the imagePullSecrets field by running the following command: kubectl get pods -A -o json jq -r ".items[] select(.spec.containers[] .image startswith(\" $REGISTRY DOMAIN \")) .metadata.namespace + \"/\" + .metadata.name" You must create a Secret for each namespace that's used by workloads with images from this registry domain.
- How GKE is transitioning to containerd 2 Review the following timeline to understand how GKE is transitioning existing clusters to use containerd 2: For Linux nodes with 1.32 and Windows Server nodes with 1.34, GKE uses containerd 1.7. containerd 1.7 deprecated both Docker Schema 1 images and the Container Runtime Interface (CRI) v1alpha2 API.

### "Build a RAG chatbot with GKE and Cloud Storage \_|\_ Kubernetes Engine \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot)
- Source ID: `site-docs-reference-required-4`
- Final score: 135
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Grant artifactregistry.serviceAgent role to this Compute Engine service account to allow the nodes to pull image from the Artifact Registry created for embed-docs and chatbot . export CLUSTER SERVICE ACCOUNT = $( gcloud container clusters describe ${ KUBERNETES CLUSTER PREFIX } -cluster \ --location = ${ CONTROL PLANE LOCATION } \ --format = "value(nodeConfig.serviceAccount)" ) gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ CLUSTER SERVICE ACCOUNT } " \ --role = "roles/artifactregistry.serviceAgent" Without granting access to the service account, your nodes might experience permission issue when trying to pull image from the Artifact Registry when deploying the embed-docs and chatbot Services.
- V1Container ( name = container name , image = container image , image pull policy = 'Always' , env = env list ) template . template . spec = client .
- V1Container ( name = container name , image = container image , image pull policy = 'Always' , env = env list ) template . template . spec = client .
- V1Container ( name = container name , image = container image , image pull policy = 'Always' , env = env list ) template . template . spec = client .

