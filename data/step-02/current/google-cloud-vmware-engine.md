# Google Cloud VMware Engine

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 64
Unique features: 83

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-10 | Management VM migration between clusters |  | Allows VMware management VMs to be moved between clusters within the same private cloud, with the destination workload cluster becoming the management cluster. |
| 2026-01-06 | External NFS datastores |  | Lets you use external NFS datastores such as Filestore or Google Cloud NetApp Volumes to scale storage independently of compute resources. |
| 2025-09-11 | Privileged Access Manager for private cloud deletion |  | Uses Privileged Access Manager to speed up deletion of soft-deleted private clouds. |
| 2025-07-07 | Mixed Windows Server licensing for upgrades |  | Allows a combination of Windows Server BYOL and Google-provided on-demand licensing when upgrading to Windows Server 2022 or later images. |
| 2025-07-01 | Single-node private cloud retention policy |  | Prevents single-node private clouds created after June 4, 2025 from automatically deleting after 60 days. |
| 2025-02-25 | Update Center |  | Provides a console experience for viewing and managing private cloud updates, including scheduled version updates and patch status. |
| 2025-02-13 | Soft delete for private clouds |  | Retains deleted private clouds for seven days to provide post-delete data protection. |
| 2024-09-03 | VPC Service Controls |  | Adds a security control layer that helps prevent data exfiltration and unauthorized access. |
| 2024-07-29 | Fully licensed commitments |  | Allows purchase of fully licensed commitments for VMware Engine. |
| 2024-07-29 | Fully licensed convertible commitments |  | Allows purchase of fully licensed convertible commitments for VMware Engine. |
| 2024-07-29 | Portable License commitments |  | Allows purchase of portable license commitments for VMware Engine. |
| 2024-04-01 | Storage-only nodes |  | Provides storage-only nodes to separate storage capacity from compute resources. |
| 2024-03-11 | Cloud Logging alerts for hardware health and management components |  | Exposes status updates about hardware health and VMware management components in Cloud Logging and the VMware Engine UI. |
| 2024-02-27 | Commitments for node types |  | Allows purchase of commitments tied to specific node types. |
| 2023-12-18 | Cluster |  | Clusters can be managed with Terraform resources; Clusters are available through Cloud Asset Inventory and Cloud Asset APIs. |
| 2023-12-18 | DNS server IP |  | DNS server IP configuration can be managed with Terraform resources. |
| 2023-12-18 | External IP addresses |  | External IP addresses can be managed with Terraform resources. |
| 2023-12-18 | Network peering |  | Network peering can be managed with Terraform resources; Network peering is available through Cloud Asset Inventory and Cloud Asset APIs. |
| 2023-12-18 | Network policy management |  | Network policies can be managed with Terraform resources. |
| 2023-12-18 | NSX credential management |  | NSX credentials can be managed with Terraform resources. |
| 2023-12-18 | Standard private cloud |  | Standard private clouds can be managed with Terraform resources. |
| 2023-12-18 | Standard VMware Engine network |  | Standard VMware Engine networks are supported by the Terraform provider. |
| 2023-12-18 | Subnet management |  | Subnets can be managed with Terraform resources. |
| 2023-12-18 | Time-limited private cloud |  | Time-limited single-node private clouds can be managed with Terraform resources. |
| 2023-12-18 | vCenter credential management |  | VCenter credentials can be managed with Terraform resources. |
| 2023-12-12 | External access rule |  | External access rules are available through Cloud Asset Inventory and Cloud Asset APIs. |
| 2023-12-12 | External address |  | External addresses are available through Cloud Asset Inventory and Cloud Asset APIs. |
| 2023-12-12 | Network policy |  | Network policies are available through Cloud Asset Inventory and Cloud Asset APIs. |
| 2023-12-12 | Private cloud |  | Private clouds are available through Cloud Asset Inventory and Cloud Asset APIs. |
| 2023-12-12 | Private connection |  | Private connections are available through Cloud Asset Inventory and Cloud Asset APIs. |
| 2023-12-12 | VMware Engine network |  | VMware Engine networks are available through Cloud Asset Inventory and Cloud Asset APIs. |
| 2023-11-14 | Advanced VPC peering |  | Advanced VPC peering lets you create a complex set of Virtual Private Cloud peerings in the Google Cloud console. |
| 2023-11-14 | Automatic management DNS for private clouds |  | DNS bindings for the private cloud management zone can be viewed and managed. |
| 2023-11-14 | Default VPC peer count |  | Standard VMware Engine networks now support 25 VPC peers by default. |
| 2023-11-14 | DNS bindings |  | DNS bindings provide bidirectional Cloud DNS integration so Cloud DNS administrators can bind VMware Engine networks like other VPCs. |
| 2023-11-14 | DNS forwarding rules |  | Management appliance DNS resolution can be configured for private clouds attached to legacy VMware Engine networks. |
| 2023-11-14 | ESXi log forwarding |  | ESXi logs, including NSX-T Distributed Firewall logs, can be sent to a remote syslog server. |
| 2023-11-14 | External access rules |  | External access rules let you control access to external IP addresses, including multiple external IP addresses within a single rule. |
| 2023-11-14 | Fine-grained IAM permissions |  | Fine-grained IAM permissions provide per-action access controls for additional VMware Engine resources. |
| 2023-11-14 | Google Cloud CLI and VMware Engine API endpoints |  | Additional CLI and API endpoints support managing the networking model, network peering, external access rules, external IP service, and consumer DNS. |
| 2023-11-14 | Google Cloud console management experience |  | VMware Engine environments can be managed in the Google Cloud console without opening another tab. |
| 2023-11-14 | Integrated networking |  | Private cloud creation can now include VMware Engine network setup and initial VPC peering. |
| 2023-11-14 | Point-to-site VPN gateways | 2022-08-10 | Point-to-site VPN gateways can no longer be managed for projects that already have them; deprecated on 2022-08-10. |
| 2023-06-28 | Enhanced service controls |  | Enhanced service controls add more granular permissions-elevation controls for Google support access to VMware Engine instances. |
| 2023-06-28 | ESXi syslog forwarding |  | ESXi syslog forwarding sends ESXi and distributed firewall logs to improve visibility into VMware Engine security events. |
| 2023-06-28 | Terraform support |  | Terraform support lets you manage VMware Engine private clouds, clusters, and networks with create, update, and delete operations. |
| 2023-06-14 | Management subnets |  | Management subnets let you configure HCX and service subnets for VMware Engine environments. |
| 2023-06-14 | Private Connections management via gcloud CLI and API |  | Private Connections management via gcloud CLI and API lets you create, update, and delete private connections programmatically. |
| 2023-06-14 | Single-node private clouds |  | Single-node private clouds let you provision a VMware Engine private cloud with a single node; Private clouds can be created with a single node for testing and proof-of-concept deployments. |
| 2023-05-16 | VMware Aria Operations for Logs integration |  | VMware Aria Operations for Logs integration lets you collect and manage logs from VMware Engine and on-premises environments in a centralized solution. |
| 2023-04-25 | VPC Service Controls support |  | VPC Service Controls support lets you attach VMware Engine services to a new or existing VPC Service Controls perimeter. |
| 2023-02-22 | TPM 2.0 support |  | TPM 2.0 support lets VMware Engine private clouds add a virtual Trusted Platform Module to virtual machines; TPM 2.0 support lets VMware Engine private clouds add a virtual Trusted Platform Module to virtual machines. |
| 2022-12-08 | Resource name translation |  | Resource name translation standardizes private cloud resource names into a Google Cloud-compatible format and is required for gcloud CLI or API access after September 2023. |
| 2022-11-17 | IP Plan version 2.0 |  | IP Plan version 2.0 changes subnet allocations for newly created private clouds and includes HCX addressing in the management CIDR. |
| 2022-11-17 | Stretched private clouds |  | Stretched private clouds let vSphere and vSAN clusters span zones to improve availability and protect against zone-level failures. |
| 2022-10-06 | Service subnets |  | Service subnets add dedicated subnets for appliance and service deployments such as storage, backup, disaster recovery, and media streaming. |
| 2022-09-23 | Dell PowerScale file share access |  | Dell PowerScale file shares can be accessed in-guest from Google Cloud VMware Engine VMs using NFS or SMB. |
| 2022-05-31 | HCX KVM and Hyper-V migration to vSphere |  | HCX supports migrations from KVM and Hyper-V environments to vSphere. |
| 2022-05-31 | HCX mobility groups |  | HCX mobility groups are enabled by default through the HCX Enterprise license level. |
| 2022-05-31 | HCX mobility-optimized networking |  | HCX mobility-optimized networking is enabled by default through the HCX Enterprise license level. |
| 2022-05-31 | HCX Replication Assisted vMotion |  | HCX Replication Assisted vMotion is enabled by default through the HCX Enterprise license level for bulk, no-downtime migrations. |
| 2022-05-31 | HCX traffic engineering |  | HCX traffic engineering is enabled by default through the HCX Enterprise license level. |
| 2022-04-04 | VMware Engine nodes in us-east4-b |  | VMware Engine nodes are available in the Ashburn, Northern Virginia us-east4-b zone. |
| 2022-03-25 | Custom core count per node |  | Clusters can be created with a custom number of cores per node to match application-specific requirements. |
| 2022-03-25 | Default outbound firewall rule update |  | New projects receive an expanded default outbound firewall rule that allows outbound TCP, UDP, and ICMP traffic. |
| 2022-03-25 | Public IP service ICMP support |  | The public IP service now supports the ICMP protocol. |
| 2021-12-15 | NSX-T syslog forwarding to Cloud Logging |  | NSX-T syslog messages of a chosen severity can be forwarded to Cloud Logging for alerting and dashboards. |
| 2021-11-10 | VMware Engine nodes in europe-west3-b |  | VMware Engine nodes are available in the Frankfurt europe-west3-b zone. |
| 2021-10-29 | Standalone agent integration with Cloud Operations |  | A standalone metrics and logs agent integrates VMware Engine with Cloud Operations to ingest vCenter and vSAN metrics and syslog messages. |
| 2021-10-13 | Private cloud default software versions |  | New private clouds deploy with vSphere 7.0 Update 2 and NSX-T 3.1.2, and existing clouds are upgraded over time. |
| 2021-10-13 | vSAN data encryption with Cloud KMS |  | VSAN data encryption at rest uses Cloud Key Management Service generated keys for new private clouds; vSAN data encryption at rest uses Cloud Key Management Service generated keys for new private clouds. |
| 2021-08-20 | Operations Suite integration with standalone agent |  | A standalone metrics and logs agent sends vCenter and vSAN metrics and syslog messages to Google Cloud's operations suite. |
| 2021-06-17 | Autoscale policies |  | Autoscale policies automatically expand or shrink a cluster based on CPU utilization or storage capacity thresholds. |
| 2021-03-25 | NetApp Cloud Volumes Service support |  | Workload VMs can use NetApp Cloud Volumes Service volumes as NFS mount points or SMB shares. |
| 2021-02-17 | Cloud DNS management component name resolution |  | Cloud DNS can resolve management component domain names across multiple private clouds in the same or different regions. |
| 2021-02-17 | Managed credentials for vCenter and NSX-T Manager |  | VMware Engine generates and lets you view or reset passwords for the CloudOwner@gve.local and NSX-T admin users. |
| 2021-02-17 | Multiple VPC peering with private clouds |  | Multiple VPCs can peer with private clouds in a region, enabling many-to-many connectivity across VPCs and regions. |
| 2020-12-14 | Node customization persistence during replacement |  | Customizations from a failed node transfer to its replacement, including vSphere labels, custom attributes, tags, and affinity rules. |
| 2020-12-14 | Route exchange between VPCs and private clouds |  | VMware Engine advertises routes between VPCs and private cloud networks to enable communication between Google Cloud and private cloud resources. |
| 2020-10-12 | End-to-end dynamic routing |  | Private clouds can dynamically learn custom or reserved-block public IP ranges from VPC and on-premises networks. |
| 2020-10-12 | HCX private cloud-to-private cloud migration |  | HCX can migrate virtual machines between two private clouds. |
| 2020-10-12 | Multi-region private cloud connectivity |  | Private clouds in different regions can automatically route traffic between each other without additional connectivity. |
| 2020-10-12 | RFC 6598 address range support for management and workload networks |  | Management and workload networks can use RFC 6598 non-private address ranges when creating a private cloud. |

Source file slug: `google-cloud-vmware-engine.md`

