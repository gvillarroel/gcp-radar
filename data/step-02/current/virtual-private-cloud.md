# Virtual Private Cloud

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 238
Unique features: 229

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-04-03 | Hybrid subnets |  | Hybrid Subnets allows a VPC network to share a CIDR block with a connected on-premises network so workloads can migrate to Google Cloud without changing IP addresses; Hybrid subnets allow an on-premises subnet and a VPC subnet to function as a single logical subnet so workloads can be moved gradually from on-premises to VPC while preserving IP addresses. |
| 2026-03-30 | Private Service Connect endpoint-level connection controls |  | Service producers can now accept or reject connections from individual Private Service Connect endpoints. |
| 2026-03-18 | Service attachment target service in-place update |  | Enables updating a service attachment's target service without recreating the attachment, preserving consumer connections while temporarily disrupting traffic. |
| 2026-02-26 | Multiple network interfaces for Compute Engine instances in the same VPC |  | Enables creating Compute Engine instances with multiple network interfaces in the same VPC network. |
| 2026-02-10 | Custom organization policy constraints for VPC internal ranges |  | VPC now supports using custom organization policy constraints to apply granular, field-level control to internal IP ranges. |
| 2026-02-09 | Bring Your Own IPv6 global unicast addresses for VPC internal subnet ranges |  | VPC now allows assigning customer-owned IPv6 global unicast addresses to a subnet’s internal IPv6 address range as private range addresses. |
| 2026-02-04 | BYOIP static external IPv4 addresses from regional v2 prefixes |  | This feature enables creating individual static external IPv4 addresses from BYOIP prefixes, limited to IPv4 regional v2 prefixes created after December 13, 2025, and available in GA. |
| 2026-01-20 | Auto mode VPC subnet addition in asia-southeast3 |  | This update adds the 10.232.0.0/20 subnet range for auto mode VPC networks in the Bangkok (asia-southeast3) region. |
| 2025-11-14 | Dynamic Private Service Connect interfaces |  | Dynamic Private Service Connect interfaces let service producers add and remove PSC interfaces on a VM instance without restarting or recreating the instance; Dynamic Private Service Connect interfaces allow VM instances to add or remove interfaces without restarting or recreating the instance. |
| 2025-11-10 | Private Service Connect endpoint connection approval |  | Service producers can approve or reject connections from individual Private Service Connect endpoints. |
| 2025-11-03 | VPC Network Peering consensus mode |  | Adds consensus mode as a supported connection mode for VPC network peering; VPC Network Peering supports peering connections in consensus mode. |
| 2025-10-30 | Dynamic Network Interfaces |  | Enables adding or removing network interfaces on a VM instance without restart or recreation, with support for up to 16 interfaces via Dynamic NICs; Dynamic Network Interfaces allow adding or removing VM network interfaces without restarting or recreating the instance, including support for additional interface capacity through Dynamic NICs. |
| 2025-10-29 | Static regional IPv6 address reservation |  | GCP now allows reserving static regional IPv6 addresses with a /96 address range. |
| 2025-10-24 | Subnet IP address utilization reporting |  | You can now view free and allocated IP address counts when listing or describing a subnet. |
| 2025-10-20 | VPC Flow Logs for Cloud Run Direct VPC egress |  | VPC Flow Logs now supports logging for Cloud Run resources configured with Direct VPC egress. |
| 2025-10-15 | Private Service Connect health |  | Private Service Connect health is introduced in preview to let service producers define health states for automatic cross-region failover of consumers using Private Service Connect backends. |
| 2025-09-26 | VPC Flow Logs enhanced TCP/Falcon RTT precision |  | VPC Flow Logs now provides enhanced round-trip time precision metrics for TCP and Falcon traffic. |
| 2025-09-26 | VPC Flow Logs RDMA over Falcon transport logging |  | VPC Flow Logs adds support for logging RDMA traffic over Falcon transport. |
| 2025-09-25 | VPC Flow Logs organization-level enablement via Network Management API |  | Organizations can enable VPC Flow Logs through the Network Management API. |
| 2025-09-25 | VPC Flow Logs subnet-level enablement via Network Management API |  | Subnets can have VPC Flow Logs enabled via the Network Management API. |
| 2025-09-25 | VPC Flow Logs VPC network-level enablement via Network Management API |  | VPC networks can have VPC Flow Logs enabled via the Network Management API. |
| 2025-09-23 | Cross-region internal Application Load Balancer support for Private Service Connect |  | Service producers can publish services from cross-region internal Application Load Balancers via Private Service Connect in Google Cloud. |
| 2025-09-12 | VPC RDMA over Falcon transport |  | You can create a VPC network that supports RDMA over Falcon transport for AI and HPC VM workloads using IRDMA-based instances such as H4D. |
| 2025-08-26 | IPv6-only subnets and IPv6-only instances |  | VPC now supports IPv6-only networking for both subnets and instances. |
| 2025-08-26 | VPC Flow Logs support for RDMA flows over Converged Ethernet |  | VPC Flow Logs now captures RDMA traffic, including GPU-to-GPU RDMA flows over Converged Ethernet. |
| 2025-08-08 | VPC Flow Logs Google services metadata annotations |  | VPC Flow Logs now includes GA metadata annotations for Google service traffic, including service_name, connectivity, and private_domain. |
| 2025-08-04 | Selectable allocation strategy for automatic internal range IPv4 block assignment |  | When reserving an internal range with an automatically allocated IPv4 CIDR block, users can now choose the strategy used to select a free block. |
| 2025-07-08 | Policy-based routes for IPv6 traffic |  | Policy-based routing now supports applying routes to IPv6 traffic; Policy-based routing now supports applications to IPv6 traffic. |
| 2025-07-08 | Policy-based routes using next hops in a peered VPC network |  | Policy-based routes now support using a next hop that resides in a peered VPC network. |
| 2025-06-27 | Private Service Connect endpoint automatic retry on create/delete failures |  | Private Service Connect endpoint operations now automatically retry create or delete actions when they fail due to errors. |
| 2025-06-18 | Organization-level VPC Flow Logs enablement via Network Management API |  | Enables turning on VPC Flow Logs for an organization through the Network Management API in Preview. |
| 2025-06-18 | Subnet-level VPC Flow Logs enablement via Network Management API |  | Enables turning on VPC Flow Logs for a subnet through the Network Management API in Preview. |
| 2025-06-18 | VPC-level VPC Flow Logs enablement via Network Management API |  | Enables turning on VPC Flow Logs for a VPC network through the Network Management API in Preview. |
| 2025-06-16 | RDMA traffic annotation in VPC Flow Logs |  | Adds RDMA traffic annotations to records produced by VPC Flow Logs, available in General Availability. |
| 2025-06-05 | Secure Web Proxy published via Private Service Connect |  | Secure Web Proxy instances can be published as Private Service Connect services to centralize egress traffic management across multiple VPC networks. |
| 2025-05-28 | IPv6 BYOIP subnet external address ranges |  | Allows assigning IPv6 BYOIP address ranges to subnet external ranges for VM external IPv6 addresses, including ephemeral or reserved addresses via static regional allocations. |
| 2025-05-19 | Cross-region internal Application Load Balancer publishing via Private Service Connect |  | Enables service producers to publish services hosted on internal Application Load Balancers to other consumers across regions. |
| 2025-05-12 | Internal range IP allocation exclusions |  | Allows users to exclude specific IP address ranges from being automatically used during internal range allocation. |
| 2025-05-07 | Editable internal range descriptions |  | Allows updating only the description field of an internal range while leaving other settings unchanged; Allows the description field of internal ranges to be edited without recreating the range. |
| 2025-05-07 | Immutable internal ranges |  | Adds internal ranges that cannot be edited after creation, except for description changes; Introduces internal ranges that are read-only after creation except for updating the description. |
| 2025-05-07 | Internal range allocation strategy selection for automatic IPv4 CIDR reservation |  | Allows you to choose an allocation strategy when reserving an internal IPv4 CIDR block so the system selects an available block automatically. |
| 2025-05-07 | Internal ranges with IPv6 reservations |  | Adds support for reserving internal IP ranges using IPv6 addresses. |
| 2025-04-30 | Private Service Connect migration for VPC Network Peering services |  | Enables service producers to move services from VPC Network Peering to Private Service Connect without changing the consumer-facing IPv4 address. |
| 2025-03-31 | Private Service Connect global Google API access via cross-region internal Application Load Balancer backends |  | Private Service Connect now supports accessing global Google APIs using backends that use cross-region internal Application Load Balancers. |
| 2025-03-26 | IPv6 static routes with instance-address next-hop in dual-stack configurations |  | Dual-stack VPC networks now support IPv6 static routes that use a next hop instance identified by address (next-hop-address). |
| 2025-03-26 | IPv6 static routes with next-hop internal passthrough Network Load Balancer in dual-stack configurations |  | Dual-stack VPC networks now support IPv6 static routes that use next-hop-ilb (internal passthrough Network Load Balancer) as the next hop. |
| 2025-03-07 | Exclude internal ranges from automatic IP address allocation |  | Allows excluding internal IP address ranges from automatic internal range allocation in Virtual Private Cloud. |
| 2025-03-07 | Reserve internal ranges with IPv6 addresses |  | Allows internal ranges in Virtual Private Cloud to be reserved using IPv6 address space. |
| 2025-03-07 | VPC internal ranges |  | Internal ranges can now be created with CIDR blocks that overlap existing routes and subnets; Internal Ranges in VPC allow allocation of private IP address blocks and control over how those addresses are used. |
| 2025-03-04 | Auto mode VPC regional subnets |  | An auto mode VPC network gained a new subnet (10.226.0.0/20) in the Sweden (europe-north2, Stockholm) region. |
| 2025-02-28 | Private Service Connect support for accessing supported global Google APIs through backends |  | Private Service Connect now supports accessing supported global Google APIs via private backends in generally available service. |
| 2025-02-27 | Private Service Connect monitoring metrics and NAT IP address capacity metric availability |  | Private Service Connect now provides GA monitoring metrics for producers and consumers for service connections, including a producer-only NAT IP address capacity metric. |
| 2025-02-26 | Private Service Connect propagated connections |  | Private Service Connect propagated connections became generally available, enabling services in one consumer VPC spoke to be privately accessed from other spokes connected to the same Network Connectivity Center hub; Private Service Connect propagated connections allow services exposed through one consumer VPC spoke via Private Service Connect to be privately reached by other consumer VPC spokes connected to the same Network Connectivity Center hub. |
| 2025-02-20 | Private Service Connect service connectivity automation IPv6 support |  | Private Service Connect service connectivity automation now supports IPv6 connectivity to eligible managed services and is generally available. |
| 2025-01-27 | VPC Flow Logs InstanceGroupDetails metadata annotations |  | VPC Flow Logs metadata annotations now include InstanceGroupDetails information for flow events. |
| 2025-01-16 | Private Service Connect regional Google API IPv6 endpoint support |  | Private Service Connect endpoints for regional Google APIs can now be configured with IPv6 addresses for IPv6 client access. |
| 2025-01-15 | Private Service Connect producer port configuration |  | Private Service Connect now supports specifying the producer port in backend configuration when connecting to a published service. |
| 2025-01-15 | VPC internal range migration |  | Allows creating an internal range with usage type FOR_MIGRATION to move a CIDR block from one subnet to another. |
| 2025-01-15 | VPC Network Peering to Private Service Connect migration |  | Lets service producers migrate services from VPC Network Peering to Private Service Connect while keeping the same consumer IP addresses. |
| 2025-01-15 | VPC network profile resource |  | A VPC network profile resource is now available in General Availability. |
| 2025-01-15 | VPC RDMA network profile |  | VPC now supports an RDMA network profile that enables AI workloads on VM instances with RDMA network interfaces. |
| 2025-01-14 | VPC Flow Logs sampling for VLAN attachments and Cloud VPN tunnels |  | VPC Flow Logs now supports sampling traffic that is sent through VLAN attachments for Cloud Interconnect and Cloud VPN tunnels. |
| 2024-12-17 | IPv6-only instances |  | IPv6-only instances are now available in preview. |
| 2024-12-17 | IPv6-only subnets |  | IPv6-only subnet configurations are now available in preview. |
| 2024-12-13 | Private Service Connect service connectivity automation |  | Private Service Connect service connectivity automation enables automatic setup of Private Service Connect connections to supported Google service instances across projects, folders, or organizations; Private Service Connect service connectivity automation is generally available, allowing service producers to automate deployment and service connectivity for eligible managed services on behalf of consumers. |
| 2024-12-11 | Private Service Connect port mapping |  | Private Service Connect port mapping enables VM consumers to access specific service ports on specific producer VMs through a single Private Service Connect endpoint; Private Service Connect port mapping allows a consumer VM to privately reach specific service ports on specific producer VMs through a single Private Service Connect endpoint. |
| 2024-11-18 | Auto mode VPC subnet expansion for northamerica-south1 |  | Added a new auto mode VPC subnet range of 10.224.0.0/20 for the northamerica-south1 (Mexico) region. |
| 2024-10-31 | IPv6 static routes with next-hop internal passthrough Network Load Balancer |  | Added preview support for IPv6 static routes that use an internal passthrough Network Load Balancer as the next hop (next-hop-ilb). |
| 2024-09-27 | Private Service Connect IPv6 support |  | Private Service Connect added IPv6 support for supported configurations, allowing service consumers to use IPv6 endpoint addresses and service producers to publish services via IPv6 service attachments; Private Service Connect added Preview IPv6 support so consumers can access services through IPv6 endpoints and producers can publish services with IPv6 service attachments. |
| 2024-09-13 | Private Service Connect Google APIs regional access |  | Private Service Connect endpoints can be used to access regional service endpoints of supported Google APIs. |
| 2024-08-23 | VPC Flow Logs traffic sampling for VLAN attachments and VPN tunnels |  | VPC Flow Logs now supports sampling traffic for Cloud Interconnect VLAN attachments and Cloud VPN tunnels. |
| 2024-08-12 | VPC Flow Logs metadata annotation fields |  | VPC Flow Logs now supports additional GA metadata annotations, including gateway, Google service, load balancing, and Private Service Connect fields. |
| 2024-07-24 | Private Service Connect predefined dashboard for endpoint connections to published services |  | A new predefined dashboard is now available for monitoring endpoints that connect to Private Service Connect published services. |
| 2024-07-24 | Private Service Connect predefined dashboard for published services monitoring |  | The predefined Private Service Connect dashboard for published services has been enhanced with additional monitoring metrics. |
| 2024-07-24 | Private Service Connect producer monitoring metrics for Regional Internal Application Load Balancer |  | Regional Internal Application Load Balancer is now supported as a producer load balancer for all Private Service Connect monitoring metrics. |
| 2024-07-24 | Private Service Connect producer monitoring metrics for Regional Internal Proxy Network Load Balancer |  | Regional Internal Proxy Network Load Balancer is now supported as a producer load balancer for all Private Service Connect monitoring metrics. |
| 2024-07-22 | VPC Console effective routes view |  | The VPC Routes page in Cloud Console now shows only effective routes by default and lets users view suppressed routes via a toggle and inspect suppression reasons. |
| 2024-06-17 | Private Service Connect cross-region internal backend for global Google APIs |  | Private Service Connect backends now support using a cross-regional internal Application Load Balancer to access global Google API targets in Preview. |
| 2024-06-10 | Policy-based routes with peered VPC next hop |  | Policy-based routes can now use a next hop that exists in a peered VPC network. |
| 2024-06-10 | VPC Flow Logs internet routing details for egress flows |  | VPC Flow Logs include internet routing details in egress flow records. |
| 2024-06-03 | IPv6 Bring Your Own IP (BYOIP) |  | Adds support for using customer-owned public IPv6 addresses in Google Cloud, including use with external passthrough Network Load Balancers. |
| 2024-06-03 | IPv6 static routes with next-hop-address |  | Adds support for IPv6 static routes that use a next hop instance identified by its address (next-hop-address). |
| 2024-04-26 | Bring Your Own IP v2 for regional addresses |  | Bring Your Own IP v2 for regional addresses reached general availability. |
| 2024-04-01 | Packet Mirroring IPv6 traffic capture |  | Packet Mirroring supports capturing IPv6 traffic in VPC environments. |
| 2024-02-05 | IPv6 extension headers support |  | Virtual Private Cloud now supports IPv6 extension headers in General Availability; Adds preview support for IPv6 extension headers in Virtual Private Cloud. |
| 2024-01-31 | Auto mode VPC subnet range addition |  | Auto mode VPC networks gained a new managed subnet range, 10.218.0.0/20, for the africa-south1 (Johannesburg) region. |
| 2024-01-31 | Private Service Connect interfaces |  | Private Service Connect interfaces are now generally available, enabling service producers to initiate connections to consumer VPC networks; Private Service Connect interfaces let service producers establish connections to consumer VPC networks and were made available in Preview. |
| 2024-01-11 | Private Service Connect regional service endpoint access |  | Private Service Connect endpoints now support accessing regional service endpoints, introduced in Preview. |
| 2023-12-19 | Packet Mirroring IPv6 traffic collection |  | Packet Mirroring can collect IPv6 traffic from mirrored resources. |
| 2023-12-13 | Private Service Connect access to supported global Google APIs via backends |  | Private Service Connect supports accessing supported global Google APIs through backends. |
| 2023-11-20 | Private Service Connect internal regional load balancer backends |  | Private Service Connect backends can now access published services hosted on regional internal Application Load Balancers and regional internal proxy Network Load Balancers. |
| 2023-10-02 | Private Service Connect published-service backends for global external TCP proxy Network Load Balancers |  | Private Service Connect allows published service backends to be added to global external TCP proxy Network Load Balancers. |
| 2023-09-29 | Private Service Connect published-service backends for external regional TCP proxy load balancers |  | Private Service Connect backends can use external regional TCP proxy load balancers to access published services. |
| 2023-09-29 | Private Service Connect published-service backends for internal regional TCP proxy load balancers |  | Private Service Connect backends can use internal regional TCP proxy load balancers to access published services. |
| 2023-09-19 | Auto mode VPC network subnet allocation |  | Auto mode VPC networks now include a new 10.216.0.0/20 subnet for the me-central2 (Dammam) region. |
| 2023-09-14 | Policy-based routing |  | Policy-based routing is now generally available, allowing next-hop selection based on protocol and source IP in addition to destination IP; Policy-based routing became available in preview and supports selecting a next hop using protocol and source IP matching instead of only destination IP. |
| 2023-09-05 | IPv6 static routes with gateway and instance next hops |  | VPC now supports IPv6 static routes using next-hop-gateway and next-hop-instance targets in general availability. |
| 2023-08-30 | Resource Manager tags for VPC resources |  | You can now add Resource Manager tags to supported VPC resources. |
| 2023-08-22 | Auto mode VPC network IP ranges |  | Added a new auto mode subnet 10.214.0.0/20 for the Berlin (europe-west10) VPC region; Auto mode VPC networks gained a new subnet range, 10.210.0.0/20, for the Turin europe-west12 region. |
| 2023-08-14 | Private Service Connect backends for cross-region Application Load Balancers |  | Enabled Private Service Connect backends with published service targets to be added to cross-region Application Load Balancers, available in preview. |
| 2023-08-02 | Connection reconciliation for Private Service Connect service attachments |  | Connection reconciliation is now available for Private Service Connect service attachments, allowing changes to consumer accept or reject lists to affect existing connections as well as new and pending ones. |
| 2023-07-17 | All-ports publishing for services on internal passthrough Network Load Balancers |  | Services hosted on internal passthrough Network Load Balancers can now be published with all-port forwarding using the --ports=all option. |
| 2023-07-05 | Reserved external IPv4 address transfer |  | Supports moving a reserved external IPv4 address between projects. |
| 2023-06-30 | VPC custom constraints |  | Provides custom constraints to control specific fields on selected VPC resources more granularly. |
| 2023-06-20 | compute.restrictPrivateServiceConnectConsumer organization policy constraint |  | Introduces the Private Service Connect organization policy constraint compute.restrictPrivateServiceConnectConsumer for service producers to control which endpoints and backends can connect to service attachments within a producer organization or project. |
| 2023-06-20 | compute.restrictPrivateServiceConnectProducer organization policy constraint |  | Introduces the Private Service Connect organization policy constraint compute.restrictPrivateServiceConnectProducer for service consumers to block endpoints and backends from connecting to service attachments in other organizations. |
| 2023-06-20 | Private Service Connect network-level connection preference for published services |  | Adds support for configuring connection preference for a Private Service Connect published service at the VPC network level in addition to project-level configuration. |
| 2023-06-04 | IPv6 static routes with next-hop gateway and next-hop instance |  | IPv6 static routes now support specific next-hop types, including next-hop-gateway and next-hop-instance, and this capability was introduced in Preview. |
| 2023-05-26 | Private Service Connect external regional TCP proxy backend support |  | Allows Private Service Connect backends to use an external regional TCP proxy load balancer when accessing published services. |
| 2023-05-26 | private.googleapis.com VIP IPv6 access |  | Provides access to Google APIs and services through the private.googleapis.com virtual IP (VIP) endpoint using IPv6. |
| 2023-05-26 | restricted.googleapis.com VIP IPv6 access |  | Provides access to Google APIs and services through the restricted.googleapis.com virtual IP (VIP) endpoint using IPv6. |
| 2023-05-23 | Internal Ranges |  | Introduces preview support for Internal ranges, allowing allocation of private IP address blocks in VPC networks with usage controls. |
| 2023-05-23 | Static regional external IPv6 address reservation |  | VPC supports reserving static regional external IPv6 addresses, indicating GA availability of this capability; VPC introduced limited-preview support for reserving static regional external IPv6 addresses. |
| 2023-05-23 | Static regional internal IPv6 address reservation |  | VPC supports reserving static regional internal IPv6 addresses, indicating GA availability of this capability; Virtual Private Cloud added preview support for reserving static internal IPv6 addresses at the regional scope. |
| 2023-05-17 | Private Service Connect global access for published services |  | Global access for Private Service Connect endpoints allows clients in any region to send traffic to published services through those endpoints. |
| 2023-04-20 | Private Service Connect regional TCP proxy backend access for published services |  | Private Service Connect added support for published-service backends to use an internal regional TCP proxy load balancer. |
| 2023-04-19 | Private Service Connect global access for endpoints |  | Private Service Connect endpoints for published services gained the ability to be configured with global access so clients in any region can reach them. |
| 2023-04-05 | Private Service Connect consumer HTTP(S) controls |  | Private Service Connect endpoints gained General Availability support for consumer HTTP(S) controls to access regional Google APIs and published services through regional internal and external HTTP(S) load balancers. |
| 2023-03-30 | Auto mode VPC subnet range for me-central1 |  | A new auto mode VPC subnet was added for the Doha (me-central1) region with CIDR block 10.212.0.0/20. |
| 2023-03-20 | Shared VPC folder-level administration |  | Managing Shared VPC at the folder level is now available in General Availability using the Shared VPC Admin role. |
| 2023-03-10 | Private Service Connect NAT subnet IP address consumption |  | Private Service Connect improves IP address consumption in NAT subnets for service attachments created on or after March 1, 2023. |
| 2023-03-10 | Private Service Connect over Cloud Interconnect VLAN attachments |  | Private Service Connect endpoint access to managed services is supported via VLAN attachments on Cloud Interconnect. |
| 2022-12-20 | Firewall address groups |  | VPC Firewall address groups allow multiple IP addresses and IP ranges to be combined into a reusable named unit for application across multiple firewall rules. |
| 2022-12-20 | FQDN objects in VPC firewall policy rules |  | Virtual Private Cloud firewall policy rules now support using fully qualified domain names (FQDNs) to filter incoming or outgoing traffic by domain. |
| 2022-12-20 | Geo-location objects for firewall policy rules |  | Firewall policy rules in VPC can use geo-location objects to filter external IPv4 and IPv6 traffic by region. |
| 2022-12-20 | Threat Intelligence firewall policy rule support |  | Firewall policy rules in VPC can use threat intelligence data to allow or block traffic. |
| 2022-12-14 | VPC peering IPv6 route exchange |  | VPC peering now supports exchanging IPv6 routes between peered VPC networks. |
| 2022-11-17 | Private Service Connect connectivity over Cloud Interconnect VLAN attachments |  | Private Service Connect supports accessing managed services via Cloud Interconnect using VLAN attachments. |
| 2022-11-16 | Private Service Connect consumer HTTP(S) controls with regional load balancer support |  | Private Service Connect consumer HTTP(S) controls now support accessing regional Google APIs and managed services through regional internal and external HTTP(S) load balancers. |
| 2022-11-08 | IPv6 access to Google APIs via private and restricted VIPs |  | Enables clients to reach Google APIs and services over IPv6 using the private.googleapis.com and restricted.googleapis.com VIPs from VMs with internal or external IPv6 connectivity and on-premises hosts. |
| 2022-11-01 | Private Service Connect internal regional TCP proxy load balancer as service attachment target |  | Adds support in GA for using internal regional TCP proxy load balancers as Private Service Connect service attachment targets for hybrid TCP/UDP connectivity to on-premises endpoints via hybrid NEGs. |
| 2022-10-21 | VPC firewall rule destination/source IP range support |  | Virtual Private Cloud firewall rules now support specifying destination IP ranges for ingress rules and source IP ranges for egress rules, available in Preview. |
| 2022-10-14 | Reserved external IPv4 address move across projects |  | Google Cloud Virtual Private Cloud now supports moving a reserved external IPv4 address from one project to another, available in Preview. |
| 2022-10-05 | Auto mode VPC subnet allocation for me-west1 |  | Auto mode VPC networks now include an added subnet range of 10.208.0.0/20 for the Tel Aviv (me-west1) region. |
| 2022-10-04 | Private Service Connect with consumer HTTP(S) controls on global external HTTP(S) load balancer |  | Private Service Connect support for accessing managed services with consumer-side HTTP(S) controls is now generally available for the global external HTTP(S) load balancer. |
| 2022-09-26 | Connected consumer forwarding rules metric for Private Service Connect producers |  | Cloud Monitoring now supports the Private Service Connect producer metric for connected consumer forwarding rules. |
| 2022-09-26 | Used NAT IP addresses metric for Private Service Connect producers |  | Cloud Monitoring now supports the Private Service Connect producer metric for used NAT IP addresses. |
| 2022-08-08 | Dual-stack VPC instances |  | VPC instances now support dual-stack networking with both IPv4 and IPv6 addresses, including multiple network interfaces, in all regions. |
| 2022-08-08 | Dual-stack VPC subnets |  | VPC subnets now support dual-stack networking with both IPv4 and IPv6 address ranges in all regions. |
| 2022-08-08 | IPv6 subnet routes |  | VPC now supports subnet routes for IPv6 subnet ranges in all regions. |
| 2022-08-05 | Network firewall policies |  | VPC network firewall policies provide centralized firewall policy management for traffic control across resources. |
| 2022-08-05 | Regional firewall policies |  | Regional firewall policies allow firewall rule enforcement scoped to a single VPC region. |
| 2022-07-14 | Private Service Connect publishing for internal protocol forwarding (target instances) |  | Private Service Connect supports publishing services that are hosted behind internal protocol forwarding using target instances. |
| 2022-07-14 | Private Service Connect publishing for Internal TCP/UDP Load Balancer with global access |  | Private Service Connect supports publishing services behind an Internal TCP/UDP load balancer with global access enabled. |
| 2022-06-22 | Private Service Connect internal regional TCP proxy load balancer service publishing |  | Private Service Connect now supports publishing services from a service producer VPC network via an internal regional TCP proxy load balancer, including backends hosted in Google Cloud, other clouds, and on-premises environments. |
| 2022-06-13 | VPC subnet jumbo frame MTU support |  | VPC networks now support jumbo frames by allowing MTUs between 1300 and 8896 bytes for resources within the same subnet. |
| 2022-06-07 | Auto mode IP ranges |  | Expanded Auto mode VPC network IP ranges by adding a new 10.206.0.0/20 subnet in the us-south1 (Dallas) region; Expanded Auto mode VPC network IP ranges by adding a new 10.202.0.0/20 subnet in the us-east5 (Columbus) region. |
| 2022-05-17 | Compute Engine IPv6 access to Google APIs |  | Compute Engine instances can access Google APIs and services using IPv6 either through internal Private Google Access or through external IPv6 addresses. |
| 2022-05-10 | Auto mode VPC regional subnet allocation |  | Auto mode VPC networks now include a predefined subnet of 10.204.0.0/20 in the Madrid (europe-southwest1) region. |
| 2022-05-02 | Auto mode VPC subnet range for europe-west9 |  | Auto mode VPC networks added a new subnet range, 10.200.0.0/20, for the Paris (europe-west9) region. |
| 2022-04-25 | Private Service Connect automatic DNS configuration |  | Adds automatic DNS configuration for Private Service Connect endpoints by creating a DNS entry when a managed service specifies a domain name and a consumer creates an endpoint to that service. |
| 2022-04-20 | Auto mode VPC subnet for Milan (europe-west8) |  | Introduces a new 10.198.0.0/20 subnet for auto mode VPC networks in the Milan (europe-west8) region. |
| 2022-01-24 | Private Service Connect consumer HTTP(S) controls for managed service access |  | Adds support for accessing managed services through Private Service Connect using consumer HTTP(S) controls. |
| 2021-12-15 | Predefined firewall rules for custom mode VPC networks |  | When creating a custom mode VPC network, users can now select predefined firewall rules to quickly apply common instance connectivity patterns. |
| 2021-12-13 | Private Service Connect access from on-premises via Cloud VPN |  | VPC-connected on-premises hosts using Cloud VPN can now access published services through a Private Service Connect endpoint in General Availability. |
| 2021-11-16 | Auto mode VPC subnet range expansion |  | Auto mode VPC networks now include a new /20 subnet, 10.194.0.0/20, in the Santiago (southamerica-west1) region. |
| 2021-11-12 | Legacy VPC to custom mode network conversion |  | Converting single-region legacy networks to custom mode VPC networks is now available in Preview. |
| 2021-11-12 | Private Service Connect automatic Service Directory registration |  | Private Service Connect now automatically registers managed-service endpoints in Service Directory so consumers can discover them without manual registration. |
| 2021-10-12 | Private Service Connect internal HTTP(S) load balancer backend publishing |  | Private Service Connect now supports publishing services backed by internal HTTP(S) load balancer backends, and this capability is generally available. |
| 2021-10-12 | Private Service Connect on-premises access via Cloud VPN |  | Added preview support for accessing published services through a Private Service Connect endpoint from on-premises hosts connected to a VPC network via Cloud VPN. |
| 2021-09-14 | Packet Mirroring protocol filtering |  | Introduced General Availability for Packet Mirroring with full control over which protocols are included in mirrored traffic. |
| 2021-08-23 | Private Service Connect consumer HTTP(S) service controls |  | Private Service Connect now supports using consumer HTTP(S) service controls to access supported regional service endpoints in Preview. |
| 2021-07-28 | Private Service Connect |  | Private Service Connect enables publishing services and accessing published services over private networking; Private Service Connect adds support for publishing services and accessing those published services over private connections. |
| 2021-07-20 | External IPv6 addresses for VM instances |  | Virtual machine instances can be assigned external IPv6 addresses in supported regions. |
| 2021-07-20 | Hierarchical firewall rules with IPv6 address ranges |  | Hierarchical firewall rules can now use IPv6 address ranges for matching and enforcement. |
| 2021-07-20 | IPv6 firewall rules |  | Firewall rules now support references to IPv6 address ranges. |
| 2021-07-20 | System-generated default IPv6 route |  | VPC now provides a system-generated default IPv6 route with a next-hop set to the default-internet-gateway. |
| 2021-06-30 | Private Service Access connection cleanup |  | Deleting a Private Service Access connection now also removes configurations created by the service producer, simplifying recreation after deletion. |
| 2021-06-29 | Auto mode subnet range expansion in asia-south2 |  | Added an auto mode VPC subnet range of 10.190.0.0/20 for the Delhi (asia-south2) region to update Auto mode IP ranges. |
| 2021-06-21 | Auto mode VPC subnet ranges |  | Added a new auto mode VPC network subnet range (10.192.0.0/20) in the Melbourne (australia-southeast2) region. |
| 2021-06-15 | Bring Your Own IP (BYOIP) |  | Introduced Bring Your Own IP (BYOIP) for Google Cloud VPC in General Availability. |
| 2021-05-07 | VPC network GRE support |  | VPC network GRE support adds General Availability for Generic Routing Encapsulation tunneling in Google Cloud Virtual Private Cloud. |
| 2021-03-24 | Shared VPC non-primary VM interface attachment for instance templates and managed instance groups |  | Allows VM instances created from instance templates or managed instance groups to attach network interfaces other than nic0 when connected to Shared VPC. |
| 2021-03-18 | Serverless VPC Access support for Shared VPC |  | Adds support for Serverless VPC Access workloads to connect to Shared VPC networks. |
| 2021-02-26 | Hierarchical firewall policies |  | Hierarchical firewall policies are now generally available for centralized firewall policy management in Virtual Private Cloud; Introduces hierarchical firewall policies in VPC, enabling firewall policy configuration in a hierarchical structure. |
| 2021-02-23 | Additional VM network interfaces in Shared VPC |  | VPC now supports connecting VM network interfaces other than nic0 in Shared VPC, with this capability generally available for individual VM instances while template- and instance-group-based workflows remain in preview. |
| 2021-01-11 | Cloud Interconnect 1500 MTU support |  | Cloud Interconnect now supports 1500-byte MTU, enabling larger packet payloads in General Availability. |
| 2020-12-16 | Private Service Access DNS peering |  | Introduces DNS peering support for Private Service Access, allowing private services to resolve DNS through VPC peering. |
| 2020-12-16 | Private Service Connect API and service access |  | Private Service Connect now supports accessing Google APIs and services in Preview. |
| 2020-12-15 | Shared VPC support for non-primary VM interfaces |  | Adds preview support for connecting VM interfaces other than nic0 to Shared VPC, currently for individual VM instances only. |
| 2020-12-07 | DNS Peering for Private Services Access |  | DNS peering is available for Private Services Access in Google Cloud Virtual Private Cloud in Preview. |
| 2020-12-07 | Packet Mirroring Direction Control |  | Packet Mirroring supports configuration of traffic direction for mirrored packets in Google Cloud Virtual Private Cloud. |
| 2020-10-15 | VPC network 1500 MTU support |  | VPC networks now support a maximum transmission unit (MTU) of 1500 bytes. |
| 2020-09-02 | VPC firewall rule logging metadata controls |  | Firewall Rule Logging in VPC now includes controls for logging metadata. |
| 2020-08-13 | GRE support for VPC networks |  | Virtual Private Cloud added support for GRE routing in VPC networks, available in Beta. |
| 2020-07-23 | Serverless VPC Access for Shared VPC |  | Serverless VPC Access support for Shared VPC was introduced in VPC, available in Beta. |
| 2020-06-12 | Firewall Rules Logging metadata controls |  | Firewall Rules Logging metadata controls in VPC introduce configurable control over metadata included in firewall logs. |
| 2020-06-08 | Auto mode VPC subnet for Jakarta |  | Auto mode VPC networks now include a new 10.184.0.0/20 subnet for the asia-southeast2 (Jakarta) region. |
| 2020-05-29 | Advanced controls for VPC Flow Logs |  | Makes advanced VPC Flow Logs controls available for users to configure logging behavior in more detail. |
| 2020-05-29 | GKE annotations for VPC Flow Logs |  | Adds support for GKE annotations to control VPC Flow Logs behavior. |
| 2020-05-18 | VPC subnet support for non-RFC 1918 IP ranges |  | VPC subnets now support IP address ranges that are not restricted to RFC 1918 private ranges. |
| 2020-04-24 | Private Google Access for on-premises hosts |  | Private Google Access for on-premises hosts now allows traffic from any internal IP address, including non-RFC 1918 addresses; Private Google Access for on-premises hosts was updated to allow traffic from any internal IP address range, rather than only RFC 1918 addresses. |
| 2020-04-20 | VPC Auto Mode Subnet Ranges |  | Google Cloud VPC auto mode networks now include a new subnet range (10.182.0.0/20) in the us-west4 (Las Vegas) region. |
| 2020-03-03 | Packet Mirroring |  | Packet Mirroring reached General Availability in Virtual Private Cloud; Packet Mirroring allows administrators to capture and replicate network traffic for inspection, analysis, and security monitoring. |
| 2020-02-24 | Auto mode VPC network IP range for us-west3 |  | Auto mode VPC networks added an automatic subnet allocation of 10.180.0.0/20 for the us-west3 (Salt Lake City) region. |
| 2019-12-11 | Serverless VPC Access |  | Serverless VPC Access is now generally available as a feature that enables serverless workloads to connect to Virtual Private Cloud networks; Serverless VPC Access enables serverless services to connect to Virtual Private Cloud networks. |
| 2019-11-22 | 2/4 vCPU virtual machine egress bandwidth limit of 10 Gbps |  | Virtual machines with 2 or 4 vCPUs gained a maximum egress throughput of 10 Gbps. |
| 2019-11-18 | Private Google Access private.googleapis.com virtual IP range for on-premises hosts |  | Private Google Access for on-premises hosts has made the private.googleapis.com virtual IP address range generally available. |
| 2019-11-13 | VPC Network Peering custom route import and export |  | VPC Network Peering now supports importing and exporting custom routes, and this capability is generally available. |
| 2019-09-20 | VPC Flow Logs log volume reduction |  | VPC Flow Logs now provides an option to reduce the volume of logs generated from network flow traffic; VPC Flow Logs introduces a beta option to reduce the volume of logs that are generated. |
| 2019-08-13 | Private Google Access for on-premises hosts: private.googleapis.com virtual IP range |  | Private Google Access for on-premises hosts adds a dedicated private.googleapis.com virtual IP address range in Beta. |
| 2019-06-19 | 32 Gbps VM egress network throughput |  | Increased virtual machine egress network I/O is now available at 32 Gbps for VMs using the Skylake CPU platform or ultramem machine types. |
| 2019-04-05 | 32 Gbps VM network egress for Skylake and ultramem instances |  | Virtual machine network I/O egress for Skylake CPU platform and ultramem machine types is increased to up to 32 Gbps in beta. |
| 2019-04-01 | VPC Network Peering custom route import/export |  | VPC Network Peering adds beta support for importing and exporting custom routes. |
| 2019-03-27 | Private Services Access |  | Private Services Access in Virtual Private Cloud reached general availability. |
| 2019-01-24 | Legacy network IPv4Range field | 2021-06-01 | The IPv4Range field used when creating legacy Google Cloud VPC networks is deprecated; deprecated on 2021-06-01. |
| 2019-01-09 | Firewall rules logging |  | Firewall rule logging is now generally available in Virtual Private Cloud; Firewall rules logging enables logging of packets that match VPC firewall rules. |
| 2018-12-20 | Private Services Access IP address allocation |  | Private Services Access now supports allocating IP address ranges so services can be privately connected within a VPC. |
| 2018-09-26 | Private Service Access |  | Private Service Access provides a private connection from a VPC network to a network owned by Google or a third party. |
| 2018-09-05 | Firewall rule disabling |  | Virtual Private Cloud supports disabling firewall rules, enabling administrators to temporarily deactivate rules without deleting them. |
| 2018-07-31 | Shared VPC host project usable subnet listing |  | Shared VPC service projects can now list usable subnets from the host project in General Availability. |
| 2018-06-28 | VPC Flow Logs |  | VPC Flow Logs were launched as a generally available feature; VPC Flow Logs became available, allowing traffic logs for virtual private cloud networks to be captured and reviewed. |
| 2018-05-09 | Folder support for Shared VPC |  | Folder support for Shared VPC became available in beta. |
| 2018-05-01 | Disable firewall rules |  | Virtual Private Cloud added support for disabling firewall rules, allowing rules to be turned off without deletion. |
| 2018-04-23 | Alias IP ranges management |  | Virtual Private Cloud introduced the ability to add and delete alias IP ranges, now available as a generally available feature. |
| 2017-09-05 | Alias IP Ranges |  | Alias IP Ranges enables assigning additional IP addresses to a VM instance for use by containers running on that VM; Alias IP Ranges allows additional IP addresses to be assigned to a VM instance for use by containers on that VM. |
| 2017-09-05 | Firewall rule egress and deny support |  | Firewall rules were expanded to support egress traffic controls, deny actions, and explicit rule evaluation ordering. |
| 2017-08-18 | Multiple Network Interfaces |  | Multiple Network Interfaces allows a VM instance to attach more than one virtual network interface, each connected to a different VPC network; Multiple Network Interfaces enables a VM instance to use more than one virtual network interface, with each interface attached to a different VPC network. |
| 2017-08-11 | Static internal IP addresses |  | Google Cloud Virtual Private Cloud added support for reserving and using static internal IP addresses. |
| 2017-07-14 | VPC Network Peering |  | VPC Network Peering enables direct communication between VPC networks, including across organizations, using internal IP addresses; VPC Network Peering enables connecting VPC networks, including across organizations, so their resources communicate via internal IP addresses. |
| 2017-06-07 | Shared VPC |  | Shared VPC provides cross-project network sharing, succeeding the earlier Cross-Project Networking (XPN) model, and is now generally available; Shared VPC enables one host project to share a VPC network with other Google Cloud projects. |
| 2017-05-04 | Private Google Access |  | Private Google Access allows Compute Engine VM instances to access Google APIs using internal IP addresses only; Private Google Access allows Compute Engine VM instances to access Google APIs using internal IP addresses only. |
| 2017-04-17 | VPC Firewall egress and deny rules |  | VPC firewall now supports egress firewall rules, explicit deny rules, and configurable rule-priority evaluation ordering. |
| 2016-12-21 | VPC forwarding rule ICMP support |  | Virtual Private Cloud forwarding rules now support the ICMP protocol. |
| 2016-05-11 | roles/compute.networkAdmin |  | The Compute Network Admin IAM role is now generally available for VPC. |
| 2016-05-11 | roles/compute.securityAdmin |  | The Compute Security Admin IAM role is now generally available for VPC. |
| 2016-05-11 | roles/iam.serviceAccountActor |  | The IAM Service Account Actor role is now generally available for VPC. |
| 2013-12-17 | Protocol Forwarding |  | Introduced protocol forwarding, which allows forwarding traffic to a single VM instance via forwarding rules and added support for AH, ESP, and SCTP protocols. |
| 2013-12-17 | Target Instances |  | Added support for Target Instance resources to forward non-NAT'ed traffic to a single virtual machine instance. |

Source file slug: `virtual-private-cloud.md`

