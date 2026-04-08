# Cluster Toolkit

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 33
Unique features: 65

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-25 | GKE cloud DNS default configuration |  | The gke-cluster module defaults cloud_dns_config to KUBE_DNS with CoreDNS support. |
| 2026-03-25 | Managed Lustre integration for GKE A4X Max |  | Cluster Toolkit integrates Google Cloud Managed Lustre for Google Kubernetes Engine deployments using A4X Max machines. |
| 2026-03-12 | Zone-aware disk type validation |  | Cluster Toolkit validates disk type compatibility for specific zones. |
| 2026-03-05 | A4X-Max Bare Metal support |  | Cluster Toolkit supports A4X-Max Bare Metal deployments for both GKE and Slurm environments. |
| 2026-03-05 | Conditional and required configuration validations |  | Cluster Toolkit introduces early validation for conditional and required configuration settings. |
| 2026-03-05 | Dynamic Workload Scheduler queued provisioning for TPU |  | Cluster Toolkit enables Dynamic Workload Scheduler queued provisioning for TPU v6e and TPU 7x resources. |
| 2026-02-12 | A4X JBVM blueprint |  | Cluster Toolkit provides an A4X JBVM blueprint for provisioning VM groups for machine learning workloads. |
| 2026-02-05 | Cloud Storage FUSE profile for Slurm blueprints |  | Slurm cluster blueprints use the Cloud Storage FUSE profile feature for AI and ML bucket mounts. |
| 2026-02-05 | Dynamic Workload Scheduler Flex-start for TPU |  | Cluster Toolkit supports the Dynamic Workload Scheduler Flex-start provisioning model for TPU 7x and TPU v6e resources. |
| 2026-01-28 | Infrastructure Data-Plane Function support |  | Cluster Toolkit adds support for the Infrastructure Data-Plane Function. |
| 2026-01-28 | IPv6 support |  | Cluster Toolkit adds support for IPv6 networking. |
| 2026-01-28 | Report and Replace API integration for Slurm |  | Cluster Toolkit integrates the Report and Replace API with Slurm to report faulty nodes for repair or replacement. |
| 2026-01-21 | Dynamic Workload Scheduler Flex-start for G4 |  | Cluster Toolkit enables Dynamic Workload Scheduler Flex-start provisioning for G4 instances. |
| 2026-01-14 | gIB Arm64 version support |  | Cluster Toolkit supports gIB versions 1.1.1 and 1.1.0 on Arm64-based architecture. |
| 2026-01-14 | Parallelstore module | 2026-01-14 | The Parallelstore module is deprecated in Cluster Toolkit; deprecated on 2026-01-14. |
| 2026-01-07 | Automated Google Cloud resource cleanup script |  | Cluster Toolkit adds an automated script to clean up Google Cloud resources that are no longer needed. |
| 2026-01-07 | Cloud Build cleanup pipeline |  | Cluster Toolkit integrates a Cloud Build pipeline for removing unneeded resources. |
| 2026-01-07 | Robust destroy workflow |  | Cluster Toolkit introduces a more reliable process for deleting provisioned resources. |
| 2025-12-18 | Configurable Kueue installation wait parameter |  | Cluster Toolkit makes the wait parameter for Kueue installation configurable. |
| 2025-12-18 | NCCL test script for Slurm on GKE |  | Cluster Toolkit provides an example NCCL test script for Slurm on GKE deployments. |
| 2025-12-10 | Cloud Storage Bucket core module |  | The cloud-storage-bucket module is promoted into the core collection of Cluster Toolkit modules. |
| 2025-12-04 | Google Cloud NetApp Volumes support |  | Cluster Toolkit adds support for Google Cloud NetApp Volumes. |
| 2025-12-04 | kubectl force_conflicts flag support |  | Cluster Toolkit adds a force_conflicts flag for applying manifests with kubectl. |
| 2025-12-04 | TPU 7x blueprint files |  | Cluster Toolkit introduces new blueprint files for TPU 7x instances. |
| 2025-11-19 | A3 High TCPx custom image blueprint |  | Cluster Toolkit provides an A3 High blueprint that automates custom image creation with a TCPx-patched kernel. |
| 2025-11-19 | G4 blueprint |  | Cluster Toolkit includes an initial blueprint for G4 machine types. |
| 2025-11-19 | GKE Inference Gateway support |  | Cluster Toolkit adds support for the GKE Inference Gateway. |
| 2025-11-19 | Parameterized gIB NCCL RDMA plugin installer |  | Cluster Toolkit parameterizes the gIB NCCL RDMA plugin installer in the gke-a4x blueprint. |
| 2025-11-13 | Managed Lustre support for gke-tpu-v6-advanced |  | Cluster Toolkit adds Google Cloud Managed Lustre as an optional storage solution for the gke-tpu-v6-advanced blueprint. |
| 2025-11-13 | Sycomp storage example blueprints |  | Cluster Toolkit adds example blueprints for deploying Sycomp storage. |
| 2025-11-03 | Managed Lustre support for gke-a4x |  | Cluster Toolkit adds Managed Lustre support in the gke-a4x blueprint. |
| 2025-10-24 | Automated TPU support in TPU v6 blueprint |  | Cluster Toolkit adds automated TPU support to the TPU v6 blueprint. |
| 2025-10-24 | Cloud Storage FUSE mounts in TPU v6 blueprint |  | Cluster Toolkit adds Cloud Storage FUSE mount support to the TPU v6 blueprint. |
| 2025-10-21 | NUMA-aware scheduling for G4 on GKE |  | Cluster Toolkit adds NUMA-aware scheduling in GKE clusters for G4 machines. |
| 2025-10-21 | WEKA filesystem mount scripts module |  | Cluster Toolkit adds a module that provides mount scripts for WEKA filesystems. |
| 2025-10-10 | IBM Spectrum Symphony HostFactory connector support |  | Cluster Toolkit supports deployment of IBM Spectrum Symphony HostFactory connectors for Compute Engine and GKE. |
| 2025-10-10 | NCCL package downloads for A3 Ultra and A4 High |  | Cluster Toolkit lets you download libnccl2 and libnccl-dev packages for A3 Ultra and A4 High machine types. |
| 2025-09-19 | AArch64 architecture support |  | Cluster Toolkit adds support for aarch64-based architecture. |
| 2025-09-15 | Cloud Storage FUSE support for H4D |  | Cluster Toolkit lets H4D machine types use Cloud Storage FUSE. |
| 2025-09-09 | Debian-based A3 Mega blueprints | 2025-09-09 | Debian-based blueprints for A3 Mega GPUs are deprecated in Cluster Toolkit; deprecated on 2025-09-09. |
| 2025-09-09 | GPU network wait improvements for A-family |  | Cluster Toolkit provides an improved GPU network wait solution for A-family machine types. |
| 2025-09-09 | Managed Lustre support for A4X |  | Cluster Toolkit expands Managed Lustre support for A4X instances. |
| 2025-09-01 | GKE Managed Lustre integration |  | Cluster Toolkit integrates Google Kubernetes Engine with Google Cloud Managed Lustre for high-performance scalable storage. |
| 2025-09-01 | Private Service Access alternative services support |  | Cluster Toolkit improves support for alternative services used with Private Service Access. |
| 2025-08-26 | Dynamic Workload Scheduler Flex-start regional MIG support |  | Cluster Toolkit migrates Dynamic Workload Scheduler Flex-start to regional managed instance groups. |
| 2025-08-14 | A4X blueprints |  | Cluster Toolkit adds new blueprints for A4X instances. |
| 2025-08-14 | Slinky community scheduler module |  | Cluster Toolkit adds a community scheduler module for Slinky, or Slurm on Kubernetes. |
| 2025-07-15 | H4D GKE blueprint |  | Cluster Toolkit adds a blueprint for deploying GKE clusters with H4D instances. |
| 2025-07-15 | Parallelstore blueprints | 2025-07-15 | Blueprints for deploying Parallelstore are deprecated in Cluster Toolkit; deprecated on 2025-07-15. |
| 2025-06-30 | Cluster Health Scripts integration for GKE blueprints |  | Cluster Toolkit integrates Cluster Health Scripts with GKE blueprints for A3 Mega, A3 Ultra, and A4 instances. |
| 2025-06-16 | AlphaFold 3 high-throughput blueprint |  | Cluster Toolkit adds a blueprint for a high-throughput AlphaFold 3 execution environment. |
| 2025-05-13 | GKE TPU v6e example |  | Cluster Toolkit adds a new example for GKE TPU v6e deployments. |
| 2025-05-13 | GPU health-check epilogs for Slurm |  | Cluster Toolkit adds GPU health-check epilogs for A3 High and A3 Mega Slurm blueprints. |
| 2025-05-05 | Managed Lustre Slurm blueprint |  | Cluster Toolkit adds a blueprint for Managed Lustre attached to Slurm clusters. |
| 2025-05-05 | Managed Lustre VM blueprint |  | Cluster Toolkit adds a blueprint for Managed Lustre attached to virtual machines. |
| 2025-04-24 | Managed Lustre support |  | Cluster Toolkit adds support for Google Cloud Managed Lustre. |
| 2025-04-24 | TPU support in GKE nodepool module |  | Cluster Toolkit adds TPU support to the GKE nodepool module. |
| 2025-04-01 | Automatic GPU health checks for Slurm |  | Cluster Toolkit adds automatic GPU health checks for Slurm deployments. |
| 2025-04-01 | Multiple node pools in GKE nodepool module |  | Cluster Toolkit updates the GKE nodepool module to support multiple node pools. |
| 2025-02-27 | A4 support in GKE and Slurm blueprints |  | Cluster Toolkit adds support for the A4 machine family in GKE and Slurm blueprints. |
| 2025-02-27 | Dynamic Workload Scheduler Flex for GKE |  | Cluster Toolkit adds Dynamic Workload Scheduler Flex support for GKE. |
| 2025-02-07 | A3 Ultra blueprint |  | Cluster Toolkit adds a new blueprint for A3 Ultra deployments. |
| 2025-02-07 | H4D Slurm blueprint |  | Cluster Toolkit adds a new blueprint for H4D Slurm deployments. |
| 2025-02-07 | H4D VM blueprint |  | Cluster Toolkit adds a new blueprint for H4D virtual machine deployments. |
| 2025-02-07 | Kueue workload scheduler support for A3 Ultra |  | Cluster Toolkit officially supports Kueue as the workload scheduler for A3 Ultra. |

Source file slug: `cluster-toolkit.md`

