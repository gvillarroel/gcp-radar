---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.006Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Automatic node sizing on cluster creation"
feature_slug: "automatic-node-sizing-on-cluster-creation"
latest_feature_date: "2023-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/creating-instance"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views"
keywords:
  - "automatic"
  - "sizing"
  - "gcloud"
  - "creation"
  - "creating"
  - "cluster"
  - "node"
---

# Automatic node sizing on cluster creation

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Creating a Cloud Bigtable cluster with gcloud now supports omitting node count so Bigtable automatically determines nodes based on storage utilization.

## Extended Definition

Creating a Cloud Bigtable cluster with gcloud now supports omitting node count so Bigtable automatically determines nodes based on storage utilization.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/creating-instance](https://docs.cloud.google.com/bigtable/docs/creating-instance)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)

## Supporting Pages

### Create an instance \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/creating-instance](https://docs.cloud.google.com/bigtable/docs/creating-instance)
- Source ID: `site-docs-reference-2`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You might need to update the default app profile or create custom app profiles . gcloud Use the bigtable instances create command to create an instance: gcloud bigtable instances create INSTANCE ID \ -- display - name = DISPLAY NAME \ [ -- cluster - storage - type = CLUSTER STORAGE TYPE ] \ [ -- cluster - config = id = CLUSTER ID , zone = CLUSTER ZONE , \ nodes = NODES ] \ [ -- cluster - config = id = CLUSTER ID , zone = CLUSTER ZONE , \ autoscaling - min - nodes = AUTOSCALING MIN NODES , \ autoscaling - max - nodes = AUTOSCALING MAX NODES , \ autoscaling - cpu - target = AUTOSCALING CPU TARGET , \ autoscaling - storage - target = AUTOSCALING STORAGE TARGET , \ kms - key = KMS KEY ], \ [ node - scaling - factor = NODE SCALING FACTOR ] Replace the following: INSTANCE ID : The permanent identifier for the instance.
- For more information, see Set up authentication for a local development environment . instance id = "my-instance" cluster id = "my-cluster" cluster location = "us-east1-b" puts "Creating a PRODUCTION Instance" job = bigtable . create instance ( instance id , display name : "Sample production instance" , labels : { "env" : "production" }, type : :PRODUCTION # Optional as default type is :PRODUCTION ) do clusters clusters . add cluster id , cluster location , nodes : 3 , storage type : :SSD end job . wait until done! instance = job . instance puts "Created Instance: #{ instance . instance id } " What's next Find out how Bigtable uses instances, clusters, and nodes .
- For more information, see Set up authentication for a local development environment . cluster = instance . cluster ( cluster id , location id = location id , serve nodes = serve nodes , default storage type = storage type , ) if not instance . exists (): print ( " \n Creating an instance" ) Create instance with given options operation = instance . create ( clusters = [ cluster ]) Ensure the operation completes. operation . result ( timeout = 480 ) print ( " \n Created instance: {} " . format ( instance id )) Ruby To learn how to install and use the client library for Bigtable, see Bigtable client libraries .
- If no value is set, Bigtable allocates nodes to the cluster automatically based on your data footprint and optimizes for 50% storage utilization.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- The following diagram shows, in simplified terms, a key range rebalancing and a cluster resizing: Figure 2 : Rebalancing spreads processing over multiple nodes while resizing adds processing nodes.
- If the node that's responsible for the requested key range is overloaded or temporarily unavailable in a cluster, this profile type provides automatic failover.
- The Resizing image shows the state of the Bigtable cluster after you add a node.
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.

### Continuous materialized views \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- Source ID: `site-docs-reference-2`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For large tables, you can temporarily add more nodes to your cluster to accelerate view creation.
- Use counters instead of continuous materialized views for the following: Aggregations that don't require filters and don't need to be across rows If you need to immediately read your writes from the cluster they are written to Use continuous materialized views when you want to do the following: Generate a different key for queries against your aggregations See changes to the base table reflected in your aggregations Automatically combine data across multiple rows Use a combination of counters and continuous materialized views for use cases like when you want to do the following: Capture fresh metrics in an aggregate cell but keep historical rollups of those metrics Combine metrics in a continuous materialized view Resource provisioning and performance Ongoing processing for continuous materialized views occurs as a low-priority background job.
- For example, assume that your source table contains rows with keys that follow the pattern advertiser id#region#ad id and one column family, data , that includes a spend usd column qualifier with numeric data representing ad spend: Row key data:spend usd adv1#us-east#ad1 100 adv1#us-west#ad2 150 adv2#us-east#ad3 200 If you use the following query to define a continuous materialized view of this table, the initial population of 1 TB of data completes in approximately three hours on a 175-node cluster.
- SELECT SPLIT ( key , "#" ) [ SAFE OFFSET ( 0 ) ] AS advertiser id , count ( ) AS count , sum ( cast ( cast ( data [ 'spend usd' ] as string ) as int64 )) as sum spend FROM $0 GROUP BY advertiser id Since Bigtable scales linearly, a 175-node cluster processes 2 TB of data in approximately six hours and 10 TB in approximately 30 hours, assuming that the data has a similar shape.

