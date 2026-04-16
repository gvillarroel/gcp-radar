---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.173Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Kubernetes-native sidecar container resource metrics"
feature_slug: "kubernetes-native-sidecar-container-resource-metrics"
latest_feature_date: "2025-06-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "sidecar"
  - "reports"
  - "container"
  - "resource"
  - "native"
  - "metrics"
---

# Kubernetes-native sidecar container resource metrics

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE reports CPU and memory requests and limits metrics for Kubernetes-native sidecar containers.

## Extended Definition

GKE reports CPU and memory requests and limits metrics for Kubernetes-native sidecar containers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "Deploy PostgreSQL to GKE using CloudNativePG \_|\_ Kubernetes Engine \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deploy Postgres The following manifest describes a PostgreSQL cluster as defined by the CloudNativePG operator's custom resource: apiVersion : postgresql.cnpg.io/v1 kind : Cluster metadata : name : gke-pg-cluster spec : description : "Standard GKE PostgreSQL cluster" imageName : ghcr.io/cloudnative-pg/postgresql:16.2 enableSuperuserAccess : true instances : 3 startDelay : 300 primaryUpdateStrategy : unsupervised postgresql : pg hba : - host all all 10.48.0.0/20 md5 bootstrap : initdb : database : app storage : storageClass : premium-rwo size : 2Gi resources : requests : memory : "1Gi" cpu : "1000m" limits : memory : "1Gi" cpu : "1000m" affinity : enablePodAntiAffinity : true tolerations : - key : cnpg.io/cluster effect : NoSchedule value : gke-pg-cluster operator : Equal additionalPodAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 1 podAffinityTerm : labelSelector : matchExpressions : - key : app.component operator : In values : - "pg-cluster" topologyKey : topology.kubernetes.io/zone monitoring : enablePodMonitor : true This manifest has the following fields: spec.instances : the number of cluster Pods spec.primaryUpdateStrategy : the rolling update strategy: Unsupervised : autonomously updates the primary cluster node after the replica nodes Supervised : manual switchover is required for the primary cluster node spec.postgresql : postgres.conf file parameter overrides, such as pg-hba rules, LDAP, and requirements for sync replicas to be met. spec.storage : storage-related settings, such as storage class, volume size, and write-ahead log settings. spec.bootstrap : parameters of the initial database created in the cluster, user credentials, and database restore options spec.resources : requests and limits for cluster Pods spec.affinity : affinity and anti-affinity rules of the cluster workloads Create a basic Postgres cluster Create a namespace: kubectl create ns pg-ns Create the PostgreSQL cluster using the custom resource: kubectl apply -n pg-ns -f manifests/01-basic-cluster/postgreSQL cluster.yaml This command might take several minutes to complete.
- This Service permits querying data but restricts any write operations: psql postgresql:// $CLIENTUSERNAME : $CLIENTPASSWORD @gke-pg-cluster-ro.pg-ns/app Attempt to insert new data: INSERT INTO travel agency clients ( client, address, phone ) VALUES ( 'John' , 'Paris' , '+55555' ) RETURNING ; The output is similar to the following: ERROR: cannot execute INSERT in a read-only transaction Attempt to read data: SELECT FROM travel agency clients ; The output is similar to the following: client address phone --------+---------+--------- Tom Warsaw +55555 (1 row) Logout of the current database session: exit Exit the Pod shell: exit Understand how Prometheus collects metrics for your Postgres cluster The following diagram shows how Prometheus metrics collecting works: In the diagram, a GKE private cluster contains: A Postgres Pod that gathers metrics on path / and port 9187 Prometheus-based collectors that process the metrics from the Postgres Pod A PodMonitoring resource that sends metrics to Cloud Monitoring To enable metrics to be collected from your Pods, perform the following steps: Create the PodMonitoring resource: kubectl apply -f manifests/03-observability/pod-monitoring.yaml -n pg-ns In the Google Cloud console, go to the Metrics explorer page: Go to Metrics explorer The dashboard shows a non-zero metrics ingestion rate.
- It brings the following features to PostgreSQL deployment: A declarative and Kubernetes-native way to manage and configure and PostgreSQL clusters Backup management using volume snapshots or Cloud Storage In-transit encrypted TLS connection, the ability to use your own certificate authority and integration with Certificate Manager for automated TLS certificate issuance and rotation Rolling updates for minor PostgreSQL releases Use of Kubernetes API server to maintain a PostgreSQL cluster status and failovers for high availability with no additional tools required A built-in Prometheus exporter configuration through user-defined metrics written in SQL Objectives Plan and deploy GKE infrastructure for Postgres Deploy and configure the CloudNativePG Postgres operator with Helm Deploy a PostgreSQL cluster Configure PostgreSQL authentication and observability Deployment architecture PostgreSQL has various deployment options from a standalone database server to a replicated highly-available cluster.
- Connect to the cluster Configure kubectl to communicate with the cluster: gcloud container clusters get-credentials ${ KUBERNETES CLUSTER PREFIX } -cluster --location ${ REGION } Deploy the CloudNativePG operator Deploy the CloudNativePG to your Kubernetes cluster using a Helm chart: Add the CloudNativePG operator Helm Chart repository: helm repo add cnpg https://cloudnative-pg.github.io/charts Deploy the CloudNativePG operator using the Helm command-line tool: helm upgrade --install cnpg \ --namespace cnpg-system \ --create-namespace \ cnpg/cloudnative-pg The output is similar to the following: Release "cnpg" does not exist.

