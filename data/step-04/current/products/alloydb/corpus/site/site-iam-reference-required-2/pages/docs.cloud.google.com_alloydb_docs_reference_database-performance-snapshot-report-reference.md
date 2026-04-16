---
title: "Database performance snapshot report reference \_|\_ AlloyDB for PostgreSQL\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference
knowledge_key: corpus
source_id: site-iam-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/iam-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference
  title: "Database performance snapshot report reference \_|\_ AlloyDB for PostgreSQL\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Reference
Send feedback
Database performance snapshot report reference
Stay organized with collections
Save and categorize content based on your preferences.
This document describes wait events
in AlloyDB for PostgreSQL performance snapshot reports. For more
information, see
Optimize database performance by comparing database snapshots .
Wait events in snapshot reports
The following table describes wait events that are supported by
AlloyDB performance snapshot reports. You can
use wait events to help you identify performance issues and bottlenecks in your
database.
Wait event name
Event class
Description
ColumnarCacheInvalidatedBlockBuild
IPC
Builds the shared invalidated blocks and waits until all workers
finish building.
ColumnarCacheInvalidatedBlockCopy
IPC
Copies the shared invalidated blocks into private memory and waits
until all workers finish copying.
ColumnarCacheBloomFilterConsolidate
IPC
Consolidates the bloom filter into the bloom filter created in the
shared memory, and waits until all workers finish consolidating.
AdaptiveVacuumFreezeXid
IPC
Waits until vacuum advances the oldest frozen XID or until the
timeout expires. After the timeout expires, this wait event throws an
error telling you to wait
for autovacuum or to manually perform the vacuum.
AdaptiveVacuumNewXidDelay
Timeout
New transaction ID delay when the oldest transaction ID age indicates
that new transactions are to be throttled.
CommitWaitFlush
I/O
Transaction commits wait for the flush pointer advance before
returning to the client.
XlogAdvanceWALBuffer
I/O
Transaction waits for available space in the Write-Ahead Logging
(WAL) buffer.
AioWaitSegmentSwitch
I/O
WAL writer waits for WAL segment file switch in asynchronous I/O
mode.
WalFlushDueToBufferReplacement
I/O
WAL flush due to buffer replacement.
WalFlushOnBufEvictUnderExtend
I/O
WAL flush on buffer eviction under lock:extend .
WalFlushWhileTruncatingCLOG
I/O
WAL flush while truncating the commit log ( CLOG ).
WalFlushWhileTruncatingMultiXactData
I/O
WAL flush while truncating MultiXact Data.
WalFlushDueToSLRUPageReplacement
I/O
WAL flush due to simple least-recently used (SLRU) page
replacement.
WalFlushByDDL
I/O
WAL flush by Data Definition Language (DDL).
WalFlushDuringCheckPoint
I/O
WAL flush during checkpoint.
A checkpoint is the point in the write-ahead log sequence
during which all data files are updated to reflect the information in
the log. For more information, see Checkpoint .
WalFlushBySmgrOperations
I/O
WAL flush by storage manager operations.
WalFlushWhileReservingReplicationSlot
I/O
WAL flush while reserving a replication slot.
WalFlushWhileSwitchingWALSegment
I/O
WAL flush while switching WAL segments.
WalFlushByRelmapFile
I/O
WAL flush by the relation mapping file.
VacuumDelayRead
I/O
Adaptive vacuum read delay.
VacuumDelayWrite
I/O
Adaptive vacuum write delay.
UltraFastCachePRead
I/O
Latency of a read from the AlloyDB UltraFast
Cache.
UltraFastCachePWrite
I/O
Latency of a write to the AlloyDB UltraFast Cache
WalBatchWrite
I/O
Wait time for a minimal batch size to write WAL.
StorageAwaitMayWrite
I/O
Time spent waiting for AlloyDB storage to process logs
and allow more writes.
StorageAdvanceFlushPosition
I/O
Time spent waiting to advance the flush position of
AlloyDB storage.
StorageDataFilePrefetch
I/O
Latency of prefetch reads from AlloyDB storage.
StorageInProgressDataFileRead
I/O
Appears in pg_stat_activity while a storage read is in
progress.
StorageDataFileReadUncached
I/O
Latency of a read from AlloyDB storage.
StorageQueryRelations
I/O
The time it takes to read relation sizes from storage.
StorageLocalFileInit
I/O
The time it takes to read files data from storage and write to local
files during startup.
StorageWaitWalLogParsing
I/O
The time it takes to parse logs for AlloyDB
storage.
StorageWaitWalBufferSpace
I/O
Time spent waiting for space to free up in the AlloyDB
storage buffer.
StorageReadDir
I/O
The time it takes to read a directory's contents from one storage
shard.
What's next
Optimize database performance by comparing database snapshots .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
