---
title: "Operational guidelines \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/memorystore/docs/cluster/operational-guidelines
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/cluster
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/cluster/operational-guidelines
  title: "Operational guidelines \_|\_ Memorystore for Redis Cluster \_|\_ Google\
    \ Cloud Documentation"
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
Operational guidelines
Stay organized with collections
Save and categorize content based on your preferences.
The Memorystore for Redis Cluster Service Level Agreement (SLA) excludes outages "caused by factors outside of Google's reasonable control". This page describes some of the user-controlled configurations and workloads that can cause an outage for a Memorystore for Redis Cluster instance to be excluded.
Introduction
Memorystore strives to give you as much control over how your instance is configured and used as possible. This includes some configurations or workload patterns that increase the risk of instance downtime. If your instance becomes unhealthy and Memorystore determines that it was out of compliance with the operational limits and best practices as described on this page, then the downtime period is not covered by (or does not count against) the Memorystore SLA .
This list of operational limits and best practices is presented to inform you which configurations and workload patterns present these risks, ways to avoid them, and ways to mitigate the risks when the configuration is required for your business environment.
Excluded configurations
This section lists configurations that can cause your instance to be excluded from the Memorystore SLA.
General configuration requirements
If you configure a Memorystore for Redis Cluster instance without high availability (0 replicas), then the SLA doesn't apply. The Memorystore SLA covers only instances that are configured for high availability.
If you disable or destroy the primary key version for an instance, then the instance is excluded from the Memorystore SLA.
Resource constraints
The following resource constraints must be avoided to retain SLA coverage:
CPU overloaded: If your CPU utilization is consistently high, your instance is not properly sized for your workload or you are using Redis commands improperly. If CPU resources are overloaded, you may not be covered by the SLA .
Memory overloaded: If your memory usage is consistently high, your instance is not properly sized for your workload, and may not be covered by the SLA .
redis-shared-core-nano node type
The Memorystore SLA doesn't apply to clusters that use the redis-shared-core-nano node type . The node type isn't suitable for most production workloads because it has insufficient performance and is too small for most production use cases.
Best practices
Best practices for Memorystore for Redis Cluster are published to ensure that you receive the best possible experience with Memorystore. Downtime events which result from you not following the published best practices may not be covered by the SLA .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
