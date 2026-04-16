---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.045Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable Key Visualizer beta availability"
feature_slug: "cloud-bigtable-key-visualizer-beta-availability"
latest_feature_date: "2018-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/managing-tables"
keywords:
  - "analyzing"
  - "visualizer"
  - "availability"
  - "available"
  - "beta"
  - "became"
---

# Cloud Bigtable Key Visualizer beta availability

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Key Visualizer for Cloud Bigtable became available in beta for analyzing usage and troubleshooting performance.

## Extended Definition

Key Visualizer for Cloud Bigtable became available in beta for analyzing usage and troubleshooting performance.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles](https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/managing-tables](https://docs.cloud.google.com/bigtable/docs/managing-tables)

## Supporting Pages

### Create and configure app profiles \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles](https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles)
- Source ID: `site-docs-reference-2`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Click Save . gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list If you don't know the app profile's ID, use the bigtable app-profiles list command to view a list of the instance's app profiles: gcloud bigtable app-profiles list --instance= INSTANCE ID Replace INSTANCE ID with the permanent identifier for the instance. (Optional) Use the bigtable app-profiles describe command to view the app profile's settings: gcloud bigtable app-profiles describe APP PROFILE ID \ --instance= INSTANCE ID Use the gcloud beta bigtable app-profiles update command to convert the app profile: gcloud bigtable app-profiles update APP PROFILE ID \ --instance= INSTANCE ID \ --standard \ [--route-any] \ [--restrict-to= CLUSTER ID 1 , CLUSTER ID 2 ...] [--route-to= CLUSTER ID ] \ [--transactional-writes] Provide the following: APP PROFILE ID : The permanent identifier for the app profile.
- Update your application's code for connecting to Bigtable so that it uses the new app profile. gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list Use the gcloud beta bigtable app-profiles create command to create an app profile: gcloud bigtable app-profiles create APP PROFILE ID \ --instance= INSTANCE ID \ --data-boost \ --data-boost-compute-billing-owner=HOST PAYS \ --route-to= CLUSTER ID Provide the following: APP PROFILE ID : The permanent identifier for the app profile.
- Use the gcloud beta bigtable app-profiles update command to convert an app profile from standard to Data Boost: gcloud bigtable app-profiles update APP PROFILE ID \ --instance= INSTANCE ID \ --data-boost \ --data-boost-compute-billing-owner=HOST PAYS \ --route-to= CLUSTER ID Provide the following: APP PROFILE ID : The permanent identifier for the app profile.
- The command accepts the following optional flags: --description= DESCRIPTION : A detailed description of the app profile. --force : Ignore warnings about potential issues and conflicts with other app profiles. --route-any : Enable multi-cluster routing to route requests to any available cluster.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- When comparing the two databases, you should understand how each database physically stores data differently in the following aspects: The data distribution strategy The number of cell versions available The storage disk type The data durability and replication mechanism Data distribution In Cassandra, a consistent hash of the primary key's partition columns is the recommended method of determining data distribution across the various SSTables served by cluster nodes.
- Cassandra provides fault tolerance through availability levels that are correlated with the tunable consistency level, allowing a cluster to serve clients while one or more nodes are impaired.
- If the node that's responsible for the requested key range is overloaded or temporarily unavailable in a cluster, this profile type provides automatic failover.
- Because individual cells are versioned by timestamp, no writes are lost, and each cluster serves the cells that have the most current timestamps available.

### Create and manage tables \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/managing-tables](https://docs.cloud.google.com/bigtable/docs/managing-tables)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Click Save . gcloud To disable infrequent access storage, use the gcloud beta bigtable instances tables update command with the --clear-tiered-storage-config flag: gcloud beta bigtable instances tables update TABLE ID \ --instance = INSTANCE ID \ --project = PROJECT ID \ --clear-tiered-storage-config Replace the following: TABLE ID : the ID for the table that you want to update INSTANCE ID : the ID of the instance PROJECT ID : the project that contains the table that you want to update What's next Learn how to import and export data into and from your table.
- The number must be 30 or greater. gcloud To modify the age threshold of infrequent access storage, run the gcloud beta bigtable instances tables update command with the --tiered-storage-infrequent-access-older-than flag: gcloud beta bigtable instances tables update TABLE ID \ --instance = INSTANCE ID \ --project = PROJECT ID \ --tiered-storage-infrequent-access-older-than = AGE THRESHOLD Replace the following: TABLE ID : the ID for the table that you want to update.
- Example: 32d or 32d12h . gcloud beta bigtable instances tables create TABLE ID \ --instance = INSTANCE ID \ --project = PROJECT ID \ --tiered-storage-infrequent-access-older-than = AGE THRESHOLD cbt Use the following command, replacing TABLE NAME with the name of your table.
- The following limitations apply: The ability to undelete a table is available for approximately seven days from the time of table deletion.

