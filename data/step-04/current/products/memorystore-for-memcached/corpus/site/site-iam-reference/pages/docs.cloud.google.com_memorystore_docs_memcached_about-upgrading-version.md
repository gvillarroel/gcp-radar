---
title: "About upgrading the Memcached version of an instance \_|\_ Memorystore for\
  \ Memcached \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/memcached/about-upgrading-version
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/memcached/access-control
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/memcached/about-upgrading-version
  title: "About upgrading the Memcached version of an instance \_|\_ Memorystore for\
    \ Memcached \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Memorystore for Memcached is being deprecated and will be shut down on January 31, 2029. After February 1, 2027, you can't create Memorystore for Memcached instances in new projects unless these instances already exist in these projects. We recommend that you migrate your workloads to Memorystore for Valkey , which offers superior performance and features.
Learn more about the deprecation | Read the migration guide
Home
Documentation
Databases
Memorystore
Memorystore for Memcached
Guides
Send feedback
About upgrading the Memcached version of an instance
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how your Memorystore for Memcached instance behaves during a version
upgrade operation, how an upgrade operation can affect your application, and
when you should run an upgrade operation. To learn how to upgrade an instance's
Memcached version, see Upgrade the Memcached version of an instance .
Upgrading an instance has performance and storage implications for your
application.
Best practices for upgrading an instance's Memcached version
Upgrade your instance during periods of low instance traffic to minimize the impact of the full cache flush caused by the upgrade operation. To learn how to monitor instance traffic, see Monitor Memcached instances .
Version upgrade behavior
The Memcached instance undergoes a complete cache flush during a version upgrade operation. Multi-node
instances are partially available during the upgrade operation. You cannot downgrade the instance to an earlier version once it has been upgraded.
An upgrade operation also causes the nodes to undergo a short connection reset of a couple minutes, or less. Applications should incorporate retry logic in the code to be able to reconnect to the nodes. The discovery endpoint and memcached node endpoints remain the same.
Because of the short term connection break, there may be a small amount of stale or inconsistent data that didn't write or update to the cache for the short amount of time the Memcached node was unavailable.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
