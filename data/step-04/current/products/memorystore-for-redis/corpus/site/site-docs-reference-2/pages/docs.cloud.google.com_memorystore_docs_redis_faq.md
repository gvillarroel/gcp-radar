---
title: "Memorystore for Redis FAQ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/faq
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis/release-notes
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/faq
  title: "Memorystore for Redis FAQ \_|\_ Google Cloud Documentation"
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
Resources
Send feedback
Memorystore for Redis FAQ
Stay organized with collections
Save and categorize content based on your preferences.
How long does a failover take for a Standard Tier Redis instance?
A failover normally takes around 30 seconds to complete.
What is the difference between Basic Tier and Standard Tier for Memorystore for Redis?
A Standard Tier instance provides High Availability (HA)
with a replica. In cases of routine maintenance, scaling, or an instance failure, the primary
cache fails over to the replica, preserving your data. A Basic Tier instance is a standalone cache
that is used for applications that can withstand a cold restart/full data flush. For more
information, see Redis Tier Capabilities .
Is scale out cluster available on Memorystore for Redis?
No. Memorystore for Redis Basic and Standard Tier both use a single primary node to store all
Redis data.
Standard Tier provides a replica node to back up your data for High Availability.
Can I use a client library that isn’t listed on the
Client Libraries page?
Yes. Memorystore for Redis is compatible with any client library for Redis. See the
Redis sample app for Compute Engine
and the
Redis sample app for Kubernetes for examples of different client library setups.
Can I use a shared VPC?
Yes, Shared VPC is supported for Memorystore for Redis. For more details, see Networking .
Can I connect to a Redis instance using the App Engine standard environment?
Yes, but first you need to connect the App Engine standard environment to your VPC network .
Can I connect to a Redis instance using Cloud Run functions?
Yes, but first you need to connect Cloud Run functions to your VPC network .
Does Memorystore for Redis use open source Redis, also known as OSS Redis?
Yes. Memorystore for Redis uses open source Redis.
What version of Redis is currently supported?
For a list of supported Redis versions, see Current versions .
gcloud redis isn’t working on the command line. Why?
You may have an older version of gcloud installed. Try running gcloud
components update .
To avoid drawing additional memory from the system, does Memorystore for Redis reuse the space
that's freed up after you create keys?
The memory allocators can reuse free chunks of memory. If you free 2 GB of your 5-GB data set,
and you create more keys, then you see the resident set size (RSS) stay steady and not increase
as you add up to 2 GB of additional keys. The allocators reuse the 2 GB of memory that you
freed.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
