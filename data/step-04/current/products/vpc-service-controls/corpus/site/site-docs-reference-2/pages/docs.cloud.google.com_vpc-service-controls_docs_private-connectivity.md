---
title: "Private Google Access with VPC Service Controls \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc-service-controls/docs/private-connectivity
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc-service-controls/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vpc-service-controls/docs/private-connectivity
  title: "Private Google Access with VPC Service Controls \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
VPC Service Controls
Guides
Send feedback
Private Google Access with VPC Service Controls
Stay organized with collections
Save and categorize content based on your preferences.
Private Google Access offers private connectivity to hosts in either a
VPC network or an on-premises network that uses private IP addresses
to access Google APIs and services . You can extend a
Virtual Private Cloud service perimeter to hosts in those networks to control access
to protected resources.
Hosts in a VPC network must have a private IP address
only (no public IP address) and be in a subnet with Private Google Access
enabled.
For on-premises hosts to reach restricted Google API services, requests
to Google APIs must be sent through a VPC network, either through
a Cloud VPN tunnel or a
Cloud Interconnect connection.
In both cases, we recommend that you send all requests to Google APIs and
services to the virtual IP (VIP) address ranges for
restricted.googleapis.com . The IP address ranges are not announced
to the internet. Traffic sent to the VIP stays within Google Cloud's
network only.
If you require access to other Google APIs and services that aren't
supported by VPC Service Controls, you can use private.googleapis.com . However,
private VIP can allow access to services that are not compliant with
VPC Service Controls that might have data exfiltration risks. We recommend
that you use restricted.googleapis.com , which integrates with VPC Service Controls
and mitigates data exfiltration risks. Using restricted.googleapis.com denies
access to Google APIs and services that are not supported by VPC Service Controls.
For more information about the private.googleapis.com and
restricted.googleapis.com VIPs, see Configure
Private Google Access .
IP address ranges for restricted.googleapis.com
There are two IP address ranges associated with the restricted.googleapis.com
domain:
IPv4 range: 199.36.153.4/30
IPv6 range: 2600:2d00:0002:1000::/56
For information about using the IPv6 range to access Google APIs,
see IPv6 support .
VPC network example
In the following example, the service perimeter contains two projects: one that
has an authorized VPC network and another with the protected
Cloud Storage resource. In the VPC network, VM instances
must be in a subnet with Private Google Access enabled and only require
access to Virtual Private Cloud restricted services. Queries to Google APIs and
services from VM instances in the authorized VPC network resolve
to restricted.googleapis.com and can access the protected resource.
Private Google Access with VPC Service Controls
(click to enlarge)
DNS was configured in the VPC network to map *.googleapis.com
requests to restricted.googleapis.com , which resolves to 199.36.153.4/30 .
A custom static route was added to the VPC network that
directs traffic with the destination 199.36.153.4/30 to the
default-internet-gateway as the next hop. Even though
default-internet-gateway is used as the next hop, traffic is routed
privately through Google's network to the appropriate API or service.
The VPC network was authorized to access the
My-authorized-gcs-project because both projects are in the same service
perimeter.
On-premises network example
You can use either static routing, by simply configuring a static route in the
on-premises router, or by announcing the restricted Google API address range
through border gateway protocol (BGP) from Cloud Router .
To use Private Google Access for on-premises hosts with Virtual Private Cloud,
set up private connectivity for on-premises hosts and then configure
VPC. Define a service perimeter for the project that
contains the VPC network that's connected to your on-premises
network.
In the following scenario, the storage buckets in project sensitive-buckets
can only be accessed from VM instances in the project main-project and from
connected on-premises applications. On-premises hosts can access storage buckets
in the project sensitive-buckets because traffic goes through a
VPC network that's inside the same service perimeter as
sensitive-buckets .
Private Google Access for hybrid cloud use case (click to
enlarge)
The on-premises DNS configuration maps *.googleapis.com requests to
restricted.googleapis.com , which resolves to 199.36.153.4/30 .
The Cloud Router was configured to advertise the 199.36.153.4/30 IP
address range through the VPN tunnel. Traffic going to Google APIs is routed
through the tunnel to the VPC network.
A custom static route was added to the VPC network that directs
traffic with the destination 199.36.153.4/30 to the
default-internet-gateway as the next hop. Even though
default-internet-gateway is used as the next hop, traffic is routed
privately through Google's network to the appropriate API or service.
The VPC network was authorized to access the
sensitive-buckets projects, and on-premises hosts have the same access.
On-premises hosts can't access other resources that are outside of the service
perimeter.
The project that connects to your on-premises network must be a member of the
service perimeter to reach restricted resources. On-premises access also works
if the relevant projects are connected by a perimeter bridge.
What's next
To configure private connectivity, refer to
Setting up private connectivity .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
