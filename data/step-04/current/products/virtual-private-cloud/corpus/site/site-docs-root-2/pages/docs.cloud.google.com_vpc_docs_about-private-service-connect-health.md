---
title: "About Private Service Connect health for automatic cross-region failover \_\
  |\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health
  title: "About Private Service Connect health for automatic cross-region failover\
    \ \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
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
About Private Service Connect health for automatic cross-region failover
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Private Service Connect health lets service producers define health states that
support automatic cross-region failover for service consumers that use
Private Service Connect backends. These health states are based
on the aggregated health of the service producer's backends
(VMs or network endpoints), providing consumers a more accurate failover signal
than outlier detection, which infers health from response failures.
To enable cross-region failover, both the service producer and
consumer must use a multi-region deployment. When you configure
Private Service Connect health, the health state of each regional published service
is automatically propagated to the consumer's load
balancer. If a service instance in one region becomes unhealthy, the consumer's
load balancer stops routing traffic to that service and instead routes traffic
to a healthy service instance in an alternate region.
Deployment requirements
To use Private Service Connect health for automatic failover, both the service producer
and the service consumer must configure their resources for a multi-region
deployment, as described in this section. For more information about
requirements for load balancer and backend types, see
Specifications .
Producer configuration :
Deploy the service in each region. Each regional instance of the service must be configured on
a regional load balancer that
supports access by a backend .
Create a
service attachment to publish each regional instance of the service.
Consumer configuration :
Create a
Private Service Connect backend to access published services . The backend
must be based on a
load balancer that supports cross-region failover
and includes the following configuration:
A
Private Service Connect NEG in each region that points to that region's
service attachment
A global backend service that contains the NEG backends
The following diagram shows a multi-region deployment:
This example shows a consumer
global external Application Load Balancer that connects to a service that is
published in multiple regions. Accessing a multi-region service with
a supported global or cross-regional load balancer lets
the service consumer take advantage of Private Service Connect health for
automatic cross-region failover (click to enlarge).
Private Service Connect health components
Private Service Connect health uses the following components to support automatic
cross-region failover.
This diagram shows the key components of Private Service Connect health.
Health aggregation policies define conditions for health sources to be
considered healthy. Health states for individual health sources are
combined into a single state by a composite health check, and the result
is delivered to a health destination.
Health aggregation policy
A health aggregation policy is a resource that you create to define the
conditions that a backend service must meet to be considered healthy.
A policy aggregates the health states of a backend service's backends
(VMs in an instance group or network endpoints in a NEG), as determined by
regular health checks .
A backend service is considered healthy if two configurable conditions are met:
Percentage of healthy endpoints : The minimum percentage of backends
that must be healthy. The default is 60%.
Minimum number of healthy endpoints : The minimum number of backends that
must be healthy. The default value is 1.
For example, you can create a policy that specifies a backend service must have
at least 75% of its backends healthy and at least three healthy backends. If
the number of healthy backends falls below either of those thresholds, the
backend service is considered unhealthy.
Health source
A health source is a resource that makes the health of a single backend
service available for aggregation as part of a composite health check.
When you create a health source, you specify the following:
A backend service to monitor
A health aggregation policy that determines the backend service's health
The health source uses the conditions defined in the health aggregation policy
to determine the health state of the associated backend service.
Composite health check
A composite health check is a resource that aggregates the health states of
one or more health sources to produce a single composite health state for a
regional published service. The published service is considered healthy if each
of the associated health sources are healthy. If any of the health sources are
unhealthy, the service is considered unhealthy.
Health destination
A health destination receives the final composite health state from a
composite health check. For a published service, the health destination is the
forwarding rule of the producer's load balancer. The health state is
automatically propagated to consumer load balancers that connect to this
forwarding rule.
Specifications
Private Service Connect health has the following specifications.
Behavior :
The health of individual backends within a backend service is
determined by standard health checks.
A configurable health aggregation policy determines the overall health
state of a backend service based on the health of its individual
backends.
A composite health check aggregates the health states from one or more
backend services that are configured as health sources, creating a
composite health state.
The composite health state is provided to a health destination, which
must be the forwarding rule of a published service.
The composite health state is automatically propagated
to connected consumer load balancers, where
unheatlhy states trigger automatic cross-region failover.
Configuration :
The service producer and consumer must configure resources in a
multi-region deployment .
Each published service instance must be published with a
load balancer that supports cross-region failover .
Backend services that you use as health sources must have a load
balancing scheme of INTERNAL or INTERNAL_MANAGED .
Published service instances must have one of the following backend
types:
Network endpoint group of type GCE_VM_IP_PORT
Network endpoint group of type GCE_VM_IP
Managed or unmanaged instance group
The published service instances must be accessed by
Private Service Connect backends that are based on
load balancers that supports Private Service Connect health .
All Private Service Connect health resources are regional and must be in the
same region as the service that you are monitoring.
A health source resource must reference exactly one backend service.
A composite health check resource must reference from 1 to 10 health
sources.
A forwarding rule can be the health destination for only one composite
health check.
Limitations
Private Service Connect health has the following limitations:
Composite health states produced by Private Service Connect health are only
visible to the consumer load balancer and can't be viewed in logs.
All Private Service Connect health resources, including the backend services and
forwarding rules they reference, must exist in the same project.
You can't use the composite health state of one service as a health source
for another service.
There is no mode to test a health check configuration that doesn't affect
connected consumers. Any configured composite health checks can immediately
trigger failover.
Private Service Connect health only supports
Private Service Connect backends that access published
services.
Pricing
There is no additional charge for using Private Service Connect health. However, you
are charged for resources and network traffic in your VPC
network.
For more information, see VPC pricing .
What's next
To configure Private Service Connect health, see
Configure Private Service Connect health for automatic cross-region failover .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
