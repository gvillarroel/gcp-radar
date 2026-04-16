---
title: "Managed Service for Apache Spark metrics \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics
  title: "Managed Service for Apache Spark metrics \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

"Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
Home
Documentation
Data analytics
Managed Service for Apache Spark
Guides
Send feedback
Managed Service for Apache Spark metrics
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Monitoring
provides visibility into the performance, uptime, and overall health of
cloud-powered applications. Google Cloud Observability collects and ingests metrics, events,
and metadata from Managed Service for Apache Spark clusters, including per-cluster
HDFS, YARN, job, and operation metrics, to generate insights via dashboards
and charts (see
Cloud Monitoring Managed Service for Apache Spark metrics ).
See Cloud Monitoring Pricing
to understand your costs.
See Monitoring Quotas and limits
for information on metric data retention.
Managed Service for Apache Spark resource metric collection
Cloud Monitoring collects metrics related to the following Managed Service for Apache Spark
resources:
Cloud Dataproc Cluster
Cloud Dataproc Job
Cloud Dataproc Batch
Cloud Dataproc Session
Managed Service for Apache Spark resource metrics are collected in the following format:
dataproc.googleapis.com/ RESOURCE / METRIC ,
and include the collection of several OSS metrics.
View Managed Service for Apache Spark resource metrics
You can select and view the Managed Service for Apache Spark resource metrics in the
Metrics Explorer
by typing "dataproc" in the Filter by resource or metric name box, then selecting
a "Cloud Dataproc" resource.
Custom metric collection
When you create a Managed Service for Apache Spark cluster, you can enable the collection of metrics
from one or more custom metric sources. A standard set of metrics is collected
from each enabled metric source unless you specify the metrics to collect
from a metric source (user-specified metrics are called metric "overrides").
Custom OSS metrics are collected in the following format:
custom.googleapis.com/ OSS_COMPONENT / METRIC
Custom OSS metric examples:
custom.googleapis.com/spark/driver/DAGScheduler/job/allJobs
custom.googleapis.com/hiveserver2/memory/MaxNonHeapMemory
Note: You can also enable the collection of
Managed Service for Apache Spark monitoring agent metrics ,
which have an agent.googleapis.com prefix.
Enable custom metric collection
You can use the gcloud CLI or the Dataproc API to enable the collection of
custom metrics from one or more metric sources.
gcloud CLI
Custom metric collection
Use the
gcloud dataproc clusters create --metric-sources
flag to enable the collection of
custom metrics
from one or more metric sources.
gcloud dataproc clusters create cluster-name \
--metric-sources= METRIC_SOURCE(s) \
... other flags
Notes:
--metric-sources : Required to enable custom metric collection.
Specify one or more of the following metric sources:
spark ,
flink ,
hdfs ,
yarn ,
spark-history-server ,
hiveserver2 ,
hivemetastore , and
monitoring-agent-defaults .
The metric source name is case insensitive, for example, either "yarn" or
"YARN" is acceptable.
monitoring-agent-defaults are
not available in 2.2 image version clusters. You can install the
Ops Agent ,
which collects
syslog logs and host metrics .
Override metric collection
Optionally, add the
--metric-overrides or
--metric-overrides-file
flag to enable the collection of one or more of the
custom metrics
from one or more metric sources.
Any of the custom metrics and all
Spark metrics ,
can be listed for collection as a metric override. Override metric values
are case sensitive, and must be provided, if appropriate, in CamelCase format.
Examples:
sparkHistoryServer:JVM:Memory:NonHeapMemoryUsage.committed
hiveserver2:JVM:Memory:NonHeapMemoryUsage.used
yarn:ResourceManager:JvmMetrics:MemHeapMaxM
Only the specified overridden metrics will be collected from a given
metric source. For example, if one or more spark:executive metrics
are listed as metric overrides, other SPARK metrics will not be
collected. The collection of custom metrics from other metric sources is
unaffected. For example, if both SPARK and YARN
metric sources are enabled, and overrides are provided for Spark metrics only,
the standard set of enabled YARN metrics will be collected.
The source of the specified metric override must be enabled. For
example, if one or more spark:driver metrics are
provided as metric overrides, the spark
metric source must be enabled ( --metric-sources=spark ).
Override metrics list
gcloud dataproc clusters create cluster-name \
--metric-sources= METRIC_SOURCE(s) \
--metric-overrides= LIST_OF_METRIC_OVERRIDES \
... other flags
Notes:
--metric-sources : Required to enable custom metric collection.
Specify one or more of the following metric sources:
spark ,
flink ,
hdfs ,
yarn ,
spark-history-server ,
hiveserver2 ,
hivemetastore , and
monitoring-agent-defaults .
The metric source name is case insensitive, for example, either "yarn" or
"YARN" is acceptable.
--metric-overrides : Provide a list of metrics in the following format:
METRIC_SOURCE : INSTANCE : GROUP : METRIC
Example: --metric-overrides=sparkHistoryServer:JVM:Memory:NonHeapMemoryUsage.committed
This flag is an alternative to and cannot be used with
the --metric-overrides-file flag.
Override metrics file
gcloud dataproc clusters create cluster-name \
--metric-sources= METRIC-SOURCE(s) \
--metric-overrides-file= METRIC_OVERRIDES_FILENAME \
... other flags
Notes:
--metric-sources : Required to enable custom metric collection.
Specify one or more of the following metric sources:
spark ,
flink ,
hdfs ,
yarn ,
spark-history-server ,
hiveserver2 ,
hivemetastore , and
monitoring-agent-defaults .
The metric source name is case insensitive, for example, either "yarn" or
"YARN" is acceptable.
--metric-overrides-file : Specify a local or Cloud Storage
file ( gs:// bucket / filename ) that contains
one or more metrics in the following format:
METRIC_SOURCE : INSTANCE : GROUP : METRIC
Use camelcase format as appropriate.
Examples:
--metric-overrides-file=gs://my-bucket/my-filename.txt
--metric-overrides-file=./local-directory/local-filename.txt
This flag is an alternative to and cannot be used with
the --metric-overrides flag.
REST API
Use
DataprocMetricConfig
as part of a
clusters.create
request to enable the collection of custom metrics. Note:
monitoring-agent-defaults
are not available in 2.2 image version clusters unless the
Ops Agent
is installed.
View custom metrics
You can select and view the Managed Service for Apache Spark resource metrics in the
Metrics Explorer
by selecting the VM Instance resource, then selecting Custom metrics .
Custom metrics
You can enable Managed Service for Apache Spark to collect the
custom metrics listed in the following tables.
The Enabled metrics column is marked with "y" if
Managed Service for Apache Spark collects the metric when you
enable the associated metric source .
Any of the metrics listed for a metric source, and all
Spark metrics ),
can be enabled for collection if you override the collection of the standard set of
enabled metrics for the metric source (see
Enable custom metric collection ).
Managed Service for Apache Spark uses the monitoring agent to collect metrics.
Enabling any metric source enables the collection of agent metrics .
These metrics are not billed to users; Managed Service for Apache Spark uses them to diagnose metric collection issues.
Hadoop metrics
HDFS metrics
Metric
Metrics Explorer name
Enabled metrics
hdfs:NameNode:FSNamesystem:CapacityTotalGB
dfs/FSNamesystem/CapacityTotalGB
y
hdfs:NameNode:FSNamesystem:CapacityUsedGB
dfs/FSNamesystem/CapacityUsedGB
y
hdfs:NameNode:FSNamesystem:CapacityRemainingGB
dfs/FSNamesystem/CapacityRemainingGB
y
hdfs:NameNode:FSNamesystem:FilesTotal
dfs/FSNamesystem/FilesTotal
y
hdfs:NameNode:FSNamesystem:MissingBlocks
dfs/FSNamesystem/MissingBlocks
n
hdfs:NameNode:FSNamesystem:ExpiredHeartbeats
dfs/FSNamesystem/ExpiredHeartbeats
n
hdfs:NameNode:FSNamesystem:TransactionsSinceLastCheckpoint
dfs/FSNamesystem/TransactionsSinceLastCheckpoint
n
hdfs:NameNode:FSNamesystem:TransactionsSinceLastLogRoll
dfs/FSNamesystem/TransactionsSinceLastLogRoll
n
hdfs:NameNode:FSNamesystem:LastWrittenTransactionId
dfs/FSNamesystem/LastWrittenTransactionId
n
hdfs:NameNode:FSNamesystem:CapacityTotal
dfs/FSNamesystem/CapacityTotal
n
hdfs:NameNode:FSNamesystem:CapacityUsed
dfs/FSNamesystem/CapacityUsed
n
hdfs:NameNode:FSNamesystem:CapacityRemaining
dfs/FSNamesystem/CapacityRemaining
n
hdfs:NameNode:FSNamesystem:CapacityUsedNonDFS
dfs/FSNamesystem/CapacityUsedNonDFS
n
hdfs:NameNode:FSNamesystem:TotalLoad
dfs/FSNamesystem/TotalLoad
n
hdfs:NameNode:FSNamesystem:SnapshottableDirectories
dfs/FSNamesystem/SnapshottableDirectories
n
hdfs:NameNode:FSNamesystem:Snapshots
dfs/FSNamesystem/Snapshots
n
hdfs:NameNode:FSNamesystem:BlocksTotal
dfs/FSNamesystem/BlocksTotal
n
hdfs:NameNode:FSNamesystem:PendingReplicationBlocks
dfs/FSNamesystem/PendingReplicationBlocks
n
hdfs:NameNode:FSNamesystem:UnderReplicatedBlocks
dfs/FSNamesystem/UnderReplicatedBlocks
n
hdfs:NameNode:FSNamesystem:CorruptBlocks
dfs/FSNamesystem/CorruptBlocks
n
hdfs:NameNode:FSNamesystem:ScheduledReplicationBlocks
dfs/FSNamesystem/ScheduledReplicationBlocks
n
hdfs:NameNode:FSNamesystem:PendingDeletionBlocks
dfs/FSNamesystem/PendingDeletionBlocks
n
hdfs:NameNode:FSNamesystem:ExcessBlocks
dfs/FSNamesystem/ExcessBlocks
n
hdfs:NameNode:FSNamesystem:PostponedMisreplicatedBlocks
dfs/FSNamesystem/PostponedMisreplicatedBlocks
n
hdfs:NameNode:FSNamesystem:PendingDataNodeMessageCourt
dfs/FSNamesystem/PendingDataNodeMessageCourt
n
hdfs:NameNode:FSNamesystem:MillisSinceLastLoadedEdits
dfs/FSNamesystem/MillisSinceLastLoadedEdits
n
hdfs:NameNode:FSNamesystem:BlockCapacity
dfs/FSNamesystem/BlockCapacity
n
hdfs:NameNode:FSNamesystem:StaleDataNodes
dfs/FSNamesystem/StaleDataNodes
n
hdfs:NameNode:FSNamesystem:TotalFiles
dfs/FSNamesystem/TotalFiles
n
hdfs:NameNode:JvmMetrics:MemHeapUsedM
dfs/jvm/MemHeapUsedM
n
hdfs:NameNode:JvmMetrics:MemHeapCommittedM
dfs/jvm/MemHeapCommittedM
n
hdfs:NameNode:JvmMetrics:MemHeapMaxM
dfs/jvm/MemHeapMaxM
n
hdfs:NameNode:JvmMetrics:MemMaxM
dfs/jvm/MemMaxM
n
YARN metrics
Metric
Metrics Explorer name
Enabled metrics
yarn:ResourceManager:ClusterMetrics:NumActiveNMs
yarn/ClusterMetrics/NumActiveNMs
y
yarn:ResourceManager:ClusterMetrics:NumDecommissionedNMs
yarn/ClusterMetrics/NumDecommissionedNMs
n
yarn:ResourceManager:ClusterMetrics:NumLostNMs
yarn/ClusterMetrics/NumLostNMs
n
yarn:ResourceManager:ClusterMetrics:NumUnhealthyNMs
yarn/ClusterMetrics/NumUnhealthyNMs
n
yarn:ResourceManager:ClusterMetrics:NumRebootedNMs
yarn/ClusterMetrics/NumRebootedNMs
n
yarn:ResourceManager:QueueMetrics:running_0
yarn/QueueMetrics/running_0
y
yarn:ResourceManager:QueueMetrics:running_60
yarn/QueueMetrics/running_60
y
yarn:ResourceManager:QueueMetrics:running_300
yarn/QueueMetrics/running_300
y
yarn:ResourceManager:QueueMetrics:running_1440
yarn/QueueMetrics/running_1440
y
yarn:ResourceManager:QueueMetrics:AppsSubmitted
yarn/QueueMetrics/AppsSubmitted
y
yarn:ResourceManager:QueueMetrics:AvailableMB
yarn/QueueMetrics/AvailableMB
y
yarn:ResourceManager:QueueMetrics:PendingContainers
yarn/QueueMetrics/PendingContainers
y
yarn:ResourceManager:QueueMetrics:AppsRunning
yarn/QueueMetrics/AppsRunning
n
yarn:ResourceManager:QueueMetrics:AppsPending
yarn/QueueMetrics/AppsPending
n
yarn:ResourceManager:QueueMetrics:AppsCompleted
yarn/QueueMetrics/AppsCompleted
n
yarn:ResourceManager:QueueMetrics:AppsKilled
yarn/QueueMetrics/AppsKilled
n
yarn:ResourceManager:QueueMetrics:AppsFailed
yarn/QueueMetrics/AppsFailed
n
yarn:ResourceManager:QueueMetrics:AllocatedMB
yarn/QueueMetrics/AllocatedMB
n
yarn:ResourceManager:QueueMetrics:AllocatedVCores
yarn/QueueMetrics/AllocatedVCores
n
yarn:ResourceManager:QueueMetrics:AllocatedContainers
yarn/QueueMetrics/AllocatedContainers
n
yarn:ResourceManager:QueueMetrics:AggregateContainersAllocated
yarn/QueueMetrics/AggregateContainersAllocated
n
yarn:ResourceManager:QueueMetrics:AggregateContainersReleased
yarn/QueueMetrics/AggregateContainersReleased
n
yarn:ResourceManager:QueueMetrics:AvailableVCores
yarn/QueueMetrics/AvailableVCores
n
yarn:ResourceManager:QueueMetrics:PendingMB
yarn/QueueMetrics/PendingMB
n
yarn:ResourceManager:QueueMetrics:PendingVCores
yarn/QueueMetrics/PendingVCores
n
yarn:ResourceManager:QueueMetrics:ReservedMB
yarn/QueueMetrics/ReservedMB
n
yarn:ResourceManager:QueueMetrics:ReservedVCores
yarn/QueueMetrics/ReservedVCores
n
yarn:ResourceManager:QueueMetrics:ReservedContainers
yarn/QueueMetrics/ReservedContainers
n
yarn:ResourceManager:QueueMetrics:ActiveUsers
yarn/QueueMetrics/ActiveUsers
n
yarn:ResourceManager:QueueMetrics:ActiveApplications
yarn/QueueMetrics/ActiveApplications
n
yarn:ResourceManager:QueueMetrics:FairShareMB
yarn/QueueMetrics/FairShareMB
n
yarn:ResourceManager:QueueMetrics:FairShareVCores
yarn/QueueMetrics/FairShareVCores
n
yarn:ResourceManager:QueueMetrics:MinShareMB
yarn/QueueMetrics/MinShareMB
n
yarn:ResourceManager:QueueMetrics:MinShareVCores
yarn/QueueMetrics/MinShareVCores
n
yarn:ResourceManager:QueueMetrics:MaxShareMB
yarn/QueueMetrics/MaxShareMB
n
yarn:ResourceManager:QueueMetrics:MaxShareVCores
yarn/QueueMetrics/MaxShareVCores
n
yarn:ResourceManager:JvmMetrics:MemHeapUsedM
yarn/jvm/MemHeapUsedM
n
yarn:ResourceManager:JvmMetrics:MemHeapCommittedM
yarn/jvm/MemHeapCommittedM
n
yarn:ResourceManager:JvmMetrics:MemHeapMaxM
yarn/jvm/MemHeapMaxM
n
yarn:ResourceManager:JvmMetrics:MemMaxM
yarn/jvm/MemMaxM
n
Spark metrics
Spark driver metrics
Metric
Metrics Explorer name
Enabled metrics
spark:driver:BlockManager:disk.diskSpaceUsed_MB
spark/driver/BlockManager/disk/diskSpaceUsed_MB
y
spark:driver:BlockManager:memory.maxMem_MB
spark/driver/BlockManager/memory/maxMem_MB
y
spark:driver:BlockManager:memory.memUsed_MB
spark/driver/BlockManager/memory/memUsed_MB
y
spark:driver:DAGScheduler:job.allJobs
spark/driver/DAGScheduler/job/allJobs
y
spark:driver:DAGScheduler:stage.failedStages
spark/driver/DAGScheduler/stage/failedStages
y
spark:driver:DAGScheduler:stage.waitingStages
spark/driver/DAGScheduler/stage/waitingStages
y
Spark executor metrics
Metric
Metrics Explorer name
Enabled metrics
spark:executor:executor:bytesRead
spark/executor/bytesRead
y
spark:executor:executor:bytesWritten
spark/executor/bytesWritten
y
spark:executor:executor:cpuTime
spark/executor/cpuTime
y
spark:executor:executor:diskBytesSpilled
spark/executor/diskBytesSpilled
y
spark:executor:executor:recordsRead
spark/executor/recordsRead
y
spark:executor:executor:recordsWritten
spark/executor/recordsWritten
y
spark:executor:executor:runTime
spark/executor/runTime
y
spark:executor:executor:shuffleRecordsRead
spark/executor/shuffleRecordsRead
y
spark:executor:executor:shuffleRecordsWritten
spark/executor/shuffleRecordsWritten
y
Flink metrics
Metric
Metrics Explorer name
Enabled metrics
flink:jobmanager:numRegisteredTaskManagers
flink/jobmanager/numRegisteredTaskManagers
n
flink:jobmanager:numRunningJobs
flink/jobmanager/numRunningJobs
n
flink:jobmanager:Status.JVM.ClassLoader.ClassesLoaded
flink/jobmanager/Status.JVM.ClassLoader.ClassesLoaded
n
flink:jobmanager:Status.JVM.ClassLoader.ClassesUnloaded
flink/jobmanager/Status.JVM.ClassLoader.ClassesUnloaded
n
flink:jobmanager:Status.JVM.CPU.Load
flink/jobmanager/Status.JVM.CPU.Load
n
flink:jobmanager:Status.JVM.CPU.Time
flink/jobmanager/Status.JVM.CPU.Time
y
flink:jobmanager:Status.JVM.GarbageCollector.PSMarkSweep.Count
flink/jobmanager/Status.JVM.GarbageCollector.PSMarkSweep.Count
n
flink:jobmanager:Status.JVM.GarbageCollector.PSMarkSweep.Time
flink/jobmanager/Status.JVM.GarbageCollector.PSMarkSweep.Time
n
flink:jobmanager:Status.JVM.GarbageCollector.PSScavenge.Count
flink/jobmanager/Status.JVM.GarbageCollector.PSScavenge.Count
n
flink:jobmanager:Status.JVM.GarbageCollector.PSScavenge.Time
flink/jobmanager/Status.JVM.GarbageCollector.PSScavenge.Time
n
flink:jobmanager:Status.JVM.Memory.Direct.Count
flink/jobmanager/Status.JVM.Memory.Direct.Count
y
flink:jobmanager:Status.JVM.Memory.Direct.MemoryUsed
flink/jobmanager/Status.JVM.Memory.Direct.MemoryUsed
y
flink:jobmanager:Status.JVM.Memory.Direct.TotalCapacity
flink/jobmanager/Status.JVM.Memory.Direct.TotalCapacity
y
flink:jobmanager:Status.JVM.Memory.Heap.Committed
flink/jobmanager/Status.JVM.Memory.Heap.Committed
y
flink:jobmanager:Status.JVM.Memory.Heap.Max
flink/jobmanager/Status.JVM.Memory.Heap.Max
y
flink:jobmanager:Status.JVM.Memory.Heap.Used
flink/jobmanager/Status.JVM.Memory.Heap.Used
y
flink:jobmanager:Status.JVM.Memory.Mapped.Count
flink/jobmanager/Status.JVM.Memory.Mapped.Count
y
flink:jobmanager:Status.JVM.Memory.Mapped.MemoryUsed
flink/jobmanager/Status.JVM.Memory.Mapped.MemoryUsed
y
flink:jobmanager:Status.JVM.Memory.Mapped.TotalCapacity
flink/jobmanager/Status.JVM.Memory.Mapped.TotalCapacity
y
flink:jobmanager:Status.JVM.Memory.Metaspace.Committed
flink/jobmanager/Status.JVM.Memory.Metaspace.Committed
n
flink:jobmanager:Status.JVM.Memory.Metaspace.Max
flink/jobmanager/Status.JVM.Memory.Metaspace.Max
n
flink:jobmanager:Status.JVM.Memory.Metaspace.Used
flink/jobmanager/Status.JVM.Memory.Metaspace.Used
n
flink:jobmanager:Status.JVM.Memory.NonHeap.Committed
flink/jobmanager/Status.JVM.Memory.NonHeap.Committed
n
flink:jobmanager:Status.JVM.Memory.NonHeap.Max
flink/jobmanager/Status.JVM.Memory.NonHeap.Max
n
flink:jobmanager:Status.JVM.Memory.NonHeap.Used
flink/jobmanager/Status.JVM.Memory.NonHeap.Used
n
flink:jobmanager:Status.JVM.Threads.Count
flink/jobmanager/Status.JVM.Threads.Count
n
flink:jobmanager:taskSlotsAvailable
flink/jobmanager/taskSlotsAvailable
y
flink:jobmanager:taskSlotsTotal
flink/jobmanager/taskSlotsTotal
y
flink:operator:numRecordsIn
flink/operator/numRecordsIn
n
flink:operator:numRecordsInPerSecond.count
flink/operator/numRecordsInPerSecond.count
n
flink:operator:numRecordsInPerSecond.rate
flink/operator/numRecordsInPerSecond.rate
n
flink:operator:numRecordsOut
flink/operator/numRecordsOut
n
flink:operator:numRecordsOutPerSecond.count
flink/operator/numRecordsOutPerSecond.count
n
flink:operator:numRecordsOutPerSecond.rate
flink/operator/numRecordsOutPerSecond.rate
n
flink:operator:numSplitsProcessed
flink/operator/numSplitsProcessed
n
flink:task:buffers.inPoolUsage
flink/task/buffers.inPoolUsage
n
flink:task:buffers.inputExclusiveBuffersUsage
flink/task/buffers.inputExclusiveBuffersUsage
n
flink:task:buffers.inputFloatingBuffersUsage
flink/task/buffers.inputFloatingBuffersUsage
n
flink:task:buffers.inputQueueLength
flink/task/buffers.inputQueueLength
n
flink:task:buffers.outPoolUsage
flink/task/buffers.outPoolUsage
n
flink:task:buffers.outputQueueLength
flink/task/buffers.outputQueueLength
n
flink:task:idleTimeMsPerSecond.count
flink/task/idleTimeMsPerSecond.count
n
flink:task:idleTimeMsPerSecond.rate
flink/task/idleTimeMsPerSecond.rate
n
flink:task:numBuffersInLocal
flink/task/numBuffersInLocal
n
flink:task:numBuffersInLocalPerSecond.count
flink/task/numBuffersInLocalPerSecond.count
n
flink:task:numBuffersInLocalPerSecond.rate
flink/task/numBuffersInLocalPerSecond.rate
n
flink:task:numBuffersInRemote
flink/task/numBuffersInRemote
n
flink:task:numBuffersInRemotePerSecond.count
flink/task/numBuffersInRemotePerSecond.count
n
flink:task:numBuffersInRemotePerSecond.rate
flink/task/numBuffersInRemotePerSecond.rate
n
flink:task:numBuffersOut
flink/task/numBuffersOut
n
flink:task:numBuffersOutPerSecond.count
flink/task/numBuffersOutPerSecond.count
n
flink:task:numBuffersOutPerSecond.rate
flink/task/numBuffersOutPerSecond.rate
n
flink:task:numBytesIn
flink/task/numBytesIn
n
flink:task:numBytesInLocal
flink/task/numBytesInLocal
n
flink:task:numBytesInLocalPerSecond.count
flink/task/numBytesInLocalPerSecond.count
n
flink:task:numBytesInLocalPerSecond.rate
flink/task/numBytesInLocalPerSecond.rate
n
flink:task:numBytesInPerSecond.count
flink/task/numBytesInPerSecond.count
n
flink:task:numBytesInPerSecond.rate
flink/task/numBytesInPerSecond.rate
n
flink:task:numBytesInRemote
flink/task/numBytesInRemote
n
flink:task:numBytesInRemotePerSecond.count
flink/task/numBytesInRemotePerSecond.count
n
flink:task:numBytesInRemotePerSecond.rate
flink/task/numBytesInRemotePerSecond.rate
n
flink:task:numBytesOut
flink/task/numBytesOut
n
flink:task:numBytesOutPerSecond.count
flink/task/numBytesOutPerSecond.count
n
flink:task:numBytesOutPerSecond.rate
flink/task/numBytesOutPerSecond.rate
n
flink:task:numRecordsIn
flink/task/numRecordsIn
n
flink:task:numRecordsInPerSecond.count
flink/task/numRecordsInPerSecond.count
n
flink:task:numRecordsInPerSecond.rate
flink/task/numRecordsInPerSecond.rate
n
flink:task:numRecordsOut
flink/task/numRecordsOut
n
flink:task:numRecordsOutPerSecond.count
flink/task/numRecordsOutPerSecond.count
n
flink:task:numRecordsOutPerSecond.rate
flink/task/numRecordsOutPerSecond.rate
n
flink:task:Shuffle.Netty.Input.Buffers.inPoolUsage
flink/task/Shuffle.Netty.Input.Buffers.inPoolUsage
n
flink:task:Shuffle.Netty.Input.Buffers.inputExclusiveBuffersUsage
flink/task/Shuffle.Netty.Input.Buffers.inputExclusiveBuffersUsage
n
flink:task:Shuffle.Netty.Input.Buffers.inputFloatingBuffersUsage
flink/task/Shuffle.Netty.Input.Buffers.inputFloatingBuffersUsage
n
flink:task:Shuffle.Netty.Input.Buffers.inputQueueLength
flink/task/Shuffle.Netty.Input.Buffers.inputQueueLength
n
flink:task:Shuffle.Netty.Input.numBuffersInLocal
flink/task/Shuffle.Netty.Input.numBuffersInLocal
n
flink:task:Shuffle.Netty.Input.numBuffersInLocalPerSecond.count
flink/task/Shuffle.Netty.Input.numBuffersInLocalPerSecond.count
n
flink:task:Shuffle.Netty.Input.numBuffersInLocalPerSecond.rate
flink/task/Shuffle.Netty.Input.numBuffersInLocalPerSecond.rate
n
flink:task:Shuffle.Netty.Input.numBuffersInRemote
flink/task/Shuffle.Netty.Input.numBuffersInRemote
n
flink:task:Shuffle.Netty.Input.numBuffersInRemotePerSecond.count
flink/task/Shuffle.Netty.Input.numBuffersInRemotePerSecond.count
n
flink:task:Shuffle.Netty.Input.numBuffersInRemotePerSecond.rate
flink/task/Shuffle.Netty.Input.numBuffersInRemotePerSecond.rate
n
flink:task:Shuffle.Netty.Input.numBytesInLocal
flink/task/Shuffle.Netty.Input.numBytesInLocal
n
flink:task:Shuffle.Netty.Input.numBytesInLocalPerSecond.count
flink/task/Shuffle.Netty.Input.numBytesInLocalPerSecond.count
n
flink:task:Shuffle.Netty.Input.numBytesInLocalPerSecond.rate
flink/task/Shuffle.Netty.Input.numBytesInLocalPerSecond.rate
n
flink:task:Shuffle.Netty.Input.numBytesInRemote
flink/task/Shuffle.Netty.Input.numBytesInRemote
n
flink:task:Shuffle.Netty.Input.numBytesInRemotePerSecond.count
flink/task/Shuffle.Netty.Input.numBytesInRemotePerSecond.count
n
flink:task:Shuffle.Netty.Input.numBytesInRemotePerSecond.rate
flink/task/Shuffle.Netty.Input.numBytesInRemotePerSecond.rate
n
flink:task:Shuffle.Netty.Output.Buffers.outPoolUsage
flink/task/Shuffle.Netty.Output.Buffers.outPoolUsage
n
flink:task:Shuffle.Netty.Output.Buffers.outputQueueLength
flink/task/Shuffle.Netty.Output.Buffers.outputQueueLength
n
flink:taskmanager:Status.flink.Memory.Managed.Total
flink/taskmanager/Status.flink.Memory.Managed.Total
n
flink:taskmanager:Status.flink.Memory.Managed.Used
flink/taskmanager/Status.flink.Memory.Managed.Used
n
flink:taskmanager:Status.JVM.ClassLoader.ClassesLoaded
flink/taskmanager/Status.JVM.ClassLoader.ClassesLoaded
n
flink:taskmanager:Status.JVM.ClassLoader.ClassesUnloaded
flink/taskmanager/Status.JVM.ClassLoader.ClassesUnloaded
n
flink:taskmanager:Status.JVM.CPU.Load
flink/taskmanager/Status.JVM.CPU.Load
n
flink:taskmanager:Status.JVM.CPU.Time
flink/taskmanager/Status.JVM.CPU.Time
y
flink:taskmanager:Status.JVM.GarbageCollector.PSMarkSweep.Count
flink/taskmanager/Status.JVM.GarbageCollector.PSMarkSweep.Count
n
flink:taskmanager:Status.JVM.GarbageCollector.PSMarkSweep.Time
flink/taskmanager/Status.JVM.GarbageCollector.PSMarkSweep.Time
n
flink:taskmanager:Status.JVM.GarbageCollector.PSScavenge.Count
flink/taskmanager/Status.JVM.GarbageCollector.PSScavenge.Count
n
flink:taskmanager:Status.JVM.GarbageCollector.PSScavenge.Time
flink/taskmanager/Status.JVM.GarbageCollector.PSScavenge.Time
n
flink:taskmanager:Status.JVM.Memory.Direct.Count
flink/taskmanager/Status.JVM.Memory.Direct.Count
y
flink:taskmanager:Status.JVM.Memory.Direct.MemoryUsed
flink/taskmanager/Status.JVM.Memory.Direct.MemoryUsed
y
flink:taskmanager:Status.JVM.Memory.Direct.TotalCapacity
flink/taskmanager/Status.JVM.Memory.Direct.TotalCapacity
y
flink:taskmanager:Status.JVM.Memory.Heap.Committed
flink/taskmanager/Status.JVM.Memory.Heap.Committed
y
flink:taskmanager:Status.JVM.Memory.Heap.Max
flink/taskmanager/Status.JVM.Memory.Heap.Max
y
flink:taskmanager:Status.JVM.Memory.Heap.Used
flink/taskmanager/Status.JVM.Memory.Heap.Used
y
flink:taskmanager:Status.JVM.Memory.Mapped.Count
flink/taskmanager/Status.JVM.Memory.Mapped.Count
y
flink:taskmanager:Status.JVM.Memory.Mapped.MemoryUsed
flink/taskmanager/Status.JVM.Memory.Mapped.MemoryUsed
y
flink:taskmanager:Status.JVM.Memory.Mapped.TotalCapacity
flink/taskmanager/Status.JVM.Memory.Mapped.TotalCapacity
y
flink:taskmanager:Status.JVM.Memory.Metaspace.Committed
flink/taskmanager/Status.JVM.Memory.Metaspace.Committed
n
flink:taskmanager:Status.JVM.Memory.Metaspace.Max
flink/taskmanager/Status.JVM.Memory.Metaspace.Max
n
flink:taskmanager:Status.JVM.Memory.Metaspace.Used
flink/taskmanager/Status.JVM.Memory.Metaspace.Used
n
flink:taskmanager:Status.JVM.Memory.NonHeap.Committed
flink/taskmanager/Status.JVM.Memory.NonHeap.Committed
n
flink:taskmanager:Status.JVM.Memory.NonHeap.Max
flink/taskmanager/Status.JVM.Memory.NonHeap.Max
n
flink:taskmanager:Status.JVM.Memory.NonHeap.Used
flink/taskmanager/Status.JVM.Memory.NonHeap.Used
n
flink:taskmanager:Status.JVM.Threads.Count
flink/taskmanager/Status.JVM.Threads.Count
n
flink:taskmanager:Status.Network.AvailableMemorySegments
flink/taskmanager/Status.Network.AvailableMemorySegments
n
flink:taskmanager:Status.Network.TotalMemorySegments
flink/taskmanager/Status.Network.TotalMemorySegments
n
flink:taskmanager:Status.Shuffle.Netty.AvailableMemory
flink/taskmanager/Status.Shuffle.Netty.AvailableMemory
n
flink:taskmanager:Status.Shuffle.Netty.AvailableMemorySegments
flink/taskmanager/Status.Shuffle.Netty.AvailableMemorySegments
n
flink:taskmanager:Status.Shuffle.Netty.TotalMemory
flink/taskmanager/Status.Shuffle.Netty.TotalMemory
n
flink:taskmanager:Status.Shuffle.Netty.TotalMemorySegments
flink/taskmanager/Status.Shuffle.Netty.TotalMemorySegments
n
flink:taskmanager:Status.Shuffle.Netty.UsedMemory
flink/taskmanager/Status.Shuffle.Netty.UsedMemory
n
flink:taskmanager:Status.Shuffle.Netty.UsedMemorySegments
flink/taskmanager/Status.Shuffle.Netty.UsedMemorySegments
n
Spark History Server metrics
Managed Service for Apache Spark collects the following Spark history service JVM memory metrics:
Metric
Metrics Explorer name
Enabled metrics
sparkHistoryServer:JVM:Memory:HeapMemoryUsage.committed
sparkHistoryServer/memory/CommittedHeapMemory
y
sparkHistoryServer:JVM:Memory:HeapMemoryUsage.used
sparkHistoryServer/memory/UsedHeapMemory
y
sparkHistoryServer:JVM:Memory:HeapMemoryUsage.max
sparkHistoryServer/memory/MaxHeapMemory
y
sparkHistoryServer:JVM:Memory:NonHeapMemoryUsage.committed
sparkHistoryServer/memory/CommittedNonHeapMemory
y
sparkHistoryServer:JVM:Memory:NonHeapMemoryUsage.used
sparkHistoryServer/memory/UsedNonHeapMemory
y
sparkHistoryServer:JVM:Memory:NonHeapMemoryUsage.max
sparkHistoryServer/memory/MaxNonHeapMemory
y
HiveServer 2 metrics
Metric
Metrics Explorer name
Enabled metrics
hiveserver2:JVM:Memory:HeapMemoryUsage.committed
hiveserver2/memory/CommittedHeapMemory
y
hiveserver2:JVM:Memory:HeapMemoryUsage.used
hiveserver2/memory/UsedHeapMemory
y
hiveserver2:JVM:Memory:HeapMemoryUsage.max
hiveserver2/memory/MaxHeapMemory
y
hiveserver2:JVM:Memory:NonHeapMemoryUsage.committed
hiveserver2/memory/CommittedNonHeapMemory
y
hiveserver2:JVM:Memory:NonHeapMemoryUsage.used
hiveserver2/memory/UsedNonHeapMemory
y
hiveserver2:JVM:Memory:NonHeapMemoryUsage.max
hiveserver2/memory/MaxNonHeapMemory
y
Hive Metastore metrics
Metric
Metrics Explorer name
Enabled metrics
hivemetastore:API:GetDatabase:Mean
hivemetastore/get_database/mean
y
hivemetastore:API:CreateDatabase:Mean
hivemetastore/create_database/mean
y
hivemetastore:API:DropDatabase:Mean
hivemetastore/drop_database/mean
y
hivemetastore:API:AlterDatabase:Mean
hivemetastore/alter_database/mean
y
hivemetastore:API:GetAllDatabases:Mean
hivemetastore/get_all_databases/mean
y
hivemetastore:API:CreateTable:Mean
hivemetastore/create_table/mean
y
hivemetastore:API:DropTable:Mean
hivemetastore/drop_table/mean
y
hivemetastore:API:AlterTable:Mean
hivemetastore/alter_table/mean
y
hivemetastore:API:GetTable:Mean
hivemetastore/get_table/mean
y
hivemetastore:API:GetAllTables:Mean
hivemetastore/get_all_tables/mean
y
hivemetastore:API:AddPartitionsReq:Mean
hivemetastore/add_partitions_req/mean
y
hivemetastore:API:DropPartition:Mean
hivemetastore/drop_partition/mean
y
hivemetastore:API:AlterPartition:Mean
hivemetastore/alter_partition/mean
y
hivemetastore:API:GetPartition:Mean
hivemetastore/get_partition/mean
y
hivemetastore:API:GetPartitionNames:Mean
hivemetastore/get_partition_names/mean
y
hivemetastore:API:GetPartitionsPs:Mean
hivemetastore/get_partitions_ps/mean
y
hivemetastore:API:GetPartitionsPsWithAuth:Mean
hivemetastore/get_partitions_ps_with_auth/mean
y
Hive Metastore metric measures
Note: By default, mean value metrics are collected for the previously listed
Hive Metastore APIs. You can also enable the collection of the
following statistical measures. A sample metric and its Metric Explorer name
are shown for each statistical measure.
Statistical measure
Sample metric
Sample metric name
Max
hivemetastore:API:GetDatabase:Max
hivemetastore/get_database/max
Min
hivemetastore:API:GetDatabase:Min
hivemetastore/get_database/min
Mean
hivemetastore:API:GetDatabase:Mean
hivemetastore/get_database/mean
Count
hivemetastore:API:GetDatabase:Count
hivemetastore/get_database/count
50thPercentile
hivemetastore:API:GetDatabase:50thPercentile
hivemetastore/get_database/median
75thPercentile
hivemetastore:API:GetDatabase:75thPercentile
hivemetastore/get_database/75th_percentile
95thPercentile
hivemetastore:API:GetDatabase:95thPercentile
hivemetastore/get_database/95th_percentile
98thPercentile
hivemetastore:API:GetDatabase:98thPercentile
hivemetastore/get_database/98th_percentile
99thPercentile
hivemetastore:API:GetDatabase:99thPercentile
hivemetastore/get_database/99th_percentile
999thPercentile
hivemetastore:API:GetDatabase:999thPercentile
hivemetastore/get_database/999th_percentile
StdDev
hivemetastore:API:GetDatabase:StdDev
hivemetastore/get_database/stddev
FifteenMinuteRate
hivemetastore:API:GetDatabase:FifteenMinuteRate
hivemetastore/get_database/15min_rate
FiveMinuteRate
hivemetastore:API:GetDatabase:FiveMinuteRate
hivemetastore/get_database/5min_rate
OneMinuteRate
hivemetastore:API:GetDatabase:OneMinuteRate
hivemetastore/get_database/1min_rate
MeanRate
hivemetastore:API:GetDatabase:MeanRate
hivemetastore/get_database/mean_rate
Managed Service for Apache Spark monitoring agent metrics
Managed Service for Apache Spark collects the following
Managed Service for Apache Spark monitoring agent metrics
when you set --metric-sources=monitoring-agent-defaults .
These metrics are published with the agent.googleapis.com prefix.
Note: The monitoring-agent-defaults setting is
not available for
2.2 image version
clusters. You can install the
Ops Agent ,
which collects
syslog logs and host metrics .
CPU
agent.googleapis.com/cpu/load_15m
agent.googleapis.com/cpu/load_1m
agent.googleapis.com/cpu/load_5m
agent.googleapis.com/cpu/usage_time*
agent.googleapis.com/cpu/utilization*
Note: cpu/utilization and cpu/usage_time are mutually exclusive metrics. By default, Managed Service for Apache Spark collects cpu/utilization . See Configuring reported CPU metrics to enable cpu/usage_time .
Disk
agent.googleapis.com/disk/bytes_used
agent.googleapis.com/disk/io_time
agent.googleapis.com/disk/merged_operations
agent.googleapis.com/disk/operation_count
agent.googleapis.com/disk/operation_time
agent.googleapis.com/disk/pending_operations
agent.googleapis.com/disk/percent_used
agent.googleapis.com/disk/read_bytes_count
Swap
agent.googleapis.com/swap/bytes_used
agent.googleapis.com/swap/io
agent.googleapis.com/swap/percent_used
Memory
agent.googleapis.com/memory/bytes_used
agent.googleapis.com/memory/percent_used
Processes - Some attributes follow unique quota policies .
agent.googleapis.com/processes/count_by_state
agent.googleapis.com/processes/cpu_time
agent.googleapis.com/processes/disk/read_bytes_count
agent.googleapis.com/processes/disk/write_bytes_count
agent.googleapis.com/processes/fork_count
agent.googleapis.com/processes/rss_usage
agent.googleapis.com/processes/vm_usage
Interface
agent.googleapis.com/interface/errors
agent.googleapis.com/interface/packets
agent.googleapis.com/interface/traffic
Network
agent.googleapis.com/network/tcp_connections
Build a Monitoring dashboard
You can build a Monitoring dashboard that displays
charts of selected Managed Service for Apache Spark metrics.
Select + CREATE DASHBOARD from the
Monitoring Dashboards Overview page.
Provide a name for the dashboard, then click Add Chart in the upper-right
menu to open the Add Chart window. Select "Cloud Managed Service for Apache Spark Cluster" as the resource type.
Select one or more metrics and metric and chart properties. Then Save the chart.
You can add additional charts to your dashboard. After you Save the
dashboard, its title appears in the Monitoring Dashboards Overview page.
Dashboard charts can be viewed, updated, and deleted from the dashboard display
page.
Whats next
See the Cloud Monitoring documentation
Learn how to Create Managed Service for Apache Spark metric alerts
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
