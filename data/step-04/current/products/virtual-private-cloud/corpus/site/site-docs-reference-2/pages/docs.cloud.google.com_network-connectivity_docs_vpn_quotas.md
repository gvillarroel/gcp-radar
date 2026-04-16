---
title: "Quotas and limits \_|\_ Cloud VPN \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/vpn/quotas
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/vpn/apis
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/vpn/quotas
  title: "Quotas and limits \_|\_ Cloud VPN \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Connectivity
Cloud VPN
Resources
Send feedback
Quotas and limits
Stay organized with collections
Save and categorize content based on your preferences.
Warning: Certain Classic VPN dynamic routing
functionality is deprecated. For more information, see
Classic VPN dynamic routing partial deprecation .
This document lists the quotas and system limits that apply to
Cloud VPN.
Quotas have default values, but you can typically request
adjustments.
System limits are fixed values that can't be changed.
To change a quota, see
requesting additional quota .
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
There are also system limits on Cloud VPN resources.
System limits can't be changed.
Quotas
This table covers important quotas per project. For other quotas, see the
Google Cloud console Quotas page .
Item
Quota
Notes
VPN gateways
Quota
For HA VPN only
External VPN gateways
Quota
For HA VPN only
VPN tunnels
Quota
This quota represents the combined total number of Classic VPN
tunnels and HA VPN tunnels.
Routers
Quota
This quota represents the number of Cloud Routers that you
can create within your project, in any network and region. Networks also
have a limit on the number of Cloud Routers in any given region.
For more details, see
Cloud Router
quotas and limits .
Subject to the Cloud Router quotas and limits, the number of
Cloud Routers is independent of the type of Cloud VPN
gateway, Classic VPN or HA VPN,
that a tunnel is attached to. The quota is applied the same to either
type of gateway.
Target VPN gateways
Quota
For Classic VPN only
Forwarding rules
Quota
For Classic VPN only
Limits
The following limits apply to Cloud VPN. In this table, VPN tunnel
means either a Classic VPN tunnel or an
HA VPN tunnel. Unless otherwise stated, these limits
cannot be increased.
Item
Limit
Notes
Bandwidth per VPN tunnel
250,000 packets per second for the sum of ingress and egress
250,000 packets per second is roughly equivalent to 1 Gbps to
3 Gbps, depending on the average packet size within the tunnel.
Cloud VPN only throttles egress IPsec traffic. It does not
throttle ingress traffic.
For more details, see
Network bandwidth .
Known issues
Be aware of the following issues:
Google Cloud resources specific to HA VPN are not
yet displayed in Cloud Asset Inventory or
Security Command Center .
These resources include compute.vpnGateways and
compute.externalVpnGateways . However, the compute.vpnTunnels resource is
listed in both locations and is required for a working
HA VPN connection.
To view Cloud Monitoring metrics for HA VPN, use
Metrics Explorer. For more information, see Viewing logs and
metrics .
When setting up VPN tunnels to AWS, use IKEv2 and configure
fewer IKE transform sets .
Manage quotas
Cloud VPN enforces quotas on resource usage for various reasons.
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
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
