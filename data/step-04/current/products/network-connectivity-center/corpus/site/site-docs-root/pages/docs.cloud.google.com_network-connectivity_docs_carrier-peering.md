---
title: "Carrier Peering overview \_|\_ Network Connectivity \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/carrier-peering
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/carrier-peering
  title: "Carrier Peering overview \_|\_ Network Connectivity \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Connectivity
Guides
Send feedback
Carrier Peering overview
Stay organized with collections
Save and categorize content based on your preferences.
Carrier Peering enables you to access Google applications, such as Google Workspace, by
using a
service provider
to obtain enterprise-grade network services that connect your infrastructure to Google.
When connecting to Google through a service provider, you can get connections with higher
availability and lower latency, using one or more links. Work with your service provider to get the
connection that you need.
When to use Carrier Peering
The following example describes a common use case for Carrier Peering.
To access Google Workspace applications from an on-premises network, an organization might
need a perimeter network to reach Google's network. The perimeter network
enables organizations to expose an isolated subnetwork to the public internet instead of their
entire network. Instead of setting up and maintaining a perimeter network, the organization can work
with a service provider so that their traffic travels on a dedicated link from their systems to
Google. With the dedicated link, the organization gets a higher availability and lower latency
connection to Google's network.
Unless you need to access Google Workspace applications as described in the preceding use
case,
Partner Interconnect is the recommended way to connect to Google through a service
provider. To choose a product, see the Considerations section and the
table that compares
Carrier Peering with Cloud Interconnect .
Considerations
Review the following considerations to decide if Carrier Peering meets your needs:
Carrier Peering exists outside of Google Cloud. Instead of
Carrier Peering, the recommended methods of access to Google Cloud
are
Partner Interconnect , which uses a service provider, or
Dedicated Interconnect , which provides a direct connection
to Google.
If used with Google Cloud, Carrier Peering doesn't produce
any custom routes in a VPC network. Traffic sent from
resources in a VPC network leaves by way of a route whose next
hop is either a default internet gateway (a default route, for example) or a
Cloud VPN tunnel.
To send traffic through Carrier Peering by using a route whose next hop is a
Cloud VPN tunnel, the IP address of your on-premises network's VPN
gateway must be in your configured destination range.
Service providers
Review the list of Carrier Peering service providers and choose the
option that best suits your needs.
CyrusOne
More information
Orange Business Services
More information
Verizon
More information
FAQ
Where are the connections physically located?
Service providers offer service in a range of locations around the world.
Contact them for local availability of their service.
Google and its networking partners are working to increase the number of
locations throughout the world where Google's networks connect with carrier
networks to deliver the best possible experience.
Can I purchase connections from multiple service providers?
Yes, you can purchase from multiple service providers. Doing so may
be helpful in situations where you want to connect disparate parts of your
WAN that different providers manage and provision separately. In
such a case, you would have a commercial relationship with both providers
for connectivity.
Does Google offer a service level agreement (SLA)?
Customers should consult with their network service provider to determine
whether that provider may offer an SLA. Google does not offer an SLA
with this program.
Is the Carrier Peering connection secure?
Google has no control over the connection traffic while it traverses the
provider's network; we encourage customers who have security needs to consider
using strong encryption.
Can I connect to the internet by using this connection?
No, you cannot connect to non-Google products or services through the
Carrier Peering connection.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
