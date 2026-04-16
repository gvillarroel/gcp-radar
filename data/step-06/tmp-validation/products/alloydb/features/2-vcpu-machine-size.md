---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.201Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "2 vCPU machine size"
feature_slug: "2-vcpu-machine-size"
latest_feature_date: "2022-07-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
  - "https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots"
  - "https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters"
keywords:
  - "size"
  - "machine"
  - "vcpu"
  - "primary"
  - "supports"
  - "pool"
  - "read"
---

# 2 vCPU machine size

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB supports primary and read-pool instance machine sizes as small as 2 vCPUs with 16 GB of RAM.

## Extended Definition

AlloyDB supports primary and read-pool instance machine sizes as small as 2 vCPUs with 16 GB of RAM.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- [https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters](https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters)

## Supporting Pages

### "Hybrid search function parameters \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters](https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters)
- Source ID: `site-api-reference`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- To send your request, save the following request body in a file named instance request.json . { "instance type": "PRIMARY", "machine config": { "cpu count": " vCPU COUNT " } } Make the following replacement: VCPU COUNT : the number of visible CPU cores on the instance that you want to create.
- The following is a code snippet for creating a cluster and a primary instance based on the AlloyDB instance full example: resource "google alloydb instance" "default" { cluster = google alloydb cluster.default.name instance id = "alloydb-instance" instance type = "PRIMARY" machine config { cpu count = 2 } depends on = [google service networking connection.vpc connection] } resource "google alloydb cluster" "cluster abc" { cluster id = "alloydb-cluster" location = "us-central1" network config { network = google compute network.default.id } database version = "POSTGRES 16" initial user { password = "alloydb-cluster" } } data "google project" "project" {} resource "google compute network" "default" { name = "alloydb-network" } resource "google compute global address" "private ip alloc" { name = "alloydb-cluster" address type = "INTERNAL" purpose = "VPC PEERING" prefix length = 16 network = google compute network.default.id } resource "google service networking connection" "vpc connection" { network = google compute network.default.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip alloc.name] } This example creates an N2 instance.
- The preceding example creates an N2 instance with the following specifications: 2: 2 vCPUs, 16 GB RAM 4: 4 vCPUs, 32 GB RAM 8: 8 vCPUs, 64 GB RAM 16: 16 vCPUs, 128 GB RAM 32: 32 vCPUs, 256 GB RAM 64: 64 vCPUs, 512 GB RAM 96: 96 vCPUs, 768 GB RAM 128: 128 vCPUs, 864 GB RAM The following example shows how to create an instance for a machine type: machine config: { machine type : MACHINE TYPE , }, Replace MACHINE TYPE with a supported machine type such as n2-highmem-4 , c4-highmem-4-lssd , or c4a-highmem-4-lssd .
- Create a primary instance To create a primary instance, use the gcloud alloydb instances create command. gcloud alloydb instances create INSTANCE ID \ --instance-type = PRIMARY \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --allowed-psc-projects = ALLOWED PROJECT LIST Replace the following: INSTANCE ID : the ID of the instance you are creating.

### "Optimize database performance by comparing performance snapshots \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- Source ID: `site-docs-reference-2`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- For read pool instances, ensure the node size is the same as or greater than the primary instance.
- For read pool instances, ensure the node size is the same as or greater than the primary instance.
- Example report The following is an abridged example of a generated performance snapshot report: Example performance snapshot report $ psql -d postgres -U alloydbsuperuser postgres=> select perfsnap.report(22, 23); report -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- PGSNAP DB Report for: Snapshot details -------------------------------------- Host i841-sr-primary-2a34f46e-06bc Release 14.12 Startup Time 2024-10-08 03:23:15+00 Snap Id Snap Time ------------ ---------- ------------------------ Begin Snap: 22 24.10.2024 04:33:56 (UTC) Automatic snapshot End Snap: 23 25.10.2024 04:38:56 (UTC) Automatic snapshot Elapsed: 1 day 00:04:59.979321 Database Cache sizes Shared Buffers: 31 GB Block Size: 8192 Effective Cache Size: 25 GB WAL Buffers: 16384 Host CPU %User %Nice %System %Idle %WIO %IRQ %SIRQ %Steal %Guest ------- ------- ------- ------- ------- ------- ------- ------- ------- 1.07 0.22 0.91 97.40 0.09 0.00 0.31 0.00 0.00 Host Memory Total Memory: 63 GB Available Memory: 11 GB Free Memory: 726 MB Buffers Memory: 3706 MB Load profile (in bytes) Per Second Per Transaction ------------ --------------- Redo size: 63083.64 4489.93 Logical reads: 1961.21 139.59 ...
- For read pool instances experiencing high replication lag, consider adjusting the following: max standby streaming delay : tune this to balance query cancellation frequency versus replication lag. alloydb.promote cancel to terminate : ensure this is on to forcefully terminate backends that are unresponsive to cancellation and blocking recovery. google storage.log replay throttle read transactions : use this to prioritize replication catch-up over read query latency when lag exceeds thresholds.

