# Network Intelligence Center

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 82
Unique features: 60

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-05 | GKE network policy evaluation in Connectivity Tests |  | Connectivity Tests evaluates GKE network policies that apply to a Pod endpoint when FQDN network policies are not enabled. |
| 2026-03-05 | GKE Pod endpoints in Connectivity Tests |  | Connectivity Tests can use a GKE Pod as the source or destination endpoint for a test and evaluate IP masquerading and network policies for that Pod. |
| 2026-03-05 | IP masquerading evaluation in Connectivity Tests |  | Connectivity Tests detects whether IP masquerading is applied to traffic from a GKE Pod endpoint and uses the translated address for the test. |
| 2026-02-27 | Hybrid subnet routing evaluation in Connectivity Tests |  | Connectivity Tests evaluates hybrid subnet routing, including routing for unmatched resources in hybrid subnets. |
| 2026-02-25 | Automatic VPC network detection in Connectivity Tests |  | Connectivity Tests automatically detects the destination VPC network for in-Google-Cloud destination IP addresses. |
| 2026-02-25 | INTERNET network type in Network Management API |  | The Network Management API adds the INTERNET network type, which maps to the external IP address source option in the Google Cloud console. |
| 2026-02-25 | Source IP type selection in Connectivity Tests |  | Connectivity Tests lets you choose a specific source IP type when creating a test in the Google Cloud console. |
| 2026-02-25 | User IP address source selection in Connectivity Tests |  | Connectivity Tests lets you use your user IP address as the source IP address for a connectivity test in the Google Cloud console. |
| 2026-02-19 | Invalid route detection in Connectivity Tests |  | Connectivity Tests identifies peering dynamic routes and Network Connectivity Center dynamic routes that are invalid because they were dropped due to network- or hub-level quotas. |
| 2026-02-18 | Cloud Network Insights |  | Cloud Network Insights monitors network and web application performance across multicloud and hybrid networks and provides visualization tools to help identify and diagnose issues. |
| 2026-02-13 | Latency mode in Flow Analyzer |  | Flow Analyzer can display traffic flows in latency mode to analyze round-trip time. |
| 2026-01-29 | Managed Envoy proxy firewall policy analysis in Connectivity Tests |  | Connectivity Tests can analyze firewall policies that apply to managed Envoy proxies. |
| 2025-12-09 | Geolocation object firewall policy analysis in Connectivity Tests |  | Connectivity Tests can analyze configurations that use geolocation objects in firewall policy rules. |
| 2025-11-10 | Network Analyzer Cloud Logging insights |  | Network Analyzer adds Cloud Logging insight types for invalid next hops and shadowed dynamic routes. |
| 2025-11-10 | Network Analyzer recommender insights |  | Network Analyzer adds recommender insight subtypes for invalid next hops and shadowed dynamic routes. |
| 2025-07-07 | Secure tags for firewall rules on multi-NIC VMs |  | Connectivity Tests can analyze firewall configurations that use secure tags on VM instances with multiple network interfaces. |
| 2025-06-30 | Organization-level secure tags for firewall rules |  | Connectivity Tests can analyze firewall configurations that use organization-level secure tags. |
| 2025-05-19 | Direct VPC egress for Cloud Run connectivity tests |  | Connectivity Tests can analyze serverless endpoints that use Direct VPC egress in Cloud Run. |
| 2025-05-19 | IPv6 and Private NAT support for serverless configurations |  | Connectivity Tests supports IPv6 and Private NAT in serverless configurations. |
| 2025-05-19 | Public destination resolution for serverless connectivity tests |  | Connectivity Tests can fully resolve public destinations within Google Cloud for tests from Cloud Run, Cloud Run functions, and App Engine. |
| 2025-04-28 | Connectivity Tests |  | Connectivity Tests now analyzes configurations that use custom producer ports in Private Service Connect backends; Connectivity Tests now analyzes configurations that use NAT64 in Public NAT. |
| 2025-04-21 | GKE IP masquerade configuration insights |  | Network Analyzer includes an insight that flags when a GKE cluster's pod CIDR range is missing from the ip-masq-agent ConfigMap. |
| 2025-04-09 | Gemini Cloud Assist for Flow Analyzer |  | Gemini Cloud Assist for Flow Analyzer generates SQL queries for VPC Flow Logs with Gemini assistance. |
| 2025-02-27 | Flow Analyzer |  | Flow Analyzer is available in general availability; Flow Analyzer helps users understand VPC traffic flows without writing complex SQL queries on VPC Flow Logs. |
| 2024-08-26 | Network Analyzer |  | Network Analyzer adds an insight that flags routes whose next hop IP address is not assigned to a forwarding rule in the relevant networks; Network Analyzer provides network analysis and troubleshooting capabilities in Network Intelligence Center. |
| 2024-07-08 | Network Topology |  | Network Topology provides a GKE Enterprise view with infrastructure, metrics, and topology data for GKE deployments; Network Topology provides dedicated views and insights for VMs and instance groups that generate higher egress, with filters for traffic type. |
| 2024-03-04 | Private Service Access IP address utilization summary insight |  | Network Analyzer provides an insight that summarizes IP address utilization across all Private Service Access ranges. |
| 2023-08-15 | Firewall Insights obsolete allow rules insight |  | Firewall Insights identifies allow rules that are unlikely to be active based on usage patterns and adaptive analysis. |
| 2023-08-11 | Network Topology GKE deployment infrastructure view |  | Network Topology shows GKE deployment infrastructure, including clusters, namespaces, workloads, pods, and their associated metrics. |
| 2023-07-18 | Connectivity Tests load balancer connectivity test |  | Connectivity Tests can verify connectivity from a VM or IP address to a load balancer. |
| 2023-07-18 | Connectivity Tests Private Service Connect endpoint connectivity test |  | Connectivity Tests can verify connectivity from a VM to a Private Service Connect endpoint. |
| 2023-05-18 | Network Analyzer data-processing opt-out |  | Network Analyzer integrates with Transparency and Control Center to let Google Cloud users opt out of analysis. |
| 2023-03-09 | Network Topology cross-project metrics |  | Network Topology includes cross-project metrics for traffic sent across Shared VPC or VPC Network Peering boundaries within the same organization. |
| 2023-03-08 | Firewall Insights inactive allow rules insight |  | Firewall Insights identifies allow rules that are no longer active based on usage patterns and trends. |
| 2023-03-08 | Firewall Insights shadowed rule insights |  | Firewall Insights shows shadowed rule insights for hierarchical firewall policies and global network firewall policies. |
| 2023-03-08 | Network Topology higher-egress views |  | Network Topology provides dedicated views and insights for VMs and instance groups that generate higher egress. |
| 2023-02-17 | Connectivity Tests dual-stack instance support |  | Connectivity Tests supports instances with both IPv4 and IPv6 addresses, including instances with multiple network interfaces. |
| 2023-01-26 | Connectivity Tests for App Engine standard environment versions |  | Connectivity Tests can verify connectivity from an App Engine standard environment version to a VM instance, an IP address, or a Google-managed service. |
| 2023-01-26 | Connectivity Tests for Cloud Run revisions |  | Connectivity Tests can verify connectivity from a Cloud Run revision to a VM instance, an IP address, or a Google-managed service. |
| 2022-12-08 | Performance Dashboard latency metrics between VMs and Internet endpoints |  | Performance Dashboard shows latency metrics between VMs and Internet endpoints in project and Google Cloud performance views. |
| 2022-10-21 | Connectivity Tests to Private Service Connect endpoints |  | Connectivity Tests can verify connectivity from a VM or an IP address to a Private Service Connect endpoint. |
| 2022-10-03 | Network Topology higher-egress views and insights |  | Network Topology provides dedicated views and insights for VMs and instance groups that generate higher egress and supports traffic-type filtering. |
| 2022-09-29 | Connectivity Tests from Cloud Functions (1st gen) |  | Connectivity Tests can verify connectivity from a Cloud Function (1st gen) to a VM or public IP address. |
| 2022-08-08 | Connectivity Tests live data plane analysis |  | Connectivity Tests can perform live data plane analysis between a VM and a Google network edge location for supported traffic flows. |
| 2022-08-05 | Firewall Insights custom refresh cycle for shadowed rule insights |  | Firewall Insights can schedule a custom cycle to refresh shadowed rule insights. |
| 2022-08-05 | Firewall Insights IPv6 misconfiguration detection |  | Firewall Insights can identify firewall misconfigurations for firewall rules that contain IPv6 IP address ranges. |
| 2022-04-28 | Network Topology connectivity to router appliances |  | Network Topology can audit networking configuration and troubleshoot issues related to router appliance instances. |
| 2021-10-28 | Connectivity Tests private IP support |  | Connectivity Tests can test paths to private IP addresses outside the RFC 1918 address space. |
| 2021-09-20 | Network Topology Cloud VPN and Cloud Interconnect connectivity |  | Network Topology can audit connectivity related to Cloud VPN and Cloud Interconnect links. |
| 2021-09-09 | Firewall Insights overly permissive rule insights |  | Firewall Insights can identify overly permissive firewall rules and highlight attributes that could be tightened. |
| 2021-07-23 | Connectivity Tests Google-managed services reachability |  | Connectivity Tests can verify reachability to and from Google-managed services; Connectivity Tests can verify connectivity to and from Google-managed services such as GKE cluster masters and Cloud SQL instances. |
| 2021-07-02 | Network Topology Google-managed services connectivity |  | Network Topology can audit connectivity related to Google-managed services. |
| 2021-04-06 | Connectivity Tests hierarchical firewall policy analysis |  | Connectivity Tests can evaluate hierarchical firewall policy rules as part of configuration analysis. |
| 2021-03-11 | Connectivity Tests probing |  | Connectivity Tests can verify VM-to-VM connectivity by sending probes. |
| 2021-01-15 | Network Topology child-node focus filter |  | Network Topology can filter the graph to show only child-node connections while still allowing lower-level paths to be inspected. |
| 2020-11-20 | Firewall Insights |  | Firewall Insights is a network firewall analysis feature in Network Intelligence Center; Firewall Insights analyzes firewall rules and traffic to surface network security insights. |
| 2020-08-31 | Network Topology BigQuery flow details |  | Network Topology can show connection-related subnet details and VPC Flow Logs status in the View flows in BigQuery pane. |
| 2020-07-30 | Infrastructure segments | 2020-07-30 | Infrastructure segments were a Network Topology capability for representing infrastructure segments in the topology view; deprecated on 2020-07-30. |
| 2020-04-16 | Performance Dashboard |  | Performance Dashboard provides network performance monitoring in Network Intelligence Center; Performance Dashboard provides network performance monitoring in Network Intelligence Center. |
| 2020-03-20 | Network Management API |  | The Network Management API provides programmatic access to Connectivity Tests; The Network Management API provides programmatic access to Connectivity Tests. |

Source file slug: `network-intelligence-center.md`

