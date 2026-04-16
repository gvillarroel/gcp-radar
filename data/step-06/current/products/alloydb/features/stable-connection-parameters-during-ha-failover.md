---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.514Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Stable connection parameters during HA failover"
feature_slug: "stable-connection-parameters-during-ha-failover"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/high-availability"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest"
keywords:
  - "stable"
  - "connection"
  - "parameters"
  - "during"
  - "ha"
  - "failover"
  - "high"
  - "availability"
---

# Stable connection parameters during HA failover

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

High availability AlloyDB Omni clusters can fail over without requiring connection parameter changes.

## Extended Definition

High availability AlloyDB Omni clusters can fail over without requiring connection parameter changes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/high-availability](https://docs.cloud.google.com/alloydb/docs/high-availability)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/reference/rest](https://docs.cloud.google.com/alloydb/docs/reference/rest)

## Supporting Pages

### "AlloyDB high availability overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/high-availability](https://docs.cloud.google.com/alloydb/docs/high-availability)
- Source ID: `site-docs-reference-2`
- Final score: 169
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback AlloyDB high availability overview Stay organized with collections Save and categorize content based on your preferences.
- Primary and secondary instances An AlloyDB primary instance configured with high availability includes an active node and a standby node, which are located in different zones.
- WAL replication from the primary instance pauses temporarily during failover and resumes automatically after the primary instance is recovered.
- This document provides an overview of the high availability (HA) configuration for AlloyDB for PostgreSQL instances.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- High availability By default, an AlloyDB cluster offers availability (HA) through its primary instance's redundant nodes, located in two different zones, with automatic failover.
- High availability: ensure service continuity through redundant nodes located in different zones, with automatic failover between them.
- Enterprise-grade mission-critical workloads: deploy applications that require the highest levels of performance, reliability, and availability, supported by a disaggregated compute and storage architecture that spans multiple availability zones.
- Adding read pool instances containing at least two nodes creates further load-balanced, multi-zonal, high-availability access points to your data.

### AlloyDB API \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest](https://docs.cloud.google.com/alloydb/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 107
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1beta.projects.locations.clusters.instances Methods create POST /v1beta/{parent=projects/ /locations/ /clusters/ }/instances Creates a new Instance in a given project and location. createsecondary POST /v1beta/{parent=projects/ /locations/ /clusters/ }/instances:createsecondary Creates a new SECONDARY Instance in a given project and location. delete DELETE /v1beta/{name=projects/ /locations/ /clusters/ /instances/ } Deletes a single Instance. failover POST /v1beta/{name=projects/ /locations/ /clusters/ /instances/ }:failover Forces a Failover for a highly available instance. get GET /v1beta/{name=projects/ /locations/ /clusters/ /instances/ } Gets details of a single Instance. getConnectionInfo GET /v1beta/{parent=projects/ /locations/ /clusters/ /instances/ }/connectionInfo Get instance metadata used for a connection. injectFault POST /v1beta/{name=projects/ /locations/ /clusters/ /instances/ }:injectFault Injects fault in an instance. list GET /v1beta/{parent=projects/ /locations/ /clusters/ }/instances Lists Instances in a given project and location. patch PATCH /v1beta/{instance.name=projects/ /locations/ /clusters/ /instances/ } Updates the parameters of a single Instance. restart POST /v1beta/{name=projects/ /locations/ /clusters/ /instances/ }:restart Restart an Instance in a cluster.
- REST Resource: v1.projects.locations.clusters.instances Methods create POST /v1/{parent=projects/ /locations/ /clusters/ }/instances Creates a new Instance in a given project and location. createsecondary POST /v1/{parent=projects/ /locations/ /clusters/ }/instances:createsecondary Creates a new SECONDARY Instance in a given project and location. delete DELETE /v1/{name=projects/ /locations/ /clusters/ /instances/ } Deletes a single Instance. failover POST /v1/{name=projects/ /locations/ /clusters/ /instances/ }:failover Forces a Failover for a highly available instance. get GET /v1/{name=projects/ /locations/ /clusters/ /instances/ } Gets details of a single Instance. getConnectionInfo GET /v1/{parent=projects/ /locations/ /clusters/ /instances/ }/connectionInfo Get instance metadata used for a connection. injectFault POST /v1/{name=projects/ /locations/ /clusters/ /instances/ }:injectFault Injects fault in an instance. list GET /v1/{parent=projects/ /locations/ /clusters/ }/instances Lists Instances in a given project and location. patch PATCH /v1/{instance.name=projects/ /locations/ /clusters/ /instances/ } Updates the parameters of a single Instance. restart POST /v1/{name=projects/ /locations/ /clusters/ /instances/ }:restart Restart an Instance in a cluster.
- REST Resource: v1beta.projects.locations.clusters Methods create POST /v1beta/{parent=projects/ /locations/ }/clusters Creates a new Cluster in a given project and location. createsecondary POST /v1beta/{parent=projects/ /locations/ }/clusters:createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete DELETE /v1beta/{name=projects/ /locations/ /clusters/ } Deletes a single Cluster. export POST /v1beta/{name=projects/ /locations/ /clusters/ }:export Exports data from the cluster. get GET /v1beta/{name=projects/ /locations/ /clusters/ } Gets details of a single Cluster. import POST /v1beta/{name=projects/ /locations/ /clusters/ }:import Imports data to the cluster. list GET /v1beta/{parent=projects/ /locations/ }/clusters Lists Clusters in a given project and location. patch PATCH /v1beta/{cluster.name=projects/ /locations/ /clusters/ } Updates the parameters of a single Cluster. promote POST /v1beta/{name=projects/ /locations/ /clusters/ }:promote Promotes a SECONDARY cluster. restore POST /v1beta/{parent=projects/ /locations/ }/clusters:restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL POST /v1beta/{parent=projects/ /locations/ }/clusters:restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover POST /v1beta/{name=projects/ /locations/ /clusters/ }:switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade PATCH /v1beta/{name=projects/ /locations/ /clusters/ }:upgrade Upgrades a single Cluster.
- REST Resource: v1.projects.locations.clusters Methods create POST /v1/{parent=projects/ /locations/ }/clusters Creates a new Cluster in a given project and location. createsecondary POST /v1/{parent=projects/ /locations/ }/clusters:createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete DELETE /v1/{name=projects/ /locations/ /clusters/ } Deletes a single Cluster. export POST /v1/{name=projects/ /locations/ /clusters/ }:export Exports data from the cluster. get GET /v1/{name=projects/ /locations/ /clusters/ } Gets details of a single Cluster. import POST /v1/{name=projects/ /locations/ /clusters/ }:import Imports data to the cluster. list GET /v1/{parent=projects/ /locations/ }/clusters Lists Clusters in a given project and location. patch PATCH /v1/{cluster.name=projects/ /locations/ /clusters/ } Updates the parameters of a single Cluster. promote POST /v1/{name=projects/ /locations/ /clusters/ }:promote Promotes a SECONDARY cluster. restore POST /v1/{parent=projects/ /locations/ }/clusters:restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL POST /v1/{parent=projects/ /locations/ }/clusters:restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover POST /v1/{name=projects/ /locations/ /clusters/ }:switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade PATCH /v1/{name=projects/ /locations/ /clusters/ }:upgrade Upgrades a single Cluster.

