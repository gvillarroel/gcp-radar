---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.060Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable Console instance utilization graphs"
feature_slug: "cloud-bigtable-console-instance-utilization-graphs"
latest_feature_date: "2017-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/creating-instance"
  - "https://docs.cloud.google.com/bigtable/docs/autoscaling"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
keywords:
  - "showing"
  - "graphs"
  - "utilization"
  - "provides"
  - "instance"
  - "console"
---

# Cloud Bigtable Console instance utilization graphs

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

The Cloud Bigtable Console now provides instance graphs showing cluster node counts and CPU utilization, including average cluster CPU and busiest-node CPU usage.

## Extended Definition

The Cloud Bigtable Console now provides instance graphs showing cluster node counts and CPU utilization, including average cluster CPU and busiest-node CPU usage.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/creating-instance](https://docs.cloud.google.com/bigtable/docs/creating-instance)
- [https://docs.cloud.google.com/bigtable/docs/autoscaling](https://docs.cloud.google.com/bigtable/docs/autoscaling)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)

## Supporting Pages

### Create an instance \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/creating-instance](https://docs.cloud.google.com/bigtable/docs/creating-instance)
- Source ID: `site-docs-reference-2`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . // Creates a Production Instance with the ID "ssd-instance" // with cluster id "ssd-cluster", 3 nodes and location us-central1-f const { BigtableInstanceAdminClient } = require ( ' @google-cloud/bigtable ' ). v2 ; const instanceAdminClient = new BigtableInstanceAdminClient (); const projectId = await instanceAdminClient . getProjectId (); const instanceOptions = { parent : projects/ ${ projectId } , instanceId : instanceID , instance : { displayName : instanceID , labels : { 'prod-label' : 'prod-label' }, type : ' PRODUCTION ' , }, clusters : { [ clusterID ] : { location : projects/ ${ projectId } /locations/us-central1-f , serveNodes : 3 , defaultStorageType : ' SSD ' , }, }, }; // Create production instance with given options const [ prodInstance , operation ] = await instanceAdminClient . createInstance ( instanceOptions ); await operation . promise (); console . log ( Created Instance: ${ prodInstance . name } ); PHP To learn how to install and use the client library for Bigtable, see Bigtable client libraries .
- For Autoscaling , enter values for the following: Minimum number of nodes Maximum number of nodes CPU utilization target Storage utilization target Optional: To protect your instance with CMEK instead of the default Google-managed encryption, complete the following: Click Show encryption options .
- Create an instance To create a Bigtable instance: Console In the Google Cloud console, go to the Create instance page.
- DISPLAY NAME : A human-readable name that identifies the instance in the Google Cloud console.

### Autoscaling \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/autoscaling](https://docs.cloud.google.com/bigtable/docs/autoscaling)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following metrics are displayed in graphs on the cluster overview page in the Google Cloud console.
- The following table helps you understand how autoscaling recommends a node count based on both the SSD usage and the infrequent access usage: Scenario Storage utilization target Utilization percentage SSD usage Infrequent access usage Combined SSD and infrequent access storage Recommended node count SSD usage is within the target range and there is no infrequent access usage.
- Percentage SSD HDD 80% 4 TB or 4,096 GiB 12.8 TB or 13,107 GiB 70% 3.5 TB or 3,584 GiB 11.2 TB or 11,468 GiB 60% 3 TB or 3,072 GiB 9.6 TB or 9,830 GiB 50% 2.5 TB or 2,560 GiB 8 TB or 8,192 GiB Tiered storage and autoscaling Tiered storage ( Preview ) doesn't impact SSD autoscaling described in the Determine the storage utilization target section of this document.
- Bigtable autoscaling determines the number of nodes required, based on the following dimensions: CPU utilization target Storage utilization target Minimum number of nodes Maximum number of nodes Each scaling dimension generates a recommended node count, and Bigtable automatically uses the highest one.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- The Bigtable Google Cloud console page comes with prebuilt dashboards for tracking throughput and utilization metrics at the instance, cluster, and table levels.
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.
- Cluster size considerations When you size a Bigtable instance to prepare for migrating a Cassandra workload, there are considerations when you compare single-data center Cassandra clusters to single-cluster Bigtable instances, and Cassandra multiple-data center clusters to multi-cluster Bigtable instances.
- SSD The SSD node's capacity of 5 TB, which is preferred for most workloads, provides higher storage density in comparison with the recommended configuration for Cassandra machines, which have a practical maximum storage density of less than 2 TB for each node.

