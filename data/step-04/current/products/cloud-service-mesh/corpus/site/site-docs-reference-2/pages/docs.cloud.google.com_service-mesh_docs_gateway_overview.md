---
title: "Overview \_|\_ Cloud Service Mesh \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/docs/gateway/overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/docs/gateway/overview
  title: "Overview \_|\_ Cloud Service Mesh \_|\_ Google Cloud Documentation"
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
Overview
Cloud Service Mesh provides service networking capabilities to your
applications, including advanced traffic management, observability, and security.
However, configuring and operating a service mesh is a complex task. This page
describes configuring Cloud Service Mesh with the Kubernetes
Gateway APIs. These APIs are designed to simplify and improve your overall mesh
configuration experience.
The Kubernetes Gateway APIs for Mesh let you configure Cloud Service Mesh for
both proxyless gRPC and Envoy proxy deployments. The Gateway API for Mesh model
enables several key benefits:
Gateway APIs provide a single, consistent interface for managing both ingress
(north-south) and service mesh (east-west) traffic within your Kubernetes
cluster.
Service meshes enable advanced traffic routing patterns. Gateway APIs allow
you to design and manage complex routing rules.
With Gateway APIs, developers can focus on defining high-level routing rules
and policies to their microservice without needing in depth knowledge of the
underlying service mesh implementation.
The API is designed to be extensible, allowing for future enhancements and
support for new protocols and use cases.
Gateway APIs have strong community backing and are supported by a growing
ecosystem of service mesh providers and tools.
The GAMMA initiative work for
supporting service mesh use cases has been part of the Standard Channel since
v1.1.0 and is considered GA.
The spec
proposes that an application owner should configure traffic rules for a mesh
service by configuring a Route resource (sometimes referred to as xRoute )
with a Kubernetes Service resource as parentRef . The approach depends on
Kubernetes Service 's "frontend" and "backend" roles as defined in
GEP-1324: Service Mesh in Gateway API ,
where the "frontend" role is used as a parentRef and the "backend" role of
Service is used as a backendRef . The conformant implementation uses the
Service name to match traffic and backendRef endpoints for the canonical IP
addresses.
Gateway API for Mesh
Gateway API , a Kubernetes
project, focuses on Layer 4 and 7 routing within Kubernetes. It succeeds Ingress,
Load Balancing, and Service Mesh APIs. Designed to be versatile, descriptive,
and role-centric, its configurations are primarily in the Routing layer.
Protocol-specific resources like HTTPRoute and GRPCRoute enable advanced
ingress and mesh routing.
The GAMMA Initiative (Gateway API
for Service Mesh) defines how Gateway API may also be used for inter-service
or East/West traffic
within the same cluster. GAMMA aims to establish how to use the Gateway API to
configure a service mesh with minimal modifications to the Gateway API while
upholding its role-oriented
nature. GAMMA also emphasizes the importance of promoting consistency among
various service mesh implementations of the Gateway API, regardless of their
underlying technology or proxy.
GAMMA leverages existing extensibility points in the Gateway API spec, requiring
no API changes or new resources. This is done by extending the route resource
definitions ( GRPCRoute
or HTTPRoute in the
Gateway API) to signal the service mesh use-case, specifically by associating
the route resources with Service resources as described in
Gateway API for Service Mesh .
The following example illustrates the mesh use-case in the use of HTTPRoute:
apiVersion: gateway.networking.k8s.io
kind: HTTPRoute
metadata:
name: echo-route
spec:
parentRefs:
- kind: Service
group: ""
name: echo-service
rules:
- backendRefs:
- name: echo-v1
port: 80
weight: 9
- backendRefs:
- name: echo-v2
port: 80
weight: 1
The HTTPRoute references a Service as its parentRef , which signals that the
HTTPRoute route is configured for service mesh use case. In the previous example,
the echo-service Service is specified as the parentRef , which means the
HTTPRoute is attached to the frontend of echo-service. Any traffic sent to
echo-service by a client is routed according to the HTTPRoute echo-route.
GRPCRoute is another Kubernetes Gateway API resource, which is used to route
gRPC traffic to Kubernetes services. Users choose to use GRPCRoute instead of
HTTPRoute when they want to specifically route gRPC traffic and take advantage
of features tailored for gRPC, such as gRPC method and service matching.
The following example illustrates the use of GRPCRoute:
apiVersion: gateway.networking.k8s.io
kind: GRPCRoute
metadata:
name: echo-route
spec:
parentRefs:
- kind: Service
group: ""
name: echo-service
rules:
- matches:
- method:
service:echo_basic.grpcecho.GrpcEcho
method: Echo
backendRefs:
- name: grpc-infra-backend-v1
port: 8080
- matches:
- method:
service:echo_basic.grpcecho.GrpcEcho
method: EchoTwo
backendRefs:
- name: grpc-infra-backend-v2
port: 8080
Just like the HTTPRoute example, this GRPCRoute is configured for service mesh
use cases. Any traffic sent to xds:///echo-service.default.svc.cluster.local:8080
by a proxyless gRPC client is routed according to the GRPCRoute echo-route. The
route rules in this example match to a gRPC method and route the traffic to a
specific backendRef . GRPCRoutes can also be used to route requests from
proxied clients with sidecar injections, like Envoy, when the xds:/// prefix
is dropped.
Note: With Kubernetes Gateway API for Mesh, all services within the
Cloud Service Mesh are required to reside in a single cluster.
What's next
Prepare a gateway
Gateway Reference
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
