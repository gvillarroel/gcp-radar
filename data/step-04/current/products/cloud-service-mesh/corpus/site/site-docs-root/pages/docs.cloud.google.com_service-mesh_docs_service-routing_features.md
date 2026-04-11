---
title: "Cloud Service Mesh with Google Cloud APIs supported features \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/docs/service-routing/features
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/docs
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/docs/service-routing/features
  title: "Cloud Service Mesh with Google Cloud APIs supported features \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Anthos Service Mesh and Traffic Director are now Cloud Service Mesh. For more information, see the Cloud Service Mesh overview .
Home
Documentation
Networking
Cloud Service Mesh
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Service Mesh with Google Cloud APIs supported features
This document summarizes the features available in Cloud Service Mesh.
Note: This guide only supports Cloud Service Mesh with Google Cloud APIs and
does not support Istio APIs. For more information see,
Cloud Service Mesh overview .
A Cloud Service Mesh consists of your applications, an xDS-compatible
data plane (the open source Envoy proxy or gRPC
proxyless data plane), and Cloud Service Mesh as your control plane.
In the following tables, the value N/A (not applicable) means that a feature
cannot be supported because it is not compatible with the particular
Cloud Service Mesh configuration. A blank space, without either a check
mark or N/A, means that the feature is not supported.
Some of these features are available only with the load balancing APIs. We
strongly recommend that you use the service routing APIs
and that you don't create new deployments using the load balancing
APIs.
Supported xDS version
Cloud Service Mesh uses open source xDS control plane APIs to configure
Envoy and proxyless gRPC clients. These clients act on behalf of your
application code to deliver Cloud Service Mesh's application networking
capabilities.
Only xDS v3 is supported. Migrate to xDS v3 if you are using xDS v2. For information
about how to migrate, see Migrate from xDS v2 to xDS v3 .
Platforms to run mesh services
You can run applications on the following platforms and adopt them into a global
service mesh that Cloud Service Mesh configures.
Feature
Supported
Compute Engine virtual machine (VM) instances
✔
Google Kubernetes Engine (GKE) container instances
✔
Kubernetes on Compute Engine container instances
✔
Services management
Services in a mesh that Cloud Service Mesh configures benefit from
the following:
Service discovery. When an application in your mesh wants to reach
another application, it can call on that service by name.
Backend autoscaling. Instances that run your application code scale up
or down dynamically based on your needs.
Automatic endpoint registration. As new instances are created or removed,
they are automatically associated with your service.
Feature
Supported
Automated deployment of sidecar proxies for Compute Engine VMs
✔
Automated injection of sidecar proxies for GKE Pods
✔
Service discovery based on hostname
✔
Instance autoscaling based on CPU utilization
✔
Instance autoscaling based on traffic load/serving capacity
(Compute Engine VMs in managed instance groups, or MIGs, only)
✔
Instance autohealing based on configurable health checks
✔
Automatic endpoint registration for Compute Engine VMs
✔
Automatic endpoint registration for GKE container instances/Pods
✔
API to programmatically add or remove endpoints
✔
Endpoints for your data plane traffic
Microservices use the data plane to reach services in your mesh and
outside of your mesh. Cloud Service Mesh lets you separate
application logic from networking logic so that your application only needs to
send requests to the data plane (for example, the sidecar proxy running
alongside the application). The data plane then sends requests to the
correct endpoint.
In the following table, applications described as being in the mesh are those
applications that use the Cloud Service Mesh-managed data plane to communicate
with other services. Those applications can send
traffic to in-mesh services and services outside of the mesh.
Feature
Supported
VM-based applications in the mesh
✔
Container-based applications in the mesh
✔
VM-based applications outside of the mesh
✔
Container-based applications outside of the mesh
✔
Applications running in on-premises data centers
✔
Applications in multicloud environments
✔
Data plane topologies
In the service mesh model, your applications use a data plane to communicate.
This data plane often consists of sidecar proxies deployed alongside your
applications. Cloud Service Mesh is highly flexible and supports data
plane topologies that fit your service networking needs.
Feature
Supported
Sidecar proxies running alongside applications
✔
Proxyless gRPC applications
✔
Middle proxies between two applications in a mesh
✔
Edge proxies at the boundary of your mesh
✔
Mesh spanning multiple GKE clusters and/or
Compute Engine VMs in multiple regions
✔
Programmatic, API-driven configuration
All configuration is exposed through our REST API and dashboard out-of-the-box,
letting you automate changes across large teams and manage changes
programmatically. Some features cannot be configured by using the Google Cloud console.
Feature
Supported
REST APIs
✔
Google Cloud console
✔
Google Cloud CLI
✔
Cloud Deployment Manager
✔
Terraform support
✔
Language support with proxyless gRPC applications
You can create proxyless gRPC applications that work with Cloud Service Mesh
using the following programming languages. The service mesh features supported
in various implementations and versions of gRPC are listed on GitHub .
Language
Supported
Java
✔
Go
✔
C++
✔
Python
✔
Ruby
✔
PHP
✔
Node
✔
Request protocols
Applications can use the following request protocols when they use the
Cloud Service Mesh-configured data plane to communicate.
Feature
Supported
HTTP
✔
HTTPS
✔
HTTP/2
✔
TCP
✔
gRPC
✔
Service security
Cloud Service Mesh supports service security with the following
configurations.
Feature
Envoy
gRPC
TLS with GKE Pods
✔
✔
mTLS with GKE Pods
✔
✔
Access control and authorization
✔
✔
Rate limiting with Google Cloud Armor
✔
Routing and traffic management
Cloud Service Mesh supports advanced traffic management policies that you
can use to steer, split, and shape traffic as it passes through your data plane.
Some advanced traffic management features are not available
with proxyless gRPC services, and none of the advanced traffic
management features are available with the target TCP proxy resource.
The following features are not supported when Cloud Service Mesh
handles TCP (non-HTTP(S)) traffic.
Feature
Supported with Envoy proxy
configured to handle HTTP(S) or gRPC traffic
Supported with proxyless
gRPC
HTTP/Layer 7 request routing based on suffix/prefix/full/regex match on:
• Hostname
✔
✔
• Path
✔
✔
• Headers
✔
✔
• Method
✔
N/A
• Cookies
✔
✔
• Request parameters
✔
N/A
Fault injection
✔
✔
Configurable timeouts
✔
N/A See Max stream duration .
Retries
✔
✔ Except per retry timeout
Redirects
✔
URI rewrites
✔
Request/response header transformations
✔
Traffic splitting
✔
✔
Traffic mirroring
✔
Outlier detection
✔
✔
Circuit breaking
✔
✔
Only maxRequests
Max stream duration
✔
✔
Load balancing
You can configure advanced load-balancing methods and algorithms to load balance
at the service, backend group (instance groups or network endpoint groups), and
individual backend or endpoint levels. For more information, see the
Backend services overview and
Advanced load balancing overview .
Feature
Supported with Envoy proxy
configured to handle HTTP(s), TCP, or gRPC traffic
Supported with proxyless
gRPC
Backend (instance group or network endpoint group) selection based on
region (prefer nearest region with healthy backend capacity)
✔
✔
Backend selection using rate-based (requests per second) balancing mode.
✔
Not supported with TCP (non-HTTP(S)) traffic.
✔
Backend selection based on utilization-based balancing mode
(VMs in Compute Engine instance groups only)
✔
✔
Configurable maximum capacity per backend (Compute Engine and
GKE only)
✔
✔
Backend selection based on configurable load-balancing policies.
For information about each built-in policy, see
localityLbPolicy .
Use a single built-in policy ; choose from the following options:
Round robin
Least request
Ring hash
Random
Original destination
Maglev
Use a single built-in policy ; choose from the following options:
Round robin
Least request
Ring hash
Use a
custom policy
Define a
list of preferred policies
Service resiliency
Cloud Service Mesh supports capabilities that help you improve the resiliency of
your services. For example, you can use Cloud Service Mesh to implement a
blue-green deployment pattern, canary testing, or circuit breaking
( Envoy ,
gRPC ).
Feature
Supported with Envoy proxy
configured to handle HTTP(s), TCP, or gRPC traffic
Supported with proxyless
gRPC
Service selection based on weight-based traffic splits
✔
✔
Circuit breaking
✔
✔
Only maxRequests
Service and backend capacity management
Cloud Service Mesh takes service and backend capacity into account to promote
optimal distribution of traffic across your services' backends. Cloud Service Mesh
is integrated with the Google Cloud infrastructure so that it automatically
collects capacity data. You can also set and configure capacity manually.
Feature
Supported
Automatically tracks backend capacity and utilization, based on CPU,
for VM instances in a managed instance group (MIG).
✔
Manual capacity and overrides for VM and container instances in MIGs
and network endpoint groups (NEGs) based on request rate.
✔
Manual capacity draining.
✔
Failover
Enterprise workloads generally rely on high-availability deployments to improve
service uptime. Cloud Service Mesh supports these types of deployments by
enabling multi-zone/multi-region redundancy.
Feature
Supported
Automatic failover to another zone within the same region that has
healthy backend capacity.
✔
Automatic failover to nearest region with healthy backend capacity.
✔
Health checks
Cloud Service Mesh supports centralized health checking to determine backend
health.
For reference information, see the Health checks overview .
Feature
Supported
gRPC health checks
✔
HTTP health checks
✔
HTTPS health checks
✔
HTTP/2 health checks
✔
TCP health checks
✔
Configurable health checks:
Port
Check intervals
Timeouts
Healthy and unhealthy thresholds
✔
Configurable request path (HTTP, HTTPS, HTTP/2)
✔
Configurable request string or path (TCP or SSL)
✔
Configurable expected response string
✔
Observability
Observability tools provide monitoring, debugging, and performance information
to help you understand your service mesh. The following capabilities are either
provided by default or configured in your data plane. Your application code
doesn't need to do anything special to generate this observability data.
The service health dashboard is available with proxyless gRPC services, but
you cannot configure data plane logging and tracing. Cloud Service Mesh
cannot configure a gRPC application's logging and tracing. You can
enable logging and tracing by following the instructions in the troubleshooting
sections or gRPC guides available on open source sites. For example, to enable
metrics collection and tracing in your proxyless gRPC services, you can use
OpenTelemetry .
Feature
Supported with proxies
Supported with proxyless gRPC services
Service health dashboard
✔
✔
Data plane logging
✔
✔
Data plane tracing
✔
✔
Session affinity
Client-server communications often involve multiple successive requests. In such
a case, it's helpful to route successive client requests to the same
backend or server. Cloud Service Mesh provides configurable options to
send requests from a particular client, on a best effort basis, to the same
backend as long as the backend is healthy and has capacity. For more information,
see the Backend services overview .
Feature
Supported with HTTP(S) proxies
Supported with TCP proxies
Supported with proxyless gRPC services
Client IP address
✔
✔
HTTP cookie
✔
N/A
HTTP header
✔
N/A
✔
Generated cookie (sets client cookie on first request)
✔
N/A
Network topologies
Cloud Service Mesh supports common Google Cloud network topologies.
Feature
Supported
Single network in a Google Cloud project
✔
Multiple meshes in a Google Cloud project
✔
Multiple gateways in a Google Cloud project
✔
Shared VPC (single network shared across multiple
Google Cloud projects)
✔
For a detailed explanation of how Shared VPC is supported with
Cloud Service Mesh, see
Limitations .
Compliance
Cloud Service Mesh is compliant with the following standards.
Compliance certification
Supported
HIPAA
✔
ISO 27001, ISO 27017, ISO 27018
✔
SOC1, SOC2, SOC3
✔
PCI DSS
✔
What's next
To learn more about Cloud Service Mesh, see the
Cloud Service Mesh overview .
To find uses cases and architecture patterns for proxyless gRPC services, see the
Proxyless gRPC services overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
