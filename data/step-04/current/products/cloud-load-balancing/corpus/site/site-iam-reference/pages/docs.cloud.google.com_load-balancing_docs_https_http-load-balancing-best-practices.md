---
title: "External Application Load Balancer performance best practices \_|\_ Cloud\
  \ Load Balancing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/https/http-load-balancing-best-practices
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/access-control/iam-conditions
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/https/http-load-balancing-best-practices
  title: "External Application Load Balancer performance best practices \_|\_ Cloud\
    \ Load Balancing \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

External Application Load Balancer performance best practices | Cloud Load Balancing | Google Cloud Documentation
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
Place backends close to clients
Enable caching with Cloud CDN
Forwarding rule protocol selection
Backend service protocol selection
Recommended connection duration
Balancing mode selection criteria
Configure session affinity
Home
Documentation
Networking
Load Balancing
Guides
Was this helpful?
Send feedback
External Application Load Balancer performance best practices
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Place backends close to clients
Enable caching with Cloud CDN
Forwarding rule protocol selection
Backend service protocol selection
Recommended connection duration
Balancing mode selection criteria
Configure session affinity
Cloud Load Balancing provides
mechanisms to distribute user traffic to multiple instances of an application.
They do this by spreading the load across application instances and delivering
optimal application performance to end users. This page describes some best
practices to ensure that the load balancer is optimized for your application. To
ensure optimal performance, we recommend benchmarking your application's traffic
patterns.
Place backends close to clients
The closer your users or client applications are to your workloads (load
balancer backends), the lower the network latency between them. Therefore,
create your load balancer backends in the region closest to where you anticipate
your users' traffic to arrive at the Google frontend. In many cases, running
your backends in multiple regions is necessary to minimize latency to clients in
different parts of the world.
For more information, see the following topics:
Traffic distribution for
external Application Load Balancers
Best practices for Compute Engine region
selection
Enable caching with Cloud CDN
Turn on Cloud CDN and caching as part of your default,
global external Application Load Balancer configuration. For more information, see
Cloud CDN .
When you enable Cloud CDN, it might take a few minutes before responses
begin to be cached. Cloud CDN caches only responses with cacheable
content . If responses for a URL aren't being
cached, check which response headers are being returned for that URL, and how
cacheability is configured for your backend. For
more details, see Cloud CDN
troubleshooting .
Forwarding rule protocol selection
For the global external Application Load Balancer and the classic Application Load Balancer ,
we recommend HTTP/3 which is an internet protocol built on top
of IETF QUIC .
HTTP/3 is enabled by default in all major browsers, Android
Cronet , and
iOS .
To use HTTP/3 for your applications, ensure that UDP
traffic is not blocked or rate-limited on your network and that HTTP/3 was not
previously disabled on your
global external Application Load Balancers . Clients that don't
yet support HTTP/3, such as older browsers or networking libraries, won't be
impacted. For more information, see HTTP/3
QUIC .
For the regional external Application Load Balancer , we support
HTTP/1.1, HTTPS, and HTTP/2. Both HTTPS and HTTP/2 require some upfront
overhead to set up TLS.
Backend service protocol selection
Your choice of backend protocol (HTTP, HTTPS, or HTTP/2) impacts application
latency and the network bandwidth available for your application. For example,
using HTTP/2 between the load balancer and the backend instance can require
significantly more TCP connections to the instance than HTTP(S). Connection
pooling, an optimization that reduces the number of these connections with
HTTP(S), is not available with HTTP/2. As a result, you might see high
backend latencies because backend connections are made more frequently.
The backend service protocol also impacts how the traffic is encrypted in
transit . With
external HTTP(S) load balancers, all traffic going to backends that reside
within Google Cloud VPC networks is automatically encrypted. This is called
automatic network-level encryption. However, automatic network-level encryption
is only available for communications with instance groups and zonal NEG
backends. For all other backend types, we recommend you use secure
protocol options such as HTTPS and HTTP/2 to encrypt communication with the
backend service. For details, see Encryption from the load balancer to the
backends .
Recommended connection duration
Network conditions change and the set of backends might change based on load.
For applications which generate a lot of traffic to a single service, a long
running connection isn't always an optimal setup. Instead of using a single
connection to the backend indefinitely, we recommend that you choose a maximum
connection lifetime (for example, between 10 and 20 minutes)
and/or a maximum number of requests (for example, between 1000 and 2000
requests), after which a new connection is used for new requests. The
old connection is closed when all active requests using it are done.
This lets the client application benefit from changes in the set of backends,
which include the load balancer's proxies and any network reoptimization that's
required to serve the clients.
Balancing mode selection criteria
For better performance, consider choosing the backend group for each new request
based on which backend is the most responsive. This can be achieved by using the
RATE balancing mode. In this case, the backend group with the lowest average
latency over recent requests, or, for HTTP/2 and HTTP/3, the backend group with
the fewest outstanding requests, is chosen.
The UTILIZATION balancing mode applies only to instance group backends and
distributes traffic based on the utilization of VM instances in an instance
group.
Configure session affinity
In some cases, it might be beneficial for the same backend to handle requests
that are from the same end users, or related to the same end user, at least for
a short period of time. This can be configured by using session affinity , a
setting configured on the backend service. Session affinity controls the
distribution of new connections from clients to the load balancer's backends.
You can use session affinity to ensure that the same backend handles requests
from the same resource, for example, related to the same user account or from
the same document.
Session affinity is specified for the entire backend service resource, and not
on a per backend basis. However, a URL map can point to multiple backend
services. Therefore, you don't have to use just one session affinity type for
the load balancer. Depending on your application, you can use different backend
services with different session affinity settings. For example, if a part of
your application is serving static content to many users, it is unlikely to
benefit from session affinity. You would use a
Cloud CDN -enabled backend service to serve cached
responses instead.
For more information, see session
affinity .
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
