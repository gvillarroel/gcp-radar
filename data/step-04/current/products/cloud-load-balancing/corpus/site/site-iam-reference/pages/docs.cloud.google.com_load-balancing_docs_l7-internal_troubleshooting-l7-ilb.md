---
title: "Troubleshoot issues with internal Application Load Balancers \_|\_ Cloud Load\
  \ Balancing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/l7-internal/troubleshooting-l7-ilb
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/access-control/iam-conditions
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/l7-internal/troubleshooting-l7-ilb
  title: "Troubleshoot issues with internal Application Load Balancers \_|\_ Cloud\
    \ Load Balancing \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Troubleshoot issues with internal Application Load Balancers | Cloud Load Balancing | Google Cloud Documentation
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
Proxy Network Load Balancer (TCP/ SSL proxy)
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
Load balanced traffic does not have the source address of the original client
Load balancer doesn't connect to backends
Health check probes can't reach the backends
Clients cannot connect to the load balancer
Organizational policy restriction for Shared VPC
Load balancer doesn't distribute traffic evenly across zones
Unexplained 5xx errors
Limitations
Home
Documentation
Networking
Load Balancing
Guides
Was this helpful?
Send feedback
Troubleshoot issues with internal Application Load Balancers
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Troubleshoot common issues with Network Analyzer
Backends have incompatible balancing modes
Load balanced traffic does not have the source address of the original client
Load balancer doesn't connect to backends
Health check probes can't reach the backends
Clients cannot connect to the load balancer
Organizational policy restriction for Shared VPC
Load balancer doesn't distribute traffic evenly across zones
Unexplained 5xx errors
Limitations
This guide describes how to troubleshoot configuration issues
for a Google Cloud internal Application Load Balancer. Before following this
guide, familiarize yourself with the following:
Internal Application Load Balancer overview
Proxy-only subnets
Internal Application Load Balancer logging and
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
Load balanced traffic does not have the source address of the original client
This is expected behavior. An internal Application Load Balancer operates as an HTTP(S)
reverse proxy (gateway). When a client program opens a connection to the IP
address of an INTERNAL_MANAGED forwarding rule, the connection terminates at a
proxy. The proxy processes the requests that arrive over that connection. For
each request, the proxy selects a backend to receive the request based on the
URL map and other factors. The proxy then sends the request to the selected
backend. As a result, from the point of view of the backend, the source of an
incoming packet is an IP address from the region's proxy-only
subnet .
Load balancer doesn't connect to backends
The firewalls protecting your backend servers need to be configured to allow
ingress traffic from the proxies in the proxy-only subnet
range that you allocated to your internal HTTP(S) load
balancer's region.
The proxies connect to backends using the connection settings specified by the
configuration of your backend service. If these values don't match the
configuration of the server(s) running on your backends, the proxy cannot forward
requests to the backends.
Health check probes can't reach the backends
To verify that health check traffic reaches your backend VMs, enable
health check logging and search
for successful log entries.
Clients cannot connect to the load balancer
The proxies listen for connections to the load balancer's IP address and port
configured in the forwarding rule (for example, 10.1.2.3:80 ), and with the
protocol specified in the forwarding rule (HTTP or HTTPS). If your clients can't
connect, ensure that they are using the correct address, port, and protocol.
Ensure that a firewall isn't blocking traffic between your client instances
and the load balanced IP address.
Ensure that the clients are in the same region as the load balancer. Internal
HTTP(S) Load Balancing is a regional product, so all clients (and backends) must
be in the same region as the load balancer resource.
Organizational policy restriction for Shared VPC
If you are using Shared VPC and you cannot create a new internal Application Load Balancer
in a particular subnet, an organization policy might be the
cause. In the organization policy, add the subnet to the list of allowed
subnets or contact your organization administrator. For more information, see
constraints/compute.restrictSharedVpcSubnetworks .
Load balancer doesn't distribute traffic evenly across zones
You might observe an imbalance in your internal Application Load Balancer traffic across zones.
This can happen especially when there is low utilization (< 10%) of your
backend capacity.
Such behavior can affect overall latency due to traffic being sent to only a few
servers in one zone.
To even out the traffic distribution across zones, you can make the following
configuration changes:
Use the RATE balancing
mode with a
low max-rate-per-instance target capacity.
Use the LocalityLbPolicy backend traffic
policy
with a load balancing algorithm of LEAST_REQUEST .
Unexplained 5xx errors
For error conditions caused by a communications issue between the load balancer
proxy and its backends, the load balancer generates an HTTP status code
( 5xx ) and returns that status code to the client. Not all HTTP 5xx
errors are generated by the load balancer—for example, if a backend sends
an HTTP 5xx response to the load balancer, the load balancer relays that
response to its client. To determine whether an HTTP 5xx response was relayed
from a backend or if it was generated by the load balancer proxy, see the
proxyStatus field of the load balancer
logs .
Configuration changes to the internal Application Load Balancer, such as addition or
removal of a backend service, can result in a brief period of time where users
see the HTTP status code 503 . While these configuration changes
propagate to
Envoys globally,
you see log entries where the proxyStatus field matches the
connection_refused log string.
If HTTP 5xx status codes persist longer than a few minutes after you complete
the load balancer configuration, take the following steps to troubleshoot HTTP
5xx responses:
Verify that there is a firewall rule configured to allow health
checks .
In the
absence of one, load balancer logs typically have a proxyStatus matching
destination_unavailable , which indicates that the load balancer considers
the backend to be unavailable.
Verify that health check traffic reaches your backend VMs. To do this,
enable
health check logging and search
for successful log entries.
For new load balancers, the lack of successful health check log entries
doesn't mean that health check traffic is not reaching your backends. It
might mean that the backend's initial health state has not yet changed from
UNHEALTHY to a different state. You see successful health check log entries
only after the health check prober receives an HTTP 200 OK response from the
backend.
Verify that the keepalive configuration parameter for the HTTP server
software running on the backend instance is not less than the keepalive
timeout of the load balancer, whose value is fixed at 10
minutes (600 seconds) and is not configurable.
The load balancer generates an HTTP 5xx status code when the connection to
the backend has unexpectedly closed while sending the HTTP request or before
the complete HTTP response has been received. This can happen because the
keepalive configuration parameter for the web server software running on the
backend instance is less than the fixed keepalive timeout of the
load balancer. Ensure that the keepalive timeout configuration for HTTP
server software on each backend is set to slightly greater than 10 minutes
(the recommended value is 620 seconds).
Limitations
If you are having trouble using an internal Application Load Balancer with other
Google Cloud networking features, note the current compatibility
limitations .
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
