---
title: "Memorystore for Redis Cluster overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/cluster/apis
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview
  title: "Memorystore for Redis Cluster overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis Cluster
Guides
Send feedback
Memorystore for Redis Cluster overview
Stay organized with collections
Save and categorize content based on your preferences.
Memorystore for Redis Cluster is a fully managed Redis service for Google Cloud. Applications
running on Google Cloud can achieve extreme performance by leveraging the highly
scalable, available, secure Redis service without the burden of managing complex
Redis deployments.
Key concepts and terms
Hierarchical resource structure
Memorystore for Redis Cluster gathers the various resources used in a Redis deployment
into a hierarchical structure that simplifies administration and management.
Here is a diagram that illustrates this structure:
Memorystore for Redis Cluster instances are composed of a set of shards, each
containing a subset of your key space. Each shard in a Memorystore
cluster is composed of one primary node, and optionally up to five replica nodes.
When replica nodes are added, Memorystore automatically
distributes the nodes of a shard across zones to provide higher availability and
throughput.
Instances
A Memorystore for Redis Cluster instance is a container for your data. The terms
instance and cluster can be used interchangeably when referring to a single
Memorystore for Redis Cluster unit of deployment. When provisioning a
Memorystore instance, you must provision enough shards to serve the
keyspace of your entire application.
For details about Memorystore cluster specification, see Cluster and node specification .
Shards
Your cluster is composed of multiple equally sized shards. For details about
Memorystore shard specification, see Cluster and node specification .
Primary and replica nodes
There's one primary node per shard. Each shard can have 0-5 replica
nodes. Replicas provide high availability and additional read throughput, and
are distributed across zones evenly.
For more details see High availability and replicas .
Redis version
Memorystore for Redis Cluster is based on open-source Redis version 7.x and supports a subset of the
total Redis command library .
Cluster endpoints
Each instance has a discovery endpoint to which your client connects. Your
client also uses the discovery endpoint for cluster node discovery. For more
information, see Cluster endpoints .
Networking prerequisites
Before you can create a Memorystore for Redis Cluster instance, you must set up
Networking for your project.
Billing
See the Pricing page for information on
pricing for available regions.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates. Redis is a trademark of Redis Ltd. All rights therein are reserved to Redis Ltd. Any use by Google is for referential purposes only and does not indicate any sponsorship, endorsement or affiliation between Redis and Google. Memorystore is based on and is compatible with open-source Redis versions 7.2 and earlier and supports a subset of the total Redis command library.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
