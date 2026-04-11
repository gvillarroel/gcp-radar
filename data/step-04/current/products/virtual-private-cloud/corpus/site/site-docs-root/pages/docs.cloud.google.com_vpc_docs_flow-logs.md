---
title: "VPC Flow Logs \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/flow-logs
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/flow-logs
  title: "VPC Flow Logs \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Virtual Private Cloud
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
VPC Flow Logs
VPC Flow Logs samples packets in your Virtual Private Cloud (VPC)
network to generate flow logs. Flow logs are aggregated by IP connection
(5-tuple). VPC Flow Logs samples the following packets:
Packets that are sent from and received by
virtual machine (VM) instances , including
instances used as Google Kubernetes Engine nodes
Packets that are sent from and received by Cloud Run resources
configured with Direct VPC egress
Packets that are sent through VLAN attachments for
Cloud Interconnect
and Cloud VPN tunnels
You can view flow logs in Cloud Logging , and you
can export logs to any destination that Cloud Logging export supports.
These logs can be used for network monitoring, forensics, security analysis,
and expense optimization.
For more information, see Supported configurations .
Use cases
The following are use cases for VPC Flow Logs.
Network monitoring
VPC Flow Logs provides you with visibility into network
throughput and performance. You can:
Monitor the VPC network
Perform network diagnosis
Filter the flow logs by VMs, serverless endpoints, VLAN attachments, and
Cloud VPN tunnels to understand traffic changes
Understand traffic growth for capacity forecasting
Understanding network usage and optimizing network traffic expenses
You can analyze network usage with VPC Flow Logs to
optimize network traffic expenses. For example, you can
analyze the network flows for the following:
Traffic between regions and zones
Traffic to specific countries on the internet
Traffic to on-premises and other cloud networks
Top talkers in the network, including VMs, serverless endpoints,
VLAN attachments, and Cloud VPN tunnels
Network forensics
You can use VPC Flow Logs for network forensics. For example,
if an incident occurs, you can examine the following:
Which IP addresses have communicated with each other and when
Which IPs are compromised by analyzing all the incoming and outgoing network flows
Supported configurations
You can enable VPC Flow Logs at the organization and project
levels. An organization-level VPC Flow Logs configuration enables
flow logs for all subnets, VLAN attachments, and Cloud VPN tunnels in
all VPC networks in the organization.
At the project level, you can enable VPC Flow Logs for specific
VPC networks, subnets, VLAN attachments, and Cloud VPN
tunnels.
Configuration scope
Generates flow logs for these resources
Steps to enable
Organization
All VM instances and Cloud Run resources in all subnets
in the organization
All VLAN attachments in the organization
All Cloud VPN tunnels in the organization
Enable VPC Flow Logs for an organization
VPC network
All VM instances and Cloud Run resources in all subnets
in the VPC network
All VLAN attachments in the VPC network
All Cloud VPN tunnels in the VPC network
Enable VPC Flow Logs for a VPC network
Subnet
All VM instances and Cloud Run resources in a specific
subnet
Enable VPC Flow Logs for a subnet:
Recommended: Enable VPC Flow Logs for a subnet (Network Management API)
Enable VPC Flow Logs for a subnet (Compute Engine API)
VLAN attachment
A specific VLAN attachment
Enable VPC Flow Logs for a VLAN attachment
Cloud VPN tunnel
A specific Cloud VPN tunnel
Enable VPC Flow Logs for a Cloud VPN tunnel
You can use filtering to customize these configuration scopes. For more
information, see Log sampling and processing .
Logs collection
Packets are sampled within an aggregation interval. All packets collected for
a given IP connection within the aggregation interval are aggregated into a
single flow log entry. This data is then sent to
Logging in the Google Cloud project of the
VPC network that reported the flow.
Logs are stored in Logging for 30 days by default. If
you want to keep logs longer than that, you can either set a custom
retention period or
export them to a supported
destination.
Log sampling and processing
To generate flow logs, VPC Flow Logs samples packets in your
VPC network, including packets that are sent from and received by
VMs and serverless endpoints and packets that pass through gateways such as
VLAN attachments or Cloud VPN tunnels. After the flow logs are
generated, VPC Flow Logs processes them by following the procedure
described in this section.
VPC Flow Logs samples packets using a primary sampling rate .
The primary sampling rate is dynamic and varies depending on the load of the
physical host running the reporting resource at the time of sampling. The
probability of sampling any single IP connection increases with the volume of
packets. You can't control the primary flow log sampling process or adjust the
primary sampling rate.
After the flow logs are generated, VPC Flow Logs processes them
according to the following procedure:
Filtering . You can specify that only logs that match specified criteria
are generated. For example, you can filter so that only logs
for a particular VM or only logs with a particular metadata value
are generated and the rest are discarded. For more information, see
Log filtering .
Aggregation . Information for sampled packets is aggregated over
a configurable aggregation interval to produce a flow log entry .
Secondary flow log sampling . This is a second sampling process. Flow log entries
are further sampled according to a configurable secondary sampling rate parameter.
The secondary sampling is performed on the flow logs generated by the
primary flow log sampling process. For example, if the secondary sampling
rate is set to 1.0, or 100%, VPC Flow Logs samples 100% of
the flow logs generated by the primary flow log sampling.
Metadata . If disabled, all metadata annotations are discarded. If you
want to keep metadata, you can retain all fields or a specific set of
fields. For more information, see Metadata
annotations .
Write to Logging . The final log entries are written to
Cloud Logging.
Note: You can't change how VPC Flow Logs collects samples.
However, you can control the secondary flow log sampling with the
Secondary sampling rate parameter, as described in
Enable VPC Flow Logs .
If you need to analyze all packets, you can use
Packet Mirroring and collector instances
running third-party software.
Because VPC Flow Logs doesn't capture every packet, it compensates
for missed packets by interpolating from the captured packets. This happens for
packets missed because of initial and user-configurable sampling settings.
Even though Google Cloud doesn't capture every packet, log record captures
can be quite large. You can balance your traffic visibility and storage cost
needs by adjusting the following aspects of logs collection:
Aggregation interval . Sampled packets for a time interval are aggregated
into a single log entry. This time interval can be 5 seconds
(default), 30 seconds, 1 minute, 5 minutes, 10 minutes, or 15 minutes.
Secondary sampling rate .
For configurations created with the Compute Engine API, 50% of log
entries are kept by default. You can set this
parameter from 1.0 (100%, all log entries are kept)
to 0.0 (0%, no logs are kept).
For configurations created with the Network Management API, 100% of
log entries are kept by default. You can set this
parameter from 1.0 to greater than 0.0 .
Metadata annotations . By default, flow log entries are annotated with
metadata information, such as the names of the source and
destination within Google Cloud or the geographic region of external
sources and destinations. Metadata annotations can be turned off, or you
can specify only certain annotations, to save storage space.
Filtering . By default, logs are generated for every sampled flow.
You can set filters to
generate logs that only match certain criteria.
Specifications
VPC Flow Logs introduces no delay
or performance penalty when enabled.
VPC Flow Logs works with VPC networks, not legacy
networks.
VPC Flow Logs samples TCP, UDP, ICMP, ESP, GRE,
and RDMA flows:
Both inbound and outbound flows are sampled. For RDMA over Converged
Ethernet (RoCE), only outbound flows are sampled.
Flows can be within Google Cloud or between Google Cloud and
other networks.
If a flow is captured by sampling,
VPC Flow Logs generates a log for the flow. Each flow record
includes the information described in the
Record format section.
VPC Flow Logs interacts with firewall rules in the following
ways:
Egress packets are sampled before egress firewall rules. Even if an
egress firewall rule denies outbound packets, those packets can be
sampled by VPC Flow Logs.
Ingress packets are sampled after ingress firewall rules. If an
ingress firewall rule denies inbound packets, those packets aren't
sampled by VPC Flow Logs.
You can use filters in
VPC Flow Logs to generate only certain logs.
VPC Flow Logs supports VMs that have multiple network interfaces.
In each VPC, you need to enable VPC Flow Logs
for each subnet that contains a network interface.
To log flows between Pods on the same Google Kubernetes Engine (GKE) node, you
must enable
intranode visibility
for the cluster.
VPC Flow Logs isn't supported for subnets with purpose
INTERNAL_HTTPS_LOAD_BALANCER because these subnets are used as proxy-only
subnets and have no VM instances or serverless endpoints.
VPC Flow Logs writes logs to the project of the reporting
VPC network. For resources in Shared VPC networks,
logs are reported in the host project.
Pricing and billing
Standard pricing for Logging,
BigQuery, or Pub/Sub apply.
VPC Flow Logs pricing is described in
Network Telemetry pricing .
VPC Flow Logs charges are billed to the Google Cloud project of the
resource that reports flow logs. If VPC Flow Logs is enabled for an
organization, each project is billed separately.
What's next
To learn more about the VPC Flow Logs record format and which
metadata annotations are available, see
About VPC Flow Logs records .
To see examples of VPC Flow Logs that are collected for various
use cases, see About traffic flows .
To start reporting flows for a subnet, see
Configure VPC Flow Logs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
