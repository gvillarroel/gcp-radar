# Memorystore for Redis Cluster

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-05T13:11:37.057Z`
Product status: `PASS`

## Summary

- Feature cards: 34
- Step 07 failed features: 0
- Step 07 warned features: 1
- Corpus health: healthy
- IAM mapping: 0 explicit, 0 derived, 34 unknown

## Service Card

- Service card ID: `memorystore-for-redis-cluster:service`
- Latest feature date: 2025-08-29
- Official source links: 36
- Security capabilities: 20

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| simulated maintenance events | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification) |
| maintenance logs | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/audit-logs)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas) |
| System insights dashboard | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/audit-logs)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification) |
| node healthy metric | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster) |
| cross-region replication in Google Cloud console | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/connect-cluster-instance) |
| backups | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/list_backups) |
| Database Center recommendations | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/quotas) |
| maintenance windows | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas) |
| node type changes after creation | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification) |
| vector search | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-vector-search)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview) |
| europe-north2 region availability | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview) |
| multi-VPC networking | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-multiple-vpc-networking)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances) |
| Automated backups | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/backups)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster) |
| On-demand backups | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption) |
| Customer-managed encryption keys (CMEK) | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances) |
| Append-only file (AOF) persistence | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-aof-persistence)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster) |
| Redis database (RDB) persistence | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-aof-persistence)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances) |
| Cross-region replication | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster) |
| Database Center integration | MEDIUM | WARN | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/list_clusters) |
| 1- | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/manage-iam-auth)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview) |
| 2- | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/manage-iam-auth)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview) |
| and 4-shard instance shapes | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas) |
| Node-level monitoring metrics | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices) |
| Multiple VPC networks | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-multiple-vpc-networking)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/networking) |
| Custom constraints | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster) |
| Instance configurations | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview) |
| Vector store | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-vector-search)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview) |
| Single-zone instances | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas) |
| Deletion protection | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/list_clusters) |
| AOF persistence | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-aof-persistence)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances) |
| Node types | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-scaling-instance-capacity)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances) |
| RDB persistence | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-aof-persistence)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices) |
| Committed use discounts | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/connect-cluster-instance)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview) |
| IAM authentication | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/memorystore/docs/cluster/about-iam-auth)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/access-control)<br>[source](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection) |
