---
title: "Memorystore for Valkey overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/valkey/product-overview
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/valkey/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/valkey/product-overview
  title: "Memorystore for Valkey overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Valkey
Guides
Send feedback
Memorystore for Valkey overview
Stay organized with collections
Save and categorize content based on your preferences.
Memorystore for Valkey is a fully managed Valkey service for Google Cloud which supports both Cluster Mode Enabled and Cluster Mode Disabled instances. Applications
running on Google Cloud can achieve extreme performance by leveraging the highly
scalable, available, secure Valkey service without the burden of managing complex
Valkey deployments.
Key concepts and terms
Cluster Mode Enabled and Cluster Mode Disabled instances
Memorystore for Valkey instance can be created in both Cluster Mode Enabled and Cluster Mode Disabled modes. While a Cluster Mode Enabled instance can have one or more shards, a Cluster Mode Disabled instance runs on a single shard. For more details see Enable and disable Cluster Mode .
Hierarchical resource structure
Memorystore for Valkey gathers the various resources used in a Valkey deployment
into a hierarchical structure that simplifies administration and management.
Here is a diagram that illustrates this structure:
Memorystore for Valkey instances are composed of a set of shards, each
containing a subset of your key space. Each shard in an instance
is composed of one primary node, and optionally up to five replica nodes.
When replica nodes are added, Memorystore automatically
distributes the nodes of a shard across zones to provide higher availability and
throughput.
Instances
When provisioning a Memorystore for Valkey instance, you must provision enough
shards to serve the keyspace of your entire application. For details about
instance specification, see Instance and node specification .
Shards
Your instance is composed of multiple equally sized shards. For details about shard specification, see Instance and node specification .
Primary and replica nodes
There is one primary node per shard. Each shard can have 0-5 replica nodes.
Replicas provide high availability and additional read throughput, and are
distributed across zones evenly.
For more details see High availability and replicas .
Valkey version
Memorystore for Valkey supports Valkey versions 7.2, 8.0, and 9.0. For more
information about the features introduced by each version, see
Supported versions .
Memorystore for Valkey supports a subset of the total Valkey command library .
Instance endpoints
Cluster Mode Enabled: Each instance has a discovery endpoint to which your client connects. Your client also uses the discovery endpoint for node discovery. For more
information, see Instance endpoints for Cluster Mode Enabled .
Cluster Mode Disabled: Each instance has a primary endpoint and a reader endpoint. The primary endpoint always directs traffic to the primary node, while the reader endpoint load-balances read queries across available replicas automatically. For more information, see Instance endpoints for Cluster Mode Disabled .
Networking prerequisites
Before you can create a Memorystore for Valkey instance, you must set up
Networking for your project.
Billing
See the Pricing page for
information on pricing for available regions.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
