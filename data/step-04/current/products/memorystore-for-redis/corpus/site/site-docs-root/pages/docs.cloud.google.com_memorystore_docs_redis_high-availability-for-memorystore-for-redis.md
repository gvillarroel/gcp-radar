---
title: "High availability for Memorystore for Redis \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis
  title: "High availability for Memorystore for Redis \_|\_ Google Cloud Documentation"
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
High availability for Memorystore for Redis
Stay organized with collections
Save and categorize content based on your preferences.
This page describes high availability (HA) for Memorystore for Redis instances in
the Standard Tier.
The Standard Tier protects a Redis instance from common failures by replicating
data to one or more replicas, and by providing fast, automatic failover to a
replica.
A Standard Tier instance that has the readReplicaMode setting deactivated
contains a primary instance and a replica that provides HA functionality. A
Standard Tier instance that has this setting enabled has a primary instance and
one to five read replicas. The read replicas in this configuration perform reads
as well as provide failover support for HA functionality. To determine whether
the readReplicaMode setting is deactivated or enabled, see View read replica information for your instance .
Memorystore for Redis provides high availability by replicating a primary
instance to one or more replicas. Memorystore for Redis uses the asynchronous replication protocol to
copy any changes that you make to the data on the primary instance to the
replicas. Because of the asynchronous nature of replication, and depending on
the write rate of the primary instance, replicas can lag behind the instance.
If the primary instance fails, then the instance fails over automatically to a
replica. For instances that have more than one replica, the instance fails
over automatically to a healthy replica with the least replication lag.
If you configure an instance to have only one non-read replica, then
Memorystore for Redis directs all application connections to the primary
endpoint. If you configure the instance to use read replicas, then applications
can also use the read endpoint to distribute read queries across all replicas.
When a failover occurs
A failover occurs when the primary instance fails. During a failover, the
primary instance and read endpoint redirect automatically to the new primary
instance and replicas. Memorystore for Redis drops all connections to the
primary endpoint. Memorystore for Redis also drops read endpoint connections to
the read replica that's promoted.
How a failover affects your application
When the primary instance fails over to the replica, Memorystore for Redis
drops existing connections to the primary endpoint of the instance. The instance
is unavailable for an average of 30 seconds during automated repairs, and 15
seconds for maintenance events. Upon reconnection, your application is
redirected automatically to the new primary instance by using the same
connection string or IP address. You don't need to update your application after
a failover.
During a failover, if there are connections to the read endpoint, then
Memorystore for Redis drops the connections to the replica that's being
promoted to the primary instance. Memorystore for Redis continues to serve the
connections to the other replicas. After the failover is complete and the new
replica is available, Memorystore for Redis redirects connections to the new
replica.
Note: Because of the asynchronous nature of the Redis replication protocol,
acknowledged writes might be lost during a failover. Your applications must be
able to tolerate losing acknowledged writes.
Retry the instance connection after a failover
When a failover happens, Memorystore for Redis drops all connections from the
primary endpoint. Depending on the number of replicas, Memorystore for Redis
might also drop some read connections.
Because of this connection loss, your application must retry to reestablish the
connection. We recommend that the retry logic use exponential backoff to ensure
that you don't overload your instance with too many retry requests. In addition
to including retry logic, we recommend that you test how a failover affects your
application by testing the application with a manual failover .
Note: If you have primary instances that have read replicas enabled, then
Memorystore for Redis doesn't support the manual failover API.
Most Redis clients have built-in retry capabilities. If a connection drop occurs
because of a failover, then we recommend that you use these retry capabilities.
A failover occurs when you perform the following tasks:
Scale your instance
Upgrade the Redis version of an instance
Initiate a manual failover
Perform a maintenance update
If you implement retry logic in your application to handle connection drops
because of failovers, then your instance probably won't see a significant
performance impact.
View the status for high availability
You can see high availability metrics for your Redis instance by using
Cloud Monitoring . For information about the metrics that
Cloud Monitoring provides for Memorystore for Redis, see Monitor Redis Instances and Supported monitoring metrics for Memorystore for Redis .
To see the built-in replication status that Redis provides, use the INFO
command.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
