---
title: "Network Intelligence Center release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/release-notes
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/release-notes
  title: "Network Intelligence Center release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Intelligence Center
Resources
Send feedback
Network Intelligence Center release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page contains release notes for features and updates to Network Intelligence Center and
its components.
If you use Cloud Network Insights and want to see updates made to AppNeta by Broadcom, see the
AppNeta for Google Cloud Network Insights release notes .
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
March 05, 2026
Feature
The following features are available in
Connectivity Tests :
Google Kubernetes Engine (GKE) Pod as an endpoint : you can specify a GKE
Pod as the source or destination endpoint for a connectivity test.
IP masquerading evaluation : Connectivity Tests evaluates whether IP
masquerading is applied to traffic sent from a GKE Pod endpoint.
If IP masquerading is applied, the translated address is used for
the test.
Network policy evaluation : for GKE clusters where
FQDN network policies
aren't enabled, Connectivity Tests evaluates GKE network policies that apply
to a GKE Pod endpoint.
For more information, see
Considerations for Google Kubernetes Engine .
February 27, 2026
Feature
Connectivity Tests
evaluates hybrid subnet routing , including
routing for
unmatched resources in hybrid subnets .
February 25, 2026
Feature
The following features are available in
Connectivity Tests :
Source IP type selection : you can select a specific source IP address
type when creating a connectivity test in the Google Cloud console.
Options include: an internal IP address in a VPC network; an internal IP
address outside of Google Cloud; an external IP
address; or automatic source detection that evaluates all possible paths.
New network type : the Network Management API includes the
INTERNET
network type, which maps to the External IP address source IP type
in the Google Cloud console.
Your own IP address as the source : you can select your
user IP address as the source IP address for a connectivity test in the
Google Cloud console.
Automatic VPC network detection : for destination IP addresses within
Google Cloud, Connectivity Tests automatically detects the destination
VPC network. You no longer need to select it manually.
February 19, 2026
Feature
Connectivity Tests
identifies the following routes as invalid: peering dynamic routes and
Network Connectivity
Center dynamic routes that are dropped due to
network- or
hub-level quotas.
February 18, 2026
Feature
Cloud Network Insights
is available in Preview .
Cloud Network Insights monitors your network and web application performance across
multicloud and hybrid networks and provides visualization
tools to help identify and diagnose network issues.
Contact your Technical Account Manager to request access.
February 13, 2026
Feature
Flow Analyzer
supports latency mode, allowing you to analyze round-trip time in your
traffic flows.
For more information, see
Display flows in latency mode .
January 29, 2026
Feature
Connectivity Tests
analyzes
firewall policies
that apply to managed Envoy proxies.
December 09, 2025
Feature
Connectivity Tests
analyzes configurations that use
geolocation objects
in firewall policy rules.
November 10, 2025
Feature
The following insight types and subtypes are available in Network Analyzer:
Recommender insight subtypes:
ROUTE_NEXT_HOP_FORWARDING_RULE_IP_MISMATCH
ROUTE_NEXT_HOP_FORWARDING_RULE_TYPE_INVALID
ROUTE_NEXT_HOP_ILB_VIP_NOT_ASSIGNED
ROUTE_NEXT_HOP_IP_NOT_ASSIGNED
ROUTE_NEXT_HOP_VM_NON_PRIMARY_IP
ROUTE_NEXT_HOP_VM_WRONG_NETWORK
ROUTE_NEXT_HOP_VPN_TUNNEL_NOT_ESTABLISHED
NCC_DYNAMIC_ROUTE_FULLY_SHADOWED
Cloud Logging insight types:
ROUTE_INVALID_NEXT_HOP_FORWARDING_RULE_IP_MISMATCH
ROUTE_INVALID_NEXT_HOP_FORWARDING_RULE_TYPE_INVALID
ROUTE_INVALID_NEXT_HOP_ILB_VIP_NOT_ASSIGNED
ROUTE_INVALID_NEXT_HOP_IP_NOT_ASSIGNED
ROUTE_INVALID_NEXT_HOP_VM_NON_PRIMARY_IP
ROUTE_INVALID_NEXT_HOP_VM_WRONG_NETWORK
ROUTE_INVALID_NEXT_HOP_VPN_TUNNEL_NOT_ESTABLISHED
DYNAMIC_ROUTE_SHADOWED_FULLY_SHADOWED_BY_NCC_SUBNET_ROUTE
NCC_DYNAMIC_ROUTE_SHADOWED_FULLY_SHADOWED_BY_PEERING_SUBNET_ROUTE
NCC_DYNAMIC_ROUTE_SHADOWED_FULLY_SHADOWED_BY_STATIC_ROUTE
NCC_DYNAMIC_ROUTE_SHADOWED_FULLY_SHADOWED_BY_SUBNET_ROUTE
For more information, see
Routes with an invalid next hop
and Shadowed dynamic routes .
Change
Network Analyzer no longer generates the following insight types and subtypes:
Recommender insight subtypes:
ROUTE_NEXT_HOP_ILB_BACKEND_IP_FORWARDING_DISABLED
DYNAMIC_ROUTE_PARTIALLY_SHADOWED
PEERING_DYNAMIC_ROUTE_PARTIALLY_SHADOWED
Cloud Logging insight types:
ROUTE_INVALID_NEXT_HOP_ILB_BACKEND_IP_FORWARDING_DISABLED
DYNAMIC_ROUTE_SHADOWED_PARTIALLY_SHADOWED_BY_SUBNET_ROUTE
DYNAMIC_ROUTE_SHADOWED_PARTIALLY_SHADOWED_BY_PEERING_SUBNET_ROUTE
DYNAMIC_ROUTE_SHADOWED_PARTIALLY_SHADOWED_BY_STATIC_ROUTE
DYNAMIC_ROUTE_SHADOWED_PARTIALLY_SHADOWED_BY_PEERING_STATIC_ROUTE
September 30, 2025
Change
Network Analyzer
no longer generates the following insight types and subtypes:
Recommender insight type and subtypes:
google.networkanalyzer.managedservices.cloudSqlInsight , including BLOCKED_BY_EGRESS_FIREWALL , BLOCKED_BY_ROUTING_ISSUE , and INSTANCE_NOT_RUNNING
CONTROL_PLANE_TO_NODE_BLOCKED_BY_INGRESS_FIREWALL
CONTROL_PLANE_TO_NODE_BLOCKED_BY_ROUTING_ISSUE
EXTERNAL_IP_UNASSIGNED
MISSING_ROUTES_TO_GOOGLE_APIS_AND_SERVICES
PRIVATE_GOOGLE_ACCESS_DISABLED
Cloud Logging insight types:
CLOUD_SQL_PRIVATE_IP_BLOCKED_BY_EGRESS_FIREWALL
CLOUD_SQL_PRIVATE_IP_BLOCKED_BY_ROUTING_ISSUE
CLOUD_SQL_PRIVATE_IP_INSTANCE_NOT_RUNNING
GKE_CONTROL_PLANE_TO_NODE_BLOCKED_BY_INGRESS_FIREWALL_ON_NODE
GKE_CONTROL_PLANE_TO_NODE_BLOCKED_BY_ROUTING_ISSUE
July 07, 2025
Feature
Connectivity Tests analyzes configurations with secure tags for firewalls that are applied to VM instances with multiple network interfaces.
June 30, 2025
Feature
Connectivity Tests analyzes configurations with organization-level secure tags for firewalls .
May 19, 2025
Feature
Connectivity Tests analyzes the following features for serverless endpoints :
Cloud Run configured with Direct VPC egress
Full resolution of public destinations within Google Cloud for tests from Cloud Run, Cloud Run functions, and App Engine
IPv6 and Private NAT in serverless configurations
April 28, 2025
Feature
Connectivity Tests analyzes configurations with custom producer ports in Private Service Connect backends .
April 21, 2025
Feature
Connectivity Tests analyzes configurations with NAT64 in Public NAT .
Feature
Network Analyzer includes an insight that indicates if a GKE cluster's pod CIDR range isn't included in the ip-masq-agent ConfigMap. For more information, see GKE IP masquerade configuration insights .
April 14, 2025
Feature
Connectivity Tests analyzes configurations that include Application and proxy Network Load Balancers with IPv6 backends.
April 09, 2025
Feature
Gemini Cloud Assist for Flow Analyzer is in Preview . You can generate SQL queries for VPC Flow Logs with Gemini assistance.
April 07, 2025
Feature
Connectivity Tests analyzes configurations with Private Service Connect port mapping .
February 27, 2025
Feature
Flow Analyzer is available in General availability .
February 24, 2025
Feature
Connectivity Tests analyzes configurations that include firewall policy rules with network types .
January 20, 2025
Feature
Connectivity Tests supports round-trip connectivity tests. Test results include return traces with connection tracking.
December 16, 2024
Feature
Connectivity Tests analyzes configurations that include dynamic routes in VPC networks with the standard best path selection mode .
November 25, 2024
Feature
Connectivity Tests analyzes configurations that include IPv6 policy-based routes and policy-based routes with a next hop internal passthrough Network Load Balancer in a peered VPC network. For more information, see Policy-based routes .
October 28, 2024
Feature
Connectivity Tests supports Redis instances and Redis Cluster instances as destination endpoints.
September 23, 2024
Change
Network Analyzer now includes additional information in the IP address utilization summary insights. In the case of Shared VPC, Network Analyzer gives a summary of the IP address utilization of all relevant subnet ranges of the host project, and also provides the insights of the service projects. For more information, see IP address utilization summary insights .
September 16, 2024
Feature
Connectivity Tests analyzes configurations with Network Connectivity Center producer VPC spokes .
September 09, 2024
Feature
Connectivity Tests analyzes configurations with Network Connectivity Center hybrid spokes .
August 26, 2024
Feature
Network Analyzer now includes an insight indicating that the next hop IP address is not assigned to any forwarding rule in the relevant networks. This insight is already available in the Recommender API. For more information, see routes with an invalid next hop insight .
August 19, 2024
Feature
Connectivity Tests analyzes configurations with Hybrid NAT .
August 12, 2024
Feature
Connectivity Tests analyzes configurations with Private Service Connect interfaces .
July 08, 2024
Feature
The GKE Enterprise view of Network Topology is generally available. Network Topology now shows the infrastructure of your GKE deployments - clusters, namespaces, workloads, and pods, and their associated metrics.
July 01, 2024
Feature
Connectivity Tests analyzes Application Load Balancer and proxy Network Load Balancer configurations where the load balancer and load balancer backends use different VPC networks .
June 10, 2024
Feature
Connectivity Tests analyzes configurations with Private Service Connect connection propagation through Network Connectivity Center.
June 03, 2024
Feature
Connectivity Tests analyzes configurations that include IPv6 static routes with a next hop instance identified by address or instance name.
May 27, 2024
Feature
Connectivity Tests analyzes configurations with IPv6 Private Service Connect endpoints, including IPv6 to IPv4 connections. For more information, see IP version translation .
April 09, 2024
Feature
Flow Analyzer is now available in Preview .
Flow Analyzer lets you quickly and efficiently understand your VPC traffic flows without the need to write complex SQL queries for analyzing VPC Flow Logs.
March 30, 2024
Feature
General Availability : Network Topology provides dedicated views and insights of VMs and instance groups that generate higher egress is now . You can further filter the traffic based on the following traffic types: all egress, cross-zonal egress, egress to internet, and hybrid egress. For more information, see Network Topology overview .
March 04, 2024
Feature
Network Analyzer now includes an insight that gives a summary of the IP address utilization of all the Private Service Access ranges. This insight is also available in Recommender API. For more information, see PSA IP address utilization summary .
November 08, 2023
Change
Connectivity Tests now supports verifying connectivity between two VPC networks connected by using Network Connectivity Center .
For more information, see Create and run Connectivity Tests .
October 30, 2023
Change
Network Analyzer now includes an insight that gives a summary of the Google Kubernetes Engine (GKE) node service account. This insight is already available in the Recommender API. For more information, see GKE node service account insights .
October 04, 2023
Change
Network Analyzer now includes an insight that gives a summary of the IP address utilization of all the subnet ranges. This insight is already available in Recommender API and Cloud Logging. For more information, see IP address utilization summary insights .
August 15, 2023
Feature
You can now view allow rules that are less likely to be active based on usage
patterns and adaptive analysis. For more information, see Allow rules that are obsolete based on adaptive analysis .
August 11, 2023
Feature
Network Topology now shows the infrastructure of your GKE deployments - clusters, namespaces, workloads, and pods, and their associated metrics.
July 18, 2023
Feature
Connectivity Tests now includes a feature that verifies connectivity from a VM or an IP address to a load balancer. For more information, see Create and run Connectivity Tests .
Feature
Connectivity Tests now includes a feature that verifies connectivity from a VM to a Private Service Connect endpoint. For more information, see Create and run Connectivity Tests .
May 18, 2023
Feature
Network Analyzer is now integrated with the Transparency and Control Center . Google Cloud users can now use this feature to opt out of analysis. For more information, see Opting out of data processing .
April 13, 2023
Feature
Network Analyzer now includes an insight that gives a summary of the IP address utilization of all the subnet ranges in the analyzed project. For more information, see IP address utilization summary insights .
March 27, 2023
Change
Network Topology now supports TCP and UDP traffic for certain traffic paths. For more information, see Network Topology overview .
March 09, 2023
Feature
Network Topology now includes cross-project metrics for network traffic sent across Shared VPC or VPC Network Peering boundaries within the same organization. For more information, see Network Topology overview .
March 08, 2023
Feature
You can now see shadowed rule insights for hierarchical firewall policies and global network firewall policies in Firewall Insights. For more information, see Firewall Insights categories and states .
Feature
Network Topology now provides dedicated views and insights of VMs and instance groups that generate higher egress. For more information, see Network Topology overview .
Feature
You can now see allow rules that are no longer active based on usage patterns and trends. For more information, see Allow rules with no hits based on trend analysis .
February 17, 2023
Feature
Connectivity Tests now include dual-stack instances with both IPv4 and IPv6 addresses, including instances with multiple network interfaces. For more information, see Create and run Connectivity Tests .
January 26, 2023
Feature
Connectivity Tests now includes a feature that verifies connectivity from a Cloud Run revision to a VM instance, an IP address, or a Google-managed service. For more information, see Create and run Connectivity Tests .
Feature
Connectivity Tests now includes a feature that verifies connectivity from an App Engine standard environment version to a VM instance, an IP address, or a Google-managed service. For more information, see Create and run Connectivity Tests .
January 10, 2023
Change
You can now configure fine-grained permissions by using Identity and Access Management (IAM) to perform tasks in Network Topology. For more information, see Roles and permissions .
December 08, 2022
Feature
Performance Dashboard now shows latency metrics between VMs and Internet endpoints:
In the Project performance view, Performance Dashboard shows latency between VMs across all Google Cloud regions and Internet endpoints.
In the Google Cloud performance view, Performance Dashboard shows latency metrics for regions where you have VM instances and the Internet locations communicating with the VMs.
October 21, 2022
Feature
Connectivity Tests now includes a feature that verifies connectivity from a VM or an IP address to a Private Service Connect
endpoint. For more information, see Create and run Connectivity Tests .
October 07, 2022
Feature
Network Analyzer is now Generally Available.
October 03, 2022
Feature
Preview: Network Topology provides dedicated views and insights of VMs and instance groups that generate higher egress. You can further filter the traffic based on the following traffic types: all egress, cross-zonal egress, egress to internet, and hybrid egress. For more information, see Network Topology overview .
September 29, 2022
Feature
Connectivity Tests now includes a feature that verifies connectivity from a Cloud Function (1st gen) to a VM or public IP address. For more information, see Create and run Connectivity Tests .
August 08, 2022
Feature
Connectivity Tests now includes a feature that performs live data plane analysis by testing connectivity between a VM and a Google network edge location. This feature is available for the following traffic flows:
Between VM and non-Google Cloud network
Between VM and Cloud SQL instances
In the Google Cloud console, you can see the results of this analysis in the column labeled Last live data plane analysis result . In the gcloud command-line and API responses, you can see the results in the probingDetails object.
August 05, 2022
Feature
You can now schedule a custom cycle to refresh shadowed rule insights in Firewall Insights. For more information, see Schedule a custom refresh cycle .
Feature
Firewall Insights now identifies firewall misconfigurations for firewall rules which contain IPv6 IP address ranges. For more information, see Firewall Insights overview .
May 11, 2022
Feature
Network Analyzer is now available in Preview .
April 28, 2022
Feature
Connectivity to router appliances is now generally available in Network Topology . Google Cloud users can use Network Topology to audit their networking configuration and troubleshoot issues related to the router appliance instances.
April 19, 2022
Change
You can set the observation period for overly permissive rule insights for a period of up to 12 months. For more information, see Configuring observation periods .
January 20, 2022
Announcement
Overly permissive rule insights are now generally available. For information about these insights, see the Firewall Insights overview .
December 06, 2021
Change
It is now possible to export Firewall Insights data in CSV format. For details, see Exporting insights .
October 28, 2021
Feature
Connectivity Tests now supports private IP addresses outside of the RFC 1918 address space. For more information, see Connectivity Tests overview .
September 20, 2021
Feature
Connectivity to Cloud VPN and Cloud Interconnect is now generally available in Network Topology . Google Cloud users can use Network Topology to audit their networking configuration and troubleshoot issues related to the hybrid connectivity to and from their on-premises networks.
September 09, 2021
Feature
Firewall Insights now provides comprehensive analysis of whether your firewall rules are overly permissive. Through overly permissive rule insights, which are now in public preview, Firewall Insights identifies rules and attributes that could be made more strict and secure.
Overly permissive rule insights include the following:
Allow rules with no hits
Allow rules with unused attributes
Allow rules with overly permissive IP address or port ranges
Firewall Insights uses Firewall Rules Logging to identify these rules. It uses machine learning to predict future usage of overly permissive rules.
By default, the product analyzes the past six weeks when it identifies overly permissive rules. However, you can choose a different observation period.
For more information about overly permissive rule insights, see the Firewall Insights overview . For details about how to enable overly permissive rules, see Using Firewall Insights .
July 23, 2021
Feature
Connectivity Tests now includes a feature that verifies connectivity to and from Google-managed services, such as Google Kubernetes Engine (GKE) control planes or Cloud SQL instances. The Connectivity Tests configuration analysis can now run a test and provide an overall reachability result for Google-managed services. For more information, see Connectivity Tests overview .
July 16, 2021
Change
In the Google Cloud console, the trace panel for each Connectivity Test now includes links to VMs, firewall rules, and other resources that were analyzed as part of the test. Additionally, when you view the Result details panel, it now shows the source and destination IP address, the port that was used, and other information about the test. To see screenshots of the enhanced UI, visit Common Use Cases .
July 02, 2021
Feature
Connectivity to Google-managed services is now generally available in Network Topology . Google Cloud users can use Network Topology to audit their networking configuration and troubleshoot networking issues related to the different Google services in use.
June 17, 2021
Change
The Connectivity Tests dynamic verification feature is now generally available. This feature uses active probing to verify connectivity between VMs. For more information, see
How Connectivity Tests analyzes the live data plane .
June 14, 2021
Change
Google Cloud performance view is generally available in Performance Dashboard .
April 19, 2021
Feature
Network Topology is Generally Available.
April 06, 2021
Feature
Connectivity Tests now evaluates hierarchical firewall policy rules as part of its configuration analysis. For more information, see Connectivity Tests overview .
March 11, 2021
Feature
Connectivity Tests now includes a feature that verifies connectivity by sending probes. This feature, which is in Preview, is available for VM-to-VM tests. In the Google Cloud console, you can see the results of this analysis in the column labeled Last packet transmission result . In the gcloud command-line and API responses, you can see the results in the probingDetails object. This feature complements the existing configuration analysis feature, which evaluates reachability by assessing your network's configuration.
January 15, 2021
Feature
The Network Topology graph now includes a checkbox, Show connections for child nodes only on focus , to display only the traffic paths between top-level entities, such as regions. When this checkbox is selected, you can still view the traffic paths between lower-level entities by selecting or holding the pointer over the lower-level entities.
November 20, 2020
Feature
Firewall Insights is available in General Availability .
September 21, 2020
Feature
Running Connectivity Tests to and from Google-managed services is available in Alpha . This release includes support for Google Kubernetes Engine (GKE) cluster masters and Cloud SQL instances.
August 31, 2020
Feature
In the details pane for a connection, under View flows in BigQuery , Network Topology now provides a table that lists the subnets relevant to the currently selected connection and whether those subnets have VPC Flow Logs enabled. For more information, see Using generated queries to retrieve detailed logs .
July 30, 2020
Deprecated
Network Topology no longer supports infrastructure segments . This feature is deprecated and will be completely removed after 90 days. If you have any questions, see
Getting support .
July 23, 2020
Feature
Network Topology includes two new metrics for connections between entities: packet loss and latency. Additionally, you can now use a drop-down menu to select which metric Network Topology overlays on traffic paths. For more information, see Viewing metrics for traffic between entities and Network Topology metrics reference .
July 01, 2020
Feature
Connectivity Tests now supports running tests from the Network interface details screen of a Compute Engine VM instance in the Google Cloud Console.
April 16, 2020
Feature
Performance Dashboard is now available in General Availability .
April 14, 2020
Feature
Firewall Insights is now in Beta.
March 29, 2020
Feature
Performance Dashboard is now available in Beta .
March 20, 2020
Feature
Connectivity Tests and the Network Management API are now Generally Available.
February 04, 2020
Change
gcloud commands are now available in beta for Connectivity Tests.
January 29, 2020
Feature
The Network Management API for Connectivity Tests is in Beta.
November 13, 2019
Feature
Network Topology is in Beta.
Feature
Connectivity Tests is in Beta.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
