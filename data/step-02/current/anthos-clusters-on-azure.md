# Anthos clusters on Azure

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 37
Unique features: 57

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2023-09-06 | Admin-groups API Flag |  | The create and update APIs now support an admin-groups flag to quickly add listed groups as cluster administrators without manual RBAC policy creation. |
| 2023-09-06 | Audit-Proxy Log Ingestion Compression |  | Audit-proxy log ingestion is optimized by enabling gzip compression for audit logging. |
| 2023-09-06 | Control Plane etcd Periodic Defragmentation |  | Automatic periodic defragmentation is enabled for control-plane etcd and etcd-events to reduce disk usage and prevent storage-related unavailability. |
| 2023-09-06 | Default etcd Version Update |  | New clusters now default to etcd v3.4.21, while clusters upgraded to this release use etcd v3.5.6. |
| 2023-09-06 | Fluent Bit Log Ingestion Compression |  | Fluent-bit log ingestion into Cloud Logging is now compressed with gzip for improved transfer efficiency. |
| 2023-09-06 | Google-Managed Artifact Integrity Validation |  | Google-managed binary artifacts downloaded from Cloud Storage now use file-integrity checks and fingerprint validation. |
| 2023-09-06 | Kubelet Read-Only Port 10255 Disabled |  | Unauthenticated access to the kubelet read-only port 10255 is now disabled on upgraded node pools. |
| 2023-09-06 | Kubelet Resource Reservation |  | Node resource management now reserves resources for kubelet to reduce the risk of out-of-memory conditions for system and Kubernetes processes. |
| 2023-09-06 | Kubernetes Resource Metrics Prefix Update |  | Kubernetes resource metric names now use the kubernetes.io/anthos/ prefix instead of kubernetes.io/. |
| 2023-09-06 | Kubernetes VolumeSnapshot v1beta1 APIs Removal | 2023-09-06 | The v1beta1 APIs VolumeSnapshot, VolumeSnapshotContents, and VolumeSnapshotClass are no longer available after the snapshot-controller and webhook update; deprecated on 2023-09-06. |
| 2023-09-06 | Node Auto Repair |  | Anthos clusters on Azure now support node auto repair in Kubernetes 1.27, which continuously monitors node health within each node pool; Node auto repair is available as a preview feature for Anthos clusters on Azure. |
| 2023-09-06 | Node Pool Metric Set Expansion |  | Node-pool monitoring was expanded to include metrics from gke-metrics-agent, cilium-agent, cilium-operator, coredns, fluentbit-gke, kubelet, and konnectivity-agent. |
| 2023-05-04 | cgroupv2 Default Control Groups |  | The default control-group configuration is now cgroupv2, requiring apps that access the cgroup filesystem to support this mode. |
| 2023-05-04 | Cluster etcd Version Policy |  | Newly created clusters use etcd v3.4.21, and existing older-version clusters are not downgraded during upgrade, instead using v3.5.6. |
| 2023-05-04 | Control Plane Metrics Export |  | Monitoring now exports metrics for control-plane components. |
| 2023-05-04 | Kubernetes Resource Metadata Export |  | Cluster resource metadata is now sendable to Google Cloud Platform to improve UI and metrics, with Config Monitoring for Ops API enabled for ingestion. |
| 2023-05-04 | Ubuntu 22.04 Node OS Image |  | Anthos on Azure clusters now use the Ubuntu 22.04 node image. |
| 2023-04-05 | Supported Kubernetes Versions |  | Clusters can now be launched with Kubernetes versions 1.23.16-gke.2800, 1.24.10-gke.1200, and 1.25.6-gke.1600; Clusters can now be launched with Kubernetes versions 1.23.16-gke.200, 1.24.9-gke.2000, and 1.25.5-gke.2000. |
| 2023-02-01 | containerd Upgrade |  | The container runtime version was upgraded to containerd 1.6.12. |
| 2023-02-01 | Storage Driver Upgrades |  | Cluster storage drivers were upgraded to newer versions. |
| 2022-12-15 | Azure Active Directory integration for Anthos RBAC |  | Added GA support for Azure Active Directory so cluster administrators can configure RBAC policies using Azure AD groups and retrieve group membership for users with large group counts. |
| 2022-12-15 | Control Plane Metrics Ingestion Preview |  | Cloud Monitoring can ingest a preview set of control-plane metrics from kube-apiserver, kube-scheduler, kube-controller-manager, and etcd. |
| 2022-12-15 | gke-token-manager |  | Introduced gke-token-manager to generate control-plane tokens independently of the Kubernetes API server, removing the token generation dependency on kube-apiserver. |
| 2022-12-15 | Google Group Cluster Access for Administrators |  | Azure cluster administrators can grant Azure cluster access to all members of a Google Group by assigning the required RBAC permission to that group. |
| 2022-12-15 | Kubernetes 1.22 Support Removal | 2022-12-15 | Kubernetes 1.22 versions are no longer supported for Anthos clusters on Azure; deprecated on 2022-12-15. |
| 2022-12-15 | Kubernetes 1.25 API Deprecations | 2022-12-15 | Kubernetes 1.25 introduces API deprecations for Anthos clusters on Azure; deprecated on 2022-12-15. |
| 2022-12-15 | Managed Prometheus to Cloud Monarch Collection |  | Uploading workload metrics with managed collection to Cloud Monarch via Google Managed Service for Prometheus was promoted from preview to GA. |
| 2022-09-29 | Cloud Monitoring for Windows node pools |  | Added support for Cloud Monitoring on Windows node pools in Anthos clusters on Azure for Kubernetes 1.24 and later. |
| 2022-09-29 | Google Cloud Console cluster lifecycle operations |  | Enabled management actions in Google Cloud Console to update, upgrade, and delete Anthos clusters on Azure. |
| 2022-09-29 | Google Cloud Managed Service for Prometheus on Anthos on Azure |  | Enabled Google Cloud Managed Service for Prometheus as an invite-only private preview starting with Kubernetes 1.24+ on Anthos clusters on Azure. |
| 2022-09-29 | Kubernetes 1.21 support in Anthos clusters on Azure | 2022-09-29 | Dropped support for Kubernetes 1.21 versions in Anthos clusters on Azure; deprecated on 2022-09-29. |
| 2022-09-29 | System-assigned managed identities on Azure nodes |  | Enabled System Assigned Managed Identities for virtual machines launched by Anthos clusters on Azure starting with Kubernetes 1.24. |
| 2022-08-04 | Supported Kubernetes versions for new Anthos on Azure clusters |  | Added launch support for specific Kubernetes versions 1.23.8-gke.1700, 1.22.12-gke.200, and 1.21.14-gke.2100 in Anthos clusters on Azure. |
| 2022-07-13 | CIS benchmarks for Kubernetes 1.23 |  | Made CIS benchmarks available for Anthos clusters running Kubernetes 1.23. |
| 2022-07-13 | Cloud Audit Logs for Anthos clusters |  | Enabled Cloud Audit Logs for clusters in Kubernetes 1.23 and later, with logs enabled by default. |
| 2022-07-13 | Debug endpoint disabled by default in control plane components |  | In Kubernetes 1.23.7-gke.1300, the /debug/pprof profiling endpoint is disabled by default in kube-scheduler and kube-controller-manager. |
| 2022-07-13 | Kubernetes 1.23 cluster support |  | Added support to launch Kubernetes 1.23 clusters on Anthos clusters on Azure. |
| 2022-07-13 | Stronger cryptographic ciphers for control plane components |  | Updated kube-apiserver and kubelet in Kubernetes 1.23.7-gke.1300 to use only strong cryptographic ciphers. |
| 2022-07-13 | VolumeSnapshot v1beta1 API deprecation | 2022-07-13 | Noted that VolumeSnapshot v1beta1 APIs will be removed from serving in a future Kubernetes 1.23 release and workloads should migrate to VolumeSnapshot v1; deprecated on 2022-07-13. |
| 2022-04-13 | Asynchronous cluster and node pool boot error reporting |  | Most common asynchronous cluster and node pool boot errors are now shown in the long-running operation error field. |
| 2022-04-13 | Autoscaler minimum node count zero setting |  | The autoscaler now supports setting the minimum node count to zero. |
| 2022-04-13 | Control plane and node pool VM root volume size update |  | Anthos clusters on Azure now allows Azure admin users to update control plane and node pool VM sizes via annotations, including control plane root volume size. |
| 2022-04-13 | Custom logging parameters for Kubernetes 1.22 clusters |  | New clusters created with Kubernetes 1.22 can now be configured with custom logging parameters. |
| 2022-04-13 | Deprecated Kubernetes v1beta1 API removal in 1.22 | 2022-04-13 | Removed support for deprecated Kubernetes v1beta1 APIs when upgrading to Kubernetes 1.22 in Anthos clusters on Azure; deprecated on 2022-04-13. |
| 2022-04-13 | Windows node pool image type preview |  | Anthos on Azure now offers a preview option to choose Windows as the node pool image type for Kubernetes 1.22.8 clusters. |
| 2021-12-02 | Automatic Cloud Logging and Cloud Monitoring integration |  | Anthos clusters on Azure now include automatic container monitoring and system logging through Cloud Logging and Cloud Monitoring. |
| 2021-12-02 | Built-in Connect Gateway support |  | Anthos clusters on Azure now provides built-in support for Connect Gateway. |
| 2021-12-02 | Cluster lifecycle operations via gcloud |  | Users can create, update, and delete Anthos clusters on Azure using the gcloud tool and the Multi-Cloud API. |
| 2021-09-30 | Control plane replica zonal placement |  | Users can specify the zone placement of control plane replicas when creating a cluster. |
| 2021-09-30 | Expanded Azure region support for cluster launch |  | Cluster launch is now available in the Singapore and Australia Azure regions. |
| 2021-09-30 | HTTP proxy support for Kubernetes 1.20 clusters |  | Users can configure an HTTP proxy for Anthos Kubernetes 1.20 clusters. |
| 2021-09-30 | Kubernetes 1.20 support |  | Anthos clusters on Azure now supports running Kubernetes 1.20 clusters. |
| 2021-06-30 | Application-layer secrets encryption |  | Anthos on Azure added support for encrypting application-layer secrets. |
| 2021-06-30 | Cluster Autoscaler |  | Anthos clusters on Azure added support for Cluster Autoscaler. |
| 2021-06-30 | Configurable node-pool volume options and customer-managed encryption keys |  | Anthos on Azure now allows selection of node-pool volume type, size, and customer-managed encryption keys. |
| 2021-06-30 | gcloud alpha container azure cluster and node-pool support |  | The gcloud alpha command set gained support for managing Anthos Azure clusters and node pools. |
| 2021-06-30 | Private clusters with private IPs for Anthos on Azure |  | Anthos clusters on Azure now support private clusters that use private IP addressing. |

Source file slug: `anthos-clusters-on-azure.md`

