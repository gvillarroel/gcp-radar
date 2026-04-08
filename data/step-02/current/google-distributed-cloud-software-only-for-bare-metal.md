# Google Distributed Cloud (software only) for bare metal

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 30
Unique features: 65

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-02-13 | NodePoolClaim taint mutability |  | The spec.taints field in NodePoolClaim is mutable, so you can add or remove taints on existing node pools without recreating the claim. |
| 2025-12-11 | bmctl upgrade intermediate-version |  | The bmctl upgrade intermediate-version command prints the intermediate version needed for a skip minor version upgrade. |
| 2025-12-11 | Egress NAT gateway fast failover |  | The egress NAT gateway in high availability mode supports fast failover to improve reliability and throughput for egress traffic. |
| 2025-12-11 | Prometheus-backed horizontal Pod autoscaling |  | Horizontal Pod autoscaling can use custom metrics from a Prometheus server to scale applications without manually deploying and managing the adapter. |
| 2025-12-11 | Prometheus-backed vertical Pod autoscaling |  | Vertical Pod autoscaling can use a Prometheus instance as a persistent history provider for long-term CPU and memory usage data. |
| 2025-12-11 | Skip minor version cluster upgrades |  | Clusters can be upgraded directly to two minor versions above the current version when worker node pools are not pinned lower. |
| 2025-09-02 | Bundled NVIDIA GPU Operator |  | A bundled version of NVIDIA GPU Operator is available to manage the software components needed for GPU devices. |
| 2025-09-02 | Dynamic Resource Allocation |  | Dynamic Resource Allocation lets Kubernetes request and share generic resources such as GPUs among pods and containers. |
| 2025-09-02 | Envoy sidecar in GKE Identity Service |  | GKE Identity Service includes an Envoy sidecar to improve security, reliability, and performance. |
| 2025-09-02 | Node Agent |  | Node Agent replaces Ansible over SSH with a more secure, agent-based model for cluster operations. |
| 2025-09-02 | Per-node-pool pod density override |  | You can override the cluster-level pod density setting for individual node pools. |
| 2025-09-02 | Ubuntu 24.04 LTS support |  | Bare metal clusters support Ubuntu 24.04 LTS with Linux kernel versions such as 6.8 and 6.11. |
| 2025-09-02 | Vertical Pod autoscaling |  | Vertical Pod autoscaling can recommend and optionally apply CPU and memory requests and limits for pods. |
| 2025-05-06 | Automatic Keepalived VRRP configuration |  | For high availability control planes, Google Distributed Cloud automatically configures Keepalived VRRP settings to make failover behavior deterministic. |
| 2025-05-06 | controlPlane.loadBalancer.keepalivedVRRPGARPMasterRepeat |  | This cluster configuration field sets how many gratuitous ARP messages Keepalived sends when a control plane node becomes master. |
| 2025-05-06 | controlPlane.loadBalancer.mode |  | This field enables Layer 2 load balancing and lets you separate control plane load balancing from data plane load balancing. |
| 2025-05-06 | GKE Identity Service diagnostic utility |  | The GKE Identity Service diagnostic utility provides diagnostics information for login flow and OIDC configuration issues. |
| 2025-02-05 | bmctl configure projects |  | The bmctl configure projects command automatically configures IAM policy bindings, creates required service accounts, and enables required APIs for Workload Identity cluster authentication. |
| 2024-08-29 | bmctl update diff view |  | The bmctl update command can show differences between the cluster YAML configuration and the deployed Cluster and NodePool resources. |
| 2024-08-29 | Concurrent management of multiple user cluster versions |  | Admin and hybrid clusters can manage multiple user cluster versions concurrently; Admin and hybrid clusters can manage multiple user cluster versions concurrently. |
| 2024-08-29 | Custom Scheduler Configuration |  | Custom Scheduler Configuration lets pods spread workloads across cluster nodes for increased reliability. |
| 2024-08-29 | Identity Service token session duration |  | You can set the session duration for Identity Service-issued tokens between 15 and 1440 minutes. |
| 2024-08-29 | Keyless mode for clusters |  | Keyless mode uses short-lived tokens and Workload Identity Federation instead of long-lived service account keys and Kubernetes Secrets. |
| 2024-08-29 | kubectl attach/cp/exec via Connect Gateway |  | The connect gateway preview feature enables kubectl attach, cp, and exec commands through gcloud beta container fleet memberships get-credentials. |
| 2024-08-29 | Node pool upgrade rollback |  | You can roll back select node pool upgrades; You can roll back select node pool upgrades. |
| 2024-08-29 | Node-level private registry configuration |  | You can configure private registries at the node level for workload images; You can configure private registries at the node level for workload images. |
| 2024-08-08 | RHEL 9.2 support |  | Bare metal clusters support Red Hat Enterprise Linux 9.2 in version 1.29.400-gke.86 and higher. |
| 2024-04-29 | Eviction-based maintenance mode draining |  | Maintenance mode now drains nodes with the Eviction API instead of taint-based draining to better protect workloads. |
| 2024-04-29 | GKE Identity Service v2 |  | GKE Identity Service v2 improves the security flow when authenticating with third-party identity solutions; Provides an improved authentication flow with third-party identity solutions. |
| 2024-04-29 | Intermediate CA cluster root CA |  | You can use an intermediate Certificate Authority as the cluster root CA. |
| 2024-04-29 | Pause and resume cluster upgrades |  | You can pause and resume cluster upgrades. |
| 2024-04-29 | Selective node pool upgrades with two-minor-version skew |  | Selective node pool upgrades can span up to two minor versions; Allows selective node pool upgrades when the version skew is up to two minor versions. |
| 2023-12-15 | BGP community support |  | Adds BGP Community support so routes from BGP load balancers can be distinguished from other network routes. |
| 2023-12-15 | Cluster upgrade pause and resume |  | Lets you pause and later resume cluster upgrades. |
| 2023-12-15 | Custom cluster certificate authorities |  | Lets you use custom certificate authorities for cluster authentication and encryption. |
| 2023-12-15 | Direct Server Return load balancing |  | Adds Direct Server Return load balancing for clusters; Adds Direct Server Return load balancing for clusters configured with flat-mode networking. |
| 2023-12-15 | Fleet regional membership |  | Lets you specify a fleet membership's region with gkeConnect.location. |
| 2023-12-15 | Kubernetes API server certificate extra SANs |  | Lets you add extra subject alternative name entries to the Kubernetes API server certificate. |
| 2023-12-15 | Multiple BGPLoadBalancer resources |  | Lets you define multiple BGPLoadBalancer resources to control how peers advertise load balancer nodes and services. |
| 2023-12-15 | Red Hat Enterprise Linux 9.2 support |  | Adds support for running clusters on Red Hat Enterprise Linux version 9.2. |
| 2023-08-25 | Automatic Anthos On-Prem API enrollment |  | Automatically enrolls admin and user clusters in the Anthos On-Prem API for lifecycle management. |
| 2023-08-25 | bmctl register target-cluster-name flag |  | Adds a target-cluster-name flag to bmctl register for specifying the target cluster. |
| 2023-08-25 | Custom resource drift health check |  | Adds a health check that detects unsupported drift in custom resources managed by the platform. |
| 2023-08-25 | Dedicated etcd instance for etcd-events |  | Adds a separate always-on etcd instance for the etcd-events object. |
| 2023-08-25 | Independent worker node pool upgrades |  | Lets selected worker node pools be upgraded separately from the rest of the cluster. |
| 2023-08-25 | Kubelet image pull settings |  | Lets you configure image pull settings for node pool kubelets. |
| 2023-08-25 | LoadBalancer Services with externalTrafficPolicy=Local on bundled BGP |  | Lets LoadBalancer Services use externalTrafficPolicy=Local with bundled BGP load balancing. |
| 2023-08-25 | Parallel worker node pool upgrades |  | Lets worker node pools be upgraded in parallel. |
| 2023-08-25 | Red Hat Enterprise Linux 8.8 support |  | Adds support for running clusters on Red Hat Enterprise Linux version 8.8. |
| 2022-05-04 | Anthos clusters on bare metal 1.10.4 |  | Version 1.10.4 of Anthos clusters on bare metal is available for download and runs on Kubernetes 1.21. |
| 2022-03-31 | Anthos clusters on bare metal 1.10.3 |  | Version 1.10.3 of Anthos clusters on bare metal is available for download and runs on Kubernetes 1.21. |
| 2022-02-25 | Anthos clusters on bare metal 1.10.2 |  | Version 1.10.2 of Anthos clusters on bare metal is available for download and runs on Kubernetes 1.21. |
| 2022-01-27 | Anthos clusters on bare metal 1.10.1 |  | Version 1.10.1 of Anthos clusters on bare metal is available for download and runs on Kubernetes 1.21. |
| 2021-12-10 | Anthos clusters on bare metal 1.10.0 |  | Version 1.10.0 of Anthos clusters on bare metal is available for download and runs on Kubernetes 1.21. |
| 2021-12-10 | Anthos multi-cluster connectivity |  | Connected Anthos clusters in the same data center can communicate with each other over pod IP addresses without NAT. |
| 2021-12-10 | bmctl backup and restore commands |  | Bmctl includes backup and restore commands to support cluster disaster recovery. |
| 2021-12-10 | bmctl cluster snapshot contents |  | The bmctl check cluster snapshot now includes the cluster YAML file and bmctl-workspace logs. |
| 2021-12-10 | Cloud Logging issue severity levels |  | Cloud Logging can now show the severity level of an issue extracted from containerd and kubelet node logs. |
| 2021-12-10 | cluster.gkeHubRegistrationStatus |  | The cluster.gkeHubRegistrationStatus field shows a cluster's membership status in GKE Hub. |
| 2021-12-10 | IPv4 flat mode networking |  | IPv4 flat mode makes pod IPv4 addresses visible and routable within the same Layer 2 domain without masquerading as node IPs. |
| 2021-12-10 | IPv4/IPv6 dual-stack networking |  | Clusters can be deployed in a dual-stack network with both IPv4 and IPv6 addresses assigned to nodes and pods. |
| 2021-12-10 | Node Problem Detector |  | Node Problem Detector runs by default on all nodes. |
| 2021-12-10 | OpenTelemetry-based application metrics pipeline |  | Application metrics collection now uses a more scalable monitoring pipeline based on OpenTelemetry. |
| 2021-12-10 | SR-IOV support |  | SR-IOV support lets clusters configure virtual functions on supported node devices and choose the kernel module bound to each VF. |
| 2021-12-10 | SSH-based node reset |  | Individual nodes can be reset using the SSH key. |

Source file slug: `google-distributed-cloud-software-only-for-bare-metal.md`

