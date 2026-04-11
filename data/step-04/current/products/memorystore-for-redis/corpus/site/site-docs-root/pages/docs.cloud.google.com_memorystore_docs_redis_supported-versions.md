---
title: "Supported versions \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/supported-versions
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/supported-versions
  title: "Supported versions \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation"
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
Supported versions
Stay organized with collections
Save and categorize content based on your preferences.
Memorystore for Redis is backed by open-source Redis software. Memorystore for Redis
supports Redis versions 3.2, 4.0, 5.0, 6.x, 7.0, and 7.2. The default version is
7.2.
You can find out which version your instance uses by viewing details about the instance . You can also upgrade the version of an instance to any newer version. For
example, you can upgrade from version 3.2 to 7.2. For a history of
Memorystore for Redis product updates, see the Release notes .
Version support policy
Memorystore for Redis supports one patch version for every major OSS Redis
version that's listed in the Current versions section of
this page. During maintenance periods, the patch is kept up to date.
Memorystore for Redis monitors for any critical patches that it needs to apply
to your instance. Memorystore for Redis rolls out critical security patches
outside of the regular maintenance period. For more information, see About maintenance .
Current versions
This table shows the supported Redis versions, the patch levels for these
versions, and when the versions were last updated:
Redis major version
Patch level
Last update
7.2
7.2.0
February 29, 2024
7.0
7.0.12
July 17, 2023
6.x
6.2.13
May 9, 2022
5.0
5.0.14
May 09, 2022
4.0
4.0.14
June 17, 2019
3.2
3.2.13
June 21, 2018
Redis version 7.2
The following table provides information about the vector search feature for
Redis version 7.2:
Feature
Description
Supported in Memorystore for Redis
Vector search
Redis version 7.2 introduces vector data storage and vector data
search. These capabilities integrate with the LangChain framework. For more information, see Vector search for generative AI applications .
Yes
Redis version 7.0
The following table outlines Memorystore for Redis support of some major
features introduced by OSS Redis version 7.0.
In addition to the features listed in this section, instances that run Redis
version 7.0 with in-transit encryption see improved performance .
Feature
Description
Supported in Memorystore for Redis
Redis functions
Redis 7.0 introduces Redis functions, which provides improved Lua
script capabilities on the Redis server. Before version 7.0, to use Lua
scripts, you needed to use the EVAL command. Redis functions
provides simplified and optimized scripting. For more information, see
Redis
functions in the Redis documentation.
Yes
Client eviction
Client
eviction , added in Redis 7.0, disconnects clients if the total memory
used by all client connections exceeds a user-specified limit. For
more information about configuring this limit for Memorystore for Redis,
see Configure a Redis
instance .
Yes
Access Control List (ACL) improvements
Redis 7.0 introduces improved ACL functionality.
No
Sharded Pub/Sub
Redis 7.0 introduces sharded
Pub/Sub .
No
Multi-part Append-only File (AOF) persistence
Redis 7.0 introduces multi-part AOF persistence .
No
Redis modules
You can use Redis 7.0 to write modules that can extend Redis'
functionalities and implement new data types.
No
Redis version 6.x
The following table outlines Memorystore for Redis support of some major
features introduced by OSS Redis version 6.x:
Feature
Description
Supported in Memorystore for Redis
Threaded I/O
With Redis 6.x, if multiple vCPUs are available, then some I/O
operations can run in parallel. Memorystore for Redis leverages the
optimal number of I/O threads for a configured capacity tier
automatically. Starting with the M3 capacity tier, additional I/O threads
are utilized, typically resulting in an improvement in query throughput
performance.
Yes
Longest common subsequence (LCS) command
The LCS command, supported from Redis version 6.x, lets users find
non-contiguous common elements between strings.
Yes
Redis database (RDB) diskless load for replicas
Redis 6.x makes diskless loading available for replicas. This lets
a replica load the RDB from the socket instead of the disk, improving
performance. For more information, see the Redis 6.0 conf file.
Yes
Built-in traffic encryption
Redis 6.0 adds built-in SSL for encrypting traffic. Although
Memorystore for Redis doesn't support this feature for OSS Redis version
6.0, Memorystore for Redis offers its own in-transit encryption .
No
Access control lists (ACLs)
Redis ACLs let you restrict the users and actions that interact with
the Redis instance.
No
Redis version 5.0
The following table outlines Memorystore for Redis support of some major
features introduced by OSS Redis version 5.0:
Feature
Description
Supported in Memorystore for Redis
Redis streams
Redis 5.0 introduces the streams
data structure. Streams support the List functionality, such as
XADD and
XDEL . Streams
also introduce the concept of consumer groups , which let
multiple clients consume different portions of the stream.
Yes, through the stream-node-max-bytes and
stream-node-max-entries configuration
parameters .
Sorted set commands
Redis 5.0 introduces the following sorted set commands: ZPOPMAX , ZPOPMIN , BZPOPMAX ,
and BZPOPMIN .
These commands push and pop the highest or lowest values stored in your
sorted set.
Yes
Redis version 4.0
The following table outlines Memorystore for Redis support of some major
features introduced by OSS Redis version 4.0:
Feature
Description
Supported in Memorystore for Redis
Cache eviction improvements
Supports the Least Frequently Used (LFU) eviction policy. For more
information, see Eviction policy in the Redis documentation.
Yes, through the allkeys-lfu and volatile-lfu
maxmemory
policies .
Active defragmentation
Introduces the ability to defragment memory while Redis is running.
Yes, through the activedefrag configuration
parameter .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
