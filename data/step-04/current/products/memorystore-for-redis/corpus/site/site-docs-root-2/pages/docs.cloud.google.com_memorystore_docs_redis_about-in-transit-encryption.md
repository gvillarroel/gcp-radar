---
title: "About in-transit encryption \_|\_ Memorystore for Redis \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption
  title: "About in-transit encryption \_|\_ Memorystore for Redis \_|\_ Google Cloud\
    \ Documentation"
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
About in-transit encryption
Stay organized with collections
Save and categorize content based on your preferences.
Note: If you are looking for the Memorystore for Redis Cluster documentation,
see About in-transit encryption .
This page gives an overview of in-transit encryption for Memorystore for Redis.
For instructions how to encrypt a connection with in-transit encryption, see Enabling in-transit encryption .
Memorystore for Redis only supports TLS protocol versions 1.2 or higher.
Introduction
Memorystore for Redis supports encrypting all Redis traffic using the
Transport Layer Security (TLS)
protocol. When in-transit encryption is enabled Redis clients communicate
exclusively across a secure port connection. Redis clients that are not
configured for TLS will be blocked. If you choose to enable in-transit
encryption you are responsible for ensuring that your Redis client is capable of
using the TLS protocol.
Note: For Standard Tier instances, replicated data is fully encrypted at the
network level based on Google Cloud encryption standards.
In-transit encryption prerequisites
In order to use in-transit encryption with Memorystore for Redis, you need:
A Redis client that supports TLS or a third-party TLS sidecar
A Certificate Authority
installed on the client machine accessing your Redis instance
Native TLS was not supported prior to open source Redis version 6.0. As a result,
not every Redis client library supports TLS. If you are using a client that does
not support TLS, we recommend using the Stunnel
third-party plugin that enables TLS for your client. See Connect to a Redis instance securely by using Stunnel and telnet
for an example of how to connect to a Redis instance with Stunnel.
Certificate Authority
A Redis instance that uses in-transit encryption has one or more unique
Certificate Authorities (CA) that are used to verify the identity of the server.
A CA is a string that you must download and install on the client accessing your
Redis instance. A CA is valid for ten years from the date it is created. In
order to ensure service continuity, the new CA must be installed on clients of
the Redis instance before the previous CA expires.
Certificate Authority rotation
A CA is valid for 10 years upon instance creation. In addition, a new CA becomes
available five years after instance creation.
The old CA is valid until its expiration date. This gives you a five year window
in which to download
and install
the new CA to clients connecting to the Redis instance. After the old CA expires
you can uninstall it from clients.
For instructions on rotating the CA, see Managing Certificate Authority rotation .
Server certificate rotation
Server-side certificate rotation occurs every 180 days causing a transient
connection drop of a few seconds. You should have retry logic with exponential
backoff in place in order to reestablish the connection. Certificate rotation
does not cause a failover for Standard Tier instances.
Connection limits for in-transit encryption
Enabling in-transit encryption on your Redis instance introduces limits on the
maximum number of client connections your instance can have. The limit is
dependent on your instance size. You should consider increasing the size of your
Redis instance if you need more connections than what is supported by your
current capacity tier.
Capacity tier
Maximum number of connections for Redis versions 4.0, 5.0, and 6.x 1
Maximum number of connections for Redis version 7.0 and later 1
M1 (1-4GB)
1000
65,000
M2 (5-10GB)
2,500
65,000
M3 (11-35GB)
15,000
65,000
M4 (36-100GB)
30,000
65,000
M5 (101+GB)
65,000
65,000
1 These connection limits are approximate, and depend on the rate and
complexity of Redis commands sent per connection.
Monitoring connections
Since Redis instances with in-transit encryption have specific connection limits,
you should monitor the
redis.googleapis.com/clients/connected metric to make sure you don't exceed
the connection limit. If the limit is surpassed, the Redis instance rejects
newly attempted connections. In this circumstance we recommend scaling up
your instance to the size that accommodates the required number of connections.
If you suspect that idle connections make up a significant number of your
connections, you can proactively terminate these connections
with the timeout configuration parameter.
Performance impact of enabling in-transit encryption
The in-transit encryption feature encrypts and decrypts data,
which comes with processing overhead. As a result, enabling in-transit
encryption can reduce performance. Also, when using in-transit encryption, each
additional connection comes with as associated resource cost. To determine the
latency associated with using in-transit encryption, compare application
performance by benchmarking application performance with both a Redis instance
that has in-transit encryption enabled and a Redis instance that has it
disabled.
Guidelines for improving performance
Decrease the number of client connections when possible. Establish and reuse
long-running connections rather than creating on-demand short-lived
connections.
Increase the size of your Memorystore instance (M4 or larger is
recommended).
Increase the CPU resources of the Memorystore client host
machine. Client machines with a higher CPU count yields better performance. If
using a Compute Engine VM, we recommend compute optimized
instances.
Decrease the payload size associated with application traffic because larger
payloads require more round trips.
In-transit encryption impact on memory usage
Enabling in-transit encryption reserves some of your Redis instance memory for
the feature. All other things being equal, with in-transit encryption enabled,
the value for the System Memory Usage Ratio metric is higher because of the
additional overhead memory used by the feature.
Redis version 7.0 performance improvements
Using Redis version 7.0 on Memorystore for Redis improves the performance of
in-transit encryption. To take advantage of these performance improvements,
consider upgrading your instance
to use Redis version 7.0. By using this version, Memorystore for Redis doesn't
drop connections that you use to rotate server certificates or perform update
operations.
What's next
View instructions on Enabling in-transit encryption .
Read the AUTH feature overview .
View the permissions
needed in order to perform in-transit encryption management tasks.
Learn how to connect
to a Redis instance that has in-transit encryption enabled.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
