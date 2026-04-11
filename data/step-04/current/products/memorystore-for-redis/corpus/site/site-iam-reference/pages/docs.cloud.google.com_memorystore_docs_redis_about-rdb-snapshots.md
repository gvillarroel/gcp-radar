---
title: "About RDB snapshots \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/about-rdb-snapshots
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis/access-control
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/about-rdb-snapshots
  title: "About RDB snapshots \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation"
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
About RDB snapshots
Stay organized with collections
Save and categorize content based on your preferences.
This page gives an overview of RDB snapshots for Memorystore for Redis.
This page assumes you know about open source Redis RDB Snapshots
and the Memorystore import/export
feature.
To learn how to enable, disable, and monitor RDB snapshots, see Managing RDB snapshots .
Memorystore for Redis is primarily used as an in-memory cache. When using
Memorystore as a cache, your application can either tolerate loss
of cache data or can very easily repopulate the cache from a persistent store.
However, there are some use cases where downtime for a Memorystore
instance, or a complete loss of instance data, can cause long application
downtimes.
We recommend using the Standard Tier as the primary mechanism for high
availability. Additionally, enabling RDB snapshots on Standard Tier instances
provides extra protection from failures that can cause cache flushes. The
Standard Tier provides a highly available instance with multiple replicas, and
enables fast recovery using automatic failover if the primary fails.
In some scenarios you may also want to ensure data can be recovered from
snapshot backups in the case of catastrophic failure of Standard Tier instances.
In these scenarios, automated backups and the ability to restore data from RDB
snapshots can provide additional protection from data loss. With RDB snapshots
enabled, if needed, a recovery is made from the latest RDB snapshot.
RDB snapshots are suitable for use cases that can tolerate some amount of data
staleness after recovery. You can also use RDB snapshots to automate backup and
recovery of Basic Tier instances.
RDB snapshots overview
The RDB snapshots feature has the following behavior:
Stores complete point-in-time snapshots at user specified intervals on
persistent storage.
You choose the frequency and schedule of routine snapshots. The minimum
snapshot interval is 1h and the maximum is 24h .
Basic Tier instances recover data from the most recent snapshot every time an
instance is restarted due to failure, undergoes a scaling operation ,
or undergoes an upgrade for the OSS Redis version your instance .
By default, Standard Tier instances recover data from the replica, not a
snapshot. However, Standard Tier instances recover data from a snapshot if a
replica is not available and both primary and replica experience a restart.
Adds no extra cost to your instance billing.
Additional behavior
Snapshots are used for instance recovery and are not available for manual
restores. At any point in time, only the last successful snapshot is available
for recovery. In addition to RDB snapshots, you can use Export and Import
to manually backup and restore your data.
On a Standard Tier instance, the snapshot is taken on the replica to minimize
memory and CPU usage on the primary. Snapshots are never taken from the
primary node.
Constraints
Available on Memorystore for Redis instances using Redis version 5.0 or
greater.
If your instance has many keys (about 200 million or more), RDB snapshots and
recoveries can be slow. At this key volume the Redis server itself can be the
bottleneck which slows down snapshots and recoveries.
Scheduling RDB snapshots
When enabling RDB snapshots during instance creation you must specify a
snapshot interval. You also have the option to specify a start time. Together
these define the daily schedule of the snapshots. The intervals you can set are
1h , 6h , 12h , and 24h . For example, if you set the start time to 4 AM and
the interval to 1 hour, the snapshots start at 4 AM on the day they are enabled,
and continue every hour after that.
If a start time is not specified, the first snapshot is taken as soon as
possible, and the interval is honored. For example, with an unspecified start
time and an interval of 1 hour the snapshot can start at 6:13 AM and continue
at 7:13 AM, 8:13 AM, etc.
If a start time is specified, the daily schedule is consistently honored if the
snapshots always succeed and take no longer than the specified backup interval.
However, triggering the snapshot based on the daily schedule is best-effort. The
schedule can deviate from the initially determined schedule for a number of
reasons:
If a snapshot fails or takes longer than the specified snapshot interval to
complete, the next snapshot begins immediately after completion of the
current snapshot.
To prevent the snapshot from running continuously and overloading the
instance it is recommended to set an interval that is long enough to let the
snapshot complete.
If a snapshot is already in progress at a time aligned with the daily
schedule, that snapshot completes and the next snapshot time is calculated
solely on the interval from the start of the last successful snapshot.
Adjusting existing schedule
You may run into scenarios where you want to temporarily pause taking RDB
snapshots for a certain period of time. This could be to ensure there are no
performance impacts during critical events or to temporarily disable snapshots
to troubleshoot performance issues.
To stop taking snapshots temporarily for a short period of time you can adjust
the start time to be a future date. Once you adjust the start time to a future
date, the next snapshot does not start till that date. If you do this, the last
snapshot is retained for at least 7 days and is used in the event of a recovery.
Important: We recommend against setting the future start time to a date that
causes unacceptable data loss due to data staleness, and carefully considering
the effects that restoring stale data may have on your application. For example,
recovering data with an old format, old schema, or divergent history can cause
problems for your application.
To learn more about adjusting snapshot schedules, see Adjusting snapshot schedule .
Recovery behavior
Basic Tier Redis instances trigger a recovery anytime the instance is restarted.
Common operations that trigger restarts are scaling
and upgrading the version
of your instance. RDB snapshots preserve Basic Tier instance data during these
operations that cause restarts, planned maintenance, and unforeseen system
failures.
Standard Tier Redis instances failover to a replica as the primary recovery
mechanism rather than loading from a snapshot. A Standard Tier instance is
recovered from the snapshot when restoring from a replica fails.
Data consistency on recovery
Important: RDB snapshots are point in time snapshots of instance data based on
the snapshot interval you set. Your application must be able to to tolerate some
staleness of data on recovery.
When enabled, RDB snapshots make a best effort to ensure backups occur on the
specified interval, but this cannot be guaranteed. Snapshots can fail for a
number of reasons. See the best practices
for how to configure and monitor instances when RDB snapshots is enabled.
If the snapshot fails consecutively on multiple intervals, the last available
backup can be arbitrarily stale.
The worst case data loss for a recovery from a snapshot is the sum of the
specified interval since the last good snapshot started and the time to save the
next snapshot to storage. In the case of a recovery incident, use the
last_success_age metric to view the timeframe for data loss.
We recommend that you set alerts to detect failure of scheduled
snapshots and take corrective action. To learn more about setting alerts, see Monitoring snapshots .
Recovery time
The instance is unavailable while the instance recovers from a snapshot.
Recovery time depends on the size of the snapshot. To understand the
predicted recovery time, check the RDB recovery remaining time
metric using Cloud Monitoring
in the Google Cloud console.
Mitigating slow recovery
Sometimes recovering from a snapshot may take longer than expected. You may need
to take action to get your application reconnected to Redis as quickly as
possible.
In this circumstance you can create a new Redis instance and direct application
traffic to it. Then you can transfer restored data to the new instance once the
original instance recovers.
Note: If you choose to delete an instance during recovery from a
snapshot, the deletion can take up to 20 minutes, and you lose all snapshot data
for that instance.
Snapshot failure and recovery failure
Snapshot failure
Any failed snapshot is reported to Cloud Monitoring ,
and the snapshot is retried immediately. Consecutive snapshot failures increase
the amount of data lost in the event of a recovery because recovered data
becomes increasingly stale. For information on how to detect and troubleshoot
snapshot failure, see Monitoring snapshots .
Recovery failure
Recovery failures are rare but can happen. If a recovery failure occurs the
instance is recovered with no data.
Best practices
For best results backing up your instance with RDB snapshots, you should follow
the best practices described below:
Memory management
RDB snapshots use a process fork and 'copy-on-write' mechanism
to take a snapshot of the instance. Depending on the pattern of writes to the
instance, the used memory
of the instance will grows as pages touched by the writes are copied. In the
worst case, the memory footprint can be double the size of the data in the
instance.
To ensure the instance has sufficient memory to complete the snapshot, you
should set maxmemory-gb to 80% of the instance capacity so that 20% is
reserved for overhead. See Memory management best practices
to learn more. This memory overhead, in addition to Monitoring snapshots
helps you manage your workload to have successful snapshots.
Stale snapshots
Recovering your instance from a stale snapshot can cause performance issues for
your application as it tries to reconcile a significant amount of stale keys or
other changes to your database such as a schema change.
If you think your snapshot is too stale, or your instance has undergone other
important changes that are hard to reconcile with the snapshot, you can disable
then reenable RDB snapshots. This deletes existing snapshots, allowing you to
avoid recovering from a stale snapshot.
To monitor for stale snapshots, set an alert on the RDB snapshot last_status
and RDB snapshot last_success_age metrics .
Prolonged recovery from a snapshot
We recommend Setting an alert for the
redis.googleapis.com/server/uptime
metric to notify you if your instance becomes unavailable.
If your instance is unavailable and a recovery from a snapshot is taking too
long, you can create a new Redis instance and direct traffic to it. Once the
original Redis instance recovers, you can transfer
restored data to the new instance.
Performance impact of RDB snapshots
Depending on your workload pattern RDB snapshots can impact the performance of
the instance and increase latency for your applications.
Depending on the amount of potential data loss your application can tolerate,
you can minimize the performance impact of RDB snapshots by scheduling them to
run during periods of low instance traffic.
Use the start time and interval to schedule the snapshots for the required
times. For example if your load is very low from 1 AM to 4 AM you can set the
start time to 3 AM and set the interval to 24 hours.
If your system has a constant load and requires frequent snapshots, you should
carefully evaluate the performance impact, and weigh the benefits of using RDB
snapshots for the workload.
Monitoring snapshots
It is important to monitor snapshots, and set alerts for failed snapshots.
Failed snapshots can indicate an overloaded instance that may continue
to have difficulty recovering from the snapshot.
For a list of metrics available for monitoring snapshots, see RDB snapshot metrics . To receive notice of a failed snapshot, set an
alert for the RDB snapshot last_status
metric. You can also use the Google Cloud console to check for any failures.
Monitoring performance impact
You can monitor the performance impact a snapshot has on your
Memorystore instance by viewing the metrics available through
Cloud Monitoring
like CPU usage, memory usage, etc. If you noticed reduced performance you can
use the RDB snapshot in_progress
metric to determine if a snapshot was in progress when performance issues were
detected.
What's next
Learn about importing and exporting backups .
Follow the guide for Exporting data from a Redis instance .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
