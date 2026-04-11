---
title: "Configure Single Client Access Name with Cloud DNS \_|\_ Bare Metal Solution\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/rac-scan-dns
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bare-metal/docs/bms-overview
source_metadata:
  url: https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/rac-scan-dns
  title: "Configure Single Client Access Name with Cloud DNS \_|\_ Bare Metal Solution\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The availability of Bare Metal Solution is transitioning to a specialized, allowlist-only model. If you are an existing customer, please contact your Google account team to explore the value of migrating to new Oracle and Google Cloud strategic partnership offerings .
Home
Documentation
Distributed, hybrid, and multicloud
Bare Metal
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Configure Single Client Access Name with Cloud DNS
You can access an Oracle® Real Application Clusters (RAC) cluster via a
highly-available DNS name provided by Cloud DNS .
This is achieved by pointing the DNS entry at a RAC
Single Client Access Name (SCAN) ,
which stays persistent as cluster topology changes.
Note: Customers are responsible for procuring licenses for the Oracle workloads
they choose to run on Bare Metal Solution, and customers are responsible for complying
with those licenses. Google does not provide licenses for Oracle workloads.
Before you begin
You need access to the following resources and services to complete this guide:
A configured Bare Metal Solution server that connects
to a Google Virtual Private Cloud (VPC) via a
Partner Cloud Interconnect .
A configured RAC cluster on the Bare Metal Solution server, with a SCAN listener
active on each node.
Cloud DNS .
System architecture
The following diagram shows the system architecture used in this guide:
Set up Cloud DNS to point to your RAC cluster
To set up single DNS name access to your RAC cluster, complete the following steps:
If you haven't run the Google Cloud CLI
previously, you must run the following command to specify your project name
and authenticate with the Google Cloud console:
gcloud auth login
Enable the Cloud DNS API
for your Google Cloud project.
Create an inbound server policy in Cloud DNS
for the VPC connected to your Bare Metal Solution servers. This
makes sure your Bare Metal Solution servers can communicate with Cloud DNS.
List the inbound forwarder entry points
to determine the correct entry point IP address for each Bare Metal Solution
server.
Configure each Bare Metal Solution server to use the IP address from the previous
step for name resolution. The steps involved are specific to your operating
system.
For example, to configure name resolution in Red Hat Enterprise Linux 8:
Disable NetworkManager DNS processing .
Add the following line to /etc/resolv.conf , replacing
ENTRY_POINT_IP_ADDRESS with the entry point IP address:
nameserver ENTRY_POINT_IP_ADDRESS
Configure Cloud DNS for Private Google Access .
Log into a Bare Metal Solution server that hosts a RAC database as the database
user that was configured at install time.
If you haven't set the ORACLE_HOME and PATH environment variable in your
shell profile, set it now so you can connect to your database.
Request the SCAN configuration with srvctl to find the SCAN name:
srvctl config scan
You should receive a response similar to the following example:
SCAN name: cluster01-scan.mycompany.internal, Network: 1
Subnet IPv4: /192.168.1.0/255.255.255.0/bond0.118, static
Subnet IPv6:
SCAN 1 IPv4 VIP: 192.168.1.30
SCAN VIP is enabled
SCAN 2 IPv4 VIP: 192.168.1.31
SCAN VIP is enabled
SCAN 3 IPv4 VIP: 192.168.1.32
SCAN VIP is enabled
The SCAN name in the previous response is
cluster01-scan.mycompany.internal .
Create a private zone in Cloud DNS ,
providing the following details:
A new zone name, to identify the zone in configuration commands.
A description for your zone, to better define its purpose.
The DNS name suffix for your zone, such as mycompany.internal . This
should match the suffix of the SCAN name returned in the previous
srvctl config scan command.
The VPC network that the private DNS zone should be visible
to.
Add a record to the previous zone,
providing the following details:
The name of the zone you created in the previous step.
The full DNS name. In this guide, that's
cluster01-scan.mycompany.internal .
The time to live (TTL). This is how long the DNS record is cached before
it's refreshed.
The resource record type. For SCAN, this is an A record.
The SCAN IPs returned in the previous srvctl config scan command.
Repeat this process for any additional names that need to be resolved.
On the Bare Metal Solution server, validate that SCAN resolution is working with
nslookup :
nslookup cluster01-scan.mycompany.internal
If successful, you should receive a response similar to the following
example:
Server: 10.158.0.3
Address: 10.158.0.3#53
Name: cluster01-scan.mycompany.internal
Address: 192.168.1.32
Name: cluster01-scan.mycompany.internal
Address: 192.168.1.30
Name: cluster01-scan.mycompany.internal
Address: 192.168.1.31
You can now access your RAC cluster using a single, highly available, resilient
DNS name via Cloud DNS.
Oracle is a registered trademark of Oracle and/or its affiliates.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
