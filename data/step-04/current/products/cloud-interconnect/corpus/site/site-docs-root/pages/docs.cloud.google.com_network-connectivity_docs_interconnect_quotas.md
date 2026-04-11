---
title: "Quotas and limits \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas
  title: "Quotas and limits \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Resources
Send feedback
Quotas and limits
Stay organized with collections
Save and categorize content based on your preferences.
This document lists the quotas and system limits that apply to
Cloud Interconnect.
Quotas have default values, but you can typically request
adjustments.
System limits are fixed values that can't be changed.
To change a quota, see Request additional quota .
Google Cloud uses quotas to help ensure fairness and reduce
spikes in resource use and availability. A quota restricts how much of a
Google Cloud resource your Google Cloud project can use. Quotas
apply to a range of resource types, including hardware, software, and network
components. For example, quotas can restrict the number of API calls to a
service, the number of load balancers used concurrently by your project, or the
number of projects that you can create. Quotas protect the community of
Google Cloud users by preventing the overloading of services. Quotas also
help you to manage your own Google Cloud resources.
The Cloud Quotas system does the following:
Monitors your consumption of Google Cloud products and services
Restricts your consumption of those resources
Provides a way to
request changes to the quota value
and automate quota adjustments
In most cases, when you attempt to consume more of a resource than its quota
allows, the system blocks access to the resource, and the task that
you're trying to perform fails.
Quotas generally apply at the Google Cloud project
level. Your use of a resource in one project doesn't affect
your available quota in another project. Within a Google Cloud project, quotas
are shared across all applications and IP addresses.
For more information, see the
Cloud Quotas overview .
There are also system limits on Cloud Interconnect resources.
System limits can't be changed.
Quotas
This table highlights important quotas for each project. For other quotas, see the Google Cloud console Quotas page .
Item
Quota
Notes
Interconnect connections
Quota
The number of Dedicated Interconnect connections per project.
Interconnect connections aren't associated with regions or
VPC networks.
VLAN attachments
Quota
The number of VLAN attachments that you can configure in each
region for your project. This includes VLAN attachments for both
Dedicated Interconnect and Partner Interconnect.
In addition to this quota, the VLAN attachments per
Interconnect applies.
VLAN attachments per Interconnect
Quota
The number of VLAN attachments that you can configure on a single
interconnect connection.
VLAN attachments total Mbps
Quota
The maximum bandwidth capacity of all VLAN attachments in a given
region for a given project, irrespective of their relationship with
Interconnect connections.
In addition to this quota, the limits described in the Limits
table apply.
Cross-site networks
Quota
The number of cross-site networks per project.
Wire groups
Quota
The number of wire groups per project.
In addition to this quota, the Wire groups per Interconnect
applies.
Wire groups per Interconnect
Quota
The number of wire groups that you can configure on a single
Interconnect connection.
Wire groups unmetered bandwidth per Interconnect metro pair
Quota
The maximum bandwidth capacity between a pair of Interconnect
metros, in Gbps. This quota includes both traffic directions.
There is a unique quota for each pair of metros as identified
in the Dimensions column in the format
metro-a | metro-b .
Cloud Routers
Quota
The number of Cloud Routers that you can
create within your project, in any network and region.
Networks also have a limit on the number of
Cloud Routers in any given region .
For more details, see
Cloud Router quotas and limits .
Limits
The following limits apply to Cloud Interconnect connections,
VLAN attachments, and cross-site network wires. Unless otherwise stated, these
limits can't be increased.
Item
Limit
Notes
Maximum number of physical circuits per Cloud Interconnect connection
8 x 10 Gbps (80-Gbps) circuits or 8 x 100 Gbps (800-Gbps) circuits or 8 x 400 Gbps (3200-Gbps) circuits
A Cloud Interconnect connection is a logical connection to Google, made up
of one or more physical circuits. You can request one of the following
circuit choices:
Up to 8 x 400 Gbps (3200-Gbps) circuits.
Up to 8 x 100 Gbps (800-Gbps) circuits.
10-Gbps increments up to eight circuits (80 Gbps) to increase the
maximum total bandwidth of all VLAN attachments that use the
Cloud Interconnect connection to 80 Gbps.
To determine the bandwidth, multiply the number of physical circuits
by the bandwidth per circuit (10 Gbps).
Maximum bandwidth per VLAN attachment
Dedicated Interconnect, Cross-Cloud Interconnect: Capacities from 50 Mbps to 400 Gbps
Partner Interconnect, Cross-Site Interconnect: Capacities from 50 Mbps to 100 Gbps
The maximum possible bandwidth per VLAN attachment depends
on the bandwidth capacity that you order. For capacities, see the
pricing page .
For Partner Interconnect, not all service providers offer
all capacities.
The throughput of individual flows on a VLAN attachment is limited.
To achieve maximum throughput, you must use multiple five-tuple flows
(for example: 10+) with packet sizes within the MTU of the VLAN
attachment.
Maximum bandwidth per traffic flow on a VLAN attachment
10 Gbps
Even if you configure your attachment with a higher bandwidth, an
individual traffic flow might be limited to the maximum defined for an
attachment.
A traffic flow to a destination in a VPC network
is identified by either a five-tuple hash for non-fragmented packets
or a three-tuple hash for fragmented packets. In addition, traffic
flows that use Private Google Access for on-premises hosts are
identified by a three-tuple hash.
A five-tuple hash consists of a protocol, source IP address, source
port, destination IP address, and destination port.
A three-tuple hash consists of a protocol, source IP address, and
destination IP address.
The following cases describe where the maximum bandwidth is lower than
the 10 Gbps limit:
If the bandwidth capacity of your VLAN attachment is less than the
maximum for the attachment, the bandwidth per traffic flow is limited by
the bandwidth of the VLAN attachment.
If you reach the maximum packet rate per traffic flow (as
described in the next section).
Maximum packet rate per traffic flow on a VLAN attachment
1,000,000 packets per second (pps)
The maximum rate of packets per traffic flow, identified by a
five-tuple hash for non-fragmented packets and by a three-tuple hash
for fragmented packets (as described in the previous section).
Maximum transmission unit (MTU)
1,440 bytes
1,460 bytes
1,500 bytes
8,896 bytes
Depending on the VLAN attachment MTU setting, the size of the largest IP
address packet that can be transmitted over a VLAN attachment.
For more information, see Cloud Interconnect MTU .
Maximum lifetime of (Partner Interconnect) VLAN
attachment pairing key
28 days
The maximum amount of time that can pass between generating a
(Partner Interconnect) VLAN attachment pairing key and
successful attachment provisioning by the service provider.
If a pairing key is no longer valid, you delete and create a new
pairing key for the Partner Interconnect service
provider to use.
Maximum bandwidth per wire
10 Gbps
This limit can be increased. Requires confirmation that you won't
exceed the limit for the Maximum bandwidth per traffic flow on a wire .
To request an update to this limit, file a
support case .
Maximum bandwidth per traffic flow on a wire
10 Gbps
A traffic flow is defined by one of the following:
If you configure end-to-end MACsec encryption between your on-premises
routers, a traffic flow is defined by a two-tuple hash that consists
of a source MAC address and destination MAC address.
Otherwise, a traffic flow is defined by an eight-tuple hash that consists
of a source MAC address, destination MAC address, source IP address,
destination IP address, physical interface of Google's edge router,
IP protocol number, TCP/UDP source port, and TCP/UDP destination port.
Cloud Router limits
Because Dedicated Interconnect and
Partner Interconnect require Cloud Router, all
the Cloud Router quotas and limits apply.
There are limits on the maximum number of learned routes
and on the number of advertised routes. For more information, see the
Cloud Router
Quotas and limits page .
Manage quotas
Cloud Interconnect enforces quotas on resource usage for various reasons.
For example, quotas protect the community of Google Cloud users by
preventing unforeseen spikes in usage. Quotas also help users who are exploring
Google Cloud with the
free tier
to stay within their trial.
All projects start with the same quotas, which you can change by
requesting additional quota . Some quotas might increase
automatically based on your use of a product.
Permissions
To view quotas or request quota increases, Identity and Access Management (IAM) principals need one of the
following roles.
Task
Required role
Check quotas for a project
One of the following:
Project Owner ( roles/owner )
Project Editor ( roles/editor )
Quota Viewer ( roles/servicemanagement.quotaViewer )
Modify quotas, request additional quota
One of the following:
Project Owner ( roles/owner )
Project Editor ( roles/editor )
Quota Administrator ( roles/servicemanagement.quotaAdmin )
A custom role with the serviceusage.quotas.update permission
Check your quota
Console
In the Google Cloud console, go to the Quotas page.
Go to Quotas
To search for the quota that you want to update, use the Filter table .
If you don't know the name of the quota, use the links on this page instead.
gcloud
Using the Google Cloud CLI, run the following command to
check your quotas. Replace PROJECT_ID with your own project ID.
gcloud compute project-info describe --project PROJECT_ID
To check your used quota in a region, run the following command:
gcloud compute regions describe example-region
Errors when exceeding your quota
If you exceed a quota with a gcloud command,
gcloud outputs a quota exceeded error
message and returns with the exit code 1 .
If you exceed a quota with an API request, Google Cloud returns the
following HTTP status code: 413 Request Entity Too Large .
Request additional quota
To adjust most quotas, use the Google Cloud console.
For more information, see
Request a quota adjustment .
Resource availability
Each quota represents a maximum number for a particular type of resource that you can create,
if that resource is available. It's important to note that quotas don't
guarantee resource availability. Even if you have available quota, you can't create
a new resource if it is not available.
For example, you might have sufficient quota to create a new regional, external IP address
in a given region. However, that is not possible if there are no
available external IP addresses in that region. Zonal resource
availability can also affect your ability to create a new resource.
Situations where resources are unavailable in an entire region are rare. However, resources
within a zone can be depleted from time to time, typically without impact to the service level
agreement (SLA) for the type of resource. For more information, review the relevant SLA for the
resource.
What's next
To find quotas and limits information for other Network Connectivity
products, see
Network Connectivity quotas and limits .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
