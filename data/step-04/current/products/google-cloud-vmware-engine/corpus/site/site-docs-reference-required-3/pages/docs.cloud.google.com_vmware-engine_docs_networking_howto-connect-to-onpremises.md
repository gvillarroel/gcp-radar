---
title: "Connecting from an on-premises network to VMware Engine standard or stretched\
  \ private cloud \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/networking/howto-connect-to-onpremises
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/networking/howto-connect-to-onpremises
  title: "Connecting from an on-premises network to VMware Engine standard or stretched\
    \ private cloud \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
VMware Engine
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Connecting from an on-premises network to VMware Engine
standard or stretched private cloud
Google Cloud VMware Engine enables key use cases such as data center lift and shift,
data center extension, and disaster recovery. These use cases require that you
establish connectivity from your on-premises network to Google Cloud and your
VMware Engine network.
Connecting from your on-premises network to VPC network
Google Cloud offers multiple hybrid connectivity options such as
Cloud VPN and Cloud Interconnect .
Follow the links to learn how to set up Cloud VPN or
Cloud Interconnect (Dedicated and Partner Interconnect) connections
with your Virtual Private Cloud (VPC) network. If you have already connected
your on-premises network to a VPC network, you can use this
connection for this step.
Warning: Use of HCX requires either Cloud VPN or
Cloud Interconnect-based connectivity between your on-premises
network and your VMware Engine network.
Connect from your VPC network to VMware Engine
The connection from your VPC network to a
VMware Engine differs based on whether you use standard or legacy
networks.
Standard VMware Engine networks
The connection from your VPC network to a Standard
VMware Engine network uses
VPC Network Peering .
Legacy VMware Engine networks
The connection from your VPC network to a
Legacy VMware Engine network uses
private services access .
To access your workload virtual machines (VMs) from an on-premises network or
from your VPC network,
set up private services access from your
VPC network to your VMware Engine network .
End-to-end connectivity and routing considerations
To allow a VMware Engine regional network to reach on-premises
networks, you must enable Import/export custom routes on the
VPC network peering connection associated with the private
services access. This enables routes that are advertised from on-premises to the
VPC network to be propagated to the VMware Engine
region.
When you use Cloud VPN for on-premises connection to the
VPC network, you must add VMware Engine networks to
the Cloud VPN tunnel .
When you use Cloud Interconnect for on-premises connection to the
VPC network, you can add custom routes
to the Cloud Router that terminates the Cloud Interconnect
attachment.
Migrating VMs from on-premises to stretched private clouds
You can continue to use the same migration tools for on-premises to
Google Cloud VMware Engine VM migrations for both standard private clouds and stretched
private cloud destinations. VMware HCX is the default tool for VM migrations and
comes bundled with the service.
HCX Cloud Manager is deployed automatically to the primary zone when a stretched
private cloud is created. When an HCX service mesh is created, you can use
affinity rules to ensure that the HCX service appliances are created in the
primary zone.
After a site-level failover (in the case of a complete zone failure), the HCX
Manager and service appliances are started on the surviving zone.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
