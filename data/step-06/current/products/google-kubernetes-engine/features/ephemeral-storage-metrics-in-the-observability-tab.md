---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.800Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Ephemeral storage metrics in the Observability tab"
feature_slug: "ephemeral-storage-metrics-in-the-observability-tab"
latest_feature_date: "2023-05-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics"
keywords:
  - "ephemeral"
  - "storage"
  - "metrics"
  - "observability"
  - "tab"
  - "gke"
  - "clusters"
  - "now"
---

# Ephemeral storage metrics in the Observability tab

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The Observability tab for GKE clusters now includes ephemeral storage metrics.

## Extended Definition

The Observability tab for GKE clusters now includes ephemeral storage metrics.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- NodeConfig JSON representation { "machineType" : string , "diskSizeGb" : integer , "oauthScopes" : [ string ] , "serviceAccount" : string , "metadata" : { string : string , ... } , "imageType" : string , "labels" : { string : string , ... } , "localSsdCount" : integer , "tags" : [ string ] , "preemptible" : boolean , "accelerators" : [ { object ( AcceleratorConfig ) } ] , "diskType" : string , "minCpuPlatform" : string , "workloadMetadataConfig" : { object ( WorkloadMetadataConfig ) } , "taints" : [ { object ( NodeTaint ) } ] , "sandboxConfig" : { object ( SandboxConfig ) } , "nodeGroup" : string , "reservationAffinity" : { object ( ReservationAffinity ) } , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "linuxNodeConfig" : { object ( LinuxNodeConfig ) } , "kubeletConfig" : { object ( NodeKubeletConfig ) } , "bootDiskKmsKey" : string , "gcfsConfig" : { object ( GcfsConfig ) } , "advancedMachineFeatures" : { object ( AdvancedMachineFeatures ) } , "gvnic" : { object ( VirtualNIC ) } , "spot" : boolean , "confidentialNodes" : { object ( ConfidentialNodes ) } , "resourceLabels" : { string : string , ... } , "loggingConfig" : { object ( NodePoolLoggingConfig ) } , "windowsNodeConfig" : { object ( WindowsNodeConfig ) } , "localNvmeSsdBlockConfig" : { object ( LocalNvmeSsdBlockConfig ) } , "ephemeralStorageLocalSsdConfig" : { object ( EphemeralStorageLocalSsdConfig ) } , "soleTenantConfig" : { object ( SoleTenantConfig ) } , "containerdConfig" : { object ( ContainerdConfig ) } , "resourceManagerTags" : { object ( ResourceManagerTags ) } , "enableConfidentialStorage" : boolean , "secondaryBootDisks" : [ { object ( SecondaryBootDisk ) } ] , "storagePools" : [ string ] , "maxRunDuration" : string , "effectiveCgroupMode" : enum ( EffectiveCgroupMode ) , "bootDisk" : { object ( BootDisk ) } , "consolidationDelay" : string , // Union field fast socket can be only one of the following: "fastSocket" : { object ( FastSocket ) } // End of list of possible types for union field fast socket . // Union field secondary boot disk update strategy can be only one of the // following: "secondaryBootDiskUpdateStrategy" : { object ( SecondaryBootDiskUpdateStrategy ) } // End of list of possible types for union field // secondary boot disk update strategy . // Union field gpu direct config can be only one of the following: "gpuDirectConfig" : { object ( GPUDirectConfig ) } // End of list of possible types for union field gpu direct config . // Union field local ssd encryption mode can be only one of the following: "localSsdEncryptionMode" : enum ( LocalSsdEncryptionMode ) // End of list of possible types for union field local ssd encryption mode . // Union field flex start can be only one of the following: "flexStart" : boolean // End of list of possible types for union field flex start . // Union field taint config can be only one of the following: "taintConfig" : { object ( TaintConfig ) } // End of list of possible types for union field taint config . } Fields machineType string The name of a Google Compute Engine machine type If unspecified, the default machine type is e2-medium . diskSizeGb integer Size of the disk attached to each node, specified in GB.
- AdvancedDatapathObservabilityConfig JSON representation { "enableMetrics" : boolean , "relayMode" : enum ( RelayMode ) , // Union field enable relay can be only one of the following: "enableRelay" : boolean // End of list of possible types for union field enable relay . } Fields enableMetrics boolean Expose flow metrics on nodes relayMode enum ( RelayMode ) Method used to make Relay available Union field enable relay . enable relay can be only one of the following: enableRelay boolean Enable Relay component NodePoolAutoConfig JSON representation { "networkTags" : { object ( NetworkTags ) } , "resourceManagerTags" : { object ( ResourceManagerTags ) } , "nodeKubeletConfig" : { object ( NodeKubeletConfig ) } , "linuxNodeConfig" : { object ( LinuxNodeConfig ) } } Fields networkTags object ( NetworkTags ) The list of instance tags applied to all nodes.
- All the nodes in the node pool will be Confidential VM once enabled. resourceLabels map (key: string, value: string) The resource labels for the node pool to use to annotate any related Google Compute Engine resources. loggingConfig object ( NodePoolLoggingConfig ) Logging configuration. windowsNodeConfig object ( WindowsNodeConfig ) Parameters that can be configured on Windows nodes. localNvmeSsdBlockConfig object ( LocalNvmeSsdBlockConfig ) Parameters for using raw-block Local NVMe SSDs. ephemeralStorageLocalSsdConfig object ( EphemeralStorageLocalSsdConfig ) Parameters for the node ephemeral storage using Local SSDs.
- If unspecified, ephemeral storage is backed by the boot disk. soleTenantConfig object ( SoleTenantConfig ) Parameters for node pools to be backed by shared sole tenant node groups. containerdConfig object ( ContainerdConfig ) Parameters for containerd customization. resourceManagerTags object ( ResourceManagerTags ) A map of resource manager tag keys and values to be attached to the nodes. enableConfidentialStorage boolean Optional.

### "Collect and view control plane metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- To enable control plane metrics from the Observability tab for the cluster, do the following: In the Google Cloud console, go to the Kubernetes clusters page: Go to Kubernetes clusters If you use the search bar to find this page, then select the result whose subheading is Kubernetes Engine .
- PromQL metric name Launch stage Cloud Monitoring metric name Kind, Type, Unit Monitored resources Required GKE version Description Labels apiserver current inflight requests GA apiserver current inflight requests/gauge Gauge , Double , 1 prometheus target 1.22.13+ Maximal number of currently used inflight request limit of this apiserver per request kind in last second. request kind apiserver flowcontrol current executing seats BETA apiserver flowcontrol current executing seats/gauge Gauge , Double , 1 prometheus target 1.28.3+ Concurrency (number of seats) occupied by the currently executing (initial stage for a WATCH, any stage otherwise) requests in the API Priority and Fairness subsystem. flow schema priority level apiserver flowcontrol current inqueue requests BETA apiserver flowcontrol current inqueue requests/gauge Gauge , Double , 1 prometheus target 1.28.3+ (1.25.16-gke.1360000+, 1.26.11+, 1.27.8+ for prior minor versions) Number of requests currently pending in queues of the API Priority and Fairness subsystem. flow schema priority level apiserver flowcontrol nominal limit seats BETA apiserver flowcontrol nominal limit seats/gauge Gauge , Double , 1 prometheus target 1.28.3+ (1.26.11+, 1.27.8+ for prior minor versions) Nominal number of execution seats configured for each priority level. priority level apiserver flowcontrol rejected requests total BETA apiserver flowcontrol rejected requests total/counter Cumulative , Double , 1 prometheus target 1.28.3+ (1.25.16-gke.1360000+, 1.26.11+, 1.27.8+ for prior minor versions) Number of requests rejected by the API Priority and Fairness subsystem. flow schema priority level reason apiserver flowcontrol request wait duration seconds BETA apiserver flowcontrol request wait duration seconds/histogram Cumulative , Distribution , s prometheus target 1.28.3+ (1.25.16-gke.1360000+, 1.26.11+, 1.27.8+ for prior minor versions) Length of time a request spent waiting in its queue. execute flow schema priority level apiserver request duration seconds GA apiserver request duration seconds/histogram Cumulative , Distribution , s prometheus target 1.23.6+ Response latency distribution in seconds for each verb, dry run value, group, version, resource, subresource, scope and component. component dry run group resource scope subresource verb version apiserver request total GA apiserver request total/counter Cumulative , Double , 1 prometheus target 1.22.13+ Counter of apiserver requests broken out for each verb, dry run value, group, version, resource, scope, component, and HTTP response code. code component dry run group resource scope subresource verb version apiserver response sizes GA apiserver response sizes/histogram Cumulative , Distribution , 1 prometheus target 1.22.13+ Response size distribution in bytes for each group, version, verb, resource, subresource, scope and component. component group resource scope subresource verb version apiserver storage objects GA apiserver storage objects/gauge Gauge , Double , 1 prometheus target 1.22.13+ Number of stored objects at the time of last check split by kind. resource apiserver admission controller admission duration seconds GA apiserver admission controller admission duration seconds/histogram Cumulative , Distribution , s prometheus target 1.23.6+ Admission controller latency histogram in seconds, identified by name and broken out for each operation and API resource and type (validate or admit). name operation rejected type apiserver admission step admission duration seconds GA apiserver admission step admission duration seconds/histogram Cumulative , Distribution , s prometheus target 1.22.13+ Admission sub-step latency histogram in seconds, broken out for each operation and API resource and step type (validate or admit). operation rejected type apiserver admission webhook admission duration seconds GA apiserver admission webhook admission duration seconds/histogram Cumulative , Distribution , s prometheus target 1.22.13+ Admission webhook latency histogram in seconds, identified by name and broken out for each operation and API resource and type (validate or admit). name operation rejected type This following sections provide additional information about the API server metrics. apiserver request duration seconds Use this metric to monitor latency in the API server.
- For example, to measure the API server traffic per instance of the Kubernetes control plane, use the following PromQL query: sum by (instance) (increase(apiserver request total{cluster=" CLUSTER NAME "}[1m])) To query the unsuccessful requests, filter the code label for 4xx and 5xx values by using the following PromQL query: sum(rate(apiserver request total{code= "[45].."}[5m])) To query the successful requests, filter the code label for 2xx values by using the following PromQL query: sum(rate(apiserver request total{code= "2.."}[5m])) To query the rejected requests by the API server per instance of the Kubernetes control plane, filter the code label for the value 429 ( http.StatusTooManyRequests ) by using the following PromQL query: sum by (instance) (increase(apiserver request total{cluster=" CLUSTER NAME ", code="429"}[1m])) Saturation You can measure the saturation in your system by using the apiserver current inflight requests and apiserver storage objects metrics.
- Click Save Changes . gcloud Update your cluster to collect metrics emitted by the Kubernetes API server, Scheduler, and Controller Manager: gcloud container clusters update CLUSTER NAME \ --location = COMPUTE LOCATION \ --monitoring = SYSTEM,API SERVER,SCHEDULER,CONTROLLER MANAGER Replace the following: CLUSTER NAME : the name of the cluster.

### "Collect and view kube state metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Click Save Changes . gcloud Update your cluster to collect metrics: gcloud container clusters update CLUSTER NAME \ --location = COMPUTE LOCATION \ --enable-managed-prometheus \ --monitoring = SYSTEM,DAEMONSET,DEPLOYMENT,HPA,POD,STATEFULSET,STORAGE Replace the following: CLUSTER NAME : the name of the existing cluster.
- To enable kube state metrics from the Observability tab for a cluster, do the following: In the Google Cloud console, go to the Kubernetes clusters page: Go to Kubernetes clusters If you use the search bar to find this page, then select the result whose subheading is Kubernetes Engine .
- Starting with version 1.32.1-gke.1357001, the JobSet metrics package is enabled by default on newly created GKE Standard and Autopilot clusters. kube jobset restarts metric is available in 1.32 clusters starting from 1.32.4-gke.1767000 and in 1.33 clusters starting from 1.33.0-gke.1868000.
- To configure kube state metrics from the Details tab for the cluster, do the following: In the Google Cloud console, go to the Kubernetes clusters page: Go to Kubernetes clusters If you use the search bar to find this page, then select the result whose subheading is Kubernetes Engine .

