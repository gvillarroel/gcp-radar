---
title: "About Cloud Service Mesh \_|\_ Cloud Service Mesh v1.20 \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/service-mesh/v1.20/docs/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/v1.20/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/v1.20/docs/overview
  title: "About Cloud Service Mesh \_|\_ Cloud Service Mesh v1.20 \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

You are viewing legacy v1.20 Service Mesh documentation.
Available versions
Cloud Service Mesh latest Cloud Service Mesh 1.26 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.23 archive Cloud Service Mesh 1.22 archive Cloud Service Mesh 1.21 archive Cloud Service Mesh 1.20 archive Anthos Service Mesh 1.19 archive
Home
Documentation
Networking
Cloud Service Mesh
v1.20
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
About Cloud Service Mesh
Cloud Service Mesh is a suite of tools that helps you monitor and manage a reliable
service mesh on-premises or on Google Cloud.
What is a service mesh?
A service mesh is an architecture that enables managed, observable, and secure
communication across your services, letting you create robust enterprise
applications made up of many microservices on your chosen infrastructure.
Service meshes factor out all the common concerns of running a service such as
monitoring, networking, and security, with consistent, powerful tools, making it
easier for service developers and operators to focus on creating and managing
great applications for their users.
Cloud Service Mesh is powered by Istio ,
a highly configurable and powerful open source service mesh platform, with
tools and features that enable industry best practices. Cloud Service Mesh is
deployed as a uniform layer across your entire infrastructure. Service
developers and operators can use its rich feature set without making changes to
application code.
Architecturally, a service mesh consists of one or more control planes and a
data plane. The service mesh monitors all traffic through a proxy. On Kubernetes,
the proxy is deployed by a
sidecar pattern
to the microservices in the mesh. This pattern decouples application or business
logic from network functions, and enables developers to focus on the features
that the business needs. Service meshes also let operations teams and
development teams decouple their work from one another.
How can Cloud Service Mesh help me?
With Cloud Service Mesh, you get an GKE Enterprise tested and supported
distribution of Istio, letting you create and deploy a service mesh on
GKE on Google Cloud and other
platforms
with full Google support.
Features
Cloud Service Mesh has a suite of features and tools that help you observe and
manage secure, reliable services in a unified way.
Note: Some features, such as Cloud Service Mesh certificate authority and the
Cloud Service Mesh dashboards in the Google Cloud console aren't available on
all GKE Enterprise environments. To learn about the service mesh features
supported on each environment, see
In-cluster control plane supported features .
Traffic management
Cloud Service Mesh controls the flow of traffic between services, into the mesh
(ingress), and to outside services (egress). You configure and deploy
Istio-compatible custom resources
to manage this traffic at the application (L7) layer. For example, with the
custom resources, you can:
Create canary and
blue-green
deployments.
Provide fine-grained control over specific routes for services.
Configure load balancing
between services.
Set up circuit breakers .
Cloud Service Mesh maintains a service registry of all services in the mesh by
name and by their respective endpoints. It maintains the registry to manage the
flow of traffic (for example, Kubernetes Pod IP addresses). By using this
service registry, and by running the proxies side-by-side with the services, the
mesh can direct traffic to the appropriate endpoint.
Observability insights
The Cloud Service Mesh pages in the Google Cloud console provide the following
insights into your service mesh:
Service metrics and logs for HTTP traffic within your mesh's
GKE cluster are automatically ingested to Google Cloud.
Preconfigured service dashboards give you the information you need to understand
your services.
In-depth telemetry—powered by Cloud Monitoring ,
Cloud Logging , and Cloud Trace —lets you
dig deep into your service metrics and logs. You can filter and slice your
data on a wide variety of attributes.
Service-to-service relationships at a glance help you understand who connects to
each service and the services that each service depends on.
You can quickly see the communication security posture not only of your service,
but its relationships to other services.
Service level objectives (SLOs) give you insight into the health of your
services. You can easily define an SLO and alert on your own standards of
service health.
Learn more about Cloud Service Mesh's observability features in our
Observability guide .
Security benefits
Mitigates risk of replay or impersonation attacks that use stolen credentials.
Cloud Service Mesh relies on mutual TLS (mTLS) certificates to authenticate
peers, rather than bearer tokens such as
JSON Web Tokens (JWT).
Ensures encryption in transit. Using mTLS for authentication also ensures that
all TCP communications are encrypted in transit.
Ensures that only authorized clients can access a service with sensitive data,
irrespective of the network location of the client and the application-level
credentials.
Mitigates the risk of user data breach within your production network.
You can ensure that insiders can only access sensitive data through
authorized clients.
Identifies which clients accessed a service with sensitive data.
Cloud Service Mesh access logging captures the mTLS identity of the client in
addition to the IP address.
All in-cluster control plane components and proxies use
FIPS 140-2 validated encryption
modules.
Learn more about Cloud Service Mesh's security benefits and features in our
Security guide .
Deployment options
You have the following deployment options in Cloud Service Mesh:
Managed Cloud Service Mesh
In-cluster control plane
Managed Anthos Service Mesh
Managed Cloud Service Mesh consists of the managed control plane and the managed data
plane. With managed Cloud Service Mesh, Google handles upgrades, scaling, and
security for you, minimizing manual user maintenance. With the
managed data plane enabled, Google installs an in-cluster controller that manages
the sidecar proxies for you.
The following diagram shows the Cloud Service Mesh components and features for
managed Cloud Service Mesh:
For information on setting up or migrating
to a managed Cloud Service Mesh, see
Provision managed Cloud Service Mesh .
In-cluster control plane
The following diagram shows the Cloud Service Mesh components and features
for the in-cluster control plane and sidecar proxies.
For information on installing an in-cluster Cloud Service Mesh, see
Install Cloud Service Mesh .
What's next?
Install Cloud Service Mesh
Configure transport security
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
