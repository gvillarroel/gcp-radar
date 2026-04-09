---
title: "Calculate network throughput over Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/calculate-network-throughput-over-interconnect
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/calculate-network-throughput-over-interconnect
  title: "Calculate network throughput over Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Calculate network throughput over Interconnect | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Network Connectivity
Cloud Interconnect
Start free
Overview
Guides
Reference
Support
Resources
More
Technology areas
More
Overview
Guides
Reference
Support
Resources
Cross-product tools
More
Console
Cloud Interconnect
Network Connectivity home
Cloud Interconnect overview
Options for connecting to multiple VPC networks
Best practices
Key terms
Topology for production-level applications (recommended)
Topology for non-critical applications
Dedicated Interconnect
Overview
Colocation facilities
Create Dedicated Interconnect connections
Provisioning overview
Order a connection
Retrieve LOA-CFAs
Test connections
Create VLAN attachments
Configure on-premises routers
Manage Dedicated Interconnect connections
View VLAN attachments and groups
Modify VLAN attachments
Disable or enable VLAN attachments
Duplicate a connection for redundancy
Use connections in other projects
Configure traffic differentiation
List locations
View connection details
Get diagnostics
Modify connection groups
Modify connections
Delete VLAN attachments
Delete connections
Change reliability options
Establish 99.99% availability
Establish 99.9% availability
Partner Interconnect
Overview
Supported service providers
Create Partner Interconnect connections
Provisioning overview
Create VLAN attachments
Request connections
Activate connections
Configure on-premises routers
Manage Partner Interconnect connections
Duplicate a VLAN attachment for redundancy
View VLAN attachments
Modify VLAN attachments
Disable VLAN attachments
Delete VLAN attachments
Establish 99.99% availability
Establish 99.9% availability
Cross-Cloud Interconnect
Overview
Create Cross-Cloud Interconnect connections
Connect to AWS
Overview
Choose your locations
Order Cross-Cloud Interconnect connections
Order AWS ports
Configure Google Cloud resources
Configure your AWS resources
Verify your connections
Connect to Azure
Overview
Choose your locations
Order Cross-Cloud Interconnect connections
Order Azure ports
Configure your Google Cloud resources
Configure your Azure resources
Verify your connections
Connect to OCI
Overview
Choose your locations
Order Cross-Cloud Interconnect connections
Order OCI ports
Configure your Google Cloud resources
Configure your OCI resources
Verify your connections
Connect to Alibaba Cloud
Overview
Choose your locations
Order Cross-Cloud Interconnect connections
Order Alibaba Cloud ports
Configure your Google Cloud resources
Configure your Alibaba Cloud resources
Verify your connections
Manage Cross-Cloud Interconnect connections
View VLAN attachments
Modify VLAN attachments
Disable VLAN attachments
Use connections in other projects
Configure traffic differentiation
View connection details
Get diagnostics
Disconnect networks
Delete connections
Partner Cross-Cloud Interconnect for OCI
Overview
Create Partner Cross-Cloud Interconnect connections
Provisioning overview
Paired locations
Create VLAN attachments
Request OCI connections
Activate connections
Partner Cross-Cloud Interconnect for AWS
Overview
Create Partner Cross-Cloud Interconnect connections
Provisioning overview
Choose a paired location
Create a connection initiated from Google Cloud
Create a connection initiated from AWS
Manage connections
Cross-Site Interconnect
Overview
Colocation facilities
Create Cross-Site Interconnect Connections
Provisioning overview
Check bandwidth quotas and limits
Order connections
Retrieve LOA-CFAs
Test connections
Create a cross-site network
Configure on-premises routers
Manage Cross-Site Interconnect connections
View cross-site networks
Modify a cross-site network
Disable a wire group
Delete a cross-site network
List locations
View connection details
Get diagnostics
Delete connections
Deploy
HA VPN over Cloud Interconnect
Overview
Deployment process
Terraform examples
Assign internal IP address ranges to HA VPN gateways
Configure HA VPN over Cloud Interconnect
Delete HA VPN over Cloud Interconnect
MACsec for Cloud Interconnect
Overview
Set up MACsec
Enable MACsec
Disable MACsec
Modify fail-open behavior
Get MACsec keys
View MACsec status
Rotate MACsec keys
Troubleshoot MACsec
Manage
Restrict Cloud Interconnect usage
Manage resources by using custom constraints
Create and manage tags
Calculate network throughput over Cloud Interconnect
Monitor and troubleshoot
Fix SLA eligibility problems
Monitor connections
Troubleshooting
Infrastructure maintenance events
Failure scenarios and impacts
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Limitations and considerations
Overview of tools for measuring network throughput
Measure throughput with iPerf3 Choose a large machine type
Install the tools
Run the prerequisite tests
Run the iperf3 tests
Analyze the test results
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Calculate network throughput over Interconnect
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Limitations and considerations
Overview of tools for measuring network throughput
Measure throughput with iPerf3 Choose a large machine type
Install the tools
Run the prerequisite tests
Run the iperf3 tests
Analyze the test results
This tutorial describes how to calculate network throughput, both within
Google Cloud and to your on-premises or third-party cloud locations that
are connected using Cloud Interconnect. This document describes how to analyze
results, lists the variables that can affect network performance, and provides
some troubleshooting tips.
Limitations and considerations
Cloud Interconnect limitations apply. For more information, see
Cloud Interconnect quotas .
NIC limits: Google Cloud accounts for bandwidth of each virtual machine
(VM) instance, not for each network interface (NIC) or IP address. A VM's
machine type defines its maximum egress rate; however, that rate can
only be achieved in specific situations. See this
table
for the number of vCPUs per machine type.
Other devices in the path (firewall, switches with small buffers, and
other vendors' devices) and their limitations apply. Perform the following
tasks to mitigate those limitations.
Gather network statistics on firewalls and switches in the path.
For Cloud Interconnect testing, bypass as many devices as
possible between the on-premises host and the Google Edge device.
Identify and verify all the devices in the path between the on-premises
network and the Google Cloud VM if they can be the source of
throughput issues.
Overview of tools for measuring network throughput
This tutorial demonstrates the use of the following tools for calculating
network throughput:
iPerf3 : A network testing tool that can
create TCP/UDP data streams (single-thread or multi-thread) and measure the
throughput of the network that carries them.
Note : iPerf3 is recommended only for single-CPU machines.
Netperf : A tool that is similar to
iPerf3 but appropriate for throughput testing on multi-CPU instances
that are CPU-bound on a single CPU.
tcpdump : A command-line packet
analyzer that captures packet details and TCP/IP communications for more
advanced troubleshooting. The tcpdump tool is compatible with other tools,
such as Wireshark.
Netstat : A command-line network
utility that displays network connections for Transmission Control Protocol
(both incoming and outgoing), routing tables, and several network
interface (network interface controller or software-defined network interface)
and network protocol statistics.
mtr : A networking diagnostic
tool that performs both traceroute and ping functions. It probes routers on
the route path by limiting the number of hops individual packets may traverse,
and listens to the responses of their expiry.
Measure throughput with i Perf3
Follow this procedure to measure throughput from a single VM instance.
Choose a large machine type
To perform throughput tests, use a large machine type, such as n1-standard-8 .
This machine type provides a maximum egress throughput limit of 16 Gbps, so the
per-VM egress throughput does not interfere with the tests.
Install the tools
Install iPerf3, mtr, netstat, and tcpdump on a Linux VM instance
For Debian-based distributions, run the following commands:
sudo apt-get update
sudo apt-get install iperf3 tcpdump mtr netstat
For Redhat-based distributions, run the following commands:
yum update
yum install iperf3 tcpdump mtr netstat
Install netperf
Note: You only need to compile this tool from the source to enable the demo
option.
For Debian-based distributions, run the following commands:
sudo apt-get install git build-essential autoconf texinfo -y
git clone https://github.com/HewlettPackard/netperf.git
cd netperf
./autogen.sh
./configure --enable-histogram --enable-demo=yes
make
cp src/netserver ~/.local/bin
cp src/netperf ~/.local/bin
For Redhat-based distributions, run the following commands:
sudo yum install git build-essential autoconf texinfo -y
git clone https://github.com/HewlettPackard/netperf.git
cd netperf
./autogen.sh
./configure --enable-histogram --enable-demo=yes
make
cp src/netserver ~/.local/bin
cp src/netperf ~/.local/bin
Run the prerequisite tests
Make sure the VLAN attachment sizes are configured correctly. For more
information, see Modifying VLAN attachments .
On both ends of the connection (each terminal), run the top or htop command
to monitor CPU usage.
Gather network statistics using the netstat command before running any
tests.
netstat -s >> netstat.log
In another terminal, run the tcpdump command before any capture with the
snaplen parameter value of 128 .
Run this command on both of the endpoints.
sudo /usr/sbin/tcpdump -s 128 -i [DEVICE_INTERFACE] host [IP_ADDRESS of remote side] -w mycap.pcap
Get the read and write memory size on the source and destination hosts.
$ sysctl net.ipv4.tcp_rmem
$ sysctl net.ipv4.tcp_wmem
$ sysctl net.core.rmem_max
$ sysctl net.core.rmem_default
$ net.core.wmem_max
$ net.core.wmem_default
$ uname -r
$ cat /etc/os-release
Run the iperf3 tests
We recommend that you run
multiple parallel streams of iperf3 tests. We recommend that you run a
minimum of four tests and a maximum of ten tests to get useful results.
In another terminal, run iperf3 server on one end of the connection (a VM,
or an on-premises machine). Multiple streams require multiple iperf3
servers.
Run the iPerf3 tool with the udp flag for Cloud Interconnect
testing. If the chosen throughput with UDP is achieved, you need to perform
further troubleshooting steps.
To run the multiple iperf3 servers from the command line, run the following
commands:
$ iperf3 -s -p 5101&; iperf3 -s -t 30 -p 5102&; iperf3 -s -p 5103 &
Use the following bash script to run multiple iperf3 servers:
#!/bin/bash
#start iperf3 server running in background
for i in `seq 0 9`;
do
iperf3 -s -B 10.0.100.35 -t 30 -u -p 521$i &
done
The iperf3 client runs for 10 seconds by default, which may not be enough for
TCP to reach the maximum throughput. Set the DURATION value to at
least 30 seconds to achieve more reliable results.
iperf3 -c [server IP address] -P [THREADS] -t [DURATION]
Bash script to run multiple iperf3 UDP streams
echo "UDP iperf test - 10 streams"
for i in `seq 0 9`;
do
iperf3 -B 10.0.100.35 -c 192.168.50.3 --logfile ~/gcpvm_client-521$i.log -u -b 1G -l 1390 -t10 -p 521$i &
done
Bash script to run multiple iperf3 TCP streams
echo "UDP iperf test - 10 streams"
for i in `seq 0 9`;
do
iperf3 -B 10.0.100.35 -c 192.168.50.3 --logfile ~/gcpvm_client-521$i.log -b 1G -l 1390 -t10 -p 521$i &
done
While the iperf3 test is running, monitor the CPU load on both of the devices.
If the CPU load is close to 100%, CPU is a bottleneck for one iperf3 thread.
In this case, use the Netperf tool, because it supports multiple CPUs.
If you can't run Netperf, then you can you can start multiple iPerf3 servers
and clients on different terminals and different ports simultaneously.
Analyze the test results
Perform the following steps.
Check iperf3 client results for bandwidth and packet loss.
Check iperf3 server results for any out-of-order packets.
Perform packet capture analysis.
Run the following command to convert the pcap file to a text file.
tcpdump -A -[PCAP-FILENAME].pcap > [TXT-FILENAME].txt
Run the following command to get the total of packets and out-of-order
packets.
grep -e "Total" -A1 pcap [TXT-FILENAME]
The output is the following:
gcpvm-send-5210.txt:Total UDP packets: 874032
gcpvm-send-5210.txt:Total out-of-order packets: 0, missing packets: 0
gcpvm-send-5211.txt:Total UDP packets: 791218
gcpvm-send-5211.txt:Total out-of-order packets: 0, missing packets: 0
gcpvm-send-5212.txt:Total UDP packets: 961510
gcpvm-send-5212.txt:Total out-of-order packets: 0, missing packets: 0
gcpvm-send-5213.txt:Total UDP packets: 961517
gcpvm-send-5213.txt:Total out-of-order packets: 0, missing packets: 0
gcpvm-send-5214.txt:Total UDP packets: 961501
gcpvm-send-5214.txt:Total out-of-order packets: 0, missing packets: 0
gcpvm-send-5215.txt:Total UDP packets: 961521
gcpvm-send-5215.txt:Total out-of-order packets: 0, missing packets: 0
gcpvm-send-5216.txt:Total UDP packets: 889932
gcpvm-send-5216.txt:Total out-of-order packets: 0, missing packets: 0
gcpvm-send-5217.txt:Total UDP packets: 961483
gcpvm-send-5217.txt:Total out-of-order packets: 0, missing packets: 0
gcpvm-send-5218.txt:Total UDP packets: 961479
gcpvm-send-5218.txt:Total out-of-order packets: 0, missing packets: 0
gcpvm-send-5219.txt:Total UDP packets: 961518
gcpvm-send-5219.txt:Total out-of-order packets: 0, missing packets: 0
The following analysis shows packet loss during a performance test:
$ grep -e "Total" -A1 onPrem-send-*.txt
The output is the following:
"Total" -A1 onPrem-send-*.txt
onPrem-send-5210.txt:Total UDP packets: 858698
onPrem-send-5210.txt:Total out-of-order packets: 0, missing packets: 5408
--
onPrem-send-5211.txt:Total UDP packets: 857667
onPrem-send-5211.txt:Total out-of-order packets: 0, missing packets: 4929
--
onPrem-send-5212.txt:Total UDP packets: 857126
onPrem-send-5212.txt:Total out-of-order packets: 0, missing packets: 5349
--
onPrem-send-5213.txt:Total UDP packets: 857424
onPrem-send-5213.txt:Total out-of-order packets: 0, missing packets: 5495
--
onPrem-send-5214.txt:Total UDP packets: 857139
onPrem-send-5214.txt:Total out-of-order packets: 0, missing packets: 4692
--
onPrem-send-5215.txt:Total UDP packets: 857175
onPrem-send-5215.txt:Total out-of-order packets: 0, missing packets: 4789
--
onPrem-send-5216.txt:Total UDP packets: 857104
onPrem-send-5216.txt:Total out-of-order packets: 0, missing packets: 5196
--
onPrem-send-5217.txt:Total UDP packets: 857122
onPrem-send-5217.txt:Total out-of-order packets: 0, missing packets: 5423
--
onPrem-send-5218.txt:Total UDP packets: 857383
onPrem-send-5218.txt:Total out-of-order packets: 0, missing packets: 5283
--
onPrem-send-5219.txt:Total UDP packets: 857313
onPrem-send-5219.txt:Total out-of-order packets: 0, missing packets: 4934
Access the device page to check the port throughput.
If the netstat output shows read/write errors, TCP/UDP bulk flow tuning
may be required.
If there are out-of-order packets, the packet captures should be
performed in the VPN Gateways for further analysis.
For more information
about performing packet captures in the VPN Gateways, open a support case .
If the iperf3 UDP test achieves the desired throughput, the issue must
be elsewhere and TCP tuning may be required.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
