---
title: "Troubleshoot internal passthrough Network Load Balancers \_|\_ Cloud Load\
  \ Balancing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/internal/troubleshooting-ilb
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/access-control/iam-conditions
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/internal/troubleshooting-ilb
  title: "Troubleshoot internal passthrough Network Load Balancers \_|\_ Cloud Load\
    \ Balancing \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Troubleshoot internal passthrough Network Load Balancers | Cloud Load Balancing | Google Cloud Documentation
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
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Load Balancing
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
Discover
Cloud Load Balancing overview
Choose a load balancer
Cloud Load Balancing resource model
Load balancer feature comparison
Get started
Roles and permissions
IAM Conditions for forwarding rules
Organization policy constraints
Overview
Use custom constraints
Application Load Balancer (HTTP/HTTPS)
Overview
External load balancer
Architecture overview
Request distribution overview
Set up global load balancer
Managed VM instance group backend
Cloud Storage (backend buckets)
External backend (internet NEG)
Cloud Run, App Engine, or Cloud Run functions backends (serverless NEG)
On-premises or other cloud backends (zonal and hybrid NEG)
Add capabilities
Traffic management overview
Set up traffic management
Set up HTTP-to-HTTPS redirect
Set up a load balancer with Shared VPC
Set up load balancer with cross-project backend service and backend bucket
Create custom headers in backend services
Custom error response
Overview
Configure custom error responses
Set up global load balancer (classic)
Terraform examples
Managed VM instance group backend
Cloud Storage (backend buckets)
External backend (internet NEG)
Cloud Run, App Engine, or Cloud Functions backends (serverless NEG)
On-premises or other cloud backends (zonal and hybrid NEG)
Migrate resources
Overview
Migrate to global external Application Load Balancer
Roll back to classic Application Load Balancer
Add capabilities
Traffic management overview
Create custom headers in backend services
Set up custom header and query parameter-based routing
Set up URL redirect
Set up HTTP-to-HTTPS redirect
Set up URL rewrite
Set up regional load balancer
Managed VM instance group backend
Cloud Storage (backend buckets)
Cloud Run backends (serverless NEG)
On-premises or other cloud backends (zonal and hybrid NEG)
External backend (internet NEG)
Add capabilities
Traffic management overview
Set up traffic management
Set up high availability
Set up HTTP-to-HTTPS redirect
Set up a load balancer with backend service using Shared VPC
Set up a load balancer with backend buckets using Shared VPC
Create custom headers in URL maps
Fail over to regional load balancers
Monitor and troubleshoot
Overview
Global load balancers
Regional load balancers
Troubleshooting
Best practices
Explore tutorials
Request routing to a multi-region external HTTPS load balancer
Faster web performance and improved web protection for load balancing
Deliver HTTP and HTTPS content over the same published domain
Optimize application latency with load balancing
Application capacity optimizations with global load balancing
Capacity management with load balancing
Internal load balancer
Architecture overview
Set up cross-region load balancer
Managed VM instance group backend
Cloud Storage (backend buckets)
On-premises or other cloud backends (zonal and hybrid NEG)
Cloud Run backends (serverless NEG)
Set up regional load balancer
Terraform examples
VM instance group backends
Cloud Run backends (serverless NEG)
Cloud Storage (backend buckets)
On-premises or other cloud backends (zonal and hybrid NEG)
External backend (internet NEG)
Add capabilities
Traffic management
Overview
Set up traffic management
Set up HTTP-to-HTTPS redirect
Create custom headers in URL maps
Set up regional internal load balancer with backend service using Shared VPC
Set up cross-region load balancer with backend buckets using Shared VPC
Set up a regional internal Application Load Balancer with backend buckets using Shared VPC
Service Directory registration
Load balancing and connected networks
Monitor and troubleshoot
View logs and metrics
Troubleshooting
Convert load balancer to IPv6
Use custom metrics
Load testing backends
Proxy Network Load Balancer (TCP/SSL proxy)
Overview
External load balancer
Architecture overview
Set up global load balancer
Global SSL proxy with VM instance group backends
Global TCP proxy with VM instance group backends
Set up global load balancer (classic)
Terraform examples
Global SSL proxy with VM instance group backends
Global TCP proxy with VM instance group backends
Set up regional load balancer
VM instance group backends
Zonal NEG backends
Hybrid connectivity (hybrid NEGs)
External backend (internet NEG)
Internal load balancer
Architecture overview
Set up cross-region load balancer
Managed VM instance group backends
On-premises or other cloud backends (zonal and hybrid NEG)
Set up regional load balancer
Managed VM instance group backends
Zonal NEG backends
Hybrid connectivity (hybrid NEGs)
External backend (internet NEG)
Add capabilities
Load balancing and connected networks
Monitor and troubleshoot
View logs and metrics
Convert load balancer to IPv6
Passthrough Network Load Balancer (TCP/UDP)
Overview
External load balancer
Backend service-based architecture
Traffic distribution concepts
Target pool-based architecture
Set up load balancer
VM instance group backends (TCP/UDP only)
VM instance group backends (multiple protocols)
Zonal NEG backends
Target pool-based load balancer
Add capabilities
Configure failover
Configure weighted load balancing
Migrate from target pools to backend services
Service Directory registration
Explore tutorials
Use UDP with network load balancers
Monitor and troubleshoot
View logs and metrics
Troubleshooting
Internal load balancer
Architecture overview
Traffic distribution concepts
Set up load balancer
Terraform examples
VM instance group backends
VM instance group backend for multiple protocols
Zonal NEG backends
Add capabilities
Configure failover
Zonal affinity
Load balancers as next hops
Overview
Set up load balancing for third-party appliances
Forwarding rules that use a common IP address
Service Directory registration
Load balancing and connected networks
Explore tutorials
Set up load balancer as next hop (with tags)
Deploy a hub-and-spoke network
Set up a load balancer with internal IPv6-only backends
Monitor and troubleshoot
View logs and metrics
Troubleshooting
Protocol forwarding
Overview
Set up protocol forwarding
Switch between a target instance and a backend service
Secure
SSL certificates
Overview
Use self-managed SSL certificates
Use Google-managed SSL certificates
Encryption to the backends
Troubleshooting
SSL policies
Overview
Use SSL policies
Mutual TLS
Frontend mTLS
Overview
Set up frontend mTLS with user-provided certificates
Set up frontend mTLS with a private CA
Backend mTLS
Overview
Set up backend authenticated TLS
Set up backend mTLS
Backend mTLS with managed workload identity
Overview
Set up backend mTLS using managed workload identity
Authorization policies
Overview
Set up policies for Application Load Balancers
Customize load balancer
Advanced load balancing optimizations
Backend buckets
Backend services
Connection draining
Firewall rules
Forwarding rules
Health checks
Overview
Use health checks
Internal DNS names
IPv6
Network endpoint groups
Overview
Hybrid connectivity NEGs
Internet NEGs
Serverless NEGs
Zonal NEGs
Overview
Set up zonal NEGs
Proxy-only subnets
Tags
Target pools
Target proxies
URL maps
Overview
Use URL maps
Operate and maintain
Audit logging information
Health check logging information
Clean up a load balancer setup
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
Troubleshoot common issues with Network Analyzer
Backends have incompatible balancing modes
Troubleshoot general connectivity issues Verify firewall rules
Verify that the Guest environment is running on the backend VM
Verify that backend VMs accept packets sent to the load balancer
Verify service IP address and port binding on the backend VMs
Check if the client VM is in the same region as the load balancer
Verify that health check traffic can reach backend VMs
Troubleshoot performance issues Verify server functionality
Verify network connectivity and latency
Identify problematic client-server combinations
Perform traffic capture and analysis
Do performance testing
Troubleshoot Shared VPC issues
Troubleshoot failover issues
Troubleshoot load balancer as next hop issues Connectivity issues
Invalid value for destination range
Troubleshoot logging issues
What's next
Home
Documentation
Networking
Load Balancing
Guides
Was this helpful?
Send feedback
Troubleshoot internal passthrough Network Load Balancers
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Troubleshoot common issues with Network Analyzer
Backends have incompatible balancing modes
Troubleshoot general connectivity issues Verify firewall rules
Verify that the Guest environment is running on the backend VM
Verify that backend VMs accept packets sent to the load balancer
Verify service IP address and port binding on the backend VMs
Check if the client VM is in the same region as the load balancer
Verify that health check traffic can reach backend VMs
Troubleshoot performance issues Verify server functionality
Verify network connectivity and latency
Identify problematic client-server combinations
Perform traffic capture and analysis
Do performance testing
Troubleshoot Shared VPC issues
Troubleshoot failover issues
Troubleshoot load balancer as next hop issues Connectivity issues
Invalid value for destination range
Troubleshoot logging issues
What's next
This guide describes how to troubleshoot configuration issues for a Google Cloud internal passthrough Network Load Balancer. Before investigating issues, familiarize yourself with
the following pages:
Internal passthrough Network Load Balancer overview
Traffic distribution for backend service-based internal passthrough Network Load Balancers
Internal passthrough Network Load Balancers as next
hops
Internal passthrough Network Load Balancer logging and
monitoring
Troubleshoot common issues with Network Analyzer
Network Analyzer
automatically monitors your VPC network configuration and detects
both suboptimal configurations and misconfigurations. It identifies network
failures, provides root cause information, and suggests possible resolutions. To
learn about the different misconfiguration scenarios that are automatically
detected by Network Analyzer, see Load balancer insights
in the Network Analyzer documentation.
Network Analyzer is available in the Google Cloud console as a part of
Network Intelligence Center.
Go to Network Analyzer
Backends have incompatible balancing modes
When creating a load balancer, you might see the error:
Validation failed for instance group INSTANCE_GROUP :
backend services 1 and 2 point to the same instance group
but the backends have incompatible balancing_mode. Values should be the same.
This happens when you try to use the same backend in two different load
balancers, and the backends don't have compatible balancing modes.
For more information, see the following:
Restrictions and guidance for instance
groups
Change the balancing mode of a load
balancer
Troubleshoot general connectivity issues
If you can't connect to your internal passthrough Network Load Balancer, check for the following common
issues.
Verify firewall rules
Ensure that ingress allow firewall
rules are defined to
permit health checks to backend VMs.
Ensure that ingress allow firewall rules allow traffic
to the backend VMs from clients.
Ensure that relevant firewall rules exist to allow traffic to reach the
backend VMs on the ports being used by the load balancer.
If you're using target tags for the firewall
rules , make
sure that the load balancer's backend VMs are tagged appropriately.
To learn how to configure firewall rules required by your internal passthrough Network Load Balancer,
see Configuring firewall
rules .
Verify that the Guest environment is running on the backend VM
If you can connect to a healthy backend VM, but cannot connect to the load
balancer, it might be that the Guest environment
(formerly, the Windows Guest Environment or Linux Guest Environment)
on the VM is either not running or is unable to communicate with the metadata
server ( metadata.google.internal , 169.254.169.254 ).
Check for the following:
Ensure that the Guest environment is installed and running on the
backend VM .
Ensure that the firewall rules within the guest operating system of the
backend VM ( iptables or Windows Firewall) don't block access to the
metadata server.
Verify that backend VMs accept packets sent to the load balancer
Each backend VM must be configured to accept packets sent to the load balancer.
That is, the destination of packets delivered to the backend VMs is the IP
address of the load balancer. Under most circumstances, this is done with
a local route.
For VMs created from Google Cloud images, the Guest
agent installs the local
route for the load balancer's IP address. Google Kubernetes Engine instances based
on Container-Optimized OS implement this by using
iptables instead.
On a Linux backend VM, you can verify the presence of the local route by
running the following command. Replace LOAD_BALANCER_IP
with the load balancer's IP address:
sudo ip route list table local | grep LOAD_BALANCER_IP
Verify service IP address and port binding on the backend VMs
Packets sent to an internal passthrough Network Load Balancer arrive at backend VMs with the
destination IP address of the load balancer itself. This type of load balancer
is not a proxy, and this is expected behavior.
The software running on the backend VM must be doing the following:
Listening on (bound to) the load balancer's IP address or any IP address
( 0.0.0.0 or :: )
Listening on (bound to) a port that's included in the load balancer's
forwarding rule
To test this, connect to a backend VM using either SSH or RDP. Then perform
the following tests using either curl , telnet , or a similar tool:
Attempt to reach the service by contacting it using the internal IP address
of the backend VM itself, 127.0.0.1 , or localhost.
Attempt to reach the service by contacting it using the IP address of the
load balancer's forwarding rule.
Check if the client VM is in the same region as the load balancer
If the client connecting to the load balancer is in another region, make sure
that global
access
is enabled.
Verify that health check traffic can reach backend VMs
To verify that health check traffic reaches your backend VMs, enable
health check logging and search
for successful log entries.
You can also verify that load balancer functionality is healthy by viewing the
"Healthy" state
for the backend.
If there are no healthy instances in the backend, make sure that the appropriate
health check is configured and each VM in the backend is listening on the
configured health check ports.
From a client in the same VPC network, run the following
command to verify that the backend VM is listening on a specific TCP port:
telnet SERVER_IP_ADDRESS PORT
Replace the following:
SERVER_IP_ADDRESS : The IP address of the backend VM.
PORT : The port that you configured for your health check.
By default, the health check port is 80 .
Alternatively, you can use SSH to connect the backend VM and run the following
command:
curl localhost: PORT
Again, replace PORT with the port that you configured for your health
check.
Another way to perform this test is to run the following command:
netstat -npal | grep LISTEN
In the output, check for the following:
<var>LB_IP_ADDRESS</var>:<var>PORT</var>
0.0.0.0:<var>PORT</var>
:::<var>PORT</var>
This does not determine whether routing is set up correctly to respond to the
load balancer's IP address. That's a separate problem with a similar
symptom. For routing, run the ip route list table local command and verify
that the load balancer's IP address is listed, as described in Verify that
backend VMs accept packets sent to the load balancer .
Troubleshoot performance issues
If you are noticing performance issues and increased latency, check for the
following common issues.
Verify server functionality
If all of the backend servers are responding to health checks, verify that
requests from the client are working properly when issued on the server
directly. For example, if the client is sending HTTP requests to the server
through the load balancer and there is no response or the response is
substantially slower than normal, issue the same HTTP request on each of the
backend servers and observe the behavior.
If any of the individual backend servers are not behaving correctly when the
request is issued from within the server itself, you can conclude that the
server application stack is not working properly. You can focus further
troubleshooting on the application itself. If all of the servers are behaving
correctly, the next step is to look at the client side and the network.
Verify network connectivity and latency
If all of the backend servers are responding to requests properly, verify
network latency. From a client VM, issue a constant ping command to each of the
servers , as follows:
ping SERVER_IP_ADDRESS
This test shows the built-in network latency and whether the network is dropping
packets. In some cases, firewall rules might be blocking ICMP traffic. If so,
this test fails to produce any result. Verify with your firewall rules
administrator whether this is the case.
If the ping command shows significantly higher latency than normal or
significant packet loss, open a Google Cloud support
case to investigate further.
Identify problematic client-server combinations
If the network ping test suggests low latency and no packet loss, the
next step is to identify which specific client-server combination, if any,
produces problematic results. You can do this by reducing the number of backend
servers by half until the number of servers reaches 1, while simultaneously
reproducing the problematic behavior (for example, high latency or no
responses).
If you identify one or more problematic client-server combinations, perform
traffic capture and analysis .
If no problematic client-server combination is identified, skip to
performance testing .
Perform traffic capture and analysis
If you identify a specific problematic combination of client-server, you can use
packet capture to pinpoint the part of the communication that is causing
delay or breakage. Packet capture can be done with tcpdump as follows:
Install tcpdump on the server.
Start tcpdump capture on the server.
From a client, issue a sample request, such as the following:
curl URL
Analyze the tcpdump output to identify the problem.
Do performance testing
If you don't identify any problematic client-server combinations and aggregate
performance of all clients and servers together is lower than expected, consider
the following tests:
One client and one server, without load balancing.
One client and one server, with load balancing.
Result : The combination of results from tests [1] and [2] identifies
whether the load balancer is causing the issue.
One client and multiple servers, with load balancing.
Result: Identify the performance limit of one client.
Multiple clients and one server, with load balancing.
Result : Identify the performance limit of one server.
Multiple clients and multiple servers, without load balancing.
Result: Identify the performance limit of the network.
When running a stress test with multiple clients and servers, client or server
resources (CPU, memory, I/O) might become bottlenecks and reduce the aggregate
results. Degraded aggregate results can happen even if each client and server is
behaving correctly.
Troubleshoot Shared VPC issues
If you are using Shared VPC and you cannot create a new
internal passthrough Network Load Balancer in a particular subnet, an organization policy might be
the cause. In the organization policy, add the subnet to the list of allowed
subnets or contact your organization administrator. For more information, refer
to the
constraints/compute.restrictSharedVpcSubnetworks
constraint.
Troubleshoot failover issues
If you've configured failover for an internal passthrough Network Load Balancer, use the following steps
to verify your configuration:
Ensure that you have configured ingress allow firewall rules to allow
health checks .
Make sure that you understand Backend selection and connection
tracking
and
Failover
concepts.
Make sure that you've designated at least one failover backend.
Review which backends are healthy using the Google Cloud console or
gcloud compute backend-services get-health so that you can determine which
VMs are eligible backends.
Make sure that the failover ratio is set appropriately.
We don't recommend using managed instance groups that have autoscaling enabled
in conjunction with failover because autoscaling changes the number of
primary backends, failover backends, or both. This can result in the set of
eligible backends changing unexpectedly because the failover ratio is fixed.
If a client VM is also a load-balanced backend VM, connections to the load
balancer's forwarding rule IP address are sent to the backend VM itself. For
more information, see Testing from a single
client .
Troubleshoot load balancer as next hop issues
When you set an internal passthrough Network Load Balancer to be a next
hop of a custom static route, the following issues
might occur:
Connectivity issues
If you cannot ping an IP address in the destination range of a route whose
next hop is a forwarding rule for an internal passthrough Network Load Balancer, note that a route
using this type of next hop might not process ICMP traffic depending on when
the route was created. If the route was created before May 15, 2021, it only
processes TCP and UDP traffic until August 16, 2021. Starting August 16, 2021,
all routes will automatically forward all protocol traffic
(TCP, UDP, and ICMP) regardless of when a route was created. If you don't want
to wait until then, you can enable ping functionality now by creating new
routes and deleting the old ones.
When using an internal passthrough Network Load Balancer as a next hop for a custom
static route, all traffic is delivered to the load balancer's
healthy backend VMs, regardless of the protocol configured for the load
balancer's internal backend service, and regardless of the port or ports
configured on the load balancer's internal forwarding rule.
Ensure that you have created ingress allow firewall rules that correctly
identify sources of traffic that should be delivered to backend VMs via the
custom static route's next hop. Packets that arrive on backend VMs preserve
their source IP addresses, even when delivered by way of a custom static
route.
Invalid value for destination range
The destination range of a custom static route can't be more specific than any
subnet route in your VPC network. If you receive the following
error message when creating a custom static route:
Invalid value for field 'resource.destRange': [ROUTE_DESTINATION].
[ROUTE_DESTINATION] hides the address space of the network .... Cannot change
the routing of packets destined for the network.
You cannot create a custom static route with a destination that exactly
matches or is more specific (with a longer mask) than a
subnet route . Refer to
applicability and order for further
information.
If packets go to an unexpected destination, remove
other routes in your VPC network with more specific
destinations. Review the routing order
to understand Google Cloud route selection.
Troubleshoot logging issues
If you configure logging for an internal passthrough Network Load Balancer, the following
issues might occur:
RTT measurements such as byte values might be missing in some of the logs
if not enough packets are sampled to capture RTT. This is more likely to happen
for low volume connections.
RTT values are available only for TCP flows.
Some packets are sent with no payload. If header-only packets are sampled,
the bytes value is 0 .
What's next
See
internal passthrough Network Load Balancer Logging and
Monitoring for information about configuring
Logging and Monitoring for
internal passthrough Network Load Balancers.
See internal passthrough Network Load Balancers and connected
networks
for information about accessing internal passthrough Network Load Balancers from peer networks
connected to your VPC network.
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
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
