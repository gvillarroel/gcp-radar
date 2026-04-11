---
title: "Plan for disaster recovery \_|\_ Bare Metal Solution \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bare-metal/docs/plan-for-dr
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bare-metal/docs/bms-overview
source_metadata:
  url: https://docs.cloud.google.com/bare-metal/docs/plan-for-dr
  title: "Plan for disaster recovery \_|\_ Bare Metal Solution \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The availability of Bare Metal Solution is transitioning to a specialized, allowlist-only model. If you are an existing customer, please contact your Google account team to explore the value of migrating to new Oracle and Google Cloud strategic partnership offerings .
Home
Documentation
Distributed, hybrid, and multicloud
Bare Metal
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Plan for disaster recovery
This page provides information that you can use to plan for disaster recovery
for your workloads running in the Bare Metal Solution environment.
Bare Metal Solution is delivered from a region extension. As of February 2024,
all Bare Metal Solution regions are physically hosted in non-Google facilities.
Due to the region extension model, Bare Metal Solution doesn't follow the
conventional zonal separation model used by other Google Cloud services,
such as Compute Engine. Each Bare Metal Solution deployment inside of a region
extension is known as a pod. In some regions, Bare Metal Solution resources are
served from multiple pods, but there is no requirement or expectation that pods
are geographically separated.
If you're running mission-critical workloads, we recommend that you
plan for disaster recovery.
Recommended resources for disaster recovery planning
We recommend that you go through the following resources to plan for
disaster recovery:
Plan for disaster recovery (this document)
Google Cloud disaster recovery planning guide
(provides more guidance that you can use to implement your disaster recovery plan)
Disaster recovery options for Oracle databases workloads (applicable if you're running Oracle databases workloads)
Cross-pod connectivity
Pods and region extensions don't have direct connectivity. All the traffic
(in and out) of your Bare Metal Solution deployment transits over an interconnect
and through the Google Cloud backbone. There is no supported data path for
storage-level replication. This eliminates disaster recovery options based on
the storage technologies, such as block-level storage replication or remote
snapshot replication.
Disaster recovery region planning
You might typically select a Bare Metal Solution region based on other
Google Cloud services that you are using. However, the disaster recovery
for databases typically falls in line with regions used for corresponding
applications and their integrations. Therefore, consider network latency between
regions when planning which regions you want to use for disaster recovery.
Depending on your industry, there may be regulatory requirements about data
locality that dictate where you can replicate data. Each application has its own
requirements, so specific disaster recovery region selection is left to you.
Networking considerations
Isolating traffic for interconnect
In many cases, you might want to isolate replication traffic from application
sessions.
Traffic isolation can be achieved by provisioning separate
Partner Interconnects in each region that terminate into a
transit VPC used for replication. The following diagram depicts this type of
configuration.
In the diagram, the Bare Metal Solution servers in the us-west2 region use the
10.10.10.0/24 network and the Bare Metal Solution servers in the us-east4
region use the 10.20.20.0/24 network. The user project contains separate VPCs
for application and replication traffic, named Application VPC and
Replication VPC , respectively. The BGP advertisements are configured so that
each Cloud Router in the Replication VPC advertises a route to the
cross-region Bare Metal Solution network, forcing cross-region traffic to flow
over the Replication VPC . The Cloud Routers in the Application VPC
advertise a generic 0.0.0.0/0 route, or routes to specific CIDR blocks that
the Bare Metal Solution servers must communicate with. In this example,
0.0.0.0/0 is used to signify a route that sends traffic to any other
destination.
The application servers and other services that connect from on-premises
data centers connect through the Application VPC . The instances within the
Application VPC can still communicate with databases running in either
Bare Metal Solution region extension.
The interconnects that terminate at the transit VPC can also be used to access
Google Cloud services, such as Cloud Storage, Filestore,
or Backup and DR. This can be achieved by creating the
Filestore instance in the transit VPC or through the use of
Private Service Connect
endpoints that reside within the transit VPC.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
