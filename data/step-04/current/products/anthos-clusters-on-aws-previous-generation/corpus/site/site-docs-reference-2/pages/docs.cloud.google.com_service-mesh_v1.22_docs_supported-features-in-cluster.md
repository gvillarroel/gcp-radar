---
title: "In-cluster control plane supported features \_|\_ Cloud Service Mesh v1.22\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/v1.22/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster
  title: "In-cluster control plane supported features \_|\_ Cloud Service Mesh v1.22\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

You are viewing archived v1.22 Service Mesh documentation.
Available versions
Cloud Service Mesh latest Cloud Service Mesh 1.26 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.23 archive Cloud Service Mesh 1.22 archive Cloud Service Mesh 1.21 archive Cloud Service Mesh 1.20 archive Anthos Service Mesh 1.19 archive
Home
Documentation
Networking
Cloud Service Mesh
v1.22
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
In-cluster control plane supported features
This page describes features that are supported in Cloud Service Mesh
1.22.8 with an in-cluster control plane. To see the supported
features for Cloud Service Mesh 1.22.8 with a managed control
plane instead, see
Managed control plane .
Supported versions
Support for Cloud Service Mesh follows the
GKE Enterprise Version Support Policy .
For managed Cloud Service Mesh with a TRAFFIC_DIRECTOR control plane implementation , Google always supports this control plane.
For managed Cloud Service Mesh with an ISTIOD control plane implementation , Google supports the current Cloud Service Mesh
versions available in each
release channel .
For self-installed in-cluster Cloud Service Mesh , Google supports the current and
previous two (n-2) minor versions of Cloud Service Mesh.
The following table shows the supported versions of self-installed in-cluster
Cloud Service Mesh and the earliest end-of-life (EOL) date for a version.
Release version
Release date
Earliest end of life date
1.22
July 25, 2024
April 25, 2025
1.21
June 4, 2024
March 4, 2025
1.20
February 8, 2024
November 8, 2024
If you are on an unsupported version of Cloud Service Mesh, then you must upgrade to
Cloud Service Mesh 1.20 or later. For information on how to
upgrade, see Upgrade Cloud Service Mesh .
The following table shows the unsupported versions of Cloud Service Mesh and their
end-of-life (EOL) date.
Release version
Release date
End-of-life date
1.19
October 31, 2023
Unsupported (July 31, 2024)
1.18
August 3, 2023
Unsupported (June 4, 2024)
1.17
April 4, 2023
Unsupported (February 8, 2024)
1.16
February 21, 2023
Unsupported (December 11, 2023)
1.15
October 25, 2022
Unsupported (August 4, 2023)
1.14
July 20, 2022
Unsupported (April 20, 2023)
1.13
March 30, 2022
Unsupported (February 8, 2023)
1.12
December 9, 2021
Unsupported (October 25, 2022)
1.11
October 6, 2021
Unsupported (July 20, 2022)
1.10
June 24, 2021
Unsupported (March 30, 2022)
1.9
March 4, 2021
Unsupported (December 14, 2021)
1.8
December 15, 2020
Unsupported (December 14, 2021)
1.7
November 3, 2020
Unsupported (December 14, 2021)
1.6
June 30, 2020
Unsupported (March 30, 2021)
1.5
May 20, 2020
Unsupported (February 17, 2021)
1.4
December 20, 2019
Unsupported (September 18, 2020)
For more information about our support policies, refer to
Getting support .
Platform differences
There are differences in supported features between
supported platforms .
The Other GKE Enterprise clusters columns refer to clusters
that are outside of Google Cloud, for example:
Google Distributed Cloud:
Google Distributed Cloud (software only) for VMware
Google Distributed Cloud (software only) for bare metal
This page uses Google Distributed Cloud where the same support is available on
both Google Distributed Cloud (software only) for VMware and
Google Distributed Cloud (software only) for bare metal, and the specific
platform where there are differences between the platforms.
GKE Enterprise on other public clouds:
GKE on AWS
GKE on Azure
GKE attached clusters - Third-party Kubernetes clusters that have
been registered to a fleet. Cloud Service Mesh is supported on the following
cluster types:
Amazon EKS clusters
Microsoft AKS clusters
In the following tables:
– indicates the feature is enabled by
default.
* – indicates the feature is supported for
the platform and can be enabled, as described in
Enabling optional features
or the feature guide linked in the feature table.
Compatible – indicates the feature or third-party tool will integrate or
work with Cloud Service Mesh, but is not fully supported by Google Cloud Support
and a feature guide is not available.
– indicates either the feature isn't
available or it isn't supported in Cloud Service Mesh 1.22.8.
The default and optional features are fully supported by Google Cloud
Support. Features not explicitly listed in the tables receive best-effort
support.
Base Images
Feature
GKE clusters on Google Cloud
Other GKE Enterprise clusters
Distroless proxy image
Security
Certificate distribution/rotation mechanisms
Feature
GKE clusters on Google Cloud
Other GKE Enterprise clusters
Workload certificate management
External certificate management on
ingress and egress gateways.
Certificate authority (CA) support
Feature
GKE clusters on Google Cloud
GKE Enterprise clusters on-premises
Other GKE Enterprise clusters
Cloud Service Mesh certificate authority
Certificate Authority Service
*
*
Istio CA (previously known as Citadel)
*
*
Plug in your own CA certificates
Supported by CA service and Istio CA
Supported by CA service and Istio CA
Supported by Istio CA
Cloud Service Mesh security features
In addition to supporting Istio security features, Cloud Service Mesh provides even
more capabilities to help you secure your applications.
Feature
GKE clusters on Google Cloud
Distributed Cloud
GKE Multi-Cloud
Other GKE Enterprise clusters
IAP integration
End-user authentication
Audit policies (preview)
*
Dry-run mode
Denial logging
Authorization policy
Feature
GKE clusters on Google Cloud
Other GKE Enterprise clusters
Authorization v1beta1 policy
Path templating
Authentication policy
Peer authentication
Feature
GKE clusters on Google Cloud
Other GKE Enterprise clusters
Auto-mTLS
mTLS PERMISSIVE mode
For information on enabling mTLS STRICT mode, see
Configuring transport security .
Request authentication
Feature
GKE clusters on Google Cloud
Other GKE Enterprise clusters
JWT authentication (Note 1)
Notes:
Third-party JWT is enabled by default.
Telemetry
Metrics
Feature
GKE clusters on Google Cloud
GKE Enterprise clusters on-premises
Other GKE Enterprise clusters
Cloud Monitoring (HTTP in-proxy metrics)
Cloud Monitoring (TCP in-proxy metrics)
Istio Telemetry API
Custom adapters/backends, in or out of process
Arbitrary telemetry and logging backends
Prometheus metrics export
to customer-installed Prometheus, Grafana, and Kiali dashboards
Compatible
Compatible
Compatible
Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard
The topology graph in the Google Cloud console no longer uses the
Mesh telemetry service as its data source. Although the data source for
the topology graph has changed, the UI remains the same.
Proxy request logging
Feature
GKE clusters on Google Cloud
GKE Enterprise clusters on-premises
Other GKE Enterprise clusters
Traffic logs
Access logs
*
*
*
Tracing
Feature
GKE clusters on Google Cloud
GKE Enterprise clusters on-premises
Other GKE Enterprise clusters
Cloud Trace
*
*
Jaeger tracing (allows use of customer-managed Jaeger)
Compatible
Compatible
Compatible
Zipkin tracing (allows use of customer-managed Zipkin)
Compatible
Compatible
Compatible
Note: You can configure third-party telemetry products (such as Jaeger, Zipkin,
and Grafana), but we cannot guarantee future compatibility and Cloud Support
cannot provide help managing them.
Networking
Traffic interception/redirection mechanism
Feature
GKE clusters on Google Cloud
Other GKE Enterprise clusters
Traditional use of iptables using init
containers with CAP_NET_ADMIN
Container Network Interface (CNI)
*
*
Protocol support
Services that are configured with Layer 7 capabilities for
the following protocols are not supported: WebSocket, MongoDB, Redis, Kafka,
Cassandra, RabbitMQ, Cloud SQL. You might be able to make the protocol work
by using TCP byte stream support. If TCP byte stream cannot support the protocol
(for example, Kafka sends a redirect address in a protocol-specific reply and
this redirect is incompatible with Cloud Service Mesh's routing logic), then the
protocol isn't supported.
Feature
GKE clusters on Google Cloud
Other GKE Enterprise clusters
IPv4
HTTP/1.1
HTTP/2
TCP byte streams (Note 1)
gRPC
IPv6
Notes:
Although TCP is a supported protocol for networking, TCP
metrics aren't collected or reported. Metrics are displayed only for HTTP
services in the Google Cloud console.
Envoy deployments
Feature
GKE clusters on Google Cloud
Other GKE Enterprise clusters
Sidecars
Ingress gateway
Egress directly out from sidecars
Egress using egress gateways
*
*
CRD support
Feature
GKE clusters on Google Cloud
Other GKE Enterprise clusters
Istio API support (exceptions below)
custom Envoy filters
Load balancer for the Istio ingress gateway
Feature
GKE clusters on Google Cloud
Other GKE Enterprise clusters
Third-party external load balancer
Google Cloud Internal load balancer
*
Not supported. See the links below.
For information on configuring load balancers, see the following:
Setting up your load balancer for Google Distributed Cloud (software only) for VMware
GKE on AWS:
Creating a load balancer
Expose an ingress gateway using an external load balancer
Kubernetes Gateway API (preview)
In Cloud Service Mesh v1.20 the Kubernetes Gateway API is available as a public
preview.
Feature
GKE clusters on Google Cloud
Other GKE Enterprise clusters
Ingress
Gateway with class: istio
HttpRoute using parentRef
Mesh traffic
Configuring Istio CRDs using the targetRef field
including AuthorizationPolicy, RequestAuthentication, Telemetry and WasmPlugin
Warning: Microsoft AKS attached and GKE on Azure clusters
require an additional step to use the Kubernetes Gateway API.
If you are using Microsoft AKS attached clusters or
GKE on Azure clusters, you must set the following annotation
for the gateway resource to configure health checks over TCP:
service.beta.kubernetes.io/port_80_health-probe_protocol : tcp
Otherwise, HTTP traffic won't be accepted.
Kubernetes Gateway API preview requirements
The Kubernetes Gateway API preview has the following requirements:
Use the default automated deployments behavior for Gateways.
Use the HttpRoute CRD for routing configurations. The HttpRoute must have
a parentRef pointing to a Gateway.
Don't use Istio Gateway
CRs and
Kubernetes Gateway API CRs
on the same cluster.
Load balancing policies
Feature
GKE clusters on Google Cloud
Other GKE Enterprise clusters
Round robin
Least connections
Random
Passthrough
Consistent hash
Locality
For more information on load balancing policies, see
Destination Rules .
Data plane
Feature
GKE clusters on Google Cloud
Other GKE Enterprise clusters
Sidecar
Ambient
Multi-cluster support
For multi-primary deployments of GKE clusters in different
projects, all the clusters must be in a
shared Virtual Private Cloud (VPC).
Network
Feature
GKE clusters on Google Cloud
GKE Enterprise clusters on-premises
GKE on AWS
GKE on Azure
Attached clusters
Single network
Multi-network
Notes:
For attached clusters, only multi-cluster meshes spanning a single platform
(Microsoft AKS, Amazon EKS) are supported at this time.
Deployment model
Feature
GKE clusters on Google Cloud
GKE Enterprise clusters on-premises
GKE Enterprise on other public clouds
Attached clusters
Multi-primary
Primary-remote
Notes on terminology:
A primary cluster is a cluster with a control plane. A single mesh can have
more than one primary cluster for high availability or to reduce latency.
In the Istio 1.7 documentation, a multi-primary deployment is referred to
as a replicated control plane.
A remote cluster is a cluster that connects to a control plane residing
outside of the cluster. A remote cluster can connect to a control plane
running in a primary cluster or to an external control plane.
Cloud Service Mesh uses a simplified definition of network based on general
connectivity. Workload instances are on the same network if they are able to
communicate directly, without a gateway.
User interface
Feature
GKE clusters on Google Cloud
Google Distributed Cloud
Google Distributed Cloud (software only) for bare metal
Other GKE Enterprise clusters
Cloud Service Mesh dashboards in the Google Cloud console
*
*
*
Cloud Monitoring
*
Cloud Logging
*
Cloud Trace
*
Note: On-premises clusters require GKE Enterprise version 1.11 or later.
For more information on upgrading see
Upgrading Google Distributed Cloud (software only) for VMware
or
Upgrading Google Distributed Cloud (software only) for bare metal .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
