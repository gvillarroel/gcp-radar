---
title: "Private services access overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/about-private-services-access
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/about-private-services-access
  title: "Private services access overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
Private services access overview
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how AlloyDB for PostgreSQL uses private services
access to establish network connectivity
between your AlloyDB instances and the various internal resources
that they require to work.
For a general overview of how network connections work with
AlloyDB, see Connection overview .
Connectivity between clusters and internal resources
Private services access lets the AlloyDB clusters communicate
with the internal resources that enable them.
Instances and internal resources
The AlloyDB clusters and instances that you create in your
Google Cloud project rely upon many internal, low-level Google Cloud
resources. These include the virtual machine (VM) instances that serve as
AlloyDB nodes and load balancers, or the storage volumes that
hold your data. All of the resources that power a cluster run within a
Google Cloud project that's internal to and managed by Google.
Generally, you do not connect directly to these internal resources. Instead, you
manage clusters and instances through the Google Cloud console or Google Cloud CLI.
Your applications connect to AlloyDB instances through their
private IP addresses to query and modify your data. AlloyDB uses
internal APIs to pass your administrative requests or data queries to your
cluster's resources as needed.
An AlloyDB instance acts as a logical abstraction of this complex
collection of parts. By offering you a private, static IP address and a
consistent, PostgreSQL-compatible database interface, AlloyDB can
freely update an active instance's internal network routes or relocate its
internal resources. This provides optimized throughput and high availability
without any downtime or disruption.
How clusters use private services access
The AlloyDB clusters and instances in your project communicate
with their internal resources through private services access . This
establishes a permanent, peered connection between a Virtual Private Cloud (VPC) network
in your own project, and the separate VPC used by the Google-managed project
hosting the internal resources. Through this connection, the
AlloyDB clusters and instances in your project can connect to
their internal resources using private IP addresses, just as if they were
located within your own project's VPC.
Configuring private services access with a Google Cloud VPC network
involves reserving one or more blocks of contiguous private IP addresses. After
Google Cloud establishes a peering connection between your project's VPC
and the internal project's VPC, AlloyDB
applies addresses from your reserved IP blocks to the low-level
resources that your instances require. This allows private network connectivity
among all the working parts of your clusters.
As part of creating an AlloyDB cluster, you need to specify a VPC
network within your project that you have already set up with private services
access. Your project might already have a qualifying
VPC network available, especially if your project has already worked with
AlloyDB or another Google Cloud product that requires
private services access. If your project does not have a VPC network set up for
private services access, then you must configure one prior to creating
an AlloyDB cluster.
You cannot change the private services access configuration of a cluster after
AlloyDB has created the cluster.
Supported private services access configurations
AlloyDB can use private services access configurations in VPC
networks that reside in the same project as AlloyDB or that
reside in other projects.
A VPC network in the same project as your cluster
How you configure AlloyDB connectivity using a VPC network that
resides in the same Google Cloud project as your AlloyDB
cluster depends on whether a private services access configuration already
exists in the VPC network.
If the VPC network does not already have private services access configured,
then create a private services access
configuration .
If the VPC network already has an existing private services access
configuration, then make sure the configuration has sufficient IP address
space for AlloyDB and increase the address
space if necessary.
A Shared VPC network
To configure AlloyDB connectivity using a VPC network that
resides in a Google Cloud project that is different from the one containing
your AlloyDB cluster, complete the following steps:
Configure the project where the VPC network resides for
Shared VPC , with it as the host project
and the project where AlloyDB resides as a service project .
Make sure the VPC network's private services access configuration has
sufficient IP address space for AlloyDB and increase the
address space if necessary.
Configure users who can create AlloyDB resources as Service
Project Admins with access to the appropriate allocated IP address ranges
in the private services access configuration.
When using Google Cloud CLI to create AlloyDB instance with
Shared VPC network, make sure that you use the fully qualified path
of the VPC network—for example,
projects/cymbal-project/global/networks/shared-vpc-network .
For more information about Shared VPC, see Shared VPC
overview and Provisioning
Shared VPC .
IP address range size considerations
It's important to choose a private services access address range that is wide
enough to accommodate the needs of AlloyDB, as well as any other
Google Cloud services that require IP addresses from the same address
pool. You can adjust the size of this pool at any time.
AlloyDB uses a subnet of size /24 in each region where you
deploy a cluster. While the minimum size is a single /24 block (256 addresses), the recommended size is a /16 block (65,536 addresses). This lets you
create clusters and instances in multiple regions, and still leave plenty of IP
addresses available for other Google Cloud services .
When you provision new instances in clusters configured with Private Services Access, AlloyDB deploys the resources in newly created or existing regional subnets that were previously created by AlloyDB. If an existing subnet is found to be sufficiently full, AlloyDB creates a new subnet in the same region provided that the allocated IP address range is large enough to create an additional subnet of size /24 . If the existing IP address space available to AlloyDB is not large enough to create the subnet, then your attempt to create the cluster or instance fails. You must increase the IP address space to resolve the address shortage before retrying to create the cluster or instance. For more information about increasing the IP address space, see Increase the IP address space available to AlloyDB within your project.
Privately used public IP ranges
AlloyDB doesn't support the use of privately used public IP ranges (PUPI) when
using private services access. To connect to AlloyDB from workloads using privately used public IP ranges (PUPI)
ranges, you must use Private Service Connect .
Limitation
Private services access connections are limited to RFC 1918 IP ranges.
What's next
Enable private services access.
Learn more about private services access in Google Cloud.
Increase the IP address space available to AlloyDB within
your project.
Deploy AlloyDB with private services access using Terraform .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
