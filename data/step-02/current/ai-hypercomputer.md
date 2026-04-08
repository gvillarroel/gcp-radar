# AI Hypercomputer

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 19
Unique features: 21

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-02 | Compact placement policies for standalone Flex-start VMs |  | Supports configuring compact placement policies for standalone Flex-start VMs to place them in adjacent or same blocks and reduce network latency. |
| 2025-12-09 | Node health prediction for AI-optimized GKE clusters |  | Enables node health prediction in AI-optimized GKE clusters to avoid scheduling workloads on nodes likely to degrade within five hours. |
| 2025-10-21 | Future reservations |  | Allows requesting AI Hypercomputer capacity reservations to start on a specific future date up to one year ahead. |
| 2025-09-10 | A4X machine type availability |  | Introduces the A4X machine type, an accelerator-optimized Arm-based VM using NVIDIA GB200 Grace Blackwell Superchips, available in AI Hypercomputer. |
| 2025-09-10 | A4X reservation sub-block maintenance management |  | Adds maintenance lifecycle visibility and control for A4X reservation sub-blocks, including notifications and manual maintenance actions. |
| 2025-09-10 | A4X reservation topology management |  | Adds visibility and management of A4X reservation topology, including sub-block views. |
| 2025-09-10 | A4X VM monitoring metrics in Cloud Monitoring |  | Enables use of specific Cloud Monitoring metrics to monitor A4X VM GPU health and troubleshooting signals. |
| 2025-09-10 | Advance notice for reservation unplanned hardware maintenance |  | Provides at least seven days of advance notice for unplanned hardware maintenance affecting a reservation. |
| 2025-09-10 | Reservation maintenance scheduling mode |  | Adds support for selecting grouped or independent maintenance scheduling when reserving capacity for VM creation. |
| 2025-09-10 | Reservation operational mode |  | Adds configuration of reservation operational mode to define VM behavior and control following host errors or faulty host reports. |
| 2025-07-18 | Straggler detection for AI/ML workloads |  | Provides straggler detection metrics and logs to troubleshoot slow performance caused by non-crashing workload slowdowns. |
| 2025-07-10 | Collective Communication Analyzer (CoMMA) management |  | Introduces management of CoMMA via enabling, disabling, and configuration of NCCL telemetry collection for large-scale GPU training optimization. |
| 2025-07-07 | Calendar mode future reservations |  | In preview, AI Hypercomputer supports creating future reservations in calendar mode up to 90 days ahead to reserve up to 80 GPU VMs and use that capacity for model training, fine-tuning, simulations, or inference. |
| 2025-06-11 | Managed instance group workload policies |  | AI Hypercomputer now supports workload policies on managed instance groups, including a high-throughput workload type optimized for high networking performance. |
| 2025-05-22 | Reserved-host maintenance event management |  | You can now proactively manage upcoming host maintenance events on reserved capacity blocks, whether VMs are running or not, to reduce disruption and help maintain performance. |
| 2025-05-15 | Flex-start consumption option |  | Flex-start lets users obtain secured-pool GPU capacity in advance for up to seven days, improving chances of acquiring high-demand resources. |
| 2025-03-18 | A4 accelerator-optimized machine type |  | The A4 machine type is generally available with NVIDIA B200 GPUs, delivering up to 3x performance versus previous GPU machine types and is available in us-central1-b for AI and ML workloads. |
| 2025-03-18 | A4 MaxText docker image |  | New MaxText Docker image support was added for workloads running on A4 GKE clusters deployed through Hypercompute Cluster. |
| 2025-03-18 | A4 NeMo docker image |  | New NeMo Docker image support was added for workloads running on A4 GKE clusters created with Hypercompute Cluster. |
| 2024-12-31 | A3 Ultra accelerator-optimized machine type |  | The A3 Ultra machine type is now generally available with NVIDIA H200 GPUs and Titanium ML networking for model training and serving, and is available in europe-west1-b. |
| 2024-12-31 | Hypercompute Cluster preview |  | Hypercompute Cluster entered preview, enabling large-scale provisioning of A3 Ultra accelerator-optimized machines with optimized placement, networking, workload placement, and maintenance controls. |

Source file slug: `ai-hypercomputer.md`

