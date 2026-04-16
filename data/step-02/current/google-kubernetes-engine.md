# Google Kubernetes Engine

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 526
Unique features: 581

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-25 | Control plane auto-upgrade disruption budget |  | GKE lets you control control plane auto-upgrade disruption frequency by setting a cluster disruption budget. |
| 2026-03-25 | Control plane patch version support |  | GKE can keep an existing control plane patch version available longer to support large-scale upgrade and downgrade operations. |
| 2026-03-13 | Autopilot privileged workloads |  | GKE Autopilot lets administrators control which privileged partner workloads can run and lets approved customers use custom allowlists for their own privileged workloads. |
| 2026-03-10 | Managed OpenTelemetry for GKE |  | GKE provides a managed in-cluster OTLP endpoint and automatic instrumentation to route traces, metrics, and logs to the Cloud Telemetry API. |
| 2026-03-05 | Automated Hyperdisk disk type selection |  | GKE automatically selects Hyperdisk or Persistent Disk based on the node machine type when provisioning volumes. |
| 2026-03-05 | GKE Inference Gateway |  | GKE Inference Gateway adds llm-d-based inference scheduling to GKE model serving workflows; GKE Inference Gateway is generally available for production inference workloads. |
| 2026-03-05 | H4D machine series |  | The H4D machine series provides HPC-optimized GKE nodes with AMD EPYC Turin CPUs and 200 Gbps RDMA networking. |
| 2026-02-24 | C4A bare metal machine type |  | GKE Standard clusters can create bare metal nodes with the c4a-highmem-96-metal machine type from the C4A series. |
| 2026-02-13 | TPU slice and partition system metrics |  | GKE exposes beta system metrics for TPU slice state and partition health. |
| 2026-02-05 | Image streaming |  | Image streaming is available in the asia-southeast3 region. |
| 2026-02-03 | Image streaming for Ubuntu with containerd |  | Image streaming is generally available for Ubuntu with containerd nodes on GKE. |
| 2026-02-03 | Secondary boot disks for Ubuntu with containerd |  | Secondary boot disks are generally available for Ubuntu with containerd nodes on GKE. |
| 2026-01-27 | SCTP support on GKE Dataplane V2 |  | GKE Dataplane V2 supports SCTP traffic for Pod-to-Pod and Pod-to-Service communication on Standard clusters. |
| 2026-01-26 | N4A machine series on GKE |  | The N4A machine series is available for GKE clusters in both Autopilot and Standard modes. |
| 2026-01-21 | Kubernetes JobSet assignment metrics |  | GKE provides system metrics that show which node pools and nodes are running Pods for a Kubernetes JobSet. |
| 2026-01-07 | NodeLocal DNSCache |  | NodeLocal DNSCache is enabled by default on new Standard GKE clusters running version 1.34.1-gke.3720000 or later; NodeLocal DNSCache provides node-local DNS caching for GKE clusters. |
| 2025-12-29 | cgroup v1 support on GKE | 2025-12-29 | GKE is removing cgroup v1 support, and upgrades are blocked until clusters are configured to use cgroup v2; deprecated on 2025-12-29. |
| 2025-12-29 | In-place Pod Resize |  | In-place Pod Resize lets you change Pod CPU and memory requests and limits without restarting Pods or containers; In-Place Pod Resize now supports decreasing memory limits with best-effort OOM protection and improved deferred resize retries. |
| 2025-12-29 | Kubernetes Service trafficDistribution PreferClose value | 2025-12-29 | The PreferClose value for a Kubernetes Service trafficDistribution field is deprecated in favor of PreferSameZone; deprecated on 2025-12-29. |
| 2025-12-29 | Writable cgroups for containers |  | Writable cgroups let workloads manage child-process resources with the Linux cgroups API for improved reliability. |
| 2025-12-19 | Rollout sequencing with custom stages |  | Rollout sequencing with custom stages provides granular control over upgrading groups of clusters within a fleet. |
| 2025-12-15 | N4A machine series on GKE Autopilot |  | GKE Autopilot supports N4A machine types on clusters running version 1.34.1-gke.3403001 or later. |
| 2025-12-10 | Secure tags for firewalls in ComputeClasses |  | You can specify secure tags in ComputeClasses so GKE adds them to created nodes for firewall targeting. |
| 2025-12-03 | API key authentication for GKE Inference Gateway |  | GKE Inference Gateway can validate API keys through an Apigee integration. |
| 2025-12-03 | Body-based routing for GKE Inference Gateway |  | GKE Inference Gateway can route requests using the model field in the HTTP request body. |
| 2025-12-03 | Inference Gateway v1 API |  | The Inference Gateway API has graduated to v1 and now uses the InferenceObjective resource. |
| 2025-12-03 | Prefix-Aware Routing |  | Prefix-Aware Routing sends requests with shared prefixes to the same model replica to improve cache hits and latency. |
| 2025-11-27 | TPU7x (Ironwood) on GKE |  | TPU7x is available in Preview for supported GKE Standard and Autopilot clusters. |
| 2025-11-24 | Fast-starting nodes |  | GKE can provision compatible Autopilot workloads on fast-starting nodes on a best-effort basis to reduce startup time; GKE now provisions fast-starting nodes in Autopilot mode for compatible G2 workloads with NVIDIA L4 GPUs. |
| 2025-11-17 | Coherent Driver-Based Memory Management |  | CDMM lets GPU memory be managed by the driver instead of the operating system and is enabled by default on supported A4X nodes. |
| 2025-11-11 | N4D machine family |  | The N4D machine family is generally available for Standard and Autopilot clusters and uses fifth-generation AMD EPYC SP5 processors. |
| 2025-11-07 | Anonymous authentication for cluster endpoints |  | New GKE clusters on version 1.35 and later reject anonymous requests to cluster endpoints by default except for health check endpoints. |
| 2025-11-07 | Concurrent node pool auto-creation |  | GKE can auto-create multiple node pools concurrently to make multiple new node pools ready faster. |
| 2025-11-07 | GKE logging agent |  | In GKE 1.34.1-gke.2037001 and later, the logging agent processes logs faster per node and uses fewer node resources. |
| 2025-10-31 | Multi-cluster Services |  | GKE adds a finalizer to Multi-Cluster Services to improve disablement cleanup and reduce the risk of resource leaks; Provides a Kubernetes-native interface for making services discoverable and accessible across multiple clusters. |
| 2025-10-28 | Autoscaled blue-green upgrades |  | Autoscaled blue-green upgrades are a node upgrade strategy for GKE Standard node pools that delays disruption while minimizing cost. |
| 2025-10-28 | G4 VM |  | G4 VMs can be used with GKE Autopilot starting in version 1.34.1-gke.1829001 or later; G4 VMs are generally available on GKE with NVIDIA RTX PRO 6000 Blackwell Server Edition GPUs and the AMD EPYC Turin CPU platform. |
| 2025-10-09 | Additional subnets for VPC-native clusters |  | Additional subnets let VPC-native clusters create new node pools whose node and Pod IPv4 addresses come from the added subnet ranges. |
| 2025-10-09 | AI model deployment observability |  | The Google Cloud console can show AI model deployment details, logs, and observability dashboards for deployments on GKE clusters. |
| 2025-10-09 | Automatic IP address management |  | Automatic IP address management dynamically adds or removes IP ranges for nodes and Pods as a GKE cluster scales. |
| 2025-10-09 | Network Service Tiers |  | Network Service Tiers let you choose Standard Tier or Premium Tier for external traffic to GKE Services. |
| 2025-10-07 | GatewayClass network tier configuration |  | You can specify the Standard or Premium network tier for ephemeral IP addresses used by the gke-l7-regional-external-managed-mc GatewayClass. |
| 2025-10-01 | Cluster Autoscaler graceful node drain timeout |  | Cluster Autoscaler now supports a longer graceful node drain timeout, increasing the limit from 10 minutes to 1 hour. |
| 2025-10-01 | Vertical Pod Autoscaler InPlaceOrRecreate mode |  | Vertical Pod Autoscaler can now adjust workload resources in place without requiring Pod recreation. |
| 2025-09-29 | GKE node service agent |  | GKE now uses a dedicated node service agent for logging and monitoring on GKE nodes to improve workload isolation. |
| 2025-09-25 | ComputeClass auto-created node pools |  | GKE can now auto-create node pools with ComputeClasses without requiring cluster-wide node auto-provisioning. |
| 2025-09-25 | Container-optimized compute platform |  | GKE Standard clusters can now use the container-optimized compute platform features associated with Autopilot. |
| 2025-09-25 | Fully managed nodes |  | GKE Standard clusters can now use fully managed nodes associated with Autopilot features. |
| 2025-09-11 | A4X accelerator-optimized VM |  | The A4X accelerator-optimized VM is now generally available on GKE for AI, machine learning, and high-performance computing workloads. |
| 2025-09-08 | ComputeClass sysctl configuration |  | ComputeClass now supports additional sysctl settings for configuring kernel, networking, memory, and filesystem parameters. |
| 2025-09-04 | DRA Admin access |  | The Admin access feature for Dynamic Resource Allocation is now in beta and enabled by default. |
| 2025-09-04 | DRA Prioritized list |  | The Prioritized list feature for Dynamic Resource Allocation is now in beta and enabled by default. |
| 2025-09-04 | Dynamic Resource Allocation (DRA) APIs |  | Dynamic Resource Allocation APIs are now generally available for Kubernetes workloads that need structured resource allocation. |
| 2025-09-04 | GKE alpha cluster feature gates |  | GKE alpha clusters now enable all alpha and default beta feature gates, and you can modify those gates from their default values. |
| 2025-09-04 | GKE Dataplane V2 CNI path updates |  | GKE Dataplane V2 changes its CNI path by removing the ptp plugin and moving CNI configuration into the anetd cni-writer container. |
| 2025-09-04 | Kubelet DRA resource status reporting |  | The kubelet API can now report status on resources allocated through Dynamic Resource Allocation. |
| 2025-09-04 | Kubelet-DRA v1beta1 gRPC API | 2025-09-04 | The v1beta1 gRPC API between the kubelet and DRA drivers is deprecated in favor of the v1 API; deprecated on 2025-09-04. |
| 2025-09-04 | Pod sleep action |  | The Pod preStop Sleep Action is now generally available to delay Pod termination for graceful shutdown. |
| 2025-09-04 | Streaming list response encoding |  | Streaming list response encoding is now generally available for more efficient handling of large object collections; The API server can stream list responses for large object collections to improve reliability and performance. |
| 2025-09-03 | Confidential GKE Nodes with ComputeClasses |  | ComputeClasses can provision Confidential GKE Nodes with any supported Confidential Computing type. |
| 2025-08-28 | GPU workloads on Confidential GKE Nodes |  | Confidential GKE Nodes can run A3 High GPU workloads with NVIDIA H100 GPUs using manual or automatic driver installation; GKE supports running GPU workloads on Confidential GKE Nodes with A3 High machine types and NVIDIA H100 GPUs. |
| 2025-08-25 | Horizontal Pod Autoscaler re-architecture |  | The Horizontal Pod Autoscaler in GKE was re-architected for a consistent 15-second recalculation period and support for up to 5,000 HPA objects per cluster; The Horizontal Pod Autoscaler in GKE was re-architected for a consistent 15-second recalculation period and support for up to 5,000 HPA objects per cluster. |
| 2025-08-21 | GatewayClass network service tier for ephemeral IP addresses |  | The gke-l7-regional-external-managed GatewayClass can use Standard or Premium network service tiers for ephemeral IP addresses; The gke-l7-regional-external-managed GatewayClass can use Standard or Premium network service tiers for ephemeral IP addresses. |
| 2025-08-21 | M4 machine series in GKE Autopilot |  | The M4 machine series is generally available in GKE Autopilot clusters; The M4 machine series is generally available in GKE Autopilot clusters. |
| 2025-08-15 | Accelerated patch auto-upgrades |  | Release channels can receive patch versions as soon as they are available, before they become auto-upgrade targets; Release channels can receive patch versions as soon as they are available, before they become auto-upgrade targets. |
| 2025-08-15 | Custom sysctl configuration |  | Extended channel clusters can use customized sysctl configuration options. |
| 2025-08-15 | Customized sysctl configuration options in the Extended channel |  | Clusters enrolled in the Extended channel can use customized sysctl configuration options. |
| 2025-08-15 | Gateway |  | Gateway is supported for Extended channel clusters running GKE version 1.30 or later. |
| 2025-08-15 | Gateway support in the Extended channel |  | Clusters enrolled in the Extended channel can use Gateway with GKE version 1.30 or later. |
| 2025-08-14 | Default compute class |  | GKE clusters can be configured with a default compute class in GKE version 1.33.1-gke.1744000 or later; GKE clusters can be configured with a default compute class in GKE version 1.33.1-gke.1744000 or later. |
| 2025-08-12 | KubeRay Operator add-on logs |  | KubeRay Operator add-on logs are available by default in Cloud Logging when the Ray operator add-on is enabled in GKE; KubeRay Operator add-on logs are available by default in Cloud Logging when the Ray operator add-on is enabled in GKE. |
| 2025-08-12 | Performance HorizontalPodAutoscaler profile |  | The Performance HorizontalPodAutoscaler profile is enabled by default for qualifying GKE Standard clusters and improves HPA responsiveness and scalability; The Performance HorizontalPodAutoscaler profile is enabled by default for qualifying GKE Standard clusters and improves HPA responsiveness and scalability. |
| 2025-08-08 | C4 machine series with Local SSD |  | C4 machine types with Local SSD storage are generally available for GKE Standard and available in Autopilot from GKE version 1.33.1-gke.1545000; C4 machine types with Local SSD storage are generally available for GKE Standard and available in Autopilot from GKE version 1.33.1-gke.1545000. |
| 2025-08-08 | Node system configuration customization |  | GKE now supports additional kubelet, sysctl, and Linux configuration options for customizing node system settings; GKE now supports additional kubelet, sysctl, and Linux configuration options for customizing node system settings. |
| 2025-08-05 | M4 machine series |  | The M4 machine series is generally available in GKE Standard clusters; The M4 machine series is available for use in GKE Standard clusters. |
| 2025-07-28 | Compute classes collection scheduling for TPU node pools |  | Compute classes can configure collection scheduling for single-host and multi-host TPU node pools; Compute classes can configure collection scheduling for single-host and multi-host TPU node pools. |
| 2025-07-28 | Compute classes reservationSubBlock field |  | Compute classes can target specific reservation sub-blocks within a reservation block; Compute classes can target specific reservation sub-blocks within a reservation block. |
| 2025-07-28 | GKE Gateway controller Gateway API v1.3 CRD support |  | The GKE Gateway controller supports Gateway API v1.3 custom resource definitions; The GKE Gateway controller supports Gateway API v1.3 custom resource definitions. |
| 2025-07-21 | Compute classes node labels |  | Compute classes can apply Kubernetes labels to all nodes created for that compute class; Compute classes can apply Kubernetes labels to all nodes created for that compute class. |
| 2025-06-25 | C4D machine series |  | The C4D machine series is available in GKE with support across Standard and Autopilot clusters. |
| 2025-06-16 | Cluster autoscaler eviction of kube-system Pods without a PDB |  | The cluster autoscaler can scale down nodes by evicting eligible kube-system Pods that have no Pod Disruption Budget. |
| 2025-06-10 | Flex-start TPU support for single-host node pools |  | Flex-start provisioning mode supports TPUs in single-host node pools. |
| 2025-06-10 | Kubernetes-native sidecar container resource metrics |  | GKE reports CPU and memory requests and limits metrics for Kubernetes-native sidecar containers. |
| 2025-05-30 | etcd cluster state size recommendations |  | GKE provides insights and recommendations to identify clusters whose etcd cluster state database size is approaching the limit. |
| 2025-05-27 | Confidential GKE Nodes with Intel TDX and AMD SEV-SNP |  | Confidential GKE Nodes can use Intel TDX and AMD SEV-SNP to protect workload data in use. |
| 2025-05-23 | GKE security posture dashboard threat insights |  | The GKE security posture dashboard uses Security Command Center to show the top threats affecting GKE workloads. |
| 2025-05-20 | Autopilot general-purpose container-optimized compute platform |  | GKE uses a container-optimized compute platform for the general-purpose Autopilot compute class. |
| 2025-05-13 | Custom Resource Definition certificate authority bundle recommendations |  | GKE provides insights and recommendations to identify clusters whose Custom Resource Definitions contain an invalid or malformed Certificate Authority bundle. |
| 2025-05-12 | Hyperdisk Balanced High Availability volume provisioning |  | The Compute Engine persistent disk CSI Driver can provision Hyperdisk Balanced High Availability volumes in multiple access modes. |
| 2025-05-09 | Dynamic Resource Allocation v1beta2 APIs |  | GKE makes v1beta2 Dynamic Resource Allocation APIs available with opt-in support. |
| 2025-05-09 | gitRepo volume driver | 2025-05-09 | The gitRepo volume driver clones a Git repository into a volume for use by a Pod; deprecated on 2025-05-09. |
| 2025-05-09 | Multiple Service CIDRs |  | Cluster administrators can add ServiceCIDR objects to expand the address space for ClusterIP Services; GKE added beta APIs that enable the Multiple Service CIDRs Kubernetes feature in clusters running Kubernetes 1.31. |
| 2025-05-09 | Node API status.nodeInfo.kubeProxyVersion field | 2025-05-09 | The Node API exposes the status.nodeInfo.kubeProxyVersion field for node version reporting; The Node API field status.nodeInfo.kubeProxyVersion is deprecated and will stop being populated starting in Kubernetes v1.33; deprecated on 2025-05-09. |
| 2025-05-09 | Sidecar Containers |  | InitContainers with restartPolicy: Always start before application containers and remain running for the Pod lifecycle. |
| 2025-05-08 | ClusterProfile sync |  | ClusterProfile sync generates a cluster inventory for an existing fleet using the ClusterProfile specification. |
| 2025-05-08 | GKE Sandbox (gVisor) SYS_ADMIN privilege support |  | GKE Sandbox (gVisor) can be configured with SYS_ADMIN privileges in GKE Autopilot. |
| 2025-04-24 | Saxml on GKE | 2025-04-24 | Saxml on GKE is no longer being actively updated, though existing deployments continue to function without disruption; deprecated on 2025-04-24. |
| 2025-04-03 | Workload resource requests and limits insights |  | GKE provides insights and recommendations to identify workloads that lack CPU or memory requests or limits. |
| 2025-04-02 | Automatic application monitoring |  | Automatic application monitoring automatically collects metrics and provides out-of-the-box dashboards for supported workloads on GKE. |
| 2025-03-28 | nodeSystemConfig in GKE compute classes |  | The nodeSystemConfig field lets you customize kubelet and Linux kernel parameters in GKE compute classes. |
| 2025-03-28 | priorityDefaults in GKE compute classes |  | The priorityDefaults field lets you define default values for fields omitted in individual compute class rules. |
| 2025-03-21 | GKE TPU NodePool recovery time metric |  | This metric measures the distribution of recovery times for multi-host TPU node pools after downtime. |
| 2025-03-21 | JobSet interruption interval metric |  | This metric measures the distribution of time between interruptions for supported JobSets running on GPU or TPU nodes. |
| 2025-03-21 | JobSet recovery time metric |  | This metric measures the distribution of recovery times for supported JobSets after downtime. |
| 2025-03-21 | JobSet uptime metric |  | This metric measures the total time that supported JobSets have been available. |
| 2025-03-21 | Performance HPA profile |  | Autopilot clusters automatically use the Performance HPA Profile to speed up CPU and memory autoscaling; The Performance HPA profile is available in preview and speeds up HPA reaction time and recalculation for up to 1,000 HPA objects. |
| 2025-03-21 | Zonal Network Endpoint Group backends for external LoadBalancer Services |  | New backend service-based external LoadBalancer Services use zonal Network Endpoint Group backends by default. |
| 2025-03-14 | JobSet metrics |  | JobSet metrics are automatically available on supported new GKE Standard and Autopilot clusters and can be enabled on existing clusters. |
| 2025-03-07 | Horizontal Pod Autoscaler decision logging |  | GKE can log atomic and final Horizontal Pod Autoscaler recommendations in Cloud Logging for visibility into autoscaling decisions. |
| 2025-03-07 | Startup Latency dashboard |  | The Startup Latency dashboard helps monitor and troubleshoot startup latency for Kubernetes workloads and nodes in GKE. |
| 2025-02-28 | NODE_SA_MISSING_PERMISSIONS |  | This GKE Recommendations subtype identifies clusters whose node service accounts are missing IAM permissions needed for normal cluster operations. |
| 2025-02-27 | GKE Autopilot partner allowlists |  | This feature lets GKE Autopilot partners create and manage allowlists for specific partner workloads and install them in clusters. |
| 2025-02-25 | kubernetes.io/node_pool/multi_host/available |  | This metric reports whether all nodes in a multi-host TPU node pool are available. |
| 2025-02-25 | kubernetes.io/node_pool/status |  | This metric reports the current status of a node pool instance. |
| 2025-02-25 | kubernetes.io/node/status_condition |  | This metric reports a node's status condition from the node status condition field. |
| 2025-02-20 | GKE Managed NVIDIA DCGM Metrics Package |  | This feature provides curated NVIDIA GPU metrics for monitoring utilization, performance, and health in GKE. |
| 2025-02-20 | goog-gke-accelerator-type |  | This automatically applied node-pool label identifies the accelerator type used in the node pool. |
| 2025-02-20 | goog-gke-node-pool-provisioning-model |  | This automatically applied node-pool label identifies the provisioning model used by the node pool. |
| 2025-02-20 | goog-gke-tpu-node-pool-type |  | This automatically applied node-pool label identifies whether the TPU node pool is single-host or multi-host. |
| 2025-02-06 | Weighted load balancing for External LoadBalancer Services |  | This feature distributes traffic to nodes based on the number of serving Pods backing the Service; Weighted load balancing distributes traffic to nodes based on the number of serving Pods backing a GKE External LoadBalancer Service. |
| 2025-02-04 | Cluster notifications in Cloud Logging |  | This feature lets you receive GKE cluster notifications through Cloud Logging. |
| 2025-02-04 | Minor version at or near end of support cluster notification |  | This notification warns when a cluster is running a minor version that is at or near the end of support. |
| 2025-02-04 | Upgrade operation complete cluster notification |  | This notification is sent when a GKE upgrade operation completes. |
| 2025-01-30 | Supply chain concerns for Binary Authorization | 2025-01-28 | This preview posture-management feature surfaces supply-chain concerns related to Binary Authorization; deprecated on 2025-01-28. |
| 2025-01-23 | User-managed firewall rules for GKE LoadBalancer Services |  | This feature lets you configure user-managed firewall rules to control ingress traffic for GKE Services exposed with passthrough network load balancers. |
| 2025-01-21 | A3 Ultra VM support in GKE |  | This feature lets GKE run A3 Ultra VMs with NVIDIA H200 Tensor Core GPUs, including GPUDirect RDMA support on Standard clusters. |
| 2025-01-16 | CRI v1alpha2 API support | 2025-01-16 | This support is removed from GKE nodes running containerd 2.0; deprecated on 2025-01-16. |
| 2025-01-16 | Docker Schema 1 image support | 2025-01-16 | This support is removed from GKE nodes running containerd 2.0; deprecated on 2025-01-16. |
| 2024-12-17 | Dynamic Resource Allocation |  | Dynamic Resource Allocation graduated to beta and enables efficient scheduling of advanced device driver resources. |
| 2024-12-17 | Efficient API streaming |  | A more efficient API streaming mechanism graduated to beta and is enabled by default in the API server. |
| 2024-12-17 | Job API external controller management |  | The Job API support for external controller management graduated to beta and is enabled by default. |
| 2024-12-17 | Volume expansion failure recovery |  | Support for recovering from volume expansion failure graduated to beta and is enabled by default. |
| 2024-12-16 | Cloud DNS additive VPC scope |  | Cloud DNS additive VPC scope is generally available on GKE clusters and adds GKE headless service entries to a Cloud DNS private zone visible from VPC networks; Cloud DNS additive VPC scope lets GKE add headless Service entries to a Cloud DNS private zone visible from VPC networks. |
| 2024-12-16 | TPU Trillium |  | TPU Trillium is generally available for GKE Standard and Autopilot clusters in supported versions and zones. |
| 2024-12-13 | C4A local SSD support |  | Local SSD support for the C4A machine family is available in public preview. |
| 2024-12-13 | C4A machine family |  | The C4A machine family is generally available for GKE Standard and Autopilot clusters in supported versions. |
| 2024-12-13 | GKE insights and recommendations |  | GKE insights and recommendations help identify clusters that need version upgrades, version-skew fixes, or maintenance windows. |
| 2024-12-02 | Custom compute classes with Compute Engine reservations |  | Custom compute classes can automatically trigger Compute Engine reservation consumption during node creation. |
| 2024-11-27 | Cloud TPU Trillium machine types for Autopilot clusters |  | Cloud TPU Trillium (v6e) machine types are in public preview for GKE Autopilot clusters. |
| 2024-11-26 | C4 machine family autoscaling support |  | Cluster autoscaler and node auto-provisioning support the C4 machine family in GKE. |
| 2024-11-20 | Compact placement policy for node auto-provisioning |  | Node auto-provisioning can use a custom resource policy as a compact placement policy. |
| 2024-11-11 | DNS-based access for GKE control plane |  | Clusters get a unique DNS name or fully qualified domain name for control-plane access governed by IAM policies instead of bastion hosts or proxy nodes. |
| 2024-11-07 | GKE automatic application monitoring |  | Automatic application monitoring deploys PodMonitoring configurations for supported workloads and surfaces their metrics in Cloud Monitoring. |
| 2024-11-06 | GKE Volume Populator |  | GKE Volume Populator automates data transfer from a Cloud Storage bucket to a PersistentVolumeClaim backed by Parallelstore during provisioning. |
| 2024-11-05 | Cloud TPU v6e machine types in GKE |  | Cloud TPU v6e ct6e-standard machine types are available for supported GKE clusters in selected zones. |
| 2024-11-05 | Confidential Hyperdisk Balanced volumes |  | Hyperdisk Balanced volumes can be created in Confidential mode for custom boot disks and persistent volumes and attached to Confidential GKE Nodes. |
| 2024-10-31 | Cloud TPU v3 machine types in GKE |  | Cloud TPU v3 ct3-hightpu-4t and ct3p-hightpu-4t machine types are generally available for supported GKE clusters in selected zones. |
| 2024-10-31 | GKE control plane authority |  | GKE control plane authority adds visibility, security controls, and customization for the GKE control plane. |
| 2024-10-29 | GKE HPA recommendation scale latency metric |  | This Cloud Monitoring metric measures horizontal pod autoscaling recommendation latency from metric creation to the applied scaling recommendation. |
| 2024-10-29 | GKE node startup latency metric |  | This Cloud Monitoring metric measures node startup latency from GCE instance creation to the first Kubernetes Node Ready state. |
| 2024-10-29 | GKE pod first ready latency metric |  | This Cloud Monitoring metric measures pod end-to-end startup latency from Pod creation to Ready, including image pulls. |
| 2024-10-28 | A3 Edge H100 80GB GPU machine type |  | The a3-edgegpu-8g machine type with attached NVIDIA H100 80GB GPUs is available on GKE Standard clusters. |
| 2024-10-17 | GKE Gateway API v1.1.0 conformance |  | The GKE Gateway controller is now conformant to Gateway APIs v1.1.0. |
| 2024-10-17 | GKE Gateway controller Cloud Armor backend security policy support |  | The GKE Gateway controller now supports Cloud Armor backend security policies for internal Gateways. |
| 2024-10-17 | GKE Gateway controller ReferenceGrant support |  | The GKE Gateway controller now supports ReferenceGrant for Gateway API resources. |
| 2024-10-17 | GKE Gateway controller regional selection for regional multi-cluster Gateways |  | The GKE Gateway controller now supports regional selection for regional multi-cluster Gateways. |
| 2024-10-17 | GKE Gateway controller traffic-based autoscaling |  | The GKE Gateway controller now supports traffic-based autoscaling for single-cluster Gateways. |
| 2024-10-17 | NVIDIA H100 80GB GPUs on smaller A3 machine types |  | The a3-highgpu-1g, a3-highgpu-2g, and a3-highgpu-4g machine types support NVIDIA H100 80GB GPUs on GKE. |
| 2024-10-17 | TPU slice node shutdown notifications |  | GKE sends SIGTERM-based imminent shutdown notifications to TPU slice nodes so workloads can terminate gracefully. |
| 2024-10-15 | Multiple network interfaces for Pods |  | GKE Autopilot clusters can run workloads with multiple network interfaces. |
| 2024-10-04 | Ray Operator on GKE |  | Ray Operator on GKE is a GKE add-on for managing and scaling Ray applications; This GKE add-on lets you manage and scale Ray applications. |
| 2024-10-01 | GPU and TPU node disruption handling |  | GKE notifies workloads before GPU and TPU node shutdowns so they can terminate gracefully. |
| 2024-10-01 | Parallelstore CSI driver |  | GKE supports the Parallelstore CSI driver for attaching Parallelstore storage. |
| 2024-09-11 | Automatic NVIDIA GPU driver installation |  | GKE can automatically install the default NVIDIA GPU driver version for GPU node pools when no driver version is specified; GKE can automatically install NVIDIA GPU drivers on nodes without a DaemonSet starting in version 1.27.2-gke.1200. |
| 2024-08-27 | GKE Metrics Server addon-resizer placement |  | GKE moves the addon-resizer used by Metrics Server from worker nodes to the control plane in new and upgraded clusters. |
| 2024-08-21 | Hyperdisk ML support |  | GKE supports Hyperdisk ML as an attached persistent disk option for Autopilot and Standard clusters. |
| 2024-08-20 | Always Honor PersistentVolume Reclaim Policy |  | This feature makes PersistentVolumes always honor their reclaim policy; This feature makes PersistentVolumes always honor their reclaim policy. |
| 2024-08-20 | API Priority and Fairness v1beta3 | 2024-08-20 | GKE deprecated the v1beta3 FlowSchema and PriorityLevelConfiguration APIs in favor of v1; GKE deprecated the v1beta3 FlowSchema and PriorityLevelConfiguration APIs in favor of v1; deprecated on 2024-08-20. |
| 2024-08-20 | C4 machine family |  | This machine family is generally available for GKE Standard and Autopilot in the listed versions. |
| 2024-08-20 | Field selectors for custom resources |  | This feature adds beta, default-on field selectors for custom resources; This feature adds beta, default-on field selectors for custom resources. |
| 2024-08-20 | Job success/completion policy |  | This feature adds beta, default-on success and completion policy for Jobs; This feature adds beta, default-on success and completion policy for Jobs. |
| 2024-08-20 | kubectl SPDY-to-WebSockets transition |  | This feature transitions kubectl from SPDY to WebSockets with beta, default-on support; This feature transitions kubectl from SPDY to WebSockets with beta, default-on support. |
| 2024-08-20 | matchLabelKeys and mismatchLabelKeys for Pod affinity and anti-affinity |  | This feature adds beta, default-on matchLabelKeys and mismatchLabelKeys support for Pod affinity and anti-affinity; This feature adds beta, default-on matchLabelKeys and mismatchLabelKeys support for Pod affinity and anti-affinity. |
| 2024-08-20 | Node kubeProxyVersion field | 2024-08-20 | GKE will stop populating the status.nodeInfo.kubeProxyVersion field in Node objects; GKE will stop populating the status.nodeInfo.kubeProxyVersion field in Node objects; deprecated on 2024-08-20. |
| 2024-08-20 | procMount security context option |  | This feature adds a beta, default-on procMount option in the security context; This feature adds a beta, default-on procMount option in the security context. |
| 2024-08-20 | Recursive read-only mounts |  | This feature adds beta, default-on recursive read-only mounts; This feature adds beta, default-on recursive read-only mounts. |
| 2024-08-20 | Service traffic distribution |  | This feature adds beta, default-on traffic distribution for Services; This feature adds beta, default-on traffic distribution for Services. |
| 2024-08-13 | Custom compute classes |  | This feature provides an API for fine-grained control over fallback compute priorities, autoscaling, obtainability, and node consolidation. |
| 2024-08-06 | Extended release channel |  | This release channel lets GKE Standard clusters stay on a minor version longer and receive security patches during extended support; This release channel lets GKE Standard clusters stay on a minor version longer and receive security patches during extended support. |
| 2024-08-02 | NVIDIA GPU Operator on GKE |  | This feature lets you manage your GKE GPU stack with the NVIDIA GPU Operator on COS and Ubuntu node images. |
| 2024-08-01 | NCCL Fast Socket on GKE Autopilot |  | This feature enables NCCL Fast Socket for multi-GPU Autopilot workloads. |
| 2024-07-16 | Compute Flexible Committed Use Discounts for GKE Autopilot and Cloud Run |  | This feature expands Compute flexible committed use discounts to additional GKE Autopilot and Cloud Run SKUs. |
| 2024-07-16 | Legacy GKE Autopilot committed use discounts | 2024-10-15 | This legacy discount offering for GKE Autopilot is being removed from sale; deprecated on 2024-10-15. |
| 2024-07-03 | GKE Managed DCGM Metrics Package |  | This package exports curated DCGM GPU metrics from GKE-managed NVIDIA drivers to Cloud Monitoring and Managed Service for Prometheus. |
| 2024-07-03 | Secondary boot disks for node data and image preloading |  | New GKE nodes can preload data or container images from secondary boot disks to speed workload startup and autoscaling. |
| 2024-06-07 | Fully managed cAdvisor and kubelet metrics |  | GKE provides fully managed cAdvisor and kubelet metrics for supported clusters. |
| 2024-05-24 | Backup plan insights and recommendations |  | GKE surfaces backup-plan insights and recommendations for unprotected clusters older than seven days. |
| 2024-05-22 | C4 machine family for GKE Standard clusters |  | GKE Standard clusters can use the C4 machine family for node pools and cluster creation. |
| 2024-05-10 | Google-managed Service IP range for GKE Services |  | New Standard clusters can have Service IP addresses assigned from a Google-managed secondary range by default. |
| 2024-05-02 | Cloud Armor backend security policy support for Regional external Gateways |  | The GKE Gateway controller supports Cloud Armor backend security policies for Regional external Gateways. |
| 2024-05-02 | Gateway API CRDs v1.0.0 |  | The GKE Gateway controller supports Gateway API CRDs v1.0.0. |
| 2024-05-02 | Google-managed certificates with Certificate Manager for Regional internal and external Gateways |  | The GKE Gateway controller supports Google-managed certificates with Certificate Manager for Regional internal and external Gateways. |
| 2024-05-02 | scheduler_pod_scheduling_duration_seconds metric | 2024-05-02 | This control plane metric is deprecated and will be removed in GKE 1.30; deprecated on 2024-05-02. |
| 2024-05-02 | scheduler_pod_scheduling_sli_duration_seconds metric |  | This replacement control plane metric is exported in the GKE control plane metrics package. |
| 2024-05-02 | Self-managed certificates with Certificate Manager for Regional internal and external Gateways |  | The GKE Gateway controller supports self-managed certificates with Certificate Manager for Regional internal and external Gateways. |
| 2024-05-01 | CephFS volume plugin | 2024-05-01 | The CephFS volume plugin lets Kubernetes mount CephFS volumes and is deprecated in GKE 1.30; The CephFS volume plugin lets Kubernetes mount CephFS volumes and is deprecated in GKE 1.30; deprecated on 2024-05-01. |
| 2024-05-01 | RBD volume plugin | 2024-05-01 | The RBD volume plugin lets Kubernetes mount RBD volumes and is deprecated in GKE 1.30; The RBD volume plugin lets Kubernetes mount RBD volumes and is deprecated in GKE 1.30; deprecated on 2024-05-01. |
| 2024-05-01 | status.nodeInfo.kubeProxyVersion field in the Node API | 2024-05-01 | The Node API's status.nodeInfo.kubeProxyVersion field is deprecated and will no longer be populated; The Node API's status.nodeInfo.kubeProxyVersion field is deprecated and will no longer be populated; deprecated on 2024-05-01. |
| 2024-05-01 | ValidatingAdmissionPolicyBinding |  | ValidatingAdmissionPolicyBinding is a new admissionregistration.k8s.io/v1 API in Kubernetes 1.30. |
| 2024-05-01 | Validation Ratcheting |  | Validation Ratcheting is in beta and enabled by default to make CustomResourceDefinitions safer and easier to manage. |
| 2024-04-30 | Multiple GPU Pods per node in GKE Autopilot |  | GKE Autopilot can schedule multiple GPU Pods on a single node when using the Accelerator compute class. |
| 2024-04-30 | Private registry certificate configuration |  | GKE can use a containerd configuration file to access private image registries that use private certificates. |
| 2024-04-29 | Dual-stack LoadBalancer Services |  | Dual-stack LoadBalancer Services let GKE expose Services over IPv4, IPv6, or both in dual-stack clusters; Dual-stack LoadBalancer Services are available in Preview on GKE dual-stack clusters. |
| 2024-04-26 | GKE Sandbox with NVIDIA GPUs |  | GKE Sandbox supports NVIDIA GPUs on Standard and Autopilot clusters in public preview. |
| 2024-04-26 | Linux huge pages in GKE Pods |  | GKE can use the node system configuration file to enable and use Linux huge pages in Pods. |
| 2024-04-26 | Nested virtualization in GKE Standard clusters |  | GKE Standard clusters now support nested virtualization. |
| 2024-04-16 | Z3 machine family in GKE Standard |  | The Z3 machine family is generally available for GKE Standard clusters running version 1.25 and later. |
| 2024-04-12 | GPUDirect-TCPX |  | GPUDirect-TCPX support is available on supported GKE versions for GPU network acceleration. |
| 2024-04-10 | N4 machine family |  | The N4 machine family is available for GKE Standard clusters and node pools. |
| 2024-04-09 | Cloud TPU support on GKE Autopilot |  | Cloud TPU workloads are supported in GKE Autopilot clusters on supported versions. |
| 2024-04-05 | NVIDIA Multi-Process Service (MPS) |  | NVIDIA MPS lets multiple workloads share a single NVIDIA GPU accelerator. |
| 2024-04-03 | GKE compliance dashboard | 2025-01-28 | This preview dashboard provides compliance visibility for GKE clusters; The GKE compliance dashboard evaluates clusters against supported security and compliance benchmarks; deprecated on 2025-01-28. |
| 2024-04-03 | GKE threat detection | 2025-01-28 | This preview posture-management feature detects threat-related issues in GKE clusters; GKE threat detection shows control plane threats in the GKE security posture dashboard; deprecated on 2025-01-28. |
| 2024-04-02 | TPU metrics dashboard |  | The Observability tab includes a dashboard for TPU metrics on GKE clusters. |
| 2024-03-19 | Cilium cluster-wide network policies |  | Cilium cluster-wide network policies let administrators apply ingress and egress policies across namespaces. |
| 2024-03-11 | Opportunistic bursting and lower Pod minimums |  | GKE Autopilot can use opportunistic bursting and lower Pod minimums on supported clusters. |
| 2024-03-11 | Private Service Connect for GKE private clusters |  | GKE private clusters can use Private Service Connect for node-to-control-plane communication. |
| 2024-03-11 | Secret Manager add-on for GKE |  | The Secret Manager add-on mounts secrets from Secret Manager into Kubernetes Pods. |
| 2024-03-07 | Node data and container image preloading |  | New nodes can preload data or container images to speed workload deployment and autoscaling. |
| 2024-01-11 | FlowSchema v1beta2 API | 2024-01-11 | The v1beta2 FlowSchema API is removed in GKE 1.29 in favor of newer API versions; deprecated on 2024-01-11. |
| 2024-01-11 | Node status.nodeInfo.kubeProxyVersion field | 2024-01-11 | The Node status.nodeInfo.kubeProxyVersion field is deprecated and will stop being populated in GKE 1.33; The Node API's status.nodeInfo.kubeProxyVersion field is deprecated and will no longer be populated starting in version 1.33; deprecated on 2024-01-11. |
| 2024-01-11 | PriorityLevelConfiguration v1beta2 API | 2024-01-11 | The v1beta2 PriorityLevelConfiguration API is removed in GKE 1.29 in favor of newer API versions; deprecated on 2024-01-11. |
| 2024-01-11 | SHA-1-signed webhook backend certificates | 2024-01-11 | GKE no longer supports webhook backends that use TLS certificates signed with SHA-1; deprecated on 2024-01-11. |
| 2023-12-19 | vm.max_map_count sysctl configuration |  | GKE Standard node pools can use node system configuration to set the vm.max_map_count Linux kernel attribute. |
| 2023-12-18 | GKE NEG IPv6 endpoints |  | The GKE NEG controller can include IPv6 endpoints in NEGs for dual-stack Services. |
| 2023-12-18 | kube-state-metrics export to Managed Service for Prometheus |  | New Autopilot clusters automatically collect and send kube-state-metrics metrics to Managed Service for Prometheus. |
| 2023-12-15 | GPU metrics in the Observability tab |  | The cluster details and cluster list Observability tabs now show GPU metrics for clusters with GPU nodes. |
| 2023-11-29 | Autopilot node migration for DaemonSets |  | GKE Autopilot can detect nodes that cannot fit all DaemonSets and gradually migrate workloads to larger nodes. |
| 2023-11-29 | TPU reservations with node auto-provisioning |  | Workloads can use TPU reservations with node auto-provisioning in GKE 1.27.7 and later. |
| 2023-11-17 | L4 GPU support in Autopilot |  | GKE Autopilot clusters can run workloads on L4 GPUs in supported versions. |
| 2023-11-15 | Dynamic Workload Scheduler via Provisioning Request API |  | GKE Standard clusters can use Dynamic Workload Scheduler to obtain large atomic sets of available GPU models. |
| 2023-11-10 | Application performance metrics in the Observability tab |  | The GKE deployment Observability tab can display application performance metrics from supported sources. |
| 2023-11-09 | GKE Infrastructure Dashboards and Metrics Packages |  | GKE can export predefined managed kube-state-metrics data for workloads state and persistent storage to Cloud Monitoring and the Observability tab. |
| 2023-11-08 | Cloud TPU v5e machine types in GKE |  | GKE adds new inference-focused single-host TPU v5e machine types in selected zones; Cloud TPU v5e is generally available in GKE clusters running supported versions. |
| 2023-10-31 | GKE multi-cluster Gateway |  | GKE can use the Gateway API to manage Application Load Balancers for inbound traffic across a fleet of clusters. |
| 2023-10-20 | Resource Manager tags for GKE resources |  | The GKE API can apply Resource Manager tags to GKE resources and underlying Compute Engine VMs for selective firewall enforcement. |
| 2023-10-19 | Future reservations for GKE capacity |  | GKE can use future reservations to request compute capacity in advance for workloads. |
| 2023-10-16 | Filestore Enterprise backups on GKE |  | GKE can back up Filestore Enterprise data using Kubernetes volume snapshots. |
| 2023-10-13 | TPU memory bandwidth utilization metric |  | GKE adds a TPU usage metric for memory bandwidth utilization. |
| 2023-10-13 | TPU TensorCore utilization metric |  | GKE adds a TPU usage metric for TensorCore utilization. |
| 2023-10-09 | Local SSD default ephemeral storage |  | GKE uses Local SSD volumes as ephemeral storage by default on third-generation machine series and makes the Local NVMe SSD block count optional. |
| 2023-10-02 | Webhook insights and recommendations |  | GKE provides insights and recommendations for webhooks that intercept system resources or have no available endpoints. |
| 2023-09-21 | Customizable observability dashboards |  | GKE observability dashboards on the cluster list, cluster details, and workload list pages can be customized. |
| 2023-09-12 | TPU slice node auto-provisioning |  | GKE can automatically provision TPU node pools and multi-host TPU accelerators for Standard clusters running version 1.28 and later. |
| 2023-09-05 | FlowSchema API | 2023-09-05 | The FlowSchema API defines flow control resources for prioritizing Kubernetes API requests; The FlowSchema API defines flow control resources for prioritizing Kubernetes API requests; deprecated on 2023-09-05. |
| 2023-09-05 | PriorityLevelConfiguration API | 2023-09-05 | The PriorityLevelConfiguration API defines flow control priority level resources for Kubernetes API requests; The PriorityLevelConfiguration API defines flow control priority level resources for Kubernetes API requests; deprecated on 2023-09-05. |
| 2023-08-30 | Multi-network support for Pods |  | GKE can create nodes and workloads with multiple network interfaces, including high-performance interfaces directly attached to Pods. |
| 2023-08-30 | Parallel node pool operations |  | GKE can run operations such as node auto-provisioning and version upgrades on multiple node pools in parallel. |
| 2023-08-29 | Cloud TPU nodes in GKE |  | GKE can create and manage Cloud TPU nodes for AI workloads, including provisioning, scaling, scheduling, repairing, and upgrading. |
| 2023-08-29 | Cluster upgrade rollout sequencing |  | Sequences cluster upgrades across fleets or scopes. |
| 2023-08-25 | Disruption readiness insights |  | Provides insights and recommendations to help workloads stay ready for disruption, including guidance based on Pod Disruption Budgets. |
| 2023-08-17 | Kubernetes deprecation insights |  | Identifies clusters that use deprecated Kubernetes APIs removed in specific Kubernetes versions; GKE can identify clusters that use deprecated Kubernetes APIs removed in version 1.22. |
| 2023-08-16 | GKE infrastructure dashboards |  | Adds Observability tab dashboards for visualizing GKE infrastructure metrics for workload state and persistent storage. |
| 2023-08-16 | GKE metrics packages |  | Exports a predefined set of GKE-managed kube-state-metrics metrics to Cloud Monitoring for workload state and persistent storage. |
| 2023-08-16 | Interactive playbook dashboards |  | Provides Cloud Monitoring dashboards for troubleshooting container CPU and memory limit utilization in GKE. |
| 2023-08-09 | Filestore CSI driver multishare 10 GiB support |  | Supports smaller 10 GiB share sizes for Filestore multishares in GKE Enterprise instances. |
| 2023-08-02 | A100 80 GB GPU support in Autopilot |  | Allows workloads to run on A100 80 GB GPUs in GKE Autopilot clusters. |
| 2023-07-25 | Kubernetes control plane logs |  | Exports Kubernetes control plane logs from GKE Autopilot clusters to Cloud Logging; GKE can export Kubernetes control plane logs from the API server, scheduler, and controller manager to Cloud Logging. |
| 2023-07-25 | Kubernetes control plane metrics |  | Exports Kubernetes control plane metrics from GKE Autopilot clusters to Cloud Monitoring; GKE can export Kubernetes control plane metrics from the API server, scheduler, and controller manager to Cloud Monitoring. |
| 2023-07-24 | Extended duration Pods in Autopilot |  | Lets GKE Autopilot Pods run for longer durations when marked with the safe-to-evict=false annotation. |
| 2023-07-13 | Managed Cloud Storage FUSE CSI driver |  | Provides a managed Cloud Storage FUSE CSI driver for consuming Cloud Storage buckets from GKE workloads; The managed Cloud Storage FUSE CSI driver is available in Preview for GKE versions 1.26.3 and later. |
| 2023-07-12 | Beta APIs in GKE clusters |  | GKE disables new beta APIs by default in new clusters and allows them to be enabled on creation or later in GKE 1.27 and higher. |
| 2023-07-12 | GKE Dataplane V2 observability |  | Adds Dataplane V2 metrics and observability tools for GKE clusters. |
| 2023-07-11 | Cluster autoscaler support for Compute Engine Reservations |  | Cluster autoscaler prioritizes matching unused Compute Engine Reservations during scale-up decisions starting in GKE 1.27. |
| 2023-07-11 | Crashlooping containers interactive playbook dashboard |  | Cloud Monitoring provides an interactive playbook dashboard for troubleshooting crashlooping containers. |
| 2023-07-11 | Unschedulable pods interactive playbook dashboard |  | Cloud Monitoring provides an interactive playbook dashboard for troubleshooting unschedulable pods. |
| 2023-07-10 | Custom request and response headers |  | GKE Gateway controller 2023-R2 supports custom request and response headers. |
| 2023-07-10 | Identity-Aware Proxy integration |  | GKE Gateway controller 2023-R2 adds Identity-Aware Proxy integration. |
| 2023-07-10 | Regional external Application Load Balancer GatewayClasses |  | GKE Gateway controller 2023-R2 adds GatewayClasses for the regional external Application Load Balancer. |
| 2023-07-10 | URL rewrites and path redirects |  | GKE Gateway controller 2023-R2 supports URL rewrites and path redirects. |
| 2023-06-26 | Managed Service for Prometheus |  | Managed Service for Prometheus is enabled by default in new GKE Standard clusters running version 1.27 and later. |
| 2023-06-22 | Autopilot NET_ADMIN capability |  | GKE Autopilot clusters can optionally enable the NET_ADMIN Linux capability for service meshes and other approved use cases. |
| 2023-06-21 | Hyperdisk Throughput and Hyperdisk Extreme attached persistent disk support |  | GKE supports Hyperdisk Throughput and Hyperdisk Extreme as attached persistent disk options on Autopilot and Standard clusters. |
| 2023-06-14 | Idle Cluster insights |  | Idle Cluster insights identify clusters with low or no utilization. |
| 2023-06-12 | Deprecation insights |  | Deprecation insights identify clusters that use unsupported features on upcoming GKE versions; Deprecation insights identify clusters that still use Docker-based node images. |
| 2023-06-12 | Pod Security Policy | 2023-06-12 | Pod Security Policy is unsupported on GKE version 1.25 and later; deprecated on 2023-06-12. |
| 2023-06-09 | FQDN Network Policy |  | GKE network policy can match a fully qualified domain name or regular expression to control Pod egress traffic. |
| 2023-06-09 | Image streaming for Autopilot clusters |  | Autopilot clusters running GKE version 1.25.5-gke.1000 and later automatically use Image streaming to pull eligible images. |
| 2023-06-01 | Agones controller placement recommendations |  | GKE provides recommendations and insights when the Agones controller is not installed on dedicated nodes. |
| 2023-05-26 | Ephemeral storage metrics in the Observability tab |  | The Observability tab for GKE clusters now includes ephemeral storage metrics. |
| 2023-05-22 | C3 machine family for GKE Standard |  | The C3 machine family is generally available for GKE Standard clusters running version 1.22 and later. |
| 2023-05-12 | g2-standard machine family with NVIDIA L4 |  | The g2-standard machine family with NVIDIA L4 is generally available for GKE node pools in clusters running version 1.22 and later. |
| 2023-05-09 | Additional IPv4 secondary Pod ranges |  | You can add more IPv4 secondary Pod ranges to GKE Standard and Autopilot clusters running version 1.26 and later. |
| 2023-03-29 | Cluster autoscaler parallel pod draining |  | Starting in GKE 1.26, the cluster autoscaler can drain Pods from multiple nodes in parallel. |
| 2023-03-07 | Backend Service-based external Network Load Balancers |  | GKE now generally supports backend service-based external Network Load Balancers for external LoadBalancer Services. |
| 2023-02-17 | Autopilot workload compatibility audit |  | Standard clusters can audit workloads to check whether they are compatible with Autopilot clusters. |
| 2023-01-27 | Cloud DNS for GKE IPv6 and dual-stack service support |  | Cloud DNS for GKE now supports SingleStack IPv6 and DualStack services. |
| 2023-01-27 | Cloud DNS for GKE stub domains support |  | Cloud DNS for GKE now supports stub domains. |
| 2023-01-27 | Cloud DNS for GKE upstream nameserver support |  | Cloud DNS for GKE now supports upstream nameservers. |
| 2023-01-26 | Balanced compute class in Autopilot |  | The Balanced compute class is generally available in Autopilot clusters running GKE 1.25 and later. |
| 2023-01-26 | Minimum CPU platform for Balanced compute class |  | Autopilot clusters running GKE 1.25 and later can specify a minimum CPU platform for the Balanced compute class. |
| 2023-01-24 | Random host port assignment in Autopilot Pods |  | GKE Autopilot now supports exposing randomly assigned host ports in Pods. |
| 2023-01-17 | Ephemeral Storage Local SSD API |  | GKE node pool creation can now attach ephemeral devices backed by Local NVMe SSDs using the Ephemeral Storage Local SSD API. |
| 2023-01-17 | Local NVMe SSD Block API |  | GKE node pool creation can now attach block devices backed by Local NVMe SSDs using the Local NVMe SSD Block API. |
| 2023-01-09 | Windows Server 2022 OS image |  | Windows Server 2022 OS images are generally available for GKE Windows node pools. |
| 2023-01-05 | CSIStorageCapacity API | 2023-01-05 | The v1beta1 CSIStorageCapacity API is in deprecation and scheduled for removal in GKE 1.27; The v1beta1 CSIStorageCapacity API is in deprecation and scheduled for removal in GKE 1.27; deprecated on 2023-01-05. |
| 2023-01-05 | HorizontalPodAutoscaler API | 2023-01-05 | The autoscaling/v2beta2 HorizontalPodAutoscaler API is removed in GKE 1.26 in favor of autoscaling/v2; The autoscaling/v2beta2 HorizontalPodAutoscaler API is removed in GKE 1.26 in favor of autoscaling/v2; deprecated on 2023-01-05. |
| 2023-01-04 | GPU workloads on Autopilot clusters |  | GKE Autopilot clusters can run GPU-based workloads. |
| 2022-12-22 | Dual-stack clusters |  | GKE clusters can use dual-stack networking with both IPv4 and IPv6. |
| 2022-12-21 | NCCL Fast Socket |  | NCCL Fast Socket improves NCCL performance for multi-GPU workloads on GKE Standard clusters. |
| 2022-12-16 | GKE Gateway controller for global external HTTP(S) load balancers |  | The GKE Gateway controller can expose services through global external HTTP(S) load balancers. |
| 2022-12-14 | Cloud DNS for GKE (cluster scope) |  | GKE clusters can use Cloud DNS for in-cluster name resolution instead of kube-dns. |
| 2022-12-14 | Dataplane V2 migration for Autopilot clusters |  | GKE Autopilot clusters can migrate their datapath provider to Dataplane V2 during control plane upgrades. |
| 2022-12-13 | Compact placement policy |  | Compact placement policy places nodes in a node pool closer together within a zone to reduce latency; GKE Autopilot clusters support compact placement policies. |
| 2022-11-21 | Suggested log queries in the Logs tab |  | The cluster Logs tab includes suggested queries for GKE logs. |
| 2022-11-17 | Problem node signaling |  | GKE Autopilot clusters can signal to GKE that a node is problematic. |
| 2022-11-10 | Compact placement for node auto-provisioning |  | Compact placement improves node auto-provisioning in Standard clusters. |
| 2022-11-09 | GKE Gateway for Single Cluster |  | The Gateway API controller manages external and internal HTTP(S) load balancers for a single GKE cluster. |
| 2022-11-07 | LoadBalancer service firewall rules |  | GKE creates firewall rules for LoadBalancer Services and can include the load balancer IP in destination ranges. |
| 2022-11-03 | Kubernetes 1.23 deprecation insights |  | Deprecation insights help identify clusters using certificates incompatible with Kubernetes 1.23. |
| 2022-10-14 | GKE Cost Allocation |  | GKE Cost Allocation shows cluster cost breakdowns by namespace and pod labels for CPU and memory usage. |
| 2022-09-30 | Balanced compute class |  | The Balanced compute class is used to schedule workloads with very high memory or CPU requests. |
| 2022-09-30 | GPU-based workloads in Autopilot clusters |  | Autopilot clusters can run GPU-based workloads in Preview. |
| 2022-09-28 | GKE control plane metrics |  | Control plane metrics are available for supported GKE clusters. |
| 2022-09-22 | a2-ultragpu machine family |  | The a2-ultragpu machine family is available in Preview for node pools. |
| 2022-09-14 | CSIStorageCapacity | 2022-09-14 | CSIStorageCapacity is a Kubernetes API for advertising storage capacity to the scheduler; deprecated on 2022-09-14. |
| 2022-09-14 | CSIStorageCapacity API v1beta1 | 2022-09-14 | The CSIStorageCapacity API v1beta1 exposes storage capacity information to Kubernetes and is deprecated in favor of newer versions; CSIStorageCapacity API v1beta1 is a Kubernetes beta API for tracking CSI storage capacity; deprecated on 2022-09-14. |
| 2022-09-14 | FlowSchema API v1beta1 | 2022-09-14 | The FlowSchema API v1beta1 defines Kubernetes API flow-control schemas and is deprecated in favor of v1beta2; FlowSchema API v1beta1 is a Kubernetes beta API for API flow control; deprecated on 2022-09-14. |
| 2022-09-14 | HorizontalPodAutoscaler | 2022-09-14 | HorizontalPodAutoscaler is a Kubernetes API for scaling workloads based on observed metrics; HorizontalPodAutoscaler is a Kubernetes API for scaling workloads based on observed metrics; deprecated on 2022-09-14. |
| 2022-09-14 | HorizontalPodAutoscaler API v2beta2 | 2022-09-14 | The HorizontalPodAutoscaler API v2beta2 defines Kubernetes pod autoscaling and is deprecated in favor of v2; HorizontalPodAutoscaler API v2beta2 is a Kubernetes beta API for workload autoscaling; deprecated on 2022-09-14. |
| 2022-09-14 | PodSecurityPolicy | 2022-09-14 | PodSecurityPolicy is a Kubernetes policy API for governing pod security settings; PodSecurityPolicy is a Kubernetes policy API for governing pod security settings; deprecated on 2022-09-14. |
| 2022-09-14 | PriorityLevelConfiguration API v1beta1 | 2022-09-14 | The PriorityLevelConfiguration API v1beta1 defines Kubernetes API priority levels and is deprecated in favor of v1beta2; PriorityLevelConfiguration API v1beta1 is a Kubernetes beta API for API flow control priority levels; deprecated on 2022-09-14. |
| 2022-09-14 | RuntimeClass | 2022-09-14 | RuntimeClass is a Kubernetes API for selecting the container runtime configuration for pods; RuntimeClass is a Kubernetes API for selecting the container runtime configuration for pods; deprecated on 2022-09-14. |
| 2022-09-13 | GKE high-throughput Logging agent variant |  | GKE Standard clusters can deploy an alternative Logging agent variant that increases per-node log throughput. |
| 2022-09-13 | kubernetes.io/node/logs/input_bytes metric |  | GKE exports the kubernetes.io/node/logs/input_bytes metric to show how many log bytes a node generates. |
| 2022-08-23 | Shared Services secondary range |  | VPC-native clusters can share the user-managed secondary range for Services across clusters in the same subnet. |
| 2022-08-15 | GKE Clusters List Observability tab |  | The GKE Clusters List page includes an Observability tab for infrastructure health trends and ingestion visibility. |
| 2022-08-03 | GKE total size control |  | GKE total size control lets you set autoscaled node pool limits for the total number of nodes across all zones. |
| 2022-08-03 | Maximum Pods per node |  | GKE increased the maximum number of Pods per node to 256 on supported versions. |
| 2022-07-27 | Node system configuration cgroupv2 support |  | GKE node system configuration can set the cgroup mode to use the cgroupv2 resource management subsystem. |
| 2022-07-22 | GKE Gateway integration with Cloud Certificate Manager |  | GKE Gateway can integrate with Cloud Certificate Manager for TLS features and higher scale. |
| 2022-07-15 | Cluster autoscaler Location Policy |  | Cluster autoscaler Location Policy lets users choose between two spreading policies for autoscaled node pools. |
| 2022-07-13 | Arm workload support |  | GKE supports running Arm-based workloads on Standard and Autopilot clusters. |
| 2022-07-13 | GKE Autopilot compute classes |  | GKE Autopilot compute classes let workloads with specialized hardware requirements run on matching compute classes. |
| 2022-07-13 | Scale-Out compute class |  | The Scale-Out compute class is available in Preview for GKE Autopilot clusters. |
| 2022-07-06 | Blue-green node pool upgrades |  | GKE node pools can be upgraded with a blue-green mechanism instead of the default surge upgrade mechanism. |
| 2022-06-29 | Time-sharing GPUs |  | Multiple containers can share the full compute resources of a single NVIDIA GPU accelerator. |
| 2022-06-24 | Dual-stack networking |  | GKE can assign both IPv4 and IPv6 addresses to cluster nodes and Pods and supports dual-stack ClusterIP and NodePort Services. |
| 2022-06-15 | Confidential GKE Nodes |  | Confidential GKE Nodes encrypt workload data in use with Compute Engine Confidential VMs. |
| 2022-06-13 | Pod PID limits |  | GKE Node System Configuration supports setting limits on pod process IDs. |
| 2022-05-26 | CronJob API v1beta1 | 2022-05-26 | CronJob API v1beta1 is a Kubernetes beta API for scheduled batch jobs; CronJob API v1beta1 is a Kubernetes beta API for scheduled batch jobs; deprecated on 2022-05-26. |
| 2022-05-26 | EndpointSlice API v1beta1 | 2022-05-26 | EndpointSlice API v1beta1 is a Kubernetes beta API for endpoint discovery; EndpointSlice API v1beta1 is a Kubernetes beta API for endpoint discovery; deprecated on 2022-05-26. |
| 2022-05-26 | HorizontalPodAutoscaler API v2beta1 | 2022-05-26 | HorizontalPodAutoscaler API v2beta1 is a Kubernetes beta API for workload autoscaling; HorizontalPodAutoscaler API v2beta1 is a Kubernetes beta API for workload autoscaling; deprecated on 2022-05-26. |
| 2022-05-26 | PodDisruptionBudget API v1beta1 | 2022-05-26 | PodDisruptionBudget API v1beta1 is a Kubernetes beta API that limits voluntary pod disruptions; PodDisruptionBudget API v1beta1 is a Kubernetes beta API that limits voluntary pod disruptions; deprecated on 2022-05-26. |
| 2022-05-26 | PodSecurityPolicy API v1beta1 | 2022-05-26 | PodSecurityPolicy API v1beta1 is a Kubernetes beta API for controlling pod security settings; PodSecurityPolicy API v1beta1 is a Kubernetes beta API for controlling pod security settings; deprecated on 2022-05-26. |
| 2022-05-26 | RuntimeClass API v1beta1 | 2022-05-26 | RuntimeClass API v1beta1 is a Kubernetes beta API for selecting pod runtime behavior; RuntimeClass API v1beta1 is a Kubernetes beta API for selecting pod runtime behavior; deprecated on 2022-05-26. |
| 2022-05-25 | GKE cluster cost estimator |  | GKE can estimate cluster cost during cluster creation using the cluster cost widget. |
| 2022-05-20 | GKE workload rightsizing |  | This feature helps identify underutilized workloads in the Cost Optimization tab and apply suggested or custom values for resource requests and limits. |
| 2022-05-13 | GKE tags |  | Tags let you group or organize clusters by custom business dimensions and apply policies through tag bindings. |
| 2022-05-04 | Spot Pods on GKE Autopilot |  | Spot Pods let you run fault-tolerant workloads on GKE Autopilot clusters at reduced cost. |
| 2022-05-04 | Spot VMs on GKE |  | Spot VMs let you run fault-tolerant workloads on GKE at lower cost; Spot VMs provide lower-cost, interruptible compute for GKE workloads. |
| 2022-04-13 | Egress NAT policy |  | Egress NAT policy configures IP masquerading for GKE Autopilot clusters with Dataplane v2. |
| 2022-03-16 | Compute Engine persistent disk CSI driver for Windows clusters |  | The Compute Engine persistent disk CSI driver is generally available for Windows GKE clusters. |
| 2022-03-10 | Network tags for GKE nodes |  | Network tags let you dynamically apply firewall rules to nodes in GKE Autopilot clusters and auto-provisioned Standard node pools. |
| 2022-03-08 | Node auto-provisioning minimum CPU platform default | 2022-03-08 | Setting a minimum CPU platform in node auto-provisioning defaults is deprecated in favor of workload-level minimum CPU platform selection; deprecated on 2022-03-08. |
| 2022-03-07 | Identity Service for GKE |  | Identity Service for GKE lets you authenticate to clusters with external identity providers that use OpenID Connect; Provides OIDC-based authentication for GKE clusters. |
| 2022-02-22 | GKE Gateway traffic management |  | GKE Gateway traffic management can autoscale Pods or shift traffic between clusters based on service traffic capacity. |
| 2022-01-31 | Maintenance exclusion type filtering |  | Maintenance exclusions can be restricted to specific maintenance types such as minor upgrades. |
| 2022-01-31 | Pub/Sub cluster notification filtering |  | GKE can filter Pub/Sub cluster notifications by notification type. |
| 2022-01-21 | HorizontalPodAutoscaler v2beta1 | 2022-01-21 | HorizontalPodAutoscaler version autoscaling/v2beta1 is deprecated and scheduled for removal in Kubernetes 1.25; HorizontalPodAutoscaler version autoscaling/v2beta1 is deprecated and scheduled for removal in Kubernetes 1.25; deprecated on 2022-01-21. |
| 2022-01-21 | HorizontalPodAutoscaler v2beta2 | 2022-01-21 | HorizontalPodAutoscaler version autoscaling/v2beta2 is deprecated and should use autoscaling/v2 instead; HorizontalPodAutoscaler version autoscaling/v2beta2 is deprecated and should use autoscaling/v2 instead; deprecated on 2022-01-21. |
| 2022-01-21 | PodSecurity admission |  | PodSecurity is an admission controller that enforces Pod Security Standards on Pods using namespace labels; PodSecurity is an admission controller that enforces Pod Security Standards on Pods using namespace labels. |
| 2022-01-20 | Network policy event count metric |  | The network policy event count metric reports policy events for GKE Dataplane V2 clusters. |
| 2022-01-20 | VPC-scoped DNS with Cloud DNS |  | VPC-scoped DNS using Cloud DNS provides VPC-wide DNS resolution of GKE Services. |
| 2021-11-16 | Google Cloud Managed Service for Prometheus |  | A managed service collects and stores Prometheus metrics in Google Cloud. |
| 2021-11-16 | southamerica-west1 region |  | The southamerica-west1 Google Cloud region is available in Santiago, Chile. |
| 2021-11-09 | Spot Pods |  | Spot Pods let GKE Autopilot workloads run on lower-cost, interruptible capacity. |
| 2021-11-04 | Image streaming in GKE |  | Image streaming reduces container image pull time and improves application startup and autoscaling performance. |
| 2021-10-27 | GKE cluster autoscaler |  | The cluster autoscaler can scale from empty clusters and scale down nodes that run pods requesting local storage in GKE 1.22 and later. |
| 2021-10-27 | GKE node auto-provisioning |  | Node auto-provisioning can scale from empty clusters and scale down nodes that run pods requesting local storage in GKE 1.22 and later. |
| 2021-10-21 | CMEK for application-layer encryption |  | Customer-managed encryption keys can encrypt GKE Autopilot application-layer data. |
| 2021-10-21 | CMEK for boot disks |  | Customer-managed encryption keys can encrypt GKE Autopilot node boot disks. |
| 2021-10-21 | Google Groups for RBAC |  | Google Groups can be used in Kubernetes RBAC for GKE Autopilot clusters; Lets you use Google Groups to manage RBAC access in GKE. |
| 2021-10-04 | GKE workload metrics |  | A fully managed pipeline scrapes Prometheus-style workload metrics and sends them to Cloud Monitoring. |
| 2021-10-01 | APIService API | 2021-10-01 | The v1beta1 APIService API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01. |
| 2021-10-01 | APIService API v1beta1 | 2021-10-01 | APIService is the Kubernetes API for registering aggregated API services; deprecated on 2021-10-01. |
| 2021-10-01 | Bound service account token volumes |  | Injected service account token volumes are time-limited, auto-refreshed, and invalidated when the pod is deleted; Service account token volumes are time-limited, auto-refreshed, and invalidated when the pod is deleted. |
| 2021-10-01 | CertificateSigningRequest API | 2021-10-01 | The v1beta1 CertificateSigningRequest API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01. |
| 2021-10-01 | CertificateSigningRequest API v1beta1 | 2021-10-01 | CertificateSigningRequest is the Kubernetes API for requesting certificate signing; deprecated on 2021-10-01. |
| 2021-10-01 | ClusterRole API | 2021-10-01 | The v1beta1 ClusterRole API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01. |
| 2021-10-01 | ClusterRole API v1beta1 | 2021-10-01 | ClusterRole is the Kubernetes API for defining cluster-scoped RBAC roles; deprecated on 2021-10-01. |
| 2021-10-01 | ClusterRoleBinding API | 2021-10-01 | The v1beta1 ClusterRoleBinding API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01. |
| 2021-10-01 | ClusterRoleBinding API v1beta1 | 2021-10-01 | ClusterRoleBinding is the Kubernetes API for binding cluster roles to subjects; deprecated on 2021-10-01. |
| 2021-10-01 | CronJob API | 2021-10-01 | The batch/v1beta1 CronJob API is deprecated and will be removed in Kubernetes 1.25; CronJob is available in the stable batch/v1 API for scheduled jobs; deprecated on 2021-10-01. |
| 2021-10-01 | CSIDriver API | 2021-10-01 | The v1beta1 CSIDriver API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01. |
| 2021-10-01 | CSIDriver API v1beta1 | 2021-10-01 | CSIDriver is the Kubernetes API for describing a CSI driver; deprecated on 2021-10-01. |
| 2021-10-01 | CSINode API | 2021-10-01 | The v1beta1 CSINode API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01. |
| 2021-10-01 | CSINode API v1beta1 | 2021-10-01 | CSINode is the Kubernetes API for describing CSI node capabilities; deprecated on 2021-10-01. |
| 2021-10-01 | CustomResourceDefinition API | 2021-10-01 | The v1beta1 CustomResourceDefinition API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01. |
| 2021-10-01 | CustomResourceDefinition API v1beta1 | 2021-10-01 | CustomResourceDefinition is the Kubernetes API for defining custom resources; deprecated on 2021-10-01. |
| 2021-10-01 | DaemonSet maxSurge |  | DaemonSet maxSurge allows updated DaemonSet pods to run on nodes before old pods are removed. |
| 2021-10-01 | Default namespace label |  | Namespace objects now get a kubernetes.io/metadata.name label that matches metadata.name; Namespace API objects now include a kubernetes.io/metadata.name label that matches metadata.name. |
| 2021-10-01 | EndpointSlice API | 2021-10-01 | The discovery.k8s.io/v1beta1 EndpointSlice API is deprecated and will be removed in Kubernetes 1.25; EndpointSlice is available in the stable discovery.k8s.io/v1 API for scalable service discovery; deprecated on 2021-10-01. |
| 2021-10-01 | Ingress API v1beta1 | 2021-10-01 | Ingress is the Kubernetes API for exposing HTTP and HTTPS services; deprecated on 2021-10-01. |
| 2021-10-01 | IngressClass API | 2021-10-01 | The v1beta1 IngressClass API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01. |
| 2021-10-01 | IngressClass API v1beta1 | 2021-10-01 | IngressClass is the Kubernetes API for defining ingress controller classes; deprecated on 2021-10-01. |
| 2021-10-01 | Job suspension |  | Jobs can be created or placed into a suspended state for higher-level batch scheduling control. |
| 2021-10-01 | Lease API | 2021-10-01 | The v1beta1 Lease API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01. |
| 2021-10-01 | Lease API v1beta1 | 2021-10-01 | Lease is the Kubernetes API for coordinating resource leases; deprecated on 2021-10-01. |
| 2021-10-01 | LocalSubjectAccessReview API | 2021-10-01 | The v1beta1 LocalSubjectAccessReview API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01. |
| 2021-10-01 | LocalSubjectAccessReview API v1beta1 | 2021-10-01 | LocalSubjectAccessReview is the Kubernetes API for checking permissions in a namespace; deprecated on 2021-10-01. |
| 2021-10-01 | MutatingWebhookConfiguration API | 2021-10-01 | The v1beta1 MutatingWebhookConfiguration API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01. |
| 2021-10-01 | MutatingWebhookConfiguration API v1beta1 | 2021-10-01 | MutatingWebhookConfiguration is the Kubernetes admission webhook configuration for mutating requests; deprecated on 2021-10-01. |
| 2021-10-01 | Pod affinity namespace selection |  | Pod affinity rules can select namespaces by label selector instead of only by explicit namespace names. |
| 2021-10-01 | PodDisruptionBudget API | 2021-10-01 | The policy/v1beta1 PodDisruptionBudget API is deprecated and will be removed in Kubernetes 1.25; PodDisruptionBudget is available in the stable policy/v1 API for controlling pod evictions; deprecated on 2021-10-01. |
| 2021-10-01 | PriorityClass API | 2021-10-01 | The v1beta1 PriorityClass API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01. |
| 2021-10-01 | PriorityClass API v1beta1 | 2021-10-01 | PriorityClass is the Kubernetes API for defining pod scheduling priorities; deprecated on 2021-10-01. |
| 2021-10-01 | Role API | 2021-10-01 | The v1beta1 Role API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01. |
| 2021-10-01 | Role API v1beta1 | 2021-10-01 | Role is the Kubernetes API for defining namespaced RBAC roles; deprecated on 2021-10-01. |
| 2021-10-01 | RoleBinding API | 2021-10-01 | The v1beta1 RoleBinding API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01. |
| 2021-10-01 | RoleBinding API v1beta1 | 2021-10-01 | RoleBinding is the Kubernetes API for binding roles to subjects; deprecated on 2021-10-01. |
| 2021-10-01 | SelfSubjectAccessReview API | 2021-10-01 | The v1beta1 SelfSubjectAccessReview API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01. |
| 2021-10-01 | SelfSubjectAccessReview API v1beta1 | 2021-10-01 | SelfSubjectAccessReview is the Kubernetes API for checking the caller's own permissions; deprecated on 2021-10-01. |
| 2021-10-01 | Server-side Apply |  | Server-side Apply lets clients declaratively merge fully specified object intent while tracking field ownership. |
| 2021-10-01 | StorageClass API | 2021-10-01 | The v1beta1 StorageClass API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01. |
| 2021-10-01 | StorageClass API v1beta1 | 2021-10-01 | StorageClass is the Kubernetes API for defining storage provisioning classes; deprecated on 2021-10-01. |
| 2021-10-01 | SubjectAccessReview API | 2021-10-01 | The v1beta1 SubjectAccessReview API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01. |
| 2021-10-01 | SubjectAccessReview API v1beta1 | 2021-10-01 | SubjectAccessReview is the Kubernetes API for checking access for a subject; deprecated on 2021-10-01. |
| 2021-10-01 | TokenReview API | 2021-10-01 | The v1beta1 TokenReview API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01. |
| 2021-10-01 | TokenReview API v1beta1 | 2021-10-01 | TokenReview is the Kubernetes API for reviewing service account tokens; deprecated on 2021-10-01. |
| 2021-10-01 | ValidatingWebhookConfiguration API | 2021-10-01 | The v1beta1 ValidatingWebhookConfiguration API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01. |
| 2021-10-01 | ValidatingWebhookConfiguration API v1beta1 | 2021-10-01 | ValidatingWebhookConfiguration is the Kubernetes admission webhook configuration for validating requests; deprecated on 2021-10-01. |
| 2021-10-01 | VolumeAttachment API | 2021-10-01 | The v1beta1 VolumeAttachment API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01. |
| 2021-10-01 | VolumeAttachment API v1beta1 | 2021-10-01 | VolumeAttachment is the Kubernetes API for tracking volume attachments; deprecated on 2021-10-01. |
| 2021-09-30 | Cost Optimization tab |  | The Cost Optimization tab shows CPU and memory usage, requests, allocation, and limits for clusters and workloads. |
| 2021-09-16 | VPC-native as the default network mode |  | New GKE clusters use VPC-native networking by default, while routes-based clusters remain available with --no-enable-ip-alias. |
| 2021-09-14 | Multi-Cluster Ingress SSL policies and HTTPS redirects |  | Multi-Cluster Ingress can use FrontendConfig to configure SSL policies and HTTPS redirects. |
| 2021-09-14 | Private Service Connect for internal LoadBalancer Services |  | ServiceAttachment resources can be used to provision Private Service Connect for internal LoadBalancer Services. |
| 2021-09-09 | Managed Filestore CSI driver |  | The managed Filestore CSI driver provisions and manages Filestore instances for GKE workloads. |
| 2021-09-02 | Multi-Instance GPU on GKE |  | Multi-Instance GPU on GKE lets a single GPU be partitioned into multiple isolated instances for workloads; Multi-Instance GPU on GKE is available in Preview. |
| 2021-08-30 | GKE Autoscaling profiles |  | Provides autoscaling profile settings for GKE clusters. |
| 2021-08-24 | Google Virtual NIC on GKE GPU nodes |  | Enables Google Virtual NIC on new GKE clusters that use GPU nodes. |
| 2021-08-20 | UpgradeAvailableEvent notifications for Windows Server node pools |  | Notifies Windows Server node pools about new GKE versions and the Windows OS versions they use. |
| 2021-08-19 | GKE logging and monitoring configuration |  | Lets you configure which logs and metrics GKE sends to Cloud Logging and Cloud Monitoring. |
| 2021-08-05 | GKE Multi Cluster Ingress |  | Provides multi-cluster ingress for GKE clusters. |
| 2021-07-20 | Legacy Logging and Monitoring | 2019-12-12 | Older GKE logging and monitoring integration replaced by Cloud Operations for GKE; deprecated on 2019-12-12. |
| 2021-07-02 | Config Management |  | Provides configuration management for GKE clusters. |
| 2021-07-02 | Config Sync |  | Synchronizes Kubernetes configuration to GKE clusters from source control or configuration files; GKE can manage Kubernetes deployments using configuration files stored in a Git repository. |
| 2021-07-02 | Policy Controller |  | Enforces programmable policies for GKE clusters. |
| 2021-06-28 | Containerd on Windows Server node images |  | Supports Containerd as the container runtime for Windows Server LTSC and SAC node images in supported GKE versions. |
| 2021-06-24 | Internal load balancer subsetting |  | Enables internal load balancer subsetting for supported GKE versions. |
| 2021-06-11 | GKE Multi-cluster Services pod-specific addressing |  | Enables pod-specific addressing for GKE Multi-cluster Services. |
| 2021-06-10 | GKE Autopilot committed use discounts |  | Committed use discounts for GKE Autopilot cover pod vCPU, memory, and ephemeral storage usage in the committed region. |
| 2021-06-10 | Volume snapshots |  | Volume snapshots are generally available, and GKE 1.21+ supports v1 snapshots. |
| 2021-06-10 | Windows Server version mapping gcloud command |  | A gcloud command shows the version mapping between GKE versions and Windows Server versions for Windows Server node pools. |
| 2021-05-28 | APIService v1beta1 API | 2021-05-28 | The APIService v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; The APIService v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; deprecated on 2021-05-28. |
| 2021-05-28 | CertificateSigningRequest v1beta1 API | 2021-05-28 | The CertificateSigningRequest v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; The CertificateSigningRequest v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; deprecated on 2021-05-28. |
| 2021-05-28 | ClusterRole v1beta1 API | 2021-05-28 | The ClusterRole v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; The ClusterRole v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; deprecated on 2021-05-28. |
| 2021-05-28 | ClusterRoleBinding v1beta1 API | 2021-05-28 | The ClusterRoleBinding v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; The ClusterRoleBinding v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; deprecated on 2021-05-28. |
| 2021-05-28 | Container-native Cloud DNS |  | Cloud DNS can serve as the in-cluster DNS provider instead of kube-dns on GKE clusters running version 1.18 or later. |
| 2021-05-28 | CronJob | 2022-09-14 | CronJob is a Kubernetes API for scheduled and recurring jobs; CronJob is a Kubernetes API for scheduled and recurring jobs; deprecated on 2022-09-14. |
| 2021-05-28 | CronJob v1beta1 API | 2021-05-28 | The CronJob v1beta1 API is deprecated and targeted for removal in Kubernetes 1.25; The CronJob v1beta1 API is deprecated and targeted for removal in Kubernetes 1.25; deprecated on 2021-05-28. |
| 2021-05-28 | CSIDriver v1beta1 API | 2021-05-28 | The CSIDriver v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; The CSIDriver v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; deprecated on 2021-05-28. |
| 2021-05-28 | CSINode v1beta1 API | 2021-05-28 | The CSINode v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; The CSINode v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; deprecated on 2021-05-28. |
| 2021-05-28 | CustomResourceDefinition v1beta1 API | 2021-05-28 | The CustomResourceDefinition v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; The CustomResourceDefinition v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; deprecated on 2021-05-28. |
| 2021-05-28 | EndpointSlice | 2022-09-14 | EndpointSlice is a Kubernetes API for representing network endpoints for Services; EndpointSlice is a Kubernetes API for representing network endpoints for Services; deprecated on 2022-09-14. |
| 2021-05-28 | EndpointSlice v1beta1 API | 2021-05-28 | The EndpointSlice v1beta1 API is deprecated and targeted for removal in Kubernetes 1.25; The EndpointSlice v1beta1 API is deprecated and targeted for removal in Kubernetes 1.25; deprecated on 2021-05-28. |
| 2021-05-28 | Ingress v1beta1 API | 2021-05-28 | The Ingress v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; The Ingress v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; deprecated on 2021-05-28. |
| 2021-05-28 | IngressClass v1beta1 API | 2021-05-28 | The IngressClass v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; The IngressClass v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; deprecated on 2021-05-28. |
| 2021-05-28 | Lease v1beta1 API | 2021-05-28 | The Lease v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; The Lease v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; deprecated on 2021-05-28. |
| 2021-05-28 | LocalSubjectAccessReview v1beta1 API | 2021-05-28 | The LocalSubjectAccessReview v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; The LocalSubjectAccessReview v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; deprecated on 2021-05-28. |
| 2021-05-28 | MutatingWebhookConfiguration v1beta1 API | 2021-05-28 | The MutatingWebhookConfiguration v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; The MutatingWebhookConfiguration v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; deprecated on 2021-05-28. |
| 2021-05-28 | PodDisruptionBudget | 2022-09-14 | PodDisruptionBudget is a Kubernetes API for limiting voluntary disruptions to pods; PodDisruptionBudget is a Kubernetes API for limiting voluntary disruptions to pods; deprecated on 2022-09-14. |
| 2021-05-28 | PodDisruptionBudget v1beta1 API | 2021-05-28 | The PodDisruptionBudget v1beta1 API is deprecated and targeted for removal in Kubernetes 1.25; The PodDisruptionBudget v1beta1 API is deprecated and targeted for removal in Kubernetes 1.25; deprecated on 2021-05-28. |
| 2021-05-28 | PodSecurityPolicy v1beta1 API | 2021-05-28 | The PodSecurityPolicy v1beta1 API is deprecated and targeted for removal in Kubernetes 1.25; The PodSecurityPolicy v1beta1 API is deprecated and targeted for removal in Kubernetes 1.25; deprecated on 2021-05-28. |
| 2021-05-28 | PriorityClass v1beta1 API | 2021-05-28 | The PriorityClass v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; The PriorityClass v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; deprecated on 2021-05-28. |
| 2021-05-28 | Role v1beta1 API | 2021-05-28 | The Role v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; The Role v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; deprecated on 2021-05-28. |
| 2021-05-28 | RoleBinding v1beta1 API | 2021-05-28 | The RoleBinding v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; The RoleBinding v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; deprecated on 2021-05-28. |
| 2021-05-28 | SelfSubjectAccessReview v1beta1 API | 2021-05-28 | The SelfSubjectAccessReview v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; The SelfSubjectAccessReview v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; deprecated on 2021-05-28. |
| 2021-05-28 | StorageClass v1beta1 API | 2021-05-28 | The StorageClass v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; The StorageClass v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; deprecated on 2021-05-28. |
| 2021-05-28 | SubjectAccessReview v1beta1 API | 2021-05-28 | The SubjectAccessReview v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; The SubjectAccessReview v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; deprecated on 2021-05-28. |
| 2021-05-28 | TokenReview v1beta1 API | 2021-05-28 | The TokenReview v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; The TokenReview v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; deprecated on 2021-05-28. |
| 2021-05-28 | ValidatingWebhookConfiguration v1beta1 API | 2021-05-28 | The ValidatingWebhookConfiguration v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; The ValidatingWebhookConfiguration v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; deprecated on 2021-05-28. |
| 2021-05-28 | VolumeAttachment v1beta1 API | 2021-05-28 | The VolumeAttachment v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; The VolumeAttachment v1beta1 API is deprecated and targeted for removal in Kubernetes 1.22; deprecated on 2021-05-28. |
| 2021-05-21 | Network policy logging |  | Network Policy Logging is generally available and requires Dataplane V2; Network policy logging records network policy enforcement events for GKE clusters that use Dataplane V2. |
| 2021-05-17 | UpgradeAvailableEvent notification |  | The UpgradeAvailableEvent notification is generally available. |
| 2021-05-12 | Dataplane V2 |  | Dataplane V2 is generally available in newly created GKE clusters running version 1.20.6-gke.700 and later; Dataplane V2 is available in beta for newly created clusters on supported GKE versions. |
| 2021-05-12 | GKE Gateway controller |  | GKE Gateway controller, Google Cloud's implementation of the Gateway API, is available in Preview on GKE 1.20 and later. |
| 2021-05-06 | OS Login for private GKE clusters and nodes |  | OS Login can be enabled and configured for private GKE clusters and their nodes. |
| 2021-04-14 | CertificateSigningRequest v1 API |  | The CertificateSigningRequest API has graduated to certificates.k8s.io/v1 in Kubernetes 1.19. |
| 2021-04-14 | Ingress API | 2021-10-01 | The v1beta1 Ingress API was removed in Kubernetes 1.22 in favor of the GA Ingress API; The Ingress API has graduated to general availability in Kubernetes 1.19; deprecated on 2021-10-01. |
| 2021-04-14 | Seccomp |  | Seccomp support has graduated to General Availability for Pods and individual containers. |
| 2021-04-14 | Seccomp alpha annotations | 2021-04-14 | The alpha seccomp annotations are deprecated in favor of the seccompProfile API field; deprecated on 2021-04-14. |
| 2021-03-23 | Workload Identity for Windows Server nodes |  | Workload Identity is now available for Windows Server nodes in specified GKE versions. |
| 2021-03-19 | Google canonical error codes |  | GKE operations now use Google canonical error codes to report errors. |
| 2021-03-19 | Multiple pod CIDRs |  | Multiple pod CIDRs lets you assign a different Pod CIDR to a new node pool than the cluster creation CIDR. |
| 2021-03-19 | Node pool metadata updates |  | You can dynamically update network tags, node labels, and node taints on an existing GKE node pool. |
| 2021-03-16 | All ports for internal load balancer Services |  | All ports lets internal TCP/UDP load balancer Services use more than five ports. |
| 2021-03-16 | Internal TCP/UDP load balancer subsetting |  | Subsetting lets GKE clusters using internal load balancer Services scale beyond 250 nodes. |
| 2021-03-10 | Cloud Operations for GKE metrics |  | Provides 40 Kubernetes metrics as part of Cloud Operations for GKE. |
| 2021-03-02 | Compute Engine persistent disk CSI Driver for Windows |  | Enables the Compute Engine persistent disk CSI Driver for Windows in GKE to provide snapshot and volume expansion support. |
| 2021-03-02 | GKE SLA coverage for the Regular release channel |  | Extends the GKE Service Level Agreement to cover the Regular release channel for Standard and Autopilot modes. |
| 2021-02-25 | GKE Autopilot mode |  | Autopilot is a GKE mode that reduces operational cost and optimizes clusters for production workloads. |
| 2021-02-22 | GKE Node System Config |  | Provides configuration of node-level system settings in GKE. |
| 2021-02-05 | Cluster Autoscaler ephemeral storage scale-from-zero |  | Cluster Autoscaler can scale from zero node pools when Pods require ephemeral storage. |
| 2021-02-05 | GKE Regular release channel default enrollment |  | New GKE clusters are enrolled in the Regular release channel by default when no conflicting flags are set. |
| 2021-02-05 | Node auto-provisioning default machine type |  | Node auto-provisioning uses E2 as the default machine type. |
| 2021-02-05 | Node auto-provisioning ephemeral storage support |  | Node auto-provisioning can scale up for Pods that explicitly require ephemeral storage. |
| 2021-02-05 | Node auto-provisioning machine-family toleration |  | Node auto-provisioning can choose a custom machine family when the machine-family toleration is set. |
| 2021-01-22 | Multidimensional Pod autoscaling |  | Allows horizontal scaling based on CPU and vertical scaling based on memory at the same time. |
| 2021-01-19 | Kubernetes CertificateSigningRequest v1 API |  | Graduates the CertificateSigningRequest API to certificates.k8s.io/v1; Graduates the CertificateSigningRequest API to certificates.k8s.io/v1. |
| 2021-01-19 | Kubernetes CertificateSigningRequest v1beta1 API | 2021-01-19 | The v1beta1 CertificateSigningRequest API is deprecated and will no longer be served in Kubernetes 1.22+; The v1beta1 CertificateSigningRequest API is deprecated and will no longer be served in Kubernetes 1.22+; deprecated on 2021-01-19. |
| 2021-01-19 | Kubernetes Ingress API |  | The Kubernetes Ingress API graduated to general availability in Kubernetes 1.19. |
| 2021-01-19 | Kubernetes Ingress v1 API |  | Graduates the Kubernetes Ingress API to networking.k8s.io/v1. |
| 2021-01-19 | Kubernetes Ingress v1beta1 API | 2021-01-19 | The v1beta1 Ingress API is deprecated and will no longer be served in Kubernetes 1.22+; deprecated on 2021-01-19. |
| 2021-01-19 | Kubernetes seccomp alpha annotations | 2021-01-19 | The alpha seccomp annotations are deprecated in favor of the seccompProfile field; The alpha seccomp annotations are deprecated in favor of the seccompProfile field; deprecated on 2021-01-19. |
| 2021-01-19 | Kubernetes seccomp profile API |  | Adds the seccompProfile field to Pod and container securityContext objects to restrict allowed system calls; Adds the seccompProfile field to Pod and container securityContext objects to restrict allowed system calls. |
| 2021-01-11 | Compute Engine persistent disk CSI driver |  | Installs the Compute Engine persistent disk CSI driver to provision PersistentVolumes with pd.csi.storage.gke.io. |
| 2021-01-11 | Google Cloud operations suite for GKE logging and monitoring collection modes |  | Adds logging-only and monitoring-only collection modes for GKE clusters. |
| 2020-12-17 | Internal Ingress for Internal HTTP(S) Load Balancing |  | Makes Internal Ingress for Internal HTTP(S) Load Balancing generally available. |
| 2020-12-08 | Container-Optimized OS with Docker node image | 2020-12-08 | The Container-Optimized OS with Docker node image variant is deprecated in favor of cos_containerd; deprecated on 2020-12-08. |
| 2020-11-13 | Custom health checks for Ingress |  | Custom health checks for Ingress are generally available across all Ingress types, with parameters specified in a Kubernetes BackendConfig. |
| 2020-11-13 | Custom network endpoint group names |  | Lets you specify custom names for network endpoint groups. |
| 2020-11-13 | GKE external Ingress SSL policies |  | Lets external GKE Ingress use SSL policies to choose TLS versions and ciphers. |
| 2020-11-13 | Ingress HTTPS redirects |  | Adds support for redirecting HTTP requests to HTTPS on the same external load balancer IP. |
| 2020-11-13 | Static IP addressing for internal Ingress |  | Static IP addressing for internal Ingress is available in beta. |
| 2020-11-06 | Local SSD ephemeral storage for emptyDir volumes |  | Node pools running GKE 1.18 and later can use local SSD for emptyDir ephemeral storage in beta. |
| 2020-10-02 | Optimize-utilization autoscaling profile |  | For clusters using the optimize-utilization autoscaling profile, GKE sets the Pod scheduler name to gke.io/optimize-utilization-scheduler in GKE 1.18 and later. |
| 2020-09-25 | Boot disk type and size |  | Node Auto-Provisioning can set default boot disk type and size values for newly created node pools. |
| 2020-09-25 | Customer-managed encryption keys |  | Node Auto-Provisioning can set default CMEK values for newly created node pools; GKE can use customer-managed encryption keys to encrypt node boot disks and attached persistent disks. |
| 2020-09-25 | Integrity Monitoring |  | Node Auto-Provisioning can set default Integrity Monitoring values for newly created node pools. |
| 2020-09-25 | Secure Boot |  | Node Auto-Provisioning can set default Secure Boot values for newly created node pools. |
| 2020-09-08 | CSR signer authorization |  | The certificatesigningrequests/approval API now requires permission to approve a CSR for the specific signer requested. |
| 2020-09-08 | Taint-based evictions |  | Taint-based evictions are generally available in GKE 1.18 clusters. |
| 2020-08-28 | Master global access |  | Master global access lets you reach a private cluster's private endpoint from any Google Cloud region or on-premises environment. |
| 2020-08-21 | Canonical error codes |  | GKE operations now report errors using the canonical error model. |
| 2020-08-21 | Configurable subnets for internal load balancer Service |  | Configurable subnets let you specify the subnet used by an internal load balancer Service. |
| 2020-08-21 | Global access for internal load balancer Service |  | Global access allows clients from any region to reach an internal load balancer Service. |
| 2020-08-21 | Internal load balancer Service type |  | The internal load balancer Service type is generally available in GKE 1.17.9-gke.600 and later. |
| 2020-08-21 | Non-RFC 1918 private IP ranges |  | GKE can use private IP address ranges outside RFC 1918 for master nodes, nodes, Pods, and Services. |
| 2020-08-21 | OpenID Connect discovery documents |  | OpenID Connect discovery documents are published for GKE clusters so other software can understand issued service account tokens. |
| 2020-07-17 | BackendConfig CRD |  | BackendConfig CRD is generally available and makes BackendConfig features available across Ingress types. |
| 2020-07-17 | Container-native Ingress |  | Container-native Ingress uses Network Endpoint Groups by default for supported new Services. |
| 2020-07-17 | Custom health checks |  | Custom health checks let you declaratively customize load balancer health check parameters. |
| 2020-07-17 | Customer-managed encryption keys for GKE |  | Customer-managed encryption keys for GKE encrypt node boot disks and attached persistent storage data keys. |
| 2020-07-17 | Shared IP addresses for Services |  | Shared IP addresses let a single internal TCP/UDP load balancer IP support more ports and multiple protocols for a Service. |
| 2020-07-17 | SSL Policies |  | SSL Policies let you enforce TLS and cipher settings for Ingress traffic. |
| 2020-07-02 | GKE Node System Configuration |  | GKE Node System Configuration lets you specify custom Kubelet and kernel settings on node pools. |
| 2020-06-15 | Node auto-repair |  | Node auto-repair is enabled by default for new node pools created through the Google Kubernetes Engine API. |
| 2020-05-19 | Non-RFC 1918 private address ranges in VPC-native clusters |  | Supports the use of non-RFC 1918 private address ranges in VPC-native clusters. |
| 2020-05-19 | Private reuse of public IP addresses in VPC-native clusters |  | Supports privately reusing public IP address ranges in VPC-native clusters. |
| 2020-05-15 | Container Threat Detection |  | Detects common container runtime attacks and can alert in Security Command Center or Cloud Logging. |
| 2020-05-08 | Internal Load Balancer Service IP subnet annotation |  | Allows specifying a VPC subnet for internal Load Balancer Service IPs with a per-Service annotation. |
| 2020-04-29 | Multi-cluster Ingress |  | Provides a Kubernetes-native way to deploy Ingress resources across multiple clusters and regions. |
| 2020-04-27 | Kubernetes beta node labels | 2020-04-27 | Several beta Kubernetes node labels are deprecated in favor of GA label names; Several beta Kubernetes node labels are deprecated in favor of GA label names; deprecated on 2020-04-27. |
| 2020-04-27 | RBAC API versions apps/v1alpha1 and apps/v1beta1 | 2020-04-27 | The apps/v1alpha1 and apps/v1beta1 RBAC APIs are deprecated and will stop being served in 1.20; The apps/v1alpha1 and apps/v1beta1 RBAC APIs are deprecated and will stop being served in 1.20; deprecated on 2020-04-27. |
| 2020-04-27 | RunAsUsername |  | Allows specifying the username when running a Windows container; Allows specifying the username when running a Windows container. |
| 2020-04-27 | RuntimeClass scheduler |  | Simplifies scheduling Windows Pods onto appropriate nodes; Simplifies scheduling Windows Pods onto appropriate nodes. |
| 2020-04-24 | Master global access for private clusters |  | Master global access lets you reach a private cluster's master endpoint from any Google Cloud region or on-premises environment. |
| 2020-04-24 | Windows Server node pools |  | GKE clusters can be created or updated with node pools that run Windows Server. |
| 2020-04-10 | Ingress HTTP access logging | 2020-05-12 | HTTP access logging for newly created GKE Ingress resources is being deprecated; Ingress access logging became a configurable feature named logging and can be toggled through BackendConfig; deprecated on 2020-05-12. |
| 2020-03-16 | Node auto-provisioning with preemptible VMs |  | Node auto-provisioning can create node pools backed by preemptible VMs in clusters running the Regular release channel; Node auto-provisioning can create node pools backed by preemptible VMs in clusters running the Regular release channel. |
| 2020-03-16 | TPU support on existing clusters |  | GKE can enable Cloud TPU support on existing clusters instead of requiring new clusters and workload migration. |
| 2020-03-16 | Workload Identity |  | Workload Identity lets workloads in GKE access Google Cloud services and is the recommended approach for that use case. |
| 2020-03-06 | Cloud Build automated deployment for GKE workloads |  | Cloud Build can automatically deploy existing GKE workloads. |
| 2020-03-06 | DaemonSet legacy API versions | 2020-03-06 | The extensions/v1beta1, apps/v1beta1, and apps/v1beta2 API versions for DaemonSet are no longer served in GKE 1.16; deprecated on 2020-03-06. |
| 2020-03-06 | Deployment legacy API versions | 2020-03-06 | The extensions/v1beta1, apps/v1beta1, and apps/v1beta2 API versions for Deployment are no longer served in GKE 1.16; deprecated on 2020-03-06. |
| 2020-03-06 | GKE cluster creation UI |  | The Google Cloud Console interface for creating GKE clusters was redesigned to better guide best practices; The Google Cloud Console interface for creating GKE clusters was redesigned to better guide best practices. |
| 2020-03-06 | NetworkPolicy extensions/v1beta1 API version | 2020-03-06 | The extensions/v1beta1 API version for NetworkPolicy is no longer served in GKE 1.16; deprecated on 2020-03-06. |
| 2020-03-06 | PodSecurityPolicy extensions/v1beta1 API version | 2020-03-06 | The extensions/v1beta1 API version for PodSecurityPolicy is no longer served in GKE 1.16; deprecated on 2020-03-06. |
| 2020-03-06 | ReplicaSet legacy API versions | 2020-03-06 | The extensions/v1beta1, apps/v1beta1, and apps/v1beta2 API versions for ReplicaSet are no longer served in GKE 1.16; deprecated on 2020-03-06. |
| 2020-03-06 | StatefulSet legacy API versions | 2020-03-06 | The apps/v1beta1 and apps/v1beta2 API versions for StatefulSet are no longer served in GKE 1.16; deprecated on 2020-03-06. |
| 2020-02-27 | Ingress for Anthos |  | Ingress for Anthos provides shared internet-facing Ingress across multiple GKE clusters and Google Cloud regions. |
| 2020-02-27 | Standalone network endpoint groups (NEGs) |  | Standalone NEGs enable container-native load balancing for Kubernetes and non-Kubernetes backends. |
| 2020-02-25 | DaemonSet API | 2020-02-25 | The deprecated DaemonSet beta API versions are no longer served in GKE v1.16 and should be migrated to apps/v1; deprecated on 2020-02-25. |
| 2020-02-25 | Deployment API | 2020-02-25 | The deprecated Deployment beta API versions are no longer served in GKE v1.16 and should be migrated to apps/v1; deprecated on 2020-02-25. |
| 2020-02-25 | NetworkPolicy API | 2020-02-25 | The extensions/v1beta1 NetworkPolicy API is no longer served in GKE v1.16 and should be migrated to networking.k8s.io/v1; deprecated on 2020-02-25. |
| 2020-02-25 | PodSecurityPolicy API | 2020-02-25 | The extensions/v1beta1 PodSecurityPolicy API is no longer served in GKE v1.16 and should be migrated to policy/v1beta1; deprecated on 2020-02-25. |
| 2020-02-25 | ReplicaSet API | 2020-02-25 | The deprecated ReplicaSet beta API versions are no longer served in GKE v1.16 and should be migrated to apps/v1; deprecated on 2020-02-25. |
| 2020-02-25 | StatefulSet API | 2020-02-25 | The deprecated StatefulSet beta API versions are no longer served in GKE v1.16 and should be migrated to apps/v1; deprecated on 2020-02-25. |
| 2020-02-24 | Compute Engine Persistent Disk CSI driver in GKE |  | GKE supports enabling the Compute Engine Persistent Disk CSI driver. |
| 2020-02-24 | Internal HTTP(S) Load Balancing Ingress |  | Ingress resources can provision private L7 load balancing inside the VPC; Ingress resources can provision private L7 load balancing inside the VPC. |
| 2020-02-18 | node-locations flag |  | The node-locations flag lets you place node pools in zones independently of the cluster zone. |
| 2020-02-11 | Surge upgrades |  | Surge upgrades let you configure the speed and disruption of node upgrades. |
| 2020-02-04 | Autoscaling profiles |  | Autoscaling profiles let the cluster autoscaler optimize for either resource utilization or resource availability when removing nodes. |
| 2020-01-29 | Config Connector |  | Config Connector lets you manage Google Cloud resources through Kubernetes configuration. |
| 2020-01-29 | GKE Sandbox |  | GKE Sandbox protects the host kernel on nodes when containers run untrusted code. |
| 2020-01-27 | Windows node pools |  | GKE clusters can include node pools that run Microsoft Windows Server; GKE clusters can include node pools that run Microsoft Windows Server. |
| 2020-01-22 | Application Delivery |  | GKE can manage workload configurations declaratively from Git. |
| 2020-01-22 | Object Browser |  | GKE resources can be inspected in Google Cloud Console using Object Browser. |
| 2020-01-07 | Reservations consumption |  | GKE can consume zonal Compute Engine reservations to help ensure capacity for workloads. |

Source file slug: `google-kubernetes-engine.md`

