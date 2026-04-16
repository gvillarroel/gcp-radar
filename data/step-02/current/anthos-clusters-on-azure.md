# Anthos clusters on Azure

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 37
Unique features: 55

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2023-09-06 | Admin groups authentication |  | Admin groups authentication lets listed groups be authenticated as cluster administrators without manually creating RBAC policies. |
| 2023-09-06 | Audit proxy gzip log ingestion |  | Audit proxy now uses gzip compression for audit log ingestion to improve efficiency. |
| 2023-09-06 | Automatic etcd defragmentation |  | The control plane now supports automatic periodic defragmentation of etcd and etcd-events to reduce disk pressure. |
| 2023-09-06 | Binary artifact integrity validation |  | Google-managed binary artifacts downloaded from Cloud Storage are now protected with file integrity checks and fingerprint validation. |
| 2023-09-06 | Expanded node pool metrics collection |  | Node pool metrics collection now includes metrics from gke-metrics-agent, cilium components, CoreDNS, Fluent Bit, kubelet, and konnectivity-agent. |
| 2023-09-06 | Fluent Bit gzip log ingestion |  | Fluent Bit now uses gzip compression when ingesting logs into Cloud Logging to improve transfer efficiency. |
| 2023-09-06 | Kubelet read-only port access |  | The unauthenticated kubelet read-only port 10255 is disabled for upgraded node pools. |
| 2023-09-06 | Kubelet resource reservation |  | Node resource management now reserves resources for the kubelet to help prevent out-of-memory conditions. |
| 2023-09-06 | Node auto repair |  | Node auto repair continuously monitors node health in each node pool and repairs unhealthy nodes automatically; Node auto repair continuously monitors node health in each node pool and repairs unhealthy nodes automatically. |
| 2023-09-06 | VolumeSnapshot v1beta1 APIs | 2023-09-06 | The VolumeSnapshot, VolumeSnapshotContents, and VolumeSnapshotClass v1beta1 APIs are no longer available; VolumeSnapshot v1beta1 APIs are slated to stop being served in a future 1.23 release; deprecated on 2023-09-06. |
| 2023-05-04 | cgroup v2 default configuration |  | Cgroup v2 is now the default control group configuration. |
| 2023-05-04 | Control plane metrics export |  | Monitoring now exports metrics for control plane components. |
| 2023-05-04 | Kubernetes resource metadata export |  | Kubernetes resource metadata can now be sent to Google Cloud Platform to improve the user interface and cluster metrics. |
| 2023-05-04 | Ubuntu 22.04 node image |  | Clusters now use an Ubuntu 22.04 OS image. |
| 2023-04-05 | Kubernetes 1.23 support |  | Clusters can now be launched with Kubernetes 1.23.16-gke.2800; Clusters can now be launched with Kubernetes 1.23.16-gke.200. |
| 2023-04-05 | Kubernetes 1.24 support |  | Clusters can now be launched with Kubernetes 1.24.10-gke.1200; Clusters can now be launched with Kubernetes 1.24.9-gke.2000. |
| 2023-04-05 | Kubernetes 1.25 support |  | Clusters can now be launched with Kubernetes 1.25.6-gke.1600; Clusters can now be launched with Kubernetes 1.25.5-gke.2000. |
| 2022-12-15 | Azure Active Directory integration |  | Azure Active Directory integration is GA for configuring cluster RBAC with Azure AD groups and handling users in more than 200 groups. |
| 2022-12-15 | Control plane metrics ingestion |  | Google Cloud Monitoring can ingest selected control plane metrics from kube-apiserver, kube-scheduler, kube-controller-manager, and etcd. |
| 2022-12-15 | gke-token-manager |  | The gke-token-manager generates tokens for control plane components without depending on kube-apiserver RBAC token generation. |
| 2022-12-15 | Google Groups cluster access |  | Administrators can grant cluster access to all members of a Google Group through RBAC permissions. |
| 2022-12-15 | Google Managed Service for Prometheus managed collection |  | Workload metrics can now be uploaded with Google Managed Service for Prometheus managed collection to Cloud Monarch in GA; Google Managed Service for Prometheus is available in private preview for monitoring and alerting on workloads in Kubernetes 1.24 and later. |
| 2022-12-15 | Kubernetes 1.25 deprecated APIs | 2022-12-15 | Kubernetes 1.25 deprecates several APIs that require migration guidance; deprecated on 2022-12-15. |
| 2022-09-29 | Google Cloud console cluster management |  | The Google Cloud console can now be used to update, upgrade, and delete clusters on Azure. |
| 2022-09-29 | System-assigned managed identities |  | Virtual machines launched by clusters now support Azure system-assigned managed identities starting in Kubernetes 1.24. |
| 2022-09-29 | Windows node pool Cloud Monitoring |  | Cloud Monitoring is supported for Windows node pools in Kubernetes 1.24 and later. |
| 2022-08-04 | Kubernetes 1.21 support | 2022-09-29 | Kubernetes 1.21 versions are no longer supported for clusters on Azure; Clusters can now be launched with Kubernetes 1.21.14-gke.2100; deprecated on 2022-09-29. |
| 2022-08-04 | Kubernetes 1.22 support | 2022-12-15 | Kubernetes 1.22 versions are no longer supported for clusters on Azure; Clusters can now be launched with Kubernetes 1.22.12-gke.200; deprecated on 2022-12-15. |
| 2022-07-13 | CIS benchmarks |  | CIS benchmarks are available for Kubernetes 1.23 clusters. |
| 2022-07-13 | Cloud Audit Logs |  | Cluster Cloud Audit Logs are available and enabled by default in Kubernetes 1.23 and higher. |
| 2022-07-13 | Scheduler and controller-manager profiling endpoint disablement |  | The profiling endpoint at /debug/pprof is now disabled by default in kube-scheduler and kube-controller-manager. |
| 2022-07-13 | Strong cryptographic ciphers |  | Kube-apiserver and kubelet now use only strong cryptographic ciphers. |
| 2022-04-13 | Azure admin users |  | Clusters now support specifying Azure admin users. |
| 2022-04-13 | Boot error reporting in long-running operations |  | Most common asynchronous cluster and node pool boot errors are now surfaced in the long-running operation error field. |
| 2022-04-13 | Cluster annotations |  | Clusters now support cluster annotations. |
| 2022-04-13 | Control plane root volume size configuration |  | Clusters now support configuring the control plane root volume size. |
| 2022-04-13 | Control plane VM size updates |  | Clusters now support updating the control plane VM size. |
| 2022-04-13 | Custom logging parameters |  | New Kubernetes 1.22 clusters can now be created with custom logging parameters. |
| 2022-04-13 | Kubernetes v1beta1 APIs | 2022-04-13 | Kubernetes 1.22 removes support for several deprecated v1beta1 APIs; deprecated on 2022-04-13. |
| 2022-04-13 | Node pool VM size updates |  | Clusters now support updating node pool VM sizes. |
| 2022-04-13 | Windows node pool image |  | Node pools can use Windows as the image type in preview for Kubernetes 1.22.8. |
| 2022-04-13 | Zero-minimum autoscaler |  | The autoscaler minimum node count can now be set to zero. |
| 2021-12-02 | Automatic Cloud Logging and Cloud Monitoring integration |  | Clusters now provide automatic container monitoring and system logging with Cloud Logging and Cloud Monitoring. |
| 2021-12-02 | Connect Gateway support |  | Clusters now include built-in Connect Gateway support. |
| 2021-12-02 | gcloud cluster lifecycle management |  | The gcloud tool can now create, update, and delete clusters on Azure. |
| 2021-09-30 | Australia region support |  | Clusters can now be launched in Australia regions. |
| 2021-09-30 | Control plane zonal placement |  | Clusters can now specify zone placement for control plane replicas at creation time. |
| 2021-09-30 | HTTP proxy support |  | Kubernetes 1.20 clusters now support use of an HTTP proxy. |
| 2021-09-30 | Kubernetes 1.20 support |  | Anthos clusters on Azure now supports Kubernetes 1.20 clusters. |
| 2021-09-30 | Singapore region support |  | Clusters can now be launched in the Singapore region. |
| 2021-06-30 | Application-layer secrets encryption |  | Clusters now support application-layer encryption for secrets. |
| 2021-06-30 | Cluster Autoscaler |  | Clusters now support Cluster Autoscaler. |
| 2021-06-30 | Configurable encrypted volumes |  | Clusters now support choosing volume type, volume size, and customer-managed encryption keys. |
| 2021-06-30 | gcloud alpha cluster and node pool support |  | Gcloud alpha now supports Anthos clusters on Azure clusters and node pools. |
| 2021-06-30 | Private clusters |  | Clusters now support private deployments with private IP addresses. |

Source file slug: `anthos-clusters-on-azure.md`

