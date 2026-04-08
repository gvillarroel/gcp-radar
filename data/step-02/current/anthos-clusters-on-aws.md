# Anthos clusters on AWS

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 36
Unique features: 51

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2023-09-06 | admin-groups flag in create and update APIs |  | The create and update APIs now support an admin-groups flag to designate cluster administrator groups without manual RBAC policy application. |
| 2023-09-06 | AWS Spot instance node pools |  | AWS Spot instance node pools are supported as a GA feature for Anthos clusters. |
| 2023-09-06 | Binary Authorization integration |  | Anthos clusters on AWS add Binary Authorization support to enforce trusted image signing and signature validation at deploy time. |
| 2023-09-06 | ignore_errors query parameter for delete API |  | A new ignore_errors=true query option allows forced deletion of clusters or node pools when IAM roles or resources are missing. |
| 2023-09-06 | Node auto repair |  | Node auto repair is added to continuously monitor node health in each node pool; Node auto repair is available in preview, enabling continuous monitoring of node health in node pools. |
| 2023-09-06 | Node pool metrics collection components |  | Anthos clusters on AWS now collect node-pool metrics for additional components including gke-metrics-agent, cilium-agent, cilium-operator, coredns, fluentbit-gke, kubelet, and konnectivity-agent. |
| 2023-09-06 | Surge updates for node pool updates |  | Anthos on AWS introduces surge updates to control the speed and disruption of node pool updates. |
| 2023-09-06 | VolumeSnapshot v1beta1 API removal | 2023-09-06 | The VolumeSnapshot, VolumeSnapshotContents, and VolumeSnapshotClass Kubernetes v1beta1 APIs are no longer available in the upgraded snapshot controller and webhook stack; deprecated on 2023-09-06. |
| 2023-05-04 | cgroup v2 default control groups |  | Anthos clusters on AWS now use cgroupv2 as the default control group configuration. |
| 2023-05-04 | Control plane metrics export |  | Monitoring is improved by exporting metrics for control-plane components. |
| 2023-05-04 | etcd v3.4.21 for new clusters |  | Newly created clusters on Anthos for AWS now default to etcd v3.4.21. |
| 2023-05-04 | Kubelet graceful node shutdown |  | Kubelet graceful node shutdown is enabled so non-system Pods terminate within 15 seconds and critical Pods have an additional 15 seconds to terminate gracefully. |
| 2023-05-04 | Kubernetes resource metadata export to Google Cloud |  | Kubernetes resource metadata can be sent to Google Cloud Platform for improved UI and cluster metrics, requiring the Config Monitoring for Ops API. |
| 2023-05-04 | Per-node-pool subnet security group ingress |  | Control-plane ingress is restricted to node-pool subnet IP ranges on TCP 443 and 8123 instead of VPC-wide rules. |
| 2023-05-04 | Ubuntu 22.04 OS image |  | Anthos on AWS node pools can use Ubuntu 22.04 as the default OS image. |
| 2023-04-05 | Supported Kubernetes versions |  | Anthos clusters on AWS now support launching with Kubernetes versions 1.23.16-gke.2800, 1.24.10-gke.1200, and 1.25.6-gke.1600; Anthos clusters on AWS now support launching with Kubernetes versions 1.23.16-gke.200, 1.24.9-gke.2000, and 1.25.5-gke.2000. |
| 2023-02-01 | containerd runtime upgrade |  | The containerd container runtime is upgraded to version 1.6.12. |
| 2023-02-01 | Storage driver upgrades |  | Storage drivers were upgraded in Anthos clusters on AWS. |
| 2022-12-15 | Amazon EFS dynamic provisioning on AWS |  | Amazon EFS dynamic provisioning is available in GA for Anthos on AWS clusters running Kubernetes 1.25 or later. |
| 2022-12-15 | Cloud Monitoring control plane metrics ingestion for Anthos clusters on AWS |  | Google Cloud Monitoring now ingests control-plane metrics from kube-apiserver, kube-scheduler, kube-controller-manager, and etcd as a preview feature. |
| 2022-12-15 | CloudWatch metrics collection for AWS node pool auto scaling groups |  | CloudWatch metrics collection can now be enabled and updated for AWS node pool auto-scaling groups. |
| 2022-12-15 | Dynamic AWS node pool security group updates |  | Anthos clusters on AWS now support dynamically updating AWS node pool security groups with the required EC2 permissions. |
| 2022-12-15 | Dynamic AWS node pool tag updates |  | Anthos clusters on AWS now support dynamically updating AWS node pool tags via required autoscaling and EC2 permissions. |
| 2022-12-15 | gke-token-manager |  | A new gke-token-manager component was added to generate tokens for control-plane components. |
| 2022-12-15 | Google Group-based RBAC access for Anthos clusters on AWS |  | Administrators can grant AWS cluster access to all members of a Google Group by assigning the required RBAC permission to that group. |
| 2022-12-15 | Kubernetes 1.22 support removal | 2022-12-15 | Kubernetes 1.22 versions are no longer supported for Anthos clusters on AWS; deprecated on 2022-12-15. |
| 2022-12-15 | Kubernetes v1.25 API deprecations | 2022-12-15 | Kubernetes 1.25 in Anthos clusters on AWS deprecates several Kubernetes APIs; deprecated on 2022-12-15. |
| 2022-12-15 | Managed Service for Prometheus workload metrics ingest to Cloud Monarch |  | Workload metrics can be uploaded to Cloud Monarch using managed collection in Google Managed Service for Prometheus, with this capability upgraded to GA. |
| 2022-09-29 | Arm node pools in Anthos clusters on AWS |  | Creating Arm architecture node pools is now available as a preview feature in Anthos clusters on AWS. |
| 2022-09-29 | Cloud Console management for Anthos clusters on AWS |  | Anthos clusters on AWS can now be updated, upgraded, and deleted through the Google Cloud console. |
| 2022-09-29 | Cloud Monitoring support for Windows node pools in Anthos on AWS |  | Anthos clusters on AWS now support Cloud Monitoring for Windows node pools starting in Kubernetes version 1.24 and later. |
| 2022-09-29 | Control plane tag updates on Kubernetes 1.24+ clusters |  | Anthos Clusters on AWS now supports updating control plane tags for Kubernetes clusters running version 1.24 or later. |
| 2022-09-29 | EFS dynamic provisioning on Anthos clusters on AWS |  | Anthos clusters on AWS in Kubernetes 1.24+ now support dynamic EFS provisioning in preview mode. |
| 2022-09-29 | Google Cloud Managed Service for Prometheus availability |  | Google Cloud Managed Service for Prometheus became available as an invite-only private preview on Anthos clusters on AWS for managed Prometheus-based monitoring and alerting. |
| 2022-09-29 | IMDS emulator for legacy workloads on Anthos clusters on AWS |  | Legacy workloads that do not support Workload Identity can now access IMDS data using the IMDS emulator. |
| 2022-09-29 | Kubernetes 1.21 support in Anthos clusters on AWS | 2022-09-29 | Anthos Clusters on AWS no longer supports Kubernetes 1.21 versions; deprecated on 2022-09-29. |
| 2022-08-04 | Additional supported Kubernetes patch versions |  | The service added support to launch clusters using Kubernetes versions 1.23.8-gke.1700, 1.22.12-gke.200, and 1.21.14-gke.2100. |
| 2022-07-13 | CIS benchmark support for Kubernetes 1.23 |  | CIS benchmarks became available for Kubernetes 1.23 clusters in Anthos clusters on AWS. |
| 2022-07-13 | Cloud Audit Logs for clusters |  | Cluster Cloud Audit Logs became available and enabled by default for Kubernetes 1.23 and higher clusters. |
| 2022-07-13 | Disable profiling endpoint by default |  | In Kubernetes 1.23.7-gke.1300, the profiling endpoint (/debug/pprof) is disabled by default in kube-scheduler and kube-controller-manager. |
| 2022-07-13 | Instance Metadata Service emulator |  | Kubernetes 1.23.7-gke.1300 added an Instance Metadata Service (IMDS) emulator. |
| 2022-07-13 | Kubernetes 1.23 cluster launch support |  | Anthos on AWS added the ability to launch Kubernetes 1.23 clusters. |
| 2022-07-13 | Strong cryptographic ciphers for control plane components |  | Kubernetes 1.23.7-gke.1300 updated kube-apiserver and kubelet to use only strong cryptographic ciphers. |
| 2022-07-13 | VolumeSnapshot v1beta1 API deprecation | 2022-07-13 | A future 1.23 release is slated to stop serving VolumeSnapshot v1beta1 APIs, with migration to VolumeSnapshot v1 recommended; deprecated on 2022-07-13. |
| 2022-04-13 | Asynchronous boot error visibility in long-running operations |  | Most common asynchronous cluster and nodepool boot errors can now be viewed in the long-running operation error field. |
| 2022-04-13 | Autoscaler minimum node count |  | The autoscaler now supports setting the minimum node count to zero. |
| 2022-04-13 | Custom logging parameters on cluster creation |  | New Kubernetes 1.22 clusters can now be configured with custom logging parameters at creation time. |
| 2022-04-13 | Dedicated host node pools (preview) |  | Anthos on AWS added a preview capability to configure nodes to run on dedicated hosts. |
| 2022-04-13 | Expanded cluster and node pool configuration updates |  | Cluster updates now support more configuration fields, including control plane security group IDs, proxy settings, node pool SSH settings, root volume, and encryption settings. |
| 2022-04-13 | Kubernetes 1.22 deprecated v1beta1 API removals | 2022-04-13 | Kubernetes 1.22 removes support for several deprecated v1beta1 APIs and requires workloads to migrate to stable v1 APIs; deprecated on 2022-04-13. |
| 2022-04-13 | Windows node pool image type preview |  | A preview feature allows selecting Windows as the node pool image type when creating node pools on Kubernetes 1.22.8. |

Source file slug: `anthos-clusters-on-aws.md`

