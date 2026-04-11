---
title: "About upgrading the Redis version of an instance \_|\_ Memorystore for Redis\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/about-upgrading-version
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/about-upgrading-version
  title: "About upgrading the Redis version of an instance \_|\_ Memorystore for Redis\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis
Guides
Send feedback
About upgrading the Redis version of an instance
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how your Memorystore instance behaves during a version
upgrade operation, how an upgrade operation can affect your application, and
when you should run an upgrade operation. To learn how to upgrade an instance's
Redis version, see Upgrading an instance's Redis version .
Depending on the instance's tier ,
running a version upgrade operation can have performance and storage
implications for your application. There are also some limitations to upgrading
instances based on the amount of memory that is currently in use.
Best practices for upgrading an instance's Redis version
We recommend that you upgrade to version 7.0 and later because Certificate Authority rotation no longer drops connections.
We recommend exporting
your instance data before running a version upgrade operation.
For Standard Tier instances, to increase the speed and reliability of
your version upgrade operation, upgrade your instance during periods of low
instance traffic. To learn how to monitor instance traffic, see
Monitoring Redis instances .
When upgrading a Standard Tier instance, keep the instance write load to a
minimum. A high write load can cause upgrade operations to take significantly
longer, and can cause upgrades to fail.
Version upgrade behavior
Data is preserved during a version upgrade operation for both Basic and Standard Tier instances. During an upgrade operation the instance undergoes a short connection reset of a couple minutes, or less. Applications should incorporate retry logic in the code to be able to reconnect to the instance. The IP address and connection string remain the same.
Because of the short term connection break, there may be a small amount of stale or inconsistent data that didn't write or update to the cache for the short amount of time the instance was unavailable.
Write load during an upgrade
You should upgrade an instance during a period of low instance traffic to minimize the performance impact on your application. A high write load, or high memory pressure, can cause an upgrade operation to take significantly longer and can cause the upgrade to fail. For more information see Scaling and version upgrade operations .
Expired keys
When you upgrade a Standard Tier instance, expired keys are not synced. If you have expired keys in your Redis instance before you upgrade, you will have fewer keys after the instance is upgraded.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