### "Collect and view logs and metrics for Ray clusters on Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics)
- Source ID: `site-docs-reference-required-4`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following RayCluster manifests includes the env section for all Ray containers, in both headGroupSpec and workerGroupSpecs specs: Example snippet for a RayCluster manifest apiVersion : ray.io/v1 kind : RayCluster metadata : name : raycluster-structured spec : headGroupSpec : template : spec : containers : - name : ray-head image : rayproject/ray:2.54.0 # Replace with your desired Ray image ... other container settings env : - name : RAY LOGGING CONFIG ENCODING value : "JSON" - name : RAY BACKEND LOG JSON value : "1" workerGroupSpecs : - groupName : small-group replicas : 1 minReplicas : 1 maxReplicas : 5 template : spec : containers : - name : ray-worker image : rayproject/ray:2.54.0 # Replace with your desired Ray image ... other container settings env : - name : RAY LOGGING CONFIG ENCODING value : "JSON" - name : RAY BACKEND LOG JSON value : "1" Apply the updated RayCluster manifest: kubectl apply -f your-raycluster.yaml Queries for structured logs Query/filter name Expression All error logs for a specific Ray Job ID resource.type="k8s container" labels."k8s-pod/ray io/is-ray-node"="yes" severity=ERROR jsonPayload.job id=" YOUR JOB ID " Logs for a specific Ray worker process ID resource.type="k8s container" labels."k8s-pod/ray io/is-ray-node"="yes" jsonPayload.worker id=" YOUR WORKER ID " Error logs for a specific Task ID on a specific worker Pod resource.type="k8s container" resource.labels.pod name=" YOUR WORKER POD NAME " labels."k8s-pod/ray io/is-ray-node"="yes" severity=ERROR jsonPayload.task id=" YOUR TASK ID " Enable metrics collection for a Ray cluster You can enable metrics collection for Ray clusters with new or existing Autopilot or Standard GKE clusters.
- Go to Cloud Logging Open the query editor and paste your expression into the query editor Click Run query You can use the following example queries in the Logs Explorer: Query/filter name Expression All Ray logs resource.type="k8s container" labels."k8s-pod/ray io/is-ray-node"="yes" All Ray head logs resource.type="k8s container" labels."k8s-pod/ray io/node-type"="head" All logs in a Ray cluster resource.type="k8s container" labels."k8s-pod/ray io/cluster"=" RAY CLUSTER NAME " All driver logs from a Ray job resource.type="k8s container" jsonPayload.ray submission id=" RAY JOB SUBMISSION ID " All worker logs from a Ray job resource.type="k8s container" labels."k8s-pod/ray io/cluster"=" RAY CLUSTER NAME " labels."k8s-pod/ray io/node-type"="worker" jsonPayload.filename= "/tmp/ray/session latest/logs/worker-(. ).out" This query is for large-scale clusters where ray.init(log to driver=False) is set.
- You can further refine your search by selecting the appropriate resource type (for example, k8s pod , k8s container ) and filtering by labels relevant to your Ray cluster (for example, ray.io/cluster ).
- Alternatively, if you want to explore individual metrics collected from Ray clusters running on GKE, follow these steps: Go to the Metrics Explorer page in the Google Cloud console.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Currently available options: monitoring.googleapis.com/kubernetes - The Cloud Monitoring service with a Kubernetes-native resource model monitoring.googleapis.com - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). none - No metrics will be exported from the cluster.
- NodeConfig JSON representation { "machineType" : string , "diskSizeGb" : integer , "oauthScopes" : [ string ] , "serviceAccount" : string , "metadata" : { string : string , ... } , "imageType" : string , "labels" : { string : string , ... } , "localSsdCount" : integer , "tags" : [ string ] , "preemptible" : boolean , "accelerators" : [ { object ( AcceleratorConfig ) } ] , "diskType" : string , "minCpuPlatform" : string , "workloadMetadataConfig" : { object ( WorkloadMetadataConfig ) } , "taints" : [ { object ( NodeTaint ) } ] , "sandboxConfig" : { object ( SandboxConfig ) } , "nodeGroup" : string , "reservationAffinity" : { object ( ReservationAffinity ) } , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "linuxNodeConfig" : { object ( LinuxNodeConfig ) } , "kubeletConfig" : { object ( NodeKubeletConfig ) } , "bootDiskKmsKey" : string , "gcfsConfig" : { object ( GcfsConfig ) } , "advancedMachineFeatures" : { object ( AdvancedMachineFeatures ) } , "gvnic" : { object ( VirtualNIC ) } , "spot" : boolean , "confidentialNodes" : { object ( ConfidentialNodes ) } , "resourceLabels" : { string : string , ... } , "loggingConfig" : { object ( NodePoolLoggingConfig ) } , "windowsNodeConfig" : { object ( WindowsNodeConfig ) } , "localNvmeSsdBlockConfig" : { object ( LocalNvmeSsdBlockConfig ) } , "ephemeralStorageLocalSsdConfig" : { object ( EphemeralStorageLocalSsdConfig ) } , "soleTenantConfig" : { object ( SoleTenantConfig ) } , "containerdConfig" : { object ( ContainerdConfig ) } , "resourceManagerTags" : { object ( ResourceManagerTags ) } , "enableConfidentialStorage" : boolean , "secondaryBootDisks" : [ { object ( SecondaryBootDisk ) } ] , "storagePools" : [ string ] , "maxRunDuration" : string , "effectiveCgroupMode" : enum ( EffectiveCgroupMode ) , "bootDisk" : { object ( BootDisk ) } , "consolidationDelay" : string , // Union field fast socket can be only one of the following: "fastSocket" : { object ( FastSocket ) } // End of list of possible types for union field fast socket . // Union field secondary boot disk update strategy can be only one of the // following: "secondaryBootDiskUpdateStrategy" : { object ( SecondaryBootDiskUpdateStrategy ) } // End of list of possible types for union field // secondary boot disk update strategy . // Union field gpu direct config can be only one of the following: "gpuDirectConfig" : { object ( GPUDirectConfig ) } // End of list of possible types for union field gpu direct config . // Union field local ssd encryption mode can be only one of the following: "localSsdEncryptionMode" : enum ( LocalSsdEncryptionMode ) // End of list of possible types for union field local ssd encryption mode . // Union field flex start can be only one of the following: "flexStart" : boolean // End of list of possible types for union field flex start . // Union field taint config can be only one of the following: "taintConfig" : { object ( TaintConfig ) } // End of list of possible types for union field taint config . } Fields machineType string The name of a Google Compute Engine machine type If unspecified, the default machine type is e2-medium . diskSizeGb integer Size of the disk attached to each node, specified in GB.
- AdvancedDatapathObservabilityConfig JSON representation { "enableMetrics" : boolean , "relayMode" : enum ( RelayMode ) , // Union field enable relay can be only one of the following: "enableRelay" : boolean // End of list of possible types for union field enable relay . } Fields enableMetrics boolean Expose flow metrics on nodes relayMode enum ( RelayMode ) Method used to make Relay available Union field enable relay . enable relay can be only one of the following: enableRelay boolean Enable Relay component NodePoolAutoConfig JSON representation { "networkTags" : { object ( NetworkTags ) } , "resourceManagerTags" : { object ( ResourceManagerTags ) } , "nodeKubeletConfig" : { object ( NodeKubeletConfig ) } , "linuxNodeConfig" : { object ( LinuxNodeConfig ) } } Fields networkTags object ( NetworkTags ) The list of instance tags applied to all nodes.
- ResourceManagerTags JSON representation { "tags" : { string : string , ... } } Fields tags map (key: string, value: string) TagKeyValue must be in one of the following formats ([KEY]=[VALUE]) 1. tagKeys/{tag key id}=tagValues/{tag value id} 2. {org id}/{tag key name}={tag value name} 3. {project id}/{tag key name}={tag value name} TagsEntry JSON representation { "key" : string , "value" : string } Fields key string value string SecondaryBootDisk JSON representation { "mode" : enum ( Mode ) , "diskImage" : string } Fields mode enum ( Mode ) Disk mode (container image cache, etc.) diskImage string Fully-qualified resource ID for an existing disk image.

