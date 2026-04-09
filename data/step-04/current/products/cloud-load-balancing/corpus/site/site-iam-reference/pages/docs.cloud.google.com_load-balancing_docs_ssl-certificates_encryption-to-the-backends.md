---
title: "Encryption from the load balancer to the backends \_|\_ Cloud Load Balancing\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/ssl-certificates/encryption-to-the-backends
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/access-control/iam-conditions
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/ssl-certificates/encryption-to-the-backends
  title: "Encryption from the load balancer to the backends \_|\_ Cloud Load Balancing\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Encryption from the load balancer to the backends | Cloud Load Balancing | Google Cloud Documentation
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
Encryption in all Google Cloud regions
Encryption between proxy load balancers and backends Secure backend protocol use cases
Secure backend protocol considerations
Secure frontend protocols
Home
Documentation
Networking
Load Balancing
Guides
Was this helpful?
Send feedback
Encryption from the load balancer to the backends
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Encryption in all Google Cloud regions
Encryption between proxy load balancers and backends Secure backend protocol use cases
Secure backend protocol considerations
Secure frontend protocols
Encryption in all Google Cloud regions
All VM-to-VM traffic within a VPC network and peered
VPC networks is encrypted.
Encryption between proxy load balancers and backends
For some proxy load balancers (see table 1), Google automatically encrypts
traffic to the backends that reside within Google Cloud VPC
networks. This is called automatic network-level encryption .
Automatic network-level encryption is only applicable to communications with
these types of backends:
Instance groups
Zonal NEGs ( GCE_VM_IP_PORT endpoints)
In addition, Google Cloud provides secure protocol options to
encrypt communication with the backend
service .
Some Google Cloud load balancers use Google Front Ends
(GFEs) as the
client to the backends whereas others use the open source Envoy
proxy .
In all cases, the load balancer supports the cipher suites listed in
RFC 8446, section 9.1
for TLS 1.3. For TLS 1.2 and earlier, the load balancer supports the cipher suites
associated with the COMPATIBLE
SSL policy profile .
The following table provides a summary of the proxy load balancers that encrypt traffic to the backends.
Table 1. Communications between load balancers and backends
Proxy load balancer
Proxy (client to the backend)
Automatic network-level encryption
Backend service protocol options
Global external Application Load Balancer
GFE (with Envoy software for advanced routing features)
HTTP, HTTPS, and HTTP/2
Choose HTTPS or HTTP/2 if you require auditable encryption in transit to
the backends.
Classic Application Load Balancer
GFE
HTTP, HTTPS, and HTTP/2
Choose HTTPS or HTTP/2 if you require auditable encryption in transit to
the backends.
Regional external Application Load Balancer
Envoy proxy
HTTP, HTTPS, and HTTP/2
Choose HTTPS or HTTP/2 if you require auditable encryption in transit to
the backends.
Regional internal Application Load Balancer
Envoy proxy
HTTP, HTTPS, and HTTP/2
Choose HTTPS or HTTP/2 if you require auditable encryption in transit to
the backends.
Cross-region internal Application Load Balancer
Envoy proxy
HTTP, HTTPS, and HTTP/2
Choose HTTPS or HTTP/2 if you require auditable encryption in transit to
the backends.
Global external proxy Network Load Balancer
GFE (with Envoy software for advanced routing features)
SSL or TCP
Choose SSL for the backend service protocol if you require auditable
encryption in transit to the backends.
Classic proxy Network Load Balancer
GFE
SSL or TCP
Choose SSL for the backend service protocol if you require auditable
encryption in transit to the backends.
Regional external proxy Network Load Balancer
Envoy proxy
TCP
Regional internal proxy Network Load Balancer
Envoy proxy
TCP
Cross-region internal proxy Network Load Balancer
Envoy proxy
TCP
Cloud Service Mesh
Client-side proxy
HTTPS and HTTP/2
Secure backend protocol use cases
A secure protocol to connect to backend instances is recommended in the
following cases:
When you require an auditable, encrypted connection from the load balancer (or
Cloud Service Mesh) to the backend instances.
When the load balancer connects to a backend instance that is outside of
Google Cloud (with an internet
NEG ). Communication
to an internet NEG backend might transit the public internet. When the load
balancer connects to an internet NEG, the public CA-signed certificate must
meet the validation
requirements .
Secure backend protocol considerations
When using a secure backend service protocol, keep the following in mind:
Your load balancer's backend instances or endpoints must serve using the same
protocol as the backend service. For example, if the backend service protocol
is HTTPS, the backends must be HTTPS servers.
If the backend service protocol is HTTP/2, your backends must use TLS. For
configuration instructions, see the documentation for the software running
on your backend instances or endpoints.
You must install private keys and certificates on your backend instances or
endpoints in order for them to function as HTTPS or SSL servers. These
certificates don't need to match the load balancer's frontend SSL
certificates. For installation instructions, see the documentation for the
software running on your backend instances or endpoints.
With the exception of HTTPS load balancers with internet NEG
backends , load balancers
don't use the Server Name Indication (SNI) extension for connections to the
backend.
When a load balancer connects to backends that are within Google Cloud,
the load balancer accepts any certificate your backends present. In this case,
the load balancer performs only minimum certificate validation.
For example, certificates are treated as valid even in the following
circumstances:
The certificate is self-signed.
The certificate is signed by an unknown certificate authority (CA).
The certificate has expired or is not yet valid.
The CN and subjectAlternativeName attributes don't match a
Host header or DNS PTR record.
For RSA certificates, starting April 28, 2025, the load balancer will only
accept RSA certificates that have the X509v3 Key Usage extension present and
include both the Digital Signature and Key Encipherment parameters. For more
information, see the associated release note on January 24,
2025 .
Secure frontend protocols
When you use a target HTTPS or target SSL proxy as part of your configuration,
Google Cloud uses a secure frontend protocol.
External Application Load Balancers and external proxy Network Load Balancers use Google's
BoringCrypto library. For FIPS 140-2 details, see NIST Cryptographic Module
Validation Program Certificate #3678 .
Internal Application Load Balancers use Google's BoringSSL library. For FIPS 140-2
details, see the Envoy documentation .
Google builds Envoy proxies for internal Application Load Balancers in FIPS compliant
mode.
Cloud Service Mesh supports Envoy proxies that are built in FIPS-compliant
mode.
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
