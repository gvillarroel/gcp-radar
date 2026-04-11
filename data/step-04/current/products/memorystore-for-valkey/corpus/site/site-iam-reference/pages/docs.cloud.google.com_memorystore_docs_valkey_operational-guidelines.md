---
title: "Operational guidelines \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/valkey/operational-guidelines
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/valkey/access-control
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/valkey/operational-guidelines
  title: "Operational guidelines \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation"
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
Operational guidelines
Stay organized with collections
Save and categorize content based on your preferences.
The Memorystore for Valkey Service Level Agreement (SLA) excludes outages "caused by factors outside of Google's reasonable control". This page describes some of the user-controlled configurations and workloads that can cause an outage for a Memorystore for Valkey instance to be excluded.
Introduction
Memorystore strives to give you as much control over how your instance is configured and used as possible. This includes some configurations or workload patterns that increase the risk of instance downtime. If your instance becomes unhealthy and Memorystore determines that it was out of compliance with the operational limits and best practices as described on this page, then the downtime period is not covered by (or does not count against) the Memorystore SLA .
This list of operational limits and best practices is presented to inform you which configurations and workload patterns present these risks, ways to avoid them, and ways to mitigate the risks when the configuration is required for your business environment.
Excluded configurations
This section lists configurations that can cause your instance to be excluded from the Memorystore SLA.
General configuration requirements
If the instance is configured without high availability (0 replicas), then the SLA does not apply. Only Memorystore for Valkey instances configured for high availability are covered by the Memorystore SLA.
Resource constraints
The following resource constraints must be avoided to retain SLA coverage:
CPU overloaded: If your CPU utilization is consistently high, your instance is not properly sized for your workload or you are using Valkey commands improperly. If CPU resources are overloaded, you may not be covered by the SLA .
Memory overloaded: If your memory usage is consistently high, your instance is not properly sized for your workload, and may not be covered by the SLA .
shared-core-nano node type
The Memorystore SLA doesn't apply to instances that use the shared-core-nano node type . The node type isn't suitable for most production workloads because it has insufficient performance and is too small for most production use cases.
Best practices
Best practices are guidelines
that you can use to receive the best possible experience with Memorystore for Valkey.
The SLA might not cover downtime events that result from you
not following these best practices.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
