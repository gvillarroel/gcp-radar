# Compute Engine

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 410
Unique features: 360

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-04-02 | Disable VMs with Container Startup Agent organization policy constraint |  | This managed organization policy constraint prevents creation of Compute Engine VMs that use the container startup agent and gce-container-declaration metadata, with optional dry-run evaluation. |
| 2026-03-31 | Hyperdisk ML throughput increase |  | Hyperdisk ML now supports up to 2,097,152 MiB/s of maximum throughput per disk for high-read-throughput machine learning workloads. |
| 2026-03-24 | Hyperdisk Balanced High Availability throughput increase |  | Hyperdisk Balanced High Availability now supports up to 2,400 MiB/s of maximum throughput per disk for synchronously replicated block storage. |
| 2026-03-23 | Managed instance group instance flexibility policy overrides |  | Managed instance groups can use instance flexibility policies to override the minimum CPU platform and disk definition in the instance template. |
| 2026-03-10 | Managed instance group autoscaler group size chart |  | Autoscaled managed instance groups can display configured group size and autoscaler-recommended size on a monitoring chart. |
| 2026-03-04 | Compute Engine managed constraints |  | Managed constraints for Organization Policy Service provide centralized control for Compute Engine resources with safe rollout support such as Policy Simulator and dry-run mode. |
| 2026-03-02 | Compact placement policies for standalone Flex-start VMs |  | Standalone Flex-start VMs can use compact placement policies to colocate instances and reduce network hops for latency-sensitive workloads. |
| 2026-02-23 | H4D machine series |  | H4D is a high performance computing VM series based on 5th generation AMD EPYC Turin with 200 Gbps Cloud RDMA networking and local SSD capacity; H4D is a high performance computing VM series based on 5th generation AMD EPYC Turin with 200 Gbps Cloud RDMA networking and local SSD capacity. |
| 2026-02-18 | Hyperdisk Exapools |  | Hyperdisk Exapools let projects purchase storage and performance in bulk and share those resources across very large fleets of disks in a single zone. |
| 2026-02-17 | MCP control with organization policies | 2026-03-17 | Using organization policies and the gcp.managed.allowedMCPServices constraint to control MCP use is being retired in favor of IAM deny policies; deprecated on 2026-03-17. |
| 2026-02-12 | Instance flexibility for bulk VM creation |  | Instance flexibility lets bulk regional VM creation select from multiple acceptable machine types based on available capacity and quota. |
| 2026-02-10 | Consistency groups of instant snapshots |  | Consistency groups of instant snapshots let you back up and restore multiple disks at the same point in time with coordinated operations. |
| 2026-02-09 | Autoscaling for managed instance groups with instance flexibility |  | Managed instance groups that use instance flexibility can now autoscale based on workload demand. |
| 2026-02-05 | Hyperdisk ML machine and TPU support expansion |  | Hyperdisk ML is supported on additional machine series and Cloud TPU versions including C4A, A4, A4X, G4, TPU v5e, TPU v5p, and TPU7x. |
| 2026-01-26 | N4A machine family |  | N4A is an Arm-based general-purpose machine family powered by Google Axion processors and supporting Hyperdisk volumes. |
| 2026-01-20 | C4 machine types in asia-southeast3 |  | C4 VM instances can now be created in the Bangkok asia-southeast3 region. |
| 2026-01-20 | M3 machine types in asia-southeast3 |  | M3 VM instances can now be created in the Bangkok asia-southeast3 region. |
| 2026-01-20 | M4 machine types in asia-southeast3 |  | M4 VM instances can now be created in the Bangkok asia-southeast3 region. |
| 2026-01-20 | N4 machine types in asia-southeast3 |  | N4 VM instances can now be created in the Bangkok asia-southeast3 region. |
| 2026-01-07 | Future reservation calendar availability view |  | Calendar mode can show future resource availability before you submit a future reservation request. |
| 2025-12-22 | Autoscaling reasons for regional managed instance groups |  | Regional managed instance groups can show the reasons why the autoscaler adds or removes VMs. |
| 2025-12-19 | C4A bare metal instance |  | The C4A machine series includes a c4a-highmem-96-metal bare metal instance with 96 vCPUs, 768 GB of memory, and Hyperdisk support. |
| 2025-12-19 | Flex-start support for G4 machine series |  | G4 accelerator-optimized VM instances support the flex-start provisioning model for discounted, flexible-start workloads. |
| 2025-12-17 | Future reservation requests in calendar mode |  | Future reservation requests in calendar mode let you reserve GPU, TPU, or H4D resources for VMs up to 90 days in advance. |
| 2025-12-16 | Sole-tenancy support for additional GPU machine types |  | Sole-tenancy now supports A2 Ultra, A2 Mega, A2 High, A3 Mega, and A3 High GPU machine types through dedicated node types. |
| 2025-12-14 | ANY target distribution shape for instance flexibility in regional managed instance groups |  | Instance flexibility in regional managed instance groups supports the ANY target distribution shape to maximize obtainability and unused reservation utilization. |
| 2025-12-12 | Additional X4 bare metal machine types |  | The X4 machine series adds bare metal machine types with 6 TB, 8 TB, and 12 TB of memory. |
| 2025-12-10 | C4 Xeon 6 bare metal machine types |  | The C4 machine series supports c4-standard-288-lssd-metal and c4-highmem-288-lssd-metal bare metal instances on Intel Xeon 6 processors; The C4 machine series supports c4-standard-288-lssd-metal and c4-highmem-288-lssd-metal bare metal instances on Intel Xeon 6 processors. |
| 2025-12-10 | Compute Engine remote MCP server |  | The Compute Engine remote MCP server lets LLM agents manage Compute Engine resources through a standardized natural-language-capable interface. |
| 2025-12-08 | VM Extension Manager |  | VM Extension Manager lets you install, govern, and monitor guest agent extensions across Compute Engine VMs using extension policies. |
| 2025-11-24 | IPv6 access to the VM metadata server |  | Single-stack IPv6 VM instances can access the Compute Engine metadata server over IPv6 connectivity. |
| 2025-11-18 | Autoscaling for regional managed instance groups with ANY and ANY_SINGLE_ZONE |  | Regional managed instance groups can autoscale when their target distribution shape is set to ANY or ANY_SINGLE_ZONE. |
| 2025-11-13 | Calendar mode future reservations for A3 Mega and A3 High |  | Future reservation requests in calendar mode can reserve capacity for a3-megagpu-8g and a3-highgpu-8g machine types. |
| 2025-11-10 | Reservation billing export system labels |  | BigQuery billing export now includes reservation_name and reservation_project_id system labels for reservation consumption and unused reservation cost analysis. |
| 2025-11-10 | Reservation consumption visibility on VM instances |  | A new consumedReservation field in VM instance details shows the full resource name of the reservation consumed by an instance. |
| 2025-11-07 | N4D machine series |  | N4D is a general-purpose VM series powered by 5th generation AMD EPYC Turin processors with DDR5 memory, Hyperdisk support, and up to 50 Gbps networking. |
| 2025-11-06 | N4A machine series |  | N4A is an Arm-based VM series powered by Google Axion processors with up to 64 vCPUs, 512 GB of memory, and up to 50 Gbps networking. |
| 2025-11-04 | Alternate-zone repair for regional managed instance groups |  | Regional managed instance groups can repair a VM in an alternate zone when repair in the original zone is not possible. |
| 2025-11-04 | Reservation consumption view |  | Compute Engine can show which reservation a VM consumes and list the VMs consuming a reservation. |
| 2025-11-02 | High-accuracy time synchronization for Compute Engine VMs |  | Compute Engine VMs can synchronize with the host clock using chrony and ptp_kvm to achieve supported accuracy within 1 ms. |
| 2025-10-30 | Dynamic NICs |  | Dynamic NICs let you add or remove network interfaces on an instance without restarting or recreating it and increase total interfaces up to 16 on supported machine types; Dynamic NICs let you add or remove network interfaces on an instance without restarting or recreating it. |
| 2025-10-28 | IPv6-only managed instance groups |  | Managed instance groups can be created using IPv6-only VM instances. |
| 2025-10-21 | Future reservations |  | Future reservations let you reserve Compute Engine capacity for a specific date up to one year in advance. |
| 2025-10-20 | G4 machine series regional expansion |  | The G4 accelerator-optimized machine series is now available in additional regions and zones including Singapore, Netherlands, Iowa, Virginia, and Ohio. |
| 2025-10-18 | Project-level self-service Compute Engine alpha API |  | Projects can self-service enable the Compute Engine alpha API to access and manage preview features through supported tools; Projects can self-service enable the Compute Engine alpha API to access and manage preview features through supported tools. |
| 2025-09-22 | Flex-start VMs |  | Flex-start VMs are short-duration VM instances that use flexible-start capacity pools and can be deployed standalone or added to managed instance groups with discounts on supported resources. |
| 2025-09-15 | Skip guest OS shutdown on instance stop or delete |  | Compute Engine can skip guest OS shutdown during instance stop or deletion to release resources and quota more quickly. |
| 2025-09-10 | A4X machine series |  | A4X is an Arm-based accelerator-optimized machine series with NVIDIA GB200 Grace Blackwell Superchips for AI, ML, and HPC workloads. |
| 2025-09-09 | compute.managed.disableNestedVirtualization constraint |  | This managed organization policy constraint enforces a security control that disables nested virtualization for Compute Engine VMs. |
| 2025-09-09 | compute.managed.disableSerialPortAccess constraint |  | This managed organization policy constraint enforces a security control that disables serial port access for Compute Engine VMs. |
| 2025-09-09 | compute.managed.disableSerialPortLogging constraint |  | This managed organization policy constraint enforces a security control that disables serial port logging for Compute Engine VMs. |
| 2025-09-09 | compute.managed.disallowGlobalDns constraint |  | This managed organization policy constraint enforces a security control that disallows global DNS settings for Compute Engine VMs. |
| 2025-09-09 | compute.managed.requireOsConfig constraint |  | This managed organization policy constraint enforces a security control that requires OS Config on Compute Engine VMs. |
| 2025-09-09 | compute.managed.requireOsLogin constraint |  | This managed organization policy constraint enforces a security control that requires OS Login on Compute Engine VMs. |
| 2025-09-09 | compute.managed.vmCanIpForward constraint |  | This managed organization policy constraint enforces governance for whether Compute Engine VMs can use IP forwarding. |
| 2025-09-09 | compute.managed.vmExternalIpAccess constraint |  | This managed organization policy constraint enforces governance for external IP access on Compute Engine VMs. |
| 2025-09-04 | Hyperdisk Balanced High Availability performance increases for C3 instances |  | Hyperdisk Balanced High Availability volumes attached to C3 instances now support higher IOPS and throughput limits on several C3 machine types. |
| 2025-09-04 | Updated Windows images with enhanced gVNIC support |  | Updated Windows OS images include a new gVNIC driver version that enables up to 200 Gbps networking and Jumbo frames on supported instances. |
| 2025-08-28 | M4 Hypermem VM machine types |  | M4 memory-optimized Hypermem VMs add smaller machine types with a 15.5:1 GB-to-vCPU ratio. |
| 2025-08-26 | IPv6-only instances |  | Compute Engine instances can be created using only IPv6 IP addresses. |
| 2025-08-20 | Instant snapshots for Extreme Persistent Disk |  | Instant snapshots can be used to back up Extreme Persistent Disk volumes. |
| 2025-08-14 | Project-level Compute Engine alpha API access |  | Projects can self-enable the Compute Engine alpha API to view and manage Preview features through supported tools. |
| 2025-08-13 | License Manager |  | License Manager lets administrators subscribe to, manage, and track third-party license usage on Google Cloud; License Manager lets administrators subscribe to, manage, and track third-party license usage on Google Cloud. |
| 2025-08-11 | G4 machine series |  | The G4 accelerator-optimized machine series targets graphics-intensive workloads and single-host inference with AMD EPYC Turin CPUs and NVIDIA RTX PRO 6000 Blackwell GPUs. |
| 2025-08-11 | Hyperdisk ML shared attachment scale |  | Hyperdisk ML volumes between 2 TiB and 16 TiB can now be attached to up to 128 instances. |
| 2025-08-05 | Container deployment during VM creation | 2025-08-05 | Compute Engine support for deploying containers on VMs during VM creation is deprecated; deprecated on 2025-08-05. |
| 2025-08-05 | Hyperdisk Throughput performance increase |  | Hyperdisk Throughput volumes now support higher maximum throughput and IOPS per volume. |
| 2025-08-05 | Z3 bare metal machine type |  | The Z3 machine series adds a bare metal machine type with 192 vCPUs, 1,536 GB of memory, and 72 TiB of Local SSD storage; The Z3 machine series adds a bare metal machine type with 192 vCPUs. |
| 2025-07-30 | C4 144-vCPU and 288-vCPU machine types |  | The C4 machine series adds standard, highmem, and highcpu VM machine types with 144 and 288 vCPUs; The C4 machine series adds standard, highmem, and highcpu VM machine types with 144 and 288 vCPUs. |
| 2025-07-30 | C4 bare metal machine types |  | The C4 machine series adds bare metal machine types on Intel Xeon 6 processors; The C4 machine series adds bare metal machine types on Intel Xeon 6 processors. |
| 2025-07-30 | C4 Titanium Local SSD machine types |  | The C4 machine series adds machine types with attached Titanium Local SSD on Intel Xeon 6 processors; The C4 machine series adds machine types with attached Titanium Local SSD on Intel Xeon 6 processors. |
| 2025-07-24 | C4 support for Hyperdisk Balanced High Availability |  | The C4 machine series now supports Hyperdisk Balanced High Availability disks. |
| 2025-07-22 | Multi-writer Hyperdisk Extreme |  | Hyperdisk Extreme disks can be shared with simultaneous read-write access by up to 16 instances. |
| 2025-07-21 | C4D bare metal machine types |  | The C4D machine series adds AMD-based bare metal machine types with 384 vCPUs; The C4D machine series adds bare metal machine types with 384 vCPUs. |
| 2025-07-18 | Snapshots and clones for multi-writer Hyperdisk |  | Hyperdisk volumes in multi-writer mode can now be snapshotted and cloned. |
| 2025-07-02 | Calendar mode future reservations for A4 and A3 Ultra GPU VMs |  | Future reservations in calendar mode can reserve capacity for A4 and A3 Ultra GPU VMs. |
| 2025-07-02 | Committed use discounts for Z3 Local SSD |  | Z3 VMs using Local SSD can receive committed use discounts without attaching reservations to commitments. |
| 2025-07-02 | Smaller Z3 machine types |  | The Z3 machine series adds smaller VM sizes ranging from 14 to 88 vCPUs. |
| 2025-07-02 | Z3 Local SSD predefined machine types |  | The Z3 machine series adds -standardlssd and -highlssd predefined machine types with different Local SSD capacity per vCPU. |
| 2025-06-30 | Disk license modification |  | Licenses attached to disks can now be modified in place, including updates such as replacements, upgrades, and billing model changes. |
| 2025-06-27 | Custom ephemeral external IPv6 addresses |  | Instances can be created with a user-specified custom ephemeral external IPv6 address. |
| 2025-06-13 | C4D machine series |  | The C4D general-purpose machine series provides AMD EPYC Turin-based machine types with Google Titanium support; The C4D general-purpose machine series provides AMD EPYC Turin-based machine types designed for mission-critical and data-centric workloads. |
| 2025-06-04 | OS Login with SSH certificates |  | OS Login now supports SSH certificate-based connections in addition to SSH keys. |
| 2025-06-03 | Compute Engine alpha REST API access |  | Projects can send HTTP requests to Compute Engine alpha URIs to test experimental alpha-stage features through REST. |
| 2025-05-26 | A3 Ultra regional availability expansion |  | A3 Ultra accelerator-optimized machine types are now available in additional regions and zones. |
| 2025-05-23 | Resource-based CUDs for M4 6 TB machine types |  | Resource-based committed use discounts are available for M4 machine types with 6 TB of memory. |
| 2025-05-22 | C4D Local SSD machine types |  | The C4D machine series adds Local SSD machine types with up to 12 TiB of Titanium SSD. |
| 2025-05-20 | Backup and DR backup plan reassignment |  | Instance configurations can be edited to change the Backup and DR backup plan applied to a Compute Engine instance. |
| 2025-05-20 | Calendar mode future reservations for TPU-attached VMs |  | Future reservation requests in calendar mode can reserve capacity for VMs with attached TPUs. |
| 2025-05-15 | Flex-start provisioning for MIG resize requests |  | The flex-start provisioning model can be used with managed instance group resize requests to improve GPU acquisition for short-duration workloads. |
| 2025-05-12 | MIG health checks without autohealing repairs |  | Managed instance groups can use health checks to monitor application health without repairing unhealthy VMs when autohealing is turned off. |
| 2025-05-09 | Compute Engine Security Risk Overview dashboard |  | The Security Risk Overview dashboard shows top Security Command Center findings affecting Compute Engine resources in the Google Cloud console. |
| 2025-04-28 | M4 machine type additions |  | The memory-optimized M4 family adds the m4-megamem-28 and m4-ultramem-224 machine types. |
| 2025-04-28 | Named VM creation in MIG resize requests |  | Managed instance group resize requests can specify VM names for instances created in a batch. |
| 2025-04-21 | Flexible CUDs for sole-tenancy premium |  | Compute flexible committed use discounts are available for the sole-tenancy premium on eligible sole-tenant node types. |
| 2025-04-04 | CentOS 7 images | 2024-06-30 | CentOS 7 images are deprecated following the end of CentOS 7 support; deprecated on 2024-06-30. |
| 2025-04-04 | RHEL 7 images | 2024-06-30 | RHEL 7 images are deprecated following the end of RHEL 7 support; deprecated on 2024-06-30. |
| 2025-04-02 | OS Policy Orchestrator |  | OS Policy Orchestrator lets organizations manage OS policy assignments across projects and zones at scale in VM Manager; OS Policy Orchestrator in VM Manager manages OS policy assignments across projects and zones at organizational scale. |
| 2025-03-31 | Serial console SSH key endpoint | 2025-03-31 | The serial console SSH key endpoint is deprecated in favor of a new serial SSH key endpoint; deprecated on 2025-03-31. |
| 2025-03-26 | Asynchronous Replication for Hyperdisk |  | Asynchronous Replication provides cross-region disaster recovery for Hyperdisk Balanced, Hyperdisk Balanced High Availability, and Hyperdisk Extreme disks. |
| 2025-03-26 | Custom ephemeral internal IPv6 addresses |  | Instances can be created with a user-specified custom ephemeral internal IPv6 address. |
| 2025-03-26 | Instant snapshots for Hyperdisk |  | Instant snapshots can create in-place backups for Hyperdisk Balanced, Hyperdisk Balanced High Availability, and Hyperdisk Extreme disks. |
| 2025-03-24 | Multi-writer Hyperdisk Balanced High Availability |  | Hyperdisk Balanced High Availability disks can be shared with simultaneous read-write access by up to 8 VMs across two zones. |
| 2025-03-21 | Resource-based CUDs for RHEL licenses |  | Resource-based committed use discounts are available for licenses of RHEL operating system images. |
| 2025-03-19 | Regionally scoped snapshots |  | Regionally scoped snapshots keep snapshot data and required metadata co-located within a selected region and support additional location controls. |
| 2025-03-17 | A4 machine type |  | The A4 accelerator-optimized machine type provides NVIDIA B200 GPU-based instances for large-scale ML training and other GPU workloads. |
| 2025-03-14 | Instance creation data protection pane |  | The Create an instance page includes a Data protection pane for configuring backup and replication settings during VM creation. |
| 2025-03-14 | M4 memory-optimized VMs |  | M4 memory-optimized virtual machines provide up to 224 vCPUs and 3 TB of memory on Intel Emerald Rapids CPUs in predefined machine types. |
| 2025-03-10 | Flexible committed use discounts for Local SSD |  | Flexible committed use discounts let eligible Local SSD usage receive commitments that are not restricted to a single project, region, or machine series. |
| 2025-03-10 | Host error detection time |  | Host error detection time lets you configure how long Compute Engine waits before restarting or terminating an unresponsive instance. |
| 2025-03-04 | Compute Engine region availability in europe-north2 |  | Compute Engine is available in the Stockholm region with N4, C3D highmem, C4 highmem, and E2 machine types across all three zones. |
| 2025-02-14 | Backup and DR Service backup plans during instance creation |  | Backup and DR Service backup plans can be applied when creating instances to centralize backup management and use immutable backup vaults. |
| 2025-01-29 | Configurable machine type recommendations |  | Machine type recommendations can be customized to preferred machine series and tuned memory metrics for more accurate recommendations. |
| 2025-01-24 | Graceful shutdown |  | Graceful shutdown gives the guest operating system up to one hour to finish tasks before a stopped instance powers off. |
| 2025-01-20 | Managed instance group suspended and stopped VM pools |  | Managed instance groups can maintain pools of suspended and stopped VMs to reduce costs and speed up scale-out operations. |
| 2025-01-17 | Cloud KMS Autokey integration for Compute Engine |  | Compute Engine supports Cloud KMS Autokey for automatically generated encryption keys that follow recommended security settings. |
| 2025-01-16 | C4A VMs with Titanium SSD |  | C4A virtual machines based on Google Axion processors can use Titanium SSD local storage with enhanced security, performance, and management. |
| 2024-12-31 | A3 Ultra machine type |  | A3 Ultra is an accelerator-optimized machine type powered by NVIDIA H200 GPUs and the Titanium ML network adapter for large-scale ML workloads. |
| 2024-12-17 | IPv6-only VM instances |  | Compute Engine can create VM instances that use only IPv6 addresses without IPv4 addresses. |
| 2024-12-16 | A3 Edge machine type availability in europe-west12-b | 2024-12-16 | A3 Edge accelerator-optimized virtual machines were available in the Turin zone europe-west12-b; deprecated on 2024-12-16. |
| 2024-12-10 | Managed instance group instance flexibility |  | Instance flexibility in managed instance groups lets a group use multiple machine types to improve capacity availability for demanding workloads; Instance flexibility in managed instance groups lets a group use multiple machine types to improve capacity availability for demanding workloads. |
| 2024-12-03 | Hyperdisk Balanced High Availability |  | Hyperdisk Balanced High Availability provides cross-zonal synchronous replication for disk data; Hyperdisk Balanced High Availability provides cross-zonal synchronous replication for disk data. |
| 2024-11-26 | Disk performance status metric |  | The disk performance status metric monitors the health of Hyperdisk and Persistent Disk volumes and indicates adverse Compute Engine events affecting disks. |
| 2024-11-18 | Compute Engine region availability in northamerica-south1 |  | Compute Engine is available in the Queretaro region with E2, N4, C4, and C3D virtual machines across all three zones. |
| 2024-11-05 | gVNIC driver for Windows with Jumbo frames |  | The updated gVNIC driver for Windows improves network performance and adds support for Jumbo frames; The updated gVNIC driver for Windows improves network performance and adds support for Jumbo frames. |
| 2024-11-04 | Regional managed instance group resize requests for GPU VMs |  | Regional managed instance groups can use resize requests to create GPU virtual machines all at once. |
| 2024-10-30 | C4A Arm VMs |  | C4A is a general-purpose Arm virtual machine series based on Google's custom Axiom processors with Hyperdisk support. |
| 2024-10-30 | Regional managed instance group autoscaling with BALANCED distribution |  | Regional managed instance groups can autoscale with a BALANCED target distribution shape that considers per-zone capacity availability. |
| 2024-10-25 | A3 Edge machine type |  | A3 Edge is an accelerator-optimized machine type with NVIDIA H100 80GB GPUs for single-node inference and training workloads. |
| 2024-10-23 | Custom term lengths for resource-based commitments |  | Resource-based commitments can use custom term lengths beyond the standard one- and three-year options. |
| 2024-10-16 | SLES 12 SP5 images | 2024-10-31 | SLES 12 SP5 and SLES 12 SP5 for SAP images provide SUSE Linux Enterprise Server images for Compute Engine workloads; deprecated on 2024-10-31. |
| 2024-10-15 | Smaller A3 High machine types |  | A3 High machine types are available in smaller configurations with 1, 2, or 4 NVIDIA H100 GPUs. |
| 2024-09-30 | Multi-writer support for Hyperdisk Balanced High Availability |  | Hyperdisk Balanced High Availability disks can be attached in multi-writer mode so up to eight VMs can read and write simultaneously. |
| 2024-09-26 | OS Login POSIX groups support | 2024-09-26 | OS Login POSIX groups support provides POSIX group integration for OS Login access management; deprecated on 2024-09-26. |
| 2024-09-18 | Confidential mode for Hyperdisk Balanced |  | Hyperdisk Balanced volumes can be created in Confidential mode and attached to Confidential VMs. |
| 2024-09-05 | Multi-writer support for Hyperdisk Balanced |  | Hyperdisk Balanced disks can be attached in multi-writer mode so up to eight VMs can read and write simultaneously. |
| 2024-09-02 | Performance Monitoring Unit for C4 VMs |  | C4 virtual machines can use the performance monitoring unit to observe low-level CPU events and metrics for performance analysis. |
| 2024-08-30 | Availability domains for spread placement policies |  | Spread placement policies can target specific availability domains to control physical VM placement for reliability or latency objectives. |
| 2024-08-30 | GPU metrics in Compute Engine Observability tabs |  | Compute Engine Observability tabs display GPU charts based on NVIDIA Management Library metrics for GPU-enabled VM instances. |
| 2024-08-23 | Hyperdisk Storage Pools advanced performance provisioning |  | Advanced Performance provisioning for Hyperdisk Storage Pools helps Hyperdisk Balanced and Throughput disks handle peak performance while optimizing cost. |
| 2024-08-19 | C4 VMs |  | C4 is a general-purpose virtual machine series based on Intel Emerald Rapids CPUs with up to 192 vCPUs, 1.5 TB memory, and Hyperdisk support; C4 is a general-purpose virtual machine series based on Intel Emerald Rapids CPUs with up to 192 vCPUs, 1.5 TB memory, and Hyperdisk support. |
| 2024-08-01 | Instant snapshots |  | Instant snapshots provide in-place disk backups that can be restored to new disks in under a minute within the same location. |
| 2024-07-16 | C3 bare metal machine types |  | C3 bare metal machine types provide direct access to server CPU and memory without a virtualization layer; C3 bare metal machine types provide direct access to server CPU and memory without a virtualization layer. |
| 2024-07-15 | VM runtime limits |  | VM runtime limits automatically stop or delete virtual machines after a configured time or duration; VM runtime limits can automatically stop or delete a VM when a configured time limit is reached. |
| 2024-07-09 | Hyperdisk ML |  | Hyperdisk ML is block storage designed for high-performance AI workloads with very high throughput and large-scale multi-attach support. |
| 2024-07-09 | Managed instance group resize requests for GPU VMs |  | Managed instance groups can use resize requests to create GPU virtual machines all at once. |
| 2024-06-17 | Require OS Config organization policy constraint |  | The Require OS Config organization policy constraint can automatically enable VM Manager for new VMs in an organization, folder, or project; This organization policy constraint can automatically enable VM Manager for new VMs at the organization, folder, or project level. |
| 2024-06-11 | C3 VM regional availability |  | C3 virtual machines are available in additional specified regions and zones. |
| 2024-06-11 | C3D VM regional availability |  | C3D virtual machines are available in additional specified regions and zones. |
| 2024-06-04 | X4 bare metal instances |  | X4 bare metal instances can be ordered through a predefined machine type for hosting very large SAP HANA databases. |
| 2024-05-15 | Advanced maintenance control for sole-tenancy |  | Advanced maintenance control for sole-tenancy lets sole-tenant node groups view and schedule planned maintenance events to reduce disruption. |
| 2024-04-30 | Global serial console gateway | 2024-04-30 | The global serial console gateway provides serial console access through a global gateway; deprecated on 2024-04-30. |
| 2024-04-26 | Zonal metadata |  | Zonal metadata lets you define custom metadata at a zonal scope within a project to isolate metadata changes and improve reliability. |
| 2024-04-19 | General purpose C3 VMs |  | General purpose C3 VMs provide the C3 machine family for general-purpose workloads; General purpose C3 VMs provide the C3 machine family for general-purpose workloads. |
| 2024-04-16 | Hyperdisk Balanced for M1 and M2 VMs |  | Hyperdisk Balanced provides balanced-performance block storage support for M1 and M2 virtual machines. |
| 2024-04-16 | Z3 VMs |  | Z3 VMs are storage-optimized virtual machines focused on high-density, high-performance Local SSD workloads. |
| 2024-04-09 | Manual VM maintenance triggering |  | Manual maintenance triggering lets supported M1, M2, and M3 machine types start VM maintenance before the scheduled time. |
| 2024-04-09 | N4 VMs |  | N4 VMs are general-purpose virtual machines based on Intel Emerald Rapids CPUs with up to 640 GB of DDR5 memory and Hyperdisk Balanced support. |
| 2024-04-09 | VM maintenance schedule notifications |  | Maintenance schedule notifications let you view upcoming VM maintenance for M1, M2, and M3 machine types and plan ahead. |
| 2024-04-04 | Hyperdisk Storage Pools |  | Hyperdisk Storage Pools let you pre-purchase and manage disk capacity, throughput, and IOPS in aggregate for Compute Engine workloads. |
| 2023-06-30 | Suspend and resume for E2 VMs |  | E2 virtual machines can be suspended and later resumed. |
| 2023-06-29 | C3 high-memory machine types |  | General-purpose C3 VMs support c3-highmem machine types. |
| 2023-06-29 | C3 standard machine types |  | General-purpose C3 VMs support c3-standard machine types. |
| 2023-06-28 | Persistent Disk Asynchronous Replication |  | Persistent Disk Asynchronous Replication asynchronously replicates Persistent Disk data to a secondary region for disaster recovery. |
| 2023-06-27 | NVIDIA A100 80GB GPU availability |  | NVIDIA A100 80GB GPUs provide accelerator capacity for Compute Engine workloads in additional zones; NVIDIA A100 80GB GPUs provide accelerator capacity for Compute Engine workloads in additional zones. |
| 2023-06-26 | MIG autoscaling metric configuration UI |  | The managed instance group autoscaling interface lets you explore Cloud Monitoring metrics and filters, visualize values, and review the aggregated autoscaling signal. |
| 2023-06-23 | Custom constraints for Compute resources |  | Custom constraints let you enforce granular organization policy controls on specific fields of supported Compute resources. |
| 2023-06-09 | Hyperdisk Throughput |  | Hyperdisk Throughput is throughput-oriented block storage with dynamically configurable capacity and throughput for VM workloads. |
| 2023-06-05 | G2 machine types with NVIDIA L4 GPUs |  | Accelerator-optimized G2 machine types provide attached NVIDIA L4 GPUs for graphics and accelerator workloads; Accelerator-optimized G2 machine types provide attached NVIDIA L4 GPUs for next-generation graphics workloads. |
| 2023-05-31 | Image import support for CentOS Stream 8 and 9 |  | The image import tool can import CentOS Stream 8 and CentOS Stream 9 images into Google Cloud. |
| 2023-05-31 | MIG all-instances configuration |  | Managed instance groups can apply metadata and labels to all VMs in the group without creating a new instance template. |
| 2023-05-19 | Local SSD preservation on stop or suspend |  | The discard-local-ssd=false option preserves the contents of a single attached Local SSD when a VM is stopped or suspended. |
| 2023-05-16 | Image import support for Rocky Linux 9 |  | The image import tool can import Rocky Linux 9 images into Google Cloud. |
| 2023-05-15 | Local SSD quota per machine family |  | Local SSD quota per machine family lets you view and manage Local SSD quota usage and limits by VM family. |
| 2023-04-25 | VM instances Observability tab enhancements |  | The VM instances Observability tab adds disk and network charts, detected integration links, and recommended alert setups. |
| 2023-04-24 | Regional Persistent Disk creation during VM creation |  | You can create regional Persistent Disk volumes when creating a VM directly or through an instance template. |
| 2023-04-20 | HPC Rocky Linux 8 image |  | The HPC Rocky Linux 8 image provides a prebuilt Compute Engine image for HPC workloads. |
| 2023-04-20 | Intel MPI 2021 support in HPC VM Images |  | HPC VM Images support Intel MPI 2021 along with tools for installing the Intel MPI library and the net and psm3 libfabric providers. |
| 2023-04-20 | OpenMPI support in HPC VM Images |  | HPC VM Images support OpenMPI for HPC workload deployments. |
| 2023-04-06 | AWS image import with gcloud |  | The gcloud CLI can import VM images from AWS into Google Cloud; AWS image import with gcloud lets you import VM images from AWS into Google Cloud using the command-line tool. |
| 2022-12-22 | Higher Extreme Persistent Disk throughput for large N2 VMs |  | N2 VMs with 64 or more vCPUs support up to 4 GB/s read and 3 GB/s write throughput per instance with Extreme Persistent Disk. |
| 2022-12-16 | Image import support for RHEL 9 |  | The image import tool can import RHEL 9 images into Google Cloud. |
| 2022-12-13 | NVIDIA T4 GPU availability |  | NVIDIA T4 GPUs provide accelerator capacity for Compute Engine workloads in additional zones; NVIDIA T4 GPUs provide accelerator capacity for Compute Engine workloads in additional zones. |
| 2022-12-08 | Hardware resource commitment merging |  | Active hardware resource commitments can be merged into a single larger commitment, including through the Google Cloud Console. |
| 2022-11-16 | Increased managed instance group size limits |  | Managed instance groups support larger default sizes of up to 2,000 VMs for zonal MIGs and 4,000 VMs for regional MIGs. |
| 2022-11-15 | ANY_SINGLE_ZONE distribution shape for regional MIGs |  | The ANY_SINGLE_ZONE distribution shape lets a regional managed instance group automatically choose one zone with available resources within quota. |
| 2022-11-10 | Shared sole-tenant node groups |  | Sole-tenant node groups can be shared with other projects or across an entire organization; Sole-tenant node groups can be shared with other projects or across an organization. |
| 2022-11-07 | M3 VMs |  | Memory-optimized M3 virtual machines provide the M3 machine family in additional regions and zones. |
| 2022-11-01 | Image import support for Ubuntu 22.04 LTS |  | The image import tool can import Ubuntu 22.04 LTS images into Google Cloud. |
| 2022-11-01 | Image import support for Windows 11 |  | The image import tool can import Windows 11 images into Google Cloud. |
| 2022-10-27 | Flexible committed use discounts |  | Flexible committed use discounts are spend-based Compute Engine discounts that can be applied across eligible projects, regions, and machine series in a billing account. |
| 2022-10-19 | A2 Ultra GPU machine types with A100 80GB GPUs |  | Accelerator-optimized A2 Ultra GPU machine types provide attached NVIDIA A100 80GB GPUs in additional zones. |
| 2022-10-19 | Hardware resource commitment splitting |  | Hardware resource commitments can be resized and split into smaller commitments, including through the Google Cloud Console. |
| 2022-10-05 | Tau T2A VMs |  | Tau T2A is a general-purpose VM family that runs on Arm architecture. |
| 2022-09-23 | VM placement topology |  | VM placement topology lets you view how physically close one VM is to another. |
| 2022-09-22 | Custom visible CPU cores |  | Custom visible CPU cores let you reduce the number of CPU cores exposed to a VM to help lower licensing costs. |
| 2022-09-21 | E2 shared-core custom VMs |  | E2 shared-core custom VMs let you create custom shared-core virtual machines in the E2 family. |
| 2022-09-16 | m2-hypermem-416 machine type |  | The m2-hypermem-416 machine type adds a 416 vCPU and 8832 GB memory option to the M2 memory-optimized family. |
| 2022-09-13 | E2 VM availability in me-west1 |  | E2 virtual machines are available in all three zones of the me-west1 region. |
| 2022-09-13 | M1 VM availability in me-west1 |  | M1 virtual machines are available in zones a and c of the me-west1 region. |
| 2022-09-13 | N2 VM availability in me-west1 |  | N2 virtual machines are available in all three zones of the me-west1 region. |
| 2022-09-09 | UEFI bootloader support for imported virtual disks |  | Compute Engine can import virtual disks that use a UEFI bootloader by enabling UEFI booting with guest OS features. |
| 2022-09-07 | A2 Ultra GPU machine types |  | Compute Engine offers accelerator-optimized A2 Ultra GPU machine types with attached A100 80GB GPUs. |
| 2022-09-07 | Archive snapshots |  | Archive snapshots provide a lower-cost snapshot option for long-term data retention than regular snapshots. |
| 2022-09-07 | RHEL BYOS images |  | Compute Engine lets you bring Red Hat Enterprise Linux subscriptions to Google Cloud by using RHEL bring-your-own-subscription images. |
| 2022-08-25 | Expanded managed instance group size limits |  | Managed instance groups can be configured with higher VM count limits for zonal and regional groups. |
| 2022-08-08 | IPv6 addresses for VM instances |  | Compute Engine instances support internal and external IPv6 addresses in all regions; Compute Engine instances support internal and external IPv6 addresses in all regions. |
| 2022-08-05 | VM Manager troubleshooting command |  | The os-config troubleshoot command helps verify whether VM Manager is set up correctly. |
| 2022-07-29 | Managed instance group autoscaler logs |  | Managed instance groups expose autoscaler logs that show why autoscaling added or removed VMs. |
| 2022-07-28 | Bulk VM placement target shapes |  | Bulk VM creation supports target shape settings that optimize placement for reservation usage or balanced zonal distribution. |
| 2022-07-28 | Commitment merge and split |  | Hardware resource commitments can be merged or split to create resized commitments. |
| 2022-07-28 | VM shutdown on Cloud KMS key revocation |  | A VM can be configured to shut down automatically when its Cloud KMS key is revoked; VM shutdown on Cloud KMS key revocation automatically stops a VM when the Cloud KMS key protecting an attached persistent disk is revoked. |
| 2022-07-21 | SLES committed use discounts |  | Compute Engine committed use discounts are available for SUSE Linux Enterprise Server image licenses. |
| 2022-07-14 | Pub/Sub-based autoscaling for managed instance groups |  | Managed instance groups can autoscale based on the number of unacknowledged messages in a Pub/Sub subscription. |
| 2022-07-13 | Rocky Linux image optimized for Compute Engine |  | Compute Engine offers a Rocky Linux image optimized with the latest gVNIC for higher network bandwidth workloads. |
| 2022-07-13 | Tau T2A VM family |  | Tau T2A is an Arm-based general purpose VM family for Compute Engine. |
| 2022-03-22 | Tau T2D VM family |  | Tau T2D is a general purpose VM family available in limited regions for scale-out workloads; Tau T2D is a general purpose VM family available in multiple regions and zones for scale-out workloads. |
| 2022-03-14 | Suspend and resume for VMs |  | Compute Engine supports suspending and resuming virtual machine instances. |
| 2022-03-04 | VM unresponsive behavior timeout policies |  | VM availability policies can define how long Compute Engine waits before terminating or restarting an unresponsive VM. |
| 2022-02-10 | C2D machine types |  | C2D is a compute-optimized machine family built on third-generation AMD EPYC Milan processors; C2D is a compute-optimized machine family built on third-generation AMD EPYC Milan processors. |
| 2022-02-09 | Security keys for OS Login |  | OS Login supports using Google account security keys for VM authentication. |
| 2022-02-04 | Intel Ice Lake support on N2 VMs |  | General purpose N2 VMs support Intel Ice Lake processors. |
| 2022-02-04 | n2-node-128-864 sole-tenant node type |  | Compute Engine provides the n2-node-128-864 sole-tenant node type for sole-tenant deployments; Compute Engine provides the n2-node-128-864 sole-tenant node type for sole-tenant deployments. |
| 2022-02-01 | CentOS 8 images | 2022-02-01 | Compute Engine CentOS 8 images are deprecated following the end of life of CentOS 8; deprecated on 2022-02-01. |
| 2022-01-26 | Expanded VM sizing with a single T4 GPU |  | VMs with one attached T4 GPU support configurations up to 48 vCPUs and 312 GB of memory. |
| 2022-01-19 | Automatic commitment renewal |  | Compute Engine commitments can be configured to renew automatically. |
| 2022-01-19 | SSH troubleshooting tool |  | The SSH troubleshooting tool helps diagnose failed SSH connections to VM instances. |
| 2022-01-11 | Machine images |  | Machine images capture the configuration, metadata, permissions, and data needed to create VM instances; Machine images store the configuration, metadata, permissions, and data needed to create a VM instance in one resource. |
| 2022-01-05 | Managed instance group resize retry control |  | Managed instance groups can disable VM creation retries during resizing operations. |
| 2021-12-15 | Managed instance group rollout disruption controls |  | Managed instance groups support minimum and most disruptive allowed actions to limit rollout disruption during updates; Managed instance groups support minimum and most disruptive allowed actions to control disruption during configuration or application rollouts. |
| 2021-12-15 | Stateful IP addresses for managed instance groups |  | Managed instance groups can preserve stateful IP addresses across autohealing, updates, and recreations. |
| 2021-12-14 | Shared reservations |  | Zonal Compute Engine reservations can be shared across multiple projects; Compute Engine zonal resource reservations can be shared across multiple projects. |
| 2021-12-03 | NVIDIA A100 GPU availability |  | Compute Engine provides NVIDIA A100 GPU attachments in additional regions and zones. |
| 2021-12-03 | OS configuration management |  | OS configuration management deploys and automates software configuration on VM instances and includes assignment editing and reporting capabilities; OS configuration management deploys and automates software configurations on VM instances with policy rollout controls and compliance reporting. |
| 2021-11-16 | 100 Gbps networking for N2 |  | N2, N2D, and C2 virtual machines can be configured with up to 100 Gbps of network bandwidth. |
| 2021-11-16 | and C2 VMs |  | N2, N2D, and C2 virtual machines can be configured with up to 100 Gbps of network bandwidth. |
| 2021-11-16 | N2D |  | N2, N2D, and C2 virtual machines can be configured with up to 100 Gbps of network bandwidth. |
| 2021-11-16 | southamerica-west1 region launch |  | The Santiago southamerica-west1 region launched with E2, N2, and C2 VM support across all zones. |
| 2021-11-15 | Managed instance group health state change logs |  | Managed instance groups can log VM health state changes when using application-based health checks. |
| 2021-11-15 | N2D Milan machine types |  | N2D machine types are available with third-generation AMD EPYC Milan processors. |
| 2021-11-11 | Zone-scoped VM inventory and vulnerability reporting |  | The OS Config API and gcloud can retrieve VM inventory and vulnerability report data for a specific zone. |
| 2021-11-08 | Observability chart export to custom dashboards |  | Charts from the VM instance Observability tab can be copied into custom Cloud Monitoring dashboards. |
| 2021-10-28 | Schedule-based autoscaling without additional signals |  | Managed instance groups support schedule-based autoscaling without requiring another autoscaling signal. |
| 2021-10-21 | Single T4 GPU VM extended sizing |  | Compute Engine lets VM instances with a single attached T4 GPU be configured with up to 48 vCPUs and 312 GB of memory. |
| 2021-10-13 | Spot VMs |  | Spot VMs provide discounted interruptible virtual machines for fault-tolerant workloads without the 24-hour runtime limit of preemptible VMs. |
| 2021-10-12 | N2 Ice Lake VMs |  | Third generation Intel Xeon Scalable Processor (Ice Lake) based N2 virtual machines are available in select regions and zones. |
| 2021-10-11 | Tau T2D VMs |  | Tau T2D virtual machines provide AMD-based general-purpose instances for cloud-native workloads in select regions and zones. |
| 2021-09-23 | Patch alerting |  | Patch alerting monitors patch jobs running in your environment; Patch alerting monitors patch jobs running in your environment. |
| 2021-09-22 | OS inventory management installer properties |  | OS inventory management can expose installer properties for Windows applications. |
| 2021-09-13 | NVIDIA T4 GPU regional availability |  | NVIDIA T4 GPUs are available in additional Compute Engine regions and zones; NVIDIA T4 GPUs are available in additional Compute Engine regions and zones. |
| 2021-09-08 | Security Command Center OS vulnerability report integration |  | Security Command Center Premium can display OS vulnerability report data collected by VM Manager. |
| 2021-09-01 | Managed instance group partial delete continuation |  | Managed instance group delete operations can be flagged to continue despite already deleted instances or other instance validation errors. |
| 2021-08-31 | Zonal image family reference |  | Compute Engine can reference the latest public image in an image family for a specific zone to improve zonal fault tolerance. |
| 2021-08-25 | VM core dumps |  | Compute Engine can collect core dumps from virtual machines for debugging purposes. |
| 2021-08-16 | Manual live migration for sole-tenant VMs |  | Compute Engine supports manually live migrating sole-tenant virtual machines from one host to another. |
| 2021-08-06 | Intel Select Solution HPC clusters with Slurm-Google Cloud |  | Slurm-Google Cloud can create clusters based on the HPC VM image that comply with Intel Select Solution for Simulation and Modeling criteria. |
| 2021-08-03 | and image availability in northamerica-northeast2 |  | Disks, snapshots, and images are available in all zones of the Toronto northamerica-northeast2 region. |
| 2021-08-03 | Managed instance group descriptions |  | Managed instance groups support updating their descriptions through the API or gcloud CLI. |
| 2021-08-03 | Persistent disk |  | Disks, snapshots, and images are available in all zones of the Toronto northamerica-northeast2 region. |
| 2021-08-03 | snapshot |  | Disks, snapshots, and images are available in all zones of the Toronto northamerica-northeast2 region. |
| 2021-08-03 | VM availability in northamerica-northeast2 |  | The Toronto northamerica-northeast2 region offers E2, N2, and N1 virtual machines in all three zones. |
| 2021-07-22 | Compute Engine Help Assistant |  | The Google Cloud Console Help Assistant can answer questions about Compute Engine. |
| 2021-07-13 | Compute Engine Go client library |  | A Compute Engine Cloud Client Library based on the latest client library model is available for Go. |
| 2021-07-13 | Observability tab process metrics |  | The VM instance details Observability tab includes process metrics charts and reports for troubleshooting processes running on VMs. |
| 2021-07-01 | N2D VM 100 Gbps networking |  | N2D virtual machines can be configured with up to 100 Gbps of network bandwidth. |
| 2021-06-29 | Managed instance group autoscaling on aggregated Cloud Monitoring metrics |  | Regional and zonal managed instance groups can autoscale based on filtered aggregated Cloud Monitoring metrics for the group. |
| 2021-06-29 | VM availability in asia-south2 |  | The Delhi asia-south2 region offers E2, N2, N1, and C2 virtual machines in all three zones. |
| 2021-06-28 | N2D VM regional availability |  | General-purpose N2D virtual machines are available in the us-west4-b zone; N2D machine types are available in the us-west4-a zone. |
| 2021-06-28 | Observability tab |  | The VM instance details page includes an Observability tab with logs and enhanced CPU, disk, and network visibility. |
| 2021-06-23 | Compute Engine API best practices |  | Best practice guidance is available for using the Compute Engine API. |
| 2021-06-21 | VM availability in australia-southeast2 |  | The Melbourne australia-southeast2 region offers E2, N2, N1, and M1 machine types, with M1 available in zones b and c. |
| 2021-06-18 | Linux application-consistent snapshots |  | Compute Engine can create application-consistent snapshots for disks attached to Linux virtual machines. |
| 2021-06-17 | Custom E2 shared-core machine types |  | E2 shared-core machine types can be customized with selectable memory sizes on Intel or AMD platforms. |
| 2021-06-17 | M2 machine type regional availability |  | Memory-optimized M2 machine types are available in additional Belgium zones. |
| 2021-06-08 | Capacity-aware distribution shapes |  | Regional managed instance groups can distribute instances across zones using capacity-aware distribution shapes that can also prioritize reservations. |
| 2021-06-01 | Compute Engine Cloud Client Libraries |  | Compute Engine Cloud Client Libraries based on the latest client library model are available for Java, .NET, Node.js, PHP, Python, and Ruby. |
| 2021-05-26 | VM simultaneous multithreading disablement |  | Compute Engine virtual machines can disable simultaneous multithreading (SMT). |
| 2021-05-25 | Nested virtualization at VM creation |  | Nested virtualization can be enabled directly when creating a virtual machine. |
| 2021-05-19 | GPU VM 100 Gbps networking |  | VM instances with V100, A100, and T4 GPUs can support network bandwidths up to 100 Gbps. |
| 2021-05-12 | N2 VM regional availability |  | N2 machine types are available in additional Osaka and Seoul zones; N2 virtual machines are available in additional Mumbai and Jakarta zones. |
| 2021-05-03 | HPC VM image |  | The HPC VM image enables creation of virtual machines optimized for high performance computing workloads; The HPC VM image provides a preconfigured virtual machine image for high performance computing workloads. |
| 2021-04-29 | Extreme persistent disks |  | Extreme persistent disks provide consistently high performance storage for high-end database workloads in certain regions. |
| 2021-04-29 | OS inventory management v2.0 |  | OS inventory management v2.0 lets users query the OS Config API for VM inventory and vulnerability report data in a specific zone. |
| 2021-04-28 | C2 machine type regional availability |  | C2 machine types are available in the asia-northeast2-a zone in Osaka. |
| 2021-04-13 | Schedule-based autoscaling for managed instance groups |  | Schedule-based autoscaling for managed instance groups lets you schedule capacity ahead of anticipated load. |
| 2021-04-13 | VM Manager VPC Service Controls integration |  | VM Manager integrates with VPC Service Controls. |
| 2021-04-08 | Predictive autoscaling for managed instance groups |  | Predictive autoscaling for managed instance groups uses machine learning to forecast demand and provision VMs ahead of load; Predictive autoscaling for managed instance groups uses machine learning to forecast demand and provision VMs ahead of load. |
| 2021-04-06 | Instance schedules in Google Cloud Console |  | Instance schedules in Google Cloud Console let you manage VM start and stop schedules through the console. |
| 2021-04-06 | N2D machine types |  | N2D machine types are Compute Engine VM machine types based on AMD EPYC processors; N2D machine types are Compute Engine VM machine types based on AMD EPYC processors. |
| 2021-04-01 | Memory-optimized machine types |  | Memory-optimized machine types provide high-memory VM configurations for memory-intensive workloads; Memory-optimized machine types provide high-memory VM configurations for memory-intensive workloads. |
| 2021-03-25 | Instance schedules |  | Instance schedules automatically start and stop VM instances on a defined schedule. |
| 2021-03-24 | Custom and public images |  | Compute Engine images provide boot disk templates for creating VM instances. |
| 2021-03-24 | E2 machine types |  | E2 machine types provide cost-optimized general-purpose VM instances; E2 machine types provide cost-optimized general-purpose VM instances. |
| 2021-03-24 | N1 machine types |  | N1 machine types provide general-purpose VM instances for a broad range of workloads; N1 machine types provide general-purpose VM instances for a broad range of workloads. |
| 2021-03-24 | OS Login in VPC Service Controls |  | OS Login in VPC Service Controls supports using OS Login with service perimeter protections. |
| 2021-03-24 | Persistent disks |  | Persistent disks provide durable block storage for Compute Engine instances. |
| 2021-03-24 | Snapshots |  | Snapshots create point-in-time backups of persistent disks. |
| 2021-03-17 | 100 Gbps networking for N2 and C2 VMs |  | 100 Gbps networking for N2 and C2 VMs provides higher network bandwidth for network-intensive workloads. |
| 2021-03-17 | Bulk instance API |  | The bulk instance API creates multiple homogeneous VM instances that remain independent of each other. |
| 2021-03-17 | M2 machine types |  | M2 machine types provide memory-optimized VM configurations for large in-memory workloads; M2 machine types are memory-optimized virtual machine types for large in-memory workloads. |
| 2021-03-16 | A2 machine types |  | A2 machine types are accelerator-optimized VM instances designed for GPU-intensive workloads. |
| 2021-03-16 | C2 machine types |  | C2 machine types provide compute-optimized VM instances for high-performance workloads; C2 machine types provide compute-optimized VM instances for high-performance workloads. |
| 2021-03-16 | N2 machine types |  | N2 machine types provide balanced VM instances based on Intel Cascade Lake processors; N2 machine types are general-purpose virtual machine types for Compute Engine workloads. |
| 2021-03-16 | NVIDIA A100 GPUs |  | NVIDIA A100 GPUs provide high-performance GPU acceleration for Compute Engine workloads. |
| 2021-02-12 | Google Virtual NIC |  | Google Virtual NIC provides a high-performance virtual network interface for Compute Engine instances. |
| 2021-02-02 | GPUs on sole-tenant nodes |  | GPUs on sole-tenant nodes allow VM instances on sole-tenant nodes to use attached GPUs. |
| 2021-02-02 | Local SSDs on sole-tenant nodes |  | Local SSDs on sole-tenant nodes allow VM instances on sole-tenant nodes to use local SSD storage. |
| 2021-02-02 | Planned maintenance start time for sole-tenant node groups |  | Planned maintenance start time for sole-tenant node groups lets you specify when maintenance begins for VMs in the group. |
| 2021-02-01 | 9 TB Local SSD capacity |  | 9 TB Local SSD capacity lets N1, N2, and N2D instances use up to 24 local SSD partitions totaling 9 TB; 9 TB Local SSD capacity allows Compute Engine instances to use up to 24 local SSD partitions for 9 TB of local SSD space. |
| 2021-02-01 | NVIDIA T4 GPUs |  | NVIDIA T4 GPUs provide GPU acceleration for inference, graphics, and general-purpose compute workloads; NVIDIA T4 GPUs provide GPU acceleration for inference, graphics, and general-purpose compute workloads. |
| 2021-02-01 | Schedule-based autoscaling in Google Cloud Console |  | Schedule-based autoscaling in Google Cloud Console lets you configure managed instance group schedules through the console. |
| 2020-06-26 | Live migration within sole-tenant node groups |  | Live migration within sole-tenant node groups lets VMs move within the node group during host maintenance events. |
| 2020-06-15 | Sole-tenant node types |  | Sole-tenant node types define the host hardware configurations available for sole-tenant deployments; Sole-tenant node types define the host hardware configurations available for sole-tenant deployments. |
| 2020-06-08 | asia-southeast2 region availability |  | The asia-southeast2 region adds a new Compute Engine region for deploying resources. |
| 2020-06-08 | Cloud Monitoring Compute Engine VM Instances dashboard enhancements |  | Enhancements to the Cloud Monitoring Compute Engine VM Instances dashboard add cross-fleet metrics, detailed resource views, filters, and time-window controls. |
| 2020-06-05 | CPU overcommit on sole-tenant nodes |  | CPU overcommit on sole-tenant nodes lets you provision more VM CPUs on a node than are physically available. |
| 2020-05-21 | Committed use discounts for E2 shared-core machine types |  | Committed use discounts for E2 shared-core machine types let eligible shared-core E2 instances receive discounted committed pricing. |
| 2020-05-21 | Hardware-backed SSH key pairs |  | Hardware-backed SSH key pairs let you SSH to VM instances using security keys. |
| 2020-05-20 | Managed instance group error visibility |  | Managed instance group error visibility lets you view instance creation and group errors for diagnosis and mitigation. |
| 2020-05-19 | VM screenshots for troubleshooting |  | VM screenshots for troubleshooting let you capture screenshots of virtual machines to diagnose issues. |
| 2020-05-12 | Sole-tenant node group autoscaler |  | The sole-tenant node group autoscaler automatically manages the size of sole-tenant node groups. |
| 2020-05-11 | Idle persistent disk recommendations |  | Idle persistent disk recommendations identify underused persistent disks to help reduce unused resources and cost; Idle persistent disk recommendations identify unused persistent disk resources to help reduce costs. |
| 2020-04-20 | us-west4 region availability |  | The us-west4 region adds a new Compute Engine region for deploying resources. |
| 2020-04-16 | Shared billing for committed use discounts |  | Shared billing for committed use discounts lets discounts be shared across projects under the same billing account. |
| 2020-04-15 | Idle VM recommendations |  | Idle VM recommendations identify virtual machine instances that are not being used to help reduce cost; Idle VM recommendations identify underused virtual machines to help reduce costs. |
| 2020-04-15 | OS Config agent |  | The OS Config agent enables OS management capabilities such as patching and configuration on VM instances. |
| 2020-04-15 | OS patch management |  | OS patch management lets you manage patches, maintain systems, and view patch compliance for VM instances; OS patch management lets you manage patches, perform maintenance, and view patch compliance for VM instances. |
| 2020-04-09 | Shielded VM default enablement |  | Shielded VM default enablement turns on Shielded VM protections automatically for Compute Engine VMs. |
| 2020-04-01 | NVIDIA Tesla T4 GPUs |  | NVIDIA Tesla T4 GPUs provide GPU acceleration for Compute Engine virtual machines; NVIDIA Tesla T4 GPUs provide GPU acceleration for Compute Engine virtual machines. |
| 2020-04-01 | Placement policies |  | Placement policies let you control relative VM placement on underlying host infrastructure for latency or isolation goals. |
| 2020-03-31 | M1 megamem machine types |  | M1 megamem machine types are memory-optimized virtual machine types designed for extremely large memory workloads. |
| 2020-03-31 | M1 ultramem machine types |  | M1 ultramem machine types are memory-optimized virtual machine types with very high memory capacity. |
| 2020-03-31 | M2 ultramem machine types |  | M2 ultramem machine types are memory-optimized virtual machine types with very high memory capacity. |
| 2020-03-31 | Windows VM diagnostic collection |  | Windows VM diagnostic collection gathers diagnostic information from Windows virtual machines. |
| 2020-03-24 | Flexible committed use discounts for cores and memory |  | Flexible committed use discounts let you purchase separate Compute Engine commitments for cores and memory. |
| 2020-03-24 | Managed instance group preserved instance names |  | Managed instance groups can preserve VM instance names during rolling updates. |
| 2020-03-24 | Managed instance group selective updates |  | Managed instance group selective updates let you update only chosen VM instances with controlled disruption. |
| 2020-03-05 | CoreOS Container Linux images | 2020-05-26 | CoreOS Container Linux images are Compute Engine VM images based on Container Linux; deprecated on 2020-05-26. |
| 2020-03-02 | Image export in Google Cloud Console |  | Image export in Google Cloud Console lets you export Compute Engine images to Cloud Storage through the console. |
| 2020-02-24 | us-west3 region |  | The us-west3 region is a Compute Engine region providing zonal capacity with the Skylake CPU platform. |
| 2020-02-19 | Managed instance group health state visibility |  | Managed instance group health state visibility lets you review the health status of each VM in an autohealed group. |
| 2020-02-12 | Guest policies |  | Guest policies maintain consistent software configurations across Compute Engine VM instances. |
| 2020-02-11 | Live migration for BYOL VMs on sole-tenant node groups |  | Live migration for BYOL VMs on sole-tenant node groups lets qualifying VMs migrate during host maintenance events. |
| 2020-02-07 | OS Login API username format control |  | OS Login API username format control lets administrators choose whether generated usernames include the domain suffix. |
| 2020-02-03 | Stateful managed instance groups |  | Stateful managed instance groups preserve per-instance state such as names, disks, and metadata during lifecycle operations. |
| 2020-01-31 | Sole-tenant node group autoscaling |  | Sole-tenant node group autoscaling automatically adjusts capacity for sole-tenant node groups. |
| 2020-01-31 | VM rescheduling on sole-tenant nodes |  | VM rescheduling on sole-tenant nodes lets you move VMs onto, off of, or between sole-tenant nodes. |
| 2020-01-24 | asia-northeast3 region |  | The asia-northeast3 region is a Compute Engine region providing zonal capacity with the Skylake CPU platform. |
| 2020-01-21 | Managed instance group autoscaling controls |  | Managed instance group autoscaling controls let you temporarily disable or restrict autoscaling without losing configuration; Managed instance groups can have autoscaling temporarily turned off or restricted without losing the autoscaler configuration. |
| 2019-12-18 | Custom image storage location |  | Custom image storage location lets you choose where custom images are stored to support locality and redundancy requirements. |
| 2019-12-10 | 100 Gbps networking for V100 and T4 GPU VMs |  | 100 Gbps networking for V100 and T4 GPU VMs enables very high network bandwidth on supported GPU instances. |
| 2019-11-22 | 10 Gbps egress for 2- and 4-vCPU VMs |  | 10 Gbps egress for 2- and 4-vCPU VMs increases maximum outbound network throughput for smaller virtual machines. |
| 2019-10-25 | OS Login API audit logging |  | Interactions with the OS Login API can be tracked through audit events. |
| 2019-10-25 | OS Login organization policy support |  | OS Login can be enabled through an organization policy. |
| 2019-10-22 | Per-instance persistent disk capacity limit |  | A Compute Engine instance can attach up to 257 TB of persistent disk storage. |
| 2019-10-22 | SSD persistent disk read IOPS increase |  | SSD persistent disks support up to 100,000 read IOPS. |
| 2019-10-21 | SSD persistent disk write throughput increase |  | Zonal and regional SSD persistent disks have increased per-instance write throughput. |
| 2019-10-07 | Create VM instance from snapshot |  | Compute Engine can create a VM instance directly from a persistent disk snapshot using the API or gcloud. |
| 2019-10-02 | OS Inventory Management |  | OS Inventory Management provides operating system inventory details for VM instances. |
| 2019-10-01 | OVA VM import |  | Compute Engine can import VM instances from open virtual appliance (OVA) files. |

Source file slug: `compute-engine.md`

