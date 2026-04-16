---
title: "VPN gateways \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/concepts-vpn-gateways
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/concepts-vpn-gateways
  title: "VPN gateways \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud Documentation"
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
VPN gateways
VPN gateways provide secure connectivity between multiple sites, such as
on-premises data centers, Google Cloud Virtual Private Cloud (VPC) networks,
and Google Cloud VMware Engine private clouds. Traffic is encrypted because the VPN
connections traverse the internet. Each VPN gateway can support multiple
connections. When you create multiple connections to the same VPN gateway, all
VPN tunnels share the available gateway bandwidth.
VMware Engine supports VPN connectivity by using the following types
of gateways:
Point-to-site VPN gateways: for point-to-site connections, like connecting
from your computer to your private cloud
Cloud VPN or Cloud Interconnect :
for site-to-site connections, like establishing a connection between your
on-premises network and your private cloud
For more details about Cloud VPN and Cloud Interconnect, see
Choosing a Network Connectivity product .
Point-to-site VPN gateways
A point-to-site VPN gateway sends encrypted traffic between a
VMware Engine network and a client computer. You can use a VPN
gateway to access your private cloud network, including your private cloud
vCenter and workload VMs. To connect to your private cloud after you set up your
VPN gateway, see Connecting using VPN .
To set up a point-to-site VPN gateway, first choose a marketplace vendor
solution. You can deploy marketplace VPN gateway solutions as VMs on a
VPC network connected to your private cloud. Alternatively, you
can deploy VPN gateway VMs in VMware Engine, then expose and secure
them using the VMware Engine public IP service and external firewall
rules.
After you set up the VPN gateway, extend the encryption domain to include both
the management and NSX subnets in your private cloud. If preferred, you can
summarize or group subnets when setting up your encryption domain.
To get a list of the subnets to add to your encryption domain, do the following:
Access the Google Cloud console .
From the main menu, go to Subnets .
From the Subnet column, copy the IP address ranges that you want to get
access to remotely.
Example: OpenVPN Access Server
For example, OpenVPN Access Server is a
marketplace solution for a VPN gateway. After you activate the appliance, you
deploy a host VM for the gateway that allows transit to VMware Engine
networks.
To access the encryption domain settings in the OpenVPN Access Server administrator
panel, go to Configuration > VPN Settings > Routing .
Then, enter a list of your subnet IP address ranges in the field labeled
"Specify the private subnets to which all clients should be given access".
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
