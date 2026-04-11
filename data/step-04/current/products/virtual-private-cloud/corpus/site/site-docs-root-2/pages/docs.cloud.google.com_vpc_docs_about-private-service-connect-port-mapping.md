---
title: "About Private Service Connect port mapping \_|\_ Virtual Private Cloud \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping
  title: "About Private Service Connect port mapping \_|\_ Virtual Private Cloud \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Virtual Private Cloud
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
About Private Service Connect port mapping
This page provides an overview of Private Service Connect port mapping.
Private Service Connect port mapping lets consumer
virtual machine (VM) instances privately communicate with specific service ports
on specific producer VMs through a single Private Service Connect
endpoint.
A service consumer sends traffic to various client destination ports of the
endpoint. Private Service Connect uses producer-defined mappings
to forward traffic to the specified service port and producer VM. In some
networking contexts, this approach is also known as port forwarding.
Port mapping versus regular Private Service Connect
Managed services are often designed as clusters of VMs, where
different VMs represent separate instances of the same service. Every VM
exposes the same operations on the same ports. For example, a
database service might use port 1000 for database read operations and
port 2000 for database write operations. Consumer VMs communicate with
specific service instances by targeting ports on the VMs that are associated
with the service instance.
A regular (load balanced) connection between a
Private Service Connect endpoint
and a
service attachment
is not ideal for this situation. With a regular
Private Service Connect connection, consumer VMs send traffic to
one or more ports of the endpoint's IP address. All traffic is load balanced and
sent to any healthy producer VM that is configured as a backend for the port
that receives the traffic.
In contrast, Private Service Connect port mapping eliminates
load balancing. This approach lets consumer VMs target specific service ports
of specific producer VMs based on the client destination port that receives
the traffic.
Private Service Connect
port mapping forwards traffic from client destination ports of an endpoint
to service ports of producer VMs based on mapping that is
configured for a port mapping NEG (click to enlarge).
Private Service Connect port mapping lets consumer VMs communicate
with specific producer VMs through the following process:
The consumer VM sends packets to the endpoint's IP address, using a
designated client destination port. The client destination port acts as a
unique identifier for the packet's intended destination VM and port.
Private Service Connect uses the mapping of the client destination
port that receives the traffic to determine the packet's destination.
Private Service Connect forwards the traffic to its destination VM
and service port.
For example, in figure 1, packets are forwarded as follows:
Packets that are sent to client destination port 1001 of the endpoint are
forwarded to service port 1000 of vm-1 .
Packets that are sent to client destination port 1002 of the endpoint are
forwarded to service port 2000 of vm-1 .
Packets that are sent to client destination port 1003 of the endpoint are
forwarded to service port 1000 of vm-2 .
Packets that are sent to client destination port 1004 of the endpoint are
forwarded to service port 2000 of vm-2 .
Deployment
Deploying a Private Service Connect port mapping connection
differs from deploying a regular Private Service Connect
endpoint connection for published services in the following ways:
The service producer creates a port mapping service. Port mapping services
use port mapping network endpoint groups (NEGs) .
This configuration is similar to an internal passthrough Network Load Balancer, but traffic is
not load balanced.
The service producer
configures the port mapping NEG's network endpoints
to specify mappings from client destination ports of a
Private Service Connect endpoint to service ports of specific
producer VMs.
The service producer creates a service attachment that is associated with the
forwarding rule of their port mapping service.
The service producer shares client destination ports and their mappings with
the service consumer. This is not handled automatically by Google Cloud.
The service consumer configures workloads to communicate with managed
services by using the producer-defined port mappings.
Specifications
Private Service Connect port mapping has the following
specifications:
A Private Service Connect port mapping connection requires a
Private Service Connect endpoint in a consumer
VPC network that connects to a service attachment in a
producer VPC network.
The service attachment is associated with a port mapping service. Port
mapping services are configured similarly to internal passthrough Network Load Balancers, but traffic
isn't load balanced. Port mapping services are composed of the following:
A forwarding rule that
connects to a backend service. The forwarding rule must be configured for
either TCP or UDP traffic. The forwarding rule must be configured to
forward traffic for all client destination ports—for example, by
specifying --ports=ALL in the Google Cloud CLI. However, you only need
to define mappings in the port mapping NEG for the client destination
ports that you plan to use.
A backend service that is
configured to use a port mapping network endpoint group
(NEG) . Service
producers use the network endpoints of the port mapping NEG to define
unique mappings from client destination ports of the
Private Service Connect endpoint to a combination of
service port and producer VM.
Instead of load balancing traffic, the port mapping service forwards traffic
based solely on the mappings that are configured in the port mapping NEG.
The producer service must share the valid client destination ports and their
respective mappings with the consumer.
Private Service Connect doesn't share this information with
the consumer.
The consumer must configure their workloads to communicate with managed
services by using the producer-defined port mappings.
Consumers can enable global
access
for endpoints that connect to port mapping services if global access is
enabled on the service's forwarding rule.
Private Service Connect port mapping supports hybrid access.
A consumer's on-premises workload can reach producer VMs by accessing the
Private Service Connect endpoint through VLAN attachments for
Cloud Interconnect
or
Cloud VPN .
Private Service Connect port mapping supports propagated
connections
( Preview ) for endpoints that connect to
port mapping services.
Port mapping services can be published by using either IPv4 or IPv6
( Preview ) addresses. For more
information, see IP version
translation .
Limitations
Health checks are not supported on backend services that have port mapping
NEGs attached to them. Validation blocks a health check from being
configured if the backend service has a port mapping NEG.
Private Service Connect port mapping doesn't support
connecting multiple service attachments or forwarding rules to the same port
mapping backend service.
Port mapping services can't be accessed by
Private Service Connect backends.
Use load balancing with Private Service Connect port mapping
Private Service Connect port mapping forwards traffic based solely
on the client destination port that receives the traffic. If you want to use
load balancing with Private Service Connect port mapping, you can do
the following:
Ask the consumer to implement load balancing on the consumer side. Software
that runs on consumer VMs can send traffic to alternating client destination
ports.
Create a second service attachment in the producer VPC network
that connects to a load balancer instead of a port mapping service. Use the same
VMs that are in the port mapping NEG as backends in the load balancer's backend
service. The consumer can send traffic that needs to be load balanced to an
endpoint that is associated with the second service attachment.
Quotas
For information about quotas and limits related to
Private Service Connect port mapping, see
Quotas and limits .
Pricing
Pricing for Private Service Connect is described on the
VPC pricing page .
What's next
About accessing published services through endpoints
Create port mapping services
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
