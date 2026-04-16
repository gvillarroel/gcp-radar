---
title: "Connect to Google \_|\_ Google Distributed Cloud (software only) for VMware\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/connect-on-prem-gcp
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/security
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/connect-on-prem-gcp
  title: "Connect to Google \_|\_ Google Distributed Cloud (software only) for VMware\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
Documentation
GDC for VMware
Guides
Send feedback
Connect to Google
Stay organized with collections
Save and categorize content based on your preferences.
There are various ways that you can connect Google Distributed Cloud
clusters, running in your on-premises data center, to the Google Cloud
network. Possibilities include:
Regular internet connection
HA VPN
Partner Interconnect
Dedicated Interconnect
Regular internet connection
In certain scenarios, you can use the internet as the connection between Google
and your on-premises data center. For example:
Your Google Distributed Cloud deployment is self-contained on your premises, and
your on-premises components seldom communicate with the Google Cloud
network. You use the connection primarily for cluster management. The speed,
reliability, and security of the connection are not critical.
Your on-premises cluster is self-contained, except for access to a Google
service like Cloud SQL. Traffic between your on-premises cluster and the
Google service uses public IP addresses. You configure firewall rules to
provide security.
HA VPN
With HA VPN and
Cloud Router , traffic between Google
and your on-premises data center traverses the public internet, but is
encrypted. on-premises components can communicate with cloud components using
private IP addresses. Cloud Router dynamically exchanges routes between your
Google Cloud networks and your on-premises network. Dynamic routing is
especially beneficial as your network expands and changes, because it ensures
that the correct routing state is propagated to your on-premises data center.
Partner Interconnect
Partner Interconnect
provides connectivity between your on-premises network and the
Google Cloud network through a supported service provider. Traffic
between Google and your on-premises data center does not traverse the public
internet. On-premises components can communicate with cloud components using
private IP addresses. Your connection to Google is fast, secure, and reliable.
Dedicated Interconnect
Dedicated Interconnect
provides a direct physical connection between your on-premises network and the
Google Cloud network. This type of connection can be cost-effective if
you need high bandwidth. Traffic between Google and your on-premises data
center does not traverse the public internet. On-premises components can
communicate with cloud components using private IP addresses. Your connection to
Google is secure and reliable, and is even faster than a connection using
Partner Interconnect.
Impact of a temporary disconnection
For information on what happens if you're disconnected, see
Impact of temporary disconnection from Google Cloud .
Choosing a connection type
For additional guidance on choosing a connection type, see:
Choosing a VPN Routing Option
Choose an Interconnect Type
Network monitoring
Regardless of how you establish a fundamental connection to Google, you can
benefit from insights provided by network logging and monitoring. For more
information, see
Logging and monitoring
for Google Distributed Cloud.
Enhancing your fundamental connection
After your fundamental connection is in place, you can add features that enhance
access, security, and visibility. For example, you could enable
Private Google Access or
Connect .
The remainder of the guidance in this topic assumes you're using one of the
following options for your fundamental connection to Google:
HA VPN
Partner Interconnect
Dedicated Interconnect
Private Google Access
Private Google Access enables VMs
that have only private IP addresses to reach the IP addresses of Google APIs
and services . This scenario
includes the case where your Google Distributed Cloud cluster nodes have only
private IP addresses. You enable Private Google Access at the subnet level.
With Private Google Access, requests from your on-premises data center
to Google services traverse your Cloud Interconnect or
Cloud VPN connection instead of traversing the public internet.
Use Private Google Access in these situations:
Your on-premises VMs without public IP addresses must connect to Google
services like BigQuery, Pub/Sub, or Container Registry.
You want to connect to Google services without traversing the public internet.
For a list of services that support Google Private Access from on-premises VMs, see
Supported services .
For information about using Private Google Access from on-premises VMs, see
Configuring Private Google Access for on-premises hosts .
Services that don't require Google Private Access
Sometimes, you don't need Private Google Access to reach a service from a
VM that has only a private IP address. For example:
You create a Cloud SQL instance that has both a public IP address and a
private IP address. Then your on-premises components can access the
Cloud SQL instance using its private IP address. You don't need
Private Google Access in this case, because you don't need to reach the
public IP address of a Google service. This approach works only if
Cloud Router advertises the private IP address of the
Cloud SQL instance to your on-premises network.
You have an Google Distributed Cloud cluster in Google Cloud, and the
cluster nodes have private IP addresses. Your on-premises components can
access a NodePort Service or an internal load balancer Service in the cloud
Google Distributed Cloud cluster.
VPC Service Controls
If you want added protection against exfiltration, you can use
VPC Service Controls .
With VPC Service Controls, you can configure security perimeters around the
resources of your Google-managed services and control the movement of data
across the perimeter boundary.
If you use VPC Service Controls, you might see errors when you run some
gkectl commands, such as "Validation Category: GCP - [UNKNOWN] GCP
service: [Stackdriver] could not get GCP services" . To avoid these errors, add
the --skip-validation-gcp parameter to your commands.
Connect
Connect enables you
to view and manage your on-premises user clusters from Google Cloud console.
Note: Connect is not the fundamental connection between your
on-premises data center and Google. Your fundamental connection is formed with
Cloud Interconnect or
Cloud VPN . To
provide a view of your on-premises clusters from Google Cloud console,
Connect runs on top of your fundamental connection.
What's next
Logging and monitoring
Cloud VPN
Partner Interconnect
Dedicated Interconnect
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
