# Anthos clusters on AWS

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 36
Unique features: 37

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2023-09-06 | Admin groups cluster administrator access |  | The admin-groups flag lets listed groups authenticate directly as cluster administrators without manual RBAC setup. |
| 2023-09-06 | AWS spot instance node pools |  | AWS spot instance node pools let clusters run node pools on lower-cost Amazon EC2 Spot Instances. |
| 2023-09-06 | Binary Authorization |  | Binary Authorization enforces deployment of only trusted and properly signed container images. |
| 2023-09-06 | Delete API ignore_errors option |  | The delete API supports an ignore_errors option to forcibly remove clusters or node pools when deletion is blocked by missing roles or resources. |
| 2023-09-06 | Expanded node pool metrics collection |  | Anthos clusters on AWS collects additional node pool metrics from components including gke-metrics-agent, Cilium, CoreDNS, Fluent Bit, kubelet, and konnectivity-agent. |
| 2023-09-06 | Node auto repair |  | Node auto repair continuously monitors node health and repairs unhealthy nodes in a node pool; Node auto repair continuously monitors node health and repairs unhealthy nodes in a node pool. |
| 2023-09-06 | Surge updates |  | Surge updates let you control the speed and disruption of node pool updates. |
| 2023-09-06 | VolumeSnapshot v1beta1 APIs | 2023-09-06 | The VolumeSnapshot, VolumeSnapshotContents, and VolumeSnapshotClass v1beta1 APIs are no longer available; The VolumeSnapshot v1beta1 APIs are scheduled to stop being served and workloads should migrate to VolumeSnapshot v1 APIs; deprecated on 2023-09-06. |
| 2023-05-04 | Control plane metrics export |  | Anthos clusters on AWS exports control plane component metrics for improved monitoring; Google Cloud Monitoring can ingest control plane metrics from kube-apiserver, kube-scheduler, kube-controller-manager, and etcd. |
| 2023-05-04 | Kubelet graceful node shutdown |  | Kubelet graceful node shutdown gives pods time to terminate cleanly during node shutdown. |
| 2023-05-04 | Kubernetes resource metadata export |  | Clusters can send Kubernetes resource metadata to Google Cloud Platform to improve the user interface and cluster metrics. |
| 2023-05-04 | Per-node-pool subnet security group rules |  | Control plane security rules now restrict inbound traffic by node pool subnet ranges instead of the full VPC primary IP range. |
| 2023-05-04 | Ubuntu 22.04 node OS image |  | Clusters use an Ubuntu 22.04 OS image with cgroupv2 as the default control group configuration. |
| 2022-12-15 | CloudWatch metrics collection for node pool auto scaling groups |  | Anthos clusters on AWS can enable and update CloudWatch metrics collection on AWS node pool auto scaling groups. |
| 2022-12-15 | Dynamic AWS node pool security groups |  | Anthos clusters on AWS can dynamically update AWS node pool security groups after creation. |
| 2022-12-15 | Dynamic AWS node pool tags |  | Anthos clusters on AWS can dynamically update AWS node pool tags after creation. |
| 2022-12-15 | EFS dynamic provisioning |  | EFS dynamic provisioning automatically provisions Amazon Elastic File System storage for supported clusters; EFS dynamic provisioning automatically provisions Amazon Elastic File System storage for supported clusters. |
| 2022-12-15 | gke-token-manager |  | Gke-token-manager generates tokens for control plane components without depending on kube-apiserver RBAC. |
| 2022-12-15 | Google Groups cluster access |  | Administrators can grant AWS cluster access to all members of a Google Group through RBAC permissions. |
| 2022-12-15 | Google Managed Service for Prometheus managed collection |  | Managed collection uploads workload metrics with Google Managed Service for Prometheus to Cloud Monarch; Google Managed Service for Prometheus provides managed Prometheus-based monitoring and alerting for workloads. |
| 2022-12-15 | Kubernetes 1.22 support | 2022-12-15 | Support for Kubernetes 1.22 versions in Anthos clusters on AWS has ended; deprecated on 2022-12-15. |
| 2022-12-15 | Kubernetes 1.25 deprecated APIs | 2022-12-15 | Kubernetes 1.25 deprecates several APIs that may affect workloads running on Anthos clusters on AWS; deprecated on 2022-12-15. |
| 2022-09-29 | Arm node pools |  | Anthos clusters on AWS can create Arm-based node pools for running Arm workloads. |
| 2022-09-29 | Cloud Monitoring for Windows node pools |  | Anthos clusters on AWS supports Cloud Monitoring for Windows node pools on Kubernetes 1.24 and later. |
| 2022-09-29 | Control plane tags update |  | Anthos clusters on AWS supports updating control plane tags for clusters running Kubernetes 1.24 or later. |
| 2022-09-29 | Google Cloud console cluster lifecycle management |  | The Google Cloud console can update, upgrade, and delete Anthos clusters on AWS. |
| 2022-09-29 | IMDS emulator |  | The IMDS emulator lets legacy workloads access instance metadata service data without direct Workload Identity support; The IMDS emulator lets workloads access instance metadata service data from within Anthos clusters on AWS. |
| 2022-09-29 | Kubernetes 1.21 support | 2022-09-29 | Support for Kubernetes 1.21 versions in Anthos clusters on AWS has ended; deprecated on 2022-09-29. |
| 2022-07-13 | CIS benchmarks |  | CIS benchmarks are available for Kubernetes 1.23 clusters. |
| 2022-07-13 | Cluster Cloud Audit Logs |  | Cluster Cloud Audit Logs are available and enabled by default on Kubernetes 1.23 and later. |
| 2022-04-13 | Asynchronous boot error reporting |  | Common asynchronous cluster and node pool boot errors are surfaced in the long-running operation error field. |
| 2022-04-13 | Cluster configuration updates |  | Anthos clusters on AWS supports updating configuration settings such as security groups, proxies, SSH, root volume, and encryption. |
| 2022-04-13 | Custom logging parameters |  | New Kubernetes 1.22 clusters can be created with custom logging parameters. |
| 2022-04-13 | Dedicated hosts |  | Anthos clusters on AWS can configure nodes to run on dedicated hosts in preview. |
| 2022-04-13 | Kubernetes 1.22 deprecated v1beta1 APIs | 2022-04-13 | Kubernetes 1.22 removes support for several deprecated v1beta1 APIs and requires workloads to use stable v1 APIs; deprecated on 2022-04-13. |
| 2022-04-13 | Scale-to-zero node pools |  | Node pool autoscaling can set the minimum node count to zero. |
| 2022-04-13 | Windows node pool image type |  | Anthos clusters on AWS can create node pools with a Windows image type in preview for Kubernetes 1.22.8. |

Source file slug: `anthos-clusters-on-aws.md`

