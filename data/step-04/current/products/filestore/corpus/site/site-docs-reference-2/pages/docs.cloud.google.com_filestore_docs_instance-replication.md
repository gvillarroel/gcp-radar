---
title: "About instance replication \_|\_ Filestore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/filestore/docs/instance-replication
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/instance-replication
  title: "About instance replication \_|\_ Filestore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Filestore
Guides
Send feedback
About instance replication
Stay organized with collections
Save and categorize content based on your preferences.
Filestore now offers asynchronous replication for your instances.
A source instance can be continuously and asynchronously replicated to a
standby instance in a location of your choice.
To select customers, Filestore offers instance replication support for
instances created in the following
service tiers :
Zonal
Regional
Enterprise
Instance replication compared to other data recovery options
The following sections cover the advantages of instance replication compared to
snapshots and backups.
Snapshots
Snapshots are resources that consume capacity
within the instance and allow you to revert the current state of your instance
data to a previous, specific point in time. Users can also elect to revert to a
previous version of a specific file.
Snapshots don't replicate any data or consume capacity until the data on the
instance is modified. All snapshots of an instance share in-common data, meaning
that the instance preserves only the differences between the snapshots.
While snapshots do offer cost efficiency when compared to other Filestore
data recovery operations, available instance capacity continuously decreases as
file modifications are made.
Reverting an instance to a previous state is destructive, as it deletes the
latest version of instance data, and should be used carefully.
Backups
Backups are external resources that reside outside
of the instance, consuming their own separate capacity. The first backup is a
complete copy of instance data, with each subsequent backup only consuming the
data necessary to track incremental and differential
changes since the previous backup. Internally, a backup chain's
history is tracked using snapshots, which consume capacity on the source
instance.
Instance replication
Instance replication pairs a source instance with a replica instance,
a separate resource in a secondary location that continuously monitors any
changes made to the source and asynchronously replicates those changes to the
replica instance within a target recovery point objective (RPO)
of approximately 30 minutes.
This process relies on snapshots and similarly consumes capacity. As snapshots
become obsolete, they are deleted to free up instance capacity in both instances.
The replica instance is a continuously updated, complete copy of the source
instance. Most copies are scheduled every five to ten minutes. Metrics are
available indicating the timestamp of the last full instance copy. For more
information, see Monitoring .
Instance pair roles
When instance replication is enabled, each instance in the pair is assigned a
role:
ACTIVE
The source instance.
STANDBY
The replica instance.
Role changes are not automatic and can only be initiated by the user.
Pause and resume replication
When the replication is paused, the replica's instance status changes from STANDBY to ACTIVE based on the most recent successful data point.
When you resume replication, the client access to the replica is removed, and the
instance reverts to its original data point, deleting all test data. After this,
standard replication from the active instance restarts. Resuming replication
might take longer for initial synchronization, depending on the pause duration and the number of changes on the active instance.
Note: Pausing the replica might not happen immediately if data is still being
sent.
For more information, see Pause replication and Resume replication .
Promote replica
While the replica instance can't be mounted or written to directly, in the event
of a service outage, the replica can perform a
promote-replica
operation. This same operation is accessible from the Google Cloud console.
This operation initiates the following actions:
Stops replication between the ACTIVE and STANDBY instances.
Unpairs the two resources.
Promotes the replica to a regular instance that is capable of client
connections and writes just as any other instance.
The replication role, whether ACTIVE or STANDBY , is removed from both
instances.
When the operation successfully completes, the replica instance's state changes
from PROMOTING to READY .
Once your application is back online, this new source instance can then be
paired with a new replica and you can initiate instance replication once again.
For more information, see Break replication and promote replica .
Promote a paused replica
Promoting a paused replica is useful for disaster recovery if the active instance becomes unavailable. When you promote a paused replica, the instance reverts to the last completed data point, deleting all test data.
The replica instance synchronizes any remaining data in transit from the source instance and becomes a new active instance. Promoting a replica means a break in the replication process. As a result, the original replication link is severed and replication can't be resumed.
Failback
The promote-replica operation initiates a break in replication. It is a
switchover not a failover event, meaning that failback isn't automatic. Once the operation is complete, administrators must
reconnect their applications to the new source instance.
Limitations
The following limitations apply:
Instance replication is not available in the following service tiers:
Basic HDD
Basic SSD
The following specifications must be the same for each instance in the pair:
Project
Service tier , including capacity range
The following sections cover other feature limitations related to RPO, operations,
network traffic, performance, and availability in detail:
RPO
Quoted RPO times are approximate and not supported under any
Filestore service level agreement (SLA) .
The target 30-minute RPO applies to instances with a change rate of
100 MB per second and an IOPS rate of 300 per second, where IOPS are
defined as any create , edit , or delete operation applied to any file or
directory.
Instances with a higher change rate may experience longer replication periods.
RPO times vary and don't strictly map linearly with higher change rates. For
example, if the change rate doubles, the RPO window won't necessarily double.
Instance replication is specified at instance creation. If you want to pair a
replica with a source instance, you must enable instance replication on the
instance when creating it, and then pair it with the replica. An existing
instance can't be used as a replica.
Operations
The following operations are disabled on the ACTIVE instance:
Instance deletion
Revert to snapshot
The following limitations apply to the STANDBY instance:
Doesn't support NFS access
Backups are disabled
Snapshots are disabled
Network traffic
Continuous data replication between the source and replica instances accrues
network traffic fees. For more information, see
Filestore pricing or your Filestore
representative.
Performance
Continuous data replication between the pair impacts IOPS performance on the
source instance.
Availability
Some restrictions apply when choosing a region for your replica instance. For
more information, see your Filestore representative.
Deleting the source instance won't delete its associated replica. If the
source instance no longer exists, and you want to delete the instance
previously used as its replica, use gcloud to locate and delete the instance .
Recommendations
For a robust disaster recovery solution, users are strongly encouraged to choose
a separate region rather than a separate zone for the replica instance.
Monitoring
The time_since_last_replication metric represents the timestamp of the last
full copy of the active instance.
For more information, see the following resources:
Monitor instance replication
Monitoring instances
Filestore metrics
Pricing
When you use instance replication, charges for instances and cross-region
networking apply. Replicating instances is offered at no additional charge. The
replica instance is a continuously updated, complete copy of the source
instance. Pricing is commensurate with the data recovery support provided in a
continuous data recovery option suitable for enterprise workloads.
For more information, see your Filestore representative.
What's next
Configure instance replication
Instance replication reference documentation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
