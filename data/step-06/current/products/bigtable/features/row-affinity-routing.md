---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.991Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Row-affinity routing"
feature_slug: "row-affinity-routing"
latest_feature_date: "2024-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.MultiClusterRoutingPolicy"
keywords:
  - "affinity"
  - "routing"
  - "route"
  - "automatically"
  - "supports"
---

# Row-affinity routing

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Bigtable now supports row-affinity routing to automatically route all single-row requests for a given row to the same cluster.

## Extended Definition

Bigtable now supports row-affinity routing to automatically route all single-row requests for a given row to the same cluster.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles](https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.MultiClusterRoutingPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.MultiClusterRoutingPolicy)

## Supporting Pages

### Create and configure app profiles \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles](https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles)
- Source ID: `site-docs-reference-2`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Update your application's code for connecting to Bigtable so that it uses the new app profile. gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list Use the bigtable app-profiles create command to create an app profile: gcloud bigtable app-profiles create APP PROFILE ID \ --instance= INSTANCE ID \ [--description= DESCRIPTION ] \ [--force] \ [--route-any] \ [--restrict-to= CLUSTER ID 1 , CLUSTER ID 2 ...] \ [--route-to= CLUSTER ID ] \ [--transactional-writes] \ [--priority=PRIORITY] \ [--row-affinity] Provide the following: APP PROFILE ID : The permanent identifier for the app profile.
- Use the bigtable app-profiles update command to update the app profile's settings: gcloud bigtable app-profiles update APP PROFILE ID \ --instance= INSTANCE ID \ [--description= DESCRIPTION ] \ [--force] \ [--route-any] \ [--restrict-to= CLUSTER ID 1 , CLUSTER ID 2 ...] [--route-to= CLUSTER ID ] \ [--transactional-writes] \ [--row-affinity] Provide the following: APP PROFILE ID : The permanent identifier for the app profile.
- The command accepts the following optional flags: --description= DESCRIPTION : A detailed description of the app profile. --force : Ignore warnings about potential issues and conflicts with other app profiles. --route-any : Enable multi-cluster routing to route requests to any available cluster.
- The command accepts the following optional flags: --description= DESCRIPTION : A detailed description of the app profile. --force : Ignore warnings about potential issues and conflicts with other app profiles. --route-any : Enable multi-cluster routing to route requests to any available cluster.

### "Class AppProfile.MultiClusterRoutingPolicy (2.74.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.MultiClusterRoutingPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.MultiClusterRoutingPolicy)
- Source ID: `site-java-reference`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- MultiClusterRoutingPolicy withRowAffinity ( String [] clusterIds ) Creates a new instance of MultiClusterRoutingPolicy with row affinity enabled and specified cluster ids to route to.
- MultiClusterRoutingPolicy withRowAffinity ( Set<String> clusterIds ) Creates a new instance of MultiClusterRoutingPolicy with specified cluster ids to route to.
- Parameter Name Description clusterIds String [] Returns Type Description AppProfile.MultiClusterRoutingPolicy withRowAffinity(Set<String> clusterIds) public static AppProfile .
- Parameter Name Description clusterIds Set < String > Returns Type Description AppProfile.MultiClusterRoutingPolicy withRowAffinity() public static AppProfile .

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.
- The drawback of a single-cluster approach is that in a failover, either the application must be able to retry by using an alternative application profile identifier, or you must manually perform the failover of impacted, single-cluster routing profiles.
- The following diagram shows how Bigtable physically separates the processing nodes from the storage layer: Figure 1 : Clients communicate through a routing layer to processing nodes, and then these nodes communicate with the storage layer.
- When the source table changes, Cassandra updates the materialized view automatically. continuous materialized view : a fully-managed, pre-computed result of a SQL query that is incrementally and automatically updated from a source table.

