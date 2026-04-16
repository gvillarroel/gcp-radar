---
title: "Configuring on-premises DNS for management appliance access \_|\_ Google Cloud\
  \ VMware Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/networking/howto-dns-on-premises
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/networking/howto-dns-on-premises
  title: "Configuring on-premises DNS for management appliance access \_|\_ Google\
    \ Cloud VMware Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
VMware Engine
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Configuring on-premises DNS for management appliance access
You can access management appliances like vCenter Server, NSX Manager, and HCX
on a private cloud from on-premises workstations. To do so, you must configure
DNS address resolution so that management appliances can be addressed by their
hostnames and IP addresses.
Global address resolution using Cloud DNS
VMware Engine lets you use a Cloud DNS zone in your
project as a single DNS resolution endpoint for all connected management
appliances in a peered Virtual Private Cloud (VPC) network. You can do this
even if your private clouds are deployed across different regions.
For standard networks: when configuring address resolution for multiple and
single private clouds, you can set up global address resolution using
Cloud DNS.
For legacy networks: when configuring address resolution for multiple
private clouds, you can set up global address resolution using Cloud DNS.
If you only plan to have a single private cloud, or don't intend to use
Cloud DNS, see
Address resolution without using Cloud DNS .
By default, you can resolve the management zone from any of your Virtual Private Cloud
networks that has Cloud DNS enabled.
For standard networks: when you create a private cloud that is linked to a
standard VMware Engine network, an associated management DNS zone
is created and auto-populated with the management appliances entries.
If this standard VMware Engine network is
Virtual Private Cloud peered with a VPC or another
VMware Engine network, a
management DNS zone binding is automatically created.
This ensures resolution of management appliances from your Google Cloud
VMs on that network.
You can also manually create a management DNS zone binding if you don't want
to create the Virtual Private Cloud Peering.
For legacy networks: when a private connection
is created between your Virtual Private Cloud network and a legacy
VMware Enginenetwork, Google automatically creates DNS peering,
ensuring resolution from any of your Google Cloud VMs.
To resolve addresses from an on-premises network using Cloud DNS,
do the following:
Enable inbound DNS forwarding on the Virtual Private Cloudnetwork .
Identify the DNS server addresses to use on-premises .
Create a conditional forwarder on your on-premises DNS server to resolve gve.goog .
Address resolution without using Cloud DNS
To resolve addresses without using Cloud DNS, get the IP address of
your private cloud's DNS server and configure the DNS:
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
Click Select a project and then select the organization, folder, or project that
contains the private cloud you want to connect to.
Click the name of the private cloud.
Use one of the following options for the DNS configuration:
Create a zone on the DNS server for gve.goog
Create a conditional forwarder on your on-premises DNS server to resolve gve.goog
Create a zone on the DNS server for gve.goog
You can set up a zone as a stub zone and point to the DNS servers on the private
cloud for name resolution. This section provides information on using a BIND
DNS server or a Microsoft Windows DNS server.
Note: In this documentation we use gve.goog as a generic reference for a zone.
If you have more than one private cloud, you need to specify the distinct
zone that you want. For example,
guid.region.gve.goog example: ab123456.australia-southeast1.gve.goog .
Create a zone on a BIND DNS server
The file and parameters to configure can vary based on your individual
DNS setup.
For example, for the default BIND server configuration, edit the
/etc/named.conf file on your DNS server and add the following zone
information:
zone "gve.goog"
{
type stub;
masters { IP address of DNS servers; };
file "slaves/FILE_NAME.db";
};
Create a zone on a Microsoft Windows DNS server
Right-click the DNS server and select New zone .
Select Stub zone and click Next .
Select the appropriate option depending on your environment and click
Next .
Select Forward lookup zone and click Next .
Enter the zone name and click Next .
Enter the IP addresses of the DNS servers for your private cloud that you
obtained from the Google Cloud console.
Click Next as needed to complete the setup.
Create a conditional forwarder
A conditional forwarder sends all DNS name resolution requests to the designated
server. With this setup, any request to *.gve.goog is forwarded to the DNS
servers located on the private cloud. The following sections show how to set up
forwarders on different types of DNS servers.
Create a conditional forwarder on a BIND DNS server
The specific file and parameters to configure can vary based on your individual
DNS setup.
For example, for the default BIND server configuration, edit the
/etc/named.conf file on your DNS server and add the following conditional
forwarding information:
zone "gve.goog" {
type forward;
forwarders { IP address of DNS servers; };
};
Create a conditional forwarder on a Microsoft Windows DNS server
Open the DNS Manager on the DNS server.
Right-click Conditional forwarders and select the option to add a
conditional forwarder.
Enter the DNS domain and the IP address of the DNS servers in the private
cloud, then click OK .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
