---
title: "About scaling instances \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/about-scaling-instances
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/about-scaling-instances
  title: "About scaling instances \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation"
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
About scaling instances
Stay organized with collections
Save and categorize content based on your preferences.
Note: If you are looking for the Memorystore for Redis Cluster documentation,
see About scaling instance capacity .
This page describes how your Memorystore for Redis instance behaves during scaling.
To learn how to scale a Redis instance, see Scaling Redis Instances .
Depending on the instance's tier, scaling an instance has performance and
storage implications for your application. There are also some limitations to
scaling instances based on the amount of memory that is currently in use. This
page describes how scaling an instance can affect your application and when
you can scale an instance.
Note: When you scale an instance, there might be a gap of 3-5 minutes when the
core metrics
for the instance don't appear. During this time, the instance is available. After
the time interval completes, the metrics appear.
Best practices for scaling an instance
For Standard Tier instances, to increase the speed and reliability of
your scaling operation, scale your instance during periods of low instance
traffic. To learn how to monitor instance traffic, see Monitoring Redis instances .
When reducing a Standard Tier instance's capacity, you must choose a size
greater than the amount of data being stored or scaling fails.
For example, if your have a 10 GB instance that has 5.5 GB of data stored
in it, you can resize the instance to a minimum of 6 GB. The amount of storage
your instance uses is visible on its details page in the
Google Cloud console.
Instance scaling behavior
Data is preserved during scaling for both Basic and Standard Tier instances.
During scaling the instance undergoes a short connection reset of a couple
minutes, or less. Applications should incorporate retry logic in the code to be
able to reconnect to the instance. The IP address and connection string remain
the same.
Because of the short term connection break, there may be a small amount of stale
or inconsistent data that didn't write or update to the cache for the short
amount of time the instance was unavailable.
If you issue a write during the connection break, Memorystore
returns the error READONLY You can't write against a read only replica . This
error is transient, and only lasts a few seconds. It resolves once the scaling
operation completes.
Write load when scaling
You should scale an instance during a period of low instance traffic to minimize the performance impact on your application. A high write load, or high memory pressure, can cause an scaling operation to take significantly longer and can cause the operation to fail. For more information see Scaling and version upgrade operations .
Expired keys
When you scale a Standard Tier instance, expired keys are not synced. If you have
expired keys in your Redis instance before you scale, you will have fewer keys
after the instance is scaled.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
