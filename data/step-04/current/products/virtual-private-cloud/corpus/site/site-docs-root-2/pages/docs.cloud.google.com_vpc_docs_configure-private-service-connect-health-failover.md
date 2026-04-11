---
title: "Configure Private Service Connect health for automatic cross-region failover\
  \ \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover
  title: "Configure Private Service Connect health for automatic cross-region failover\
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
Configure Private Service Connect health for automatic cross-region failover
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page describes how a service producer can configure a published service to
support automatic cross-region failover through Private Service Connect health.
Before you begin
Read about Private Service Connect health .
In each region that you want to support, create a
target service
that meets the following requirements.
It must use one of the following internal load balancers:
Internal passthrough Network Load Balancer
Regional internal Application Load Balancer
Regional internal proxy Network Load Balancer
It must use one of the following backend types:
A zonal network endpoint group (NEG)
with network endpoint type GCE_VM_IP or GCE_VM_IP_PORT
An instance group
The steps to create your target services depend on the load balancer and
backend types that you choose. For information on creating target services,
see your load balancer's documentation.
Publish each target service by creating a service attachment .
Understand that to use Private Service Connect health, consumers must access your
service with a
load balancer that supports cross-region failover .
Enable
the Compute Engine API in your
project.
Verify that you have the permissions required to complete this guide .
Required roles
To get the permissions that
you need to configure Private Service Connect health,
ask your administrator to grant you the
Compute Network Admin ( roles/compute.networkAdmin )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to configure Private Service Connect health. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to configure Private Service Connect health:
compute.regionHealthAggregationPolicies.list
compute.regionHealthAggregationPolicies.get
compute.regionHealthAggregationPolicies.create
compute.regionHealthAggregationPolicies.update
compute.regionHealthAggregationPolicies.delete
compute.regionHealthSources.list
compute.regionHealthSources.get
compute.regionHealthSources.create
compute.regionHealthSources.update
compute.regionHealthSources.delete
compute.regionCompositeHealthChecks.list
compute.regionCompositeHealthChecks.get
compute.regionCompositeHealthChecks.create
compute.regionCompositeHealthChecks.update
compute.regionCompositeHealthChecks.delete
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Configure Private Service Connect health to support automatic cross-region failover
The following sections describe how to configure Private Service Connect health
for automatic cross-region failover.
While Private Service Connect health
doesn't require configuration by the service consumer, the feature only
works if the consumer configures supported
Private Service Connect backends in a multi-region deployment.
For information about how a service consumer can configure their
VPC network to use health Private Service Connect health,
see
Automatic cross-region failover .
Create a health aggregation policy
Create at least one health aggregation policy in every region where you want
to support cross-region failover.
A health aggregation policy is a reusable resource that defines the criteria for
a backend service to be considered healthy. You can apply the same policy to
multiple backend services, or create different policies for services that have
different health requirements.
gcloud
Use the
gcloud beta compute health-aggregation-policies create command.
gcloud beta compute health-aggregation-policies create POLICY \
--region= REGION \
--healthy-percent-threshold= PERCENT_HEALTHY \
--min-healthy-threshold= MINIMUM_HEALTHY
Replace the following:
POLICY : the name of the health aggregation
policy
REGION : the region of the health aggregation
policy
PERCENT_HEALTHY : the minimum percentage of endpoints
in a backend service that must be healthy for the health source to be
considered healthy—for example, 75
The default is 60 . Endpoints can be VMs in an instance group or
network endpoints in a network endpoint group (NEG).
MINIMUM_HEALTHY : the minimum number of endpoints in a
backend service that must be healthy for the health source to be
considered healthy
The default is 1 .
Create a health source
Create a health source for each regional instance of your published service.
If a published service instance depends on the health of multiple backend
services, create a separate health source for each of those backend services.
A health source is the resource that links a health aggregation policy to a
specific backend service. A composite health check aggregates the health states
from one or more health sources to produce a final composite health state for
your service.
gcloud
Use the gcloud beta compute health-sources create command.
gcloud beta compute health-sources create HEALTH_SOURCE \
--region= REGION \
--source-type=BACKEND_SERVICE \
--sources= BACKEND_SERVICE \
--health-aggregation-policy= POLICY
Replace the following:
HEALTH_SOURCE : the name of the health source
REGION : the region of the health source
The health aggregation policy must be in the same region as the health
source.
BACKEND_SERVICE : the name of a single backend
service to use as the source of health
The backend service must fulfill the following requirements:
It must have a load balancing scheme of INTERNAL or
INTERNAL_MANAGED .
It must be in the same region as the health source you are creating.
Its backends must be instance groups or
network endpoint groups of type GCE_VM_IP or GCE_VM_IP_PORT .
POLICY : the name of the health aggregation
policy to apply to this health source
Create a composite health check
Create a composite health check for each regional instance of your published
service.
A composite health check aggregates the health states of its associated health
sources, creating a final composite health state. The final health state is
applied to the regional published service instance of the forwarding rule that
you specify as a health destination.
gcloud
Use the gcloud beta compute composite-health-checks create command.
gcloud beta compute composite-health-checks create COMPOSITE_HEALTH_CHECK \
--region= REGION \
--health-sources= HEALTH_SOURCES \
--health-destination= HEALTH_DESTINATION
Replace the following:
COMPOSITE_HEALTH_CHECK : the name of the composite
health check
REGION : the region of the composite health check
HEALTH_SOURCES : the names of one or more health
sources to associate with the composite health check
You can include multiple health sources in a comma-separated
list.
HEALTH_DESTINATION : the URI of the forwarding rule
that receives the composite health state from this composite health
check—for example,
projects/ PROJECT_ID /regions/ REGION /forwardingRules/ FORWARDING_RULE
The forwarding rule must be associated with a producer load balancer
that supports Private Service Connect health and fulfills the following
requirements:
It must have a load balancing scheme of INTERNAL or
INTERNAL_MANAGED .
It must be in the same region as the composite health check.
What's next
To manage Private Service Connect health configuration, see
View, update, and delete Private Service Connect health configurations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
