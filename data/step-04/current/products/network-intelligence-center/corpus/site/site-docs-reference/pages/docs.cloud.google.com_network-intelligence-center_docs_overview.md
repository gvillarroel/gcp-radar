---
title: "Network Intelligence Center overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/reference/enable-api
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/overview
  title: "Network Intelligence Center overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Intelligence Center
Guides
Send feedback
Network Intelligence Center overview
Stay organized with collections
Save and categorize content based on your preferences.
Network Intelligence Center provides a single console for managing Google Cloud
network visibility, monitoring, and troubleshooting. It enables you to monitor
your networks in the following ways:
View the topology of your network infrastructure and deployments.
Check connectivity between network endpoints.
View the performance of your entire Google Cloud network and the
performance of your project's resources.
Get insights, recommendations, and metrics about your firewall rules.
Automatically monitor your Virtual Private Cloud (VPC)
network configurations and detect misconfigurations and suboptimal
configurations.
Network Topology
Network Topology is a visualization tool that shows the topology of your
network infrastructure:
Infrastructure view: Shows Virtual Private Cloud (VPC) networks, hybrid
connectivity to and from your on-premises networks, connectivity to
Google-managed services, and the associated metrics.
GKE Enterprise view (for GKE Enterprise
enabled projects): Shows the infrastructure of your
Google Kubernetes Engine (GKE) deployments: clusters, namespaces, workloads,
pods, and their associated metrics.
You can also view metrics and details of network traffic to other Shared VPC
networks and inter-region traffic. Network Topology combines
configuration information with real-time operational data in a single view. This
view makes it easier to understand networking relationships between various
workloads on Google Cloud and their current state, such as the traffic paths and
throughput between virtual machine (VM) instances.
For more information, see the Network Topology overview .
Connectivity Tests
Connectivity Tests is a diagnostics tool that lets you check connectivity
between network endpoints. It analyzes your configuration and, in
some cases, performs live data plane analysis between the endpoints. An endpoint
is a source or destination of network traffic, such as a VM,
Google Kubernetes Engine (GKE) cluster, load balancer forwarding rule, or an IP
address on the internet.
To analyze network configurations, Connectivity Tests simulates the
expected forwarding path of a packet through your Virtual Private Cloud (VPC) network,
Cloud VPN tunnels, or VLAN attachments. Connectivity Tests can also
simulate the expected inbound forwarding path to resources in your VPC
network.
For some connectivity scenarios, Connectivity Tests also performs
live data plane analysis. This feature sends packets over the data plane to
validate connectivity and provides baseline diagnostics of latency and packet
loss. If the route is supported for the feature, each test that you run
includes a live data plane analysis result.
For more information, see the Connectivity Tests overview .
Performance Dashboard
Performance Dashboard gives you visibility into the performance of the entire
Google Cloud network, as well as to the performance of your project's
resources.
With these performance-monitoring capabilities, you can distinguish between a
problem in your application and a problem in the underlying Google Cloud
network. You can also investigate historical network performance problems.
For more information, see the Performance Dashboard overview .
Firewall Insights
Firewall Insights helps you understand and optimize your firewall rules.
It provides insights, recommendations, and metrics about how your
firewall rules are being used. Firewall Insights also uses machine
learning to predict future firewall rules usage.
Firewall Insights lets you make better decisions during firewall
rule optimization. For example, Firewall Insights identifies
rules that it classifies as overly permissive. You can use this information to
make your firewall configuration stricter.
For more information, see the Firewall Insights overview .
Network Analyzer
Network Analyzer automatically monitors your Virtual Private Cloud (VPC)
network configurations and detects misconfigurations and suboptimal
configurations. It provides insights about
network topology, firewall rules, routes, configuration dependencies, and
connectivity to services and applications. It identifies network failures,
provides root cause information, and suggests possible resolutions.
Network Analyzer runs continuously and triggers relevant analyses based on
near real-time configuration updates in your network. If a network failure is
detected, it tries to correlate the failure with recent configuration changes to
identify root causes. Wherever possible, it provides recommendations to suggest
details about how to fix the issues.
For more information, see the Network Analyzer overview .
Flow Analyzer
Flow Analyzer lets you quickly and efficiently understand your
Virtual Private Cloud (VPC) traffic flows without the need to write complex
SQL queries for analyzing VPC Flow Logs.
Flow Analyzer lets you perform
opinionated network traffic analysis with 5-tuple granularity
(source IP, destination IP, source port, destination port, and protocol).
Developed using
Observability Analytics
and powered by BigQuery ,
Flow Analyzer enables in-depth analysis of inbound and outbound
traffic of your VM instances. It lets you monitor, troubleshoot, and optimize
your networking deployment for better performance and enhanced security which
helps ensure compliance, and save on costs.
Flow Analyzer analyzes VPC Flow Logs data stored in a log
bucket ( record format ). To use
Flow Analyzer, you must select a project with a
log bucket that contains VPC Flow Logs. For more information, see the
VPC Flow Logs overview . VPC Flow Logs can
be used for network monitoring, forensics, real-time security analysis, and
expense optimization.
For more information, see the Flow Analyzer overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
