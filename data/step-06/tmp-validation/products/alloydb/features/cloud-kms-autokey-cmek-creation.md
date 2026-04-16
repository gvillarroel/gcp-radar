---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.113Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Cloud KMS Autokey CMEK creation"
feature_slug: "cloud-kms-autokey-cmek-creation"
latest_feature_date: "2025-03-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
keywords:
  - "autokey"
  - "automatically"
  - "cmek"
  - "creation"
  - "create"
---

# Cloud KMS Autokey CMEK creation

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB can automatically create customer-managed encryption keys by using Cloud KMS Autokey to protect resources.

## Extended Definition

AlloyDB can automatically create customer-managed encryption keys by using Cloud KMS Autokey to protect resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index](https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)

## Supporting Pages

### Create a ScaNN index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index](https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create an automatically tuned ScaNN index Preview — Auto index creation This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- With the auto index feature, you can simplify index creation to automatically create indexes that are optimized for search performance or balanced index build times and search performance.
- To force index generation, complete the following steps: Set the scann.allow blocked operations creation session-level parameter to true on the database: SET scann . allow blocked operations = true ; Assign the SUPERUSER privilege to the user that runs these queries on the database: CREATE USER USER NAME WITH SUPERUSER PASSWORD PASSWORD ; Replace the following: USER NAME : the name of the user you want to grant the privilege to.
- To view the indexing progress, use the pg stat progress create index view: SELECT FROM pg stat progress create index ; The phase column shows the current state of your index creation.

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- If you want to create secondary clusters that automatically track and replicate data changes made in their source clusters, see About cross-region replication .
- The following is a code snippet for creating a cluster and a primary instance based on the AlloyDB instance full example: resource "google alloydb instance" "default" { cluster = google alloydb cluster.default.name instance id = "alloydb-instance" instance type = "PRIMARY" machine config { cpu count = 2 } depends on = [google service networking connection.vpc connection] } resource "google alloydb cluster" "cluster abc" { cluster id = "alloydb-cluster" location = "us-central1" network config { network = google compute network.default.id } database version = "POSTGRES 16" initial user { password = "alloydb-cluster" } } data "google project" "project" {} resource "google compute network" "default" { name = "alloydb-network" } resource "google compute global address" "private ip alloc" { name = "alloydb-cluster" address type = "INTERNAL" purpose = "VPC PEERING" prefix length = 16 network = google compute network.default.id } resource "google service networking connection" "vpc connection" { network = google compute network.default.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip alloc.name] } This example creates an N2 instance.
- You can use curl to execute the request, as shown in the following example: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" https://alloydb.googleapis.com/v1alpha/projects/ PROJECT ID /locations/ LOCATION ID /clusters/ CLUSTER ID /instances?instance id= INSTANCE ID -d @instance request.json Clone an active cluster To create a clone of an active cluster, containing a copy of all the source cluster's data and running in the same region, perform a point-in-time recovery on that cluster .
- The preceding example creates an N2 instance with the following specifications: 2: 2 vCPUs, 16 GB RAM 4: 4 vCPUs, 32 GB RAM 8: 8 vCPUs, 64 GB RAM 16: 16 vCPUs, 128 GB RAM 32: 32 vCPUs, 256 GB RAM 64: 64 vCPUs, 512 GB RAM 96: 96 vCPUs, 768 GB RAM 128: 128 vCPUs, 864 GB RAM The following example shows how to create an instance for a machine type: machine config: { machine type : MACHINE TYPE , }, Replace MACHINE TYPE with a supported machine type such as n2-highmem-4 , c4-highmem-4-lssd , or c4a-highmem-4-lssd .

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Automatic and adaptive database features The fully PostgreSQL-compatible database engine that powers every AlloyDB node has several features that continuously analyze the structure and frequency of the queries that your instances handle, using this information to suggest schema improvements or automatically apply optimizations: An index advisor helps you find opportunities to optimize your database schema using new indexes based on your usage patterns.
- Quickstart: Create and connect to a database Perform a vector search Migration overview Connection overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information, see Create a ScaNN index . google ml integration : provides access to the AI functions, which enables ML model invocation from AlloyDB for tasks such as generating embeddings, semantic ranking, AI-based filters and joins, and text generation and summarization.
- Security and encryption: protect data at rest using Google's default encryption or customer-managed encryption keys (CMEK), and manage access using integrated Google Cloud Identity and Access Management (IAM).

